import axios from "axios";
import React from "react";
import { Link } from "react-router-dom";
import Stars from "../lib/stars";

export default class PopularClass extends React.Component {
  state = {
    classes: [],
  };

  componentDidMount() {
    console.log(this.props);
    axios.get(`http://localhost:4000/api/v1/classes/2`).then((res) => {
      // console.log(res.data);
      const classes = [res.data, ""];
      // const classes = res.data;
      this.setState({ classes });
      console.log(this.state.classes);
    });
  }

  render() {
    return (
      <>
        {this.state.classes.slice(0, 1).map((singleClass) => (
          <Link to={`/class?class=${singleClass.id}`} key={singleClass.id}>
            <div
              key={singleClass.id}
              className="flex flex-col-reverse h-96 rounded-2xl mb-12)] bg-cover bg-center bg-no-repeat mb-10"
              style={{ backgroundImage: `url("${singleClass.asset.url}")` }}
            >
              <div className="flex flex-col justify-center font-bold text-md px-3 w-2/3 h-1/5 bg-yellow-400 rounded-tr-[56px]">
                <p>{singleClass.className}</p>
                <Stars length="50" />
              </div>
            </div>
          </Link>
        ))}
      </>
    );
  }
}
