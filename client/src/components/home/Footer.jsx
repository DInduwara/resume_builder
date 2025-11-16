import React from 'react'

const Footer = () => {
  return (
         <footer id="footer" className="px-6 pt-8 md:px-16 lg:px-36 w-full text-gray-900">
            <div className="flex flex-col md:flex-row justify-between w-full gap-10 border-b border-gray-500 pb-10">
                <div className="md:max-w-96">
                <img
                    alt=""
                    className="h-11 w-auto"
                    src="logo.svg"
                />
                <p className="mt-6 text-sm">
                     Build job-ready resumes in minutes with our AI-powered resume
                    builder. Tailor each application, track your versions, and stay
                    one step ahead in every hiring process.
                </p>
                
                </div>

                <div className="flex-1 flex items-start justify-center md:justify-end gap-40 md:gap-40">
                <div>
                    <h2 className="font-semibold mb-5">Company</h2>
                    <ul className="text-sm space-y-2">
                    <li>
                        <a href="#">Home</a>
                    </li>
                    <li>
                        <a href="#">Contact us</a>
                    </li>
                    </ul>
                </div>
                <div>
                    <h2 className="font-semibold mb-5">Get in touch</h2>
                    <div className="text-sm space-y-2">
                    <p>+1-234-567-890</p>
                    <p>contact@example.com</p>
                    </div>
                </div>
                </div>
            </div>

            <p className="pt-4 text-center text-sm pb-5">
                Copyright {new Date().getFullYear()} ©{" "}
                <a href="https://prebuiltui.com">PrebuiltUI</a>. All Right Reserved.
            </p>
            </footer>
  )
}

export default Footer