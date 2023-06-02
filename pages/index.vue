<template>
  <div >
  <v-container v-if="!isMobile" class="main-container">
    <v-row no-gutters class="inside-main-container">
      <v-col cols="5">
        <div
          class="title-style"
          style="
            font-size: 28px;
            font-weight: 800;
            margin-right: 0px;
            margin-left: 10px;
            padding-left: 90px;
            font-family: Poppins;
            color: white;
          "
        >
          Run your sales compensation programs in
          <span style="display: inline"
            ><img src="~/assets/images/cruise.png" width="200" height="25"
          /></span>
        </div>
        <v-row
          class="title-style"
          style="font-size: medium; font-weight: 400; color: white; font-family: Poppins;"
          >Build run and automate your incentive compensation plans to create
          transparency and achieve operation efficiency.</v-row
        >
        <v-row class="title-style"
          ><button
            class="custom-btn"
            
          >Let's Kennect</button
        ></v-row>
        <v-row
          class="title-style"
          style="font-size: large; font-family: Poppins; font-weight: 400; color: white"
          >Trusted By!</v-row
        >
        <v-row no-gutters class="title-style">
          <v-carousel
            cycle
            height="100"
            :interval="1800"
            :hide-delimiter-background="true"
            hide-delimiters
            :show-arrows="false"
            style="margin-left: 90px"
          >
            <v-carousel-item v-for="(image, i) in images" :key="i">
              <img
                :src="images[i]"
                style="margin-left: 0px"
                width="160"
                height="40"
              />
              <img
                v-if="images[i + 1]"
                :src="images[i + 1]"
                style="margin-left: 20px"
                width="160"
                height="40"
              />
              <img
                v-if="images[i + 2]"
                :src="images[i + 2]"
                style="margin-left: 20px"
                width="100"
                height="40"
              />
            </v-carousel-item>
          </v-carousel>
        </v-row>
      </v-col>
      <v-col cols="7" class="">
        <div class="img-align-box">
          <div
            style="
              align-self: flex-end;
              padding-left: 100px;
              padding-right: 10px;
            "
          >
            <div
              style="
                display: flex;
                flex-direction: row;
                margin-top: 0px;
                align-items: space-between;
              "
            >
              <div
                style="margin-top: 5px; padding-top: 0px; margin-left: 190px"
              >
                <img
                  src="~/assets/images/SalesCompensation_EasiestToDoBusinessWith_Enterprise_EaseOfDoingBusinessWith.png"
                  height="120"
                />
              </div>
              <div style="padding-top: 5px; margin-left: 50px">
                <img
                  style="margin-top: 0px"
                  src="~/assets/images/Gartner.png"
                  height="70"
                  width="220"
                />
              </div>
            </div>
            <div
              style="display: flex; flex-direction: row; margin-bottom: 10px"
            >
              <img
                style="margin-top: 50px; margin-left: 100px"
                src="~/assets/images/G2.png"
                height="70"
                width="150"
              />
              <img
                style="padding-left: 0px"
                src="~/assets/images/heroimage.png"
                height="400"
              />
              <div style="align-self: center; margin-left: 20px; margin-bottom:150px">
            <img
              src="~/assets/images/SalesCompensation_HighPerformer_HighPerformer.png "
              height="100"
            />
          </div>
            </div>
            
          </div>
          
        </div>
      </v-col>
    </v-row>
  </v-container>
  <v-container v-else class="main-container">
    <v-row no-gutters class="mobile-view-container">
      <v-row no-gutters>
        <v-row no-gutters >
          <div
            style="
              font-size: x-large;
              font-weight: 800;
              text-align: center;
              margin-top: 5px;
              margin-bottom: 20px;
              font-family: Poppins;
              color: white;
            "
          >
            Run your <span style="color: cyan"> sales</span>
            <span style="color: cyan"> compensation</span> programs
            <span style="display: inline-block">
              in<img src="~/assets/images/cruise.png" width="150" height="20"
            /></span>
          </div>
        </v-row>
        <v-row
          class="mobile-rows-margin"
          style="
            font-size: 10px;
            text-align: center;
            font-weight: 300;
            margin-top: 35px;
            margin: 0px 10px;
            color: white;
            font-family: Poppins;
          "
        >
          Build run and automate your incentive compensation plans to create
          transparency and achieve operation efficiency.
        </v-row>
        <v-row
          class="mobile-rows-margin"
          no-gutters
          style="
            background-color: white;
            border-radius: 80px;
            margin-top: 35px;
            max-width: 300px;
            max-height: 45px;
            margin-left: 28px;
          "
        >
          <v-col cols="6">
            <input
              style="
                height: 20px;
                padding: 0px;
                border: none;
                margin: 20px 0px 5px 10px;
              "
            />
          </v-col>
          <v-col cols="5">
            <button
              class="input-custom-btn"
              style="margin-left: -5px; margin-bottom: 10px; margin-top: 7px;"
              
            >BOOK A DEMO</button>
          </v-col>
        </v-row>
        <v-row
          class="mobile-rows-margin"
          no-gutters
          style="
            font-size: 8px;
            text-align: center;
            font-weight: 300;
            margin-top: 5px;
            margin-left: 35px;
            color: white;
          "
        >
          By submitting this form you are agreeing to Kennect's Privacy Policy
          and Terms Of Service.
        </v-row>
        <v-row class="mobile-rows-margin">
          <v-col cols="5">
            <img
              style="margin-left: 30px; padding-left: 10px ;"
              src="~/assets/images/G2.png"
              height="50"
              width="120"
            />
          </v-col>
          <v-col cols="3">
            <img
              style="padding-right: 8px"
              src="~/assets/images/Gartner.png"
              height="50"
              width="150"
            />
          </v-col>
        </v-row>
        <v-row class="mobile-rows-margin">
          <v-col cols="4">
            <img
              style="margin: 0px; padding-left: 60px; margin-left: 60px"
              src="~/assets/images/SalesCompensation_EasiestToDoBusinessWith_Enterprise_EaseOfDoingBusinessWith.png"
              height="70"
            />
          </v-col>
          <v-col cols="4">
            <img
              style="margin: 0px; margin-left: 40px"
              src="~/assets/images/SalesCompensation_EasiestToDoBusinessWith_Enterprise_EaseOfDoingBusinessWith.png"
              height="70"
            />
          </v-col>
        </v-row>
      </v-row>
    </v-row>
    <v-row no-gutters class="mobile-rows-margin"  style="align-content: center;;">
          <div style="display: flex; flex-direction: column; color: #047d80; width: 100vh; height: 7vh; padding:10px 0px 0px 0px; margin: 0px; font-size: xx-large; background-color: white; align-items: center;">
            <span>Trusted By</span>
          <span style="max-width: 30px; min-width: 25px; max-height: 5px; min-height: 3px; background-color: pink;" ></span>
          </div>
        </v-row>
    <v-row no-gutters style="background-color: black; padding-top: 45px;">
      <v-carousel
        cycle
        height="100"
        :interval="1800"
        :hide-delimiter-background="true"
        hide-delimiters
        :show-arrows="false"
        style="margin-left: 20px"
      >
        <v-carousel-item v-for="(image, i) in images" :key="i">
          <img
            :src="images[i]"
            style="margin-left: 0px"
            width="90"
            height="40"
          />
          <img
            v-if="images[i + 1]"
            :src="images[i + 1]"
            style="margin-left: 20px"
            width="90"
            height="40"
          />
          <img
            v-else
            :src="images[i - 2]"
            style="margin-left: 20px"
            width="9 0"
            height="40"
          />
          <img
            v-if="images[i + 2]"
            :src="images[i + 2]"
            style="margin-left: 20px"
            width="100"
            height="40"
          />
          <img
            v-else
            :src="images[i - 3]"
            style="margin-left: 20px"
            width="100"
            height="40"
          />
        </v-carousel-item>
      </v-carousel>
    </v-row>
  </v-container>
