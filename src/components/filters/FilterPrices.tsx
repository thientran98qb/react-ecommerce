import { Box, Button, TextField, Typography } from '@mui/material'
import { ChangeEvent, useState } from 'react'
type PriceFilterProps = {
  onChange: (newParams: any) => void
}

const FilterPrices = ({onChange}: PriceFilterProps) => {
  const [values, setValues] = useState({
    salePrice_gte: 0,
    salePrice_lte: 0
  })
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

      {/* <Divider/>
      <Box sx={{py: "10px", px: "20px"}}>
        <Typography sx={{textTransform: "uppercase", fontWeight: "bold", fontSize: "14px"}}>Dịch vụ</Typography>
        <Form>
          <FormControlLabel control={<Checkbox defaultChecked />} label="Có khuyến mãi" />
          <FormControlLabel control={<Checkbox />} label="Vận chuyển miễn phí" />
        </Form>
      </Box> */}
    </div>
  )
}

export default FilterPrices
