<template>
  <div>
    <client
      v-for="cli in clients"
      :key="cli.credit"
      :name="cli.name"
      :credit="cli.credit"
      :balance="cli.balance"
    />
  </div>
</template>

<script>
import Client from "@/components/Client";
export default {
  components:{
    Client,
  },
  data() {
    return {
      clients: [
        {
          name:"Luke",
          creditNumber:78989034,
          balance:45000
        }
      ]
    }
  },
  methods: {
    styles(balance) {
       if (balance>0){
        return "green"
      }
      return "red"
    }
    }
  // },
  // computed: {
  //   styleCard() {
  //     if (this.balance>0){
  //       return "green"
  //     }
  //     return "red"
  
};
</script>

<style lang="css" scoped></style>
