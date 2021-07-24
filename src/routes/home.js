import { useState } from "react";
import { Link } from "react-router-dom";
import { BsLockFill, BsUnlockFill } from "react-icons/bs";

import bg_image from "../assets/images/bg-vertical.jpg";

import puzzle1_1 from "../assets/images/p1/p1_1.png";
import puzzle1_2 from "../assets/images/p1/p1_2.png";
import puzzle1_3 from "../assets/images/p1/p1_3.png";
import puzzle1_4 from "../assets/images/p1/p1_4.png";

import puzzle2_1 from "../assets/images/p2/p2_1.png";
import puzzle2_2 from "../assets/images/p2/p2_2.png";
import puzzle2_3 from "../assets/images/p2/p2_3.png";
import puzzle2_4 from "../assets/images/p2/p2_4.png";

const Home = () => {
  const [key, setKey] = useState("");
  const isLocked = !(key === "ACTS" || key === "548231");
  const isWinner = key === "548231";

  return (
    <div className="container my-3">
      <div className="position-fixed vw-100 vh-100 z-index-n1 d-flex end-0 top-0 justify-content-center">
        <img src={bg_image} alt="scary door" />
      </div>
      <div className="row justify-content-center align-items-center">
        <div className="row mb-3 gx-3 align-items-center">
          <div class="col col-md-auto">
            <img className="img-fluid" src={puzzle1_1} alt="Logo" />
          </div>
          <div class="col col-md-auto">
            <img className="img-fluid" src={puzzle1_2} alt="Logo" />
          </div>
          <div class="col col-md-auto">
            <img className="img-fluid" src={puzzle1_3} alt="Logo" />
          </div>
          <div class="col col-md-auto">
            <img className="img-fluid" src={puzzle1_4} alt="Logo" />
          </div>
        </div>

        <div className="row gx-3 mb-3 w-100">
          <div className="col">
            <input
              className="form-control-self form-control"
              type="text"
              value={key}
              onChange={(e) => setKey(e.target.value.toUpperCase())}
            />
          </div>
          <div className="col">
            <Link
              className={
                (isLocked ? " disabled" : " btn-danger") +
                " btn w-100 btn-secondary"
              }
              to={isWinner ? "/free" : "/lost"}
            >
              {isLocked ? <BsLockFill /> : <BsUnlockFill />}
            </Link>
          </div>
        </div>

        <div className="row gx-3 align-items-center">
          <div class="col col-md-auto">
            <img className="img-fluid" src={puzzle2_1} alt="Logo" />
          </div>
          <div class="col col-md-auto">
            <img className="img-fluid" src={puzzle2_2} alt="Logo" />
          </div>
          <div class="col col-md-auto">
            <img className="img-fluid" src={puzzle2_3} alt="Logo" />
          </div>
          <div class="col col-md-auto">
            <img className="img-fluid" src={puzzle2_4} alt="Logo" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
