/*let integrantes = prompt("INGRESE NUMERO DE PERSONAS QUE VIVEN EN LA MISMA CASA")

let imcTotal = 0


for(let i = 1; i <= integrantes; i++){

  if (i >= 6){
    alert("AS ALCANZADO EL NUMERO MAXIMO DE INTEGRANTES")
    break
   }

let nombre = prompt("INGRESE SU NOMBRE")
let apellido = prompt("INGRESE SU APELLIDO")


if (nombre == "") {
  alert ("NO INGRESASTE NOMBRE")
}

if (apellido == "") {
  alert ("NO INGRESASTE APELLIDO")
}

else {
  alert(`ingresaste ${nombre} ${apellido}`)
}

let altura = prompt("INGRESE SU ALTURA EN Mts ejemplo : 1.75")
let peso = prompt("INGRESE SU PESO EN KG")

if (altura == "") {
  alert ("NO INGRESASTE ALTURA")
}

if (peso == "") {
  alert ("NO INGRESASTE PESO")
}
else {
  alert(`INGRESASTE ${altura}Mts de altura y ${peso}kg de peso`)
}


let imc = (peso / (Math.pow(altura,2)))
console.log (imc)

if (imc <= 18.5) {
  alert ("su peso es Peso inferior al normal")
}
else if (imc <= 24.9) {
  alert ("su peso es normal")
}
else if (imc <= 29.9) {
  alert ("su peso es superior al normal")
}
else if (imc > 29.9) {
  alert ("su peso se considera obesidad")
}

imcTotal = imcTotal + imc
}

promedioImc = imcTotal / integrantes
console.log (promedioImc)

if (promedioImc <= 18.5) {
  alert ("su peso familiares Peso inferior al normal")
}
else if (promedioImc <= 24.9) {
  alert ("su peso familiares normal")
}
else if (promedioImc <= 29.9) {
  alert ("su peso familiares superior al normal")
}
else if (promedioImc > 29.9) {
  alert ("su peso familiarse se considera obesidad")
}*/




class Persona {
  constructor(nombre, apellido, altura, peso){
    this.nombre = nombre
    this.apellido = apellido
    this.altura = altura
    this.peso = peso

  }
  
}

function agregarPersonas(){
  let integrantes = prompt("INGRESE NUMERO DE PERSONAS QUE VIVEN EN LA MISMA CASA")
  let personas = []
  let imcTotal = []

  for(let i = 0; i < integrantes; i++){
    let nombre = prompt("INGRESE SU NOMBRE")
    let apellido = prompt("INGRESE SU APELLIDO")
    if (nombre == "") {
      alert ("NO INGRESASTE NOMBRE")
    }
    
    if (apellido == "") {
      alert ("NO INGRESASTE APELLIDO")
    }
    
    else {
      alert(`ingresaste ${nombre} ${apellido}`)
    }
    let altura = prompt("INGRESE SU ALTURA EN Mts ejemplo : 1.75")
    let peso = prompt("INGRESE SU PESO EN KG")
    if (altura == "") {
      alert ("NO INGRESASTE ALTURA")
    }
    
    if (peso == "") {
      alert ("NO INGRESASTE PESO")
    }
    else {
      alert(`INGRESASTE ${altura}Mts de altura y ${peso}kg de peso`)
    }
    let imc = (peso / (altura*altura))
    console.log (imc)
    if (imc <= 18.5) {
      alert ("su peso es Peso inferior al normal")
    }
    else if (imc <= 24.9) {
      alert ("su peso es normal")
    }
    else if (imc <= 29.9) {
      alert ("su peso es superior al normal")
    }
    else if (imc > 29.9) {
      alert ("su peso se considera obesidad")
    }

    let personasporagregar = new Persona(nombre, apellido, altura, peso)
    personas.push(personasporagregar)
    imcTotal.push(imc)
  }
  console.log(personas)
  console.log(imcTotal)
}

function main(){
  agregarPersonas()
}

main()