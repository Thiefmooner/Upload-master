<template>
  <el-upload
    class="upload-demo"
    :drag="true"
    action=""
    :multiple="true"
    :on-change="onUpload"
    :auto-upload="false"
    style="width: 550px;margin:auto;"
  >
    <el-icon class="el-icon--upload"><upload-filled /></el-icon>
    <div class="el-upload__text">
      <em>单击文件上传</em>
    </div>
    <template #tip>
      <div class="el-upload__tip">
        jpg/png files with a size less than 500kb
      </div>
    </template>
  </el-upload>
  <div class="demo-progress">
    <el-progress :percentage="loadNumber" />
  </div>
</template>
<script lang="ts" setup>
import { ref } from 'vue'
import { getFlowers } from '../http/index'
const fpdx = 2*1024*1024 //分片大小
let loadNumber = ref<number>()
const onUpload = async (file: any) =>{
  const fileSize = file.size
  let zfp = Math.ceil(fileSize / fpdx) //总分片
  if(fileSize < fpdx){
    zfp = 1
  }
  for (let index = 0; index < zfp; index++) {
    const start = index*fpdx //分片结束
    const end =  Math.min(fileSize, start + fpdx) // 分片结束
    const _chunkFile = file.raw.slice(start,end) // 分片文件
    const formdata = new FormData()
    formdata.append('data', _chunkFile) //分片文件数据
    formdata.append('lastModified', file.uid)  //文件uid
    formdata.append('total', zfp.toString())  //总分片大小
    formdata.append('fileName', file.name)  //文件名称
    formdata.append('index', (index+1).toString())  //当前分片
    await getFlowers(formdata)
    loadNumber.value = parseFloat((((index+1)/zfp)*100).toFixed(2))
  }
}
</script>
<style scoped>
.demo-progress .el-progress--line {
  margin-bottom: 15px;
  margin: auto;
  width: 350px;
}
</style>