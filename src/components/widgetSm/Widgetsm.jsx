import React from "react";
import "./widgetSm.css";
import VisibilityIcon from "@mui/icons-material/Visibility";

function Widgetsm() {
  return (
    <div className="widgetsm">
      <span className="widgetsmTitle">Joined Super Investors</span>
      <ul className="widgetsmList">
        <li className="widgetListItem"></li>
        <img src="#" alt="Investor Lady" />
        <div className="widgetsmInvestor">
          <span className="widgetsmInvestorName">Margaret Njoki</span>
          <span className="widgetsmInvestorTitle">Investor</span>
        </div>
        <button className="widgetsmButton">
          <VisibilityIcon />
          Display
        </button>
        <li className="widgetListItem"></li>
        <img src="" alt="" />
        <div className="widgetsmInvestor">
          <span className="widgetsmInvestorName">Earnest Mburu</span>
          <span className="widgetsmInvestorTitle">Investor</span>
        </div>
        <button className="widgetsmButton">
          <VisibilityIcon />
          Display
        </button>
        <li className="widgetListItem"></li>
        <img src="" alt="" />
        <div className="widgetsmInvestor">
          <span className="widgetsmInvestorName">Zipmag Investors</span>
          <span className="widgetsmInvestorTitle">Investor</span>
        </div>
        <button className="widgetsmButton">
          <VisibilityIcon />
          Display
        </button>
        <li className="widgetListItem"></li>
        <img src="" alt="" />
        <div className="widgetsmInvestor">
          <span className="widgetsmInvestorName">Ondiri Farm</span>
          <span className="widgetsmInvestorTitle">Investor</span>
        </div>
        <button className="widgetsmButton">
          <VisibilityIcon className="widgetsmIcon"/>
          Display
        </button>
      </ul>
    </div>
  );
}

export default Widgetsm;
