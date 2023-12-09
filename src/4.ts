class Key {
    private readonly signature: number;

    constructor() {
        this.signature = Math.random();
    }

    getSignature(): number {
        return this.signature;
    }
}

class Person {
    private key: Key;

    constructor(key: Key) {
        this.key = key;
    }

    getKey(): Key {
        return this.key;
    }
}

abstract class House {
    protected door: boolean;
    protected key: Key;
    protected tenants: Person[];

    constructor(key: Key) {
        this.door = false;
        this.key = key;
        this.tenants = [];
    }

    abstract openDoor(key: Key): void;

    comeIn(person: Person): void {
        if (this.door && this.tenants.indexOf(person) === -1) {
            this.tenants.push(person);
            console.log('Person came into the house.');
        } else {
            console.log('The door is closed or the person is already in the house.');
        }
    }
}

class MyHouse extends House {
    constructor(key: Key) {
        super(key);
    }

    openDoor(key: Key): void {
        if (key.getSignature() === this.key.getSignature()) {
            this.door = true;
            console.log('The door is open.');
        } else {
            console.log('The door cannot be opened with this key.');
        }
    }
}

const key = new Key();
const house = new MyHouse(key);
const person = new Person(key);

house.openDoor(person.getKey());

house.comeIn(person);

export {};