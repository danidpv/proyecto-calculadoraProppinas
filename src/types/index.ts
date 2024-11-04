export type MenuItem = {
    id: number,
    name: string,
    price: number
}

export type OrderItem = MenuItem & {
    quantity: number
}

/*Este archivo al ser local para usar bien la bd, de forma local
 tenemos que especificar los valores de las props de nuestros componenetes
 por eso le asignamos un tipo a los props nuestros. */