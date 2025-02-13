import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import FavoriteIcon from "@mui/icons-material/Favorite";

const generateHeart = () => ({
  id: Math.random(),
  left: Math.random() * 100,
  size: Math.random() * 30 + 10,
  duration: Math.random() * 2 + 2,
});

export const HeartRain = () => {
  const [hearts, setHearts] = useState([]);

  useEffect(() => {
    const interval = setInterval(() => {
      setHearts((prev) => [...prev, generateHeart()]);
    }, 300);

    return () => clearInterval(interval);
  }, []);

  return (
    <div
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100vw",
        height: "100vh",
        pointerEvents: "none",
        overflow: "hidden",
      }}
    >
      {hearts.map(({ id, left, size, duration }) => (
        <motion.div
          key={id}
          initial={{ y: "-10%", opacity: 1 }}
          animate={{ y: "100vh", opacity: 0 }}
          transition={{ duration, ease: "linear" }}
          style={{
            position: "absolute",
            left: `${left}%`,
            fontSize: `${size}px`,
            color: "red",
          }}
        >
          <FavoriteIcon fontSize="inherit" />
        </motion.div>
      ))}
    </div>
  );
};