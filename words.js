const WORDS = [
  {
    word: "der Apfel",
    translation: "яблоко",
    usage: "Существительное, мужской род. Множественное число: die Äpfel.",
    examples: [
      "Ich esse einen Apfel. — Я ем яблоко.",
      "Der Apfel ist rot. — Яблоко красное."
    ]
  },
  {
    word: "das Haus",
    translation: "дом",
    usage: "Существительное, средний род. Множественное число: die Häuser.",
    examples: [
      "Mein Haus ist groß. — Мой дом большой.",
      "Wir gehen nach Hause. — Мы идём домой."
    ]
  },
  {
    word: "die Katze",
    translation: "кошка",
    usage: "Существительное, женский род. Множественное число: die Katzen.",
    examples: [
      "Die Katze schläft. — Кошка спит.",
      "Ich habe eine Katze. — У меня есть кошка."
    ]
  },
  {
    word: "trinken",
    translation: "пить",
    usage: "Глагол. Формы: trinken — trank — getrunken.",
    examples: [
      "Ich trinke Wasser. — Я пью воду.",
      "Trinkst du Kaffee? — Ты пьёшь кофе?"
    ]
  },
  {
    word: "essen",
    translation: "есть, кушать",
    usage: "Глагол. Формы: essen — aß — gegessen.",
    examples: [
      "Wir essen Brot. — Мы едим хлеб.",
      "Was isst du? — Что ты ешь?"
    ]
  },
  {
    word: "lernen",
    translation: "учить, изучать",
    usage: "Правильный глагол. Lernen — lernte — gelernt.",
    examples: [
      "Ich lerne Deutsch. — Я учу немецкий.",
      "Sie lernt in der Schule. — Она учится в школе."
    ]
  },
  {
    word: "gehen",
    translation: "идти",
    usage: "Глагол. Формы: gehen — ging — gegangen.",
    examples: [
      "Ich gehe ins Kino. — Я иду в кино.",
      "Wie geht es dir? — Как у тебя дела?"
    ]
  },
  {
    word: "das Buch",
    translation: "книга",
    usage: "Существительное, средний род. Множественное число: die Bücher.",
    examples: [
      "Das Buch ist interessant. — Книга интересная.",
      "Ich lese ein Buch. — Я читаю книгу."
    ]
  },
  {
    word: "die Schule",
    translation: "школа",
    usage: "Существительное, женский род. Множественное число: die Schulen.",
    examples: [
      "Die Schule beginnt um acht. — Школа начинается в восемь.",
      "Ich gehe in die Schule. — Я иду в школу."
    ]
  },
  {
    word: "der Freund",
    translation: "друг",
    usage: "Существительное, мужской род. Множественное число: die Freunde.",
    examples: [
      "Er ist mein Freund. — Он мой друг.",
      "Ich treffe meinen Freund. — Я встречаю своего друга."
    ]
  },
  {
    word: "sprechen",
    translation: "говорить",
    usage: "Глагол. Формы: sprechen — sprach — gesprochen.",
    examples: [
      "Ich spreche Deutsch. — Я говорю по-немецки.",
      "Sprichst du Englisch? — Ты говоришь по-английски?"
    ]
  },
  {
    word: "schön",
    translation: "красивый, прекрасный",
    usage: "Прилагательное. Также используется как 'хорошо, прекрасно'.",
    examples: [
      "Das Wetter ist schön. — Погода прекрасная.",
      "Eine schöne Blume. — Красивый цветок."
    ]
  },
  {
    word: "groß",
    translation: "большой",
    usage: "Прилагательное. Сравнительная степень: größer.",
    examples: [
      "Der Baum ist groß. — Дерево большое.",
      "Ein großes Problem. — Большая проблема."
    ]
  },
  {
    word: "klein",
    translation: "маленький",
    usage: "Прилагательное. Сравнительная степень: kleiner.",
    examples: [
      "Das Kind ist klein. — Ребёнок маленький.",
      "Eine kleine Stadt. — Маленький город."
    ]
  },
  {
    word: "die Familie",
    translation: "семья",
    usage: "Существительное, женский род. Множественное число: die Familien.",
    examples: [
      "Meine Familie ist groß. — Моя семья большая.",
      "Ich liebe meine Familie. — Я люблю свою семью."
    ]
  },
  {
    word: "arbeiten",
    translation: "работать",
    usage: "Правильный глагол. Arbeiten — arbeitete — gearbeitet.",
    examples: [
      "Ich arbeite in Berlin. — Я работаю в Берлине.",
      "Er arbeitet viel. — Он много работает."
    ]
  },
  {
    word: "das Wasser",
    translation: "вода",
    usage: "Существительное, средний род. Обычно без артикля в ед. числе.",
    examples: [
      "Ich trinke Wasser. — Я пью воду.",
      "Das Wasser ist kalt. — Вода холодная."
    ]
  },
  {
    word: "der Tag",
    translation: "день",
    usage: "Существительное, мужской род. Множественное число: die Tage.",
    examples: [
      "Guten Tag! — Добрый день!",
      "Der Tag war lang. — День был долгим."
    ]
  },
  {
    word: "die Nacht",
    translation: "ночь",
    usage: "Существительное, женский род. Множественное число: die Nächte.",
    examples: [
      "Gute Nacht! — Спокойной ночи!",
      "Die Nacht ist dunkel. — Ночь тёмная."
    ]
  },
  {
    word: "kaufen",
    translation: "покупать",
    usage: "Правильный глагол. Kaufen — kaufte — gekauft.",
    examples: [
      "Ich kaufe Brot. — Я покупаю хлеб.",
      "Wo kaufst du ein? — Где ты делаешь покупки?"
    ]
  },
  {
    word: "wohnen",
    translation: "жить, проживать",
    usage: "Правильный глагол. Wohnen — wohnte — gewohnt.",
    examples: [
      "Ich wohne in München. — Я живу в Мюнхене.",
      "Wo wohnst du? — Где ты живёшь?"
    ]
  },
  {
    word: "heißen",
    translation: "зваться, называться",
    usage: "Глагол. Формы: heißen — hieß — geheißen.",
    examples: [
      "Ich heiße Anna. — Меня зовут Анна.",
      "Wie heißt du? — Как тебя зовут?"
    ]
  },
  {
    word: "die Stadt",
    translation: "город",
    usage: "Существительное, женский род. Множественное число: die Städte.",
    examples: [
      "Berlin ist eine große Stadt. — Берлин — большой город.",
      "Ich fahre in die Stadt. — Я еду в город."
    ]
  },
  {
    word: "das Auto",
    translation: "машина, автомобиль",
    usage: "Существительное, средний род. Множественное число: die Autos.",
    examples: [
      "Das Auto ist neu. — Машина новая.",
      "Ich fahre mit dem Auto. — Я еду на машине."
    ]
  },
  {
    word: "sehen",
    translation: "видеть",
    usage: "Глагол. Формы: sehen — sah — gesehen.",
    examples: [
      "Ich sehe dich. — Я вижу тебя.",
      "Siehst du das Bild? — Ты видишь картину?"
    ]
  },
  {
    word: "hören",
    translation: "слышать, слушать",
    usage: "Правильный глагол. Hören — hörte — gehört.",
    examples: [
      "Ich höre Musik. — Я слушаю музыку.",
      "Hörst du mich? — Ты меня слышишь?"
    ]
  },
  {
    word: "schlafen",
    translation: "спать",
    usage: "Глагол. Формы: schlafen — schlief — geschlafen.",
    examples: [
      "Ich schlafe gut. — Я хорошо сплю.",
      "Das Kind schläft. — Ребёнок спит."
    ]
  },
  {
    word: "die Arbeit",
    translation: "работа",
    usage: "Существительное, женский род. Множественное число: die Arbeiten.",
    examples: [
      "Die Arbeit ist schwer. — Работа тяжёлая.",
      "Ich gehe zur Arbeit. — Я иду на работу."
    ]
  },
  {
    word: "das Essen",
    translation: "еда",
    usage: "Существительное, средний род. Также инфинитив глагола 'есть'.",
    examples: [
      "Das Essen ist lecker. — Еда вкусная.",
      "Ich koche das Essen. — Я готовлю еду."
    ]
  },
  {
    word: "die Zeit",
    translation: "время",
    usage: "Существительное, женский род. Множественное число: die Zeiten.",
    examples: [
      "Ich habe keine Zeit. — У меня нет времени.",
      "Die Zeit vergeht schnell. — Время проходит быстро."
    ]
  }
];
