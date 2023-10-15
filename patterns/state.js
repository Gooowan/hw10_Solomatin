class StateA {
    handle(context) {
        console.log('State A handling');
        context.state = new StateB();
    }
}

class StateB {
    handle(context) {
        console.log('State B handling');
        context.state = new StateA();
    }
}

class Context {
    constructor(state) {
        this.state = state;
    }
    request() {
        this.state.handle(this);
    }
}

const context = new Context(new StateA());
context.request();
context.request();