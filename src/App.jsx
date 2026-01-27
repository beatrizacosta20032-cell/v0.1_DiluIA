import React, { useState } from 'react';
import Labpartner from "./Labpartner.png";
const levels = [
  {
    id: 1,
    name: 'Nivel 1',
    rank:'Estagiário 🧹',
    levelcode: 'lab2025',
    exercises: [
      {
        id: 1,
        title: 'Emergência na Urgência',
        story:
          'Chega um paciente desidratado e é iniciada perfusão com solução a 5%. O saco contém 450 mL. Quanta glucose entra na corrente sanguínea?',
        formula: 'C = m / V',
        formulaVisible: true,
        inputs: [
          { id: 'vol', label: 'Volume (ml)', value: 450 },
          { id: 'conc', label: 'Concentração (%)', value: 5 },
        ],
        targetLabel: 'Massa de Soluto (g)',
        correct: 22.5,
        xp: 100,
      },
      {
        id: 2,
        title: 'Primeira Preparação',
        story:
          'No teu primeiro turno sozinho, pedem-te 500 mL de NaOH 0,3 M. O frasco só indica a massa molar (40 g/mol). Que massa de NaOH precisas?',
        formula: 'C = n / V ; n = m / Mw',
        formulaVisible: true,
        inputs: [
          { id: 'c', label: 'Concentração (M)', value: 0.3 },
          { id: 'v', label: 'Volume (ml)', value: 500 },
          { id: 'mw', label: 'Massa Molar (g/mol)', value: 40 },
        ],
        targetLabel: 'Massa de Soluto (g)',
        correct: 5,
        xp: 100,
      },
      {
        id: 3,
        title: 'Fisiologia em Números',
        story:
          'Estás a rever análises clínicas. Sabes que o sangue contém 5,8 g/L de NaCl. Quanto existe no corpo de um adulto médio (5 L de sangue)?',
        formula: '???',
        formulaVisible: false,
        inputs: [
          { id: 'conc', label: 'Concentração (g/L)', value: 5.8 },
          { id: 'vol', label: 'Volume (L)', value: 5 },
        ],
        targetLabel: 'Massa de Soluto (g)',
        correct: 29,
        xp: 100,
      },
    ],
  },
  {
    id: 2,
    name: 'Nivel 2',
    rank: 'Técnico de Lab 🥼',
    levelcode: 'h7neutral',
    exercises: [
      {
        id: 1,
        title: 'Ajuste Crítico',
        story:
          'Temos 10 mL de solução 2M e queremos obter uma solução final de 0.4M. Qual o volume final?',
        formula: 'C1 x V1 = C2 x V2',
        formulaVisible: true,
        inputs: [
          { id: 'c1', label: 'C. Inicial (M)', value: 2 },
          { id: 'v1', label: 'V. Inicial (ml)', value: 10 },
          { id: 'c2', label: 'C. Final (M)', value: 0.4 },
        ],
        targetLabel: 'Volume Final (ml)',
        correct: 50,
        xp: 150,
      },
      {
        id: 2,
        title: 'Água a Mais',
        story:
          'Estavas a diluir 10 mL de uma solução 4M. Sem querer, o volume final passou para 40 mL. Que concentração obtiveste agora?',
        formula: 'C1 x V1 = C2 x V2',
        formulaVisible: true,
        inputs: [
          { id: 'c1', label: 'C. Inicial (M)', value: 4 },
          { id: 'v1', label: 'V. Inicial (ml)', value: 10 },
          { id: 'v2', label: 'V. Final (ml)', value: 40 },
        ],
        targetLabel: 'Concentração Final (M)',
        correct: 1,
        xp: 150,
      },
      {
        id: 3,
        title: 'A Memória do Químico',
        story:
          'O manual ardeu! Precisas de preparar uma diluição com fator 5 a partir de 20 mL de solução. Qual o volume final?',
        formula: '???',
        formulaVisible: false,
        inputs: [
          { id: 'vi', label: 'Volume Inicial (ml)', value: 20 },
          { id: 'f', label: 'Fator de Diluição', value: 5 },
        ],
        targetLabel: 'Volume Final (ml)',
        correct: 100,
        xp: 200,
      },
    ],
  },
  {
    id: 3,
    name: 'Nivel 3',
    rank: 'Cientista Chefe 🧪',
    levelcode: 'avogadro602',
    exercises: [
      {
        id: 1,
        title: 'Diluição em Série',
        story:
          'Uma amostra sofre três diluições sucessivas: 1:3, 1:3 e 1:10. Qual foi o fator total aplicado?',
        formula: 'Fator total = f1 x f2 x f3',
        formulaVisible: true,
        inputs: [
          { id: 'f1', label: 'Fator 1', value: 3 },
          { id: 'f2', label: 'Fator 2', value: 3 },
          { id: 'f3', label: 'Fator 3', value: 10 },
        ],
        targetLabel: 'Fator de Diluição Total',
        correct: 90,
        xp: 200,
      },
      {
        id: 2,
        title: 'A Curva de Calibração',
        story:
          'Estás a preparar 6 diluições seriadas 1:10. Cada tubo tem de fornecer 100 µL para o ensaio e volume para a diluição seguinte. Qual deve ser o volume total mínimo de cada tubo intermédio?',
        formula: 'Vtotal = V necessário + V transferido',
        formulaVisible: true,
        inputs: [
          { id: 'vEnsaio', label: 'Volume para ensaio (µL)', value: 100 },
          { id: 'fator', label: 'Diluição (1:x)', value: 10 },
        ],
        targetLabel: 'Volume Total por Tubo (µL)',
        correct: 110,
        xp: 250,
      },
      {
        id: 3,
        title: 'A Amostra Sanguínea',
        story:
          'Após duas diluições sucessivas (1:10 e depois 1:100), contas 80 células em 100 µL. Qual era a concentração inicial em células/mL?',
        formula: '???',
        formulaVisible: false,
        inputs: [
          { id: 'f1', label: 'Fator 1', value: 10 },
          { id: 'f2', label: 'Fator 2', value: 100 },
          { id: 'cells', label: 'Células contadas', value: 80 },
          { id: 'vol', label: 'Volume contado (µL)', value: 100 },
        ],
        targetLabel: 'Concentração Inicial (células/mL)',
        correct: 800000,
        xp: 300,
      },
    ],
  },
];

