import React from 'react';
import Navbar from '../../components/Navbar/Navbar';
import { rulesInfo, rulesList1, rulesList2, table } from '../data/Rules.data';
import './Rules.css';
const Rules = () => {
  return (
    <>
      <Navbar activeButton={'RULES'} newButton={'RULES'} />
      <div class="rules-main-container">
        <ul className="english-note-text" style={{ display: 'table' }}>
          <li>
            <b />
            <p style={{ textAlign: 'center' }}>
              <b>
                {rulesInfo.title}
                <br />
                <br />
                Note :- {rulesInfo.note1}
                <br />
                <br />
                Note :- {rulesInfo.note2}
              </b>
            </p>
          </li>
        </ul>
        <ol className="english-rules-list" style={{ display: 'table' }}>
          {rulesList1.map((item, index) => (
            <li key={index}>{item}</li>
          ))}

          {table.map((item, index) => {
            return (
              <>
                <h4 className="match-headline">
                  <a href="#" id="match-heading">
                    {item.title}
                  </a>
                </h4>
                <div className="table-responsive">
                  <table className="table table-bordered">
                    <thead>
                      <tr>
                        {item.header.map((item, index) => {
                          return <th key={index}>{item}</th>;
                        })}
                      </tr>
                    </thead>
                    <tbody>
                      {item.body.map((row, index) => {
                        return (
                          <tr key={index}>
                            {row.map((column, index) => {
                              return <td key={index}>{column}</td>;
                            })}
                          </tr>
                        );
                      })}
                    </tbody>
                  </table>
                </div>
              </>
            );
          })}
          {rulesList2.map((item, index) => {
            return <li key={index}>{item}</li>;
          })}
        </ol>
        <ul className="english-note-text" style={{ display: 'table' }}>
          <li className="note">Note: {rulesInfo.note3}</li>
        </ul>
        <div className="row">
          <div className="main_menu_btn">
            <a href="#" className="btn btn-danger purp_btn change_password_btn" id="create_bets">
              {rulesInfo.mainMenuButton}
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Rules;
