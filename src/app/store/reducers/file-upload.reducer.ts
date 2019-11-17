import { initialState, UploadStatus } from "../models/file-upload.model";
import { UploadActions, UploadActionTypes } from "../actions/file-upload.actions";

export function fileUploadReducer( state: object = initialState, action: UploadActions ) {
  switch (action.type) {
    case UploadActionTypes.UPLOAD_REQUEST: {
      return {
        ...state,
        status: UploadStatus.Requested,
        progress: null,
        error: null
      };
    }
    case UploadActionTypes.UPLOAD_CANCEL: {
      return {
        ...state,
        status: UploadStatus.Ready,
        progress: null,
        error: null
      };
    }
    case UploadActionTypes.UPLOAD_RESET: {
      return {
        ...state,
        status: UploadStatus.Ready,
        progress: null,
        error: null
      };
    }
    case UploadActionTypes.UPLOAD_FAILURE: {
      return {
        ...state,
        status: UploadStatus.Failed,
        error: action.payload.error,
        progress: null
      };
    }
    case UploadActionTypes.UPLOAD_STARTED: {
      return {
        ...state,
        status: UploadStatus.Started,
        progress: 0
      };
    }
    case UploadActionTypes.UPLOAD_PROGRESS: {
      return {
        ...state,
        progress: action.payload.progress
      };
    }
    case UploadActionTypes.UPLOAD_COMPLETED: {
      return {
        ...state,
        status: UploadStatus.Completed,
        progress: 100,
        error: null
      };
    }
    default: {
      return state;
    }
  }
}
