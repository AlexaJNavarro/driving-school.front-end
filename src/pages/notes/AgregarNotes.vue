<template>
  <q-page>
    <div class="container">
      <div class="flex justify-between">
          <div class="container-form">
            <div class="q-pa-md">
              <div class="q-gutter-y-md column" style="max-width: 300px">
                  <q-input v-model="simulacro" label="Nota del Simulacro" :dense="dense" />
                  <q-input v-model="teoria" label="Nota del examen Teorico" :dense="dense" />
                  <q-input v-model="practica" label="Nota del examen Practico" :dense="dense" />
              </div>
            </div>
            <div class="q-pa-md q-gutter-sm">
              <q-btn :loading="loading4" color="primary" @click="send()" style="width: 150px">
                Button
                <template v-slot:loading>
                  <q-spinner-hourglass class="on-left" />
                  Loading...
                </template>
              </q-btn>
            </div>
          </div>

          <q-img class="banner--agregar" src="../../../public/img-notas/add.png"/>

      </div>
    </div>
  </q-page>
</template>

<script>
import {apiAle} from 'boot/axios'
export default {
  name: 'AgregarNotas',
  data () {
    return {
      text:"",
      dense: false,
      loading4: false,
      id_est:'60c32b27e4d11011743ea105',
      id_inst:'60c32b27e4d11011743ea106',
      simulacro:0,
      hora:0,
      teoria:0,
      practica:0,
    }
  },
  methods:{
    async send(){
      var data={
        "id_student": this.id_est,
        "id_teacher": this.id_inst,
        "notes":{
          "simulacrum": this.simulacro * 2,
          "hours": this.hora,
          "theoric_exam": this.teoria,
          "practice_exam": this.practica
        }
      }
      const response = await apiAle.post('/notes/',data)
      console.log(response.data)

    },


    simulateProgress(number) {
      // we set loading state
      this[`loading${number}`] = true
      // simulate a delay
      setTimeout(() => {
        // we're done, we reset loading state
        this[`loading${number}`] = false
      }, 3000)
    }
  }
}
</script>
<style>
.banner--agregar{
  margin-top: 10rem;
  max-width:50%;
  display:block;
  margin:auto;
}
.container-form{
  width: 30%;
  margin-top: 2rem;
  margin-left: 5rem;
}
</style>
