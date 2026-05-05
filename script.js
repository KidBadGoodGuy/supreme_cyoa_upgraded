class Game {
constructor(){
this.state={scene:1,dharma:0,gold:100,inventory:[],quests:["Find Sita"]};
this.load();
}
load(){
let s=scenes[this.state.scene];
document.getElementById("title").innerText=s.title;
document.getElementById("text").innerText=s.text;
document.getElementById("image").style.backgroundImage=`url(${s.image})`;
document.getElementById("dharma").innerText=this.state.dharma;
document.getElementById("gold").innerText=this.state.gold;
this.renderChoices(s.choices);
this.renderInventory();
this.renderQuests();
}
renderChoices(choices){
let c=document.getElementById("choices");
c.innerHTML="";
choices.forEach(ch=>{
let b=document.createElement("button");
b.innerText=ch.text;
b.onclick=()=>{
if(ch.effect) ch.effect(this.state);
this.state.scene=ch.next;
this.load();
};
c.appendChild(b);
});
}
renderInventory(){
document.getElementById("inventory").innerText=this.state.inventory.join(", ");
}
renderQuests(){
document.getElementById("quests").innerText=this.state.quests.join(", ");
}
}

const scenes={
1:{title:"Forest",text:"You see a golden deer.",image:"https://picsum.photos/800/400?forest",
choices:[
{text:"Chase",next:2,effect:(s)=>s.dharma--},
{text:"Ignore",next:3}
]},
2:{title:"Trap",text:"It's a trap!",image:"https://picsum.photos/800/400?dark",
choices:[{text:"Back",next:1}]},
3:{title:"Safe Path",text:"You stay safe.",image:"https://picsum.photos/800/400?light",
choices:[{text:"Continue",next:1}]}
};

const game=new Game();
