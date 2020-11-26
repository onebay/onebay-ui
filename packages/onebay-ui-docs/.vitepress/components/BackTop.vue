<template>
  <div :class="wrapperCls" @click="backTop">
    <slot>
      <svg
        t="1606313325998"
        class="icon"
        viewBox="0 0 1024 1024"
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
        p-id="1414"
        width="64"
        height="64"
      >
        <path
          d="M522.439258 279.608186 69.730643 732.316801 975.145827 732.316801Z"
          p-id="1415"
          fill="#3eaf7c"
        ></path>
      </svg>
    </slot>
  </div>
</template>
<script>
import { defineComponent, computed } from "vue";
import classNames from "classnames";
import useScrollTop from "../hooks/useScrollTop";

const prefixCls = "ob-back-top";

export default defineComponent({
  name: "BackTop",
  props: {
    className: {
      type: String,
      default: "",
    },
    distance: {
      type: Number,
      default: 100,
    },
  },
  emits: ["click"],
  setup(props, { slots, emit }) {
    const scrollTop = useScrollTop();
    const show = computed(() => scrollTop.value > props.distance);

    const backTop = (e) => {
      window.scrollTo({ top: 0, behavior: "smooth" });
      emit("click", e);
    };

    const wrapperCls = computed(() => {
      return classNames(prefixCls, props.className, {
        [`${prefixCls}__hide`]: !show.value,
      });
    });

    return {
      backTop,
      wrapperCls,
    };
  },
});
</script>

<style lang="scss" scoped>
.ob-back-top {
  position: fixed;
  right: 80px;
  bottom: 100px;
  z-index: 6;
  display: flex;
  width: 50px;
  height: 50px;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  cursor: pointer;
  background-color: #f2f6fc;
  box-shadow: 0 0 6px rgba(0, 0, 0, 0.2);
  &:hover {
    background-color: #fff;
  }
  &__hide {
    display: none;
  }
  .icon {
    width: 26px;
  }
}
</style>