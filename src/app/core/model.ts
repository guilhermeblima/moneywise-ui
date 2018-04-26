export class Address{
    number:string;
    street:string;
    zipCode:string;
    suburb:string;
    city:string;
}

export class Person{
    id: number;
    name: string;
    active = true;
    address = new Address();
}

export class Category{
    id: number;
    value: string;
}

export class Transaction{
    id: number
    title: string;
    date: Date;
    paymentDue: Date;
    total: number;
    description: String;
    type = 'DEPOSIT';
    person = new Person();
    category = new Category();
}