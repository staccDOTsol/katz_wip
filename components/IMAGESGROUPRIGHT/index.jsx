import React from "react";
import Profile2 from "../Profile2";
import Profile22 from "../Profile22";
import "./IMAGESGROUPRIGHT.sass";

class IMAGESGROUPRIGHT extends React.Component {
  render() {
    const {
      className,
      profile21Props,
      profile22Props,
      profile221Props,
      profile222Props,
      profile23Props,
      profile24Props,
    } = this.props;

    return (
      <div className={`images-group-right ${className || ""}`}>
        <div className="profile-container">
          <Profile2 src={profile21Props.src} />
          <Profile2 src={profile22Props.src} />
        </div>
        <div className="profile-container-4">
          <Profile22 src={profile221Props.src} />
          <Profile22 src={profile222Props.src} />
        </div>
        <div className="profile-container">
          <Profile2 src={profile23Props.src} />
          <Profile2 src={profile24Props.src} />
        </div>
      </div>
    );
  }
}

export default IMAGESGROUPRIGHT;
