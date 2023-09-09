import ProductNavCategory from "./ProductNavCategory";
import Card from "../../UI/Card";
const productDataList = [
  {
    name: "payment",
    id:crypto.randomUUID(),
    content: [
      {
        id:crypto.randomUUID(),
        img: "https://global-uploads.webflow.com/63c81b0c3ad929013f062d70/63c81b0c3ad9291598062e78_send-and-receive.svg",
        maintext: "send & receive cash",
        subtext: "cash transfer in a few taps",
        imgalt: "send-and-receive",
      },
      {
        id:crypto.randomUUID(),
        img: "https://global-uploads.webflow.com/63c81b0c3ad929013f062d70/63c81b0c3ad9295701062db8_card.svg",
        maintext: "chipper card",
        subtext: "digital card for your digital life",
        imgalt: "card",
      },
    ],
  },
  {
    name: "investing",
    id:crypto.randomUUID(),
    content: [
      {
        id:crypto.randomUUID(),
        img: "https://global-uploads.webflow.com/63c81b0c3ad929013f062d70/63c81b0c3ad929f076062ddd_crypto.svg",
        maintext: "invest: crypto",
        subtext: "buy.sel & send/receive crypto",
        imgalt: "crypto",
      },
      {
        id:crypto.randomUUID(),
        img: "https://global-uploads.webflow.com/63c81b0c3ad929013f062d70/63c81b0c3ad9291c22062dd9_stocks.svg",
        maintext: "invest: stocks",
        subtext: "start investing with USD",
        imgalt: "stocks",
      },
    ],
  },
  {
    name: "business",
    id:crypto.randomUUID(),
    content: [
      {
        id:crypto.randomUUID(),
        img: "https://global-uploads.webflow.com/63c81b0c3ad929013f062d70/63c81b0c3ad9292eab062e79_network-api.svg",
        maintext: "network API",
        subtext: "payments at scale",
        imgalt: "network-api",
      },
      {
        id:crypto.randomUUID(),
        img: "https://global-uploads.webflow.com/63c81b0c3ad929013f062d70/63c81b0c3ad92955cf062dbb_checkout.svg",
        maintext: "chipper checkout",
        subtext: "business payments",
        imgalt: "checkout",
      },
    ],
  },
  {
    name: "features",
    id:crypto.randomUUID(),
    content: [
      {
        id:crypto.randomUUID(),
        img: "https://global-uploads.webflow.com/63c81b0c3ad929013f062d70/63c81b0c3ad9296795062e7a_bill%20pay.svg",
        maintext: "bill pay",
        subtext: "payments at scale",
        imgalt: "bill%20pay",
      },
      {
        id:crypto.randomUUID(),
        img: "https://global-uploads.webflow.com/63c81b0c3ad929013f062d70/63c81b0c3ad9299965062ddb_airtime.svg",
        maintext: "airtime",
        subtext: "instant airtime for less",
        imgalt: "airtime",
      },
    ],
  },
];
function ProductNavBar() {
  return (
      <Card style="xl:max-w-[60%] xl:grid-cols-3 sm:grid-cols-2 xl:right-20 h-[400px] gap-5 w-full xl:mt-12">
        {productDataList.map(data=> <ProductNavCategory key={data.id} categoryName={data.name} content={data.content}/>)}
      </Card>
  );
}
export default ProductNavBar;
