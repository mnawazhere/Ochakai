import { FaLinkedin } from 'react-icons/fa6';

import Logo from '@/components/layout/logo';
import { EXTERNAL_LINKS } from '@/constants/external-links';

const NAV_LINKS = [
  { label: 'Home', href: '/' },
  { label: 'Services', href: '/services' },
  { label: 'About', href: '/about' },
  { label: 'Journal', href: '/journal' },
  { label: 'Contact', href: '/contact' },
];

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="border-border/60 mt-24 border-t">
      <div className="container py-16 md:py-20">
        <div className="grid gap-14 md:grid-cols-[2fr_1fr_1fr]">
          {/* Brand + tagline */}
          <div>
            <Logo />
            <p
              className="text-muted-foreground mt-6 max-w-sm text-base leading-relaxed"
              lang="en"
            >
              Activating urban connections — one quiet gathering at a time. Based
              in The Hague.
            </p>
            <a
              href={EXTERNAL_LINKS.LINKEDIN}
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-foreground mt-8 inline-flex items-center gap-2 transition-colors"
              aria-label="Ochakai on LinkedIn"
            >
              <FaLinkedin className="size-5" />
              <span className="text-sm">LinkedIn</span>
            </a>
          </div>

          {/* Nav */}
          <div>
            <h3 className="text-muted-foreground mb-4 text-xs font-medium tracking-[0.16em] uppercase">
              Site
            </h3>
            <ul className="space-y-3">
              {NAV_LINKS.map((item) => (
                <li key={item.href}>
                  <a
                    href={item.href}
                    className="text-foreground hover:text-primary text-base transition-colors"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-muted-foreground mb-4 text-xs font-medium tracking-[0.16em] uppercase">
              Get in touch
            </h3>
            <a
              href={EXTERNAL_LINKS.EMAIL}
              className="text-foreground hover:text-primary text-base transition-colors"
            >
              hello@ochakai.com
            </a>
          </div>
        </div>

        {/* Baseline */}
        <div className="border-border/60 mt-16 flex flex-col items-start justify-between gap-3 border-t pt-8 md:flex-row md:items-center">
          <p className="text-muted-foreground text-sm">
            © {year} Ochakai. お茶会. All rights reserved.
          </p>
          <p className="text-muted-foreground text-sm" lang="ja">
            活気あふれる都市の繋がりを
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
