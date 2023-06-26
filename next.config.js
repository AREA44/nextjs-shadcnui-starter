/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  basePath: process.env.CI ? "/next-shadcnui-starter" : undefined,
  output: "export",
}

module.exports = nextConfig
