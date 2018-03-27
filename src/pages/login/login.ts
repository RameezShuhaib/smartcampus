import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { TabsControllerPage } from '../tabs-controller/tabs-controller';
import {ProfilePage} from '../profile/profile';
import { LoginProvider } from '../../providers/login/login';

@Component({
  selector: 'page-login',
  templateUrl: 'login.html'
})
export class LoginPage {
  usn:String;
  pass:String;

  constructor(public navCtrl: NavController,public loginProvider:LoginProvider) {
  }
  
  getLogin(params){

   if (!params) params = {};
    // this.navCtrl.push(TabsControllerPage);


    // this.usn = '4NM12BT009';
    // this.pass = '23/12/1994';
    // let parms = {'usn' : this.usn, 'pass' : this.pass};
    // console.log(parms);
    // this.loginProvider.getLogin(parms)
    // .subscribe((data) => {
    //     if(data.Success) {
    //       this.loginProvider.setUsn(data.University_Seat);
    //       this.loginProvider.setSem(data.semester);
          this.navCtrl.push(TabsControllerPage);
//         } else {
//           alert("Invalid USN or Password");
//         }
//     });
 }

}