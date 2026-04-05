import React, { useEffect, useRef, useState } from "react";

type Lang = "kz" | "ru" | "en";
type Page = "dashboard" | "reflection" | "mood" | "assistant" | "games" | "teams" | "noise" | "timer" | "student";

const tr = {
  kz: {
    appName: "Ustaz Bright",
    dashboard: "Басты бет",
    reflection: "Рефлексия",
    mood: "Психологиялық ахуал",
    assistant: "ЖИ көмекші",
    games: "Ойын жасау",
    teams: "Топқа бөлу",
    noise: "Шу деңгейі",
    timer: "Таймер",
    student: "Student mode",
    understood: "Түсіндім",
    questions: "Сұрағым бар",
    notUnderstood: "Түсінбедім",
    clicked: "оқушы басты",
    excellent: "Тамаша",
    normal: "Орташа",
    bad: "Нашар",
    getAnswer: "Жауап алу",
    startMic: "Микрофонды қосу",
    stopMic: "Микрофонды тоқтату",
    testMic: "Микрофонды тексеру",
    micManual: "Manual режим",
    micLive: "Микрофон істеп тұр",
    micHint: "Егер браузер рұқсат сұрамаса, сайтты Vercel/Netlify арқылы https-пен ашыңыз.",
    timerStart: "Бастау",
    timerPause: "Тоқтату",
    timerReset: "Қайта орнату",
    moodReset: "Ахуалды тазалау",
    reflectionReset: "Рефлексияны тазалау",
    teamCount: "Топ саны",
    teamNames: "Топ атаулары (әр жол — бір топ)",
    teamPick: "Оқушыға топ шығару",
    result: "Нәтиже",
    questionText: "Сұрақ мәтіні",
    options: "Нұсқа",
    correctAnswer: "Дұрыс жауап",
    points: "Ұпай",
    addQuestion: "Сұрақ қосу",
    createLink: "Сілтеме жасау",
    copyLink: "Сілтемені көшіру",
    openStudent: "Оқушы экранына өту",
    retry: "Қайта жауап беру",
    next: "Келесі",
    finish: "Аяқтау",
    score: "Ұпай",
    noGame: "Әзірге оқушыға ашылған ойын жоқ.",
    teacherMode: "Мұғалім режимі",
    studentMode: "Оқушы режимі",
    teacherName: "Мұғалім аты",
    className: "Сынып",
    studentsCount: "Оқушы саны",
    openReflection: "Рефлексия ашу",
    openMood: "Психологиялық ахуал ашу",
    openAssistant: "ЖИ көмекші ашу",
    openGames: "Ойын ашу",
    yourTeam: "Сенің тобың",
  },
  ru: {
    appName: "Ustaz Bright",
    dashboard: "Главная",
    reflection: "Рефлексия",
    mood: "Психологический настрой",
    assistant: "ЖИ помощник",
    games: "Создание игр",
    teams: "Распределение по группам",
    noise: "Уровень шума",
    timer: "Таймер",
    student: "Student mode",
    understood: "Понял(а)",
    questions: "Есть вопросы",
    notUnderstood: "Не понял(а)",
    clicked: "ученик(ов) нажали",
    excellent: "Отлично",
    normal: "Средне",
    bad: "Плохо",
    getAnswer: "Получить ответ",
    startMic: "Включить микрофон",
    stopMic: "Остановить микрофон",
    testMic: "Проверить микрофон",
    micManual: "Manual режим",
    micLive: "Микрофон работает",
    micHint: "Если браузер не спрашивает доступ, откройте сайт по https через Vercel/Netlify.",
    timerStart: "Старт",
    timerPause: "Пауза",
    timerReset: "Сброс",
    moodReset: "Очистить настрой",
    reflectionReset: "Очистить рефлексию",
    teamCount: "Количество групп",
    teamNames: "Названия групп (каждая строка — одна группа)",
    teamPick: "Показать группу ученику",
    result: "Результат",
    questionText: "Текст вопроса",
    options: "Вариант",
    correctAnswer: "Правильный ответ",
    points: "Баллы",
    addQuestion: "Добавить вопрос",
    createLink: "Создать ссылку",
    copyLink: "Копировать ссылку",
    openStudent: "Открыть экран ученика",
    retry: "Ответить снова",
    next: "Далее",
    finish: "Завершить",
    score: "Баллы",
    noGame: "Пока нет открытой игры для ученика.",
    teacherMode: "Режим учителя",
    studentMode: "Режим ученика",
    teacherName: "Имя учителя",
    className: "Класс",
    studentsCount: "Количество учеников",
    openReflection: "Открыть рефлексию",
    openMood: "Открыть настрой",
    openAssistant: "Открыть ЖИ помощника",
    openGames: "Открыть игры",
    yourTeam: "Твоя группа",
  },
  en: {
    appName: "Ustaz Bright",
    dashboard: "Dashboard",
    reflection: "Reflection",
    mood: "Mood check",
    assistant: "AI assistant",
    games: "Game builder",
    teams: "Team picker",
    noise: "Noise meter",
    timer: "Timer",
    student: "Student mode",
    understood: "I understood",
    questions: "I have questions",
    notUnderstood: "I did not understand",
    clicked: "students clicked",
    excellent: "Excellent",
    normal: "Okay",
    bad: "Bad",
    getAnswer: "Get answer",
    startMic: "Start microphone",
    stopMic: "Stop microphone",
    testMic: "Test microphone",
    micManual: "Manual mode",
    micLive: "Microphone is working",
    micHint: "If the browser does not ask permission, open the site over https with Vercel/Netlify.",
    timerStart: "Start",
    timerPause: "Pause",
    timerReset: "Reset",
    moodReset: "Clear mood",
    reflectionReset: "Clear reflection",
    teamCount: "Team count",
    teamNames: "Team names (one team per line)",
    teamPick: "Show team to student",
    result: "Result",
    questionText: "Question text",
    options: "Option",
    correctAnswer: "Correct answer",
    points: "Points",
    addQuestion: "Add question",
    createLink: "Create link",
    copyLink: "Copy link",
    openStudent: "Open student screen",
    retry: "Try again",
    next: "Next",
    finish: "Finish",
    score: "Score",
    noGame: "There is no active student game yet.",
    teacherMode: "Teacher mode",
    studentMode: "Student mode",
    teacherName: "Teacher name",
    className: "Class",
    studentsCount: "Students",
    openReflection: "Open reflection",
    openMood: "Open mood check",
    openAssistant: "Open AI assistant",
    openGames: "Open games",
    yourTeam: "Your team",
  }
} as const;

