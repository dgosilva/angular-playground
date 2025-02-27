import { Injectable } from '@angular/core';
import { ApiService } from './api.service';

@Injectable({
  providedIn: 'root',
})
export class RandomUserService {
  private apiUrl = 'https://randomuser.me/api/';

  constructor(private apiService: ApiService) {}

  getRandomUser(): any {
    return this.apiService.get(this.apiUrl);
  }
}
