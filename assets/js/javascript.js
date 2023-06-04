

function myFunction() {

    cantidadPc = document.querySelector('.cantidadpc')
    precio = document.querySelector('.precio')
    resutado = document.querySelector('.resultado')
    total = document.querySelector('.total')
    cantidad = document.querySelector('.cantidad')
    colorPc = document.querySelector('.colorpc')
    color = document.querySelector('.color')


    
    cantidadPc = Number(cantidadPc.value)
    precio = 800000
    resultado = Number(cantidadPc) * Number(precio)
    total.innerHTML = 'Total: $ ' + resultado
    cantidad.innerHTML = 'Cantidad: ' + cantidadPc

    colorPc = String(colorPc.value)
    color.style.backgroundColor = colorPc
    

    

    












    

    
    
}











