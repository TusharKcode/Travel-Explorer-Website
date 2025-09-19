import React, { useState, useEffect } from 'react';
import '../styles/Footer.css';

import FacebookIcon from '@mui/icons-material/Facebook';
import XIcon from '@mui/icons-material/X';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import Skeleton from '@mui/material/Skeleton';

export default function Footer() {
  const [loading, setLoading] = useState(true);
  const [footerData, setFooterData] = useState(null);

  useEffect(() => {
    const fetchFooter = async () => {
      try {
        const res = await fetch("/data/footer.json");
        const data = await res.json();
        setFooterData(data);
        setLoading(false);
      } catch (error) {
        console.error("Failed to load footer data: ", error);
      }
    };
    fetchFooter();
  }, []);

  return (
    <footer className="footer">
      <div className="footer-container">
        {loading ? (
          <>
            {/* Brand Skeleton */}
            <div className="footer-brand">
              <Skeleton width="40%" height={40} style={{ marginBottom: "10px" }} />
              <Skeleton width="60%" height={20} />
            </div>

            {/* Links Skeleton */}
            <div className="footer-links">
              <Skeleton width="30%" height={25} style={{ marginBottom: "10px" }} />
              <Skeleton width="70%" height={20} style={{ marginBottom: "5px" }} />
              <Skeleton width="60%" height={20} style={{ marginBottom: "5px" }} />
              <Skeleton width="65%" height={20} />
            </div>

            {/* Social Media Skeleton */}
            <div className="footer-social">
              <Skeleton width="30%" height={25} style={{ marginBottom: "10px" }} />
              <div className="social-icons">
                <Skeleton variant="circular" width={40} height={40} style={{ marginRight: "10px" }} />
                <Skeleton variant="circular" width={40} height={40} style={{ marginRight: "10px" }} />
                <Skeleton variant="circular" width={40} height={40} style={{ marginRight: "10px" }} />
                <Skeleton variant="circular" width={40} height={40} />
              </div>
            </div>

            {/* Bottom Skeleton */}
            <div className="footer-bottom">
              <Skeleton width="80%" height={20} />
            </div>
          </>
        ) : (
          <>
            {/* Brand */}
            <div className="footer-brand" data-aos="fade-up">
              <h2>{footerData.brandName}</h2>
              <p>{footerData.tagline}</p>
            </div>

            {/* Quick Links */}
            <div className="footer-links" data-aos="fade-up" data-aos-delay="200">
              <h3>{footerData.linksTitle}</h3>
              <ul>
                {footerData.quickLinks.map((link, index) => (
                  <li key={index}>
                    <a href={link.href}>{link.text}</a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Social Media */}
            <div className="footer-social" data-aos="fade-up" data-aos-delay="400">
              <h3>{footerData.socialTitle}</h3>
              <div className="social-icons">
                {footerData.socials.facebook && (
                  <a href={footerData.socials.facebook}><FacebookIcon /></a>
                )}
                {footerData.socials.twitter && (
                  <a href={footerData.socials.twitter}><XIcon /></a>
                )}
                {footerData.socials.instagram && (
                  <a href={footerData.socials.instagram}><InstagramIcon /></a>
                )}
                {footerData.socials.linkedin && (
                  <a href={footerData.socials.linkedin}><LinkedInIcon /></a>
                )}
              </div>
            </div>

            {/* Bottom */}
            <div className="footer-bottom">
              <p>© {new Date().getFullYear()} {footerData.brandName}. All Rights Reserved.</p>
            </div>
          </>
        )}
      </div>
    </footer>
  );
}
