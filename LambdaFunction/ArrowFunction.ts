const _name :string = 'Bhanu Kiran';
let age :number = 22;
const hasHobbies:boolean = true;
let userName:string="bhanu";
console.log(userName);

age = 30;

const summarizeUser = (_userName:string, _userAge:number, _userHasHobby:boolean) => (
    'Name is ' +
    _userName +
    ', age is ' +
    _userAge +
    ' and the user has hobbies: ' +
    _userHasHobby
);

const add = (a:number, b:number) =>(a + b);
const addOne = (a:number) => a + 1;
const addRandom = () => 1 + 2;

console.log(add(1, 2));
console.log(addOne(1));
console.log(addRandom());

console.log(summarizeUser(_name, age, hasHobbies));