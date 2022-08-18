import React from "react";
import Navbar from "../Navbar/Navbar";
import Table from "../Table/Table";
import table from "../data/ledger.data"
import "./Ledger.css";
const Ledger = (props) => {
  return (
    <div>
      <Navbar activeButton={props.activeButton} newButton={props.newButton} />
      <div className="ledger-page">
        <Table data={table} />
      </div>
    </div>
  );
};

export default Ledger;
