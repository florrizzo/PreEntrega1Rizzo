# Rizzo E-commerce
En este proyecto se presenta un e-commerce fan store dedicado a la venta de productos de la saga Harry Potter.

Esta creado con React, y almacenado en una base de datos de Firebase.


**Para poder correrlo a nivel local se debe jecutar "npm run dev"**

# Navegación

![Navegación](./src/assets/Navegacion.gif)

_Rutas:_

_"/"_ - Se visualiza un set de productos disponibles para la compra.

_"/category/:category"_ - Se visualiza el set de productos filtrados según la categoría elegida.

_"/item/:id"_ - Se visualiza el detalle del producto elegido (foto, descripción, stock, precio, selector de cantidad y botón para agregar al carrito)

_"/cart"_ - Se visualiza el carrito con los productos seleccionados junto a la cantidad y subtotal por producto, y el precio total de la compra. Además hay un formulario para que el cliente llene sus datos, y al clickear comprar, se devuelve el id de la compra (id con que se guarda en Firebase)