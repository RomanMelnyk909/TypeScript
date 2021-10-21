// let num: number = 10;
// let str: string = 'aple';
// console.log(num, typeof(num));
// console.log(str, typeof(str));

// let arrNumbers: number[] = [1, 2, 3, 4, 5, 6];
// console.log(arrNumbers, typeof arrNumbers);
// arrNumbers.forEach((element) => {
//   console.log(element);
// });

// let arrString: [string, string, string, number, number, boolean] = [
//   "C++",
//   "JS",
//   "C#",
//   22,
//   44,
//   true,
// ];
// arrString.forEach((el) => console.log(el));

// type User = {
//   name: string;
//   age: number;
//   skills: string[];
//   showPerson: () => void;
// };

// let bill: User = {
//   name: "Bill",
//   age: 34,
//   skills: ["C++", "JS"],
//   showPerson() {
//     console.log(
//       `Name : ${this.name}\nAge: ${this.age}\nSkills: ${this.skills}`
//     );
//   },
// };

// let tom: User = {
//   name: "Tom",
//   age: 26,
//   skills: ["C++", "HTML"],
//   showPerson() {
//     console.log(
//       `Name : ${this.name}\nAge: ${this.age}\nSkills: ${this.skills}`
//     );
//   },
// };
// bill.showPerson();
// tom.showPerson();
//interface IUser {
//   name: string;
//   age: number;
//   skills: string[];
//   showPerson?(): void;
//   showSkills?(): void;
// }
// let adam: IUser = {
//   name: "Adam",
//   age: 23,
//   skills: ["C++", "HTML"],
//   showPerson() {
//     console.log(
//       `Name : ${this.name}\nAge: ${this.age}\nSkills: ${this.skills}`
//     );
//   },
// };

// adam.showPerson();

abstract class Driver {
  protected name: string;
  protected age: number;
  protected skills: string[];
  protected license: boolean;
  public static counter: number = 0;

  constructor(name: string, age: number, skills: string[], license: boolean) {
    this.name = name;
    this.age = age;
    this.skills = skills;
    this.license = license;
    Driver.counter++;
  }

  public getName(): string {
    return this.name;
  }
  public setName(value: string): void {
    if (this.name === value) {
      console.log("The same name");
    } else {
      this.name = value;
    }
  }

  public getAge(): number {
    return this.age;
  }
  public setAge(value: number): void {
    if (this.age === value) {
      console.log("The same name");
    } else {
      this.age = value;
    }
  }
  protected showSkills(): void {
    this.skills.forEach((skill) => {
      console.log(skill);
    });
  }
}

interface ILicense {
  category: string[];
  permit: boolean;
  showLicense(): void;
  showDriverInfo?(): void;
}

class TruckDriver extends Driver implements ILicense {
  category: string[];
  permit: boolean;

  constructor(
    name: string,
    age: number,
    skills: string[],
    license: boolean,
    category: string[],
    permit: boolean
  ) {
    super(name, age, skills, license);
    this.category = category;
    this.permit = permit;
  }

  public showLicense(): void {
    console.log(`Name : ${this.name}\n `);
    this.showSkills();
  }
}

let tomDriver = new TruckDriver(
  "Tom Jones",
  34,
  ["ww", "ee"],
  true,
  ["B"],
  true
);
let billDriver2 = new TruckDriver(
  "Bill Jones",
  34,
  ["ww", "ee"],
  true,
  ["B"],
  true
);

console.log(tomDriver.getName());
tomDriver.showLicense();
billDriver2.showLicense();
console.log("Driver count = ", Driver.counter);
