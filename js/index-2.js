var closse = document.getElementById("closse");
var threelines = document.getElementById("threelines");
var handaar = document.getElementById("handaar");



threelines.addEventListener("click", ()=>{
    hanbaar.style.display ="block";
})

closse.addEventListener("click", ()=>{
    hanbaar.style.display ="none";
})





var lenses = document.querySelector(".lenses");
var searchBox = document.querySelector(".search-box");
var textBox = document.querySelector(".text-box");
var ClosseIcon = document.querySelector(".closse-icon");



lenses.addEventListener("click", ()=>{
    searchBox.style.display ="block";
    searchBox.style.width ="243px";
    searchBox.style.background= "#f5f5f5";
    searchBox.style.border= "1px, #F5F5F5";
    textBox.style.display= "block";
    lenses.style.display= "none";
    ClosseIcon.style.display= "block";
})

ClosseIcon.addEventListener("click", ()=>{
    searchBox.style.width ="34px";
    searchBox.style.display ="none";
    searchBox.style.background= "#fff";
    searchBox.style.border=  "none";
    textBox.style.display= "none";
    lenses.style.display= "block";
})





const productsCards = [
    {
        "id" : 1,
        "image" : "image/Dog food.png",
        "imageText" : "Dog food",
        "likeImage" : "image/like.svg",
        "likeText" : "Like",
        "viewImage" : "image/Quick View.svg",
        "viewImageText" : "Quick View",
        "addToButton" : "Add To Cart",
        "peragraf" : "Breed Dry Dog Food",
        "aound" : "$100",
        "staroneimage" : "image/star-full-filled.svg",
        "staronetext" : "Star-full-filled",
        "startwoimage" : "image/star-full-filled.svg",
        "startwotext" : "Star-full-filled",
        "starthreeimage" : "image/star-full-filled.svg",
        "starthreetext" : "Star-full-filled",
        "starfourimage" : "image/star-not-filled.svg",
        "starfourtext" : "Star-not-filled",
        "starfiveimage" : "image/star-not-filled.svg",
        "starfivetext" : "Star-not-filled",
        "valu" : "(35)" 
    },
    {
        "id" : 2,
        "image" : "image/DSLR Camera.png",
        "imageText" : "DSLR Camera",
        "likeImage" : "image/like.svg",
        "likeText" : "Like",
        "viewImage" : "image/Quick View.svg",
        "viewImageText" : "Quick View",
        "addToButton" : "Add To Cart",
        "peragraf" : "CANON EOS DSLR Camera",
        "aound" : "$360",
        "staroneimage" : "image/star-full-filled.svg",
        "staronetext" : "Star-full-filled",
        "startwoimage" : "image/star-full-filled.svg",
        "startwotext" : "Star-full-filled",
        "starthreeimage" : "image/star-full-filled.svg",
        "starthreetext" : "Star-full-filled",
        "starfourimage" : "image/star-full-filled.svg",
        "starfourtext" : "Star-full-filled",
        "starfiveimage" : "image/star-not-filled.svg",
        "starfivetext" : "Star-not-filled",
        "valu" : "(95)" 
    },
    {
        "id" : 3,
        "image" : "image/Gaming Laptop.png",
        "imageText" : "Gaming Laptop",
        "likeImage" : "image/like.svg",
        "likeText" : "Like",
        "viewImage" : "image/Quick View.svg",
        "viewImageText" : "Quick View",
        "addToButton" : "Add To Cart",
        "peragraf" : "ASUS FHD Gaming Laptop",
        "aound" : "$700",
        "staroneimage" : "image/star-full-filled.svg",
        "staronetext" : "Star-full-filled",
        "startwoimage" : "image/star-full-filled.svg",
        "startwotext" : "Star-full-filled",
        "starthreeimage" : "image/star-full-filled.svg",
        "starthreetext" : "Star-full-filled",
        "starfourimage" : "image/star-full-filled.svg",
        "starfourtext" : "Star-full-filled",
        "starfiveimage" : "image/star-full-filled.svg",
        "starfivetext" : "Star-full-filled",
        "valu" : "(325)" 
    },
    {
        "id" : 4,
        "image" : "image/Curology product set.png",
        "imageText" : "Curology product set",
        "likeImage" : "image/like.svg",
        "likeText" : "Like",
        "viewImage" : "image/Quick View.svg",
        "viewImageText" : "Quick View",
        "addToButton" : "Add To Cart",
        "peragraf" : "Curology Product Set",
        "aound" : "$500",
        "staroneimage" : "image/star-full-filled.svg",
        "staronetext" : "Star-full-filled",
        "startwoimage" : "image/star-full-filled.svg",
        "startwotext" : "Star-full-filled",
        "starthreeimage" : "image/star-full-filled.svg",
        "starthreetext" : "Star-full-filled",
        "starfourimage" : "image/star-full-filled.svg",
        "starfourtext" : "Star-full-filled",
        "starfiveimage" : "image/star-not-filled.svg",
        "starfivetext" : "Star-not-filled",
        "valu" : "(145)" 
    },
    {
        "id" : 5,
        "image" : "image/Kds Electric Car.png",
        "imageText" : "Kds Electric Car",
        "likeImage" : "image/like.svg",
        "likeText" : "Like",
        "viewImage" : "image/Quick View.svg",
        "viewImageText" : "Quick View",
        "newTags" : "New",
        "addToButton" : "Add To Cart",
        "peragraf" : "Kids Electric Car",
        "aound" : "$960",
        "staroneimage" : "image/star-full-filled.svg",
        "staronetext" : "Star-full-filled",
        "startwoimage" : "image/star-full-filled.svg",
        "startwotext" : "Star-full-filled",
        "starthreeimage" : "image/star-full-filled.svg",
        "starthreetext" : "Star-full-filled",
        "starfourimage" : "image/star-full-filled.svg",
        "starfourtext" : "Star-full-filled",
        "starfiveimage" : "image/star-full-filled.svg",
        "starfivetext" : "Star-full-filled",
        "valu" : "(65)",

    },
    {
        "id" : 6,
        "image" : "image/Soccer Cleats.png",
        "imageText" : "Soccer Cleats",
        "likeImage" : "image/like.svg",
        "likeText" : "Like",
        "viewImage" : "image/Quick View.svg",
        "viewImageText" : "Quick View",
        "addToButton" : "Add To Cart",
        "peragraf" : "Jr. Zoom Soccer Cleats",
        "aound" : "$1160",
        "staroneimage" : "image/star-full-filled.svg",
        "staronetext" : "Star-full-filled",
        "startwoimage" : "image/star-full-filled.svg",
        "startwotext" : "Star-full-filled",
        "starthreeimage" : "image/star-full-filled.svg",
        "starthreetext" : "Star-full-filled",
        "starfourimage" : "image/star-full-filled.svg",
        "starfourtext" : "Star-full-filled",
        "starfiveimage" : "image/star-full-filled.svg",
        "starfivetext" : "Star-full-filled",
        "valu" : "(35)" 
    },
    {
        "id" : 7,
        "image" : "image/game.png",
        "imageText" : "GaME",
        "likeImage" : "image/like.svg",
        "likeText" : "Like",
        "viewImage" : "image/Quick View.svg",
        "viewImageText" : "Quick View",
        "newTags" : "New",
        "addToButton" : "Add To Cart",
        "peragraf" : "GP11 Shooter USB Gamepad",
        "aound" : "$660",
        "staroneimage" : "image/star-full-filled.svg",
        "staronetext" : "Star-full-filled",
        "startwoimage" : "image/star-full-filled.svg",
        "startwotext" : "Star-full-filled",
        "starthreeimage" : "image/star-full-filled.svg",
        "starthreetext" : "Star-full-filled",
        "starfourimage" : "image/star-full-filled.svg",
        "starfourtext" : "Star-full-filled",
        "starfiveimage" : "image/star-half-filled.svg",
        "starfivetext" : "Star-hafe-filled",
        "valu" : "(55)" 
    },
    {
        "id" : 8,
        "image" : "image/Quilted satin jacket.png",
        "imageText" : "Quilted satin jacket",
        "likeImage" : "image/like.svg",
        "likeText" : "Like",
        "viewImage" : "image/Quick View.svg",
        "viewImageText" : "Quick View",
        "addToButton" : "Add To Cart",
        "peragraf" : "Quilted Satin Jacket",
        "aound" : "$660",
        "staroneimage" : "image/star-full-filled.svg",
        "staronetext" : "Star-full-filled",
        "startwoimage" : "image/star-full-filled.svg",
        "startwotext" : "Star-full-filled",
        "starthreeimage" : "image/star-full-filled.svg",
        "starthreetext" : "Star-full-filled",
        "starfourimage" : "image/star-full-filled.svg",
        "starfourtext" : "Star-full-filled",
        "starfiveimage" : "image/star-half-filled.svg",
        "starfivetext" : "Star-hafe-filled",
        "valu" : "(55)" 
    },
    {
        "id" : 9,
        "image" : "image/Gamepad.png",
        "imageText" : "Gamepad",
        "likeImage" : "image/like.svg",
        "likeText" : "Like",
        "viewImage" : "image/Quick View.svg",
        "viewImageText" : "Quick View",
        "offerPrice" : " -40% ",
        "addToButton" : "Add To Cart",
        "peragraf" : "HAVIT HV-G92 Gamepad",
        "aound" : "$120",
        "totalAmound" : "$160",
        "staroneimage" : "image/star-full-filled.svg",
        "staronetext" : "Star-full-filled",
        "startwoimage" : "image/star-full-filled.svg",
        "startwotext" : "Star-full-filled",
        "starthreeimage" : "image/star-full-filled.svg",
        "starthreetext" : "Star-full-filled",
        "starfourimage" : "image/star-full-filled.svg",
        "starfourtext" : "Star-full-filled",
        "starfiveimage" : "image/star-half-filled.svg",
        "starfivetext" : "Star-hafe-filled",
        "valu" : "(55)" 
    },
    {
        "id" : 10,
        "image" : "image/Wired-Keyboard.png",
        "imageText" : "Wired-Keyboard",
        "likeImage" : "image/like.svg",
        "likeText" : "Like",
        "viewImage" : "image/Quick View.svg",
        "viewImageText" : "Quick View",
        "offerPrice" : " -35% ",
        "addToButton" : "Add To Cart",
        "peragraf" : "AK-900 Wired Keyboard",
        "aound" : "$960",
        "totalAmound" : "$1160",
        "staroneimage" : "image/star-full-filled.svg",
        "staronetext" : "Star-full-filled",
        "startwoimage" : "image/star-full-filled.svg",
        "startwotext" : "Star-full-filled",
        "starthreeimage" : "image/star-full-filled.svg",
        "starthreetext" : "Star-full-filled",
        "starfourimage" : "image/star-full-filled.svg",
        "starfourtext" : "Star-full-filled",
        "starfiveimage" : "image/star-not-filled.svg",
        "starfivetext" : "Star-not-filled",
        "valu" : "(55)" 
    },
    {
        "id" : 11,
        "image" : "image/Gaming-Monitor.png",
        "imageText" : "Gaming-Monitor",
        "likeImage" : "image/like.svg",
        "likeText" : "Like",
        "viewImage" : "image/Quick View.svg",
        "viewImageText" : "Quick View",
        "offerPrice" : " -30% ",
        "addToButton" : "Add To Cart",
        "peragraf" : "IPS LCD Gaming Monitor",
        "aound" : "$370",
        "totalAmound" : "$400",
        "staroneimage" : "image/star-full-filled.svg",
        "staronetext" : "Star-full-filled",
        "startwoimage" : "image/star-full-filled.svg",
        "startwotext" : "Star-full-filled",
        "starthreeimage" : "image/star-full-filled.svg",
        "starthreetext" : "Star-full-filled",
        "starfourimage" : "image/star-full-filled.svg",
        "starfourtext" : "Star-full-filled",
        "starfiveimage" : "image/star-full-filled.svg",
        "starfivetext" : "Star-full-filled",
        "valu" : "(99)" 
    },
    {
        "id" : 12,
        "image" : "image/CUP-cooler.png",
        "imageText" : "CUP-cooler",
        "likeImage" : "image/like.svg",
        "likeText" : "Like",
        "viewImage" : "image/Quick View.svg",
        "viewImageText" : "Quick View",
        "addToButton" : "Add To Cart",
        "peragraf" : "RGB liquid CPU Cooler",
        "aound" : "$160",
        "totalAmound" : "$170",
        "staroneimage" : "image/star-full-filled.svg",
        "staronetext" : "Star-full-filled",
        "startwoimage" : "image/star-full-filled.svg",
        "startwotext" : "Star-full-filled",
        "starthreeimage" : "image/star-full-filled.svg",
        "starthreetext" : "Star-full-filled",
        "starfourimage" : "image/star-full-filled.svg",
        "starfourtext" : "Star-full-filled",
        "starfiveimage" : "image/star-half-filled.svg",
        "starfivetext" : "Star-full-filled",
        "valu" : "(65)" 
    },
    {
        "id" : 13,
        "image" : "image/Dog food.png",
        "imageText" : "Dog food",
        "likeImage" : "image/like.svg",
        "likeText" : "Like",
        "viewImage" : "image/Quick View.svg",
        "viewImageText" : "Quick View",
        "addToButton" : "Add To Cart",
        "peragraf" : "Breed Dry Dog Food",
        "aound" : "$100",
        "staroneimage" : "image/star-full-filled.svg",
        "staronetext" : "Star-full-filled",
        "startwoimage" : "image/star-full-filled.svg",
        "startwotext" : "Star-full-filled",
        "starthreeimage" : "image/star-full-filled.svg",
        "starthreetext" : "Star-full-filled",
        "starfourimage" : "image/star-not-filled.svg",
        "starfourtext" : "Star-not-filled",
        "starfiveimage" : "image/star-not-filled.svg",
        "starfivetext" : "Star-not-filled",
        "valu" : "(35)" 
    },
    {
        "id" : 14,
        "image" : "image/DSLR Camera.png",
        "imageText" : "DSLR Camera",
        "likeImage" : "image/like.svg",
        "likeText" : "Like",
        "viewImage" : "image/Quick View.svg",
        "viewImageText" : "Quick View",
        "addToButton" : "Add To Cart",
        "peragraf" : "CANON EOS DSLR Camera",
        "aound" : "$360",
        "staroneimage" : "image/star-full-filled.svg",
        "staronetext" : "Star-full-filled",
        "startwoimage" : "image/star-full-filled.svg",
        "startwotext" : "Star-full-filled",
        "starthreeimage" : "image/star-full-filled.svg",
        "starthreetext" : "Star-full-filled",
        "starfourimage" : "image/star-full-filled.svg",
        "starfourtext" : "Star-full-filled",
        "starfiveimage" : "image/star-not-filled.svg",
        "starfivetext" : "Star-not-filled",
        "valu" : "(95)" 
    },
    {
        "id" : 15,
        "image" : "image/Gaming Laptop.png",
        "imageText" : "Gaming Laptop",
        "likeImage" : "image/like.svg",
        "likeText" : "Like",
        "viewImage" : "image/Quick View.svg",
        "viewImageText" : "Quick View",
        "addToButton" : "Add To Cart",
        "peragraf" : "ASUS FHD Gaming Laptop",
        "aound" : "$700",
        "staroneimage" : "image/star-full-filled.svg",
        "staronetext" : "Star-full-filled",
        "startwoimage" : "image/star-full-filled.svg",
        "startwotext" : "Star-full-filled",
        "starthreeimage" : "image/star-full-filled.svg",
        "starthreetext" : "Star-full-filled",
        "starfourimage" : "image/star-full-filled.svg",
        "starfourtext" : "Star-full-filled",
        "starfiveimage" : "image/star-full-filled.svg",
        "starfivetext" : "Star-full-filled",
        "valu" : "(325)" 
    },
    {
        "id" : 16,
        "image" : "image/Curology product set.png",
        "imageText" : "Curology product set",
        "likeImage" : "image/like.svg",
        "likeText" : "Like",
        "viewImage" : "image/Quick View.svg",
        "viewImageText" : "Quick View",
        "addToButton" : "Add To Cart",
        "peragraf" : "Curology Product Set",
        "aound" : "$500",
        "staroneimage" : "image/star-full-filled.svg",
        "staronetext" : "Star-full-filled",
        "startwoimage" : "image/star-full-filled.svg",
        "startwotext" : "Star-full-filled",
        "starthreeimage" : "image/star-full-filled.svg",
        "starthreetext" : "Star-full-filled",
        "starfourimage" : "image/star-full-filled.svg",
        "starfourtext" : "Star-full-filled",
        "starfiveimage" : "image/star-not-filled.svg",
        "starfivetext" : "Star-not-filled",
        "valu" : "(145)" 
    },
    {
        "id" : 17,
        "image" : "image/Kds Electric Car.png",
        "imageText" : "Kds Electric Car",
        "likeImage" : "image/like.svg",
        "likeText" : "Like",
        "viewImage" : "image/Quick View.svg",
        "viewImageText" : "Quick View",
        "newTags" : "New",
        "addToButton" : "Add To Cart",
        "peragraf" : "Kids Electric Car",
        "aound" : "$960",
        "staroneimage" : "image/star-full-filled.svg",
        "staronetext" : "Star-full-filled",
        "startwoimage" : "image/star-full-filled.svg",
        "startwotext" : "Star-full-filled",
        "starthreeimage" : "image/star-full-filled.svg",
        "starthreetext" : "Star-full-filled",
        "starfourimage" : "image/star-full-filled.svg",
        "starfourtext" : "Star-full-filled",
        "starfiveimage" : "image/star-full-filled.svg",
        "starfivetext" : "Star-full-filled",
        "valu" : "(65)",

    },
    {
        "id" : 18,
        "image" : "image/Soccer Cleats.png",
        "imageText" : "Soccer Cleats",
        "likeImage" : "image/like.svg",
        "likeText" : "Like",
        "viewImage" : "image/Quick View.svg",
        "viewImageText" : "Quick View",
        "addToButton" : "Add To Cart",
        "peragraf" : "Jr. Zoom Soccer Cleats",
        "aound" : "$1160",
        "staroneimage" : "image/star-full-filled.svg",
        "staronetext" : "Star-full-filled",
        "startwoimage" : "image/star-full-filled.svg",
        "startwotext" : "Star-full-filled",
        "starthreeimage" : "image/star-full-filled.svg",
        "starthreetext" : "Star-full-filled",
        "starfourimage" : "image/star-full-filled.svg",
        "starfourtext" : "Star-full-filled",
        "starfiveimage" : "image/star-full-filled.svg",
        "starfivetext" : "Star-full-filled",
        "valu" : "(35)" 
    },
    {
        "id" : 19,
        "image" : "image/game.png",
        "imageText" : "GaME",
        "likeImage" : "image/like.svg",
        "likeText" : "Like",
        "viewImage" : "image/Quick View.svg",
        "viewImageText" : "Quick View",
        "newTags" : "New",
        "addToButton" : "Add To Cart",
        "peragraf" : "GP11 Shooter USB Gamepad",
        "aound" : "$660",
        "staroneimage" : "image/star-full-filled.svg",
        "staronetext" : "Star-full-filled",
        "startwoimage" : "image/star-full-filled.svg",
        "startwotext" : "Star-full-filled",
        "starthreeimage" : "image/star-full-filled.svg",
        "starthreetext" : "Star-full-filled",
        "starfourimage" : "image/star-full-filled.svg",
        "starfourtext" : "Star-full-filled",
        "starfiveimage" : "image/star-half-filled.svg",
        "starfivetext" : "Star-hafe-filled",
        "valu" : "(55)" 
    },
    {
        "id" : 20,
        "image" : "image/Quilted satin jacket.png",
        "imageText" : "Quilted satin jacket",
        "likeImage" : "image/like.svg",
        "likeText" : "Like",
        "viewImage" : "image/Quick View.svg",
        "viewImageText" : "Quick View",
        "addToButton" : "Add To Cart",
        "peragraf" : "Quilted Satin Jacket",
        "aound" : "$660",
        "staroneimage" : "image/star-full-filled.svg",
        "staronetext" : "Star-full-filled",
        "startwoimage" : "image/star-full-filled.svg",
        "startwotext" : "Star-full-filled",
        "starthreeimage" : "image/star-full-filled.svg",
        "starthreetext" : "Star-full-filled",
        "starfourimage" : "image/star-full-filled.svg",
        "starfourtext" : "Star-full-filled",
        "starfiveimage" : "image/star-half-filled.svg",
        "starfivetext" : "Star-hafe-filled",
        "valu" : "(55)" 
    },
]




