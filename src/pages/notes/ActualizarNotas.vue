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
              <q-btn :loading="loading4" color="primary" @click="send(4)" style="width: 150px">
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

export default {
  name: 'ActualizarNotas',
  data () {
    return {
      text:"",
      dense: false,
      loading4: false,
      id_est:'',
      id_inst:'',
      simulacro:0,
      hora:0,
      teoria:0,
      practica:0
    }
  },
  methods:{
    async send(number){
      this.simulateProgress(number)


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
