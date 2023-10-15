// Changing a dynamic object without affecting on whole class

class Patrol {
    cost() {
        return 5;
    }
}

class Decorator {
    constructor(gas) {
        this.gas = gas;
    }

    cost() {
        return this.gas.cost() + 2;
    }
}

// Usage
const patrol = new Patrol();
console.log(`Gas - ${patrol.cost()}`);

const patrol95 = new Decorator(patrol);
console.log(`Gas 95 - ${patrol95.cost()}`);
