export default () =>
{
  return (
    //Whenever we use tailwind, all HTML styling are removed therefore h1 === h6
    <div className="flex text-center font-bold text-blue-800 mx-5 justify-evenly bg-gray-300 p-1 rounded-full items-center">
      {/* mx- & my- are margin classes, justify-between makes a gap between flexbox elements justify-evenly makes gap evenly between elements rounded-full makes the edges fullt rounded*/}

      <div className="flex bg-red-400 p-3 rounded-full items-center">
        <div className="rounded-full bg-gray-500 p-4 mr-2">
        </div>
        <div>Lorem ipsum dolor sit amet consectetur</div>
      </div>
      <div className="bg-green-200 p-3 rounded-full">Lorem ipsum dolor</div>
      <div className="bg-orange-200 p-3 rounded-full">Lorem ipsum dolor sit amet</div>
    </div>
  );
}