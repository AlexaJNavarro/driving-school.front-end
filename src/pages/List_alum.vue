<template>
  <q-page>
    <div class="container">
            <div class="container-banner-listAlumn">
              <q-img class="banner--alumn" src="../../public/img-list-notes/list-alum.png"/>
            </div>
            <!-- <div  v-for="i of 3" :key="i">
              <div class="container-card">
              <div class="sub-container-card">
               <q-card class="my-card">
                <q-img src="https://cdn.quasar.dev/img/parallax2.jpg" class="img-card"></q-img>
                <q-card-actions>
                  <q-btn flat>Comprar</q-btn>
                  <q-btn flat>Detalle</q-btn>
                </q-card-actions>
              </q-card>
              </div>
            </div>
            </div> -->
            <div class="container-card">
              <div class="sub-container-card" v-for="i of 3" :key="i">
               <q-card class="my-card">
                  <q-img src="https://static.vecteezy.com/system/resources/previews/001/840/612/non_2x/picture-profile-icon-male-icon-human-or-people-sign-and-symbol-free-vector.jpg" class="img-card"></q-img>
                <div class="container-button-listAlumn">
                  <q-card-actions>
                    <div class="q-pa-md q-gutter-sm">
                      <!-- <router-link :to="{name:'Movie',params:{id:movie.id}}">

                      </router-link> -->

                      <q-btn unelevated rounded color="primary" label="Actualizar" class="botton-Actualizar"/>
                      <q-btn outline rounded color="primary" label="Eliminar"  class="botton-Eliminar" />
                    </div>
                  </q-card-actions>
                </div>
              </q-card>

              </div>
            </div>



    </div>
  </q-page>
</template>

<script>

export default {
  name: 'ListAlumn',
  data () {
    return {
    }
  }
}
</script>
<style>
  .container-banner-listAlumn{
    margin-top: 5rem;
    margin-bottom: 5rem;
  }
  .banner--alumn{
    max-width:80%;
    display:block;
    margin:auto;
  }
  .container-card{
    margin: auto;
    margin-bottom: 5rem;
  }
  .sub-container-card{
    max-width:80%;
    display: grid;
    margin: auto;
    grid-template-columns: repeat(3, 30%);
    grid-gap: 1rem;
    margin-bottom: 2rem;
  }
  .container-button-listAlumn{
    display: flex;
    justify-content: center;
  }


</style>
