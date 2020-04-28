class altp {
    constructor() {
        this.ui = new ui();
        this.ui.showScreen('welcome');
        this.ui.onStartBtnClick(() => {
            this.start();
        })
    }
    start() {
        this.ui.showScreen('welcomeScreen');
    }
}

let game = new altp();