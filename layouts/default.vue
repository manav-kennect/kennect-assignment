<template>
  <v-container v-if="!isMobile">
    <v-row no-gutters>
      <v-col cols="3">
        <img
          src="~/assets/images/kennectlogo.png"
          class="img-container"
          width="120"
          height="50"
        />
      </v-col>

      <v-col cols="5">
        <v-btn
          variant="text"
          class="top-bar-btns"
          v-for="(btn, index) in buttons"
          >{{ btn }}</v-btn
        >
      </v-col>
      <v-col class="meet-col">
        <v-btn class="meet-btn">BOOK A MEETING</v-btn>
      </v-col>
      <v-col cols="1">
        <v-btn variant="outlined" class="login-btn">LOGIN</v-btn>
      </v-col>
    </v-row>
  </v-container>
  <v-container v-else>
    <v-row no-gutters>
      <v-col cols="10">
        <img
          src="~/assets/images/kennectlogo.png"
          class="img-container"
          width="120"
          height="50"
        />
      </v-col>
      <v-col cols="1">
        <v-menu transition="slide-x-transition">
          <template v-slot:activator="{ props }">
            <v-btn v-bind="props" icon="mdi mdi-menu"></v-btn>
          </template>

          <v-list>
            <v-list-item v-for="(btn, index) in buttons" :key="index">
              <div  v-ripple>{{ btn }}</div>
            </v-list-item>
          </v-list>
        </v-menu>
      </v-col>
    </v-row>
  </v-container>
</template>
<!-- :style="{ padding: '35px 0px 0px 0px' }" -->
<!-- :style="{ padding: '10px 0px 0px 60px' }" -->
<script>
import { defineComponent } from "@vue/composition-api";
export default defineComponent({
  name: "KennectHomePage",
  setup() {
    const buttons = ref([
      "Solution",
      "Industries",
      "Resources",
      "Company",
      "Pricing",
    ]);
    const isMobile = ref(false);
    function checkScreenSize() {
      isMobile.value = window.screen.width <= 600;
      console.log(isMobile.value);
    }

    function handleResize() {
       const screenWidth = window.screen.width;
       if(screenWidth <= 600) {
        isMobile.value = true
       }
       else {
        isMobile.value = false
       }
       console.log(isMobile.value, screenWidth)
    }
    if(process.client) {
    window.addEventListener("resize", handleResize);
    }
    
    onMounted(() => {
      if (process.client) {
        checkScreenSize();
      }
    });

    return {
      buttons,
      isMobile,
    };
  },
});
</script>
<style>

.img-container {
  padding-left: 25px;
}
.meet-col {
  max-width: 230px;
}
.top-bar-btns {
  margin-right: 3px;
  margin-left: 0px;
  margin-top: 15px;
  color: #047d80;
  padding: 0px 5px;
  font-family: Poppins;
}

.login-btn {
  color: black;
  border-color: #047d80;
  border-radius: 18px;
  border-width: 3px;
  margin-top: 15px;
}

.meet-btn {
  background-color: #ff4261;
  border-radius: 18px;
  color: white;
  margin-top: 15px;
  margin-left: 18px;
  padding: 0px 18px 0px 18px;
}

@media (max-width: 600px) {
}
</style>
