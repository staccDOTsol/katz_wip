import React from "react";
import "./STATBAR.sass";

class STATBAR extends React.Component {
  render() {
    return (
      <div className="stat-bar">
        <p className="the-kat-dashboard-v1-brrrbrrr mona-sans-normal-concord-19px">THE KAT DASHBOARD v1. BRRRBRRR</p>
        <div className="flex-col-1">
          <div className="floor-price mona-sans-normal-concord-15px">Floor Price</div>
          <div className="x18-sol montserrat-black-white-23px">1.8 SOL</div>
        </div>
        <div className="flex-col-2">
          <div className="total-volume mona-sans-normal-concord-15px">Total Volume</div>
          <div className="x12-m-sol montserrat-black-white-23px">1.2M SOL</div>
        </div>
        <div className="holders-container">
          <div className="number-of-holders mona-sans-normal-concord-15px">Number Of Holders</div>
          <div className="x4191-holders montserrat-black-white-23px">4,191 HOLDERS</div>
        </div>
      </div>
    );
  }
}

export default STATBAR;
