
export enum UploadStatus {
  Ready = "Ready",
  Requested = "Requested",
  Started = "Started",
  Failed = "Failed",
  Completed = "Completed"
}

export interface FileUploadState {
  progress: number | null;
  error: string | null;
  status: UploadStatus;
}

export const initialState: object = {
  status: UploadStatus.Ready,
  error: null,
  progress: null
};
