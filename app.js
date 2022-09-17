

//Usaremos en estos ejercicios la página web construida en un curso
//anterior, que se encuentra publicada en:  https://angelb-mis-proyectos-web.netlify.app/

///////////////////////////////////////////////////////////

//Las siglas DOM significan Document Object Model, o lo que es lo mismo, la estructura del documento HTML.
//Una página HTML está formada por múltiples etiquetas HTML, anidadas una dentro de otra, formando un árbol
//de etiquetas relacionadas entre sí, que se denomina árbol DOM



//MANIPULACION DEL DOM-NODOS PARTE UNO

// LEER NODOS

 //document.getElementById
// obtener elemento por su ID.

// document class="getElementsByTagName"
// para obtener un elemento por el nombre de la etiqueta.

// document class=getElementsByClassName
// Para obtener un elemento mediante el nombre de la clase.

//RESULTADOS
// document.getElementById('contactos')
// <section class=​"contactos" id=​"contactos">​…​</section>​ flex
// document.getElementsByTagName('h1')
// HTMLCollection(6) [h1.heading, h1.heading, h1.heading, h1.headen, h1.heading, h1.creditos]
// document.getElementsByClassName('detalles')
// HTMLCollection []length: 0[[Prototype]]: HTMLCollectionitem: ƒ item()length: (...)namedItem: ƒ namedItem()constructor: ƒ HTMLCollection()Symbol(Symbol.iterator): ƒ values()Symbol(Symbol.toStringTag): "HTMLCollection"get length: ƒ length()[[Prototype]]: Object


//También podemos usar querySelector para las consultas
// con QuerySelector hay que usar la notación de css para llamar una etiqueta(. ó # según se llame a una clase o un id)

// document.querySelector('inicio')
// null
// document.querySelector('#inicio')
// null
// document.querySelector('.inicio')
// //querySelector toma como resultado el primersection que encuentre.


// // Si quieres consultar todos los nodos usa querySelectorAll nos da detalle de todos los nodos
//  document.querySelectorAll('section')
// // NodeList(6) [section.inicio, section#detalles, section#acerca_de, section#opiniones.opiniones, section#precios.precios, section#contactos.contactos]
// document.getElementsByTagName('h1')
// // HTMLCollection(6) [h1.heading, h1.heading, h1.heading, h1.headen, h1.heading, h1.creditos]
// //querySelector




// const nodo_list = document.querySelectorAll('section')
// // undefined
// //una vez generada la Constant, podemos usarla para llamar a diversas funciones, pero es muy limitada ya que en otras como map no da resultados

// nodo_list.length //da el resultado correcto, 6

// nodo_list.map //da resultado "undefined"

// ////////////////////////////////////////////////////

// // MANIPULACION DEL DOM-NODOS PARTE DOS

// // Las etiquetas HTML con los elementos y las características los llamamos texto
// // Así, <head>, <body>, <title>, <a>, <h1> son element
// // "My title", "My link", "My header" son text

// //  <head>
// // Element
// // <body>
// // Element
// // <title>
// // Element
// // <h1>
// // Element
// // <a>
// //Element

// // Text
// // "My title"
// // Text
// // "My header"
// // Text:
// // "My link"





// /////////////////////////////////////////////////////////////

// //CREAR Y AGREGAR

// document.createElement
// //Crea un nodo

// //Vamos a crear un elemento hijo dentro de un elemento padre

//  //Creamos una constante para el elemento padre
// const padre = document.querySelector('section.detalles')
// //undefined
// padre
// //<section class=​"detalles" id=​"detalles">​<h1 class=​"heading">​FUNCIONES​</h1>​<div class=​"caja-contenedor">​…​</div>​ flex </section>
// //Ahora creamos el nuevo nodo que será un h2
// const nuevo_nodo = document.createElement('h2')
// //undefined
// //Si revisamos section.detalles, vemos que aún no aparece el h2. Ahora vamos a vincularlo a la section.detalles
// //Para esto usamos appendChild que agrega un hijo al padre
// padre.appendChild(nuevo_nodo)
// //<h2>​</h2>
// //Creamos una constante con el texto que queremos incluir
// const texto = document.createTextNode('características especiales')
// //undefined
// //Y la vinculamos a section.detalles. Siempre la agrega al final
// nuevo_nodo.appendChild(texto)
// "características especiales"

