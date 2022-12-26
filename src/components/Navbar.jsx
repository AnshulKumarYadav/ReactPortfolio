import React from 'react';
import { useDisclosure } from '@chakra-ui/react'
import { Grid, 
    GridItem ,
    Image,
    List,
    ListItem,
    ListIcon,
    OrderedList,
    UnorderedList,
    Flex, 
    Link,
    Box,
    Modal,
    Button,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalCloseButton,
    ModalBody,
    ModalFooter} from '@chakra-ui/react';

import {FaAddressBook, FaComment, FaHome, FaMoon, FaProjectDiagram, FaRegMoon, FaRegSun, FaSun, FaUser} from 'react-icons/fa'
import logo from '../assets/Logo.png'
import resume from '../assets/Anshul_Kumar_Yadav.pdf';


export default function Navbar(props) {
    const { isOpen, onOpen, onClose } = useDisclosure()
  return (
    <>
      <Grid backgroundColor='white' position='fixed' left='0' right='0' top='0' h='80px' templateRows='repeat(2, 1fr)' templateColumns='repeat(5, 1fr)' gap={4} boxShadow='rgba(0, 0, 0, 0.24) 0px 3px 8px'>
        <GridItem rowSpan={2} colSpan={1}>
            <Image src={logo} boxSize='100px'/>
        </GridItem>
        <GridItem rowSpan={2} colSpan={3} p='10px'>
            <UnorderedList>
                <List variant='outline' display='flex' justifyContent='space-around' alignItem='center'>
                    <ListItem className='listItems' ><FaHome/> Home</ListItem>
                    <ListItem className='listItems' ><FaUser/> About</ListItem>
                    <ListItem className='listItems' ><FaAddressBook/> Skills</ListItem>
                    <ListItem className='listItems' ><FaProjectDiagram/> Projects</ListItem>
                    <ListItem className='listItems' ><FaComment/> Contact me</ListItem>
                </List>
            </UnorderedList>
        </GridItem>
        <GridItem rowSpan={2} colSpan={1} fontSize='25px'>
            {/* <Box onClick={props.mode} boxSize={20} border='1px solid blue'>
                { 
                   props.theme == "light"?<FaMoon/>:<FaSun/>
                }
            </Box> */}

<Button onClick={onOpen}>Resume</Button>
<Modal blockScrollOnMount={false} isOpen={isOpen} onClose={onClose}>
  <ModalOverlay />
  <ModalContent>
    <ModalHeader>My Resume</ModalHeader>
    <ModalCloseButton />
    <ModalBody>
        <iframe src={resume} frameborder="0"/>
    </ModalBody>

    <ModalFooter>
      <Button colorScheme='blue' mr={3} onClick={onClose}>
        Close
      </Button>
      <Button variant='ghost'>Secondary Action</Button>
    </ModalFooter>
  </ModalContent>
</Modal>
            
        </GridItem>
      </Grid>
    </>
  )
}
