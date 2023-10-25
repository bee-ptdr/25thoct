import React from 'react'
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import 'slick-carousel';



function Slids() {
    const setting = {
        dots: true,
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        speed: 3000,
        autoplaySpeed: 2000,
        cssEase: "linear"
    }
    return (
        <div>
            <Slider {...setting}>
                <div>
                    {/* <h3></h3> */}
                    <img src="https://res.cloudinary.com/admitad-gmbh/image/upload/v1654530482/b45f8vpzym2hqa73opxa.png" alt="" style={{ width: "90%" }} />
                </div>
                <div>
                    {/* <h3>2</h3> */}
                    <img src="https://res.cloudinary.com/admitad-gmbh/image/upload/v1654530482/b45f8vpzym2hqa73opxa.png" alt="" style={{ width: "90%" }} />
                </div>
                <div>
                    {/* <h3>3</h3> */}
                    <img src="https://res.cloudinary.com/admitad-gmbh/image/upload/v1654530482/b45f8vpzym2hqa73opxa.png" alt="" style={{ width: "90%" }} />
                </div>
                <div>
                    {/* <h3>4</h3> */}
                    <img src="https://res.cloudinary.com/admitad-gmbh/image/upload/v1654530482/b45f8vpzym2hqa73opxa.png" alt="" style={{ width: "90%" }} />
                </div>
                <div>
                    {/* <h3>5</h3> */}
                    <img src="https://res.cloudinary.com/admitad-gmbh/image/upload/v1654530482/b45f8vpzym2hqa73opxa.png" alt="" style={{ width: "90%" }} />
                </div>
                <div>
                    {/* <h3>6</h3> */}
                    <img src="https://res.cloudinary.com/admitad-gmbh/image/upload/v1654530482/b45f8vpzym2hqa73opxa.png" alt="" style={{ width: "90%" }} />
                </div>

            </Slider>

        </div>
    )
}

export default Slids
