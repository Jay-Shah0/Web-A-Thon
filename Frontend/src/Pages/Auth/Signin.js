import React from 'react'
import { Button } from '@chakra-ui/button'
import { VStack, StackDivider, Flex, Box } from '@chakra-ui/layout'
import { FormControl, FormLabel } from '@chakra-ui/form-control'
import { Input, InputGroup, InputRightElement } from '@chakra-ui/input'
import { useToast } from '@chakra-ui/react'
import { useState } from 'react';
import { useNavigate } from 'react-router-dom'
import axios from "axios";
import './Signin.css' // Import your custom CSS file (optional)

const Login = () => {

  const [email, setemail] = useState();
  const [password, setpassword] = useState();
  const [show1, setshow1] = useState(false);
  const [Loading, setLoading] = useState(false);

  const toast = useToast();
  const navigate = useNavigate();

  const handleClick1 = () => setshow1(!show1);

  const LogInHandler = async () => {
    setLoading(true);
    if (!email || !password) {
      toast({
        title: 'Entre all Fields',
        status: "warning",
        duration: 5000,
        isClosable: true,
        position: "bottom",
      });
      setLoading(false);
      return;
    }

    console.log(email, password);
    try {
      const config = {
        headers: {
          "Content-type": "application/json",
        },
      };
      const { data } = await axios.post(
        "http://localhost:5000/user/login",
        {
          email,
          password,
        },
        config
      );
      console.log(data);
      toast({
        title: "Login Successful",
        status: "success",
        duration: 5000,
        isClosable: true,
        position: "bottom",
      })
      localStorage.setItem("userInfo", JSON.stringify(data));
      setLoading(false);
      navigate("/Home");
    } catch (error) {
      toast({
        title: "Error Occured!",
        description: "Failed",
        status: "error",
        duration: 5000,
        isClosable: true,
        position: "bottom",
      });
      setLoading(false);
    }
  };

  return (
    <Flex
      width="100vw"
      height="100vh"
      alignItems="center"
      justifyContent="center"
      // Optional background styling
      bgImage="url(path/to/your/background.jpg)" // Replace with your image path
      bgSize="cover"
      bgPosition="center"
    >
      <Box
        width="400px"
        p={8}
        borderRadius="lg"
        boxShadow="lg"
        backgroundColor="white"
      >
        <VStack
          divider={<StackDivider borderColor='grey.200' />}
          spacing={4}
          align='stretch'
        >
          <FormControl id='email' isRequired>
            <FormLabel className='input'>Email</FormLabel>
            <Input
              placeholder='Enter Your Email'
              onChange={(e) => setemail(e.target.value)}
            />
          </FormControl>
          <FormControl id='email' class = "chakra-input css-1cjy4zv"isRequired>
            <FormLabel color={"white"}>Password</FormLabel>
            <InputGroup size="md">
              <Input
                type={show1 ? "text" : "password"}
                placeholder="Enter Password"
                onChange={(e) => setpassword(e.target.value)}
              />
              <InputRightElement width="4.5rem">
                <Button 
                 h="1.5rem" size="sm" onClick={handleClick1}>
                  {show1 ? "Hide" : "Show"}
                </Button>
              </InputRightElement>
            </InputGroup>
          </FormControl>
          <Button
            colorScheme="blue"
            width="100%"
            style={{ marginTop: 15 }}
            onClick={LogInHandler}
            isLoading={Loading}
          >
            Log In
      </Button>
      </VStack>

    </Box>
</Flex>    
  )
  }

export default Login