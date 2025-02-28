let threelines = document.querySelector(".threeline");
let hanbaar = document.getElementById("hanbaar");
let clossebaar = document.querySelector(".clossebaar");


let search = document.querySelector(".search");
let searchbox = document.querySelector(".search-box");
let searchlenses = document.querySelector(".search-lenses");
let searchboxclosse = document.querySelector(".searchboxclosse")



threelines.addEventListener("click", ()=>{
    hanbaar.style.display ="block";
})

clossebaar.addEventListener("click", ()=>{
    hanbaar.style.display ="none";
})


searchlenses.addEventListener("click", ()=>{
    searchbox.style.display ="block";
    searchbox.style.width ="243px";
    searchbox.style.background="#f5f5f5";
    search.style.display = "block";
    searchlenses.style.display = "none";
    searchboxclosse.style.display = "block";
    
})

searchboxclosse.addEventListener("click", ()=>{
    search.style.display ="none";
    searchbox.style.width ="39px";
    searchbox.style.background="#fff";
    searchlenses.style.display = "block";
    searchboxclosse.style.display = "none";
})



// Browse by category

const products =[
    {"id" : 1, "image" : "image/phone.svg", "imageTxt" : "phone", "itemName" : "phone"},
    {"id" : 2, "image" : "image/computer.svg", "imageTxt" : "Computers", "itemName" : "Computer"},
    {"id" : 3, "image" : "image/smartWatch.svg", "imageTxt" : "SmartWatch", "itemName" : "SmartWatch"},
    {"id" : 4, "image" : "image/headphone.svg", "imageTxt" : "Headphones", "itemName" : "Headphones"},
    {"id" : 5, "image" : "image/gamepad.svg", "imageTxt" : "Gaming", "itemName" : "Gaming"},
    {"id" : 6, "image" : "image/camera.svg", "imageTxt" : "Camera", "itemName" : "Camera"}
];
let placeholder = document.querySelector(".bottom");
let out = "";
for (let product of products){
    out +=`
        <div class="container">
            <div class="image">
                <img src="${product.image}" alt="${product.imageTxt}"/>
            </div>
            <small>${product.itemName}</small>
        </div>
    `
};
placeholder.innerHTML = out;





// produvts card 

const ProductsCard =[
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
        "newTag" : "New",
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
        "newTag" : "New",
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
]
const placein = document.querySelector(".items-prodect");
if (placein) {
    let outs ="";
    for (let card of ProductsCard){
        outs += `
            <div class="cardbox">
                <div class="top">
                    <div class="prodectimage oneimage">
                        <img src="${card.image}" alt="${card.imageText}" />
                    </div>
                    <div class="like">
                        <img src="${card.likeImage}" alt="${card.likeText}" />
                    </div>
                    <div class="view">
                        <img src="${card.viewImage}" alt="${card.viewImageText}" />
                    </div>
                    ${card.id === 5? `<span class="new-tag">${card.newTag}</span>` : ""}  
                    ${card.id === 7? `<span class="new-tag">${card.newTag}</span>` : ""}
                    <button class = "shop">${card.addToButton}</button>
                </div>
                <div class="bottom">
                    <p>${card.peragraf}</p>
                    <div class="rething">
                        <span>${card.aound}</span>
                        <div class="stars">
                            <div class="starimage">
                                <img src="${card.staroneimage}" alt="${card.staronetext}" />
                            </div>
                            <div class="starimage">
                                <img src="${card.startwoimage}" alt="${card.startwotext}" />
                            </div>
                            <div class="starimage">
                                <img src="${card.starthreeimage}" alt="${card.starthreetext}" />
                            </div>
                            <div class="starimage">
                                <img src="${card.starfourimage}" alt="${card.starfourtext}" />
                            </div>
                            <div class="starimage">
                                <img src="${card.starfiveimage}" alt="${card.starfivetext}" />
                            </div>
                        </div>
                        <small>${card.valu}</small>

                        ${card.id === 5? `<div class="round">
                            <div class="border">
                                <div class="white">
                                    <div class="red"></div>
                                </div>
                            </div>
                            <div class="fullred"></div>
                        </div>` : ""}

                        ${card.id === 6? `<div class="round">
                            <div class="border">
                                <div class="white">
                                    <div class="yellow"></div>
                                </div>
                            </div>
                            <div class="fullred"></div>
                        </div>` : ""}

                        ${card.id === 7? `<div class="round">
                            <div class="border">
                                <div class="white">
                                    <div class="black"></div>
                                </div>
                            </div>
                            <div class="fullred"></div>
                        </div>` : ""}

                        ${card.id === 8? `<div class="round">
                            <div class="border">
                                <div class="white">
                                    <div class="black"></div>
                                </div>
                            </div>
                            <div class="fullred"></div>
                        </div>` : ""}
                    </div>
                </div>
            </div>
        `;
    }
    placein.innerHTML = outs;
}else {
    console.error("Element with class 'items' not found in the DOM."); // Handle missing container
}




// Add to card button


let cardBOX = document.querySelectorAll(".cardbox");
const add = document.querySelectorAll(".shop");

cardBOX.forEach((cardbox, index) => {

    // Show the .shop element when hovering over the first cardbox

    cardbox.addEventListener("mouseover", ( ) => {
        if (add[index]) {
            add[index].style.display = "block"; 
        }
    });

    // Hide the .shop element when the mouse leaves the first cardbox

    cardbox.addEventListener("mouseout", () => {
        if (add[index]) {
            add[index].style.display = "none"; 
        }
    });
});