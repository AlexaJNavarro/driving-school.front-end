<template>
  <q-page>
    <div class="container">
      <div class="ptb-3">
        <div>
          <div class="flex flex-row">
            <div class="w50">
              <h1>
                <span class="title-small">Hola,</span>
                <span class="title-long"> {{ student.user.names }} </span>
              </h1>
            </div>

            <div class="w50">
              <img src="../../../public/images/admin/admin.svg" alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </q-page>
</template>

<script>
import { mapState, mapMutations } from "vuex";
export default {
  name: "PageMyAccount",
  methods: {},
  computed: {
    ...mapState(["student"]),
  },
  created() {
    if (this.student == 0 || this.student == null) {
      this.$router.push("/log-in");
    }
    console.log(this.student);
  },
  created() {
    const user = JSON.parse(localStorage.getItem("user"));
    if (user == "" || user == "undefined" || user == null) {
      this.$router.push("log-in");
    }
    if (user.user.rol != "Admin") {
      this.$router.push("403");
    }
  },
};
</script>

<style lang="scss">
@import "../../css/global";
</style>
