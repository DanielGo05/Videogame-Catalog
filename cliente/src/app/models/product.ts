export class Product{
    _id?: number;
    name: string;
    category: string;
    developer: string;
    console: string
    price: number;

    constructor(name: string, category: string, developer: string, console: string, price: number){
        this.name = name;
        this.category = category;
        this.developer = developer;
        this.console = console;
        this.price = price;
    }
}