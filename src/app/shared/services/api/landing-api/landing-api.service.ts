import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { LandingResponse } from 'src/app/shared/classes/landing-response.class';

@Injectable()
export class LandingApiService {

  private url = 'http://localhost:3000/landing';

  constructor(
    private httpClient: HttpClient
  ) { }

  get(): Observable<LandingResponse> {
    return this.httpClient.get<LandingResponse>(this.url);
  }
}
