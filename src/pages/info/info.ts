import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { DevelopersPage } from '../developers/developers';
import { RulesPage } from '../rules/rules';


/**
 * Generated class for the InfoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-info',
  templateUrl: 'info.html',
})
export class InfoPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  
  getdev(params){

   if (!params) params = {};
    this.navCtrl.push(DevelopersPage);
  }
  getrules(params){

   if (!params) params = {};
    this.navCtrl.push(RulesPage);
  }
}
