import React from "react";
import Navbar from "../Navbar/Navbar";
import Table from "../Table/Table";
import ledgerData from '../data/ledger.data'
import "./Ledger.css";
const Ledger = (props) => {
  return (
    <div>
      <Navbar activeButton={props.activeButton} newButton={props.newButton} />
      <div className="ledger-page">
        <Table data={ledgerData} />
      </div>
    </div>
  );
};

export default Ledger;
