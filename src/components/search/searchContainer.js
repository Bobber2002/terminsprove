
import { useState } from "react";
import Header from "../lib/header";
import ClassesSlider from "./searchClassesSlider";
import Search from "./searchForm";  
import Trainers from "./searchTrainers";

const SearchContainer = ({ setNavState, navState }) => {
  const [Query, setQuery] = useState(undefined);
  return (
    <div className="px-5 py-12 flex flex-col">
      <Header setNavState={setNavState} navState={navState} title="Search" />
      <Search query={Query} setQuery={setQuery} />
      <ClassesSlider title="Popular classes" q={Query}/>
      <Trainers q={Query}/>
    </div>
  );
};

export default SearchContainer;
