import { UserProfileComponent } from './user-profile/user-profile.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { Routes } from '@angular/router';


const ROUTES: Routes = [
  { path: 'signup', component: SignUpComponent },
  { path: 'user', component: UserProfileComponent },
  { path: '', redirectTo: 'user', pathMatch: 'full' }
];

export { ROUTES };

// RouterConfig = [
//
//   { path: 'heroes', component: HeroComponent,
//     children: [
//       { path: '', redirectTo: '/detail', pathMatch: 'full' },
//       { path: 'detail', component: HeroDetailComponent }
//     ]
//   }
// ];


// { path: '**', redirectTo: '/heroes', pathMatch: 'full' },


// RouterConfig = [
//   { path: '/', redirectTo: 'heroes', terminal: true },
//   { path: 'heroes', component: HeroComponent,
//     children: [
//       { path: '/', redirectTo: 'detail', terminal: true },
//       { path: 'detail', component: HeroDetailComponent }
//     ]
//   }
// ];


// export class AppComponent {
//   constructor(router:Router) {
//     router.navigate(['/Merge']);
//   }
// }


// export class OtherComponent {
//   constructor(private router:Router) {}

//   routerOnActivate(curr: RouteSegment, prev?: RouteSegment, currTree?: RouteTree, prevTree?: RouteTree) : void {
//     this.router.navigate(['SomeRoute'], curr);
//   }
// }


