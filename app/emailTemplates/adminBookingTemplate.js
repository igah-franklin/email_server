// emailTemplates/verificationEmailTemplate.js
function adminBookingTemplate(email, name, phoneNumber, scheduledTime) {
    return `
      <!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
  <html dir="ltr" lang="en">
    <head>
      <link
        rel="preload"
        as="image"
        href="https://react-email-demo-8xz019qmh-resend.vercel.app/static/vercel-logo.png" />
      <link
        rel="preload"
        as="image"
        href="https://react-email-demo-8xz019qmh-resend.vercel.app/static/vercel-user.png" />
      <link
        rel="preload"
        as="image"
        href="https://react-email-demo-8xz019qmh-resend.vercel.app/static/vercel-arrow.png" />
      <link
        rel="preload"
        as="image"
        href="https://react-email-demo-8xz019qmh-resend.vercel.app/static/vercel-team.png" />
      <meta content="text/html; charset=UTF-8" http-equiv="Content-Type" />
      <meta name="x-apple-disable-message-reformatting" />
      <!--$-->
    </head>
    <body
      style='margin-left:auto;margin-right:auto;margin-top:auto;margin-bottom:auto;background-color:rgb(255,255,255);padding-left:0.5rem;padding-right:0.5rem;font-family:ui-sans-serif, system-ui, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"'>
      <div
        style="display:none;overflow:hidden;line-height:1px;opacity:0;max-height:0;max-width:0"
        data-skip-in-text="true">
        
        <div>
           ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿
        </div>
      </div>
      <table
        align="center"
        width="100%"
        border="0"
        cellpadding="0"
        cellspacing="0"
        role="presentation"
        style="margin-left:auto;margin-right:auto;margin-top:40px;margin-bottom:40px;max-width:465px;border-radius:0.25rem;border-width:1px;border-color:rgb(234,234,234);border-style:solid;padding:20px">
        <tbody>
          <tr style="width:100%">
            <td>
              <table
                align="center"
                width="100%"
                border="0"
                cellpadding="0"
                cellspacing="0"
                role="presentation"
                style="margin-top:32px">
                <tbody>
                  <tr>
                    <td>
                      <img
                        alt="salonmyculture Logo"
                        height="37"
                        src="https://salonmyculture.online/images/sanloonmyculture-removebg-preview.png"
                        style="margin-left:auto;margin-right:auto;margin-top:0px;margin-bottom:0px;display:block;outline:none;border:none;text-decoration:none"
                        width="40" />
                    </td>
                  </tr>
                </tbody>
              </table>
              <h1
                style="margin-left:0px;margin-right:0px;margin-top:30px;margin-bottom:30px;padding:0px;text-align:center;font-weight:400;font-size:24px;color:rgb(0,0,0)">
                  <strong>Booking Alert!</strong>
              </h1>
              <p
                style="font-size:14px;color:rgb(0,0,0);line-height:24px;margin-top:16px;margin-bottom:16px">
                Hi, 
                <!-- -->${name}<!-- -->,
              </p>
              <p
                style="font-size:14px;color:rgb(0,0,0);line-height:24px;margin-top:16px;margin-bottom:16px">
                has scheduled a session for ${scheduledTime}<!-- -->
                <span style="color:rgb(0,0,0)">Phone: ${phoneNumber}</span>.
              </p>
              <p
                style="font-size:14px;color:rgb(0,0,0);line-height:24px;margin-top:16px;margin-bottom:16px">
                <a
                  href="https://salonmyculture.online/"
                  style="color:rgb(37,99,235);text-decoration-line:none"
                  target="_blank"
                  >https://salonmyculture.online/</a
                >
              </p>
              <hr
                style="margin-left:0px;margin-right:0px;margin-top:26px;margin-bottom:26px;width:100%;border-width:1px;border-color:rgb(234,234,234);border-style:solid;border:none;border-top:1px solid #eaeaea" />
              <p
                style="color:rgb(102,102,102);font-size:12px;line-height:24px;margin-top:16px;margin-bottom:16px">
                <span style="color:rgb(0,0,0)">Address:</span>.
                <!-- -->located in<!-- -->
                4 Morija Cl, off Adetokunbo Ademola Crescent, behind OTI Carpets, Wuse 2, Abuja 900001, Federal Capital Territory
                 <span style="color:rgb(0,0,0)">Phone: 0803 899 9827</span>.
              </p>
            </td>
          </tr>
        </tbody>
      </table>
      <!--/$-->
    </body>
  </html>
    `;
  };
  
  
  module.exports = { adminBookingTemplate }
  