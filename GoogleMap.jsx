import React from 'react'

const GoogleMap = () => {
  return (
    <div className="w-full h-64 bg-gray-200 rounded-lg overflow-hidden">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3367.8234567890123!2d131.4234567890123!3d31.9234567890123!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2z5a6u5bSO55Sj5qWt57WM5Za25aSn5a2m!5e0!3m2!1sja!2sjp!4v1234567890123!5m2!1sja!2sjp"
        width="100%"
        height="100%"
        style={{ border: 0 }}
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        title="宮崎産業経営大学の地図"
      ></iframe>
    </div>
  )
}

export default GoogleMap

