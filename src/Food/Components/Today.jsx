import React from "react";
import image from "../images/hd.jpg";

const Today = () => {
  return (
    <>
      <div className="container">
        <div className="row g-0 mt-5">
          <div className="col-6 px-5">
            <div class="card text-bg-dark">
              <img
                src={image}
                class="card-img"
                alt="..."
                style={{ height: "325px" }}
              />
              <div class="card-img-overlay">
                <h5 class="card-title">TRY IT TODAY</h5>
                <h4 className="fs-2">MOST  POPULAR BURGER</h4>
                
              </div>
            </div>
          </div>
          <div className="col-6">
            <div class="card text-bg-dark mb-4">
              <img
                src={image}
                class="card-img"
                alt="..."
                style={{ height: "150px" }}
              />
              <div class="card-img-overlay">
              <h5 class="card-title">TRY IT TODAY</h5>
                <h4 className="fs-2">MOST  POPULAR BURGER</h4>
              </div>
            </div>
            <div class="card text-bg-dark ">
              <img
                src={image}
                class="card-img"
                alt="..."
                style={{ height: "150px" }}
              />
              <div class="card-img-overlay">
              <h5 class="card-title">TRY IT TODAY</h5>
                <h4 className="fs-2">MOST  POPULAR BURGER</h4>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Today;
