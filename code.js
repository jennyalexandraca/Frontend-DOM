/* --------------------------- NO TOCAR DESDE ACÁ --------------------------- */
let datosPersona = {
  nombre: "",
  edad: 0,
  ciudad: "",
  interesPorJs: "",
};

const listado = [{
    imgUrl: "https://huguidugui.files.wordpress.com/2015/03/html1.png",
    lenguajes: "HTML y CSS",
    bimestre: "1er bimestre",
  },
  {
    imgUrl: "https://jherax.files.wordpress.com/2018/08/javascript_logo.png",
    lenguajes: "Javascript",
    bimestre: "2do bimestre",
  },
  {
    imgUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/47/React.svg/1200px-React.svg.png",
    lenguajes: "React JS",
    bimestre: "3er bimestre",
  },
];

const profileBtn = document.querySelector("#completar-perfil");
const materiasBtn = document.querySelector("#obtener-materias");
const verMasBtn = document.querySelector("#ver-mas");
const cambiarTema = document.querySelector('#cambiar-tema');

profileBtn.addEventListener("click", renderizarDatosUsuario);
materiasBtn.addEventListener("click", recorrerListadoYRenderizarTarjetas);
cambiarTema.addEventListener("click", alternarColorTema);
/* --------------------------- NO TOCAR HASTA ACÁ --------------------------- */

function obtenerDatosDelUsuario() {
  /* --------------- PUNTO 1: Escribe tu codigo a partir de aqui --------------- */
    let iNombre = prompt("Ingresa tu nombre");
    let iAnio = parseInt(prompt("Ingresa el año de tu nacimiento"));
    let iciudad = prompt("Ingrese la ciudad donde vives");
    let interesJS = confirm("Pulsa aceptar si te interesa Javascript");

    datosPersona.nombre = iNombre;
    datosPersona.edad = 2022 - iAnio;
    datosPersona.ciudad = iciudad;

    if(interesJS == true){
      datosPersona.interesPorJs = "sí"
    } else {
      datosPersona.interesPorJs = "no"
    }
}

function renderizarDatosUsuario() {
  /* ------------------- NO TOCAR NI ELIMINAR ESTA FUNCION. ------------------- */
  obtenerDatosDelUsuario();
  /* --------------- PUNTO 2: Escribe tu codigo a partir de aqui --------------- */

  document.querySelector('#nombre').textContent= datosPersona.nombre;
  document.querySelector('#edad').textContent= datosPersona.edad;
  document.querySelector('#ciudad').textContent= datosPersona.ciudad;
  document.querySelector('#javascript').textContent= datosPersona.interesPorJs;
  
}

function recorrerListadoYRenderizarTarjetas() {
  /* ------------------ PUNTO 3: Escribe tu codigo desde aqui ------------------ */
  const template = document.querySelector("#fila");

  if(template.innerHTML.length === 0){
    listado.forEach((lista)=>{
      template.innerHTML += `<div class="caja">
                          <img src="${lista.imgUrl}" alt="${lista.lenguajes}">
                          <p class="lenguajes"> Lenguajes: ${lista.lenguajes} </p>
                          <p class="bimestre"> Bimestre: ${lista.bimestre} </p>
                          </div>
                          `;
    });
  }
}

function alternarColorTema() {
  /* --------------------- PUNTO 4: Escribe tu codigo aqui --------------------- */
    let body = document.querySelector('body');
    body.classList.toggle('dark');
}

/* --------------------- PUNTO 5: Escribe tu codigo aqui --------------------- */
window.addEventListener('keydown', function(event){
    document.querySelector("#card")
    if (event.key == "f" || event.key == "F"){
      document.querySelector('#sobre-mi').classList.remove('oculto')
    }
  })