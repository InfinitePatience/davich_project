//main.js
window.addEventListener('load',() => {
//배너
let btnNum = 0;
let lastNum = document.querySelectorAll(".slide_wrap > li").length -1;
const btnprev = document.querySelector("a.btn_prev")
const btnnext = document.querySelector("a.btn_next")
const slide = document.querySelectorAll('li.slide')
const slideRoll = document.querySelectorAll('.slide_roll li');

btnprev.addEventListener('click',e => {
  e.preventDefault();
  btnNum--;
  if(btnNum < 0) btnNum = lastNum;
  activation(btnNum,slide);
  activation(btnNum,slideRoll);
  activation2(btnNum,slideRoll);
});

btnnext.addEventListener('click',e => {
  e.preventDefault();
  btnNum++;
  if(btnNum>lastNum) btnNum = 0;
  activation(btnNum,slide);
  activation(btnNum,slideRoll);
  activation2(btnNum,slideRoll);
});

//양념장
function activation(index,list){
  for(let el of list){
    el.classList.remove("on","active")
  }
  list[index].classList.add("on","active")
}

//양념장2
function activation2(index,list){
  for(let el of list){
    el.classList.remove("on")
    el.style.transform = `scale(1)`
  }
  list[index].classList.add("on")
  list[index].style.transform = `scale(1.5)`
  list[index].style.transition = `all 1s ease 0s`
}


//오토배너 7초마다
function autoBanner(){
  //next 버튼 눌렀을 때
  btnNum++;
  if(btnNum>lastNum) btnNum= 0;
  activation(btnNum,slide);
  activation(btnNum,slideRoll);
  activation2(btnNum,slideRoll);
  autoBnn = setTimeout(autoBanner,7000); //재귀함수
}

let autoBnn = setTimeout(autoBanner,7000);//최초호출


// 롤링버튼 클릭
// 해당 배너로 이동
for(let i=0; i<slideRoll.length; i++){
  slideRoll[i].addEventListener('click', e => {
    e.preventDefault();
    activation(i,slide);
    activation(i,slideRoll); //양념장
    activation2(i,slideRoll); //양념장2
  })
}

// 배너 재생 멈춤 버튼
// 배너 멈추고 이미지 바뀌고
// 배너 재생 이미지 바뀌고


});

// content7 오토배너
const bnnframe = document.querySelector(".openshop_benner");
const bnnsection = document.querySelectorAll(".openshop_benner>li");

let firstNum = 0;
let lastNumber2 = bnnsection.length -1;
let autoBnn2;

function autoBanner2() {
  firstNum++;
  if(firstNum > 5) {
    firstNum = 0;
    bnnframe.style.transitionDuration = `0s`;
    bnnframe.style.transitionDelay = `0s`;
  }else if (firstNum ==1) {
    bnnframe.style.transitionDuration = `2.0s`;
    bnnframe.style.transitionDelay = `0s`;
  }else {
    bnnframe.style.transitionDuration = `1.0s`;
    bnnframe.style.transitionDelay = `1.0s`;
  }
  bnnframe.style.transform = `translateX(${- 14.29* firstNum}%)`;
  clearTimeout(autoBnn2);
  autoBnn2 = setTimeout(autoBanner2, 4000);
}

window.onload = function() {
  if (bnnframe) {
    autoBanner2();
  }
};

//스크롤 시 해당 컨텐츠 애니메이션 실행
const contents = document.querySelectorAll('#container>div')

var scrollY = window.pageYOffset;
  console.log(scrollY)
window.addEventListener('scroll',e=>{
  scrollY = window.pageYOffset;
  if(scrollY>0 && scrollY <= 500){
    contents[0].classList.add('on')
  }else if(scrollY>600 && scrollY <= 1300){
    contents[1].classList.add('on')
  }else if(scrollY>1400 && scrollY <= 2200){
    contents[2].classList.add('on')
  }else if(scrollY>2200 && scrollY <= 3100){
    contents[3].classList.add('on')
  }else if(scrollY>3200 && scrollY <= 3600){
    contents[4].classList.add('on')
  }else if(scrollY>3800 && scrollY <= 4500){
    contents[5].classList.add('on')
  }else if(scrollY>4900 && scrollY <= 5300){
    contents[6].classList.add('on')
  }
});