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
        <button @click="addTitle">
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
            <tr v-for="dishEl in unready" :key="dishEl.id">
              <td>
                <tr>
                  <td>{{dishEl.dishTitle}}</td>
                  <td>{{dishEl.dishCount}}</td>
                  <td>
                    <button @click="addProcess">Add to process</button>
                  </td>
                </tr>
              </td>
            </tr>

            <tr v-for="dishPr in process" :key="dishPr.id">
             <td>
               <tr>
                 <td>{{dishPr.dishTitle}}</td>
                 <td>{{dishPr.dishCount}}</td>
                 <td>
                    <button @click="addReady">Add to process</button>
                  </td>
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
      addTitle:{
        type: Function,
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
        dishTitle:null,
        dishCount:null,
        dishList:[],
        unready:[],
        process:[],
        ready:[]
      }
    },
    methods:{
      addTitle(){
        this.unready.push({
          id: new Date().getTime(),
          dishTitle:this.dishTitle,
          dishCount:this.dishCount
        }),
        this.dishCount=0,
        this.dishTitle=''
      }
    },
    addProcess(){
      this.process.push({
          id: new Date().getTime(),
          dishTitle:this.dishTitle,
          dishCount:this.dishCount
        }),
        this.unready=[]
        
    }
  }
</script>

<style lang="scss" scoped>

</style>