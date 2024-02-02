import React from 'react'
import CartWidget from './CartWidget'
import { Flex, Spacer, Box, Menu, MenuButton, MenuList, MenuItem } from '@chakra-ui/react'
import './styles.css'
import { Link } from 'react-router-dom'


const Navbar = () => {
    return (
        <div className='navbar-contenedor'>


            <Flex>

           <Link to={"/"}>    <Box p='6' > SYS COMPUTACIÓN </Box>  </Link>    

                <Spacer />

                <Menu>
                    <MenuButton>
                        Productos
                    </MenuButton>
                    <MenuList>
                        <MenuItem>Notebooks</MenuItem>
                        <MenuItem>PC de Escritorio</MenuItem>
                        <MenuItem>Sillas Gamer</MenuItem>
                        <MenuItem>Periféricos</MenuItem>
                    </MenuList>
                </Menu>

                <Spacer />

                <Box p='6' >

                    <CartWidget />

                </Box>

            </Flex>
   



        </div>
    )
}

export default Navbar