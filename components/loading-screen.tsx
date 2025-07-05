// My  First Loading Screen Component ---------------------------------------------------------------------------------------------

// "use client"

// import { motion } from "framer-motion"

// export default function LoadingScreen() {
//   return (
//     <motion.div
//       initial={{ opacity: 1 }}
//       exit={{ opacity: 0 }}
//       transition={{ duration: 0.6 }}
//       className="fixed inset-0 z-50 flex items-center justify-center bg-black overflow-hidden"
//     >
//       {/* Background floating particles */}
//       <motion.div
//         className="absolute inset-0 bg-gradient-to-br from-gray-900 via-gray-800 to-black opacity-50"
//         animate={{
//           backgroundPosition: ["0% 0%", "100% 100%", "0% 0%"],
//         }}
//         transition={{
//           duration: 8,
//           repeat: Infinity,
//           ease: "linear",
//         }}
//       />

//       <div className="relative text-center space-y-10 z-10">
//         {/* Glowing MZ with layered glitch/shadow effect */}
//         <motion.div
//           className="relative inline-block text-7xl font-extrabold tracking-widest bg-gradient-to-r from-red-500 via-pink-500 to-purple-500 bg-clip-text text-transparent"
//           animate={{
//             scale: [1, 1.1, 1],
//             rotateX: [0, 15, 0],
//             textShadow: [
//               "0 0 5px rgba(255, 0, 0, 0.4)",
//               "0 0 20px rgba(255, 100, 200, 0.6)",
//               "0 0 5px rgba(255, 0, 0, 0.4)",
//             ],
//           }}
//           transition={{
//             duration: 2,
//             repeat: Infinity,
//             ease: "easeInOut",
//           }}
//         >
//           M&nbsp;Z
//           <motion.span
//             className="absolute inset-0 blur-sm opacity-30 text-transparent bg-gradient-to-r from-pink-500 via-red-500 to-purple-500 bg-clip-text"
//             animate={{
//               scale: [1, 1.3, 1],
//               opacity: [0.2, 0.5, 0.2],
//             }}
//             transition={{
//               duration: 1.5,
//               repeat: Infinity,
//               ease: "easeInOut",
//             }}
//           >
//             M&nbsp;Z
//           </motion.span>
//         </motion.div>

//         {/* Layered Spinner like a digital processor */}
//         <div className="relative w-16 h-16 mx-auto">
//           {/* Outer Ring */}
//           <motion.div
//             className="absolute inset-0 border-4 border-t-transparent border-l-transparent border-r-red-500 border-b-pink-500 rounded-full"
//             animate={{ rotate: 360 }}
//             transition={{
//               duration: 1.5,
//               repeat: Infinity,
//               ease: "linear",
//             }}
//           />

//           {/* Inner glow pulse */}
//           <motion.div
//             className="absolute inset-2 rounded-full bg-pink-500 opacity-20 blur-lg"
//             animate={{ scale: [1, 1.4, 1], opacity: [0.1, 0.3, 0.1] }}
//             transition={{
//               duration: 2,
//               repeat: Infinity,
//               ease: "easeInOut",
//             }}
//           />

//           {/* Core dot */}
//           <div className="absolute inset-5 bg-gradient-to-br from-red-500 to-pink-500 rounded-full shadow-inner shadow-pink-500/40" />
//         </div>
//       </div>
//     </motion.div>
//   )
// }

// My  Second Loading Screen Component ---------------------------------------------------------------------------------------------
"use client"

import { motion } from "framer-motion"

export default function LoadingScreen() {
  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.6 }}
      className="fixed inset-0 z-[9999] flex items-center justify-center bg-black text-white"
    >
      {/* Ambient Glow */}
      <motion.div
        className="absolute w-[600px] h-[600px] rounded-full bg-gradient-to-br from-pink-500 to-red-600 blur-3xl opacity-25"
        animate={{ scale: [1, 1.3, 1], opacity: [0.15, 0.3, 0.15] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* Rotating Orbit */}
      <motion.div
        className="relative w-48 h-48"
        animate={{ rotate: 360 }}
        transition={{ duration: 6, repeat: Infinity, ease: "linear" }}
      >
        {/* M */}
        <motion.div
          className="absolute top-0 left-1/2 transform -translate-x-1/2 text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-red-500"
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: [0, 1.2, 1], opacity: [0, 1] }}
          transition={{ duration: 1, ease: "backOut" }}
        >
          M
        </motion.div>

        {/* Z */}
        <motion.div
          className="absolute bottom-0 left-1/2 transform -translate-x-1/2 text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-red-500"
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: [0, 1.2, 1], opacity: [0, 1], rotate: 360 }}
          transition={{ duration: 1.2, ease: "backOut", delay: 0.2 }}
        >
          Z
        </motion.div>
      </motion.div>

      {/* Label */}
      <motion.div
        className="absolute bottom-12 text-sm font-mono text-gray-400"
        animate={{ opacity: [0, 0.6, 1, 0.6, 0] }}
        transition={{ duration: 4, repeat: Infinity }}
      >
        patience Bro...
      </motion.div>
    </motion.div>
  )
}
