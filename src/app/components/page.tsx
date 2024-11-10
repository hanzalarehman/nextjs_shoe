import React from 'react'

const Map = () => {
  return (
    <iframe
    className="w-full max-w-xl mx-auto lg:mx-0 lg:ml-auto"
    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d214587.60090726364!2d-96.87198002011303!3d32.82058616531825!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x864c19f77b45974b%3A0xb9ec9ba4f647678f!2sDallas%2C%20TX%2C%20USA!5e0!3m2!1sen!2sin!4v1679084925294!5m2!1sen!2sin"
    height="650"
    style={{ border: 0 }}
    allowFullScreen={true}  // Use a boolean here instead of a string
    loading="lazy"
    referrerPolicy="no-referrer-when-downgrade"
    title="Map of Dallas"  // Add title htmlFor accessibility
  ></iframe>
  )
}

export default Map
