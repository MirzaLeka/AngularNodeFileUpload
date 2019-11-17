import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  fileExtension: string;
  disabledBtn: boolean;

  constructor() {
    this.fileExtension = 'image/*';
    this.disabledBtn = true;
  }

  handleChange([ file ] : [ File ]) {
    this.disabledBtn = !file;
  }

  handleSubmit(e: any) {
    e.preventDefault();
    console.log('submited!');
  }
}
