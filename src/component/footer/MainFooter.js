import React from "react";
import FooterMenu from "./FooterMenu";
import FooterSocialMenu from "./FooterSocialMenu";

export default function MainFooter() {
  const footer = {
    footLogo: `Mdumy`,
    address1: `Office 41, Zawaya Buildin, Ghala Muscat,`,
    address2: `Sultanate of Oman`,
  };

  const footermenus = [
    {
      _id: 1,
      title: `Privacy Ploicy`,
      link: `https://facebook.com/himran.pro`,
    },
    {
      _id: 2,
      title: `Terms of use`,
      link: `https://facebook.com/himran.pro`,
    },
  ];

  const footerSocial = [
    {
      _id: 1,
      icon: `fa-brands fa-facebook-f`,
      link: `https://facebook.com/himran.pro`,
    },
    {
      _id: 2,
      icon: `fa-brands fa-twitter`,
      link: `https://facebook.com/himran.pro`,
    },
    {
      _id: 3,
      icon: `fa-brands fa-linkedin-in`,
      link: `https://facebook.com/himran.pro`,
    },
    {
      _id: 4,
      icon: `fa-brands fa-tiktok`,
      link: `https://facebook.com/himran.pro`,
    },
  ];
  return (
    <footer className="mt-5 bg-dark text-white p-5">
      <div className="container text-center">
        <h2>{footer.footLogo}</h2>
        <p>{footer.address1}</p>
        <p>{footer.address2}</p>
        <p>
          {footermenus.map((menu) => (
            <FooterMenu key={menu.id} title={menu.title} link={menu.link} />
          ))}
        </p>
        <div className="d-flex justify-content-center align-items-center text-white">
          {footerSocial.map((single) => (
            <FooterSocialMenu
              key={single._id}
              icon={single.icon}
              link={single.link}
            />
          ))}
        </div>
      </div>
    </footer>
  );
}
