import { Component, OnInit } from '@angular/core';
import { User } from '../../models/user';
import { MapService } from '../../services/map.service';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  user: User = new User();
  addresses: any;
  selectedAddress: any = {};

  constructor(private mapService: MapService, private authService: AuthService) { }

  ngOnInit() {
    console.log("1. On init of register component")
    this.mapService.generateToken();
  }

  register(){
    console.log('Register');
    console.log(this.user);
    this.authService.registerUser(this.user).subscribe((response: any)=>{
        console.log({"User created": response.user});
        this.user = new User();
        this.selectedAddress = {};
        alert('User created....');
      }
    )
  }

  onAddressType(){
    const address = this.selectedAddress.formattedAddress;
    console.log(address);
    //search address from map api
    this.mapService.getAddresses(address).subscribe(addressResponse=>{
      //console.log({addressResponse});
      this.addresses = addressResponse;
    })
  }

  onSelectedAddress(address){
    this.selectedAddress= address;
    this.user.address = address;
    console.log({selectedAddress: address});
    this.addresses = [];
  }

}
