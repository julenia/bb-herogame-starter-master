hero = {
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
    console.log(currentHero.inventory)
    //console.log(weapon.type);
    return currentHero;

}

function equipWeapon()
{
    

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
