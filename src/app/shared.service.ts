// import { Injectable } from '@angular/core';
// import { Subject } from 'rxjs/Subject';
// import { Subscription } from 'rxjs/Subscription';
import { IProfile } from './model/profile.model';

// @Injectable(
//   {
//     providedIn: 'root'
//   }
// )
// export class SimpleEventAggregator {

// // Observable string source (RxJS)
// private source = new Subject<IProfile[]>();

// // Observable string streams (RxJS)
// private observable = this.source.asObservable();

// // Cache array of tuples
// private subscriptions: Array<[(a: IProfile[]) => void, Subscription]> = [];

// subscribe(observer: (a: IProfile[]) => void) {
// if (this.subscriptions.find(item => item[0] === observer) !== undefined) {
// return;
// }
// // tslint:disable-next-line:prefer-const
// let subscription = this.observable.subscribe(observer);
// this.subscriptions.push([observer, subscription]);
// }

// publish(payload: IProfile[]) {
// this.source.next(payload);
// }

// unsubscribe(observer: (a: IProfile[]) => void) {
// let foundIndex = this.subscriptions.findIndex(item => item[0] === observer);
// if (foundIndex > -1) {
// let subscription: Subscription = this.subscriptions[foundIndex][1];
// // if (subscription.isUnsubscribed == false) {
// // subscription.unsubscribe();
// // console.log('unsubscribe successful');
// // }

// this.subscriptions.splice(foundIndex, 1);//removes item
// }
// }
// }
import { Injectable } from "@angular/core"

import { Observable, Subject } from "rxjs/Rx";

@Injectable(
    {
    providedIn: 'root'
  }
)
export class SimpleEventAggregator {
  private datas: IProfile[];
  private sidenavOpenSubject: Subject<IProfile[]>;

 constructor() {
   this.sidenavOpenSubject = new Subject<IProfile[]>();
                                                    }

  toggleSideNav(opening: IProfile[]): void {
  this.sidenavOpenSubject.next(opening);

                                        }

  onSideNavToggle(): Observable<IProfile[]> {
    console.log(this.sidenavOpenSubject);
    return this.sidenavOpenSubject;
                                      }

          }
