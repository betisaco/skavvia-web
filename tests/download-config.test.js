import assert from 'node:assert';
import test from 'node:test';
import { isDownloadReady, DOWNLOAD_CONFIG } from '../src/config/download.ts';

test('DOWNLOAD_CONFIG is safely disabled by default', () => {
  assert.strictEqual(DOWNLOAD_CONFIG.enabled, false);
  assert.strictEqual(isDownloadReady(DOWNLOAD_CONFIG), false);
});

test('isDownloadReady returns false when enabled is true but androidApkUrl is empty', () => {
  const invalidConfig = {
    ...DOWNLOAD_CONFIG,
    enabled: true,
    androidApkUrl: '',
  };
  assert.strictEqual(isDownloadReady(invalidConfig), false);
});

test('isDownloadReady returns false when mandatory fields are missing', () => {
  const missingVersion = {
    ...DOWNLOAD_CONFIG,
    enabled: true,
    androidApkUrl: 'https://github.com/releases/download/v1.0.5.1/test.apk',
    version: '',
  };
  assert.strictEqual(isDownloadReady(missingVersion), false);

  const missingArch = {
    ...DOWNLOAD_CONFIG,
    enabled: true,
    androidApkUrl: 'https://github.com/releases/download/v1.0.5.1/test.apk',
    architecture: '',
  };
  assert.strictEqual(isDownloadReady(missingArch), false);
});

test('isDownloadReady returns true only when enabled and all required fields exist', () => {
  const validConfig = {
    ...DOWNLOAD_CONFIG,
    enabled: true,
    androidApkUrl: 'https://github.com/releases/download/v1.0.5.1/Skavvia-v1.0.5.1-arm64.apk',
    version: '1.0.5.1',
    architecture: 'arm64-v8a',
    size: '66 MB',
  };
  assert.strictEqual(isDownloadReady(validConfig), true);
});
