import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

value1: number;
value2: number;

  constructor(public navCtrl: NavController) {
    
 this.value1 = 0;
 this.value2 = 0; 
  }
  onClick(x){
    switch(x) { 
      case '1': { 
       this.value1 +=1;
         break; 
      } 
      case "2": { 
        this.value1 +=2; 
         break; 
      } 
      case "3": {
        this.value1 +=3; 
         break;    
      } 
      case "4": { 
        this.value2 +=1; 
         break; 
      }  
      case "5": { 
        this.value2 +=2; 
        break; 
     } 
     case "6": { 
      this.value2 +=3; 
      break; 
      }
      case "reset": { 
        this.value1 = 0;
        this.value2 = 0;
        break;  
      }
   }
  }
 
}
