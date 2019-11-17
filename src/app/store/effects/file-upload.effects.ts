import { Injectable } from '@angular/core';
import { Effect, Actions, ofType } from '@ngrx/effects';
import { Action } from '@ngrx/store';
import { Observable, of } from 'rxjs';
import { catchError, concatMap, map, takeUntil, mergeMap } from 'rxjs/operators';
import { FileUploadService } from '../../file-upload.service';
// import * as fromFileUploadActions from '../actions/file-upload.actions';
import { UploadCancelAction, UploadActionTypes, UploadCompletedAction, UploadFailureAction}  from '../actions/file-upload.actions';
import { HttpEvent, HttpEventType } from '@angular/common/http';

@Injectable()
export class UploadFIleEffects {

  @Effect()
  uploadRequestEffect$: Observable<Action> = this.actions$.pipe(
    ofType(UploadActionTypes.UPLOAD_REQUEST),
    mergeMap(data =>
      this.fileUploadService.uploadFile(data).pipe(
        map(event => new UploadCompletedAction()),
        catchError(error => of(new UploadFailureAction(error)))
      )
    )
  );

constructor(private actions$: Actions, private fileUploadService: FileUploadService) {

}



}