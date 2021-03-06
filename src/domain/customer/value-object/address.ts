export default class Address {
    private _street: string;
    private _number: number;
    private _zip: string;
    private _city: string;

    constructor(street: string, number: number, zip: string, city: string) {
        this._street = street;
        this._number = number;
        this._zip = zip;
        this._city = city;

        this.validate();
    }


    get street(): string {
        return this._street;
    }

    get number(): number {
        return this._number;
    }

    get zip(): string {
        return this._zip;
    }

    get city(): string {
        return this._city;
    }

    validate() {
        if (this._street.length === 0) throw new Error("Invalid Street");
        if (this._zip.length === 0) throw new Error("Invalid Zip code");
        if (this._city.length === 0) throw new Error("Invalid City");
        if (this._number < 0) throw new Error("Invalid Number");
    }

    toString() {
        return `${this._street}, ${this._number}, ${this._city} - ${this._zip}`;
    }
}