import React from "react";
import "./Button332.sass";

class Button332 extends React.Component {
  render() {
    const { overlapGroup, save } = this.props;

    return (
      <div className="button3-8">
        <div className="overlap-group-1" style={{ backgroundImage: `url(${overlapGroup})` }}>
          <div className="save-2 poppins-semi-bold-white-12px">{save}</div>
        </div>
      </div>
    );
  }
}

export default Button332;
