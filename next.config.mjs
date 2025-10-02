/** @type {import('next').NextConfig} */
const nextConfig = {
    async redirects() {
    return [
      {
        source: '/github',   
        destination: '/https://github.com/thekarandeveloper', 
        permanent: true,       // true -> 301 redirect, false -> 302 temporary
      },
      {
        source: '/linkedin',
        destination: 'https://www.linkedin.com/in/karandeveloper/',
        permanent: true,
      },
    ]
  },
};

export default nextConfig;
