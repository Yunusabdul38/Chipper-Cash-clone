import Wrapper from "../../UI/Wrapper";
import PropTypes from "prop-types";
import { Link as ScrollTo } from "react-scroll";
import { Link } from "react-router-dom";
ProductNavCategory.propTypes = {
  categoryName: PropTypes.string,
  content: PropTypes.array,
  to: PropTypes.string,
};
function ProductNavCategory({ categoryName, content, to }) {
  return (
    <section className="grid gap-1">
      <h3 className="capitalize mb-3 text-[#c1c4e5] xl:text-[#637e9e] text-sm ">
        {categoryName}
      </h3>
      <section className="grid gap-6">
        {to === "link" &&
          content.map((data) => {
            return (
              <Link to={data.link} key={data.id}>
                <Wrapper
                  img={data.img}
                  maintext={data.maintext}
                  subtext={data.subtext}
                  imgalt={data.imgalt}
                  key={data.id}
                  style=" hover:bg-slate-300 hover:w-fit hover:rounded px-1 transition list"
                />
              </Link>
            );
          })}
        {to === "scroll" &&
          content.map((data) => {
            return (
              <ScrollTo
                to={data.link}
                key={data.id}
                smooth={true}
                offset={-20}
                duration={700}
              >
                <Wrapper
                  img={data.img}
                  maintext={data.maintext}
                  subtext={data.subtext}
                  imgalt={data.imgalt}
                  key={data.id}
                  style=" hover:bg-slate-300 hover:w-fit hover:rounded px-1 transition list"
                />
              </ScrollTo>
            );
          })}
      </section>
    </section>
  );
}
export default ProductNavCategory;
{
  /* <LinkTo to="header"  smooth={true} offset={-20} duration={700}>content.map((data) => </LinkTo> */
}
