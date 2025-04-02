import React, { useState } from 'react'
import {
    Card,
    CardHeader,
    CardBody,
    CardFooter,
    Typography,
    Input,
    Checkbox,
    Button,
} from "@material-tailwind/react";
import { Link } from 'react-router-dom';
import { loginuser } from '../context/UserContext';
import { useNavigate } from 'react-router-dom';
const Login = () => {
    const navigate = useNavigate();

    const [data, setdata] = useState({
        email: "",
        password: ""
    });
    console.log(data)
    const submitHandler = (event) => {
        event.preventDefault();
        loginuser(data)
            .then((response) => {
                console.log(response.data.accesstoken)
                localStorage.setItem('token', response.data.accesstoken);
                
                if (response.success) {
                    navigate('/account');
                } else {
                    alert('Login failed. Please check your credentials.');
                }
            })
            .catch((error) => {
                console.error('Error during login:', error);
                alert('An error occurred. Please try again.');
            });

    }
    return (
        <div className='flex justify-center mt-9 mb-5'>
            <form onSubmit={submitHandler}>
                <Card className="w-96">
                    <CardHeader
                        variant="gradient"
                        color="gray"
                        className="mb-4 grid h-28 place-items-center"
                    >
                        <Typography variant="h3" color="white">
                            Sign In
                        </Typography>
                    </CardHeader>
                    <CardBody className="flex flex-col gap-4">
                        <Input label="Email" size="lg" onChange={(e) => { setdata({ ...data, email: e.target.value }) }} />
                        <Input label="Password" size="lg" onChange={(e) => { setdata({ ...data, password: e.target.value }) }} />
                        <div className="-ml-2.5">
                            <Checkbox label="Remember Me" />
                        </div>
                    </CardBody>
                    <CardFooter className="pt-0">

                        <Button variant="gradient" fullWidth type='submit'>
                            Sign In
                        </Button>
                        <Typography variant="small" className="mt-6 flex justify-center">
                            Don&apos;t have an account?
                            <Link to="/signup">
                                <Typography
                                    as="a"
                                    href="#signup"
                                    variant="small"
                                    color="blue-gray"
                                    className="ml-1 font-bold"
                                >
                                    Sign up
                                </Typography>
                            </Link>
                        </Typography>
                    </CardFooter>
                </Card>
            </form>
        </div>
    )
}

export default Login
