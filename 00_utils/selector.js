/**
 * @namespace Manipulación de DOM
 */

/** Atajo a document.querySelector 
 * 
 * @param {string} selector Selector css
 * @returns {Element} Elemento seleccionado
 * 
 * @example
 * $("div") // selecciona el primer div del documento
 * $("p") // selecciona el primer p del documento
 * $("img") // selecciona el primer img del documento
 * $("div p") // selecciona el primer p dentro de un div
 * $(".verde") // selecciona el primer elemento con la clase "verde"
 * $("#info_user") // selecciona el elemento con el id "info_user"
 * 
 * @memberof Manipulación de DOM
 */
function $(selector){
    return document.querySelector(selector)
}

/**
 * 
 * @param {string} selector Selector CSS
 * @returns {NodeList} Lista de nodos seleccionados
 * 
 * @example
 * $$("div") // selecciona todos los div del documento
 * $$("p") // selecciona todos los p del documento
 * $$("img") // selecciona todos los img del documento
 * $$("div p") // selecciona todos los p dentro de un div
 * $$(".verde") // selecciona todos los elementos con la clase "verde"
 * $$("#info_user") // selecciona todos los elementos con el id "info_user"
 * 
 * @memberof Manipulación de DOM
 */

function $$(selector){
    return document.querySelectorAll(selector)
}

function $add(element, container){
    container.appendChild(element)
}

/**
 * 
 * @param {string} element elemento html a crear
 * @param {object} options opciones del elemento
 * @returns Elemento html con los datos proporcionados
 * 
 * @example
 * $create("div", {innerHTML: "hola", parent: document.body})
 * $create("img", {src: "imagen.jpg", parent: document.body})
 * $create("p", {innerHTML: "hola", parent: document.body})
 * 
 * @memberof Manipulación de DOM
 */

function newElement(element, options){
    const newElement = document.createElement(element);
    if(!options) return element;
    const { innerHTML, src, parent } = options;
    if(innerHTML) newElement.innerHTML = innerHTML
    if(src) newElement.src = src
    if(parent) parent.appendChild(newElement)
}
