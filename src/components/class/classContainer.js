import { useEffect, useState } from "react";
import Header from "../lib/header";
import Stars from "../lib/stars";
import axios from "axios";
import Trainer from "../lib/trainerSection";


const ClassContainer = ({ setNavState, navState, savedClasses, setSavedClasses }) => {
  const queryString = window.location.search;
  const urlParams = new URLSearchParams(queryString);
  const [data, setData] = useState([]);


  
  useEffect(() => {
    axios
    .get(`http://localhost:4000/api/v1/classes/${urlParams.get("class")}`)
    .then((res) => {
      // console.log(res.data);
      const classes = res.data;
      // const classes = res.data;
      setData(classes);
    });
  }, []);

  useEffect(() => {
    // console.log(data);
    savedClasses.forEach(element => {
      console.log(element);
    });
  }, [data]);
  // console.log(data);

  function handleSetSavedClasses(thisData) {
    if (savedClasses.includes(thisData)) {
    test()
      return;
    }
    setSavedClasses([...savedClasses, data]);

    test()
  }
  function test() {
    console.log(savedClasses);
  }
  return (
    <>
      <div
        className={`absolute w-[375px] h-[425px] bg-cover bg-center bg-no-repeat`}
        style={{
          backgroundImage: `url("${
            data.asset ? data.asset.url : "https://c.tenor.com/Tu0MCmJ4TJUAAAAC/load-loading.gif"
          }")`,
        }}
      >
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
            {data.className}
          </h2>
        </div>
      </div>
      <div className="z-10 px-5 py-12 flex flex-col">
        <Header navState={navState} setNavState={setNavState} />
        <div className="pt-[345px] text-sm pb-8">
          <p className="pb-3">
            {data.classDay} - {data.classTime}
          </p>
          <p>{data.classDescription}</p>
        </div>
        <Trainer trainerId={data.trainerId} />
        <div onClick={()=>handleSetSavedClasses(data)} className="w-full py-3 mt-6 bg-yellow-400 rounded-full uppercase flex justify-center items-center">
          {
            savedClasses.includes(data)
            ? "Leave"
            : "Sign up"
          }
        </div>
      </div>
    </>
  );
};

export default ClassContainer;
