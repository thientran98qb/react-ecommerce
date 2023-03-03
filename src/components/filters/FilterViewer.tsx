import { Box, Chip } from '@mui/material'
import React, { useMemo } from 'react'

const FILTER_LIST = [
  {
    id: 1,
    getLabel: () => 'Giao hàng miễn phí',
    isRemovable: false,
    isVisiable: (filters: any) => true,
    isActive: (filters: any) => Boolean(Object.keys(filters).includes('isFreeShip')) && filters.isFreeShip === true,
    onToggle: (filters: any) => {
      const newFilters = {...filters}

      newFilters.isFreeShip = !newFilters.isFreeShip
      return newFilters
    },
    onRemove: (filters: any) => {}
  },
  {
    id: 2,
    getLabel: () => 'Có khuyến mãi',
    isRemovable: true,
    isVisiable: (filters: any) => Object.keys(filters).includes('isPromotion') && filters.isPromotion === true,
    isActive: () => true,
    onToggle: () => {},
    onRemove: (filters: any) => {
      const newFilters = {...filters}
      newFilters.isPromotion = false

      return newFilters
    }
  },
  {
    id: 3,
    getLabel: (filters: any) =>  `Khoảng giá từ ${filters.salePrice_gte} đến ${filters.salePrice_lte}`,
    isRemovable: true,
    isVisiable: (filters: any) => Object.keys(filters).includes('salePrice_gte') && Object.keys(filters).includes('salePrice_lte'),
    isActive: () => true,
    onToggle: () => {},
    onRemove: (filters: any) => {
      const newFilters = {...filters}

      delete newFilters.salePrice_gte
      delete newFilters.salePrice_lte

      return newFilters
    }
  },
  // {
  //   id: 4,
  //   getLabel: 'Danh mục',
  //   isRemovable: true,
  //   isVisiable: true,
  //   isActive: true,
  //   onToggle: () => {},
  //   onRemove: () => {}
  // }
]
const FilterViewer = ({filters, onChange = null}: any) => {
  const filterLists = useMemo(() => FILTER_LIST.filter(filter => filter.isVisiable(filters)), [filters])
  return (
    <Box padding="10px 0" sx={{display: "flex", gap: "10px"}}>
      {filterLists.map(x => (
        <Chip
          key={x.id}
          label={x.getLabel(filters)}
          clickable={!x.isRemovable}
          onDelete={x.isRemovable ? () => {
            if (!onChange) return

            const newFilters = x.onRemove(filters)
            onChange(newFilters)
          } : undefined}
          color={x.isActive(filters) ? 'primary' : 'default'}
          onClick={x.isRemovable ? undefined : () => {
            if (!onChange) return

            const newFilters = x.onToggle(filters)
            onChange(newFilters)
          }}
        />
      ))}
    </Box>
  )
}

export default FilterViewer
