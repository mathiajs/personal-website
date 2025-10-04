"use client";
import React, { useEffect, useState } from "react";
import "./birthday.css";

const heartEmojis = ["❤️", "💕", "💖", "💓", "💞", "💘", "💗"];
const PASSWORD = "AuroraSuperKul2025";

export default function BirthdayPage() {
  const [hearts, setHearts] = useState<any[]>([]);
  const [authorized, setAuthorized] = useState(false);
  const [input, setInput] = useState("");
  const [showGifts, setShowGifts] = useState(false); // Ny state for gavene

  useEffect(() => {
    if (authorized) {
      const initialHearts = Array.from({ length: 50 }).map((_, i) => ({
        id: i,
        emoji: heartEmojis[Math.floor(Math.random() * heartEmojis.length)],
        left: Math.random() * 100,
        size: Math.random() * 20 + 20,
        duration: Math.random() * 10 + 5,
        delay: Math.random() * 10,
      }));
      setHearts(initialHearts);
    }
  }, [authorized]);

  if (!authorized) {
    return (
      <div className="birthday-container-fullscreen">
        <div className="password-box">
          <h2 className="password-text">Skriv inn passord for å se bursdagssiden 🎉</h2>
          <input
            type="password"
            placeholder="Passord"
            value={input}
            onChange={(e) => setInput(e.target.value)}
          />
          <button onClick={() => setAuthorized(input === PASSWORD)}>Gå videre</button>
        </div>
      </div>
    );
  }

  return (
    <div className="birthday-container-fullscreen">
      <h1>Gratulerer med dagen søte Aurora mjauen❤️❤️</h1>
      <p>Du får jo ikke en stor pakke idag, siden du allerede har fått en superkul dyson, så ville jeg lage deg en søt nettside</p>
      <p>For å minne deg på hvor mye jeg elsker deg, så har jeg skrevet ned noen ting så du kan huske på de:</p>
      <ul>
        <li>Hver gang du smiler føler jeg på en utrolig varme inni meg</li>
        <li>Når du gir meg en klem er det som om verden står stille, hjertet slår litt saktere</li>
        <li>Når jeg virkelig trenger en klem er det deg jeg vil til først, du får alt til å føles lettere</li>
        <li>Hver gang vi setter av tid til hverandre, uansett hva eller hvor det er, så har vi det bra</li>
      </ul>

      <div className="present-button-container">
        <button onClick={() => setShowGifts(!showGifts)}>
          {showGifts ? "Skjul gavene" : "Se gavene 🎁"}
        </button>
        {showGifts && (
          <ul className="gifts-list">
            <li>Dyson (du har allerede fått)</li>
            <li>Jeg betaler for alle snacks du kan ønske deg</li>
            <li>Jeg er matsjef (du kan bli med for kosen)</li>
            <li>Vi drar og kjøper blomster til deg, så kan du få velge de blomstene du VIRKELIG vil ha</li>
          </ul>
        )}
      </div>

      <div className="hearts-container">
        {hearts.map((heart) => (
          <span
            key={heart.id}
            className="heart"
            style={{
              left: `${heart.left}%`,
              fontSize: `${heart.size}px`,
              animationDuration: `${heart.duration}s`,
              animationDelay: `${heart.delay}s`,
            }}
          >
            {heart.emoji}
          </span>
        ))}
      </div>
    </div>
  );
}
