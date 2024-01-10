<script>
export default{
  data(){
    return{
      thisText:'安安 123'
    };
  }
}
</script>
<template>
    <button type="button" class=" p-3 rounded-md bg-red-800">
      <slot  />
    </button>
   
</template>
<style lang="scss" scoped>
</style>