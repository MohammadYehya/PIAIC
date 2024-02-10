import { url } from "@/constants";
import Link from "next/link";

interface IBook
{
    id: number,
    name: string,
    available: boolean,
    type: string
}


export default async () => 
{
    const response = await fetch(`${url}/books`)
    //Status 200 means request was successfull
    //Status 404 means request not found

    //The problem of the fetch command is that it hardcodes the fetched values into a html file when we do 
    //npm run build, therefore increasing cache optimization and decreasing latency, but also removing the 
    //ability to get fresh/new data from API. To invert this effect, we can pass a second parameter which is
    //an object an can be done as follows:
    /*
        const response = await fetch(`${url}/books`, {cache: "no-cache"})
    */
   //The difference is between Dynamic Server-Side Rendering & Static Server-Side Rendering
    const books : IBook[] = await response.json() ;
    return (
        <div>
            <h1 className="text-5xl font-semibold text-gray-950">Books</h1>
            <div>
                {
                    books.map((book) => 
                    {
                        return (
                            <Link key={book.id} href={`/Lecture08/Books/${book.id}`}>
                                <div>
                                    <h2 >{book.name}</h2>
                                </div>
                            </Link>
                            //Key is used for website optimization and is always unique
                            //A key element should always be in the parent-most element
                        );
                    })
                }
            </div>
        </div>
    );
}