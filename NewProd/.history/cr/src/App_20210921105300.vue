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
  </div>
</template>

<script>
  export default {
    
  }
</script>

<style lang="scss" scoped>

</style>