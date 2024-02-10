import Link from "next/link";
export default () =>
{
  return (
    <div>
      <h1>Hello NextJS</h1>
      <Link href = '../Lecture01/about'>About</Link>
      <Link href = '../Lecture01/links'>Links</Link>
    </div>
  );
}