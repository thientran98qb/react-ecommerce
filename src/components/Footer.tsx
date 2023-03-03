import { Box, Typography } from '@mui/material'
import React from 'react'

type Props = {}

const Footer = (props: Props) => {
  return (
    <Box padding="10px 0" borderTop="1px solid #312f2f" sx={{backgroundColor: "#ebebeb"}}>
      <Typography textAlign="center">@copyright 2023 by Thien dev</Typography>
    </Box>
  )
}

export default Footer
