import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

weight ? : number;
hight ? : number;

resut ? : number;
result_text ? : string ="";




constructor() {}


oncal(){
  console.log("w :" + this.weight)
  console.log("h :" + this.hight)
}

}
