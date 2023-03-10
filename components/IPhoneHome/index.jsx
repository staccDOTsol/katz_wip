import React from "react";
import MAINMENU32 from "../MAINMENU32";
import IMAGESGROUPRIGHT2 from "../IMAGESGROUPRIGHT2";
import Claim from "../Claim";
import Group3320 from "../Group3320";
import "./IPhoneHome.sass";

class IPhoneHome extends React.Component {
  render() {
    const { mAINMENU32Props, iMAGESGROUPRIGHT2Props, claimProps } = this.props;

    return (
      <div className="container-center-horizontal">
        <div className="iphone-home screen">
          <MAINMENU32 asset1={mAINMENU32Props.asset1} button33Props={mAINMENU32Props.button33Props} />
          <IMAGESGROUPRIGHT2
            profile231Props={iMAGESGROUPRIGHT2Props.profile231Props}
            profile232Props={iMAGESGROUPRIGHT2Props.profile232Props}
            profile241Props={iMAGESGROUPRIGHT2Props.profile241Props}
            profile242Props={iMAGESGROUPRIGHT2Props.profile242Props}
            profile233Props={iMAGESGROUPRIGHT2Props.profile233Props}
            profile234Props={iMAGESGROUPRIGHT2Props.profile234Props}
          />
          <Claim className={claimProps.className} button3Props={claimProps.button3Props} />
          <Group3320 />
        </div>
      </div>
    );
  }
}

export default IPhoneHome;
