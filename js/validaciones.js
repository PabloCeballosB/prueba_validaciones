'use strict'

console.log('Cargado JS')

  let media = 0
  let suma = 0

function calcular(){
  var iCalculo1 = document.getElementById("iCalculo1").value
  var iCalculo2 = document.getElementById("iCalculo2").value
  var iCalculo3 = document.getElementById("iCalculo3").value

  if(iCalculo1 != "" && iCalculo2 != "" && iCalculo3 != "")
  {
    media = (parseInt(iCalculo1) + parseInt(iCalculo2) + parseInt(iCalculo3))/3
    suma = parseInt(iCalculo1) + parseInt(iCalculo2) + parseInt(iCalculo3)
    document.getElementById("spanMedia").textContent = media
  }
}

function poneraCero(){
  document.getElementById("iMatricula").value = ""
  document.getElementById("iCalculo1").value = ""
  document.getElementById("iCalculo2").value = ""
  document.getElementById("iCalculo3").value = ""
  document.getElementById("spanMedia").textContent = "N/A"
}

function enviar(){
      if(suma > 9 && suma < 21){}
      else
      {
        document.getElementById('divError').innerHTML='ERROR'
      }
}


function anadir(opcion)
{

  document.createTextNode("hola")

  let p = document.getElementById('modulos')

  let label = document.createElement('label')
  label.setAttribute('for', 'sModulo')
  label.innerHTML = "Modulo"

  let select = document.createElement('select')
  select.setAttribute('id', 'sModulo')

  if(opcion.value == "1DAW")
  {
    //Crear campo base de datos
    var bbdd = document.createElement("option")
    bbdd.value = "BBDD"
    bbdd.text = "Base de Datos"

    //Crear option programacion
    var pro = document.createElement("option")
    pro.value = "PRO"
    pro.text = "Programacion"

    //Crear option Entorno de Desarrollo
    var entd = document.createElement("option")
    entd.value = "ENTORNO"
    entd.text = "Entorno de Desarrollo"

    //Crear option FOL
    var fol = document.createElement("option")
    fol.value = "FOL"
    fol.text = "Formacion y Orientacion Laboral"

    //Crear option Lenguajes de marca
    var lm = document.createElement("option")
    lm.value = "LM"
    lm.text = "Lenguaje de Marcas"

    //Crear option Sistemas Informaticos
    var si = document.createElement("option")
    si.value = "SI"
    si.text = "Sistemas Informaticos"

    p.appendChild(label)
    select.appendChild(bbdd)
    select.appendChild(pro)
    select.appendChild(entd)
    select.appendChild(fol)
    select.appendChild(lm)
    select.appendChild(si)
    p.appendChild(select)
  }
  else
  {
    if(opcion.value == "2DAW")
    {
      //Crear campo Desarrollo Web Entorno Cliente
      var dwenc = document.createElement("option")
      dwenc.value = "DWENC"
      dwenc.text = "Desarrollo Web Entorno Cliente"

      //Crear option Desarrollo Web Entorno Servidor
      var dwesv = document.createElement("option")
      dwesv.value = "DWESV"
      dwesv.text = "Desarrollo Web Entorno Servidor"

      //Crear option Diseño de Interfaces Web
      var diwn = document.createElement("option")
      diwn.value = "DIWN"
      diwn.text = "Diseño de Interfaces Web"

      //Crear option Despliegue de Aplicaciones Web
      var deapw = document.createElement("option")
      deapw.value = "DEAPW"
      deapw.text = "Despliegue de Aplicaciones Web"

      //Crear option Empresa Iniciativa y Emprendedora
      var eie = document.createElement("option")
      eie.value = "EIE"
      eie.text = "Empresa Iniciativa y Emprendedora"

      select.appendChild(dwenc)
      select.appendChild(dwesv)
      select.appendChild(diwn)
      select.appendChild(deapw)
      select.appendChild(eie)
      p.appendChild(select)
    }
  }
}
