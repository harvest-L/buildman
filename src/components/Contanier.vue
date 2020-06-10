<!--
 * @Author: flyharvest
 * @Date: 2020-06-08 15:36:00
 * @LastEditTime: 2020-06-08 15:53:36
 * @LastEditors: flyharvest
--> 
<template>
  <div>
    <component :is="c" v-if="isActive"></component>
  </div>
</template>

<script>
export default {
  name: 'Contanier',
  props: {
    isActive: {
      type: Boolean,
      default: false
    }
  },
  created () {
    console.log(this)
  },
  data () {
    return {
      c: 'Contanier'
    }
  }
}
</script>