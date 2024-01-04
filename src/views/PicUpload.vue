<script>
export default {
data(){
  return{
    picFile: '',
    filePic: '',
    imageFile: [],
  }
},
methods:{
  uploadPic(event){

    this.picFile = event.target.files[0];
    // console.log(this.picFile);
    if(this.picFile){
      const reader = new FileReader();
      reader.readAsDataURL(this.picFile);
      reader.onload = (e) =>{
        console.log(e);
        this.filePic = e.target.result;
        this.imageFile = [
          {
            name: this.picFile.name,
            path:this.filePic
          }

        ];
        console.log(this.imageFile);
      }
    }
  },
  submit(){
    this.imageFile 
  }

},
};
</script>

<template>
<input type="file" accept=".jpg,.png" @change="uploadPic">
<img :src="filePic" alt="">
<button type="button" @click="submit()">上傳圖片</button>
</template>

<style></style>