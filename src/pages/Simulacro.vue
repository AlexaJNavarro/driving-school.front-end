<template>
  <div class="q-pa-md">
    <div v-for="(d, index) of data" :key="index">
      <span class="label bg-primary text-white">{{ d.question }}</span>

      <div v-if="d.image != ''">
        <div class="col-4">
          <q-img :src="d.image" :ratio="4 / 3" />
        </div>
      </div>

      <div class="q-gutter-sm">
        <q-radio v-model="d.value" :val="1" :label="d.option1" color="pink" /><br />
        <q-radio v-model="d.value" :val="2" :label="d.option2" color="pink" /><br />
        <q-radio v-model="d.value" :val="3" :label="d.option3" color="pink" /><br />
        <q-radio v-model="d.value" :val="4" :label="d.option4" color="pink" />
      </div>
    </div>

    <q-btn @click="validate" color="red" icon-right="send" label="Enviar respuestas" />
  </div>
</template>

<script>
import { apiAle } from "boot/axios";
export default {
  name: "Simulacro",
  data() {
    return {
      data: [],
      score: 0,
    };
  },
  methods: {
    validate() {
      for (const d of this.data) {
        if (d.response == d.value) {
          this.score++;
        }
      }
      console.log(this.score);
    },
    async getAll() {
      const response = await apiAle.get("/data/");
      console.log(response.data);
      this.data = response.data;
    },
    // random(){
    //   while (this.list_value.length < 3){
    //   var value = Math.floor(Math.random() * 3)
    //     if (!this.list_value.includes(value)){
    //       this.list_value.push(value);
    //     }
    //   }
    // }
  },
  mounted() {
    // this.random()
    this.getAll();
  },

  created() {
    const user = JSON.parse(localStorage.getItem("user"));
    if (user.user.rol != "Client" || !user.user.status_sale) {
      this.$router.push("403");
    }
  },
};
</script>
