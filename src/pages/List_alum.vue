<template>
  <q-page>
    <div class="container">
      <div class="container-banner-listAlumn">
        <q-img class="banner--alumn" src="../../public/img-list-notes/list-alum.png" />
      </div>

      <div>
        <div>
          <div class="container">
            <div class="flex flex-row justify-center">
              <div v-for="student of students" :key="student._id">
                <q-card class="my-card mrl-1 mb-1" style="width: 300px">
                  <q-img
                    src="https://static.vecteezy.com/system/resources/previews/001/840/612/non_2x/picture-profile-icon-male-icon-human-or-people-sign-and-symbol-free-vector.jpg"
                    class="img-card"
                  ></q-img>
                  <q-card-section>
                    <p>
                      <strong>Dni: </strong><span>{{ student.dni }}</span>
                    </p>

                    <p>
                      <strong>Names: </strong><span>{{ student.names }}</span>
                    </p>

                    <p>
                      <strong>LastNames: </strong><span>{{ student.last_names }}</span>
                    </p>

                    <p>
                      <strong>Premin: </strong><span>{{ student.status_sale }}</span>
                    </p>
                  </q-card-section>
                  <div class="container-button-paquete">
                    <q-card-actions>
                      <div class="q-pa-md q-gutter-sm">
                        <q-btn
                          unelevated
                          rounded
                          color="primary"
                          label="Comprar"
                          class="botton-Comprar w100"
                        />
                      </div>
                    </q-card-actions>
                  </div>
                </q-card>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </q-page>
</template>

<script>
import { apiLeo } from "boot/axios";
export default {
  name: "ListAlumn",
  data() {
    return {
      students: [],
    };
  },
  async created() {
    const user = JSON.parse(localStorage.getItem("user"));
    if (user == null) {
      this.$router.push("/log-in");
    }
    if (user.user.rol != "Instructor") {
      this.$router.push("/403");
    }
    console.log(user.user._id);
    console.log(user.token);
    const response = await apiLeo.get(`/student-teacher/teacher/${user.user._id}`, {
      headers: {
        Authorization: user.token,
      },
    });
    this.students = response.data.data.students;
  },
};
</script>
<style lang="scss">
@import "../css/global";
.container-banner-listAlumn {
  margin-top: 5rem;
  margin-bottom: 5rem;
}
.banner--alumn {
  max-width: 80%;
  display: block;
  margin: auto;
}
.container-card {
  margin: auto;
  margin-bottom: 5rem;
}
.sub-container-card {
  max-width: 80%;
  display: grid;
  margin: auto;
  grid-template-columns: repeat(3, 30%);
  grid-gap: 1rem;
  margin-bottom: 2rem;
}
.container-button-listAlumn {
  display: flex;
  justify-content: center;
}
</style>
