const canvas = document.getElementById('canvas')
const ctx = canvas.getContext('2d')
const nameInput = document.getElementById('Fname')
const downloadBtn = document.getElementById('download-btn')
const realFileBtn = document.getElementById('real-file')
const uploadBtn = document.getElementById('upload-btn')

const edit = new Image() //main graphic image
edit.src = 'Meme png.png'
edit.onload = function (){
    drawImg()
}

function drawImg(x,y,w,h,c){
    ctx.drawImage(edit, 0, 0, canvas.width, canvas.height )
    ctx.font = '18px aria'
    ctx.fillStyle = '#ffde00'
    ctx.textAline= "center"
    ctx.fillText( nameInput.value, 57, 377)
    //ctx.drawImage(great, 20,40)

}

nameInput.addEventListener('input', function(){

    drawImg()
})

downloadBtn.addEventListener('click', function(){ //download function
    downloadBtn.href = canvas.toDataURL('image/jpeg')
    downloadBtn.download = 'DP '+ nameInput.value
})


function readImage(inputFile){
  if (inputFile.files && inputFile.files[0]) {
    var reader = new FileReader();
    
    reader.onload = function(e) {
       var previewImage = new Image();
      previewImage.src = e.target.result;
      previewImage.onload = function(){
        ctx.drawImage(previewImage,(0.128*canvas.width),(0.223*canvas.height),(0.38*canvas.width), (0.502*canvas.height));
      }     
    }
    
    reader.readAsDataURL(inputFile.files[0]); // convert to base64 string
  }
}


realFileBtn.addEventListener('change',function(){
    readImage(this);
})

var great=uploadBtn.addEventListener('click', function(){ //upload button function
    realFileBtn.click();
    //drawImg()
    /*if(e.target.file){
        let imageFile = e.target.file[0]
        var reader = new FileReader()
        reader.readAsDataURL(imageFile)
        reader.onload = function(e){
            var myImage = new Image()
            myImage.scr = e.target.result
            myImage.onload =function(){
             const newCanvas = document.getElementById('new-canvas')
             const myContext = document.getElementById('2d')
             newCanvas.width=myImage.width
             newCanvas.height=myImage.height
             myContext.drawImage(myImage,0,0)
            }
        }
    }*/

})

