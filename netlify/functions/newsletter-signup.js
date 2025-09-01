const { Resend } = require('resend');

exports.handler = async (event, context) => {
  // Only allow POST requests
  if (event.httpMethod !== 'POST') {
    return {
      statusCode: 405,
      body: JSON.stringify({ error: 'Method not allowed' })
    };
  }

  try {
    const { email } = JSON.parse(event.body);

    // Validate email
    if (!email || !email.includes('@')) {
      return {
        statusCode: 400,
        body: JSON.stringify({ error: 'Gültige E-Mail-Adresse erforderlich' })
      };
    }

    // Initialize Resend with API key from environment variables
    const resend = new Resend(process.env.RESEND_API_KEY);

    // Send welcome email to subscriber
    const { data, error } = await resend.emails.send({
      from: 'newsletter@messie-wohnungen24.de',
      to: [email],
      subject: 'Willkommen bei Messie-Wohnungen24 Newsletter!',
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px;">
          <div style="text-align: center; margin-bottom: 30px;">
            <h1 style="color: #2563eb; margin-bottom: 10px;">Willkommen bei Messie-Wohnungen24!</h1>
            <p style="color: #666; font-size: 16px;">Vielen Dank für Ihre Anmeldung zu unserem Newsletter.</p>
          </div>
          
          <div style="background-color: #f8fafc; padding: 20px; border-radius: 8px; margin-bottom: 20px;">
            <h2 style="color: #1e40af; margin-bottom: 15px;">Was Sie erwarten können:</h2>
            <ul style="color: #374151; line-height: 1.6;">
              <li>Tipps für die Entrümpelung und Organisation</li>
              <li>Informationen über unsere Services</li>
              <li>Sonderangebote und Aktionen</li>
              <li>Hilfreiche Ressourcen und Guides</li>
            </ul>
          </div>
          
          <div style="text-align: center; margin-top: 30px;">
            <p style="color: #666; font-size: 14px;">Bei Fragen erreichen Sie uns unter:</p>
            <p style="color: #2563eb; font-weight: bold;">+49 176 70211430</p>
            <p style="color: #2563eb;">info@messie-wohnungen24.de</p>
          </div>
          
          <div style="text-align: center; margin-top: 20px; padding-top: 20px; border-top: 1px solid #e5e7eb;">
            <p style="color: #9ca3af; font-size: 12px;">
              Messie-Wohnungen24 - Professionelle und diskrete Entrümpelung<br>
              Sie können sich jederzeit von unserem Newsletter abmelden.
            </p>
          </div>
        </div>
      `
    });

    if (error) {
      console.error('Resend error:', error);
      return {
        statusCode: 500,
        body: JSON.stringify({ error: 'Fehler beim Versenden der E-Mail' })
      };
    }

    // Also send notification to admin
    await resend.emails.send({
      from: 'newsletter@messie-wohnungen24.de',
      to: ['info@messie-wohnungen24.de'],
      subject: 'Neue Newsletter-Anmeldung',
      html: `
        <div style="font-family: Arial, sans-serif; padding: 20px;">
          <h2 style="color: #2563eb;">Neue Newsletter-Anmeldung</h2>
          <p><strong>E-Mail:</strong> ${email}</p>
          <p><strong>Datum:</strong> ${new Date().toLocaleString('de-DE')}</p>
        </div>
      `
    });

    return {
      statusCode: 200,
      body: JSON.stringify({ 
        success: true, 
        message: 'Newsletter-Anmeldung erfolgreich! Prüfen Sie Ihre E-Mail.' 
      })
    };

  } catch (error) {
    console.error('Newsletter signup error:', error);
    return {
      statusCode: 500,
      body: JSON.stringify({ error: 'Interner Serverfehler' })
    };
  }
};