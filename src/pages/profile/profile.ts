import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import 'rxjs/add/operator/map';
import { LoginProvider } from '../../providers/login/login';

@Component({
  selector: 'page-profile',
  templateUrl: 'profile.html'
})

export class ProfilePage{
  // this tells the tabs component which Pages
  // should be each tab's root Page

  profile: any[];
  name: String;
  usn: String;
  // branch: String;
  constructor(public navCtrl: NavController, private loginProvider:LoginProvider) {

  }


  ionViewWillEnter() {
    
    this.loginProvider.getProfile().subscribe((data) => {
      this.name = data[0]['stdname']
      this.usn = data[0]['University_Seat']
      // this.branch = data[]
      this.profile = [
        ['Semester', data[0]["semester"]],
        ['Batch', data[0]["Batch"]],
        ['Date of Birth', data[0]["DOB"]],
        ['Age', data[0]["age"]],
        ['Sex', data[0]["Sex"]],
        ['Father\'s name', data[0]["Father_name"]],
        ['Mother\'s name', data[0]["mother_name"]],
        ['Mother Tongue', data[0]["Mother_Tongue"]],
        ['Blood Group', data[0]["Blood"]],
        ['Nationality', data[0]["Nationality"]],
        ['State', data[0]["State"]],
        ['City', data[0]["city"]],
        ['Mobile no.', data[0]["mobile1"]],
      ];
      // for(let i in data[0]){
      //   if(data[0][i]!='')
      //     this.profile.push([i, data[0][i]]);
      // }
        console.log(this.profile);
    });
  }
  
}