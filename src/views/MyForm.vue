<template>
    <div>
        <el-form :model="form" :rules="rules">
          <el-form-item prop="name">
              <el-input v-model="form.name"></el-input>
          </el-form-item>
          <el-form-item prop="pass">
              <el-input v-model="form.pass"></el-input>
          </el-form-item>
        </el-form>
    </div>
</template>

<script>
export default {
    name:"MyForm",
    data(){
        let myfn = function(rule,value,callback){
            console.log(rule)
            let rg = /\w{2,6}/
            if(!re.test(value)){
                return callback(new Error("信息不对"))
            }
        }
        return {
            form:{
                name:"admin",
                pass:"123456"
            },
            rules:{
                name:[{validator:myfn,trigger:"blur"}],
                pw:[]
            }
        }

    }
}
</script>

<style>

</style>