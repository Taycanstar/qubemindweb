/** @type {import('next').NextConfig} */
const nextConfig = {
  compiler: {
    styledComponents: true,
  },
  env: {
    REACT_APP_LOCAL_URL: process.env.REACT_APP_LOCAL_URL,
  },
};

module.exports = nextConfig;
