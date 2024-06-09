import React from 'react';
import { FaAddressCard  } from 'react-icons/fa';
import { motion } from 'framer-motion';
function Contrato() { 
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
                overflow: 'hidden',
                marginTop: '3rem'
            }}
        >
            <motion.div
                initial={{ x: '-100vw' }}
                animate={{ x: 0 }}
                transition={{ type: 'spring', stiffness: 120, delay: 0.5 }}
            >
                <h2 style={{ color: '#343a40' }}>
                    <FaAddressCard/> Guía Posteo De Servicios
                </h2>
            </motion.div>
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.7 }}
            >
                <p style={{ color: '#343a40', fontSize: '1.1rem' }}>
                    Damos atención a todas las necesidades por los usuarios,
                    asi como una breve guía para el posteo de ofertas de servicio,
                    reordar que hay ofertas de empleo y ofertas de servicios.
                </p>

            </motion.div>
        </motion.div>
    );
}

export default Contrato;
