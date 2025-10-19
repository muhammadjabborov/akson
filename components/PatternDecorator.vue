<template>
  <div
    :class="[
      'pattern-decorator',
      position === 'absolute' ? 'absolute' : 'relative',
      animationClass,
    ]"
    :style="containerStyle"
  >
    <img
      :src="patternSrc"
      :alt="`${color} pattern`"
      class="w-full h-full object-contain opacity-20"
      :style="imageStyle"
    />
  </div>
</template>

<script setup lang="ts">
interface Props {
  color: "yellow" | "blue" | "white";
  position?: "absolute" | "relative";
  size?: "small" | "medium" | "large";
  animation?: "float" | "rotate" | "pulse" | "none";
  opacity?: number;
  top?: string;
  right?: string;
  bottom?: string;
  left?: string;
  zIndex?: number;
}

const props = withDefaults(defineProps<Props>(), {
  position: "absolute",
  size: "medium",
  animation: "none",
  opacity: 0.2,
  zIndex: 0,
});

const patternSrc = computed(() => {
  const patterns = {
    yellow: "/akson-yellow-pattern.svg",
    blue: "/akson-blue-pattern.svg",
    white: "/akson-white-pattern.svg",
  };
  return patterns[props.color];
});

const sizeMap = {
  small: "w-32 h-32",
  medium: "w-64 h-64",
  large: "w-96 h-96",
};

const animationClass = computed(() => {
  const animations = {
    float: "animate-float",
    rotate: "animate-rotate",
    pulse: "animate-pulse",
    none: "",
  };
  return animations[props.animation];
});

const containerStyle = computed(() => {
  return {
    top: props.top,
    right: props.right,
    bottom: props.bottom,
    left: props.left,
    zIndex: props.zIndex,
    width:
      props.size === "small"
        ? "8rem"
        : props.size === "medium"
        ? "16rem"
        : "24rem",
    height:
      props.size === "small"
        ? "8rem"
        : props.size === "medium"
        ? "16rem"
        : "24rem",
  };
});

const imageStyle = computed(() => {
  return {
    opacity: props.opacity,
  };
});
</script>

<style scoped>
@keyframes float {
  0%,
  100% {
    transform: translateY(0px);
  }
  50% {
    transform: translateY(-20px);
  }
}

@keyframes rotate {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}

.animate-float {
  animation: float 6s ease-in-out infinite;
}

.animate-rotate {
  animation: rotate 20s linear infinite;
}

.pattern-decorator {
  pointer-events: none;
  user-select: none;
}
</style>
