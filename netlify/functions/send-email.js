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
        body: JSON.stringify({ error: 'Nedostaju obavezna polja' })
      };
    }

    // Format the email content
    const emailContent = `
      <h2>Nova kontakt forma sa Messie-Wohnungen24.de</h2>
      
      <h3>Kontakt informacije:</h3>
      <p><strong>Ime:</strong> ${name || 'Nije navedeno'}</p>
      <p><strong>Prezime:</strong> ${surname || 'Nije navedeno'}</p>
      <p><strong>Telefon:</strong> ${phone || 'Nije navedeno'}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Grad:</strong> ${city}</p>
      <p><strong>Poštanski broj:</strong> ${postalCode}</p>
      
      <h3>Detalji o entrümpelung:</h3>
      <p><strong>Šta treba da se entrümpelt:</strong> ${Array.isArray(clearingTypes) ? clearingTypes.join(', ') : clearingTypes}</p>
      <p><strong>Kvadratura:</strong> ${area}</p>
      <p><strong>Spratovi:</strong> ${Array.isArray(floors) ? floors.join(', ') : floors}</p>
      <p><strong>Lift:</strong> ${elevator || 'Nije navedeno'}</p>
      <p><strong>Vreme:</strong> ${timing || 'Nije navedeno'}</p>
      
      ${message ? `<h3>Dodatna poruka:</h3><p>${message}</p>` : ''}
      
      ${photos && Array.isArray(photos) && photos.length > 0 ? `<h3>Prilozi:</h3><p>Klijent je poslao ${photos.length} sliku/a prostorija.</p>` : ''}
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
      subject: `Nova kontakt forma - ${city}`,
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
        message: 'Email je uspešno poslat',
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
        error: 'Greška pri slanju emaila' 
      })
    };
  }
};