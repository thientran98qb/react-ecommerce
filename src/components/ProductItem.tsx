import { Box, Paper, Typography } from '@mui/material'
import React from 'react'
import { formatPrice, titleCase } from '../helpers/formatString'
import ProductType from '@/types/product'

interface ProductItemType {
  product: ProductType
}

const ProductItem = ({product}: ProductItemType) => {

  const urlImage = product.thumbnail ? `https://api.ezfrontend.com${product.thumbnail?.url}` : `https://via.placeholder.com/444`

  return (
    <Paper elevation={3}>
      <img
        src={urlImage}
        alt=""
        style={{
          height: "150px",
          width: "100%",
          objectFit: 'cover'
        }}
      />
      <Box sx={{
        padding: '10px',
        textAlign: 'center'
      }}>
        <Typography>{titleCase(product.name)}</Typography>
        <Typography sx={{textDecoration: 'line-through'}}>{formatPrice(product.originalPrice)}</Typography>
        <Typography>{formatPrice(product.salePrice)}</Typography>
      </Box>
    </Paper>
  )
}

export default ProductItem
