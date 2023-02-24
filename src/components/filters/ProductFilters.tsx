import { Box, Divider } from '@mui/material'
import FilterCategories from './FilterCategories'
import FilterPrices from './FilterPrices'

type Props = {
  onChange: (newFilters: any) => void
}

const ProductFilters = ({onChange}: Props) => {
  const onChangeFilters = (newFilters: any) => {
    if (onChange) onChange(newFilters)
  }

  return (
    <Box>
      <FilterCategories onChange={onChangeFilters}/>
      <Divider/>
      <FilterPrices onChange={onChangeFilters}/>
    </Box>
  )
}

export default ProductFilters
