"use client"

import { motion } from "framer-motion"
import { Download, Briefcase, GraduationCap, Award } from "lucide-react"
import { GitBranch, Users, MessageSquare, Lightbulb } from "lucide-react"
import { FaCode } from 'react-icons/fa';
import { SiHtml5, SiCss3, SiJavascript, SiDatabricks } from 'react-icons/si';
import { MdHandshake } from 'react-icons/md';

// import { Users, Lightbulb } from 'react-icons/feather';
import { FiClock, FiRepeat, FiSettings } from 'react-icons/fi';



// Custom SVG icons for technologies not in Lucide
const ReactIcon = () => (
  <svg viewBox="0 0 24 24" className="w-5 h-5" fill="currentColor">
    <path d="M12 10.11c1.03 0 1.87.84 1.87 1.89s-.84 1.89-1.87 1.89c-1.03 0-1.87-.84-1.87-1.89s.84-1.89 1.87-1.89M7.37 20c.63.38 2.01-.2 3.6-1.7-.52-.59-1.03-1.23-1.51-1.9a22.7 22.7 0 0 1-2.4-.36c-.51 2.14-.32 3.61.31 3.96m.71-5.74l-.29-.51c-.11.29-.22.58-.29.86.27.06.57.11.88.16l-.3-.51m6.54-.76l.81-1.5-.81-1.5c-.3-.53-.62-1-.91-1.47C13.17 9 12.6 9 12 9s-1.17 0-1.71.03c-.29.47-.61.94-.91 1.47L8.57 12l.81 1.5c.3.53.62 1 .91 1.47.54.03 1.11.03 1.71.03s1.17 0 1.71-.03c.29-.47.61-.94.91-1.47M12 6.78c-.19.22-.39.45-.59.72h1.18c-.2-.27-.4-.5-.59-.72m0 10.44c.19-.22.39-.45.59-.72h-1.18c.2.27.4.5.59.72M16.62 4c-.62-.38-2 .2-3.59 1.7.52.59 1.03 1.23 1.51 1.9.82.08 1.63.2 2.4.36.51-2.14.32-3.61-.32-3.96m-.7 5.74l.29.51c.11-.29.22-.58.29-.86-.27-.06-.57-.11-.88-.16l.3.51m1.45-7.05c1.47.84 1.63 3.05 1.01 5.63 2.54.75 4.37 1.99 4.37 3.68s-1.83 2.93-4.37 3.68c.62 2.58.46 4.79-1.01 5.63-1.46.84-3.45-.12-5.37-1.95-1.92 1.83-3.91 2.79-5.37 1.95-1.47-.84-1.63-3.05-1.01-5.63-2.54-.75-4.37-1.99-4.37-3.68s1.83-2.93 4.37-3.68c-.62-2.58-.46-4.79 1.01-5.63 1.46-.84 3.45.12 5.37 1.95 1.92-1.83 3.91-2.79 5.37-1.95z" />
  </svg>
)

const NextJSIcon = () => (
  <svg viewBox="0 0 24 24" className="w-5 h-5" fill="currentColor">
    <path d="M11.572 0c-.176 0-.31.001-.358.007a19.76 19.76 0 0 1-.364.033C7.443.346 4.25 2.185 2.228 5.012a11.875 11.875 0 0 0-2.119 5.243c-.096.659-.108.854-.108 1.747s.012 1.089.108 1.748c.652 4.506 3.86 8.292 8.209 9.695.779.25 1.6.422 2.534.525.363.04 1.935.04 2.299 0 1.611-.178 2.977-.577 4.323-1.264.207-.106.247-.134.219-.158-.02-.013-.9-1.193-1.955-2.62l-1.919-2.592-2.404-3.558a338.739 338.739 0 0 0-2.422-3.556c-.009-.002-.018 1.579-.023 3.51-.007 3.38-.01 3.515-.052 3.595a.426.426 0 0 1-.206.214c-.075.037-.14.044-.495.044H7.81l-.108-.068a.438.438 0 0 1-.157-.171l-.05-.106.006-4.703.007-4.705.072-.092a.645.645 0 0 1 .174-.143c.096-.047.134-.051.54-.051.478 0 .558.018.682.154.035.038 1.337 1.999 2.895 4.361a10760.433 10760.433 0 0 0 4.735 7.17l1.9 2.879.096-.063a12.317 12.317 0 0 0 2.466-2.163 11.944 11.944 0 0 0 2.824-6.134c.096-.66.108-.854.108-1.748 0-.893-.012-1.088-.108-1.747C19.777 4.249 16.569.346 12.153.033a19.555 19.555 0 0 0-.364-.033C11.741.001 11.607 0 11.572 0z" />
  </svg>
)

