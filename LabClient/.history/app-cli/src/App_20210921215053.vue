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
      clients: []
    }
  },
};
</script>

<style lang="scss" scoped></style>
