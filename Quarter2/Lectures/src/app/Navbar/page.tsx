import Image from "next/image";
import logo from "../../../public/next.svg"

export default () =>
{
    return (
        <div>
            <div className="flex flex-wrap justify-between bg-gray-300 items-center mt-2 mx-2 px-8 shadow-xl rounded-full fixed raltive w-[99%]">
                <Image src = {logo} alt = "logo" className="w-60 h-14"/>
                <ul className="flex text-xl gap-x-9">
                    <li>Home</li>
                    <li>About</li>
                    <li>Contact</li>
                </ul>
            </div>
            <div className="p-10">
            </div>
        </div> 
    );
};