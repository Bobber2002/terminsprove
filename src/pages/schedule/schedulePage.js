import ScheduleContainer from "../../components/schedule/scheduleContainer";

const SchedulePage = ({setNavState, navState, savedClasses}) => {
  return (
      <ScheduleContainer savedClasses={savedClasses} navState={navState} setNavState={setNavState}/>
  );
};

export default SchedulePage;
