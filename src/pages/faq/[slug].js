import { useRouter } from 'next/router';
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import FaqItemStyles from '../../styles/FaqItem.styles';
import FaqsData from '../../../public/data/faqs.json';

export default function FaqItem() {
  const router = useRouter();
  const { slug } = router.query;
  const data = FaqsData.find((item) => item.slug === slug);

  const [active, setActive] = useState(false);
  const animateFrom = { height: '0' };
  const animateTo = { height: 'auto' };
  const animateExit = { height: '0' };
  const transition = {
    height: { ease: 'easeOut', duration: 0.7 },
  };

  const toggleQuestion = (q) => {
    if (q === active) {
      return setActive(false);
    }
    setActive(q);
  };

  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
      <FaqItemStyles>
        {slug && (
          <>
            <div className="uppersection slide-in-top">
              <img src={`/img/faq/${data.slug}.jpg`} alt="" />
              <div className="overlay">
                <h2>{data.section}</h2>
              </div>
            </div>
            <div className="pageWrapper slide-in-bottom">
              {data.content.map((item, i) => (
                <div className="accordian" key={i}>
                  <div
                    className="q"
                    onClick={() => toggleQuestion(item.q)}
                    role="button"
                  >
                    <h4>{item.q}</h4>
                  </div>
                  <AnimatePresence>
                    {item.q === active && (
                      <motion.div
                        initial={animateFrom}
                        animate={animateTo}
                        exit={animateExit}
                        transition={transition}
                        className="a"
                      >
                        <p>{item.a}</p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ))}
            </div>
          </>
        )}
      </FaqItemStyles>
    </motion.div>
  );
}
