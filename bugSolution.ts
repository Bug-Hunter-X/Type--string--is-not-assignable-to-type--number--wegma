function greeter(person: string): string {
  return "Hello, " + person;
}

let user: string[] = ["Jane Doe", "30"];
console.log(greeter(user[0]));
//Alternative solution:
function greeterImproved(person: string | string[]): string {
  if (typeof person === 'string') {
    return "Hello, " + person;
  } else {
    return "Hello, " + person.join(',');
  }
}
let user2 = ["Jane Doe", "30"];
let user3 = "John Doe";
console.log(greeterImproved(user2));
console.log(greeterImproved(user3));