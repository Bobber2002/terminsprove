import Header from "../lib/header";
import Schedule from "./scheduleSingleSchedule";

const ScheduleContainer = ({ setNavState, navState, savedClasses }) => {
  return (
    <div className="px-5 py-12 flex flex-col">
      <Header
        navState={navState}
        setNavState={setNavState}
        title="My Schedule"
      />
      <div className="flex flex-col gap-4">
        {savedClasses.map((savedClass) => (
          <Schedule
            key={savedClass.id}
            title={savedClass.className}
            day={savedClass.classDay}
            time={savedClass.classTime}
          />
        ))}
      </div>
    </div>
  );
};

export default ScheduleContainer;
