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
      <label :class="styles">
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
   computed: {
    styles() {
       if (this.balance>0){
        return "green"
      }
      return "red"
    }
    }
};
</script>

<style lang="css" scoped>
.card {
    position: absolute;
    left: 30%;
    height: 500px;
    width: 500px;
}
.card label{
    position: relative;
    top: 20px;
    left: 45px;
}
.green{
  background-color: green;
}
</style>
