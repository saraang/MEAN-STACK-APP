import { Component, OnInit } from '@angular/core';
import { User } from '../../models/user';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  user: User = new User();

  constructor() { }

  ngOnInit() {
  }

  register(){
    console.log('Register');
    console.log(this.user);
  }

  onAddressType(value){
    console.log(value);
    
  }

}
