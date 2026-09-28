export interface DownloadConfig {
  enabled: boolean;
  version: string;
  versionCode: number | null;
  architecture: string;
  size: string;
  androidApkUrl: string;
  releasedAt: string | null;
  sha256: string | null;
  signingCertificateSha256: string | null;
  minimumAndroidVersion: string;
  releaseNotesUrl: string | null;
  googlePlayUrl: string | null;
  packageId: string;
  fileName: string;
}

/**
 * SKAVVIA İndirme Merkezi - Tek Doğruluk Kaynağı (Single Source of Truth)
 * 
 * Güvenlik Kuralları:
 * 1. enabled: false olduğu sürece indirme butonları devre dışı kalır ve "Android sürümü hazırlanıyor" durumu gösterilir.
 * 2. enabled: true olsa dahi zorunlu release alanları (androidApkUrl, version, size, architecture)
 *    boş veya geçersizse isDownloadReady() güvenli şekilde false döner.
 * 3. Bilinmeyen veya henüz yayınlanmamış alanlar null/boş olarak tutulur; sahte değer uydurulmaz.
 */
export const DOWNLOAD_CONFIG: DownloadConfig = {
  enabled: false,
  version: '1.0.5.1',
  versionCode: null, // Henüz resmi release yapılmadı, null
  architecture: 'arm64-v8a',
  size: '66 MB',
  androidApkUrl: '', // Boş; GitHub Release asset yüklendiğinde doldurulacak
  releasedAt: null, // Yayın tarihi release anında girilecek
  sha256: null, // Release binary hash'i yayınlandığında eklenecek
  signingCertificateSha256: null,
  minimumAndroidVersion: 'Android 8.0 (API 26) ve üzeri',
  releaseNotesUrl: null,
  googlePlayUrl: null, // Google Play Store linki yayına çıktığında tanımlanacak
  packageId: 'com.skavvia.mobile',
  fileName: 'Skavvia-v1.0.5.1-arm64.apk',
};

/**
 * İndirmenin gerçekten güvenli ve aktif olup olmadığını teyit eden guard fonksiyonu.
 * Yalnızca enabled=true VE zorunlu alanlar eksiksiz doldurulmuşsa true döner.
 */
export function isDownloadReady(config: DownloadConfig = DOWNLOAD_CONFIG): boolean {
  if (!config.enabled) return false;
  if (!config.androidApkUrl || config.androidApkUrl.trim() === '') return false;
  if (!config.version || config.version.trim() === '') return false;
  if (!config.architecture || config.architecture.trim() === '') return false;
  if (!config.size || config.size.trim() === '') return false;
  return true;
}
