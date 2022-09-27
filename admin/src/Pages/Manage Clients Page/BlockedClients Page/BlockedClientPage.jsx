import React from 'react'
import Blockedclients from '../../../component/Manage Clients/Blocked Clients/Blockedclients'

const BlockedClientPage = () => {
  return (
    <Link to="/agent/users/blocked_clients">
        <Blockedclients />
    </Link>
  )
}

export default BlockedClientPage