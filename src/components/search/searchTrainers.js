import Trainer from "../lib/trainerSection";

const Trainers = ({q}) => {
  return (
    <div className="flex flex-col mt-8 gap-4">
      <Trainer q={q} title="Popular Trainers"/>
    </div>
  );
};

export default Trainers;
