const burger= document.querySelector('.icon_burger') ;
const close= document.querySelector('.icon_cross');
const navMenu= document.querySelector('.nav-menu');
const prev= document.querySelector('.prevBtn');
const next= document.querySelector('.nextBtn');
const firstSlide= document.querySelector('.slide_1');
const secondSlide= document.querySelector('.slide_2');
const thirdSlide= document.querySelector('.slide_3');

const slides= document.querySelectorAll('figure');

// Nav hide/show
burger.addEventListener('click', ()=>{
burger.classList.toggle('hide');
close.classList.toggle('hide');
navMenu.classList.toggle('hide');
navMenu.classList.toggle('show');
})

//Image slider

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

// Add copyright year
const footer=document.querySelector('footer');
const smallCopy= document.createElement('p');
smallCopy.innerHTML=`
Coded ${new Date().getFullYear()} by Taylor Griffin from a Frontend Mentor Project
`;
smallCopy.style.cssText='font-size:12px; text-align:center; margin-bottom:5px';
footer.insertAdjacentElement("afterend", smallCopy);


	
	
	





