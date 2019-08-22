const menu = {
  _courses:{
    appetizers: [],
    mains: [],
    desserts: [],
  },
  get appetizers (){
    return this._courses.appetizers;
  },
  set appetizers (appetizers){
    this._courses.appetizers = appetizers;
  },
  get mains(){
    return this._courses.mains;    
  },
  set mains(mains){
   this._courses.mains = mains;
  },
  get desserts(){
    return this._courses.desserts
  },
  set desserts(desserts){
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
  const Index = Math.floor(Math.random()* dishes.length);
  return dishes[Index];
},
generateRandomMeal() {
  const appetizer= this.getRandomDishFromCourse('appetizers');
  const main = this.getRandomDishFromCourse('mains');
  const dessert = this.getRandomDishFromCourse('desserts');
  const totalPrice = appetizer.price + main.price + dessert.price;
  
  return `Your meal is ${appetizer.name}, ${main.name}, ${dessert.name} and the price is ${totalPrice}`;
}
};
menu.addDishToCourse('appetizers', 'burger', 5);
menu.addDishToCourse('mains', 'naan', 3);
menu.addDishToCourse('mains', 'chicken butter masala', 12);
menu.addDishToCourse('desserts', 'gulab jamun', 4.25);
menu.addDishToCourse('appetizers','dosa', 8);
menu.addDishToCourse('desserts', 'rasmalai', 5);
const meal = menu.generateRandomMeal();
console.log(meal);
