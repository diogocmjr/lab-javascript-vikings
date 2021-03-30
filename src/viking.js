// Soldier
class Soldier {
    constructor(health, strength) {
        this.health = health;
        this.strength = strength;
    }
    attack() {
        return this.strength;
    }
    receiveDamage(damage) {
        this.health -= damage;
    }
}

// Viking
class Viking extends Soldier {
    constructor(name, health, strength) {
        super(health, strength);
        this.name = name;
    }
    receiveDamage(damage) {
        super.receiveDamage(damage);
        if (this.health > 0) {
            return `${this.name} has received ${damage} points of damage`;
        }
        return `${this.name} has died in act of combat`;
    }
    battleCry() {
        return 'Odin Owns You All!';
    }
}

// Saxon
class Saxon extends Soldier {
    receiveDamage(damage) {
        super.receiveDamage(damage);
        if (this.health > 0) {
            return `A Saxon has received ${damage} points of damage`;
        }
        return `A Saxon has died in combat`;
    }
}

// War
class War {
    constructor() {
        this.vikingArmy = [];
        this.saxonArmy = [];
    }
    addViking(viking) {
        this.vikingArmy.push(viking);
    }
    addSaxon(saxon) {
        this.saxonArmy.push(saxon);
    }
    vikingAttack() {
        let randomViking = this.vikingArmy[Math.floor(Math.random() * this.vikingArmy.length)];
        let randomSaxon = this.saxonArmy[Math.floor(Math.random() * this.saxonArmy.length)];
        if (randomSaxon.health <= randomViking.strength) {
            this.saxonArmy.splice(this.saxonArmy.indexOf(randomSaxon), 1);
        }
            return randomSaxon.receiveDamage(randomViking.attack());
        }
    saxonAttack() {
        let randomViking = this.vikingArmy[Math.floor(Math.random() * this.vikingArmy.length)];
        let randomSaxon = this.saxonArmy[Math.floor(Math.random() * this.saxonArmy.length)];
        if (randomViking.health <= randomSaxon.strength) {
            this.vikingArmy.splice(this.vikingArmy.indexOf(randomViking), 1);
        }
            return randomViking.receiveDamage(randomSaxon.attack());
        }
        showStatus() {
            if (this.vikingArmy.length === 0) {
                return 'Saxons have fought for their lives and survived another day...'
            } else if (this.saxonArmy.length === 0) {
                return 'Vikings have won the war of the century!'
            } else {
                return 'Vikings and Saxons are still in the thick of battle.'
            }
        }
    }
    