const TypeScriptIcon = () => (
  <svg viewBox="0 0 24 24" className="w-5 h-5" fill="currentColor">
    <path d="M1.125 0C.502 0 0 .502 0 1.125v21.75C0 23.498.502 24 1.125 24h21.75c.623 0 1.125-.502 1.125-1.125V1.125C24 .502 23.498 0 22.875 0zm17.363 9.75c.612 0 1.154.037 1.627.111a6.38 6.38 0 0 1 1.306.34v2.458a3.95 3.95 0 0 0-.643-.361 5.093 5.093 0 0 0-.717-.26 5.453 5.453 0 0 0-1.426-.2c-.3 0-.573.028-.819.086a2.1 2.1 0 0 0-.623.242c-.17.104-.3.229-.393.374a.888.888 0 0 0-.14.49c0 .196.053.373.156.529.104.156.252.304.443.444s.423.276.696.41c.273.135.582.274.926.416.47.197.892.407 1.266.628.374.222.695.473.963.753.268.279.472.598.614.957.142.359.214.776.214 1.253 0 .657-.125 1.21-.373 1.656a3.033 3.033 0 0 1-1.012 1.085 4.38 4.38 0 0 1-1.487.596c-.566.12-1.163.18-1.79.18a9.916 9.916 0 0 1-1.84-.164 5.544 5.544 0 0 1-1.512-.493v-2.63a5.033 5.033 0 0 0 3.237 1.2c.333 0 .624-.03.872-.09.249-.06.456-.144.623-.25.166-.108.29-.234.373-.38a1.023 1.023 0 0 0-.074-1.089 2.12 2.12 0 0 0-.537-.5 5.597 5.597 0 0 0-.807-.444 27.72 27.72 0 0 0-1.007-.436c-.918-.383-1.602-.852-2.053-1.405-.45-.553-.676-1.222-.676-2.005 0-.614.123-1.141.369-1.582.246-.441.58-.804 1.004-1.089a4.494 4.494 0 0 1 1.47-.629 7.536 7.536 0 0 1 1.77-.201zm-15.113.188h9.563v2.166H9.506v9.646H6.789v-9.646H3.375z" />
  </svg>
)

const TailwindIcon = () => (
  <svg viewBox="0 0 24 24" className="w-5 h-5" fill="currentColor">
    <path d="M12.001,4.8c-3.2,0-5.2,1.6-6,4.8c1.2-1.6,2.6-2.2,4.2-1.8c0.913,0.228,1.565,0.89,2.288,1.624 C13.666,10.618,15.027,12,18.001,12c3.2,0,5.2-1.6,6-4.8c-1.2,1.6-2.6,2.2-4.2,1.8c-0.913-0.228-1.565-0.89-2.288-1.624 C16.337,6.182,14.976,4.8,12.001,4.8z M6.001,12c-3.2,0-5.2,1.6-6,4.8c1.2-1.6,2.6-2.2,4.2-1.8c0.913,0.228,1.565,0.89,2.288,1.624 C7.666,17.818,9.027,19.2,12.001,19.2c3.2,0,5.2-1.6,6-4.8c-1.2,1.6-2.6,2.2-4.2,1.8c-0.913-0.228-1.565-0.89-2.288-1.624 C10.337,13.382,8.976,12,6.001,12z" />
  </svg>
)

