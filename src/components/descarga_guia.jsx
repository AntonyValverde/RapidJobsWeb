import React from 'react';
import { FaKey } from 'react-icons/fa';
import { motion } from 'framer-motion';
function Descarga() {
  return (
    <motion.div
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.2 }}
      style={{
        padding: '2rem',
        backgroundColor: '#fff',
        borderRadius: '15px',
        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
        overflow: 'hidden', // Para ocultar el desbordamiento de las animaciones
        marginTop: '3rem'
      }}
    >
      <motion.div
        initial={{ x: '-100vw' }}
        animate={{ x: 0 }}
        transition={{ type: 'spring', stiffness: 120, delay: 0.5 }}
      >
        <h2 style={{ color: '#343a40' }}>
          <FaKey /> Guía De Descarga APK
        </h2>
      </motion.div>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.7 }}
      >
        <p style={{ color: '#343a40', fontSize: '1.1rem' }}>
          Te ayudamos en los pasos para una descarga eficiente de nuestra aplicación
          RapidJobs en tu dispositivo, ahora ya puedes ser parte de la comunidad
          trabajadora de Costa Rica.  
        </p>
         
      </motion.div>
    </motion.div>
  );
}

export default Descarga;
