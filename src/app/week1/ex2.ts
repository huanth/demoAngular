interface Person {
    name: string;
    age: number;
    email: string;
}

const person : Person = {
    name: 'Huan',
    age: 25,
    email: 'huan.huy.truong@gmail.com'
}

const printPerson = (person: Person): void => {
    console.log(
        `Name: ${person.name}\nAge: ${person.age}\nEmail: ${person.email}`
    );
}

printPerson(person);