import React from 'react'
import "./SlideMenu.css"
import KeyboardArrowDownTwoToneIcon from '@mui/icons-material/KeyboardArrowDownTwoTone';
import HomeIcon from '@mui/icons-material/Home';
import { Accordion, AccordionDetails, AccordionSummary } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

const SlideMenu = () => {
  return (
    <nav className="navbar-default navbar-static-side" role="navigation">
  <div className="sidebar-collapse">
    <ul className="nav metismenu" id="side-menu">
      <li className="nav-header">
        <div className="dropdown profile-element">
          <span></span>
          <a data-toggle="dropdown" className="dropdown-toggle" href="#">
            <span className="clear">
              <span className="block m-t-xs">
                <strong className="font-bold">BSB5813 (demo test)</strong>
              </span>
              <span className="text-muted text-xs block">
                Stockists <b className="caret" />
              </span>
            </span>{" "}
          </a>
          <ul className="dropdown-menu animated fadeInRight m-t-xs">
            <li>
              <a href="/agent/agents/5813">Profile</a>
            </li>
            <li>
              <a href="/agent/dashboard/manage_password_panel">
                Change Password
              </a>
            </li>
            <li className="divider" />
            <li>
              <a
                className="text"
                data-method="delete"
                href="/agents/sign_out"
                rel="nofollow"
              >
                Log out
              </a>
            </li>
          </ul>
        </div>
        <div className="logo-element">NICE1010</div>
      </li>
      <li className="active">
        <a href="/agent/dashboard" data-method="get">
         <i className='fa fa-th-large'></i>
          <span className="nav-label">Dashboard</span>
        </a>
      </li>
      <li >
        <Accordion>
          <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <i className="fa fa-users" />
          <span className="nav-label">Manage</span>
          </AccordionSummary>
          <AccordionDetails>
          <a href="/agent/agents?role=agent" data-method="get">
              <i className="fa fa-users" />
              Agent
            </a>
          </AccordionDetails>
        </Accordion> 
      </li>
      <li >
        <Accordion>
          <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <i className="fa fa-users" />
          <span className="nav-label">Sports</span>
          </AccordionSummary>
          <AccordionDetails>
          <a href="/agent/matches" data-method="get">
              <i className="fa fa-users" />
              Matches
            </a>
          </AccordionDetails>
          <AccordionDetails>
          <a href="/agent/tournaments" data-method="get">
              <i className="fa fa-users" />
            Tournament
            </a>
          </AccordionDetails>
        </Accordion> 
      </li>

 
      
      
      <li >
        <a href="#user_type1">
          <i className="" />{" "}
          <span className="nav-label">Games</span> 
          <KeyboardArrowDownTwoToneIcon className='fa arrow'/>
        </a>
        <ul className="nav nav-second-level collapse" id="user_type1">
          <li cl>
            <a href="/agent/single_digits" data-method="get">
              <i className="" />
              Dus Ka Dum
            </a>
          </li>
          <li cl>
            <a
              href="/agent/rng_single_digit_lives?event_sub_type=single-digit-live"
              data-method="get"
            >
              <i className="" />
              Dus Ka Dum Live
            </a>
          </li>
          <li cl>
            <a href="/agent/roulettes" data-method="get">
              <i className="" />
              Roulette
            </a>
          </li>
          <li cl>
            <a href="/agent/inside_outside" data-method="get">
              <i className="" />
              Inside Outside
            </a>
          </li>
          <li cl>
            <a href="/agent/triple_chances" data-method="get">
              <i className="" />
              Triple Chance
            </a>
          </li>
          <li cl>
            <a href="/agent/king_queen_jacks" data-method="get">
              <i className="" />
              King Queen Jack
            </a>
          </li>
          <li cl>
            <a href="#user_type2">
              <i className="" />{" "}
              <span className="nav-label">Teen Patti</span>{" "}
              <span className="fa arrow" />
            </a>
            <ul className="nav nav-third-level collapse" id="user_type2">
              <li clas>
                <a
                  href="/agent/teen_patti?event_sub_type=TeenPatti-T-20"
                  data-method="get"
                >
                  <i className="" />
                  T-20
                </a>
              </li>
              <li clas>
                <a
                  href="/agent/teen_patti?event_sub_type=TeenPatti-One-Day"
                  data-method="get"
                >
                  <i className="" />
                  One Day
                </a>
              </li>
              <li clas>
                <a
                  href="/agent/teen_patti?event_sub_type=TeenPatti-Test"
                  data-method="get"
                >
                  <i className="" />
                  Test
                </a>
              </li>
            </ul>
          </li>
        </ul>
      </li>

      <li >
        <Accordion>
          <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <i className="fa fa-users" />
          <span className="nav-label">Manage Clients</span>
          </AccordionSummary>
          <AccordionDetails>
          <a href="/agent/users" data-method="get">
              <i className="fa fa-users" />
             My Clients
            </a>
          </AccordionDetails>
          <AccordionDetails>
          <a href="/agent/users/blocked_clients" data-method="get">
              <i className="fa fa-users" />
            Blocked Clients
            </a>
          </AccordionDetails>
          <AccordionDetails>
          <a href="/agent/users/update_client_limit" data-method="get">
              <i className="fa fa-users" />
            Commision & limits
            </a>
          </AccordionDetails>
        </Accordion> 
      </li>
   

      <li >
        <a href="/agent/dashboard/manage_password_panel" data-method="get">
          <i className="fa fa-lock" />
          <span className="nav-label">Manage Password</span>
        </a>
      </li>
      <li >
        <a href="/agent/dashboard/language" data-method="get">
          <i className="fa fa-language" />
          <span className="nav-label">Language</span>
        </a>
      </li>

      <li >
        <Accordion>
          <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <i className="fa fa-users" />
          <span className="nav-label">Manage Ledgers</span>
          </AccordionSummary>
          <AccordionDetails>
          <a href="/agent/ledgers/collection_report" data-method="get">
              <i className="fa fa-users" />
            Collection Report
            </a>
          </AccordionDetails>
          <AccordionDetails>
          <a href="/agent/ledgers" data-method="get">
              <i className="fa fa-users" />
            My Ledgers
            </a>
          </AccordionDetails>
          <AccordionDetails>
          <a href="/agent/ledgers/earning_report" data-method="get">
              <i className="fa fa-users" />
            Profit & Loss
            </a>
          </AccordionDetails>
          <AccordionDetails>
          <a href="/agent/ledgers/games_daily_report" data-method="get">
              <i className="fa fa-users" />
            Games Daily Report
            </a>
          </AccordionDetails>
        </Accordion> 
      </li>
           
   
    </ul>
  </div>
</nav>

  )
}

export default SlideMenu