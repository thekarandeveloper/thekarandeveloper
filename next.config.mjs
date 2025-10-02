/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      {
        source: '/github',
        destination: 'https://github.com/thekarandeveloper',
        permanent: true,
      },
      {
        source: '/linkedin',
        destination: 'https://www.linkedin.com/in/karandeveloper/',
        permanent: true,
      },
    ];
  },
};

export default nextConfig;