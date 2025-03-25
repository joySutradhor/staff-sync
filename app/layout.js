import { Work_Sans } from 'next/font/google'
import './globals.css'

const WorkSans = Work_Sans({
  variable: '--font-work-sans',
  subsets: ['latin']
})

export const metadata = {
  title: 'Staffsynk - Best App for Staff Management || 2025',
  description:
    'Staffsynk is the most powerful app designed to simplify staff management. Efficient, user-friendly, and perfect for businesses in 2025.'
}

export default function RootLayout ({ children }) {
  return (
    <html lang='en'>
      <body className={`${WorkSans.variable} antialiased`}>{children}</body>
    </html>
  )
}
