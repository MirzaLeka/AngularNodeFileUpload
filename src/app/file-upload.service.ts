import { Injectable } from "@angular/core";
import { HttpClient, HttpRequest, HttpEvent } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { map, catchError, tap } from 'rxjs/operators';


@Injectable({
  providedIn: "root"
})
export class FileUploadService {

  private API_BASE_URL = '/api';

  constructor(private httpClient: HttpClient) {}

  // public uploadFile (file: File): Observable<HttpEvent<{}>> {

  //   const { name: fileName } = file['payload'].file; 

  //   const formData = new FormData();
  //   formData.append("image", file, fileName);

  //   const options = { reportProgress: true };

  //   const req = new HttpRequest(
  //     "POST",
  //     `${this.API_BASE_URL}/upload`,
  //     formData,
  //     options
  //   );
    
  //   return this.httpClient.request(req);
  // }

  uploadFile(file: File): Observable<boolean> {

    console.log(file);
    console.log(file.name);

    const endpoint = '/api/upload';
    const formData: FormData = new FormData();

    formData.append('image', file, file.name);

    return this.httpClient.post<boolean>(endpoint, formData)
    .pipe(
      tap(data => console.log(data)),
      map(data => data['originalname']),
      catchError(error => this.handleError(error))
    );

      // .map(() => { return true; })
      // .catchError((e) => this.handleError(e));
  }


  handleError(error : string) : Observable<boolean> {
    console.log(error);
    return of(true);
  }

}
