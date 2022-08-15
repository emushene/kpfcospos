import React from 'react'
import "./chart.css"
import {userData} from "../../dummydata.jsx"
import { LineChart, Line, XAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';


export default function Chart({chartTitle, data, dataKey, grid}) {
    
  return (
    <div className='chart'>
      <h3 className='chartTitle'>Sales Analytics</h3>
        <ResponsiveContainer width="100%" aspect={4 / 1}>
            <LineChart data={data} chartTitle={chartTitle} grid dataKey>
                <XAxis dataKey={"name"} stroke="#555"/>
                <Line type={"monotone"} dataKey={dataKey} stroke="#555"/>
                <Tooltip />
                {grid && <CartesianGrid stroke='#e0dfdf' strokeDasharray="5 5"/>}
                <Legend />
            </LineChart>

        </ResponsiveContainer>



    </div>
  )
}


