import apiCategories from '../../api/apiCategories'
import { Box, List, ListItem, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'
type CategoryType = {
  name: string,
  id: number | string
}
type CategoriesProps = {
  onChange: (newParams: any) => void
}

const FilterCategories = ({onChange}: CategoriesProps) => {
  const [categories, setCategories] = useState<CategoryType[]>([])

  useEffect(() => {
    const getCategories = async () => {
      const {data} = await apiCategories.getCategories()
      const categoriesCustom = data.map((el: any) => ({
        "id": el.id,
        "name": el.name
      }))
      setCategories(categoriesCustom)
    }
    getCategories()
  }, [])

  const handleClickCategory = (category: CategoryType) => {
    if(onChange) onChange({
      "category.id": category.id
    })
  }
  return (
    <Box sx={{py: "10px", px: "20px"}}>
      <List subheader={<Typography sx={{textTransform: "uppercase", fontWeight: "bold", fontSize: "14px"}}>Danh mục sản phẩm</Typography>}>
        {categories && categories.length > 0 ?
          categories.map(category => (
            <ListItem disablePadding sx={{py: "2px"}} key={category.id}>
              <Typography
                sx={{cursor: "pointer", textDecoration: "underline", ":hover": {opacity: "0.7"}, fontSize: "14px"}}
                onClick={() => handleClickCategory(category)}
              >
                {category.name}
              </Typography>
            </ListItem>
          ))
        : null }
      </List>
    </Box>
  )
}

export default FilterCategories
