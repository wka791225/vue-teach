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
    endTime: '',
    toDoListArr:[

    ],
  };
},
// 當網頁載入時會觸發
mounted() {

  // 將sessionStorage的資料放入toDoListArr內 因為有轉成JSON格式所以要再轉回來
  if(localStorage.getItem('toDoList')){
    this.toDoListArr = JSON.parse(localStorage.getItem('toDoList'));
  }
 
},
methods:{
  // 新增功能
  addList() {
    // 拿去當下時間
    let date = new Date().toISOString().split('T');
    const { addText, toDoListArr, endTime } = this;
    // 檢測是否為空字串
    if(!addText && !endTime) return;
    // session清空
    // sessionStorage.removeItem('toDoList');
    // 抓去array裡面的id最大數+1當作是下一個array的id 如果沒有的話則 id 給他1
    const listId = toDoListArr.length ? Math.max(...toDoListArr.map(item => item.id)) + 1 : 1;
    toDoListArr.push({
      id: listId,
      toDo: addText,
      checkThis: false,
      logTime: date[0],
      endTime: endTime,
    });
    this.addText = '';
    // 將新的資料存入SESSION，將資料轉乘json格式儲存至SESSION內
    // sessionStorage.setItem('toDoList', JSON.stringify(toDoListArr));
     // 將新的資料存入localStorage，將資料轉乘json格式儲存至localStorage內
    localStorage.setItem('toDoList', JSON.stringify(toDoListArr));
  },
  // 刪除功能
  deleteList(id) {
    const {toDoListArr} = this;
    // 找尋跟id不一樣的留下來
   const deletList =  toDoListArr.filter(item => item.id !== id);
  //  如果要修改data的值 的話，還是要加上this.
   this.toDoListArr = deletList;
  //  再放進localStorage內就可以完成刪除
   localStorage.setItem('toDoList', JSON.stringify(deletList));
    console.log(deletList);
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
        <div class="flex flex-col">
          <div class=" border-[1px] text-center border-[black]">
            事項最後時間
          </div>
          <input class="border-2" v-model="endTime" type="date" name="" id="" >
        </div>
        <button class="bg-gradient-to-b from-indigo-500 via-purple-500 to-pink-500 p-3 rounded-xl m-3 text-white text-xl" type="button" @click="addList()"><font-awesome-icon :icon="['fas', 'file-import']" /></button>
      </div>
      <div class="w-full grid grid-cols-5 gap-4">
        <div>執行</div>
        <div class="grid grid-cols-subgrid ">事項</div>
        <div>最後時間</div>
        <div>紀錄時間</div>
        <div class="text-center">功能</div>
      </div>
      <div class="overflow-y-scroll h-[500px]">
        <div v-for=" item in toDoListArr" :key="item.id" class="flex items-center justify-between gap-5 border-b-2" :class="{ 'bg-neutral-950 text-white line-through' : item.checkThis === true }">
          <div class="w-full grid grid-cols-5 items-center">
            <div>
              <input v-model="item.checkThis" class="ml-3" type="checkbox" >
            </div>
            <span class="grid grid-cols-subgrid">{{ item.toDo }}</span>
            <span>{{ item.endTime ?? '' }}</span>
            <span>{{ item.logTime }}</span>

            <button class="bg-gradient-to-b from-red-500  to-orange-500 p-3 rounded-xl m-3 text-white" type="button" @click="deleteList(item.id)"><font-awesome-icon :icon="['fas', 'trash-can']" /></button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped="scss">
</style>