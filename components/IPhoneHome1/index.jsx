import React from "react";
import MAINMENU4 from "../MAINMENU4";
import IMAGESGROUPRIGHT2 from "../IMAGESGROUPRIGHT2";
import Claim from "../Claim";
import Group3320 from "../Group3320";
import "./IPhoneHome1.sass";

class IPhoneHome1 extends React.Component {
  render() {
    const {
      royaltiesEarned,
      x18Sol,
      path1,
      path2,
      path3,
      mAINMENU4Props,
      iMAGESGROUPRIGHT2Props,
      claimProps,
    } = this.props;

    return (
      <div className="container-center-horizontal">
        <div className="iphone-home-1 screen">
          <MAINMENU4 asset1={mAINMENU4Props.asset1} button34Props={mAINMENU4Props.button34Props} />
          <IMAGESGROUPRIGHT2
            profile231Props={iMAGESGROUPRIGHT2Props.profile231Props}
            profile232Props={iMAGESGROUPRIGHT2Props.profile232Props}
            profile241Props={iMAGESGROUPRIGHT2Props.profile241Props}
            profile242Props={iMAGESGROUPRIGHT2Props.profile242Props}
            profile233Props={iMAGESGROUPRIGHT2Props.profile233Props}
            profile234Props={iMAGESGROUPRIGHT2Props.profile234Props}
          />
          <div className="group-3319">
            <div className="royalties-earned-1">{royaltiesEarned}</div>
            <div className="x18-sol-3">{x18Sol}</div>
            <div className="icon-feather-refresh-cw-1">
              <div className="path-container-1">
                <img className="path-1-1" src={path1} alt="Path 1" />
                <img className="path-2-1" src={path2} alt="Path 2" />
                <img className="path-3-1" src={path3} alt="Path 3" />
              </div>
            </div>
          </div>
          <Claim className={claimProps.className} button3Props={claimProps.button3Props} />
          <Group3320 />
        </div>
      </div>
    );
  }
}

export default IPhoneHome1;
