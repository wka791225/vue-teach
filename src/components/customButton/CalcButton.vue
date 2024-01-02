<script>
export default {
  props:{
    calcType:{
      type:Array,
      default:''
    },
  },
  data() {
    return {
      type: this.calcType ?? [],
    }
  },
};
</script>

<template>
  <section id="myBtn">
    <button v-for="item in type" :key="item.id" class="btn" type="button">
      {{ item }}
    </button>
  </section>
</template>

<style lang="scss" scoped>
#myBtn {
  .btn {
    @apply border-[black] border-[3px] py-[5px] px-[10px] hover:text-[blue] bg-main-deep;
  }
}
</style>