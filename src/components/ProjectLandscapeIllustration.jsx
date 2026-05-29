import React from 'react';

/**
 * ProjectLandscapeIllustration
 * Renders custom, simple, borderless landscape illustrations (2:1 aspect ratio)
 * tailored for each project using the forest-green palette (#2E7D32, #4CAF50).
 */
export default function ProjectLandscapeIllustration({ projectName }) {
  const name = projectName ? projectName.toLowerCase() : '';

  // 1. Popseekl (Social Commerce)
  if (name.includes('popseekl')) {
    return (
      <svg className="project-illustration-svg" viewBox="0 0 320 160" width="100%" height="100%" fill="none" xmlns="http://www.w3.org/2000/svg">
        {/* Background clean elements */}
        <circle cx="80" cy="80" r="50" fill="#E8F5E9" opacity="0.6" />
        
        {/* Floating Hearts & Speech Bubbles on the left */}
        <g transform="translate(40, 40)">
          <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" fill="#4CAF50" opacity="0.8" transform="scale(0.8)" />
        </g>
        <g transform="translate(65, 85)">
          <rect width="50" height="24" rx="8" fill="#FFFFFF" stroke="#2E7D32" strokeWidth="1.5" />
          <text x="10" y="16" fill="#2E7D32" fontSize="9" fontWeight="bold">LIVE ✦</text>
        </g>

        {/* Smartphone on the right */}
        <g transform="translate(180, 15)">
          {/* Phone Body */}
          <rect width="76" height="130" rx="14" fill="#FFFFFF" stroke="#2E7D32" strokeWidth="3" />
          <rect x="3" y="3" width="70" height="124" rx="11" fill="#F8FAF7" />
          
          {/* Phone Camera Notch */}
          <rect x="26" y="6" width="24" height="4" rx="2" fill="#2E7D32" />
          
          {/* Creator Live Video Area */}
          <rect x="8" y="16" width="60" height="60" rx="6" fill="#E8F5E9" />
          <circle cx="38" cy="46" r="14" fill="#2E7D32" opacity="0.15" />
          <circle cx="38" cy="42" r="8" fill="#2E7D32" opacity="0.3" />
          
          {/* Shopping Product Row */}
          <rect x="8" y="82" width="60" height="20" rx="4" fill="#FFFFFF" stroke="#ECEFF1" strokeWidth="1" />
          <circle cx="18" cy="92" r="6" fill="#4CAF50" />
          <rect x="28" y="88" width="22" height="3" rx="1.5" fill="#2E7D32" />
          <rect x="28" y="93" width="14" height="2" rx="1" fill="#81C784" />
          
          {/* Action Buy Button */}
          <rect x="8" y="106" width="60" height="14" rx="4" fill="#2E7D32" />
          <rect x="23" y="111" width="30" height="3" rx="1.5" fill="#FFFFFF" />
        </g>
      </svg>
    );
  }

  // 2. Now - Customer (On-Demand Booking & WhatsApp)
  if (name.includes('now') && name.includes('customer')) {
    return (
      <svg className="project-illustration-svg" viewBox="0 0 320 160" width="100%" height="100%" fill="none" xmlns="http://www.w3.org/2000/svg">
        {/* Background simple waves */}
        <path d="M20 120 C 60 140, 120 100, 180 130 C 240 160, 280 120, 300 130" stroke="#E8F5E9" strokeWidth="3" strokeLinecap="round" opacity="0.8" />
        
        {/* Left Side: Dynamic Whatsapp bubble + slots */}
        <g transform="translate(30, 25)">
          {/* WhatsApp style box */}
          <rect width="110" height="42" rx="12" fill="#FFFFFF" stroke="#4CAF50" strokeWidth="1.5" />
          <circle cx="20" cy="21" r="10" fill="#4CAF50" />
          {/* Mini speech tick */}
          <path d="M9 21 L13 25 L21 17" stroke="#FFFFFF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          <rect x="36" y="13" width="60" height="4" rx="2" fill="#2E7D32" />
          <rect x="36" y="21" width="40" height="3" rx="1.5" fill="#81C784" />
          <rect x="36" y="27" width="48" height="2" rx="1" fill="#ECEFF1" />
        </g>
        
        <g transform="translate(30, 78)">
          {/* Time schedule card */}
          <rect width="110" height="52" rx="12" fill="#F8FAF7" stroke="#ECEFF1" strokeWidth="1" />
          <rect x="10" y="10" width="42" height="14" rx="4" fill="#2E7D32" />
          <rect x="56" y="10" width="44" height="14" rx="4" fill="#E8F5E9" />
          <rect x="10" y="29" width="90" height="3" rx="1.5" fill="#ECEFF1" />
          <rect x="10" y="37" width="50" height="3" rx="1.5" fill="#81C784" />
        </g>

        {/* Right Side: Elegant Customer Checkout App screen */}
        <g transform="translate(185, 15)">
          <rect width="76" height="130" rx="14" fill="#FFFFFF" stroke="#2E7D32" strokeWidth="3" />
          <rect x="3" y="3" width="70" height="124" rx="11" fill="#F8FAF7" />
          
          {/* Header */}
          <rect x="15" y="12" width="46" height="6" rx="3" fill="#2E7D32" />
          
          {/* Map/Booking visual card */}
          <rect x="8" y="26" width="60" height="40" rx="6" fill="#E8F5E9" />
          <circle cx="38" cy="46" r="8" fill="#2E7D32" opacity="0.3" />
          <circle cx="38" cy="46" r="3" fill="#2E7D32" />
          
          {/* Options */}
          <rect x="8" y="74" width="60" height="12" rx="3" fill="#FFFFFF" stroke="#ECEFF1" strokeWidth="1" />
          <circle cx="14" cy="80" r="3" fill="#4CAF50" />
          <rect x="22" y="78" width="36" height="3" rx="1.5" fill="#2E7D32" />

          <rect x="8" y="90" width="60" height="12" rx="3" fill="#FFFFFF" stroke="#ECEFF1" strokeWidth="1" />
          <circle cx="14" cy="96" r="3" fill="#ECEFF1" />
          <rect x="22" y="94" width="28" height="3" rx="1.5" fill="#81C784" />

          {/* Book Now trigger */}
          <rect x="8" y="108" width="60" height="14" rx="4" fill="#2E7D32" />
          <rect x="24" y="113" width="28" height="3" rx="1.5" fill="#FFFFFF" />
        </g>
      </svg>
    );
  }

  // 3. Now - Merchant (B2B SaaS dashboard)
  if (name.includes('now') && name.includes('merchant')) {
    return (
      <svg className="project-illustration-svg" viewBox="0 0 320 160" width="100%" height="100%" fill="none" xmlns="http://www.w3.org/2000/svg">
        {/* Background Grid */}
        <circle cx="240" cy="80" r="60" fill="#E8F5E9" opacity="0.5" />
        
        {/* Left Side: Merchant Analytics / Graph card */}
        <g transform="translate(25, 20)">
          <rect width="130" height="120" rx="16" fill="#FFFFFF" stroke="#ECEFF1" strokeWidth="1" />
          {/* Header */}
          <rect x="12" y="12" width="60" height="5" rx="2.5" fill="#2E7D32" />
          <rect x="12" y="21" width="30" height="3" rx="1.5" fill="#81C784" />
          
          {/* Chart lines */}
          <g transform="translate(12, 40)">
            <line x1="0" y1="60" x2="106" y2="60" stroke="#ECEFF1" strokeWidth="1" />
            <line x1="0" y1="40" x2="106" y2="40" stroke="#ECEFF1" strokeWidth="1" />
            <line x1="0" y1="20" x2="106" y2="20" stroke="#ECEFF1" strokeWidth="1" />
            
            {/* Bar Charts in green gradient styles */}
            <rect x="10" y="15" width="10" height="45" rx="2" fill="#2E7D32" />
            <rect x="30" y="30" width="10" height="30" rx="2" fill="#4CAF50" />
            <rect x="50" y="8" width="10" height="52" rx="2" fill="#2E7D32" />
            <rect x="70" y="25" width="10" height="35" rx="2" fill="#81C784" />
            <rect x="90" y="42" width="10" height="18" rx="2" fill="#E8F5E9" stroke="#4CAF50" strokeWidth="1" />
          </g>
        </g>
        
        {/* Right Side: Merchant booking scheduler mockup */}
        <g transform="translate(175, 20)">
          <rect width="120" height="120" rx="16" fill="#F8FAF7" stroke="#2E7D32" strokeWidth="1.5" />
          
          {/* Title */}
          <rect x="12" y="12" width="45" height="5" rx="2.5" fill="#2E7D32" />
          
          {/* List items with green checkmarks */}
          <g transform="translate(12, 30)">
            {/* Item 1 */}
            <rect width="96" height="24" rx="6" fill="#FFFFFF" stroke="#ECEFF1" strokeWidth="1" />
            <circle cx="12" cy="12" r="5" fill="#2E7D32" />
            <path d="M10 12 L12 14 L15 10" stroke="#FFFFFF" strokeWidth="1.5" strokeLinecap="round" />
            <rect x="24" y="8" width="44" height="3" rx="1.5" fill="#2E7D32" />
            <rect x="24" y="13" width="28" height="2.5" rx="1" fill="#81C784" />
            
            {/* Item 2 */}
            <rect y="30" width="96" height="24" rx="6" fill="#FFFFFF" stroke="#ECEFF1" strokeWidth="1" />
            <circle cx="12" cy="42" r="5" fill="#4CAF50" />
            <path d="M10 42 L12 44 L15 40" stroke="#FFFFFF" strokeWidth="1.5" strokeLinecap="round" />
            <rect x="24" y="38" width="50" height="3" rx="1.5" fill="#2E7D32" />
            <rect x="24" y="43" width="36" height="2.5" rx="1" fill="#81C784" />

            {/* Item 3 */}
            <rect y="60" width="96" height="24" rx="6" fill="#FFFFFF" stroke="#ECEFF1" strokeWidth="1" opacity="0.7" />
            <circle cx="12" cy="72" r="5" fill="#E8F5E9" stroke="#81C784" strokeWidth="1" />
            <rect x="24" y="68" width="30" height="3" rx="1.5" fill="#ECEFF1" />
            <rect x="24" y="73" width="40" height="2" rx="1" fill="#ECEFF1" />
          </g>
        </g>
      </svg>
    );
  }

  // 4. She Who Wins (Mystic Tarot video calling)
  if (name.includes('wins') || name.includes('she')) {
    return (
      <svg className="project-illustration-svg" viewBox="0 0 320 160" width="100%" height="100%" fill="none" xmlns="http://www.w3.org/2000/svg">
        {/* Spiritual backdrop, stars and orbits */}
        <circle cx="160" cy="80" r="70" stroke="#E8F5E9" strokeWidth="1" strokeDasharray="3 3" />
        
        {/* Floating Stars */}
        <g fill="#4CAF50">
          <path d="M80 30L82 35L87 35L83 38L85 43L80 40L75 43L77 38L73 35L78 35Z" opacity="0.6" />
          <path d="M240 120L242 125L247 125L243 128L245 133L240 130L235 133L237 128L233 125L238 125Z" opacity="0.6" />
          <path d="M60 110L61 113L64 113L62 115L63 118L60 116L57 118L58 115L56 113L59 113Z" opacity="0.4" />
        </g>

        {/* Three floating Glassmorphic Tarot cards */}
        <g transform="translate(30, 35)">
          {/* Card 1 - The Sun/Star */}
          <rect x="0" y="10" width="46" height="74" rx="8" fill="#FFFFFF" stroke="#2E7D32" strokeWidth="1.5" transform="rotate(-8)" style={{ filter: 'drop-shadow(0 4px 10px rgba(46,125,50,0.08))' }} />
          <circle cx="23" cy="40" r="10" fill="#E8F5E9" stroke="#4CAF50" strokeWidth="1" transform="rotate(-8)" />
          <line x1="23" y1="26" x2="23" y2="54" stroke="#2E7D32" strokeWidth="1" transform="rotate(-8)" />
          <line x1="9" y1="40" x2="37" y2="40" stroke="#2E7D32" strokeWidth="1" transform="rotate(-8)" />
        </g>

        <g transform="translate(90, 25)">
          {/* Card 2 - Center Major Card */}
          <rect width="48" height="78" rx="8" fill="#FFFFFF" stroke="#2E7D32" strokeWidth="2" style={{ filter: 'drop-shadow(0 6px 15px rgba(46,125,50,0.12))' }} />
          <rect x="4" y="4" width="40" height="70" rx="5" fill="#F8FAF7" />
          <circle cx="24" cy="39" r="12" fill="#E8F5E9" />
          {/* Crescent Moon */}
          <path d="M21 33 A 8 8 0 0 0 29 45 A 9 9 0 0 1 23 33 Z" fill="#2E7D32" />
          <rect x="14" y="58" width="20" height="3" rx="1.5" fill="#4CAF50" />
          <rect x="19" y="65" width="10" height="2" rx="1" fill="#81C784" />
        </g>

        {/* Call screen overlay on the right */}
        <g transform="translate(180, 25)">
          {/* Smartphone Video screen */}
          <rect width="100" height="74" rx="12" fill="#FFFFFF" stroke="#2E7D32" strokeWidth="1.5" />
          <rect x="3" y="3" width="94" height="68" rx="9" fill="#E8F5E9" />
          
          {/* User video outlines */}
          <circle cx="30" cy="34" r="14" fill="#2E7D32" opacity="0.2" />
          <circle cx="30" cy="28" r="7" fill="#2E7D32" opacity="0.3" />
          
          <circle cx="70" cy="42" r="10" fill="#4CAF50" opacity="0.2" />
          <circle cx="70" cy="38" r="5" fill="#4CAF50" opacity="0.4" />
          
          {/* Pulse/Connect indicators */}
          <rect x="35" y="56" width="30" height="8" rx="4" fill="#2E7D32" />
          <circle cx="41" cy="60" r="2" fill="#FFFFFF" />
          <circle cx="50" cy="60" r="2" fill="#FFFFFF" />
          <circle cx="59" cy="60" r="2" fill="#FFFFFF" />
        </g>
      </svg>
    );
  }

  // 5. Joova (Sports School Booking)
  if (name.includes('joova')) {
    return (
      <svg className="project-illustration-svg" viewBox="0 0 320 160" width="100%" height="100%" fill="none" xmlns="http://www.w3.org/2000/svg">
        {/* Tennis court layout subtle background lines */}
        <rect x="20" y="20" width="280" height="120" rx="8" stroke="#E8F5E9" strokeWidth="1.5" />
        <line x1="160" y1="20" x2="160" y2="140" stroke="#E8F5E9" strokeWidth="1.5" />
        
        {/* Left Side: Dynamic reservation grid calendar */}
        <g transform="translate(35, 30)">
          <rect width="120" height="96" rx="12" fill="#FFFFFF" stroke="#ECEFF1" strokeWidth="1" />
          <rect x="10" y="10" width="50" height="5" rx="2.5" fill="#2E7D32" />
          
          {/* Calendar grid boxes */}
          <g transform="translate(10, 24)">
            {/* Row 1 */}
            <rect width="18" height="18" rx="4" fill="#E8F5E9" stroke="#4CAF50" strokeWidth="1" />
            <rect x="24" y="0" width="18" height="18" rx="4" fill="#F4F6F8" />
            <rect x="48" y="0" width="18" height="18" rx="4" fill="#2E7D32" />
            <rect x="72" y="0" width="18" height="18" rx="4" fill="#F4F6F8" />
            <rect x="96" y="0" width="18" height="18" rx="4" fill="#E8F5E9" />
            
            {/* Row 2 */}
            <rect y="24" width="18" height="18" rx="4" fill="#F4F6F8" />
            <rect x="24" y="24" width="18" height="18" rx="4" fill="#4CAF50" />
            <rect x="48" y="24" width="18" height="18" rx="4" fill="#F4F6F8" />
            <rect x="72" y="24" width="18" height="18" rx="4" fill="#2E7D32" />
            <rect x="96" y="24" width="18" height="18" rx="4" fill="#F4F6F8" />
            
            {/* Dot indicators in boxes */}
            <circle cx="57" cy="9" r="2.5" fill="#FFFFFF" />
            <circle cx="33" cy="33" r="2.5" fill="#FFFFFF" />
            <circle cx="81" cy="33" r="2.5" fill="#FFFFFF" />
          </g>
        </g>
        
        {/* Right Side: Crossed Rackets and Tennis ball illustration */}
        <g transform="translate(195, 30)">
          {/* Stylized circular rackets */}
          <circle cx="35" cy="50" r="24" stroke="#2E7D32" strokeWidth="2.5" fill="#FFFFFF" />
          <line x1="35" y1="74" x2="35" y2="102" stroke="#2E7D32" strokeWidth="3" strokeLinecap="round" />
          <line x1="32" y1="102" x2="38" y2="102" stroke="#2E7D32" strokeWidth="2" />
          
          {/* Diagonal racket outline behind */}
          <circle cx="65" cy="40" r="20" stroke="#81C784" strokeWidth="2" opacity="0.6" />
          <line x1="65" y1="60" x2="85" y2="85" stroke="#81C784" strokeWidth="2.5" strokeLinecap="round" opacity="0.6" />
          
          {/* Cute green Tennis Ball */}
          <circle cx="55" cy="74" r="7" fill="#4CAF50" />
          <path d="M50 74 A 5 5 0 0 1 60 74" stroke="#FFFFFF" strokeWidth="1" fill="none" />
        </g>
      </svg>
    );
  }

  // 6. Joven (Health & Wellness age bio-ring)
  if (name.includes('joven')) {
    return (
      <svg className="project-illustration-svg" viewBox="0 0 320 160" width="100%" height="100%" fill="none" xmlns="http://www.w3.org/2000/svg">
        {/* Background wellness concentric pulses */}
        <circle cx="160" cy="80" r="68" stroke="#E8F5E9" strokeWidth="1" />
        <circle cx="160" cy="80" r="54" stroke="#E8F5E9" strokeWidth="1.5" />
        
        {/* Left Side: HealthKit dynamic graph values */}
        <g transform="translate(25, 30)">
          <rect width="90" height="96" rx="14" fill="#FFFFFF" stroke="#ECEFF1" strokeWidth="1" />
          <circle cx="22" cy="24" r="10" fill="#E8F5E9" />
          {/* Heart icon */}
          <path d="M19 22 C19 20 22 20 22 22 C22 20 25 20 25 22 C25 24 22 26 22 26 C22 26 19 24 19 22 Z" fill="#2E7D32" transform="scale(0.8) translate(5, 5)" />
          
          <rect x="38" y="18" width="40" height="4" rx="2" fill="#2E7D32" />
          <rect x="38" y="26" width="26" height="3" rx="1.5" fill="#81C784" />
          
          {/* Mini pulse wave */}
          <path d="M12 70 L30 70 L35 55 L40 85 L45 65 L50 72 L55 70 L78 70" stroke="#4CAF50" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          <rect x="12" y="82" width="66" height="3" rx="1.5" fill="#ECEFF1" />
        </g>
        
        {/* Center: The Biolgical Age circular progress dial */}
        <g transform="translate(125, 20)">
          <circle cx="60" cy="60" r="42" stroke="#ECEFF1" strokeWidth="6" />
          {/* Active green ring path */}
          <circle cx="60" cy="60" r="42" stroke="#2E7D32" strokeWidth="6" strokeDasharray="263" strokeDashoffset="65" strokeLinecap="round" transform="rotate(-90 60 60)" />
          
          {/* Text inside Ring */}
          <text x="60" y="56" textAnchor="middle" fill="#2E7D32" fontSize="14" fontWeight="800">-4.2</text>
          <text x="60" y="68" textAnchor="middle" fill="#81C784" fontSize="8" fontWeight="bold" letterSpacing="0.5">YEARS</text>
          <text x="60" y="78" textAnchor="middle" fill="#1B1F1D" fontSize="6" fontWeight="bold">BIO AGE</text>
        </g>

        {/* Right Side: DNA double-helix illustration */}
        <g transform="translate(245, 30)">
          <line x1="10" y1="10" x2="30" y2="90" stroke="#ECEFF1" strokeWidth="1.5" />
          <line x1="30" y1="10" x2="10" y2="90" stroke="#ECEFF1" strokeWidth="1.5" />
          
          {/* Connecting rungs */}
          <line x1="14" y1="26" x2="26" y2="26" stroke="#4CAF50" strokeWidth="2" />
          <line x1="17" y1="38" x2="23" y2="38" stroke="#2E7D32" strokeWidth="2" />
          <line x1="20" y1="50" x2="20" y2="50" stroke="#81C784" strokeWidth="2" />
          <line x1="17" y1="62" x2="23" y2="62" stroke="#2E7D32" strokeWidth="2" />
          <line x1="14" y1="74" x2="26" y2="74" stroke="#4CAF50" strokeWidth="2" />
          
          {/* Dots */}
          <circle cx="10" cy="10" r="4" fill="#2E7D32" />
          <circle cx="30" cy="10" r="4" fill="#4CAF50" />
          <circle cx="14" cy="26" r="3.5" fill="#4CAF50" />
          <circle cx="26" cy="26" r="3.5" fill="#2E7D32" />
          <circle cx="30" cy="90" r="4" fill="#2E7D32" />
          <circle cx="10" cy="90" r="4" fill="#4CAF50" />
        </g>
      </svg>
    );
  }

  // 7. Vivian Labs (FemTech healthcare)
  if (name.includes('vivian')) {
    return (
      <svg className="project-illustration-svg" viewBox="0 0 320 160" width="100%" height="100%" fill="none" xmlns="http://www.w3.org/2000/svg">
        {/* Soft layout curves */}
        <path d="M10 140 Q 90 20, 160 80 T 310 140" stroke="#E8F5E9" strokeWidth="4" fill="none" />
        
        {/* Left Side: Calm health cycle waves */}
        <g transform="translate(30, 30)">
          <rect width="110" height="96" rx="14" fill="#FFFFFF" stroke="#ECEFF1" strokeWidth="1" />
          <rect x="12" y="12" width="60" height="5" rx="2.5" fill="#2E7D32" />
          
          {/* Cycle wave graphs */}
          <path d="M12 65 Q 35 45, 55 65 T 98 65" stroke="#4CAF50" strokeWidth="3" fill="none" strokeLinecap="round" />
          <circle cx="55" cy="65" r="5" fill="#2E7D32" />
          
          <rect x="12" y="82" width="86" height="3" rx="1.5" fill="#E8F5E9" />
          <rect x="12" y="88" width="56" height="2" rx="1" fill="#81C784" />
        </g>
        
        {/* Right Side: Doctor Video feed card + chat */}
        <g transform="translate(180, 20)">
          <rect width="110" height="110" rx="16" fill="#F8FAF7" stroke="#2E7D32" strokeWidth="1.5" />
          
          {/* Doctor Video frame */}
          <rect x="10" y="10" width="90" height="56" rx="8" fill="#E8F5E9" />
          <circle cx="55" cy="38" r="12" fill="#2E7D32" opacity="0.25" />
          <path d="M43 56 C 43 48, 67 48, 67 56 Z" fill="#2E7D32" opacity="0.35" />
          <circle cx="90" cy="18" r="3.5" fill="#4CAF50" /> {/* Online indicator */}
          
          {/* Active medical tag */}
          <g transform="translate(10, 74)">
            <rect width="90" height="24" rx="6" fill="#FFFFFF" stroke="#ECEFF1" strokeWidth="1" />
            <circle cx="12" cy="12" r="5" fill="#4CAF50" />
            <rect x="22" y="8" width="46" height="3" rx="1.5" fill="#2E7D32" />
            <rect x="22" y="13" width="30" height="2.5" rx="1" fill="#81C784" />
          </g>
        </g>
      </svg>
    );
  }

  // 8. RSA (Road Side Assistant map navigation)
  if (name.includes('rsa') || name.includes('road')) {
    return (
      <svg className="project-illustration-svg" viewBox="0 0 320 160" width="100%" height="100%" fill="none" xmlns="http://www.w3.org/2000/svg">
        {/* Grid map pattern */}
        <g stroke="#ECEFF1" strokeWidth="1" strokeDasharray="4 4" opacity="0.8">
          <line x1="40" y1="0" x2="40" y2="160" />
          <line x1="120" y1="0" x2="120" y2="160" />
          <line x1="200" y1="0" x2="200" y2="160" />
          <line x1="280" y1="0" x2="280" y2="160" />
          <line x1="0" y1="40" x2="320" y2="40" />
          <line x1="0" y1="100" x2="320" y2="100" />
        </g>

        {/* Minimalist Map Road curves */}
        <path d="M40 140 C 100 140, 100 50, 180 50 C 260 50, 260 110, 300 110" stroke="#ECEFF1" strokeWidth="8" strokeLinecap="round" />
        {/* Active route path highlight in green */}
        <path d="M80 140 C 100 140, 100 50, 180 50 C 220 50, 230 75, 250 80" stroke="#4CAF50" strokeWidth="4" strokeLinecap="round" />

        {/* Start Point Target Marker */}
        <circle cx="80" cy="140" r="10" fill="#E8F5E9" />
        <circle cx="80" cy="140" r="5" fill="#4CAF50" />
        
        {/* Mechanic Live Location Ping */}
        <g transform="translate(170, 20)">
          <circle cx="10" cy="30" r="12" fill="#E8F5E9" opacity="0.8" />
          <circle cx="10" cy="30" r="6" fill="#2E7D32" />
          <path d="M10 18 L10 10" stroke="#2E7D32" strokeWidth="1.5" />
          {/* Small flag */}
          <path d="M10 10 L18 13 L10 16 Z" fill="#2E7D32" />
        </g>

        {/* Towing Truck floating outline on the left */}
        <g transform="translate(30, 25)">
          <rect width="66" height="38" rx="8" fill="#FFFFFF" stroke="#2E7D32" strokeWidth="1.5" style={{ filter: 'drop-shadow(0 4px 10px rgba(46,125,50,0.08))' }} />
          <rect x="6" y="10" width="18" height="18" rx="3" fill="#E8F5E9" />
          <rect x="28" y="10" width="32" height="6" rx="2" fill="#2E7D32" />
          <rect x="28" y="20" width="20" height="3" rx="1.5" fill="#81C784" />
        </g>

        {/* Speedometer widget on the right */}
        <g transform="translate(225, 85)">
          <rect width="70" height="50" rx="10" fill="#FFFFFF" stroke="#2E7D32" strokeWidth="1.5" style={{ filter: 'drop-shadow(0 4px 10px rgba(46,125,50,0.08))' }} />
          <text x="35" y="24" textAnchor="middle" fill="#2E7D32" fontSize="11" fontWeight="800">12 MIN</text>
          <text x="35" y="38" textAnchor="middle" fill="#81C784" fontSize="8" fontWeight="bold">ETA DIST</text>
        </g>
      </svg>
    );
  }

  // 9. DropCrew (Sneaker marketplace & bids)
  if (name.includes('drop') || name.includes('crew') && !name.includes('lux')) {
    return (
      <svg className="project-illustration-svg" viewBox="0 0 320 160" width="100%" height="100%" fill="none" xmlns="http://www.w3.org/2000/svg">
        {/* Concentric designer backdrop rings */}
        <ellipse cx="160" cy="90" rx="90" ry="34" stroke="#E8F5E9" strokeWidth="2" />
        <ellipse cx="160" cy="90" rx="70" ry="24" stroke="#E8F5E9" strokeWidth="1" />
        
        {/* Floating Bid Cards left and right */}
        <g transform="translate(25, 20)">
          <rect width="66" height="42" rx="10" fill="#FFFFFF" stroke="#ECEFF1" strokeWidth="1" />
          <text x="10" y="18" fill="#81C784" fontSize="8" fontWeight="bold">BID RATE</text>
          <text x="10" y="32" fill="#2E7D32" fontSize="12" fontWeight="800">$220</text>
        </g>
        
        <g transform="translate(230, 95)">
          <rect width="66" height="42" rx="10" fill="#FFFFFF" stroke="#2E7D32" strokeWidth="1.5" />
          <text x="10" y="18" fill="#2E7D32" fontSize="8" fontWeight="bold">BUY NOW</text>
          <text x="10" y="32" fill="#4CAF50" fontSize="12" fontWeight="800">$250</text>
        </g>

        {/* Clean, Vector Sneaker illustration centered */}
        <g transform="translate(100, 30)">
          {/* Main Sneaker Body Silhouette */}
          <path d="M10 50 C20 45, 30 35, 45 35 C55 35, 70 50, 90 52 C102 53, 115 48, 120 54 C122 56, 120 72, 112 75 C80 82, 30 82, 12 70 C7 67, 7 52, 10 50 Z" stroke="#2E7D32" strokeWidth="3" fill="#FFFFFF" strokeLinejoin="round" />
          
          {/* Sneaker Sole outline */}
          <path d="M9 72 C25 80, 80 82, 115 74 L114 78 C90 84, 25 83, 8 76 Z" fill="#4CAF50" />
          
          {/* Designer details, Swoosh-like stripe */}
          <path d="M44 44 Q 65 48, 88 64" stroke="#2E7D32" strokeWidth="2.5" fill="none" strokeLinecap="round" />
          
          {/* Front toe guard */}
          <path d="M12 60 A 10 10 0 0 1 20 70" stroke="#81C784" strokeWidth="1.5" fill="none" />
          
          {/* Lacing Lines */}
          <line x1="42" y1="36" x2="36" y2="44" stroke="#2E7D32" strokeWidth="2.5" strokeLinecap="round" />
          <line x1="48" y1="39" x2="42" y2="47" stroke="#2E7D32" strokeWidth="2.5" strokeLinecap="round" />
          <line x1="54" y1="42" x2="48" y2="50" stroke="#2E7D32" strokeWidth="2.5" strokeLinecap="round" />
        </g>
      </svg>
    );
  }

  // 10. LuxCrew (Salon Scheduling & beauty cards)
  if (name.includes('lux') || name.includes('beauty')) {
    return (
      <svg className="project-illustration-svg" viewBox="0 0 320 160" width="100%" height="100%" fill="none" xmlns="http://www.w3.org/2000/svg">
        {/* Background beauty concentric arches */}
        <path d="M60 140 A 100 100 0 0 1 260 140" stroke="#E8F5E9" strokeWidth="1.5" />
        <path d="M90 140 A 70 70 0 0 1 230 140" stroke="#E8F5E9" strokeWidth="1" />
        
        {/* Left Side: Salon styling tools outline */}
        <g transform="translate(45, 30)">
          {/* Scissors outlines */}
          <circle cx="20" cy="80" r="7" stroke="#4CAF50" strokeWidth="2" />
          <circle cx="34" cy="80" r="7" stroke="#4CAF50" strokeWidth="2" />
          <line x1="22" y1="73" x2="30" y2="40" stroke="#2E7D32" strokeWidth="2" strokeLinecap="round" />
          <line x1="32" y1="73" x2="24" y2="40" stroke="#2E7D32" strokeWidth="2" strokeLinecap="round" />
          
          {/* Hair comb details */}
          <rect x="52" y="42" width="8" height="46" rx="2" fill="#E8F5E9" stroke="#81C784" strokeWidth="1" />
          <line x1="52" y1="48" x2="60" y2="48" stroke="#81C784" strokeWidth="1" />
          <line x1="52" y1="54" x2="60" y2="54" stroke="#81C784" strokeWidth="1" />
          <line x1="52" y1="60" x2="60" y2="60" stroke="#81C784" strokeWidth="1" />
          <line x1="52" y1="66" x2="60" y2="66" stroke="#81C784" strokeWidth="1" />
          <line x1="52" y1="72" x2="60" y2="72" stroke="#81C784" strokeWidth="1" />
          <line x1="52" y1="78" x2="60" y2="78" stroke="#81C784" strokeWidth="1" />
        </g>
        
        {/* Right Side: Stylist active card slot details */}
        <g transform="translate(165, 25)">
          <rect width="115" height="106" rx="14" fill="#FFFFFF" stroke="#2E7D32" strokeWidth="1.5" style={{ filter: 'drop-shadow(0 4px 12px rgba(46,125,50,0.08))' }} />
          
          {/* Profile and stars */}
          <circle cx="22" cy="24" r="10" fill="#E8F5E9" />
          <circle cx="22" cy="20" r="5" fill="#4CAF50" />
          <path d="M14 31 Q 22 26, 30 31" stroke="#4CAF50" strokeWidth="1.5" strokeLinecap="round" fill="none" />
          
          <rect x="38" y="16" width="46" height="4" rx="2" fill="#2E7D32" />
          <rect x="38" y="24" width="28" height="3" rx="1.5" fill="#81C784" />
          
          {/* Star ratings */}
          <g fill="#4CAF50" transform="translate(38, 32)">
            <path d="M3.5 0 L4.5 2.5 L7 2.5 L5 4 L6 6.5 L3.5 5 L1 6.5 L2 4 L0 2.5 L2.5 2.5 Z" />
            <path d="M11.5 0 L12.5 2.5 L15 2.5 L13 4 L14 6.5 L11.5 5 L9 6.5 L10 4 L8 2.5 L10.5 2.5 Z" />
            <path d="M19.5 0 L20.5 2.5 L23 2.5 L21 4 L22 6.5 L19.5 5 L17 6.5 L18 4 L16 2.5 L18.5 2.5 Z" />
            <path d="M27.5 0 L28.5 2.5 L31 2.5 L29 4 L30 6.5 L27.5 5 L25 6.5 L26 4 L24 2.5 L26.5 2.5 Z" />
          </g>

          <line x1="12" y1="46" x2="103" y2="46" stroke="#ECEFF1" strokeWidth="1" />
          
          {/* Reservation Times slots */}
          <g transform="translate(10, 56)">
            {/* Slot A */}
            <rect width="45" height="18" rx="4" fill="#2E7D32" />
            <rect x="10" y="7" width="25" height="4" rx="2" fill="#FFFFFF" />
            
            {/* Slot B */}
            <rect x="50" width="45" height="18" rx="4" fill="#E8F5E9" stroke="#4CAF50" strokeWidth="1" />
            <rect x="60" y="7" width="25" height="4" rx="2" fill="#4CAF50" />

            {/* Active Book Button */}
            <rect y="24" width="95" height="16" rx="4" fill="#4CAF50" />
            <rect x="32" y="30" width="30" height="4" rx="2" fill="#FFFFFF" />
          </g>
        </g>
      </svg>
    );
  }

  // Fallback beautiful generic landscape vector pattern in forest-green theme
  return (
    <svg className="project-illustration-svg" viewBox="0 0 320 160" width="100%" height="100%" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="160" cy="80" r="50" fill="#E8F5E9" opacity="0.6" />
      <rect x="60" y="40" width="200" height="80" rx="8" stroke="#2E7D32" strokeWidth="2" />
      <line x1="60" y1="80" x2="260" y2="80" stroke="#4CAF50" strokeWidth="1.5" />
      <circle cx="100" cy="60" r="10" fill="#2E7D32" opacity="0.3" />
      <rect x="120" y="56" width="100" height="8" rx="4" fill="#2E7D32" />
    </svg>
  );
}
