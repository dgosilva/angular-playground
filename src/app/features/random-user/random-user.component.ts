import { Component, OnInit } from '@angular/core';
import { RandomUserService } from 'src/app/core/services/random-user.service';

@Component({
  selector: 'app-random-user',
  templateUrl: './random-user.component.html',
  styleUrl: './random-user.component.scss',
  standalone: false,
})
export class RandomUserComponent {
  users: any[] = [];

  constructor(private randomUserService: RandomUserService) {}

  fetchRandomUser() {
    this.randomUserService.getRandomUser().subscribe((data: any) => {
      const newUser = data.results[0];
      this.users.push(newUser);
    });
  }
}