const VueIcon = () => (
  <svg viewBox="0 0 24 24" className="w-5 h-5" fill="currentColor">
    <path d="M24,1.61H14.06L12,5.16,9.94,1.61H0L12,22.39ZM12,14.08,5.16,2.23H9.59L12,6.41l2.41-4.18h4.43Z" />
  </svg>
)

const NodeIcon = () => (
  <svg viewBox="0 0 24 24" className="w-5 h-5" fill="currentColor">
    <path d="M11.998,24c-0.321,0-0.641-0.084-0.922-0.247l-2.936-1.737c-0.438-0.245-0.224-0.332-0.08-0.383 c0.585-0.203,0.703-0.25,1.328-0.604c0.065-0.037,0.151-0.023,0.218,0.017l2.256,1.339c0.082,0.045,0.197,0.045,0.272,0l8.795-5.076 c0.082-0.047,0.134-0.141,0.134-0.238V6.921c0-0.099-0.053-0.192-0.137-0.242l-8.791-5.072c-0.081-0.047-0.189-0.047-0.271,0 L3.075,6.68C2.99,6.729,2.936,6.825,2.936,6.921v10.15c0,0.097,0.054,0.189,0.139,0.235l2.409,1.392 c1.307,0.654,2.108-0.116,2.108-0.89V7.787c0-0.142,0.114-0.253,0.256-0.253h1.115c0.139,0,0.255,0.112,0.255,0.253v10.021 c0,1.745-0.95,2.745-2.604,2.745c-0.508,0-0.909,0-2.026-0.551L2.28,18.675c-0.57-0.329-0.922-0.945-0.922-1.604V6.921 c0-0.659,0.353-1.275,0.922-1.603l8.795-5.082c0.557-0.315,1.296-0.315,1.848,0l8.794,5.082c0.570,0.329,0.924,0.944,0.924,1.603 v10.15c0,0.659-0.354,1.275-0.924,1.604l-8.794,5.078C12.643,23.916,12.324,24,11.998,24z M19.099,13.993 c0-1.9-1.284-2.406-3.987-2.763c-2.731-0.361-3.009-0.548-3.009-1.187c0-0.528,0.235-1.233,2.258-1.233 c1.807,0,2.473,0.389,2.747,1.607c0.024,0.115,0.129,0.199,0.247,0.199h1.141c0.071,0,0.138-0.031,0.186-0.081 c0.048-0.054,0.074-0.123,0.067-0.196c-0.177-2.098-1.571-3.076-4.388-3.076c-2.508,0-4.004,1.058-4.004,2.833 c0,1.925,1.488,2.457,3.895,2.695c2.88,0.282,3.103,0.703,3.103,1.269c0,0.983-0.789,1.402-2.642,1.402 c-2.327,0-2.839-0.584-3.011-1.742c-0.02-0.124-0.126-0.215-0.253-0.215h-1.137c-0.141,0-0.254,0.112-0.254,0.253 c0,1.482,0.806,3.248,4.655,3.248C17.501,17.007,19.099,15.91,19.099,13.993z" />
  </svg>
)

