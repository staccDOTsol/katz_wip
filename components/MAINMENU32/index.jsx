import React from "react";
import Button332 from "../Button332";
import "./MAINMENU32.sass";

class MAINMENU32 extends React.Component {
  render() {
    const { asset1, button33Props } = this.props;

    return (
      <div className="main-menu-2">
        <img className="asset-1-1" src={asset1} alt="Asset 1" />
        <Button332 overlapGroup={button33Props.overlapGroup} save={button33Props.save} />
      </div>
    );
  }
}

export default MAINMENU32;
