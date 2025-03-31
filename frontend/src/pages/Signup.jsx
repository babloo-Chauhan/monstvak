import React from 'react'
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


const Signup = () => {
  return (
     <div className='flex justify-center mt-9 mb-5'>
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
                  <Input label="Full Name" size="lg" />
                      <Input label="Email" size="lg" />
                      <Input label="Password" size="lg" />
                      <div className="-ml-2.5">
                          <Checkbox label="Remember Me" />
                      </div>
                  </CardBody>
                  <CardFooter className="pt-0">
                      <Button variant="gradient" fullWidth>
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
        </div>
  )
}

export default Signup
