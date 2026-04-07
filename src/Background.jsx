import { useEffect, useRef } from "react";
import "./Background.css";



function Background({darkMode}){

    const sceneRef = useRef(null);

    useEffect(() => {
    const scene = sceneRef.current;
    const charCount = 150;

        for (let i = 0; i < charCount; i++) {
        const char = document.createElement("div");
        char.className = "binary-char";
        char.textContent = Math.random() > 0.5 ? "1" : "0";

        const zPos = Math.random() * 400 - 200;
        const scale = (400 - (zPos + 200)) / 400;

        char.style.setProperty("--start-opacity", Math.random() * 0.5);
        char.style.setProperty("--end-opacity", Math.random() * 0.5 + 0.2);
        char.style.left = `${Math.random() * 100}%`;
        char.style.top = `${Math.random() * 100}%`;
        char.style.fontSize = `${10 + scale * 12}px`;
        char.style.transform = `translateZ(${zPos}px)`;
        char.style.animationDelay = `${Math.random() * -10}s`;

        scene.appendChild(char);
        }

        return () => {
        scene.innerHTML = "";
        };

    }, []);

  return <div ref={sceneRef} className={`scene ${darkMode ? "dark-mode" : ""}`} />;

}

export default Background;