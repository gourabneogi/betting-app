import React from 'react'
import Commisionlimits from '../../../component/Manage Clients/Commision Limits/Commisionlimits'

const CommissionLimitsPage = () => {
  return (
    <Link to="/agent/users/update_client_limit">
        <Commisionlimits />
    </Link>
  )
}

export default CommissionLimitsPage