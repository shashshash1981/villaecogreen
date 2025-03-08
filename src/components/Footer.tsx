import React from "react";
import { Link } from "react-router-dom";
import {
  Facebook,
  Instagram,
  Twitter,
  Mail,
  Phone,
  MapPin,
} from "lucide-react";
import { Button } from "./ui/button";

interface FooterProps {
  logoSrc?: string;
  address?: string;
  phone?: string;
  email?: string;
  socialLinks?: {
    facebook?: string;
    instagram?: string;
    twitter?: string;
  };
  quickLinks?: Array<{
    label: string;
    href: string;
  }>;
}

const Footer = ({
  logoSrc = "/vite.svg",
  address = "Near Bandaranaike International Airport, Negombo, Sri Lanka",
  phone = "+94 77 123 4567",
  email = "info@villaecogreensl.com",
  socialLinks = {
    facebook: "https://facebook.com",
    instagram: "https://instagram.com",
    twitter: "https://twitter.com",
  },
  quickLinks = [
    { label: "Home", href: "/" },
    { label: "About Us", href: "/about" },
    { label: "Rooms", href: "/rooms" },
    { label: "Amenities", href: "/amenities" },
    { label: "Gallery", href: "/gallery" },
    { label: "Contact", href: "/contact" },
  ],
}: FooterProps) => {
  return (
    <footer className="bg-green-800 text-white py-12 px-4 md:px-8 lg:px-12 w-full">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {/* Logo and About */}
        <div className="flex flex-col space-y-4">
          <div className="flex items-center space-x-2">
            <img
              src={logoSrc}
              alt="Villa Eco Green Logo"
              className="h-10 w-10 bg-white rounded-full p-1"
            />
            <span className="text-xl font-bold">Villa Eco Green</span>
          </div>
          <p className="text-green-100 text-sm">
            Your home away from home in Sri Lanka. Experience our peaceful
            homestay with a serene outdoor pool and lush garden.
          </p>
          <div className="flex space-x-4 pt-2">
            <a
              href={socialLinks.facebook}
              aria-label="Facebook"
              className="hover:text-green-300 transition-colors"
            >
              <Facebook size={20} />
            </a>
            <a
              href={socialLinks.instagram}
              aria-label="Instagram"
              className="hover:text-green-300 transition-colors"
            >
              <Instagram size={20} />
            </a>
            <a
              href={socialLinks.twitter}
              aria-label="Twitter"
              className="hover:text-green-300 transition-colors"
            >
              <Twitter size={20} />
            </a>
          </div>
        </div>

        {/* Quick Links */}
        <div className="flex flex-col space-y-4">
          <h3 className="text-lg font-semibold">Quick Links</h3>
          <ul className="space-y-2">
            {quickLinks.map((link, index) => (
              <li key={index}>
                <Link
                  to={link.href}
                  className="text-green-100 hover:text-white transition-colors"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact Info */}
        <div className="flex flex-col space-y-4">
          <h3 className="text-lg font-semibold">Contact Us</h3>
          <div className="space-y-3 text-green-100">
            <div className="flex items-start space-x-3">
              <MapPin size={18} className="mt-1 flex-shrink-0" />
              <span>{address}</span>
            </div>
            <div className="flex items-center space-x-3">
              <Phone size={18} className="flex-shrink-0" />
              <span>{phone}</span>
            </div>
            <div className="flex items-center space-x-3">
              <Mail size={18} className="flex-shrink-0" />
              <span>{email}</span>
            </div>
          </div>
        </div>

        {/* Newsletter */}
        <div className="flex flex-col space-y-4">
          <h3 className="text-lg font-semibold">Newsletter</h3>
          <p className="text-green-100 text-sm">
            Subscribe to receive updates on special offers and events.
          </p>
          <div className="flex flex-col space-y-2">
            <input
              type="email"
              placeholder="Your email address"
              className="px-4 py-2 rounded-md text-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-green-500"
            />
            <Button className="bg-green-600 hover:bg-green-500 text-white">
              Subscribe
            </Button>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="max-w-7xl mx-auto pt-8 mt-8 border-t border-green-700 text-center text-green-200 text-sm">
        <p>
          © {new Date().getFullYear()} Villa Eco Green. All rights reserved.
        </p>
        <div className="flex justify-center space-x-4 mt-2">
          <Link to="/privacy" className="hover:text-white transition-colors">
            Privacy Policy
          </Link>
          <Link to="/terms" className="hover:text-white transition-colors">
            Terms of Service
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
