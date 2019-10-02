import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { IProfile } from '../model/profile.model';
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class PostdataService {


  constructor(private _http: HttpClient) { }
  public edit(profile: IProfile , id: number): Observable<IProfile> {
    const headers = new HttpHeaders({'content-Type': 'application/json'});

    return this._http.put<IProfile>(`http://localhost:3000/users/${id}`, profile , { headers  })
  .pipe ( tap(data => data ));
}
}
