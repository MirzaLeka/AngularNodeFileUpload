import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { FileUploadState } from './store/models/file-upload.model';
import * as ABC from './store/actions/file-upload.actions';
import { FileUploadService } from './file-upload.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  fileExtension: string;
  disabledBtn: boolean;
  image: File;
  uploadErrorMsg: boolean;

  constructor(private store: Store<FileUploadState>, private fileUploadService: FileUploadService) {
    this.fileExtension = 'image/*';
    this.disabledBtn = true;
    this.uploadErrorMsg = false;
  }

  handleChange([ file ] : [ File ]) {
    this.disabledBtn = !file;
    this.image = file;
  }

  handleSubmit(e: any) {
    e.preventDefault();

    // this.store.dispatch(
    //   new ABC.UploadRequestAction({ file: this.image  })
    // );

    this.fileUploadService.uploadFile(this.image).subscribe(data => {
      console.log(data);
      }, error => {
        console.log(error);
        this.uploadErrorMsg = true;
      });

  }
}
