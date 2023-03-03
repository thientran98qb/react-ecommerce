import { Box, Container, Grid, Pagination, Paper, Tab, Tabs, Typography } from '@mui/material';
import { styled } from '@mui/material/styles';
import { useEffect, useMemo, useState } from 'react';
import apiProducts from './api/apiProducts';
import HeaderNav from './components/HeaderNav';
import ProductItem from './components/ProductItem';
import ProductSkeleton from './components/ProductSkeleton';
import ProductFilters from './components/filters/ProductFilters';
import ProductType from './types/product';
import { PaginationType } from './types/response';
import FilterViewer from './components/filters/FilterViewer';
import { useNavigate, useLocation } from 'react-router-dom';
import queryString from 'query-string'
const CustomizedPagination = styled(Pagination)`
  .MuiPagination-ul {
    justify-content: center
  }
`;

function App() {
  const navigate = useNavigate()
  const location = useLocation()
  const queryParams = useMemo(() => {
    const params = queryString.parse(location.search, {parseBooleans: true, parseNumbers: true})
    return {
      ...params,
      _page: Number.parseInt(params._page as string) || 1,
      _limit: Number.parseInt(params._limit as string) || 9,
      _sort: params._sort || 'salePrice:ASC'
    }
  }, [location.search])

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

  useEffect(() => {
    navigate({
      pathname: location.pathname,
      search: queryString.stringify(queryParams)
    })
  }, [navigate ,queryParams])
  useEffect(() => {
    const getProducts = async () => {
      const products = await apiProducts.getAllProducts(queryParams)
      setLoading(false)
      setProducts(products.data)
      setPagination(products.pagination)
    }
    getProducts()
  }, [queryParams])

  const handleChangePagination = (e: any, value: number) => {
    setLoading(true)
    const filters = {
      ...queryParams,
      _page: value
    }
    navigate({
      pathname: location.pathname,
      search: queryString.stringify(filters)
    })
  }

  const handleChangeTab = (e: any, value: any) => {
    setTab(value)

    const filters = {
      ...queryParams,
      _sort: `salePrice:${value}`
    }
    navigate({
      pathname: location.pathname,
      search: queryString.stringify(filters)
    })
  }

  const handleChangeCategory = (newFilters: any) => {
    setLoading(true)
    const filters = {
      ...queryParams,
      ...newFilters
    }
    navigate({
      pathname: location.pathname,
      search: queryString.stringify(filters)
    })
  }

  const handleSetNewFilter = (newFilters: any) => {
    setLoading(true)
    navigate({
      pathname: location.pathname,
      search: queryString.stringify(newFilters)
    })
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
              <ProductFilters filters={queryParams} onChange={handleChangeCategory}/>
            </Paper>
          </Grid>
          <Grid item xs={6} md={8}>
            <Paper sx={{px: "20px", py: "10px", borderRadius: "0"}} elevation={0}>
              <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                <Tabs value={tab} onChange={handleChangeTab} aria-label="basic tabs example">
                  {LABELTAB.map(({label, valueSort}, index) => (<Tab key={index} label={label} value={valueSort} />))}
                </Tabs>
              </Box>
              <FilterViewer filters={queryParams} onChange={handleSetNewFilter} />
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
                )): <ProductSkeleton size={queryParams._limit}/>}
              </Box>
              {pagination ?
                <CustomizedPagination
                  sx={{
                    my: "20px"
                  }}
                  count={Math.ceil(pagination.total / pagination.limit)} page={queryParams._page}
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
