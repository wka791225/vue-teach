<!-- 1.可以輸入文字的輸入框
2.可以標記的checkbox
3.可以刪除的button
4.可以儲存的button
-->

<script>
export default {
data() {
  return {
    addText:'',
    toDoListArr:[
      {
        id: 1,
        toDo: '不要下雨',
        checkThis: false,
      },
    ],
  };
},
methods:{
  addList() {
    if(!this.addText) return;
    // 抓去array裡面的id最大數+1當作是下一個array的id 如果沒有的話則 id 給他1
    const listId = this.toDoListArr.length ? Math.max(...this.toDoListArr.map(item => item.id)) + 1 : 1;
    this.toDoListArr.push({
      id: listId,
      toDo: this.addText,
      checkThis: false,

    });
    // this.addText = '';
  },
  checkYes(id) {
    console.log(id);
  }
}
};
</script>

<template>
  <!-- 在使用漸層色的時候，要注意色調有要連續性 -->
  <div class="w-full h-[100vh] bg-gradient-to-b from-indigo-500 via-purple-500 to-pink-500 flex items-center justify-center font-big">
    <div class="w-[70%] bg-white rounded-md">
      <div class="flex items-center justify-center border-b-2 gap-5">
        <input v-model="addText" type="text" class="w-full h-10 ml-3 border-2" placeholder="請填寫事項">
        <button class="bg-gradient-to-b from-indigo-500 via-purple-500 to-pink-500 p-3 rounded-xl m-3 text-white text-xl" type="button" @click="addList()"><font-awesome-icon :icon="['fas', 'file-import']" /></button>
      </div>
      <div class="overflow-y-scroll h-[500px]">
        <div v-for=" item in toDoListArr" :key="item.id" class="flex items-center justify-between gap-5 border-b-2">
          <input v-model="item.checkThis" class="ml-3" type="checkbox" @click="checkYes(item.id)">
          <span>{{ item.toDo }}</span>
          <button class="bg-gradient-to-b from-red-500  to-orange-500 p-3 rounded-xl m-3 text-white" type="button"><font-awesome-icon :icon="['fas', 'trash-can']" /></button>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped="scss">
</style>