import React from "react";
import "./Button34.sass";
import { WalletMultiButton } from "@solana/wallet-adapter-react-ui";

class Button34 extends React.Component {
  render() {
    const { overlapGroup, iconAwesomeWallet, save } = this.props;

    return (
      <WalletMultiButton className="button3-11">
        <div className="overlap-group-3" style={{ backgroundImage: `url(${overlapGroup})` }}>
          <img className="icon-awesome-wallet-1" src={iconAwesomeWallet} alt="Icon awesome-wallet" />
          <div className="save-4 poppins-semi-bold-white-12px">{save}</div>
        </div>
      </WalletMultiButton>
    );
  }
}

export default Button34;
