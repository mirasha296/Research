var image = document.getElementById("UploadImage");
var image2 = document.getElementById("myimage");


var imageSlider = document.getElementById("imageSlider");
    imageSlider.oninput = function(){
        //image.style.filter = "hue-rotate(" + this.value + "deg)";
        image.style = `filter: hue-rotate(${this.value}deg)`;
        image2.style = `filter: hue-rotate(${this.value}deg)`;
    }

function onFileSelected(event) {
  var selectedFile = event.target.files[0];
  var reader = new FileReader();

  var imgtag = document.getElementById("myimage");
  imgtag.title = selectedFile.name;

  reader.onload = function(event) {
    imgtag.src = event.target.result;
  };

  reader.readAsDataURL(selectedFile);
}
