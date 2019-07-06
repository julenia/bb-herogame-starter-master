let hero = {
    name : "Winnie the Pooh",
    heroic: true,
    inventory : [],
    health : 10,
    weapon : {
        type : "honey",
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

function equipWeapon(currentHero){
    if(currentHero.inventory[0]==null) {
        return null;
    }
    else{
    currentHero.weapon=currentHero.inventory[0];
    return currentHero;
    }

}

const inn = document.getElementById('inn');
inn.onclick = function() {
    rest(hero);
}

const dagger = document.getElementById('dagger');

dagger.onclick = function() {
    const inventory_item = {
        type : "dagger",
        damage : 2,
    };
    pickUpItem(hero, inventory_item);
}
const inventory_item = {
    type : "dagger",
    damage : 2,
};
const bag = document.getElementById('bag');
bag.onclick = function() {
    equipWeapon(hero);
}

