import React from 'react'
import { Button } from '@mui/material'
import { Link } from 'react-router-dom'

const SystemVerification = () => {
  return (
    <div>
        <Link to="/test"><Button backgroundColor='success' style={{backgroundColor:"blue",fontWeight:"700",color:"white"}}>Start Test </Button></Link> 
    </div>
  )
}

export default SystemVerification