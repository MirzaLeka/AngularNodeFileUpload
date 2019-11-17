import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { StoreModule } from '@ngrx/store';

import { EffectsModule } from '@ngrx/effects';
import { UploadFIleEffects } from './store/effects/file-upload.effects'
import { fileUploadReducer } from './store/reducers/file-upload.reducer';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    StoreModule.forRoot({
      fileUpload: fileUploadReducer
    }),
    EffectsModule.forRoot([UploadFIleEffects])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
