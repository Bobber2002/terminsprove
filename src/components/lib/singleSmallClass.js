import { Link } from "react-router-dom";
import Stars from "./stars";
const SmallClass = () => {
  return (
    <Link to="/class">
      <div
        onClick={(e) => {
          console.log(e.currentTarget);
        }}
        className='flex flex-col-reverse w-28 h-32 rounded-t-2xl rounded-bl-2xl bg-[url("https://via.placeholder.com/200")]'
      >
        <div className="flex flex-col justify-center w-full h-[32%] px-3 bg-yellow-400 font-bold rounded-tr-[36px]">
          <p className="text-[10px]">DAily go pro*</p>
          <Stars length="72"/>
        </div>
      </div>
    </Link>
  );
};

export default SmallClass;
