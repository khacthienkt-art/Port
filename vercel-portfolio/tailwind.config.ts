import type { Config } from 'tailwindcss';
const config: Config = { content: ['./app/**/*.{ts,tsx}','./components/**/*.{ts,tsx}'], theme: { extend: { colors: { base:'#F1E9DC', ink:'#241B18', deep:'#5C1A1B', rare:'#B9C6D1' }, fontFamily: { display:['var(--font-fraunces)','serif'], body:['var(--font-inter)','sans-serif'] }, letterSpacing: { display:'-.065em' } } }, plugins: [] };
export default config;
