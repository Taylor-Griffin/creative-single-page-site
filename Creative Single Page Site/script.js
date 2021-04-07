const burger= document.querySelector('.icon_burger') ;
const close= document.querySelector('.icon_cross');
const navMenu= document.querySelector('.nav-menu');
const prev= document.querySelector('.prevBtn');
const next= document.querySelector('.nextBtn');
const firstSlide= document.querySelector('.slide_1');
const secondSlide= document.querySelector('.slide_2');
const thirdSlide= document.querySelector('.slide_3');



const slides= document.querySelectorAll('figure');






burger.addEventListener('click', ()=>{
burger.classList.toggle('hide');
close.classList.toggle('hide');
navMenu.classList.toggle('hide');
navMenu.classList.toggle('show');
})

function showNextImage(e) {
 
        if(!firstSlide.classList.contains('hide-slide')){
            firstSlide.classList.toggle('hide-slide');
            secondSlide.classList.toggle('hide-slide');
        }else if(!secondSlide.classList.contains('hide-slide')){
            secondSlide.classList.toggle('hide-slide');
            thirdSlide.classList.toggle('hide-slide');
        }else if(!thirdSlide.classList.contains('hide-slide')){
            thirdSlide.classList.toggle('hide-slide');
            firstSlide.classList.toggle('hide-slide');
        }
    }
 
  
  function showPrevImage() {
    if(!firstSlide.classList.contains('hide-slide')){
        firstSlide.classList.toggle('hide-slide');
        thirdSlide.classList.toggle('hide-slide');
    }else if(!thirdSlide.classList.contains('hide-slide')){
        thirdSlide.classList.toggle('hide-slide');
        secondSlide.classList.toggle('hide-slide');
    }else {
        secondSlide.classList.toggle('hide-slide');
        firstSlide.classList.toggle('hide-slide');
    }
  }

  function showImage(el) {
    el.classList.toggle('hide-slide');
  }


prev.addEventListener('click', showPrevImage);
next.addEventListener('click', showNextImage);

	
	
	

// prev.addEventListener('click', ()=>{
//     slides.forEach((slide, i)=>{
//         if(slide[i].previousElementSibling){
           
//             slide.classList.toggle('hide-slide')
//         }else{
//             slides[2].classList.remove('hide-slide')
          
//         }
//     })
   
// })
// next.addEventListener('click', ()=>{
//   slides.forEach(slide=>{
//       if(slide.nextElementSibling){
//           slide.nextElementSibling.classList.toggle('hide-slide')
//       }else{
//           slide[0].classList.toggle('hide-slide')
//       }
//   })

// })



