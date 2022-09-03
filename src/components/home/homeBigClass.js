import Stars from "../lib/stars";

const PopularClass = () => {
  return (
    <div className='flex flex-col-reverse h-96 rounded-2xl mb-12 bg-[url("https://via.placeholder.com/500")]'>
      <div className="flex flex-col justify-center font-bold text-md px-3 w-2/3 h-1/5 bg-yellow-400 rounded-tr-[56px]">
        <p>Lower abs workout</p>
          <Stars length="50"/>
      </div>
    </div>
  );
};

export default PopularClass;
