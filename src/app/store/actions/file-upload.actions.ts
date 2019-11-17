import { Action } from "@ngrx/store";

export enum UploadActionTypes {
  UPLOAD_REQUEST = "[File Upload] Request",
  UPLOAD_CANCEL = "[File Upload] Cancel",
  UPLOAD_RESET = "[File Upload Form] Reset",
  UPLOAD_STARTED = "[File Upload API] Started",
  UPLOAD_PROGRESS = "[File Upload API] Progress",
  UPLOAD_FAILURE = "[File Upload API] Failure",
  UPLOAD_COMPLETED = "[File Upload API] Success"
}

export class UploadRequestAction implements Action {
  readonly type = UploadActionTypes.UPLOAD_REQUEST;
  constructor(public payload: { file: File }) {}
}

export class UploadCancelAction implements Action {
  readonly type = UploadActionTypes.UPLOAD_CANCEL;
}

export class UploadResetAction implements Action {
  readonly type = UploadActionTypes.UPLOAD_RESET;
}

export class UploadStartedAction implements Action {
  readonly type = UploadActionTypes.UPLOAD_STARTED;
}

export class UploadProgressAction implements Action {
  readonly type = UploadActionTypes.UPLOAD_PROGRESS;
  constructor(public payload: { progress: number }) {}
}

export class UploadFailureAction implements Action {
  readonly type = UploadActionTypes.UPLOAD_FAILURE;
  constructor(public payload: { error: string }) {}
}

export class UploadCompletedAction implements Action {
  readonly type = UploadActionTypes.UPLOAD_COMPLETED;
}

export type UploadActions = 
| UploadRequestAction
| UploadCancelAction
| UploadResetAction
| UploadStartedAction
| UploadProgressAction
| UploadFailureAction
| UploadCompletedAction;
