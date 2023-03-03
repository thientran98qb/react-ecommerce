import { yupResolver } from '@hookform/resolvers/yup';
import { Box, Button, Card, CardContent, FormGroup, Stack, Typography } from '@mui/material';
import { useForm } from 'react-hook-form';
import { BaseInput } from '../../components/BaseInput';

import * as yup from 'yup';

type Props = {}

const LoginPage = (props: Props) => {
  const schema = yup.object().shape({
    email: yup.string().required('Vui longf nhap email'),
    password: yup.string().required('Vui longf nhap password'),
  })
  const { control, handleSubmit } = useForm<Record<string, any>>({
    defaultValues: {
      email: '',
      password: ''
    },
    resolver: yupResolver(schema)
  });

  const onSubmit = (data: any) => {
    console.log(data);
  }

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
              <BaseInput name='email' control={control} label="Enter email" rules={{ required: true }}/>
              <BaseInput name='password' control={control} label="Enter password" rules={{ required: true }}/>
              <Button variant='contained' onClick={handleSubmit(onSubmit)}>Sign In</Button>
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
