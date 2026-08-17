import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // @ts-expect-error - appIsrStatus might not be typed in this Next.js version
  devIndicators: {
    appIsrStatus: false,
    buildActivity: false,
  },
};

export default nextConfig;
