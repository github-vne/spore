const { formatFileSize } = require('../const/attachments');

describe('FileService', () => {
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
