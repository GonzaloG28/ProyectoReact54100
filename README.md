
# Proyecto React Coder

Este proyecto se basa simulando un E-commerse de una perfumeria.

Todas las partes de la web funcionan, tanto la vista del detalle del producto donde te muestra su descripcion, precio y
tienes la opcion de agregar al carrito la cantidad que desees dependiendo del stock del producto.

Los links del navBar te muestran los productos dependiendo de su categoria.

Al momento de ir al carrito, si este no contiene los productos muestra un mensaje de que esta vacio. Si contiene productos se va sumando la cantidad total
y el precio total.

Todos los productos estan almacenados en un firestore("items") y las ordenes que generan los clientes tambien se almacenan ahi("orders").

Al momento de finalizar la compra debes completar un formulario para concretar la compra, debes validar tu email dos veces, si los correos no son similares el boton de comprar no se activa.

Al finalizar la compra te muestra un mensaje con el numero de orden que seria el ID de la orden traida desde la firestore.

Toda la navegabilidad de la web funciona a traves de react-router.

Hice que el cart sea persistente utilizando localStorage, los productos se mantienen al recargar la pagina.

- Utilice el hook useForm de react-hook-form para gestionar el envio del formulario('register' para registrar cada campo del formulario) y para manejar errores(en este caso para que valide si los correos son iguales).





