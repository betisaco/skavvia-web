export interface DownloadConfig {
  androidApkUrl: string;
  androidVersion: string;
  androidArchitecture: string;
  approximateSize: string;
  packageId: string;
  releaseTag: string;
  fileName: string;
  minAndroidVersion: string;
}

/**
 * Merkezi indirme yapılandırması.
 * GitHub Releases üzerinde v1.0.5.1 release oluşturulup
 * APK yüklendiğinde doğrudan androidApkUrl alanına URL tanımlanabilir.
 */
export const DOWNLOAD_CONFIG: DownloadConfig = {
  // Şimdilik boş bırakılmıştır. GitHub Release URL'si eklendiğinde doğrudan indirmeye açılır.
  androidApkUrl: '',
  androidVersion: '1.0.5.1',
  androidArchitecture: 'arm64-v8a',
  approximateSize: '66 MB',
  packageId: 'com.skavvia.mobile',
  releaseTag: 'v1.0.5.1',
  fileName: 'Skavvia-v1.0.5.1-arm64.apk',
  minAndroidVersion: 'Android 8.0 (API 26) ve üzeri',
};
