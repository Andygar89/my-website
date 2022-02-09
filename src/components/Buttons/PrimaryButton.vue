<template>
  <button
    type="button"
    class="
      inline-flex
      items-center
      justify-center
      py-2
      font-medium
      text-white
      transition
      duration-150
      ease-out
      border border-transparent
      rounded-md
      shadow-sm
      disabled:cursor-not-allowed disabled:bg-gray-2
      bg-red-1
      hover:bg-pink-9
      focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-pink-700
    "
    :class="{ 'leading-4 text-sm': type === 'small', 'text-base': type === 'big', 'px-2': iconOnly, 'px-4': !iconOnly }"
    :disabled="disabled"
  >
    <span v-show="!iconOnly"> {{ text }} </span>
    <svg
      v-show="withIcon || iconOnly"
      class="group-hover:text-pink-8"
      :class="{ 'ml-0': iconOnly, 'ml-2': !iconOnly, 'w-4 h-4': type === 'small', 'w-5 h-5': type === 'big' }"
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path>
    </svg>
  </button>
</template>

<script>
export default {
  props: {
    text: {
      type: String,
      required: true,
    },
    disabled: {
      type: Boolean,
      default: false,
    },
    type: {
      type: String,
      default: 'big',
    },
    withIcon: {
      type: Boolean,
      default: false,
    },
    iconOnly: {
      type: Boolean,
      default: false,
    },
  },
};
</script>