<!-- 1.可以輸入文字的輸入框
2.可以標記的checkbox
3.可以刪除的button
4.可以儲存的button
-->

<script>
import Swal from 'sweetalert2'
export default {
data() {
  return {
    addText:'',
    toDoListArr:[
      {
        id: 1,
        toDo: '第一筆',
        checkThis: false,
        // 編輯開關
        editIng: false,
        // 編輯文字
        newToDo: '',
      }
    ],
    selectBox: 'all',
  };
},
// 當網頁載入時會觸發
mounted() {
  // 將sessionStorage的資料放入toDoListArr內 因為有轉成JSON格式所以要再轉回來
  if(localStorage.getItem('toDoList')){
    this.toDoListArr = JSON.parse(localStorage.getItem('toDoList'));
  }
},
computed:{
  selectData(){
      return this.toDoListArr.filter((item)=>{
        if(this.selectBox === 'all'){
          return true;
        }else if(this.selectBox === 'doing'){
          return item.checkThis === true;
        }else if(this.selectBox === 'notdoing') {
          return item.checkThis === false;
        }
      });
    }
},
methods:{
  // 新增功能
  addList() {
    Swal.fire({
  title: "是否要新增",
  icon: "question",
  showCancelButton: true,
  confirmButtonColor: "#3085d6",
  confirmButtonText: "是",
  cancelButtonColor: "#d33",
  cancelButtonText: "否",
}).then((result) => {
  if (result.isConfirmed) {

    const { addText, toDoListArr } = this;
    // 檢測是否為空字串
    if(!addText) return  Swal.fire({
      title: "請填寫代辦事項及事項最後時間",
      icon: "error"
    });
    // session清空
    // sessionStorage.removeItem('toDoList');
    // 抓去array裡面的id最大數+1當作是下一個array的id 如果沒有的話則 id 給他1
    const listId = toDoListArr.length ? Math.max(...toDoListArr.map(item => item.id)) + 1 : 1;
    toDoListArr.push({
      id: listId,
      toDo: addText,
      checkThis: false,
      // 編輯開關
      editIng: false,
      // 編輯的文字
      newToDo: '',
    });
    // 將新的資料存入SESSION，將資料轉乘json格式儲存至SESSION內
    // sessionStorage.setItem('toDoList', JSON.stringify(toDoListArr));
     // 將新的資料存入localStorage，將資料轉乘json格式儲存至localStorage內
    localStorage.setItem('toDoList', JSON.stringify(toDoListArr));

    Swal.fire({
      title: "儲存成功",
      icon: "success"
    });
  }
});


   
  },
  editList(item) {
   if(item.checkThis){
    return  Swal.fire({
      title: "已經完成的項目無法編輯",
      icon: "info"
    });
   }
   // 編輯開關打開
   item.editIng = !item.editIng;
    // 舊的事項放入newToDo
    item.newToDo = item.toDo;
  },
  // 刪除功能
  deleteList(id) {
    const {toDoListArr} = this;
    // 找尋跟id不一樣的留下來
  const deletList =  toDoListArr.filter(item => {
    if(item.checkThis){
    return  Swal.fire({
      title: "已經完成的項目無法刪除",
      icon: "info"
    });
   }
    item.id !== id
  });
  //  如果要修改data的值 的話，還是要加上this.
  this.toDoListArr = deletList;
  //  再放進localStorage內就可以完成刪除
  localStorage.setItem('toDoList', JSON.stringify(deletList));
  },


  topEditst(item) {
    item.editIng = !item.editIng;
    item.toDo = item.newToDo;
    item.newToDo = '';
  },
}
};
</script>

<template>
  <!-- 在使用漸層色的時候，要注意色調有要連續性 -->
  <div class="w-full h-[100vh] bg-gradient-to-b from-indigo-500 via-purple-500 to-pink-500 flex  flex-col items-center justify-center font-big">
    <div class="w-[70%] bg-white rounded-md">
      <div class="flex items-center flex-col justify-center border-b-2 mb-2">
        <div class="w-full flex items-center justify-center  gap-5">
          <input v-model="addText" type="text" class="w-full h-10 ml-3 border-2" placeholder="請填寫事項">
  
          <button class="bg-gradient-to-b from-indigo-500 via-purple-500 to-pink-500 p-3 rounded-xl m-3 text-white text-xl" type="button" @click="addList()"><font-awesome-icon :icon="['fas', 'file-import']" /></button>
        </div>
        <div class="w-full flex gap-2 pl-3 ">
        <button class=" bg-[#000080] text-white rounded-t-md p-2" type="button" :class="{'bg-[#f1e394] text-black' : selectBox == 'all'}" @click="selectBox = 'all'">全部</button>
        <button class=" bg-[#000080] text-white rounded-t-md p-2" type="button" :class="{'bg-[#f1e394] text-black' : selectBox == 'doing'}" @click="selectBox = 'doing'">已執行</button>
        <button class=" bg-[#000080] text-white rounded-t-md p-2" type="button" :class="{'bg-[#f1e394] text-black' : selectBox == 'notdoing'}" @click="selectBox = 'notdoing'">未執行</button>
        </div>
      </div>
      <div class="w-full grid grid-cols-3 gap-4 pl-5">
        <div>執行</div>
        <div class="grid grid-cols-subgrid ">事項</div>
        <div class="text-center">功能</div>
      </div>
      <div class="overflow-y-scroll h-[500px] pl-5 testthis">
        <div v-for=" item in selectData" :key="item.id" class="flex items-center justify-between gap-5 border-b-2" :class="{ 'bg-neutral-950 text-white line-through' : item.checkThis === true }">
          <div class="w-full grid grid-cols-3 items-center py-3">
            <div>
              <!-- 執行結束，勾選起來後 要把刪除按鈕拿掉 -->
              <input v-model="item.checkThis" class="ml-3" type="checkbox">
            </div>
            <span v-if="!item.editIng" class="grid grid-cols-subgrid">{{ item.toDo }}</span>
            <input v-else v-model="item.newToDo" type="text" class="border-2 border-black rounded-md" placeholder="修改事項">
            <div class="flex justify-center gap-5">
              <button class="w-full bg-gradient-to-b from-green-500  to-blue-500 p-2 rounded-xl  text-white" type="button" @click="editList(item)"><font-awesome-icon :icon="['fas', 'pen-to-square']" /></button>
              <button class="w-full bg-gradient-to-b from-red-500  to-orange-500 p-2 rounded-xl  text-white" type="button" @click="deleteList(item.id)"><font-awesome-icon :icon="['fas', 'trash-can']" /></button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped="scss">
  .testthis{
    &::-webkit-scrollbar{
      width: 3px;
    }
    &::-webkit-scrollbar-track {
      background-color: #C8E8F9;
      border-radius: 5px;
      margin: 3px;
    }
    &::-webkit-scrollbar-thumb{
      border-radius: 10px;
      background-color: rgb(15, 15, 15);
    }
}
</style>