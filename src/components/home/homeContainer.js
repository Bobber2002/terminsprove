import Header from "../lib/header";
import ClassesSlider from "../lib/classesSlider";
import PopularClass from "./homeBigClass";

const HomeContainer = ({ setNavState, navState}) => {
  return (
    <div className="px-5 py-12 flex flex-col">
      <Header
        setNavState={setNavState}
        navState={navState}
        title="Popular Classes"
      />
      <PopularClass />
      <ClassesSlider title={"Classes for you"} />
    </div>
  );
};

export default HomeContainer;
