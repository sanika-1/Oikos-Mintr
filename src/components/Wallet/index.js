import React from 'react';
import './WallEle.css';
import metamask from '../../images/metamask.svg';
import bsc from '../../images/BSCWallet.svg';
import math from '../../images/mathwallet-white.svg';

const Wallet = () => {
    return (
        <>
        <div className="wallBox1">
        <p class="wallpara">Please connect a wallet with your OKS holdings to start:</p>
        <br></br>
        <button disabled="" className="Metamask">
            <img src={metamask} className="allimg" alt="" />
            <h2 className="ButtonTxt">Metamask</h2>
        </button>

        <button className="wallButtons">
            <img src={bsc} className="allimg" alt=" "/>
            <h2 className="ButtonTxt">BSCWallet</h2>
        </button>

        <button className="wallButtons">
            <img src={math} className="allimg" alt=" "/>
            <h2 className="ButtonTxt">MathWallet</h2>
        </button>
        </div>
        <div class="BottomLinks">
            <a href="https://t.me/oikoscash" target="_blank" class="Link" rel="noreferrer">
                <span class="LinkTxt">Having trouble?</span>
            </a>
            <a href="https://docs.oikos.cash/litepaper/" target="_blank" class="Link" rel="noreferrer">
                <span class="LinkTxt">What is Oikos?</span>
            </a>
        </div>

        
        </>
    )
}

export default Wallet;



