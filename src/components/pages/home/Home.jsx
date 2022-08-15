import React from "react";
import Chart from "../../chart/Chart";
import Featuredinfo from "../../featuredinfo/Featuredinfo";
import "./home.css";
import { userData } from "../../../dummydata";
import Widgetlgm from "../../widgetLg/Widgetlgm";
import Widgetsm from "../../widgetSm/Widgetsm";


const Home = () => {
  return (
    <div className="home">
      <Featuredinfo />
      <Chart data={userData} chartTitle="Sales Analytics" grid dataKey={"uv"} />

      <div className="homeWidgets">
        <Widgetlgm />
        <Widgetsm />
      </div>
    </div>
  );
};

export default Home;
