import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-person-search',
  templateUrl: './person-search.component.html',
  styleUrls: ['./person-search.component.css']
})
export class PersonSearchComponent {
  
  persons = [
    {name: 'Gandalf Gray', city: 'Middle-Earth', suburb: 'Mordor', active: true },
    {name: 'Frodo Baggins', city: 'Middle-Earth', suburb: 'Shire', active: false },
    {name: 'Bilbo Baggins', city: 'Middle-Earth', suburb: 'Shire', active: true },
  ];

}
