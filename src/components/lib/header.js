import Menu from "./burgerMenu";
import { HiArrowLeft } from "react-icons/hi";
import { Link } from "react-router-dom";

const currPath = () => document.location.pathname;

const Header = ({ setNavState, navState, title }) => {
  return (
    <header className="z-10 flex justify-between items-center pb-6">
      <div className="flex items-center">
        {currPath() !== "/home" ? (
          <div className="pr-5">
            <Link to="/home">
              <HiArrowLeft size="1.4rem" color="#9E9E9E" />
            </Link>
          </div>
        ) : (
          ""
        )}
        <h2 className="text-2xl">{title}</h2>
      </div>
      <Menu navState={navState} setNavState={setNavState} />
    </header>
  );
};

export default Header;
