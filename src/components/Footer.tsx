"use client";

import { useState, FormEvent } from "react";
import Link from "next/link";
import { ArrowRight, Check } from "lucide-react";

export default function Footer() {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: FormEvent) => {
    e.preventDefault();
    if (email.trim()) {
      setSubscribed(true);
      setEmail("");
    }
  };

  return (
    <footer className="bg-[#233038] text-white py-20 px-6 border-t border-white/5">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-20">
          <div className="col-span-1 lg:col-span-1">
            <Link
              href="/"
              className="font-headline font-black text-3xl tracking-tighter mb-6 block interactive"
            >
              PROSPIRA
            </Link>
            <p className="text-white/60 mb-8 max-w-xs">
              A premium digital agency specializing in high-performance websites, applications, and future-forward digital products.
            </p>
          </div>
          <div>
            <h4 className="font-headline font-bold text-lg mb-6">Services</h4>
            <ul className="space-y-4">
              <li>
                <Link
                  href="/services"
                  className="text-white/60 hover:text-primary transition-colors interactive"
                >
                  Web Development
                </Link>
              </li>
              <li>
                <Link
                  href="/services"
                  className="text-white/60 hover:text-primary transition-colors interactive"
                >
                  Mobile Applications
                </Link>
              </li>
              <li>
                <Link
                  href="/services"
                  className="text-white/60 hover:text-primary transition-colors interactive"
                >
                  UI/UX Design
                </Link>
              </li>
              <li>
                <Link
                  href="/services"
                  className="text-white/60 hover:text-primary transition-colors interactive"
                >
                  SaaS Platforms
                </Link>
              </li>
              <li>
                <Link
                  href="/services"
                  className="text-white/60 hover:text-primary transition-colors interactive"
                >
                  Game Development
                </Link>
              </li>
              <li>
                <Link
                  href="/services"
                  className="text-white/60 hover:text-primary transition-colors interactive"
                >
                  AI Solutions
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-headline font-bold text-lg mb-6">Agency</h4>
            <ul className="space-y-4">
              <li>
                <Link
                  href="/portfolio"
                  className="text-white/60 hover:text-primary transition-colors interactive"
                >
                  Our Work
                </Link>
              </li>
              <li>
                <Link
                  href="/about"
                  className="text-white/60 hover:text-primary transition-colors interactive"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  href="/process"
                  className="text-white/60 hover:text-primary transition-colors interactive"
                >
                  Our Process
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="text-white/60 hover:text-primary transition-colors interactive"
                >
                  Careers
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="text-white/60 hover:text-primary transition-colors interactive"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-headline font-bold text-lg mb-6">Newsletter</h4>
            <p className="text-white/60 mb-4">
              Stay updated with our latest insights and projects.
            </p>
            <form onSubmit={handleSubscribe} className="flex gap-2">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Email Address"
                required
                className="bg-white/5 border border-white/10 rounded-lg px-4 py-2 flex-grow focus:outline-none focus:border-primary transition-colors text-white placeholder:text-white/40 text-sm interactive"
              />
              <button
                type="submit"
                className="bg-primary text-white p-2 rounded-lg hover:bg-primary/90 transition-colors flex items-center justify-center interactive"
                aria-label="Subscribe to newsletter"
              >
                {subscribed ? <Check size={20} /> : <ArrowRight size={20} />}
              </button>
            </form>
            {subscribed && (
              <p className="text-primary text-xs mt-2">Thank you for subscribing!</p>
            )}
          </div>
        </div>
        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4 text-white/40 text-sm">
          <p>© 2026 Team Prospira. All rights reserved.</p>
          <div className="flex gap-8">
            <Link href="#" className="hover:text-white transition-colors interactive">
              Privacy Policy
            </Link>
            <Link href="#" className="hover:text-white transition-colors interactive">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

