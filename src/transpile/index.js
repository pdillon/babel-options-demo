const x = 1;
const y = 2;

const foo = {x,y};

export default class Bar {
    constructor() {
        this.bar = {...foo};
    }
}