const PythonIcon = () => (
  <svg viewBox="0 0 24 24" className="w-5 h-5" fill="currentColor">
    <path d="M14.25.18l.9.2.73.26.59.3.45.32.34.34.25.34.16.33.1.3.04.26.02.2-.01.13V8.5l-.05.63-.13.55-.21.46-.26.38-.3.31-.33.25-.35.19-.35.14-.33.1-.3.07-.26.04-.21.02H8.77l-.69.05-.59.14-.5.22-.41.27-.33.32-.27.35-.2.36-.15.37-.1.35-.07.32-.04.27-.02.21v3.06H3.17l-.21-.03-.28-.07-.32-.12-.35-.18-.36-.26-.36-.36-.35-.46-.32-.59-.28-.73-.21-.88-.14-1.05-.05-1.23.06-1.22.16-1.04.24-.87.32-.71.36-.57.4-.44.42-.33.42-.24.4-.16.36-.1.32-.05.24-.01h.16l.06.01h8.16v-.83H6.18l-.01-2.75-.02-.37.05-.34.11-.31.17-.28.25-.26.31-.23.38-.2.44-.18.51-.15.58-.12.64-.1.71-.06.77-.04.84-.02 1.27.05zm-6.3 1.98l-.23.33-.08.41.08.41.23.34.33.22.41.09.41-.09.33-.22.23-.34.08-.41-.08-.41-.23-.33-.33-.22-.41-.09-.41.09zm13.09 3.95l.28.06.32.12.35.18.36.27.36.35.35.47.32.59.28.73.21.88.14 1.04.05 1.23-.06 1.23-.16 1.04-.24.86-.32.71-.36.57-.4.45-.42.33-.42.24-.4.16-.36.09-.32.05-.24.02-.16-.01h-8.22v.82h5.84l.01 2.76.02.36-.05.34-.11.31-.17.29-.25.25-.31.24-.38.2-.44.17-.51.15-.58.13-.64.09-.71.07-.77.04-.84.01-1.27-.04-1.07-.14-.9-.2-.73-.25-.59-.3-.45-.33-.34-.34-.25-.34-.16-.33-.1-.3-.04-.25-.02-.2.01-.13v-5.34l.05-.64.13-.54.21-.46.26-.38.3-.32.33-.24.35-.2.35-.14.33-.1.3-.06.26-.04.21-.02.13-.01h5.84l.69-.05.59-.14.5-.21.41-.28.33-.32.27-.35.2-.36.15-.36.1-.35.07-.32.04-.28.02-.21V6.07h2.09l.14.01zm-6.47 14.25l-.23.33-.08.41.08.41.23.33.33.23.41.08.41-.08.33-.23.23-.33.08-.41-.08-.41-.23-.33-.33-.23-.41-.08-.41.08z" />
  </svg>
)

const PostgreSQLIcon = () => (
  <svg viewBox="0 0 24 24" className="w-5 h-5" fill="currentColor">
    <path d="M23.111 5.866c-.72-.51-1.87-.51-2.59 0l-7.52 5.31-7.52-5.31c-.72-.51-1.87-.51-2.59 0-.72.51-.72 1.34 0 1.85l8.81 6.22c.36.25.78.38 1.3.38s.94-.13 1.3-.38l8.81-6.22c.72-.51.72-1.34 0-1.85z" />
  </svg>
)

const MongoDBIcon = () => (
  <svg viewBox="0 0 24 24" className="w-5 h-5" fill="currentColor">
    <path d="M17.193 9.555c-1.264-5.58-4.252-7.414-4.573-8.115-.28-.394-.53-.954-.735-1.44-.036.495-.055.685-.523 1.184-.723.566-4.438 3.682-4.74 10.02-.282 5.912 4.27 9.435 4.888 9.884l.07.05A73.49 73.49 0 0111.91 24h.481c.114-1.032.284-2.056.51-3.07.417-.296.604-.463.85-.693a11.342 11.342 0 003.639-8.464c.01-.814-.103-1.662-.197-2.218z" />
  </svg>
)

const GraphQLIcon = () => (
  <svg viewBox="0 0 24 24" className="w-5 h-5" fill="currentColor">
    <path d="M5.636 18.364L12 22.728l6.364-4.364H5.636zM16 8a4 4 0 11-8 0 4 4 0 018 0zM12 1.272L5.636 5.636h12.728L12 1.272z" />
  </svg>
)

