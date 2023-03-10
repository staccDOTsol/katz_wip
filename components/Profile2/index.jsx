import React from "react";
import "./Profile2.sass";

class Profile2 extends React.Component {
  render() {
    const { src } = this.props;

    return (
      <div className="profile2">
        <img className="rectangle" src={src} alt="Rectangle" />
      </div>
    );
  }
}

export default Profile2;
