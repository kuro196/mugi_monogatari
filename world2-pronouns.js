// ムギクエスト（4択版） WORLD 2「代名詞の山脈」の問題データ
// 単語と意味は words.json（1年生・代名詞 g1_pronoun）から転記。例文と和訳は新しく作成。
// ステージは words.json の区切りではなく「人ごと」に分け直している（I・you／he・she・it／we・they／this・that ほか）。
// 項目：no=番号 / stage=ステージ / en=英単語 / ja=意味（選択肢に出る） / ex=例文 / exJa=例文の和訳
// scope:"stage"：不正解の選択肢をまず同じステージから出す（I・me・my・mine を見分ける練習のため）
// 同じつづりで意味が2つある単語（you・his・her・it）は、もう一方の意味を不正解の選択肢に出さない（ゲーム側で処理）
window.MUGI_W2 = {
"world": 2,
"title": "代名詞の山脈",
"pos": "代名詞",
"sub": "1年生の代名詞",
"scope": "stage",
"stageNames": {"1": "I・you", "2": "he・she・it", "3": "we・they", "4": "this・that ほか"},
"similar": [],
"words": [
{"no":"119","stage":1,"en":"I","ja":"私は","ex":"I am a student.","exJa":"私は生徒です。"},
{"no":"120","stage":1,"en":"me","ja":"私を（に）","ex":"Please help me.","exJa":"私を手伝ってください。"},
{"no":"121","stage":1,"en":"my","ja":"私の","ex":"This is my bag.","exJa":"これは私のかばんです。"},
{"no":"122","stage":1,"en":"mine","ja":"私のもの","ex":"This pen is mine.","exJa":"このペンは私のものです。"},
{"no":"123","stage":1,"en":"you","ja":"あなたは","ex":"You are my friend.","exJa":"あなたは私の友だちです。"},
{"no":"124","stage":1,"en":"you","ja":"あなたを（に）","ex":"I know you.","exJa":"私はあなたを知っています。"},
{"no":"125","stage":1,"en":"your","ja":"あなたの","ex":"Is this your notebook?","exJa":"これはあなたのノートですか。"},
{"no":"126","stage":1,"en":"yours","ja":"あなたのもの","ex":"Is this umbrella yours?","exJa":"このかさはあなたのものですか。"},
{"no":"127","stage":2,"en":"he","ja":"彼は","ex":"He is my brother.","exJa":"彼は私の兄です。"},
{"no":"128","stage":2,"en":"him","ja":"彼を（に）","ex":"Do you know him?","exJa":"あなたは彼を知っていますか。"},
{"no":"129","stage":2,"en":"his","ja":"彼の","ex":"This is his bike.","exJa":"これは彼の自転車です。"},
{"no":"130","stage":2,"en":"his","ja":"彼のもの","ex":"That cap is his.","exJa":"あの帽子は彼のものです。"},
{"no":"131","stage":2,"en":"she","ja":"彼女は","ex":"She is from Canada.","exJa":"彼女はカナダ出身です。"},
{"no":"132","stage":2,"en":"her","ja":"彼女を（に）","ex":"I often help her.","exJa":"私はよく彼女を手伝います。"},
{"no":"133","stage":2,"en":"her","ja":"彼女の","ex":"Her name is Emi.","exJa":"彼女の名前はエミです。"},
{"no":"134","stage":2,"en":"hers","ja":"彼女のもの","ex":"This bag is hers.","exJa":"このかばんは彼女のものです。"},
{"no":"135","stage":2,"en":"it","ja":"それは","ex":"It is my new phone.","exJa":"それは私の新しい電話です。"},
{"no":"136","stage":2,"en":"it","ja":"それを（に）","ex":"I use it every day.","exJa":"私はそれを毎日使います。"},
{"no":"137","stage":2,"en":"its","ja":"それの","ex":"I have a cat. Its name is Tama.","exJa":"私はねこを飼っています。その（それの）名前はタマです。"},
{"no":"138","stage":3,"en":"we","ja":"私たちは","ex":"We are classmates.","exJa":"私たちは同級生です。"},
{"no":"139","stage":3,"en":"us","ja":"私たちを（に）","ex":"Mr. Tanaka teaches us English.","exJa":"田中先生は私たちに英語を教えています。"},
{"no":"140","stage":3,"en":"our","ja":"私たちの","ex":"This is our school.","exJa":"これは私たちの学校です。"},
{"no":"141","stage":3,"en":"ours","ja":"私たちのもの","ex":"This classroom is ours.","exJa":"この教室は私たちのものです。"},
{"no":"142","stage":3,"en":"they","ja":"彼らは、それらは","ex":"They are my friends.","exJa":"彼らは私の友だちです。"},
{"no":"143","stage":3,"en":"them","ja":"彼らを（に）、それらを（に）","ex":"I know them well.","exJa":"私は彼らをよく知っています。"},
{"no":"144","stage":3,"en":"their","ja":"彼らの、それらの","ex":"Their house is big.","exJa":"彼らの家は大きいです。"},
{"no":"145","stage":3,"en":"theirs","ja":"彼らのもの","ex":"These books are theirs.","exJa":"これらの本は彼らのものです。"},
{"no":"146","stage":4,"en":"this","ja":"この、これは","ex":"This is my room.","exJa":"これは私の部屋です。"},
{"no":"147","stage":4,"en":"that","ja":"あの、あれは","ex":"That is a hospital.","exJa":"あれは病院です。"},
{"no":"148","stage":4,"en":"these","ja":"これらの、これらは","ex":"These are my shoes.","exJa":"これらは私の靴です。"},
{"no":"149","stage":4,"en":"those","ja":"あれらの、あれらは","ex":"Those are cherry trees.","exJa":"あれらは桜の木です。"},
{"no":"150","stage":4,"en":"everyone","ja":"みんな、皆さん","ex":"Hello, everyone!","exJa":"皆さん、こんにちは！"},
{"no":"151","stage":4,"en":"someone","ja":"（肯定文で）誰か、ある人","ex":"Someone is at the door.","exJa":"誰かがドアのところにいます。"},
{"no":"152","stage":4,"en":"something","ja":"（肯定文で）何か","ex":"I see something in the sky.","exJa":"空に何かが見えます。"},
{"no":"153","stage":4,"en":"anyone","ja":"（肯定文で）誰でも","ex":"Anyone can join this club.","exJa":"誰でもこの部に入れます。"},
{"no":"154","stage":4,"en":"anything","ja":"（疑問文で）何か","ex":"Do you have anything in your bag?","exJa":"かばんの中に何か入っていますか。"}
]
};
