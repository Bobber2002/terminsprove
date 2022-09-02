import { Link } from "react-router-dom";

const ToHome = () => {
  return (
    <Link to="/home">
      <div className="uppercase bg-yellow-400 w-48 h-12 rounded-full flex items-center justify-center">
        start training
      </div>
    </Link>
  );
};

export default ToHome;
