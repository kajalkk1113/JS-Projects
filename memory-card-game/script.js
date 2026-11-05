const container = document.getElementById("container");
const movesText = document.getElementById("moves")
const restart = document.getElementById("restart")
const matchedText = document.getElementById("matched");

const images =[
    "https://i.pinimg.com/736x/76/c4/c2/76c4c256c9e6e723579ece7f51ad63f5.jpg",
    "https://i.pinimg.com/736x/76/c4/c2/76c4c256c9e6e723579ece7f51ad63f5.jpg",

    "https://i.pinimg.com/736x/44/f3/af/44f3af3d268f26a23cdbec2a2d2fd61e.jpg",
    "https://i.pinimg.com/736x/44/f3/af/44f3af3d268f26a23cdbec2a2d2fd61e.jpg",

    "https://i.pinimg.com/736x/8a/f3/8e/8af38ef885ba5a9ecb4811f37bea98d2.jpg",
    "https://i.pinimg.com/736x/8a/f3/8e/8af38ef885ba5a9ecb4811f37bea98d2.jpg",

    "https://i.pinimg.com/736x/c7/1b/f3/c71bf350568aa89392b557d459069186.jpg",
    "https://i.pinimg.com/736x/c7/1b/f3/c71bf350568aa89392b557d459069186.jpg",

    "https://i.pinimg.com/736x/e5/b1/12/e5b112f0bb69045efddcd4d2c28ce43b.jpg",
    "https://i.pinimg.com/736x/e5/b1/12/e5b112f0bb69045efddcd4d2c28ce43b.jpg",

    "https://i.pinimg.com/736x/56/04/46/560446e5a1a0472a4c2261cf7962805b.jpg",
    "https://i.pinimg.com/736x/56/04/46/560446e5a1a0472a4c2261cf7962805b.jpg",

    "https://i.pinimg.com/736x/70/b8/41/70b84173edd29f3ed34cf0cb64a640d5.jpg",
    "https://i.pinimg.com/736x/70/b8/41/70b84173edd29f3ed34cf0cb64a640d5.jpg",

    "https://i.pinimg.com/1200x/21/9f/00/219f004957ecd4fbcf17260dae4070ea.jpg",
    "https://i.pinimg.com/1200x/21/9f/00/219f004957ecd4fbcf17260dae4070ea.jpg",

    "https://i.pinimg.com/736x/0f/f6/6b/0ff66b1df006543f61bbac4e8f12e987.jpg",
    "https://i.pinimg.com/736x/0f/f6/6b/0ff66b1df006543f61bbac4e8f12e987.jpg",

    "https://i.pinimg.com/736x/68/9b/da/689bdada769c16e1e78a36b9d888f635.jpg",
    "https://i.pinimg.com/736x/68/9b/da/689bdada769c16e1e78a36b9d888f635.jpg"
]

function game() {
    container.innerHTML = "";

    images.sort(() => Math.random() -0.5);

    let firstCard = null;
    let secondCard = null;
    let lock = false;
    let moves = 0;
    let matched = 0;

    movesText.innerText = moves;

images.forEach((image)=>{
    const box = document.createElement("div")
    box.classList.add("box")

    const img = document.createElement("img")
    img.src = image;

    box.appendChild(img);
    container.appendChild(box)

    box.addEventListener("click",()=>{
        
        if(lock) return;

        if(box===firstCard) return;
        box.classList.add("show")

        if(firstCard===null){
            firstCard=box;
            return;
        }

        secondCard = box;

        moves++
        movesText.innerText=moves;

        const firstImage = firstCard.querySelector("img").src;
        const secondImage = secondCard.querySelector("img").src;

        if(firstImage === secondImage){
            firstCard.classList.add("matched")
            secondCard.classList.add("matched")

            matched++;
            matchedText.innerText = matched;

           
            

            firstCard = null;
            secondCard = null;

            if(matched===images.length/2){
                setTimeout(()=>{
                    alert("🎉 You Win!")
                },300)
            }
        }else{
            lock = true;

            setTimeout(()=>{
                firstCard.classList.remove("show")
                secondCard.classList.remove("show")

                firstCard = null;
                secondCard = null;

                lock = false
            },1000)
        }
    })
})
}
game()
restart.addEventListener("click", game);
