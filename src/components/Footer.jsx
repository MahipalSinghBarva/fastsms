import React from 'react'

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="container mx-auto px-4">
        <div className="flex justify-between">
          <p>© 2024 FastSMS. All rights reserved.</p>
          <nav>
            <a href="#" className="mr-4 hover:underline">Privacy Policy</a>
            <a href="#" className="hover:underline">Terms of Service</a>
          </nav>
        </div>
      </div>
    </footer>
  )
}

export default Footer
