<template>
  <q-page>
    <div class="container">
      <div class="container-banner-listAlumn">
        <q-img class="banner--alumn" src="../../public/img-list-notes/list-alum.png" />
      </div>
    </div>
  </q-page>
</template>

<script>
import { apiLeo } from "boot/axios";
export default {
  name: "ListAlumn",
  data() {
    return {};
  },
  async created() {
    const user = JSON.parse(localStorage.getItem("user"));
    const response = await apiLeo.get(`/student-teacher/teacher/${user.user._id}`, {
      headers: {
        Authorization: user.user.token,
      },
    });
  },
};
</script>
<style>
.container-banner-listAlumn {
  margin-top: 5rem;
  margin-bottom: 5rem;
}
.banner--alumn {
  max-width: 80%;
  display: block;
  margin: auto;
}
.container-card {
  margin: auto;
  margin-bottom: 5rem;
}
.sub-container-card {
  max-width: 80%;
  display: grid;
  margin: auto;
  grid-template-columns: repeat(3, 30%);
  grid-gap: 1rem;
  margin-bottom: 2rem;
}
.container-button-listAlumn {
  display: flex;
  justify-content: center;
}
</style>
