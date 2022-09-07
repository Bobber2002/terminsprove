const Schedule = ({title, day, time}) => {
  return (
    <div className="w-full px-5 pt-3 pb-2 flex flex-col border border-[#D4D4D4] rounded-lg">
      <h3 className="font-bold pb-5">{title}</h3>
      <div className="text-sm flex">
        <p>{day}</p>
        <p>-</p>
        <p>{time}</p>
      </div>
    </div>
  );
};

export default Schedule;
  