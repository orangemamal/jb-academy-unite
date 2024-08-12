'use client'

import { useRouter } from 'next/navigation';
import Link from "next/link";

const Footer = () => {
  const router = useRouter()

  const footerList = [
    {before: '운영사', after: '(주)스마트러닝코리아'},
    {before: '대표이사', after: '김우식'},
    {before: '주소', after: '서울특별시 강남구 논현로 26길 14, 5층(도곡동, JUN CENTER)'},
    {before: '사업자등록번호', after: '107-87-47495'},
    {before: '고객 문의', after: 'help@slkedu.com'},
    {before: '고객 센터', after: '02-572-0818'},
  ]

  return (
    <footer>
      <div className="layout">
        <div className="logo_bundle">
          <img src="/images/img_logo.png" alt="JB학원연합"/>
          <img src="/images/img_logo_slk.png" alt="SLK"/>
        </div>

        <div className="company_info_wrap">
          {footerList.map((item, index) => (
            <div className="company_info" key={index}>
              <span className="before">{item.before}</span>
              <span className="after">{item.after}</span>
            </div>
          ))}
        </div>

        <div data-type="divider" />

        <div className="link_copyright">
          <Link href="https://edudongne.com/term.html" target="_blank">
            <button>이용약관</button>
          </Link>
          <Link href="https://edudongne.com/privity1.html" target="_blank">
            <button>개인정보취급방침</button>
          </Link>
          <div>Copyright© 2024 by SmartLearningKorea. All right reserved.</div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;