//sub2.js
window.addEventListener('load',() => {

// 1층 모델, 2층 모델 선택
const store_model = document.querySelectorAll(".store_model>ul>li");
const store_model2 = document.querySelectorAll(".store_model2>ul>li");

store_model.forEach((model, i)=>{
  model.addEventListener("click",e=>{
    e.preventDefault();
    activation(store_model, i);
    activation(store_model2, i);
  })
})

let activation = (list, i)=>{
  for(let el of list){
    el.classList.remove("on");
  }
  list[i].classList.add("on");
}

// content3 오토배너
const autowrap = document.querySelector(".section2>ul");
const autolist = document.querySelectorAll(".section2>ul li");

let firstNum = 0;
let lastNum = autolist.length -1;

function autoBanner() {
  firstNum++;
  if (firstNum > 11) {
    firstNum = 0;
    autowrap.style.transition = `none`;
  } else {
    autowrap.style.transition = `all`;
    autowrap.style.transitionDuration = `1s`;
  }
  autowrap.style.transform = `translateX(${-480 * firstNum}px)`;
  autoBnn = setTimeout(autoBanner, 1000);
}
let autoBnn = setTimeout(autoBanner, 1000);


// 지역 선택
const location_select = document.querySelectorAll(".location_select>button");
const location_select2 = document.querySelectorAll(".location_select>button>span");
const all = document.querySelectorAll('.content5>.content5_inner>div');
const seoul = document.querySelector('div.seoul');
const youngnam = document.querySelector('div.youngnam');
const gyeonggi = document.querySelector('div.gyeonggi');
const etcs = document.querySelector('div.etcs');

console.log(youngnam);

location_select.forEach((loca, i)=>{
 location_select[0].addEventListener('click', e =>{
    all.forEach(el => {
      el.style.display = `block`;
    })
  })
  loca.addEventListener("click", e => { 
    e.preventDefault();
    activation(location_select2, i);

    all.forEach(item =>{
      item.style.display = `none`;
    })
    
    let classValue = e.currentTarget.getAttribute("class");
    console.log(classValue);
    switch (classValue) {
      case 'seoul':
        show(seoul);
        break;
      case 'youngnam':
        show(youngnam);
        break;
      case 'gyeonggi':
        show(gyeonggi);
        break;
      case 'etcs':
        show(etcs);
        break;
    }
    function show(classValue){
      classValue.style.display = `block`;
    }
    })
});

//스크롤 시 해당 컨텐츠 애니메이션 실행
const contents = document.querySelectorAll('#container>div')

var scrollY = window.pageYOffset;
  console.log(scrollY)
window.addEventListener('scroll',e=>{
  scrollY = window.pageYOffset;
  if(scrollY>0 && scrollY <= 530){
    contents[0].classList.add('on')
  }else if(scrollY>800 && scrollY <= 1300){
    contents[1].classList.add('on')
  }else if(scrollY>1900 && scrollY <= 3400){
    contents[2].classList.add('on')
  }else if(scrollY>3600 && scrollY <= 4400){
    contents[3].classList.add('on')
  }
});

});