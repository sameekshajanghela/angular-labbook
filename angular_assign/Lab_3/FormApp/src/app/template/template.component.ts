import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-template',
  templateUrl: './template.component.html',
  styleUrls: ['./template.component.css']
})
export class TemplateComponent implements OnInit {

  constructor() { }

  username="";
  productCategory = ['Grocery','Mobile','Electronics','Cloths'];

  ngOnInit(): void {
  }


  register(myform){   
    console.log("myform="+myform.value.username);
    this.username=myform.value.username;
  }

}
