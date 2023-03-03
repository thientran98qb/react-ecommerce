import { Box, Button, TextField, Typography } from '@mui/material'
import { ChangeEvent, useEffect, useMemo, useState } from 'react'
type PriceFilterProps = {
  onChange: (newParams: any) => void,
  filters: any
}

const FilterPrices = ({onChange, filters}: PriceFilterProps) => {
  const [values, setValues] = useState({
    salePrice_gte: 0,
    salePrice_lte: 0
  })

  useEffect(() => {
    setValues({
      salePrice_gte: filters.salePrice_gte || 0,
      salePrice_lte: filters.salePrice_lte || 0
    })
  }, [filters.salePrice_gte, filters.salePrice_lte])

  const handleOnChange = (e: ChangeEvent<HTMLInputElement>) => {
    const {name, value} = e.target

    setValues(prevState => ({
      ...prevState,
      [name]: value
    }))
  }
  const handleSubmitFilterPrice = () => {
    if (onChange) onChange(values)
  }

  return (
    <div>
      <Box sx={{py: "10px", px: "20px"}}>
        <Typography sx={{textTransform: "uppercase", fontWeight: "bold", fontSize: "14px"}}>Chọn khoảng giá</Typography>
        <Box sx={{
          display: "flex",
          gap: "20px",
          flexWrap: "nowrap",
          alignItems: "center"
        }}>
          <TextField size='small' name='salePrice_gte' type="number" value={values.salePrice_gte} onChange={handleOnChange} variant='standard'/>
          <span>-</span>
          <TextField size='small' name='salePrice_lte' type="number" value={values.salePrice_lte} onChange={handleOnChange}  variant='standard'/>
        </Box>
        <Button sx={{my: "15px"}} variant='outlined' onClick={handleSubmitFilterPrice}>Áp dụng</Button>
      </Box>
    </div>
  )
}

export default FilterPrices
