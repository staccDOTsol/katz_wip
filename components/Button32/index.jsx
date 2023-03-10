
import React from "react";
import "./Button32.sass";
import { WalletMultiButton } from "@solana/wallet-adapter-react-ui";
class Button32 extends React.Component {
  render() {
    const { className } = this.props;

    return (
      <WalletMultiButton className={`button3-9 ${className || ""}`}>
        <div className="overlap-group-2">
          <img className="icon-awesome-wallet" src="/img/icon-awesome-wallet-1@1x.png" alt="Icon awesome-wallet" />
          <div className="save-3 poppins-semi-bold-white-16px">16SFW….H3fha</div>
        </div>
      </WalletMultiButton>
    );
  }
}

export default Button32;
