import { PostEntity } from 'models';

export type EntityWithAttachType = PostEntity;
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

export function parseMediaType(type: string): string {
  if (!type) return '';
  if (type.includes('pdf')) return 'pdf';
  if (type.includes('video') || type.includes('audio')) return 'media';
  if (type.includes('image')) return 'image';
  if (type.includes('powerpoint') || type.includes('presentation')) return 'pptx';
  if (type.includes('excel') || type.includes('spreadsheet')) return 'xlsx';
  if (type.includes('word') || type.includes('document.text')) return 'docx';
  if (type.includes('zip') || type.includes('compressed') || type.includes('archive') || type.includes('tar')) {
    return 'archive';
  }

  return 'unknown';
}
