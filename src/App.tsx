import { Box, Container, Grid, Pagination, Paper, Tab, Tabs, Typography } from '@mui/material';
import { styled } from '@mui/material/styles';
import { useEffect, useState } from 'react';
import apiProducts from './api/apiProducts';
import HeaderNav from './components/HeaderNav';
import ProductItem from './components/ProductItem';
import ProductSkeleton from './components/ProductSkeleton';
import ProductFilters from './components/filters/ProductFilters';
import ProductType from './types/product';
import { PaginationType } from './types/response';

const CustomizedPagination = styled(Pagination)`
  .MuiPagination-ul {
    justify-content: center
  }
`;

function App() {
  const LABELTAB = [
    {
      label: "Giá cao đến thấp",
      valueSort: "DESC"
    },
    {
      label: "Giá thấp đến cao",
      valueSort: "ASC"
    }
  ]
  const [products, setProducts] = useState<ProductType[] | []>([])
  const [pagination, setPagination] = useState<PaginationType>()
  const [loading, setLoading] = useState(true)
  const [tab, setTab] = useState("DESC")
  const [filters, setFilters] = useState({
    _page: 1,
    _limit: 9,
    _sort: 'salePrice:ASC'
  })
  useEffect(() => {
    const getProducts = async () => {
      const products = await apiProducts.getAllProducts(filters)
      setLoading(false)
      setProducts(products.data)
      setPagination(products.pagination)
    }
    getProducts()
  }, [filters])

  const handleChangePagination = (e: any, value: number) => {
    setLoading(true)
    setFilters(prevState => {
      return {
        ...prevState,
        _page: value
      }
    })
  }

  const handleChangeTab = (e: any, value: any) => {
    setTab(value)

    setFilters(prevState => {
      return {
        ...prevState,
        "_sort": `salePrice:${value}`
      }
    })
  }

  const handleChangeCategory = (newFilters: any) => {
    setLoading(true)
    setFilters(prevState => ({
      ...prevState,
      ...newFilters
    }))
  }

  return (
    <Box sx={{
      backgroundColor: "#ebebeb",
    }}>
      <HeaderNav />
      <Container sx={{
        marginTop: "20px"
      }}>
        <Grid container spacing={2}>
          <Grid item xs={6} md={4}>
            <Paper sx={{borderRadius: "0"}} elevation={0}>
              <ProductFilters onChange={handleChangeCategory}/>
            </Paper>
          </Grid>
          <Grid item xs={6} md={8}>
            <Paper sx={{px: "20px", py: "10px", borderRadius: "0"}} elevation={0}>
              <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                <Tabs value={tab} onChange={handleChangeTab} aria-label="basic tabs example">
                  {LABELTAB.map(({label, valueSort}, index) => (<Tab key={index} label={label} value={valueSort} />))}
                </Tabs>
              </Box>
              <Typography variant='h5' py={2} sx={{fontWeight: "bold"}}>Bộ sưu tập nổi bật</Typography>
              <Box
                sx={{
                  display: "grid",
                  gridTemplateColumns: "1fr 1fr 1fr 1fr",
                  gap: "15px"
                }}
              >
                {!loading ? products.map((product, index) => (
                  <ProductItem key={index} product={product}/>
                )): <ProductSkeleton size={filters._limit}/>}
              </Box>
              {pagination ?
                <CustomizedPagination
                  sx={{
                    my: "20px"
                  }}
                  count={Math.ceil(pagination.total / pagination.limit)} page={filters._page}
                  onChange={handleChangePagination}
                  color="secondary"
                /> : null
              }
            </Paper>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}

export default App;
