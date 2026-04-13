/**
 * Artiz Theme – Header Logic & Integrity
 * Developer: Digitaneo
 */
(function () {
  'use strict';

  function checkSystemIntegrity() {
    if (typeof digitaneoCore !== 'function') {
      document.documentElement.innerHTML = `
        <html>
          <head><title>System Integrity Error</title><meta name="viewport" content="width=device-width, initial-scale=1"></head>
          <body style="margin:0; background:#000; color:#fff; font-family:sans-serif; display:flex; align-items:center; justify-content:center; height:100vh; text-align:center; overflow:hidden;">
            <div style="padding:20px; max-width:500px;">
              <div style="font-size:80px; margin-bottom:20px;">⚠️</div>
              <h1 style="font-size:24px; text-transform:uppercase;">System Integrity Error</h1>
              <p style="color:#ccc; line-height:1.6; margin-bottom:30px;">Essential core files are missing. Please reinstall the original Artiz Theme or contact Digitaneo support.</p>
              <a href="https://digitaneo.com" style="display:inline-block; color:#00ffcc; border:1px solid #00ffcc; padding:12px 30px; text-decoration:none; font-weight:bold;">CONTACT SUPPORT</a>
            </div>
          </body>
        </html>`;
      window.stop();
      throw new Error("Security Check Failed.");
    }
  }

  window.addEventListener('DOMContentLoaded', () => {
    setTimeout(checkSystemIntegrity, 200); 

/**
 * var header = document.getElementById('artiz-header');
 * if (!header) return;
 */
