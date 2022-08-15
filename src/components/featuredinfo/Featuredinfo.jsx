import React from "react";
import "./featuredinfo.css";

import ArrowDownwardSharpIcon from "@mui/icons-material/ArrowDownwardSharp";
import ArrowUpwardSharpIcon from '@mui/icons-material/ArrowUpwardSharp';

function Featuredinfo() {
  return (
    <div className="featured">
      <div className="featuredItem">
        <span className="featuredtitle">Sales</span>
        <div className="featuredMoneyContainer">
          <span className="featuredMoney">Ksh. 18856734</span>
          <span className="featuredMoneyRate">
            -4.8 <ArrowDownwardSharpIcon className="featuredIcon negative"/>
          </span>
        </div>
        <span className="featuredSub">Compared to last Month</span>
      </div>

      <div className="featuredItem">
        <span className="featuredTitle"> Revenue</span>
        <div className="featuredMoneyContainer">
          <span className="featuredMoney">-18856734</span>
          <span className="featuredMoneyRate">
            +2.4 <ArrowDownwardSharpIcon className="featuredIcon negative"/>
          </span>
        </div>
        <span className="featuredSub">Compared to last Month</span>
      </div>

      <div className="featuredItem">
        <span className="featuredtitle">Cost</span>
        <div className="featuredMoneyContainer">
          <span className="featuredMoney"> - Ksh. 18856734</span>
          <span className="featuredMoneyRate">
            +500 <ArrowUpwardSharpIcon className="featuredIcon"/>
          </span>
        </div>
        <span className="featuredSub">Compared to last Month</span>
      </div>

      
    </div>
  );
}

export default Featuredinfo;
