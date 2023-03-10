import "./App.sass";
import React from "react";
import { Switch, BrowserRouter as Router, Route } from "react-router-dom";
import HOME from "./components/HOME";
import IPadHome from "./components/IPadHome";
import IPhoneHome from "./components/IPhoneHome";
import HOME1 from "./components/HOME1";
import IpadHome2 from "./components/IpadHome2";
import IPhoneHome1 from "./components/IPhoneHome1";
import React, { FC, useMemo } from 'react';
import { ConnectionProvider, WalletProvider } from '@solana/wallet-adapter-react';
import { WalletAdapterNetwork } from '@solana/wallet-adapter-base';
import { PhantomWalletAdapter, UnsafeBurnerWalletAdapter } from '@solana/wallet-adapter-wallets';
import {
    WalletModalProvider,
    WalletDisconnectButton,
    WalletMultiButton
} from '@solana/wallet-adapter-react-ui';
import { clusterApiUrl } from '@solana/web3.js';

// Default styles that can be overridden by your app
require('@solana/wallet-adapter-react-ui/styles.css');


class App extends React.Component {
    
  render() {
     // The network can be set to 'devnet', 'testnet', or 'mainnet-beta'.
     const network = WalletAdapterNetwork.Mainnet;

     // You can also provide a custom RPC endpoint.
     const endpoint = "https://rpc.helius.xyz/?api-key=6b1ccd35-ba2d-472a-8f54-9ac2c3c40b8b";
 
     const wallets =[
             /**
              * Wallets that implement either of these standards will be available automatically.
              *
              *   - Solana Mobile Stack Mobile Wallet Adapter Protocol
              *     (https://github.com/solana-mobile/mobile-wallet-adapter)
              *   - Solana Wallet Standard
              *     (https://github.com/solana-labs/wallet-standard)
              *
              * If you wish to support a wallet that supports neither of those standards,
              * instantiate its legacy wallet adapter here. Common legacy adapters can be found
              * in the npm package `@solana/wallet-adapter-wallets`.
              */
             new PhantomWalletAdapter(),
         ];
    return (
        <ConnectionProvider endpoint={endpoint}>
        <WalletProvider wallets={wallets} autoConnect>
            <WalletModalProvider>
      <Router>
        <Switch>
          <Route path="/:path(|home)">
            <HOME {...hOMEData} />
          </Route>
          <Route path="/ipad-home">
            <IPadHome {...iPadHomeData} />
          </Route>
          <Route path="/iphone-home">
            <IPhoneHome
              mAINMENU32Props={iPhoneHomeData.mAINMENU32Props}
              iMAGESGROUPRIGHT2Props={iPhoneHomeData.iMAGESGROUPRIGHT2Props}
              claimProps={iPhoneHomeData.claimProps}
            />
          </Route>
          <Route path="/home-1">
            <HOME1 {...hOME1Data} />
          </Route>
          <Route path="/ipad-home2">
            <IpadHome2 {...ipadHome2Data} />
          </Route>
          <Route path="/iphone-home-1">
            <IPhoneHome1 {...iPhoneHome1Data} />
          </Route>
        </Switch>
      </Router>

      </WalletModalProvider>
            </WalletProvider>
        </ConnectionProvider>
    );
  }
}

export default App;
const button31Data = {
    overlapGroup: "/img/button1-1@1x.png",
    save: "CONNECT WALLET",
    className: "",
};

const mAINMENU1Data = {
    button3Props: button31Data,
};

const button32Data = {
    overlapGroup: "/img/button1-11@1x.png",
    save: "CLAIM ROYALTIES",
    className: "button3-1",
};

const claim1Data = {
    button3Props: button32Data,
};

const profile21Data = {
    src: "/img/rectangle-13@1x.png",
};

const profile22Data = {
    src: "/img/rectangle-14@1x.png",
};

const profile222Data = {
    src: "/img/rectangle-12@1x.png",
};

const profile223Data = {
    src: "/img/rectangle-15@1x.png",
};

const profile23Data = {
    src: "/img/rectangle-10@1x.png",
};

const profile24Data = {
    src: "/img/rectangle-11@1x.png",
};

const iMAGESGROUPRIGHT1Data = {
    profile21Props: profile21Data,
    profile22Props: profile22Data,
    profile221Props: profile222Data,
    profile222Props: profile223Data,
    profile23Props: profile23Data,
    profile24Props: profile24Data,
};

const hOMEData = {
    title: <React.Fragment>Meerkat Millionaires<br />Country Club</React.Fragment>,
    theMeerkatMilliona: "The Meerkat Millionaires Country Club (MMCC) is a Solana NFT project governed by a Decentralized Autonomous Organization (DAO), of 20.000 unique Meerkats. MMCC has a main rule: giving back to the community!",
    group2: "/img/meerkat-new-1@1x.png",
    lightningBolt: "/img/lightning-bolt-1@1x.png",
    theMeerkatMillio: "© The Meerkat Millionaires Country Club. All Rights Reserved.",
    ipadUxUi: "IPAD UX/UI",
    iphoneUxUi: "IPHONE  UX/UI",
    mAINMENUProps: mAINMENU1Data,
    claimProps: claim1Data,
    iMAGESGROUPRIGHTProps: iMAGESGROUPRIGHT1Data,
};

