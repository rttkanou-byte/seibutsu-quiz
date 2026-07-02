// 高校生物4択問題アプリ 統合版（No.1〜204）
// answer は0始まり、answerNumber はExcelと同じ1〜4です。
const QUESTIONS = [
  {
    "id": 1,
    "question": "生体内で起こる様々な化学反応をまとめてなんというか",
    "choices": [
      "同化",
      "異化",
      "代謝",
      "ATP"
    ],
    "answer": 2,
    "answerNumber": 3,
    "explanation": ""
  },
  {
    "id": 2,
    "question": "酸化・還元とエネルギーの出入りで光合成の還元型なのはなにか",
    "choices": [
      "NADPH",
      "NADP+",
      "FADH２",
      "FAD"
    ],
    "answer": 0,
    "answerNumber": 1,
    "explanation": ""
  },
  {
    "id": 3,
    "question": "ADPが結合しATPになるときリン酸はいくつ必要か",
    "choices": [
      "1",
      "2",
      "3",
      "4"
    ],
    "answer": 0,
    "answerNumber": 1,
    "explanation": ""
  },
  {
    "id": 4,
    "question": "ADPはいくつリン酸をもっているか",
    "choices": [
      "1",
      "2",
      "3",
      "4"
    ],
    "answer": 1,
    "answerNumber": 2,
    "explanation": ""
  },
  {
    "id": 5,
    "question": "チラコイドで光合成が起こるとき分解される物質はなにか",
    "choices": [
      "タンパク質",
      "水",
      "ATP",
      "NADPH"
    ],
    "answer": 1,
    "answerNumber": 2,
    "explanation": ""
  },
  {
    "id": 6,
    "question": "チラコイドの反応で合成されたNADPHとATPを用いて、二酸化炭素が固定され、有機物が合成される。この反応過程を答えよ",
    "choices": [
      "カンビン回路",
      "カルビン回路",
      "カルバン回路",
      "ケルビン回路"
    ],
    "answer": 1,
    "answerNumber": 2,
    "explanation": ""
  },
  {
    "id": 7,
    "question": "e-の受け渡しをするタンパク質でできた反応系内をなんとよぶか",
    "choices": [
      "電子伝達系",
      "光化学反応",
      "光化学系Ｉ",
      "光化学系Ⅱ"
    ],
    "answer": 0,
    "answerNumber": 1,
    "explanation": ""
  },
  {
    "id": 8,
    "question": "PGAはATPによって還元された後、何によって還元されるか",
    "choices": [
      "NADP+",
      "FAD",
      "NADPH",
      "RuBP"
    ],
    "answer": 2,
    "answerNumber": 3,
    "explanation": ""
  },
  {
    "id": 9,
    "question": "C4植物を分解して二酸化炭素を取り出して光合成を行う。このような代謝経路はなにか、、またこれを行う代謝経路は",
    "choices": [
      "CAN　CAN植物",
      "CAM CAM植物",
      "TAN TAN植物",
      "GOM GOM植物"
    ],
    "answer": 1,
    "answerNumber": 2,
    "explanation": ""
  },
  {
    "id": 10,
    "question": "CO2をC3化合物であるPGAに固定してカルビン回路に取り込んでいる植物は",
    "choices": [
      "C3植物",
      "C5植物",
      "C4植物",
      "C8植物"
    ],
    "answer": 0,
    "answerNumber": 1,
    "explanation": ""
  },
  {
    "id": 11,
    "question": "C4植物にはなんの植物があるか、当てはまってない植物を見つけろ",
    "choices": [
      "ソルガム",
      "トウモロコシ",
      "サトウキビ",
      "タマネギ"
    ],
    "answer": 3,
    "answerNumber": 4,
    "explanation": ""
  },
  {
    "id": 12,
    "question": "C3植物はどれか",
    "choices": [
      "小麦",
      "ぴーまん",
      "きゅうり",
      "トマト"
    ],
    "answer": 0,
    "answerNumber": 1,
    "explanation": ""
  },
  {
    "id": 13,
    "question": "細菌の中に光エネルギーを用いず炭酸同化を行うことをなんと呼ぶか",
    "choices": [
      "光合成",
      "化学合成",
      "ATP合成",
      "代謝"
    ],
    "answer": 1,
    "answerNumber": 2,
    "explanation": ""
  },
  {
    "id": 14,
    "question": "緑色硫黄細菌や紅色硫黄細菌が持っている光合成色素はなにか",
    "choices": [
      "バクテリオクロロフィル",
      "クロロフィル",
      "ミステリアスクロロフィル",
      "バクテリアスクロロフィル"
    ],
    "answer": 0,
    "answerNumber": 1,
    "explanation": ""
  },
  {
    "id": 15,
    "question": "バクテリオクロロフィルを持っている細菌は硫化水素から何を得て硫黄が生じるか",
    "choices": [
      "ATP",
      "二酸化炭素",
      "酸素",
      "電子"
    ],
    "answer": 3,
    "answerNumber": 4,
    "explanation": ""
  },
  {
    "id": 16,
    "question": "緑葉をすりつぶした液にシュウ酸鉄（Ⅲ）を加えて光を当てると酸素が発生する反応はなにか",
    "choices": [
      "化学反応",
      "科学反応",
      "ヒル反応",
      "シュウ酸反応"
    ],
    "answer": 2,
    "answerNumber": 3,
    "explanation": ""
  },
  {
    "id": 17,
    "question": "酸素を用いて有機物を分解し、ATPを合成する過程をなんという",
    "choices": [
      "光合成",
      "呼吸",
      "解糖系",
      "再合成"
    ],
    "answer": 1,
    "answerNumber": 2,
    "explanation": ""
  },
  {
    "id": 18,
    "question": "呼吸の反応経路でATPが最も多く生成されるのはどれか",
    "choices": [
      "解糖系",
      "クエン酸回路",
      "電子伝達系",
      "中間生成物"
    ],
    "answer": 2,
    "answerNumber": 3,
    "explanation": ""
  },
  {
    "id": 19,
    "question": "生物が呼吸を行うときに放出する二酸化炭素と外界から吸収する酸素との体積比をなんという",
    "choices": [
      "呼吸積",
      "呼吸商",
      "呼吸式",
      "呼吸比"
    ],
    "answer": 1,
    "answerNumber": 2,
    "explanation": ""
  },
  {
    "id": 20,
    "question": "物質が酸化される過程で放出されるエネルギーを用いてATPを合成する反応をなんという",
    "choices": [
      "オキサロ酢酸",
      "クエン酸",
      "リン酸化",
      "酸化的リン酸化"
    ],
    "answer": 3,
    "answerNumber": 4,
    "explanation": ""
  },
  {
    "id": 21,
    "question": "植物の光合成はどこで行われているか。",
    "choices": [
      "ミトコンドリア",
      "葉緑体",
      "気孔",
      "核"
    ],
    "answer": 1,
    "answerNumber": 2,
    "explanation": ""
  },
  {
    "id": 22,
    "question": "代謝の中で単純な物質から複雑な物質を作ることをなんというか。",
    "choices": [
      "異化",
      "呼吸",
      "光合成",
      "同化"
    ],
    "answer": 3,
    "answerNumber": 4,
    "explanation": ""
  },
  {
    "id": 23,
    "question": "光合成色素などの物質がいろいろな波長の光を吸収するようすを示したものをなんというか。",
    "choices": [
      "吸収スペクトル",
      "作用スペクトル",
      "カロテン",
      "キサントフィル"
    ],
    "answer": 0,
    "answerNumber": 1,
    "explanation": ""
  },
  {
    "id": 24,
    "question": "生物が外界から二酸化炭素を取り入れ、これを炭素源として有機物を合成する働きをなんというか。",
    "choices": [
      "光合成",
      "同化",
      "炭酸同化",
      "異化"
    ],
    "answer": 2,
    "answerNumber": 3,
    "explanation": ""
  },
  {
    "id": 25,
    "question": "カルビン回路全体でRuBP６分子につきH2O何分子生じるか。",
    "choices": [
      "2",
      "6",
      "12",
      "24"
    ],
    "answer": 1,
    "answerNumber": 2,
    "explanation": ""
  },
  {
    "id": 26,
    "question": "カルビン回路に取り込まれたCO2は何と反応するか。",
    "choices": [
      "RuBP",
      "ATP",
      "GAP",
      "H2O"
    ],
    "answer": 0,
    "answerNumber": 1,
    "explanation": ""
  },
  {
    "id": 27,
    "question": "チラコイドで起こる反応はどれか。",
    "choices": [
      "二酸化炭素の固定",
      "PGAの還元",
      "光化学反応",
      "RuBPの再生"
    ],
    "answer": 2,
    "answerNumber": 3,
    "explanation": ""
  },
  {
    "id": 28,
    "question": "カルビン回路の反応過程は、二酸化炭素の固定、PGAの還元、あと何の３つの段階に分けられるか。",
    "choices": [
      "二酸化炭素の放出",
      "酸化還元反応",
      "RuBPの再生",
      "光リン酸化"
    ],
    "answer": 2,
    "answerNumber": 3,
    "explanation": ""
  },
  {
    "id": 29,
    "question": "C4化合物であるオキサロ酢酸として固定される反応は何という酵素が触媒として働くか。",
    "choices": [
      "PEPカルボキシラーゼ",
      "RuBPカルボキシラーゼ",
      "ATP合成酵素",
      "グルコース"
    ],
    "answer": 0,
    "answerNumber": 1,
    "explanation": ""
  },
  {
    "id": 30,
    "question": "C4植物は二酸化炭素をC4化合物として細胞内に取り込み、その分解によって二酸化炭素を取り出して何という回路を利用するか。",
    "choices": [
      "クエン酸回路",
      "ピルビン回路",
      "カルビン回路",
      "オキサロ回路"
    ],
    "answer": 2,
    "answerNumber": 3,
    "explanation": ""
  },
  {
    "id": 31,
    "question": "C4植物は、光合成を行う細胞として、葉肉植物と何という細胞を持っているか。",
    "choices": [
      "抗体産生細胞",
      "維管束鞘細胞",
      "樹状細胞",
      "キラーT細胞"
    ],
    "answer": 1,
    "answerNumber": 2,
    "explanation": ""
  },
  {
    "id": 32,
    "question": "植物や藻類などの光合成生物が、大気中の二酸化炭素を取り込んで有機物へと変換する反応を触媒する最も重要な酵素を何と言うか。",
    "choices": [
      "デンプン",
      "リパーゼ",
      "ルビスコ",
      "アミラーゼ"
    ],
    "answer": 2,
    "answerNumber": 3,
    "explanation": ""
  },
  {
    "id": 33,
    "question": "緑色硫黄細菌や紅色硫黄細菌が光合成色素としてもっているものはなにか",
    "choices": [
      "クロロフィルa",
      "クロロフィルb",
      "キサントフィル",
      "バクテリオクロロフィル"
    ],
    "answer": 3,
    "answerNumber": 4,
    "explanation": ""
  },
  {
    "id": 34,
    "question": "土壌中に生息する亜硝酸菌や硝酸菌などが行う光エネルギーを用いらず無機物を酸化することでエネルギーを得る炭酸同化をなんというか",
    "choices": [
      "酸化合成",
      "化学合成",
      "土壌合成",
      "硝酸イオン合成"
    ],
    "answer": 1,
    "answerNumber": 2,
    "explanation": ""
  },
  {
    "id": 35,
    "question": "シアノバクテリアが地球に現れたことで地球環境はどのように変化したか",
    "choices": [
      "大気温度が上昇した",
      "CO2濃度が上昇した",
      "O2濃度が上昇した",
      "オゾン層が薄くなった"
    ],
    "answer": 2,
    "answerNumber": 3,
    "explanation": ""
  },
  {
    "id": 36,
    "question": "以下の空欄に当てはまるものを答えよ。1939年からのヒルの研究によって植物体内における電子受容体は（　　　）であるということが証明された。",
    "choices": [
      "FAD+",
      "GAP",
      "RuBP",
      "NADP+"
    ],
    "answer": 3,
    "answerNumber": 4,
    "explanation": ""
  },
  {
    "id": 37,
    "question": "真核生物の呼吸には、何が関わっているか",
    "choices": [
      "マトリックス",
      "ミトコンドリア",
      "クリステ",
      "クロロフィル"
    ],
    "answer": 1,
    "answerNumber": 2,
    "explanation": ""
  },
  {
    "id": 38,
    "question": "物質が酸化される過程で放出されるエネルギーを用いてATPを合成する反応は何",
    "choices": [
      "光合成",
      "気質レベルのリン酸化",
      "光化学反応",
      "酸化的リン酸化"
    ],
    "answer": 3,
    "answerNumber": 4,
    "explanation": ""
  },
  {
    "id": 39,
    "question": "ミトコンドリアの内膜に囲まれてる領域をなんという",
    "choices": [
      "膜間腔",
      "マトリックス",
      "クエン酸回路",
      "解糖系"
    ],
    "answer": 1,
    "answerNumber": 2,
    "explanation": ""
  },
  {
    "id": 40,
    "question": "アセチルCoAは、何と結合したらクエン酸になるでしょうか",
    "choices": [
      "オキサロ酢酸",
      "コハク酸",
      "ケトグルタル酸",
      "ピルビン酸"
    ],
    "answer": 0,
    "answerNumber": 1,
    "explanation": ""
  },
  {
    "id": 41,
    "question": "生体内で起こる様々な化学反応はなんというか",
    "choices": [
      "エネルギー",
      "代謝",
      "吸収スペクトル",
      "ATP（アデノシン三リン酸"
    ],
    "answer": 1,
    "answerNumber": 2,
    "explanation": ""
  },
  {
    "id": 42,
    "question": "光合成のエネルギー移動はなんの物質がかかわっているか",
    "choices": [
      "NADP",
      "RNA",
      "NAD",
      "FAD"
    ],
    "answer": 0,
    "answerNumber": 1,
    "explanation": ""
  },
  {
    "id": 43,
    "question": "生物が外界から二酸化炭素を取り入れ有機物を合成する働きをなんという？",
    "choices": [
      "炭酸同化",
      "光化学反応",
      "解糖系",
      "ATP合成酵素"
    ],
    "answer": 0,
    "answerNumber": 1,
    "explanation": ""
  },
  {
    "id": 44,
    "question": "葉緑体は外膜と内膜の二重の何からなっているか",
    "choices": [
      "チラコイド膜",
      "膜間腔",
      "光合成色素",
      "生体膜"
    ],
    "answer": 3,
    "answerNumber": 4,
    "explanation": ""
  },
  {
    "id": 45,
    "question": "カルビン回路は植物のどんな働きに関係してるか",
    "choices": [
      "呼吸",
      "光合成",
      "消化",
      "睡眠"
    ],
    "answer": 1,
    "answerNumber": 2,
    "explanation": ""
  },
  {
    "id": 46,
    "question": "植物の葉緑体で光エネルギーを利用してATPを合成する過程をなんというか",
    "choices": [
      "解糖系",
      "クエン酸回路",
      "光リン酸化",
      "発酵"
    ],
    "answer": 2,
    "answerNumber": 3,
    "explanation": ""
  },
  {
    "id": 47,
    "question": "呼吸細胞においてミトコンドリア内で電子を受け渡しながらATP合成に必要なエネルギーを生み出す過程をなんていうか",
    "choices": [
      "電子伝達系",
      "カルビン回路",
      "光リン酸化",
      "ストロマ"
    ],
    "answer": 0,
    "answerNumber": 1,
    "explanation": ""
  },
  {
    "id": 48,
    "question": "チラコイド膜で水素イオンの流れを利用してATP合成を行う構造物の名称を答えよ",
    "choices": [
      "ストロマ",
      "カルビン回路",
      "クロロフィル",
      "ATP合成酵素"
    ],
    "answer": 3,
    "answerNumber": 4,
    "explanation": ""
  },
  {
    "id": 49,
    "question": "連続的に合成されるヌクレオチド鎖をなんと言うか",
    "choices": [
      "リーディング鎖",
      "ショーディング鎖",
      "ラギング鎖",
      "ヌクレオチド鎖"
    ],
    "answer": 0,
    "answerNumber": 1,
    "explanation": ""
  },
  {
    "id": 50,
    "question": "もとのDNAの一方のヌクレオチド鎖が、複製されたDNAにそのまま受け継がれるような複製をなんというか",
    "choices": [
      "複製起点",
      "DNA複製",
      "半保存的複製",
      "RNA複製"
    ],
    "answer": 2,
    "answerNumber": 3,
    "explanation": ""
  },
  {
    "id": 51,
    "question": "光合成を行う細菌をなんというか",
    "choices": [
      "硫黄細菌",
      "光合成細菌",
      "葉緑体",
      "酵母細菌"
    ],
    "answer": 1,
    "answerNumber": 2,
    "explanation": ""
  },
  {
    "id": 52,
    "question": "光合成細菌は光合成色素として何を持つか",
    "choices": [
      "ミトコンドリア",
      "シアノバクテリアクロロフィル",
      "バクテリオクロロフィル",
      "バクテリオファージ"
    ],
    "answer": 2,
    "answerNumber": 3,
    "explanation": ""
  },
  {
    "id": 53,
    "question": "無機物の酸化によって得られる化学エネルギーを利用した炭酸同化をなんというか",
    "choices": [
      "化学合成",
      "化学反応",
      "光合成",
      "呼吸"
    ],
    "answer": 0,
    "answerNumber": 1,
    "explanation": ""
  },
  {
    "id": 54,
    "question": "解糖系はグルコースが細胞質基質で多くの酵素によって段階的に分解され何という物質が生じる過程であるか",
    "choices": [
      "ピルビン酸",
      "グルセルアルデヒドリン酸",
      "リン酸",
      "クエン酸"
    ],
    "answer": 0,
    "answerNumber": 1,
    "explanation": ""
  },
  {
    "id": 55,
    "question": "ATPを合成する過程を何というか",
    "choices": [
      "同化",
      "光合成",
      "呼吸",
      "分解"
    ],
    "answer": 2,
    "answerNumber": 3,
    "explanation": ""
  },
  {
    "id": 56,
    "question": "内膜で囲まれた領域を何というか",
    "choices": [
      "クリステ",
      "マトリックス",
      "膜間腔",
      "環状DNA"
    ],
    "answer": 1,
    "answerNumber": 2,
    "explanation": ""
  },
  {
    "id": 57,
    "question": "真核生物の呼吸には何が関わっているか",
    "choices": [
      "タンパク質",
      "ミトコンドリア",
      "葉緑体",
      "脂肪"
    ],
    "answer": 1,
    "answerNumber": 2,
    "explanation": ""
  },
  {
    "id": 58,
    "question": "生物が外界から二酸化炭素を取り入れ、これを炭素源として有機物を作る働き",
    "choices": [
      "光合成",
      "同化",
      "炭酸同化(炭素同化)",
      "チラコイド"
    ],
    "answer": 2,
    "answerNumber": 3,
    "explanation": ""
  },
  {
    "id": 59,
    "question": "植物の光合成はどこで行われるか",
    "choices": [
      "葉緑体",
      "クロロフィル",
      "染色体",
      "代謝"
    ],
    "answer": 0,
    "answerNumber": 1,
    "explanation": ""
  },
  {
    "id": 60,
    "question": "単純な物質から複雑な物質を作るのはなんというか",
    "choices": [
      "代謝",
      "同化",
      "異化",
      "合成"
    ],
    "answer": 1,
    "answerNumber": 2,
    "explanation": ""
  },
  {
    "id": 61,
    "question": "NADの正式名称はなんというか",
    "choices": [
      "ニコチンアミドモノヌクレオチド",
      "グリセルアルデヒドリン酸",
      "ホスホグリセリン酸",
      "ニコチンアミドアデニンジヌクレオチド"
    ],
    "answer": 3,
    "answerNumber": 4,
    "explanation": ""
  },
  {
    "id": 62,
    "question": "カルビン回路で二酸化炭素を最初に固定する物質は",
    "choices": [
      "NADPH",
      "リブロースビスリン酸",
      "ATP",
      "グルコース"
    ],
    "answer": 1,
    "answerNumber": 2,
    "explanation": ""
  },
  {
    "id": 63,
    "question": "カルビン回路が行われる場所はどこか",
    "choices": [
      "チラコイド膜",
      "ストロマ",
      "細胞膜",
      "核"
    ],
    "answer": 1,
    "answerNumber": 2,
    "explanation": ""
  },
  {
    "id": 64,
    "question": "ATPやNADPHが主につくられる場所は",
    "choices": [
      "ストロマ",
      "細胞壁",
      "チラコイド膜",
      "リボソーム"
    ],
    "answer": 2,
    "answerNumber": 3,
    "explanation": ""
  },
  {
    "id": 65,
    "question": "カルビン回路の目的は",
    "choices": [
      "有機物を作る",
      "ATPをつくる",
      "光を吸収する",
      "酸素を分解する"
    ],
    "answer": 0,
    "answerNumber": 1,
    "explanation": ""
  },
  {
    "id": 66,
    "question": "ラギング鎖では、複数の短いヌクレオチド鎖が断続的に合成されるが、これらはなんと呼ばれているか",
    "choices": [
      "岡崎フランシス",
      "岡崎プラギメント",
      "岡島フラシコ",
      "岡崎フラグメント"
    ],
    "answer": 3,
    "answerNumber": 4,
    "explanation": ""
  },
  {
    "id": 67,
    "question": "DNAが複製される際に、まず、DNA◯◯◯◯◯と呼ばれる特例部分の塩基間の水素結合が切断され開裂する。〇〇とはなにか",
    "choices": [
      "DNAポリメラーゼ",
      "DNAリガーゼ",
      "DNAヘリガーゼ",
      "DNAコラキーゼ"
    ],
    "answer": 2,
    "answerNumber": 3,
    "explanation": ""
  },
  {
    "id": 68,
    "question": "生体内で起こる化学反応の総称をなんというか",
    "choices": [
      "異化",
      "代謝",
      "同化",
      "ATP"
    ],
    "answer": 1,
    "answerNumber": 2,
    "explanation": ""
  },
  {
    "id": 69,
    "question": "葉緑体には扁平な袋状の構造の○○○○○が存在する。〇〇とはなにか",
    "choices": [
      "チラコイド",
      "サラコイロ",
      "タコロイド",
      "ミトコンドリア"
    ],
    "answer": 0,
    "answerNumber": 1,
    "explanation": ""
  },
  {
    "id": 70,
    "question": "1979年に岡崎恒子夫人らによって発見、証明されたのは？",
    "choices": [
      "岡崎プライマー",
      "岡崎リガーゼ",
      "岡崎フラグメント",
      "岡崎プラメターぜ"
    ],
    "answer": 2,
    "answerNumber": 3,
    "explanation": ""
  },
  {
    "id": 71,
    "question": "DNAの複製では、まず、別の酵素によって、○○○○○と呼ばれるRNAの短いヌクレオチド鎖が合成される。○に入る語句を答えてください。",
    "choices": [
      "フライヤー",
      "プライマー",
      "ヘリカーゼ",
      "クライマー"
    ],
    "answer": 1,
    "answerNumber": 2,
    "explanation": ""
  },
  {
    "id": 72,
    "question": "半保存的複製を証明した人物二人を答えてください。",
    "choices": [
      "マルトース、セルロース",
      "メセルソン、スタール",
      "岡崎恒子、岡崎令治",
      "タイソン、ファラデー"
    ],
    "answer": 1,
    "answerNumber": 2,
    "explanation": ""
  },
  {
    "id": 73,
    "question": "真核生物の染色体の末端にある、特殊な構造の名は？",
    "choices": [
      "テロメア",
      "ソムリエ",
      "アバルト",
      "アラニン"
    ],
    "answer": 0,
    "answerNumber": 1,
    "explanation": ""
  },
  {
    "id": 74,
    "question": "大まかな代謝過程で一番最初なのは何",
    "choices": [
      "クエン酸結合",
      "解糖系",
      "電子伝達系",
      "解糖類"
    ],
    "answer": 1,
    "answerNumber": 2,
    "explanation": ""
  },
  {
    "id": 75,
    "question": "中間生成物に含まれるリン酸をADP移すことを何ていうか",
    "choices": [
      "基質レベルのリン酸化",
      "基質のレベルリン酸化",
      "基質レベルリン酸化",
      "基質のレベルのリン酸化"
    ],
    "answer": 0,
    "answerNumber": 1,
    "explanation": ""
  },
  {
    "id": 76,
    "question": "内膜と外膜の間の部分は何ていうか",
    "choices": [
      "膜管腔",
      "膜間腔",
      "膜観光",
      "膜問腔"
    ],
    "answer": 1,
    "answerNumber": 2,
    "explanation": ""
  },
  {
    "id": 77,
    "question": "内膜には、電子伝達系と何が存在するか",
    "choices": [
      "ATP合成酵素",
      "ADP合成酵素",
      "ATPの合成酵素",
      "ADPの合成酵素"
    ],
    "answer": 0,
    "answerNumber": 1,
    "explanation": ""
  },
  {
    "id": 78,
    "question": "ミトコンドリアの二重の生体膜の内膜で囲まれた領域をなんというか",
    "choices": [
      "マトリックス",
      "プライマー",
      "クリステ",
      "膜間腔"
    ],
    "answer": 0,
    "answerNumber": 1,
    "explanation": ""
  },
  {
    "id": 79,
    "question": "解糖系でグルコースが分解されてできるのはなにか",
    "choices": [
      "リン酸",
      "グリセリン酸",
      "ピルビン酸",
      "クエン酸"
    ],
    "answer": 2,
    "answerNumber": 3,
    "explanation": ""
  },
  {
    "id": 80,
    "question": "クエン酸回路で生産されないものはなにか",
    "choices": [
      "ATP",
      "FADH2",
      "NADH",
      "NAD"
    ],
    "answer": 3,
    "answerNumber": 4,
    "explanation": ""
  },
  {
    "id": 81,
    "question": "電子伝達系で生産されるものはなにか",
    "choices": [
      "ATP",
      "FADH2",
      "NADH",
      "NAD"
    ],
    "answer": 0,
    "answerNumber": 1,
    "explanation": ""
  },
  {
    "id": 82,
    "question": "生物が呼吸を行うときに放出するCO₂と外界から吸収するO₂との体積比",
    "choices": [
      "体積商",
      "呼吸商",
      "吸収商",
      "放出商"
    ],
    "answer": 1,
    "answerNumber": 2,
    "explanation": ""
  },
  {
    "id": 83,
    "question": "タンパク質豊富な大豆の呼吸商の値は",
    "choices": [
      "1",
      "0.7",
      "0.6",
      "0.8"
    ],
    "answer": 3,
    "answerNumber": 4,
    "explanation": ""
  },
  {
    "id": 84,
    "question": "呼吸商の実験でAの呼吸商は0.98と確認された。Aの物質は何類に属するか",
    "choices": [
      "タンパク質",
      "脂質",
      "炭水化物",
      "無機質"
    ],
    "answer": 2,
    "answerNumber": 3,
    "explanation": ""
  },
  {
    "id": 85,
    "question": "呼吸商の実験でメスピペットに入れられた着色液は、三角フラスコ内の気体体積の何量を表すか",
    "choices": [
      "O₂量",
      "co₂量",
      "減少量",
      "増加量"
    ],
    "answer": 2,
    "answerNumber": 3,
    "explanation": ""
  },
  {
    "id": 86,
    "question": "酸素は消費されず、二酸化炭素と最終産物の有機物が生体外に放出される過程。",
    "choices": [
      "解糖",
      "呼吸",
      "乳酸発酵",
      "アルコール発酵"
    ],
    "answer": 3,
    "answerNumber": 4,
    "explanation": ""
  },
  {
    "id": 87,
    "question": "グルコース１分子の分解により、乳酸は最大で何分子生じるか。",
    "choices": [
      "1",
      "2",
      "3",
      "4"
    ],
    "answer": 1,
    "answerNumber": 2,
    "explanation": ""
  },
  {
    "id": 88,
    "question": "アルコール発酵では呼吸を行ってしまうため何に注意する必要があるか。",
    "choices": [
      "日光に当てない",
      "酸素を混入しない",
      "二酸化炭素を混入しない",
      "換気をしない"
    ],
    "answer": 1,
    "answerNumber": 2,
    "explanation": ""
  },
  {
    "id": 89,
    "question": "酵母を培養すると、細胞内のある細胞小器官が発達していた。ある細胞小器官とはなにか。",
    "choices": [
      "ミトコンドリア",
      "必要とせず、細胞質基質で行う",
      "ミトコンドリアの内部",
      "タンパク質を合成する場の液胞"
    ],
    "answer": 0,
    "answerNumber": 1,
    "explanation": ""
  },
  {
    "id": 90,
    "question": "DNAの基本単位なにか。",
    "choices": [
      "ヌクレオチド",
      "デオキシリボース",
      "チミン",
      "グアニン"
    ],
    "answer": 0,
    "answerNumber": 1,
    "explanation": ""
  },
  {
    "id": 91,
    "question": "DNAは何本のヌクレオチド鎖からできているか。",
    "choices": [
      "1",
      "2",
      "3",
      "4"
    ],
    "answer": 1,
    "answerNumber": 2,
    "explanation": ""
  },
  {
    "id": 92,
    "question": "DNAの塩基は４種類ある。アデニン、チミン、グアニン、残り一つはなにか。",
    "choices": [
      "チトシン",
      "リン酸",
      "シトシン",
      "プライマー"
    ],
    "answer": 2,
    "answerNumber": 3,
    "explanation": ""
  },
  {
    "id": 93,
    "question": "DNAの構造はなにか。",
    "choices": [
      "二重らせん構造",
      "三重らせん構造",
      "四重らせん構造",
      "二重跳び構造"
    ],
    "answer": 0,
    "answerNumber": 1,
    "explanation": ""
  },
  {
    "id": 94,
    "question": "塩基配列がアミノ酸に翻訳される部分に対応するDNAの領域をなんというか。",
    "choices": [
      "チラコイド",
      "エキソン",
      "イントロン",
      "リボース"
    ],
    "answer": 1,
    "answerNumber": 2,
    "explanation": ""
  },
  {
    "id": 95,
    "question": "合成されたRNAの中で翻訳されない部分をなんというか。",
    "choices": [
      "イントロン",
      "エキソン",
      "スプライシング",
      "プライマー"
    ],
    "answer": 0,
    "answerNumber": 1,
    "explanation": ""
  },
  {
    "id": 96,
    "question": "アミノ酸を運搬するtRNAの3つの塩基をなんというか。",
    "choices": [
      "アラニン",
      "リボソーム",
      "コドン",
      "アンチコドン"
    ],
    "answer": 3,
    "answerNumber": 4,
    "explanation": ""
  },
  {
    "id": 97,
    "question": "原子生物の持つDNAをなんというか。",
    "choices": [
      "rRNA",
      "環状DNA",
      "mRNA",
      "環状RNA"
    ],
    "answer": 1,
    "answerNumber": 2,
    "explanation": ""
  },
  {
    "id": 98,
    "question": "オキサロ酢酸は炭素を何個持っているか",
    "choices": [
      "C6",
      "C3",
      "C4",
      "C2"
    ],
    "answer": 2,
    "answerNumber": 3,
    "explanation": ""
  },
  {
    "id": 99,
    "question": "クエン酸回路はどこで行われているか",
    "choices": [
      "マトリックス",
      "細胞質基質",
      "内膜",
      "外膜"
    ],
    "answer": 0,
    "answerNumber": 1,
    "explanation": ""
  },
  {
    "id": 100,
    "question": "１０NADP+10H+＋２FADH2＋６O2→１２H2O＋１０NAD＋１０NAD+２FAD＋エネルギー[34ATP]はどの化学式であるか",
    "choices": [
      "クエン酸回路",
      "解糖系",
      "呼吸全体",
      "電子伝達系"
    ],
    "answer": 3,
    "answerNumber": 4,
    "explanation": ""
  },
  {
    "id": 101,
    "question": "外膜と内膜に囲まれている領域をなんというか",
    "choices": [
      "環状DNA",
      "膜間膣",
      "クリステ",
      "マトリックス"
    ],
    "answer": 1,
    "answerNumber": 2,
    "explanation": ""
  },
  {
    "id": 102,
    "question": "クロマトグラフィーによる光合成色素の分離に使われる展開比液の体積比をどれか（石油エテール：アセトン）",
    "choices": [
      "5:3",
      "6:3",
      "7:3",
      "8:3"
    ],
    "answer": 2,
    "answerNumber": 3,
    "explanation": ""
  },
  {
    "id": 103,
    "question": "光合成色素の分離の実験にって明らかに分離した色素は薄層プレートの上から四番目はどれか",
    "choices": [
      "クロロフィルb",
      "カロテン",
      "キサントフィル",
      "コルチコイド"
    ],
    "answer": 2,
    "answerNumber": 3,
    "explanation": ""
  },
  {
    "id": 104,
    "question": "何によって呼吸される酸素の量と放出される二酸化炭素の体積比が異なるのか",
    "choices": [
      "クロロフィル",
      "細胞基質",
      "ロイシン",
      "有機酸"
    ],
    "answer": 1,
    "answerNumber": 2,
    "explanation": ""
  },
  {
    "id": 105,
    "question": "タンパク質の呼吸商はいくつか",
    "choices": [
      "約0.7",
      "約1.0",
      "約0.9",
      "約0.8"
    ],
    "answer": 3,
    "answerNumber": 4,
    "explanation": ""
  },
  {
    "id": 106,
    "question": "発酵の過程で起こる解糖系ではグルコース1分子当たり差し引き2分子のATPが合成され、また水素イオンと何が生じるか。",
    "choices": [
      "NADH",
      "NAD⁺",
      "NADPH⁺",
      "NADPH"
    ],
    "answer": 0,
    "answerNumber": 1,
    "explanation": ""
  },
  {
    "id": 107,
    "question": "解糖系により生じたものは何か",
    "choices": [
      "乳酸",
      "アミノ酸",
      "ピルビン酸",
      "リンゴ酸"
    ],
    "answer": 2,
    "answerNumber": 3,
    "explanation": ""
  },
  {
    "id": 108,
    "question": "解糖系のエタノール→ピルビン酸→エタノールになる反応過程は何か",
    "choices": [
      "アルコール発酵",
      "乳酸発酵",
      "エタノール発酵",
      "解糖"
    ],
    "answer": 0,
    "answerNumber": 1,
    "explanation": ""
  },
  {
    "id": 109,
    "question": "解糖系はほとんどすべての生物が持つ代謝経路である。このことは、解糖系の何を示唆しているか。",
    "choices": [
      "生物進化の初期に成立した反応であること",
      "生物進化の後期に成立した反応であること",
      "化学進化の初期に成立した反応であること",
      "化学進化の初期に成立した反応であること"
    ],
    "answer": 0,
    "answerNumber": 1,
    "explanation": ""
  },
  {
    "id": 110,
    "question": "DNAの一方のヌクレオチド鎖が複製されたDNAにそのまま受け継がれる。この複製を？",
    "choices": [
      "分散的複製",
      "転写",
      "半保存的複製",
      "翻訳"
    ],
    "answer": 2,
    "answerNumber": 3,
    "explanation": ""
  },
  {
    "id": 111,
    "question": "連続的に合成されるヌクレオチド鎖のことを？",
    "choices": [
      "ライティング鎖",
      "スピーキング鎖",
      "リスニング鎖",
      "リーディング鎖"
    ],
    "answer": 3,
    "answerNumber": 4,
    "explanation": ""
  },
  {
    "id": 112,
    "question": "不連続に合成されるものを？",
    "choices": [
      "ラギング鎖",
      "ケッキング鎖",
      "コイキング鎖",
      "クッキング鎖"
    ],
    "answer": 0,
    "answerNumber": 1,
    "explanation": ""
  },
  {
    "id": 113,
    "question": "アデニンとチミン、グアニンとシトシン同士で◯◯結合によって結合される。◯に入る言葉は？",
    "choices": [
      "水素",
      "炭素",
      "窒素",
      "酸素"
    ],
    "answer": 0,
    "answerNumber": 1,
    "explanation": ""
  },
  {
    "id": 114,
    "question": "翻訳の際、アミノ酸を運搬するRNAはどれか。",
    "choices": [
      "mRNA",
      "tRNA",
      "rRNA",
      "RNAポリメラーゼ"
    ],
    "answer": 1,
    "answerNumber": 2,
    "explanation": ""
  },
  {
    "id": 115,
    "question": "あるtRNAのアンチコドンがUACであるとき、対応するmRNAのコドンはどれか。",
    "choices": [
      "AUG",
      "UAG",
      "TAC",
      "ATG"
    ],
    "answer": 0,
    "answerNumber": 1,
    "explanation": ""
  },
  {
    "id": 116,
    "question": "選択的スプライシングの説明として最も適切なのはどれか。",
    "choices": [
      "1種類のmRNAから複数種類のDNAができる",
      "1種類のDNAから複数種類のmRNAができる",
      "DNAが複製される",
      "RNAがDNAになる"
    ],
    "answer": 1,
    "answerNumber": 2,
    "explanation": ""
  },
  {
    "id": 117,
    "question": "翻訳が行われる場所はどこか。",
    "choices": [
      "核",
      "核膜",
      "染色体",
      "リボソーム"
    ],
    "answer": 3,
    "answerNumber": 4,
    "explanation": ""
  },
  {
    "id": 118,
    "question": "解糖系で細胞質基質でグルコースを多くの酵素で分解されると生じる物質はどれか",
    "choices": [
      "ピルビン酸",
      "水",
      "酸素",
      "クエン酸"
    ],
    "answer": 0,
    "answerNumber": 1,
    "explanation": ""
  },
  {
    "id": 119,
    "question": "ミトコンドリアの外膜と内膜の間にある空間をなんというか",
    "choices": [
      "マトリックス",
      "膜間腔",
      "クリステ",
      "細胞壁"
    ],
    "answer": 1,
    "answerNumber": 2,
    "explanation": ""
  },
  {
    "id": 120,
    "question": "ミトコンドリアの内膜にある、シトクロムなどで構成されてる物質はどれか",
    "choices": [
      "アセチルCoA",
      "コハク酸",
      "電子伝達系",
      "ATP合成酵素"
    ],
    "answer": 2,
    "answerNumber": 3,
    "explanation": ""
  },
  {
    "id": 121,
    "question": "呼吸でグルコースが完全に分解されるときのATPの量はどれか",
    "choices": [
      "38ATP",
      "34ATP",
      "28ATP",
      "20ATP"
    ],
    "answer": 0,
    "answerNumber": 1,
    "explanation": ""
  },
  {
    "id": 122,
    "question": "タンパク質の呼吸商の値はどれか",
    "choices": [
      "1",
      "0.8",
      "0.7",
      "0.5"
    ],
    "answer": 1,
    "answerNumber": 2,
    "explanation": ""
  },
  {
    "id": 123,
    "question": "薄層クロマトグラフィーの実験で用いる展開液（体積比　石油エーテル:アセトン）の比は何か",
    "choices": [
      "5:5",
      "1:9",
      "6:4",
      "7:3"
    ],
    "answer": 3,
    "answerNumber": 4,
    "explanation": ""
  },
  {
    "id": 124,
    "question": "生物が呼吸を行うときに放出する二酸化炭素と外界から吸収する酸素との体積比をなんと言うか",
    "choices": [
      "呼吸積",
      "呼吸和",
      "呼吸商",
      "呼吸差"
    ],
    "answer": 2,
    "answerNumber": 3,
    "explanation": ""
  },
  {
    "id": 125,
    "question": "薄層クロマトグラフィーによる光合成色素の分離で分離した色素の色や◯◯◯を調べる",
    "choices": [
      "移動率",
      "呼吸商",
      "乳酸菌",
      "呼吸率"
    ],
    "answer": 0,
    "answerNumber": 1,
    "explanation": ""
  },
  {
    "id": 126,
    "question": "アルコール発酵の実験を行う際、使用する特殊な実験器具は何か",
    "choices": [
      "枝付きフラスコ",
      "キューネ発酵管",
      "ガス検知管",
      "恒温発酵器"
    ],
    "answer": 1,
    "answerNumber": 2,
    "explanation": ""
  },
  {
    "id": 127,
    "question": "アルコール発酵の実験を行うときに使用するグルコース水溶液を事前に煮沸させる理由は何か",
    "choices": [
      "反応を促進させるため",
      "グルコースの濃度を上げるため",
      "液体中のO₂を追い出すため",
      "酵母菌の働きを活性化させるため"
    ],
    "answer": 2,
    "answerNumber": 3,
    "explanation": ""
  },
  {
    "id": 128,
    "question": "アルコール発酵をさせた試験管を加熱させた。加熱前と加熱後、色とにおいの変化は何か　加熱前：色：クリーム色　におい：イースト菌のにおい",
    "choices": [
      "色：黄色の沈殿物が発生する　　におい：かわらない",
      "色：黄色の沈殿物が発生する　　におい：消毒液のようなにおいがする",
      "色：赤褐色の沈殿物が発生する　におい：変わらない",
      "色：赤褐色の沈殿物が発生する　におい：消毒液のようなにおいがする"
    ],
    "answer": 1,
    "answerNumber": 2,
    "explanation": ""
  },
  {
    "id": 129,
    "question": "酵素反応における反応速度を上げるにはどのようにすればいいか",
    "choices": [
      "水分を入れ、濃度を下げる",
      "温度を100℃まで上げる",
      "反応時間をのばす",
      "適温にする"
    ],
    "answer": 3,
    "answerNumber": 4,
    "explanation": ""
  },
  {
    "id": 130,
    "question": "DNAの複製が開始される特定の場所のことを何と言うか。",
    "choices": [
      "プロモーター",
      "プライマー",
      "複製起点",
      "DNAヘリカーゼ"
    ],
    "answer": 2,
    "answerNumber": 3,
    "explanation": ""
  },
  {
    "id": 131,
    "question": "DNAの二重らせんをほどく酵素はどれか。",
    "choices": [
      "DNAポリメラーゼ",
      "DNAリガーゼ",
      "DNAヘリカーゼ",
      "RNAポリメラーゼ"
    ],
    "answer": 2,
    "answerNumber": 3,
    "explanation": ""
  },
  {
    "id": 132,
    "question": "DNAの複製によって新しくできる2本の鎖がそれぞれ伸長していく方向はどれか。",
    "choices": [
      "3'→5'方向",
      "5'→3'方向",
      "3'→3'方向",
      "5'→5'方向"
    ],
    "answer": 1,
    "answerNumber": 2,
    "explanation": ""
  },
  {
    "id": 133,
    "question": "ラギング鎖で断続的に合成される、短いヌクレオチド鎖を何と言うか。",
    "choices": [
      "プライマー",
      "岡崎フラグメント",
      "リーディング鎖",
      "イントロン"
    ],
    "answer": 1,
    "answerNumber": 2,
    "explanation": ""
  },
  {
    "id": 134,
    "question": "遺伝子情報の流れとして正しいのはどれか",
    "choices": [
      "DNA→タンパク質→RNA",
      "RNA→DNA→タンパク質",
      "DNA→RNA→タンパク質",
      "タンパク質→DNA→RNA"
    ],
    "answer": 2,
    "answerNumber": 3,
    "explanation": ""
  },
  {
    "id": 135,
    "question": "真核生物の転写開始に関与するDNA領域を何と言うか",
    "choices": [
      "スプライシング",
      "プロモーター",
      "イントロン",
      "エキソン"
    ],
    "answer": 1,
    "answerNumber": 2,
    "explanation": ""
  },
  {
    "id": 136,
    "question": "RNA合成を行う酵素はどれか",
    "choices": [
      "DNAポリメラーゼ",
      "リガーゼ",
      "RNAポリメラーゼ",
      "アミラーゼ"
    ],
    "answer": 2,
    "answerNumber": 3,
    "explanation": ""
  },
  {
    "id": 137,
    "question": "RNAポリメラーゼが転写を開始するために必要なものはどれか",
    "choices": [
      "基本転写因子",
      "リボソーム",
      "tRNA",
      "ATPのみ"
    ],
    "answer": 0,
    "answerNumber": 1,
    "explanation": ""
  },
  {
    "id": 138,
    "question": "クエン酸回路は細胞のどこで行われているか。",
    "choices": [
      "細胞質基質",
      "マトリックス",
      "膜間腔",
      "クリステ"
    ],
    "answer": 1,
    "answerNumber": 2,
    "explanation": ""
  },
  {
    "id": 139,
    "question": "解糖系の反応は、①~④のどの反応か。",
    "choices": [
      "脱炭酸反応が行われている。",
      "ATPが最も多く生成される。",
      "電子の受け渡しが行われる。",
      "細胞質基質で行われている。"
    ],
    "answer": 3,
    "answerNumber": 4,
    "explanation": ""
  },
  {
    "id": 140,
    "question": "電子伝達系の反応で最終的にATPは何合成されるか。",
    "choices": [
      "34ATP",
      "38ATP",
      "32ATP",
      "36ATP"
    ],
    "answer": 0,
    "answerNumber": 1,
    "explanation": ""
  },
  {
    "id": 141,
    "question": "物質が酸化される過程で放出されるエネルギーを用いてATPを合成する反応をなんというか。",
    "choices": [
      "酸化的脱炭酸反応",
      "酸化的リン酸化",
      "酸化的脱アミノ化",
      "β酸化"
    ],
    "answer": 1,
    "answerNumber": 2,
    "explanation": ""
  },
  {
    "id": 142,
    "question": "炭水化物の呼吸商の値はいくつか",
    "choices": [
      "約0.8",
      "約0.7",
      "約1.0",
      "約0.5"
    ],
    "answer": 2,
    "answerNumber": 3,
    "explanation": ""
  },
  {
    "id": 143,
    "question": "薄層プレートを用いた物質の分離法を何というか",
    "choices": [
      "薄層トロフィー",
      "薄層クロマトグラフィー",
      "薄層クロマトゴロフィー",
      "薄層デラフィー"
    ],
    "answer": 1,
    "answerNumber": 2,
    "explanation": ""
  },
  {
    "id": 144,
    "question": "薄層クロマトグラフィーによる光合成色素の分離で調べられる分離した色素の色や移動率のことを何値というか",
    "choices": [
      "pH",
      "Rf",
      "Hz",
      "Pa"
    ],
    "answer": 1,
    "answerNumber": 2,
    "explanation": ""
  },
  {
    "id": 145,
    "question": "呼吸商の求め方は、次のうちどれか。なお、各項目は体積の値である。",
    "choices": [
      "（放出するCO₂ ÷ 吸収するO₂)",
      "（放出するCO₂ ÷ 吸収するCO₂)",
      "（放出するO₂ ÷ 吸収するO₂)",
      "（放出するO₂ ÷ 吸収するCO₂)"
    ],
    "answer": 0,
    "answerNumber": 1,
    "explanation": ""
  },
  {
    "id": 146,
    "question": "代謝のうち単純な物質から複雑な物質を作る過程を何と呼ぶか",
    "choices": [
      "同化",
      "異化",
      "呼吸",
      "クエン酸回路"
    ],
    "answer": 0,
    "answerNumber": 1,
    "explanation": ""
  },
  {
    "id": 147,
    "question": "同化の内、光エネルギーを利用するものを何と呼ぶか",
    "choices": [
      "オルニチン回路",
      "光合成",
      "呼吸",
      "化学合成"
    ],
    "answer": 1,
    "answerNumber": 2,
    "explanation": ""
  },
  {
    "id": 148,
    "question": "同化の内、無機物の酸化によるエネギーをカルビン回路へ利用する代謝活動を何と呼ぶか。",
    "choices": [
      "クエン酸回路",
      "光合成",
      "呼吸",
      "化学合成"
    ],
    "answer": 3,
    "answerNumber": 4,
    "explanation": ""
  },
  {
    "id": 149,
    "question": "光合成の反応式は以下のうちどれか",
    "choices": [
      "６CO₂+12H₂O+光エネルギー→C₆H₁₂O₆+６O₂+６H₂O",
      "６CO₂+１２H₂O+光エネルギー→C₆H₁₂O₆+12O₂+６H₂O",
      "6CO₂+6H₂O+光エネルギー→C₆H₁₂O₆+6O₂+12H₂O",
      "12CO₂+6H₂O+光エネルギー→C₆H₁₂O₆+6O₂+6H₂O"
    ],
    "answer": 0,
    "answerNumber": 1,
    "explanation": ""
  },
  {
    "id": 150,
    "question": "光合成が行われる葉緑体内部にある扁平な形の小胞を何と呼ぶか。",
    "choices": [
      "チラコイド",
      "ストロマ",
      "内膜",
      "外膜"
    ],
    "answer": 0,
    "answerNumber": 1,
    "explanation": ""
  },
  {
    "id": 151,
    "question": "光合成において光エネルギーを受容する部位はどこか。",
    "choices": [
      "ストロマ",
      "内膜",
      "チラコイド",
      "外膜"
    ],
    "answer": 2,
    "answerNumber": 3,
    "explanation": ""
  },
  {
    "id": 152,
    "question": "緑色植物に存在している主たる光合成色素は次のどれか。",
    "choices": [
      "アントシアン",
      "キサントフィル",
      "クロロフィル",
      "カロテン"
    ],
    "answer": 2,
    "answerNumber": 3,
    "explanation": ""
  },
  {
    "id": 153,
    "question": "クロロフィルが吸収しやすい色を青以外で答えよ。",
    "choices": [
      "黄色",
      "緑色",
      "赤色",
      "黄緑色"
    ],
    "answer": 2,
    "answerNumber": 3,
    "explanation": ""
  },
  {
    "id": 154,
    "question": "光合成のチラコイドで起こる変化を答えよ。",
    "choices": [
      "カルビン回路",
      "水の分解",
      "グルコースの生成",
      "二酸化炭素の同化"
    ],
    "answer": 1,
    "answerNumber": 2,
    "explanation": ""
  },
  {
    "id": 155,
    "question": "クロロフィルを内包するチラコイド膜上に存在する構造物の名前を答えよ。",
    "choices": [
      "マトリックス",
      "ATP合成酵素",
      "マンガンクラスター",
      "光化学系"
    ],
    "answer": 3,
    "answerNumber": 4,
    "explanation": ""
  },
  {
    "id": 156,
    "question": "クロロフィルが光を受け取り、電子を放出する反応を何と呼ぶか答えよ。",
    "choices": [
      "光反応",
      "光学反応",
      "光化学反応",
      "光科学反応"
    ],
    "answer": 2,
    "answerNumber": 3,
    "explanation": ""
  },
  {
    "id": 157,
    "question": "クロロフィルから放出された電子の受け渡しによっておこる一連の反応系のことを何と呼ぶか。",
    "choices": [
      "電子水素輸送反応",
      "電子供与系",
      "電子受容系",
      "電子伝達系"
    ],
    "answer": 3,
    "answerNumber": 4,
    "explanation": ""
  },
  {
    "id": 158,
    "question": "光合成においてH⁺が高濃度で蓄えられる場所はどこか。",
    "choices": [
      "ストロマ",
      "マトリックス",
      "チラコイド",
      "クリステ"
    ],
    "answer": 2,
    "answerNumber": 3,
    "explanation": ""
  },
  {
    "id": 159,
    "question": "光合成においてATPが合成される過程を特に何と呼ぶか答えよ。",
    "choices": [
      "化学リン酸化",
      "科学リン酸化",
      "価額リン酸化",
      "光リン酸化"
    ],
    "answer": 3,
    "answerNumber": 4,
    "explanation": ""
  },
  {
    "id": 160,
    "question": "リブロースビスリン酸の略称を選べ。",
    "choices": [
      "GDP",
      "RuBP",
      "PGA",
      "GAP"
    ],
    "answer": 1,
    "answerNumber": 2,
    "explanation": ""
  },
  {
    "id": 161,
    "question": "ホスホグリセリン酸の略称を選べ。",
    "choices": [
      "GDP",
      "RuBP",
      "PGA",
      "GAP"
    ],
    "answer": 2,
    "answerNumber": 3,
    "explanation": ""
  },
  {
    "id": 162,
    "question": "グリセルアルデヒドリン酸の略称を選べ。",
    "choices": [
      "GDP",
      "RuBP",
      "PGA",
      "GAP"
    ],
    "answer": 3,
    "answerNumber": 4,
    "explanation": ""
  },
  {
    "id": 163,
    "question": "ルビスコはアルファベットと記号の略称では、どう表現されるか選べ。",
    "choices": [
      "Rubisco",
      "RUBisCO",
      "RuBPisCO",
      "RubisCO"
    ],
    "answer": 3,
    "answerNumber": 4,
    "explanation": ""
  },
  {
    "id": 164,
    "question": "C₄植物は、大気中のCO₂を固定する際何と呼ばれる酵素を利用しているか。",
    "choices": [
      "RuBiCO",
      "PEPカルボキシラーゼ",
      "PGAカルボキシラーゼ",
      "GAPカルボキシラーゼ"
    ],
    "answer": 1,
    "answerNumber": 2,
    "explanation": ""
  },
  {
    "id": 165,
    "question": "CAM植物の具体例を以下の選択肢より選び答えよ。",
    "choices": [
      "サボテンやベンケイソウ",
      "バオバブやアカシア",
      "アコウやガジュマル",
      "シラカシやコナラ"
    ],
    "answer": 0,
    "answerNumber": 1,
    "explanation": ""
  },
  {
    "id": 166,
    "question": "光合成細菌に該当する生物を以下の選択肢より選び答えよ。",
    "choices": [
      "インフルエンザウイルス",
      "緑色硫黄細菌",
      "大腸菌",
      "硫黄細菌"
    ],
    "answer": 1,
    "answerNumber": 2,
    "explanation": ""
  },
  {
    "id": 167,
    "question": "シアノバクテリアと比較したとき緑色（紅色）硫黄細菌の特徴として挙げられる最たるものは何か。",
    "choices": [
      "真核生物である",
      "カルビン回路とは異なる反応系を持つ",
      "水素イオン源が硫化水素",
      "原核生物である"
    ],
    "answer": 2,
    "answerNumber": 3,
    "explanation": ""
  },
  {
    "id": 168,
    "question": "以下は化学合成細菌のエネルギーを得るための反応過程を示したものである。硝酸菌はどれか選べ。",
    "choices": [
      "2N₄⁺ + 3O₂ → 2NO₂- + 4H⁺ + 2H₂O + エネルギー",
      "2NO₂⁻ + O₂ → 2NO₃⁻ + エネルギー",
      "2H₂S⁻ + O₂ → 2S + 2H₂O + エネルギー",
      "2S + 3O₂ + 2H₂O → 2H₂SO₄⁻ + エネルギー"
    ],
    "answer": 1,
    "answerNumber": 2,
    "explanation": ""
  },
  {
    "id": 169,
    "question": "呼吸が行われる細胞小器官の名称は何か。",
    "choices": [
      "ミテコンドリア",
      "ミタコンドリア",
      "ナットウノメイサンチハ",
      "ミトコンドリア"
    ],
    "answer": 3,
    "answerNumber": 4,
    "explanation": ""
  },
  {
    "id": 170,
    "question": "NAD⁺の正式名称を答えよ。",
    "choices": [
      "ニコチンアミドアデニンジヌクレオチド",
      "ニコチンアミロースアデニンジヌクレオチド",
      "ナイアシンアミドアデニンジヌクレオチド",
      "ニコチンアミドアデニントリヌクレオチド"
    ],
    "answer": 0,
    "answerNumber": 1,
    "explanation": ""
  },
  {
    "id": 171,
    "question": "FADの正式名称を答えよ。",
    "choices": [
      "フランビンアデニンジヌクレオチド",
      "フベンデスネアデニンジヌクレオチド",
      "フッ素アミドアデニンジヌクレオチド",
      "フランビンアミドジヌクレオチド"
    ],
    "answer": 0,
    "answerNumber": 1,
    "explanation": ""
  },
  {
    "id": 172,
    "question": "呼吸においてグルコースがピルビン酸にまで分解される過程の名称を答えよ。",
    "choices": [
      "解答系",
      "クエン酸回路",
      "電子伝達系",
      "酸化的リン酸化"
    ],
    "answer": 0,
    "answerNumber": 1,
    "explanation": ""
  },
  {
    "id": 173,
    "question": "呼吸においてピルビン酸がクエン酸回路に入る前に変換される物質の名称を答えよ。",
    "choices": [
      "クエン酸",
      "アセチルCoA",
      "アセチルCOA",
      "アセチルCoa"
    ],
    "answer": 1,
    "answerNumber": 2,
    "explanation": ""
  },
  {
    "id": 174,
    "question": "呼吸においてアセチルCoAが結合される物質の名称を答えよ。",
    "choices": [
      "クエン酸",
      "オキサロ酢酸",
      "ホスホエノールピルビン酸",
      "コハク酸"
    ],
    "answer": 1,
    "answerNumber": 2,
    "explanation": ""
  },
  {
    "id": 175,
    "question": "呼吸においてアセチルCoAが結合することによって作られる物質の名称を答えよ。",
    "choices": [
      "クエン酸",
      "オキサロ酢酸",
      "α⁻ケトグルタルサン",
      "コハク酸"
    ],
    "answer": 0,
    "answerNumber": 1,
    "explanation": ""
  },
  {
    "id": 176,
    "question": "呼吸の電子伝達系において、ATP合成酵素によってATPが合成される過程を何と呼ぶか答えよ。",
    "choices": [
      "解答系",
      "クエン酸回路",
      "電子伝達系",
      "酸化的リン酸化"
    ],
    "answer": 3,
    "answerNumber": 4,
    "explanation": ""
  },
  {
    "id": 177,
    "question": "以下の式の中で呼吸のクエン酸回路の反応式はどれか答えよ。",
    "choices": [
      "C₆H₁₂O₆ + 2NAD⁺ → 2C₃H₄O₃ + 2NADH + 2H⁺ + 2ATP",
      "2C₃H₄O₃ + 6H₂O + 2FAD → 6CO₂ + 8NADH + 8H⁺ + 2FADH₂ + 2ATP",
      "10NADH + 10H⁺ + 2FADH₂ + 6O₂ → 12H₂O + 10NAD + 2FAD + 34ATP",
      "2S + 3O₂ + 2H₂O → 2H₂SO₄⁻ + エネルギー"
    ],
    "answer": 1,
    "answerNumber": 2,
    "explanation": ""
  },
  {
    "id": 178,
    "question": "呼吸の過程において酸素が消費されるのはどこか",
    "choices": [
      "解答系の最後",
      "クエン酸回路の最後",
      "カルビン回路の最後",
      "電子伝達系の最後"
    ],
    "answer": 3,
    "answerNumber": 4,
    "explanation": ""
  },
  {
    "id": 179,
    "question": "呼吸で二酸化炭素が生じる過程はどこか",
    "choices": [
      "解答系",
      "クエン酸回路",
      "カルビン回路",
      "電子伝達系"
    ],
    "answer": 1,
    "answerNumber": 2,
    "explanation": ""
  },
  {
    "id": 180,
    "question": "タンパク質代謝において、アミノ酸にまで分解された物質がさらに分解された後に生じる毒性を持った物質は何か",
    "choices": [
      "有機酸",
      "尿素",
      "アンモニア",
      "ペプチド"
    ],
    "answer": 2,
    "answerNumber": 3,
    "explanation": ""
  },
  {
    "id": 181,
    "question": "タンパク質代謝は、最終的にアセチルCoAという物質が生成されるがそのもとになる物質はどれか。",
    "choices": [
      "有機酸",
      "尿素",
      "アンモニア",
      "ペプチド"
    ],
    "answer": 0,
    "answerNumber": 1,
    "explanation": ""
  },
  {
    "id": 182,
    "question": "脂肪代謝の過程で、脂肪が分解されて生成されるのはグリセリンと何か。",
    "choices": [
      "脂肪酸",
      "アセチルCoA",
      "ピルビン酸",
      "有機酸"
    ],
    "answer": 0,
    "answerNumber": 1,
    "explanation": ""
  },
  {
    "id": 183,
    "question": "呼吸において吸収された酸素に対する放出された二酸化炭素量の割合のことを何と呼ぶか答えよ。",
    "choices": [
      "オキシカーボレート",
      "カーボオキシレート",
      "呼吸商",
      "呼吸証"
    ],
    "answer": 2,
    "answerNumber": 3,
    "explanation": ""
  },
  {
    "id": 184,
    "question": "呼吸商の実験においいて使用するKOH溶液の役割を答えよ。",
    "choices": [
      "酸素の吸収",
      "二酸化炭素の吸収",
      "窒素の吸収",
      "アルゴンの吸収"
    ],
    "answer": 1,
    "answerNumber": 2,
    "explanation": ""
  },
  {
    "id": 185,
    "question": "グルコースの呼吸商はおおよそいくつになるか。",
    "choices": [
      "0.7",
      "0.8",
      "0.9",
      "1"
    ],
    "answer": 3,
    "answerNumber": 4,
    "explanation": ""
  },
  {
    "id": 186,
    "question": "脂肪の呼吸商はおおよそいくつになるか。",
    "choices": [
      "0.7",
      "0.8",
      "0.9",
      "1"
    ],
    "answer": 0,
    "answerNumber": 1,
    "explanation": ""
  },
  {
    "id": 187,
    "question": "タンパク質の呼吸商はおおよそいくつになるか。",
    "choices": [
      "0.7",
      "0.8",
      "0.9",
      "1"
    ],
    "answer": 1,
    "answerNumber": 2,
    "explanation": ""
  },
  {
    "id": 188,
    "question": "次の反応式は、どの発酵を表しているか。\nC₆H₁₂O₆ → 2C₂H₅OH + 2CO₂ + 2ATP",
    "choices": [
      "解糖",
      "乳酸発酵",
      "アルコール発酵",
      "酪酸発行"
    ],
    "answer": 2,
    "answerNumber": 3,
    "explanation": ""
  },
  {
    "id": 189,
    "question": "次の反応式は、どの発酵を表しているか。\nC₆H₁₂O₆ → 2C₃H₆O₃ + 2ATP",
    "choices": [
      "解糖系",
      "乳酸発酵",
      "アルコール発酵",
      "酪酸発行"
    ],
    "answer": 1,
    "answerNumber": 2,
    "explanation": ""
  },
  {
    "id": 190,
    "question": "発酵の過程と呼吸の初期の反応系には共通した代謝過程がみられる。これを何と呼ぶか。",
    "choices": [
      "解糖",
      "解糖系",
      "新生糖",
      "新糖生"
    ],
    "answer": 1,
    "answerNumber": 2,
    "explanation": ""
  },
  {
    "id": 191,
    "question": "乳酸発酵と同様の反応過程をたどる筋肉組織で行われる無酸素代謝活動を何と呼ぶか。",
    "choices": [
      "解糖",
      "解糖系",
      "新生糖",
      "新糖生"
    ],
    "answer": 0,
    "answerNumber": 1,
    "explanation": ""
  },
  {
    "id": 192,
    "question": "アルコール発酵で使用するJの字型をした実験器具を何と呼ぶか。",
    "choices": [
      "スワン型発酵管",
      "キューバ発酵管",
      "キューネ発酵管",
      "Jの字型の発酵管"
    ],
    "answer": 2,
    "answerNumber": 3,
    "explanation": ""
  },
  {
    "id": 193,
    "question": "発酵が進んだキューネ管のグルコース溶液に対し水酸化ナトリウムの結晶を入れたところ盲管部の気体が吸収されたように無くなった。この気体は何か。",
    "choices": [
      "酸素",
      "窒素",
      "二酸化炭素",
      "アルゴン"
    ],
    "answer": 2,
    "answerNumber": 3,
    "explanation": ""
  },
  {
    "id": 194,
    "question": "発酵が進んだキューネ管のグルコース溶液に対し、ヨウ素溶液を加え70～80℃の湯煎で加熱したところ、消毒液のようなにおいと、黄色い沈殿物がみられた。この反応を何と呼ぶか。",
    "choices": [
      "ヨードチンキ反応",
      "ヨードホルン反応",
      "ヨードホルム反応",
      "ヨードランヒカリ反応"
    ],
    "answer": 2,
    "answerNumber": 3,
    "explanation": ""
  },
  {
    "id": 195,
    "question": "DNAについて間違っているものを選べ。",
    "choices": [
      "塩基・糖・リン酸によりなり、この3つからなる物質を総称してヌクレオチドと呼ぶ",
      "塩基は、アデニン・チミン・シトシン・グアニンの4種類があり、その配列が遺伝情報を担っている。",
      "糖の構造式において、塩基は1’の炭素と結合しており、リン酸は5′、1本の鎖における他のヌクレオチドとは3′の炭素と他方のリン酸との間で結合を作っている。",
      "2本の鎖は、塩基の相補性に従って水素結合を作って結合している。この組み合わせは化学的構造により決まっており、AとT間では3か所、CとG間では2か所で水素結合が作られている。"
    ],
    "answer": 3,
    "answerNumber": 4,
    "explanation": ""
  },
  {
    "id": 196,
    "question": "DNAの複製過程について間違っているものを答えよ。",
    "choices": [
      "DNAは半保存的複製により、遺伝子を代々受け継いできた",
      "DNAの複製ではまず、塩基同士の結合を解く開裂をDNAヘリカーゼと呼ばれる酵素が行う。",
      "開裂されたDNAに対し順次、プライマーと呼ばれる合成起点となるDNAが結合し、DNAの複製が進む",
      "DNAの複製方向は、5′末端から3′末端に向けてしか伸ばすことができない。よって開裂方向に向けて連続的に合成される鎖と開裂方向とは逆に断続的に合成される鎖に分かれる。"
    ],
    "answer": 2,
    "answerNumber": 3,
    "explanation": ""
  },
  {
    "id": 197,
    "question": "DNAの複製過程について間違っているものを答えよ。",
    "choices": [
      "複製の開裂起点となる領域を、複製起点と呼ぶ",
      "DNAの複製は、プライマーを起点として行われる。相補性に従って結合したヌクレオチドは、DNAポリメラーゼによって鎖状に結合されていく。",
      "ラギング鎖の短いヌクレオチド鎖のことを岡崎フラグメントと呼ぶ",
      "プライマーは、複製が進むに従い順次DNAのヌクレオチドに置き換えられ、断片になった部分をDNAヘリカーゼが結合する。"
    ],
    "answer": 3,
    "answerNumber": 4,
    "explanation": ""
  },
  {
    "id": 198,
    "question": "メセルソンとスタールが行ったDNAの複製方法についての研究では、DNAを構成する元素である窒素をより重い同位体に置き換え培養し、それだけで作られた重いDNAを作りだした。その後一般的な軽い窒素のみを含んだ培地で、培養しDNAの複製を2回行わせた。この時重いDAN：中くらいの重さのDNA:軽いDNAの比率はどうなっているか答えよ。",
    "choices": [
      "0：1：1",
      "0：2：1",
      "1：2：2",
      "0：1：2"
    ],
    "answer": 0,
    "answerNumber": 1,
    "explanation": ""
  },
  {
    "id": 199,
    "question": "真核生物の遺伝子の発現過程について間違っているものを答えよ。",
    "choices": [
      "DNAからRNAに写し取る過程を転写と呼び、それをアミノ酸配列へと置き換える過程を翻訳と呼ぶ。この変化は一方向にしか進まないためセントラルドグマと呼ばれている。",
      "写し取られたRNAにはイントロンと呼ばれる発現しない配列を含んでおり、これを取り除くことをスプライシング、取り除いた後のエキソンだけになったRNAをｍRNAと呼ぶ",
      "ｍRNAは角膜孔より、細胞質基質へ放出されリボソームへと接続する。その後ｍRNAの3つの塩基配列を基にアミノ酸を指定していく。この時ｍRNAの3つの塩基配列をコドンと呼ぶ。",
      "RNAは、DNAとは異なり糖がリボースで作られ、塩基はTの代わりにUと呼ばれる塩基がTと相補的に結合する。"
    ],
    "answer": 3,
    "answerNumber": 4,
    "explanation": ""
  },
  {
    "id": 200,
    "question": "真核生物の転写の過程について間違っているものを答えよ。",
    "choices": [
      "転写は、プライマーとよばれる転写開始に関与する領域よりはじまる。",
      "DNAに対しRNAポリメラーゼと呼ばれる酵素が結合し進められていく",
      "転写ではプライマーのような反応開始点となるRNAを必要としない。",
      "転写は、DNAの複製と同様に5′末端側から3′末端側へ向かってのみすすめられる。"
    ],
    "answer": 0,
    "answerNumber": 1,
    "explanation": ""
  },
  {
    "id": 201,
    "question": "真核生物のDNAの発現について間違っているものを答えよ。",
    "choices": [
      "転写では、2本あるDNA鎖のうち読み取られる側アンチセンス鎖、読み取られない側をセンス鎖と呼ぶ。",
      "スプライシングは、エキソンすべてが読みだされるわけではなく、いくつかのエキソンが自由に組み合わされて合成される選択的スプライシングが行われることも多い",
      "翻訳でｍRNAの3つの塩基を基に指定されるアミノ酸について表にまとめたものをコドン表と呼ぶことがある。",
      "ｍRNAが接続するリボソームは、RNAで作られておりｒRNAと呼ばれる。rRNAは、ｍRNAの3つの塩基配列に従ってアミノ酸を運ぶ役割を持っている。"
    ],
    "answer": 3,
    "answerNumber": 4,
    "explanation": ""
  },
  {
    "id": 202,
    "question": "遺伝暗号表において開始コドンとされる塩基配列はどれか。",
    "choices": [
      "AUC",
      "AUG",
      "AUU",
      "UGA"
    ],
    "answer": 1,
    "answerNumber": 2,
    "explanation": ""
  },
  {
    "id": 203,
    "question": "遺伝暗号表において終始コドンではない塩基配列はどれか。",
    "choices": [
      "UAA",
      "UAG",
      "AAG",
      "UGA"
    ],
    "answer": 2,
    "answerNumber": 3,
    "explanation": ""
  },
  {
    "id": 204,
    "question": "原核生物における転写と翻訳について間違っているものを選べ。",
    "choices": [
      "一般にイントロンが存在しない。",
      "核がないため細胞質基質ですべての処理が進む。",
      "ｍRNAが合成されると即座にリボソームが接続し次々とタンパク質を合成する。",
      "環状DNAなので、プロモーターが存在しない。"
    ],
    "answer": 3,
    "answerNumber": 4,
    "explanation": ""
  }
];
