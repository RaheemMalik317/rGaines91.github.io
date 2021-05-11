class Cupcake {
    constructor(batter, icing, cost) {
        this.b= batter;
        this.i = icing;
        this.c = cost;
    }

    getDescription(){
        return `A $${this.c} ${this.b} cupcake with ${this.i} on top!`;
    }
}

class CupcakeShop {

    constructor(location) {
        this.location = location;
        this.inventory = []; // default value, always will have an empty array
        this.cash = 0 // default value
    }


    getStatus(){
        return `The shop has $${this.c} and ${this.inventory.length} cupcakes!`;
    }

    addToInventory(cupcake){
        this.inventory.push(cupcake);
    }

    bakeBatch(numofCupcakes, batter, icing, pricePer){
        for(let i = 0; i < numofCupcakes; i++){
            let newCupcake = new Cupcake(batter, icing, pricePer);
            this.addToInventory(newCupcake);
        }

    }

    sellCupcake() {
        if(this.inventory.length > 0) {
            let toSell = this.inventory.pop();
            this.cash = this.cash + toSell.cost;
    } else {
        return 'No cupcakes to sell!'
     }


}; 
// These default value will be the same for each new instance of this class


let cakeBakeShop = new CupcakeShop('Fishers');
console.log(cakeBakeShop.getStatus());

cakeBakeShop.bakeBatch(13, 'Chocolate HazleNut', 'Whipped', 2);
console.log(cakeBakeShop.getStatus());

cakeBakeShop.sellCupcake();
console.log(cakeBakeShop.getStatus());