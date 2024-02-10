import Link from "next/link";
import Books from "./Books/page";
import { Suspense } from "react";

export default () =>
{
  //A middleware.ts file will always be in src and outside of the app directory
  return (
    <>
      <Link href={"/Lecture11/Dashboard"}>Click me to go to Dashboard but after Middleware.</Link>
      <Link href={"/Lecture11/Login"} className = "pl-10">Click me to go to Login but after Middleware.</Link>

      <div className="mt-10">
        <div className="underline text-4xl font-bold">
          Suspense
        </div>
        <div className="text-xl">
          Streaming
        </div>
        <div>
          Books
          <Suspense fallback={<div>Loading....</div>}>
            <Books/>
          </Suspense>
        </div>
      </div>
    </>
  );
}