import ScheduleContainer from "../../components/schedule/scheduleContainer";

const SchedulePage = ({setNavState, navState}) => {
  return (
      <ScheduleContainer navState={navState} setNavState={setNavState}/>
  );
};

export default SchedulePage;
