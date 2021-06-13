<template>
  <q-layout view="hhh LpR fFf">
    <q-header elevated class="text-dark bg-transparent">
      <div class="container">
        <q-toolbar>
          <div class="flex justify-between w100">
            <div></div>
            <div>
              <div>
                <router-link to="/log-in" class="link-header"> Packages </router-link>
                <router-link to="/admin/assign" class="link-header">
                  Instructor
                </router-link>
                <router-link to="/admin/new-instructor" class="link-header">
                  New Instructor
                </router-link>
                <router-link to="/admin" class="link-header"> Perfil </router-link>
                <router-link to="/sign-up" class="link-header"> Salir </router-link>
              </div>
            </div>
          </div>
        </q-toolbar>
      </div>
    </q-header>

    <q-page-container>
      <router-view />
    </q-page-container>

    <footer class="bg-info">
      <div class="container">
        <div class="flex justify-between" style="padding: 0.5rem 0">
          <div class="flex flex-column">
            <a class="footer-item-links" href="">@AlexandraNavarro</a>
            <a class="footer-item-links" href="">@LeonardoNolasco</a>
          </div>
          <div class="flex align-items-center">
            <img
              width="35px"
              height="37px"
              src="../../public/images/home/car.png"
              alt=""
            />
          </div>
        </div>
      </div>
    </footer>
  </q-layout>
</template>
<script>
export default {
  name: "UserLayout",
};
</script>

<style lang="scss">
@import "../css/global";
.footer-item-links {
  font-family: Saira;
  font-style: normal;
  font-weight: bold;
  font-size: 18px;
  line-height: 28px;
  text-align: center;

  color: #000000;
  text-decoration: none;
  padding: 0.2rem 0;
}
</style>
