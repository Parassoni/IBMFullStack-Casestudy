import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IProfile} from '../model/profile.model';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {


  constructor(private http: HttpClient) { }
 public  getProfiles(): Observable<IProfile[]> {
  return this.http.get<IProfile[]>('http://localhost:3000/users');
       }
    //    public getprofile(username: number): Observable<IProfile> {
    // return this.http.get<IProfile>
    // (`http://localhost:3000/products/${username}`);
    //    }

}
