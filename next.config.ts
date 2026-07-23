import type { NextConfig } from "next";

const isGitHubPages = process.env.GITHUB_ACTIONS === "true";

const nextConfig: NextConfig = {
  output: isGitHubPages ? "export" : undefined,
  basePath: isGitHubPages ? "/biotech-portfolio" : "",
  assetPrefix: isGitHubPages ? "/biotech-portfolio/" : undefined,
  trailingSlash: true,
};

export default nextConfig;
