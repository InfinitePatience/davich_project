// header.js
window.addEventListener('load',() => {

/* 주메뉴 */
//각 li에 마우스를 올리면 높이값 가져와서 풀다운 메뉴 내려오고 보여야 됨,
//키보드 탭으로 움직여야 됨.

const lis = document.querySelectorAll(".gnb>ul>li");
const header = document.querySelector("#header");
const wrap = document.querySelector(".header_wrap");

for(i=0; i<lis.length; i++){
lis[i].addEventListener('mouseenter', e => {
e.currentTarget.classList.add('on');
header.style.height = `160px`;
});

lis[i].addEventListener('mouseleave', e => {
e.currentTarget.classList.remove('on');
header.style.height = `80px`;
});
}


//헤더 고정
let headerHeight = header.offsetHeight;

window.onscroll = function () {
  let windowTop = window.scrollY;
  if (windowTop >= headerHeight) {
    header.classList.add("drop");
  } else {
    header.classList.remove("drop");
  }
};


/* famaily_site */
const familyBtn = document.querySelector(".family_site");
familyBtn.addEventListener("click",e=>{
  e.preventDefault();
  familyBtn.classList.toggle("on");
});

/* 모바일 헤더 토글 */
const drawerBtn = document.querySelector(".header_inner>.gnb>ul")
const mobile = document.querySelector(".mobile_header")
const cancel = document.querySelector(".mobile>span")
const body = document.querySelector("body")
const bg = document.querySelector(".bg")

drawerBtn.addEventListener('click', e => {
  e.preventDefault();
  mobile.classList.add("on")
  body.classList.add("on")
  bg.classList.add("on")
});

cancel.addEventListener('click', e => {
 e.preventDefault();
 mobile.classList.remove("on");
 body.classList.remove("on")
 bg.classList.remove("on")
});

const topMenu = document.querySelectorAll(".mobile>ul>li")
const subMenu = document.querySelectorAll(".mobile>ul>li>div>ul")

for(i=0; i<topMenu.length; i++){
  topMenu[i].addEventListener('click', e => {
  e.currentTarget.classList.toggle('on');
  });
}


//탑버튼
const topbtn = document.querySelector("a.btn_top")

topbtn.addEventListener("click", e => {
  e.preventDefault();
window.scroll({
  top:0,
  left:0,
  behavior:'smooth'
});
});

//스크롤을 움직이면 스크롤 위치에 따라서 탑버튼이 바뀜
window.addEventListener('scroll', () => {
  let scroll = document.querySelector('html').scrollTop;
  //let scroll = window.pageYOffset;
  console.log(scroll);
  if(scroll <= 0){
    topbtn.classList.remove("on","ab");
  }else if(scroll > 6018){
    topbtn.classList.add("on")
    topbtn.classList.add("ab")
  }else{
    topbtn.classList.remove("ab")
    topbtn.classList.add("on")
  }
});

});
