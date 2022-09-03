import SmallClass from "./singleSmallClass";

const ClassesSlider = ({ title }) => {
  return (
    <div id="ChooseClasses">
      <h3 className="font-extrabold text-xl mb-4">{title}</h3>
      <SmallClass />
    </div>
  );
};

export default ClassesSlider;
