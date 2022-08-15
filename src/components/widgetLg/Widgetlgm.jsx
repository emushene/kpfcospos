import React from 'react'
import "./widgetLg.css"

function Widgetlgm() {

    // create a button component
    const Button = ({type}) => {
      return <button className={"widgetLgButton" + type}>{type}</button>
    }

  return (
    <div className='widgetlg'>
      <h3 className="widgetlgTitle">Latest Order Transactions</h3>
    <table className="widgetLgTable">
      <tr className="widgetLgTr">
        <th className="widgetLgTh">Branch</th>
        <th className="widgetLgTh">Date</th>
        <th className="widgetLgTh">Amount</th>
        <th className="widgetLgTh">Investor</th>
        <th className="widgetLgTh">Status</th>
      
      </tr>
      <tr className="widgetLgTr">
        <td className="widgetLgBranch">
          <img src="" alt="" />
          <span className="widgetLgBranchName"></span>
        </td>
        <td className="widgetLgName">Name</td>
        <td className="widgetLgDate">Date</td>
        <td className="widgetLgAmount">Amount</td>
        <td className="widgetLgInvestor">Investor</td>
        <td className="widgetLgStatus">
          <Button type={"Approved"} />
        </td>


      </tr>
    </table>


    </div>
  )
}

export default Widgetlgm
