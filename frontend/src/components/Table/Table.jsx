import React from 'react'
import "./Table.css"

const Table = (props) => {
  return (
    <div classname="table-container table-container-3">
      <div classname="row content-top-padding">
        <table classname="table table-bordered header-top-spacing">
          <thead>
            <tr>
              {props.data.header.map(item => {
                return <th classname="ldg-tbl-th match-box-color">{item}</th>
              })}
            </tr>
          </thead>
          <tbody>
            {props.data.body.map((row, index) => {
              return (
                <tr key={index}>
                  {
                    row.map((col, key) => {
                      if (key === 1) {
                        return (
                          <td
                            title="West Indies vs New Zealand"
                            className="ldg-tbl-td match-value-box-color"
                            style={{ textAlign: "left" }}
                          >
                            <a href="/user/ledgers/1092487">
                              {col}
                            </a>
                          </td>
                        )
                      } else {
                        return (
                          <td className="ldg-tbl-td match-value-box-color">{col}</td>
                        )
                      }
                    })}
                </tr>
              )
            })}
          </tbody>
        </table>
      </div>
    </div >
  )
}

export default Table