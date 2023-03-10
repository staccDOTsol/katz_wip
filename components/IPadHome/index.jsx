import React from "react";
import MAINMENU from "../MAINMENU";
import STATBAR2 from "../STATBAR2";
import IMAGESGROUPRIGHT from "../IMAGESGROUPRIGHT";
import Claim from "../Claim";
import "./IPadHome.sass";

class IPadHome extends React.Component {
  render() {
    const {
      group3318,
      lightningBolt,
      meerkatMillionairesCountryClub,
      theMeerkatMilliona,
      theMeerkatMillio,
      desktopUxUi,
      iphoneUxUi,
      mAINMENUProps,
      iMAGESGROUPRIGHTProps,
      claimProps,
    } = this.props;

    return (
      <div className="container-center-horizontal">
        <div className="ipad-home screen">
          <MAINMENU className={mAINMENUProps.className} button3Props={mAINMENUProps.button3Props} />
          <STATBAR2 />
          <IMAGESGROUPRIGHT
            className={iMAGESGROUPRIGHTProps.className}
            profile21Props={iMAGESGROUPRIGHTProps.profile21Props}
            profile22Props={iMAGESGROUPRIGHTProps.profile22Props}
            profile221Props={iMAGESGROUPRIGHTProps.profile221Props}
            profile222Props={iMAGESGROUPRIGHTProps.profile222Props}
            profile23Props={iMAGESGROUPRIGHTProps.profile23Props}
            profile24Props={iMAGESGROUPRIGHTProps.profile24Props}
          />
          <Claim className={claimProps.className} button3Props={claimProps.button3Props} />
          <div className="overlap-group-container">
            <div className="overlap-group2-1">
              <div className="group-3318" style={{ backgroundImage: `url(${group3318})` }}></div>
              <img className="lightning-bolt-1" src={lightningBolt} alt="Lightning Bolt" />
            </div>
            <div className="meerkat-milliona-container">
              <div className="meerkat-millionairescountry-club mona-sans-normal-white-45px">
                {meerkatMillionairesCountryClub}
              </div>
              <p
                className="the-meerkat-milliona-1-meerkat-milliona-container archivo-light-white-18px animate-enter1"
                show-on-scroll
              >
                {theMeerkatMilliona}
              </p>
            </div>
          </div>
          <div className="overlap-group1-1">
            <div className="group-3317">
              <p className="the-meerkat-millio-1 mona-sans-regular-normal-white-15px">{theMeerkatMillio}</p>
            </div>
            <div className="desktop-uxui mona-sans-normal-concord-15px">{desktopUxUi}</div>
            <div className="iphone-uxui-1 mona-sans-normal-concord-15px">{iphoneUxUi}</div>
          </div>
        </div>
      </div>
    );
  }
}

export default IPadHome;
