//sub1.js
window.addEventListener('load',() => {

// 파일첨부 할 때 (첨부파일 란에 파일명 보이기)
var fileName = document.querySelector(".appearfile");
var appearfile = document.querySelector("#input-file") 

appearfile.addEventListener("change",()=>{
  var name = appearfile.files[0].name;
  fileName.value = name;
});

//스크롤 시 해당 컨텐츠 애니메이션 실행
const contents = document.querySelectorAll('#container>div')

var scrollY = window.pageYOffset;
  console.log(scrollY)
window.addEventListener('scroll',e=>{
  scrollY = window.pageYOffset;
  if(scrollY>0 && scrollY <= 200){
    contents[0].classList.add('on')
  }else if(scrollY>500 && scrollY <= 1300){
    contents[1].classList.add('on')
  }
});

});

// 이메일 선택.
const email_text = document.querySelector('.email_text');
const email_select = document.querySelector('#email');


function changeSelection(){
  var selectedElement = document.getElementById("email");
  var optionVal = selectedElement.options[selectedElement.selectedIndex].value;
  var optionTxt = selectedElement.options[selectedElement.selectedIndex].text;
  if(optionVal==0){
    email_text.type = `text`;
    email_select.style.width = `13.5vw`;
  }else{
    email_text.type = `hidden`;
    email_text.value = optionVal;
    email_select.style.width = `30vw`;
  }
}


