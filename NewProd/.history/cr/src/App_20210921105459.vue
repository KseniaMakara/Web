<template>
  <div>
      <div>
        <label > 
          Name:
          <input type="text" v-model="name">
        </label>
      </div>
      <div>
        <label > 
          Credit number:
          <input type="number" v-model.number="credit">
        </label>
      </div>
      <div>
        <label > 
          Balance:
          <input type="number" v-model.number="balance">
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
            <td>№</td>
            <td>Name</td>
            <td>Credit №</td>
            <td>Credit №</td>
            

          </thead>
        </table>
      </div>
  </div>
</template>

<script>
  export default {
    
  }
</script>

<style lang="scss" scoped>

</style>