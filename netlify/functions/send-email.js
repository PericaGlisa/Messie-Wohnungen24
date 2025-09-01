const { Resend } = require('resend');

const resend = new Resend(process.env.RESEND_API_KEY);

exports.handler = async (event, context) => {
  // Only allow POST requests
  if (event.httpMethod !== 'POST') {
    return {
      statusCode: 405,
      body: JSON.stringify({ error: 'Method not allowed' })
    };
  }

  try {
    const data = JSON.parse(event.body);
    const {
      name,
      surname,
      phone,
      email,
      city,
      postalCode,
      clearingTypes,
      area,
      floors,
      elevator,
      timing,
      message,
      photos
    } = data;

    // Validate required fields
    if (!email || !city || !postalCode || !clearingTypes || !area || !floors) {
      return {
        statusCode: 400,
        body: JSON.stringify({ error: 'Erforderliche Felder fehlen' })
      };
    }

    // Format the email content
    const emailContent = `
      <h2>Neue Kontaktanfrage von Messie-Wohnungen24.de</h2>
      
      <h3>Kontaktinformationen:</h3>
      <p><strong>Vorname:</strong> ${name || 'Nicht angegeben'}</p>
      <p><strong>Nachname:</strong> ${surname || 'Nicht angegeben'}</p>
      <p><strong>Telefon:</strong> ${phone || 'Nicht angegeben'}</p>
      <p><strong>E-Mail:</strong> ${email}</p>
      <p><strong>Stadt:</strong> ${city}</p>
      <p><strong>Postleitzahl:</strong> ${postalCode}</p>
      
      <h3>Details zur Entrümpelung:</h3>
      <p><strong>Was soll entrümpelt werden:</strong> ${Array.isArray(clearingTypes) ? clearingTypes.join(', ') : clearingTypes}</p>
      <p><strong>Quadratmeter:</strong> ${area}</p>
      <p><strong>Stockwerke:</strong> ${Array.isArray(floors) ? floors.join(', ') : floors}</p>
      <p><strong>Aufzug:</strong> ${elevator || 'Nicht angegeben'}</p>
      <p><strong>Zeitrahmen:</strong> ${timing || 'Nicht angegeben'}</p>
      
      ${message ? `<h3>Zusätzliche Nachricht:</h3><p>${message}</p>` : ''}
      
      ${photos && Array.isArray(photos) && photos.length > 0 ? `<h3>Anhänge:</h3><p>Der Kunde hat ${photos.length} Bild(er) der Räumlichkeiten gesendet.</p>` : ''}
    `;

    // Prepare attachments if photos exist
    const attachments = [];
    if (photos && Array.isArray(photos)) {
      photos.forEach((photo, index) => {
        if (photo.data && photo.name) {
          attachments.push({
            filename: photo.name,
            content: photo.data,
            type: photo.type || 'image/jpeg',
            disposition: 'attachment'
          });
        }
      });
    }

    // Send email using Resend
    const emailData = {
      from: 'kontakt@messie-wohnungen24.de',
      to: ['info@messie-wohnungen24.de'], // Replace with your actual email
      subject: `Neue Kontaktanfrage - ${city}`,
      html: emailContent,
      replyTo: email
    };

    // Add attachments if they exist
    if (attachments.length > 0) {
      emailData.attachments = attachments;
    }

    const result = await resend.emails.send(emailData);

    return {
      statusCode: 200,
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Headers': 'Content-Type',
        'Access-Control-Allow-Methods': 'POST, OPTIONS'
      },
      body: JSON.stringify({ 
        success: true, 
        message: 'E-Mail wurde erfolgreich gesendet',
        id: result.id 
      })
    };

  } catch (error) {
    console.error('Error sending email:', error);
    
    return {
      statusCode: 500,
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Headers': 'Content-Type',
        'Access-Control-Allow-Methods': 'POST, OPTIONS'
      },
      body: JSON.stringify({ 
        success: false, 
        error: 'Fehler beim Senden der E-Mail' 
      })
    };
  }
};