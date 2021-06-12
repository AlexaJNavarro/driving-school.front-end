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
                  {{ student.user.names }}
                </span>
              </h1>
            </div>

            <div class="w50">
              <img src="../../../public/images/student/my-account.svg" alt="" />
            </div>
          </div>
        </div>

        <div>
          <div>
            <div>
              <p>
                <strong>ID: </strong> <span> {{ student.user._id }} </span>
              </p>
              <p>
                <strong>Nombres: </strong> <span> {{ student.user.names }} </span>
              </p>
              <p>
                <strong>Apellidos: </strong> <span> {{ student.user.last_names }} </span>
              </p>
              <p>
                <strong>Nombres: </strong> <span> {{ student.user.names }} </span>
              </p>
              <p>
                <strong>Creado: </strong> <span> {{ student.user.created_at }} </span>
              </p>
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
};
</script>

<style lang="scss">
@import "../../css/global";
</style>
