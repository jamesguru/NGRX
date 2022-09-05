import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';


@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent implements OnInit {


  name!:string;
  constructor(private store: Store<any>) { }

  ngOnInit(): void {

    this.store.select('user').subscribe(
      user => {
        if (user) {
          this.name = user.name;
        }
      });
    
  }


  submit(){

    this.store.dispatch(
      {type:'add user'}
    )
  }
}
