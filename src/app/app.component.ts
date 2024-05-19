import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { RouterModule } from '@angular/router';
// import { RouterOutlet } from '@angular/router';
// import User row module
// import { UserRowModule } from './user-row/user-row.module';
// import { UserRowComponent } from './user-row/user-row.component';

@Component({
  selector: 'app-root', 
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'ng-interval-app';

  users: any[] = [];

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.http.get<any[]>('https://jsonplaceholder.typicode.com/users').subscribe((data: any[]) => {
      this.users = data;
    });
  }
}
