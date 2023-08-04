const choice1 = document.getElementById("choice-1")
const choice2 = document.getElementById("choice-2")
const choice3 = document.getElementById("choice-3")
const choice4 = document.getElementById("choice-4")
const feedback = document.getElementById("feedback")

const choose = function (choiceString) {
  if (choiceString === "ハクビシン") {
    feedback.textContent =
      "残念！ハクビシンは漢字で「白鼻芯」と書くように、鼻筋の白色が特徴だよ！"
  } else if (choiceString === "アライグマ") {
    feedback.textContent =
      "残念！アライグマには目と目の間に黒い筋があるんだよ！"
  } else if (choiceString === "タヌキ") {
    feedback.textContent =
      "正解！遺伝子解析の結果により大陸産のN. procyonoidesと日本産のN. viverrinusの2種に分けるという説があるよ！"
  } else if (choiceString === "アナグマ") {
    feedback.textContent =
      "全然違うよ！こいつはイタチの仲間だからね。カワウソとかに似てるでしょ？"
  }
}

choice1.onclick = function () {
  choose("ハクビシン")
}
choice2.onclick = function () {
  choose("アライグマ")
}
choice3.onclick = function () {
  choose("タヌキ")
}
choice4.onclick = function () {
  choose("アナグマ")
}

const quizText = document.getElementById("quiz-text")
const quizImage = document.getElementById("quiz-image")
const choice1 = document.getElementById("choice-1")
const choice2 = document.getElementById("choice-2")
const choice3 = document.getElementById("choice-3")
const choice4 = document.getElementById("choice-4")
const feedback = document.getElementById("feedback")

// クイズの内容
const quiz = {
  text: "この動物の名前はなんでしょうか？",
  image: "Ganymede.jpg",
  choices: [
    {
      text: "ハクビシン",
      feedback:
        "残念！ハクビシンは漢字で「白鼻芯」と書くように、鼻筋の白色が特徴だよ！",
    },
    {
      text: "アライグマ",
      feedback: "残念！アライグマには目と目の間に黒い筋があるんだよ！",
    },
    {
      text: "タヌキ",
      feedback:
        "正解！遺伝子解析の結果により大陸産のN. procyonoidesと日本産のN. viverrinusの2種に分けるという説があるよ！",
    },
    {
      text: "アナグマ",
      feedback:
        "全然違うよ！こいつはイタチの仲間だからね。カワウソとかに似てるでしょ？",
    },
  ],
}

// quiz を画面に表示する関数
const reloadQuiz = function () {
  // 問題文を表示
  quizText.textContent = "Q. " + quiz.text

  // 画像を表示
  quizImage.src = "./images/" + quiz.image

  // 選択肢（ボタン）の中身を表示
  choice1.textContent = quiz.choices[0].text
  choice2.textContent = quiz.choices[1].text
  choice3.textContent = quiz.choices[2].text
  choice4.textContent = quiz.choices[3].text
}

// choiceNumber番目の選択肢を選択
const choose = function (choiceNumber) {
  // フィードバックを表示
  feedback.textContent = quiz.choices[choiceNumber].feedback
}

choice1.onclick = function () {
  // 0 番目の選択肢を選択
  choose(0)
}
choice2.onclick = function () {
  // 1 番目の選択肢を選択
  choose(1)
}
choice3.onclick = function () {
  // 2 番目の選択肢を選択
  choose(2)
}
choice4.onclick = function () {
  // 2 番目の選択肢を選択
  choose(3)
}

// reloadQuiz関数 を実行して、クイズを画面に表示する
reloadQuiz()
