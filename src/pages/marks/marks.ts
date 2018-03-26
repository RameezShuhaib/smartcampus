import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { LoginProvider } from '../../providers/login/login';

@Component({
  selector: 'page-marks',
  templateUrl: 'marks.html'
})
export class MarksPage {
  exam:number;
  marks:any[];
  constructor(public navCtrl: NavController, public loginProvider:LoginProvider) {
  
  }  

  getMarks(){
    this.loginProvider.getMarks(this.exam).subscribe((data)=>{
      this.marks = this.loginProvider.getArr(data);
      console.log(this.marks);
    });
  }

  ionViewWillEnter(){
    
  }
}
