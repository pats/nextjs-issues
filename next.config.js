/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
    esmExternals: true
  }
}


const withTM = require('next-transpile-modules')(['@grupa-pracuj/juno-config']);

module.exports = withTM(nextConfig)
