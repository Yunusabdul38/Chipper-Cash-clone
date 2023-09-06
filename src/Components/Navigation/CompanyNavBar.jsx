import Card from "../../UI/Card";
import NavList from "./NavList";

const companyDataList = [
  {
    id: crypto.randomUUID(),
    img: "https://global-uploads.webflow.com/63c81b0c3ad929013f062d70/63c81b0c3ad92949eb062e7e_team-leadership.svg",
    maintext: "leadership team",
    subtext: "meet our leadership team",
    imgalt: "team-leadership",
  },
  {
    id: crypto.randomUUID(),
    img: "https://global-uploads.webflow.com/63c81b0c3ad929013f062d70/63c81b0c3ad9291062062e7b_careers.svg",
    maintext: "careers",
    subtext: "join the team",
    imgalt: "careers",
  },
  {
    id: crypto.randomUUID(),
    img: "https://global-uploads.webflow.com/63c81b0c3ad929013f062d70/63c81b0c3ad9292761062e7f_featured.svg",
    maintext: "featured in",
    subtext: "the latest articles and podcasts",
    imgalt: "featured",
  },
];

function CompanyNavBar() {
  return (
    <Card style="gap-5 w-[400px] md:right-52 md:mt-8">
      {companyDataList.map((data) => (
        <NavList
          img={data.img}
          maintext={data.maintext}
          subtext={data.subtext}
          imgalt={data.imgalt}
          key={data.id}
        />
      ))}
    </Card>
  );
}

export default CompanyNavBar