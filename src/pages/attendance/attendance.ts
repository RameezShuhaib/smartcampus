import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { LoginProvider } from '../../providers/login/login';

@Component({
  selector: 'page-attendance',
  templateUrl: 'attendance.html'
})
export class AttendancePage {
  attendence: any[];
  attandanceChoice:any;
  constructor(public navCtrl: NavController,public loginProvider:LoginProvider) {
  
  }

  ionViewWillEnter() {
    this.loginProvider.getAttendance(this.loginProvider.sem).subscribe((data)=> {
      this.attendence =  this.loginProvider.getArr(data);
    });
  }

  getSemester() {
    let sem = this.attandanceChoice;
    this.loginProvider.getAttendance(sem).subscribe((data)=> {
      this.attendence = this.loginProvider.getArr(data);
    });
  }
  
}
