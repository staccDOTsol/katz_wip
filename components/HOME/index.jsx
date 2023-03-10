import React from "react";
import STATBAR from "../STATBAR";
import MAINMENU from "../MAINMENU";
import Claim from "../Claim";
import IMAGESGROUPRIGHT from "../IMAGESGROUPRIGHT";
import "./HOME.sass";

class HOME extends React.Component {
  render() {
    const {
      title,
      theMeerkatMilliona,
      group2,
      lightningBolt,
      theMeerkatMillio,
      ipadUxUi,
      iphoneUxUi,
      mAINMENUProps,
      claimProps,
      iMAGESGROUPRIGHTProps,
    } = this.props;

    return (
      <div className="container-center-horizontal">
        <div className="home screen">
          <div className="overlap-group2">
            <STATBAR />
            <MAINMENU button3Props={mAINMENUProps.button3Props} />
          </div>
          <div className="flex-row">
            <div className="flex-col">
              <div className="overlap-group1">
                <h1 className="title mona-sans-normal-white-65px">{title}</h1>
                <p
                  className="the-meerkat-milliona-overlap-group1 archivo-light-white-18px animate-enter"
                  show-on-scroll
                >
                  {theMeerkatMilliona}
                </p>
                <div className="group-2" style={{ backgroundImage: `url(${group2})` }}></div>
                <img className="lightning-bolt" src={lightningBolt} alt="Lightning Bolt" />
              </div>
              <Claim button3Props={claimProps.button3Props} />
            </div>
            <IMAGESGROUPRIGHT
              profile21Props={iMAGESGROUPRIGHTProps.profile21Props}
              profile22Props={iMAGESGROUPRIGHTProps.profile22Props}
              profile221Props={iMAGESGROUPRIGHTProps.profile221Props}
              profile222Props={iMAGESGROUPRIGHTProps.profile222Props}
              profile23Props={iMAGESGROUPRIGHTProps.profile23Props}
              profile24Props={iMAGESGROUPRIGHTProps.profile24Props}
            />
          </div>
          <div className="overlap-group3">
            <div className="group-3316">
              <p className="the-meerkat-millio mona-sans-regular-normal-white-15px">{theMeerkatMillio}</p>
            </div>
            <div className="ipad-uxui mona-sans-normal-concord-15px">{ipadUxUi}</div>
            <div className="iphone-uxui mona-sans-normal-concord-15px">{iphoneUxUi}</div>
          </div>
        </div>
      </div>
    );
  }
}

export default HOME;
