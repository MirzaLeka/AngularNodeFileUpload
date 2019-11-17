import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { FileUploadState } from './store/models/file-upload.model';
import * as ABC from './store/actions/file-upload.actions';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  fileExtension: string;
  disabledBtn: boolean;
  image: File;

  constructor(private store: Store<FileUploadState>) {
    this.fileExtension = 'image/*';
    this.disabledBtn = true;
  }

  handleChange([ file ] : [ File ]) {
    this.disabledBtn = !file;
    this.image = file;
  }

  handleSubmit(e: any) {
    e.preventDefault();
    console.log('submited!');

    this.store.dispatch(
      new ABC.UploadRequestAction({ file: this.image  })
    );

  }
}
