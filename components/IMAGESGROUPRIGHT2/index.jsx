import React from "react";
import Profile23 from "../Profile23";
import Profile24 from "../Profile24";
import "./IMAGESGROUPRIGHT2.sass";

class IMAGESGROUPRIGHT2 extends React.Component {
  render() {
    const {
      profile231Props,
      profile232Props,
      profile241Props,
      profile242Props,
      profile233Props,
      profile234Props,
    } = this.props;

    return (
      <div className="images-group-right-4">
        <div className="profile-container-5">
          <Profile23 src={profile231Props.src} />
          <Profile23 src={profile232Props.src} />
        </div>
        <div className="profile-container-7">
          <Profile24 src={profile241Props.src} />
          <Profile24 src={profile242Props.src} />
        </div>
        <div className="profile-container-5">
          <Profile23 src={profile233Props.src} />
          <Profile23 src={profile234Props.src} />
        </div>
      </div>
    );
  }
}

export default IMAGESGROUPRIGHT2;
