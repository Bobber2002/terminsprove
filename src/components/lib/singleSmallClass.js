import { Link } from "react-router-dom";
import Stars from "./stars";

const SmallClass = ({ id, title, thumb }) => {
  return (
    <Link to={`/class?class=${id}`}>
      <div
        id={id}
        onClick={(e) => {
          // console.log(e.currentTarget);
        }}
        className="flex flex-col-reverse w-28 h-32 rounded-t-2xl rounded-bl-2xl bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url("${thumb}")` }}
      >
        <div className="flex flex-col justify-center w-full h-[32%] px-3 bg-yellow-400 font-bold rounded-tr-[36px]">
          <p className="text-[10px] text-ellipsis whitespace-nowrap overflow-hidden">
            {title}
          </p>
          <Stars length="72" />
        </div>
      </div>
    </Link>
  );
};

export default SmallClass;
