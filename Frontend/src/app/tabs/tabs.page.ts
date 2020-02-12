import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-tabs',
  templateUrl: 'tabs.page.html',
  styleUrls: ['tabs.page.scss']
})
export class TabsPage implements OnInit {

  user: any;

  constructor(public auth: AuthService) {}

  doLogout(){
    this.auth.logout(this.user.token).subscribe(res=>{
      console.log(res);
      if(res) return;
      this.user = null;
      localStorage.clear();
      location.reload();
    });
  }


  ngOnInit(){
    this.user = JSON.parse(localStorage.getItem('userData'));
    if(this.user) this.user.token = localStorage.getItem("userToken");
  }
}
