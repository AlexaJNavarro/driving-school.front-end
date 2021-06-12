<template>
  <q-page>
    <div class="container">
      <div>
        <div class="ptb-3">
          <q-img
            src="../../public/images/home/banner-home.svg">
          </q-img>
        </div>

        <div class="ptb-3">
          <div class="flex justify-between">
            <div>
              <h3 class="text-center subtitle">
                Objetivos
              </h3>
              <div class="flex justify-center">
                <p class="text-center text-roboto w60">
                  Permitir que el estudiante
                  desde la comodidad de tu hogar
                </p>
              </div>
            </div>
            <div>
              <img src="../../public/images/home/objetivos.svg" alt="">
            </div>
          </div>
        </div>

        <div class="ptb-3">
          <div class="flex reverse justify-between">
            <div>
              <img src="../../public/images/home/beneficios.jpg" alt="">
            </div>
            <div>
              <h3 class="text-center subtitle">
                Beneficios
              </h3>
              <div class="flex justify-center">
                <p class="text-center text-roboto w60">
                  Permitir que el estudiante
                  desde la comodidad de tu hogar
                </p>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  </q-page>
</template>

<script>
export default {
  name: 'PageIndex',
  data () {
    return {

    }
  },

}
</script>
<style>
@import "../css/global.scss";
.subtitle {
  font-family: Saira;
  font-style: normal;
  font-weight: bold;
  font-size: 42px;
  line-height: 66px;
  text-align: center;

  color: #000000;
}

.text-roboto {
  font-family: Roboto;
  font-style: normal;
  font-weight: normal;
  font-size: 18px;
  line-height: 21px;

  color: #000000;
}


</style>
