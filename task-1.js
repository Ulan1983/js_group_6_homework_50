class Product {
	constructor(title, calories) {
		this.title = title;
		this.calories = calories;
		this.caloriesFor100Gramm = calories / 100;
	}
}

class Dish {
	constructor(title, products) {
		this.title = title;
		this.calories = 0;
		this.products = [];
	}

	addProduct(title, weight) {
		this.products.push([title, weight]);
		this.calories += weight * title.caloriesFor100Gramm;
	}

	getCaloriesOfDishes() {
		return this.calories;
	}
}

class Calculator {
	constructor() {
		this.dishes = [];
	}

	addDish(dish) {
		this.dishes.push(dish);
	}

	getTotalCalories() {
		let totalCalories = 0;
		for (let dish of this.dishes) {
			for (let product of dish.products) {
				totalCalories += product[0].calories * product[1] / 100;
			}
		}
		return totalCalories;
	}

	getDishesInfo() {
		for (let dish of this.dishes) {
			let dishCalories = 0;
			let products = [];
			for (let product of dish.products) {
				dishCalories += product[0].calories * product[1] / 100;
				products.push(`${product[0].title}, ${product[1]} грамм, ${product[0].calories * product[1] / 100} калорий`);
			}
			console.log(`================== \n${dish.title} - 1 порция, ${dishCalories} калорий:`);
			for (let product of products) {
				console.log(`* ${product}`);
			}
			console.log('==================');
		}
	}
}

const meat = new Product('Филе говядина', 158);
const rice = new Product('Рис', 130);
const onion = new Product('Лук', 40);
const carrot = new Product('Морковь', 41);


const plov = new Dish('Плов');
plov.addProduct(meat, 100);
plov.addProduct(rice, 150);
plov.addProduct(onion, 25);
plov.addProduct(carrot, 25);


const calculator = new Calculator();
calculator.addDish(plov);
const calories = calculator.getTotalCalories(); 
console.log(calories); 


const totals = calculator.getDishesInfo();
console.log(totals); 