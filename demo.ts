class Queue{
    private cola:string[]=[];
    queue: any;
//agregar elemeto a la pila 

//agregar un elemento a la pila

enqueue(x: string) { 
    if (this.cola.push(x))
      return this.cola;
    }

 //quitar un elemento a la pila
   dequeue() {
        return  this.cola.shift();
     
}
 //retornar al ultimo elemento si sacarlo de la pila
  peek(){
     return this.cola[this.cola.length];
  }
 //mostrar el numero de elementos que tiene la pila
  size(){
    return this.cola.length;
  }
  
 //mostrar el contenido de la pila
  mostrar() {
   console.log(this.cola);  
  }   
}

const cola=new  Queue();
console.log(cola.enqueue('Carlos')); 
console.log(cola.enqueue('Maria')); 
console.log(cola.enqueue('Antonio'));
console.log(cola.dequeue());
console.log(cola.size()); 
console.log(cola.mostrar());

