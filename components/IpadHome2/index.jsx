import React from "react";
import MAINMENU2 from "../MAINMENU2";
import STATBAR2 from "../STATBAR2";
import Group3309 from "../Group3309";
import IMAGESGROUPRIGHT from "../IMAGESGROUPRIGHT";
import Claim from "../Claim";
import "./IpadHome2.sass";

class IpadHome2 extends React.Component {
  render() {
    const {
      spanText1,
      spanText2,
      group3318,
      lightningBolt,
      meerkatMillionairesCountryClub,
      theMeerkatMilliona,
      theMeerkatMillio,
      desktopUxUi,
      iphoneUxUi,
      mAINMENU2Props,
      group3309Props,
      iMAGESGROUPRIGHTProps,
      claimProps,
    } = this.props;

    return (
      <div className="container-center-horizontal">
        <div className="ipad-home2 screen">
          <MAINMENU2 className={mAINMENU2Props.className} button32Props={mAINMENU2Props.button32Props} />
          <STATBAR2 />
          <Group3309 className={group3309Props.className} />
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
          <p className="x18-sol-earned-in-ro-1 mona-sans-bold-concord-17px">
            <span className="mona-sans-normal-white-17px">{spanText1}</span>
            <span className="mona-sans-normal-concord-17px">{spanText2}</span>
          </p>
          <div className="overlap-group-container-1">
            <div className="overlap-group1-4">
              <div className="group-3318-1" style={{ backgroundImage: `url(${group3318})` }}></div>
              <img className="lightning-bolt-3" src={lightningBolt} alt="Lightning Bolt" />
            </div>
            <div className="meerkat-milliona-container-1">
              <div className="meerkat-millionairescountry-club-2 mona-sans-normal-white-45px">
                {meerkatMillionairesCountryClub}
              </div>
              <p
                className="the-meerkat-milliona-3-meerkat-milliona-container-1 archivo-light-white-18px animate-enter3"
                show-on-scroll
              >
                {theMeerkatMilliona}
              </p>
            </div>
          </div>
          <div className="overlap-group2-3">
            <div className="group-3317-1">
              <p className="the-meerkat-millio-4 mona-sans-regular-normal-white-15px">{theMeerkatMillio}</p>
            </div>
            <div className="desktop-uxui-1 mona-sans-normal-concord-15px">{desktopUxUi}</div>
            <div className="iphone-uxui-3 mona-sans-normal-concord-15px">{iphoneUxUi}</div>
          </div>
        </div>
      </div>
    );
  }
}

export default IpadHome2;
