<template>
  <q-page>
    <div class="container">
      <div>
        <div>
          <div class="flex flex-row">
            <div class="w50">
              <h1>Hola, {{ tareasState }}<span>Alexandra</span></h1>
              <button @click="hola">dsad</button>
            </div>

            <div class="w50">
              <img src="../../../public/images/student/my-account.svg" alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </q-page>
</template>

<script>
import { mapState } from "vuex";
export default {
  name: "PageMyAccount",
  methods: {
    ...mapState("tareas", ["tareasState"]),
    hola() {
      console.log(this.$store.state.tareas);
    },
  },
};
</script>

<style lang="scss">
@import "../../css/global";
</style>
