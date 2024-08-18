module.exports = ({ env }) => ({
  email: {
    provider: 'smtp',
    providerOptions: {
      host: env('SMTP_HOST', 'karankumar.dev'), // Replace with your SMTP server
      port: env('SMTP_PORT', 465),
      secure: false, // true for SSL - 465, false for other ports
      auth: {
        user: env('SMTP_USERNAME', 'contact@karankumar.dev'), // Replace with your email
        pass: env('SMTP_PASSWORD', '#karan.dev@f001'), // Replace with your password
      },
    },
    settings: {
      defaultFrom: 'contact@karankumar.dev', // Default sender address
      defaultReplyTo: 'thekarankumar.dev@gmail.com', // Default reply-to address
    },
  },
});
