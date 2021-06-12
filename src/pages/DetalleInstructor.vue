<template>
  <q-page>
    <div class="container">
        <div>
          <div class="flex justify-between">
            <div>
              <h3 class="title">
                Bienvenido
              </h3>
              <p class="value_name">
                {{name}}
              </p>
            </div>
            <div>
              <img src="../../public/img-instructor/detalle-instructor.png" alt="">
            </div>
          </div>
        </div>

    </div>
  </q-page>
</template>

<script>
export default {
  name: 'DetalleInstructor',
  data () {
    return {
      name:"Leonardo"
    }
  },

}
</script>
<style>
  .value_name{
    color: "primary";
  }
</style>
