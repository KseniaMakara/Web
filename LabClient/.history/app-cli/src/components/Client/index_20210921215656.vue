<template>
  <div>
    <div class="card">
      <label>
        Name:
        {{ name }}
      </label> <br>
      <label>
        Credit number:
        {{ creditNumber }}
      </label> <br>
      <label>
        Balance:
        {{ balance }}
      </label> <br>
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

<style lang="css" scoped>
.card label{
    background-color: aqua;
    position: absolute;
    height: 500px;
    width: 500px;
}
</style>