const button33Data = {
    overlapGroup: "/img/button1-1@1x.png",
    save: "CONNECT WALLET",
    className: "button3-2",
};

const mAINMENU2Data = {
    className: "main-menu-1",
    button3Props: button33Data,
};

const profile25Data = {
    src: "/img/rectangle-13@1x.png",
};

const profile26Data = {
    src: "/img/rectangle-14@1x.png",
};

const profile224Data = {
    src: "/img/rectangle-12@1x.png",
};

const profile225Data = {
    src: "/img/rectangle-15@1x.png",
};

const profile27Data = {
    src: "/img/rectangle-10@1x.png",
};

const profile28Data = {
    src: "/img/rectangle-11@1x.png",
};

const iMAGESGROUPRIGHT2Data = {
    className: "images-group-right-1",
    profile21Props: profile25Data,
    profile22Props: profile26Data,
    profile221Props: profile224Data,
    profile222Props: profile225Data,
    profile23Props: profile27Data,
    profile24Props: profile28Data,
};

const button34Data = {
    overlapGroup: "/img/button1-11@1x.png",
    save: "CLAIM ROYALTIES",
    className: "button3-3",
};

const claim2Data = {
    className: "claim-1",
    button3Props: button34Data,
};

const iPadHomeData = {
    group3318: "/img/meerkat-new-1@1x.png",
    lightningBolt: "/img/lightning-bolt-1@1x.png",
    meerkatMillionairesCountryClub: <React.Fragment>Meerkat Millionaires<br />Country Club</React.Fragment>,
    theMeerkatMilliona: "The Meerkat Millionaires Country Club (MMCC) is a Solana NFT project governed by a Decentralized Autonomous Organization (DAO), of 20.000 unique Meerkats. MMCC has a main rule: giving back to the community!",
    theMeerkatMillio: "© The Meerkat Millionaires Country Club. All Rights Reserved.",
    desktopUxUi: "DESKTOP UX/UI",
    iphoneUxUi: "IPHONE  UX/UI",
    mAINMENUProps: mAINMENU2Data,
    iMAGESGROUPRIGHTProps: iMAGESGROUPRIGHT2Data,
    claimProps: claim2Data,
};

const button332Data = {
    overlapGroup: "/img/button1-10@1x.png",
    save: "CONNECT WALLET",
};

const mAINMENU32Data = {
    asset1: "/img/asset-1-4@1x.png",
    button33Props: button332Data,
};

const profile232Data = {
    src: "/img/rectangle-25@1x.png",
};

const profile233Data = {
    src: "/img/rectangle-26@1x.png",
};

const profile242Data = {
    src: "/img/rectangle-24@1x.png",
};

const profile243Data = {
    src: "/img/rectangle-27@1x.png",
};

const profile234Data = {
    src: "/img/rectangle-28@1x.png",
};

const profile235Data = {
    src: "/img/rectangle-29@1x.png",
};

const iMAGESGROUPRIGHT22Data = {
    profile231Props: profile232Data,
    profile232Props: profile233Data,
    profile241Props: profile242Data,
    profile242Props: profile243Data,
    profile233Props: profile234Data,
    profile234Props: profile235Data,
};

const button35Data = {
    overlapGroup: "/img/button1-11@1x.png",
    save: "CLAIM ROYALTIES",
    className: "button3-4",
};

const claim3Data = {
    className: "claim-2",
    button3Props: button35Data,
};

const iPhoneHomeData = {
    mAINMENU32Props: mAINMENU32Data,
    iMAGESGROUPRIGHT2Props: iMAGESGROUPRIGHT22Data,
    claimProps: claim3Data,
};

const button322Data = {
    className: "",
};

const mAINMENU22Data = {
    button32Props: button322Data,
};

const button36Data = {
    overlapGroup: "/img/button1-11@1x.png",
    save: "CLAIM ROYALTIES",
    className: "button3-5",
};

const claim4Data = {
    className: "claim-3",
    button3Props: button36Data,
};

const profile29Data = {
    src: "/img/rectangle-13@1x.png",
};

const profile210Data = {
    src: "/img/rectangle-14@1x.png",
};

const profile226Data = {
    src: "/img/rectangle-12@1x.png",
};

const profile227Data = {
    src: "/img/rectangle-15@1x.png",
};

const profile211Data = {
    src: "/img/rectangle-10@1x.png",
};

const profile212Data = {
    src: "/img/rectangle-11@1x.png",
};

const iMAGESGROUPRIGHT3Data = {
    className: "images-group-right-2",
    profile21Props: profile29Data,
    profile22Props: profile210Data,
    profile221Props: profile226Data,
    profile222Props: profile227Data,
    profile23Props: profile211Data,
    profile24Props: profile212Data,
};

