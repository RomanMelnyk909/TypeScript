// let num: number = 10;
// let str: string = 'aple';
// console.log(num, typeof(num));
// console.log(str, typeof(str));
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
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
var Driver = /** @class */ (function () {
    function Driver(name, age, skills, license) {
        this.name = name;
        this.age = age;
        this.skills = skills;
        this.license = license;
        Driver.counter++;
    }
    Driver.prototype.getName = function () {
        return this.name;
    };
    Driver.prototype.setName = function (value) {
        if (this.name === value) {
            console.log("The same name");
        }
        else {
            this.name = value;
        }
    };
    Driver.prototype.getAge = function () {
        return this.age;
    };
    Driver.prototype.setAge = function (value) {
        if (this.age === value) {
            console.log("The same name");
        }
        else {
            this.age = value;
        }
    };
    Driver.prototype.showSkills = function () {
        this.skills.forEach(function (skill) {
            console.log(skill);
        });
    };
    Driver.counter = 0;
    return Driver;
}());
var TruckDriver = /** @class */ (function (_super) {
    __extends(TruckDriver, _super);
    function TruckDriver(name, age, skills, license, category, permit) {
        var _this = _super.call(this, name, age, skills, license) || this;
        _this.category = category;
        _this.permit = permit;
        return _this;
    }
    TruckDriver.prototype.showLicense = function () {
        console.log("Name : " + this.name + "\n ");
        this.showSkills();
    };
    return TruckDriver;
}(Driver));
var tomDriver = new TruckDriver("Tom Jones", 34, ["ww", "ee"], true, ["B"], true);
var billDriver2 = new TruckDriver("Bill Jones", 34, ["ww", "ee"], true, ["B"], true);
console.log(tomDriver.getName());
tomDriver.showLicense();
billDriver2.showLicense();
console.log("Driver count = ", Driver.counter);
