import axios from "axios";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { useState, useEffect } from "react";
import SmallClass from "../lib/singleSmallClass";

let sortedClasses = [];

let fragmentType = <></>

const ClassesSlider = ({ title, q }) => {
  const [classes, setClasses] = useState([]);

  const [returnElement, setreturnElement] = useState([]);
  useEffect(() => {
    axios.get(`http://localhost:4000/api/v1/classes`).then((res) => {
      const data = res.data;
      setClasses(data);
    });
  }, []);

  useEffect(() => {
    {
      classes.map((singleClass) => {
        {
          sortedClasses.includes(singleClass)
            ? console.log("")
            : sortedClasses.push(singleClass);
        }
      });
    }
  }, [classes]);

  useEffect(() => {
    setreturnElement(
      <>
        {sortedClasses.map((singleClass) => (
          <>
            {Object.values(singleClass).includes(q) ||
            Object.entries(sortedClasses).includes(singleClass) ? (
              <SwiperSlide key={singleClass.id}>
                {console.log(singleClass)}
                <SmallClass
                  key={singleClass.id}
                  id={singleClass.id}
                  title={singleClass.className}
                  thumb={singleClass.asset.url}
                />
              </SwiperSlide>
            ) : (
              <></>
            )}
          </>
        ))}
      </>
    );
  }, [q]);

  return (
    <div id="ChooseClasses">
      <h3 className="font-extrabold text-xl mb-4">{title}</h3>
      <Swiper
        slidesPerView={3}
        spaceBetween={30}
        loop={true}
        loopFillGroupWithBlank={true}
        onSlideChange={() => console.log("slide change")}
        onSwiper={(swiper) => console.log(swiper)}
      >
        {
          returnElement.type !== fragmentType.type ? returnElement : <p>No classes match your search</p>
        }
      </Swiper>
    </div>
  );
};

export default ClassesSlider;
