create policy "Enable insert for authenticated users only"
on "public"."posts"
as permissive
for insert
to authenticated
with check (true);


create policy "Enable read access for all users"
on "public"."posts"
as permissive
for select
to public
using (true);



