export default () => 
{
    return (
        <div className="">
        <ul className="grid grid-cols-12 grid-rows-6">
            <li className="col-span-12 row-span-3">
                <div className="bg-red-800 lg:bg-blue-700 h-full ">
                    <div className="p-16 text-[150px] text-white font-bold font-serif">
                        ALI
                    </div>
                </div>
            </li>
            <li className="col-span-12 row-span-1 bg-red-800 lg:bg-blue-700 h-[94%] shadow-xl shadow-slate-600">
                {/* breakpoints */}
                    <div className="flex justify-start pl-20 gap-10">
                        <div className="bg-slate-600 text-white border rounded-lg p-3 px-7">Click</div>
                        <div className="bg-slate-600 text-white border rounded-lg p-3 px-7">FU</div>
                    </div>

            </li>
          <li className="col-span-3 bg-pink-900 flex justify-center shadow-2xl shadow-slate-900">
          <div className="flex flex-col">
            <h1 className="text-3xl font-bold text-white flex justify-start p-3 pl-10 underline">
              Sidebar
            </h1>
            <div className="p-8 text-white">
              
            </div>
          </div>
          </li>
          <li className="col-span-9 bg-white flex justify-center shadow-2xl shadow-slate-900">
          <div className="flex flex-col">
            <h1 className="text-3xl font-bold flex justify-start p-3 pl-10 underline">
              Main Content
            </h1>
            <div className="p-8">

            </div>
          </div>
          </li>
        </ul>
      </div>
    );
}