const DockerIcon = () => (
  <svg viewBox="0 0 24 24" className="w-5 h-5" fill="currentColor">
    <path d="M13.983 11.078h2.119a.186.186 0 00.186-.185V9.006a.186.186 0 00-.186-.186h-2.119a.185.185 0 00-.185.185v1.888c0 .102.083.185.185.185m-2.954-5.43h2.118a.186.186 0 00.186-.186V3.574a.186.186 0 00-.186-.185h-2.118a.185.185 0 00-.185.185v1.888c0 .102.082.185.185.186m0 2.716h2.118a.187.187 0 00.186-.186V6.29a.186.186 0 00-.186-.185h-2.118a.185.185 0 00-.185.185v1.887c0 .102.082.185.185.186m-2.93 0h2.12a.186.186 0 00.184-.186V6.29a.185.185 0 00-.185-.185H8.1a.185.185 0 00-.185.185v1.887c0 .102.083.185.185.186m-2.964 0h2.119a.186.186 0 00.185-.186V6.29a.185.185 0 00-.185-.185H5.136a.186.186 0 00-.186.185v1.887c0 .102.084.185.186.186m5.893 2.715h2.118a.186.186 0 00.186-.185V9.006a.186.186 0 00-.186-.186h-2.118a.185.185 0 00-.185.185v1.888c0 .102.082.185.185.185m-2.93 0h2.12a.185.185 0 00.184-.185V9.006a.185.185 0 00-.184-.186h-2.12a.185.185 0 00-.184.185v1.888c0 .102.083.185.185.185m-2.964 0h2.119a.185.185 0 00.185-.185V9.006a.185.185 0 00-.184-.186h-2.12a.186.186 0 00-.186.186v1.887c0 .102.084.185.186.186m-2.92 0h2.12a.185.185 0 00.184-.185V9.006a.185.185 0 00-.184-.186h-2.12a.185.185 0 00-.184.185v1.888c0 .102.082.185.185.185M23.763 9.89c-.065-.051-.672-.51-1.954-.51-.338 0-.676.03-1.01.087-.248-1.7-1.653-2.53-1.716-2.566l-.344-.199-.226.327c-.284.438-.49.922-.612 1.43-.23.97-.09 1.882.403 2.661-.595.332-1.55.413-1.744.42H.751a.751.751 0 00-.75.748 11.376 11.376 0 00.692 4.062c.545 1.428 1.355 2.48 2.41 3.124 1.18.723 3.1 1.137 5.275 1.137.983 0 1.97-.084 2.944-.25 1.32-.225 2.595-.642 3.763-1.231 1.114-.562 2.107-1.35 2.936-2.33.718-.845 1.29-1.822 1.612-2.876h.144c.949 0 1.58-.22 1.918-.67.067-.093.12-.199.159-.316l.025-.117-.134-.102z" />
  </svg>
)

