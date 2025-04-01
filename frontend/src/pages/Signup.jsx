import React from 'react'
import { useState } from 'react';
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
import { registerUser } from '../context/UserContext';


const Signup = () => {
const [data, setdata] = useState({
    name: '',
    email: '',
    password: '',
    rememberMe: false
});
console.log("data " ,data)

    const handleSubmit = async(event) => {
        event.preventDefault();
      
        console.log(data);
     registerUser(data);
    };
return (
     <div className='flex justify-center mt-9 mb-5'>
            <form onSubmit={handleSubmit}>
                                <Card className="w-96">
                                <CardHeader
                                        variant="gradient"
                                        color="gray"
                                        className="mb-4 grid h-28 place-items-center"
                                >
                                        <Typography variant="h3" color="white">
                                                Sign Up
                                        </Typography>
                                </CardHeader>
                                <CardBody className="flex flex-col gap-4">
                                        <Input label="Full Name" size="lg" onChange={(e) => setdata({ ...data, name: e.target.value })} />
                                        <Input label="Email" size="lg" onChange={(e) => setdata({ ...data, email: e.target.value })} />
                                        <Input label="Password" size="lg" type="password" onChange={(e) => setdata({ ...data, password: e.target.value })} />
                                        <div className="-ml-2.5">
                                                <Checkbox label="Remember Me" onChange={(e) => setdata({ ...data, rememberMe: e.target.checked })} />
                                        </div>
                                </CardBody>
                                <CardFooter className="pt-0">
                                        <Button type='submit' variant="gradient" fullWidth>
                                                Sign Up
                                        </Button>

                                        <Typography variant="small" className="mt-6 flex justify-center">
                                                If you have already account?
                                                <Typography
                                                        as="a"
                                                        href="#signup"
                                                        variant="small"
                                                        color="blue-gray"
                                                        className="ml-1 font-bold"
                                                >
                                                        Log In
                                                </Typography>
                                        </Typography>
                                </CardFooter>
                                </Card>
                </form>
            </div>
)
}

export default Signup
