import '../css/components.css';
import imagen from '../assets/img/transaccion';
export const saludar = (nombre) =>{// colocando export permite de que sea importada la funcion
    console.log ('Creando etiqueta h1');
    const h1 = document.createElement ('h1');
    h1.innerText =`Hola, ${nombre}`;
document.body.append (h1);
//img
const img =document.createElement ('img');
img.src=webpacklogo;
document.body.append (img);

}