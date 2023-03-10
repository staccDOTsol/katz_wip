import React from "react";
import "./Button3.sass";
import { WalletMultiButton } from "@solana/wallet-adapter-react-ui";

class Button3 extends React.Component {
  render() {
    const { overlapGroup, save, className } = this.props;

    return (
      <WalletMultiButton className={`button3 ${className || ""}`}>
        <div className="overlap-group" style={{ backgroundImage: `url(${overlapGroup})` }}>
            <div className="save poppins-semi-bold-white-16px"> {save}</div>
        </div>
      </WalletMultiButton>
    );
  }
}

export default Button3;
