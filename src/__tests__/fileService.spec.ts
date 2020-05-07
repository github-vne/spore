const { formatFileSize, parseMediaType } = require('../const/attachments');

describe('FileService', () => {
  it('parseMediaType', () => {
    expect(parseMediaType()).toBe('');
    expect(parseMediaType('ololo')).toBe('unknown');
    expect(parseMediaType('application/pdf')).toBe('pdf');
    expect(parseMediaType('video/mp4')).toBe('media');
    expect(parseMediaType('video/webm')).toBe('media');
    expect(parseMediaType('audio/mpeg')).toBe('media');
    expect(parseMediaType('audio/aac')).toBe('media');
    expect(parseMediaType('image/jpeg')).toBe('image');
    expect(parseMediaType('image/svg+xml')).toBe('image');
    expect(parseMediaType('image/webp')).toBe('image');
    expect(parseMediaType('application/vnd.ms-powerpoint')).toBe('pptx');
    expect(parseMediaType('application/vnd.oasis.opendocument.presentation')).toBe('pptx');
    expect(parseMediaType('application/vnd.ms-excel')).toBe('xlsx');
    expect(parseMediaType('application/vnd.oasis.opendocument.spreadsheet')).toBe('xlsx');
    expect(parseMediaType('application/msword')).toBe('docx');
    expect(parseMediaType('application/vnd.oasis.opendocument.text')).toBe('docx');
    expect(parseMediaType('application/zip')).toBe('archive');
    expect(parseMediaType('application/x-rar-compressed')).toBe('archive');
    expect(parseMediaType('application/x-tar')).toBe('archive');
  });

  it('formatFileSize', () => {
    expect(formatFileSize()).toBe('0 bytes');
    expect(formatFileSize('foo')).toBe('0 bytes');
    expect(formatFileSize(-1)).toBe('0 bytes');
    expect(formatFileSize(0)).toBe('0 bytes');
    expect(formatFileSize(1)).toBe('1 byte');
    expect(formatFileSize(2)).toBe('2 bytes');
    expect(formatFileSize(123)).toBe('123 bytes');
    expect(formatFileSize(1024)).toBe('1.00 KB');
    expect(formatFileSize(2048 + 123)).toBe('2.12 KB');
    expect(formatFileSize(Math.pow(1024, 2) * 3)).toBe('3.00 MB');
    expect(formatFileSize(Math.pow(1024, 3) * 4)).toBe('4.00 GB');
    expect(formatFileSize(Math.pow(1024, 3) * 1000.99)).toBe('1000.99 GB');
  });
});
