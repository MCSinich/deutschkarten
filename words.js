const WORDS = [
  // --- Kleidung (одежда) ---
  {
    word: "das Top",
    translation: "топ",
    usage: "Существительное, средний род. Мн. число: die Tops.",
    examples: [
      "Ich trage ein Top mit einer Hose. — Я ношу топ с брюками.",
      "Das Top ist aus Baumwolle. — Топ из хлопка."
    ]
  },
  {
    word: "das Tanktop",
    translation: "майка",
    usage: "Существительное, средний род. Мн. число: die Tanktops.",
    examples: [
      "Im Sommer trage ich gern ein Tanktop. — Летом я люблю носить майку.",
      "Das Tanktop ist sehr luftig. — Майка очень воздушная."
    ]
  },
  {
    word: "das Hemd",
    translation: "рубашка",
    usage: "Существительное, средний род. Мн. число: die Hemden.",
    examples: [
      "Er trägt ein weißes Hemd. — Он носит белую рубашку.",
      "Das Hemd ist aus Baumwolle. — Рубашка из хлопка."
    ]
  },
  {
    word: "das T-Shirt",
    translation: "футболка",
    usage: "Существительное, средний род. Мн. число: die T-Shirts.",
    examples: [
      "Ich trage ein weißes T-Shirt. — Я ношу белую футболку.",
      "Das T-Shirt ist aus Baumwolle. — Футболка из хлопка."
    ]
  },
  {
    word: "die Hose",
    translation: "брюки",
    usage: "Существительное, женский род. Мн. число: die Hosen.",
    examples: [
      "Die Hose ist zu eng. — Брюки слишком тесные.",
      "Ich kaufe eine neue Hose. — Я покупаю новые брюки."
    ]
  },
  {
    word: "das Kleid",
    translation: "платье",
    usage: "Существительное, средний род. Мн. число: die Kleider.",
    examples: [
      "Das Kleid ist bequem. — Платье удобное.",
      "Ich ziehe heute ein Kleid an. — Я сегодня надеваю платье."
    ]
  },
  {
    word: "der Rock",
    translation: "юбка",
    usage: "Существительное, мужской род. Мн. число: die Röcke.",
    examples: [
      "Der Rock ist elegant. — Юбка элегантная.",
      "Sie trägt einen kurzen Rock. — Она носит короткую юбку."
    ]
  },
  {
    word: "die Bluse",
    translation: "блузка",
    usage: "Существительное, женский род. Мн. число: die Blusen.",
    examples: [
      "Diese Bluse ist sehr leicht. — Эта блузка очень лёгкая.",
      "Die Bluse ist aus Viskose. — Блузка из вискозы."
    ]
  },
  {
    word: "die Stoffhose",
    translation: "лёгкие брюки",
    usage: "Существительное, женский род. Мн. число: die Stoffhosen.",
    examples: [
      "Ich trage eine Stoffhose im Sommer. — Летом я ношу лёгкие брюки.",
      "Die Stoffhose ist sehr bequem. — Лёгкие брюки очень удобные."
    ]
  },
  {
    word: "die Leinenhose",
    translation: "льняные брюки",
    usage: "Существительное, женский род. Мн. число: die Leinenhosen.",
    examples: [
      "Eine Bluse mit einer Leinenhose ist elegant. — Блузка с льняными брюками — элегантно.",
      "Die Leinenhose ist luftig. — Льняные брюки воздушные."
    ]
  },
  {
    word: "die kurze Hose",
    translation: "короткие брюки",
    usage: "Словосочетание. Kurz (короткий) + Hose (брюки).",
    examples: [
      "Im Sommer trage ich eine kurze Hose. — Летом я ношу короткие брюки.",
      "Die kurze Hose ist aus Leinen. — Короткие брюки из льна."
    ]
  },
  {
    word: "die Shorts",
    translation: "шорты",
    usage: "Существительное, женский род, всегда во мн. числе.",
    examples: [
      "Diese Shorts sind aus Polyester. — Эти шорты из полиэстера.",
      "Im Sommer trage ich gern Shorts. — Летом я люблю носить шорты."
    ]
  },
  {
    word: "der Minirock",
    translation: "мини-юбка",
    usage: "Существительное, мужской род. Мн. число: die Miniröcke.",
    examples: [
      "Sie trägt einen Minirock im Sommer. — Летом она носит мини-юбку.",
      "Der Minirock ist bunt. — Мини-юбка яркая."
    ]
  },
  {
    word: "das Sommerkleid",
    translation: "летнее платье",
    usage: "Существительное, средний род. Мн. число: die Sommerkleider.",
    examples: [
      "Ich trage gern ein Sommerkleid. — Я люблю носить летнее платье.",
      "Das Sommerkleid ist aus Seide. — Летнее платье из шёлка."
    ]
  },
  {
    word: "das Leinenkleid",
    translation: "льняное платье",
    usage: "Существительное, средний род. Мн. число: die Leinenkleider.",
    examples: [
      "Das Leinenkleid ist perfekt für den Sommer. — Льняное платье идеально для лета.",
      "Ich kaufe ein Leinenkleid. — Я покупаю льняное платье."
    ]
  },
  {
    word: "der Jumpsuit",
    translation: "комбинезон",
    usage: "Существительное, мужской род. Мн. число: die Jumpsuits.",
    examples: [
      "Der Jumpsuit sieht elegant aus. — Комбинезон выглядит элегантно.",
      "Ich trage gern einen Jumpsuit im Sommer. — Летом я люблю носить комбинезон."
    ]
  },
  {
    word: "die Jeansjacke",
    translation: "джинсовая куртка",
    usage: "Существительное, женский род. Мн. число: die Jeansjacken.",
    examples: [
      "Am Abend nehme ich eine Jeansjacke mit. — Вечером я беру джинсовую куртку.",
      "Die Jeansjacke passt zu allem. — Джинсовая куртка подходит ко всему."
    ]
  },
  {
    word: "die leichte Jacke",
    translation: "лёгкая куртка",
    usage: "Словосочетание. Leicht (лёгкий) + Jacke (куртка).",
    examples: [
      "Am Abend nehme ich eine leichte Jacke mit. — Вечером я беру лёгкую куртку.",
      "Die leichte Jacke ist praktisch. — Лёгкая куртка практичная."
    ]
  },
  {
    word: "der Blazer",
    translation: "блейзер",
    usage: "Существительное, мужской род. Мн. число: die Blazer.",
    examples: [
      "Ein Blazer macht das Outfit eleganter. — Блейзер делает образ элегантнее.",
      "Ich trage einen Blazer zur Arbeit. — Я ношу блейзер на работу."
    ]
  },
  {
    word: "die Strickjacke",
    translation: "кардиган",
    usage: "Существительное, женский род. Мн. число: die Strickjacken.",
    examples: [
      "Ich nehme eine Strickjacke mit, wenn es kühler wird. — Я беру кардиган, когда становится прохладнее.",
      "Die Strickjacke ist sehr bequem. — Кардиган очень удобный."
    ]
  },
  // --- Schuhe (обувь) ---
  {
    word: "die Schuhe",
    translation: "обувь",
    usage: "Существительное, мн. число. Ед. число: der Schuh (ботинок).",
    examples: [
      "Ich kaufe neue Schuhe. — Я покупаю новую обувь.",
      "Diese Schuhe sind bequem. — Эта обувь удобная."
    ]
  },
  {
    word: "die Sandalen",
    translation: "сандалии",
    usage: "Существительное, женский род, обычно мн. число.",
    examples: [
      "Im Sommer trage ich Sandalen. — Летом я ношу сандалии.",
      "Diese Sandalen sind sehr bequem. — Эти сандалии очень удобные."
    ]
  },
  {
    word: "die Sneaker",
    translation: "кроссовки",
    usage: "Существительное, мужской род, обычно мн. число.",
    examples: [
      "Ich greife zu Sneakern, weil sie bequemer sind. — Я выбираю кроссовки, потому что они удобнее.",
      "Sneaker passen zu vielen Outfits. — Кроссовки подходят ко многим образам."
    ]
  },
  // --- Schuhe продолжение ---
  {
    word: "die Flip-Flops",
    translation: "шлёпанцы",
    usage: "Существительное, мн. число. Заимствование из английского.",
    examples: [
      "Am Strand trage ich Flip-Flops. — На пляже я ношу шлёпанцы.",
      "Flip-Flops sind bequem im Sommer. — Шлёпанцы удобны летом."
    ]
  },
  {
    word: "die Ballerinas",
    translation: "балетки",
    usage: "Существительное, мн. число. Ед. число: die Ballerina.",
    examples: [
      "Ballerinas sind elegant und bequem. — Балетки элегантны и удобны.",
      "Ich trage Ballerinas zur Hose. — Я ношу балетки с брюками."
    ]
  },
  {
    word: "die Espadrilles",
    translation: "эспадрильи",
    usage: "Существительное, мн. число. Заимствование из французского.",
    examples: [
      "Espadrilles passen gut zum Sommerkleid. — Эспадрильи хорошо подходят к летнему платью.",
      "Im Urlaub trage ich Espadrilles. — В отпуске я ношу эспадрильи."
    ]
  },
  // --- Accessoires (аксессуары) ---
  {
    word: "die Sonnenbrille",
    translation: "солнцезащитные очки",
    usage: "Существительное, женский род. Мн. число: die Sonnenbrillen.",
    examples: [
      "Ich trage im Sommer immer eine Sonnenbrille. — Летом я всегда ношу солнцезащитные очки.",
      "Diese Sonnenbrille ist sehr schön. — Эти солнцезащитные очки очень красивые."
    ]
  },
  {
    word: "der Hut",
    translation: "шляпа",
    usage: "Существительное, мужской род. Мн. число: die Hüte.",
    examples: [
      "Im Sommer trage ich einen Hut. — Летом я ношу шляпу.",
      "Der Hut schützt vor der Sonne. — Шляпа защищает от солнца."
    ]
  },
  {
    word: "die Kappe",
    translation: "кепка",
    usage: "Существительное, женский род. Мн. число: die Kappen.",
    examples: [
      "Er trägt eine Kappe beim Sport. — Он носит кепку на спорте.",
      "Die Kappe ist bequem. — Кепка удобная."
    ]
  },
  {
    word: "die Tasche",
    translation: "сумка",
    usage: "Существительное, женский род. Мн. число: die Taschen. Также значит 'карман'.",
    examples: [
      "Ich nehme meine Tasche mit. — Я беру сумку с собой.",
      "Die Tasche passt zum Outfit. — Сумка подходит к образу."
    ]
  },
  {
    word: "die Handtasche",
    translation: "дамская сумка",
    usage: "Существительное, женский род. Мн. число: die Handtaschen.",
    examples: [
      "Ich nehme meine Handtasche mit. — Я беру свою сумку с собой.",
      "Die Handtasche passt zum Kleid. — Сумка подходит к платью."
    ]
  },
  {
    word: "der Rucksack",
    translation: "рюкзак",
    usage: "Существительное, мужской род. Мн. число: die Rucksäcke.",
    examples: [
      "Ich trage einen Rucksack zur Schule. — Я ношу рюкзак в школу.",
      "Der Rucksack ist sehr praktisch. — Рюкзак очень практичный."
    ]
  },
  {
    word: "der Schmuck",
    translation: "украшения",
    usage: "Существительное, мужской род. Обычно без мн. числа (собирательное).",
    examples: [
      "Sie trägt keinen Schmuck. — Она не носит украшений.",
      "Der Schmuck passt zum Kleid. — Украшения подходят к платью."
    ]
  },
  {
    word: "die Ohrringe",
    translation: "серьги",
    usage: "Существительное, мн. число. Ед. число: der Ohrring.",
    examples: [
      "Sie trägt goldene Ohrringe. — Она носит золотые серьги.",
      "Die Ohrringe sind sehr schön. — Серьги очень красивые."
    ]
  },
  {
    word: "die Kette",
    translation: "цепочка",
    usage: "Существительное, женский род. Мн. число: die Ketten.",
    examples: [
      "Sie trägt eine goldene Kette. — Она носит золотую цепочку.",
      "Die Kette passt zur Bluse. — Цепочка подходит к блузке."
    ]
  },
  {
    word: "das Armband",
    translation: "браслет",
    usage: "Существительное, средний род. Мн. число: die Armbänder.",
    examples: [
      "Das Armband ist aus Silber. — Браслет из серебра.",
      "Ich trage immer ein Armband. — Я всегда ношу браслет."
    ]
  },
  {
    word: "der Gürtel",
    translation: "ремень",
    usage: "Существительное, мужской род. Мн. число: die Gürtel.",
    examples: [
      "Der Gürtel passt zur Hose. — Ремень подходит к брюкам.",
      "Ich kaufe einen neuen Gürtel. — Я покупаю новый ремень."
    ]
  },
  // --- Materialien (материалы) ---
  {
    word: "aus Baumwolle",
    translation: "из хлопка",
    usage: "Предложная группа. Baumwolle (хлопок) — женский род.",
    examples: [
      "Das T-Shirt ist aus Baumwolle. — Футболка из хлопка.",
      "Ich kaufe lieber Kleidung aus Baumwolle. — Я предпочитаю покупать одежду из хлопка."
    ]
  },
  {
    word: "aus Leinen",
    translation: "из льна",
    usage: "Предложная группа. Leinen (лён) — средний род.",
    examples: [
      "Die Hose ist aus Leinen. — Брюки из льна.",
      "Ich trage im Sommer gern Leinen. — Летом я люблю носить лён."
    ]
  },
  {
    word: "aus Seide",
    translation: "из шёлка",
    usage: "Предложная группа. Seide (шёлк) — женский род.",
    examples: [
      "Das Kleid ist aus Seide. — Платье из шёлка.",
      "Seide fühlt sich angenehm an. — Шёлк приятен на ощупь."
    ]
  },
  {
    word: "aus Satin",
    translation: "из сатина",
    usage: "Предложная группа. Satin (сатин) — мужской род.",
    examples: [
      "Das Abendkleid ist aus Satin. — Вечернее платье из сатина.",
      "Satin glänzt schön. — Сатин красиво блестит."
    ]
  },
  {
    word: "aus Viskose",
    translation: "из вискозы",
    usage: "Предложная группа. Viskose (вискоза) — женский род.",
    examples: [
      "Die Bluse ist aus Viskose. — Блузка из вискозы.",
      "Viskose ist leicht und angenehm. — Вискоза лёгкая и приятная."
    ]
  },
  {
    word: "aus Polyester",
    translation: "из полиэстера",
    usage: "Предложная группа. Polyester (полиэстер) — мужской род.",
    examples: [
      "Diese Shorts sind aus Polyester. — Эти шорты из полиэстера.",
      "Polyester trocknet schnell. — Полиэстер быстро сохнет."
    ]
  },
  {
    word: "aus Denim",
    translation: "из денима",
    usage: "Предложная группа. Denim (деним) — мужской род.",
    examples: [
      "Die Jeansjacke ist aus Denim. — Джинсовая куртка из денима.",
      "Denim ist sehr haltbar. — Деним очень прочный."
    ]
  },
  {
    word: "aus Jeansstoff",
    translation: "из джинсовой ткани",
    usage: "Предложная группа. Jeansstoff (джинсовая ткань) — мужской род.",
    examples: [
      "Die Jacke ist aus Jeansstoff. — Куртка из джинсовой ткани.",
      "Jeansstoff ist robust und langlebig. — Джинсовая ткань прочная и долговечная."
    ]
  },
  // --- Farben (цвета) ---
  {
    word: "weiß",
    translation: "белый",
    usage: "Прилагательное. В сильном склонении: weiße, weißer, weißes.",
    examples: [
      "Ich trage ein weißes T-Shirt. — Я ношу белую футболку.",
      "Weiß ist eine klassische Farbe. — Белый — классический цвет."
    ]
  },
  {
    word: "grau",
    translation: "серый",
    usage: "Прилагательное. Сравнительная степень: grauer.",
    examples: [
      "Die Hose ist grau. — Брюки серые.",
      "Ein grauer Blazer ist elegant. — Серый блейзер элегантный."
    ]
  },
  {
    word: "blau",
    translation: "синий",
    usage: "Прилагательное. Сравнительная степень: blauer.",
    examples: [
      "Das Kleid ist blau. — Платье синее.",
      "Ich mag blaue Farben. — Мне нравятся синие цвета."
    ]
  },
  {
    word: "dunkelblau",
    translation: "тёмно-синий",
    usage: "Составное прилагательное: dunkel (тёмный) + blau (синий).",
    examples: [
      "Der Blazer ist dunkelblau. — Блейзер тёмно-синий.",
      "Ein dunkelblaues Hemd sieht elegant aus. — Тёмно-синяя рубашка выглядит элегантно."
    ]
  },
  {
    word: "braun",
    translation: "коричневый",
    usage: "Прилагательное. Сравнительная степень: brauner.",
    examples: [
      "Die Sandalen sind braun. — Сандалии коричневые.",
      "Ein brauner Gürtel passt zu Beige. — Коричневый ремень подходит к бежевому."
    ]
  },
  {
    word: "grün",
    translation: "зелёный",
    usage: "Прилагательное. Сравнительная степень: grüner.",
    examples: [
      "Das Top ist grün. — Топ зелёный.",
      "Grüne Farben sind modern. — Зелёные цвета современные."
    ]
  },
  {
    word: "rot",
    translation: "красный",
    usage: "Прилагательное. Сравнительная степень: röter.",
    examples: [
      "Das Kleid ist rot. — Платье красное.",
      "Ein rotes T-Shirt fällt auf. — Красная футболка бросается в глаза."
    ]
  },
  {
    word: "rosa",
    translation: "розовый",
    usage: "Прилагательное. Не изменяется при склонении.",
    examples: [
      "Die Bluse ist rosa. — Блузка розовая.",
      "Ich mag rosa Farben im Sommer. — Мне нравятся розовые цвета летом."
    ]
  },
  {
    word: "gelb",
    translation: "жёлтый",
    usage: "Прилагательное. Сравнительная степень: gelber.",
    examples: [
      "Das Sommerkleid ist gelb. — Летнее платье жёлтое.",
      "Gelb ist eine fröhliche Farbe. — Жёлтый — радостный цвет."
    ]
  },
  {
    word: "orange",
    translation: "оранжевый",
    usage: "Прилагательное. Не изменяется при склонении.",
    examples: [
      "Das Top ist orange. — Топ оранжевый.",
      "Ein oranges Kleid ist sehr auffällig. — Оранжевое платье очень заметное."
    ]
  },
  {
    word: "lila",
    translation: "фиолетовый",
    usage: "Прилагательное. Не изменяется при склонении.",
    examples: [
      "Die Shorts sind lila. — Шорты фиолетовые.",
      "Lila ist eine elegante Farbe. — Фиолетовый — элегантный цвет."
    ]
  },
  {
    word: "hell",
    translation: "светлый",
    usage: "Прилагательное. Антоним: dunkel (тёмный).",
    examples: [
      "Ich mag helle Farben im Sommer. — Летом мне нравятся светлые цвета.",
      "Ein helles Kleid ist perfekt für den Sommer. — Светлое платье идеально для лета."
    ]
  },
  {
    word: "dunkel",
    translation: "тёмный",
    usage: "Прилагательное. Антоним: hell (светлый).",
    examples: [
      "Dunkle Kleidung ist im Sommer oft zu warm. — Тёмная одежда летом часто слишком тёплая.",
      "Ich trage selten dunkle Farben. — Я редко ношу тёмные цвета."
    ]
  },
  {
    word: "schwarz",
    translation: "чёрный",
    usage: "Прилагательное. Склоняется по стандартным правилам.",
    examples: [
      "Ich trage oft schwarze Kleidung. — Я часто ношу чёрную одежду.",
      "Das schwarze Kleid sieht elegant aus. — Чёрное платье выглядит элегантно."
    ]
  },
  {
    word: "beige",
    translation: "бежевый",
    usage: "Прилагательное. Не изменяется при склонении.",
    examples: [
      "Die Shorts sind beige. — Шорты бежевые.",
      "Ich mag beige Farben im Sommer. — Мне нравятся бежевые цвета летом."
    ]
  },
  {
    word: "hellblau",
    translation: "светло-синий",
    usage: "Составное прилагательное: hell (светлый) + blau (синий).",
    examples: [
      "Das Kleid ist hellblau. — Платье светло-синее.",
      "Ich kaufe ein hellblaues T-Shirt. — Я покупаю светло-синюю футболку."
    ]
  },
  {
    word: "bunt",
    translation: "разноцветный",
    usage: "Прилагательное. Означает яркий, пёстрый, многоцветный.",
    examples: [
      "Das Muster ist sehr bunt. — Узор очень яркий.",
      "Im Sommer trage ich gern bunte Sachen. — Летом я люблю носить яркие вещи."
    ]
  },
  // --- Muster (узоры) ---
  {
    word: "gepunktet",
    translation: "в горошек",
    usage: "Прилагательное. От Punkt (точка).",
    examples: [
      "Das Kleid ist gepunktet. — Платье в горошек.",
      "Ein gepunktetes Top sieht süß aus. — Топ в горошек выглядит мило."
    ]
  },
  {
    word: "mit Blumen",
    translation: "с цветами",
    usage: "Предложная группа. Mit (с) + Blumen (цветы, мн. число).",
    examples: [
      "Das Kleid ist mit Blumen. — Платье с цветами.",
      "Ich mag Kleider mit Blumen. — Мне нравятся платья с цветами."
    ]
  },
  {
    word: "mit Print",
    translation: "с принтом",
    usage: "Предложная группа. Print (принт) — мужской род.",
    examples: [
      "Das T-Shirt ist mit Print. — Футболка с принтом.",
      "Ein T-Shirt mit Print ist auffällig. — Футболка с принтом заметная."
    ]
  },
  {
    word: "gemustert",
    translation: "с узором",
    usage: "Прилагательное. От Muster (узор, образец).",
    examples: [
      "Das gemusterte Kleid ist schön. — Платье с узором красивое.",
      "Ich kaufe selten gemusterte Sachen. — Я редко покупаю вещи с узором."
    ]
  },
  {
    word: "gestreift",
    translation: "в полоску",
    usage: "Прилагательное. От Streifen (полоса).",
    examples: [
      "Ich trage ein gestreiftes T-Shirt. — Я ношу футболку в полоску.",
      "Das gestreifte Kleid gefällt mir. — Мне нравится платье в полоску."
    ]
  },
  {
    word: "kariert",
    translation: "в клетку",
    usage: "Прилагательное. От Karo (клетка).",
    examples: [
      "Die Hose ist kariert. — Брюки в клетку.",
      "Er trägt ein kariertes Hemd. — Он носит рубашку в клетку."
    ]
  },
  {
    word: "einfarbig",
    translation: "однотонный",
    usage: "Прилагательное. Einfarbig — буквально 'одного цвета'.",
    examples: [
      "Ich kaufe lieber einfarbige Sachen. — Я предпочитаю покупать однотонные вещи.",
      "Ein einfarbiges T-Shirt lässt sich gut kombinieren. — Однотонная футболка хорошо сочетается."
    ]
  },
  // --- Eigenschaften (свойства одежды) ---
  {
    word: "leicht",
    translation: "лёгкий",
    usage: "Прилагательное. Также значит 'простой, несложный'.",
    examples: [
      "Diese Bluse ist sehr leicht. — Эта блузка очень лёгкая.",
      "Im Sommer trage ich gern leichte Kleidung. — Летом я люблю носить лёгкую одежду."
    ]
  },
  {
    word: "weit",
    translation: "широкий (о посадке)",
    usage: "Прилагательное. Также значит 'далёкий'. Антоним: eng.",
    examples: [
      "Die Hose ist zu weit. — Брюки слишком широкие.",
      "Ein weites Kleid ist bequem. — Широкое платье удобное."
    ]
  },
  {
    word: "elegant",
    translation: "элегантный",
    usage: "Прилагательное. Используется для одежды и поведения.",
    examples: [
      "Das Kleid sieht elegant aus. — Платье выглядит элегантно.",
      "Ein Blazer macht das Outfit eleganter. — Блейзер делает образ элегантнее."
    ]
  },
  {
    word: "modern",
    translation: "современный",
    usage: "Прилагательное. Означает актуальный, в тренде.",
    examples: [
      "Dieses Kleid ist sehr modern. — Это платье очень современное.",
      "Ich mag modernen Stil. — Мне нравится современный стиль."
    ]
  },
  {
    word: "praktisch",
    translation: "практичный",
    usage: "Прилагательное. Означает удобный для использования.",
    examples: [
      "Sneaker sind im Alltag sehr praktisch. — Кроссовки очень практичны в повседневной жизни.",
      "Die Tasche ist praktisch. — Сумка практичная."
    ]
  },
  {
    word: "weich",
    translation: "мягкий",
    usage: "Прилагательное. Антоним: hart (жёсткий).",
    examples: [
      "Der Stoff ist weich. — Ткань мягкая.",
      "Baumwolle ist sehr weich. — Хлопок очень мягкий."
    ]
  },
  {
    word: "angenehm",
    translation: "приятный",
    usage: "Прилагательное. Используется для ощущений и ситуаций.",
    examples: [
      "Der Stoff ist angenehm. — Ткань приятная.",
      "Baumwolle ist angenehm auf der Haut. — Хлопок приятен на коже."
    ]
  },
  {
    word: "unbequem",
    translation: "неудобный",
    usage: "Прилагательное. Антоним: bequem.",
    examples: [
      "Diese Schuhe sind unbequem. — Эта обувь неудобная.",
      "Zu enge Kleidung ist unbequem. — Слишком тесная одежда неудобная."
    ]
  },
  {
    word: "zu eng",
    translation: "слишком тесный",
    usage: "Zu (слишком) + eng (тесный). Zu используется перед прилагательным.",
    examples: [
      "Die Hose ist zu eng. — Брюки слишком тесные.",
      "Das Kleid ist mir zu eng. — Платье мне слишком тесное."
    ]
  },
  {
    word: "zu weit",
    translation: "слишком широкий",
    usage: "Zu (слишком) + weit (широкий).",
    examples: [
      "Die Hose ist zu weit. — Брюки слишком широкие.",
      "Diese Jacke ist mir zu weit. — Эта куртка мне слишком широкая."
    ]
  },
  {
    word: "zu warm",
    translation: "слишком тёплый",
    usage: "Zu (слишком) + warm (тёплый). Часто о летней одежде.",
    examples: [
      "Der Pullover ist im Sommer zu warm. — Свитер летом слишком тёплый.",
      "Dunkle Kleidung ist oft zu warm. — Тёмная одежда часто слишком тёплая."
    ]
  },
  {
    word: "dünn",
    translation: "тонкий",
    usage: "Прилагательное. Антоним: dick (толстый/плотный).",
    examples: [
      "Der Stoff ist sehr dünn. — Ткань очень тонкая.",
      "Ein dünnes T-Shirt ist perfekt für heiße Tage. — Тонкая футболка идеальна для жарких дней."
    ]
  },
  {
    word: "dick",
    translation: "толстый, плотный",
    usage: "Прилагательное. О ткани значит 'плотный'. Антоним: dünn.",
    examples: [
      "Der Stoff ist zu dick für den Sommer. — Ткань слишком плотная для лета.",
      "Zu dicke Sachen mag ich im Sommer nicht. — Слишком плотные вещи мне летом не нравятся."
    ]
  },
  {
    word: "bequem",
    translation: "удобный",
    usage: "Прилагательное. Сравнительная степень: bequemer.",
    examples: [
      "Das Kleid ist bequem. — Платье удобное.",
      "Ich suche bequeme Schuhe. — Я ищу удобную обувь."
    ]
  },
  {
    word: "luftig",
    translation: "воздушный, лёгкий",
    usage: "Прилагательное. Используется для одежды и погоды.",
    examples: [
      "Im Sommer trage ich gern leichte Kleidung, weil sie luftig ist. — Летом я люблю лёгкую одежду, потому что она воздушная.",
      "Ein luftiges Kleid ist perfekt für heiße Tage. — Воздушное платье идеально для жарких дней."
    ]
  },
  {
    word: "eng",
    translation: "узкий, тесный",
    usage: "Прилагательное. Антоним: weit (широкий).",
    examples: [
      "Die Hose ist zu eng. — Брюки слишком тесные.",
      "Das Kleid sitzt eng am Körper. — Платье плотно облегает тело."
    ]
  },
  {
    word: "locker",
    translation: "свободный (о посадке)",
    usage: "Прилагательное. Также значит 'расслабленный, непринуждённый'.",
    examples: [
      "Ich trage gern lockere Hosen im Sommer. — Летом я люблю носить свободные брюки.",
      "Das Hemd sitzt locker. — Рубашка сидит свободно."
    ]
  },
  {
    word: "schlicht",
    translation: "простой, без лишнего",
    usage: "Прилагательное. Означает минималистичный, без украшений.",
    examples: [
      "Mein Stil ist eher schlicht. — Мой стиль довольно простой.",
      "Ich mag schlichte Kleidung. — Мне нравится простая одежда."
    ]
  },
  // --- Wichtige Verben (важные глаголы) ---
  {
    word: "tragen",
    translation: "носить (одежду)",
    usage: "Глагол. Formen: tragen — trug — hat getragen. Er/sie trägt.",
    examples: [
      "Ich trage im Sommer gern Leinen. — Летом я люблю носить лён.",
      "Was trägst du heute? — Что ты сегодня носишь?"
    ]
  },
  {
    word: "anziehen",
    translation: "надевать",
    usage: "Глагол с отделяемой приставкой. anziehen — zog an — hat angezogen.",
    examples: [
      "Ich ziehe heute ein Kleid an. — Я сегодня надеваю платье.",
      "Zieh etwas Warmes an! — Надень что-нибудь тёплое!"
    ]
  },
  {
    word: "passen",
    translation: "подходить, соответствовать",
    usage: "Правильный глагол. passen — passte — hat gepasst. Используется: passen zu (сочетаться с) и passen (по размеру).",
    examples: [
      "Diese Farben passen gut zusammen. — Эти цвета хорошо сочетаются.",
      "Die Hose passt mir nicht. — Брюки мне не подходят (не по размеру)."
    ]
  },
  {
    word: "anprobieren",
    translation: "примерять",
    usage: "Глагол с отделяемой приставкой. anprobieren — probierte an — hat anprobiert.",
    examples: [
      "Ich probiere das Kleid an. — Я примеряю платье.",
      "Kann ich das anprobieren? — Можно мне это примерить?"
    ]
  },
  {
    word: "ausziehen",
    translation: "снимать (одежду)",
    usage: "Глагол с отделяемой приставкой. ausziehen — zog aus — hat ausgezogen.",
    examples: [
      "Ich ziehe die Jacke aus. — Я снимаю куртку.",
      "Zieht bitte die Schuhe aus! — Пожалуйста, снимите обувь!"
    ]
  },
  {
    word: "wechseln",
    translation: "менять",
    usage: "Правильный глагол. wechseln — wechselte — hat gewechselt.",
    examples: [
      "Am Abend muss ich mein Outfit wechseln. — Вечером мне нужно сменить образ.",
      "Ich wechsle oft die Kleidung. — Я часто меняю одежду."
    ]
  },
  {
    word: "gefallen",
    translation: "нравиться",
    usage: "Глагол. gefallen — gefiel — hat gefallen. Используется с дативом: Das gefällt mir.",
    examples: [
      "Das Kleid gefällt mir. — Мне нравится платье.",
      "Wie gefällt dir das? — Как тебе это нравится?"
    ]
  },
  {
    word: "auswählen",
    translation: "выбирать",
    usage: "Глагол с отделяемой приставкой. auswählen — wählte aus — hat ausgewählt.",
    examples: [
      "Beim Einkaufen muss man sorgfältig auswählen. — При шоппинге нужно тщательно выбирать.",
      "Ich wähle heute ein Kleid aus. — Сегодня я выбираю платье."
    ]
  },
  {
    word: "zu etwas greifen",
    translation: "тянуться к чему-то, выбирать",
    usage: "Устойчивое выражение. greifen — griff — hat gegriffen.",
    examples: [
      "Wenn ich unsicher bin, greife ich zu Basics. — Когда я не уверена, выбираю базовые вещи.",
      "Ich greife zu Sneakern, weil sie bequemer sind. — Я выбираю кроссовки, потому что они удобнее."
    ]
  },
  {
    word: "zusammenpassen",
    translation: "сочетаться",
    usage: "Глагол с отделяемой приставкой. zusammenpassen — passte zusammen — hat zusammengepasst.",
    examples: [
      "Diese Farben passen gut zusammen. — Эти цвета хорошо сочетаются.",
      "Passen diese Schuhe zum Kleid zusammen? — Эти туфли сочетаются с платьем?"
    ]
  },
  {
    word: "gut sitzen",
    translation: "хорошо сидеть (о посадке одежды)",
    usage: "Устойчивое выражение. sitzen — saß — hat gesessen.",
    examples: [
      "Das Kleid sitzt gut. — Платье хорошо сидит.",
      "Wenn die Hose nicht gut sitzt, kaufe ich sie nicht. — Если брюки не хорошо сидят, я их не покупаю."
    ]
  },
  {
    word: "bügeln",
    translation: "гладить (одежду)",
    usage: "Правильный глагол. bügeln — bügelte — hat gebügelt.",
    examples: [
      "Ich bügle mein Hemd. — Я глажу рубашку.",
      "Leinen muss man oft bügeln. — Лён нужно часто гладить."
    ]
  },
  {
    word: "gut stehen",
    translation: "идти, хорошо смотреться",
    usage: "Устойчивое выражение. Используется с дативом: Das steht dir gut.",
    examples: [
      "Das steht dir gut! — Тебе это идёт!",
      "Diese Farbe steht ihr sehr gut. — Этот цвет ей очень идёт."
    ]
  },
  {
    word: "sich wohlfühlen",
    translation: "чувствовать себя комфортно",
    usage: "Возвратный глагол. sich wohlfühlen — fühlte sich wohl — hat sich wohlgefühlt.",
    examples: [
      "Ich möchte mich in meiner Kleidung wohlfühlen. — Я хочу чувствовать себя комфортно в своей одежде.",
      "In diesem Kleid fühle ich mich wohl. — В этом платье я чувствую себя комфортно."
    ]
  },
  {
    word: "kombinieren",
    translation: "сочетать, комбинировать",
    usage: "Правильный глагол. kombinieren — kombinierte — hat kombiniert.",
    examples: [
      "Ich mag es, Farben einfach zu kombinieren. — Мне нравится просто сочетать цвета.",
      "Einfarbige Sachen lassen sich gut kombinieren. — Однотонные вещи хорошо комбинируются."
    ]
  },
  {
    word: "knittern",
    translation: "мяться",
    usage: "Правильный глагол. knittern — knitterte — hat geknittert.",
    examples: [
      "Leinen knittert schnell. — Лён быстро мнётся.",
      "Dieses Material knittert nicht. — Этот материал не мнётся."
    ]
  },
  {
    word: "schwitzen",
    translation: "потеть",
    usage: "Правильный глагол. schwitzen — schwitzte — hat geschwitzt.",
    examples: [
      "In dicker Kleidung schwitzt man im Sommer schnell. — В тёплой одежде летом быстро потеешь.",
      "Baumwolle ist gut, weil man nicht so schnell schwitzt. — Хлопок хорош, потому что в нём не так быстро потеешь."
    ]
  },
  {
    word: "sich entscheiden",
    translation: "принять решение, выбрать",
    usage: "Возвратный глагол. sich entscheiden — entschied sich — hat sich entschieden.",
    examples: [
      "Ich kann mich nicht entscheiden, was ich anziehen soll. — Я не могу решить, что надеть.",
      "Ich entscheide mich für das blaue Kleid. — Я выбираю синее платье."
    ]
  },

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
    usage: "Глагол. trinken — trank — hat getrunken.",
    examples: [
      "Ich trinke Wasser. — Я пью воду.",
      "Trinkst du Kaffee? — Ты пьёшь кофе?"
    ]
  },
  {
    word: "essen",
    translation: "есть, кушать",
    usage: "Глагол. essen — aß — hat gegessen. Er/sie isst.",
    examples: [
      "Wir essen Brot. — Мы едим хлеб.",
      "Was isst du? — Что ты ешь?"
    ]
  },
  {
    word: "lernen",
    translation: "учить, изучать",
    usage: "Правильный глагол. lernen — lernte — hat gelernt.",
    examples: [
      "Ich lerne Deutsch. — Я учу немецкий.",
      "Sie lernt in der Schule. — Она учится в школе."
    ]
  },
  {
    word: "gehen",
    translation: "идти",
    usage: "Глагол. gehen — ging — ist gegangen. Движение → Perfekt с sein.",
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
    usage: "Глагол. sprechen — sprach — hat gesprochen. Er/sie spricht.",
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
    usage: "Правильный глагол. arbeiten — arbeitete — hat gearbeitet.",
    examples: [
      "Ich arbeite in Berlin. — Я работаю в Берлине.",
      "Er arbeitet viel. — Он много работает."
    ]
  },
  {
    word: "das Wasser",
    translation: "вода",
    usage: "Существительное, средний род. Несчисляемое, мн. число не используется.",
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
    usage: "Правильный глагол. kaufen — kaufte — hat gekauft.",
    examples: [
      "Ich kaufe Brot. — Я покупаю хлеб.",
      "Wo kaufst du ein? — Где ты делаешь покупки?"
    ]
  },
  {
    word: "wohnen",
    translation: "жить, проживать",
    usage: "Правильный глагол. wohnen — wohnte — hat gewohnt.",
    examples: [
      "Ich wohne in München. — Я живу в Мюнхене.",
      "Wo wohnst du? — Где ты живёшь?"
    ]
  },
  {
    word: "heißen",
    translation: "зваться, называться",
    usage: "Глагол. heißen — hieß — hat geheißen.",
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
    usage: "Глагол. sehen — sah — hat gesehen. Er/sie sieht.",
    examples: [
      "Ich sehe dich. — Я вижу тебя.",
      "Siehst du das Bild? — Ты видишь картину?"
    ]
  },
  {
    word: "hören",
    translation: "слышать, слушать",
    usage: "Правильный глагол. hören — hörte — hat gehört.",
    examples: [
      "Ich höre Musik. — Я слушаю музыку.",
      "Hörst du mich? — Ты меня слышишь?"
    ]
  },
  {
    word: "schlafen",
    translation: "спать",
    usage: "Глагол. schlafen — schlief — hat geschlafen. Er/sie schläft.",
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
    usage: "Существительное, средний род. Мн. число: die Essen (редко). Также инфинитив глагола 'есть'.",
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
