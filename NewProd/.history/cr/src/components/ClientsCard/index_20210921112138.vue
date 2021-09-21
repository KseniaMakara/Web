<template>
  <div></div>
</template>

<script>
export default {
  name: "ClientsCard",
  props: {
    name: {
      type: String,
      default: "",
    },
    credit: {
      type: Number,
      default: 0,
    },
    balance: {
      type: Number,
      default: 0,
    },
  },
};
</script>

<style lang="scss" scoped></style>
