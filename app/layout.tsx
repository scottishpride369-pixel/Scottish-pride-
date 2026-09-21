import type { Metadata } from "next";
import "./globals.css";
export const metadata: Metadata={title:"Scottish Pride — Business Command Centre",description:"Unified business, digital asset and automation command centre."};
export default function RootLayout({children}:{children:React.ReactNode}){return <html lang="en"><body>{children}</body></html>}