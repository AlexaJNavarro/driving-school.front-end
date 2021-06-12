<template>
  <q-page>
    <div class="container">
        <div>
          <div class="flex justify-between">
            <div class="container-banner-inst">
              <div class="text-baner">
                <h3 class="title">
                Bienvenido
              </h3>
              <p class="value_name">
                {{name}}
              </p>
              </div>
            </div>
            <div class="container-img-inst">
              <img src="../../public/img-instructor/detalle-instructor.png" alt="">
            </div>
          </div>
        </div>
        <div class="container-data">
          <div class="container-data-title">
            <label>Datos Personales</label>
          </div>

          <div class="container-data-personal">
            <label>DNI: </label><label class="data-personal">{{dni}}</label><br>
            <label>Nombre: </label><label class="data-personal">{{name}}</label><br>
            <label>Apellido: </label><label class="data-personal">{{last_name}}</label><br>
            <label>Rol: </label><label class="data-personal">{{rol}}</label><br>
            <label>Turno: </label><label class="data-personal">{{turn}}</label>

          </div>
        </div>


    </div>
  </q-page>
</template>

<script>
export default {
  name: 'DetalleInstructor',
  data () {
    return {
      dni:"72964584",
      name:"Adan",
      last_name:"Navarro",
      rol:"Instructor",
      turn:"Tarde"
    }
  },

}
</script>
<style>
  .value_name{
    color: #6C63FE!important;
    font-size: 68px;
    font-family: Saira;
    font-style: normal;
    font-weight: bold;
    line-height: 38px;
    text-decoration: none;
    color: #000000;
    padding-top: 2rem;
  }
  .title{
    font-family: Saira;
    font-style: normal;
    font-weight: bold;
    font-size: 50px;
    line-height: 38px;
    text-decoration: none;
    color: #000000;

    margin-bottom: 0;
  }
  .text-baner{
    padding-top: 5rem;
    padding-left:5rem;
  }
  /* .container-banner-inst{
    margin-top: 10rem;
  } */
  .container-img-inst{
    padding-top: 5rem;
  }
  .container-data{

    padding: 1rem 5rem 2rem 5rem;
    /* background: #aaa6ff;
    border-radius: 10px; */
  }
  .container-data-personal{
    font-family: Saira;
    font-style: normal;
    font-weight: normal;
    font-size: 20px;
    line-height: 38px;
    text-decoration: none;
    color: #000000;
  }
  .container-data-title{
    font-family: Saira;
    font-style: normal;
    font-weight: normal;
    font-size: 30px;
    line-height: 38px;
    text-decoration: none;
    color: #000000;
    padding-bottom: .5rem;
    padding-top: 2rem;
  }
  .data-personal{
    color: #979595!important;
  }
</style>
