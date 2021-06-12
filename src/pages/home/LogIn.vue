<template>
  <q-page>
    <div class="container">
      <div class="flex justify-center align-items-center">
        <div class="flex flex-row ptb-3" style="padding-top: 8rem">
          <div class="w50">
            <img width="100%" src="../../../public/images/home/logIn.svg" />
          </div>

          <div class="w50 flex justify-center align-items-center">
            <div>
              <div class="w400px">
                <q-card>
                  <q-tabs
                    v-model="tab"
                    dense
                    class="text-grey"
                    active-color="primary"
                    indicator-color="primary"
                    align="justify"
                    narrow-indicator
                  >
                    <q-tab name="dni" label="DNI" />
                    <q-tab name="email" label="Email" />
                  </q-tabs>

                  <q-separator />

                  <q-tab-panels v-model="tab" animated>
                    <q-tab-panel name="dni">
                      <div class="flex justify-center">
                        <div>
                          <div>
                            <q-input
                              dense
                              label="DNI"
                              v-model="userDni.dni"
                              class="ptb-1 text-input"
                            />
                            <q-input
                              dense
                              type="password"
                              v-model="userDni.password"
                              label="Contraseña"
                            />
                          </div>

                          <div class="pb-1">
                            <div class="pt-1">
                              <q-btn
                                flat
                                label="Registrarse"
                                class="w100 bg-primary text-white"
                                @click="LogInDni"
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                    </q-tab-panel>

                    <q-tab-panel name="email">
                      <div class="flex justify-center">
                        <div>
                          <div>
                            <q-input
                              dense
                              label="Email"
                              v-model="userEmail.email"
                              class="ptb-1 text-input"
                            />
                            <q-input
                              dense
                              type="password"
                              label="Contraseña"
                              v-model="userEmail.password"
                              class="ptb-1 text-input"
                            />
                          </div>

                          <div class="pb-1">
                            <div class="pt-1">
                              <q-btn
                                flat
                                label="Registrarse"
                                class="w100 bg-primary text-white"
                                @click="LogInEmail"
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                    </q-tab-panel>
                  </q-tab-panels>
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
import { Notify } from "quasar";
export default {
  name: "PageLogIn",
  data() {
    return {
      tab: "dni",
      userDni: {
        dni: "",
        password: "",
      },
      userEmail: {
        email: "",
        password: "",
      },
    };
  },
  methods: {
    async LogInDni() {
      try {
        const response = await apiLeo.post("/users/log-in/dni", this.userDni);
        if (response.status === 200) {
          Notify.create({
            message: `Bienvenido ${response.data.data.user.names}`,
            color: "primary",
          });

          if (response.status === 400) {
            Notify.create({
              message: `Ingrese bien sus datos`,
              color: "danger",
            });
          }
        }
        console.log(response);
      } catch (error) {
        Notify.create({
          type: "negative",
          message: `Los datos que ingreso no son correctos`,
        });
      }
    },
    async LogInEmail() {
      try {
        const response = await apiLeo.post("/users/log-in/email", this.userEmail);
        if (response.status === 200) {
          Notify.create({
            message: `Bienvenido ${response.data.data.user.names}`,
            color: "primary",
          });

          if (response.status === 400) {
            Notify.create({
              message: `Ingrese bien sus datos`,
              color: "danger",
            });
          }
        }
        console.log(response);
      } catch (error) {
        Notify.create({
          type: "negative",
          message: `Los datos que ingreso no son correctos`,
        });
      }
    },
  },
};
</script>

<style lang="scss">
@import "../../css/global";
</style>
