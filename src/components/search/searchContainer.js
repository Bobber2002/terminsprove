
import ClassesSlider from "../lib/classesSlider";
import Header from "../lib/header";
import Search from "./searchForm";
import Trainers from "./searchTrainers";

const SearchContainer = ({ setNavState, navState }) => {
  return (
    <div className="px-5 py-12 flex flex-col">
      <Header setNavState={setNavState} navState={navState} title="Search" />
      <Search/>
      <ClassesSlider title="Popular classes" />
      <Trainers/>
    </div>
  );
};

export default SearchContainer;
