import React from "react";
import SingleCom from "./SingleCom";
import com1 from "../../../assets/images/company/company-1.png";
import com2 from "../../../assets/images/company/company-2.png";
import com3 from "../../../assets/images/company/company-3.png";
import com4 from "../../../assets/images/company/company-4.png";
import com5 from "../../../assets/images/company/company-5.png";
import com6 from "../../../assets/images/company/company-6.png";

export default function ComFooter() {
  const companieslogo = [
    {
      _id: 1,
      logo: com1,
    },
    {
      _id: 2,
      logo: com2,
    },
    {
      _id: 3,
      logo: com3,
    },
    {
      _id: 4,
      logo: com4,
    },
    {
      _id: 5,
      logo: com5,
    },
    {
      _id: 6,
      logo: com6,
    },
  ];
  return (
    <footer class="my-5">
      <div class="d-flex justify-content-between align-items-center">
        {companieslogo.map((single) => (
          <SingleCom key={single.id} logo={single.logo} />
        ))}
      </div>
    </footer>
  );
}