</div>
</template>

<script>
import { defineComponent } from "@vue/composition-api";
import Lonza from "~/assets/images/Lonza.png";
import Astra from "~/assets/images/Astrazeneca.png";
import boehringer from "~/assets/images/boehringer.png";
import Incyte from "~/assets/images/Incyte.png";
import Lupin from "~/assets/images/Lupin.png";
import sanofi from "~/assets/images/sanofi.png";
import Swigg from "~/assets/images/Swigg.png";
import Zydus from "~/assets/images/Zydus.png";

export default defineComponent({
  name: "KennectHomePage",
  setup() {
    const hover = ref(false);
    const isMobile = ref(false);
    const images = ref([
      Lonza,
      Astra,
      Lupin,
      sanofi,
      Swigg,
      Zydus,
      boehringer,
      Incyte,
    ]);
    function checkScreenSize() {
      isMobile.value = window.screen.width <= 600;
      console.log(isMobile.value);
    }
    // const mediaQuery = window.matchMedia('(max-width: 768px)');
    // console.log(mediaQuery,"MEDIAAA")
    // watch(mediaQuery.value,()=>{
    //   console.log(mediaQuery.value)
    // })
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
      images,
      hover,
      isMobile,
    };
  },
});
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@600&display=swap');

.main-container {
  min-width: 100%;
  min-height: 100%;
  padding: 0px;
  margin: 0px;
}

.inside-main-container {
  width: 100%;
  min-height: 86vh;
  margin: 5px 5px 0px 5px;
  padding-bottom: 0px;
  background-color: #047d80;
}

.mobile-rows-margin {
  margin-top: 35px;
}

.mobile-view-container {
  background-color: #047d80;
}

.img-align-box {
  min-width: 100%;
  min-height: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  margin: 0px;
  padding: 0px;
  padding-top: 0px;
}

.custom-btn {
  background-color: #ff4261;
  border-radius: 18px;
  font-size: large;
  min-width: 180px;
  font-family: Poppins;
  border: none;
  border-color: none;
  color: white;
  margin-top: 10px;
  padding: 5px;
  border-style: outset;
}

.custom-btn:hover {
  background-color: #047d80;
  border: solid white;
  border-radius: 18px;
 

  margin-top: 10px;

}

.input-custom-btn {
  background-color: #ff4261;
  min-height: 30px;
  min-width: 150px;
  font-size: large;
  border: none;
  font-family: Poppins;
  color: white;
  border-radius: 25px;
}

.title-style {
  margin: 50px;
  margin-left: 100px;
}
</style>
