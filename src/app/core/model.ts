export class Person{
    id: number;
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