import React from "react";
import { CTAContent } from "../jsonData/CTA";

function CTA() {
  return (
    <div className="CTA-container d-flex">
      {CTAContent.map((item, index) => {
        return (
          <div className="CTA-wrapper">
            <div className="CTA-icon-wrapper">
              <div className="CTA-icon-container">
                <div className="CTA-icon">{item.ctaIcon}</div>
              </div>
            </div>
            <div className="CTA-title">{item.ctaTitle}</div>
            <div className="CTA-text">{item.ctaText}</div>
          </div>
        );
      })}
    </div>
  );
}

export default CTA;
