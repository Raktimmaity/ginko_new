// components/MenuModal.jsx
import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import Menu from "./Menu"; // Your existing menu component

const MenuModal = ({ isOpen, onClose }) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            className="fixed inset-0 bg-black bg-opacity-80 z-50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
          />
          {/* Modal Content */}
          <motion.div
            className="fixed inset-0 z-50 overflow-y-auto p-4 flex justify-center items-center"
            initial={{ y: 100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 100, opacity: 0 }}
            transition={{ type: "spring", stiffness: 200, damping: 20 }}
          >
            <div
              className="bg-gray-900 rounded-lg shadow-xl w-full max-w-6xl relative overflow-hidden"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={onClose}
                className="absolute top-4 right-4 text-yellow-400 text-2xl"
              >
                &times;
              </button>
              <Menu />
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default MenuModal;
