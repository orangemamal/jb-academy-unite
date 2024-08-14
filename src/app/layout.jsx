import "../../public/scss/main.scss";
import 'animate.css/animate.min.css';

export const metadata = {
  viewport: "width=device-width, initial-scale=1.0",
  charSet: "utf-8",
  title: "JB학원연합",
  headline: '학원 운영 통합솔루션',
  description: "전북학원연합회가 운영하는 전북특별자치도 소재의 학원을 위한 학원 운영 통합솔루션",
  keywords: 'JB학원연합, 학원비 결제, 학원 출결 서비스, 학원 관리 및 운영 서비스, 모바일결제, 결제, 학원비결제, 모바일, 간편서비스, 간편, 학원비, 스마트 결제, 스마트, 학원관리 프로그램, 무료 학원관리 프로그램, 무료 관리',
  icons: {
    icon: "/favicon.png",
    apple: "/favicon.png",
  },
  robots: "index, follow",
  url: 'https://jeonbuk.edudongne.com/',
  author: {
    '@type': 'Person',
    name: 'JB학원연합',
  },
  publisher: {
    '@type': 'Organization',
    name: '스마트러닝코리아',
    logo: {
      '@type': 'ImageObject',
      url: '/img_logo_slk.png',
    },
  },
  datePublished: '2024-08-13T11:35:00+07:00',
  dateModified: '2024-08-14T11:35:00+07:00',
  mainEntityOfPage: {
    '@type': 'WebPage',
    '@id': 'https://jeonbuk.edudongne.com/',
  },
  articleSection: 'JB학원연합 : 전북학원연합회가 운영하는 전북특별자치도 소재의 학원을 위한 학원 운영 통합솔루션',
  articleBody: 'JB학원연합, 학원비 결제, 학원 출결 서비스, 학원 관리 및 운영 서비스, 모바일결제, 결제, 학원비결제, 모바일, 간편서비스, 간편, 학원비, 스마트 결제, 스마트, 학원관리 프로그램, 무료 학원관리 프로그램, 무료 관리',
  thumbnailUrl: '/images/img_jb_logo_SNS_preview.png',

  // 대표 URL
  alternates: {
    canonical: 'https://jeonbuk.edudongne.com/',
    languages: {
      'ko_KR': 'https://jeonbuk.edudongne.com/',
    },
  },
  // OG : Open Graph
  openGraph: {
    url: 'https://jeonbuk.edudongne.com',
    title: 'JB학원연합',
    description: '전북특별자치도 소재의 학원을 위한 운영 통합솔루션',
    images: [
      {
        url: '/images/img_jb_logo_SNS_preview.png',
        width: 1000,
        height: 300,
        alt: 'JB학원연합',
      },
    ],
    siteName: 'JB학원연합',
  },
  // twitter
  // twitter: {
  //   handle: '@handle',
  //   site: '@site',
  //   cardType: 'summary_large_image',
  // },
  // naver & google
  verification: {
    other: {
      'naver-site-verification': 'b7f3881865a3b45acc32f264dd5b1d3e5ae49b18',
    },
    google: 'aW7PYRopKu79On9-qK0I7VSjbLgPX97Pajf0PbHMB9o',
  },
  // manifest 속성은 웹 애플리케이션이 웹 앱으로 동작할 때 필요한 메타데이터를 담고 있는 manifest.json 파일의 위치를 지정하는 설정입니다. 이 파일은 주로 Progressive Web App (PWA)에서 사용됩니다.
  manifest: '/manifest.json',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="app">{children}</body>
    </html>
  );
}
