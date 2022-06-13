import React from 'react';
import { Button, Container } from 'react-bootstrap';
import './Content.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faSliders,
  faWallet,
  faThumbsUp,
  faLightbulb,
  faAngleDoubleUp,
} from '@fortawesome/free-solid-svg-icons';
const Content = () => {
  return (
    <Container fluid className="bg-dark text-white">
      <div className="ms">
        <p id="sub-title">The First Complete</p>
        <h1 className="main-title">CRYPTO DERIVATIVES EXCHANGE</h1>
        <p>Trade Perpetuals, Futures and Exchange-quoted Spreads</p>
        <Button variant="dark" className="btn-light2 mt-5">
          VIEW TRADE
        </Button>
      </div>
      <div className="ms2">
        <h2 className="sub2">Start Trading in 3 easy steps</h2>
        <h1 className="num">1.</h1>
        <h6>REGISTER</h6>
        <p className="desc1">
          Sign-up for your free account in less than a minute
        </p>
        <h1 className="num">2.</h1>
        <h6>DEPOSIT</h6>
        <p className="desc1">Fund your account by depositing USDT</p>
        <h1 className="num">3.</h1>
        <h6>TRADE</h6>
        <p className="desc1">Make your first trade</p>
      </div>
      <div className="mt-5 ms3">
        <h3 className="col text-xl-center">Why BetconX?</h3>
        <p className="col text-xl-center">
          Betconx is a P2P crypto-products trading platform, providing traders a
          diverse range of crypto contracts and a higly secure & intuitive
          trading interface, powered by institutional-grade infrastructure.
          Built by veteran traders and supported by a diverse community of VCs.
          Traders and investors form both traditiona and crypto space.
        </p>
        <div className="mt-5 row">
          <div className="col">
            <FontAwesomeIcon className="icon" icon={faSliders} />
            <h6 className="features1">Unique Trading Products</h6>
            <p className="col-6 feature-desc">
              First to launch Exchange Quoted Spreads which dramatically reduce
              execution risk in volatile markets.
            </p>
          </div>
          <div className="col">
            <FontAwesomeIcon className="icon" icon={faThumbsUp} />
            <h6 className="features1">TRADE MINING</h6>
            <p className="col-6 feature-desc">
              Earn rewards on the fees you pay as per tarde volume.
            </p>
          </div>
        </div>

        <div className="row">
          <div className="col">
            <FontAwesomeIcon className="icon" icon={faWallet} />
            <h6 className="features1">Maximum Security</h6>
            <p className="col-6 feature-desc">
              Funds stored in multi-signature deep cold storage.Insurance Fund
              from Day 1.
            </p>
          </div>
          <div className="col">
            <FontAwesomeIcon className="icon" icon={faLightbulb} />
            <h6 className="features1">INTUITIVE INTERFACE</h6>
            <p className="col-6 feature-desc">
              Easy-to-use, highly customisable and trader-friendly platform.
            </p>
          </div>
        </div>
      </div>

      <div className="ms4">
        <h3 className="col text-xl-center">Services</h3>
        <div className="mt-4 row">
          <div className="col ms-5">
            <img className="icon-child" src="/database.png" alt="database" />
            <img className="icon" src="/database.png" alt="database" />
            <h6 className="services-title">PERPETUAL</h6>
            <p className="col-6 services-desc">
              Easy-to-trade, non-expiring crypto derivative contracts.
            </p>
          </div>
          <div className="col ms-5">
            <img className="arrow-child" src="/trend.png" alt="database" />
            <img className="arrow" src="/trend.png" alt="database" />
            <h6 className=" mt-2 services-title">FUTURES</h6>
            <p className="col-6 services-desc">
              Cash-settled derivatives contracts for going long or short on
              future cryptocurrency prices.
            </p>
          </div>
        </div>
        <div className="row justify-content-center">
          <div className="col-6 ms-5">
            <img className="chart" src="/chart.png" alt="database" />
            <h6 className="services-title">Exchange-Quoted Spreads</h6>
            <p className="col-6 services-desc">
              Low-risk trading instruments to easily trade the price difference
              of underlying futures and perpetual contracts.
            </p>
          </div>
        </div>
      </div>

      <div>
        <h3 className="col text-xl-center">BFX</h3>
        <p className="col-6 bfx-desc">
          BFX is the ERC-20 utility token powering the Betconx Ecosystem.
          Integral to the exchange, the BFX demand is fuelled by the various
          utilities it provides to its holders and its diminishing circulating
          supply.
        </p>
        <div className="col ms-5 mt-5">
          <h5>BFX UTILITY AND REWARDS</h5>
          <ul class="list-group list-group-flush bg-dark text-white">
            <li class="bg-dark text-white">
              Earn BFX Rewards on the trading fees you pay
            </li>
            <li class="bg-dark text-white">
              Earn BFX Rewards on your maker trade volume
            </li>
            <li class="bg-dark text-white">
              Stake BFX to unlock benefits and rewadrs
            </li>
            <li class="bg-dark text-white">
              HODL BFX and get early bird prizes, benefits & more
            </li>
          </ul>
        </div>
      </div>
      <div className="bg-dark last-content"></div>
    </Container>
  );
};

export default Content;
