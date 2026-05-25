import { useState } from "react";

const COLORS = {
  bg: "#0f0e17",
  surface: "#1a1828",
  card: "#211f30",
  accent: "#f7c94b",
  success: "#4ade80",
  error: "#f87171",
  text: "#fffffe",
  muted: "#a7a9be",
  border: "#2e2c3e",
};

const ACCESS_CODE = "6127025864352838027744";

const QUESTIONS = [
  { id: 0, soal: "96 ÷ 8 = ...", answer: 12, type: "number" },
  { id: 1, soal: "144 ÷ 9 = ...", answer: 16, type: "number" },
  { id: 2, soal: "936 ÷ 6 = ...", answer: 156, type: "number" },
  {
    id: 3,
    soal: "Sebuah persegi memiliki sisi 11 cm. Berapakah kelilingnya?",
    answer: 44,
    satuan: "cm",
    type: "number",
  },
  {
    id: 4,
    soal: "Sebuah persegi memiliki sisi 7 cm. Berapakah luasnya?",
    answer: 49,
    satuan: "cm²",
    type: "number",
  },
  {
    id: 5,
    soal: "Sebuah persegi panjang memiliki panjang 15 cm dan lebar 9 cm. Hitunglah luasnya!",
    answer: 135,
    satuan: "cm²",
    type: "number",
  },
  {
    id: 6,
    soal: "Sebuah persegi panjang memiliki panjang 18 cm dan lebar 7 cm. Berapakah kelilingnya?",
    answer: 50,
    satuan: "cm",
    type: "number",
  },
  {
    id: 7,
    soal: "Sebuah persegi panjang memiliki panjang 22 cm dan lebar 10 cm. Berapakah luasnya?",
    answer: 220,
    satuan: "cm²",
    type: "number",
  },
  {
    id: 8,
    soal: "Sebuah segitiga memiliki alas 12 cm dan tinggi 9 cm. Berapakah luas segitiga tersebut?",
    answer: 54,
    satuan: "cm²",
    type: "number",
  },
  {
    id: 9,
    soal: "Sebuah segitiga memiliki alas 16 cm dan tinggi 5 cm. Hitunglah luasnya!",
    answer: 40,
    satuan: "cm²",
    type: "number",
  },
];

const SECTIONS = [
  { label: "Pembagian (2 dan 3 digit)", indices: [0, 1, 2] },
  { label: "Bangun Datar Persegi", indices: [3, 4] },
  { label: "Bangun Datar Persegi Panjang", indices: [5, 6, 7] },
  { label: "Bangun Datar Segitiga", indices: [8, 9] },
];

const GRADES = [
  "Ayo berlatih lagi!",
  "Ayo berlatih lagi!",
  "Ayo berlatih lagi!",
  "Ayo berlatih lagi!",
  "Ayo berlatih lagi!",
  "Bagus!",
  "Bagus!",
  "Hebat!",
  "Hebat!",
  "Luar biasa!",
  "Sempurna! 🎉",
];

type QuestionResult = {
  id: number;
  soal: string;
  answer: number;
  type: string;
  satuan?: string;
  userAnswer: number;
  correct: boolean;
};

