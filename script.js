let noCount = 0;
const noBtn = document.getElementById("noBtn");
const yesBtn = document.getElementById("yesBtn");
const msg = document.getElementById("msg");

const tease = [
    "Arey Baby Dimpy… soch lo 😏",
    "Niit ko itni jaldi mana kar diya? 😝",
    "Last chance… warna Niit sad ho jayega 🥺"
];

noBtn.addEventListener("click", () => {
    msg.innerText = tease[noCount];
    noCount++;

    if(noCount === 3){
        yesBtn.classList.remove("hidden");
        msg.innerText = "Ab dil se answer dena Baby ❤️";
    }
});

yesBtn.addEventListener("click", () => {
    document.getElementById("main").classList.add("hidden");
    document.getElementById("game").classList.remove("hidden");
    startGame();
});

/* Floating Hearts Background */
setInterval(()=>{
    const heart=document.createElement("span");
    heart.innerText="💖";
    heart.style.left=Math.random()*100+"vw";
    document.querySelector(".hearts").appendChild(heart);
    setTimeout(()=>heart.remove(),6000);
},400);

/* Mini Game */
let score=0;

function startGame(){
    const area=document.getElementById("playArea");

    const spawn=setInterval(()=>{
        const h=document.createElement("div");
        h.className="heart";
        h.innerText="💘";

        h.style.left=Math.random()*85+"%";
        h.style.top=Math.random()*80+"%";

        h.onclick=()=>{
            score++;
            document.getElementById("score").innerText="Score: "+score;
            h.remove();

            if(score===5){
                clearInterval(spawn);
                finalMessage();
            }
        };

        area.appendChild(h);
        setTimeout(()=>h.remove(),2000);

    },800);
}

/* Final Love Message */
function finalMessage(){
    document.getElementById("playArea").innerHTML =
    `<h2>Baby Dimpy ❤️</h2>
     <p>You didn't just catch a game…</p>
     <p>You caught Niit's whole heart 💞</p>
     <p>From today, tomorrow, and forever…</p>
     <h3 style="font-size:26px;">I LOVE YOU ❤️</h3>
     <p>— Yours, Niit</p>`;
}
