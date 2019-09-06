let viewInstance = new Vue({
    el: "#vue_container",
    data: {
        title: "Monster Madness",
        bGameInProgress: false,
        yourHealth: 100,
        monsterHealth: 100,
        logs: []
    },
    methods: {
        start_game: function () {
            this.bGameInProgress = true;
            this.yourHealth = 100;
            this.monsterHealth = 100;
            this.logs = [];
        },
        end_game: function () {
            this.bGameInProgress = false;
            this.logs = [];
            if (this.yourHealth > this.monsterHealth) {
                this.logs.push({
                    won: 'you',
                    stepStatus: 'You Won !!'
                });
            } else {
                this.logs.push({
                    won: 'monster',
                    stepStatus: 'Monster Won :\'( '
                });
            }

        },
        attack: function () {
            let yourAttackPower =  Math.floor(Math.random() * 10);
            let monsterAttackPower =  Math.floor(Math.random() * 10);
            this.yourHealth = Math.floor(this.yourHealth - monsterAttackPower);
            this.monsterHealth = Math.floor(this.monsterHealth - yourAttackPower);
            this.logs.push({
                won: yourAttackPower > monsterAttackPower ? 'you' : 'monster',
                stepStatus: 'You Attacked !!' + 'Your Attack Power : ' + yourAttackPower + '. Monster Attack Power : ' + monsterAttackPower + "."
            });

            if (this.yourHealth <= 0) {
                this.bGameInProgress = false;
                this.logs.push({
                    won: 'monster',
                    stepStatus: 'Monster Won :\'( '
                });
            }
            if (this.monsterHealth <= 0) {
                this.bGameInProgress = false;
                this.logs.push({
                    won: 'you',
                    stepStatus: 'You  Won :-D !!!'
                });
            }

        },
        heal: function () {
            let yourHealPower = Math.floor(Math.random() * 10);
            let monsterAttackPower =  Math.floor(Math.random() * 10);
            this.yourHealth = Math.floor(this.yourHealth - monsterAttackPower + yourHealPower);
            this.logs.push({
                won: yourHealPower > monsterAttackPower ? 'you' : 'monster',
                stepStatus: 'You healed :) ' + 'Your Heal Power : ' + yourHealPower + '. Monster Attack Power : ' + monsterAttackPower + "."
            });
            if (this.yourHealth <= 0) {
                this.bGameInProgress = false;
                this.logs.push({
                    won: 'monster',
                    stepStatus: 'Monster Won :\'( '
                });
            }
            if (this.monsterHealth <= 0) {
                this.bGameInProgress = false;
                this.logs.push({
                    won: 'you',
                    stepStatus: 'You  Won :-D !!!'
                });
            }
        },
        special_attack: function () {
            let yourAttackPower = Math.random() * 20;
            let monsterAttackPower = Math.random() * 20;
            this.yourHealth = Math.floor(this.yourHealth - monsterAttackPower);
            this.monsterHealth = Math.floor(this.monsterHealth - yourAttackPower);
            if (this.yourHealth <= 0) {
                this.bGameInProgress = false;
                this.logs.push({
                    won: 'monster',
                    stepStatus: 'Monster Won :\'( '
                });
            }
            if (this.monsterHealth <= 0) {
                this.bGameInProgress = false;
                this.logs.push({
                    won: 'you',
                    stepStatus: 'You  Won :-D !!!'
                });
            }
        }
    }
})