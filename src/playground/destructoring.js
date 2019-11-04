const person = {
    name: 'Joyion',
    age: '27', 
    location: {
        city: 'Philadelphia',
        temp: 92
    }
};

const {name, age} = person;
console.log(`${name}`);

const {city, temp} = person.location;

if (city && temp) {
    console.log(`It's a ${temp} in ${city}`);
}

const address = ['123 S Smoke', 'Paris', 'France', '200']

const [, mycity, state] = address;

console.log(`You are in ${mycity}, ${state}`);