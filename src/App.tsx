import React from 'react';
import MobileStoreButton from 'react-mobile-store-button';

import minSrLogo from './assets/min-sr-logo.png';
import DLLogo from './assets/dl-logo.png';
import ViaRestLogo from './assets/viarest-logo.png';
import ViaRestLogoSide from './assets/viarest-logo-side.png';

import {ReactComponent as Icons} from './assets/icons.svg';

import flying1 from './assets/flying-1.png'
import flying2 from './assets/flying-2.png'
import flying3 from './assets/flying-3.png'

import mockups from './assets/mockups-all.png'

import './App.css';
import {useMediaQuery} from "react-responsive";

function App() {

    const isSmall = useMediaQuery({ query: '(min-width: 1000px)' })

  return (
    <div className="App">
        <img src={ViaRestLogoSide} className={"via-logo-top"} />
        <div className={"top-container"}>
            <Icons className={"icons"}/>
            <img className={"mockups"} alt="mockups" src={mockups}/>
        </div>

        <div style={{maxWidth: "1000px", marginBottom: "10%"}}>
            <img src={minSrLogo} className={"min-sr-logo"}/>
            <h1>Rýchla pomoc na diaľnici</h1>
            <p>Aplikácia, ktorá vás informuje o službách na diaľničných odpočívadlách a ponúka užívateľom privolať pomoc na diaľnici v prípade poruchy vozidla.</p>
            <div>
                <MobileStoreButton
                    store="ios"
                    url={"https://apps.apple.com/sk/app/viarest/id1588391482?l=sk"}
                    linkProps={{ title: 'iOS Store Button' }}
                    />
                <MobileStoreButton
                    store="android"
                    url={""}
                    linkProps={{ title: 'Android Store Button' }}
                />
            </div>
        </div>

        <div className={"item-container"}>
            <img className={"flying"} alt="mobile image" src={flying1}/>
            <div className={"item-text"}>
                <h2>Prehľad odpočívadiel</h2>
                <p>Aplikácia má detailny prehľad odpočívadiel so službami, ktoré sa na ňom nachádzajú. Tiež si viete pozrieť kamerovy náhľad odpočívalda a navigovať sa priamo naň.</p>
            </div>
        </div>
        <div className={"item-container"}>
            {!isSmall && <img className={"flying"} alt="mobile image" src={flying2}/>}
            <div className={"item-text"}>
                <h2>Filtrovanie služieb</h2>
                <p>Podrobný filter vám ponúka filtrovanie konkrétnych služieb, ktoré preferujete na odpočívadlách. Následne sa na mape zobrazia len tie, ktoré sú podľa vašich preferencií.</p>
            </div>
            {isSmall && <img className={"flying"} alt="mobile image" src={flying2}/>}
        </div>
        <div className={"item-container"}>
            <img className={"flying"} alt="mobile image" src={flying3}/>
            <div className={"item-text"}>
                <h2>Privolanie diaľničnej patroly</h2>
                <p >Funkciu privolať pomoc na diaľnici máte k dispozícii, ak aplikácia rozpozná vašu polohu na diaľnici. Ide o priamy kontakt na dispečing Národnej Diaľničnej Spoločnosti. </p>
            </div>
        </div>
        <p>Aplikácia je iniciatívou Ministerstva dopravy a výstavby SR, ktorá má za účelom informovať o službách na diaľničných odpočívadlách.</p>
        <div style={{width: 300, height: 1, backgroundColor: "#C4C4C4", margin: 24}} />
        <div style={{display: "flex", justifyContent: "center", alignItems: "center"}}>
            <img src={minSrLogo} style={{width: 300}}/>
            <img src={DLLogo} style={{width: 300}}/>
        </div>
        <img src={ViaRestLogo} style={{width: 300}}/>
        <div style={{width: 300, height: 1, backgroundColor: "#C4C4C4", margin: 32}} />
        <div>©ViaRest 2022</div>
    </div>
  );
}

export default App;
