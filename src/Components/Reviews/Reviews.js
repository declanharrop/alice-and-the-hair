import React from 'react';
import Slider from 'react-slick';
import styled from 'styled-components';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const SlideshowStyles = styled.div`
  background: var(--peach);
  .slideshow {
    transition: ease-in-out 0.3s;
    color: var(--darkBrown);
    margin: 0 auto;
    max-width: 1000px;
    padding: 5vw 40px 3vw;
    button {
      box-shadow: none;
      color: var(--darkBrown);
    }
    h2 {
      /* font-family: LemonMilk; */
      margin: 60px auto 30px;
    }
    .slick-prev::before {
      color: var(--darkBrown);
    }
    .slick-next::before {
      color: var(--darkBrown);
    }
    .slick-dots {
      li {
        button::before {
          color: var(--darkBrown);
        }
      }
    }
    .testimonial {
      max-width: 800px;
      margin: 0 auto 50px;
      padding: 10px;
      height: 100%;
      h5 {
        margin: 30px 0 0;
        font-weight: 400;
      }
    }
  }
`;

export default function Reviews() {
  const settings = {
    dots: false,
    infinite: true,
    speed: 900,
    autoplay: true,
    adaptiveHeight: true,
    autoplaySpeed: 12000,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <SlideshowStyles>
      <div className="slideshow">
        <h2 style={{ color: 'var(--darkBrown)' }}>Our Reviews</h2>
        <Slider {...settings}>
          <div className="testimonial">
            <p>
              Absolutely love my hair. Alice was very reassuring and gave me the
              confidence to go ahead and chop it off! So pleased with the
              excellent cut and can’t wait now to start my colour journey! Thank
              you.
            </p>
            <h5>Cheryl</h5>
          </div>
          <div className="testimonial">
            <p>
              Current Covid standards are fab. Excellent service, kind, caring
              and professional approach. Skilled hairdressing. Made my hair look
              so good, thanks Lydia. Fab overall.
            </p>
            <h5>Sarah</h5>
          </div>
          <div className="testimonial">
            <p>
              I’ve never had a bad visit to the salon. It looks great, the staff
              are fab and my hair always looks great! Kayley is amazing, listens
              to what I want and then works her magic! I brought some new
              products on her recommendation today too, they smell amazing!!
            </p>
            <h5>Gemma</h5>
          </div>
          <div className="testimonial">
            <p>
              always love getting my hair done, meg does it EXACTLY how I want!
              couldn’t recommend anywhere better, beautiful environment and come
              out with perfect hair!!
            </p>
            <h5>Lottie</h5>
          </div>
          <div className="testimonial">
            <p>
              Always look forward to my visits to the salon and this time was no
              exception, all the staff are so lovely and welcoming it really
              feels like you’re catching up with friends! Megan did a fab job of
              freshening up my post lockdown locks, thank you so much! Excited
              for my next visit already xxx
            </p>
            <h5>Livvy</h5>
          </div>
          <div className="testimonial">
            <p>
              Alice and the Hair are amazing, not only do they deliver excellent
              hair services but they have exceptional customer service. I've
              never had a bad experience, they've always gone above and beyond
              to help as much as possible. Also the fact that they're ethical is
              amazing! Thank you to Alice - and the whole team at Alice and the
              Hair!
            </p>
            <h5>Charlotte Deavall</h5>
          </div>
          <div className="testimonial">
            <p>
              Lovely people (especially Lydia), great service, can't wait for my
              next appointment 😊.
            </p>
            <h5>Katriona McDonald</h5>
          </div>
          <div className="testimonial">
            <p>
              I absolutely love having my hair done by Alice. She is such a
              lovely person and definitely the best hairdresser in the business.
              Alice and her team are so good at what they do. She colours and
              cuts my hair just how I like it and I always feel pampered and
              relaxed throughout. I have even started bringing my young daughter
              for her hair cuts now too. My daughter loves Alice and always
              looks forward to seeing her. Would definitely recommend!
            </p>
            <h5>Kimberley O'mahoney</h5>
          </div>
        </Slider>
      </div>
    </SlideshowStyles>
  );
}
