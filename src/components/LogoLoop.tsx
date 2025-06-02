import React from 'react';

interface Logo {
  src: string;
  alt: string;
}

const logos: Logo[] = [
  // Education Logos
  { src: '/images/logos/ecu-logo.png', alt: 'ECU Logo' },
  { src: '/images/logos/equinim-logo.png', alt: 'Equinim Logo' },
  { src: '/images/logos/google-logo.png', alt: 'Google Logo' },
  
  // Technology Logos
  { src: '/images/logos/react-logo.png', alt: 'React Logo' },
  { src: '/images/logos/typescript-logo.jpg', alt: 'TypeScript Logo' },
  { src: '/images/logos/javascript-logo.jpg', alt: 'JavaScript Logo' },
  { src: '/images/logos/python-logo.png', alt: 'Python Logo' },
  { src: '/images/logos/nodejs-logo.png', alt: 'Node.js Logo' },
  { src: '/images/logos/django-logo.png', alt: 'Django Logo' },
  { src: '/images/logos/mysql-logo.png', alt: 'MySQL Logo' },
  { src: '/images/logos/mongodb-logo.png', alt: 'MongoDB Logo' },
  { src: '/images/logos/aws-logo.jpg', alt: 'AWS Logo' },
  { src: '/images/logos/firebase-logo.jpg', alt: 'Firebase Logo' },
  { src: '/images/logos/supabase-logo.jpg', alt: 'Supabase Logo' },
  { src: '/images/logos/docker-logo.png', alt: 'Docker Logo' },
  { src: '/images/logos/git-logo.png', alt: 'Git Logo' },
  { src: '/images/logos/github-logo.jpg', alt: 'GitHub Logo' },
  { src: '/images/logos/html-logo.png', alt: 'HTML Logo' },
  { src: '/images/logos/css-logo.png', alt: 'CSS Logo' },
  { src: '/images/logos/sass-logo.png', alt: 'Sass Logo' },
  { src: '/images/logos/tailwind-logo.png', alt: 'Tailwind Logo' },
  { src: '/images/logos/bootstrap-logo.png', alt: 'Bootstrap Logo' },
  { src: '/images/logos/nextjs-logo.png', alt: 'Next.js Logo' },
  { src: '/images/logos/angular-logo.jpg', alt: 'Angular Logo' },
  { src: '/images/logos/flutter-logo.png', alt: 'Flutter Logo' },
  { src: '/images/logos/reactnative-logo.jpg', alt: 'React Native Logo' },
  { src: '/images/logos/expo-logo.jpg', alt: 'Expo Logo' },
  { src: '/images/logos/android-logo.jpg', alt: 'Android Logo' },
  { src: '/images/logos/kotlin-logo.png', alt: 'Kotlin Logo' },
  { src: '/images/logos/swift-logo.png', alt: 'Swift Logo' },
  { src: '/images/logos/jest-logo.png', alt: 'Jest Logo' },
  { src: '/images/logos/gradle-logo.png', alt: 'Gradle Logo' },
  { src: '/images/logos/npm-logo.png', alt: 'NPM Logo' },
  { src: '/images/logos/postman-logo.png', alt: 'Postman Logo' },
  { src: '/images/logos/Visual_Studio_Code_logo.png', alt: 'VS Code Logo' },
  { src: '/images/logos/figma-logo.png', alt: 'Figma Logo' },
  { src: '/images/logos/cloudflare-logo.png', alt: 'Cloudflare Logo' },
  { src: '/images/logos/ubuntu-logo.jpg', alt: 'Ubuntu Logo' },
  { src: '/images/logos/mapbox-logo.jpg', alt: 'Mapbox Logo' },
  { src: '/images/logos/googlemaps-logo.png', alt: 'Google Maps Logo' },
  { src: '/images/logos/drawio-logo.jpg', alt: 'Draw.io Logo' },
  { src: '/images/logos/markdown-logo.png', alt: 'Markdown Logo' }
];

// Duplicate logos to create seamless loop
const duplicatedLogos = [...logos, ...logos];

const LogoLoop: React.FC = () => {
  return (
    <div className="logo-loop-container">
      <div className="logo-track">
        {duplicatedLogos.map((logo, index) => (
          <div key={index} className="logo-item">
            <img src={logo.src} alt={logo.alt} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default LogoLoop; 