<template>
  <q-page>
    <div class="container">
      <div class="flex justify-between">
          <div class="container-form">
            <div class="q-pa-md">
              <div class="q-gutter-y-md column" style="max-width: 300px">
                  <q-input v-model="nota.simulacrum" label="Nota del Simulacro" :dense="dense" />
                  <q-input v-model="nota.theoric_exam" label="Nota del examen Teorico" :dense="dense" />
                  <q-input v-model="nota.practice_exam" label="Nota del examen Practico" :dense="dense" />
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
          <q-img class="banner--actualizar" src="../../../public/img-notas/update.png"/>

      </div>
    </div>
  </q-page>
</template>

<script>
import {apiAle} from 'boot/axios'
export default {
  name: 'ActualizarNotas',
  data () {
    return {
      text:"",
      dense: false,
      loading4: false,
      _id:'60c32b27e4d11011743ea10a',
      nota:{
        id_student: '60c30ac3b8301d1a78689424',
        id_teacher: '60c30ac3b8301d2a78689466',
        notes:{
          simulacrum: 1 * 2,
          hours: 1,
          theoric_exam: 1,
          practice_exam: 1
        }

      }

    }
  },
  methods:{
    async send(){
      var _id=this._id
      // var data={
      //   "id_student": this.id_est,
      //   "id_teacher": this.id_inst,
      //   "notes":{
      //     "simulacrum": this.simulacro * 2,
      //     "hours": this.hora,
      //     "theoric_exam": this.teoria,
      //     "practice_exam": this.practica
      //   }
      // }

      // this.nota.id_teacher=JSON.parse(localStorage.getItem("user"))._id

      const response = await apiAle.put(`/notes/60c32b27e4d11011743ea10a`,this.nota)
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
.banner--actualizar{
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