// Function to display filtered products
const place = document.querySelector(".bottomProdect")
if (place) {
    let out = "";
    for (let cards of productsCards){
        out += `
            <div class="cardbox">
                <div class="top">
                    <div class="prodectimage oneimage">
                        <img src="${cards.image}" alt="${cards.imageText}"/>
                    </div>
                    <div class="like">
                        <img src="${cards.likeImage}" alt="${cards.likeText}"/>
                    </div>
                    <div class="view">
                        <img src="${cards.viewImage}" alt="${cards.viewImageText}"/>
                    </div>
                    ${(cards.id === 5 || cards.id === 7 || cards.id === 17
                        || cards.id === 19)?
                        `<span class="new-tags">${cards.newTags}</span>` : ""}
                     ${(cards.id === 9 || cards.id === 10 || cards.id === 11)?
                        `<span class="offer">${cards.offerPrice},</span>` : "" }
                    <button class = "shope">${cards.addToButton}</button>
                </div>
                <div class="bottom">
                    <p>${cards.peragraf}</p>
                    <div class="rething">
                        <span>${cards.aound}</span>
                         ${(cards.id === 9 || cards.id === 10 || cards.id === 11
                            || cards.id === 12)?
                        `<small class="outAmound">${cards.totalAmound}</small>` : "" }
                        <div class="stars">
                            <div class="starimage">
                                <img src="${cards.staroneimage}" alt="${cards.staronetext}"/>
                            </div>
                            <div class="starimage">
                                <img src="${cards.startwoimage}" alt="${cards.startwotext}"/>
                            </div>
                            <div class="starimage">
                                <img src="${cards.starthreeimage}" alt="${cards.starthreetext}"/>
                            </div>
                            <div class="starimage">
                                <img src="${cards.starfourimage}" alt="${cards.starfourtext}"/>
                            </div>
                            <div class="starimage">
                                <img src="${cards.starfiveimage}" alt="${cards.starfivetext}"/>
                            </div>
                        </div>
                        <small>${cards.valu}</small>
                    </div>
                    
                </div>

                ${(cards.id === 5 || cards.id === 17) ?
                    `<div class="round">
                    <div class="border">
                        <div class="white">
                            <div class="red"></div>
                        </div>
                    </div>
                    <div class="fullred"></div>
                </div>` : ""}

                ${(cards.id === 6 || cards.id === 18)?
                    `<div class="round">
                    <div class="border">
                        <div class="white">
                            <div class="yellow"></div>
                        </div>
                    </div>
                    <div class="fullred"></div>
                </div>` : ""}
                
                ${(cards.id === 7 || cards.id === 8 || cards.id === 19 || cards.id === 20 ) ?
                    `<div class="round">
                    <div class="border">
                        <div class="white">
                            <div class="black"></div>
                        </div>
                    </div>
                    <div class="fullred"></div>
                </div>` : ""}

                
            </div>
        `;
    }
    place.innerHTML = out;
}else {
    console.error("Element with class 'items' not found in the DOM.")
}





