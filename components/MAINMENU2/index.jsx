import React from "react";
import Button32 from "../Button32";
import "./MAINMENU2.sass";

class MAINMENU2 extends React.Component {
  render() {
    const { className, button32Props } = this.props;

    return (
      <div className={`main-menu-3 ${className || ""}`}>
        <img className="asset-1-2" src="/img/asset-1-1@1x.png" alt="Asset 1" />
        <Button32 className={button32Props.className} />
      </div>
    );
  }
}

export default MAINMENU2;
