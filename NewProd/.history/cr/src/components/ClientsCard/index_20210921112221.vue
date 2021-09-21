<template>
  <div>
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
