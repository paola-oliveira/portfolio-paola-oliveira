import { BannerImage } from "./Styled";
import banner from "../../images/banner.png"

function Banner() {
    return (
     <section>
            <BannerImage src={banner}/>
     </section>
    );
  }

  export default Banner;