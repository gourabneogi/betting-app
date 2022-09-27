import { Dashboard } from "@mui/icons-material";
import Home from "./component/Home/Home";
import Blockedclients from "./component/Manage Clients/Blocked Clients/Blockedclients";
import Commisionlimits from "./component/Manage Clients/Commision Limits/Commisionlimits";
import Myclients from "./component/Manage Clients/My Clients/Myclients";
import Collection from "./component/Manage Ledger/Collection Report/Collection";
import Gamesreport from "./component/Manage Ledger/Games Daily Report/Gamesreport";
import Myledger from "./component/Manage Ledger/My Ledgers/Myledger";
import Profitloss from "./component/Manage Ledger/Profit Loss/Profitloss";
import Password from "./component/Manage Password/Password";
import NewAgent from "./component/NewAgent/NewAgent";

import Routing from "./component/Routing/Routing";
import Tournament from "./component/Sports/Tournament/Tournament";




function App() {
  return (
    <div className="wrapper">
     <Routing />
  </div>
  
  );
}

export default App;
