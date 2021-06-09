<template>
  <div class="q-pa-md">
    <div v-for="(d,index) in data" :key="index">

      <span class="label bg-primary text-white">{{ d.question }}</span>

      <div v-if="d.image != ''">
        <div class="col-4">
          <q-img :src="d.image" :ratio="4/3"/>
        </div>
      </div>

      <div class="q-gutter-sm" v-for="option in 3" :key="option">
        <q-radio v-model="d.value" :val="option" :label="d[option]" color="pink"/>
      </div>

    </div>

    <q-btn @click="saludo" color="red" icon-right="send" label="Enviar respuestas" />

  </div>
</template>

<script>
export default {
  name: 'PageIndex',
  data () {
    return {
      data:[
        {question:'pregunta 1',image:'https://www.nippon.com/es/ncommon/contents/japan-topics/560508/560508.jpg', 1: 'option1_valued', 2: 'option2f', 3: 'option3e',value:0},
        {question:'pregunta 2',image:'', 1: 'option1a', 2: 'option2_value', 3: 'option3f',value:0},
        {question:'pregunta 3',image:'', 1: 'option1b', 2: 'option2c', 3: 'option3_value',value:0}
      ],
      list_value:[]
    }
  },
  methods:{
    saludo(){
      console.log(this.data)
    }
  },
  created(){
    while (this.list_value.length < 40){
      var value = Math.floor(Math.random() * 40)
      if (!this.list_value.includes(value)){
        this.list_value.push(value);
      }
    }
    console.log(this.list_value)
  }
}
</script>
