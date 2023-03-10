import React from "react";
import Button3 from "../Button3";
import "./MAINMENU.sass";

class MAINMENU extends React.Component {
  render() {
    const { className, button3Props } = this.props;

    return (
      <div className={`main-menu ${className || ""}`}>
        <img className="asset-1" src="/img/asset-1-1@1x.png" alt="Asset 1" />
        <Button3 overlapGroup={button3Props.overlapGroup} save={button3Props.save} className={button3Props.className} />
      </div>
    );
  }
}

export default MAINMENU;
