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
      {
        source: '/sakhi/appstore',
        destination: 'https://apps.apple.com/us/app/sakhi-menstrual-companion/id6747256551',
        permanent: true,
      },
       {
        source: '/moneymate/appstore',
        destination: 'https://apps.apple.com/us/app/money-mate-your-personal-ca/id6752692573r',
        permanent: true,
      },
       {
        source: '/bazzar/appstore',
        destination: 'https://github.com/thekarandeveloper/Bazzar',
        permanent: true,
      },
    ];
  },
};

export default nextConfig;