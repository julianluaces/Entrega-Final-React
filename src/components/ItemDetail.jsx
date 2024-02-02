import {Card, CardBody, Image, Stack, Heading, Text, Divider, CardFooter, ButtonGroup, Button } from '@chakra-ui/react'
import './styles.css'

const ItemDetail = ({item}) => {
  return (

<div className='item-detalle'>
<Card maxW='sm'  >
  <CardBody>
    <Image
      src={item.imagen} alt={item.id}
      borderRadius='lg'
    />
    <Stack mt='6' spacing='3'>
      <Heading size='md'> {item.titulo} </Heading>
      <Text>
        {item.descripcion}
      </Text>
      <Text color='blue.600' fontSize='2xl'>
        ${item.precio}.-
      </Text>
    </Stack>
  </CardBody>
  <Divider />
  <CardFooter>
    <ButtonGroup spacing='2'>
      <Button variant='solid' colorScheme='blue'>
        Comprar 
      </Button>
      <Button variant='ghost' colorScheme='blue'>
        Añadir al carrito
      </Button>
    </ButtonGroup>
  </CardFooter>
</Card>
</div>
  


  )
}







export default ItemDetail