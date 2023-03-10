import React from "react";
import "./STATBAR2.sass";

class STATBAR2 extends React.Component {
  render() {
    return (
      <div className="stat-bar-1">
        <p className="the-kat-dashboard-v1-brrrbrrr-1 mona-sans-normal-concord-16px">THE KAT DASHBOARD v1. BRRRBRRR</p>
        <div className="flex-col-3">
          <div className="floor-price-1 mona-sans-normal-concord-15px">Floor Price</div>
          <div className="x18-sol-1 montserrat-extra-bold-white-23px">1.8 SOL</div>
        </div>
        <div className="flex-col-4">
          <div className="total-volume-1 mona-sans-normal-concord-15px">Total Volume</div>
          <div className="x12-m-sol-1 montserrat-extra-bold-white-23px">1.2M SOL</div>
        </div>
        <div className="holders-container-1">
          <div className="number-of-holders-1 mona-sans-normal-concord-15px">Number Of Holders</div>
          <div className="x4191-holders-1 montserrat-extra-bold-white-23px">4,191 HOLDERS</div>
        </div>
      </div>
    );
  }
}

export default STATBAR2;