function AccessPage({ onUnlock }: { onUnlock: () => void }) {
  const [input, setInput] = useState("");
  const [shake, setShake] = useState(false);
  const [wrong, setWrong] = useState(false);

  const handleSubmit = () => {
    if (input.trim() === ACCESS_CODE) {
      onUnlock();
    } else {
      setWrong(true);
      setShake(true);
      setTimeout(() => setShake(false), 500);
    }
  };

  const handleKey = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") handleSubmit();
  };

  return (
    <div
      style={{
        minHeight: "100vh",
        background: COLORS.bg,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        padding: "2rem 1rem",
        fontFamily: "'Courier New', Courier, monospace",
        boxSizing: "border-box",
      }}
    >
      <div
        style={{
          width: "100%",
          maxWidth: "420px",
          background: COLORS.card,
          border: `1px solid ${wrong ? COLORS.error : COLORS.border}`,
          borderRadius: "18px",
          padding: "2.5rem 2rem",
          textAlign: "center",
          transition: "border-color 0.3s",
          animation: shake ? "shake 0.4s" : "none",
        }}
      >
        <div style={{ fontSize: "2.5rem", marginBottom: "0.8rem" }}>🔐</div>
        <h1
          style={{
            fontSize: "1.4rem",
            fontWeight: "700",
            color: COLORS.accent,
            letterSpacing: "0.08em",
            textTransform: "uppercase",
            margin: "0 0 0.4rem",
          }}
        >
          POS 2
        </h1>
        <p
          style={{
            fontSize: "0.75rem",
            color: COLORS.muted,
            letterSpacing: "0.12em",
            textTransform: "uppercase",
            marginBottom: "2rem",
          }}
        ></p>

        <p
          style={{
            fontSize: "0.85rem",
            color: COLORS.muted,
            marginBottom: "1rem",
          }}
        >
          Masukkan kode akses untuk membuka soal
        </p>

        <input
          type="text"
          value={input}
          onChange={(e) => {
            setInput(e.target.value);
            setWrong(false);
          }}
          onKeyDown={handleKey}
          placeholder="Kode akses..."
          style={{
            width: "100%",
            background: COLORS.surface,
            border: `1.5px solid ${wrong ? COLORS.error : COLORS.border}`,
            borderRadius: "10px",
            color: COLORS.text,
            fontSize: "1rem",
            padding: "0.7rem 1rem",
            outline: "none",
            fontFamily: "inherit",
            fontWeight: "700",
            textAlign: "center",
            letterSpacing: "0.08em",
            boxSizing: "border-box",
            marginBottom: "0.6rem",
            transition: "border-color 0.2s",
          }}
        />

        {wrong && (
          <p
            style={{
              color: COLORS.error,
              fontSize: "0.78rem",
              marginBottom: "0.8rem",
              letterSpacing: "0.05em",
            }}
          >
            ✗ Kode salah, coba lagi!
          </p>
        )}

        <button
          onClick={handleSubmit}
          disabled={input.trim() === ""}
          style={{
            width: "100%",
            padding: "0.85rem",
            borderRadius: "10px",
            border: "none",
            background: input.trim() !== "" ? COLORS.accent : COLORS.border,
            color: input.trim() !== "" ? COLORS.bg : COLORS.muted,
            fontFamily: "inherit",
            fontWeight: "700",
            fontSize: "0.95rem",
            letterSpacing: "0.1em",
            textTransform: "uppercase",
            cursor: input.trim() !== "" ? "pointer" : "not-allowed",
            opacity: input.trim() !== "" ? 1 : 0.6,
            marginTop: "0.4rem",
          }}
        >
          Buka Soal
        </button>
      </div>

      <style>{`
        @keyframes shake {
          0%,100%{transform:translateX(0)}
          20%{transform:translateX(-8px)}
          40%{transform:translateX(8px)}
          60%{transform:translateX(-6px)}
          80%{transform:translateX(6px)}
        }
      `}</style>
    </div>
  );
}

