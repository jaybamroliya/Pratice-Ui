import { Component ,Input} from '@angular/core';

@Component({
  selector: 'app-user-deatails',
  templateUrl: './user-deatails.component.html',
  styleUrls: ['./user-deatails.component.css']
})
export class UserDeatailsComponent {

  constructor() {}

  @Input() item:{name:string, email:string}={name:'',email:''}

}
