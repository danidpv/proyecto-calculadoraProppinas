import type { MenuItem } from "../types" //Importamos tipo para los props

type MenuItemProps = { //Para que los props no sean anys
  item: MenuItem,
  addItem: (item: MenuItem) => void  //Especificamos de donde sale el item
}
//Cada parametro o prop creado como type se debe pasar en menuitem
export default function MenuItem({item, addItem} : MenuItemProps) { //especificamos que type es
  return (
    <button
    className=" border-2 border-teal-400 hover:bg-teal-200  w-full p-3 flex justify-between  "
    onClick={()=> addItem(item)}>
    <p>{item.name}</p>
    <p className=" font-black">{item.price} €</p>
    
    </button>
  )
}
  