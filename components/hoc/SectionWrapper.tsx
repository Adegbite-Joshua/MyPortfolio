import { motion } from 'framer-motion';
import { FC } from 'react';

interface SectionWrapperProps {
  idName: string;
}

const SectionWrapper = <T extends object>(Component: FC<T>, idName: string) =>
  function HOC(props: T) {
    return (
      <motion.section
        initial={'hidden'}
        whileInView={'show'}
        viewport={{ once: true, amount: 0.25 }}
        className={`max-w-7xl mx-auto relative z-0`}
      >
        <span className='hash-span' id={idName}>
          &nbsp;
        </span>
        <div className='p-3 md:p-0'>
          <Component {...props} />
        </div>
      </motion.section>
    );
  };

export default SectionWrapper;
