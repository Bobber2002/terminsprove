import axios from "axios";
import { useEffect, useState } from "react";

let sortedTrainers = [];

const Trainer = ({ trainerId, q, title }) => {
  const [trainer, setTrainer] = useState([]);

  useEffect(() => {
    if (trainerId !== undefined) {
      axios
        .get(`http://localhost:4000/api/v1/trainers/${trainerId}`)
        .then((res) => {
          // console.log(res.data);
          const data = res.data;
          // const classes = res.data;
          setTrainer(data);
        });
    } else if (q !== undefined) {
      axios.get(`http://localhost:4000/api/v1/trainers`).then((res) => {
        // console.log(res.data);
        const data = res.data;
        // const classes = res.data;
        setTrainer(data);
      });
    }
  }, [trainerId, q]);

  if (trainerId !== undefined) {
    return (
      <div>
        {/* {console.log(trainer)} */}
        <h3 className="font-bold pb-3">{title}</h3>
        <div className="flex">
          <div
            src=""
            alt=""
            className="h-16 w-16 rounded-lg bg-cover bg-no-repeat bg-center"
            style={{
              backgroundImage: `url(${
                trainer.asset
                  ? trainer.asset.url
                  : "https://via.placeholder.com/150"
              })`,
            }}
          />
          <p className="pl-3 pt-2">{trainer.trainerName}</p>
        </div>
      </div>
    );
  } else if (q !== undefined ) {
    trainer.map((singleTrainer) => {
      console.log(sortedTrainers);
      {
        sortedTrainers.includes(singleTrainer)
          ? console.log("")
          : sortedTrainers.push(singleTrainer);
      }
    });
    return (
      <>
        <h3 className="font-bold pb-3">{title}</h3>
        {/* {console.log(sortedTrainers)} */}
        {sortedTrainers.map((singleTrainer) => (
          <>
            {Object.values(singleTrainer).includes(q) ? (
              <div>
                {/* {console.log(singleTrainer)} */}
                <div className="flex">
                  <div
                    src=""
                    alt=""
                    className="h-16 w-16 rounded-lg bg-cover bg-no-repeat bg-center"
                    style={{
                      backgroundImage: `url(${
                        singleTrainer.asset
                          ? singleTrainer.asset.url
                          : "https://via.placeholder.com/150"
                      })`,
                    }}
                  />
                  <p className="pl-3 pt-2">{singleTrainer.trainerName}</p>
                </div>
              </div>
            ) : (
              console.log("No trainers")
            )}
          </>
        ))}
        {(sortedTrainers = [])}
      </>
    );
  }
};

export default Trainer;
