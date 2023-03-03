import { Box, Button, Card, CardContent, FormControl, FormGroup, FormHelperText, Input, InputLabel, Stack, TextField, Typography } from '@mui/material'
import React from 'react'

type Props = {}

const LoginPage = (props: Props) => {
  return (
    <Box
      sx={{backgroundColor: "#ebebeb", width: "100%"}}
    >
      <Box sx={{display: "flex", justifyContent: "center", padding: "100px 10px"}}>
        <Card sx={{padding: "20px", borderRadius: "30px", width: "500px"}}>
          <CardContent>
            <Typography textAlign="center" variant="h5" fontWeight="bold" marginBottom="10px">Agent Login</Typography>
            <Typography textAlign="center">Hey, welcome to login my page !!!</Typography>
            <FormGroup sx={{padding: "20px 0", rowGap: "10px"}}>
              <FormControl>
                <TextField label="Username" variant="outlined" size='small'/>
                <FormHelperText id="my-helper-text">We'll never share your email.</FormHelperText>
              </FormControl>
              <FormControl>
                <TextField label="Password" variant="outlined" size='small'/>
                <FormHelperText id="my-helper-text">We'll never share your email.</FormHelperText>
              </FormControl>
              <Button variant='contained'>Sign In</Button>
            </FormGroup>
            <Box>
              <Typography textAlign="center">-- Or sign in with --</Typography>
              <Stack
                direction="row"
                justifyContent="center"
                alignItems="center"
                spacing={2}
                marginY={2}
              >
                <Button variant='outlined'>Facebook</Button>
                <Button variant='outlined'>Google</Button>
                <Button variant='outlined'>Github</Button>
              </Stack>
              <Typography textAlign="center">Don't have account? <Typography fontWeight="bold" component="span">Request Now</Typography></Typography>
            </Box>
          </CardContent>
        </Card>
      </Box>
    </Box>
  )
}

export default LoginPage
