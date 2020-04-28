class Sound{
    constructor(fileName) {
        this.fileName= fileName;
        this.audio= new Audio('sound/'+this.fileName);
    }
    start(){
        this.audio.play();
    }
}