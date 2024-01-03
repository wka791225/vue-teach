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

    ],
  };
},
// 當網頁載入時會觸發
mounted() {

  // 將sessionStorage的資料放入toDoListArr內 因為有轉成JSON格式所以要再轉回來
  if(sessionStorage.getItem('toDoList')){
    this.toDoListArr = JSON.parse(sessionStorage.getItem('toDoList'));
  }
 
},
methods:{
  addList() {
    const { addText, toDoListArr } = this;
    if(!addText) return;
    // session清空
    // sessionStorage.removeItem('toDoList');
    // 抓去array裡面的id最大數+1當作是下一個array的id 如果沒有的話則 id 給他1
    const listId = toDoListArr.length ? Math.max(...toDoListArr.map(item => item.id)) + 1 : 1;
    toDoListArr.push({
      id: listId,
      toDo: addText,
      checkThis: false,

    });
    addText = '';
    // 將新的資料存入SESSION，將資料轉乘json格式儲存至SESSION內
    sessionStorage.setItem('toDoList', JSON.stringify(toDoListArr));
     // 將新的資料存入localStorage，將資料轉乘json格式儲存至localStorage內
    localStorage.setItem('toDoList', JSON.stringify(toDoListArr));
  },
}
};
</script>

<template>
  <!-- 在使用漸層色的時候，要注意色調有要連續性 -->
  <div class="w-full h-[100vh] bg-gradient-to-b from-indigo-500 via-purple-500 to-pink-500 flex items-center justify-center font-big">
    <div class="w-[70%] bg-white rounded-md">
      <div class="flex items-center justify-center border-b-2 gap-5">
        <input v-model="addText" type="text" class="w-full h-10 ml-3 border-2" placeholder="請填寫事項">
        事項最後時間<input type="date" name="" id="" >
        事項紀錄時間<input type="date" name="" id="" >
        <button class="bg-gradient-to-b from-indigo-500 via-purple-500 to-pink-500 p-3 rounded-xl m-3 text-white text-xl" type="button" @click="addList()"><font-awesome-icon :icon="['fas', 'file-import']" /></button>
      </div>
      <div class="overflow-y-scroll h-[500px]">
        <div v-for=" item in toDoListArr" :key="item.id" class="flex items-center justify-between gap-5 border-b-2" :class="{ 'bg-neutral-950 text-white line-through' : item.checkThis === true }">
          <input v-model="item.checkThis" class="ml-3" type="checkbox">
          <span>{{ item.toDo }}</span>
          <button class="bg-gradient-to-b from-red-500  to-orange-500 p-3 rounded-xl m-3 text-white" type="button" @click="deleteList(item.id)"><font-awesome-icon :icon="['fas', 'trash-can']" /></button>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped="scss">
</style>