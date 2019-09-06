let viewInstance = new Vue({
    el : "#vue_container",
    data : {
        title : "Monster Madness",
        bGameInProgress : false,
        yourHealth : 100,
        monsterHealth : 100,
        logs : [{
            won : 'you',
            move : 'attack',
            stepStatus : 'You Attacked. Monster Damage - 12. Your Damage - 10.'
        },
        {
            won : 'monster',
            move : 'heal',
            stepStatus : 'You Healed. Monster Damage - 0. Your Damage - 10.'
        }]
    },
    methods :{
        start_game : function(){
            this.bGameInProgress = true;
            this.yourHealth = 100;
            this.monsterHealth = 100;
            this.logs = [];
        }, 
        end_game : function(){
            this.bGameInProgress = false;
            this.logs = [];
            if(this.yourHealth > this.monsterHealth){
                this.logs.push({
                    won : 'you',
                    stepStatus : 'You Won !!'
                });
            }else{
                this.logs.push({
                    won : 'monster',
                    stepStatus : 'Monster Won :\'( '
                });
            }

        }, 
        attack : function(){
            let yourAttackPower = Math.random()*10;
            let monsterAttackPower = Math.random()*10;
            this.yourHealth = Math.floor(this.yourHealth - monsterAttackPower);
            this.monsterHealth = Math.floor(this.monsterHealth - yourAttackPower);
            if(this.yourHealth <= 0){
                this.bGameInProgress = false;
                this.logs.push({
                    won : 'monster',
                    stepStatus : 'Monster Won :\'( '
                });
            }

            if(this.monsterHealth <= 0){
                this.bGameInProgress = false;
                this.logs.push({
                    won : 'you',
                    stepStatus : 'You  Won :-D !!!'
                });
            }

        }, 
        heal : function(){
            let yourHealPower = Math.random()*10;
            let monsterAttackPower = Math.random()*10;
            this.yourHealth = Math.floor(this.yourHealth - monsterAttackPower + yourHealPower);
            if(this.yourHealth <= 0){
                this.bGameInProgress = false;
                this.logs.push({
                    won : 'monster',
                    stepStatus : 'Monster Won :\'( '
                });
            }

            if(this.monsterHealth <= 0){
                this.bGameInProgress = false;
                this.logs.push({
                    won : 'you',
                    stepStatus : 'You  Won :-D !!!'
                });
            }


        }, 
        special_attack : function(){
            let yourAttackPower = Math.random()*20;
            let monsterAttackPower = Math.random()*20;
            this.yourHealth = Math.floor(this.yourHealth - monsterAttackPower);
            this.monsterHealth = Math.floor(this.monsterHealth - yourAttackPower);
            if(this.yourHealth <= 0){
                this.bGameInProgress = false;
                this.logs.push({
                    won : 'monster',
                    stepStatus : 'Monster Won :\'( '
                });
            }

            if(this.monsterHealth <= 0){
                this.bGameInProgress = false;
                this.logs.push({
                    won : 'you',
                    stepStatus : 'You  Won :-D !!!'
                });
            }


        }
    }
})