import { Injectable } from '@angular/core';
import { IProfile } from '../model/profile.model';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { tap , catchError, map   } from 'rxjs/operators';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class CreateProfileService {


  constructor(private _http: HttpClient) { }
  public createProduct(profile: IProfile): Observable<IProfile> {
    const headers = new HttpHeaders({'content-Type': 'application/json'});
    console.log(profile);
   // tslint:disable-next-line: align
   return this._http.post<IProfile>
  (`http://localhost:3000/users`, profile , { headers  })
  .pipe ( tap(data => alert('create Product successfull' + JSON.stringify(data))));
}
}