const reflectionImages = {
  understood: "/understood.png",
  questions: "/question.png",
  notUnderstood: "/sad.png",
};

function createGameLink(title: string) {
  const safeTitle = String(title || "game").toLowerCase().replace(/[^a-zа-яәіңғүұқөһ0-9]+/gi, "-").replace(/^-+|-+$/g, "");
  return `ustaz-bright.kz/game/${safeTitle || "game"}-demo`;
}

function computeQuizScore(questions: any[], answers: Record<number, string>) {
  return questions.reduce((sum, q) => sum + (answers[q.id] === q.correctAnswer ? Number(q.points || 0) : 0), 0);
}

function cardStyle(bg = "#fff"): React.CSSProperties {
  return {
    background: bg,
    borderRadius: 24,
    padding: 20,
    boxShadow: "0 10px 25px rgba(0,0,0,0.08)",
    border: "1px solid rgba(0,0,0,0.06)",
  };
}

export default function App() {
  const [lang, setLang] = useState<Lang>("kz");
  const t = tr[lang];
  const [role, setRole] = useState<"teacher" | "student">("teacher");
  const [page, setPage] = useState<Page>("dashboard");

  const [studentsCount, setStudentsCount] = useState(25);
  const [teacherName, setTeacherName] = useState("Нұрайым");
  const [className, setClassName] = useState("2-сынып");

  const [reflectionCounts, setReflectionCounts] = useState({ understood: 0, questions: 0, notUnderstood: 0 });
  const [moodCounts, setMoodCounts] = useState({ excellent: 0, normal: 0, bad: 0 });

  const [assistantQuestion, setAssistantQuestion] = useState("");
  const [assistantAnswer, setAssistantAnswer] = useState(tr.kz.assistant);

  const [teamCount, setTeamCount] = useState(4);
  const [teamNamesInput, setTeamNamesInput] = useState("Қыран
Сұңқар
Тұлпар
Алғыр");
  const [selectedTeam, setSelectedTeam] = useState<{ number: number; name: string } | null>(null);

  const [noiseLevel, setNoiseLevel] = useState(20);
  const [micMode, setMicMode] = useState<"manual" | "live">("manual");
  const [micMessage, setMicMessage] = useState("");
  const [micActive, setMicActive] = useState(false);
  const analyserRef = useRef<AnalyserNode | null>(null);
  const audioContextRef = useRef<AudioContext | null>(null);
  const streamRef = useRef<MediaStream | null>(null);
  const rafRef = useRef<number | null>(null);

  const [timerMinutes, setTimerMinutes] = useState(5);
  const [timerSeconds, setTimerSeconds] = useState(0);
  const [remaining, setRemaining] = useState(300);
  const [timerRunning, setTimerRunning] = useState(false);

  const [gameTitle, setGameTitle] = useState("Гүлдер бойынша тест");
  const [gameInstruction, setGameInstruction] = useState("Дұрыс жауапты таңдаңыз.");
  const [questions, setQuestions] = useState([
    { id: 1, text: "Гүл — бұл не?", options: ["Өсімдік", "Жануар", "Құс", "Көлік"], correctAnswer: "Өсімдік", points: 1 },
    { id: 2, text: "Раушан қай топқа жатады?", options: ["Гүл", "Жеміс", "Көкөніс", "Құс"], correctAnswer: "Гүл", points: 1 },
  ]);
  const [gameLink, setGameLink] = useState("");
  const [copied, setCopied] = useState(false);
  const [studentIndex, setStudentIndex] = useState(0);
  const [studentAnswers, setStudentAnswers] = useState<Record<number, string>>({});
  const [feedback, setFeedback] = useState<Record<number, "correct" | "wrong" | null>>({});
  const [score, setScore] = useState<number | null>(null);

  useEffect(() => { setAssistantAnswer(tr[lang].assistant); }, [lang]);

  useEffect(() => {
    if (!timerRunning || remaining <= 0) return;
    const id = window.setInterval(() => setRemaining((prev) => Math.max(0, prev - 1)), 1000);
    return () => clearInterval(id);
  }, [timerRunning, remaining]);

  useEffect(() => { if (remaining === 0) setTimerRunning(false); }, [remaining]);
  useEffect(() => () => stopMicrophone(), []);

  const totalMoodAnswers = moodCounts.excellent + moodCounts.normal + moodCounts.bad;
  const currentQuestion = questions[studentIndex];
  const noiseLabel = noiseLevel <= 30 ? t.quiet : noiseLevel <= 65 ? t.medium : t.loud;
  const noiseBg = noiseLevel <= 30 ? "#eaffea" : noiseLevel <= 65 ? "#fff5d8" : "#ffe3e3";

  function handleAsk() {
    const q = assistantQuestion.trim();
    if (!q) return setAssistantAnswer(tr[lang].assistant);
    if (q.toLowerCase().includes("топ")) return setAssistantAnswer(lang === "kz" ? "Мұғалім топ атауларын өзі жаза алады." : lang === "ru" ? "Учитель может сам писать названия групп." : "The teacher can set custom team names.");
    if (q.toLowerCase().includes("тест")) return setAssistantAnswer(lang === "kz" ? "Тесттің атауын, сұрақтарын, нұсқаларын және дұрыс жауабын өзгерте аласыз." : lang === "ru" ? "Можно менять название, вопросы, варианты и правильный ответ." : "You can edit the title, questions, options, and correct answer.");
    setAssistantAnswer(lang === "kz" ? `Сұрағыңыз қабылданды: "${q}"` : lang === "ru" ? `Ваш запрос принят: "${q}"` : `Your request was received: "${q}"`);
  }

  function pickTeam() {
    const names = teamNamesInput.split("\n").map((x) => x.trim()).filter(Boolean);
    const totalTeams = Math.max(1, teamCount);
    const number = Math.floor(Math.random() * totalTeams) + 1;
    const name = names.length ? names[(number - 1) % names.length] : `Top ${number}`;
    setSelectedTeam({ number, name });
  }

  async function startMicrophone() {
    setMicMessage("");
    if (!navigator?.mediaDevices?.getUserMedia) {
      setMicMode("manual");
      setMicMessage(t.micHint);
      return;
    }
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ audio: { echoCancellation: true, noiseSuppression: true, autoGainControl: true } });
      const AudioCtx = window.AudioContext || (window as any).webkitAudioContext;
      if (!AudioCtx) throw new Error("AudioContext unavailable");
      const audioContext = new AudioCtx();
      await audioContext.resume();
      const analyser = audioContext.createAnalyser();
      analyser.fftSize = 512;
      analyser.smoothingTimeConstant = 0.8;
      const source = audioContext.createMediaStreamSource(stream);
      source.connect(analyser);
      audioContextRef.current = audioContext;
      analyserRef.current = analyser;
      streamRef.current = stream;
      const dataArray = new Uint8Array(analyser.frequencyBinCount);
      const loop = () => {
        if (!analyserRef.current) return;
        analyser.getByteTimeDomainData(dataArray);
        let sum = 0;
        for (let i = 0; i < dataArray.length; i++) {
          const v = (dataArray[i] - 128) / 128;
          sum += v * v;
        }
        const rms = Math.sqrt(sum / dataArray.length);
        setNoiseLevel(Math.min(100, Math.max(0, Math.round(rms * 220))));
        rafRef.current = requestAnimationFrame(loop);
      };
      setMicMode("live");
      setMicActive(true);
      setMicMessage(t.micLive);
      loop();
    } catch {
      setMicMode("manual");
      setMicActive(false);
      setMicMessage(t.micHint);
    }
  }

  function stopMicrophone() {
    if (rafRef.current) cancelAnimationFrame(rafRef.current);
    rafRef.current = null;
    if (streamRef.current) streamRef.current.getTracks().forEach((t) => t.stop());
    streamRef.current = null;
    if (audioContextRef.current) audioContextRef.current.close().catch(() => {});
    audioContextRef.current = null;
    analyserRef.current = null;
    setMicActive(false);
    setMicMode("manual");
  }

  async function testMicrophone() {
    await startMicrophone();
    setTimeout(() => {
      if (!streamRef.current) {
        setMicMode("manual");
        setMicMessage(t.micHint);
        setNoiseLevel(35);
      }
    }, 1200);
  }

  function resetTimer() {
    setRemaining(timerMinutes * 60 + timerSeconds);
    setTimerRunning(false);
  }

  function generateLink() {
    setGameLink(createGameLink(gameTitle));
    setStudentIndex(0);
    setStudentAnswers({});
    setFeedback({});
    setScore(null);
  }

  async function copyLink() {
    if (!gameLink || !navigator?.clipboard) return;
    await navigator.clipboard.writeText(gameLink);
    setCopied(true);
    setTimeout(() => setCopied(false), 1200);
  }

  function addQuestion() {
    setQuestions((prev) => [...prev, { id: Date.now(), text: "", options: ["", "", "", ""], correctAnswer: "", points: 1 }]);
  }

  function updateQuestion(id: number, field: string, value: any) {
    setQuestions((prev) => prev.map((q) => (q.id === id ? { ...q, [field]: value } : q)));
  }

  function updateOption(id: number, idx: number, value: string) {
    setQuestions((prev) => prev.map((q) => {
      if (q.id !== id) return q;
      const options = [...q.options];
      options[idx] = value;
      return { ...q, options };
    }));
  }

  function handleStudentAnswer(option: string) {
    const ok = option === currentQuestion.correctAnswer;
    setStudentAnswers((prev) => ({ ...prev, [currentQuestion.id]: option }));
    setFeedback((prev) => ({ ...prev, [currentQuestion.id]: ok ? "correct" : "wrong" }));
  }

  function retryQuestion() {
    setFeedback((prev) => ({ ...prev, [currentQuestion.id]: null }));
    setStudentAnswers((prev) => {
      const next = { ...prev };
      delete next[currentQuestion.id];
      return next;
    });
  }

  function finishGame() {
    setScore(computeQuizScore(questions, studentAnswers));
  }

  const menu = [
    ["dashboard", t.dashboard], ["reflection", t.reflection], ["mood", t.mood], ["assistant", t.assistant],
    ["games", t.games], ["teams", t.teams], ["noise", t.noise], ["timer", t.timer], ["student", t.student],
  ] as const;

  const reflectionSection = <div style={cardStyle()}><h2>{t.reflection}</h2><div style={{display:"grid",gridTemplateColumns:"repeat(auto-fit,minmax(220px,1fr))",gap:16}}>{[
      ["understood", t.understood], ["questions", t.questions], ["notUnderstood", t.notUnderstood]
    ].map(([key,title]) => <button key={key} onClick={() => setReflectionCounts(prev => ({...prev, [key]: (prev as any)[key] + 1}))} style={{...cardStyle("#fff"),cursor:"pointer",textAlign:"left"}}><img src={reflectionImages[key as keyof typeof reflectionImages]} style={{width:80,height:80,objectFit:"contain"}} /><div style={{fontSize:24,fontWeight:800,marginTop:8}}>{title}</div><div style={{marginTop:8}}>{(reflectionCounts as any)[key]} {t.clicked}</div></button>)}</div><div style={{marginTop:16}}><Button onClick={() => setReflectionCounts({understood:0,questions:0,notUnderstood:0})}>{t.reflectionReset}</Button></div></div>;

  const moodSection = <div style={cardStyle()}><h2>{t.mood}</h2><div style={{display:"grid",gridTemplateColumns:"repeat(auto-fit,minmax(220px,1fr))",gap:16}}>{[
      ["excellent", t.excellent, "😊"], ["normal", t.normal, "😐"], ["bad", t.bad, "☹️"]
    ].map(([key,title,emoji]) => <button key={key} onClick={() => setMoodCounts(prev => ({...prev, [key]: (prev as any)[key] + 1}))} style={{...cardStyle("#fff"),cursor:"pointer",textAlign:"left"}}><div style={{fontSize:42}}>{emoji}</div><div style={{fontSize:24,fontWeight:800,marginTop:8}}>{title}</div><div style={{marginTop:8}}>{(moodCounts as any)[key]} {t.clicked}</div></button>)}</div><div style={{marginTop:16,display:"flex",gap:12,alignItems:"center"}}><Button onClick={() => setMoodCounts({excellent:0,normal:0,bad:0})}>{t.moodReset}</Button><Badge>{totalMoodAnswers} {t.clicked}</Badge></div></div>;

  const assistantSection = <div style={cardStyle()}><h2>{t.assistant}</h2><div style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:16}}><Textarea value={assistantQuestion} onChange={(e) => setAssistantQuestion(e.target.value)} placeholder={tr[lang].assistant} /><div style={{...cardStyle("#f7f0ff"),minHeight:180}}>{assistantAnswer}</div></div><div style={{marginTop:16}}><Button onClick={handleAsk}>{t.getAnswer}</Button></div></div>;

  const teamsSection = <div style={cardStyle()}><h2>{t.teams}</h2><div style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:16}}><div><div style={{marginBottom:12}}><div style={{marginBottom:6}}>{t.teamCount}</div><Input type="number" value={teamCount} onChange={(e) => setTeamCount(Number(e.target.value) || 1)} /></div><div style={{marginBottom:12}}><div style={{marginBottom:6}}>{t.teamNames}</div><Textarea value={teamNamesInput} onChange={(e) => setTeamNamesInput(e.target.value)} /></div><Button onClick={pickTeam}>{t.teamPick}</Button></div><div style={{...cardStyle("#ecfff1"),textAlign:"center"}}><div>{t.result}</div><div style={{fontSize:56,fontWeight:900}}>{selectedTeam?.number ?? "-"}</div><div style={{fontSize:28}}>{selectedTeam?.name ?? "-"}</div></div></div></div>;

  const noiseSection = <div style={cardStyle()}><h2>{t.noise}</h2><div style={{display:"flex",gap:12,flexWrap:"wrap",marginBottom:12}}>{!micActive ? <Button onClick={startMicrophone}>{t.startMic}</Button> : <Button onClick={stopMicrophone}>{t.stopMic}</Button>}<Button onClick={testMicrophone}>{t.testMic}</Button><Badge>{micMode === "live" ? t.micLive : t.micManual}</Badge></div><div style={{marginBottom:12,color:"#666"}}>{micMessage || t.micHint}</div>{micMode === "manual" && <input type="range" min={0} max={100} value={noiseLevel} onChange={(e) => setNoiseLevel(Number(e.target.value))} style={{width:"100%"}} />}<div style={{...cardStyle(noiseBg),marginTop:16}}><div>{t.noise}</div><div style={{fontSize:60,fontWeight:900}}>{noiseLevel}</div><div>{noiseLabel}</div><div style={{width:"100%",height:16,background:"rgba(255,255,255,0.7)",borderRadius:999,overflow:"hidden"}}><div style={{width:`${noiseLevel}%`,height:"100%",background:noiseLevel <= 30 ? "#22c55e" : noiseLevel <= 65 ? "#f59e0b" : "#ef4444"}} /></div></div></div>;

  const timerSection = <div style={cardStyle()}><h2>{t.timer}</h2><div style={{display:"flex",gap:12,marginBottom:16}}><div><div>Min</div><Input type="number" value={timerMinutes} onChange={(e) => { const v = Number(e.target.value)||0; setTimerMinutes(v); setRemaining(v*60 + timerSeconds); }} /></div><div><div>Sec</div><Input type="number" value={timerSeconds} onChange={(e) => { const v = Number(e.target.value)||0; setTimerSeconds(v); setRemaining(timerMinutes*60 + v); }} /></div></div><div style={{...cardStyle("#f8eeff"),textAlign:"center"}}><div style={{fontSize:64,fontWeight:900}}>{String(Math.floor(remaining/60)).padStart(2,"0")}:{String(remaining%60).padStart(2,"0")}</div></div><div style={{display:"flex",gap:12,marginTop:16}}><Button onClick={() => setTimerRunning(true)}>{t.timerStart}</Button><Button onClick={() => setTimerRunning(false)}>{t.timerPause}</Button><Button onClick={resetTimer}>{t.timerReset}</Button></div></div>;

  const gamesSection = <div style={cardStyle()}><h2>{t.games}</h2><div style={{display:"grid",gridTemplateColumns:"1fr 1fr 1fr",gap:12}}><div><div style={{marginBottom:6}}>Title</div><Input value={gameTitle} onChange={(e) => setGameTitle(e.target.value)} /></div><div><div style={{marginBottom:6}}>Instruction</div><Input value={gameInstruction} onChange={(e) => setGameInstruction(e.target.value)} /></div><div><div style={{marginBottom:6}}>Link</div><Input value={gameLink} readOnly /></div></div><div style={{marginTop:20}}>{questions.map((q,qIndex) => <div key={q.id} style={{...cardStyle("#fff"),marginBottom:14}}><div style={{display:"flex",justifyContent:"space-between",gap:12}}><strong>{qIndex + 1}. {t.questionText}</strong><Button onClick={() => setQuestions((prev) => prev.length > 1 ? prev.filter((x) => x.id !== q.id) : prev)}>Delete</Button></div><Input value={q.text} onChange={(e) => updateQuestion(q.id, "text", e.target.value)} style={{marginTop:10}} /><div style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:10,marginTop:10}}>{q.options.map((opt, idx) => <Input key={idx} value={opt} onChange={(e) => updateOption(q.id, idx, e.target.value)} placeholder={`${t.options} ${idx+1}`} />)}</div><div style={{display:"grid",gridTemplateColumns:"1fr 150px",gap:10,marginTop:10}}><Input value={q.correctAnswer} onChange={(e) => updateQuestion(q.id, "correctAnswer", e.target.value)} placeholder={t.correctAnswer} /><Input type="number" value={q.points} onChange={(e) => updateQuestion(q.id, "points", Number(e.target.value)||0)} placeholder={t.points} /></div></div>)}</div><div style={{display:"flex",gap:12,flexWrap:"wrap"}}><Button onClick={addQuestion}>{t.addQuestion}</Button><Button onClick={generateLink}>{t.createLink}</Button><Button onClick={copyLink}>{copied ? "Copied" : t.copyLink}</Button><Button onClick={() => { setRole("student"); setPage("student"); }}>{t.openStudent}</Button></div></div>;

  const studentSection = <div style={cardStyle()}><h2>{t.student}</h2>{!gameLink ? <div>{t.noGame}</div> : <div><div style={{...cardStyle("#eefbff"),marginBottom:16}}><div style={{fontWeight:800}}>{gameTitle}</div><div>{gameInstruction}</div></div>{currentQuestion && <div style={cardStyle("#fff")}><div style={{fontWeight:800,marginBottom:12}}>{studentIndex+1}. {currentQuestion.text}</div><div style={{display:"grid",gap:10}}>{currentQuestion.options.map((opt, idx) => { const state = feedback[currentQuestion.id]; const selected = studentAnswers[currentQuestion.id] === opt; const correct = opt === currentQuestion.correctAnswer; let bg="#fff"; let border="#ddd"; if (state==="correct" && selected){bg="#dcfce7"; border="#22c55e";} if (state==="wrong" && selected){bg="#fee2e2"; border="#ef4444";} if (state==="wrong" && correct){bg="#ecfccb"; border="#84cc16";} return <button key={idx} onClick={() => handleStudentAnswer(opt)} style={{padding:14,borderRadius:16,border:`2px solid ${border}`,background:bg,textAlign:"left"}}>{opt}</button>; })}</div>{feedback[currentQuestion.id]==="wrong" && <div style={{marginTop:16}}><div style={{color:"#b91c1c",marginBottom:10}}>{tr[lang].wrong}</div><Button onClick={retryQuestion}>{t.retry}</Button></div>}{feedback[currentQuestion.id]==="correct" && <div style={{marginTop:16,color:"#15803d"}}>{tr[lang].correct}</div>}<div style={{display:"flex",gap:12,marginTop:16}}>{studentIndex < questions.length-1 ? <Button disabled={feedback[currentQuestion.id] !== "correct"} onClick={() => setStudentIndex((x) => x+1)}>{t.next}</Button> : <Button disabled={feedback[currentQuestion.id] !== "correct"} onClick={finishGame}>{t.finish}</Button>}</div></div>}{score !== null && <div style={{marginTop:16,...cardStyle("#eaffea")}}>{t.score}: {score}</div>}</div>}<div style={{marginTop:20}}>{moodSection}</div><div style={{marginTop:20}}>{reflectionSection}</div><div style={{marginTop:20}}>{teamsSection}</div></div>;

  let content: React.ReactNode = (
    <div style={{ display: "grid", gap: 16 }}>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(220px,1fr))", gap: 16 }}>
        <div style={{ ...cardStyle("#ffd6eb") }}><div>{t.studentsCount}</div><div style={{ fontSize: 42, fontWeight: 900 }}>{studentsCount}</div></div>
        <div style={{ ...cardStyle("#ece0ff") }}><div>{t.teams}</div><div style={{ fontSize: 42, fontWeight: 900 }}>{teamCount}</div></div>
        <div style={{ ...cardStyle("#dff7ff") }}><div>{t.reflection}</div><div style={{ fontSize: 42, fontWeight: 900 }}>{reflectionCounts.understood + reflectionCounts.questions + reflectionCounts.notUnderstood}</div></div>
        <div style={{ ...cardStyle("#ebffec") }}><div>{t.mood}</div><div style={{ fontSize: 42, fontWeight: 900 }}>{totalMoodAnswers}</div></div>
      </div>
      <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
        <Button onClick={() => setPage("reflection")}>{t.openReflection}</Button>
        <Button onClick={() => setPage("mood")}>{t.openMood}</Button>
        <Button onClick={() => setPage("assistant")}>{t.openAssistant}</Button>
        <Button onClick={() => setPage("games")}>{t.openGames}</Button>
      </div>
    </div>
  );

  if (page === "reflection") content = reflectionSection;
  if (page === "mood") content = moodSection;
  if (page === "assistant") content = assistantSection;
  if (page === "games") content = gamesSection;
  if (page === "teams") content = teamsSection;
  if (page === "noise") content = noiseSection;
  if (page === "timer") content = timerSection;
  if (page === "student") content = studentSection;

  return (
    <div style={{ minHeight: "100vh", padding: 24 }}>
      <div style={{ display: "flex", justifyContent: "space-between", gap: 16, flexWrap: "wrap", alignItems: "center", marginBottom: 20 }}>
        <div>
          <div style={{ fontSize: 34, fontWeight: 900, background: "linear-gradient(90deg,#e11d8a,#7c3aed,#0891b2)", WebkitBackgroundClip: "text", color: "transparent" }}>{t.appName}</div>
          <div style={{ color: "#666" }}>{teacherName} • {className}</div>
        </div>
        <div style={{ display: "flex", gap: 8, flexWrap: "wrap", alignItems: "center" }}>
          <button onClick={() => setLang("kz")} style={{padding:"10px 14px", borderRadius:14, border:"1px solid #ddd", background: lang==="kz" ? "#111" : "#fff", color: lang==="kz" ? "#fff" : "#111"}}>ҚАЗ</button>
          <button onClick={() => setLang("ru")} style={{padding:"10px 14px", borderRadius:14, border:"1px solid #ddd", background: lang==="ru" ? "#111" : "#fff", color: lang==="ru" ? "#fff" : "#111"}}>РУС</button>
          <button onClick={() => setLang("en")} style={{padding:"10px 14px", borderRadius:14, border:"1px solid #ddd", background: lang==="en" ? "#111" : "#fff", color: lang==="en" ? "#fff" : "#111"}}>ENG</button>
          <Button onClick={() => { setRole("teacher"); setPage("dashboard"); }}>{t.teacherMode}</Button>
          <Button onClick={() => { setRole("student"); setPage("student"); }}>{t.studentMode}</Button>
        </div>
      </div>

      <div style={{ display: "grid", gridTemplateColumns: "260px 1fr", gap: 20 }}>
        <aside style={cardStyle("rgba(255,255,255,0.82)")}>
          {menu.map(([key, label]) => (
            <button key={key} onClick={() => { setPage(key as Page); setRole(key === "student" ? "student" : "teacher"); }} style={{ width: "100%", padding: "14px 16px", marginBottom: 10, borderRadius: 16, border: "1px solid #eee", background: page === key ? "linear-gradient(90deg,#ec4899,#8b5cf6)" : "#fff", color: page === key ? "#fff" : "#222", textAlign: "left", fontWeight: 700, cursor: "pointer" }}>{label}</button>
          ))}
          <div style={{ marginTop: 16 }}>
            <div style={{ marginBottom: 6 }}>{t.teacherName}</div>
            <Input value={teacherName} onChange={(e) => setTeacherName(e.target.value)} />
            <div style={{ margin: "12px 0 6px" }}>{t.className}</div>
            <Input value={className} onChange={(e) => setClassName(e.target.value)} />
            <div style={{ margin: "12px 0 6px" }}>{t.studentsCount}</div>
            <Input type="number" value={studentsCount} onChange={(e) => setStudentsCount(Number(e.target.value) || 0)} />
          </div>
        </aside>

        <main>
          <div style={{ ...cardStyle("rgba(255,255,255,0.82)"), marginBottom: 16 }}>
            <div style={{ display: "inline-flex", gap: 8, alignItems: "center", background: "#fff", padding: "8px 14px", borderRadius: 999 }}>✨ {role === "teacher" ? t.teacherMode : t.studentMode}</div>
            <div style={{ fontSize: 36, fontWeight: 900, marginTop: 12 }}>{t.appName}</div>
          </div>
          {content}
        </main>
      </div>
    </div>
  );
}
