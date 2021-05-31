var body = document.body;
var colors = [
  {color: "green"},
  {color: "purple"},
  {color: "orange"}
];

var boxes = [];

function renderBoxes(color){
  var that = this;
  this.color = color;
  this.number = 0;
  
  this.boxEle = document.createElement("div");
  this.boxEle.style.height = "100px";
  this.boxEle.style.width = "200px";
  this.boxEle.style.borderRadius = "10px";
  this.boxEle.style.marginBottom = "10px";
  this.boxEle.style.backgroundColor = this.color;
  this.boxEle.addEventListener("click", function(){
    that.increaseNumber();
  });
  
  document.body.appendChild(this.boxEle);
  
  this.countEle = document.createElement("div");
  this.countEle.style.backgroundColor = this.color;
  this.countEle.innerHTML = this.number;
  this.countEle.style.fontSize = "18px";
  this.countEle.style.textAlign = "center";
  this.countEle.style.padding = "35px"
  
  this.boxEle.appendChild(this.countEle);
};

renderBoxes.prototype.increaseNumber = function(){
  this.number +=1;
  this.countEle.innerHTML = this.number;
};

for (var i = 0; i < colors.length; i++){
  boxes.push(new renderBoxes(colors[i].color));
};