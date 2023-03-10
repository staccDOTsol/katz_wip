import React from "react";
import "./Group3309.sass";

class Group3309 extends React.Component {
  render() {
    const { className } = this.props;

    return (
      <div className={`group-3309 ${className || ""}`}>
        <div className="royalties-earned mona-sans-normal-white-15px">ROYALTIES EARNED</div>
        <div className="x18-sol-2 montserrat-black-carrot-orange-32px">1.8 SOL</div>
        <div className="icon-feather-refresh-cw">
          <div className="path-container">
            <img className="path-1" src="/img/path-1-1@1x.png" alt="Path 1" />
            <img className="path-2" src="/img/path-2-1@1x.png" alt="Path 2" />
            <img className="path-3" src="/img/path-3-1@1x.png" alt="Path 3" />
          </div>
        </div>
      </div>
    );
  }
}

export default Group3309;
