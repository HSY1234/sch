<template>
  <a class="btn" @click="openModal()">👋 Basic CSS-Only Modal</a>
  <div id="open-modal" class="modal-window">
    <div>
      <a href="#" title="Close" class="modal-close">X</a>
      <div class="modal__content__container">
        <modal-radio-button-component
          labelId="test1"
          labelValue="test2"
          selector="test3"
        ></modal-radio-button-component>
      </div>
    </div>
  </div>
</template>
<script lang="ts">
import { defineComponent } from "vue";
import ModalRadioButtonComponent from "@components/atoms/common/ModalRadioButtonComponent.vue";

export default defineComponent({
  components: {
    ModalRadioButtonComponent,
  },
  data() {
    return {
      example: "",
    };
  },
  methods: {
    openModal() {
      console.log(1);
      document.location.href = "#open-modal";
    },
  },
});
</script>

<style scoped>
.modal-window {
  position: fixed;
  background-color: rgba(255, 0, 0, 0.25);
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 999;
  visibility: hidden;
  opacity: 0;
  pointer-events: none;
  transition: all 0.3s;
}
.modal-window:target {
  visibility: visible;
  opacity: 1;
  pointer-events: auto;
}
.modal-window > div {
  width: 400px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  padding: 2em;
  background: white;
}
.modal-window header {
  font-weight: bold;
}
.modal-window h1 {
  font-size: 150%;
  margin: 0 0 15px;
}

.modal-close {
  color: #aaa;
  line-height: 50px;
  font-size: 80%;
  position: absolute;
  right: 0;
  text-align: center;
  top: 0;
  width: 70px;
  text-decoration: none;
}
.modal-close:hover {
  color: black;
}

/* Demo Styles */
html,
body {
  height: 100%;
}

html {
  font-size: 18px;
  line-height: 1.4;
}

body {
  font-family: apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen-Sans,
    Ubuntu, Cantarell, "Helvetica Neue", sans-serif;
  font-weight: 600;
  background-image: linear-gradient(to right, #7f53ac 0, #657ced 100%);
  color: black;
}

a {
  color: inherit;
  text-decoration: none;
}

.container {
  display: grid;
  justify-content: center;
  align-items: center;
  height: 100vh;
}

.modal-window > div {
  border-radius: 1rem;
}

.modal-window div:not(:last-of-type) {
  margin-bottom: 15px;
}

.logo {
  max-width: 150px;
  display: block;
}

small {
  color: lightgray;
}

.btn {
  background-color: white;
  padding: 1em 1.5em;
  border-radius: 0.5rem;
  text-decoration: none;
}
.btn i {
  padding-right: 0.3em;
}

.modal__content__container {
  display: flex;
  flex-direction: column;
}
</style>
