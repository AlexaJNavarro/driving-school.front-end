<template>
  <q-page>
    <div class="container">
      <div>
        <div>
          <div>
            <div class="flex justify-center ptb-3">
              <img src="../../../public/images/home/signUp.svg" alt="" />
            </div>

            <div>
              <div class="h300 flex justify-center">
                <div class="w30">
                  <div>
                    <q-btn
                      class="w100 ptb-03 mtb-1"
                      push
                      rounded
                      color="primary"
                      label="Registrarse con DNI"
                      @click="dni = true"
                    />
                    <q-btn
                      class="w100 ptb-03 color-text-dark mb-4"
                      push
                      rounded
                      color="info"
                      label="Registrarse con Email"
                      @click="email = true"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <q-dialog v-model="dni" persistent>
      <q-card style="min-width: 350px">
        <q-card-section>
          <div class="text-h6 title-saira">Ingrese sus datos</div>
        </q-card-section>

        <q-card-section class="q-pt-none">
          <q-input dense v-model="userDni.dni" label="DNI" class="pb-1 text-input" />
          <q-input dense type="password" v-model="userDni.password" label="Contraseña" />
        </q-card-section>

        <q-card-actions align="right" class="text-primary">
          <q-btn flat label="Cancel" v-close-popup />
          <q-btn flat label="Registrarse" @click="SignUpDni" />
        </q-card-actions>
      </q-card>
    </q-dialog>

    <q-dialog v-model="email" persistent>
      <q-card style="min-width: 350px">
        <q-card-section>
          <div class="text-h6 title-saira">Ingrese sus datos</div>
        </q-card-section>

        <q-card-section class="q-pt-none">
          <q-input
            dense
            type="email"
            v-model="userEmail.email"
            label="Email"
            class="pb-1 text-input"
          />

          <q-input
            dense
            v-model="userEmail.names"
            label="Nombres"
            class="pb-1 text-input"
          />

          <q-input
            dense
            v-model="userEmail.last_names"
            label="Apellidos"
            class="pb-1 text-input"
          />

          <q-input
            dense
            type="password"
            v-model="userEmail.password"
            label="Contraseña"
          />
        </q-card-section>

        <q-card-actions align="right" class="text-primary">
          <q-btn flat label="Cancel" v-close-popup />
          <q-btn flat label="Registrarse" @click="SignUpEmail" />
        </q-card-actions>
      </q-card>
    </q-dialog>
  </q-page>
</template>
<script>
import { apiLeo } from "boot/axios";
import { Notify } from "quasar";
export default {
  name: "PageSignUp",
  data() {
    return {
      dni: false,
      email: false,
      userDni: {
        dni: "",
        password: "",
        rol: "client",
      },
      userEmail: {
        email: "",
        names: "",
        last_names: "",
        password: "",
        rol: "client",
      },
    };
  },
  methods: {
    async SignUpDni() {
      try {
        const response = await apiLeo.post("/users/sign-up/dni", this.userDni);
        if (response.status === 201) {
          Notify.create({
            message: response.data.message,
            color: "primary",
          });

          if (response.status === 400) {
            Notify.create({
              message: `El Dni ingresado no es valido`,
              color: "danger",
            });
          }
        }
        console.log(response);
      } catch (error) {
        Notify.create({
          message: `El Dni ingresado no es valido`,
          color: "danger",
        });
      }
    },

    async SignUpEmail() {
      try {
        const response = await apiLeo.post("/users/sign-up/email", this.userEmail);
        if (response.status === 201) {
          Notify.create({
            message: response.data.message,
            color: "primary",
          });

          if (response.status === 400) {
            Notify.create({
              message: `El Dni ingresado no es valido`,
              color: "danger",
            });
          }
        }
        console.log(response);
      } catch (error) {
        Notify.create({
          message: `El Dni ingresado no es valido`,
          color: "danger",
        });
      }
    },
  },
};
</script>
<style lang="scss">
@import "../../css/global";
.title-saira {
  font-family: Saira;
  font-style: normal;
  font-weight: normal;
  font-size: 28px;
  line-height: 25px;

  color: #000000;
}

.text-input {
  font-family: Roboto;
  font-style: normal;
  font-weight: normal;
  font-size: 18px;
  line-height: 21px;
  color: #000000;
}
</style>
