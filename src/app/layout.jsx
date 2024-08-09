import "../../public/scss/main.scss";

export const metadata = {
  title: "JB학원연합",
  description: "전북학원연합회가 운영하는 전북특별자치도 소재의 학원을 위한 학원 운영 통합솔루션",
  icons: {
      icon: "/favicon.png",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="app">{children}</body>
    </html>
  );
}
