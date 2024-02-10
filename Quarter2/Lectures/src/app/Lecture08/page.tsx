'use client'

import Link from "next/link";
import { useRouter } from "next/navigation";

export default () =>
{
  //Let's say we want to redirect a user to another page if they are logged in,
  //we can't use Link because it doesnt provide a conditional statement, so we use Router.

  let loggedIn = false;
  const router = useRouter();
  const HandleRedirect = () => 
  {
    if(loggedIn)
      router.push('/somewhere')
    else
      router.push('somewhereelse');
  }
  return (
    <main>
      <div>
        <Link href="/somewhere">Somewhere(No conditions)</Link>
      </div>
      <button onClick={HandleRedirect}>Somewhere(With conditions)</button>
    </main>
  );
}

//To practice API fetching we can use POSTMAN and get request at      simple-books-api.glitch.me/books
//For specific book we can request at simple-books-api.glitch.me/books/:bookid
//For example simple-books-api.glitch.me/books/3
