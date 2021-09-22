<template>
  <div>
    <div class="card">
      <label>
        Name:
        {{ name }}
      </label>
      <label>
        Credit number:
        {{ creditNumber }}
      </label>
      <label>
        Balance:
        {{ balance }}
      </label>
    </div>
  </div>
</template>

<script>
export default {
  name: "Client",
  props: {
    name: {
      type: String,
      default: ""
    },
    creditNumber:{
        type: Number,
        default: 0
    },
    balance:{
        type: Number,
        default: 0
    }
  },
};
</script>

<style lang="scss" scoped></style>
