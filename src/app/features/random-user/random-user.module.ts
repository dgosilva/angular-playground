import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  provideHttpClient,
  withInterceptorsFromDi,
} from '@angular/common/http';
import { RandomUserRoutingModule } from './random-user-routing.module';
import { RandomUserComponent } from './random-user.component';
import { RandomUserService } from 'src/app/core/services/random-user.service';
import { ApiService } from 'src/app/core/services/api.service';

@NgModule({
  declarations: [RandomUserComponent],
  imports: [CommonModule, RandomUserRoutingModule],
  providers: [
    provideHttpClient(withInterceptorsFromDi()),
    RandomUserService,
    ApiService,
  ],
})
export class RandomUserModule {}
