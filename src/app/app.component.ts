import { Component } from '@angular/core';  //import component class by @
                      //define our component
@Component({   //provides meta data, and decorate the data
  selector: 'app-root', //selector is used to where to display the template
  templateUrl: './app.component.html', //points this .html 
  styleUrls: ['./app.component.css'] //points this .css 
})
export class AppComponent {   //this is component class 
  title = 'newpractice';  //newpractice is project name when created first time

  countryList:country[] = [
    new country("1", "India"),
    new country('2', 'USA'),
    new country('3', 'England')
  ];

  onSubmit(contactForm:any) {
    console.log(contactForm.value);
  }
 

}
export class country{
  id:string;
  name:string;

  constructor(id:string,name:string){
    this.id=id;
    this.name=name;
  }
}