const AWSIcon = () => (
  <svg viewBox="0 0 24 24" className="w-5 h-5" fill="currentColor">
    <path d="M6.763 10.036c0 .296.032.535.088.71.064.176.144.368.256.576.04.063.056.127.056.183 0 .08-.048.16-.152.24l-.503.335c-.072.048-.144.072-.208.072-.08 0-.16-.04-.239-.112a2.417 2.417 0 01-.287-.375 6.18 6.18 0 01-.248-.471c-.622.734-1.405 1.101-2.347 1.101-.67 0-1.205-.191-1.596-.574-.391-.383-.591-.894-.591-1.533 0-.678.239-1.23.726-1.644.487-.415 1.133-.623 1.955-.623.27 0 .551.024.846.064.296.04.6.104.918.176v-.583c0-.607-.127-1.030-.375-1.277-.255-.248-.686-.367-1.3-.367-.28 0-.568.032-.863.104a6.302 6.302 0 00-.847.24 2.19 2.19 0 01-.271.103.473.473 0 01-.12.016c-.104 0-.16-.08-.16-.231v-.367c0-.12.016-.208.056-.263.04-.056.112-.112.207-.16.28-.144.615-.264 1.005-.36.391-.095.808-.144 1.246-.144.95 0 1.644.216 2.091.647.439.431.663 1.085.663 1.963v2.586zm-3.24 1.214c.263 0 .535-.048.822-.144.287-.096.543-.271.758-.51.128-.152.224-.32.272-.512.047-.191.08-.423.08-.694v-.335a6.66 6.66 0 00-.735-.136 6.02 6.02 0 00-.75-.048c-.535 0-.926.104-1.19.32-.263.215-.39.518-.39.917 0 .375.095.655.295.846.2.2.47.296.838.296zm6.41.862c-.135 0-.224-.024-.28-.08-.055-.048-.103-.16-.151-.311L7.321 5.19c-.048-.16-.072-.263-.072-.32 0-.128.064-.2.191-.2h.783c.144 0 .24.024.29.08.055.048.095.16.143.311l1.525 6.001 1.415-6.001c.04-.16.087-.263.143-.311.055-.056.155-.08.295-.08h.639c.144 0 .24.024.295.08.056.048.104.16.144.311l1.431 6.081 1.575-6.081c.048-.16.096-.263.144-.311.055-.056.15-.08.287-.08h.742c.128 0 .2.064.2.2 0 .04-.009.08-.024.128-.016.048-.04.112-.08.2l-2.19 7.04c-.048.16-.096.263-.151.311-.056.056-.152.08-.28.08h-.687c-.144 0-.24-.024-.295-.08-.056-.056-.104-.16-.144-.32L14.68 7.37l-1.406 5.681c-.04.16-.087.264-.143.32-.056.056-.155.08-.295.08h-.686zm10.256.215c-.415 0-.83-.048-1.229-.144-.399-.096-.71-.2-.918-.32-.128-.071-.215-.151-.247-.223-.032-.072-.056-.151-.056-.24v-.38c0-.152.064-.232.176-.232.048 0 .096.008.144.024.048.016.12.048.2.08.271.12.56.215.862.279.304.064.607.096.918.096.487 0 .863-.087 1.118-.264.255-.176.39-.423.39-.742 0-.216-.08-.399-.24-.559-.159-.159-.455-.304-.878-.431l-1.26-.399c-.639-.2-1.102-.495-1.397-.886-.287-.383-.439-.83-.439-1.334 0-.383.08-.718.24-1.006.159-.287.375-.535.646-.742.272-.208.583-.368.942-.479.36-.112.734-.167 1.142-.167.18 0 .368.016.551.040.184.024.36.064.535.112.168.048.328.104.479.168.151.064.279.136.375.2.096.071.168.151.207.231.04.08.064.175.064.287v.335c0 .152-.064.24-.184.24-.064 0-.168-.032-.303-.096-.455-.216-.967-.32-1.51-.32-.44 0-.783.072-1.038.216-.255.144-.375.367-.375.67 0 .216.087.399.255.551.168.152.479.304.926.448l1.237.4c.631.2 1.086.479 1.365.838.279.36.415.774.415 1.245 0 .399-.08.758-.24 1.077-.159.32-.384.591-.67.814-.287.224-.615.391-.99.511-.375.12-.774.18-1.205.18z" />
  </svg>
)

const VercelIcon = () => (
  <svg viewBox="0 0 24 24" className="w-5 h-5" fill="currentColor">
    <path d="M24 22.525H0l12-21.05 12 21.05z" />
  </svg>
)

