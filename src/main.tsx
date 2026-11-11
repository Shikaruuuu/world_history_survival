import { createRoot } from 'react-dom/client';
import { App } from './ui/App';
import './ui/style.css';

if (matchMedia('(pointer: coarse)').matches || 'ontouchstart' in window) document.body.classList.add('touch');
createRoot(document.getElementById('root')!).render(<App />);
