import { FaTimes } from "react-icons/fa";
import { Link } from "react-router-dom";

const Navigation = ({setNavState, navState}) => {
  return (
    <nav>
      <div className="w-full flex flex-row-reverse px-5 py-12">
        <FaTimes 
          color="#9E9E9E"
          size="1.4rem"
          onClick={()=>setNavState(!navState)}
          />
      </div>
      <div className="flex flex-col w-full h-96 text-2xl items-center justify-evenly">
        <Link to="/home" onClick={()=>setNavState(!navState)}>
          <span>Home</span>
        </Link>
        <Link to="/search" onClick={()=>setNavState(!navState)}>
          <span>Search</span>
        </Link>
        <Link to="/schedule" onClick={()=>setNavState(!navState)}>
          <span>My Schedule</span>
        </Link>
        <Link to="/login" onClick={()=>setNavState(!navState)}>
          <span>Log out</span>
        </Link>
      </div>
    </nav>
  );
};

export default Navigation;
