import React from "react";
import "./Landing.css";
import { Link } from "react-router-dom";

function LandingCmp() {
  return (
    <div className="landing-container">
      <div className="landing-logo">logo</div>
      <p className="landing-text">
        - "אנחנו מאמינים שהשפע הקיים מספיק בשביל שכל אחד ואחת יוכלו להינות
        מריהוט איכותי, בגדים חדשים ומוצרי טכנולוגיה מצוינים - בגאווה ובכבוד. אנו
        מובילים מהפכה בהתמודדות עם עודפי תעשייה ובצריכה המוסדית של עמותות וממשלה
        בישראל. באופן זה אנו יוצרים חברה הוגנת ומקדמים אחריות תאגידית, חברתית
        וסביבתית בישראל"
      </p>

      <Link to="/sign-in" className="landing-btn">
        sign-in
      </Link>
      <br />
      <Link to="/sign-up" className="landing-btn">
        sign-up
      </Link>
    </div>
  );
}

export default LandingCmp;
