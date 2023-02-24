import { Paper, Skeleton } from '@mui/material'
import React from 'react'

type Props = {
  size: number
}

const ProductSkeleton = ({size}: Props) => {
  const arrays = new Array(size).fill(null)

  return (
    <>
      {arrays.map((_, index) => <ProductSkeletonItem key={index}/>)}
    </>
  )
}

export const ProductSkeletonItem = () => {
  return (
    <Paper sx={{padding: "5px"}} elevation={3}>
      <Skeleton sx={{ height: 190 }} animation="wave" variant="rectangular" />
      <Skeleton animation="wave" variant="text"/>
      <Skeleton animation="wave" variant="text"/>
    </Paper>
  )
}

export default ProductSkeleton
