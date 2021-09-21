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
            <tr v-for="dishEl in dishList" :key="dishEl.id">
              <td>
                <tr>
                  <td>{{unready}}</td>
                  <!-- <td>{{dishEl.dishCount}}</td> -->
                  
                </tr>
              </td>
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
    props:{
      propName:{
      dishTitle:{
        type: String,
        default:''
      },
      dishCount:{
        type:Number,
        default:0
      },
    }
    },
    data() {
      return {
        dishList:[],
        unready:[],
        process:[],
        ready:[]
      }
    },
    methods:{
      addToTable(){
        this.unready.push({
          id: new Date().getTime(),
          dishTitle:this.dishTitle,
          dishCount:this.dishCount

        })

      }
    }
  }
</script>

<style lang="scss" scoped>

</style>