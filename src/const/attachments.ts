export const MAX_FILE_SIZE = 104857600; // max size 100Mb

export function formatFileSize(bytes: number): string {
  if (bytes >= 1073741824) {
    return (bytes / 1073741824).toFixed(2) + ' GB';
  } else if (bytes >= 1048576) {
    return (bytes / 1048576).toFixed(2) + ' MB';
  } else if (bytes >= 1024) {
    return (bytes / 1024).toFixed(2) + ' KB';
  } else if (bytes > 1) {
    return bytes + ' bytes';
  } else if (bytes === 1) {
    return bytes + ' byte';
  }
  return '0 bytes';
}
