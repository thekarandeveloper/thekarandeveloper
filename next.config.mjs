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
      {
        source: '/resume',
        destination: 'https://drive.google.com/file/d/1RtbtafuqySA1fmiqqaC6Ust2480T7sPb/view?usp=sharing',
        permanent: true,
      },
    ];
  },
};

export default nextConfig;