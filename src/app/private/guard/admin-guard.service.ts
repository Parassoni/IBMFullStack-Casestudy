import { Injectable } from '@angular/core';
import { CanActivate, Router, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';

import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
// @Injectable()
export class AdminGuardService implements CanActivate {

  path: ActivatedRouteSnapshot[];
  route: ActivatedRouteSnapshot;

  // tslint:disable-next-line:variable-name
  constructor(private _router: Router) { }
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    // tslint:disable-next-line: no-conditional-assignment
    if (localStorage.getItem('role') === 'admin' ) {
      console.log(localStorage)
      console.log('Paras');
      return true;
    } else {
      alert('Authentication Required');
      this._router.navigate(['/public']);
      return false;
    }
  }
}




// canDeactivate(component: ProductsEditComponent) {
// if (component.productForm.dirty) {
// const productName = component.productForm.get('productName').value || 'New Product';
// return confirm(`Navigate away and lose all changes to ${productName}?`);
// }
// return true;
// }
// }

