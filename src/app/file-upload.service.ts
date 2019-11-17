import { Injectable } from "@angular/core";
import { HttpClient, HttpRequest, HttpEvent } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: "root"
})
export class FileUploadService {

  private API_BASE_URL = '/api';

  constructor(private httpClient: HttpClient) {}

  public uploadFile (file: File): Observable<HttpEvent<{}>> {

    const formData = new FormData();
    formData.append("files", file, file.name);

    const options = { reportProgress: true };

    const req = new HttpRequest(
      "POST",
      `${this.API_BASE_URL}/upload`,
      formData,
      options
    );
    
    return this.httpClient.request(req);
  }
}
