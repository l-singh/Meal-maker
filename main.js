const menu = {
  _courses: {
    appetizers: [],
    mains: [],
    desserts: [],
  },
  get appetizers(){
    return this._courses.appetizers;
  },
   get mains(){
    return this._courses.mains;
  },
   get dessertss(){
    return this._courses.desserts;
  },
  set appetizers(appetizers){
    this._courses.appetizers = appetizers;
  },
  set appetizers(mains){
    this._courses.mains = mains;
  },
  set appetizers(appetizers){
    this._courses.desserts = desserts;
  },
  get courses(){
    return {
      appetizers: this.appetizers,
      mains: this.mains,
      desserts: this.desserts,
    };
  },
  addDishToCourse(courseName, dishName, dishPrice){
    const dish = {
      name: dishName,
      price: dishPrice,
    };
     return this._courses[courseName].push(dish);
  },
  getRandomDishFromCourse(courseName){
    const dishes = this._courses[courseName];
    const randomIndex = Math.floor(Math.random()* dishes.length);
    return dishes[randomIndex];
  },
  generateRandomMeal(){
    const appetizer = this.getRandomDishFromCourse('appetizers');
    const main = this.getRandomDishFromCourse('mains');
    const dessert = this.getRandomDishFromCourse('desserts');
    const totalPrice = appetizer.price + main.price + dessert.price;
    return ` your meal is ${appetizer.name}, ${main.name}, ${dessert.name} and total price is ${totalPrice}. `
  }
};
menu.addDishToCourse('appetizers', 'salad', 3.00);
menu.addDishToCourse('appetizers', 'soup', 3.00);
menu.addDishToCourse('appetizers', 'fries', 3.00);

menu.addDishToCourse('mains', 'Burger', 13.00);
menu.addDishToCourse('mains', 'sandwich', 13.00);
menu.addDishToCourse('mains', 'wing', 13.00);


menu.addDishToCourse('desserts', 'icecream', 3.00);
menu.addDishToCourse('desserts', 'rasgulla', 3.00);
menu.addDishToCourse('desserts', 'blueberry pie', 4.00);
const meal = menu.generateRandomMeal();
console.log(meal);
