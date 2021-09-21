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
        <button @click="addToTable">
          Add
        </button>
      </div>
      <div>
        <table border="1px">
          <thead>
            <td>Title</td>
            <td>In Process</td>
            <td>Ready</td>
          </thead>
          <tbody>
            <!-- <tr v-for="dishEl in dishList" :key="id" >
              <td>{{}}</td>
              <td></td>
              <td></td>
            </tr> -->
          </tbody>
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