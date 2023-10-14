class Builder {
    setPartA(partA) {
        this.partA = partA;
    }
    setPartB(partB) {
        this.partB = partB;
    }
    getResult() {
        return `Kyiv linked with: ${this.partA}, ${this.partB}`;
    }
}

// Usage
const builder = new Builder();
builder.setPartA('Mist Metro');
builder.setPartB('Mist Patona');
console.log(builder.getResult());
