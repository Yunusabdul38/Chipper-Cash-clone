import Card from "../../UI/Card";
import Wrapper from "../../UI/Wrapper";

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
    <Card style="gap-5 w-[400px] xl:right-52 xl:mt-8">
      {companyDataList.map((data) => (
        <Wrapper
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