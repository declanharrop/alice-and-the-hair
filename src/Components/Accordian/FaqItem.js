import { AnimatePresence, motion } from 'framer-motion';
import React, { useContext } from 'react';
import { SiteContext } from '../../Context/SiteContext';
import FaqItemStyles from '../../styles/FaqItem.styles';

export default function FaqItem({ question }) {
  const { isActive, toggleQuestion } = useContext(SiteContext);
  const animateFrom = { height: '0' };
  const animateTo = { height: 'auto' };
  const animateExit = { height: '0' };
  const transition = {
    height: { ease: 'easeOut', duration: 0.7 },
  };
  return (
    <FaqItemStyles>
      <div className="pageWrapper">
        <div className="accordian">
          <div
            className="q"
            onClick={() => toggleQuestion(question.q)}
            role="button"
          >
            <h4>{question.q}</h4>
            <p>
              <span className="section-hint">
                Question from "{question.section}"
              </span>
            </p>
          </div>
          <AnimatePresence>
            {question.q === isActive && (
              <motion.div
                initial={animateFrom}
                animate={animateTo}
                exit={animateExit}
                transition={transition}
                className="a"
              >
                {question.a.map((text, t) => (
                  <p key={t}>{text}</p>
                ))}
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </FaqItemStyles>
  );
}
