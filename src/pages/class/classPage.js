import ClassContainer from "../../components/class/classContainer";

const ClassPage = ({
  setNavState,
  navState,
  savedClasses,
  setSavedClasses,
}) => {
  return (
    <ClassContainer
      savedClasses={savedClasses}
      setSavedClasses={setSavedClasses}
      navState={navState}
      setNavState={setNavState}
    />
  );
};

export default ClassPage;
