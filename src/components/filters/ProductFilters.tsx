import { Box, Divider } from '@mui/material'
import FilterCategories from './FilterCategories'
import FilterPrices from './FilterPrices'
import FilterServices from './FilterServices'

type Props = {
  onChange: (newFilters: any) => void,
  filters: any
}

const ProductFilters = ({onChange, filters}: Props) => {
  const onChangeFilters = (newFilters: any) => {
    if (onChange) onChange(newFilters)
  }

  const onChangePrices = (values: any) => {
    if (onChange) onChange(values)
  }

  return (
    <Box>
      <FilterCategories onChange={onChangeFilters}/>
      <Divider/>
      <FilterPrices onChange={onChangePrices} filters={filters}/>
      <Divider/>
      <FilterServices filters={filters} onChange={onChangeFilters}/>
    </Box>
  )
}

export default ProductFilters
