import { motion } from 'framer-motion';
import Link from 'next/link';
import HeroImage from '../../Components/Hero/HeroImage';
import FaqData from '../../../public/data/faqs.json';
import { FaqPageStyles } from '../../styles/Page.styles';

export default function FAQ() {
  const list = {
    visible: { opacity: 1, duration: 5 },
    hidden: { opacity: 0, duration: 5 },
  };
  return (
    <FaqPageStyles>
      <HeroImage overlay>
        <h1 className="smaller-title">Frequently Asked Questions</h1>
      </HeroImage>
      <motion.div
        initial="hidden"
        animate="visible"
        variants={list}
        className="container flex"
        style={{ marginTop: '-30px' }}
      >
        {FaqData.map((item, i) => (
          <Link href={`/faq/${item.slug}`} key={i}>
            <div className="faq-tile">
              <img src={`/img/faq/${item.slug}.jpg`} alt={item.section} />
              <div className="overlay">
                <h3>{item.section}</h3>
              </div>
            </div>
          </Link>
        ))}
      </motion.div>
    </FaqPageStyles>
  );
}
