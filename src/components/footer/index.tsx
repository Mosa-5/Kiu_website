import fbIcon from "@/assets/facebook-icon.svg";
import lkIcon from "@/assets/linkedin-icon.svg";
import yticon from "@/assets/youtube-icon.svg";
import kiuLogo from "@/assets/kiu-white-logo.svg";
import mapIcon from "@/assets/map-icon.svg";
import phoneIcon from "@/assets/phone-icon.svg";
import emailICon from "@/assets/email-icon.svg";

const Footer = () => {
  return (
    <div className="w-full bg-[#192735]">
      <div className="h-[403px] px-[120px] py-[80px]">
        <div className="flex w-full justify-between items-start">
          <img src={kiuLogo} alt="Kiu logo" />
          <div className="flex max-w-[686px] gap-[77px]">
            <div className="whitespace-nowrap">
              <h2 className="font-[500] text-[32px] text-[#FAF9F6] mb-[32px] whitespace-normal">
                Useful Links
              </h2>
              <ul className="text-sm flex flex-col gap-[16px] text-[#FAF9F6]">
                <li>
                  <a
                    target="_blank"
                    rel="noopener noreferrer"
                    href="https://mes.gov.ge/"
                  >
                    MESCS
                  </a>
                </li>
                <li>
                  <a
                    target="_blank"
                    rel="noopener noreferrer"
                    href="https://www.tum.de/"
                  >
                    Technical University of Munich
                  </a>
                </li>
                <li>
                  <a
                    target="_blank"
                    rel="noopener noreferrer"
                    href="https://www.naec.ge/"
                  >
                    NAEC
                  </a>
                </li>
                <li>
                  <a
                    target="_blank"
                    rel="noopener noreferrer"
                    href="https://www.naec.ge/"
                  >
                    NCEQE
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h2 className="font-[500] text-[32px] text-[#FAF9F6] mb-[32px]">
                Contact Us
              </h2>
              <ul className="text-sm flex flex-col gap-[16px] text-[#FAF9F6] *:flex *:items-center *:gap-[12px]">
                <li>
                  <img src={mapIcon} alt="map icon" /> Legal address:
                  Akhalgazrdoba Ave. Lane 5/7, Kutaisi, 4600 Georgia
                </li>
                <li>
                  <img src={phoneIcon} alt="phone icon" />
                  (+995) 577 477197
                </li>
                <li>
                  <img src={emailICon} alt="email icon" />
                  <a className="border-b-1" href="mailto:info@kiu.edu.ge">
                    info@kiu.edu.ge
                  </a>
                </li>
                <li>
                  For international student and visitor enquiries:
                  international@kiu.edu.ge
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="h-[72px] px-[120px] py-[24px] w-full bg-[#15222E]">
        <div className="flex w-full justify-between items-center">
          <span className="text-sm text-[#FAF9F6]">
            2025 kiu.edu.ge © All rights reserved
          </span>
          <div className="flex gap-6">
            <a
              href="https://www.facebook.com/KutaisiInternationalUniversity/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={fbIcon} alt="facebook icon" />
            </a>
            <a
              href="https://www.linkedin.com/school/%E1%83%A5%E1%83%A3%E1%83%97%E1%83%90%E1%83%98%E1%83%A1%E1%83%98%E1%83%A1-%E1%83%A1%E1%83%90%E1%83%94%E1%83%A0%E1%83%97%E1%83%90%E1%83%A8%E1%83%9D%E1%83%A0%E1%83%98%E1%83%A1%E1%83%9D-%E1%83%A3%E1%83%9C%E1%83%98%E1%83%95%E1%83%94%E1%83%A0%E1%83%A1%E1%83%98%E1%83%A2%E1%83%94%E1%83%A2%E1%83%98-kutaisi-international-university/posts/?feedView=all"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={lkIcon} alt="linkedin icon" />
            </a>
            <a
              href="https://www.youtube.com/@KutaisiInternationalUniversity"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={yticon} alt="youtube icon" />
            </a>
          </div>

          <span className="text-sm text-[#FAF9F6]">
            Hosted by{" "}
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://proservice.ge/"
              className="border-b-1"
            >
              Proservice
            </a>
          </span>
        </div>
      </div>
    </div>
  );
};

export default Footer;
