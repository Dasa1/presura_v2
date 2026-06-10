// In-memory Rate Limiter (Best-effort only for staging/MVP)
// Note: In serverless environments, global memory is periodically reset.
// This does not replace production-grade shared cache (e.g. Redis).

interface RateLimitRecord {
  timestamps: number[];
}

const cache = new Map<string, RateLimitRecord>();

const LIMIT = 3; // Max 3 requests
const WINDOW_MS = 60 * 60 * 1000; // 1 hour window

export function isRateLimited(ip: string): boolean {
  const now = Date.now();
  const record = cache.get(ip) || { timestamps: [] };

  // Remove timestamps outside of the window
  record.timestamps = record.timestamps.filter(t => now - t < WINDOW_MS);

  if (record.timestamps.length >= LIMIT) {
    return true;
  }

  // Record request
  record.timestamps.push(now);
  cache.set(ip, record);
  return false;
}
