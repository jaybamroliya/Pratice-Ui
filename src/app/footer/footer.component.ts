import { Component } from '@angular/core';
import { UserDataService } from '../services/user-data.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent {

  users:any;

  constructor(private userData:UserDataService) {

    userData.users().subscribe((data =>{
      this.users=data
      console.warn("data",this.users);
      
    }))

  }
}
