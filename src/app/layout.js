import { Outfit } from 'next/font/google';
import './globals.css';
import { Footer, Header } from '@/component';

export const outfit = Outfit({
  subsets: ['latin'],
  display: 'swap',
  weight: ['300', '400', '500', '600'],
  variable: '--font-outfit',
});
export const metadata = {
  metadataBase: new URL(`${process.env.NEXT_PUBLIC_WEB_URL}`),
  title: 'City Solar - Your Complete Solar Energy Solution',
  description:
    'Elevate your energy independence with City Solar, your trusted partner in solar panel installations and maintenance. Discover eco-friendly, sustainable solutions for residential and commercial properties. Our expert team ensures hassle-free approvals and top-notch maintenance, delivering a brighter, greener future for your energy needs',
  keywords: [
    'Solar panel installation services',
    'Renewable energy solutions',
    'Commercial solar solutions',
    'Solar maintenance services',
    'Sustainable power solutions',
    'on-grid solar systems',
    'Off-grid solar solutions',
    'Solar panel approval process',
    'Solar energy consulting services',
    'Solar system approvals',
    'Clean energy solutions',
    'Expert solar technicians',
    'solar panel installation',
    'solar panel cost',
    'solar panel installation cost',
    'solar panels for your home',
    'solar panels for home cost',
    'best solar panel companies',
    'average cost of solar panels',
    'solar panels for home use',
    'home solar system cost',
    'install solar panels on roof',
    'residential solar systems',
    'solar power installation',
    'solar system installation',
    'ground mounted solar panels',
    'roof solar panels cost',
    'adding solar panels to house',
    'solar system company',
    'house solar panels cost',
    'solar panels roof',
    'cheapest solar installation',
    'solar panel for home price',
    'solar system for home price',
  ],
  openGraph: {
    title: 'City Solar- Your Complete Solar Energy Solution',
    description:
      'Elevate your energy independence with City Solar, your trusted partner in solar panel installations and maintenance. Discover eco-friendly, sustainable solutions for residential and commercial properties. Our expert team ensures hassle-free approvals and top-notch maintenance, delivering a brighter, greener future for your energy needs',
    siteName: 'City Solar ',
    images: [
      {
        url: `${process.env.NEXT_PUBLIC_WEB_URL}/assets/opengraphimage.png`,
        width: 800,
        height: 600,
      },
      {
        url: `${process.env.NEXT_PUBLIC_WEB_URL}/assets/opengraphimage.png`,
        width: 300,
        height: 200,
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${outfit.variable} font-outfit`}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
