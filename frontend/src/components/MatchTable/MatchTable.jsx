import React from "react";
import "./MatchTable.css";

const MatchTable = () => {
  return (
    <div className="main-container">
    <div classname="match-container">
    <div className="row content-top-padding">
      <h1 />
      <table className="table table-bordered">
        <thead className="match-head">
          <tr>
            <th id="table-above" colSpan={6} className="bet-place-tbl-th">
              Match Winner Market Bets
            </th>
          </tr>
          <tr>
            <th className="match-th">RATE</th>
            <th className="match-th">AMOUNT</th>
            <th className="match-th">MODE</th>
            <th className="match-th">Team</th>
            <th className="match-th">Zimbabwe </th>
            <th className="match-th">Bangladesh</th>
          </tr>
        </thead>
        <tbody className="table-body">
          <tr>
            <td  className="match-td">0.38 </td>
            <td className="match-td">500 </td>
            <td className="match-td">LAGAI</td>
            <td className="match-td">Bangladesh</td>
            <td className="match-td">-500.0</td>
            <td className="match-td">190.0</td>
          </tr>
        </tbody>
        <tbody className="table-body">
          <tr>
            <td className="match-td">0.42 </td>
            <td className="match-td">500 </td>
            <td className="match-td">KHAI</td>
            <td className="match-td">Bangladesh</td>
            <td className="match-td">500.0</td>
            <td className="match-td">-210.0</td>
          </tr>
        </tbody>
        <tbody className="table-body">
          <tr>
            <td  className="match-td">0.41 </td>
            <td  className="match-td">100 </td>
            <td  className="match-td">LAGAI</td>
            <td  className="match-td">Bangladesh</td>
            <td  className="match-td">-100.0</td>
            <td  className="match-td">41.0</td>
          </tr>
        </tbody>
        <tbody className="table-body">
          <tr>
            <td  className="match-td">0.43 </td>
            <td  className="match-td">100 </td>
            <td className="match-td">KHAI</td>
            <td className="match-td">Bangladesh</td>
            <td className="match-td">100.0</td>
            <td className="match-td">-43.0</td>
          </tr>
        </tbody>
      </table>
      <div className="buttom-text" style={{color: 'red', margin: '0px !important'}}>
        You Lost 22.0/- Coins.
      </div>
    </div>
  </div>
  </div>
  );
};

export default MatchTable;
