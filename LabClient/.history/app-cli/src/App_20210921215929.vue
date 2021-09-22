<template>
  <div>
    <client v-for="cli in clients" :key="cli.credit" :name="cli.name" :credit="cli.credit" :balance="cli.balance"/>
     
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
          name:"Dorian",
          creditNumber:78989034,
          balance:45000
        },
        {
          name:"C",
          creditNumber:78989034,
          balance:45000
        }
      ]
    }
  },
  computed: {
    name() {
      return this.data 
    }
  },
};
</script>

<style lang="scss" scoped></style>