export default function MathQuiz2() {
  const [unlocked, setUnlocked] = useState(false);
  const [inputs, setInputs] = useState(Array(10).fill(""));
  const [result, setResult] = useState<QuestionResult[] | null>(null);

  if (!unlocked) {
    return <AccessPage onUnlock={() => setUnlocked(true)} />;
  }

  const allFilled = inputs.every((v) => v.trim() !== "");

  const handleChange = (i: number, val: string) => {
    if (result) return;
    setInputs((prev) => {
      const next = [...prev];
      next[i] = val;
      return next;
    });
  };

  const handleSubmit = () => {
    if (!allFilled || result) return;
    const checked = QUESTIONS.map((q, i) => {
      const userAnswer = parseInt(inputs[i].trim(), 10);
      return { ...q, userAnswer, correct: userAnswer === q.answer };
    });
    setResult(checked);
    const allCorrect = checked.every((r) => r.correct);
    if (allCorrect) {
      setTimeout(() => window.scrollTo({ top: 0, behavior: "smooth" }), 100);
    }
  };

  const handleRestart = () => {
    setInputs(Array(10).fill(""));
    setResult(null);
  };

  const score = result ? result.filter((r) => r.correct).length : 0;

  return (
    <div
      style={{
        minHeight: "100vh",
        background: COLORS.bg,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        padding: "2.5rem 1rem",
        boxSizing: "border-box",
        fontFamily: "'Courier New', Courier, monospace",
      }}
    >
      {/* Header */}
      <div style={{ textAlign: "center", marginBottom: "2rem" }}>
        <h1
          style={{
            fontSize: "clamp(1.6rem, 5vw, 2.4rem)",
            fontWeight: "700",
            color: COLORS.accent,
            letterSpacing: "0.08em",
            margin: 0,
            textTransform: "uppercase",
          }}
        >
          POS 2
        </h1>
        <p
          style={{
            fontSize: "0.78rem",
            color: COLORS.muted,
            letterSpacing: "0.15em",
            marginTop: "0.4rem",
            textTransform: "uppercase",
          }}
        >
          Kuis Matematika · 10 Soal
        </p>
      </div>

      {/* Score banner */}
      {result && (
        <div
          style={{
            background: COLORS.card,
            border: `1px solid ${COLORS.border}`,
            borderRadius: "14px",
            padding: "1.2rem 2rem",
            marginBottom: "1.5rem",
            textAlign: "center",
            width: "100%",
            maxWidth: "600px",
            boxSizing: "border-box",
          }}
        >
          <div
            style={{
              fontSize: "clamp(2.5rem, 10vw, 4rem)",
              fontWeight: "700",
              color: COLORS.accent,
              lineHeight: 1,
            }}
          >
            {score}/10
          </div>
          <div
            style={{
              color: COLORS.muted,
              fontSize: "0.8rem",
              letterSpacing: "0.2em",
              textTransform: "uppercase",
              marginTop: "0.3rem",
            }}
          >
            {GRADES[score]}
          </div>
          {score === 10 && (
            <div
              style={{
                marginTop: "1rem",
                padding: "0.8rem 1rem",
                background: COLORS.surface,
                border: `1px solid ${COLORS.success}`,
                borderRadius: "10px",
                color: COLORS.success,
                fontSize: "0.85rem",
                fontWeight: "700",
                letterSpacing: "0.05em",
                lineHeight: "1.5",
              }}
            >
              🔓 Gabungkan semua jawaban untuk membuka kode soal pos ke 3
            </div>
          )}
        </div>
      )}

      {/* Questions */}
      <div
        style={{
          width: "100%",
          maxWidth: "600px",
          display: "flex",
          flexDirection: "column",
        }}
      >
        {SECTIONS.map((section) => (
          <div key={section.label}>
            <p
              style={{
                fontSize: "0.7rem",
                fontWeight: "700",
                letterSpacing: "0.18em",
                textTransform: "uppercase",
                color: COLORS.muted,
                margin: "1.2rem 0 0.5rem",
              }}
            >
              {section.label}
            </p>

            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "0.7rem",
              }}
            >
              {section.indices.map((qi) => {
                const q = QUESTIONS[qi];
                const res = result ? result[qi] : null;
                const borderColor = res
                  ? res.correct
                    ? COLORS.success
                    : COLORS.error
                  : COLORS.border;

                return (
                  <div
                    key={qi}
                    style={{
                      background: COLORS.card,
                      border: `1px solid ${borderColor}`,
                      borderRadius: "14px",
                      padding: "1.1rem 1.4rem",
                      display: "flex",
                      alignItems: "flex-start",
                      gap: "0.8rem",
                      flexWrap: "wrap",
                      transition: "border-color 0.3s",
                    }}
                  >
                    <span
                      style={{
                        fontSize: "0.78rem",
                        color: COLORS.muted,
                        letterSpacing: "0.1em",
                        minWidth: "22px",
                        paddingTop: "0.2rem",
                      }}
                    >
                      {qi + 1}.
                    </span>

                    <div style={{ flex: "1 1 200px" }}>
                      <p
                        style={{
                          fontSize: "clamp(0.9rem, 2.5vw, 1.05rem)",
                          fontWeight: "700",
                          color: COLORS.text,
                          margin: "0 0 0.7rem",
                          lineHeight: "1.5",
                        }}
                      >
                        {q.soal}
                      </p>

                      <div
                        style={{
                          display: "flex",
                          alignItems: "center",
                          gap: "0.6rem",
                          flexWrap: "wrap",
                        }}
                      >
                        <input
                          type="text"
                          inputMode="numeric"
                          pattern="[0-9]*"
                          placeholder="Jawaban..."
                          value={inputs[qi]}
                          onChange={(e) => handleChange(qi, e.target.value)}
                          disabled={!!result}
                          style={{
                            width: "130px",
                            background: COLORS.surface,
                            border: `1.5px solid ${
                              res ? borderColor : COLORS.border
                            }`,
                            borderRadius: "8px",
                            color: res
                              ? res.correct
                                ? COLORS.success
                                : COLORS.error
                              : COLORS.text,
                            fontSize: "1.1rem",
                            padding: "0.5rem 0.75rem",
                            outline: "none",
                            fontFamily: "inherit",
                            fontWeight: "700",
                            textAlign: "center",
                            boxSizing: "border-box",
                          }}
                        />
                        {q.satuan && (
                          <span
                            style={{ color: COLORS.muted, fontSize: "0.9rem" }}
                          >
                            {q.satuan}
                          </span>
                        )}
                        {res && (
                          <div
                            style={{
                              fontSize: "0.8rem",
                              fontWeight: "700",
                              color: res.correct
                                ? COLORS.success
                                : COLORS.error,
                            }}
                          >
                            {res.correct ? "✓ Benar" : "✗ Salah"}
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        ))}
      </div>

      {/* Tombol */}
      <div style={{ marginTop: "1.8rem", width: "100%", maxWidth: "600px" }}>
        {!result ? (
          <button
            onClick={handleSubmit}
            disabled={!allFilled}
            style={{
              width: "100%",
              padding: "0.9rem",
              borderRadius: "12px",
              border: "none",
              background: allFilled ? COLORS.accent : COLORS.border,
              color: allFilled ? COLORS.bg : COLORS.muted,
              fontFamily: "inherit",
              fontWeight: "700",
              fontSize: "1rem",
              letterSpacing: "0.1em",
              textTransform: "uppercase",
              cursor: allFilled ? "pointer" : "not-allowed",
              opacity: allFilled ? 1 : 0.6,
              transition: "background 0.2s, opacity 0.2s",
            }}
          >
            Periksa Semua Jawaban
          </button>
        ) : (
          <button
            onClick={handleRestart}
            style={{
              width: "100%",
              padding: "0.9rem",
              borderRadius: "12px",
              border: "none",
              background: COLORS.accent,
              color: COLORS.bg,
              fontFamily: "inherit",
              fontWeight: "700",
              fontSize: "1rem",
              letterSpacing: "0.1em",
              textTransform: "uppercase",
              cursor: "pointer",
            }}
          >
            Mulai Ulang
          </button>
        )}
      </div>

      {!result && (
        <p
          style={{
            color: COLORS.muted,
            fontSize: "0.72rem",
            marginTop: "1rem",
            letterSpacing: "0.1em",
          }}
        >
          Isi semua jawaban lalu klik periksa
        </p>
      )}
    </div>
  );
}
