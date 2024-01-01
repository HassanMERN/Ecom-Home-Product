import React from "react";
import { VscSend } from "react-icons/vsc";
import { footerAccounts } from "../jsonData/footerAccounts";
import { quickLinks } from "../jsonData/quickLinks";
import qr from "../images/qr.jpg";
import appStore from "../images/app-store.jpg";
import playStore from "../images/play-store.jpg";

function Footer() {
  return (
    <div className="Footer">
      <div className="Footer-container container  d-flex">
        <div className="Footer-column-1">
          <div className="Footer-logo">Exclusive</div>
          <div className="Footer-text-large">Subscribe</div>
          <div className="Footer-text-mid">Get 10% off your first order</div>
          <div className="Footer-email-input d-flex">
            <input type="email" />
            <VscSend className="Send-icon" />
          </div>
        </div>
        <div className="Footer-column-2">
          <div className="Footer-text-large">Support</div>
          <div className="Footer-text-mid support-field">
            111 Bijoy sarani, Dhaka,
            <br />
            DH 1515, Bangladesh.
          </div>
          <div className="Footer-text-mid support-field">
            exclusive@gmail.com
          </div>
          <div className="Footer-text-mid support-field">+88015-88888-9999</div>
        </div>
        <div className="Footer-column-3">
          <div className="Footer-text-large">Account</div>
          <ul className="Footer-accounts-list">
            {footerAccounts.map((account) => (
              <li className="Footer-accounts-tab" key={account.label}>
                <a className="Footer-accounts-link" href={account.url}>
                  {account.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
        <div className="Footer-column-4">
          <div className="Footer-text-large">Quick Link</div>
          <ul className="Footer-accounts-list">
            {quickLinks.map((quickLink) => (
              <li className="Footer-quick-links-tab" key={quickLink.label}>
                <a className="Footer-quick-links-link" href={quickLink.url}>
                  {quickLink.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
        <div className="Footer-column-5">
          <div className="Footer-text-large">Download App</div>
          <div className="Footer-text-small">
            Save $3 with App New User Only
          </div>
          <div className="Footer-app-links d-flex">
            <div className="Footer-app-links-left">
              <a href="/">
                <img src={qr} alt="Scan to get app" />
              </a>
            </div>
            <div className="Footer-app-links-right">
              <div className="Footer-app-link">
                <a href="/">
                  <img src={appStore} alt="Get it on app store" />
                </a>
              </div>
              <div className="Footer-app-link">
                <a href="/">
                  <img src={playStore} alt="Get it on play store" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
