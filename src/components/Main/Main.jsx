import React from 'react'
import "bootstrap/dist/css/bootstrap.min.css";
import '../Main/main.css'
const Main = () => {
  return (
    
<div id="card" className="card mb-3" style={{ maxWidth: "100%" }}>
  <div className=" container-fluid row no-gutters">
    <div className="col-md-6 col-sm-12">
      <div className="card-body">
        <h5 className="card-title">Find the perfect destination</h5>
        <p className="card-text">Our app will help you find the perfect path for your next trip. With an easy-to-use interface and a host of itinerary options, planning your next trip has never been easier</p>
       <div className=" container-fluid">
        <a type="button" className="btn btn-primary" href="#">
          View More
        </a>
        </div>
      </div>
    </div>
    <div className="col-md-6 col-sm-12">
      <img src="/imagenes/iti.jpeg" alt="itinerario" className="img-fluid" id="iti" />
    </div>
  </div>
</div>

  )
}

export default Main
