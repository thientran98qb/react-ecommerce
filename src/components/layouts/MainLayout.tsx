import { Box } from '@mui/material'
import HeaderNav from '../HeaderNav'
import React from 'react'
import { Outlet } from 'react-router-dom'
import Footer from '../Footer'

type Props = {}

const MainLayout = (props: Props) => {
  return (
    <>
      <HeaderNav/>
      <Box marginTop="67px">
        <Outlet/>
      </Box>
      <Footer/>
    </>
  )
}

export default MainLayout
