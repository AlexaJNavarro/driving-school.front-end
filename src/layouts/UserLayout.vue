
<template>
  <q-layout view="hhh LpR fFf">

    <q-header elevated class="text-dark bg-transparent">
        <div class="container">
            <q-toolbar>
                <div class="flex justify-between w100">
                    <div>
                    </div>
                    <div>
                        <div>
                            <a class="link-header"
                                href="">
                                Home
                            </a>
                            <a class="link-header"
                                href="">
                                SignIn
                            </a>
                            <a class="link-header"
                                href="">
                                SignUp
                            </a>
                        </div>
                    </div>
                </div>
            </q-toolbar>
        </div>
    </q-header>

    <q-page-container>
      <router-view />
    </q-page-container>

  </q-layout>
</template>
<script>
export default {
    name: "UserLayout"
}
</script>

<style>
    .container {
        max-width: 1024px;
        margin: auto
    }
    .w100 {
        width: 100%;
    }
    .link-header {
        font-family: Saira;
        font-style: normal;
        font-weight: bold;
        font-size: 18px;
        line-height: 38px;
        text-decoration: none;
        color: #000000;
        padding-right: 1rem;
    }
    .link-header:hover {
        color: #6C63FE;
        transition: .5s;
    }
</style>

