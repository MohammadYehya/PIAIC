import { url } from "@/constants"

interface Iparams
{
    params:{
        id:string
    }
}
interface IBook
{
    id: number,
    name: string,
    author: string,
    type: string,
    price: number,
    'current-stock': number,
    available: boolean,
}

export default async ({params}: Iparams) => 
{
    const response = await fetch(`${url}/books/${params.id}`);
    const data : IBook = await response.json();
    return (
        <div>
            <h1 className="text-5xl font-semibold">Book Details</h1>
            <p>Name: {data.name}.</p>
            <p>Author: {data.author}</p>
            <p>Type: {data.type}</p>
            <p>Price: {data.price}</p>
            <p>Current Stock: {data["current-stock"]}</p>
            <p>Available: {data.available?"Yes":"No"}</p>
        </div>
    );
}