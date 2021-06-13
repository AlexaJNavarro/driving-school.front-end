<template>
  <q-page>
    <div class="container">
      <div>
        <div>
          <div>
            <h1 class="text-only text-center">Asignar Alumnos a Instructores</h1>
          </div>

          <div>
            <div class="flex justify-center">
              <q-card class="my-card w400px">
                <q-card-section>
                  <div>
                    <div class="ptb-1">
                      <q-select
                        v-model="turnSelected"
                        :options="turn"
                        rounded
                        outlined
                        label="Seleciona el turno"
                      />
                    </div>

                    <div class="ptb-1">
                      <q-select
                        v-model="assign.id_client"
                        :options="StudentsIds"
                        rounded
                        outlined
                        label="Seleciona el alumno"
                      />
                    </div>

                    <div class="ptb-1">
                      <q-select
                        v-model="assign.id_teacher"
                        :options="teacherIds"
                        rounded
                        outlined
                        label="Seleciona el alumno"
                      />
                    </div>

                    <div>
                      <div class="ptb-1">
                        <q-btn
                          rounded
                          color="primary"
                          size="md"
                          label="Filtrar por turno"
                          class="w100"
                          @click="getStudentTeacherByTurn"
                        />
                      </div>

                      <div>
                        <q-btn
                          rounded
                          color="primary"
                          size="md"
                          label="Asignar"
                          class="w100"
                          @click="Assign"
                        />
                      </div>
                    </div>
                  </div>
                </q-card-section>
              </q-card>
            </div>
          </div>
        </div>
      </div>
    </div>
  </q-page>
</template>

<script>
import { apiLeo } from "boot/axios";
import { Notify } from "quasar";

export default {
  name: "PageAdminAssign",
  data() {
    return {
      turn: ["Morning", "Afternoon", "Night"],
      turnSelected: "Morning",
      assign: {
        id_client: "",
        id_teacher: "",
      },
      teacherIds: [],
      teacherNames: [],
      StudentsIds: [],
      StudentsNames: [],
    };
  },
  methods: {
    async getStudentTeacherByTurn() {
      const response = await apiLeo.get(`/student-teacher/${this.turnSelected}`, {
        headers: {
          Authorization: JSON.parse(localStorage.getItem("user")).token,
        },
      });
      const res = response.data.data;
      let idsTeaches = [];
      let NamesTeaches = [];
      for (let t of res.teacher) {
        idsTeaches.push(t._id);
        NamesTeaches.push(t.names);
        this.teacherIds = idsTeaches;
        this.teacherNames = NamesTeaches;
      }
      console.log(res);

      let idsStudents = [];
      let NamesStudents = [];
      for (let c of res.client) {
        idsStudents.push(c._id);
        NamesStudents.push(c.names);
        this.StudentsIds = idsStudents;
        this.StudentsNames = NamesStudents;
      }
    },
    async Assign() {
      console.log(this.assign);
      const response = await apiLeo.post(`/student-teacher`, this.assign, {
        headers: {
          Authorization: JSON.parse(localStorage.getItem("user")).token,
        },
      });
      console.log(response);
    },
  },
  created() {
    const user = JSON.parse(localStorage.getItem("user"));
    if (user == "" || user == "undefined" || user == null) {
      this.$router.push("/log-in");
    }
    if (user.user.rol != "Admin") {
      this.$router.push("/403");
    }
  },
};
</script>

<style lang="scss">
@import "../../css/global";
</style>
