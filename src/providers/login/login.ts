import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class LoginProvider {
  url:String;
  usn:String;
  sem:number;
  constructor(public http: Http) {
    console.log('Hello LoginProvider Provider');
    this.url = '172.18.0.3'
  }

  getProfile(){
    return this.http.get(`http://${this.url}:3000/getProfile?usn=${this.usn}`)
    .map(res => res.json())
  }

  getLogin(parm:any) {
    // console.log(parm);
    return this.http.post(`http://${this.url}:3000/login`, parm)
    .map(res => res.json());
  }

  getAttendance(sem:number) {
    return this.http.get(`http://${this.url}:3000/getAttendence?sem=${sem}&usn=${this.usn}`)
    .map(res => res.json());
  }

  getMarks(exam:number) {
    return this.http.get(`http://${this.url}:3000/getMarks?sem=${this.sem}&usn=${this.usn}&exam=${exam}`)
    .map(res => res.json());
  }

  getArr(data:any){
    let arr = []
    for(let i in data){
      let val = [];
      for(let j in data[i]){
        val.push(data[i][j]);
      }
      arr.push(val);
    }
    return arr;
  }


  setUsn(usn:String) {
    this.usn = usn;
  }

  setSem(sem:number) {
    this.sem = sem;
  }
}

// interface Details{
//   Success,
//   University_Seat,
//   branch,
//   brnch,
//   course,
//   crs,
//   cycle,
//   division,
//   have_cycles,
//   semester,
//   sid,
//   stdname
// }

// Success : true,
// University_Seat : "4NM12ME003",
// branch : 6,
// brnch : "MECHANICAL ENGINEERING"
// course : 28
// crs : "B.E."
// cycle : ""
// division : ""
// have_cycles :1
// semester : "9"
// sid : 1
// stdname : "ABHISHEK K S  "