<template>
  <div>
    <clients-card v-for="client in clients " :key="client.credit"
    :name="client.name" :credit="client.credit" :balance="client.balance"/>
    
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
      clients: [
        {
          name:'Ivan',
          credit:565,
          balance:65

        },
                {
          name:'Ivan',
          credit:565,
          balance:65

        },
      ],
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
