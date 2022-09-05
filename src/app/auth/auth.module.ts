import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthRoutingModule } from './auth-routing.module';
import { AuthComponent } from './auth.component';
import { StoreModule } from '@ngrx/store';
import { userReducer } from './state/user.reducer';


@NgModule({
  declarations: [
    AuthComponent
  ],
  imports: [
    CommonModule,
    AuthRoutingModule,

    StoreModule.forFeature('user',userReducer)
  ]
})
export class AuthModule { }
