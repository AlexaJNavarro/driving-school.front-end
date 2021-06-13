<template>
  <q-page>
    <div class="container">
      <div class="ptb-3">
        <div>
          <div class="flex flex-row">
            <div class="w50">
              <h1>
                <span class="title-small">Hola,</span>
                <span class="title-long">
                  {{ instructor.user.names }}
                </span>
              </h1>
            </div>

            <div class="w50">
              <img src="../../public/img-instructor/detalle-instructor.png" alt="" />
            </div>
          </div>
        </div>

        <div>
          <div>
            <div>
              <p>
                <strong>ID: </strong> <span> {{ instructor.user._id }} </span>
              </p>
              <p>
                <strong>Nombres: </strong> <span> {{ instructor.user.names }} </span>
              </p>
              <p>
                <strong>Apellidos: </strong>
                <span> {{ instructor.user.last_names }} </span>
              </p>
              <p>
                <strong>Nombres: </strong> <span> {{ instructor.user.names }} </span>
              </p>
              <p>
                <strong>Creado: </strong> <span> {{ instructor.user.created_at }} </span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </q-page>
</template>

<script>
export default {
  name: "DetalleInstructor",
  data() {
    return {
      instructor: {},
    };
  },
  created() {
    const user = JSON.parse(localStorage.getItem("user"));
    console.log(user);
    this.instructor = user;
    if (user.user.rol != "Instructor") {
      this.$router.push("403");
    }
  },
};
</script>
<style lang="scss">
@import "../css/global";
.value_name {
  color: #6c63fe !important;
  font-size: 68px;
  font-family: Saira;
  font-style: normal;
  font-weight: bold;
  line-height: 38px;
  text-decoration: none;
  color: #000000;
  padding-top: 2rem;
}
.title {
  font-family: Saira;
  font-style: normal;
  font-weight: bold;
  font-size: 50px;
  line-height: 38px;
  text-decoration: none;
  color: #000000;

  margin-bottom: 0;
}
.text-baner {
  padding-top: 5rem;
  padding-left: 5rem;
}
/* .container-banner-inst{
    margin-top: 10rem;
  } */
.container-img-inst {
  padding-top: 5rem;
}
.container-data {
  padding: 1rem 5rem 2rem 5rem;
  /* background: #aaa6ff;
    border-radius: 10px; */
}
.container-data-personal {
  font-family: Saira;
  font-style: normal;
  font-weight: normal;
  font-size: 20px;
  line-height: 38px;
  text-decoration: none;
  color: #000000;
}
.container-data-title {
  font-family: Saira;
  font-style: normal;
  font-weight: normal;
  font-size: 30px;
  line-height: 38px;
  text-decoration: none;
  color: #000000;
  padding-bottom: 0.5rem;
  padding-top: 2rem;
}
.data-personal {
  color: #979595 !important;
}
</style>