const FigmaIcon = () => (
  <svg viewBox="0 0 24 24" className="w-5 h-5" fill="currentColor">
    <path d="M15.852 8.981h-4.588V0h4.588c2.476 0 4.49 2.014 4.49 4.49s-2.014 4.491-4.49 4.491zM12.735 7.51h3.117c1.665 0 3.019-1.355 3.019-3.019s-1.354-3.02-3.019-3.02h-3.117V7.51zm0 1.471H8.148c-2.476 0-4.49-2.015-4.49-4.491S5.672 0 8.148 0h4.588v8.981zm-4.587-7.51c-1.665 0-3.019 1.355-3.019 3.02s1.354 3.019 3.019 3.019h3.117V1.471H8.148zm4.587 15.019H8.148c-2.476 0-4.49-2.014-4.49-4.49s2.014-4.49 4.49-4.49h4.588v8.98zM8.148 8.981c-1.665 0-3.019 1.355-3.019 3.019s1.355 3.019 3.019 3.019h3.117V8.981H8.148zM8.172 24c-2.489 0-4.515-2.014-4.515-4.49s2.014-4.49 4.49-4.49h4.588v4.441c0 2.503-2.047 4.539-4.563 4.539zm-.024-7.51a3.023 3.023 0 0 0-3.019 3.019c0 1.665 1.365 3.019 3.044 3.019 1.705 0 3.093-1.376 3.093-3.068v-2.97H8.148z" />
  </svg>
)

const experiences = [
  {
    title: "Stack Developer",
    company: "Tech Innovations",
    period: "2022 - Present",
    description:
      "Leading development of scalable web applications using React, Node.js, and cloud technologies. Mentoring junior developers and architecting solutions for enterprise clients.",
    achievements: [
      "Increased application performance by 40%",
      "Led team of 5 developers",
      "Implemented CI/CD pipelines",
    ],
  },
  {
    title: "Frontend Developer",
    company: "Digital Solutions Ltd.",
    period: "2020 - 2022",
    description:
      "Developed responsive web applications and collaborated with design teams to create exceptional user experiences using modern frontend technologies.",
    achievements: [
      "Built 15+ production applications",
      "Improved user engagement by 60%",
      "Mentored 3 junior developers",
    ],
  },
  {
    title: "Junior Developer",
    company: "StartUp Ventures",
    period: "2019 - 2020",
    description:
      "Started my professional journey building web applications and learning industry best practices in an agile environment.",
    achievements: ["Contributed to 10+ projects", "Learned full-stack development", "Implemented responsive designs"],
  },
]

const education = [
  {
    degree: "Bachelor of Business Administration and information systems",
    school: "Addis ababa ",
    period: "2022 - Current",
    description: "Bussiness majeor .",
  },
]

const skills = [
  {
    category: "Tools & Technologies",
    items: [
      { name: "React", icon: ReactIcon },
      { name: "PostgreSQL", icon: PostgreSQLIcon },
      { name: "Python", icon: PythonIcon },
      { name: "TypeScript", icon: TypeScriptIcon },
      { name: "GitHub", icon: GitBranch },
      { name: "Docker", icon: DockerIcon },{ name: "Figma", icon: FigmaIcon },
      { name: "Tailwind CSS", icon: TailwindIcon },
      { name: "VSCode", icon: FaCode },{ name: "HTML", icon: SiHtml5 },
      { name: "CSS", icon: SiCss3 },
      { name: "JavaScript", icon: SiJavascript },
      { name: "Data Analysis & Visualization", icon: SiDatabricks },
    ],
  },
  {
    category: "Soft Skills",
    items: [
      { name: "Leadership", icon: Users },
      { name: "Problem Solving", icon: Lightbulb },
      { name: "Communication", icon: MessageSquare },
      { name: "Mentoring", icon: Users },
      { name: "Time Management", icon: FiClock },        // clock/time
      { name: "Adaptability & Responsibility", icon: FiRepeat },  // repeat/adjustment
      { name: "Sales and Marketing", icon: Briefcase },          // briefcase/business
      { name: "Team Work & Team Leadership", icon: MdHandshake }, // handshake/teamwork
      { name: "Operational Management", icon: FiSettings },       // gear/settings for management
    ],
  },
]