// //Podemos realizar todas estas modificaciones con una sola linea de código
// //siempre se introduce en la parte final
// padre.append('modelos nuevos', document.createElement('p'))


// //Para insertar antes del nodo que queremos agregar, usamos:
// insertBefore

// //vamos a insertar un h2 encima de Funciones

// const nuevo = document.createElement('h2')
// //undefined
// nuevo
// //<h2>​</h2>
// //Debemos llamar a caja-contenedor que es el elemento más cercando de donde queremos crear el nuevo elemento
// undefined
// const final =document.querySelector('div.caja-contenedor')
// //undefined
// //comprobamos que la constante identifica al elemento
// //undefined

// //final
  
// //<div class=​"caja-contenedor">​…​</div>

// padre.insertBefore(nuevo, final)
// //<h2>​</h2>
// //creamos el texto del h2


// const text = document.createTextNode('nuevo nodo creado')
// //undefined
// nuevo.appendChild(text)
// //"nuevo nodo creado"

// //Una opción que nos ayuda a introducir nodos de manera multiple,
// //donde nosotros creamos conveniente

// //insertAdjacentElement

// //Vamos a crear un nuevo nodo
// undefined
// const ndo = document.createElement('p')
// undefined
// ndo
// //<p>​</p>
// final
// //<div class=​"caja-contenedor">​…​</div>

//   //Omitimos la parte de creación del texto, que es igual para todas
//  // las formas de introducir nodos:
//  //Antes que el propio elemento
// final.insertAdjacentElement('beforebegin', ndo)
// //<p>​</p>
// //Justo dentro del elemento, antes de su primer elemento hijo
// final.insertAdjacentElement('afterbegin', ndo)
// //<p>​</p>
// //Justo dentro del elemento, después de su último elemento hijo
// final.insertAdjacentElement('beforeend', ndo)
// //<p>​</p>
// //Después del propio elemento
// final.insertAdjacentElement('afterend', ndo)
// //<p>​</p>

// //////////////////////////////////////////////////////////////

// //MANIPULACION DEL DOM-NODOS PARTE TRES


// //Vamos a trabajar con el h3<Tradicionales> de Planes de precios

// //Podemos eliminarlo con remove

// const nodo_eli=$0
// //undefined
// nodo_eli
// //  < h3 class=​"titulo" > tradicionales​</ >
  
// //Vamos a buscar la etiqueta padre para verificar que dentro de ese contenedor está nuestro h3. Lo hacemos en la página web
    

// $0
// {/* < div class=​"caja" >​<h3 class=​"titulo">​tradicionales​</h3>
// ​<div class=​"tipos">​…​</div>
// ​<ul>​…​</ul>​<a href=​"#" class=​"btn">​compra ya!!​</a>
// ​</ >​ */}

// //const padre = $0
// //undefined
// //Para eliminarlo primero llamamos al padre y como parametro el nodo a eliminar

// padre.removeChild(nodo_eli)
// //<h3 class=​"titulo">​tradicionales​</h3>
// padre
// // < div class=​"caja" >
// // ​<div class=​"tipos">​…​</div>
// // ​<ul>​…​</ul>​<a href=​"#" class=​"btn">​compra ya!!​</a>
// // ​</ >
// //
// //El h3 "Tradicionales" ya está eliminado
// //El hijo a eliminar debe ser el hijo mas cercano



// //Para reemplazar vamos a usar replaceChild


// const referencia = document.querySelector('div.tipos')
// undefined
// referencia
// //<div class=​"tipos">​…​</div>
// //Si queremos eliminarlo rapidamente, podemos usar remove

// referencia.remove()
// undefined
// //El elemento ya está eliminado

// //Si vamos a reemplazar un elemento, entonces usamos replaceChild


// //Para reemplazar, necesitamos crear un nuevo nodo

