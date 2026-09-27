-- Read-only owner audit for the Supabase SQL Editor.
-- One JSON result; no user records, credentials or changes.
select jsonb_build_object(
 'tables', (select coalesce(jsonb_agg(to_jsonb(t)), '[]'::jsonb) from (
   select n.nspname as schema_name,c.relname as table_name,
          c.relrowsecurity as rls_enabled,c.relforcerowsecurity as force_rls
   from pg_class c join pg_namespace n on n.oid=c.relnamespace
   where (n.nspname='public' and c.relname in ('profiles','user_libraries'))
      or (n.nspname='storage' and c.relname='objects')
 ) t),
 'policies', (select coalesce(jsonb_agg(to_jsonb(p)), '[]'::jsonb) from (
   select schemaname,tablename,policyname,permissive,roles,cmd,qual,with_check
   from pg_policies
   where (schemaname='public' and tablename in ('profiles','user_libraries'))
      or (schemaname='storage' and tablename='objects')
   order by schemaname,tablename,policyname
 ) p),
 'grants', (select coalesce(jsonb_agg(to_jsonb(g)), '[]'::jsonb) from (
   select table_schema,table_name,grantee,privilege_type
   from information_schema.role_table_grants
   where grantee in ('anon','authenticated')
     and ((table_schema='public' and table_name in ('profiles','user_libraries'))
       or (table_schema='storage' and table_name='objects'))
 ) g),
 'media_bucket', (select coalesce(jsonb_agg(to_jsonb(b)), '[]'::jsonb) from (
   select id,public,file_size_limit,allowed_mime_types
   from storage.buckets where id='heritage-media'
 ) b),
 'triggers', (select coalesce(jsonb_agg(to_jsonb(t)), '[]'::jsonb) from (
   select event_object_schema,event_object_table,trigger_name,action_timing,
          event_manipulation,action_statement
   from information_schema.triggers
   where event_object_schema='public'
     and event_object_table in ('profiles','user_libraries')
 ) t)
) as permission_audit;
