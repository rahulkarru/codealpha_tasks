var newImage, rah;
function loadFile(event) {
  rah = document.getElementById('rah');
  rah.src = URL.createObjectURL(event.target.files[0]);

  newImage = document.createElement('img');
  newImage.src = URL.createObjectURL(event.target.files[0]);
  
  rah.onload = function() {
    URL.revokeObjectURL(rah.src) // free memory
  }
};

function pdfDown(){
  console.log(newImage)
  var doc = new jsPDF();
  doc.addImage(newImage,10,10);
  doc.save('newpdf.pdf')
}