// const nuevo_nodo = document.createElement('h1')
// //undefined
// nuevo_nodo.textContent = "nuevo texto"
// 'nuevo texto'

// //vamos a buscar la posición del elemento a reemplazar y buscar dicho elemento

// const papa = $0
// undefined
// papa
// //div class=​"caja">​…​</div>

// const reemplazar = $0
// //undefined
// reemplazar
// //<h3 class=​"titulo">​diadema​</h3>

// nuevo_nodo
// //<h1>​nuevo texto​</h1>

// papa.replaceChild(nuevo_nodo, reemplazar)
// //<h3 class=​"titulo">​diadema​</h3>
// papa
// // < div class=​"caja" >
// // ​<h1>​nuevo texto​</h1>
// // ​<div class=​"tipos">​…​</div>
// // ​<ul>​…​</ul>​<a href=​"#" class=​"btn">​compra ya!!​</a>
// // ​</ >

// //El elemento ya está reemplazado
// //El reemplazo se realiza a nivel de consola, ya que al ser una página alojada en un servidor,
// //al recargarla vuelve a su situación inicial

// //MANIPULACION DEL DOM-COLECCIONES

// //NodeList es una colección de nodo_list.Pero no es un Array,
// //ya que no tiene todas sus propiedades


// const lista_nodos = document.querySelectorAll('img')
// //undefined
// lista_nodos
// //NodeList(9) [img, img, img, img, img, img, img, img, img]0: img1: img2: img3: img4: img5: img6: img7: img8: imglength: 9[[Prototype]]: NodeList
// //Algunas propiedades de los array funcionan en las listas de nodos
// undefined
// lista_nodos.length
// //9
// //Pero hay otras propiedades de los array que no funcionan
// undefined
// lista_nodos.map
// //undefined

// //HTMLCollection es una colección de elementos HTML
// const coleccion = document.getElementsByTagName('h1')
// undefined
// coleccion
// //HTMLCollection(7) [h1.heading, h1.heading, h1.heading, h1.headen, h1, h1.heading, h1.creditos]0: h1.heading1: h1.heading2: h1.heading3: h1.headen4: h15: h1.heading6: h1.creditoslength: 7[[Prototype]]: HTMLCollection
// coleccion.length
// //7
// coleccion.map
// //undefined
// //Funciona con algunas propiedades de los array, pero no con otras

// //HTMLCollection es una colección de elementos HTML

// //NodeList es una colección de nodos

// //El objetivo es poder convertirlos de manera rápida a un array
// //Hay dos maneras de hacer esta conversión. Primera

// lista_nodos
// //NodeList(9) [img, img, img, img, img, img, img, img, img]
// const array = [...lista_nodos]
// //undefined
// array
// //(9) [img, img, img, img, img, img, img, img, img]
// lista_nodos.map
// //undefined
// array.map
// //ƒ map() { [native code] }
// //Segunda forma de convertir un nodeList en un array
// const array2 = Array.from(document.querySelectorAll('img'))
// //undefined
// array2
// //(9) [img, img, img, img, img, img, img, img, img]

// //MANIPULACION DEL DOM-ATRIBUTOS Y PROPIEDADES

// //Los atributos y las propiedades no son lo mismo (en javascript)
// //Los atributos se utilizan al iniciar una etiqueta o un elemento
// //Propiedades. Cambian según su modificación
// //Cualquier modificación que hagamos, se considera una propiedad

// //MANIPULACION DEL DOM-CREAR ELEMENTOS

// //Vamos a crear un elemento
// undefined
// const nuevo = document.createElement('a')
// undefined
// nuevo

// //<a>​</a>

// //Ahora creamos atributos para la etiqueta

// nuevo.className = "clase"
// 'clase'
// nuevo.id = "nuevo_id"
// 'nuevo_id'
// nuevo
// //<a class=​"clase" id=​"nuevo_id">​</a>
// //vamos a otorgar un atributo de ruta

