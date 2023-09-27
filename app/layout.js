import './globals.css'
import Header from "@/Components/Header"

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Header></Header>
        {children}</body>
    </html>
  )
}