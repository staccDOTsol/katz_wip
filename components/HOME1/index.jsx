import React from "react";
import STATBAR from "../STATBAR";
import MAINMENU2 from "../MAINMENU2";
import Claim from "../Claim";
import Group3309 from "../Group3309";
import IMAGESGROUPRIGHT from "../IMAGESGROUPRIGHT";
import "./HOME1.sass";

class HOME1 extends React.Component {
  render() {
    const {
      meerkatMillionairesCountryClub,
      theMeerkatMilliona,
      group2,
      lightningBolt,
      spanText1,
      spanText2,
      ipadUxUi,
      iphoneUxUi,
      theMeerkatMillio,
      mAINMENU2Props,
      claimProps,
      iMAGESGROUPRIGHTProps,
    } = this.props;

    return (
      <div className="container-center-horizontal">
        <div className="home-1 screen">
          <div className="overlap-group1-3">
            <STATBAR />
            <MAINMENU2 button32Props={mAINMENU2Props.button32Props} />
          </div>
          <div className="flex-row-1">
            <div className="flex-col-5">
              <div className="overlap-group2-2">
                <div className="meerkat-millionairescountry-club-1 mona-sans-normal-white-65px">
                  {meerkatMillionairesCountryClub}
                </div>
                <p
                  className="the-meerkat-milliona-2-overlap-group2-2 archivo-light-white-18px animate-enter2"
                  show-on-scroll
                >
                  {theMeerkatMilliona}
                </p>
                <div className="group-2-1" style={{ backgroundImage: `url(${group2})` }}></div>
                <img className="lightning-bolt-2" src={lightningBolt} alt="Lightning Bolt" />
              </div>
              <Claim className={claimProps.className} button3Props={claimProps.button3Props} />
              <p className="x18-sol-earned-in-ro mona-sans-bold-concord-17px">
                <span className="mona-sans-normal-white-17px">{spanText1}</span>
                <span className="mona-sans-normal-concord-17px">{spanText2}</span>
              </p>
            </div>
            <div className="group-container">
              <Group3309 />
              <IMAGESGROUPRIGHT
                className={iMAGESGROUPRIGHTProps.className}
                profile21Props={iMAGESGROUPRIGHTProps.profile21Props}
                profile22Props={iMAGESGROUPRIGHTProps.profile22Props}
                profile221Props={iMAGESGROUPRIGHTProps.profile221Props}
                profile222Props={iMAGESGROUPRIGHTProps.profile222Props}
                profile23Props={iMAGESGROUPRIGHTProps.profile23Props}
                profile24Props={iMAGESGROUPRIGHTProps.profile24Props}
              />
            </div>
          </div>
          <div className="overlap-group3-1">
            <div className="ipad-uxui-1 mona-sans-normal-concord-15px">{ipadUxUi}</div>
            <div className="iphone-uxui-2 mona-sans-normal-concord-15px">{iphoneUxUi}</div>
            <p className="the-meerkat-millio-3 mona-sans-regular-normal-white-15px">{theMeerkatMillio}</p>
          </div>
        </div>
      </div>
    );
  }
}

export default HOME1;
