import React from 'react'
import { Card, Image, Stack, Heading, Text, Button, ButtonGroup, CardHeader, CardBody, CardFooter, Spacer } from '@chakra-ui/react'
import { Link } from 'react-router-dom'


const Item = ({ producto }) => {


  return (

    <div>

      <Card
        direction={{ base: 'column', sm: 'row' }}
        overflow='hidden'
        variant='outline'
      >
        <Image
          objectFit='cover'
          maxW={{ base: '100%', sm: '200px' }}
          src={producto.imagen} alt={producto.id}
        />

        <Stack>
          <CardBody>
            <Heading size='md'>{producto.titulo}</Heading>

            <Text py='2'>
              Stock disponible: {producto.stock}
            </Text>
            <Text py='2'>
              Precio: $ {producto.precio} .-
            </Text>


          </CardBody>

          <CardFooter>
            <Link className="ver-detalle" to={`/item/${producto.id}`}>
              <Button variant='solid' colorScheme='blue'>
                Ver detalle
              </Button>
            </Link>
          </CardFooter>
        </Stack>

      </Card>

    </div>


  )
}

export default Item