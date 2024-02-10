const users = ["ali", "mohammad", "hamza"];
export default () =>
{
  return (
    <div className="bg-gray-400">
      <ul className="flex">
      {
        users.map((item, i) => <li key={i} className="bg-gray-100 py-3 px-5 border flex-grow">{item}</li>)
      }
      </ul>
      <ul className="grid grid-cols-12">
        <li className="bg-gray-200 border border-red-400 col-span-1">Hamza</li>
        <li className="bg-gray-200 border border-red-400 col-span-8">Ali</li>
        <li className="bg-gray-200 border border-red-400 col-span-3">Arham</li>
      </ul>
      <div className="">
        <ul className="grid grid-cols-12 pt-10 h-[500px]">
          <li className="col-span-1"></li>
          <li className="col-span-3 bg-pink-900 flex justify-center rounded-l-[60px] shadow-2xl shadow-slate-900">
          <div className="flex flex-col">
            <h1 className="text-3xl font-bold text-white flex justify-start p-3 pl-10 underline">
              Sidebar
            </h1>
            <div className="p-8 text-white">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis sunt voluptatem omnis eligendi neque nobis voluptatum dignissimos cum architecto consequatur facere ratione alias molestias quisquam assumenda perferendis velit adipisci, quam unde amet exercitationem officiis ex iusto iste. Eveniet optio voluptatem facere assumenda par autem?
            </div>
          </div>
          </li>
          <li className="col-span-7 bg-white flex justify-center rounded-r-[60px] shadow-2xl shadow-slate-900">
          <div className="flex flex-col">
            <h1 className="text-3xl font-bold flex justify-start p-3 pl-10 underline">
              Main Content
            </h1>
            <div className="p-8">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis sunt voluptatem omnis eligendi neque nobis voluptatum dignissimos cum architecto consequatur facere ratione alias molestias quisquam assumenda perferendis velit adipisci, quam unde amet exercitationem officiis ex iusto iste. Eveniet optio voluptatem facere assumenda pariatur tempore architecto sunt laboriosam voluptatibus dolores non itaque sint maxime, nisi doloremque quaerat eligendi temporibus vero quas voluptates cumque sit beatae. Aliquam tempora ab amet! Quis tenetur sequi cupiditate ea, aspernatur, nulla accusantium debitis laboriosam omnis ut vitae modi corporis odit distinctio aut quaerat excepturi error quod, necessitatibus eos nobis. A, in explicabo doloremque excepturi doloribus autem?
            </div>
          </div>
          </li>
        </ul>

      </div>
    </div>
  );
}