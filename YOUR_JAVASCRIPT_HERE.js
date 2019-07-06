hero = {
    name : "Winnie the Pooh",
    heroic: true,
    inventory : [],
    health : 10,
    weapon : {
        type : "",
        damage : 2,
    }
}

function rest(currentHero){
    if (currentHero.health == 10) {
        alert("Hero has already maximum health")
    }
    else {
        currentHero.health =10;
    }
    return currentHero;

}

function pickUpItem(currentHero, weapon){
    currentHero.inventory.push(weapon);
    return currentHero;

}

function equipWeapon(){
    

}

const inn = document.getElementById('inn');
inn.onclick = function() {
    rest(hero);
}
