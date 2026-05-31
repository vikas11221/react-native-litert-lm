/**
 * framework-source.js
 *
 * Single source of truth for the prebuilt iOS framework artifact, shared by
 * scripts/postinstall.js, scripts/download-ios-frameworks.sh, and
 * scripts/check-framework-release.js, so the asset name, tag, and URL can never
 * drift between the install path and the release-time guardrail.
 *
 * The artifact is Google's canonical LiteRT-LM release (NOT a per-version
 * re-host of this package), pinned to the LiteRT-LM **engine** version
 * (`litertLm.iosGitTag` in package.json), NOT this wrapper's npm version. So:
 *   - patch releases of this wrapper reuse the same framework (no re-upload),
 *   - there is no per-release asset for the maintainer to forget to upload,
 *   - the guardrail checks the exact URL consumers fetch.
 *
 * Override the host/asset (e.g. to point at a private mirror) via env vars:
 *   LITERT_FRAMEWORK_REPO   (default: google-ai-edge/LiteRT-LM)
 *   LITERT_FRAMEWORK_ASSET  (default: CLiteRTLM.xcframework.zip)
 */

const path = require('path');
const PACKAGE_ROOT = path.resolve(__dirname, '..');
const FRAMEWORKS_DIR = path.join(PACKAGE_ROOT, 'ios', 'Frameworks');
const FRAMEWORK_TAG = 'v0.3.6';
const ASSET_URL = 'https://github.com/hung-yueh/react-native-litert-lm/releases/download/v0.3.6/LiteRTLM-ios-frameworks.zip';
module.exports = {
  FRAMEWORK_TAG,
  PACKAGE_ROOT,
  FRAMEWORKS_DIR,
  ASSET_URL,
};