// Add to card button


let cardBOX = document.querySelectorAll(".cardbox");
const add = document.querySelectorAll(".shope");

cardBOX.forEach((cardbox, index) => {

    // Show the .shop element when hovering over the first cardbox

    cardbox.addEventListener("mouseover", ( ) => {
        if (add[index]) {
            add[index].style.display = "block"; 
            console.log("hi iam cards");
            
        }
    });

    // Hide the .shop element when the mouse leaves the first cardbox

    cardbox.addEventListener("mouseout", () => {
        if (add[index]) {
            add[index].style.display = "none"; 
        }
    });

    
});

// search panel



const categories = [...new Set(productsCards.map((item) => item))];

document.querySelector(".text-box").addEventListener('keyup', (e) => {
    const searchData = e.target.value.toLowerCase();
    const filterData = categories.filter((item) => {
        return item.peragraf.toLowerCase().includes(searchData);
    });
    displayItem(filterData);
});

const displayItem = (items) => {
    const place = document.querySelector(".bottomProdect");
    if (place) {
        if (items.length === 0) {
            place.innerHTML = "<p>No products found.</p>";
        } else {
            let out = "";
            items.forEach((cards) => {
                out += `
                    <div class="cardbox">
                <div class="top">
                    <div class="prodectimage oneimage">
                        <img src="${cards.image}" alt="${cards.imageText}"/>
                    </div>
                    <div class="like">
                        <img src="${cards.likeImage}" alt="${cards.likeText}"/>
                    </div>
                    <div class="view">
                        <img src="${cards.viewImage}" alt="${cards.viewImageText}"/>
                    </div>
                    ${(cards.id === 5 || cards.id === 7 || cards.id === 17
                        || cards.id === 19)?
                        `<span class="new-tags">${cards.newTags}</span>` : ""}
                     ${(cards.id === 9 || cards.id === 10 || cards.id === 11)?
                        `<span class="offer">${cards.offerPrice},</span>` : "" }
                    <button class = "shope">${cards.addToButton}</button>
                </div>
                <div class="bottom">
                    <p>${cards.peragraf}</p>
                    <div class="rething">
                        <span>${cards.aound}</span>
                         ${(cards.id === 9 || cards.id === 10 || cards.id === 11
                            || cards.id === 12)?
                        `<small class="outAmound">${cards.totalAmound}</small>` : "" }
                        <div class="stars">
                            <div class="starimage">
                                <img src="${cards.staroneimage}" alt="${cards.staronetext}"/>
                            </div>
                            <div class="starimage">
                                <img src="${cards.startwoimage}" alt="${cards.startwotext}"/>
                            </div>
                            <div class="starimage">
                                <img src="${cards.starthreeimage}" alt="${cards.starthreetext}"/>
                            </div>
                            <div class="starimage">
                                <img src="${cards.starfourimage}" alt="${cards.starfourtext}"/>
                            </div>
                            <div class="starimage">
                                <img src="${cards.starfiveimage}" alt="${cards.starfivetext}"/>
                            </div>
                        </div>
                        <small>${cards.valu}</small>
                    </div>
                    
                </div>

                ${(cards.id === 5 || cards.id === 17) ?
                    `<div class="round">
                    <div class="border">
                        <div class="white">
                            <div class="red"></div>
                        </div>
                    </div>
                    <div class="fullred"></div>
                </div>` : ""}

                ${(cards.id === 6 || cards.id === 18)?
                    `<div class="round">
                    <div class="border">
                        <div class="white">
                            <div class="yellow"></div>
                        </div>
                    </div>
                    <div class="fullred"></div>
                </div>` : ""}
                
                ${(cards.id === 7 || cards.id === 8 || cards.id === 19 || cards.id === 20 ) ?
                    `<div class="round">
                    <div class="border">
                        <div class="white">
                            <div class="black"></div>
                        </div>
                    </div>
                    <div class="fullred"></div>
                </div>` : ""}

                
            </div>
                `;
            });
            place.innerHTML = out;
        }
    } else {
        console.error("Element with class 'bottomProdect' not found in the DOM.");
    }
};

displayItem(categories);