import React from "react";
import "./Profile22.sass";

class Profile22 extends React.Component {
  render() {
    const { src } = this.props;

    return (
      <div className="profile2-4">
        <img className="rectangle-4" src={src} alt="Rectangle" />
      </div>
    );
  }
}

export default Profile22;