export default function ResumeSection() {
  return (
    <section id="resume" className="py-20 px-6 relative">
      <div className="container mx-auto">
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            <span className="bg-gradient-to-r from-red-500 to-pink-500 bg-clip-text text-transparent">RESUME</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto mb-8">My professional journey and expertise</p>
          <motion.a
            href="/resume.pdf"
            download="John_Doe_Resume.pdf"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center gap-2 px-8 py-3 bg-gradient-to-r from-red-500 to-pink-500 text-white font-semibold rounded-lg hover:shadow-lg hover:shadow-red-500/25 transition-shadow"
          >
            <Download className="w-4 h-4" />
            Download PDF
          </motion.a>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <motion.div
            initial={{ x: -50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center gap-3 mb-8">
              <Briefcase className="w-6 h-6 text-red-500" />
              <h3 className="text-2xl font-bold text-white">Experience</h3>
            </div>

            <div className="space-y-8">
              {experiences.map((exp, index) => (
                <motion.div
                  key={index}
                  initial={{ y: 30, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="relative pl-8 border-l-2 border-gray-700"
                >
                  <div className="absolute -left-2 top-0 w-4 h-4 bg-red-500 rounded-full" />
                  <div className="bg-gray-800/50 backdrop-blur-sm rounded-lg p-6 border border-gray-700">
                    <h4 className="text-xl font-bold text-white mb-1">{exp.title}</h4>
                    <p className="text-red-400 font-medium mb-2">{exp.company}</p>
                    <p className="text-gray-400 text-sm mb-3">{exp.period}</p>
                    <p className="text-gray-300 mb-4">{exp.description}</p>
                    <ul className="space-y-1">
                      {exp.achievements.map((achievement, i) => (
                        <li key={i} className="flex items-center text-sm text-gray-400">
                          <div className="w-1.5 h-1.5 bg-red-500 rounded-full mr-2" />
                          {achievement}
                        </li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ x: 50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-12"
          >
            <div>
              <div className="flex items-center gap-3 mb-8">
                <GraduationCap className="w-6 h-6 text-red-500" />
                <h3 className="text-2xl font-bold text-white">Education</h3>
              </div>

              {education.map((edu, index) => (
                <motion.div
                  key={index}
                  initial={{ y: 30, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.6 }}
                  viewport={{ once: true }}
                  className="bg-gray-800/50 backdrop-blur-sm rounded-lg p-6 border border-gray-700"
                >
                  <h4 className="text-xl font-bold text-white mb-1">{edu.degree}</h4>
                  <p className="text-red-400 font-medium mb-2">{edu.school}</p>
                  <p className="text-gray-400 text-sm mb-3">{edu.period}</p>
                  <p className="text-gray-300">{edu.description}</p>
                </motion.div>
              ))}
            </div>

            <div>
              <div className="flex items-center gap-3 mb-8">
                <Award className="w-6 h-6 text-red-500" />
                <h3 className="text-2xl font-bold text-white">Skills</h3>
              </div>

              <div className="space-y-6">
                {skills.map((skillGroup, index) => (
                  <motion.div
                    key={skillGroup.category}
                    initial={{ y: 30, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="bg-gray-800/50 backdrop-blur-sm rounded-lg p-6 border border-gray-700"
                  >
                    <h4 className="text-lg font-bold text-red-400 mb-4">{skillGroup.category}</h4>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      {skillGroup.items.map((skill) => (
                        <motion.div
                          key={skill.name}
                          whileHover={{ scale: 1.05, y: -2 }}
                          className="flex items-center gap-3 p-3 bg-gray-700/30 rounded-lg border border-gray-600/50 hover:border-red-500/50 transition-all group"
                        >
                          <div className="text-red-400 group-hover:text-red-300 transition-colors">
                            <skill.icon />
                          </div>
                          <span className="text-gray-300 group-hover:text-white transition-colors font-medium">
                            {skill.name}
                          </span>
                        </motion.div>
                      ))}
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
