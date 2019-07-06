const hero = {
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

function displayStats(currentHero){
    const showHero = document.getElementById('showHero');
    const h4Name = document.createElement('h4');
    h4Name.innerHTML =`Hero name: ${currentHero.name}`;
    showHero.appendChild(h4Name);
    const h4Health = document.createElement('h4');
    h4Health.innerHTML = `Health: ${currentHero.health}`;
    showHero.appendChild(h4Health);
    const h4WeaponType = document.createElement('h4');
    h4WeaponType.innerHTML = `Weapon type: ${currentHero.weapon.type}`;
    showHero.appendChild(h4WeaponType);
    const h4Damage = document.createElement('h4');
    h4Damage.innerHTML = `Weapon damage: ${currentHero.weapon.damage}`;
    showHero.appendChild(h4Damage);
}
displayStats(hero);


function changeName(currentHero){
    const newName = document.getElementById('newName');
    currentHero.name = newName.value;
    const showHero = document.getElementById('showHero');
    showHero.innerHTML = null;
    displayStats(hero);
    newName.value=null;

}




