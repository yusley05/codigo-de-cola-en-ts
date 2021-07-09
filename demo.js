"use strict";
var Queue = /** @class */ (function () {
    function Queue() {
        this.cola = [];
    }
    //agregar elemeto a la pila 
    //agregar un elemento a la pila
    Queue.prototype.enqueue = function (x) {
        if (this.cola.push(x))
            return this.cola;
    };
    //quitar un elemento a la pila
    Queue.prototype.dequeue = function () {
        return this.cola.shift();
    };
    //retornar al ultimo elemento si sacarlo de la pila
    Queue.prototype.peek = function () {
        return this.cola[this.cola.length];
    };
    //mostrar el numero de elementos que tiene la pila
    Queue.prototype.size = function () {
        return this.cola.length;
    };
    //mostrar el contenido de la pila
    Queue.prototype.mostrar = function () {
        console.log(this.cola);
    };
    return Queue;
}());
var cola = new Queue();
console.log(cola.enqueue('Carlos'));
console.log(cola.enqueue('Maria'));
console.log(cola.enqueue('Antonio'));
console.log(cola.dequeue());
console.log(cola.size());
console.log(cola.mostrar());
