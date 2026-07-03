const KEY = "bioQuizFull_1_204_v2_explanations";
let state = { mode:"all", list:[], idx:0, answers:{}, wrong:[], history:[] };

function load(){
  try { return JSON.parse(localStorage.getItem(KEY)) || structuredClone(state); }
  catch(e){ return structuredClone(state); }
}
function save(){ localStorage.setItem(KEY, JSON.stringify(state)); }
function $(id){ return document.getElementById(id); }
function show(id){
  ["home","quiz","result","history"].forEach(x => $(x).classList.add("hidden"));
  $(id).classList.remove("hidden");
}
function escapeHtml(s){
  return String(s ?? "").replace(/[&<>"']/g, m => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[m]));
}
function init(){
  state = load();
  $("totalCount").textContent = QUESTIONS.length;
  $("wrongCount").textContent = (state.wrong || []).length;
  $("continueBtn").disabled = !state.list || !state.list.length;
  $("wrongBtn").disabled = !(state.wrong || []).length;
  show("home");
}
function start(mode){
  state = load();
  state.mode = mode;
  let list = [...Array(QUESTIONS.length).keys()];
  if(mode === "wrong"){
    list = (state.wrong || []).map(id => QUESTIONS.findIndex(q => q.id === id)).filter(i => i >= 0);
  }
  if(mode === "random"){
    list = list.sort(() => Math.random() - 0.5).slice(0, 20);
  }
  state.list = list;
  state.idx = 0;
  state.answers = {};
  save();
  render();
}
function resume(){
  state = load();
  if(!state.list || !state.list.length) return init();
  render();
}
function render(){
  show("quiz");
  const qi = state.list[state.idx];
  const q = QUESTIONS[qi];
  $("modeLabel").textContent = state.mode === "all" ? "全問" : state.mode === "wrong" ? "間違い復習" : "ランダム";
  $("qCounter").textContent = `${state.idx + 1}/${state.list.length}`;
  $("progress").style.width = `${(state.idx) / state.list.length * 100}%`;
  $("questionText").textContent = `No.${q.id}　${q.question}`;
  const ans = state.answers[q.id];
  $("choices").innerHTML = "";
  q.choices.forEach((c, i) => {
    const b = document.createElement("button");
    b.className = "choice";
    b.textContent = `${i + 1}. ${c}`;
    b.onclick = () => answer(i);
    if(ans !== undefined){
      b.disabled = true;
      if(i === q.answer) b.classList.add("correct");
      if(i === ans && i !== q.answer) b.classList.add("wrong");
    }
    $("choices").appendChild(b);
  });
  if(ans === undefined){
    $("feedback").innerHTML = "";
  } else {
    const resultClass = ans === q.answer ? "ok" : "ng";
    const resultText = ans === q.answer ? "正解です。" : `不正解です。正解は ${q.answer + 1}. ${escapeHtml(q.choices[q.answer])} です。`;
    $("feedback").innerHTML = `<div class="feedbackBox"><div class="${resultClass}">${resultText}</div>${q.explanation ? `<div class="explain">${escapeHtml(q.explanation).replace(/\n/g,"<br>")}</div>` : ""}</div>`;
  }
  $("prevBtn").disabled = state.idx === 0;
  $("nextBtn").textContent = state.idx === state.list.length - 1 ? "結果へ" : "次へ";
  save();
}
function answer(i){
  const q = QUESTIONS[state.list[state.idx]];
  state.answers[q.id] = i;
  if(i !== q.answer && !state.wrong.includes(q.id)) state.wrong.push(q.id);
  if(i === q.answer) state.wrong = (state.wrong || []).filter(id => id !== q.id);
  render();
}
function prev(){ if(state.idx > 0){ state.idx--; render(); } }
function next(){ if(state.idx < state.list.length - 1){ state.idx++; render(); } else result(false); }
function stopNow(){ result(true); }
function result(mid){
  show("result");
  const done = state.list.map(i => QUESTIONS[i]).filter(q => state.answers[q.id] !== undefined);
  const correct = done.filter(q => state.answers[q.id] === q.answer).length;
  $("resultTitle").textContent = mid ? "中間結果" : "結果";
  $("scoreStats").innerHTML = `<div class="stat">解答 ${done.length}問</div><div class="stat">正解 ${correct}問</div><div class="stat">正答率 ${done.length ? Math.round(correct / done.length * 100) : 0}%</div>`;
  $("wrongList").innerHTML = done.filter(q => state.answers[q.id] !== q.answer).map(q => `<div class="wrongItem"><b>No.${q.id}</b> ${escapeHtml(q.question)}<br>正解：${q.answer + 1}. ${escapeHtml(q.choices[q.answer])}${q.explanation ? `<br><br>${escapeHtml(q.explanation).replace(/\n/g,"<br>")}` : ""}</div>`).join("") || "間違えた問題はありません。";
  state.history = state.history || [];
  if(!mid){
    state.history.unshift({date:new Date().toLocaleString(), mode:state.mode, score:`${correct}/${done.length}`, rate:done.length ? Math.round(correct / done.length * 100) : 0});
    state.list = [];
    state.idx = 0;
  }
  save();
}
function showHistory(){
  state = load();
  show("history");
  $("historyBody").innerHTML = (state.history || []).map(h => `<tr><td>${escapeHtml(h.date)}</td><td>${escapeHtml(h.mode)}</td><td>${escapeHtml(h.score)}</td><td>${h.rate}%</td></tr>`).join("") || "<tr><td colspan=4>記録はありません。</td></tr>";
  const wrongIds = state.wrong || [];
  $("weakList").innerHTML = wrongIds.length ? wrongIds.map(id => {
    const q = QUESTIONS.find(x => x.id === id);
    return q ? `<div class="wrongItem"><b>No.${q.id}</b> ${escapeHtml(q.question)}<br>正解：${q.answer + 1}. ${escapeHtml(q.choices[q.answer])}</div>` : "";
  }).join("") : "直近の間違いはありません。";
}
function resetAll(){
  if(confirm("保存データを削除しますか？")){
    localStorage.removeItem(KEY);
    init();
  }
}
window.addEventListener("load", init);