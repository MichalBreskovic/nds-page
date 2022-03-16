import React from 'react';

import minSrLogo from '../assets/min-sr-logo.png';
import DLLogo from '../assets/dl-logo.png';
import ViaRestLogo from '../assets/viarest-logo.png';
import ViaRestLogoSide from '../assets/viarest-logo-side.png';

// import {ReactComponent as Icons} from './assets/icons.svg';
import {ReactComponent as AppStoreButton} from '../assets/app_store_button.svg';
import {ReactComponent as GooglePlayButton} from '../assets/google_play_button.svg';

import flying1 from '../assets/flying-1.png'
import flying2 from '../assets/flying-2.png'
import flying3 from '../assets/flying-3.png'

import mockups from '../assets/mockups-all.png'

import '../App.css';
import {useMediaQuery} from "react-responsive";
import {Link} from "react-router-dom";

function Main() {

    const isSmall = useMediaQuery({ query: '(min-width: 1000px)' })

    return (
        <div className="App">
            <img alt={"ViaRest app logo"} src={ViaRestLogoSide} className={"via-logo-top"} />
            <div className={"top-container"}>
                {/*<Icons className={"icons"}/>*/}
                <img className={"mockups"} alt="mockups" src={mockups}/>
            </div>

            <div style={{maxWidth: "1000px", marginBottom: "10%"}}>
                <img src={minSrLogo} alt={"Ministry of Transport logo"} className={"min-sr-logo"}/>
                <h1>Rýchla pomoc na diaľnici</h1>
                <p>Aplikácia, ktorá vás informuje o službách na diaľničných odpočívadlách a ponúka užívateľom privolať pomoc na diaľnici v prípade poruchy vozidla.</p>
                <div className={"store-button-container"}>
                    <a href={"https://apps.apple.com/sk/app/viarest/id1588391482?l=sk"}><AppStoreButton className={"store-button"} /></a>
                    <a href={"https://play.google.com/store/apps/details?id=com.bluelemons.dldoprava"}><GooglePlayButton className={"store-button"}/></a>
                </div>
            </div>

            <div className={"item-container"}>
                {isSmall && <img className={"flying"} alt="mobile image" src={flying1}/>}
                <div className={"item-text"}>
                    <h2>Prehľad odpočívadiel</h2>
                    <p>Aplikácia má detailny prehľad odpočívadiel so službami, ktoré sa na ňom nachádzajú. Tiež si viete pozrieť kamerovy náhľad odpočívalda a navigovať sa priamo naň.</p>
                </div>
                {!isSmall && <img className={"flying"} alt="mobile image" src={flying1}/>}
            </div>
            <div className={"item-container"}>
                <div className={"item-text"}>
                    <h2>Filtrovanie služieb</h2>
                    <p>Podrobný filter vám ponúka filtrovanie konkrétnych služieb, ktoré preferujete na odpočívadlách. Následne sa na mape zobrazia len tie, ktoré sú podľa vašich preferencií.</p>
                </div>
                <img className={"flying"} alt="mobile image" src={flying2}/>
            </div>
            <div className={"item-container"}>
                {isSmall && <img className={"flying"} alt="mobile image" src={flying3}/>}
                <div className={"item-text"}>
                    <h2>Privolanie diaľničnej patroly</h2>
                    <p >Funkciu privolať pomoc na diaľnici máte k dispozícii, ak aplikácia rozpozná vašu polohu na diaľnici. Ide o priamy kontakt na dispečing Národnej Diaľničnej Spoločnosti. </p>
                </div>
                {!isSmall && <img className={"flying"} alt="mobile image" src={flying3}/>}
            </div>
            <p className={"bottom-text"}>Aplikácia je iniciatívou Ministerstva dopravy a výstavby SR, ktorá má za účelom informovať o službách na diaľničných odpočívadlách.</p>
            <div className={"bottom-top-line"} />
            <div className={"bottom-icons-container"}>
                <img alt={"Ministry of Transport logo"} src={minSrLogo} />
                <img alt={"digital league logo"} src={DLLogo} />
            </div>
            <img src={ViaRestLogo} className={"logo"}/>
            <div className={"bottom-line"} />
            <div style={{paddingBottom: 10}}>©ViaRest 2022</div>
            <div style={{paddingBottom: 30}}><Link to={'/terms-and-conditions'}>Terms and Conditions</Link> | <Link to={'/privacy-policy'}>Privacy Policy</Link> | <Link to={'/copyright'}>Copyright</Link></div>

        </div>
    );
}

export default Main;
