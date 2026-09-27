import {Play} from "lucide-react";
import {events as publishedEvents, monuments as publishedPlaces, sources, type HistoryEvent} from "./heritage";
import {historyContent} from "./history-content";
import type {Place} from "./library";

export function HistoryView({place,events,onTour}:{place:Place;events:HistoryEvent[];onTour:()=>void}){
  const sections=historyContent[place.id]||[];
  const baseline=publishedPlaces.find(item=>item.id===place.id);
  const personalNotes=baseline&&place.history!==baseline.history;
  return <section className="history">
    <div className="history-article">
      <span className="eyebrow">A PLACE ACROSS CENTURIES</span>
      <h2>{place.name}: the story</h2>
      <p className="history-lede">{place.summary}</p>
      <dl className="history-facts"><div><dt>Location</dt><dd>{place.region}</dd></div><div><dt>Period</dt><dd>{place.era}</dd></div><div><dt>Patronage</dt><dd>{place.dynasty}</dd></div></dl>
      {sections.map((section,index)=><section className="history-chapter" key={section.heading}>
        <span className="history-chapter-number">{String(index+1).padStart(2,"0")}</span>
        <h3>{section.heading}</h3>
        {section.paragraphs.map(paragraph=><p key={paragraph}>{paragraph}</p>)}
        <p className="history-citation">Based on: {section.source}</p>
      </section>)}
      {personalNotes&&<section className="history-chapter"><h3>Your collection notes</h3><p>{place.history}</p><p>{place.damage}</p></section>}
      <button className="outline" onClick={onTour}><Play size={16}/> View the 3D camera tour</button>
    </div>
    <aside className="history-events" aria-label="Historical chronology">
      <span className="eyebrow">CHRONOLOGY</span>
      <h3>Key moments</h3>
      {events.map(event=>{
        const source=sources.find(item=>item.monument===place.id&&item.url===event.source_url);
        return <article key={event.event_id}><span className="eyebrow">{event.year_range} / {event.evidence_type}</span><h4>{event.actor}</h4><p>{event.description}</p><small>Source: {source?.title||"Contributor reference"}</small></article>;
      })}
      <p className="history-method">A date can describe a period rather than an exact year. Inferred and disputed entries are marked so that uncertainty remains visible.</p>
    </aside>
  </section>;
}

export function SourceRegister({placeId}:{placeId:string}){
  const register=sources.filter(source=>source.monument===placeId);
  const timeline=publishedEvents[placeId]||[];
  return <section className="sources">
    <span className="eyebrow">RESEARCH NOTES</span>
    <h2>How this story was assembled</h2>
    <p>Historical claims are summarised in the article. This register identifies the public records used and the limits of the 3D interpretation without requiring you to leave the site.</p>
    <div className="source-register">{register.map((source,index)=><article key={source.url}>
      <span className="source-number">{String(index+1).padStart(2,"0")}</span>
      <div><h3>{source.title}</h3><p>{source.note}</p><small>Used for {timeline.filter(event=>event.source_url===source.url).length} chronology {timeline.filter(event=>event.source_url===source.url).length===1?"entry":"entries"}.</small></div>
    </article>)}</div>
    <p className="source-disclosure">The 3D model is an educational interpretation, not a photogrammetric scan, measured architectural survey or verified reconstruction of missing fabric. The depicted site edge is approximate.</p>
  </section>;
}
