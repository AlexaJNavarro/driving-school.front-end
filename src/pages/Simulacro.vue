<template>
  <div class="q-pa-md">
    <div v-for="list in list_value" :key="list">

      <span class="label bg-primary text-white">{{ data[list].question }}</span>

      <div v-if="data[list].image != ''">
        <div class="col-4">
          <q-img :src="data[list].image" :ratio="4/3"/>
        </div>
      </div>

      <!-- <div class="q-gutter-sm" v-for="option in 3" :key="option">
        <q-radio v-model="data[list].value" :val="option" :label="data[list][option]" color="pink"/>
      </div> -->
      <div class="q-gutter-sm">
        <q-radio v-model="data[list].response" :val="1" :label="data[list].option1" color="pink"/><br>
        <q-radio v-model="data[list].response" :val="2" :label="data[list].option2" color="pink"/><br>
        <q-radio v-model="data[list].response" :val="3" :label="data[list].option3" color="pink"/><br>
        <q-radio v-model="data[list].response" :val="4" :label="data[list].option4" color="pink"/>
      </div>

    </div>

    <q-btn @click="saludo" color="red" icon-right="send" label="Enviar respuestas" />

  </div>
</template>

<script>
import {api} from 'boot/axios'
export default {
  name: 'Simulacro',
  data () {
    return {
      data:[],
      list_value:[]
    }
  },
  methods:{
    saludo(){
      console.log("Saludo")
      for (const value of this.data) {
        console.log(value.response)
      }

    },
    async getAll(){
      const response = await api.get('/data/')
      console.log(response.data)
      this.data= response.data
    },
    random(){
      while (this.list_value.length < 3){
      var value = Math.floor(Math.random() * 3)
        if (!this.list_value.includes(value)){
          this.list_value.push(value);
        }
      }
    }
  },
  mounted(){
    this.random()
    this.getAll()

  }
}
</script>
