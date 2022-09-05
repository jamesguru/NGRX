import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {



  name!: string;
  constructor(private store:Store<any>) { }

  ngOnInit(): void {


    this.store.select('user').subscribe(
      user => {
        if (user) {
          this.name = user.name;
        }
      });
  

  }

}
