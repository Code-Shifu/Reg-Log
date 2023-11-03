import { Link } from "react-router-dom";
import tea from './styles.module.css'

const Avater = ({ item, key }) => {
  return (

    <div className="col-md-3">
      <section>

        <div key={key} className={tea.it}>
          <Link to={`/productDetail/${item.id}`} replace>
          <img src={item.images[0]} alt="" />
          </Link>
          <div className={tea.its}>
            <p>{item.price}</p>
            <p>{item.title}</p>
          </div>
        </div>
        </section>

    </div>
   
  );
};

export default Avater;
 // <div key={key}>
    //   <Link to={`/productDetail/${item.id}`} replace>
    //     <img
    //       src={item.images[0]}
    //       alt=""
    //       style={{
    //         width: "150px",
    //         height: "150px",
    //         borderRadius: "50%",
    //         objectFit: "cover",
    //       }}
    //     />
    //   </Link>
    //   <p className="">{item.price}</p>
    // </div>