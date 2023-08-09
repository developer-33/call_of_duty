// gun = type + attatcments + charm + stickers + camo
// soldiers = backpck + characters
// layout = gun + soldiers


let level = 77 

 let camo = {
    sand: ["Desert Snake","Commando ","Rip'N Tear ", "Moroccan Snake", "Pitter Patter","China Lake","Pinstripe Suit","Chain Link","NightFall", "Smoke"],
    dragon:["H20", "Dirt"],
    splinter:["Tundra","UnderGrowth", "Frostbite", "Ice Breaker", "Ruins","Artic Seafoam", "Angles","Autumn"],
    tiger:["Red Tiger","Blue Tiger", "OverGrown", "MudSlide ", "Dank Forest", "Tiger Stripes","Faded Veil", "Feral Beast"],
    jungle:["Marshland", "Swamp", "Modern Woodland", "Desert Hybrid", "Sand Dance","Kill Brush"],
    reptile:["Python", "RattleSnake"],
 },

 type = ["Assult", "Sniper", "LMG", "SMG", "ShotGun", "Marksman"],

charm = ["Celestail(0)", "Knuckle up(1)", "Tire(2)", "Legandary Trident(3)", "Sundae Surprise(4)", "Seaside Barbeque(5)", "Corn Dog(6)", "Boxing Glove(7)", "Old School(8)", "CampFire", "lucky One"],

stickers =  ["Royal Rule(0)", "Cursed Soul(1)", "UnderSea(2)", "Big Splasher(3)", "Kick Back(4)", "ProperGrip(5)", "Lazer Bolt(6)", "Ring Of Doom(7)"]

let attachments = {
muzzle: "",
barrel: "",
stock: "",
optic:"",
perk: "",
lazer: "",
underbarrel: "",
ammo: "",
rearGrip: "",

}

let soldier1 = {
    backpack:["BackPack1-Gold Elixir(0)", "BackPack1-Greater Sprial(1)", "Backpack-Aquatic-KL(2)", "Bioluminescence(3)", "Backpack1-Epiphany(4)", "Backpack1-Algeria(5)", "Backpack-Submersive(6)",],
    characters: ["Terrance Brooks(0)", "Nomad(1)", "Urban Tracker(2)", "Captain Park(3)", "Mil-Sim Crash Down Green(4)", "Special Ops1(5)", "Scout2(6)", "Specail Ops3(7)", "Baker(8)", "Reaper(9)", "Charly(10)"] 

}

// let cosmitc = camo.sand[2] + " " + " " + charm[2] + " " + " " + stickers[3]
// console.log("My Camo is: " + camo.sand[2])
// console.log("My Charm is: " + charm[8])
// console.log("My Sticker is: " + stickers[3], stickers[2])


// console.log(soldier1.backpack[5])

function layout(charm, soldier1, stickers, type, camo) {
return charm + soldier1 + stickers + type + camo
}  

layout() 
console.log((`layout: Red33
 Charm :${charm[2]}
 Weapon Type: ${type[0]}
 Sticker: ${stickers[6]}
 Camo: ${camo.reptile[1]}
 Character: ${soldier1.characters[4]}
 BackPack: ${soldier1.backpack[3]}`)) 
