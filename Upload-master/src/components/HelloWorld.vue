<template>
  <el-radio-group v-model="labelPosition" label="label position">
    <el-radio-button label="left">Left</el-radio-button>
    <el-radio-button label="right">Right</el-radio-button>
    <el-radio-button label="top">Top</el-radio-button>
  </el-radio-group>
  <div style="margin: 20px" />
  <el-form
    :label-position="labelPosition"
    label-width="100px"
    :model="formLabelAlign"
    style="max-width: 460px;margin: auto;"
  >
    <el-form-item label="Name">
      <el-input v-model="formLabelAlign.name" />
    </el-form-item>
    <el-form-item label="Activity zone">
      <el-input v-model="formLabelAlign.region" />
    </el-form-item>
    <el-form-item label="Activity form">
      <el-input v-model="formLabelAlign.type" />
    </el-form-item>
    <el-form-item>
      <el-button type="primary" @click="submitForm"
        >Create</el-button
      >
      <el-button @click="resetForm">Reset</el-button>
    </el-form-item>
  </el-form>
</template>

<script setup lang="ts">
import { ref } from 'vue'
const labelPosition = ref()
const formLabelAlign = ref()
formLabelAlign.value = {
  name:"",
  region:"",
  type:""
}
const submitForm = () => {
  console.log(formLabelAlign.value)
}
const resetForm = () => {
  formLabelAlign.value = {
    name:"",
    region:"",
    type:""
  }
  console.log(formLabelAlign.value)
}
</script>
