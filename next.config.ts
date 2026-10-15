import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  env: {
    // Inlined at build time: used as schema.org `dateModified` (src/lib/jsonld.ts).
    BUILD_DATE: new Date().toISOString().slice(0, 10),
  },
};

export default nextConfig;