// nuevo.setAttribute("href", "#")
// undefined
// nuevo
// //<a class=​"clase" id=​"nuevo_id" href=​"#">​</a>
// //Vamos a añadir una descripción
// undefined
// nuevo.textContent = "nuevo elemento"
// 'nuevo elemento'
// nuevo
// //<a class=​"clase" id=​"nuevo_id" href=​"#">​nuevo elemento​</a>
// //Hemos creado el nuevo elementos con sus atributos, pero aún no forma parte de nuestro DOM.

// //Queremos incluirlo en el navbar

// $0.appendChild(nuevo)
//<a class=​"clase" id=​"nuevo_id" href=​"#">​nuevo elemento​</a>
//Ya tenemos el nuevo elemento añadido en la barra de navegación


//MANIPULACION DEL DOM-EVENTOS PRIMERA PARTE

//Los eventos son las formas de controlar acciones en nuestra página web

// const enviar = document.getElementById('mensaje')

// function mensaje_uno() {
//   console.log('mensaje enviado')
// }
// function mensaje_dos() {
//   alert('mensaje guardado')
// }

//MANIPULACION DEL DOM-EVENTOS DOS

// nodo.addEventListener // Registra un evento a un objeto específico

//Para ver su funcionamiento, vamos al formulario de https://angelb-mis-proyectos-web.netlify.app/

//const enviar = $0
//undefined
//enviar
//<input type=​"submit" class=​"btn" value=​"ENVIAR">
//Hemos comprobado que es la etiqueta que queremos manipular

//vamos a generar una función para realizar una acción

//const evento=()=>{console.log('NUMERO DE CLICKS')}
//undefined
//enviar.addEventListener('click', evento)
//3 NUMERO DE CLICKS
//ya hemos generado el evento que nos registra el número de clicks

//vamos a seleccionar la parte del nombre para saber las veces que se ha usado

// const nombre = $0
// undefined
// nombre
//<input type=​"text" required>
//en el siguiente paso vamos a generar una función anónima
// const evento_dos=()=>{console.log('NUMERO DE LETRAS')}

// nombre.addEventListener('input', evento_dos)

//14-NUMERO DE LETRAS
//Nos registra el numero de letras que se presionan en el campo nombre

//para eliminar un evento se usa nodo.removeEventListener

//Este método elimina un controlador de los eventos

// const nombre = $0
// undefined
// nombre
//<input type=​"text" required>
// const evento_dos = () => { console.log('NUMERO DE LETRAS') }

// nombre.addEventListener('input', evento_dos)
// 14VM3972:1 NUMERO DE LETRAS
// //Para removerlo:
// nombre.removeEventListener('input', evento_dos)
// undefined
// enviar.removeEventListener('click', evento)
// undefined

//Hay que mencionar el type (input) y que función está escuchando (evento_dos)

//En algunos casos removeEventListener puede no funcionar

//En esto casos es mejor usar una función no anónima para crear el evento

//MANIPULACION DEL DOM-EVENTOS ESPECIALES

//En Proyecto Web

//MANIPULACION DEL DOM-OPERACIONES MULTIPLES

//Vamos aañadir elementos de manera múltiple



// const nodos = []

// for (let i = 0; i < 80; i++){
  
//   const nodo = document.createElement('input')
//   nodos.push(nodo)

// }

// document.body.append(...nodos)

//MANIPULACION DEL DOM-EVENTOS DEL MOUSE

// onclick //evento que ocurre cuando el usuario hace clic en un elemento

// function evento(){
//   alert('mensaje enviado!!!')
// }
// Para que esto funcione necesitamos llamarlo mediante un evento

// Usamos onclick en html y escuchamos la función evento desde él
// Y comprobamos que funciona


// oncontextmenu  //evento que ocurre cuando el usuario hace clic con el botón derecho
// en un elemento para abrir el menú contextual

// function evento() {
//   alert("activaste el boton derecho!!!");
// }

// ondblclick // El evento ocurre cuando el usuario hace doble clic en un elemento

// function evento() {
//   alert("Hiciste doble clic!!!");
// }

// onmousedown // el evento ocurre cuando el usuario presiona un botón delcouse sobre un elemento