export default function DiluIAGame() {
  const [levelIndex, setLevelIndex] = useState(0);
  const [exerciseIndex, setExerciseIndex] = useState(0);
  const [userAnswer, setUserAnswer] = useState('');
  const [userCode, setUserCode] = useState('');
  const [stability, setStability] = useState(100);
  const [xp, setXp] = useState(0);
  const [screen, setScreen] = useState('START'); // START, GAME, VICTORY, GAMEOVER
  const [feedback, setFeedback] = useState(null); // { type: 'success'|'error', msg: '' }

  const level = levels[levelIndex];
  const exercise = level?.exercises[exerciseIndex];

  // Abrir o Chatbot numa janela popup ao lado
  const openChatbot = () => {
    window.open(CHATBOT_URL, 'LabPartner', 'width=500,height=700,left=1000');
  };

  const handleSubmit = () => {
    if (!userAnswer) return;
    const val = parseFloat(userAnswer.replace(',', '.'));

    if (Math.abs(val - exercise.correct) < 0.1) {
      // Margem de erro pequena
      setXp((prev) => prev + exercise.xp);
      setFeedback({
        type: 'success',
        msg: `Correto! Mistura estabilizada. (+${exercise.xp} XP)`,
      });
      setTimeout(() => {
        setFeedback(null);
        setUserAnswer('');
        if (exerciseIndex + 1 < level.exercises.length) {
          setExerciseIndex((prev) => prev + 1);
        } else {
          setScreen('CODE');
        }
      }, 2000);
    } else {
      setStability((prev) => Math.max(0, prev - 25));
      setFeedback({
        type: 'error',
        msg: 'Instável! Verifica os cálculos ou pede ajuda ao Chatbot!',
      });
      if (stability - 25 <= 0) setScreen('GAMEOVER');
    }
  };
  const handleCodeSubmit = () => {
    if (!userCode) return;
    const cod = userCode.trim();
    if (cod === level.levelcode) {
      if (levelIndex < levels.length - 1) {
        setFeedback({ type: 'success', msg: 'Código correto! A avançar...' });
        setTimeout(() => {
          setScreen('GAME');
          setFeedback(null);
          setUserAnswer('');
          setUserCode('');
          setLevelIndex((prev) => prev + 1);
          setExerciseIndex(0);
        }, 2000);
      } else {
        setScreen('VICTORY');
      }
    } else {
      setFeedback({ type: 'error', msg: 'Codigo errado. Tenta novamente.' });
    }
  };
  // --- RENDERS ---

  if (screen === 'START') {
    return (
      <div style={styles.container}>
        <div style={styles.card}>
          <div style={{ fontSize: '60px' }}>⚗️</div>
          <h1 style={styles.title}>DILU-IA</h1>
          <p style={styles.text}>Crise no Laboratório: Salva as soluções!</p>
          <div style={styles.infoBox}>
            <p>
              🤖 <strong>Dica:</strong> Usa o botão "LabPartner AI" para abrir o
              teu assistente inteligente numa janela ao lado.
            </p>
          </div>
          <button style={styles.btnPrimary} onClick={() => setScreen('GAME')}>
            ENTRAR NO LABORATÓRIO
          </button>
        </div>
      </div>
    );
  }

  if (screen === 'VICTORY') {
    return (
      <div style={styles.container}>
        <div style={styles.card}>
          <div style={{ fontSize: '60px' }}>🎉</div>
          <h1 style={{ ...styles.title, color: '#4caf50' }}>
            Laboratório Salvo!
          </h1>
          <p style={styles.text}>Parabéns, {level.rank}!</p>
          <p>XP Total: {xp}</p>
          <button
            style={styles.btnPrimary}
            onClick={() => window.location.reload()}
          >
            JOGAR NOVAMENTE
          </button>
        </div>
      </div>
    );
  }

  if (screen === 'GAMEOVER') {
    return (
      <div style={styles.container}>
        <div style={styles.card}>
          <div style={{ fontSize: '60px' }}>💥</div>
          <h1 style={{ ...styles.title, color: '#f44336' }}>Explosão!</h1>
          <p style={styles.text}>A estabilidade chegou a 0%.</p>
          <button
            style={styles.btnSecondary}
            onClick={() => window.location.reload()}
          >
            TENTAR DE NOVO
          </button>
        </div>
      </div>
    );
  }
  if (screen === 'CODE') {
    return (
      <div style={styles.container}>
        <div style={styles.card}>
          <div style={{ fontSize: '60px' }}>🤖</div>
          <p style={styles.text}>Estás a chegar ao final do nível!!</p>
          <p style={styles.text}>
            Conversa com o LabPartner para poderes avançar.
          </p>
          <div style={{ ...styles.inputWrapper }}>
            <input
              style={styles.realInput}
              placeholder="Codigo do LabPartner"
              value={userCode}
              onChange={(e) => setUserCode(e.target.value)}
              onKeyDown={(e) => e.key === 'Enter' && handleCodeSubmit()}
            />
          </div>
            <button style={styles.btnSecondary} onClick={handleCodeSubmit}>
            SUBMETER
            </button>
            {feedback && (
            <div
              style={{
                ...styles.feedbackBox,
                background: feedback.type === 'success' ? '#e8f5e9' : '#ffebee',
                color: feedback.type === 'success' ? '#2e7d32' : '#c62828',
              }}
            >
              {feedback.type === 'success' ? '✅' : '⚠️'} {feedback.msg}
            </div>
          )}
        </div>
      </div>
    );
  }
  // TELA DE JOGO PRINCIPAL
  return (
    <div style={styles.gameLayout}>
      {/* BARRA LATERAL (Esquerda) */}
      <div style={styles.sidebar}>
        <h2
          style={{
            color: 'white',
            borderBottom: '1px solid rgba(255,255,255,0.2)',
            paddingBottom: '10px',
          }}
        >
          PAINEL
        </h2>

        <div style={styles.statBox}>
          <label style={styles.statLabel}>RANK</label>
          <div style={{ fontWeight: 'bold' }}>{level.rank}</div>
        </div>

        <div style={styles.statBox}>
          <label style={styles.statLabel}>XP</label>
          <div
            style={{ fontSize: '24px', fontWeight: 'bold', color: '#ffd700' }}
          >
            {xp}
          </div>
        </div>

        <div style={styles.statBox}>
          <label style={styles.statLabel}>ESTABILIDADE DO LAB</label>
          <div style={styles.barContainer}>
            <div
              style={{
                ...styles.barFill,
                width: `${stability}%`,
                backgroundColor: stability > 50 ? '#4caf50' : '#f44336',
              }}
            ></div>
          </div>
          <div
            style={{ textAlign: 'right', fontSize: '12px', marginTop: '5px' }}
          >
            {stability}%
          </div>
        </div>

        <div style={{ marginTop: 'auto' }}>
          <p style={{ fontSize: '12px', color: '#ccc', marginBottom: '5px' }}>
            Precisas de ajuda?
          </p>
          <button style={styles.chatBtn} onClick={openChatbot}>
            💬 ABRIR LAB PARTNER
          </button>
        </div>
      </div>

      {/* ÁREA PRINCIPAL (Direita) */}
      <div style={styles.mainArea}>
        <div style={styles.header}>
          <h2>
            Nível {level.id}: {exercise.title}
          </h2>
        </div>

        <div style={styles.labCard}>
          {!exercise.formulaVisible && (
            <div style={styles.retrievalBadge}>
              🧠 RETRIEVAL PRACTICE: Fórmula Oculta!
            </div>
          )}

          <p style={styles.storyText}>{exercise.story}</p>

          {/* Área Visual */}
          <div style={styles.visualArea}>
            <div style={styles.beakerContainer}>
              <div style={styles.beakerLiquid}></div>
              <span style={{ fontSize: '12px', marginTop: '5px' }}>
                Inicial
              </span>
            </div>
            <div style={{ fontSize: '30px', color: '#999' }}>➡</div>
            <div style={styles.beakerContainer}>
              <div
                style={{ ...styles.beakerLiquid, height: '80%', opacity: 0.3 }}
              ></div>
              <span style={{ fontSize: '12px', marginTop: '5px' }}>Final</span>
            </div>
          </div>

          {/* Fórmula */}
          <div style={styles.formulaBox}>
            {exercise.formulaVisible
              ? `Fórmula: ${exercise.formula}`
              : '⚠️ Tenta recordar a fórmula!'}
          </div>

          {/* Inputs Fixos */}
          <div style={styles.inputGrid}>
            {exercise.inputs.map((inp, idx) => (
              <div key={idx} style={styles.inputWrapper}>
                <label style={styles.label}>{inp.label}</label>
                <div style={styles.fakeInput}>{inp.value}</div>
              </div>
            ))}

            {/* Input Jogador */}
            <div style={{ ...styles.inputWrapper, gridColumn: 'span 2' }}>
              <label style={{ ...styles.label, color: '#2196f3' }}>
                🧪 {exercise.targetLabel}
              </label>
              <input
                type="number"
                style={styles.realInput}
                placeholder="?"
                value={userAnswer}
                onChange={(e) => setUserAnswer(e.target.value)}
                onKeyDown={(e) => e.key === 'Enter' && handleSubmit()}
              />
            </div>
          </div>

          <button style={styles.btnAction} onClick={handleSubmit}>
            MISTURAR / SUBMETER
          </button>

          {feedback && (
            <div
              style={{
                ...styles.feedbackBox,
                background: feedback.type === 'success' ? '#e8f5e9' : '#ffebee',
                color: feedback.type === 'success' ? '#2e7d32' : '#c62828',
              }}
            >
              {feedback.type === 'success' ? '✅' : '⚠️'} {feedback.msg}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

// --- ESTILOS CSS-IN-JS (Para garantir que fica bonito) ---
const styles = {
  container: {
    fontFamily: 'Segoe UI, sans-serif',
    height: '100vh',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    background: '#f0f2f5',
    color: '#333',
  },
  gameLayout: {
    display: 'flex',
    height: '100vh',
    width: '100vw',
    fontFamily: 'Segoe UI, sans-serif',
    overflow: 'hidden',
  },
  sidebar: {
    width: '280px',
    background: '#1a237e', // Azul escuro
    color: 'white',
    padding: '20px',
    display: 'flex',
    flexDirection: 'column',
    boxShadow: '4px 0 10px rgba(0,0,0,0.1)',
    zIndex: 10,
  },
  mainArea: {
    flex: 1,
    background: '#e3f2fd', // Azul muito claro
    padding: '40px',
    overflowY: 'auto',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  card: {
    background: 'white',
    padding: '40px',
    borderRadius: '20px',
    boxShadow: '0 10px 25px rgba(0,0,0,0.1)',
    textAlign: 'center',
    maxWidth: '500px',
    width: '90%',
  },
  labCard: {
    background: 'white',
    padding: '30px',
    borderRadius: '20px',
    boxShadow: '0 5px 15px rgba(0,0,0,0.05)',
    width: '100%',
    maxWidth: '600px',
    position: 'relative',
  },
  title: {
    color: '#1a237e',
    margin: '10px 0',
    fontSize: '32px',
  },
  text: {
    color: '#666',
    fontSize: '18px',
    marginBottom: '20px',
  },
  infoBox: {
    background: '#e3f2fd',
    padding: '15px',
    borderRadius: '10px',
    textAlign: 'left',
    fontSize: '14px',
    marginBottom: '20px',
    color: '#0d47a1',
  },
  header: {
    marginBottom: '20px',
    color: '#1565c0',
  },
  statBox: {
    background: 'rgba(255,255,255,0.1)',
    padding: '15px',
    borderRadius: '10px',
    marginBottom: '15px',
  },
  statLabel: {
    fontSize: '10px',
    opacity: 0.7,
    letterSpacing: '1px',
    display: 'block',
    marginBottom: '5px',
  },
  barContainer: {
    height: '10px',
    background: 'rgba(0,0,0,0.3)',
    borderRadius: '5px',
    overflow: 'hidden',
  },
  barFill: {
    height: '100%',
    transition: 'width 0.5s ease',
  },
  chatBtn: {
    background: '#00e676',
    color: '#004d40',
    border: 'none',
    width: '100%',
    padding: '15px',
    borderRadius: '10px',
    fontWeight: 'bold',
    cursor: 'pointer',
    boxShadow: '0 4px 0 #00a152',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    gap: '10px',
  },
  storyText: {
    fontSize: '18px',
    lineHeight: '1.6',
    color: '#37474f',
    marginBottom: '20px',
  },
  visualArea: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    gap: '20px',
    padding: '20px',
    background: '#f5f5f5',
    borderRadius: '15px',
    marginBottom: '20px',
    border: '1px dashed #ccc',
  },
  beakerContainer: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  beakerLiquid: {
    width: '50px',
    height: '60px',
    background: '#2196f3',
    border: '2px solid #555',
    borderTop: 'none',
    borderRadius: '0 0 10px 10px',
    position: 'relative',
    opacity: 0.8,
  },
  formulaBox: {
    textAlign: 'center',
    padding: '10px',
    background: '#fff9c4',
    border: '1px solid #fbc02d',
    color: '#f57f17',
    borderRadius: '8px',
    marginBottom: '20px',
    fontFamily: 'monospace',
    fontWeight: 'bold',
  },
  retrievalBadge: {
    position: 'absolute',
    top: '-10px',
    right: '-10px',
    background: '#9c27b0',
    color: 'white',
    padding: '5px 15px',
    borderRadius: '20px',
    fontSize: '12px',
    fontWeight: 'bold',
    boxShadow: '0 2px 5px rgba(0,0,0,0.2)',
  },
  inputGrid: {
    display: 'grid',
    gridTemplateColumns: '1fr 1fr',
    gap: '15px',
    marginBottom: '20px',
  },
  inputWrapper: {
    display: 'flex',
    flexDirection: 'column',
  },
  label: {
    fontSize: '12px',
    fontWeight: 'bold',
    color: '#78909c',
    marginBottom: '5px',
    textTransform: 'uppercase',
  },
  fakeInput: {
    background: '#eceff1',
    padding: '10px',
    borderRadius: '8px',
    color: '#455a64',
    fontFamily: 'monospace',
  },
  realInput: {
    padding: '12px',
    borderRadius: '8px',
    border: '2px solid #2196f3',
    fontSize: '18px',
    fontWeight: 'bold',
    textAlign: 'center',
    outline: 'none',
  },
  btnPrimary: {
    background: '#2196f3',
    color: 'white',
    border: 'none',
    padding: '15px 30px',
    fontSize: '18px',
    borderRadius: '30px',
    fontWeight: 'bold',
    cursor: 'pointer',
    boxShadow: '0 5px 0 #1565c0',
  },
  btnSecondary: {
    marginTop: '10px',
    background: '#78909c',
    color: 'white',
    border: 'none',
    padding: '15px 30px',
    fontSize: '18px',
    borderRadius: '30px',
    fontWeight: 'bold',
    cursor: 'pointer',
  },
  btnAction: {
    width: '100%',
    background: '#3f51b5',
    color: 'white',
    border: 'none',
    padding: '15px',
    borderRadius: '10px',
    fontSize: '16px',
    fontWeight: 'bold',
    cursor: 'pointer',
    boxShadow: '0 4px 0 #283593',
    transition: 'transform 0.1s',
  },
  feedbackBox: {
    marginTop: '15px',
    padding: '15px',
    borderRadius: '10px',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  avatar: {
    verticalAlign: 'center',
    width: '100px',
    height: '100px',
    borderRadius: '50%',
    borderColor: 'dimgray',
    alignSelf: 'center',
    marginTop: '40px',
  }
};
