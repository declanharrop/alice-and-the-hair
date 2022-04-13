import { motion } from 'framer-motion';
import Link from 'next/link';
import { useState } from 'react';
import HeroImage from '../../Components/Hero/HeroImage';
import FaqData from '../../../public/data/faqs.json';
import { FaqPageStyles } from '../../styles/Page.styles';
import FaqItem from '../../Components/Accordian/FaqItem';

export default function FAQ() {
  const [searchValue, setSearchValue] = useState(false);

  const list = {
    visible: { opacity: 1, duration: 5 },
    hidden: { opacity: 0, duration: 5 },
  };
  const sections = FaqData.map((section) => section.content);
  const allQuestions = sections.flat();

  return (
    <FaqPageStyles>
      <HeroImage overlay>
        <h1 className="smaller-title">Frequently Asked Questions</h1>
      </HeroImage>
      <input
        type="text"
        placeholder="Ask your question?"
        onChange={(event) => {
          setSearchValue(event.target.value);
        }}
      />
      {/* <div className="ask-question">
        <button type="button">Can't find my question?</button>
      </div> */}

      <motion.div
        initial="hidden"
        animate="visible"
        variants={list}
        className="container flex"
        style={{ marginTop: '-30px' }}
      >
        {FaqData.filter((item) => {
          if (searchValue === false) {
            return item;
          }
          if (item.section.toLowerCase().includes(searchValue.toLowerCase())) {
            return item;
          }
          return null;
        }).map((item, i) => (
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
      <div className="search-question-styles">
        {allQuestions
          .filter((question) => {
            if (searchValue === false) {
              return null;
            }
            if (searchValue === '') {
              return null;
            }
            if (question.q.toLowerCase().includes(searchValue.toLowerCase())) {
              return question;
            }
            return null;
          })
          .map((question, i) => (
            <FaqItem question={question} key={i} />
          ))}
      </div>
    </FaqPageStyles>
  );
}
