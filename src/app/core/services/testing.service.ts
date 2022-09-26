import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { first } from 'rxjs/operators';
import { environment } from '../../../environments/environment';
 
@Injectable({
  providedIn: 'root',
})
export class TestingService {
  private headers: any;

  constructor(private httpClient: HttpClient) {
    this.headers = new HttpHeaders();
  }

  getTestData(callbackService: (data: Array<any>) => void): void {
    this.httpClient.get(
      `${environment.TEST_SERVICE}`,
      { headers: this.headers })
      .pipe(first()).subscribe((response: any) => {
        callbackService(response.results);    
      },
      (error) => {
        console.log('error sidebar: ',error);
        callbackService([]);
        console.log('There was an error on getting the info')    
      }
    );
  }

  getTestDataDog(callbackService: (data: Array<any>) => void): void {
    this.httpClient.get(
      `${environment.TEST_SERVICE_DOG}`,
      { headers: this.headers })
      .pipe(first()).subscribe((response: any) => {
        callbackService(response);
      },
        (error) => {
          callbackService([]);
          console.log('There was an error on getting the info', error)
        }
      );
  }

}
