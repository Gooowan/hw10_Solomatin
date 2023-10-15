class RealObject {
    display() {
        return 'Displaying Real Image';
    }
}

class Proxy {
    constructor() {
        this.realObject = new RealObject();
    }

    display() {
        return 'Proxy: ' + this.realObject.display();
    }
}

const website = new Proxy();
console.log(website.display());