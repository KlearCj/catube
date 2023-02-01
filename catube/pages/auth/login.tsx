import { loginUser } from '@/api';
import { Button, Container, Paper, PasswordInput, TextInput, Title, Stack } from '@mantine/core';
import { useForm } from '@mantine/form';
import { AxiosError } from 'axios';
import Head from 'next/head';
import { useRouter } from 'next/router';
import React from 'react'
import { useMutation } from 'react-query';



const Login = () => {
  const router = useRouter()

  const form = useForm({
    initialValues: {
      email: '',
      password: '',
    }
  });

  const mutation = useMutation<string, AxiosError, Parameters<typeof loginUser>['0']>(loginUser, {
    onSuccess: () => { router.push('/') },
  })

  const handleSubmit = (values: any) => mutation.mutate(values)

  return (<>
    <Head>
      <title>Login User</title>
    </Head>
    <Container>
      <Title>
        Login
      </Title>
      <Paper withBorder shadow='md' p={30} mt={30} radius='md' >
        <form onSubmit={form.onSubmit(handleSubmit)}>
          <Stack>

            <TextInput
              label="Email"
              placeholder='name@example.com'
              required
              {...form.getInputProps('email')}
            />

            <PasswordInput label='Password'
              placeholder='Introduce a strong password' required {...form.getInputProps('password')} />

            <Button type='submit'>
              Login
            </Button>
          </Stack>
        </form>
      </Paper>
    </Container>
  </>
  )
}

export default Login