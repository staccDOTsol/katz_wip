import React from "react";
import "./Profile24.sass";

class Profile24 extends React.Component {
  render() {
    const { src } = this.props;

    return (
      <div className="profile2-10">
        <img className="rectangle-10" src={src} alt="Rectangle" />
      </div>
    );
  }
}

export default Profile24;
