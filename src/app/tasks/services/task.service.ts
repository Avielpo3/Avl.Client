import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Validators } from 'src/app/validators/static-validators.utils';
import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  constructor(private httpClient: HttpClient) { }


  public getItems<T>(url: string): Observable<T> {
    if (!Validators.ValidateUrl(url)) {
      // throw Error('Url is not valid.');
    }

    return this.httpClient.get<T>(url).pipe(
      catchError(err => {
        throw Error('Could not get items: ' + err);
      })
    );
  }
}
