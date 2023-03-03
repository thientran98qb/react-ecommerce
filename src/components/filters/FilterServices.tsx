import { Box, Checkbox, FormControlLabel, FormGroup, Typography } from '@mui/material'
import React, { ChangeEvent, useState } from 'react'

type Props = {
  onChange: (newFilters: any) => void,
  filters: any
}

const FilterServices = ({onChange, filters}: Props) => {
  const hanldeSelectOption = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, checked } = e.target
    onChange({
      [name]: checked
    })
  }
  return (
    <Box sx={{py: "10px", px: "20px"}}>
      <Typography sx={{textTransform: "uppercase", fontWeight: "bold", fontSize: "14px"}}>Dịch vụ</Typography>
      <FormGroup>
        <FormControlLabel control={<Checkbox name="isPromotion" checked={Boolean(filters.isPromotion)} onChange={hanldeSelectOption} />} label="Có khuyến mãi" />
        <FormControlLabel control={<Checkbox name="isFreeShip" checked={Boolean(filters.isFreeShip)} onChange={hanldeSelectOption} />}  label="Vận chuyển miễn phí" />
      </FormGroup>
    </Box>
  )
}

export default FilterServices
