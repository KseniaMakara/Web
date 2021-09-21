<template>
  <div>
    
    
  </div>
</template>

<script>
import ClientsCard from "@/components/ClientsCard";
export default {
  components: {
    ClientsCard,
  },
  
  data() {
    return {
      clients: [],
    }
  },
  methods: {
    addClient() {
      this.clients.push({
        id: new Date().getTime(),
        name: this.name,
        credit: this.credit,
        balance: this.balance,
      });
    },
  },
};
</script>

<style lang="scss" scoped></style>
