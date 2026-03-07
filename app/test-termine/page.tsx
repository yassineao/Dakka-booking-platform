"use client";

import { useEffect, useState } from "react";

type Termin = {
  id: number;
  title: string;
  location: string;
  booking_type: string;
  start_date: string;
  end_date: string;
};

export default function TestTerminePage() {
  const [termine, setTermine] = useState<Termin[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadTermine = async () => {
      try {
        const res = await fetch("/api/termine"); // deine API
        const data = await res.json();
        console.log("Geladene Termine:", data);
        setTermine(data);
      } catch (err) {
        console.error("Error loading termine", err);
      } finally {
        setLoading(false);
      }
    };

    loadTermine();
  }, []);

  return (
    <div style={{ padding: 40 }}>
      <h1>Termine Testseite</h1>

      {loading && <p>Lade Termine...</p>}

      {!loading && termine.length === 0 && <p>Keine Termine gefunden</p>}

      <ul>
        {termine.map((termin) => (
          <li key={termin.id} style={{ marginBottom: 20 }}>
            <strong>{termin.title}</strong>
            <br />
            Ort: {termin.location}
            <br />
            Typ: {termin.booking_type}
            <br />
            Start: {new Date(termin.start_date).toLocaleString()}
            <br />
            Ende: {new Date(termin.end_date).toLocaleString()}
          </li>
        ))}
      </ul>
    </div>
  );
}