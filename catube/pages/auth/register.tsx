import React from 'react'
import { useForm } from '@mantine/form'
import { useMutation } from 'react-query';
import { registerUser } from '@/api';
import { AxiosError } from 'axios';
import Head from 'next/head';
import { Button, Container, Paper, PasswordInput, Stack, TextInput, Title } from '@mantine/core';
import { showNotification, updateNotification } from '@mantine/notifications';
import { useRouter } from 'next/router';

const Register = () => {

    const router= useRouter()

    const form = useForm({
        initialValues: {
            email: '',
            username: '',
            password: '',
            confirmPassword: '',
        }
    });

    const mutation = useMutation<string, AxiosError, Parameters<typeof registerUser>['0']>(registerUser,{
        onMutate: ()=>{
            showNotification({id:'register', title:'Creating account', message: 'Please wait... ', loading: true});
            router.push('/auth/login')
        },
        onSuccess:()=>{updateNotification({id:'register', title:'Success', message: 'Successfully created account'})},
        onError:()=>{updateNotification({id:'register', title:'Error', message: 'Could not create account'})}
    })

    const handleSubmit = (values: any) => mutation.mutate(values)

    return (
        <>
            <Head>
                <title>Register User</title>
            </Head>
            <Container>
                <Title>
                    Register
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

                        <TextInput
                            label="Username"
                            placeholder='kittycat'
                            required
                            {...form.getInputProps('username')}
                        />

                        <PasswordInput label='Password'
                            placeholder='Introduce a strong password' required {...form.getInputProps('password')}/>
<PasswordInput label='Confirm Password'
                            placeholder='Introduce the same strong password' required {...form.getInputProps('confirmPassword')}/>




                        <Button type='submit'>
                            Register
                        </Button>
</Stack>
                    </form>
                </Paper>
            </Container>
        </>
    )
}

export default Register