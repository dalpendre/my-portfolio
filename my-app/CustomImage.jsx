import Image from 'next/image';

export default function CustomImage({ src, ...props }) {
  const basePath = process.env.NODE_ENV === 'production' ? '/my-portfolio' : '';
  const fullSrc = src.startsWith('/') ? `${basePath}${src}` : src;
  
  return <Image src={fullSrc} {...props} />;
}