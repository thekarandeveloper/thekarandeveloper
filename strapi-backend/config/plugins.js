module.exports = ({ env }) => ({
    email: {
      provider: 'smtp',
      providerOptions: {
        host: env('SMTP_HOST', 'smtp.example.com'), // SMTP server host
        port: env('SMTP_PORT', 587), // SMTP server port
        secure: false, // true for SSL connection
        auth: {
          user: env('SMTP_USERNAME', 'your-email@example.com'), // SMTP username
          pass: env('SMTP_PASSWORD', 'your-email-password'), // SMTP password
        },
        // ... any other options you want to set (see nodemailer SMTP transport options)
      },
      settings: {
        defaultFrom: 'your-email@example.com', // Default sender address
        defaultReplyTo: 'your-email@example.com', // Default reply-to address
      },
    },
  });
  