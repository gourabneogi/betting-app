import React from 'react'
import HomeIcon from '@mui/icons-material/Home';
import DashboardIcon from '@mui/icons-material/Dashboard';
import ManageAccountsIcon from '@mui/icons-material/ManageAccounts';
import SportsBaseballIcon from '@mui/icons-material/SportsBaseball';
import AssignmentIndIcon from '@mui/icons-material/AssignmentInd';
import EnhancedEncryptionIcon from '@mui/icons-material/EnhancedEncryption';
import LanguageIcon from '@mui/icons-material/Language';
export const SlidebarData= [
    {
        title:"Dashboard",
        icon:<DashboardIcon />,
        link:"/dashboard"
    },
    {
        title:"Manage",
        icon:<ManageAccountsIcon  />,
        link:"/manage"
    },
    {
        title:"Sports",
        icon:<SportsBaseballIcon />,
        link:"/sports"
    },
    {
        title:"Games",
        icon:<SportsBaseballIcon />,
        link:"/games"
    },
    {
        title:"Manage Clients",
        icon:< AssignmentIndIcon/>,
        link:"/clients",

    },
    {
        title:"Manage Password",
        icon:<EnhancedEncryptionIcon />,
        link:"/password"
    },
    {
        title:"Language",
        icon:<LanguageIcon />,
        link:"/language"
    },
    {
        title:"Manage Ledgers",
        icon:<HomeIcon />,
        link:"/ledgers"
    },
];
  
export const userData ={
    name:"BSB5813 (demo test)",
    stock:" Stockists",
}


