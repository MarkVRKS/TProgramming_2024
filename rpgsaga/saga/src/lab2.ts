export class Cat {
    name: string;
    age: number;
    breed: string;
  
    constructor(catName: string, catAge: number, catBreed: string) {
      this.name = catName;
      this.age = catAge;
      this.breed = catBreed;
    }
  
    get getName(): string {
      return this.name;
    }
  
    set setName(valueName: string) {
      this.name = valueName;
    }
  
    get getAge(): number {
      return this.age;
    }
  
    set setAge(valueAge: number) {
      if (valueAge < 0 || valueAge > 16) {
        console.error("Cats don't live that long!");
      } else {
        this.age = valueAge;
      }
    }
  
    get getBreed(): string {
      return this.breed;
    }
  
    set setBreed(valueBreed: string) {
      this.breed = valueBreed;
    }
  
    get getInfo(): string {
      return `Cat's name: ${this.name}, cat's age: ${this.age}, cat's breed: ${this.breed}`;
    }
  
    changeCatName(newName: string): void {
      this.name = newName;
    }
  
    whereFrom(): string {
      if (this.name === 'Marsik') {
        return "Russia";
      }
      if (this.name === "Kompot") {
        return "Belarus";
      } else {
        return "Ooops... I don't know(";
      }
    }
  }
