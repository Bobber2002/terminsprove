import axios from "axios";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { useState, useEffect } from "react";
import SmallClass from "./singleSmallClass";

const ClassesSlider = ({ title}) => {
  const [classes, setClasses] = useState([]);

  useEffect(() => {
    axios.get(`http://localhost:4000/api/v1/classes`).then((res) => {
      const data = res.data;
      setClasses(data);
    });
  }, []);

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
        {classes.map((singleClass) => (
          <SwiperSlide key={singleClass.id}>
            <SmallClass
              key={singleClass.id}
              id={singleClass.id}
              title={singleClass.className}
              thumb={singleClass.asset.url}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default ClassesSlider;
