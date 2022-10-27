class MyArray {
    constructor() {
        this.length = 0;
    }

    push(...elements) {
        for (let i = 0; i < elements.length; i++) {
            this[this.length++] = elements[i];
        }
        return this.length;
    }

    pop() {
        if(this.length === 0) {
            return;
        } else {
            const delElem = this[this.length - 1];
            delete this.length--;
            return delElem;
        }
    }

    unshift(...elements) {
        for (let i = this.length + elements.length - 1; i > 0; i--) {
            this[i] = this[i - elements.length];
        }

        for (let i = 0; i < elements.length; i++) {
            this[i] = elements[i];
        }

        this.length += elements.length;
        return this.length;
    }

    shift() {
        const delElem = this[0];
        for (let i = 0; i < this.length; i++) {
            this[i] = this[i + 1];
        }
        delete this[--this.length];
            return delElem;
        }
    }

    const arr = new MyArray();
    arr.push(2, 45, 58, 6758, 565);