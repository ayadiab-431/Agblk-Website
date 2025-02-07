import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Product from "./section.js";
import sections from "./sectionData.js";
export default function ProductSection () {
    const responsive = {
        superLargeDesktop: {
          // the naming can be any, depends on you.
            breakpoint: { max: 4000, min: 1080 },
            items: 7,
            slidesToSlide: 3
        },
        LargeDesktop: {
          // the naming can be any, depends on you.
            breakpoint: { max: 1080, min: 1024 },
            items: 6,
            slidesToSlide: 3
        },
        desktop: {
            breakpoint: { max: 1024, min: 800 },
            items: 5,
            slidesToSlide: 3

        },
        tablet: {
            breakpoint: { max: 800, min: 742 },
            items: 4,
            slidesToSlide: 2
        },
        minitablet: {
            breakpoint: { max: 742, min: 530 },
            items: 3,
            slidesToSlide: 1
        },
        largeMobile: {
            breakpoint: { max: 530, min: 364 },
            items: 2,
            slidesToSlide: 1
        },
        mobile: {
            breakpoint: { max:364, min: 0 },
            items: 1,
            slidesToSlide: 1
        }
    };

    const section = sections.map(item => (
        <Product 
        key = {item.id}
        id={item.id}
        url={item.imageurl}
        name={item.name}
        to={item.to}
        alt={item.alt} />
    ))
    return(
        <div className="sections">
        <Carousel responsive={responsive} draggable={true} rtl={true}>
        {section}
        </Carousel>
        </div>
    );
}