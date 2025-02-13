import { motion } from 'framer-motion';
import { BeatingHeart } from 'components/heart/BeatingHeart';

export const Image = ({ src, currentSlide }) => {
  return (
    <>
      {src !== null ? (
        <div>
          {currentSlide === 5 && (
            <div
              style={{
                position: 'absolute',
                bottom: '120px',
                left: '50%',
                transform: 'translateX(-50%)',
              }}
            >
              <BeatingHeart />
            </div>
          )}
          <motion.img
            key={src}
            src={src}
            alt="happy Valentine"
            width="100%"
            height="auto"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, ease: 'easeOut' }}
          />
        </div>
      ) : (
        <div style={{ textAlign: 'center' }}>
          <h1 style={{ color: 'white', padding: '0', margin: '0' }}>
            Нажми сюда
          </h1>
        </div>
      )}
    </>
  );
};
