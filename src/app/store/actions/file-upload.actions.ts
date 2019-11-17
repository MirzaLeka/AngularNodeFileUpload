import { Action } from "@ngrx/store";

export enum UploadActionTypes {
  UPLOAD_START = "[File Upload] Start",
  UPLOAD_FAILURE = "[File Upload] Failure",
  UPLOAD_SUCCESS = "[File Upload] Success",
  DOWNLOAD_START = "[File Download] Start",
  DOWNLOAD_FAILURE = "[File Download] Failure",
  DOWNOAD_SUCCESS = "[File Download] Success"
}

export class UploadStartAction implements Action {
  readonly type = UploadActionTypes.UPLOAD_START;
  constructor(public payload: File) {}
}

export class UploadFailureAction implements Action {
  readonly type = UploadActionTypes.UPLOAD_FAILURE;
  constructor(public payload: boolean) {}
}

export class UploadSuccessAction implements Action {
  readonly type = UploadActionTypes.UPLOAD_SUCCESS;
  constructor(public payload: boolean) {}
}

export class DownloadStartAction implements Action {
  readonly type = UploadActionTypes.DOWNLOAD_START;
  constructor(public payload: string) {}
}

export class DownloadFailureAction implements Action {
  readonly type = UploadActionTypes.DOWNLOAD_FAILURE;
  constructor(public payload: string) {}
}

export class DownloadSuccessAction implements Action {
  readonly type = UploadActionTypes.DOWNOAD_SUCCESS;
  constructor(public payload: string) {}
}

export type UploadActions =
  | UploadStartAction
  | UploadFailureAction
  | UploadSuccessAction
  | DownloadStartAction
  | DownloadFailureAction
  | DownloadSuccessAction;

// export class UploadRequestAction implements Action {
//   readonly type = UploadActionTypes.UPLOAD_REQUEST;
//   constructor(public payload: { file: File }) {}
// }

// export class UploadCancelAction implements Action {
//   readonly type = UploadActionTypes.UPLOAD_CANCEL;
// }

// export class UploadResetAction implements Action {
//   readonly type = UploadActionTypes.UPLOAD_RESET;
// }

// export class UploadStartedAction implements Action {
//   readonly type = UploadActionTypes.UPLOAD_STARTED;
// }

// export class UploadProgressAction implements Action {
//   readonly type = UploadActionTypes.UPLOAD_PROGRESS;
//   constructor(public payload: { progress: number }) {}
// }

// export class UploadFailureAction implements Action {
//   readonly type = UploadActionTypes.UPLOAD_FAILURE;
//   constructor(public payload: { error: string }) {}
// }

// export class UploadCompletedAction implements Action {
//   readonly type = UploadActionTypes.UPLOAD_COMPLETED;
// }

// export type UploadActions =
// | UploadRequestAction
// | UploadCancelAction
// | UploadResetAction
// | UploadStartedAction
// | UploadProgressAction
// | UploadFailureAction
// | UploadCompletedAction;
