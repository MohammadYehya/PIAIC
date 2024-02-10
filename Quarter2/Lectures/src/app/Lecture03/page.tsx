//Rendering THoery

// DOM Manipulation / Hydration -> Client Component

//Events are required to be handles in Client Components


//Tailwind CSS
import Image from 'next/image';  
export default () =>
{
  return (
    <div className='mb-40'>
      <h1 className = "text-blue-500 text-9xl shadow-sm shadow-red-700 text-center">Hello</h1>

      {/* Using normal CSS */}
      <Image src = '/cover.bmp' alt = 'Cover Photo' width={100} height={100}/>

      {/* Using Tailwind */}
      <Image src = '/cover.bmp' alt = 'Cover Photo' width={100} height={100}      className = 'w-full h-96'/>

      <h1 className = 'text-3xl font-bold mt-5 px-10'>Server-Side Rendering</h1>
      <p className = 'mt-5 text-center px-10'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ratione, suscipit laborum. Sed ipsum atque, fugiat nihil repudiandae minima ad. Laboriosam, hic laudantium iusto saepe doloremque odio nesciunt harum quo reicien dis.</p>
      <button className = 'bg-red-500 text-white mx-4 p-4'>Click Me!</button>
    </div>
  );
}

// unsplash.com, neonardo -> Uncopyrighted Images