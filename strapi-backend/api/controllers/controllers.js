
module.exports = {
    async send(ctx){
        try{

            // Send mail usiung the strapi email plugin
            await strapi.plugins['nodemailer'].services.email.send({
                to:'thekarankumar.dev@gmail.com',
                from:'contact@karankumar.dev',
                subject:"Hello from Strapi",
                text:"This is a test email sent from strapi",
                html:"<p>This is a test email send from <Strong>Strapi</Strong>.</p>"
            });

            // Return a success message
            ctx.send({message: 'Email Sent Scuccessfully'});
        } catch (err){
            ctx.send({error: 'Failed to send email', delete: err});
        }
    },
};