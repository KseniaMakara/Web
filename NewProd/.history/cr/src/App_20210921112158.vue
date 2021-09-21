<template>
  <div>
    <div>
      <label>
        Name:
        <input type="text" v-model="name" />
      </label>
    </div>
    <div>
      <label>
        Credit number:
        <input type="number" v-model.number="credit" />
      </label>
    </div>
    <div>
      <label>
        Balance:
        <input type="number" v-model.number="balance" />
      </label>
    </div>
    <div>
      <button @click="addClient">
        Add
      </button>
    </div>
    <div>
      <table>
        <thead>
          <td>Name</td>
          <td>Credit №</td>
          <td>Balance</td>
        </thead>
        <tbody>
          <tr v-for="cli in clients" :key="cli.id">
          <td>{{ cli.name }}</td>
          <td>{{ cli.credit }}</td>
          <td>{{ cli.balance }}</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
export default {
  
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
