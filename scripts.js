// reveal animation
const cards=document.querySelectorAll(".card");
function reveal(){
cards.forEach(c=>{
if(c.getBoundingClientRect().top < window.innerHeight-80){
c.classList.add("show");
}});
}
window.addEventListener("scroll",reveal);
reveal();

// theme toggle
function toggleTheme(){
document.body.classList.toggle("light");
}

// testimonial slider
const texts=[
"Professional and fast delivery.",
"Modern creative design quality.",
"Highly recommended service."
];
let i=0;
setInterval(()=>{
const el=document.getElementById("testi");
if(el){ el.innerText=texts[i%texts.length]; }
i++;
},2500);

// gallery filter
function filterSel(cat){
document.querySelectorAll(".gitem").forEach(el=>{
el.style.display = cat==="all" || el.dataset.cat===cat ? "block":"none";
});
}
