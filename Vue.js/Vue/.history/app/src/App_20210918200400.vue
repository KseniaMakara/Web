<template>
  <div>
    <div>
      <label>
        Dish:
        <input type="text" v-model="dishTitle">
        Porsions:
        <input type="number" v-model="dishCount">
      </label>
      <div>
        <table>
          <thead>
            <td>Title</td>
            <td>In Process</td>
            <td>Ready</td>
          </thead>
        </table>

      </div>
    </div>
  </div>
</template>

<script>
  export default {
    
  }
</script>

<style lang="scss" scoped>

</style>