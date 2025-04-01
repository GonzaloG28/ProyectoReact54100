
# Proyecto React Coder - E-commerce de Perfumería

Este proyecto es una simulación de un **E-commerce** para una perfumería, desarrollado con **React**. El objetivo principal es proporcionar una experiencia de compra sencilla y dinámica, donde los usuarios pueden explorar productos, agregar artículos al carrito y completar su compra.

## Características Principales

- **Vista de Productos**: Los usuarios pueden ver el detalle de cada producto, incluyendo su descripción, precio y cantidad disponible en stock. Además, tienen la opción de agregar al carrito la cantidad que deseen (según el stock disponible).
  
- **Navegación por Categorías**: El navbar permite a los usuarios explorar productos según su categoría, facilitando la búsqueda de lo que necesitan.

- **Carrito de Compras**: 
  - Si el carrito está vacío, se muestra un mensaje informando al usuario.
  - Si contiene productos, se actualizan automáticamente la cantidad total y el precio total.
  - El carrito es persistente mediante el uso de **localStorage**, lo que permite que los productos se mantengan incluso después de recargar la página.

- **Formulario de Compra**: 
  - Al finalizar la compra, los usuarios deben completar un formulario con su información de contacto.
  - Se realiza una validación doble del correo electrónico: el usuario debe ingresar el mismo correo dos veces para activar el botón de compra. Si los correos no coinciden, el botón permanecerá deshabilitado.

- **Confirmación de Compra**: Después de completar la compra, el usuario recibe un mensaje con el número de la orden (ID de la orden) que se genera automáticamente y se almacena en Firestore.

- **Persistencia de Datos**: Los productos y las órdenes se almacenan en **Firestore**:
  - Productos: Guardados en la colección "items".
  - Ordenes: Almacenadas en la colección "orders".

- **React-Router**: La navegación entre las diferentes secciones de la web está gestionada mediante **react-router**, lo que facilita una experiencia fluida y sin recargas.

## Tecnologías Utilizadas

- **React**: Para la construcción de la interfaz de usuario.
- **React-Router**: Para la gestión de rutas y navegación entre las diferentes vistas.
- **Firestore**: Para la persistencia de datos relacionados con productos y órdenes.
- **React Hook Form**: Para la gestión y validación de los formularios, incluyendo la validación de correos electrónicos.

## Flujo del Proyecto

1. **Explorar Productos**: Los usuarios pueden navegar a través de los productos por categoría en el navbar.
2. **Agregar al Carrito**: Los usuarios pueden agregar productos al carrito. Si el stock lo permite, pueden elegir la cantidad.
3. **Visualizar Carrito**: Si el carrito está vacío, el sistema muestra un mensaje; si no, se calcula el total de productos y el total de la compra.
4. **Formulario de Compra**: Para finalizar la compra, el usuario debe completar un formulario de contacto y validar su correo electrónico.

## Visualización del Proyecto

Puedes ver el proyecto en funcionamiento en [Aroma Oasis](https://proyecto-react54100.vercel.app/).

## Autor

[GonzaloG28](https://github.com/GonzaloG28)





