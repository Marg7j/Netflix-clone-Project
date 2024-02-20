let navbar = document.getElementById("navbar")
console.log("hello")

const toggle = () =>{
    
    if(navbar.style.display == "none"){
        navbar.style.display = "block"
        navbar.style.textAlign = "left"
    }

    else{
        navbar.style.display = "none"
    }
}

function carousel(){
    // alert(" first ")


    let carouselSlider =document.querySelector(".carousel-slider")  
    let list = document.querySelector(".carousel-list")
    let item = document.querySelector(".carousel-item")
    let list2
    


    const speed = 1

    const width = list.offsetWidth
    let x = 0
    let x2 = width

    function clone(){
        // alert("Hello")
        list2 =list.cloneNode(true)
        carouselSlider.appendChild(list2)
        list2.style.left = `${width}px` 
    }

    function movefirst(){
        // alert("welcome")
        x -= speed

        if (width >= Math.abs(x)){
            list.style.left = `${x}px`
        } else{
            x = width

        }
    }

    function moveSecond(){
        // alert("aamir")
        x2 -= speed

        if(list.offsetWidth >= Math.abs(x2)){
            list2.style.left = `${x2}px`
        }else{
            x2 = width
        }
    }

    function hover(){
        // alert("jaava")
        clearInterval(a)
        clearInterval(b)
    }

    function unhover(){
        // alert("slaman")
        a = setInterval(movefirst,10)
        b = setInterval(moveSecond,10)
    }

    clone()

    let a = setInterval(movefirst,10)
    let b = setInterval(moveSecond,1)

    carouselSlider.addEventListener("mouseenter",hover)
    carouselSlider.addEventListener("mouseenter",unhover)

}

carousel()

// carousel()
// unhover()

// hover()

// moveSecond()
// movefirst()

// clone()