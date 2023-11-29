// static/one-tap.js

// Wrap the code in a check for the existence of the 'document' object
if (typeof document !== 'undefined') {
    // Load the Google One Tap library
    const script = document.createElement('script');
    script.src = 'https://accounts.google.com/gsi/client';
    document.head.appendChild(script);
  }
  