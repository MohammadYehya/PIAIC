import { url } from "@/constants";

interface IBook
{
    id: number,
    name: string,
    available: boolean,
    type: string
}

const Books = async () => 
{
    const response = await fetch(`${url}/books`, {cache: "no-cache"})
    const books : IBook[] = await response.json() ;
    return (
        <div>
            <div>
                {
                    books.map((book) => 
                    {
                        return (
                            <div>
                                <h2 >{book.name}</h2>
                            </div>
                        );
                    })
                }
            </div>
        </div>
    );
}

export default Books;