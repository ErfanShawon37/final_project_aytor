$(function (){
    // *tooltip js
    const tooltipTriggerList = document.querySelectorAll(
        '[data-bs-toggle="tooltip"]'
    );
    const tooltipList = [...tooltipTriggerList].map(tooltipTriggerEl => new bootstrap.Tooltip(tooltipTriggerEl));
   
});

$(function(){
    // slider slick product
    $(".productSlider").slick({
        slidesToShow: 4,
        arrows: true,
        autoplay: true,
        autoplaySpeed: 2500,
        prevArrow:'#forleft',
        nextArrow: '#forRight',
        responsive: [
            {
              breakpoint: 1024,
              settings: {
                slidesToShow: 3,
                slidesToScroll: 3,
              }
            },
            {
              breakpoint: 600,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 2
              }
            },
            {
              breakpoint: 480,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1
              }
            }
          ]
        });
    });

$(function(){
  // *Deal slider
  $(".slideShow").slick({
    slidesToShow: 2,
    arrows: false,
    dots: true,
    autoplay: true,
    autoplaySpeed: 1500,
    dotsClass:"dealDots",
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        }
      },
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 1,
          
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          
        }
      }
    ]
  });
});
/*Count Down */

setInterval(() =>{
  const futureDate = new Date('2024/11/05 23:59:59')
  const CurrentDate = new Date()
  const difference = futureDate -CurrentDate

const sec = 1000
const min = sec * 60
const hour = min * 60
const day = hour * 24

  document.querySelector('.day').innerHTML = Math.floor(difference  / day)
  document.querySelector('.hour').innerHTML = Math.floor(difference % day / hour)
  document.querySelector('.min').innerHTML = Math.floor(difference % hour / min)
  document.querySelector('.sec').innerHTML = Math.floor(difference % min / sec)

}, 1000)

$(function(){
// * banner slider
$(".bannerslide").slick({
   slidesToShow: 1,
   arrows: false,
   dots: true,
   fade:true,
   dotsClass:"bannerDots container",
   autoplay: true,
   autoplaySpeed: 1500,
});
});
$(function(){
  // *Deal slider
  $(".slideNews").slick({
    slidesToShow: 4,
    arrows: false,
    dots: true,
    autoplay: true,
    autoplaySpeed: 1500,
    dotsClass:"dealDots",
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
        }
      }
    ]
  });
});
// countUp part
const counterUp = (className, time = 10) => {
  const counters = Array.from(document.querySelectorAll(className));

  counters.map(counter =>{
      const finalValue = counter.dataset.number
      let initialValue = 0
      const duration = time / finalValue
  
     let counting = setInterval(() =>{
   
      initialValue = initialValue + 1
      counter.innerHTML = initialValue 
  
     if(initialValue >= finalValue)[

      clearInterval(counting)
     ]
  
      }, duration);
  });
}
counterUp('.counter')

// expart part js
$(function(){
 // expart slide
  $(".productSlider").slick({
      slidesToShow: 4,
      arrows: true,
      autoplay: true,
      autoplaySpeed: 2000,
      prevArrow:'#forleft',
      nextArrow: '#forRight',
      responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 3,
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
            }
          }
        ]
      });
  });

  $(function(){
    // *Deal slider
    $(".insta").slick({
      slidesToShow: 6,
      arrows: false,
      dots: true,
      autoplay: true,
      autoplaySpeed: 1500,
      dotsClass:"dealDots",
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 4,
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 3,
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 2,
          }
        }
      ]
    });
  });

  //** PRODUCT IMAGE SLIDER 

$(".productFeaturedImgSlider").slick({
  arrows:false,
  asNavFor:'.thumImgSlider',
  fade: true,
});
  
$(".thumImgSlider").slick({
  arrows: false,
  slidesToShow: 5,
   asNavFor: '.productFeaturedImgSlider',
   centerMode: true,
   centerPadding: 0,
   arrows: true,
   prevArrow:'#leftarrow',
   nextArrow: '#rightarrow',
   focusOnSelect: true,
   responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 3,
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 3,
      }
    }
  ]
});

// add to card part starts

const incrementbtn = document.querySelector ('.counterAdd .increment')
const cartValue = document.querySelector('.counterAdd input')

const increment = () => {
    let oldValue = Number ( cartValue.value);
    let newValue = oldValue + 1;
    decrementbtn.classList.remove('disable')

    cartValue.value = newValue

}

incrementbtn.addEventListener('click', increment)

const decrementbtn = document.querySelector('.counterAdd .decrement')

const decrement = () => {
    let oldValue = Number(cartValue.value);
    if(oldValue > 1){
    let newValue = oldValue - 1;
    cartValue.value = newValue
    }
if (cartValue.value <= 1) {
    decrementbtn.classList.add('disable');
}
};
decrementbtn.addEventListener('click', decrement)



// add to card end
// venobox part
new VenoBox({
  selector: ".my-link"
});
// *venobox ends
