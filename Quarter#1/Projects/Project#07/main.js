import inq from 'inquirer';
let enemies = ['Skeleton', 'Zombie', 'Warrior', 'Assassin'];
let maxEnemyHealth = 75;
let enemyAttackDamage = 25;
let health = 100;
let attackDamage = 50;
let numHealthPotions = 3;
let healthPotionHealAmount = 30;
let healthPotionDropChance = 10;
let running = true;
console.log('Welcome to the Dungeon!');
GAME: while (running) {
    console.log('----------------------------------------');
    let enemyHealth = Math.trunc(Math.random() * maxEnemyHealth);
    let enemy = enemies[Math.trunc(Math.random() * enemies.length)];
    console.log('\t# ' + enemy + ' has appeared! #\n');
    while (enemyHealth > 0) {
        console.log('\tYour HP: ' + health);
        console.log('\t' + enemy + '\'s HP: ' + enemyHealth);
        let choice = await inq.prompt([
            {
                name: 'val',
                message: '\n\tWhat would you like to do?',
                type: 'rawlist',
                choices: [
                    { name: '\t1. Attack', value: 1 },
                    { name: '\t2. Drink health potion', value: 2 },
                    { name: '\t3. Run!', value: 3 }
                ]
            }
        ]);
        if (choice.val === 1) {
            let damageDealt = Math.trunc(Math.random() * attackDamage);
            let damageTaken = Math.trunc(Math.random() * enemyAttackDamage);
            enemyHealth -= damageDealt;
            health -= damageTaken;
            console.log('\t> You strike the ' + enemy + ' for ' + damageDealt + ' damage!');
            console.log('\t> You recieve ' + damageTaken + ' in retaliation!');
            if (health < 1) {
                console.log('\t> You have taken too much damage, you are too weak to go on!');
                break;
            }
        }
        else if (choice.val === 2) {
            if (numHealthPotions > 0) {
                health += healthPotionHealAmount;
                numHealthPotions--;
                console.log('\t> You drink health potion, healing yourself for ' + healthPotionHealAmount + '.\n\t> You now have ' + health + ' HP.\n\t> You have ' + numHealthPotions + ' health potions left!\n');
            }
            else {
                console.log('\t> You have no health potions left! Deafeat enemies for a chance to get one!');
            }
        }
        else if (choice.val === 3) {
            console.log('\tYou run away from the ' + enemy + '!');
            continue GAME;
        }
    }
    if (health < 1) {
        console.log('You limp out of the dungeon, weak from battle.');
        break;
    }
    console.log('----------------------------------------');
    console.log(' # ' + enemy + ' was defeated! # ');
    console.log(' # You have ' + health + ' HP left. # ');
    if (Math.trunc(Math.random()) * 100 < healthPotionDropChance) {
        numHealthPotions++;
        console.log(' # The ' + enemy + ' dropped a health potion! # ');
        console.log(' # You now have ' + numHealthPotions + ' health potions. # ');
    }
    console.log('----------------------------------------');
    let choice = await inq.prompt([
        {
            name: 'val',
            message: '\n\tWhat would you like to do now?',
            type: 'rawlist',
            choices: [
                { name: '\t1. Continue Fighting', value: 1 },
                { name: '\t2. Exit Dungeon', value: 2 },
            ]
        }
    ]);
    if (choice.value === 1) {
        console.log('You continue your adventure!');
    }
    else if (choice.val === 2) {
        console.log('You exit the dungeon, successful from your adventures!');
        break;
    }
    console.log('#######################');
    console.log('# THANKS FOR PLAYING! #');
    console.log('#######################');
}
