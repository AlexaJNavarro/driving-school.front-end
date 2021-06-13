<template>
  <q-page>
    <div class="container">
      <q-img
        class="banner--simulacro"
        src="../../public/img-simulacro/banner-simulacro.png"
      />
      <div class="container-simulacro">
        <div class="q-pa-md">
          <div v-for="(d, index) of data" :key="index">
            <div class="container-question">
              <span class="question">{{ d.question }}</span>
            </div>
            <div v-if="d.image != ''">
              <div class="col-4">
                <div class="container--image-question">
                  <q-img :src="d.image" class="image-question" />
                </div>
              </div>
            </div>
            <div class="q-gutter-sm">
              <div class="container-question">
                <q-radio
                  class="option"
                  v-model="d.value"
                  :val="1"
                  :label="d.option1"
                  color="primary"
                /><br />
                <q-radio
                  class="option"
                  v-model="d.value"
                  :val="2"
                  :label="d.option2"
                  color="primary"
                /><br />
                <q-radio
                  class="option"
                  v-model="d.value"
                  :val="3"
                  :label="d.option3"
                  color="primary"
                /><br />
                <q-radio
                  class="option"
                  v-model="d.value"
                  :val="4"
                  :label="d.option4"
                  color="primary"
                />
              </div>
            </div>
          </div>
          <div class="container-button">
            <div class="q-pa-md q-gutter-sm">
              <q-btn
                outline
                rounded
                color="secondary"
                label="Limpiar"
                class="botton-limpiar"
                @click="clean"
              />
              <q-btn
                unelevated
                rounded
                color="secondary"
                label="Enviar Respuesta"
                @click="validate"
                class="botton-enviar"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  </q-page>
</template>

<script>
import { apiAle } from "boot/axios";
import { Notify } from "quasar";
export default {
  name: "Simulacro",
  data() {
    return {
      data: [],
      score: 0,
      id: "60c32b2fe4d11011743ea222",
      id_student: "60c32b2fe4d11011743ea115",
    };
  },
  methods: {
    async send() {
      console.log(this.score * 2);
      var data = {
        id: this.id,
        id_student: this.id_student,
        score: this.score * 2,
      };

      const response = await apiAle.post("/data/", data);
      console.log(response.data);
      if (this.score * 2 > 11) {
        Notify.create({
          message: `Aprobaste!!`,
          color: "primary",
        });
      } else {
        Notify.create({
          message: `Mala suerte`,
          color: "danger",
        });
      }
    },
    validate() {
      for (const d of this.data) {
        if (d.response == d.value) {
          this.score++;
        }
      }
      this.send();
    },
    clean() {
      for (const d of this.data) {
        d.value = 0;
      }
    },
    async getAll() {
      const response = await apiAle.get("/data/");
      this.data = response.data;
    },
  },
  mounted() {
    this.getAll();
  },

  created() {
    const user = JSON.parse(localStorage.getItem("user"));
    if (user == null) {
      this.$router.push("log-in");
    }
  },
};
</script>
<style>
.banner--simulacro {
  margin-top: 4rem;
  margin-bottom: 4rem;
}

.container-question {
  margin-bottom: 1rem;
  margin-top: 1rem;
}
.question {
  font-family: Saira;
  font-style: normal;
  font-weight: bold;
  font-size: 18px;
  line-height: 38px;
  text-decoration: none;
  color: #000000;
  padding-right: 1rem;
}
.option {
  font-family: Roboto;
  font-style: normal;
  font-weight: normal;
  font-size: 15px;
  line-height: 38px;
  text-decoration: none;
  color: #000000;
  padding-right: 1rem;
}
.container-question {
  margin-left: 1rem;
}
.image-question {
  width: 200px;
  height: 200px;
  display: block;
  margin: auto;
}
.botton-enviar {
  color: #000000;
  padding: 0rem 4rem;
}
.botton-limpiar {
  padding: 0rem 6rem;
}
.container-button {
  display: flex;
  justify-content: center;
}
</style>
