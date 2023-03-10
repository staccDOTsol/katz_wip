import React from "react";
import "./Profile23.sass";

class Profile23 extends React.Component {
  render() {
    const { src } = this.props;

    return (
      <div className="profile2-8">
        <img className="rectangle-8" src={src} alt="Rectangle" />
      </div>
    );
  }
}

export default Profile23;
