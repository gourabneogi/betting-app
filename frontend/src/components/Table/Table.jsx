import React from 'react'
import "./Table.css"

const Table = ({ data }) => {
  return (
    <div classname="table-container table-container-3">
      <div classname="row content-top-padding">
        <table classname="table table-bordered header-top-spacing">
          <thead>
            <tr>
              {data.header.map((item, key) => (
                <th key={key} classname="ldg-tbl-th match-box-color">{item}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {data.body.map((item, key) => (
              <tr key={key}>
                <td
                  classname="ldg-tbl-td match-value-box-color"
                  style={{ textAlign: "left" }}
                >
                  {item.date}
                </td>
                <td
                  title="TeenPatti-T-20 - 10 Aug"
                  classname="ldg-tbl-td match-value-box-color"
                  style={{ textAlign: "left" }}
                >
                  <a href="#">{item.matchName}</a>
                </td>
                <td className="ldg-tbl-td match-value-box-color">{item.debit}</td>
                <td className="ldg-tbl-td match-value-box-color">{item.credit}</td>
                <td className="ldg-tbl-td match-value-box-color">{item.balance}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default Table