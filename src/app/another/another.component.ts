import { NgClass } from '@angular/common';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-another',
  templateUrl: './another.component.html',
  styleUrls: ['./another.component.css']
})
export class AnotherComponent implements OnInit{
  ngOnInit() {
    alert('I am ngInit')
  }
  constructor()
  {
    alert('I am constructor')
  }
  
  name="Arpan";
  salary=22000;
  jd='7/01/23'

fruits=
[
  {
    name:'apple',
    price:22,
    stock:130
  },
  
   {
    name:'orange',
    price:22,
    stock:130
  },

   {
    name:'mango',
    price:22,
    stock:130
  },
];
}
