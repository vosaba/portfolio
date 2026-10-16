import React, {useState, useEffect, useLayoutEffect} from "react";
import {
  Main,
  Highlights,
  Timeline,
  Expertise,
  Press,
  Teaching,
  Project,
  Contact,
  Navigation,
  Footer,
} from "./components";
import FadeIn from './components/FadeIn';
import './index.scss';

type Mode = 'dark' | 'light';

const THEME_KEY = 'theme';
const DARK_QUERY = '(prefers-color-scheme: dark)';
const BACKGROUND: Record<Mode, string> = { dark: '#0d1116', light: '#f8f9fa' };

const systemMode = (): Mode =>
    window.matchMedia && window.matchMedia(DARK_QUERY).matches ? 'dark' : 'light';

const savedMode = (): Mode | null => {
    try {
        const value = localStorage.getItem(THEME_KEY);
        return value === 'dark' || value === 'light' ? value : null;
    } catch {
        return null;
    }
};

const saveMode = (mode: Mode | null) => {
    try {
        if (mode) {
            localStorage.setItem(THEME_KEY, mode);
        } else {
            localStorage.removeItem(THEME_KEY);
        }
    } catch {}
};

function App() {
    const [mode, setMode] = useState<Mode>(() => savedMode() ?? systemMode());

    const handleModeChange = () => {
        const next: Mode = mode === 'dark' ? 'light' : 'dark';
        // Toggling back to the OS theme means "follow the system" again.
        saveMode(next === systemMode() ? null : next);
        setMode(next);
    }

    useEffect(() => {
        if (!window.matchMedia) return;
        const query = window.matchMedia(DARK_QUERY);
        const handleSystemChange = (event: MediaQueryListEvent) => {
            if (!savedMode()) {
                setMode(event.matches ? 'dark' : 'light');
            }
        };
        query.addEventListener('change', handleSystemChange);
        return () => query.removeEventListener('change', handleSystemChange);
    }, []);

    useLayoutEffect(() => {
        document.documentElement.style.colorScheme = mode;
        document.body.style.backgroundColor = BACKGROUND[mode];
        document.querySelectorAll('meta[name="theme-color"]').forEach((meta) => meta.setAttribute('content', BACKGROUND[mode]));
    }, [mode]);

    useEffect(() => {
        if ('scrollRestoration' in window.history) {
            window.history.scrollRestoration = 'manual';
        }
        window.scrollTo({top: 0, left: 0});
      }, []);

    return (
    <div className={`main-container ${mode === 'dark' ? 'dark-mode' : 'light-mode'}`}>
        <Navigation parentToChild={{mode}} modeChange={handleModeChange}/>
        <FadeIn transitionDuration={700}>
            <Main/>
            <Highlights/>
            <Expertise/>
            <Timeline/>
            <Press/>
            <Teaching/>
            <Project/>
            <Contact/>
        </FadeIn>
        <Footer />
    </div>
    );
}

export default App;