const hOME1Data = {
    meerkatMillionairesCountryClub: <React.Fragment>Meerkat Millionaires<br />Country Club</React.Fragment>,
    theMeerkatMilliona: "The Meerkat Millionaires Country Club (MMCC) is a Solana NFT project governed by a Decentralized Autonomous Organization (DAO), of 20.000 unique Meerkats. MMCC has a main rule: giving back to the community!",
    group2: "/img/meerkat-new-1@1x.png",
    lightningBolt: "/img/lightning-bolt-1@1x.png",
    spanText1: "1.8 SOL",
    spanText2: " EARNED IN ROYALTIES. CLAIM IN SOL, BONK OR USDC.",
    ipadUxUi: "IPAD UX/UI",
    iphoneUxUi: "IPHONE  UX/UI",
    theMeerkatMillio: "© The Meerkat Millionaires Country Club. All Rights Reserved.",
    mAINMENU2Props: mAINMENU22Data,
    claimProps: claim4Data,
    iMAGESGROUPRIGHTProps: iMAGESGROUPRIGHT3Data,
};

const button323Data = {
    className: "button3-10",
};

const mAINMENU23Data = {
    className: "main-menu-4",
    button32Props: button323Data,
};

const group33092Data = {
    className: "group-3309-1",
};

const profile213Data = {
    src: "/img/rectangle-13@1x.png",
};

const profile214Data = {
    src: "/img/rectangle-14@1x.png",
};

const profile228Data = {
    src: "/img/rectangle-12@1x.png",
};

const profile229Data = {
    src: "/img/rectangle-15@1x.png",
};

const profile215Data = {
    src: "/img/rectangle-10@1x.png",
};

const profile216Data = {
    src: "/img/rectangle-11@1x.png",
};

const iMAGESGROUPRIGHT4Data = {
    className: "images-group-right-3",
    profile21Props: profile213Data,
    profile22Props: profile214Data,
    profile221Props: profile228Data,
    profile222Props: profile229Data,
    profile23Props: profile215Data,
    profile24Props: profile216Data,
};

const button37Data = {
    overlapGroup: "/img/button1-11@1x.png",
    save: "CLAIM ROYALTIES",
    className: "button3-6",
};

const claim5Data = {
    className: "claim-4",
    button3Props: button37Data,
};

const ipadHome2Data = {
    spanText1: "1.8 SOL",
    spanText2: " EARNED IN ROYALTIES. CLAIM IN SOL, BONK OR USDC.",
    group3318: "/img/meerkat-new-1@1x.png",
    lightningBolt: "/img/lightning-bolt-1@1x.png",
    meerkatMillionairesCountryClub: <React.Fragment>Meerkat Millionaires<br />Country Club</React.Fragment>,
    theMeerkatMilliona: "The Meerkat Millionaires Country Club (MMCC) is a Solana NFT project governed by a Decentralized Autonomous Organization (DAO), of 20.000 unique Meerkats. MMCC has a main rule: giving back to the community!",
    theMeerkatMillio: "© The Meerkat Millionaires Country Club. All Rights Reserved.",
    desktopUxUi: "DESKTOP UX/UI",
    iphoneUxUi: "IPHONE  UX/UI",
    mAINMENU2Props: mAINMENU23Data,
    group3309Props: group33092Data,
    iMAGESGROUPRIGHTProps: iMAGESGROUPRIGHT4Data,
    claimProps: claim5Data,
};

const button342Data = {
    overlapGroup: "/img/button1-10@1x.png",
    iconAwesomeWallet: "/img/icon-awesome-wallet-2@1x.png",
    save: "16SFW….H3fha",
};

const mAINMENU4Data = {
    asset1: "/img/asset-1-4@1x.png",
    button34Props: button342Data,
};

const profile236Data = {
    src: "/img/rectangle-25@1x.png",
};

const profile237Data = {
    src: "/img/rectangle-26@1x.png",
};

const profile244Data = {
    src: "/img/rectangle-24@1x.png",
};

const profile245Data = {
    src: "/img/rectangle-27@1x.png",
};

const profile238Data = {
    src: "/img/rectangle-28@1x.png",
};

const profile239Data = {
    src: "/img/rectangle-29@1x.png",
};

const iMAGESGROUPRIGHT23Data = {
    profile231Props: profile236Data,
    profile232Props: profile237Data,
    profile241Props: profile244Data,
    profile242Props: profile245Data,
    profile233Props: profile238Data,
    profile234Props: profile239Data,
};

const button38Data = {
    overlapGroup: "/img/button1-11@1x.png",
    save: "CLAIM ROYALTIES",
    className: "button3-7",
};

const claim6Data = {
    className: "claim-5",
    button3Props: button38Data,
};

const iPhoneHome1Data = {
    royaltiesEarned: "ROYALTIES EARNED",
    x18Sol: "1.8 SOL",
    path1: "/img/path-1-2@1x.png",
    path2: "/img/path-2-2@1x.png",
    path3: "/img/path-3-2@1x.png",
    mAINMENU4Props: mAINMENU4Data,
    iMAGESGROUPRIGHT2Props: iMAGESGROUPRIGHT23Data,
    claimProps: claim6Data,
};

