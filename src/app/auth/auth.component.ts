import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { State } from './state/user.interface';



@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})



export class AuthComponent implements OnInit {




  name!:string;

  password!:string;

  
  constructor(private store: Store<State>) { }

  ngOnInit(): void {

    this.store.select('user').subscribe((username) => {


      if(username){


        this.name = username.name;

        this.password = username.password;
      }


    });
    
  }


  submit(){


    

    this.store.dispatch(
      {type:'add user',payload:{ name: this.name, password:this.password} }
    )
  }
}
