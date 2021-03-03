<template>
  <div class="loading-container">
    <svg
      class="loading"
      t="1605617717566"
      viewBox="0 0 1024 1024"
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
      p-id="1397"
      width="200"
      height="200"
    >
      <path
        d="M910.222 455.111V512H682.667v-56.889h227.555z m-625.778 0V512H56.89v-56.889h227.555z m170.667 227.556H512v227.555h-56.889V682.667z m0-625.778H512v227.555h-56.889V56.89z m341.333 699.733l-39.822 39.822-159.289-159.288 39.823-39.823 159.288 159.29zM369.778 329.956l-39.822 39.822-159.29-159.29 39.823-39.821 159.289 159.289z m-39.822 267.377l39.822 39.823-159.29 159.288-39.821-39.822 159.289-159.289z m426.666-426.666l39.822 39.822-159.288 159.289-39.823-39.822 159.29-159.29z"
        fill="#1296db"
        p-id="1398"
        data-spm-anchor-id="a313x.7781069.0.i0"
        class="selected"
      ></path>
    </svg>
  </div>
</template>
<style lang="scss">
.loading-container {
  position: absolute;
  z-index: 99;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}
.loading {
  width: 3rem;
  height: 3rem;
  animation: myRotate 3s linear infinite;
}
@keyframes myRotate {
  0% {
    -webkit-transform: rotate(0deg);
  }
  50% {
    -webkit-transform: rotate(180deg);
  }
  100% {
    -webkit-transform: rotate(360deg);
  }
}
</style>