<template>
  <div>
    <div>
      <label>
        Dish:
        <input type="text" v-model="dishTitle">
        Porsions:
        <input type="number" v-model.number="dishCount">
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
            <tr v-for="dishEl in dishList" :key="id" >
              <td>{{unready}}</td>
              <td>{{process}}</td>
              <td>{{ready}}</td>
            </tr>
          </tbody>
        </table>

      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'Restaurant',
    propName:{
      dishTitle:{
        type: String,
        default:''
      },
      dishCount:{
        type:Number,
        default:0
      }
    }
  }
</script>

<style lang="scss" scoped>

</style>