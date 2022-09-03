import Header from "../lib/header";
import Schedule from "./scheduleSingleSchedule";

const ScheduleContainer = ({ setNavState, navState }) => {
  return (
    <div className="px-5 py-12 flex flex-col">
      <Header
        navState={navState}
        setNavState={setNavState}
        title="My Schedule"
      />
      <Schedule/>
    </div>
  );
};

export default ScheduleContainer;
