const quizText = document.getElementById("quiz-text")
const quizImage = document.getElementById("quiz-image")
const Container = document.getElementById("choices-container")
const feedback = document.getElementById("feedback")

// クイズの内容
const quiz = {
  text: "この動物の名前はなんでしょうか？",
  image: "256288037_675.jpg",
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
        "正解！タヌキには遺伝子解析の結果により大陸産のN. procyonoidesと日本産のN. viverrinusの2種に分けるという説があるよ！",
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

  for (let i = 0; i < quiz.choices.length; i++) {
    // ボタンを生成
    const button = document.createElement("button")
    //ボタンのテキスト
    button.textContent = quiz.choices[i].text
    Container.appendChild(button)
    button.onclick = function () {
      choose(i)
    }
  }
}

// choiceNumber番目の選択肢を選択
const choose = function (choiceNumber) {
  // フィードバックを表示
  feedback.textContent = quiz.choices[choiceNumber].feedback
}

// reloadQuiz関数 を実行して、クイズを画面に表示する
reloadQuiz()
