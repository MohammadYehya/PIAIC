export default async () =>
{
  const response = await fetch("http://localhost:3000/Lecture10/api/hello");
  const response2 = await fetch("http://localhost:3000/Lecture10/api/getSomething");
  let msg = await response.json();
  let msg2 = await response2.json();

  return (
    <>
      <p>Response of /api/hello</p>
      {JSON.stringify(msg)}
      <p className="mt-10">Response of /api/getSomething</p>
      {JSON.stringify(msg2)}
    </>
  );
}