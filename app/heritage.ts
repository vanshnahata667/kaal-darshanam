export type HistoryEvent={event_id:string;monument_id:string;year_range:string;actor:string;description:string;evidence_type:"documented"|"inferred"|"disputed";source_url:string};
export const monuments = [
  {
    "id": "shanti-stupa",
    "name": "Shanti Stupa",
    "region": "LEH, LADAKH",
    "era": "1991 CE",
    "dynasty": "Peace Pagoda movement",
    "image": "/heritage/shanti-stupa.jpg",
    "originalImage": "https://thumb.wikimedia.org/wikipedia/commons/thumb/4/47/Shanti_Stupa_in_Leh.jpg/1280px-Shanti_Stupa_in_Leh.jpg",
    "alt": "White-domed Shanti Stupa overlooking Leh and the Ladakh mountains",
    "credit": "Goutam1962 - CC BY-SA 4.0",
    "imageSource": "https://commons.wikimedia.org/wiki/File:Shanti_Stupa_in_Leh.jpg",
    "source": "https://leh.nic.in/tourist-place/shanti-stupa/",
    "summary": "A white peace pagoda on a hill above Leh, with two levels of Buddhist imagery.",
    "history": "Built in 1991 by Japanese Buddhist monk Gyomyo Nakamura as part of the Peace Pagoda mission, Shanti Stupa contains Buddha relics enshrined by the 14th Dalai Lama. The two-level monument includes a central Buddha image and reliefs illustrating episodes from the Buddha’s life.",
    "damage": "This is a standing modern religious landmark, not an ancient ruin. The model shows a simplified present-day dome, terraces and finial. No hypothetical destruction or lost historical tower is asserted."
  },
  {
    "id": "konark",
    "name": "Konark Temple",
    "region": "KONARK, ODISHA",
    "era": "13th century CE",
    "dynasty": "Eastern Ganga dynasty",
    "image": "/heritage/konark.jpg",
    "originalImage": "https://thumb.wikimedia.org/wikipedia/commons/thumb/6/6e/Sun_Temple_at_Konark.jpg/1280px-Sun_Temple_at_Konark.jpg",
    "alt": "The surviving assembly hall of Konark Sun Temple with its sculpted stone platform",
    "credit": "Mayank Choudhary · CC BY-SA 3.0",
    "imageSource": "https://commons.wikimedia.org/wiki/File:Sun_Temple_at_Konark.jpg",
    "source": "https://www.rd.odisha.gov.in/en/odisha-tourism/important-tourist-pointskonark",
    "summary": "A temple conceived as Surya’s stone chariot, with carved wheels and a monumental assembly hall.",
    "history": "Konark was commissioned by Narasimhadeva I of the Eastern Ganga dynasty in the thirteenth century. Its chariot imagery links the temple to Surya, the sun god. The surviving jagamohana, sculptured platform and roofless dance hall help explain its architectural arrangement.",
    "damage": "The main sanctuary tower is lost, while the assembly hall survives. The precise sequence and causes of collapse are not settled by the sources used here. The intact tower in this viewer is a hypothesis, not a surveyed reconstruction."
  },
  {
    "id": "nalanda",
    "name": "Nalanda",
    "region": "NALANDA, BIHAR",
    "era": "5th–12th century CE",
    "dynasty": "Gupta, Harsha and Pala patronage",
    "image": "/heritage/nalanda.jpg",
    "originalImage": "https://upload.wikimedia.org/wikipedia/commons/c/c9/Nalanda_University_ruins.JPG",
    "alt": "Brick archaeological remains of ancient Nalanda Mahavihara",
    "credit": "Mrityunjay.nalanda - CC BY-SA 3.0",
    "imageSource": "https://commons.wikimedia.org/wiki/File:Nalanda_University_ruins.JPG",
    "source": "https://nalanda.nic.in/en/history/",
    "summary": "Brick monasteries and temples from a residential Buddhist centre of learning.",
    "history": "Nalanda flourished under Gupta patronage and later rulers, including Harsha. Its monastic community sustained scholarship and exchanges across Asia. The entry concerns the ancient archaeological remains, not the modern university campus.",
    "damage": "Excavated brick walls, cells and temple terraces reveal successive building phases. ASI excavated and consolidated the site in 1915–1937 and 1974–1982. Roofs and upper storeys in the intact view are conjectural; dramatic casualty and library-fire claims are not treated as verified."
  },
  {
    "id": "khajuraho",
    "name": "Kandariya Mahadev Temple",
    "region": "KHAJURAHO, MADHYA PRADESH",
    "era": "c. 1025–1050 CE",
    "dynasty": "Chandella dynasty",
    "image": "/heritage/khajuraho.jpg",
    "originalImage": "https://thumb.wikimedia.org/wikipedia/commons/thumb/f/f1/0121821_Kandariya_Mahadeva_temple%2C_Khajurajo_001.jpg/1280px-0121821_Kandariya_Mahadeva_temple%2C_Khajurajo_001.jpg",
    "alt": "Kandariya Mahadeva Temple at Khajuraho, with its clustered stone spires",
    "credit": "Ms Sarah Welch · CC0 1.0",
    "imageSource": "https://commons.wikimedia.org/wiki/File:0121821_Kandariya_Mahadeva_temple,_Khajurajo_001.jpg",
    "source": "https://www.mptourism.com/kandariya-mahadeva-temple-in-khajuraho.html",
    "summary": "A Shiva temple whose clustered spires rise above a richly carved sandstone platform.",
    "history": "MP Tourism dates Kandariya Mahadeva to approximately 1025–1050 CE in the Chandella period. Dedicated to Shiva, it belongs to Khajuraho’s western group. Its rising sequence of halls and clustered subsidiary spires culminates in a tall sanctuary tower.",
    "damage": "The temple’s main architectural form survives. This entry does not invent a destruction event. The 3D model simplifies the present building; its decorative carving and proportions are interpretive."
  }
];
export const sources = [
  {
    "monument": "konark",
    "url": "https://www.rd.odisha.gov.in/en/odisha-tourism/important-tourist-pointskonark",
    "title": "Government of Odisha - Konark",
    "note": "Supports the 13th-century attribution to Narasimhadeva I and the temple's dedication to Surya. It is not a dimensional survey or proof of the sanctuary tower's exact original form."
  },
  {
    "monument": "khajuraho",
    "url": "https://www.mptourism.com/kandariya-mahadeva-temple-in-khajuraho.html",
    "title": "Madhya Pradesh Tourism - Kandariya Mahadeva",
    "note": "Supports the approximate 1025-1050 CE dating, Shiva dedication and the standing temple's architectural and sculptural character. It does not validate the proportions of our digital mesh."
  },
  {
    "monument": "nalanda",
    "url": "https://nalanda.nic.in/en/history/",
    "title": "District Nalanda - History",
    "note": "Describes Nalanda as a Buddhist mahavihara, its Gupta and later patronage, long period of learning and gradual change. It does not establish a single event as the complete explanation for decline."
  },
  {
    "monument": "shanti-stupa",
    "url": "https://leh.nic.in/tourist-place/shanti-stupa/",
    "title": "District Leh - Shanti Stupa",
    "note": "Records the 1991 construction by Gyomyo Nakamura, relics, two-level imagery and living devotional use. The model's site edge and detailed geometry are not surveyed by this account."
  },
  {
    "monument": "konark",
    "url": "https://odishatourism.gov.in/content/tourism/en/discover/attractions/temples-monuments/konark.html",
    "title": "Odisha Tourism - Surviving architecture",
    "note": "Describes the chariot imagery, 24 wheels, seven horses, surviving jagamohana and roofless Natya Mandap. Its page gives conflicting 12th- and 13th-century labels, so the construction date is taken from the government account above."
  },
  {
    "monument": "nalanda",
    "url": "https://www.pib.gov.in/newsite/PrintRelease.aspx?lang=2&reg=48&relid=147142",
    "title": "Press Information Bureau - ASI excavation history",
    "note": "Government summary of ASI excavation and consolidation in 1915-1937 and 1974-1982. It supports the archaeological history, not speculative roofs or casualty narratives."
  },
  {
    "monument": "nalanda",
    "url": "https://www.pib.gov.in/newsite/PrintRelease.aspx?lang=2&reg=48&relid=93006",
    "title": "Press Information Bureau - Excavation in Nalanda University",
    "note": "Lists eleven Buddhist monasteries, five brick temples, shrines and votive stupas exposed in the 1915-1937 excavation phase, plus later finds. These counts do not describe the full ancient campus."
  },
  {
    "monument": "khajuraho",
    "url": "https://www.mptourism.com/pdf/Discovering-MP-Final-Book.pdf",
    "title": "Madhya Pradesh Tourism - Discovering Madhya Pradesh",
    "note": "The state tourism guide describes Kandariya's rising sequence of towers and the makara torana at the entrance. It is an architectural visitor guide, not a measured site plan."
  }
];
export const events:Record<string,HistoryEvent[]> = {
  "shanti-stupa": [
    {
      "event_id": "shanti-stupa-0",
      "monument_id": "shanti-stupa",
      "year_range": "1991",
      "actor": "Peace Pagoda mission",
      "description": "Gyomyo Nakamura builds the hilltop peace pagoda at Leh.",
      "evidence_type": "documented",
      "source_url": "https://leh.nic.in/tourist-place/shanti-stupa/"
    },
    {
      "event_id": "shanti-stupa-1",
      "monument_id": "shanti-stupa",
      "year_range": "Consecration",
      "actor": "14th Dalai Lama",
      "description": "Relics at the base are enshrined by the Dalai Lama; the district account does not separately date this ceremony.",
      "evidence_type": "documented",
      "source_url": "https://leh.nic.in/tourist-place/shanti-stupa/"
    },
    {
      "event_id": "shanti-stupa-2",
      "monument_id": "shanti-stupa",
      "year_range": "Present",
      "actor": "Buddhist devotion",
      "description": "The two-level monument contains Buddhist images and narrative reliefs.",
      "evidence_type": "documented",
      "source_url": "https://leh.nic.in/tourist-place/shanti-stupa/"
    },
    {
      "event_id": "shanti-stupa-3",
      "monument_id": "shanti-stupa",
      "year_range": "Present view",
      "actor": "Living heritage",
      "description": "A standing monument, represented here by a simplified architectural model.",
      "evidence_type": "inferred",
      "source_url": "https://leh.nic.in/tourist-place/shanti-stupa/"
    }
  ],
  "konark": [
    {
      "event_id": "konark-0",
      "monument_id": "konark",
      "year_range": "13th century",
      "actor": "Narasimhadeva I",
      "description": "The Eastern Ganga ruler commissions a temple dedicated to Surya.",
      "evidence_type": "documented",
      "source_url": "https://www.rd.odisha.gov.in/en/odisha-tourism/important-tourist-pointskonark"
    },
    {
      "event_id": "konark-1",
      "monument_id": "konark",
      "year_range": "Original composition",
      "actor": "Kalinga architecture",
      "description": "The stone chariot composition includes sculpted wheels, the sanctuary and assembly hall.",
      "evidence_type": "documented",
      "source_url": "https://odishatourism.gov.in/content/tourism/en/discover/attractions/temples-monuments/konark.html"
    },
    {
      "event_id": "konark-2",
      "monument_id": "konark",
      "year_range": "Loss over time",
      "actor": "Uncertain sequence",
      "description": "The sanctuary tower no longer stands; no single cause or date of collapse is established here.",
      "evidence_type": "disputed",
      "source_url": "https://odishatourism.gov.in/content/tourism/en/discover/attractions/temples-monuments/konark.html"
    },
    {
      "event_id": "konark-3",
      "monument_id": "konark",
      "year_range": "Present",
      "actor": "Surviving structures",
      "description": "The assembly hall survives, with the roofless dance hall and carved platform.",
      "evidence_type": "documented",
      "source_url": "https://odishatourism.gov.in/content/tourism/en/discover/attractions/temples-monuments/konark.html"
    }
  ],
  "nalanda": [
    {
      "event_id": "nalanda-0",
      "monument_id": "nalanda",
      "year_range": "5th–6th century",
      "actor": "Gupta patronage",
      "description": "The Buddhist monastic centre flourishes under Gupta rulers.",
      "evidence_type": "documented",
      "source_url": "https://nalanda.nic.in/en/history/"
    },
    {
      "event_id": "nalanda-1",
      "monument_id": "nalanda",
      "year_range": "7th century onwards",
      "actor": "Harsha and later patrons",
      "description": "Continued patronage supports scholarship and the growth of the monastic establishment.",
      "evidence_type": "documented",
      "source_url": "https://nalanda.nic.in/en/history/"
    },
    {
      "event_id": "nalanda-2",
      "monument_id": "nalanda",
      "year_range": "1915–1937",
      "actor": "Archaeological Survey of India",
      "description": "Systematic excavation and consolidation reveal the archaeological complex.",
      "evidence_type": "documented",
      "source_url": "https://www.pib.gov.in/newsite/PrintRelease.aspx?lang=2&reg=48&relid=147142"
    },
    {
      "event_id": "nalanda-3",
      "monument_id": "nalanda",
      "year_range": "1974–1982; present",
      "actor": "Excavation and conservation",
      "description": "Further ASI excavations contribute to the brick remains visible today.",
      "evidence_type": "documented",
      "source_url": "https://www.pib.gov.in/newsite/PrintRelease.aspx?lang=2&reg=48&relid=147142"
    }
  ],
  "khajuraho": [
    {
      "event_id": "khajuraho-0",
      "monument_id": "khajuraho",
      "year_range": "c. 1025–1050",
      "actor": "Chandella builders",
      "description": "Kandariya Mahadeva is built as a temple dedicated to Shiva.",
      "evidence_type": "documented",
      "source_url": "https://www.mptourism.com/kandariya-mahadeva-temple-in-khajuraho.html"
    },
    {
      "event_id": "khajuraho-1",
      "monument_id": "khajuraho",
      "year_range": "11th-century design",
      "actor": "Nagara architecture",
      "description": "Successive halls and subsidiary spires lead toward the main sanctuary tower.",
      "evidence_type": "documented",
      "source_url": "https://www.mptourism.com/kandariya-mahadeva-temple-in-khajuraho.html"
    },
    {
      "event_id": "khajuraho-2",
      "monument_id": "khajuraho",
      "year_range": "Surviving fabric",
      "actor": "Stone sculpture",
      "description": "Carved architectural surfaces remain a defining feature of the temple.",
      "evidence_type": "documented",
      "source_url": "https://www.mptourism.com/kandariya-mahadeva-temple-in-khajuraho.html"
    },
    {
      "event_id": "khajuraho-3",
      "monument_id": "khajuraho",
      "year_range": "Present",
      "actor": "Western group, Khajuraho",
      "description": "The standing temple is presented without an invented destruction sequence.",
      "evidence_type": "documented",
      "source_url": "https://www.mptourism.com/kandariya-mahadeva-temple-in-khajuraho.html"
    }
  ]
};
