import React from "react";
import "../Components/Style.css";
const Contact = () => {
  return (
    <>
      <div className="contact-img mt-5">
        <h6 className="text-center pt-5">RESERVATION</h6>
        <h1 className="text-center">BOOK YOUR TABLE</h1>

        <div className="row g-0">
          <div className="col-3"></div>
          <div className="col-7 mt-5">
            <form>
              <div className="row mb-3">
                <div className="col-6">
                    <input type="text"  className="form-control" placeholder="NAME"/>
                </div>
                <div className="col-6">
                <input type="text" className="form-control" placeholder="EMAIL"/> 
                </div>
              </div>
              <div className="row  mb-3">
                <div className="col-6">
                    <input type="text"  className="form-control" placeholder="DATE"/>
                </div>
                <div className="col-6">
                <input type="text" className="form-control" placeholder="TIME"/> 
                </div>
              </div>
              <div className="row  mb-3">
                <div className="col-6">
                    <input type="text"  className="form-control" placeholder="PEOPLE"/>
                </div>
                <div className="col-6">
                <button type="submit" className="w-100 btn btn-danger">FIND A TABLE </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
