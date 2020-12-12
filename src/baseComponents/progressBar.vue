<template lang="html">
  <div class="progress-bar">
    <div
      class="progress-bar__wrapper"
      :style="`--colNum: ${this.$props.colorLine};`"
    >
      <slot class="progress-bar__title" />
      <div
        class="progress-bar__content"
        :style="[
          progressBarStyle,
          percentWidth,
        ]"
      />
    </div>
  </div>
</template>

<script lang="js">
import progressBarWidth from '../modules/utils/ProgressBarWidth';

export default {
  name: 'ProgressBar',
  props: {
    current: {
      type: Number,
      default: 0,
    },
    target: {
      type: Number,
      default: 0,
    },
    startColor: {
      type: String,
      default: '',
    },
    endColor: {
      type: String,
      default: '',
    },
    colorLine: {
      type: String,
      default: '',
    },
  },
  data() {
    return {};
  },
  computed: {
    percentWidth() {
      const {
        $props: {
          current,
          target,
        },
      } = this;

      return { width: `${progressBarWidth(current, target, false)}%` };
    },
    progressBarStyle() {
      const {
        $props: {
          startColor,
          endColor,
        },
      } = this;
      return { backgroundImage: `linear-gradient(to right, ${startColor} 0%, ${endColor} 100%)` };
    },
  },
  mounted() {},
  methods: {},
};
</script>

<style scoped lang="scss">
.progress-bar {
  width: 100%;
  overflow: hidden;
  .progress-bar__wrapper {
    display: block;
    position: relative;
    width: 100%;
    height: 24px;
    border-radius: 0px 3px 3px 0px;
    background-color: #ffffff;
    overflow: hidden;
    &::before {
      @include position(absolute, null, null, null, 0px);
      content: '';
      width: 1px;
      height: 24px;
      background: var(--colNum);
      opacity: 0.2;
      z-index: 15;
    }
    span {
      @include position(absolute, 2px, null, null, 7px);
      white-space: nowrap;
      width: fit-content;
      z-index: 15;
    }

    .progress-bar__content {
      height: 100%;
      border-radius: 0px 3px 3px 0px;
      position: relative;
      animation: progressBarTransform 2s ease;
      max-width: 100%;
    }
  }
}

@keyframes progressBarTransform {
  from {
    transform: translateX(-100%);
  }

  100% {
    transform: translateX(0%);
  }
}
</style>
