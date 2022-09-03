import Header from "../lib/header";
import Stars from "../lib/stars";

const ClassContainer = ({setNavState, navState}) => {
  return (
    <>
      <div className='absolute w-[375px] h-[425px] bg-[url("https://via.placeholder.com/500/3d1473")] bg-cover bg-center bg-no-repeat'>
        <div className="px-5 py-12 flex flex-col-reverse h-full">
          <div className="flex justify-between items-center">
            <div className="flex w-48 items-center text-yellow-400">
              <Stars length="40" color="#FFCC00" />
              <p className="pl-5 text-sm">5/5</p>
            </div>
            <button className="uppercase text-sm h-10 bg-transparent rounded-full text-yellow-400 flex justify-center items-center py-3 px-8 border-2 border-yellow-400">
              rate
            </button>
          </div>
          <h2 className="text-yellow-400 text-3xl font-extrabold w-1/2 pb-10">
            Flow Yoga Workout
          </h2>
        </div>
      </div>
      <div className="z-10 px-5 py-12 flex flex-col">
        <Header navState={navState} setNavState={setNavState}/>
        <div className="pt-[345px]">hrllo</div>
      </div>
    </>
  );
};

export default ClassContainer;
