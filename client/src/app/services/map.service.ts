import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { MapTokenResponse } from '../models/map-token';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class MapService {

  //my url
  //private tokenUrl = '/api/security/oauth/token?grant_type=client_credentials&client_id=33OkryzDZsKCjE17RvomtI4CIqg2MaZRXNIBQOUqU_Q5FXGSvyJ7S42dj1Tcl4cN65A-qAJAsfxZF19BWs9Ej9OoSmXzsUWDTvALy-eVjNoBDBZjlASXRw==&client_secret=lrFxI-iSEg_91QqVGq0s15IjjX6zGi5AW_9isfaT40bxUaOE2niJRtYFUKo2YJqoRI-yvuRONCgDDvMZ44TUTaIKwKme3QwMIamEt6QVGMRJYYIte-DvH5qjcs-jnm8i';

  //virendra
  private tokenUrl = '/api/security/oauth/token?grant_type=client_credentials&client_id=K9FcE7rTjKaqju2XuWlLrzxXYspxv4s-A9hdogM0WDmcUVwsFo0wBA==&client_secret=Lnb4Nczh7cGDCx-MmiftR99nD8YZcpUeMLGlwmXgt0PW0P_jU7UJQhVRmghgP-Rk';

  private addressUrl = '/api/places/geocode?itemCount=5&address=';

  private tokenResponse: MapTokenResponse;

  constructor(private http: HttpClient) { }
  
  generateToken(){
    console.log("2. token generating....")
    this.http.post(this.tokenUrl, {}).subscribe(tokenData=>{
      this.tokenResponse = <MapTokenResponse>tokenData;
      console.log({tokenResponse: this.tokenResponse})
    })
  }

  getAddresses(address: String){
    //console.log(`Searching Addresses for ${address}`);
    return this.http.get(this.addressUrl+address, {
      headers: {
        "Authorization" : this.tokenResponse.token_type + " " + this.tokenResponse.access_token
      }
    }).pipe(
       map((results: any)=> results.copResults)
     );
  }
  
}
