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
          <tr >
          <td>{{ name }}</td>
          <td>{{ credit }}</td>
          <td>{{ balance }}</td>
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