// function evento() {
//   alert("Presionaste un boton del mouse!!!");

// }
  
// onmouseenter // el evento ocurre cuando el puntero se mueve sobre unelemento

// function evento(){
//   alert("Moviste el mouse sobre un elemento!!!");
// }
// onmouseleave // el evento ocurre cuando el puntero se mueve fuera de un elemento

// function evento(){
//   alert("Moviste el mouse fuera de un elemento!!!");
// }
// onmousemove // el evento ocurre cuando un usuario suelta un botón del mouse sobre un elemento

// function evento(){
//   alert("Moviste el mouse dentro de un elemento!!!");
// }
// onmouseup // el evento ocurre cuando el puntero se mueve mientras esta sobre un elemento

// function evento(){
//   alert("Soltaste el botón del mouse dentro de un elemento!!!");
// }

//MANIPULACION DEL DOM-EVENTOS DE TECLADO

// keydown //Es el evento que ocurre al presionar una tecla
//const entrada = document.getElementById('input')

//undefined
// entrada.addEventListener('keydown', function(){console.log('tecla presionada')})
//undefined
// 6 VM1246: 1 tecla presionada

//Para er el detalle de las teclas presionadas, escribimos la función anterior
//incluyendo como parámetro la letra e

// entrada.addEventListener('keydown', function (e) { console.log(e) })
//a//keyboardEvent {isTrusted: true, key: 'a', code: 'KeyA', location: 0, ctrlKey: false, …}
//Podemos ver en detalle toda la información que contiene este evento
//Podemos extraer cualquiera de las caracteristicas de este evento
// entrada.addEventListener("keydown", function (e) {
//   console.log("presionaste la tecla:" + e.key);
// });

// presionaste la tecla:a
// app.js:541 presionaste la tecla:n
// app.js:541 presionaste la tecla:g
// app.js:541 presionaste la tecla:e
// app.js:541 presionaste la tecla:l
// app.js:541 presionaste la tecla:b

//MANIPULACION DEL DOM-EVENTOS PARA FORMULARIO

//Vamos a usar el "proyecto web" para manejar los eventos  de formulario

//MANIPULACION DEL DOM-DOM TRAVERSING

//Consiste en recorrer el DOM.

//En la esencia de nuestro código, principalmente en HTML tenemos elementos padres, elementos hijos y en algunos casos elementos nietos

const padre = document.getElementById('padre')
// console.log(padre.children)

// 0: div.hijos
// 1: div.hijos
// 2: div.hijos
// length: 3
// : HTMLCollection

// console.log(padre.childNodes)

// 0: text
// assignedSlot: null
// baseURI: "http://127.0.0.1:5500/"
// childNodes: NodeList []
// data: "\n\n  "
// firstChild:null
// isConnected:true
// lastChild: null
// length: 4
// nextElementSibling: div.hijos1
// nextSibling: div.hijos1
// nodeName: "#text"
// nodeType: 3
// nodeValue: "\n\n  "
// ownerDocument: document
// parentElement: div#padre
// parentNode: div#padre
// previousElementSibling:null
// previousSibling: null
// textContent: "\n\n  "
// wholeText: "\n\n  "
// [[Prototype]]:
// Text1:div.hijos1
// 2: text
// 3: div.hijos2
// 4: text
// 5: div.hijos3
// 6: text
// length: 7
// [[Prototype]]
// :NodeList

const nieto = document.getElementById('nieto-dos')

console.log(padre.firstChild);
console.log(padre.firstElementChild);
console.log(padre.lastChild);
console.log(padre.lastElementChild);
console.log(nieto.nextSibling);
console.log(nieto.nextElementSibling);
console.log(nieto.previousSibling);
console.log(nieto.previousElementSibling);

// app.js:606 #text
// app.js:607 <div class="hijos1">​</div>
// app.js:608 #text
// app.js:609 <div class=​"hijos3">​</div>
// app.js:610 #text
// app.js:611 <div class=​"nietos">​nieto tres​</div>
// app.js:612 #text

// app.js:613 <div class=​"nietos">​nieto uno​</div>​