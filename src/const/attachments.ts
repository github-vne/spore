import { PostEntity } from 'models';

export type EntityWithAttachType = PostEntity;
export const MAX_FILE_SIZE = 104857600; // max size 100Mb

export function FormatSizeUnits(bytes: number): string {
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

export function FormatIcon(type: string): string {
  if (!type) return '';
  if (~type.indexOf('pdf')) return 'pdf';
  if (~type.indexOf('video') || ~type.indexOf('audio')) return 'video';
  if (~type.indexOf('image')) return 'images';
  if (~type.indexOf('powerpoint') || ~type.indexOf('presentation')) return 'pptx';
  if (~type.indexOf('excel') || ~type.indexOf('spreadsheet')) return 'xlsx';
  if (~type.indexOf('msword') || ~type.indexOf('document')) return 'docx';
  if (~type.indexOf('zip') || ~type.indexOf('compressed') || ~type.indexOf('archive') || ~type.indexOf('tar')) {
    return 'archive';
  }
  return 'unknown';
}
