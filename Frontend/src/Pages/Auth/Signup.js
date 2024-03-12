import React from 'react'
import { Button } from '@chakra-ui/button'
import { VStack,StackDivider, Flex, Box } from '@chakra-ui/layout'
import {  FormControl, FormLabel } from '@chakra-ui/form-control'
import { Input,InputGroup,InputRightElement } from '@chakra-ui/input';
import { useToast } from '@chakra-ui/react'
import { useState } from 'react';
import { useNavigate } from "react-router-dom";
import axios from "axios";


const Signup = () => {

  
  const [show1, setshow1] = useState(false);
  const [show2, setshow2] = useState(false);
  const [name, setname] = useState();
  const [email, setemail] = useState();
  const [confirmpassword, setconfirmpassword] = useState();
  const [password, setpassword] = useState();
  const [Loading, setLoading] = useState(false);
  const [pic, setPic] = useState();
  const toast = useToast();
  const navigate = useNavigate();
  
  const handleClick1 = () => setshow1(!show1);
  const handleClick2 = () => setshow2(!show2);

  // const postdetails = async (pic) => {
  //   setLoading(true);
  //   if(pic === undefined){
  //      toast({
  //         title: 'This is not file',
  //         description: "Please select a image",
  //         status: "warning",
  //         duration: 5000,
  //         isClosable: true,
  //       })
  //       return;
  //   }
  //   if ( pic.type === "image/jpeg" || pic.type === "image/png" ) {
  //      const data = new FormData();
  //     data.append("file", pic);
  //     data.append("upload_preset", "chat-app");
  //     data.append("cloud_name", "piyushproj");
  //     fetch("https://api.cloudinary.com/v1_1/ddfbcjpi4/image/upload", {
  //       method: "post",
  //       body: data,
  //     })
  //       .then((res) => res.json())
  //       .then((data) => {
  //         setPic(data.url.toString());
  //         console.log(data.url.toString());
  //         setLoading(false);
  //       })
  //       .catch((err) => {
  //         console.log(err);
  //         setLoading(false);
  //       });
  //   } else {
  //     toast({
  //       title: "Please Select an Image!",
  //       status: "warning",
  //       duration: 5000,
  //       isClosable: true,
  //     });
  //     setLoading(false);
  //     return;
  //   }
       
  // }

  const SignUpHandler = async() => {  
     setLoading(true);
    if (!name || !email || !password || !confirmpassword) {
      toast({
        title: "Please Fill all the Feilds",
        status: "warning",
        duration: 5000,
        isClosable: true,
        position: "bottom",
      });
      setLoading(false);
      return;
    }
    if (password !== confirmpassword) {
      toast({
        title: "Passwords Do Not Match",
        status: "warning",
        duration: 5000,
        isClosable: true,
        position: "bottom",
      });
      return;
    }
    console.log(name, email, password, pic);
    try {
      const config = {
        headers: {
          "Content-type": "application/json",
        },
      };
      const { data } = await axios.post(
        "http://localhost:5000/user",
        {
          name,
          email,
          password,
          pic,
        },
        config
      );
      console.log(data);
      toast({
        title: "Registration Successful",
        status: "success",
        duration: 5000,
        isClosable: true,
        position: "bottom",
      });
      localStorage.setItem("userInfo", JSON.stringify(data));
      setLoading(false);
      navigate("/Home");
    } catch (error) {
      toast({
        title: "Error Occured!",
        description: "Already Exist",
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
        <FormControl id='first-name' isRequired>
            <FormLabel className='input'>First Name</FormLabel>
            <Input
              placeholder='Enter Your Name'
              onChange={(e) => setname(e.target.value)}
            />
        </FormControl>
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
      <FormControl id='email' class = "chakra-input css-1cjy4zv"isRequired>
            <FormLabel color={"white"}>Password</FormLabel>
            <InputGroup size="md">
              <Input
                type={show2 ? "text" : "password"}
                placeholder="Enter Password"
                onChange={(e) => setconfirmpassword(e.target.value)}
              />
              <InputRightElement width="4.5rem">
                <Button 
                 h="1.5rem" size="sm" onClick={handleClick2}>
                  {show2 ? "Hide" : "Show"}
                </Button>
              </InputRightElement>
            </InputGroup>
          </FormControl>
      {/* <FormControl id="pic">
        <FormLabel>Upload your Picture</FormLabel>
        <Input
          type="file"
          p={1.5}
          accept="image/*"
          onChange={(e) => postdetails(e.target.files[0])}
        />
      </FormControl> */}
       <Button
        colorScheme="blue"
        width="100%"
        style={{ marginTop: 15 }}
        onClick={SignUpHandler}
        isLoading={Loading}
      >
        Sign Up
      </Button>
    </VStack>
    </Box>
  </Flex> 
  )
}

export default Signup