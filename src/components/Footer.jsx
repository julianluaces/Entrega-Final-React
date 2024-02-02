import React from 'react'
import './styles.css'
import {Breadcrumb, BreadcrumbItem, BreadcrumbLink, Link, BreadcrumbSeparator,} from '@chakra-ui/react'



const Footer = () => {
  return (


    <div className='footer'>
 <Breadcrumb separator='-'>
  <BreadcrumbItem>
    <Link to={"/"}>Home</Link>
  </BreadcrumbItem>

  <BreadcrumbItem>
    <BreadcrumbLink href='#1'>About</BreadcrumbLink>
  </BreadcrumbItem>

  <BreadcrumbItem isCurrentPage>
    <BreadcrumbLink href='#'>Contact</BreadcrumbLink>
  </BreadcrumbItem>
</Breadcrumb>
    </div>



  )
}

export default Footer