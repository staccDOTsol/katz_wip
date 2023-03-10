import React from "react";
import Button34 from "../Button34";
import "./MAINMENU4.sass";

class MAINMENU4 extends React.Component {
  render() {
    const { asset1, button34Props } = this.props;

    return (
      <div className="main-menu-5">
        <img className="asset-1-3" src={asset1} alt="Asset 1" />
        <Button34
          overlapGroup={button34Props.overlapGroup}
          iconAwesomeWallet={button34Props.iconAwesomeWallet}
          save={button34Props.save}
        />
      </div>
    );
  }
}

export default MAINMENU4;
