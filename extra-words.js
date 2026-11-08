// ムギクエスト（4択版） 追加の単語データ（words.json にも小学校の単語にも入っていない、中1でよく使う語・用法）
// 単語・意味・例文・和訳はすべて Claude が作成。ゲームが読み込むときに、各ワールドに合体させる（元のデータファイルは書き換えない）。
// 項目：to=入れる先（W1〜W5、B1〜B4） / group=入れるステージの名前（新しいステージになる） / no=番号（x001〜）
//       en=英単語 / ja=意味 / ex=例文 / exJa=例文の和訳
//       wrong=不正解の選択肢を決めておきたいときだけ、3つ書く（書いた順ではなく、毎回並びは入れかわる）
// 同じつづりで意味が別の単語（you・your・yours・it）は、もう一方の意味を不正解の選択肢に出さない（ゲーム側で処理）
// similar：意味が近くて同時に選択肢に出すと紛らわしい組
window.MUGI_EXTRA = {
"src": "",
"similar": {
  "W2": [["everyone", "everybody"], ["someone", "somebody"], ["anyone", "anybody"]]
},
"words": [
{"to":"W2","group":"あなたたち・it","no":"x001","en":"you","ja":"あなたたちは","ex":"You are good students.","exJa":"あなたたちはよい生徒です。"},
{"to":"W2","group":"あなたたち・it","no":"x002","en":"you","ja":"あなたたちを（に）","ex":"Mr. Tanaka teaches you English.","exJa":"田中先生はあなたたちに英語を教えます。"},
{"to":"W2","group":"あなたたち・it","no":"x003","en":"your","ja":"あなたたちの","ex":"Is this your classroom?","exJa":"ここはあなたたちの教室ですか。"},
{"to":"W2","group":"あなたたち・it","no":"x004","en":"yours","ja":"あなたたちのもの","ex":"These seats are yours.","exJa":"これらの席はあなたたちのものです。"},
{"to":"W2","group":"あなたたち・it","no":"x005","en":"it","ja":"（天気・時刻などを表す。訳さない）","wrong":["それは","それを","あれは"],"ex":"It's six o'clock now.","exJa":"今6時です。"},
{"to":"W2","group":"everything など","no":"x006","en":"everything","ja":"すべてのもの、何でも","ex":"Everything is ready.","exJa":"準備はすべてできています。"},
{"to":"W2","group":"everything など","no":"x007","en":"nothing","ja":"何も～ない","ex":"I have nothing in my bag.","exJa":"私のかばんには何も入っていません。"},
{"to":"W2","group":"everything など","no":"x008","en":"everybody","ja":"みんな、誰でも","ex":"Everybody likes Ken.","exJa":"みんなケンのことが好きです。"},
{"to":"W2","group":"everything など","no":"x009","en":"somebody","ja":"（肯定文で）誰か","ex":"Somebody is calling you.","exJa":"誰かがあなたを呼んでいます。"},
{"to":"W2","group":"everything など","no":"x010","en":"anybody","ja":"（疑問文で）誰か","ex":"Is anybody here?","exJa":"誰かいますか。"},
{"to":"W2","group":"everything など","no":"x011","en":"nobody","ja":"誰も～ない","ex":"Nobody knows the answer.","exJa":"誰もその答えを知りません。"},
{"to":"W2","group":"everything など","no":"x012","en":"one","ja":"（同じ種類の）もの、1つ","ex":"I like this one.","exJa":"私はこれが好きです。"},
{"to":"W2","group":"～自身","no":"x013","en":"myself","ja":"私自身","ex":"Let me introduce myself.","exJa":"自己紹介をさせてください。"},
{"to":"W2","group":"～自身","no":"x014","en":"yourself","ja":"あなた自身","ex":"Take care of yourself.","exJa":"体に気をつけてね。"},
{"to":"W2","group":"～自身","no":"x015","en":"himself","ja":"彼自身","ex":"He made this chair himself.","exJa":"彼はこのいすを自分で作りました。"},
{"to":"W2","group":"～自身","no":"x016","en":"herself","ja":"彼女自身","ex":"She drew this picture herself.","exJa":"彼女はこの絵を自分で描きました。"},
{"to":"W2","group":"～自身","no":"x017","en":"ourselves","ja":"私たち自身","ex":"We enjoyed ourselves at the party.","exJa":"私たちはパーティーで楽しく過ごしました。"},
{"to":"W2","group":"～自身","no":"x018","en":"themselves","ja":"彼ら自身","ex":"They cleaned the room themselves.","exJa":"彼らは自分たちで部屋を掃除しました。"}
]
};
