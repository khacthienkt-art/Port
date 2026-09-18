import type { Metadata } from 'next';
import { Fraunces, Inter } from 'next/font/google';
import './globals.css';
const fraunces=Fraunces({subsets:['latin'],variable:'--font-fraunces'});const inter=Inter({subsets:['latin'],variable:'--font-inter'});
export const metadata: Metadata={title:'Alex Morgan — Selected Work',description:'Content, culture, commerce, and creative production.'};
export default function Layout({children}:{children:React.ReactNode}){return <html lang="en"><body className={`${fraunces.variable} ${inter.variable}`}>{children}</body></html>}
