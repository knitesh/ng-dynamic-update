import { Component, Input, OnChanges, SimpleChanges, OnDestroy } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Subscription, interval } from 'rxjs';
import { switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-user-row',
  templateUrl: './user-row.component.html',
  styleUrl: './user-row.component.scss'
})
export class UserRowComponent {
  @Input() user: any;

  // if user id is 1, make a call every 1 sec to increment ID by 10 and get user info of user with new Id and update UI with new info

  apiSubscription: Subscription | undefined;
  private currentUserId: number | undefined;
  private readonly API_URL = 'https://jsonplaceholder.typicode.com/users'; //

  constructor(private http: HttpClient) {}

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['user'] && this.user.id === 1) {
      this.currentUserId = this.user.id;
      if (this.apiSubscription) {
        this.apiSubscription.unsubscribe();
      }
      this.apiSubscription = interval(15000).pipe(
        switchMap(() =>  this.fetchUserData())
      ).subscribe((userData: any) => {
        this.user = userData;
        this. currentUserId && this.currentUserId++;
        if( this.currentUserId == 10) {
          this.currentUserId = 1
        }// Increment the ID after fetching the data
      });
    } else if (changes['user'] && this.user.id !== 1) {
      if (this.apiSubscription) {
        this.apiSubscription.unsubscribe();
      }
    }
  }

  private fetchUserData() {
    return this.http.get(`${this.API_URL}/${this.currentUserId}`);
  }


  ngOnDestroy(): void {
    if (this.apiSubscription) {
      this.apiSubscription.unsubscribe();
    }
  }

}
