import Wrapper from "../../UI/Wrapper";
import PropTypes from "prop-types"

ProductNavCategory.propTypes={
  categoryName:PropTypes.string,
  content:PropTypes.array,
}
function ProductNavCategory({ categoryName, content}) {
  return (
      <section className="grid gap-1">
        <h3 className="capitalize mb-3 text-[#c1c4e5] md:text-[#637e9e] text-sm ">
          {categoryName}
        </h3>
        <section className="grid gap-6">
         {content.map(data =>  <Wrapper
            img={data.img}
            maintext={data.maintext}
            subtext={data.subtext}
            imgalt={data.imgalt}
            key={data.id}
          />)}
        </section>
      </section>
  );
}
export default ProductNavCategory;
