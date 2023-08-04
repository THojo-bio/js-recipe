// イベントが発生する要素を取得する
const button = document.getElementById("button")

const alertMessage = function () {
  alert("クリックしたね")
}

// 関数を登録
button.onclick = alertMessage
