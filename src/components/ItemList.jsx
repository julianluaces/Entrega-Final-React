import Item from "./Item";


const ItemList = ({productos}) => {


console.log(productos)

  return (
    <div>
        {/* muestra productos  */}

        <div>
            {productos.map((prod)=> <Item producto={prod} key={prod.id} /> )}
        </div>

    </div>
  )
}

export default ItemList


