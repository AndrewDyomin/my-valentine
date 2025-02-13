import { motion } from "framer-motion";
import FavoriteIcon from "@mui/icons-material/Favorite";

export const BeatingHeart = () => {
  return (
    <div
      style={{
        position: "fixed",
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)",
        textAlign: "center",
        color: "white",
      }}
    >
      <motion.div
        animate={{ scale: [1, 1.3, 1] }}
        transition={{
          repeat: Infinity,
          duration: 0.6,
          ease: "easeInOut",
        }}
        style={{ display: "inline-block", color: "red" }}
      >
        <FavoriteIcon style={{ fontSize: "100px" }} />
      </motion.div>

      <h1 style={{ marginTop: "10px", fontSize: "24px" }}>Я тебя люблю ❤️</h1>
    </div>
  );
};