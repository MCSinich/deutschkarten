const GROUPS = [
  {
    id: "sommerkleidung",
    name: "Sommerkleidung",
    words: [
      {
        word: "das Top",
        translation: "топ",
        usage: "Существительное, средний род. Мн. число: die Tops.",
        pos: "noun",
        examples: [
          "Ich trage ein Top mit einer Hose. — Я ношу топ с брюками.",
          "Das Top ist aus Baumwolle. — Топ из хлопка."
        ]
      },
      {
        word: "das Tanktop",
        translation: "майка",
        usage: "Существительное, средний род. Мн. число: die Tanktops.",
        pos: "noun",
        examples: [
          "Im Sommer trage ich gern ein Tanktop. — Летом я люблю носить майку.",
          "Das Tanktop ist sehr luftig. — Майка очень воздушная."
        ]
      },
      {
        word: "das Hemd",
        translation: "рубашка",
        usage: "Существительное, средний род. Мн. число: die Hemden.",
        pos: "noun",
        examples: [
          "Er trägt ein weißes Hemd. — Он носит белую рубашку.",
          "Das Hemd ist aus Baumwolle. — Рубашка из хлопка."
        ]
      },
      {
        word: "das T-Shirt",
        translation: "футболка",
        usage: "Существительное, средний род. Мн. число: die T-Shirts.",
        pos: "noun",
        examples: [
          "Ich trage ein weißes T-Shirt. — Я ношу белую футболку.",
          "Das T-Shirt ist aus Baumwolle. — Футболка из хлопка."
        ]
      },
      {
        word: "die Hose",
        translation: "брюки",
        usage: "Существительное, женский род. Мн. число: die Hosen.",
        pos: "noun",
        examples: [
          "Die Hose ist zu eng. — Брюки слишком тесные.",
          "Ich kaufe eine neue Hose. — Я покупаю новые брюки."
        ]
      },
      {
        word: "das Kleid",
        translation: "платье",
        usage: "Существительное, средний род. Мн. число: die Kleider.",
        pos: "noun",
        examples: [
          "Das Kleid ist bequem. — Платье удобное.",
          "Ich ziehe heute ein Kleid an. — Я сегодня надеваю платье."
        ]
      },
      {
        word: "der Rock",
        translation: "юбка",
        usage: "Существительное, мужской род. Мн. число: die Röcke.",
        pos: "noun",
        examples: [
          "Der Rock ist elegant. — Юбка элегантная.",
          "Sie trägt einen kurzen Rock. — Она носит короткую юбку."
        ]
      },
      {
        word: "die Bluse",
        translation: "блузка",
        usage: "Существительное, женский род. Мн. число: die Blusen.",
        pos: "noun",
        examples: [
          "Diese Bluse ist sehr leicht. — Эта блузка очень лёгкая.",
          "Die Bluse ist aus Viskose. — Блузка из вискозы."
        ]
      },
      {
        word: "die Stoffhose",
        translation: "лёгкие брюки",
        usage: "Существительное, женский род. Мн. число: die Stoffhosen.",
        pos: "noun",
        examples: [
          "Ich trage eine Stoffhose im Sommer. — Летом я ношу лёгкие брюки.",
          "Die Stoffhose ist sehr bequem. — Лёгкие брюки очень удобные."
        ]
      },
      {
        word: "die Leinenhose",
        translation: "льняные брюки",
        usage: "Существительное, женский род. Мн. число: die Leinenhosen.",
        pos: "noun",
        examples: [
          "Eine Bluse mit einer Leinenhose ist elegant. — Блузка с льняными брюками — элегантно.",
          "Die Leinenhose ist luftig. — Льняные брюки воздушные."
        ]
      },
      {
        word: "die kurze Hose",
        translation: "короткие брюки",
        usage: "Словосочетание. Kurz (короткий) + Hose (брюки).",
        pos: "noun",
        examples: [
          "Im Sommer trage ich eine kurze Hose. — Летом я ношу короткие брюки.",
          "Die kurze Hose ist aus Leinen. — Короткие брюки из льна."
        ]
      },
      {
        word: "die Shorts",
        translation: "шорты",
        usage: "Существительное, женский род, всегда во мн. числе.",
        pos: "noun",
        examples: [
          "Diese Shorts sind aus Polyester. — Эти шорты из полиэстера.",
          "Im Sommer trage ich gern Shorts. — Летом я люблю носить шорты."
        ]
      },
      {
        word: "der Minirock",
        translation: "мини-юбка",
        usage: "Существительное, мужской род. Мн. число: die Miniröcke.",
        pos: "noun",
        examples: [
          "Sie trägt einen Minirock im Sommer. — Летом она носит мини-юбку.",
          "Der Minirock ist bunt. — Мини-юбка яркая."
        ]
      },
      {
        word: "das Sommerkleid",
        translation: "летнее платье",
        usage: "Существительное, средний род. Мн. число: die Sommerkleider.",
        pos: "noun",
        examples: [
          "Ich trage gern ein Sommerkleid. — Я люблю носить летнее платье.",
          "Das Sommerkleid ist aus Seide. — Летнее платье из шёлка."
        ]
      },
      {
        word: "das Leinenkleid",
        translation: "льняное платье",
        usage: "Существительное, средний род. Мн. число: die Leinenkleider.",
        pos: "noun",
        examples: [
          "Das Leinenkleid ist perfekt für den Sommer. — Льняное платье идеально для лета.",
          "Ich kaufe ein Leinenkleid. — Я покупаю льняное платье."
        ]
      },
      {
        word: "der Jumpsuit",
        translation: "комбинезон",
        usage: "Существительное, мужской род. Мн. число: die Jumpsuits.",
        pos: "noun",
        examples: [
          "Der Jumpsuit sieht elegant aus. — Комбинезон выглядит элегантно.",
          "Ich trage gern einen Jumpsuit im Sommer. — Летом я люблю носить комбинезон."
        ]
      },
      {
        word: "die Jeansjacke",
        translation: "джинсовая куртка",
        usage: "Существительное, женский род. Мн. число: die Jeansjacken.",
        pos: "noun",
        examples: [
          "Am Abend nehme ich eine Jeansjacke mit. — Вечером я беру джинсовую куртку.",
          "Die Jeansjacke passt zu allem. — Джинсовая куртка подходит ко всему."
        ]
      },
      {
        word: "die leichte Jacke",
        translation: "лёгкая куртка",
        usage: "Словосочетание. Leicht (лёгкий) + Jacke (куртка).",
        pos: "noun",
        examples: [
          "Am Abend nehme ich eine leichte Jacke mit. — Вечером я беру лёгкую куртку.",
          "Die leichte Jacke ist praktisch. — Лёгкая куртка практичная."
        ]
      },
      {
        word: "der Blazer",
        translation: "блейзер",
        usage: "Существительное, мужской род. Мн. число: die Blazer.",
        pos: "noun",
        examples: [
          "Ein Blazer macht das Outfit eleganter. — Блейзер делает образ элегантнее.",
          "Ich trage einen Blazer zur Arbeit. — Я ношу блейзер на работу."
        ]
      },
      {
        word: "die Strickjacke",
        translation: "кардиган",
        usage: "Существительное, женский род. Мн. число: die Strickjacken.",
        pos: "noun",
        examples: [
          "Ich nehme eine Strickjacke mit, wenn es kühler wird. — Я беру кардиган, когда становится прохладнее.",
          "Die Strickjacke ist sehr bequem. — Кардиган очень удобный."
        ]
      },
      {
        word: "die Schuhe",
        translation: "обувь",
        usage: "Существительное, мн. число. Ед. число: der Schuh (ботинок).",
        pos: "noun",
        examples: [
          "Ich kaufe neue Schuhe. — Я покупаю новую обувь.",
          "Diese Schuhe sind bequem. — Эта обувь удобная."
        ]
      },
      {
        word: "die Sandalen",
        translation: "сандалии",
        usage: "Существительное, женский род, обычно мн. число.",
        pos: "noun",
        examples: [
          "Im Sommer trage ich Sandalen. — Летом я ношу сандалии.",
          "Diese Sandalen sind sehr bequem. — Эти сандалии очень удобные."
        ]
      },
      {
        word: "die Sneaker",
        translation: "кроссовки",
        usage: "Существительное, мужской род, обычно мн. число.",
        pos: "noun",
        examples: [
          "Ich greife zu Sneakern, weil sie bequemer sind. — Я выбираю кроссовки, потому что они удобнее.",
          "Sneaker passen zu vielen Outfits. — Кроссовки подходят ко многим образам."
        ]
      },
      {
        word: "die Flip-Flops",
        translation: "шлёпанцы",
        usage: "Существительное, мн. число. Заимствование из английского.",
        pos: "noun",
        examples: [
          "Am Strand trage ich Flip-Flops. — На пляже я ношу шлёпанцы.",
          "Flip-Flops sind bequem im Sommer. — Шлёпанцы удобны летом."
        ]
      },
      {
        word: "die Ballerinas",
        translation: "балетки",
        usage: "Существительное, мн. число. Ед. число: die Ballerina.",
        pos: "noun",
        examples: [
          "Ballerinas sind elegant und bequem. — Балетки элегантны и удобны.",
          "Ich trage Ballerinas zur Hose. — Я ношу балетки с брюками."
        ]
      },
      {
        word: "die Espadrilles",
        translation: "эспадрильи",
        usage: "Существительное, мн. число. Заимствование из французского.",
        pos: "noun",
        examples: [
          "Espadrilles passen gut zum Sommerkleid. — Эспадрильи хорошо подходят к летнему платью.",
          "Im Urlaub trage ich Espadrilles. — В отпуске я ношу эспадрильи."
        ]
      },
      {
        word: "die Sonnenbrille",
        translation: "солнцезащитные очки",
        usage: "Существительное, женский род. Мн. число: die Sonnenbrillen.",
        pos: "noun",
        examples: [
          "Ich trage im Sommer immer eine Sonnenbrille. — Летом я всегда ношу солнцезащитные очки.",
          "Diese Sonnenbrille ist sehr schön. — Эти солнцезащитные очки очень красивые."
        ]
      },
      {
        word: "der Hut",
        translation: "шляпа",
        usage: "Существительное, мужской род. Мн. число: die Hüte.",
        pos: "noun",
        examples: [
          "Im Sommer trage ich einen Hut. — Летом я ношу шляпу.",
          "Der Hut schützt vor der Sonne. — Шляпа защищает от солнца."
        ]
      },
      {
        word: "die Kappe",
        translation: "кепка",
        usage: "Существительное, женский род. Мн. число: die Kappen.",
        pos: "noun",
        examples: [
          "Er trägt eine Kappe beim Sport. — Он носит кепку на спорте.",
          "Die Kappe ist bequem. — Кепка удобная."
        ]
      },
      {
        word: "die Tasche",
        translation: "сумка",
        usage: "Существительное, женский род. Мн. число: die Taschen. Также значит 'карман'.",
        pos: "noun",
        examples: [
          "Ich nehme meine Tasche mit. — Я беру сумку с собой.",
          "Die Tasche passt zum Outfit. — Сумка подходит к образу."
        ]
      },
      {
        word: "die Handtasche",
        translation: "дамская сумка",
        usage: "Существительное, женский род. Мн. число: die Handtaschen.",
        pos: "noun",
        examples: [
          "Ich nehme meine Handtasche mit. — Я беру свою сумку с собой.",
          "Die Handtasche passt zum Kleid. — Сумка подходит к платью."
        ]
      },
      {
        word: "der Rucksack",
        translation: "рюкзак",
        usage: "Существительное, мужской род. Мн. число: die Rucksäcke.",
        pos: "noun",
        examples: [
          "Ich trage einen Rucksack zur Schule. — Я ношу рюкзак в школу.",
          "Der Rucksack ist sehr praktisch. — Рюкзак очень практичный."
        ]
      },
      {
        word: "der Schmuck",
        translation: "украшения",
        usage: "Существительное, мужской род. Обычно без мн. числа (собирательное).",
        pos: "noun",
        examples: [
          "Sie trägt keinen Schmuck. — Она не носит украшений.",
          "Der Schmuck passt zum Kleid. — Украшения подходят к платью."
        ]
      },
      {
        word: "die Ohrringe",
        translation: "серьги",
        usage: "Существительное, мн. число. Ед. число: der Ohrring.",
        pos: "noun",
        examples: [
          "Sie trägt goldene Ohrringe. — Она носит золотые серьги.",
          "Die Ohrringe sind sehr schön. — Серьги очень красивые."
        ]
      },
      {
        word: "die Kette",
        translation: "цепочка",
        usage: "Существительное, женский род. Мн. число: die Ketten.",
        pos: "noun",
        examples: [
          "Sie trägt eine goldene Kette. — Она носит золотую цепочку.",
          "Die Kette passt zur Bluse. — Цепочка подходит к блузке."
        ]
      },
      {
        word: "das Armband",
        translation: "браслет",
        usage: "Существительное, средний род. Мн. число: die Armbänder.",
        pos: "noun",
        examples: [
          "Das Armband ist aus Silber. — Браслет из серебра.",
          "Ich trage immer ein Armband. — Я всегда ношу браслет."
        ]
      },
      {
        word: "der Gürtel",
        translation: "ремень",
        usage: "Существительное, мужской род. Мн. число: die Gürtel.",
        pos: "noun",
        examples: [
          "Der Gürtel passt zur Hose. — Ремень подходит к брюкам.",
          "Ich kaufe einen neuen Gürtel. — Я покупаю новый ремень."
        ]
      },
      {
        word: "aus Baumwolle",
        translation: "из хлопка",
        usage: "Предложная группа. Baumwolle (хлопок) — женский род.",
        pos: "other",
        examples: [
          "Das T-Shirt ist aus Baumwolle. — Футболка из хлопка.",
          "Ich kaufe lieber Kleidung aus Baumwolle. — Я предпочитаю покупать одежду из хлопка."
        ]
      },
      {
        word: "aus Leinen",
        translation: "из льна",
        usage: "Предложная группа. Leinen (лён) — средний род.",
        pos: "other",
        examples: [
          "Die Hose ist aus Leinen. — Брюки из льна.",
          "Ich trage im Sommer gern Leinen. — Летом я люблю носить лён."
        ]
      },
      {
        word: "aus Seide",
        translation: "из шёлка",
        usage: "Предложная группа. Seide (шёлк) — женский род.",
        pos: "other",
        examples: [
          "Das Kleid ist aus Seide. — Платье из шёлка.",
          "Seide fühlt sich angenehm an. — Шёлк приятен на ощупь."
        ]
      },
      {
        word: "aus Satin",
        translation: "из сатина",
        usage: "Предложная группа. Satin (сатин) — мужской род.",
        pos: "other",
        examples: [
          "Das Abendkleid ist aus Satin. — Вечернее платье из сатина.",
          "Satin glänzt schön. — Сатин красиво блестит."
        ]
      },
      {
        word: "aus Viskose",
        translation: "из вискозы",
        usage: "Предложная группа. Viskose (вискоза) — женский род.",
        pos: "other",
        examples: [
          "Die Bluse ist aus Viskose. — Блузка из вискозы.",
          "Viskose ist leicht und angenehm. — Вискоза лёгкая и приятная."
        ]
      },
      {
        word: "aus Polyester",
        translation: "из полиэстера",
        usage: "Предложная группа. Polyester (полиэстер) — мужской род.",
        pos: "other",
        examples: [
          "Diese Shorts sind aus Polyester. — Эти шорты из полиэстера.",
          "Polyester trocknet schnell. — Полиэстер быстро сохнет."
        ]
      },
      {
        word: "aus Denim",
        translation: "из денима",
        usage: "Предложная группа. Denim (деним) — мужской род.",
        pos: "other",
        examples: [
          "Die Jeansjacke ist aus Denim. — Джинсовая куртка из денима.",
          "Denim ist sehr haltbar. — Деним очень прочный."
        ]
      },
      {
        word: "aus Jeansstoff",
        translation: "из джинсовой ткани",
        usage: "Предложная группа. Jeansstoff (джинсовая ткань) — мужской род.",
        pos: "other",
        examples: [
          "Die Jacke ist aus Jeansstoff. — Куртка из джинсовой ткани.",
          "Jeansstoff ist robust und langlebig. — Джинсовая ткань прочная и долговечная."
        ]
      },
      {
        word: "weiß",
        translation: "белый",
        usage: "Прилагательное. В сильном склонении: weiße, weißer, weißes.",
        pos: "adj",
        examples: [
          "Ich trage ein weißes T-Shirt. — Я ношу белую футболку.",
          "Weiß ist eine klassische Farbe. — Белый — классический цвет."
        ]
      },
      {
        word: "grau",
        translation: "серый",
        usage: "Прилагательное. Сравнительная степень: grauer.",
        pos: "adj",
        examples: [
          "Die Hose ist grau. — Брюки серые.",
          "Ein grauer Blazer ist elegant. — Серый блейзер элегантный."
        ]
      },
      {
        word: "blau",
        translation: "синий",
        usage: "Прилагательное. Сравнительная степень: blauer.",
        pos: "adj",
        examples: [
          "Das Kleid ist blau. — Платье синее.",
          "Ich mag blaue Farben. — Мне нравятся синие цвета."
        ]
      },
      {
        word: "dunkelblau",
        translation: "тёмно-синий",
        usage: "Составное прилагательное: dunkel (тёмный) + blau (синий).",
        pos: "adj",
        examples: [
          "Der Blazer ist dunkelblau. — Блейзер тёмно-синий.",
          "Ein dunkelblaues Hemd sieht elegant aus. — Тёмно-синяя рубашка выглядит элегантно."
        ]
      },
      {
        word: "braun",
        translation: "коричневый",
        usage: "Прилагательное. Сравнительная степень: brauner.",
        pos: "adj",
        examples: [
          "Die Sandalen sind braun. — Сандалии коричневые.",
          "Ein brauner Gürtel passt zu Beige. — Коричневый ремень подходит к бежевому."
        ]
      },
      {
        word: "grün",
        translation: "зелёный",
        usage: "Прилагательное. Сравнительная степень: grüner.",
        pos: "adj",
        examples: [
          "Das Top ist grün. — Топ зелёный.",
          "Grüne Farben sind modern. — Зелёные цвета современные."
        ]
      },
      {
        word: "rot",
        translation: "красный",
        usage: "Прилагательное. Сравнительная степень: röter.",
        pos: "adj",
        examples: [
          "Das Kleid ist rot. — Платье красное.",
          "Ein rotes T-Shirt fällt auf. — Красная футболка бросается в глаза."
        ]
      },
      {
        word: "rosa",
        translation: "розовый",
        usage: "Прилагательное. Не изменяется при склонении.",
        pos: "adj",
        examples: [
          "Die Bluse ist rosa. — Блузка розовая.",
          "Ich mag rosa Farben im Sommer. — Мне нравятся розовые цвета летом."
        ]
      },
      {
        word: "gelb",
        translation: "жёлтый",
        usage: "Прилагательное. Сравнительная степень: gelber.",
        pos: "adj",
        examples: [
          "Das Sommerkleid ist gelb. — Летнее платье жёлтое.",
          "Gelb ist eine fröhliche Farbe. — Жёлтый — радостный цвет."
        ]
      },
      {
        word: "orange",
        translation: "оранжевый",
        usage: "Прилагательное. Не изменяется при склонении.",
        pos: "adj",
        examples: [
          "Das Top ist orange. — Топ оранжевый.",
          "Ein oranges Kleid ist sehr auffällig. — Оранжевое платье очень заметное."
        ]
      },
      {
        word: "lila",
        translation: "фиолетовый",
        usage: "Прилагательное. Не изменяется при склонении.",
        pos: "adj",
        examples: [
          "Die Shorts sind lila. — Шорты фиолетовые.",
          "Lila ist eine elegante Farbe. — Фиолетовый — элегантный цвет."
        ]
      },
      {
        word: "hell",
        translation: "светлый",
        usage: "Прилагательное. Антоним: dunkel (тёмный).",
        pos: "adj",
        examples: [
          "Ich mag helle Farben im Sommer. — Летом мне нравятся светлые цвета.",
          "Ein helles Kleid ist perfekt für den Sommer. — Светлое платье идеально для лета."
        ]
      },
      {
        word: "dunkel",
        translation: "тёмный",
        usage: "Прилагательное. Антоним: hell (светлый).",
        pos: "adj",
        examples: [
          "Dunkle Kleidung ist im Sommer oft zu warm. — Тёмная одежда летом часто слишком тёплая.",
          "Ich trage selten dunkle Farben. — Я редко ношу тёмные цвета."
        ]
      },
      {
        word: "schwarz",
        translation: "чёрный",
        usage: "Прилагательное. Склоняется по стандартным правилам.",
        pos: "adj",
        examples: [
          "Ich trage oft schwarze Kleidung. — Я часто ношу чёрную одежду.",
          "Das schwarze Kleid sieht elegant aus. — Чёрное платье выглядит элегантно."
        ]
      },
      {
        word: "beige",
        translation: "бежевый",
        usage: "Прилагательное. Не изменяется при склонении.",
        pos: "adj",
        examples: [
          "Die Shorts sind beige. — Шорты бежевые.",
          "Ich mag beige Farben im Sommer. — Мне нравятся бежевые цвета летом."
        ]
      },
      {
        word: "hellblau",
        translation: "светло-синий",
        usage: "Составное прилагательное: hell (светлый) + blau (синий).",
        pos: "adj",
        examples: [
          "Das Kleid ist hellblau. — Платье светло-синее.",
          "Ich kaufe ein hellblaues T-Shirt. — Я покупаю светло-синюю футболку."
        ]
      },
      {
        word: "bunt",
        translation: "разноцветный",
        usage: "Прилагательное. Означает яркий, пёстрый, многоцветный.",
        pos: "adj",
        examples: [
          "Das Muster ist sehr bunt. — Узор очень яркий.",
          "Im Sommer trage ich gern bunte Sachen. — Летом я люблю носить яркие вещи."
        ]
      },
      {
        word: "gepunktet",
        translation: "в горошек",
        usage: "Прилагательное. От Punkt (точка).",
        pos: "adj",
        examples: [
          "Das Kleid ist gepunktet. — Платье в горошек.",
          "Ein gepunktetes Top sieht süß aus. — Топ в горошек выглядит мило."
        ]
      },
      {
        word: "mit Blumen",
        translation: "с цветами",
        usage: "Предложная группа. Mit (с) + Blumen (цветы, мн. число).",
        pos: "other",
        examples: [
          "Das Kleid ist mit Blumen. — Платье с цветами.",
          "Ich mag Kleider mit Blumen. — Мне нравятся платья с цветами."
        ]
      },
      {
        word: "mit Print",
        translation: "с принтом",
        usage: "Предложная группа. Print (принт) — мужской род.",
        pos: "other",
        examples: [
          "Das T-Shirt ist mit Print. — Футболка с принтом.",
          "Ein T-Shirt mit Print ist auffällig. — Футболка с принтом заметная."
        ]
      },
      {
        word: "gemustert",
        translation: "с узором",
        usage: "Прилагательное. От Muster (узор, образец).",
        pos: "adj",
        examples: [
          "Das gemusterte Kleid ist schön. — Платье с узором красивое.",
          "Ich kaufe selten gemusterte Sachen. — Я редко покупаю вещи с узором."
        ]
      },
      {
        word: "gestreift",
        translation: "в полоску",
        usage: "Прилагательное. От Streifen (полоса).",
        pos: "adj",
        examples: [
          "Ich trage ein gestreiftes T-Shirt. — Я ношу футболку в полоску.",
          "Das gestreifte Kleid gefällt mir. — Мне нравится платье в полоску."
        ]
      },
      {
        word: "kariert",
        translation: "в клетку",
        usage: "Прилагательное. От Karo (клетка).",
        pos: "adj",
        examples: [
          "Die Hose ist kariert. — Брюки в клетку.",
          "Er trägt ein kariertes Hemd. — Он носит рубашку в клетку."
        ]
      },
      {
        word: "einfarbig",
        translation: "однотонный",
        usage: "Прилагательное. Einfarbig — буквально 'одного цвета'.",
        pos: "adj",
        examples: [
          "Ich kaufe lieber einfarbige Sachen. — Я предпочитаю покупать однотонные вещи.",
          "Ein einfarbiges T-Shirt lässt sich gut kombinieren. — Однотонная футболка хорошо сочетается."
        ]
      },
      {
        word: "leicht",
        translation: "лёгкий",
        usage: "Прилагательное. Также значит 'простой, несложный'.",
        pos: "adj",
        examples: [
          "Diese Bluse ist sehr leicht. — Эта блузка очень лёгкая.",
          "Im Sommer trage ich gern leichte Kleidung. — Летом я люблю носить лёгкую одежду."
        ]
      },
      {
        word: "weit",
        translation: "широкий (о посадке)",
        usage: "Прилагательное. Также значит 'далёкий'. Антоним: eng.",
        pos: "adj",
        examples: [
          "Die Hose ist zu weit. — Брюки слишком широкие.",
          "Ein weites Kleid ist bequem. — Широкое платье удобное."
        ]
      },
      {
        word: "elegant",
        translation: "элегантный",
        usage: "Прилагательное. Используется для одежды и поведения.",
        pos: "adj",
        examples: [
          "Das Kleid sieht elegant aus. — Платье выглядит элегантно.",
          "Ein Blazer macht das Outfit eleganter. — Блейзер делает образ элегантнее."
        ]
      },
      {
        word: "modern",
        translation: "современный",
        usage: "Прилагательное. Означает актуальный, в тренде.",
        pos: "adj",
        examples: [
          "Dieses Kleid ist sehr modern. — Это платье очень современное.",
          "Ich mag modernen Stil. — Мне нравится современный стиль."
        ]
      },
      {
        word: "praktisch",
        translation: "практичный",
        usage: "Прилагательное. Означает удобный для использования.",
        pos: "adj",
        examples: [
          "Sneaker sind im Alltag sehr praktisch. — Кроссовки очень практичны в повседневной жизни.",
          "Die Tasche ist praktisch. — Сумка практичная."
        ]
      },
      {
        word: "weich",
        translation: "мягкий",
        usage: "Прилагательное. Антоним: hart (жёсткий).",
        pos: "adj",
        examples: [
          "Der Stoff ist weich. — Ткань мягкая.",
          "Baumwolle ist sehr weich. — Хлопок очень мягкий."
        ]
      },
      {
        word: "angenehm",
        translation: "приятный",
        usage: "Прилагательное. Используется для ощущений и ситуаций.",
        pos: "adj",
        examples: [
          "Der Stoff ist angenehm. — Ткань приятная.",
          "Baumwolle ist angenehm auf der Haut. — Хлопок приятен на коже."
        ]
      },
      {
        word: "unbequem",
        translation: "неудобный",
        usage: "Прилагательное. Антоним: bequem.",
        pos: "adj",
        examples: [
          "Diese Schuhe sind unbequem. — Эта обувь неудобная.",
          "Zu enge Kleidung ist unbequem. — Слишком тесная одежда неудобная."
        ]
      },
      {
        word: "zu eng",
        translation: "слишком тесный",
        usage: "Zu (слишком) + eng (тесный). Zu используется перед прилагательным.",
        pos: "adj",
        examples: [
          "Die Hose ist zu eng. — Брюки слишком тесные.",
          "Das Kleid ist mir zu eng. — Платье мне слишком тесное."
        ]
      },
      {
        word: "zu weit",
        translation: "слишком широкий",
        usage: "Zu (слишком) + weit (широкий).",
        pos: "adj",
        examples: [
          "Die Hose ist zu weit. — Брюки слишком широкие.",
          "Diese Jacke ist mir zu weit. — Эта куртка мне слишком широкая."
        ]
      },
      {
        word: "zu warm",
        translation: "слишком тёплый",
        usage: "Zu (слишком) + warm (тёплый). Часто о летней одежде.",
        pos: "adj",
        examples: [
          "Der Pullover ist im Sommer zu warm. — Свитер летом слишком тёплый.",
          "Dunkle Kleidung ist oft zu warm. — Тёмная одежда часто слишком тёплая."
        ]
      },
      {
        word: "dünn",
        translation: "тонкий",
        usage: "Прилагательное. Антоним: dick (толстый/плотный).",
        pos: "adj",
        examples: [
          "Der Stoff ist sehr dünn. — Ткань очень тонкая.",
          "Ein dünnes T-Shirt ist perfekt für heiße Tage. — Тонкая футболка идеальна для жарких дней."
        ]
      },
      {
        word: "dick",
        translation: "толстый, плотный",
        usage: "Прилагательное. О ткани значит 'плотный'. Антоним: dünn.",
        pos: "adj",
        examples: [
          "Der Stoff ist zu dick für den Sommer. — Ткань слишком плотная для лета.",
          "Zu dicke Sachen mag ich im Sommer nicht. — Слишком плотные вещи мне летом не нравятся."
        ]
      },
      {
        word: "bequem",
        translation: "удобный",
        usage: "Прилагательное. Сравнительная степень: bequemer.",
        pos: "adj",
        examples: [
          "Das Kleid ist bequem. — Платье удобное.",
          "Ich suche bequeme Schuhe. — Я ищу удобную обувь."
        ]
      },
      {
        word: "luftig",
        translation: "воздушный, лёгкий",
        usage: "Прилагательное. Используется для одежды и погоды.",
        pos: "adj",
        examples: [
          "Im Sommer trage ich gern leichte Kleidung, weil sie luftig ist. — Летом я люблю лёгкую одежду, потому что она воздушная.",
          "Ein luftiges Kleid ist perfekt für heiße Tage. — Воздушное платье идеально для жарких дней."
        ]
      },
      {
        word: "eng",
        translation: "узкий, тесный",
        usage: "Прилагательное. Антоним: weit (широкий).",
        pos: "adj",
        examples: [
          "Die Hose ist zu eng. — Брюки слишком тесные.",
          "Das Kleid sitzt eng am Körper. — Платье плотно облегает тело."
        ]
      },
      {
        word: "locker",
        translation: "свободный (о посадке)",
        usage: "Прилагательное. Также значит 'расслабленный, непринуждённый'.",
        pos: "adj",
        examples: [
          "Ich trage gern lockere Hosen im Sommer. — Летом я люблю носить свободные брюки.",
          "Das Hemd sitzt locker. — Рубашка сидит свободно."
        ]
      },
      {
        word: "schlicht",
        translation: "простой, без лишнего",
        usage: "Прилагательное. Означает минималистичный, без украшений.",
        pos: "adj",
        examples: [
          "Mein Stil ist eher schlicht. — Мой стиль довольно простой.",
          "Ich mag schlichte Kleidung. — Мне нравится простая одежда."
        ]
      },
      {
        word: "tragen",
        translation: "носить (одежду)",
        usage: "Глагол. Formen: tragen — trug — hat getragen. Er/sie trägt.",
        pos: "verb",
        examples: [
          "Ich trage im Sommer gern Leinen. — Летом я люблю носить лён.",
          "Was trägst du heute? — Что ты сегодня носишь?"
        ]
      },
      {
        word: "anziehen",
        translation: "надевать",
        usage: "Глагол с отделяемой приставкой. anziehen — zog an — hat angezogen.",
        pos: "verb",
        examples: [
          "Ich ziehe heute ein Kleid an. — Я сегодня надеваю платье.",
          "Zieh etwas Warmes an! — Надень что-нибудь тёплое!"
        ]
      },
      {
        word: "passen",
        translation: "подходить, соответствовать",
        usage: "Правильный глагол. passen — passte — hat gepasst. Используется: passen zu (сочетаться с) и passen (по размеру).",
        pos: "verb",
        examples: [
          "Diese Farben passen gut zusammen. — Эти цвета хорошо сочетаются.",
          "Die Hose passt mir nicht. — Брюки мне не подходят (не по размеру)."
        ]
      },
      {
        word: "anprobieren",
        translation: "примерять",
        usage: "Глагол с отделяемой приставкой. anprobieren — probierte an — hat anprobiert.",
        pos: "verb",
        examples: [
          "Ich probiere das Kleid an. — Я примеряю платье.",
          "Kann ich das anprobieren? — Можно мне это примерить?"
        ]
      },
      {
        word: "ausziehen",
        translation: "снимать (одежду)",
        usage: "Глагол с отделяемой приставкой. ausziehen — zog aus — hat ausgezogen.",
        pos: "verb",
        examples: [
          "Ich ziehe die Jacke aus. — Я снимаю куртку.",
          "Zieht bitte die Schuhe aus! — Пожалуйста, снимите обувь!"
        ]
      },
      {
        word: "wechseln",
        translation: "менять",
        usage: "Правильный глагол. wechseln — wechselte — hat gewechselt.",
        pos: "verb",
        examples: [
          "Am Abend muss ich mein Outfit wechseln. — Вечером мне нужно сменить образ.",
          "Ich wechsle oft die Kleidung. — Я часто меняю одежду."
        ]
      },
      {
        word: "gefallen",
        translation: "нравиться",
        usage: "Глагол. gefallen — gefiel — hat gefallen. Используется с дативом: Das gefällt mir.",
        pos: "verb",
        examples: [
          "Das Kleid gefällt mir. — Мне нравится платье.",
          "Wie gefällt dir das? — Как тебе это нравится?"
        ]
      },
      {
        word: "auswählen",
        translation: "выбирать",
        usage: "Глагол с отделяемой приставкой. auswählen — wählte aus — hat ausgewählt.",
        pos: "verb",
        examples: [
          "Beim Einkaufen muss man sorgfältig auswählen. — При шоппинге нужно тщательно выбирать.",
          "Ich wähle heute ein Kleid aus. — Сегодня я выбираю платье."
        ]
      },
      {
        word: "zu etwas greifen",
        translation: "тянуться к чему-то, выбирать",
        usage: "Устойчивое выражение. greifen — griff — hat gegriffen.",
        pos: "verb",
        examples: [
          "Wenn ich unsicher bin, greife ich zu Basics. — Когда я не уверена, выбираю базовые вещи.",
          "Ich greife zu Sneakern, weil sie bequemer sind. — Я выбираю кроссовки, потому что они удобнее."
        ]
      },
      {
        word: "zusammenpassen",
        translation: "сочетаться",
        usage: "Глагол с отделяемой приставкой. zusammenpassen — passte zusammen — hat zusammengepasst.",
        pos: "verb",
        examples: [
          "Diese Farben passen gut zusammen. — Эти цвета хорошо сочетаются.",
          "Passen diese Schuhe zum Kleid zusammen? — Эти туфли сочетаются с платьем?"
        ]
      },
      {
        word: "gut sitzen",
        translation: "хорошо сидеть (о посадке одежды)",
        usage: "Устойчивое выражение. sitzen — saß — hat gesessen.",
        pos: "verb",
        examples: [
          "Das Kleid sitzt gut. — Платье хорошо сидит.",
          "Wenn die Hose nicht gut sitzt, kaufe ich sie nicht. — Если брюки не хорошо сидят, я их не покупаю."
        ]
      },
      {
        word: "bügeln",
        translation: "гладить (одежду)",
        usage: "Правильный глагол. bügeln — bügelte — hat gebügelt.",
        pos: "verb",
        examples: [
          "Ich bügle mein Hemd. — Я глажу рубашку.",
          "Leinen muss man oft bügeln. — Лён нужно часто гладить."
        ]
      },
      {
        word: "gut stehen",
        translation: "идти, хорошо смотреться",
        usage: "Устойчивое выражение. Используется с дативом: Das steht dir gut.",
        pos: "verb",
        examples: [
          "Das steht dir gut! — Тебе это идёт!",
          "Diese Farbe steht ihr sehr gut. — Этот цвет ей очень идёт."
        ]
      },
      {
        word: "sich wohlfühlen",
        translation: "чувствовать себя комфортно",
        usage: "Возвратный глагол. sich wohlfühlen — fühlte sich wohl — hat sich wohlgefühlt.",
        pos: "verb",
        examples: [
          "Ich möchte mich in meiner Kleidung wohlfühlen. — Я хочу чувствовать себя комфортно в своей одежде.",
          "In diesem Kleid fühle ich mich wohl. — В этом платье я чувствую себя комфортно."
        ]
      },
      {
        word: "kombinieren",
        translation: "сочетать, комбинировать",
        usage: "Правильный глагол. kombinieren — kombinierte — hat kombiniert.",
        pos: "verb",
        examples: [
          "Ich mag es, Farben einfach zu kombinieren. — Мне нравится просто сочетать цвета.",
          "Einfarbige Sachen lassen sich gut kombinieren. — Однотонные вещи хорошо комбинируются."
        ]
      },
      {
        word: "knittern",
        translation: "мяться",
        usage: "Правильный глагол. knittern — knitterte — hat geknittert.",
        pos: "verb",
        examples: [
          "Leinen knittert schnell. — Лён быстро мнётся.",
          "Dieses Material knittert nicht. — Этот материал не мнётся."
        ]
      },
      {
        word: "schwitzen",
        translation: "потеть",
        usage: "Правильный глагол. schwitzen — schwitzte — hat geschwitzt.",
        pos: "verb",
        examples: [
          "In dicker Kleidung schwitzt man im Sommer schnell. — В тёплой одежде летом быстро потеешь.",
          "Baumwolle ist gut, weil man nicht so schnell schwitzt. — Хлопок хорош, потому что в нём не так быстро потеешь."
        ]
      },
      {
        word: "sich entscheiden",
        translation: "принять решение, выбрать",
        usage: "Возвратный глагол. sich entscheiden — entschied sich — hat sich entschieden.",
        pos: "verb",
        examples: [
          "Ich kann mich nicht entscheiden, was ich anziehen soll. — Я не могу решить, что надеть.",
          "Ich entscheide mich für das blaue Kleid. — Я выбираю синее платье."
        ]
      },
      {
        word: "holen",
        translation: "забирать, сходить и принести",
        usage: "Правильный глагол. holen — holte — hat geholt. Используется когда нужно пойти куда-то и вернуть что-то/кого-то обратно.",
        pos: "verb",
        examples: [
          "Ich hole dich ab. — Я тебя заберу. (abholen — отделяемая приставка)",
          "Er holt Wasser aus der Küche. — Он идёт за водой на кухню."
        ]
      },
      {
        word: "bringen",
        translation: "приносить, доставлять",
        usage: "Глагол. bringen — brachte — hat gebracht. Используется когда несёшь что-то от себя к кому-то.",
        pos: "verb",
        examples: [
          "Ich bringe dir Kaffee. — Я принесу тебе кофе.",
          "Er bringt das Paket zur Post. — Он несёт посылку на почту."
        ]
      },
      {
        word: "vorschlagen",
        translation: "предлагать (идею, вариант)",
        usage: "Глагол с отделяемой приставкой vor-. vorschlagen — schlug vor — hat vorgeschlagen. Er/sie schlägt vor.",
        pos: "verb",
        examples: [
          "Ich schlage vor, ins Kino zu gehen. — Я предлагаю пойти в кино.",
          "Was schlägst du vor? — Что ты предлагаешь?"
        ]
      },
      {
        word: "anbieten",
        translation: "предлагать (услугу, помощь, товар)",
        usage: "Глагол с отделяемой приставкой an-. anbieten — bot an — hat angeboten. Используется когда даёшь что-то конкретное.",
        pos: "verb",
        examples: [
          "Ich biete dir Hilfe an. — Я предлагаю тебе помощь.",
          "Das Geschäft bietet gute Preise an. — Магазин предлагает хорошие цены."
        ]
      },
      {
        word: "der Vorschlag",
        translation: "предложение, идея",
        usage: "Существительное, мужской род. Мн. число: die Vorschläge.",
        pos: "noun",
        examples: [
          "Das ist ein guter Vorschlag. — Это хорошее предложение (идея).",
          "Hast du einen Vorschlag? — У тебя есть предложение?"
        ]
      },
      {
        word: "das Angebot",
        translation: "предложение (товар/услуга), акция",
        usage: "Существительное, средний род. Мн. число: die Angebote.",
        pos: "noun",
        examples: [
          "Dieses Angebot ist günstig. — Это выгодное предложение.",
          "Im Supermarkt gibt es viele Angebote. — В супермаркете много акций."
        ]
      },
      {
        word: "die Ware",
        translation: "товар",
        usage: "Существительное, женский род. Мн. число: die Waren.",
        pos: "noun",
        examples: [
          "Die Ware ist neu. — Товар новый.",
          "Die Waren werden geliefert. — Товары доставляются."
        ]
      },
      {
        word: "anmachen",
        translation: "включать; (разг.) флиртовать",
        usage: "Глагол с отделяемой приставкой an-. anmachen — machte an — hat angemacht.",
        pos: "verb",
        examples: [
          "Mach das Licht an. — Включи свет.",
          "Ich mache die Musik an. — Я включаю музыку."
        ]
      },
      {
        word: "ausmachen",
        translation: "выключать; договариваться",
        usage: "Глагол с отделяемой приставкой aus-. ausmachen — machte aus — hat ausgemacht.",
        pos: "verb",
        examples: [
          "Mach das Licht aus. — Выключи свет.",
          "Wir machen einen Termin aus. — Мы договариваемся о встрече."
        ]
      },
      {
        word: "gießen",
        translation: "лить, поливать",
        usage: "Глагол. gießen — goss — hat gegossen. Используется для жидкостей или растений.",
        pos: "verb",
        examples: [
          "Ich gieße die Blumen. — Я поливаю цветы.",
          "Er gießt Wasser ins Glas. — Он наливает воду в стакан."
        ]
      },
      {
        word: "leihen",
        translation: "одалживать / брать взаймы",
        usage: "Глагол. leihen — lieh — hat geliehen. jemandem leihen — дать в долг; sich leihen — взять в долг.",
        pos: "verb",
        examples: [
          "Ich leihe dir Geld. — Я одалживаю тебе деньги.",
          "Ich leihe mir ein Buch. — Я беру книгу на время."
        ]
      },
      {
        word: "der Apfel",
        translation: "яблоко",
        usage: "Существительное, мужской род. Множественное число: die Äpfel.",
        pos: "noun",
        examples: [
          "Ich esse einen Apfel. — Я ем яблоко.",
          "Der Apfel ist rot. — Яблоко красное."
        ]
      },
      {
        word: "das Haus",
        translation: "дом",
        usage: "Существительное, средний род. Множественное число: die Häuser.",
        pos: "noun",
        examples: [
          "Mein Haus ist groß. — Мой дом большой.",
          "Wir gehen nach Hause. — Мы идём домой."
        ]
      },
      {
        word: "die Katze",
        translation: "кошка",
        usage: "Существительное, женский род. Множественное число: die Katzen.",
        pos: "noun",
        examples: [
          "Die Katze schläft. — Кошка спит.",
          "Ich habe eine Katze. — У меня есть кошка."
        ]
      },
      {
        word: "trinken",
        translation: "пить",
        usage: "Глагол. trinken — trank — hat getrunken.",
        pos: "verb",
        examples: [
          "Ich trinke Wasser. — Я пью воду.",
          "Trinkst du Kaffee? — Ты пьёшь кофе?"
        ]
      },
      {
        word: "essen",
        translation: "есть, кушать",
        usage: "Глагол. essen — aß — hat gegessen. Er/sie isst.",
        pos: "verb",
        examples: [
          "Wir essen Brot. — Мы едим хлеб.",
          "Was isst du? — Что ты ешь?"
        ]
      },
      {
        word: "lernen",
        translation: "учить, изучать",
        usage: "Правильный глагол. lernen — lernte — hat gelernt.",
        pos: "verb",
        examples: [
          "Ich lerne Deutsch. — Я учу немецкий.",
          "Sie lernt in der Schule. — Она учится в школе."
        ]
      },
      {
        word: "gehen",
        translation: "идти",
        usage: "Глагол. gehen — ging — ist gegangen. Движение → Perfekt с sein.",
        pos: "verb",
        examples: [
          "Ich gehe ins Kino. — Я иду в кино.",
          "Wie geht es dir? — Как у тебя дела?"
        ]
      },
      {
        word: "das Buch",
        translation: "книга",
        usage: "Существительное, средний род. Множественное число: die Bücher.",
        pos: "noun",
        examples: [
          "Das Buch ist interessant. — Книга интересная.",
          "Ich lese ein Buch. — Я читаю книгу."
        ]
      },
      {
        word: "die Schule",
        translation: "школа",
        usage: "Существительное, женский род. Множественное число: die Schulen.",
        pos: "noun",
        examples: [
          "Die Schule beginnt um acht. — Школа начинается в восемь.",
          "Ich gehe in die Schule. — Я иду в школу."
        ]
      },
      {
        word: "der Freund",
        translation: "друг",
        usage: "Существительное, мужской род. Множественное число: die Freunde.",
        pos: "noun",
        examples: [
          "Er ist mein Freund. — Он мой друг.",
          "Ich treffe meinen Freund. — Я встречаю своего друга."
        ]
      },
      {
        word: "sprechen",
        translation: "говорить",
        usage: "Глагол. sprechen — sprach — hat gesprochen. Er/sie spricht.",
        pos: "verb",
        examples: [
          "Ich spreche Deutsch. — Я говорю по-немецки.",
          "Sprichst du Englisch? — Ты говоришь по-английски?"
        ]
      },
      {
        word: "schön",
        translation: "красивый, прекрасный",
        usage: "Прилагательное. Также используется как 'хорошо, прекрасно'.",
        pos: "adj",
        examples: [
          "Das Wetter ist schön. — Погода прекрасная.",
          "Eine schöne Blume. — Красивый цветок."
        ]
      },
      {
        word: "groß",
        translation: "большой",
        usage: "Прилагательное. Сравнительная степень: größer.",
        pos: "adj",
        examples: [
          "Der Baum ist groß. — Дерево большое.",
          "Ein großes Problem. — Большая проблема."
        ]
      },
      {
        word: "klein",
        translation: "маленький",
        usage: "Прилагательное. Сравнительная степень: kleiner.",
        pos: "adj",
        examples: [
          "Das Kind ist klein. — Ребёнок маленький.",
          "Eine kleine Stadt. — Маленький город."
        ]
      },
      {
        word: "die Familie",
        translation: "семья",
        usage: "Существительное, женский род. Множественное число: die Familien.",
        pos: "noun",
        examples: [
          "Meine Familie ist groß. — Моя семья большая.",
          "Ich liebe meine Familie. — Я люблю свою семью."
        ]
      },
      {
        word: "arbeiten",
        translation: "работать",
        usage: "Правильный глагол. arbeiten — arbeitete — hat gearbeitet.",
        pos: "verb",
        examples: [
          "Ich arbeite in Berlin. — Я работаю в Берлине.",
          "Er arbeitet viel. — Он много работает."
        ]
      },
      {
        word: "das Wasser",
        translation: "вода",
        usage: "Существительное, средний род. Несчисляемое, мн. число не используется.",
        pos: "noun",
        examples: [
          "Ich trinke Wasser. — Я пью воду.",
          "Das Wasser ist kalt. — Вода холодная."
        ]
      },
      {
        word: "der Tag",
        translation: "день",
        usage: "Существительное, мужской род. Множественное число: die Tage.",
        pos: "noun",
        examples: [
          "Guten Tag! — Добрый день!",
          "Der Tag war lang. — День был долгим."
        ]
      },
      {
        word: "die Nacht",
        translation: "ночь",
        usage: "Существительное, женский род. Множественное число: die Nächte.",
        pos: "noun",
        examples: [
          "Gute Nacht! — Спокойной ночи!",
          "Die Nacht ist dunkel. — Ночь тёмная."
        ]
      },
      {
        word: "kaufen",
        translation: "покупать",
        usage: "Правильный глагол. kaufen — kaufte — hat gekauft.",
        pos: "verb",
        examples: [
          "Ich kaufe Brot. — Я покупаю хлеб.",
          "Wo kaufst du ein? — Где ты делаешь покупки?"
        ]
      },
      {
        word: "wohnen",
        translation: "жить, проживать",
        usage: "Правильный глагол. wohnen — wohnte — hat gewohnt.",
        pos: "verb",
        examples: [
          "Ich wohne in München. — Я живу в Мюнхене.",
          "Wo wohnst du? — Где ты живёшь?"
        ]
      },
      {
        word: "heißen",
        translation: "зваться, называться",
        usage: "Глагол. heißen — hieß — hat geheißen.",
        pos: "verb",
        examples: [
          "Ich heiße Anna. — Меня зовут Анна.",
          "Wie heißt du? — Как тебя зовут?"
        ]
      },
      {
        word: "die Stadt",
        translation: "город",
        usage: "Существительное, женский род. Множественное число: die Städte.",
        pos: "noun",
        examples: [
          "Berlin ist eine große Stadt. — Берлин — большой город.",
          "Ich fahre in die Stadt. — Я еду в город."
        ]
      },
      {
        word: "das Auto",
        translation: "машина, автомобиль",
        usage: "Существительное, средний род. Множественное число: die Autos.",
        pos: "noun",
        examples: [
          "Das Auto ist neu. — Машина новая.",
          "Ich fahre mit dem Auto. — Я еду на машине."
        ]
      },
      {
        word: "sehen",
        translation: "видеть",
        usage: "Глагол. sehen — sah — hat gesehen. Er/sie sieht.",
        pos: "verb",
        examples: [
          "Ich sehe dich. — Я вижу тебя.",
          "Siehst du das Bild? — Ты видишь картину?"
        ]
      },
      {
        word: "hören",
        translation: "слышать, слушать",
        usage: "Правильный глагол. hören — hörte — hat gehört.",
        pos: "verb",
        examples: [
          "Ich höre Musik. — Я слушаю музыку.",
          "Hörst du mich? — Ты меня слышишь?"
        ]
      },
      {
        word: "schlafen",
        translation: "спать",
        usage: "Глагол. schlafen — schlief — hat geschlafen. Er/sie schläft.",
        pos: "verb",
        examples: [
          "Ich schlafe gut. — Я хорошо сплю.",
          "Das Kind schläft. — Ребёнок спит."
        ]
      },
      {
        word: "die Arbeit",
        translation: "работа",
        usage: "Существительное, женский род. Множественное число: die Arbeiten.",
        pos: "noun",
        examples: [
          "Die Arbeit ist schwer. — Работа тяжёлая.",
          "Ich gehe zur Arbeit. — Я иду на работу."
        ]
      },
      {
        word: "das Essen",
        translation: "еда",
        usage: "Существительное, средний род. Мн. число: die Essen (редко). Также инфинитив глагола 'есть'.",
        pos: "noun",
        examples: [
          "Das Essen ist lecker. — Еда вкусная.",
          "Ich koche das Essen. — Я готовлю еду."
        ]
      },
      {
        word: "die Zeit",
        translation: "время",
        usage: "Существительное, женский род. Множественное число: die Zeiten.",
        pos: "noun",
        examples: [
          "Ich habe keine Zeit. — У меня нет времени.",
          "Die Zeit vergeht schnell. — Время проходит быстро."
        ]
      }
    ]
  },
  {
    id: "goethe_a2",
    name: "GOETHE A2",
    words: [
      {
        word: "ab",
        translation: "с, начиная с",
        usage: "Служебное слово / наречие.",
        pos: "other",
        examples: [
          "Ab morgen muss ich wieder arbeiten. — С завтрашнего дня мне снова надо работать."
        ]
      },
      {
        word: "aber",
        translation: "но, однако",
        usage: "Служебное слово / наречие.",
        pos: "other",
        examples: [
          "Heute kann ich nicht kommen, aber morgen habe ich Zeit. — Сегодня я не могу прийти, но завтра у меня будет время."
        ]
      },
      {
        word: "abgeben, gibt ab, hat abgegeben",
        translation: "сдавать, отдавать",
        usage: "Глагол. Формы: abgeben — gibt ab — hat abgegeben.",
        pos: "verb",
        examples: [
          "Ich muss meinen Schlüssel an der Rezeption abgeben. — Мне нужно сдать ключ на ресепшене."
        ]
      },
      {
        word: "abholen, holt ab, hat abgeholt",
        translation: "забирать, встречать",
        usage: "Глагол. Формы: abholen — holt ab — hat abgeholt.",
        pos: "verb",
        examples: [
          "Wann kann ich die Sachen bei dir abholen? — Когда я могу забрать вещи у тебя?"
        ]
      },
      {
        word: "abschließen, schließt ab, hat abgeschlossen",
        translation: "запирать; завершать",
        usage: "Глагол. Формы: abschließen — schließt ab — hat abgeschlossen.",
        pos: "verb",
        examples: [
          "Hast du die Tür abgeschlossen? — Ты запер дверь?"
        ]
      },
      {
        word: "Achtung (Sg.)",
        translation: "внимание",
        usage: "Существительное. Несчисляемое, мн. число не используется.",
        pos: "noun",
        examples: [
          "Achtung an Gleis drei: Die Türen schließen. — Внимание на третьем пути: двери закрываются."
        ]
      },
      {
        word: "die Adresse, -n",
        translation: "адрес",
        usage: "Существительное, женский род. Мн. число: die Adressen.",
        pos: "noun",
        examples: [
          "Können Sie mir Ihre Adresse geben? — Вы можете дать мне ваш адрес?"
        ]
      },
      {
        word: "die Ahnung, -en",
        translation: "понятие, представление",
        usage: "Существительное, женский род. Мн. число: die Ahnungen.",
        pos: "noun",
        examples: [
          "Ich hatte keine Ahnung, dass du heute Geburtstag hast. — Я и не подозревал, что у тебя сегодня день рождения."
        ]
      },
      {
        word: "aktiv",
        translation: "активный",
        usage: "Прилагательное. Склоняется по общим правилам.",
        pos: "adj",
        examples: [
          "Peter ist sehr aktiv und macht viel Sport. — Петер очень активный и много занимается спортом."
        ]
      },
      {
        word: "aktuell",
        translation: "актуальный",
        usage: "Прилагательное. Склоняется по общим правилам.",
        pos: "adj",
        examples: [
          "Das ist das aktuelle Kinoprogramm. — Это актуальная программа кинотеатра."
        ]
      },
      {
        word: "all-",
        translation: "весь, все",
        usage: "Служебное слово / наречие.",
        pos: "other",
        examples: [
          "Ich wünsche dir alles Gute! — Желаю тебе всего хорошего!"
        ]
      },
      {
        word: "allein",
        translation: "один, в одиночку",
        usage: "Служебное слово / наречие.",
        pos: "other",
        examples: [
          "Kommt seine Freundin mit? – Nein, er kommt allein. — Его девушка пойдёт с ним? — Нет, он идёт один."
        ]
      },
      {
        word: "als",
        translation: "когда; как, в качестве; чем (при сравнении)",
        usage: "Служебное слово / наречие.",
        pos: "other",
        examples: [
          "Hector ist jünger als seine Schwester. — Гектор младше своей сестры."
        ]
      },
      {
        word: "also",
        translation: "итак, значит",
        usage: "Служебное слово / наречие.",
        pos: "other",
        examples: [
          "Also, die Sache ist so: … — Итак, дело в следующем: …"
        ]
      },
      {
        word: "alt",
        translation: "старый",
        usage: "Прилагательное. Склоняется по общим правилам.",
        pos: "adj",
        examples: [
          "Wie alt sind Sie? — Сколько вам лет?"
        ]
      },
      {
        word: "das Alter (Sg.)",
        translation: "возраст",
        usage: "Существительное, средний род. Несчисляемое, мн. число не используется.",
        pos: "noun",
        examples: [
          "Alter: 18 Jahre. — Возраст: 18 лет."
        ]
      },
      {
        word: "die Ampel, -n",
        translation: "светофор",
        usage: "Существительное, женский род. Мн. число: die Ampeln.",
        pos: "noun",
        examples: [
          "Du kannst fahren, die Ampel ist grün. — Можешь ехать, светофор зелёный."
        ]
      },
      {
        word: "an",
        translation: "на, у, к",
        usage: "Служебное слово / наречие.",
        pos: "other",
        examples: [
          "Fahren Sie an der nächsten Kreuzung nach rechts. — На следующем перекрёстке поверните направо."
        ]
      },
      {
        word: "anbieten, bietet an, hat angeboten",
        translation: "предлагать",
        usage: "Глагол. Формы: anbieten — bietet an — hat angeboten.",
        pos: "verb",
        examples: [
          "Darf ich Ihnen ein Stück Kuchen anbieten? — Могу я предложить вам кусок пирога?"
        ]
      },
      {
        word: "das Angebot, -e",
        translation: "предложение, акция",
        usage: "Существительное, средний род. Мн. число: die Angebote.",
        pos: "noun",
        examples: [
          "Heute sind Bananen im Angebot. — Сегодня бананы по акции."
        ]
      },
      {
        word: "ander-",
        translation: "другой",
        usage: "Служебное слово / наречие.",
        pos: "other",
        examples: [
          "Willst du diesen Mantel? – Nein, ich möchte den anderen. — Ты хочешь это пальто? — Нет, я хочу другое."
        ]
      },
      {
        word: "ändern, ändert, hat geändert",
        translation: "менять, изменять",
        usage: "Глагол. Формы: ändern — ändert — hat geändert.",
        pos: "verb",
        examples: [
          "Das Wetter hat sich geändert. — Погода изменилась."
        ]
      },
      {
        word: "anders",
        translation: "по-другому, иначе",
        usage: "Служебное слово / наречие.",
        pos: "other",
        examples: [
          "Anders geht das leider nicht. — К сожалению, по-другому никак."
        ]
      },
      {
        word: "anfangen, fängt an, hat angefangen",
        translation: "начинать",
        usage: "Глагол. Формы: anfangen — fängt an — hat angefangen.",
        pos: "verb",
        examples: [
          "Hier fängt die Bahnhofstraße an. — Здесь начинается Банхофштрассе."
        ]
      },
      {
        word: "der Anfang, ¨-e",
        translation: "начало",
        usage: "Существительное, мужской род. Мн. число: die Anfänge.",
        pos: "noun",
        examples: [
          "Sie wohnt am Anfang der Straße. — Она живёт в начале улицы."
        ]
      },
      {
        word: "die Angst, ¨-e",
        translation: "страх",
        usage: "Существительное, женский род. Мн. число: die Ängste.",
        pos: "noun",
        examples: [
          "Hab keine Angst! Ich habe Angst vor großen Hunden. — Не бойся! Я боюсь больших собак."
        ]
      },
      {
        word: "ankommen, kommt an, ist angekommen",
        translation: "прибывать",
        usage: "Глагол. Формы: ankommen — kommt an — ist angekommen.",
        pos: "verb",
        examples: [
          "Wann kommt dieser Zug in Hamburg an? — Когда этот поезд прибывает в Гамбург?"
        ]
      },
      {
        word: "die Ankunft, ¨-e",
        translation: "прибытие",
        usage: "Существительное, женский род. Мн. число: die Ankünfte.",
        pos: "noun",
        examples: [
          "Auf diesem Fahrplan steht nur die Ankunft der Züge. — В этом расписании указано только прибытие поездов."
        ]
      },
      {
        word: "anmachen, macht an, hat angemacht",
        translation: "включать",
        usage: "Глагол. Формы: anmachen — macht an — hat angemacht.",
        pos: "verb",
        examples: [
          "Mach bitte das Licht an! — Включи, пожалуйста, свет!"
        ]
      },
      {
        word: "anmelden (sich), meldet an, hat angemeldet",
        translation: "регистрировать(ся)",
        usage: "Глагол. Формы: anmelden (sich) — meldet an — hat angemeldet.",
        pos: "verb",
        examples: [
          "Wo kann ich mich anmelden? — Где я могу зарегистрироваться?"
        ]
      },
      {
        word: "die Anmeldung, -en",
        translation: "регистрация",
        usage: "Существительное, женский род. Мн. число: die Anmeldungen.",
        pos: "noun",
        examples: [
          "Wo bekomme ich das Formular für die Anmeldung? — Где я могу получить бланк для регистрации?"
        ]
      },
      {
        word: "der Anrufbeantworter, -",
        translation: "автоответчик",
        usage: "Существительное, мужской род. Мн. число: die Anrufbeantworter.",
        pos: "noun",
        examples: [
          "Wir sind im Moment nicht da. Sprechen Sie bitte auf den Anrufbeantworter. — Нас сейчас нет. Пожалуйста, оставьте сообщение на автоответчике."
        ]
      },
      {
        word: "anrufen, ruft an, hat angerufen",
        translation: "звонить (по телефону)",
        usage: "Глагол. Формы: anrufen — ruft an — hat angerufen.",
        pos: "verb",
        examples: [
          "Kann ich Sie heute Abend anrufen? — Могу ли я позвонить вам сегодня вечером?"
        ]
      },
      {
        word: "der Anruf, -e",
        translation: "телефонный звонок",
        usage: "Существительное, мужской род. Мн. число: die Anrufe.",
        pos: "noun",
        examples: [
          "Eva bekommt viele Anrufe von ihrem Freund Juan. — Ева получает много звонков от своего друга Хуана."
        ]
      },
      {
        word: "der Anschluss, ¨-e",
        translation: "соединение; пересадка",
        usage: "Существительное, мужской род. Мн. число: die Anschlüsse.",
        pos: "noun",
        examples: [
          "In Mannheim haben Sie Anschluss nach Saarbrücken. — В Мангейме у вас пересадка на Саарбрюккен."
        ]
      },
      {
        word: "ansehen, sieht an, hat angesehen",
        translation: "смотреть, осматривать",
        usage: "Глагол. Формы: ansehen — sieht an — hat angesehen.",
        pos: "verb",
        examples: [
          "Darf ich eure Urlaubsfotos ansehen? — Можно мне посмотреть ваши отпускные фотографии?"
        ]
      },
      {
        word: "antworten, antwortet, hat geantwortet",
        translation: "отвечать",
        usage: "Глагол. Формы: antworten — antwortet — hat geantwortet.",
        pos: "verb",
        examples: [
          "Er antwortet nicht. — Он не отвечает."
        ]
      },
      {
        word: "die Antwort, -en",
        translation: "ответ",
        usage: "Существительное, женский род. Мн. число: die Antworten.",
        pos: "noun",
        examples: [
          "Er gibt leider keine Antwort. — К сожалению, он не даёт ответа."
        ]
      },
      {
        word: "die Anzeige, -n",
        translation: "объявление",
        usage: "Существительное, женский род. Мн. число: die Anzeigen.",
        pos: "noun",
        examples: [
          "Ich habe Ihre Anzeige in der Zeitung gelesen. — Я прочитал ваше объявление в газете."
        ]
      },
      {
        word: "der Anzug, ¨-e",
        translation: "костюм (мужской)",
        usage: "Существительное, мужской род. Мн. число: die Anzüge.",
        pos: "noun",
        examples: [
          "Mein Mann muss sich einen neuen Anzug kaufen. — Моему мужу надо купить новый костюм."
        ]
      },
      {
        word: "der Apfel, ¨-",
        translation: "яблоко",
        usage: "Существительное, мужской род. Мн. число: die Äpfel.",
        pos: "noun",
        examples: [
          "Ein Kilo Äpfel, bitte. — Килограмм яблок, пожалуйста."
        ]
      },
      {
        word: "die Apotheke, -n",
        translation: "аптека",
        usage: "Существительное, женский род. Мн. число: die Apotheken.",
        pos: "noun",
        examples: [
          "Das Medikament bekommen Sie in der Apotheke. — Это лекарство вы получите в аптеке."
        ]
      },
      {
        word: "der Apparat, -e",
        translation: "аппарат, прибор",
        usage: "Существительное, мужской род. Мн. число: die Apparate.",
        pos: "noun",
        examples: [
          "Ich habe einen neuen Fotoapparat. — У меня новый фотоаппарат."
        ]
      },
      {
        word: "arbeiten, arbeitet, hat gearbeitet",
        translation: "работать",
        usage: "Глагол. Формы: arbeiten — arbeitet — hat gearbeitet.",
        pos: "verb",
        examples: [
          "Wo arbeiten Sie? — Где вы работаете?"
        ]
      },
      {
        word: "die Arbeit, -en",
        translation: "работа",
        usage: "Существительное, женский род. Мн. число: die Arbeiten.",
        pos: "noun",
        examples: [
          "Mein Bruder sucht Arbeit. — Мой брат ищет работу."
        ]
      },
      {
        word: "arbeitslos",
        translation: "безработный",
        usage: "Прилагательное. Склоняется по общим правилам.",
        pos: "adj",
        examples: [
          "Seit wann ist er schon arbeitslos? — С какого времени он безработный?"
        ]
      },
      {
        word: "ärgern (sich), ärgert, hat geärgert",
        translation: "раздражать; (sich) сердиться",
        usage: "Глагол. Формы: ärgern (sich) — ärgert — hat geärgert.",
        pos: "verb",
        examples: [
          "Warum ärgerst du dich? — Почему ты сердишься?"
        ]
      },
      {
        word: "arm",
        translation: "бедный",
        usage: "Прилагательное. Склоняется по общим правилам.",
        pos: "adj",
        examples: [
          "Sie haben nicht viel Geld, sie sind arm. — У них мало денег, они бедные."
        ]
      },
      {
        word: "der Arm, -e",
        translation: "рука (от плеча до кисти)",
        usage: "Существительное, мужской род. Мн. число: die Arme.",
        pos: "noun",
        examples: [
          "Mein Arm tut weh. — У меня болит рука."
        ]
      },
      {
        word: "der Artikel, -",
        translation: "статья; артикль; товар",
        usage: "Существительное, мужской род. Мн. число: die Artikel.",
        pos: "noun",
        examples: [
          "Im Deutschen gibt es drei Artikel: der, die und das. — В немецком есть три артикля: der, die и das."
        ]
      },
      {
        word: "auch",
        translation: "тоже, также",
        usage: "Служебное слово / наречие.",
        pos: "other",
        examples: [
          "Ich bin auch Spanier. — Я тоже испанец."
        ]
      },
      {
        word: "auf",
        translation: "на (чём-то); в, при",
        usage: "Служебное слово / наречие.",
        pos: "other",
        examples: [
          "Das Wörterbuch liegt auf dem Tisch. — Словарь лежит на столе."
        ]
      },
      {
        word: "auf jeden / keinen Fall",
        translation: "в любом случае / ни в коем случае",
        usage: "Служебное слово / наречие.",
        pos: "other",
        examples: [
          "Ich möchte auf jeden Fall den neuen James-Bond-Film sehen. — Я обязательно хочу посмотреть новый фильм про Джеймса Бонда."
        ]
      },
      {
        word: "aufhören, hört auf, hat aufgehört",
        translation: "прекращать",
        usage: "Глагол. Формы: aufhören — hört auf — hat aufgehört.",
        pos: "verb",
        examples: [
          "Wann hört ihr mit der Arbeit auf? — Когда вы заканчиваете работу?"
        ]
      },
      {
        word: "aufmachen, macht auf, hat aufgemacht",
        translation: "открывать",
        usage: "Глагол. Формы: aufmachen — macht auf — hat aufgemacht.",
        pos: "verb",
        examples: [
          "Kannst du bitte die Tür aufmachen? — Можешь, пожалуйста, открыть дверь?"
        ]
      },
      {
        word: "aufpassen, passt auf, hat aufgepasst",
        translation: "следить, быть внимательным",
        usage: "Глагол. Формы: aufpassen — passt auf — hat aufgepasst.",
        pos: "verb",
        examples: [
          "Pass auf, der Teller fällt gleich auf den Boden! — Осторожно, тарелка сейчас упадёт на пол!"
        ]
      },
      {
        word: "aufräumen, räumt auf, hat aufgeräumt",
        translation: "убираться",
        usage: "Глагол. Формы: aufräumen — räumt auf — hat aufgeräumt.",
        pos: "verb",
        examples: [
          "Die Kinder müssen ihr Zimmer aufräumen. — Дети должны убрать свою комнату."
        ]
      },
      {
        word: "aufregend",
        translation: "волнующий, захватывающий",
        usage: "Прилагательное. Склоняется по общим правилам.",
        pos: "adj",
        examples: [
          "Die letzte Woche war sehr aufregend. — Прошлая неделя была очень насыщенной."
        ]
      },
      {
        word: "aufstehen, steht auf, ist aufgestanden",
        translation: "вставать",
        usage: "Глагол. Формы: aufstehen — steht auf — ist aufgestanden.",
        pos: "verb",
        examples: [
          "Ich stehe jeden Morgen um sieben Uhr auf. — Каждое утро я встаю в семь."
        ]
      },
      {
        word: "der Aufzug, ¨-e",
        translation: "лифт",
        usage: "Существительное, мужской род. Мн. число: die Aufzüge.",
        pos: "noun",
        examples: [
          "In diesem Haus gibt es keinen Aufzug. — В этом доме нет лифта."
        ]
      },
      {
        word: "das Auge, -n",
        translation: "глаз",
        usage: "Существительное, средний род. Мн. число: die Augen.",
        pos: "noun",
        examples: [
          "Er hat blaue Augen. — У него синие глаза."
        ]
      },
      {
        word: "aus",
        translation: "из, из чего-л.",
        usage: "Служебное слово / наречие.",
        pos: "other",
        examples: [
          "Michele kommt aus Brasilien. — Микеле из Бразилии."
        ]
      },
      {
        word: "die Ausbildung, -en",
        translation: "образование, обучение (профессии)",
        usage: "Существительное, женский род. Мн. число: die Ausbildungen.",
        pos: "noun",
        examples: [
          "Ich möchte eine Ausbildung zum Krankenpfleger machen. — Я хочу получить образование медбрата."
        ]
      },
      {
        word: "der Ausflug, ¨-e",
        translation: "экскурсия, поездка",
        usage: "Существительное, мужской род. Мн. число: die Ausflüge.",
        pos: "noun",
        examples: [
          "Morgen machen wir einen Ausflug nach Heidelberg. — Завтра мы едем на экскурсию в Гейдельберг."
        ]
      },
      {
        word: "ausfüllen, füllt aus, hat ausgefüllt",
        translation: "заполнять (бланк)",
        usage: "Глагол. Формы: ausfüllen — füllt aus — hat ausgefüllt.",
        pos: "verb",
        examples: [
          "Füllen Sie bitte dieses Formular aus! — Заполните, пожалуйста, этот бланк!"
        ]
      },
      {
        word: "der Ausgang, ¨-e",
        translation: "выход",
        usage: "Существительное, мужской род. Мн. число: die Ausgänge.",
        pos: "noun",
        examples: [
          "Entschuldigung, wo ist der Ausgang? — Извините, где выход?"
        ]
      },
      {
        word: "ausgeben, gibt aus, hat ausgegeben",
        translation: "тратить (деньги)",
        usage: "Глагол. Формы: ausgeben — gibt aus — hat ausgegeben.",
        pos: "verb",
        examples: [
          "Agata gibt viel Geld für Bücher aus. — Агата тратит много денег на книги."
        ]
      },
      {
        word: "ausgehen, geht aus, ist ausgegangen",
        translation: "выходить (в свет), гаснуть",
        usage: "Глагол. Формы: ausgehen — geht aus — ist ausgegangen.",
        pos: "verb",
        examples: [
          "Gehen wir am Freitag zusammen aus? — Пойдём в пятницу вместе погулять?"
        ]
      },
      {
        word: "die Auskunft, ¨-e",
        translation: "справка, информация",
        usage: "Существительное, женский род. Мн. число: die Auskünfte.",
        pos: "noun",
        examples: [
          "Können Sie mir bitte eine Auskunft geben? — Можете, пожалуйста, дать мне справку?"
        ]
      },
      {
        word: "das Ausland (Sg.)",
        translation: "заграница",
        usage: "Существительное, средний род. Несчисляемое, мн. число не используется.",
        pos: "noun",
        examples: [
          "Fahren Sie ins Ausland? — Вы едете за границу?"
        ]
      },
      {
        word: "ausmachen, macht aus, hat ausgemacht",
        translation: "выключать; договариваться",
        usage: "Глагол. Формы: ausmachen — macht aus — hat ausgemacht.",
        pos: "verb",
        examples: [
          "Mach bitte das Licht aus! — Выключи, пожалуйста, свет!"
        ]
      },
      {
        word: "auspacken, packt aus, hat ausgepackt",
        translation: "распаковывать",
        usage: "Глагол. Формы: auspacken — packt aus — hat ausgepackt.",
        pos: "verb",
        examples: [
          "Packst du bitte den Koffer aus? — Распакуешь, пожалуйста, чемодан?"
        ]
      },
      {
        word: "ausruhen (sich), ruht aus, hat ausgeruht",
        translation: "отдыхать",
        usage: "Глагол. Формы: ausruhen (sich) — ruht aus — hat ausgeruht.",
        pos: "verb",
        examples: [
          "Ruh dich erst mal aus! — Для начала отдохни!"
        ]
      },
      {
        word: "aussehen, sieht aus, hat ausgesehen",
        translation: "выглядеть",
        usage: "Глагол. Формы: aussehen — sieht aus — hat ausgesehen.",
        pos: "verb",
        examples: [
          "Wie sieht er aus? - Groß und blond. — Как он выглядит? — Высокий и светловолосый."
        ]
      },
      {
        word: "außer",
        translation: "кроме",
        usage: "Служебное слово / наречие.",
        pos: "other",
        examples: [
          "Außer Lisa möchte niemand den Film sehen. — Кроме Лизы никто не хочет смотреть фильм."
        ]
      },
      {
        word: "außerdem",
        translation: "кроме того",
        usage: "Служебное слово / наречие.",
        pos: "other",
        examples: [
          "Vier Brötchen, möchten Sie außerdem noch etwas? — Четыре булочки. Хотите ещё что-нибудь?"
        ]
      },
      {
        word: "außerhalb",
        translation: "вне, за пределами",
        usage: "Служебное слово / наречие.",
        pos: "other",
        examples: [
          "Die Wohnung liegt etwas außerhalb. — Квартира находится немного за городом."
        ]
      },
      {
        word: "aussprechen, spricht aus, hat ausgesprochen",
        translation: "произносить",
        usage: "Глагол. Формы: aussprechen — spricht aus — hat ausgesprochen.",
        pos: "verb",
        examples: [
          "Wie spricht man das Wort aus? — Как произносится это слово?"
        ]
      },
      {
        word: "aussteigen, steigt aus, ist ausgestiegen",
        translation: "выходить (из транспорта)",
        usage: "Глагол. Формы: aussteigen — steigt aus — ist ausgestiegen.",
        pos: "verb",
        examples: [
          "Wo müssen wir aussteigen? — Где нам нужно выходить?"
        ]
      },
      {
        word: "die Ausstellung, -en",
        translation: "выставка",
        usage: "Существительное, женский род. Мн. число: die Ausstellungen.",
        pos: "noun",
        examples: [
          "Gehen wir morgen zusammen in die Ausstellung? — Пойдём завтра вместе на выставку?"
        ]
      },
      {
        word: "austragen, trägt aus, hat ausgetragen",
        translation: "разносить (почту); проводить (соревнование)",
        usage: "Глагол. Формы: austragen — trägt aus — hat ausgetragen.",
        pos: "verb",
        examples: [
          "Er trägt jeden Morgen die Zeitung aus. — Он каждое утро разносит газеты."
        ]
      },
      {
        word: "der Ausweis, -e",
        translation: "удостоверение личности",
        usage: "Существительное, мужской род. Мн. число: die Ausweise.",
        pos: "noun",
        examples: [
          "Darf ich bitte mal Ihren Ausweis sehen? — Можно, пожалуйста, взглянуть на ваше удостоверение?"
        ]
      },
      {
        word: "das Auto, -s",
        translation: "машина, автомобиль",
        usage: "Существительное, средний род. Мн. число: die Autos.",
        pos: "noun",
        examples: [
          "Er fährt mit dem Auto. — Он едет на машине."
        ]
      },
      {
        word: "die Autobahn, -en",
        translation: "автострада, автомагистраль",
        usage: "Существительное, женский род. Мн. число: die Autobahnen.",
        pos: "noun",
        examples: [
          "Darf ich mit dem Motorroller auf der Autobahn fahren? — Можно ли ездить на скутере по автомагистрали?"
        ]
      },
      {
        word: "der Automat, -en",
        translation: "автомат",
        usage: "Существительное, мужской род. Мн. число: die Automaten.",
        pos: "noun",
        examples: [
          "Fahrkarten gibt es nur am Automaten. — Билеты продаются только в автомате."
        ]
      },
      {
        word: "automatisch",
        translation: "автоматический",
        usage: "Прилагательное. Склоняется по общим правилам.",
        pos: "adj",
        examples: [
          "Achtung, die Türen schließen automatisch! — Внимание, двери закрываются автоматически!"
        ]
      },
      {
        word: "das Baby, -s",
        translation: "младенец, малыш",
        usage: "Существительное, средний род. Мн. число: die Babys.",
        pos: "noun",
        examples: [
          "Wir haben ein Baby. Es ist sechs Wochen alt. — У нас есть малыш. Ему шесть недель."
        ]
      },
      {
        word: "der Babysitter, -",
        translation: "няня",
        usage: "Существительное, мужской род. Мн. число: die Babysitter.",
        pos: "noun",
        examples: [
          "Meine Tochter arbeitet als Babysitter bei einer Familie mit vier Kindern. — Моя дочь работает няней в семье с четырьмя детьми."
        ]
      },
      {
        word: "backen, bäckt/backt, hat gebacken",
        translation: "печь (в духовке)",
        usage: "Глагол. Формы: backen — bäckt/backt — hat gebacken.",
        pos: "verb",
        examples: [
          "Wenn du kommst, backe ich einen Kuchen. — Когда ты придёшь, я испеку пирог."
        ]
      },
      {
        word: "die Bäckerei, -en",
        translation: "булочная",
        usage: "Существительное, женский род. Мн. число: die Bäckereien.",
        pos: "noun",
        examples: [
          "Ich geh mal schnell zur Bäckerei. — Я быстренько сбегаю в булочную."
        ]
      },
      {
        word: "das Bad, ¨-er",
        translation: "ванная; купание",
        usage: "Существительное, средний род. Мн. число: die Bäder.",
        pos: "noun",
        examples: [
          "Das Haus ist sehr alt. Es hat kein Bad. — Дом очень старый. В нём нет ванной."
        ]
      },
      {
        word: "baden, badet, hat gebadet",
        translation: "купаться",
        usage: "Глагол. Формы: baden — badet — hat gebadet.",
        pos: "verb",
        examples: [
          "Ich bade nicht so gern, ich dusche lieber. — Я не очень люблю принимать ванну, лучше душ."
        ]
      },
      {
        word: "die Bahn, -en",
        translation: "железная дорога; трамвай",
        usage: "Существительное, женский род. Мн. число: die Bahnen.",
        pos: "noun",
        examples: [
          "Wir fahren lieber mit der Bahn als mit dem Bus. — Мы лучше поедем на поезде, чем на автобусе."
        ]
      },
      {
        word: "der Bahnhof, ¨-e",
        translation: "вокзал",
        usage: "Существительное, мужской род. Мн. число: die Bahnhöfe.",
        pos: "noun",
        examples: [
          "Entschuldigung, komme ich hier zum Bahnhof? — Извините, я так дойду до вокзала?"
        ]
      },
      {
        word: "der Bahnsteig, -e",
        translation: "платформа (на вокзале)",
        usage: "Существительное, мужской род. Мн. число: die Bahnsteige.",
        pos: "noun",
        examples: [
          "Auf Hauptbahnhöfen gibt es meist viele Bahnsteige. — На главных вокзалах обычно много платформ."
        ]
      },
      {
        word: "bald",
        translation: "скоро",
        usage: "Служебное слово / наречие.",
        pos: "other",
        examples: [
          "Ich komme bald. Auf Wiedersehen! Bis bald! — Я скоро приду. До свидания! До скорого!"
        ]
      },
      {
        word: "der Balkon, -e",
        translation: "балкон",
        usage: "Существительное, мужской род. Мн. число: die Balkone.",
        pos: "noun",
        examples: [
          "Die Wohnung hat auch einen kleinen Balkon. — В квартире есть ещё небольшой балкон."
        ]
      },
      {
        word: "der Ball, ¨-e",
        translation: "мяч",
        usage: "Существительное, мужской род. Мн. число: die Bälle.",
        pos: "noun",
        examples: [
          "Meine Kinder spielen gern Ball. — Мои дети любят играть в мяч."
        ]
      },
      {
        word: "die Banane, -n",
        translation: "банан",
        usage: "Существительное, женский род. Мн. число: die Bananen.",
        pos: "noun",
        examples: [
          "Drei Bananen, bitte! — Три банана, пожалуйста!"
        ]
      },
      {
        word: "die Band, -s",
        translation: "музыкальная группа; лента",
        usage: "Существительное, женский род. Мн. число: die Bands.",
        pos: "noun",
        examples: [
          "Was ist deine Lieblingsband? Anton spielt in einer Band. — Какая у тебя любимая группа? Антон играет в группе."
        ]
      },
      {
        word: "die Bank, -en",
        translation: "банк; скамейка",
        usage: "Существительное, женский род. Мн. число: die Banken.",
        pos: "noun",
        examples: [
          "Bei welcher Bank haben Sie Ihr Konto? — В каком банке у вас счёт?"
        ]
      },
      {
        word: "die Bank, ¨-e",
        translation: "банк; скамейка",
        usage: "Существительное, женский род. Мн. число: die Bänke.",
        pos: "noun",
        examples: [
          "Kommt, wir setzen uns auf diese Bank. — Пойдёмте, сядем на эту скамейку."
        ]
      },
      {
        word: "bar",
        translation: "наличные",
        usage: "Служебное слово / наречие.",
        pos: "other",
        examples: [
          "Muss ich bar zahlen oder geht&apos;s auch mit Karte? — Нужно платить наличными или можно картой?"
        ]
      },
      {
        word: "der Basketball, ¨-e",
        translation: "баскетбол",
        usage: "Существительное, мужской род. Мн. число: die Basketbälle.",
        pos: "noun",
        examples: [
          "Yannick spielt lieber Basketball als Fußball. — Янник предпочитает играть в баскетбол, а не в футбол."
        ]
      },
      {
        word: "basteln, bastelt, hat gebastelt",
        translation: "мастерить",
        usage: "Глагол. Формы: basteln — bastelt — hat gebastelt.",
        pos: "verb",
        examples: [
          "Die Kinder haben etwas gebastelt. — Дети что-то смастерили."
        ]
      },
      {
        word: "der Bauch, ¨-e",
        translation: "живот",
        usage: "Существительное, мужской род. Мн. число: die Baüche.",
        pos: "noun",
        examples: [
          "Seit gestern tut mir der Bauch weh. — Со вчерашнего дня у меня болит живот."
        ]
      },
      {
        word: "bauen, baut, hat gebaut",
        translation: "строить",
        usage: "Глагол. Формы: bauen — baut — hat gebaut.",
        pos: "verb",
        examples: [
          "Unsere Nachbarn bauen ein neues Haus. — Наши соседи строят новый дом."
        ]
      },
      {
        word: "der Baum, ¨-e",
        translation: "дерево",
        usage: "Существительное, мужской род. Мн. число: die Baüme.",
        pos: "noun",
        examples: [
          "Der Baum ist über hundert Jahre alt. — Этому дереву больше ста лет."
        ]
      },
      {
        word: "die Baustelle, -n",
        translation: "стройка",
        usage: "Существительное, женский род. Мн. число: die Baustellen.",
        pos: "noun",
        examples: [
          "Vor unserem Haus ist eine große Baustelle. — Перед нашим домом большая стройка."
        ]
      },
      {
        word: "beantworten, beantwortet, hat beantwortet",
        translation: "отвечать (на что-л.)",
        usage: "Глагол. Формы: beantworten — beantwortet — hat beantwortet.",
        pos: "verb",
        examples: [
          "Können Sie meine Frage bitte beantworten? — Можете, пожалуйста, ответить на мой вопрос?"
        ]
      },
      {
        word: "bedanken (sich), bedankt, hat bedankt",
        translation: "благодарить (sich)",
        usage: "Глагол. Формы: bedanken (sich) — bedankt — hat bedankt.",
        pos: "verb",
        examples: [
          "Ich möchte mich herzlich für Ihre Hilfe bedanken. — Хочу от души поблагодарить вас за помощь."
        ]
      },
      {
        word: "bedeuten, bedeutet, hat bedeutet",
        translation: "означать",
        usage: "Глагол. Формы: bedeuten — bedeutet — hat bedeutet.",
        pos: "verb",
        examples: [
          "Was bedeutet das Wort? — Что означает это слово?"
        ]
      },
      {
        word: "beeilen (sich), beeilt, hat beeilt",
        translation: "торопиться (sich)",
        usage: "Глагол. Формы: beeilen (sich) — beeilt — hat beeilt.",
        pos: "verb",
        examples: [
          "Kannst du dich bitte beeilen? — Можешь, пожалуйста, поторопиться?"
        ]
      },
      {
        word: "beenden, beendet, hat beendet",
        translation: "заканчивать",
        usage: "Глагол. Формы: beenden — beendet — hat beendet.",
        pos: "verb",
        examples: [
          "Du musst deine Ausbildung auf jeden Fall beenden. — Тебе обязательно надо закончить обучение."
        ]
      },
      {
        word: "beginnen, beginnt, hat begonnen",
        translation: "начинать(ся)",
        usage: "Глагол. Формы: beginnen — beginnt — hat begonnen.",
        pos: "verb",
        examples: [
          "Das Spiel beginnt um 15.30 Uhr. — Игра начинается в 15:30."
        ]
      },
      {
        word: "begründen, begründet, hat begründet",
        translation: "обосновывать",
        usage: "Глагол. Формы: begründen — begründet — hat begründet.",
        pos: "verb",
        examples: [
          "Bitte begründen Sie Ihre Meinung. — Пожалуйста, обоснуйте ваше мнение."
        ]
      },
      {
        word: "bei",
        translation: "у, при, возле",
        usage: "Служебное слово / наречие.",
        pos: "other",
        examples: [
          "Offenbach liegt bei Frankfurt. — Оффенбах находится возле Франкфурта."
        ]
      },
      {
        word: "beide",
        translation: "оба",
        usage: "Служебное слово / наречие.",
        pos: "other",
        examples: [
          "Wir kommen beide. — Мы придём вдвоём."
        ]
      },
      {
        word: "das Bein, -e",
        translation: "нога",
        usage: "Существительное, средний род. Мн. число: die Beine.",
        pos: "noun",
        examples: [
          "Mein rechtes Bein tut weh. — У меня болит правая нога."
        ]
      },
      {
        word: "bekannt",
        translation: "известный",
        usage: "Прилагательное. Склоняется по общим правилам.",
        pos: "adj",
        examples: [
          "Picasso ist sehr bekannt. — Пикассо очень известен."
        ]
      },
      {
        word: "der/die Bekannte, -n",
        translation: "знакомый/знакомая",
        usage: "Служебное слово / наречие.",
        pos: "other",
        examples: [
          "Ein Bekannter von mir heißt Klaus. — Одного моего знакомого зовут Клаус."
        ]
      },
      {
        word: "bekommen, bekommt, hat bekommen",
        translation: "получать",
        usage: "Глагол. Формы: bekommen — bekommt — hat bekommen.",
        pos: "verb",
        examples: [
          "Haben Sie meinen Brief bekommen? — Вы получили моё письмо?"
        ]
      },
      {
        word: "beliebt",
        translation: "популярный, любимый",
        usage: "Прилагательное. Склоняется по общим правилам.",
        pos: "adj",
        examples: [
          "Fußball ist bei vielen Menschen beliebt. — Футбол популярен у многих людей."
        ]
      },
      {
        word: "benutzen, benutzt, hat benutzt",
        translation: "использовать, пользоваться",
        usage: "Глагол. Формы: benutzen — benutzt — hat benutzt.",
        pos: "verb",
        examples: [
          "Die Aufzüge bitte nicht benutzen! — Пожалуйста, не пользуйтесь лифтами!"
        ]
      },
      {
        word: "bequem",
        translation: "удобный",
        usage: "Прилагательное. Склоняется по общим правилам.",
        pos: "adj",
        examples: [
          "Das Sofa ist sehr bequem. — Диван очень удобный."
        ]
      },
      {
        word: "beraten, berät, hat beraten",
        translation: "консультировать",
        usage: "Глагол. Формы: beraten — berät — hat beraten.",
        pos: "verb",
        examples: [
          "Unsere Sekretärin berät Sie gern, wenn Sie Fragen haben. — Наш секретарь охотно вас проконсультирует, если у вас есть вопросы."
        ]
      },
      {
        word: "der Berg, -e",
        translation: "гора",
        usage: "Существительное, мужской род. Мн. число: die Berge.",
        pos: "noun",
        examples: [
          "Die Zugspitze ist der höchste Berg in Deutschland. — Цугшпитце — самая высокая гора в Германии."
        ]
      },
      {
        word: "berichten, berichtet, hat berichtet",
        translation: "сообщать, рассказывать",
        usage: "Глагол. Формы: berichten — berichtet — hat berichtet.",
        pos: "verb",
        examples: [
          "Alle Zeitungen berichten von dem Unfall. — Все газеты сообщают об аварии."
        ]
      },
      {
        word: "der Beruf, -e",
        translation: "профессия",
        usage: "Существительное, мужской род. Мн. число: die Berufe.",
        pos: "noun",
        examples: [
          "Was bist du von Beruf? — Кто ты по профессии?"
        ]
      },
      {
        word: "berühmt",
        translation: "знаменитый",
        usage: "Прилагательное. Склоняется по общим правилам.",
        pos: "adj",
        examples: [
          "Thomas Müller ist ein berühmter Fußballspieler. — Томас Мюллер — знаменитый футболист."
        ]
      },
      {
        word: "der Bescheid (bekommen/geben/sagen)",
        translation: "сообщение, извещение (в выражении Bescheid sagen/wissen)",
        usage: "Существительное, мужской род.",
        pos: "noun",
        examples: [
          "Sie bekommt erst nächste Woche Bescheid. — Она получит ответ только на следующей неделе."
        ]
      },
      {
        word: "beschreiben, beschreibt, hat beschrieben",
        translation: "описывать",
        usage: "Глагол. Формы: beschreiben — beschreibt — hat beschrieben.",
        pos: "verb",
        examples: [
          "Kannst du mir den Weg zum Bahnhof beschreiben? — Можешь описать мне дорогу до вокзала?"
        ]
      },
      {
        word: "beschweren (sich), beschwert, hat beschwert",
        translation: "жаловаться (sich)",
        usage: "Глагол. Формы: beschweren (sich) — beschwert — hat beschwert.",
        pos: "verb",
        examples: [
          "Hier ist es zu laut. Wo können wir uns beschweren? — Тут слишком шумно. Куда нам пожаловаться?"
        ]
      },
      {
        word: "besetzt",
        translation: "занято",
        usage: "Прилагательное. Склоняется по общим правилам.",
        pos: "adj",
        examples: [
          "Ist dieser Platz frei? – Nein, er ist besetzt. — Это место свободно? — Нет, оно занято."
        ]
      },
      {
        word: "besichtigen, besichtigt, hat besichtigt",
        translation: "осматривать (достопримечательности)",
        usage: "Глагол. Формы: besichtigen — besichtigt — hat besichtigt.",
        pos: "verb",
        examples: [
          "Ich möchte gern das Schloss besichtigen. — Я бы хотел осмотреть замок."
        ]
      },
      {
        word: "besonders",
        translation: "особенно",
        usage: "Служебное слово / наречие.",
        pos: "other",
        examples: [
          "Dieses Angebot ist besonders günstig. — Это предложение особенно выгодное."
        ]
      },
      {
        word: "bestätigen, bestätigt, hat bestätigt",
        translation: "подтверждать",
        usage: "Глагол. Формы: bestätigen — bestätigt — hat bestätigt.",
        pos: "verb",
        examples: [
          "Ich kann bestätigen, dass er hier war. — Могу подтвердить, что он был здесь."
        ]
      },
      {
        word: "bestehen, besteht, hat bestanden",
        translation: "сдавать (экзамен); состоять",
        usage: "Глагол. Формы: bestehen — besteht — hat bestanden.",
        pos: "verb",
        examples: [
          "Ich habe die Prüfung bestanden! — Я сдал экзамен!"
        ]
      },
      {
        word: "bestellen, bestellt, hat bestellt",
        translation: "заказывать",
        usage: "Глагол. Формы: bestellen — bestellt — hat bestellt.",
        pos: "verb",
        examples: [
          "Wir möchten bitte bestellen. — Мы хотели бы сделать заказ."
        ]
      },
      {
        word: "der Besuch, -e",
        translation: "визит, посещение",
        usage: "Существительное, мужской род. Мн. число: die Besuche.",
        pos: "noun",
        examples: [
          "Wir bekommen am Wochenende Besuch. — В выходные к нам придут гости."
        ]
      },
      {
        word: "besuchen, besucht, hat besucht",
        translation: "навещать, посещать",
        usage: "Глагол. Формы: besuchen — besucht — hat besucht.",
        pos: "verb",
        examples: [
          "Darf ich dich mal besuchen? — Можно мне как-нибудь к тебе зайти?"
        ]
      },
      {
        word: "das Bett, -en",
        translation: "кровать",
        usage: "Существительное, средний род. Мн. число: die Betten.",
        pos: "noun",
        examples: [
          "Sie ist krank und muss heute im Bett bleiben. — Она больна и сегодня должна лежать в кровати."
        ]
      },
      {
        word: "bewerben (sich), bewirbt, hat beworben",
        translation: "подавать заявку (sich)",
        usage: "Глагол. Формы: bewerben (sich) — bewirbt — hat beworben.",
        pos: "verb",
        examples: [
          "Ich möchte mich um diese Stelle bewerben. — Я хочу подать заявку на эту должность."
        ]
      },
      {
        word: "die Bewerbung, -en",
        translation: "заявка, резюме",
        usage: "Существительное, женский род. Мн. число: die Bewerbungen.",
        pos: "noun",
        examples: [
          "Kannst du mir bei meiner Bewerbung helfen? — Можешь помочь мне с моим резюме?"
        ]
      },
      {
        word: "bewölkt",
        translation: "облачно",
        usage: "Прилагательное. Склоняется по общим правилам.",
        pos: "adj",
        examples: [
          "Heute ist es bewölkt. — Сегодня облачно."
        ]
      },
      {
        word: "die Wolke, -n",
        translation: "облако",
        usage: "Существительное, женский род. Мн. число: die Wolken.",
        pos: "noun",
        examples: [
          "Es gibt viele Wolken am Himmel. — На небе много облаков."
        ]
      },
      {
        word: "bezahlen, bezahlt, hat bezahlt",
        translation: "оплачивать",
        usage: "Глагол. Формы: bezahlen — bezahlt — hat bezahlt.",
        pos: "verb",
        examples: [
          "Wo kann ich bezahlen? — Где я могу оплатить?"
        ]
      },
      {
        word: "die Bibliothek, -en",
        translation: "библиотека",
        usage: "Существительное, женский род. Мн. число: die Bibliotheken.",
        pos: "noun",
        examples: [
          "Sie lernt jeden Tag in der Bibliothek. — Она каждый день занимается в библиотеке."
        ]
      },
      {
        word: "das Bier, -e",
        translation: "пиво",
        usage: "Существительное, средний род. Мн. число: die Biere.",
        pos: "noun",
        examples: [
          "Noch ein Bier, bitte. — Ещё одно пиво, пожалуйста."
        ]
      },
      {
        word: "das Bild, -er",
        translation: "картина, изображение",
        usage: "Существительное, средний род. Мн. число: die Bilder.",
        pos: "noun",
        examples: [
          "Hast du ein Bild von deinem Sohn? — У тебя есть фотография сына?"
        ]
      },
      {
        word: "billig",
        translation: "дешёвый",
        usage: "Прилагательное. Склоняется по общим правилам.",
        pos: "adj",
        examples: [
          "Das Wörterbuch kostet nur fünf Euro. Das ist aber billig! — Словарь стоит всего пять евро. Это же дёшево!"
        ]
      },
      {
        word: "die Birne, -n",
        translation: "груша; лампочка",
        usage: "Существительное, женский род. Мн. число: die Birnen.",
        pos: "noun",
        examples: [
          "Ein Kilo Birnen, bitte! — Килограмм груш, пожалуйста!"
        ]
      },
      {
        word: "bis",
        translation: "до",
        usage: "Служебное слово / наречие.",
        pos: "other",
        examples: [
          "Ich fahre nur bis Stuttgart. — Я еду только до Штутгарта."
        ]
      },
      {
        word: "bisschen",
        translation: "немного",
        usage: "Служебное слово / наречие.",
        pos: "other",
        examples: [
          "Können Sie bitte ein bisschen lauter sprechen? — Можете, пожалуйста, говорить чуть громче?"
        ]
      },
      {
        word: "bitte",
        translation: "пожалуйста",
        usage: "Служебное слово / наречие.",
        pos: "other",
        examples: [
          "Eine Tasse Kaffee bitte! — Чашку кофе, пожалуйста!"
        ]
      },
      {
        word: "die Bitte, -n",
        translation: "просьба",
        usage: "Существительное, женский род. Мн. число: die Bitten.",
        pos: "noun",
        examples: [
          "Ich habe noch eine Bitte. — У меня ещё одна просьба."
        ]
      },
      {
        word: "bitten, bittet, hat gebeten",
        translation: "просить",
        usage: "Глагол. Формы: bitten — bittet — hat gebeten.",
        pos: "verb",
        examples: [
          "Darf ich Sie um etwas bitten? — Можно вас кое о чём попросить?"
        ]
      },
      {
        word: "bitter",
        translation: "горький",
        usage: "Прилагательное. Склоняется по общим правилам.",
        pos: "adj",
        examples: [
          "Kaffee ohne Zucker schmeckt bitter. — Кофе без сахара горький."
        ]
      },
      {
        word: "das Blatt, ¨-er",
        translation: "лист (бумаги, дерева)",
        usage: "Существительное, средний род. Мн. число: die Blätter.",
        pos: "noun",
        examples: [
          "Haben Sie ein Blatt Papier für mich? — У вас есть для меня лист бумаги?"
        ]
      },
      {
        word: "bleiben, bleibt, ist geblieben",
        translation: "оставаться",
        usage: "Глагол. Формы: bleiben — bleibt — ist geblieben.",
        pos: "verb",
        examples: [
          "Wir bleiben drei Tage in Berlin. — Мы остаёмся в Берлине три дня."
        ]
      },
      {
        word: "der Bleistift, -e",
        translation: "карандаш",
        usage: "Существительное, мужской род. Мн. число: die Bleistifte.",
        pos: "noun",
        examples: [
          "Hast du einen Bleistift? — У тебя есть карандаш?"
        ]
      },
      {
        word: "blöd",
        translation: "глупый",
        usage: "Прилагательное. Склоняется по общим правилам.",
        pos: "adj",
        examples: [
          "Ich finde es blöd, dass du morgen gehen musst. — По-моему, глупо, что тебе завтра придётся уйти."
        ]
      },
      {
        word: "der/das Blog, -s",
        translation: "блог",
        usage: "Служебное слово / наречие.",
        pos: "other",
        examples: [
          "Ich schreibe einen Blog über Mode. — Я веду блог о моде."
        ]
      },
      {
        word: "blond",
        translation: "белокурый",
        usage: "Прилагательное. Склоняется по общим правилам.",
        pos: "adj",
        examples: [
          "Lisa hat blonde Haare. — У Лизы светлые волосы."
        ]
      },
      {
        word: "die Blume, -n",
        translation: "цветок",
        usage: "Существительное, женский род. Мн. число: die Blumen.",
        pos: "noun",
        examples: [
          "Gefallen dir die Blumen? — Тебе нравятся цветы?"
        ]
      },
      {
        word: "die Bluse, -n",
        translation: "блузка",
        usage: "Существительное, женский род. Мн. число: die Blusen.",
        pos: "noun",
        examples: [
          "Ich suche eine weiße Bluse. — Я ищу белую блузку."
        ]
      },
      {
        word: "die Bohne, -n",
        translation: "фасоль; боб",
        usage: "Существительное, женский род. Мн. число: die Bohnen.",
        pos: "noun",
        examples: [
          "Hans isst nicht gern Bohnen. — Ханс не любит есть фасоль."
        ]
      },
      {
        word: "böse",
        translation: "злой; сердитый",
        usage: "Прилагательное. Склоняется по общим правилам.",
        pos: "adj",
        examples: [
          "Sie ist richtig böse auf mich. — Она по-настоящему злится на меня."
        ]
      },
      {
        word: "braten, brät, hat gebraten",
        translation: "жарить",
        usage: "Глагол. Формы: braten — brät — hat gebraten.",
        pos: "verb",
        examples: [
          "Braten Sie das Fleisch in etwas Öl! — Обжарьте мясо на небольшом количестве масла!"
        ]
      },
      {
        word: "brauchen, braucht, hat gebraucht",
        translation: "нуждаться, нужно",
        usage: "Глагол. Формы: brauchen — braucht — hat gebraucht.",
        pos: "verb",
        examples: [
          "Ich brauche ein neues Auto. — Мне нужна новая машина."
        ]
      },
      {
        word: "der Brief, -e",
        translation: "письмо",
        usage: "Существительное, мужской род. Мн. число: die Briefe.",
        pos: "noun",
        examples: [
          "Haben Sie einen Brief für mich? — У вас есть письмо для меня?"
        ]
      },
      {
        word: "die Briefmarke, -n",
        translation: "почтовая марка",
        usage: "Существительное, женский род. Мн. число: die Briefmarken.",
        pos: "noun",
        examples: [
          "Bitte die Briefmarke nicht vergessen! — Пожалуйста, не забудьте про марку!"
        ]
      },
      {
        word: "die Brille, -n",
        translation: "очки",
        usage: "Существительное, женский род. Мн. число: die Brillen.",
        pos: "noun",
        examples: [
          "Wo ist meine Brille? — Где мои очки?"
        ]
      },
      {
        word: "bringen, bringt, hat gebracht",
        translation: "приносить",
        usage: "Глагол. Формы: bringen — bringt — hat gebracht.",
        pos: "verb",
        examples: [
          "Bringen Sie mir bitte noch einen Kaffee! — Принесите мне, пожалуйста, ещё один кофе!"
        ]
      },
      {
        word: "das Brot, -e",
        translation: "хлеб",
        usage: "Существительное, средний род. Мн. число: die Brote.",
        pos: "noun",
        examples: [
          "Nimm doch noch ein Brot für das Abendessen. — Возьми ещё хлеба к ужину."
        ]
      },
      {
        word: "das Brötchen, -",
        translation: "булочка",
        usage: "Существительное, средний род. Мн. число: die Brötchen.",
        pos: "noun",
        examples: [
          "Möchtest du Brot oder Brötchen zum Frühstück? — Хочешь на завтрак хлеб или булочку?"
        ]
      },
      {
        word: "die Brücke, -n",
        translation: "мост",
        usage: "Существительное, женский род. Мн. число: die Brücken.",
        pos: "noun",
        examples: [
          "Fahren Sie über die nächste Brücke und dann nach links. — Переезжайте следующий мост и потом налево."
        ]
      },
      {
        word: "das Buch, ¨-er",
        translation: "книга",
        usage: "Существительное, средний род. Мн. число: die Bücher.",
        pos: "noun",
        examples: [
          "Was kostet das Buch, bitte? — Сколько стоит книга?"
        ]
      },
      {
        word: "buchen, bucht, hat gebucht",
        translation: "бронировать",
        usage: "Глагол. Формы: buchen — bucht — hat gebucht.",
        pos: "verb",
        examples: [
          "Morgen buche ich unsere Urlaubsreise. — Завтра я забронирую наш отпуск."
        ]
      },
      {
        word: "der Buchstabe, -n",
        translation: "буква",
        usage: "Существительное, мужской род. Мн. число: die Buchstaben.",
        pos: "noun",
        examples: [
          "Diesen Buchstaben gibt es in meiner Sprache nicht. — В моём языке нет такой буквы."
        ]
      },
      {
        word: "buchstabieren, buchstabiert, hat buchstabiert",
        translation: "произносить по буквам",
        usage: "Глагол. Формы: buchstabieren — buchstabiert — hat buchstabiert.",
        pos: "verb",
        examples: [
          "Würden Sie bitte Ihren Namen buchstabieren? — Не могли бы вы произнести имя по буквам?"
        ]
      },
      {
        word: "bunt",
        translation: "разноцветный",
        usage: "Прилагательное. Склоняется по общим правилам.",
        pos: "adj",
        examples: [
          "Anna trägt gern bunte Kleider. — Анна любит носить яркие платья."
        ]
      },
      {
        word: "das Büro, -s",
        translation: "офис, контора",
        usage: "Существительное, средний род. Мн. число: die Büros.",
        pos: "noun",
        examples: [
          "Ich arbeite in einem Büro. — Я работаю в офисе."
        ]
      },
      {
        word: "der Bus, -se",
        translation: "автобус",
        usage: "Существительное, мужской род. Мн. число: die Busse.",
        pos: "noun",
        examples: [
          "Wann kommt der nächste Bus? — Когда приходит следующий автобус?"
        ]
      },
      {
        word: "die Butter (Sg.)",
        translation: "сливочное масло",
        usage: "Существительное, женский род. Несчисляемое, мн. число не используется.",
        pos: "noun",
        examples: [
          "Möchtest du Butter aufs Brot oder nur Käse? — Тебе хлеб с маслом или только с сыром?"
        ]
      },
      {
        word: "das Café, -s",
        translation: "кафе",
        usage: "Существительное, средний род. Мн. число: die Cafés.",
        pos: "noun",
        examples: [
          "Kommst du mit ins Café? — Пойдёшь со мной в кафе?"
        ]
      },
      {
        word: "die Cafeteria, -s",
        translation: "кафетерий",
        usage: "Существительное, женский род. Мн. число: die Cafeterias.",
        pos: "noun",
        examples: [
          "Ich gehe jetzt in die Cafeteria. — Я сейчас иду в кафетерий."
        ]
      },
      {
        word: "chatten, chattet, hat gechattet",
        translation: "общаться в чате",
        usage: "Глагол. Формы: chatten — chattet — hat gechattet.",
        pos: "verb",
        examples: [
          "Luis chattet gern mit seinen Freunden im Internet. — Луис любит общаться с друзьями в интернете."
        ]
      },
      {
        word: "der Chef, -s / die Chefin, -nen",
        translation: "начальник, шеф",
        usage: "Существительное, мужской род. Мн. число: die Chefs.",
        pos: "noun",
        examples: [
          "Wir haben eine neue Chefin. — У нас новая начальница."
        ]
      },
      {
        word: "der Club / Klub, -s",
        translation: "клуб",
        usage: "Существительное, мужской род.",
        pos: "noun",
        examples: [
          "Gibt es hier einen Tennis-Club? — Здесь есть теннисный клуб?"
        ]
      },
      {
        word: "der/das Comic, -s",
        translation: "комикс",
        usage: "Служебное слово / наречие.",
        pos: "other",
        examples: [
          "Mein Sohn liest immer nur Comics. — Мой сын читает только комиксы."
        ]
      },
      {
        word: "der Computer, -",
        translation: "компьютер",
        usage: "Существительное, мужской род. Мн. число: die Computer.",
        pos: "noun",
        examples: [
          "Wann bekommst du deinen neuen Computer? — Когда ты получишь свой новый компьютер?"
        ]
      },
      {
        word: "die Creme, -s/-n",
        translation: "крем",
        usage: "Существительное, женский род. Мн. число: die Cremes/-n.",
        pos: "noun",
        examples: [
          "Ich suche eine Creme für die Hände. — Я ищу крем для рук."
        ]
      },
      {
        word: "da",
        translation: "здесь, тут; так как",
        usage: "Служебное слово / наречие.",
        pos: "other",
        examples: [
          "Ist Herr Klein schon da? — Господин Кляйн уже здесь?"
        ]
      },
      {
        word: "da(r)- (z.B. darauf, darüber)",
        translation: "здесь, тут; так как",
        usage: "Служебное слово / наречие.",
        pos: "other",
        examples: [
          "Darauf fällt mir keine Antwort ein. — На это мне нечего ответить."
        ]
      },
      {
        word: "dabei (sein)",
        translation: "при этом",
        usage: "Служебное слово / наречие.",
        pos: "other",
        examples: [
          "Hast du einen Stift dabei? — У тебя есть при себе ручка?"
        ]
      },
      {
        word: "dafür/dagegen sein",
        translation: "быть за / против",
        usage: "Служебное слово / наречие.",
        pos: "other",
        examples: [
          "Ich bin dafür/dagegen. — Я за / против."
        ]
      },
      {
        word: "damals",
        translation: "тогда, в то время",
        usage: "Служебное слово / наречие.",
        pos: "other",
        examples: [
          "Aber damals hatte ich kein Geld. — Но тогда у меня не было денег."
        ]
      },
      {
        word: "die Dame, -n",
        translation: "дама",
        usage: "Существительное, женский род. Мн. число: die Damen.",
        pos: "noun",
        examples: [
          "Sehr geehrte Damen und Herren, — Уважаемые дамы и господа,"
        ]
      },
      {
        word: "daneben",
        translation: "рядом (с этим)",
        usage: "Служебное слово / наречие.",
        pos: "other",
        examples: [
          "Die Post ist dort. Daneben ist die Bank. — Почта там. Рядом банк."
        ]
      },
      {
        word: "der Dank (Sg.)",
        translation: "благодарность",
        usage: "Существительное, мужской род. Несчисляемое, мн. число не используется.",
        pos: "noun",
        examples: [
          "Vielen Dank! Herzlichen Dank! — Большое спасибо! Огромное спасибо!"
        ]
      },
      {
        word: "danke",
        translation: "спасибо",
        usage: "Служебное слово / наречие.",
        pos: "other",
        examples: [
          "Sehr freundlich, ja danke! — Очень любезно, да, спасибо!"
        ]
      },
      {
        word: "danken, dankt, hat gedankt",
        translation: "благодарить",
        usage: "Глагол. Формы: danken — dankt — hat gedankt.",
        pos: "verb",
        examples: [
          "Ich danke Ihnen für die Einladung. — Благодарю вас за приглашение."
        ]
      },
      {
        word: "dann",
        translation: "тогда, потом",
        usage: "Служебное слово / наречие.",
        pos: "other",
        examples: [
          "Ich muss noch schnell zur Post, dann komme ich. — Мне ещё нужно быстро на почту, потом я приду."
        ]
      },
      {
        word: "dass",
        translation: "что (союз)",
        usage: "Служебное слово / наречие.",
        pos: "other",
        examples: [
          "Rico hat gesagt, dass er auch zur Party kommt. — Рико сказал, что тоже придёт на вечеринку."
        ]
      },
      {
        word: "die Datei, -en",
        translation: "файл",
        usage: "Существительное, женский род. Мн. число: die Dateien.",
        pos: "noun",
        examples: [
          "Wo hast du die Datei gespeichert? — Куда ты сохранил файл?"
        ]
      },
      {
        word: "das Datum, -en",
        translation: "дата",
        usage: "Существительное, средний род. Мн. число: die Datumen.",
        pos: "noun",
        examples: [
          "Bitte Datum und Unterschrift nicht vergessen! — Пожалуйста, не забудьте дату и подпись!"
        ]
      },
      {
        word: "dauern, dauert, hat gedauert",
        translation: "длиться",
        usage: "Глагол. Формы: dauern — dauert — hat gedauert.",
        pos: "verb",
        examples: [
          "Wie lange dauert die Pause? — Как долго длится перерыв?"
        ]
      },
      {
        word: "denken, denkt, hat gedacht",
        translation: "думать",
        usage: "Глагол. Формы: denken — denkt — hat gedacht.",
        pos: "verb",
        examples: [
          "Ich denke, du hast recht. — Думаю, ты прав."
        ]
      },
      {
        word: "denn",
        translation: "потому что, ведь",
        usage: "Служебное слово / наречие.",
        pos: "other",
        examples: [
          "Ich kann nicht kommen, denn ich bin krank. — Я не могу прийти, потому что болею."
        ]
      },
      {
        word: "deshalb",
        translation: "поэтому",
        usage: "Служебное слово / наречие.",
        pos: "other",
        examples: [
          "Ich bin krank. Deshalb komme ich heute nicht ins Büro. — Я болен. Поэтому сегодня не приду в офис."
        ]
      },
      {
        word: "deutlich",
        translation: "чёткий, ясный",
        usage: "Прилагательное. Склоняется по общим правилам.",
        pos: "adj",
        examples: [
          "Sprechen Sie bitte deutlich! — Пожалуйста, говорите чётко!"
        ]
      },
      {
        word: "dick",
        translation: "толстый",
        usage: "Прилагательное. Склоняется по общим правилам.",
        pos: "adj",
        examples: [
          "Ich bin zu dick. Ich muss weniger essen. — Я слишком толстый. Мне надо меньше есть."
        ]
      },
      {
        word: "das Ding, -e",
        translation: "вещь",
        usage: "Существительное, средний род. Мн. число: die Dinge.",
        pos: "noun",
        examples: [
          "Was macht man mit diesem Ding? — Что делают с этой штукой?"
        ]
      },
      {
        word: "direkt",
        translation: "прямой, непосредственный",
        usage: "Прилагательное. Склоняется по общим правилам.",
        pos: "adj",
        examples: [
          "Wir wohnen direkt über dem Café. — Мы живём прямо над кафе."
        ]
      },
      {
        word: "die Disco / Disko, -s",
        translation: "дискотека",
        usage: "Существительное, женский род.",
        pos: "noun",
        examples: [
          "Wir gehen heute Abend in die Disco. — Сегодня вечером мы идём на дискотеку."
        ]
      },
      {
        word: "diskutieren, diskutiert, hat diskutiert",
        translation: "обсуждать",
        usage: "Глагол. Формы: diskutieren — diskutiert — hat diskutiert.",
        pos: "verb",
        examples: [
          "Ich möchte das mit meinen Kollegen diskutieren. — Я хочу обсудить это с коллегами."
        ]
      },
      {
        word: "doch",
        translation: "всё-таки, же",
        usage: "Служебное слово / наречие.",
        pos: "other",
        examples: [
          "Hast du keinen Hunger? – Doch, ich bin sehr hungrig. — Ты не голоден? — Нет, я очень голоден."
        ]
      },
      {
        word: "das Doppelzimmer, -",
        translation: "двухместный номер",
        usage: "Существительное, средний род. Мн. число: die Doppelzimmer.",
        pos: "noun",
        examples: [
          "Möchten Sie ein Doppelzimmer oder ein Einzelzimmer? — Хотите двухместный номер или одноместный?"
        ]
      },
      {
        word: "das Dorf, ¨-er",
        translation: "деревня",
        usage: "Существительное, средний род. Мн. число: die Dörfer.",
        pos: "noun",
        examples: [
          "Unser Dorf liegt direkt an der Autobahn. — Наша деревня прямо у автомагистрали."
        ]
      },
      {
        word: "dort, -her, -hin",
        translation: "там",
        usage: "Служебное слово / наречие.",
        pos: "other",
        examples: [
          "Wir treffen uns vor dem Kino. Ich bin in fünf Minuten dort. — Встречаемся у кинотеатра. Я буду там через пять минут."
        ]
      },
      {
        word: "draußen",
        translation: "снаружи, на улице",
        usage: "Служебное слово / наречие.",
        pos: "other",
        examples: [
          "Das Wetter ist so schön. Wollen wir draußen sitzen? — Погода такая хорошая. Посидим на улице?"
        ]
      },
      {
        word: "dringend",
        translation: "срочный",
        usage: "Прилагательное. Склоняется по общим правилам.",
        pos: "adj",
        examples: [
          "Bitte kommen Sie schnell. Es ist dringend. — Пожалуйста, приходите быстро. Это срочно."
        ]
      },
      {
        word: "drinnen",
        translation: "внутри",
        usage: "Служебное слово / наречие.",
        pos: "other",
        examples: [
          "Wollen Sie drinnen oder draußen sitzen? — Вы хотите сидеть в помещении или на улице?"
        ]
      },
      {
        word: "drüben",
        translation: "на той стороне",
        usage: "Служебное слово / наречие.",
        pos: "other",
        examples: [
          "Da drüben ist die Haltestelle. — Вон там остановка."
        ]
      },
      {
        word: "drücken, drückt, hat gedrückt",
        translation: "нажимать",
        usage: "Глагол. Формы: drücken — drückt — hat gedrückt.",
        pos: "verb",
        examples: [
          "An dieser Tür musst du drücken, nicht ziehen. — На этой двери надо нажимать, а не тянуть."
        ]
      },
      {
        word: "drucken, druckt, hat gedruckt",
        translation: "печатать (на принтере)",
        usage: "Глагол. Формы: drucken — druckt — hat gedruckt.",
        pos: "verb",
        examples: [
          "Waehle einfach Datei drucken! — Просто выбери «печать файла»!"
        ]
      },
      {
        word: "der Drucker, -",
        translation: "принтер",
        usage: "Существительное, мужской род. Мн. число: die Drucker.",
        pos: "noun",
        examples: [
          "Mein Drucker ist kaputt. — Мой принтер сломался."
        ]
      },
      {
        word: "dumm",
        translation: "глупый",
        usage: "Прилагательное. Склоняется по общим правилам.",
        pos: "adj",
        examples: [
          "Ich finde den Film dumm. — Фильм кажется мне глупым."
        ]
      },
      {
        word: "dunkel",
        translation: "тёмный",
        usage: "Прилагательное. Склоняется по общим правилам.",
        pos: "adj",
        examples: [
          "Um sechs Uhr ist es schon dunkel. — В шесть часов уже темно."
        ]
      },
      {
        word: "dünn",
        translation: "тонкий",
        usage: "Прилагательное. Склоняется по общим правилам.",
        pos: "adj",
        examples: [
          "Das Buch ist sehr dünn. Es hat nur 40 Seiten. — Книга очень тонкая. В ней всего 40 страниц."
        ]
      },
      {
        word: "durch",
        translation: "через, сквозь",
        usage: "Служебное слово / наречие.",
        pos: "other",
        examples: [
          "Am besten gehen Sie durch die Tengstraße. — Лучше всего вам пройти через Тенгштрассе."
        ]
      },
      {
        word: "dürfen, darf, durfte, hat gedurft",
        translation: "сметь, можно",
        usage: "Глагол. Формы: dürfen — darf — durfte — hat gedurft.",
        pos: "verb",
        examples: [
          "Sie dürfen hier nicht parken. — Здесь вам нельзя парковаться."
        ]
      },
      {
        word: "der Durst (Sg.)",
        translation: "жажда",
        usage: "Существительное, мужской род. Несчисляемое, мн. число не используется.",
        pos: "noun",
        examples: [
          "Hast du etwas zu trinken? Ich habe großen Durst. — У тебя есть что-нибудь попить? Я очень хочу пить."
        ]
      },
      {
        word: "die Dusche, -n",
        translation: "душ",
        usage: "Существительное, женский род. Мн. число: die Duschen.",
        pos: "noun",
        examples: [
          "Unsere Wohnung hat nur eine Dusche. — В нашей квартире только душ."
        ]
      },
      {
        word: "duschen (sich), duscht, hat geduscht",
        translation: "принимать душ",
        usage: "Глагол. Формы: duschen (sich) — duscht — hat geduscht.",
        pos: "verb",
        examples: [
          "Ich bade nicht so gern, ich dusche lieber. — Я не очень люблю принимать ванну, лучше душ."
        ]
      },
      {
        word: "das E-Book, -s",
        translation: "электронная книга",
        usage: "Существительное, средний род. Мн. число: die E-Books.",
        pos: "noun",
        examples: [
          "Liest du lieber E-Books oder Bücher aus Papier? — Ты предпочитаешь электронные книги или бумажные?"
        ]
      },
      {
        word: "echt",
        translation: "настоящий; правда",
        usage: "Прилагательное. Склоняется по общим правилам.",
        pos: "adj",
        examples: [
          "Ist das Bild ein echter Picasso? — Это настоящий Пикассо?"
        ]
      },
      {
        word: "die Ecke, -n",
        translation: "угол",
        usage: "Существительное, женский род. Мн. число: die Ecken.",
        pos: "noun",
        examples: [
          "Gehen Sie an der nächsten Ecke links. — На следующем углу поверните налево."
        ]
      },
      {
        word: "egal",
        translation: "всё равно",
        usage: "Прилагательное. Склоняется по общим правилам.",
        pos: "adj",
        examples: [
          "Das ist mir egal. — Мне всё равно."
        ]
      },
      {
        word: "die Ehefrau, -en / der Ehemann, ¨-er / der Ehepartner, -",
        translation: "жена, супруга",
        usage: "Существительное, женский род. Мн. число: die Ehefrauen.",
        pos: "noun",
        examples: [
          "Das ist mein Ehemann/meine Ehefrau. — Это мой муж / моя жена."
        ]
      },
      {
        word: "das Ei, -er",
        translation: "яйцо",
        usage: "Существительное, средний род. Мн. число: die Eier.",
        pos: "noun",
        examples: [
          "Möchtest du ein Ei zum Frühstück? — Хочешь яйцо на завтрак?"
        ]
      },
      {
        word: "eigen-",
        translation: "собственный",
        usage: "Прилагательное. Склоняется по общим правилам.",
        pos: "adj",
        examples: [
          "Nicht alle Kinder haben ein eigenes Zimmer. — Не у всех детей есть своя комната."
        ]
      },
      {
        word: "eigentlich",
        translation: "собственно, вообще-то",
        usage: "Служебное слово / наречие.",
        pos: "other",
        examples: [
          "Kennst du eigentlich Susanne? — Кстати, ты знаешь Сюзанну?"
        ]
      },
      {
        word: "eilig",
        translation: "срочный, спешный",
        usage: "Прилагательное. Склоняется по общим правилам.",
        pos: "adj",
        examples: [
          "Hast du es eilig? — Ты спешишь?"
        ]
      },
      {
        word: "einfach",
        translation: "простой; просто",
        usage: "Прилагательное. Склоняется по общим правилам.",
        pos: "adj",
        examples: [
          "Die Prüfung ist ganz einfach. — Экзамен совсем простой."
        ]
      },
      {
        word: "der Eingang, ¨-e",
        translation: "вход",
        usage: "Существительное, мужской род. Мн. число: die Eingänge.",
        pos: "noun",
        examples: [
          "Der Eingang ist um die Ecke. — Вход за углом."
        ]
      },
      {
        word: "einig-",
        translation: "некоторый; единый",
        usage: "Служебное слово / наречие.",
        pos: "other",
        examples: [
          "In diesem Text sind einige Fehler. — В этом тексте есть несколько ошибок."
        ]
      },
      {
        word: "einkaufen, kauft ein, hat eingekauft",
        translation: "делать покупки",
        usage: "Глагол. Формы: einkaufen — kauft ein — hat eingekauft.",
        pos: "verb",
        examples: [
          "Ich muss noch für morgen einkaufen. — Мне ещё надо сделать покупки на завтра."
        ]
      },
      {
        word: "das Einkaufszentrum, -en",
        translation: "торговый центр",
        usage: "Существительное, средний род. Мн. число: die Einkaufszentrumen.",
        pos: "noun",
        examples: [
          "Kommst du morgen mit ins Einkaufszentrum? — Пойдёшь завтра со мной в торговый центр?"
        ]
      },
      {
        word: "einladen, lädt ein, hat eingeladen",
        translation: "приглашать",
        usage: "Глагол. Формы: einladen — lädt ein — hat eingeladen.",
        pos: "verb",
        examples: [
          "Darf ich Sie zu einem Kaffee einladen? — Можно пригласить вас на кофе?"
        ]
      },
      {
        word: "die Einladung, -en",
        translation: "приглашение",
        usage: "Существительное, женский род. Мн. число: die Einladungen.",
        pos: "noun",
        examples: [
          "Danke für die Einladung zu deinem Geburtstag! — Спасибо за приглашение на день рождения!"
        ]
      },
      {
        word: "einmal",
        translation: "однажды, один раз",
        usage: "Служебное слово / наречие.",
        pos: "other",
        examples: [
          "Rufen Sie mich bitte morgen noch einmal an. — Позвоните мне, пожалуйста, завтра ещё раз."
        ]
      },
      {
        word: "einpacken, packt ein, hat eingepackt",
        translation: "упаковывать",
        usage: "Глагол. Формы: einpacken — packt ein — hat eingepackt.",
        pos: "verb",
        examples: [
          "Pack bitte die Handtücher ein! — Положи, пожалуйста, полотенца!"
        ]
      },
      {
        word: "einsteigen, steigt ein, ist eingestiegen",
        translation: "садиться (в транспорт)",
        usage: "Глагол. Формы: einsteigen — steigt ein — ist eingestiegen.",
        pos: "verb",
        examples: [
          "Schnell, steig ein, der Zug fährt gleich ab. — Быстрее, заходи, поезд сейчас отправится."
        ]
      },
      {
        word: "eintragen (sich), trägt ein, hat eingetragen",
        translation: "вносить (в список)",
        usage: "Глагол. Формы: eintragen (sich) — trägt ein — hat eingetragen.",
        pos: "verb",
        examples: [
          "Tragen Sie sich bitte in diese Liste ein! — Впишите, пожалуйста, себя в этот список!"
        ]
      },
      {
        word: "der Eintritt, -e",
        translation: "вход; входная плата",
        usage: "Существительное, мужской род. Мн. число: die Eintritte.",
        pos: "noun",
        examples: [
          "Der Eintritt kostet fünf Euro. — Вход стоит пять евро."
        ]
      },
      {
        word: "einverstanden sein",
        translation: "быть согласным",
        usage: "Служебное слово / наречие.",
        pos: "other",
        examples: [
          "Als Termin schlage ich den 11. Juni vor. – Gut, einverstanden. — В качестве даты предлагаю 11 июня. — Хорошо, согласен."
        ]
      },
      {
        word: "einzel-",
        translation: "отдельный; одиночный",
        usage: "Служебное слово / наречие.",
        pos: "other",
        examples: [
          "Florian ist ein Einzelkind. Er hat keine Geschwister. — Флориан — единственный ребёнок. У него нет братьев и сестёр."
        ]
      },
      {
        word: "einziehen, zieht ein, ist eingezogen",
        translation: "въезжать (в квартиру)",
        usage: "Глагол. Формы: einziehen — zieht ein — ist eingezogen.",
        pos: "verb",
        examples: [
          "Im Juni ziehen unsere neuen Nachbarn ein. — В июне к нам въедут новые соседи."
        ]
      },
      {
        word: "das Eis (Sg.)",
        translation: "мороженое; лёд",
        usage: "Существительное, средний род. Несчисляемое, мн. число не используется.",
        pos: "noun",
        examples: [
          "Möchtest du auch ein Eis? — Ты тоже хочешь мороженое?"
        ]
      },
      {
        word: "die (E-)Mail, -s",
        translation: "электронная почта",
        usage: "Существительное, женский род. Мн. число: die (E-)Mails.",
        pos: "noun",
        examples: [
          "Ich schreibe Ihnen eine E-Mail. — Я напишу вам электронное письмо."
        ]
      },
      {
        word: "der Empfänger, –",
        translation: "получатель",
        usage: "Существительное, мужской род. Мн. число: die Empfänger–.",
        pos: "noun",
        examples: [
          "Auf dem Brief steht dein Name, also bist du der Empfänger. — На письме твоё имя, значит ты получатель."
        ]
      },
      {
        word: "empfehlen, empfiehlt, hat empfohlen",
        translation: "рекомендовать",
        usage: "Глагол. Формы: empfehlen — empfiehlt — hat empfohlen.",
        pos: "verb",
        examples: [
          "Welchen Wein können Sie mir empfehlen? — Какое вино вы мне посоветуете?"
        ]
      },
      {
        word: "das Ende, -n",
        translation: "конец",
        usage: "Существительное, средний род. Мн. число: die Enden.",
        pos: "noun",
        examples: [
          "Sie wohnt am Ende der Straße. — Она живёт в конце улицы."
        ]
      },
      {
        word: "enden, endet, hat geendet",
        translation: "заканчиваться",
        usage: "Глагол. Формы: enden — endet — hat geendet.",
        pos: "verb",
        examples: [
          "Der Kurs endet in einer Woche. — Курс заканчивается через неделю."
        ]
      },
      {
        word: "endlich",
        translation: "наконец",
        usage: "Служебное слово / наречие.",
        pos: "other",
        examples: [
          "Endlich bist du da! — Наконец-то ты здесь!"
        ]
      },
      {
        word: "eng",
        translation: "узкий, тесный",
        usage: "Прилагательное. Склоняется по общим правилам.",
        pos: "adj",
        examples: [
          "Diese Hose ist zu eng. — Эти брюки слишком тесные."
        ]
      },
      {
        word: "entschuldigen (sich), entschuldigt, hat entschuldigt",
        translation: "извинять(ся)",
        usage: "Глагол. Формы: entschuldigen (sich) — entschuldigt — hat entschuldigt.",
        pos: "verb",
        examples: [
          "Entschuldigen Sie bitte! — Извините, пожалуйста!"
        ]
      },
      {
        word: "die Entschuldigung, -en",
        translation: "извинение, извините",
        usage: "Существительное, женский род. Мн. число: die Entschuldigungen.",
        pos: "noun",
        examples: [
          "Oh, Entschuldigung! – Macht nichts. — Ой, извините! — Ничего."
        ]
      },
      {
        word: "das Erdgeschoss, -e",
        translation: "первый этаж",
        usage: "Существительное, средний род. Мн. число: die Erdgeschosse.",
        pos: "noun",
        examples: [
          "Ich wohne im Erdgeschoss. — Я живу на первом этаже."
        ]
      },
      {
        word: "die Erfahrung, -en",
        translation: "опыт",
        usage: "Существительное, женский род. Мн. число: die Erfahrungen.",
        pos: "noun",
        examples: [
          "Ich habe zehn Jahre Erfahrung in diesem Beruf. — У меня десять лет опыта в этой профессии."
        ]
      },
      {
        word: "erinnern (sich), erinnert, hat erinnert",
        translation: "напоминать; (sich) помнить",
        usage: "Глагол. Формы: erinnern (sich) — erinnert — hat erinnert.",
        pos: "verb",
        examples: [
          "Erinnerst du dich an José? — Ты помнишь Хосе?"
        ]
      },
      {
        word: "erkältet sein",
        translation: "быть простуженным",
        usage: "Служебное слово / наречие.",
        pos: "other",
        examples: [
          "Lisa ist erkältet. Sie kann heute nicht zur Schule gehen. — Лиза простудилась. Сегодня она не может пойти в школу."
        ]
      },
      {
        word: "erklären, erklärt, hat erklärt",
        translation: "объяснять",
        usage: "Глагол. Формы: erklären — erklärt — hat erklärt.",
        pos: "verb",
        examples: [
          "Ich verstehe das nicht. Kannst du mir das erklären? — Я этого не понимаю. Можешь мне объяснить?"
        ]
      },
      {
        word: "erlauben, erlaubt, hat erlaubt",
        translation: "разрешать",
        usage: "Глагол. Формы: erlauben — erlaubt — hat erlaubt.",
        pos: "verb",
        examples: [
          "Ich habe es ihnen erlaubt. — Я им это разрешил."
        ]
      },
      {
        word: "erlaubt sein",
        translation: "быть разрешённым",
        usage: "Служебное слово / наречие.",
        pos: "other",
        examples: [
          "Parken ist hier nicht erlaubt. — Здесь парковаться запрещено."
        ]
      },
      {
        word: "die Erlaubnis (Sg.)",
        translation: "разрешение",
        usage: "Существительное, женский род. Несчисляемое, мн. число не используется.",
        pos: "noun",
        examples: [
          "Haben Sie eine Arbeitserlaubnis? — У вас есть разрешение на работу?"
        ]
      },
      {
        word: "die Ermäßigung, -en",
        translation: "скидка",
        usage: "Существительное, женский род. Мн. число: die Ermäßigungen.",
        pos: "noun",
        examples: [
          "Für Schüler, Studenten und Rentner gibt es eine Ermäßigung. — Для школьников, студентов и пенсионеров есть скидка."
        ]
      },
      {
        word: "erreichen, erreicht, hat erreicht",
        translation: "достигать, успевать",
        usage: "Глагол. Формы: erreichen — erreicht — hat erreicht.",
        pos: "verb",
        examples: [
          "Bis 18 Uhr können Sie mich im Büro erreichen. — До 18 часов вы можете застать меня в офисе."
        ]
      },
      {
        word: "erst",
        translation: "только (о времени); первый",
        usage: "Служебное слово / наречие.",
        pos: "other",
        examples: [
          "Wir können erst morgen kommen. — Мы сможем прийти только завтра."
        ]
      },
      {
        word: "der Erwachsene, -n",
        translation: "взрослый",
        usage: "Существительное, мужской род. Мн. число: die Erwachsenen.",
        pos: "noun",
        examples: [
          "Erwachsene zahlen zehn Euro, für Kinder ist der Eintritt frei. — Взрослые платят десять евро, для детей вход бесплатный."
        ]
      },
      {
        word: "erzählen, erzählt, hat erzählt",
        translation: "рассказывать",
        usage: "Глагол. Формы: erzählen — erzählt — hat erzählt.",
        pos: "verb",
        examples: [
          "Wir müssen euch etwas erzählen! — Нам надо вам кое-что рассказать!"
        ]
      },
      {
        word: "essen, isst, hat gegessen",
        translation: "есть, кушать",
        usage: "Глагол. Формы: essen — isst — hat gegessen.",
        pos: "verb",
        examples: [
          "Was gibt es zu essen? — Что есть поесть?"
        ]
      },
      {
        word: "das Essen, -",
        translation: "еда",
        usage: "Существительное, средний род. Мн. число: die Essen.",
        pos: "noun",
        examples: [
          "Das Essen in der Cafeteria ist meistens ganz gut. — Еда в кафетерии обычно вполне хорошая."
        ]
      },
      {
        word: "etwas",
        translation: "что-то, немного",
        usage: "Служебное слово / наречие.",
        pos: "other",
        examples: [
          "Ich muss dir etwas erzählen! — Мне надо тебе кое-что рассказать!"
        ]
      },
      {
        word: "das Fach, ¨-er",
        translation: "предмет (в школе); ячейка",
        usage: "Существительное, средний род. Мн. число: die Fächer.",
        pos: "noun",
        examples: [
          "Welches Fach magst du in der Schule am liebsten? — Какой предмет в школе тебе больше всего нравится?"
        ]
      },
      {
        word: "(ab)fahren, fährt (ab), ist (ab)gefahren",
        translation: "ехать, уезжать",
        usage: "Глагол. Формы: (ab)fahren — fährt (ab) — ist (ab)gefahren.",
        pos: "verb",
        examples: [
          "Ich fahre mit dem Auto zur Arbeit. — Я еду на работу на машине."
        ]
      },
      {
        word: "die Abfahrt, -en",
        translation: "отправление, отъезд",
        usage: "Существительное, женский род. Мн. число: die Abfahrten.",
        pos: "noun",
        examples: [
          "Wir haben noch zwanzig Minuten bis zur Abfahrt. — У нас ещё двадцать минут до отправления."
        ]
      },
      {
        word: "die Fahrkarte, -n",
        translation: "билет (на транспорт)",
        usage: "Существительное, женский род. Мн. число: die Fahrkarten.",
        pos: "noun",
        examples: [
          "Hast du schon eine Fahrkarte? — У тебя уже есть билет?"
        ]
      },
      {
        word: "der Fahrplan, ¨-e",
        translation: "расписание",
        usage: "Существительное, мужской род. Мн. число: die Fahrpläne.",
        pos: "noun",
        examples: [
          "Ist das der neue Fahrplan? — Это новое расписание?"
        ]
      },
      {
        word: "das (Fahr)Rad, ¨-er",
        translation: "велосипед",
        usage: "Существительное, средний род. Мн. число: die (Fahr)Räder.",
        pos: "noun",
        examples: [
          "Wenn es nicht regnet, fahre ich mit dem Fahrrad. — Если не будет дождя, я поеду на велосипеде."
        ]
      },
      {
        word: "fallen, fällt, ist gefallen",
        translation: "падать",
        usage: "Глагол. Формы: fallen — fällt — ist gefallen.",
        pos: "verb",
        examples: [
          "Pass auf, das Glas fällt gleich vom Tisch. — Осторожно, стакан сейчас упадёт со стола."
        ]
      },
      {
        word: "falsch",
        translation: "неправильный, ложный",
        usage: "Служебное слово / наречие.",
        pos: "other",
        examples: [
          "Die Lösung ist falsch. — Решение неверное."
        ]
      },
      {
        word: "die Familie, -n",
        translation: "семья",
        usage: "Существительное, женский род. Мн. число: die Familien.",
        pos: "noun",
        examples: [
          "Meine Familie lebt in Spanien. — Моя семья живёт в Испании."
        ]
      },
      {
        word: "der Familienname, -n",
        translation: "фамилия",
        usage: "Существительное, мужской род. Мн. число: die Familiennamen.",
        pos: "noun",
        examples: [
          "Mein Familienname ist González. — Моя фамилия Гонсалес."
        ]
      },
      {
        word: "der Fan, -s",
        translation: "фанат, болельщик",
        usage: "Существительное, мужской род. Мн. число: die Fans.",
        pos: "noun",
        examples: [
          "Er ist ein großer Fußballfan. — Он большой футбольный фанат."
        ]
      },
      {
        word: "fantastisch",
        translation: "фантастический",
        usage: "Прилагательное. Склоняется по общим правилам.",
        pos: "adj",
        examples: [
          "Dein neues Kleid sieht fantastisch aus! — Твоё новое платье выглядит фантастически!"
        ]
      },
      {
        word: "die Farbe, -n",
        translation: "цвет",
        usage: "Существительное, женский род. Мн. число: die Farben.",
        pos: "noun",
        examples: [
          "Die Farbe gefällt mir gut. — Этот цвет мне нравится."
        ]
      },
      {
        word: "fast",
        translation: "почти",
        usage: "Служебное слово / наречие.",
        pos: "other",
        examples: [
          "Der Film ist fast zu Ende. — Фильм почти закончился."
        ]
      },
      {
        word: "faul",
        translation: "ленивый",
        usage: "Прилагательное. Склоняется по общим правилам.",
        pos: "adj",
        examples: [
          "Heute sind wir faul: Wir machen keine Hausaufgaben. — Сегодня мы ленимся: не делаем домашнее задание."
        ]
      },
      {
        word: "fehlen, fehlt, hat gefehlt",
        translation: "отсутствовать, не хватать",
        usage: "Глагол. Формы: fehlen — fehlt — hat gefehlt.",
        pos: "verb",
        examples: [
          "Herr Müller fehlt schon seit drei Tagen. — Господин Мюллер отсутствует уже три дня."
        ]
      },
      {
        word: "der Fehler, -",
        translation: "ошибка",
        usage: "Существительное, мужской род. Мн. число: die Fehler.",
        pos: "noun",
        examples: [
          "Diesen Fehler mache ich immer wieder. — Эту ошибку я совершаю снова и снова."
        ]
      },
      {
        word: "die Feier, -n (z.B. Feierabend, Feiertag)",
        translation: "торжество, праздник",
        usage: "Существительное, женский род. Мн. число: die Feiern.",
        pos: "noun",
        examples: [
          "Wann hast du Feierabend? — Когда у тебя конец рабочего дня?"
        ]
      },
      {
        word: "feiern, feiert, hat gefeiert",
        translation: "праздновать",
        usage: "Глагол. Формы: feiern — feiert — hat gefeiert.",
        pos: "verb",
        examples: [
          "Wir feiern heute meinen Geburtstag. — Сегодня мы празднуем мой день рождения."
        ]
      },
      {
        word: "das Fenster, -",
        translation: "окно",
        usage: "Существительное, средний род. Мн. число: die Fenster.",
        pos: "noun",
        examples: [
          "Kannst du bitte das Fenster öffnen? — Можешь, пожалуйста, открыть окно?"
        ]
      },
      {
        word: "die Ferien (Pl.)",
        translation: "каникулы",
        usage: "Существительное, женский род, всегда во мн. числе.",
        pos: "noun",
        examples: [
          "Bald haben wir Ferien. — Скоро у нас каникулы."
        ]
      },
      {
        word: "fernsehen, sieht fern, hat ferngesehen",
        translation: "смотреть телевизор",
        usage: "Глагол. Формы: fernsehen — sieht fern — hat ferngesehen.",
        pos: "verb",
        examples: [
          "Lass uns heute Abend mal fernsehen. — Давай сегодня вечером посмотрим телевизор."
        ]
      },
      {
        word: "der Fernseher, -",
        translation: "телевизор",
        usage: "Существительное, мужской род. Мн. число: die Fernseher.",
        pos: "noun",
        examples: [
          "Der Fernseher ist kaputt. — Телевизор сломан."
        ]
      },
      {
        word: "fertig sein",
        translation: "быть готовым",
        usage: "Служебное слово / наречие.",
        pos: "other",
        examples: [
          "Das Essen ist gleich fertig. Kommst du? — Еда скоро будет готова. Ты идёшь?"
        ]
      },
      {
        word: "das Fest, -e",
        translation: "праздник",
        usage: "Существительное, средний род. Мн. число: die Feste.",
        pos: "noun",
        examples: [
          "Am Wochenende feiern wir ein Fest. — В выходные мы устраиваем праздник."
        ]
      },
      {
        word: "das Festival, -s",
        translation: "фестиваль",
        usage: "Существительное, средний род. Мн. число: die Festivals.",
        pos: "noun",
        examples: [
          "Am Wochenende ist in der Stadt ein Musik-Festival. — В выходные в городе музыкальный фестиваль."
        ]
      },
      {
        word: "fett",
        translation: "жирный",
        usage: "Прилагательное. Склоняется по общим правилам.",
        pos: "adj",
        examples: [
          "Die Wurst ist mir zu fett. — Колбаса слишком жирная для меня."
        ]
      },
      {
        word: "das Fieber (Sg.)",
        translation: "температура, жар",
        usage: "Существительное, средний род. Несчисляемое, мн. число не используется.",
        pos: "noun",
        examples: [
          "Sie hat hohes Fieber. — У неё высокая температура."
        ]
      },
      {
        word: "der Film, -e",
        translation: "фильм",
        usage: "Существительное, мужской род. Мн. число: die Filme.",
        pos: "noun",
        examples: [
          "Ich möchte gern diesen Film sehen. — Я бы хотел посмотреть этот фильм."
        ]
      },
      {
        word: "finden, findet, hat gefunden",
        translation: "находить; считать",
        usage: "Глагол. Формы: finden — findet — hat gefunden.",
        pos: "verb",
        examples: [
          "Wir müssen den Schlüssel finden. — Нам надо найти ключ."
        ]
      },
      {
        word: "die Firma, -en",
        translation: "фирма, компания",
        usage: "Существительное, женский род. Мн. число: die Firmaen.",
        pos: "noun",
        examples: [
          "Er arbeitet jetzt bei einer anderen Firma. — Сейчас он работает в другой фирме."
        ]
      },
      {
        word: "der Fisch, -e",
        translation: "рыба",
        usage: "Существительное, мужской род. Мн. число: die Fische.",
        pos: "noun",
        examples: [
          "Fisch mag ich lieber als Fleisch. — Рыбу я люблю больше мяса."
        ]
      },
      {
        word: "fit sein",
        translation: "быть в форме",
        usage: "Служебное слово / наречие.",
        pos: "other",
        examples: [
          "Tom will fit sein. Er geht jeden Tag ins Fitnessstudio. — Том хочет быть в форме. Он каждый день ходит в фитнес-зал."
        ]
      },
      {
        word: "die Flasche, -n",
        translation: "бутылка",
        usage: "Существительное, женский род. Мн. число: die Flaschen.",
        pos: "noun",
        examples: [
          "Eine Flasche Mineralwasser, bitte! — Бутылку минералки, пожалуйста!"
        ]
      },
      {
        word: "das Fleisch (Sg.)",
        translation: "мясо",
        usage: "Существительное, средний род. Несчисляемое, мн. число не используется.",
        pos: "noun",
        examples: [
          "Fleisch mag ich nicht. — Мясо я не люблю."
        ]
      },
      {
        word: "fleißig",
        translation: "прилежный, старательный",
        usage: "Прилагательное. Склоняется по общим правилам.",
        pos: "adj",
        examples: [
          "Ibrahim ist sehr fleißig. — Ибрагим очень прилежный."
        ]
      },
      {
        word: "(ab)fliegen, fliegt (ab), ist (ab)geflogen",
        translation: "летать, улетать",
        usage: "Глагол. Формы: (ab)fliegen — fliegt (ab) — ist (ab)geflogen.",
        pos: "verb",
        examples: [
          "Ich fliege nicht gern; ich fahre lieber mit dem Zug. — Я не люблю летать; предпочитаю ездить на поезде."
        ]
      },
      {
        word: "der Flohmarkt, ¨-e",
        translation: "блошиный рынок",
        usage: "Существительное, мужской род. Мн. число: die Flohmärkte.",
        pos: "noun",
        examples: [
          "Ich gehe gern auf den Flohmarkt. — Я люблю ходить на блошиный рынок."
        ]
      },
      {
        word: "der Flug, ¨-e",
        translation: "полёт, авиарейс",
        usage: "Существительное, мужской род. Мн. число: die Flüge.",
        pos: "noun",
        examples: [
          "Ich möchte einen Flug nach Kanada buchen. — Я хочу забронировать рейс в Канаду."
        ]
      },
      {
        word: "der Flughafen, ¨",
        translation: "аэропорт",
        usage: "Существительное, мужской род. Мн. число: die Flughäfen.",
        pos: "noun",
        examples: [
          "Kannst du mich zum Flughafen bringen? — Можешь отвезти меня в аэропорт?"
        ]
      },
      {
        word: "das Flugzeug, -e",
        translation: "самолёт",
        usage: "Существительное, средний род. Мн. число: die Flugzeuge.",
        pos: "noun",
        examples: [
          "Das Flugzeug aus Berlin hat Verspätung. — Самолёт из Берлина опаздывает."
        ]
      },
      {
        word: "der Fluss, ¨-e",
        translation: "река",
        usage: "Существительное, мужской род. Мн. число: die Flüsse.",
        pos: "noun",
        examples: [
          "Der Rhein ist ein großer Fluss. — Рейн — большая река."
        ]
      },
      {
        word: "das Formular, -e",
        translation: "бланк",
        usage: "Существительное, средний род. Мн. число: die Formulare.",
        pos: "noun",
        examples: [
          "Sie müssen dieses Formular ausfüllen. — Вам нужно заполнить этот бланк."
        ]
      },
      {
        word: "der Fotoapparat, -e",
        translation: "фотоаппарат",
        usage: "Существительное, мужской род. Мн. число: die Fotoapparate.",
        pos: "noun",
        examples: [
          "Ich möchte mir einen Fotoapparat kaufen. — Я хочу купить себе фотоаппарат."
        ]
      },
      {
        word: "fotografieren, fotografiert, hat fotografiert",
        translation: "фотографировать",
        usage: "Глагол. Формы: fotografieren — fotografiert — hat fotografiert.",
        pos: "verb",
        examples: [
          "Ich fotografiere gern. — Я люблю фотографировать."
        ]
      },
      {
        word: "das Foto, -s",
        translation: "фотография",
        usage: "Существительное, средний род. Мн. число: die Fotos.",
        pos: "noun",
        examples: [
          "Darf ich ein Foto machen? — Можно мне сделать фото?"
        ]
      },
      {
        word: "die Frage, -n",
        translation: "вопрос",
        usage: "Существительное, женский род. Мн. число: die Fragen.",
        pos: "noun",
        examples: [
          "Ich habe eine Frage. — У меня вопрос."
        ]
      },
      {
        word: "fragen, fragt, hat gefragt",
        translation: "спрашивать",
        usage: "Глагол. Формы: fragen — fragt — hat gefragt.",
        pos: "verb",
        examples: [
          "Er fragt, wann er kommen kann. — Он спрашивает, когда он может прийти."
        ]
      },
      {
        word: "die Frau, -en",
        translation: "женщина; госпожа; жена",
        usage: "Существительное, женский род. Мн. число: die Frauen.",
        pos: "noun",
        examples: [
          "Das ist Frau Becker. — Это госпожа Беккер."
        ]
      },
      {
        word: "frei",
        translation: "свободный",
        usage: "Прилагательное. Склоняется по общим правилам.",
        pos: "adj",
        examples: [
          "Entschuldigung, ist dieser Platz noch frei? — Извините, это место ещё свободно?"
        ]
      },
      {
        word: "freiwillig",
        translation: "добровольный",
        usage: "Прилагательное. Склоняется по общим правилам.",
        pos: "adj",
        examples: [
          "Manchmal bleibe ich freiwillig länger im Büro. — Иногда я добровольно задерживаюсь в офисе."
        ]
      },
      {
        word: "die Freizeit (Sg.)",
        translation: "свободное время",
        usage: "Существительное, женский род. Несчисляемое, мн. число не используется.",
        pos: "noun",
        examples: [
          "In meiner Freizeit spiele ich oft Fußball. — В свободное время я часто играю в футбол."
        ]
      },
      {
        word: "fremd",
        translation: "чужой, незнакомый",
        usage: "Прилагательное. Склоняется по общим правилам.",
        pos: "adj",
        examples: [
          "Das weiß ich nicht; ich bin fremd hier. — Этого я не знаю; я здесь чужой."
        ]
      },
      {
        word: "freuen (sich), freut, hat gefreut",
        translation: "радовать(ся) (sich)",
        usage: "Глагол. Формы: freuen (sich) — freut — hat gefreut.",
        pos: "verb",
        examples: [
          "Ich freue mich sehr über das Geschenk. — Я очень рад подарку."
        ]
      },
      {
        word: "der Freund, -e / die Freundin, -nen",
        translation: "друг",
        usage: "Существительное, мужской род. Мн. число: die Freunde.",
        pos: "noun",
        examples: [
          "Das ist ein Freund von mir. — Это мой друг."
        ]
      },
      {
        word: "freundlich",
        translation: "дружелюбный, приветливый",
        usage: "Прилагательное. Склоняется по общим правилам.",
        pos: "adj",
        examples: [
          "Er ist immer sehr freundlich zu mir. — Он всегда очень приветлив со мной."
        ]
      },
      {
        word: "frisch",
        translation: "свежий",
        usage: "Прилагательное. Склоняется по общим правилам.",
        pos: "adj",
        examples: [
          "Das Brot ist noch ganz frisch. — Хлеб ещё совсем свежий."
        ]
      },
      {
        word: "froh",
        translation: "радостный",
        usage: "Прилагательное. Склоняется по общим правилам.",
        pos: "adj",
        examples: [
          "Ich bin froh, dass du kommen kannst. — Я рад, что ты можешь прийти."
        ]
      },
      {
        word: "früh",
        translation: "ранний; рано",
        usage: "Прилагательное. Склоняется по общим правилам.",
        pos: "adj",
        examples: [
          "Sechs Uhr ist mir zu früh. — Шесть часов для меня слишком рано."
        ]
      },
      {
        word: "früher",
        translation: "раньше",
        usage: "Служебное слово / наречие.",
        pos: "other",
        examples: [
          "Früher habe ich in Berlin gewohnt. — Раньше я жил в Берлине."
        ]
      },
      {
        word: "das Frühstück (Sg.)",
        translation: "завтрак",
        usage: "Существительное, средний род. Несчисляемое, мн. число не используется.",
        pos: "noun",
        examples: [
          "Möchtest du ein Ei zum Frühstück? — Хочешь яйцо на завтрак?"
        ]
      },
      {
        word: "frühstücken, frühstückt, hat gefrühstückt",
        translation: "завтракать",
        usage: "Глагол. Формы: frühstücken — frühstückt — hat gefrühstückt.",
        pos: "verb",
        examples: [
          "Ich frühstücke immer um 9:00 Uhr. — Я всегда завтракаю в 9:00."
        ]
      },
      {
        word: "fühlen (sich), fühlt, hat gefühlt",
        translation: "чувствовать",
        usage: "Глагол. Формы: fühlen (sich) — fühlt — hat gefühlt.",
        pos: "verb",
        examples: [
          "Wie fühlen Sie sich? — Как вы себя чувствуете?"
        ]
      },
      {
        word: "der Führerschein, -e",
        translation: "водительские права",
        usage: "Существительное, мужской род. Мн. число: die Führerscheine.",
        pos: "noun",
        examples: [
          "Hast du den Führerschein? — У тебя есть права?"
        ]
      },
      {
        word: "die Führung, -en",
        translation: "экскурсия; руководство",
        usage: "Существительное, женский род. Мн. число: die Führungen.",
        pos: "noun",
        examples: [
          "Die nächste Führung beginnt um 15 Uhr. — Следующая экскурсия начинается в 15:00."
        ]
      },
      {
        word: "die Fundsachen (Pl.)",
        translation: "бюро находок",
        usage: "Существительное, женский род, всегда во мн. числе.",
        pos: "noun",
        examples: [
          "Sie können dort bei den Fundsachen schauen. — Можете посмотреть там в бюро находок."
        ]
      },
      {
        word: "für",
        translation: "для",
        usage: "Служебное слово / наречие.",
        pos: "other",
        examples: [
          "Das Paket ist für Sie. — Эта посылка для вас."
        ]
      },
      {
        word: "furchtbar",
        translation: "ужасный",
        usage: "Прилагательное. Склоняется по общим правилам.",
        pos: "adj",
        examples: [
          "Er hat furchtbare Schmerzen. — У него ужасные боли."
        ]
      },
      {
        word: "der Fuß, ¨-e",
        translation: "нога, стопа",
        usage: "Существительное, мужской род. Мн. число: die Füße.",
        pos: "noun",
        examples: [
          "Gehen Sie zu Fuß zur Arbeit? — Вы ходите на работу пешком?"
        ]
      },
      {
        word: "der Fußball, ¨-e",
        translation: "футбол",
        usage: "Существительное, мужской род. Мн. число: die Fußbälle.",
        pos: "noun",
        examples: [
          "Spielt ihr gern Fußball? — Вы любите играть в футбол?"
        ]
      },
      {
        word: "die Gabel, -n",
        translation: "вилка",
        usage: "Существительное, женский род. Мн. число: die Gabeln.",
        pos: "noun",
        examples: [
          "Kann ich bitte eine Gabel haben? — Можно мне, пожалуйста, вилку?"
        ]
      },
      {
        word: "ganz",
        translation: "весь; совсем",
        usage: "Служебное слово / наречие.",
        pos: "other",
        examples: [
          "Morgen haben wir den ganzen Tag Schule. — Завтра у нас весь день школа."
        ]
      },
      {
        word: "die Garage, -n",
        translation: "гараж",
        usage: "Существительное, женский род. Мн. число: die Garagen.",
        pos: "noun",
        examples: [
          "Hier ist eine Garage für dein Auto. — Вот гараж для твоей машины."
        ]
      },
      {
        word: "der Garten, ¨",
        translation: "сад",
        usage: "Существительное, мужской род. Мн. число: die Gärten.",
        pos: "noun",
        examples: [
          "Wir haben leider keinen Garten. — К сожалению, у нас нет сада."
        ]
      },
      {
        word: "der Gast, ¨-e",
        translation: "гость",
        usage: "Существительное, мужской род. Мн. число: die Gäste.",
        pos: "noun",
        examples: [
          "Heute Abend haben wir Gäste. — Сегодня вечером у нас гости."
        ]
      },
      {
        word: "geben, gibt, hat gegeben",
        translation: "давать",
        usage: "Глагол. Формы: geben — gibt — hat gegeben.",
        pos: "verb",
        examples: [
          "Kannst du mir mal deinen Stift geben? — Можешь дать мне свою ручку?"
        ]
      },
      {
        word: "geboren",
        translation: "рождён(а)",
        usage: "Прилагательное. Склоняется по общим правилам.",
        pos: "adj",
        examples: [
          "Ich bin in Zagreb geboren. — Я родился в Загребе."
        ]
      },
      {
        word: "Geburts- (jahr, ort, tag)",
        translation: "рожд- (в составных: Geburtstag, Geburtsort)",
        usage: "Служебное слово / наречие.",
        pos: "other",
        examples: [
          "Herzlichen Glückwunsch zum Geburtstag! — Сердечные поздравления с днём рождения!"
        ]
      },
      {
        word: "geehrt-",
        translation: "уважаемый",
        usage: "Прилагательное. Склоняется по общим правилам.",
        pos: "adj",
        examples: [
          "Sehr geehrte Damen und Herren, — Уважаемые дамы и господа,"
        ]
      },
      {
        word: "gefährlich",
        translation: "опасный",
        usage: "Прилагательное. Склоняется по общим правилам.",
        pos: "adj",
        examples: [
          "Du darfst nicht bei Rot über die Straße gehen. Das ist gefährlich. — На красный свет нельзя переходить дорогу. Это опасно."
        ]
      },
      {
        word: "gefallen, gefällt, hat gefallen",
        translation: "нравиться",
        usage: "Глагол. Формы: gefallen — gefällt — hat gefallen.",
        pos: "verb",
        examples: [
          "Das Bild gefällt mir. — Картина мне нравится."
        ]
      },
      {
        word: "gegen",
        translation: "против; около (времени)",
        usage: "Служебное слово / наречие.",
        pos: "other",
        examples: [
          "Ich bin gegen diesen Vorschlag. — Я против этого предложения."
        ]
      },
      {
        word: "das Gegenteil, -e",
        translation: "противоположность",
        usage: "Существительное, средний род. Мн. число: die Gegenteile.",
        pos: "noun",
        examples: [
          "Das Gegenteil von klein ist gross. — Противоположность маленького — большой."
        ]
      },
      {
        word: "gegenüber",
        translation: "напротив",
        usage: "Служебное слово / наречие.",
        pos: "other",
        examples: [
          "Die Post ist gegenüber vom Bahnhof. — Почта напротив вокзала."
        ]
      },
      {
        word: "das Gehalt, ¨-er",
        translation: "зарплата",
        usage: "Существительное, средний род. Мн. число: die Gehälter.",
        pos: "noun",
        examples: [
          "Sie ist mit ihrem Gehalt zufrieden. — Она довольна своей зарплатой."
        ]
      },
      {
        word: "gehen, geht, ist gegangen",
        translation: "идти",
        usage: "Глагол. Формы: gehen — geht — ist gegangen.",
        pos: "verb",
        examples: [
          "Wie geht&apos;s? – Es geht. — Как дела? — Нормально."
        ]
      },
      {
        word: "gehören, gehört, hat gehört",
        translation: "принадлежать",
        usage: "Глагол. Формы: gehören — gehört — hat gehört.",
        pos: "verb",
        examples: [
          "Gehört der Stift dir? — Это твоя ручка?"
        ]
      },
      {
        word: "das Geld (Sg.)",
        translation: "деньги",
        usage: "Существительное, средний род. Несчисляемое, мн. число не используется.",
        pos: "noun",
        examples: [
          "Hast du noch Geld? — У тебя ещё есть деньги?"
        ]
      },
      {
        word: "die Geldbörse, -n",
        translation: "кошелёк",
        usage: "Существительное, женский род. Мн. число: die Geldbörsen.",
        pos: "noun",
        examples: [
          "Sie hat ihre Geldbörse verloren. — Она потеряла свой кошелёк."
        ]
      },
      {
        word: "das Gemüse (Sg.)",
        translation: "овощи",
        usage: "Существительное, средний род. Несчисляемое, мн. число не используется.",
        pos: "noun",
        examples: [
          "Wir kaufen das Gemüse immer auf dem Markt. — Мы всегда покупаем овощи на рынке."
        ]
      },
      {
        word: "genau",
        translation: "точно",
        usage: "Служебное слово / наречие.",
        pos: "other",
        examples: [
          "Sind Sie sicher? – Ja, das weiß ich genau. — Вы уверены? — Да, я знаю это точно."
        ]
      },
      {
        word: "genug",
        translation: "достаточно",
        usage: "Служебное слово / наречие.",
        pos: "other",
        examples: [
          "Ich verdiene nicht genug. — Я зарабатываю недостаточно."
        ]
      },
      {
        word: "das Gepäck (Sg.)",
        translation: "багаж",
        usage: "Существительное, средний род. Несчисляемое, мн. число не используется.",
        pos: "noun",
        examples: [
          "Wollen Sie Ihr Gepäck mitnehmen? — Вы возьмёте свой багаж с собой?"
        ]
      },
      {
        word: "gerade",
        translation: "прямо; как раз",
        usage: "Служебное слово / наречие.",
        pos: "other",
        examples: [
          "Kannst du später anrufen? Wir essen gerade. — Можешь позвонить позже? Мы как раз едим."
        ]
      },
      {
        word: "geradeaus",
        translation: "прямо (вперёд)",
        usage: "Служебное слово / наречие.",
        pos: "other",
        examples: [
          "Gehen Sie immer geradeaus! — Идите всё время прямо!"
        ]
      },
      {
        word: "das Gerät, -e",
        translation: "устройство, прибор",
        usage: "Существительное, средний род. Мн. число: die Geräte.",
        pos: "noun",
        examples: [
          "Elektrogeräte finden Sie im dritten Stock. — Электроприборы вы найдёте на третьем этаже."
        ]
      },
      {
        word: "das Gericht, -e",
        translation: "блюдо; суд",
        usage: "Существительное, средний род. Мн. число: die Gerichte.",
        pos: "noun",
        examples: [
          "Mein Lieblingsgericht ist Pizza. — Моё любимое блюдо — пицца."
        ]
      },
      {
        word: "gern, lieber, am liebsten",
        translation: "охотно, с удовольствием",
        usage: "Служебное слово / наречие.",
        pos: "other",
        examples: [
          "Kaffee oder Tee? – Ich trinke lieber einen Tee. — Кофе или чай? — Я лучше выпью чай."
        ]
      },
      {
        word: "das Geschäft, -e",
        translation: "магазин; дело",
        usage: "Существительное, средний род. Мн. число: die Geschäfte.",
        pos: "noun",
        examples: [
          "Die Geschäfte schließen um 18.30 Uhr. — Магазины закрываются в 18:30."
        ]
      },
      {
        word: "das Geschenk, -e",
        translation: "подарок",
        usage: "Существительное, средний род. Мн. число: die Geschenke.",
        pos: "noun",
        examples: [
          "Danke für das schöne Geschenk. — Спасибо за красивый подарок."
        ]
      },
      {
        word: "die Geschichte, -n",
        translation: "история",
        usage: "Существительное, женский род. Мн. число: die Geschichten.",
        pos: "noun",
        examples: [
          "Erzählst du mir eine Geschichte? — Расскажешь мне историю?"
        ]
      },
      {
        word: "das Geschirr (Sg.)",
        translation: "посуда",
        usage: "Существительное, средний род. Несчисляемое, мн. число не используется.",
        pos: "noun",
        examples: [
          "Stellst du bitte das Geschirr in den Schrank? — Поставишь, пожалуйста, посуду в шкаф?"
        ]
      },
      {
        word: "das Gesicht, -er",
        translation: "лицо",
        usage: "Существительное, средний род. Мн. число: die Gesichter.",
        pos: "noun",
        examples: [
          "Wasch dir bitte das Gesicht. — Помой, пожалуйста, лицо."
        ]
      },
      {
        word: "das Gespräch, -e",
        translation: "разговор",
        usage: "Существительное, средний род. Мн. число: die Gespräche.",
        pos: "noun",
        examples: [
          "Das Gespräch mit Frau Kunz ist um 14 Uhr. — Разговор с госпожой Кунц — в 14:00."
        ]
      },
      {
        word: "gestern",
        translation: "вчера",
        usage: "Служебное слово / наречие.",
        pos: "other",
        examples: [
          "Gestern wollte ich dich anrufen. — Вчера я хотел тебе позвонить."
        ]
      },
      {
        word: "gesund",
        translation: "здоровый",
        usage: "Прилагательное. Склоняется по общим правилам.",
        pos: "adj",
        examples: [
          "Ich hatte Grippe. Jetzt bin ich wieder gesund. — У меня был грипп. Теперь я снова здоров."
        ]
      },
      {
        word: "die Gesundheit (Sg.)",
        translation: "здоровье",
        usage: "Существительное, женский род. Несчисляемое, мн. число не используется.",
        pos: "noun",
        examples: [
          "Gesundheit! Sind Sie erkältet? — Будьте здоровы! Вы простудились?"
        ]
      },
      {
        word: "das Getränk, -e",
        translation: "напиток",
        usage: "Существительное, средний род. Мн. число: die Getränke.",
        pos: "noun",
        examples: [
          "Mein Lieblingsgetränk ist Tomatensaft. — Мой любимый напиток — томатный сок."
        ]
      },
      {
        word: "gewinnen, gewinnt, hat gewonnen",
        translation: "выигрывать",
        usage: "Глагол. Формы: gewinnen — gewinnt — hat gewonnen.",
        pos: "verb",
        examples: [
          "Unsere Mannschaft hat gewonnen. — Наша команда выиграла."
        ]
      },
      {
        word: "das Gewitter, -",
        translation: "гроза",
        usage: "Существительное, средний род. Мн. число: die Gewitter.",
        pos: "noun",
        examples: [
          "Ich glaube, es gibt heute ein Gewitter. — Думаю, сегодня будет гроза."
        ]
      },
      {
        word: "die Gitarre, -n",
        translation: "гитара",
        usage: "Существительное, женский род. Мн. число: die Gitarren.",
        pos: "noun",
        examples: [
          "Er kann gut Gitarre spielen. — Он хорошо играет на гитаре."
        ]
      },
      {
        word: "das Glas, ¨-er",
        translation: "стакан; стекло",
        usage: "Существительное, средний род. Мн. число: die Gläser.",
        pos: "noun",
        examples: [
          "Bitte noch ein Glas Apfelsaft! — Пожалуйста, ещё стакан яблочного сока!"
        ]
      },
      {
        word: "glauben, glaubt, hat geglaubt",
        translation: "верить, думать",
        usage: "Глагол. Формы: glauben — glaubt — hat geglaubt.",
        pos: "verb",
        examples: [
          "Ich glaube, er kommt gleich. — Думаю, он сейчас придёт."
        ]
      },
      {
        word: "gleich",
        translation: "одинаковый; сейчас",
        usage: "Служебное слово / наречие.",
        pos: "other",
        examples: [
          "Ich komme gleich. Wir sind gleich alt. — Я сейчас приду. Мы ровесники."
        ]
      },
      {
        word: "das Gleis, -e",
        translation: "путь (железнодорожный)",
        usage: "Существительное, средний род. Мн. число: die Gleise.",
        pos: "noun",
        examples: [
          "Der ICE nach Berlin hält heute an Gleis 12. — Поезд ICE в Берлин сегодня прибывает на 12-й путь."
        ]
      },
      {
        word: "das Glück (Sg.)",
        translation: "счастье, удача",
        usage: "Существительное, средний род. Несчисляемое, мн. число не используется.",
        pos: "noun",
        examples: [
          "Viel Glück! — Удачи!"
        ]
      },
      {
        word: "glücklich",
        translation: "счастливый",
        usage: "Прилагательное. Склоняется по общим правилам.",
        pos: "adj",
        examples: [
          "Meine Tochter ist glücklich verheiratet. — Моя дочь счастливо замужем."
        ]
      },
      {
        word: "der Glückwunsch, ¨-e",
        translation: "поздравление",
        usage: "Существительное, мужской род. Мн. число: die Glückwünsche.",
        pos: "noun",
        examples: [
          "Herzlichen Glückwunsch zum Geburtstag! — Сердечные поздравления с днём рождения!"
        ]
      },
      {
        word: "gratulieren, gratuliert, hat gratuliert",
        translation: "поздравлять",
        usage: "Глагол. Формы: gratulieren — gratuliert — hat gratuliert.",
        pos: "verb",
        examples: [
          "Ich gratuliere dir! — Поздравляю тебя!"
        ]
      },
      {
        word: "grillen, grillt, hat gegrillt",
        translation: "жарить на гриле",
        usage: "Глагол. Формы: grillen — grillt — hat gegrillt.",
        pos: "verb",
        examples: [
          "Heute grillen wir im Garten. — Сегодня мы жарим в саду на гриле."
        ]
      },
      {
        word: "die Grippe (Sg.)",
        translation: "грипп",
        usage: "Существительное, женский род. Несчисляемое, мн. число не используется.",
        pos: "noun",
        examples: [
          "Ich habe eine Grippe und kann leider nicht kommen. — У меня грипп, и я, к сожалению, не могу прийти."
        ]
      },
      {
        word: "groß",
        translation: "большой",
        usage: "Прилагательное. Склоняется по общим правилам.",
        pos: "adj",
        examples: [
          "Mein Bruder und ich sind gleich groß. — Мы с братом одинакового роста."
        ]
      },
      {
        word: "die Größe, -n",
        translation: "размер",
        usage: "Существительное, женский род. Мн. число: die Größen.",
        pos: "noun",
        examples: [
          "Haben Sie das T-Shirt auch in Größe M? — У вас есть эта футболка размера M?"
        ]
      },
      {
        word: "die Gruppe, -n",
        translation: "группа",
        usage: "Существительное, женский род. Мн. число: die Gruppen.",
        pos: "noun",
        examples: [
          "Die erste Gruppe beginnt um 16 Uhr. — Первая группа начинает в 16:00."
        ]
      },
      {
        word: "der Gruß, ¨-e",
        translation: "привет, приветствие",
        usage: "Существительное, мужской род. Мн. число: die Grüße.",
        pos: "noun",
        examples: [
          "Viele Grüße an Ihre Frau. — Большой привет вашей жене."
        ]
      },
      {
        word: "gültig sein",
        translation: "быть действительным",
        usage: "Служебное слово / наречие.",
        pos: "other",
        examples: [
          "Der Pass ist nicht mehr gültig. — Паспорт больше не действителен."
        ]
      },
      {
        word: "günstig",
        translation: "выгодный, удобный",
        usage: "Прилагательное. Склоняется по общим правилам.",
        pos: "adj",
        examples: [
          "In diesem Laden gibt es immer günstige Angebote. — В этом магазине всегда выгодные предложения."
        ]
      },
      {
        word: "gut, besser, am besten",
        translation: "хороший; хорошо",
        usage: "Прилагательное. Склоняется по общим правилам.",
        pos: "adj",
        examples: [
          "Das finde ich gut. — Это мне кажется хорошо."
        ]
      },
      {
        word: "das Haar, -e",
        translation: "волосы",
        usage: "Существительное, средний род. Мн. число: die Haare.",
        pos: "noun",
        examples: [
          "Sie hat lange Haare. — У неё длинные волосы."
        ]
      },
      {
        word: "haben, hat, hatte, hat gehabt",
        translation: "иметь",
        usage: "Глагол. Формы: haben — hat — hatte — hat gehabt.",
        pos: "verb",
        examples: [
          "Ich habe ein neues Auto. — У меня новая машина."
        ]
      },
      {
        word: "das Hähnchen, -",
        translation: "курица (жареная)",
        usage: "Существительное, средний род. Мн. число: die Hähnchen.",
        pos: "noun",
        examples: [
          "Ein Hähnchen mit Pommes, bitte! — Курицу с картофелем фри, пожалуйста!"
        ]
      },
      {
        word: "die Halle, -n",
        translation: "зал",
        usage: "Существительное, женский род. Мн. число: die Hallen.",
        pos: "noun",
        examples: [
          "Wir treffen uns in Halle B. — Встречаемся в зале B."
        ]
      },
      {
        word: "hallo",
        translation: "привет",
        usage: "Служебное слово / наречие.",
        pos: "other",
        examples: [
          "Hallo Inge! Wie geht&apos;s? — Привет, Инге! Как дела?"
        ]
      },
      {
        word: "der Hals, ¨-e",
        translation: "шея; горло",
        usage: "Существительное, мужской род. Мн. число: die Hälse.",
        pos: "noun",
        examples: [
          "Mir tut der Hals weh. — У меня болит горло."
        ]
      },
      {
        word: "halten, hält, hat gehalten",
        translation: "держать; останавливаться",
        usage: "Глагол. Формы: halten — hält — hat gehalten.",
        pos: "verb",
        examples: [
          "Dieser Zug hält nicht in Rüdesheim. — Этот поезд не останавливается в Рюдесхайме."
        ]
      },
      {
        word: "die Haltestelle, -n",
        translation: "остановка",
        usage: "Существительное, женский род. Мн. число: die Haltestellen.",
        pos: "noun",
        examples: [
          "An der nächsten Haltestelle müssen Sie aussteigen. — На следующей остановке вам нужно выйти."
        ]
      },
      {
        word: "der Hamburger, -",
        translation: "гамбургер",
        usage: "Существительное, мужской род. Мн. число: die Hamburger.",
        pos: "noun",
        examples: [
          "Einen Hamburger ohne Salat, bitte. — Гамбургер без салата, пожалуйста."
        ]
      },
      {
        word: "die Hand, ¨-e",
        translation: "рука (кисть)",
        usage: "Существительное, женский род. Мн. число: die Hände.",
        pos: "noun",
        examples: [
          "Wasch dir bitte die Hände vor dem Essen. — Пожалуйста, помой руки перед едой."
        ]
      },
      {
        word: "das Handtuch, ¨-er",
        translation: "полотенце",
        usage: "Существительное, средний род. Мн. число: die Handtücher.",
        pos: "noun",
        examples: [
          "Gibst du mir bitte ein frisches Handtuch? — Дашь мне, пожалуйста, свежее полотенце?"
        ]
      },
      {
        word: "das Handy, -s",
        translation: "мобильный телефон",
        usage: "Существительное, средний род. Мн. число: die Handys.",
        pos: "noun",
        examples: [
          "Kannst du mir bitte deine Handynummer geben? — Можешь дать мне свой мобильный номер?"
        ]
      },
      {
        word: "hängen, hängt, hat gehangen/gehängt",
        translation: "висеть; вешать",
        usage: "Глагол. Формы: hängen — hängt — hat gehangen/gehängt.",
        pos: "verb",
        examples: [
          "Im Museum hängen moderne Bilder. — В музее висят современные картины."
        ]
      },
      {
        word: "hart",
        translation: "твёрдый, жёсткий",
        usage: "Прилагательное. Склоняется по общим правилам.",
        pos: "adj",
        examples: [
          "Ich finde das Bett zu hart. — Кровать кажется мне слишком жёсткой."
        ]
      },
      {
        word: "hässlich",
        translation: "уродливый",
        usage: "Прилагательное. Склоняется по общим правилам.",
        pos: "adj",
        examples: [
          "Ich finde das Kleid hässlich. — Платье мне кажется уродливым."
        ]
      },
      {
        word: "die Hauptstadt, ¨-e",
        translation: "столица",
        usage: "Существительное, женский род. Мн. число: die Hauptstädte.",
        pos: "noun",
        examples: [
          "Berlin ist die Hauptstadt von Deutschland. — Берлин — столица Германии."
        ]
      },
      {
        word: "das Haus, ¨-er",
        translation: "дом",
        usage: "Существительное, средний род. Мн. число: die Haüser.",
        pos: "noun",
        examples: [
          "In welchem Haus wohnst du? — В каком доме ты живёшь?"
        ]
      },
      {
        word: "der Haushalt, -e",
        translation: "домашнее хозяйство",
        usage: "Существительное, мужской род. Мн. число: die Haushalte.",
        pos: "noun",
        examples: [
          "Wer macht bei euch den Haushalt? — Кто у вас ведёт хозяйство?"
        ]
      },
      {
        word: "das Heft, -e",
        translation: "тетрадь",
        usage: "Существительное, средний род. Мн. число: die Hefte.",
        pos: "noun",
        examples: [
          "Hast du dein Heft dabei? — У тебя с собой тетрадь?"
        ]
      },
      {
        word: "die Heimat (Sg.)",
        translation: "родина",
        usage: "Существительное, женский род. Несчисляемое, мн. число не используется.",
        pos: "noun",
        examples: [
          "Ich komme aus der Schweiz. Das ist meine Heimat. — Я из Швейцарии. Это моя родина."
        ]
      },
      {
        word: "heiraten, heiratet, hat geheiratet",
        translation: "жениться, выходить замуж",
        usage: "Глагол. Формы: heiraten — heiratet — hat geheiratet.",
        pos: "verb",
        examples: [
          "Meine Schwester heiratet nächsten Monat. — Моя сестра выходит замуж в следующем месяце."
        ]
      },
      {
        word: "heiß",
        translation: "горячий",
        usage: "Прилагательное. Склоняется по общим правилам.",
        pos: "adj",
        examples: [
          "Vorsicht, der Tee ist heiß! — Осторожно, чай горячий!"
        ]
      },
      {
        word: "heißen, heißt, hat geheißen",
        translation: "зваться, называться",
        usage: "Глагол. Формы: heißen — heißt — hat geheißen.",
        pos: "verb",
        examples: [
          "Ich heiße Charlotte Meier. — Меня зовут Шарлотта Майер."
        ]
      },
      {
        word: "die Heizung, -en",
        translation: "отопление",
        usage: "Существительное, женский род. Мн. число: die Heizungen.",
        pos: "noun",
        examples: [
          "Es ist kalt. Ist die Heizung kaputt? — Холодно. Отопление сломалось?"
        ]
      },
      {
        word: "helfen, hilft, hat geholfen",
        translation: "помогать",
        usage: "Глагол. Формы: helfen — hilft — hat geholfen.",
        pos: "verb",
        examples: [
          "Würden Sie mir bitte helfen? — Вы могли бы мне помочь?"
        ]
      },
      {
        word: "hell",
        translation: "светлый",
        usage: "Прилагательное. Склоняется по общим правилам.",
        pos: "adj",
        examples: [
          "Im Sommer ist es bis 21 Uhr hell. — Летом светло до 21 часа."
        ]
      },
      {
        word: "das Hemd, -en",
        translation: "рубашка",
        usage: "Существительное, средний род. Мн. число: die Hemden.",
        pos: "noun",
        examples: [
          "Nick trägt heute ein neues Hemd. — Ник сегодня в новой рубашке."
        ]
      },
      {
        word: "her/her-/-her",
        translation: "сюда (направление к говорящему)",
        usage: "Служебное слово / наречие.",
        pos: "other",
        examples: [
          "Komm bitte mal her! — Подойди, пожалуйста, сюда!"
        ]
      },
      {
        word: "heraus/raus",
        translation: "наружу",
        usage: "Служебное слово / наречие.",
        pos: "other",
        examples: [
          "Möchtet ihr nicht rauskommen? — Не хотите выйти?"
        ]
      },
      {
        word: "herein/rein",
        translation: "внутрь",
        usage: "Служебное слово / наречие.",
        pos: "other",
        examples: [
          "Herein! Die Tür ist offen. — Войдите! Дверь открыта."
        ]
      },
      {
        word: "der Herd, -e",
        translation: "плита (кухонная)",
        usage: "Существительное, мужской род. Мн. число: die Herde.",
        pos: "noun",
        examples: [
          "In der neuen Küche fehlt noch der Herd. — На новой кухне ещё не хватает плиты."
        ]
      },
      {
        word: "der Herr, -en",
        translation: "господин",
        usage: "Существительное, мужской род. Мн. число: die Herren.",
        pos: "noun",
        examples: [
          "Guten Tag, Herr Sommer! — Здравствуйте, господин Зоммер!"
        ]
      },
      {
        word: "herstellen, stellt her, hat hergestellt",
        translation: "производить, изготавливать",
        usage: "Глагол. Формы: herstellen — stellt her — hat hergestellt.",
        pos: "verb",
        examples: [
          "In unserer Firma stellen wir Möbel her. — В нашей фирме мы производим мебель."
        ]
      },
      {
        word: "herunterladen, lädt herunter, hat heruntergeladen",
        translation: "скачивать",
        usage: "Глагол. Формы: herunterladen — lädt herunter — hat heruntergeladen.",
        pos: "verb",
        examples: [
          "Er lädt die Musik aus dem Internet herunter. — Он скачивает музыку из интернета."
        ]
      },
      {
        word: "herzlich",
        translation: "сердечный",
        usage: "Прилагательное. Склоняется по общим правилам.",
        pos: "adj",
        examples: [
          "Herzlichen Glückwunsch! — Сердечно поздравляю!"
        ]
      },
      {
        word: "heute",
        translation: "сегодня",
        usage: "Служебное слово / наречие.",
        pos: "other",
        examples: [
          "Heute ist ein schöner Tag. — Сегодня прекрасный день."
        ]
      },
      {
        word: "hier",
        translation: "здесь",
        usage: "Служебное слово / наречие.",
        pos: "other",
        examples: [
          "Hier wohne ich. — Вот здесь я живу."
        ]
      },
      {
        word: "die Hilfe (Sg.)",
        translation: "помощь",
        usage: "Существительное, женский род. Несчисляемое, мн. число не используется.",
        pos: "noun",
        examples: [
          "Hilfe! Bitte helfen Sie mir! — Помогите! Пожалуйста, помогите мне!"
        ]
      },
      {
        word: "der Himmel (Sg.)",
        translation: "небо",
        usage: "Существительное, мужской род. Несчисляемое, мн. число не используется.",
        pos: "noun",
        examples: [
          "Heute ist der Himmel blau und es gibt keine Wolken. — Сегодня небо голубое и нет облаков."
        ]
      },
      {
        word: "hin/hin-/-hin",
        translation: "туда (направление от говорящего)",
        usage: "Служебное слово / наречие.",
        pos: "other",
        examples: [
          "Wo gehst du hin? — Куда ты идёшь?"
        ]
      },
      {
        word: "hinten",
        translation: "сзади, позади",
        usage: "Служебное слово / наречие.",
        pos: "other",
        examples: [
          "Die Tür zum Aussteigen ist hinten. — Дверь для выхода — сзади."
        ]
      },
      {
        word: "hinter",
        translation: "за, позади",
        usage: "Служебное слово / наречие.",
        pos: "other",
        examples: [
          "Hinter dem Haus haben wir einen Garten. — За домом у нас сад."
        ]
      },
      {
        word: "das Hobby, -s",
        translation: "хобби",
        usage: "Существительное, средний род. Мн. число: die Hobbys.",
        pos: "noun",
        examples: [
          "Meine Hobbys sind Joggen und Schwimmen. — Мои хобби — бег и плавание."
        ]
      },
      {
        word: "hoch",
        translation: "высокий",
        usage: "Прилагательное. Склоняется по общим правилам.",
        pos: "adj",
        examples: [
          "Die Preise in diesem Laden sind sehr hoch. — Цены в этом магазине очень высокие."
        ]
      },
      {
        word: "die Hochzeit, -en",
        translation: "свадьба",
        usage: "Существительное, женский род. Мн. число: die Hochzeiten.",
        pos: "noun",
        examples: [
          "Zu seiner Hochzeit kommen mehr als einhundert Gäste. — На его свадьбу придёт больше ста гостей."
        ]
      },
      {
        word: "hoffen, hofft, hat gehofft",
        translation: "надеяться",
        usage: "Глагол. Формы: hoffen — hofft — hat gehofft.",
        pos: "verb",
        examples: [
          "Ich hoffe, dass es dir gut geht. — Надеюсь, у тебя всё хорошо."
        ]
      },
      {
        word: "hoffentlich",
        translation: "надеюсь",
        usage: "Служебное слово / наречие.",
        pos: "other",
        examples: [
          "Hoffentlich hat unser Zug keine Verspätung. — Надеюсь, наш поезд не опоздает."
        ]
      },
      {
        word: "holen, holt, hat geholt",
        translation: "приносить, забирать",
        usage: "Глагол. Формы: holen — holt — hat geholt.",
        pos: "verb",
        examples: [
          "Soll ich uns etwas zu trinken holen? — Принести нам что-нибудь попить?"
        ]
      },
      {
        word: "die Homepage, -s",
        translation: "домашняя страница, сайт",
        usage: "Существительное, женский род. Мн. число: die Homepages.",
        pos: "noun",
        examples: [
          "Auf der Homepage von Freiburg gibt es alle wichtigen Informationen. — На сайте Фрайбурга есть вся важная информация."
        ]
      },
      {
        word: "hören, hört, hat gehört",
        translation: "слышать, слушать",
        usage: "Глагол. Формы: hören — hört — hat gehört.",
        pos: "verb",
        examples: [
          "Hör mal! Was ist das? — Послушай! Что это?"
        ]
      },
      {
        word: "die Hose, -n",
        translation: "брюки",
        usage: "Существительное, женский род. Мн. число: die Hosen.",
        pos: "noun",
        examples: [
          "Kann ich die Hose waschen? — Можно постирать эти брюки?"
        ]
      },
      {
        word: "das Hotel, -s",
        translation: "отель, гостиница",
        usage: "Существительное, средний род. Мн. число: die Hotels.",
        pos: "noun",
        examples: [
          "Im Urlaub sind wir in einem Hotel am Meer. — В отпуске мы в отеле у моря."
        ]
      },
      {
        word: "der Hund, -e",
        translation: "собака",
        usage: "Существительное, мужской род. Мн. число: die Hunde.",
        pos: "noun",
        examples: [
          "Magst du Hunde? — Ты любишь собак?"
        ]
      },
      {
        word: "der Hunger (Sg.)",
        translation: "голод",
        usage: "Существительное, мужской род. Несчисляемое, мн. число не используется.",
        pos: "noun",
        examples: [
          "Ich habe Hunger! Wann können wir endlich essen? — Я хочу есть! Когда мы уже наконец поедим?"
        ]
      },
      {
        word: "husten, hustet, hat gehustet",
        translation: "кашлять",
        usage: "Глагол. Формы: husten — hustet — hat gehustet.",
        pos: "verb",
        examples: [
          "Sie hustet seit zwei Tagen. — Она кашляет уже два дня."
        ]
      },
      {
        word: "die Idee, -n",
        translation: "идея",
        usage: "Существительное, женский род. Мн. число: die Ideen.",
        pos: "noun",
        examples: [
          "Was machen wir heute Abend? Hast du eine gute Idee? — Что мы делаем сегодня вечером? У тебя есть хорошая идея?"
        ]
      },
      {
        word: "immer",
        translation: "всегда",
        usage: "Служебное слово / наречие.",
        pos: "other",
        examples: [
          "Frau Bast kommt immer zu spät. — Госпожа Баст всегда опаздывает."
        ]
      },
      {
        word: "in",
        translation: "в, во",
        usage: "Служебное слово / наречие.",
        pos: "other",
        examples: [
          "Ich wohne in Wiesbaden. — Я живу в Висбадене."
        ]
      },
      {
        word: "die Information, -en",
        translation: "информация",
        usage: "Существительное, женский род. Мн. число: die Informationen.",
        pos: "noun",
        examples: [
          "Wenn Sie Fragen haben, gehen Sie zur Information. — Если у вас есть вопросы, идите в справочную."
        ]
      },
      {
        word: "informieren (sich) (über), informiert, hat informiert",
        translation: "информировать",
        usage: "Глагол. Формы: informieren (sich) (über) — informiert — hat informiert.",
        pos: "verb",
        examples: [
          "Ich möchte mich vor der Reise über das Land informieren. — Перед поездкой я хочу узнать о стране."
        ]
      },
      {
        word: "die Insel, -n",
        translation: "остров",
        usage: "Существительное, женский род. Мн. число: die Inseln.",
        pos: "noun",
        examples: [
          "Rügen ist die größte deutsche Insel. — Рюген — самый большой немецкий остров."
        ]
      },
      {
        word: "das Instrument, -e",
        translation: "инструмент",
        usage: "Существительное, средний род. Мн. число: die Instrumente.",
        pos: "noun",
        examples: [
          "Ich spiele Klavier. Spielen Sie auch ein Instrument? — Я играю на пианино. Вы тоже играете на инструменте?"
        ]
      },
      {
        word: "intelligent",
        translation: "умный, интеллигентный",
        usage: "Прилагательное. Склоняется по общим правилам.",
        pos: "adj",
        examples: [
          "Einstein war sehr intelligent. — Эйнштейн был очень умным."
        ]
      },
      {
        word: "das Interesse, -n",
        translation: "интерес",
        usage: "Существительное, средний род. Мн. число: die Interessen.",
        pos: "noun",
        examples: [
          "Ich habe viele Interessen: Sport, Lesen, Kultur, Reisen. — У меня много интересов: спорт, чтение, культура, путешествия."
        ]
      },
      {
        word: "interessieren (sich), interessiert, hat interessiert",
        translation: "интересовать",
        usage: "Глагол. Формы: interessieren (sich) — interessiert — hat interessiert.",
        pos: "verb",
        examples: [
          "Ich interessiere mich für Fußball. — Я интересуюсь футболом."
        ]
      },
      {
        word: "interessant",
        translation: "интересный",
        usage: "Прилагательное. Склоняется по общим правилам.",
        pos: "adj",
        examples: [
          "Ich lese gerade ein interessantes Buch. — Я сейчас читаю интересную книгу."
        ]
      },
      {
        word: "international",
        translation: "международный",
        usage: "Прилагательное. Склоняется по общим правилам.",
        pos: "adj",
        examples: [
          "Unser Deutschkurs ist international. — Наш курс немецкого международный."
        ]
      },
      {
        word: "das Internet (Sg.)",
        translation: "интернет",
        usage: "Существительное, средний род. Несчисляемое, мн. число не используется.",
        pos: "noun",
        examples: [
          "Das findest du im Internet. — Это ты найдёшь в интернете."
        ]
      },
      {
        word: "das Interview, -s",
        translation: "интервью",
        usage: "Существительное, средний род. Мн. число: die Interviews.",
        pos: "noun",
        examples: [
          "Komm schnell! Im Radio kommt ein Interview mit deinem Lieblingssänger. — Быстрее! По радио интервью с твоим любимым певцом."
        ]
      },
      {
        word: "ja",
        translation: "да",
        usage: "Служебное слово / наречие.",
        pos: "other",
        examples: [
          "Sind Sie Herr Watanabe? – Ja. — Вы господин Ватанабэ? — Да."
        ]
      },
      {
        word: "die Jacke, -n",
        translation: "куртка",
        usage: "Существительное, женский род. Мн. число: die Jacken.",
        pos: "noun",
        examples: [
          "Zieh dir eine Jacke an. Es ist kalt. — Надень куртку. На улице холодно."
        ]
      },
      {
        word: "die Jeans (Pl.)",
        translation: "джинсы",
        usage: "Существительное, женский род, всегда во мн. числе.",
        pos: "noun",
        examples: [
          "Ich mag Jeans lieber als Röcke. — Я люблю джинсы больше юбок."
        ]
      },
      {
        word: "jeder, e, s",
        translation: "каждый",
        usage: "Служебное слово / наречие.",
        pos: "other",
        examples: [
          "Das Restaurant hat jeden Tag geöffnet. — Ресторан открыт каждый день."
        ]
      },
      {
        word: "jemand",
        translation: "кто-то",
        usage: "Служебное слово / наречие.",
        pos: "other",
        examples: [
          "Hat jemand meinen Stift? — У кого-то моя ручка?"
        ]
      },
      {
        word: "jetzt",
        translation: "сейчас",
        usage: "Служебное слово / наречие.",
        pos: "other",
        examples: [
          "Jetzt machen wir eine Pause. — Сейчас мы делаем перерыв."
        ]
      },
      {
        word: "der Job, -s",
        translation: "работа, подработка",
        usage: "Существительное, мужской род. Мн. число: die Jobs.",
        pos: "noun",
        examples: [
          "Jenny hat einen neuen Job bei der Post. — У Дженни новая работа на почте."
        ]
      },
      {
        word: "joggen, joggt, ist/hat gejoggt",
        translation: "бегать трусцой",
        usage: "Глагол. Формы: joggen — joggt — ist/hat gejoggt.",
        pos: "verb",
        examples: [
          "Ich jogge gern im Park. — Я люблю бегать в парке."
        ]
      },
      {
        word: "die Jugendherberge, -n",
        translation: "молодёжное общежитие, хостел",
        usage: "Существительное, женский род. Мн. число: die Jugendherbergen.",
        pos: "noun",
        examples: [
          "Wir übernachten in einer Jugendherberge. — Мы ночуем в хостеле."
        ]
      },
      {
        word: "der/die Jugendliche, -n",
        translation: "подросток",
        usage: "Служебное слово / наречие.",
        pos: "other",
        examples: [
          "Viele Jugendliche hören den ganzen Tag Musik. — Многие подростки слушают музыку весь день."
        ]
      },
      {
        word: "jung",
        translation: "молодой",
        usage: "Прилагательное. Склоняется по общим правилам.",
        pos: "adj",
        examples: [
          "Claudia ist 21. – Was? Noch so jung? — Клаудии 21. — Что? Ещё такая молодая?"
        ]
      },
      {
        word: "der Junge, -n",
        translation: "мальчик",
        usage: "Существительное, мужской род. Мн. число: die Jungen.",
        pos: "noun",
        examples: [
          "In der Klasse sind 13 Jungen und 15 Mädchen. — В классе 13 мальчиков и 15 девочек."
        ]
      },
      {
        word: "der Kaffee, -s",
        translation: "кофе",
        usage: "Существительное, мужской род. Мн. число: die Kaffees.",
        pos: "noun",
        examples: [
          "Zum Frühstück trinke ich immer Kaffee. — На завтрак я всегда пью кофе."
        ]
      },
      {
        word: "der Kalender, -",
        translation: "календарь",
        usage: "Существительное, мужской род. Мн. число: die Kalender.",
        pos: "noun",
        examples: [
          "Ich schreibe alle Termine in meinen Kalender. — Я записываю все встречи в свой календарь."
        ]
      },
      {
        word: "kalt",
        translation: "холодный",
        usage: "Прилагательное. Склоняется по общим правилам.",
        pos: "adj",
        examples: [
          "Heute ist es sehr kalt. — Сегодня очень холодно."
        ]
      },
      {
        word: "die Kamera, -s",
        translation: "камера",
        usage: "Существительное, женский род. Мн. число: die Kameras.",
        pos: "noun",
        examples: [
          "Hannes hat eine neue Kamera. — У Ханнеса новая камера."
        ]
      },
      {
        word: "kaputt",
        translation: "сломанный",
        usage: "Прилагательное. Склоняется по общим правилам.",
        pos: "adj",
        examples: [
          "Unsere Waschmaschine ist kaputt. — Наша стиральная машина сломалась."
        ]
      },
      {
        word: "die Karte, -n",
        translation: "карточка, билет, карта",
        usage: "Существительное, женский род. Мн. число: die Karten.",
        pos: "noun",
        examples: [
          "Ich schreibe meinen Bekannten eine Karte aus dem Urlaub. — Из отпуска я пишу знакомым открытку."
        ]
      },
      {
        word: "die Kartoffel, -n",
        translation: "картофель",
        usage: "Существительное, женский род. Мн. число: die Kartoffeln.",
        pos: "noun",
        examples: [
          "Für Pommes frites braucht man Kartoffeln. — Для картофеля фри нужна картошка."
        ]
      },
      {
        word: "der Käse (Sg.)",
        translation: "сыр",
        usage: "Существительное, мужской род. Несчисляемое, мн. число не используется.",
        pos: "noun",
        examples: [
          "Isst du lieber Käse oder Wurst? — Тебе больше нравится сыр или колбаса?"
        ]
      },
      {
        word: "die Kasse, -n",
        translation: "касса",
        usage: "Существительное, женский род. Мн. число: die Kassen.",
        pos: "noun",
        examples: [
          "Zahlen Sie bitte an der Kasse. — Оплатите, пожалуйста, на кассе."
        ]
      },
      {
        word: "die Katze, -n",
        translation: "кошка",
        usage: "Существительное, женский род. Мн. число: die Katzen.",
        pos: "noun",
        examples: [
          "Meine Tochter wünscht sich eine Katze. — Моя дочь хочет кошку."
        ]
      },
      {
        word: "kaufen, kauft, hat gekauft",
        translation: "покупать",
        usage: "Глагол. Формы: kaufen — kauft — hat gekauft.",
        pos: "verb",
        examples: [
          "Tim kauft sich ein neues Auto. — Тим покупает себе новую машину."
        ]
      },
      {
        word: "das Kaufhaus, ¨-er",
        translation: "универмаг",
        usage: "Существительное, средний род. Мн. число: die Kaufhaüser.",
        pos: "noun",
        examples: [
          "Meine Pullover kaufe ich immer im Kaufhaus. — Свитера я всегда покупаю в универмаге."
        ]
      },
      {
        word: "kein, e",
        translation: "никакой (отрицание)",
        usage: "Служебное слово / наречие.",
        pos: "other",
        examples: [
          "Ich habe heute leider keine Zeit. — К сожалению, сегодня у меня нет времени."
        ]
      },
      {
        word: "der Keller, -",
        translation: "подвал",
        usage: "Существительное, мужской род. Мн. число: die Keller.",
        pos: "noun",
        examples: [
          "Bitte bring die Kartoffeln in den Keller! — Пожалуйста, отнеси картошку в подвал!"
        ]
      },
      {
        word: "kennen, kennt, hat gekannt",
        translation: "знать (быть знакомым)",
        usage: "Глагол. Формы: kennen — kennt — hat gekannt.",
        pos: "verb",
        examples: [
          "Kennen Sie diese Frau? — Вы знаете эту женщину?"
        ]
      },
      {
        word: "kennenlernen, lernt kennen, hat kennengelernt",
        translation: "знакомиться",
        usage: "Глагол. Формы: kennenlernen — lernt kennen — hat kennengelernt.",
        pos: "verb",
        examples: [
          "Wo habt ihr euch kennengelernt? — Где вы познакомились?"
        ]
      },
      {
        word: "die Kenntnisse (Pl.)",
        translation: "знания",
        usage: "Существительное, женский род, всегда во мн. числе.",
        pos: "noun",
        examples: [
          "Deine Deutschkenntnisse sind sehr gut! — Твои знания немецкого очень хорошие!"
        ]
      },
      {
        word: "die Kette, -n",
        translation: "цепочка",
        usage: "Существительное, женский род. Мн. число: die Ketten.",
        pos: "noun",
        examples: [
          "Meine Mutter bekommt eine schöne Kette zum Geburtstag. — Моя мама получит красивую цепочку на день рождения."
        ]
      },
      {
        word: "das Kind, -er",
        translation: "ребёнок",
        usage: "Существительное, средний род. Мн. число: die Kinder.",
        pos: "noun",
        examples: [
          "Wie viele Kinder haben Sie? — Сколько у вас детей?"
        ]
      },
      {
        word: "der Kindergarten, ¨-",
        translation: "детский сад",
        usage: "Существительное, мужской род. Мн. число: die Kindergärten.",
        pos: "noun",
        examples: [
          "Die kleine Laura geht schon in den Kindergarten. — Маленькая Лаура уже ходит в детский сад."
        ]
      },
      {
        word: "das Kino, -s",
        translation: "кино, кинотеатр",
        usage: "Существительное, средний род. Мн. число: die Kinos.",
        pos: "noun",
        examples: [
          "Gehen wir heute Abend zusammen ins Kino? — Пойдём сегодня вечером вместе в кино?"
        ]
      },
      {
        word: "der Kiosk, -e",
        translation: "киоск",
        usage: "Существительное, мужской род. Мн. число: die Kioske.",
        pos: "noun",
        examples: [
          "Zeitungen kannst du am Kiosk kaufen. — Газеты ты можешь купить в киоске."
        ]
      },
      {
        word: "die Kirche, -n",
        translation: "церковь",
        usage: "Существительное, женский род. Мн. число: die Kirchen.",
        pos: "noun",
        examples: [
          "Diese Kirche ist fast 800 Jahre alt. — Этой церкви почти 800 лет."
        ]
      },
      {
        word: "klappen, klappt, hat geklappt",
        translation: "получаться, складываться",
        usage: "Глагол. Формы: klappen — klappt — hat geklappt.",
        pos: "verb",
        examples: [
          "Es hat alles super geklappt. — Всё отлично получилось."
        ]
      },
      {
        word: "klar",
        translation: "ясный; ясно",
        usage: "Прилагательное. Склоняется по общим правилам.",
        pos: "adj",
        examples: [
          "Kommst du mit? – Klar! — Ты идёшь с нами? — Конечно!"
        ]
      },
      {
        word: "das Klavier, -e",
        translation: "пианино",
        usage: "Существительное, средний род. Мн. число: die Klaviere.",
        pos: "noun",
        examples: [
          "Jakob kann sehr gut Klavier spielen. — Якоб очень хорошо играет на пианино."
        ]
      },
      {
        word: "das Kleid, -er",
        translation: "платье",
        usage: "Существительное, средний род. Мн. число: die Kleider.",
        pos: "noun",
        examples: [
          "Julia möchte ein rotes Kleid kaufen. — Юлия хочет купить красное платье."
        ]
      },
      {
        word: "die Kleidung (Sg.)",
        translation: "одежда",
        usage: "Существительное, женский род. Несчисляемое, мн. число не используется.",
        pos: "noun",
        examples: [
          "Wo finde ich Kleidung? — Где я найду одежду?"
        ]
      },
      {
        word: "klein",
        translation: "маленький",
        usage: "Прилагательное. Склоняется по общим правилам.",
        pos: "adj",
        examples: [
          "Unsere Wohnung ist sehr klein. — Наша квартира очень маленькая."
        ]
      },
      {
        word: "klug",
        translation: "умный",
        usage: "Прилагательное. Склоняется по общим правилам.",
        pos: "adj",
        examples: [
          "Molly ist ein kluges Mädchen. — Молли — умная девочка."
        ]
      },
      {
        word: "kochen, kocht, hat gekocht",
        translation: "варить, готовить",
        usage: "Глагол. Формы: kochen — kocht — hat gekocht.",
        pos: "verb",
        examples: [
          "Herr Georgi kann gut kochen. — Господин Георги хорошо готовит."
        ]
      },
      {
        word: "der Koffer, -",
        translation: "чемодан",
        usage: "Существительное, мужской род. Мн. число: die Koffer.",
        pos: "noun",
        examples: [
          "Hast du den Koffer schon gepackt? — Ты уже собрал чемодан?"
        ]
      },
      {
        word: "der Kollege, -n / die Kollegin, -nen",
        translation: "коллега",
        usage: "Существительное, мужской род. Мн. число: die Kollegen.",
        pos: "noun",
        examples: [
          "Wie heißt die neue Kollegin? — Как зовут новую коллегу?"
        ]
      },
      {
        word: "komisch",
        translation: "странный",
        usage: "Прилагательное. Склоняется по общим правилам.",
        pos: "adj",
        examples: [
          "Der Film war sehr komisch. Wir haben viel gelacht. — Фильм был очень смешной. Мы много смеялись."
        ]
      },
      {
        word: "kommen, kommt, ist gekommen",
        translation: "приходить, приезжать",
        usage: "Глагол. Формы: kommen — kommt — ist gekommen.",
        pos: "verb",
        examples: [
          "Woher kommen Sie? – Aus Frankreich. — Откуда вы? — Из Франции."
        ]
      },
      {
        word: "können, kann, konnte, hat gekonnt",
        translation: "мочь, уметь",
        usage: "Глагол. Формы: können — kann — konnte — hat gekonnt.",
        pos: "verb",
        examples: [
          "Ich kann Deutsch und Russisch. — Я умею говорить по-немецки и по-русски."
        ]
      },
      {
        word: "der Kontakt, -e",
        translation: "контакт",
        usage: "Существительное, мужской род. Мн. число: die Kontakte.",
        pos: "noun",
        examples: [
          "Bitte schicken Sie mir Ihre Kontaktdaten! — Пришлите, пожалуйста, ваши контактные данные!"
        ]
      },
      {
        word: "das Konto, -en",
        translation: "счёт (банковский)",
        usage: "Существительное, средний род. Мн. число: die Kontoen.",
        pos: "noun",
        examples: [
          "Das Geld überweisen wir auf Ihr Konto. — Деньги мы перечислим на ваш счёт."
        ]
      },
      {
        word: "kontrollieren, kontrolliert, hat kontrolliert",
        translation: "контролировать, проверять",
        usage: "Глагол. Формы: kontrollieren — kontrolliert — hat kontrolliert.",
        pos: "verb",
        examples: [
          "Können Sie bei meinem Auto bitte das Öl kontrollieren? — Можете, пожалуйста, проверить масло в моей машине?"
        ]
      },
      {
        word: "das Konzert, -e",
        translation: "концерт",
        usage: "Существительное, средний род. Мн. число: die Konzerte.",
        pos: "noun",
        examples: [
          "Für das Konzert am Sonntag gibt es noch Karten. — На воскресный концерт ещё есть билеты."
        ]
      },
      {
        word: "der Kopf, ¨-e",
        translation: "голова",
        usage: "Существительное, мужской род. Мн. число: die Köpfe.",
        pos: "noun",
        examples: [
          "Mein Kopf tut weh! — У меня болит голова!"
        ]
      },
      {
        word: "der Körper, -",
        translation: "тело",
        usage: "Существительное, мужской род. Мн. число: die Körper.",
        pos: "noun",
        examples: [
          "Ich muss etwas für meinen Körper tun. — Мне надо что-то делать для своего тела."
        ]
      },
      {
        word: "die Kosmetik (Sg.)",
        translation: "косметика",
        usage: "Существительное, женский род. Несчисляемое, мн. число не используется.",
        pos: "noun",
        examples: [
          "Kosmetik können Sie im Erdgeschoss kaufen. — Косметику вы можете купить на первом этаже."
        ]
      },
      {
        word: "kosten, kostet, hat gekostet",
        translation: "стоить",
        usage: "Глагол. Формы: kosten — kostet — hat gekostet.",
        pos: "verb",
        examples: [
          "Wie viel kostet das Buch? – 20 Euro. — Сколько стоит книга? — 20 евро."
        ]
      },
      {
        word: "kostenlos",
        translation: "бесплатный",
        usage: "Прилагательное. Склоняется по общим правилам.",
        pos: "adj",
        examples: [
          "Diese Zeitschrift kostet nichts. Sie ist kostenlos. — Этот журнал ничего не стоит. Он бесплатный."
        ]
      },
      {
        word: "krank",
        translation: "больной",
        usage: "Прилагательное. Склоняется по общим правилам.",
        pos: "adj",
        examples: [
          "Ich kann heute nicht zur Arbeit kommen, ich bin krank. — Сегодня я не могу прийти на работу, я болен."
        ]
      },
      {
        word: "das Krankenhaus, ¨-er",
        translation: "больница",
        usage: "Существительное, средний род. Мн. число: die Krankenhaüser.",
        pos: "noun",
        examples: [
          "Meine Tante ist im Krankenhaus. — Моя тётя в больнице."
        ]
      },
      {
        word: "die Krankenkasse, -n",
        translation: "больничная касса (страховка)",
        usage: "Существительное, женский род. Мн. число: die Krankenkassen.",
        pos: "noun",
        examples: [
          "Bei welcher Krankenkasse sind Sie? — В какой больничной кассе вы застрахованы?"
        ]
      },
      {
        word: "die Krankheit, -en",
        translation: "болезнь",
        usage: "Существительное, женский род. Мн. число: die Krankheiten.",
        pos: "noun",
        examples: [
          "Welche Krankheit hat Herr Brandner? — Какая болезнь у господина Бранднера?"
        ]
      },
      {
        word: "der Kredit, -e",
        translation: "кредит",
        usage: "Существительное, мужской род. Мн. число: die Kredite.",
        pos: "noun",
        examples: [
          "Ich brauche einen Kredit von der Bank. — Мне нужен кредит в банке."
        ]
      },
      {
        word: "die Kreuzung, -en",
        translation: "перекрёсток",
        usage: "Существительное, женский род. Мн. число: die Kreuzungen.",
        pos: "noun",
        examples: [
          "Fahren Sie an der nächsten Kreuzung rechts. — На следующем перекрёстке поверните направо."
        ]
      },
      {
        word: "kriegen, kriegt, hat gekriegt",
        translation: "получать (разг.)",
        usage: "Глагол. Формы: kriegen — kriegt — hat gekriegt.",
        pos: "verb",
        examples: [
          "Ich kriege 15 Euro pro Stunde für meinen Job. — Я получаю 15 евро в час за свою работу."
        ]
      },
      {
        word: "der Krimi, -s",
        translation: "детектив (фильм/книга)",
        usage: "Существительное, мужской род. Мн. число: die Krimis.",
        pos: "noun",
        examples: [
          "Miriam liest gern spannende Krimis. — Мириам любит читать захватывающие детективы."
        ]
      },
      {
        word: "die Küche, -n",
        translation: "кухня",
        usage: "Существительное, женский род. Мн. число: die Küchen.",
        pos: "noun",
        examples: [
          "Ich suche eine neue Wohnung mit drei Zimmern, Küche und Bad. — Я ищу новую квартиру с тремя комнатами, кухней и ванной."
        ]
      },
      {
        word: "der Kuchen, -",
        translation: "пирог",
        usage: "Существительное, мужской род. Мн. число: die Kuchen.",
        pos: "noun",
        examples: [
          "Er isst sonntags ein Stück Kuchen. — По воскресеньям он ест кусок пирога."
        ]
      },
      {
        word: "kühl",
        translation: "прохладный",
        usage: "Прилагательное. Склоняется по общим правилам.",
        pos: "adj",
        examples: [
          "Es ist kühl draußen. Zieh dir eine Jacke an. — На улице прохладно. Надень куртку."
        ]
      },
      {
        word: "der Kühlschrank, ¨-e",
        translation: "холодильник",
        usage: "Существительное, мужской род. Мн. число: die Kühlschränke.",
        pos: "noun",
        examples: [
          "Haben wir noch Milch? – Ja, im Kühlschrank. — У нас ещё есть молоко? — Да, в холодильнике."
        ]
      },
      {
        word: "die Kultur, -en",
        translation: "культура",
        usage: "Существительное, женский род. Мн. число: die Kulturen.",
        pos: "noun",
        examples: [
          "Ich finde fremde Länder und Kulturen sehr interessant. — Чужие страны и культуры мне очень интересны."
        ]
      },
      {
        word: "kümmern (sich), kümmert, hat gekümmert",
        translation: "заботиться (sich um)",
        usage: "Глагол. Формы: kümmern (sich) — kümmert — hat gekümmert.",
        pos: "verb",
        examples: [
          "Sie muss sich um ihre Tochter kümmern. — Ей нужно заботиться о своей дочери."
        ]
      },
      {
        word: "der Kunde, -n / die Kundin, -nen",
        translation: "клиент",
        usage: "Существительное, мужской род. Мн. число: die Kunden.",
        pos: "noun",
        examples: [
          "Einen Moment, bitte. Ich habe eine Kundin. — Секундочку, пожалуйста. У меня клиентка."
        ]
      },
      {
        word: "kündigen, kündigt, hat gekündigt",
        translation: "увольнять(ся); расторгать",
        usage: "Глагол. Формы: kündigen — kündigt — hat gekündigt.",
        pos: "verb",
        examples: [
          "Meine Arbeit gefällt mir nicht mehr. Ich habe heute gekündigt. — Работа мне больше не нравится. Сегодня я уволился."
        ]
      },
      {
        word: "die Kunst, ¨-e",
        translation: "искусство",
        usage: "Существительное, женский род. Мн. число: die Künste.",
        pos: "noun",
        examples: [
          "Ich verstehe nichts von moderner Kunst. — Я ничего не понимаю в современном искусстве."
        ]
      },
      {
        word: "der Kurs, -e",
        translation: "курс",
        usage: "Существительное, мужской род. Мн. число: die Kurse.",
        pos: "noun",
        examples: [
          "Der Deutschkurs dauert zwei Monate. — Курс немецкого длится два месяца."
        ]
      },
      {
        word: "kurz",
        translation: "короткий",
        usage: "Прилагательное. Склоняется по общим правилам.",
        pos: "adj",
        examples: [
          "Kann ich Sie kurz sprechen? — Можно с вами коротко поговорить?"
        ]
      },
      {
        word: "lachen, lacht, hat gelacht",
        translation: "смеяться",
        usage: "Глагол. Формы: lachen — lacht — hat gelacht.",
        pos: "verb",
        examples: [
          "Die Kinder lachen über den Witz. — Дети смеются над шуткой."
        ]
      },
      {
        word: "der Laden, ¨-",
        translation: "магазин, лавка",
        usage: "Существительное, мужской род. Мн. число: die Läden.",
        pos: "noun",
        examples: [
          "Ich kaufe meine Kleider immer in einem kleinen Laden. — Одежду я всегда покупаю в маленьком магазинчике."
        ]
      },
      {
        word: "die Lampe, -n",
        translation: "лампа",
        usage: "Существительное, женский род. Мн. число: die Lampen.",
        pos: "noun",
        examples: [
          "Mach bitte die Lampe an. Es ist so dunkel. — Включи, пожалуйста, лампу. Так темно."
        ]
      },
      {
        word: "das Land, ¨-er",
        translation: "страна; сельская местность",
        usage: "Существительное, средний род. Мн. число: die Länder.",
        pos: "noun",
        examples: [
          "Deutschland ist ein schönes Land. — Германия — красивая страна."
        ]
      },
      {
        word: "die Landschaft, -en",
        translation: "ландшафт, пейзаж",
        usage: "Существительное, женский род. Мн. число: die Landschaften.",
        pos: "noun",
        examples: [
          "Die Landschaft ist sehr schön. — Пейзаж очень красивый."
        ]
      },
      {
        word: "lang",
        translation: "длинный",
        usage: "Прилагательное. Склоняется по общим правилам.",
        pos: "adj",
        examples: [
          "Die Hose ist zu lang. Können Sie sie ändern? — Брюки слишком длинные. Вы можете их укоротить?"
        ]
      },
      {
        word: "lange",
        translation: "долго",
        usage: "Служебное слово / наречие.",
        pos: "other",
        examples: [
          "Wie lange fährt der Zug von Hamburg nach Berlin? — Сколько поезд едет от Гамбурга до Берлина?"
        ]
      },
      {
        word: "langsam",
        translation: "медленный",
        usage: "Прилагательное. Склоняется по общим правилам.",
        pos: "adj",
        examples: [
          "Könnten Sie bitte etwas langsamer sprechen? — Не могли бы вы говорить чуть медленнее?"
        ]
      },
      {
        word: "langweilig",
        translation: "скучный",
        usage: "Прилагательное. Склоняется по общим правилам.",
        pos: "adj",
        examples: [
          "Mir ist langweilig. — Мне скучно."
        ]
      },
      {
        word: "der/das Laptop, -s",
        translation: "ноутбук",
        usage: "Служебное слово / наречие.",
        pos: "other",
        examples: [
          "Ich brauche einen neuen Laptop. — Мне нужен новый ноутбук."
        ]
      },
      {
        word: "lassen, lässt, hat gelassen",
        translation: "оставлять; давать, позволять",
        usage: "Глагол. Формы: lassen — lässt — hat gelassen.",
        pos: "verb",
        examples: [
          "Lass mich in Ruhe! — Оставь меня в покое!"
        ]
      },
      {
        word: "laufen, läuft, ist gelaufen",
        translation: "бежать, идти",
        usage: "Глагол. Формы: laufen — läuft — ist gelaufen.",
        pos: "verb",
        examples: [
          "Ich gehe jeden Morgen laufen. — Каждое утро я хожу на пробежку."
        ]
      },
      {
        word: "laut",
        translation: "громкий",
        usage: "Прилагательное. Склоняется по общим правилам.",
        pos: "adj",
        examples: [
          "Nicht so laut! Das Baby schläft. — Не так громко! Малыш спит."
        ]
      },
      {
        word: "leben, lebt, hat gelebt",
        translation: "жить",
        usage: "Глагол. Формы: leben — lebt — hat gelebt.",
        pos: "verb",
        examples: [
          "Sie lebt bei ihrer Schwester. — Она живёт у сестры."
        ]
      },
      {
        word: "das Leben, -",
        translation: "жизнь",
        usage: "Существительное, средний род. Мн. число: die Leben.",
        pos: "noun",
        examples: [
          "Hier in London ist das Leben teuer. — Здесь в Лондоне жизнь дорогая."
        ]
      },
      {
        word: "die Lebensmittel (Pl.)",
        translation: "продукты (питания)",
        usage: "Существительное, женский род, всегда во мн. числе.",
        pos: "noun",
        examples: [
          "Lebensmittel bekommen Sie im Supermarkt. — Продукты вы найдёте в супермаркете."
        ]
      },
      {
        word: "leer",
        translation: "пустой",
        usage: "Прилагательное. Склоняется по общим правилам.",
        pos: "adj",
        examples: [
          "Die Kanne ist fast leer. Ich mache neuen Tee. — Чайник почти пустой. Я заварю новый чай."
        ]
      },
      {
        word: "legen, legt, hat gelegt",
        translation: "класть",
        usage: "Глагол. Формы: legen — legt — hat gelegt.",
        pos: "verb",
        examples: [
          "Legen Sie das Buch auf den Tisch. — Положите книгу на стол."
        ]
      },
      {
        word: "leicht",
        translation: "лёгкий",
        usage: "Прилагательное. Склоняется по общим правилам.",
        pos: "adj",
        examples: [
          "Das Paket ist leicht, es wiegt nur ein Kilo. — Посылка лёгкая, весит всего килограмм."
        ]
      },
      {
        word: "leider",
        translation: "к сожалению",
        usage: "Служебное слово / наречие.",
        pos: "other",
        examples: [
          "Leider kann ich nicht kommen. Ich muss zum Arzt. — К сожалению, я не могу прийти. Мне надо к врачу."
        ]
      },
      {
        word: "leidtun/leid tun, tut leid, hat leidgetan",
        translation: "сожалеть (es tut mir leid)",
        usage: "Глагол. Формы: leidtun/leid tun — tut leid — hat leidgetan.",
        pos: "verb",
        examples: [
          "Es tut mir leid, dass ich nicht kommen kann. — Мне жаль, что я не могу прийти."
        ]
      },
      {
        word: "leihen, leiht, hat geliehen",
        translation: "одалживать",
        usage: "Глагол. Формы: leihen — leiht — hat geliehen.",
        pos: "verb",
        examples: [
          "Kannst du mir fünf Euro leihen? — Можешь одолжить мне пять евро?"
        ]
      },
      {
        word: "leise",
        translation: "тихий",
        usage: "Прилагательное. Склоняется по общим правилам.",
        pos: "adj",
        examples: [
          "Seid leise. Die anderen schlafen schon. — Тише. Остальные уже спят."
        ]
      },
      {
        word: "lernen, lernt, hat gelernt",
        translation: "учить, изучать",
        usage: "Глагол. Формы: lernen — lernt — hat gelernt.",
        pos: "verb",
        examples: [
          "Wie lange lernen Sie schon Deutsch? — Как долго вы уже учите немецкий?"
        ]
      },
      {
        word: "lesen, liest, hat gelesen",
        translation: "читать",
        usage: "Глагол. Формы: lesen — liest — hat gelesen.",
        pos: "verb",
        examples: [
          "In der Schule lesen wir ein Buch von Goethe. — В школе мы читаем книгу Гёте."
        ]
      },
      {
        word: "letzt-",
        translation: "последний",
        usage: "Прилагательное. Склоняется по общим правилам.",
        pos: "adj",
        examples: [
          "Morgen ist der letzte Kurstag. — Завтра последний день курсов."
        ]
      },
      {
        word: "die Leute (Pl.)",
        translation: "люди",
        usage: "Существительное, женский род, всегда во мн. числе.",
        pos: "noun",
        examples: [
          "Auf der Party sind viele Leute. — На вечеринке много людей."
        ]
      },
      {
        word: "das Licht, -er",
        translation: "свет",
        usage: "Существительное, средний род. Мн. число: die Lichter.",
        pos: "noun",
        examples: [
          "Mach bitte das Licht an! — Включи, пожалуйста, свет!"
        ]
      },
      {
        word: "lieb-",
        translation: "милый, любимый",
        usage: "Прилагательное. Склоняется по общим правилам.",
        pos: "adj",
        examples: [
          "Liebe Susanne, lieber Hans, — Дорогая Сюзанна, дорогой Ханс,"
        ]
      },
      {
        word: "lieben, liebt, hat geliebt",
        translation: "любить",
        usage: "Глагол. Формы: lieben — liebt — hat geliebt.",
        pos: "verb",
        examples: [
          "Ich liebe dich! — Я тебя люблю!"
        ]
      },
      {
        word: "Lieblings-",
        translation: "любимый (в составных)",
        usage: "Служебное слово / наречие.",
        pos: "other",
        examples: [
          "Meine Lieblingsfarbe ist Blau. — Мой любимый цвет — синий."
        ]
      },
      {
        word: "das Lied, -er",
        translation: "песня",
        usage: "Существительное, средний род. Мн. число: die Lieder.",
        pos: "noun",
        examples: [
          "Zum Geburtstag singen wir dir ein Lied. — На день рождения мы поём тебе песню."
        ]
      },
      {
        word: "liefern, liefert, hat geliefert",
        translation: "доставлять",
        usage: "Глагол. Формы: liefern — liefert — hat geliefert.",
        pos: "verb",
        examples: [
          "Wir liefern Ihnen den Schrank nach Hause. — Мы доставим вам шкаф на дом."
        ]
      },
      {
        word: "liegen, liegt, hat/ist gelegen",
        translation: "лежать",
        usage: "Глагол. Формы: liegen — liegt — hat/ist gelegen.",
        pos: "verb",
        examples: [
          "Die Zeitung liegt auf dem Tisch. — Газета лежит на столе."
        ]
      },
      {
        word: "der Link, -s",
        translation: "ссылка",
        usage: "Существительное, мужской род. Мн. число: die Links.",
        pos: "noun",
        examples: [
          "Ich schicke dir einen Link zu Deutschübungen. — Я пришлю тебе ссылку на упражнения по немецкому."
        ]
      },
      {
        word: "links",
        translation: "налево, слева",
        usage: "Служебное слово / наречие.",
        pos: "other",
        examples: [
          "Gehen Sie die nächste Straße links. — На следующей улице поверните налево."
        ]
      },
      {
        word: "der Löffel, -",
        translation: "ложка",
        usage: "Существительное, мужской род. Мн. число: die Löffel.",
        pos: "noun",
        examples: [
          "Bitte bringen Sie mir einen Löffel. — Принесите мне, пожалуйста, ложку."
        ]
      },
      {
        word: "das Lokal, -e",
        translation: "кафе, ресторанчик",
        usage: "Существительное, средний род. Мн. число: die Lokale.",
        pos: "noun",
        examples: [
          "Gibt es hier in der Nähe ein gutes Lokal? — Здесь поблизости есть хорошее кафе?"
        ]
      },
      {
        word: "die Lüge, -n",
        translation: "ложь",
        usage: "Существительное, женский род. Мн. число: die Lügen.",
        pos: "noun",
        examples: [
          "Das stimmt nicht! Das ist eine Lüge! — Это неправда! Это ложь!"
        ]
      },
      {
        word: "lügen, lügt, hat gelogen",
        translation: "лгать",
        usage: "Глагол. Формы: lügen — lügt — hat gelogen.",
        pos: "verb",
        examples: [
          "Du sollst nicht lügen. — Ты не должен лгать."
        ]
      },
      {
        word: "die Lust (Sg.)",
        translation: "желание, охота",
        usage: "Существительное, женский род. Несчисляемое, мн. число не используется.",
        pos: "noun",
        examples: [
          "Gehen wir heute Abend ins Kino? - Nein, ich habe keine Lust. — Пойдём сегодня в кино? — Нет, не хочется."
        ]
      },
      {
        word: "lustig",
        translation: "весёлый",
        usage: "Прилагательное. Склоняется по общим правилам.",
        pos: "adj",
        examples: [
          "Warum lacht ihr? Was ist so lustig? — Почему вы смеётесь? Что такого смешного?"
        ]
      },
      {
        word: "machen, macht, hat gemacht",
        translation: "делать",
        usage: "Глагол. Формы: machen — macht — hat gemacht.",
        pos: "verb",
        examples: [
          "Was machst du heute Abend? — Что ты делаешь сегодня вечером?"
        ]
      },
      {
        word: "das Mädchen, -",
        translation: "девочка",
        usage: "Существительное, средний род. Мн. число: die Mädchen.",
        pos: "noun",
        examples: [
          "Familie Kurz bekommt ein Baby. – Junge oder Mädchen? — В семье Курц будет ребёнок. — Мальчик или девочка?"
        ]
      },
      {
        word: "der Magen, ¨-",
        translation: "желудок",
        usage: "Существительное, мужской род. Мн. число: die Mägen.",
        pos: "noun",
        examples: [
          "Mein Magen tut weh. — У меня болит желудок."
        ]
      },
      {
        word: "die Mailbox, -en",
        translation: "голосовая почта",
        usage: "Существительное, женский род. Мн. число: die Mailboxen.",
        pos: "noun",
        examples: [
          "Ich habe dir auf die Mailbox gesprochen. — Я оставил тебе голосовое сообщение."
        ]
      },
      {
        word: "mal / das Mal",
        translation: "раз; -ка (частица)",
        usage: "Служебное слово / наречие.",
        pos: "other",
        examples: [
          "Sag mal, wie gefällt dir mein neues Kleid? — Скажи-ка, как тебе моё новое платье?"
        ]
      },
      {
        word: "malen, malt, hat gemalt",
        translation: "рисовать (красками)",
        usage: "Глагол. Формы: malen — malt — hat gemalt.",
        pos: "verb",
        examples: [
          "Mein Sohn kann gut malen. — Мой сын хорошо рисует."
        ]
      },
      {
        word: "man",
        translation: "безличное «мы/люди»",
        usage: "Служебное слово / наречие.",
        pos: "other",
        examples: [
          "Wie schreibt man das? — Как это пишется?"
        ]
      },
      {
        word: "manch-",
        translation: "некоторый, иной",
        usage: "Служебное слово / наречие.",
        pos: "other",
        examples: [
          "Manche Nachbarn sind unfreundlich. — Некоторые соседи неприветливые."
        ]
      },
      {
        word: "manchmal",
        translation: "иногда",
        usage: "Служебное слово / наречие.",
        pos: "other",
        examples: [
          "Manchmal essen wir im Restaurant. — Иногда мы едим в ресторане."
        ]
      },
      {
        word: "der Mann, ¨-er",
        translation: "мужчина; муж",
        usage: "Существительное, мужской род. Мн. число: die Männer.",
        pos: "noun",
        examples: [
          "Mein Mann ist Polizist. — Мой муж полицейский."
        ]
      },
      {
        word: "maennlich",
        translation: "мужской (пол)",
        usage: "Прилагательное. Склоняется по общим правилам.",
        pos: "adj",
        examples: [
          "Bitte waehlen Sie: weiblich oder maennlich. — Пожалуйста, выберите: женский или мужской."
        ]
      },
      {
        word: "die Mannschaft, -en",
        translation: "команда",
        usage: "Существительное, женский род. Мн. число: die Mannschaften.",
        pos: "noun",
        examples: [
          "Meine Lieblingsmannschaft hat 1:0 verloren. — Моя любимая команда проиграла 1:0."
        ]
      },
      {
        word: "der Mantel, ¨-",
        translation: "пальто",
        usage: "Существительное, мужской род. Мн. число: die Mäntel.",
        pos: "noun",
        examples: [
          "Es ist kalt. Zieh deinen Mantel an! — Холодно. Надень пальто!"
        ]
      },
      {
        word: "der Markt, ¨-e",
        translation: "рынок",
        usage: "Существительное, мужской род. Мн. число: die Märkte.",
        pos: "noun",
        examples: [
          "Ich gehe heute auf den Markt. — Сегодня я иду на рынок."
        ]
      },
      {
        word: "die Maschine, -n",
        translation: "машина, аппарат",
        usage: "Существительное, женский род. Мн. число: die Maschinen.",
        pos: "noun",
        examples: [
          "Die Waschmaschine funktioniert sehr gut. — Стиральная машина работает очень хорошо."
        ]
      },
      {
        word: "das Medikament, -e",
        translation: "лекарство",
        usage: "Существительное, средний род. Мн. число: die Medikamente.",
        pos: "noun",
        examples: [
          "Nehmen Sie dieses Medikament dreimal pro Tag! — Принимайте это лекарство три раза в день!"
        ]
      },
      {
        word: "das Meer, -e",
        translation: "море",
        usage: "Существительное, средний род. Мн. число: die Meere.",
        pos: "noun",
        examples: [
          "Wir machen Urlaub am Meer. — Мы отдыхаем у моря."
        ]
      },
      {
        word: "mehr",
        translation: "больше",
        usage: "Служебное слово / наречие.",
        pos: "other",
        examples: [
          "Mehr kann ich nicht essen! — Больше я есть не могу!"
        ]
      },
      {
        word: "meinen, meint, hat gemeint",
        translation: "думать, иметь в виду",
        usage: "Глагол. Формы: meinen — meint — hat gemeint.",
        pos: "verb",
        examples: [
          "Der Film ist gut. Was meinst du? — Фильм хороший. А ты как думаешь?"
        ]
      },
      {
        word: "die Meinung, -en",
        translation: "мнение",
        usage: "Существительное, женский род. Мн. число: die Meinungen.",
        pos: "noun",
        examples: [
          "Was ist deine Meinung dazu? — Какое твоё мнение об этом?"
        ]
      },
      {
        word: "meist-",
        translation: "большинство; чаще всего",
        usage: "Служебное слово / наречие.",
        pos: "other",
        examples: [
          "Die meisten Nachbarn kenne ich noch nicht. — Большинство соседей я ещё не знаю."
        ]
      },
      {
        word: "meistens",
        translation: "большей частью, обычно",
        usage: "Служебное слово / наречие.",
        pos: "other",
        examples: [
          "Meistens trinke ich zum Frühstück nur einen Kaffee. — Чаще всего на завтрак я пью только кофе."
        ]
      },
      {
        word: "die Menge, -n",
        translation: "количество, множество",
        usage: "Существительное, женский род. Мн. число: die Mengen.",
        pos: "noun",
        examples: [
          "Wir haben noch eine Menge Zeit. — У нас ещё много времени."
        ]
      },
      {
        word: "der Mensch, -en",
        translation: "человек",
        usage: "Существительное, мужской род. Мн. число: die Menschen.",
        pos: "noun",
        examples: [
          "Die Menschen sind hier ein bisschen anders als im Süden. — Люди здесь немного другие, чем на юге."
        ]
      },
      {
        word: "merken, merkt, hat gemerkt",
        translation: "замечать, запоминать",
        usage: "Глагол. Формы: merken — merkt — hat gemerkt.",
        pos: "verb",
        examples: [
          "Ich kann mir keine Zahlen merken. — Я не могу запомнить цифры."
        ]
      },
      {
        word: "die Messe, -n",
        translation: "ярмарка; месса",
        usage: "Существительное, женский род. Мн. число: die Messen.",
        pos: "noun",
        examples: [
          "Kommst du mit zur Buchmesse nach Frankfurt? — Пойдёшь со мной на книжную ярмарку во Франкфурт?"
        ]
      },
      {
        word: "das Messer, -",
        translation: "нож",
        usage: "Существительное, средний род. Мн. число: die Messer.",
        pos: "noun",
        examples: [
          "Das Messer schneidet nicht gut. — Нож плохо режет."
        ]
      },
      {
        word: "die Miete, -n",
        translation: "арендная плата",
        usage: "Существительное, женский род. Мн. число: die Mieten.",
        pos: "noun",
        examples: [
          "Wie viel Miete bezahlst du für deine Wohnung? — Сколько ты платишь за свою квартиру?"
        ]
      },
      {
        word: "mieten, mietet, hat gemietet",
        translation: "снимать (квартиру)",
        usage: "Глагол. Формы: mieten — mietet — hat gemietet.",
        pos: "verb",
        examples: [
          "Ich möchte ein Auto mieten. — Я хочу арендовать машину."
        ]
      },
      {
        word: "die Milch (Sg.)",
        translation: "молоко",
        usage: "Существительное, женский род. Несчисляемое, мн. число не используется.",
        pos: "noun",
        examples: [
          "Die Milch steht im Kühlschrank. — Молоко стоит в холодильнике."
        ]
      },
      {
        word: "mindestens",
        translation: "минимум, по меньшей мере",
        usage: "Служебное слово / наречие.",
        pos: "other",
        examples: [
          "Kommen Sie mindestens zwei Stunden vor Ihrem Flug. — Приходите минимум за два часа до вашего рейса."
        ]
      },
      {
        word: "das Mineralwasser (Sg.)",
        translation: "минеральная вода",
        usage: "Существительное, средний род. Несчисляемое, мн. число не используется.",
        pos: "noun",
        examples: [
          "Ein Glas Mineralwasser, bitte. — Стакан минералки, пожалуйста."
        ]
      },
      {
        word: "mit (+mitbringen/-kommen/-machen/-nehmen/-spielen)",
        translation: "с, вместе с",
        usage: "Служебное слово / наречие.",
        pos: "other",
        examples: [
          "Ich gehe ins Kino. Kommst du mit? — Я иду в кино. Ты со мной?"
        ]
      },
      {
        word: "der Mitarbeiter, -",
        translation: "сотрудник",
        usage: "Существительное, мужской род. Мн. число: die Mitarbeiter.",
        pos: "noun",
        examples: [
          "Unsere Firma hat sieben Mitarbeiter. — В нашей фирме семь сотрудников."
        ]
      },
      {
        word: "das Mittagessen, -",
        translation: "обед",
        usage: "Существительное, средний род. Мн. число: die Mittagessen.",
        pos: "noun",
        examples: [
          "Um zwölf Uhr gibt es Mittagessen. — В двенадцать часов обед."
        ]
      },
      {
        word: "die Mitte, -n",
        translation: "середина",
        usage: "Существительное, женский род. Мн. число: die Mitten.",
        pos: "noun",
        examples: [
          "Ich habe bis Mitte August frei. — До середины августа у меня свободное время."
        ]
      },
      {
        word: "das Mittel, -",
        translation: "средство",
        usage: "Существительное, средний род. Мн. число: die Mittel.",
        pos: "noun",
        examples: [
          "Haben Sie ein Mittel gegen Magenschmerzen? — У вас есть средство от болей в желудке?"
        ]
      },
      {
        word: "die Möbel (Pl.)",
        translation: "мебель",
        usage: "Существительное, женский род, всегда во мн. числе.",
        pos: "noun",
        examples: [
          "Eure Möbel sind sehr schön. — У вас очень красивая мебель."
        ]
      },
      {
        word: "das Mobiltelefon, -e",
        translation: "мобильный телефон",
        usage: "Существительное, средний род. Мн. число: die Mobiltelefone.",
        pos: "noun",
        examples: [
          "Wie kann ich Sie erreichen? Haben Sie ein Mobiltelefon? — Как с вами связаться? У вас есть мобильный?"
        ]
      },
      {
        word: "möchten, möchte, mochte, hat gemocht",
        translation: "хотеть бы",
        usage: "Глагол. Формы: möchten — möchte — mochte — hat gemocht.",
        pos: "verb",
        examples: [
          "Was möchten Sie trinken? — Что вы хотите выпить?"
        ]
      },
      {
        word: "die Mode, -n",
        translation: "мода",
        usage: "Существительное, женский род. Мн. число: die Moden.",
        pos: "noun",
        examples: [
          "Wie findest du die neue Mode? — Как тебе новая мода?"
        ]
      },
      {
        word: "modern",
        translation: "современный",
        usage: "Прилагательное. Склоняется по общим правилам.",
        pos: "adj",
        examples: [
          "Das Stadtzentrum von Frankfurt ist sehr modern. — Центр Франкфурта очень современный."
        ]
      },
      {
        word: "mögen, mag, mochte, hat gemocht",
        translation: "любить, нравиться",
        usage: "Глагол. Формы: mögen — mag — mochte — hat gemocht.",
        pos: "verb",
        examples: [
          "Magst du Schokolade? — Ты любишь шоколад?"
        ]
      },
      {
        word: "möglich",
        translation: "возможный",
        usage: "Служебное слово / наречие.",
        pos: "other",
        examples: [
          "Das ist leider nicht möglich. — К сожалению, это невозможно."
        ]
      },
      {
        word: "der Moment, -e",
        translation: "момент",
        usage: "Существительное, мужской род. Мн. число: die Momente.",
        pos: "noun",
        examples: [
          "Einen Moment, bitte. — Минутку, пожалуйста."
        ]
      },
      {
        word: "morgen",
        translation: "завтра",
        usage: "Служебное слово / наречие.",
        pos: "other",
        examples: [
          "Morgen beginnt die Schule erst um zehn Uhr. — Завтра школа начинается только в десять."
        ]
      },
      {
        word: "der Motor, -en",
        translation: "мотор, двигатель",
        usage: "Существительное, мужской род. Мн. число: die Motoren.",
        pos: "noun",
        examples: [
          "Der Motor ist kaputt. Das Auto fährt nicht mehr. — Мотор сломан. Машина больше не едет."
        ]
      },
      {
        word: "der Motorroller, -",
        translation: "мотороллер, скутер",
        usage: "Существительное, мужской род. Мн. число: die Motorroller.",
        pos: "noun",
        examples: [
          "Oskar fährt mit dem Motorroller zur Arbeit. — Оскар ездит на работу на скутере."
        ]
      },
      {
        word: "müde",
        translation: "усталый",
        usage: "Прилагательное. Склоняется по общим правилам.",
        pos: "adj",
        examples: [
          "Ich bin müde. Ich gehe schlafen. — Я устал. Я иду спать."
        ]
      },
      {
        word: "der Müll (Sg.)",
        translation: "мусор",
        usage: "Существительное, мужской род. Несчисляемое, мн. число не используется.",
        pos: "noun",
        examples: [
          "Bringst du bitte den Müll raus? — Вынесешь, пожалуйста, мусор?"
        ]
      },
      {
        word: "der Mund, ¨-er",
        translation: "рот",
        usage: "Существительное, мужской род. Мн. число: die Münder.",
        pos: "noun",
        examples: [
          "Öffnen Sie bitte den Mund. — Откройте, пожалуйста, рот."
        ]
      },
      {
        word: "das Museum, -een",
        translation: "музей",
        usage: "Существительное, средний род. Мн. число: die Museumeen.",
        pos: "noun",
        examples: [
          "Im Kunstmuseum gibt es eine neue Ausstellung. — В художественном музее новая выставка."
        ]
      },
      {
        word: "die Musik (Sg.)",
        translation: "музыка",
        usage: "Существительное, женский род. Несчисляемое, мн. число не используется.",
        pos: "noun",
        examples: [
          "Wie findest du die Musik? — Как тебе музыка?"
        ]
      },
      {
        word: "müssen, muss, musste",
        translation: "быть должным",
        usage: "Служебное слово / наречие.",
        pos: "other",
        examples: [
          "Ich muss jeden Tag von 8 Uhr bis 18 Uhr arbeiten. — Я должен работать каждый день с 8 до 18."
        ]
      },
      {
        word: "die Mütze, -n",
        translation: "шапка",
        usage: "Существительное, женский род. Мн. число: die Mützen.",
        pos: "noun",
        examples: [
          "Haben Sie rote Mützen? — У вас есть красные шапки?"
        ]
      },
      {
        word: "nach",
        translation: "после; в, к (направление)",
        usage: "Служебное слово / наречие.",
        pos: "other",
        examples: [
          "Ich gehe jetzt nach Hause. — Я сейчас иду домой."
        ]
      },
      {
        word: "der Nachbar, -n / die Nachbarin, -nen",
        translation: "сосед",
        usage: "Существительное, мужской род. Мн. число: die Nachbarn.",
        pos: "noun",
        examples: [
          "Die neuen Nachbarn sind sehr nett. — Новые соседи очень милые."
        ]
      },
      {
        word: "die Nachricht, -en",
        translation: "новость, сообщение",
        usage: "Существительное, женский род. Мн. число: die Nachrichten.",
        pos: "noun",
        examples: [
          "Ich sehe abends immer die Nachrichten im Fernsehen. — Вечером я всегда смотрю новости по телевизору."
        ]
      },
      {
        word: "nächste, -er, -es",
        translation: "следующий, ближайший",
        usage: "Служебное слово / наречие.",
        pos: "other",
        examples: [
          "Sehen wir uns nächste Woche? — Увидимся на следующей неделе?"
        ]
      },
      {
        word: "die Nähe (Sg.)",
        translation: "близость (in der Nähe — поблизости)",
        usage: "Существительное, женский род. Несчисляемое, мн. число не используется.",
        pos: "noun",
        examples: [
          "Die Post ist in der Nähe vom Bahnhof. — Почта рядом с вокзалом."
        ]
      },
      {
        word: "der Name, -n",
        translation: "имя",
        usage: "Существительное, мужской род. Мн. число: die Namen.",
        pos: "noun",
        examples: [
          "Wie ist Ihr Name? — Как ваше имя?"
        ]
      },
      {
        word: "nass",
        translation: "мокрый",
        usage: "Прилагательное. Склоняется по общим правилам.",
        pos: "adj",
        examples: [
          "Du bist ja ganz nass. Hast du den Regenschirm vergessen? — Ты же весь мокрый. Ты забыл зонт?"
        ]
      },
      {
        word: "die Natur (Sg.)",
        translation: "природа",
        usage: "Существительное, женский род. Несчисляемое, мн. число не используется.",
        pos: "noun",
        examples: [
          "Ich bin gern draußen in der Natur. — Я люблю быть на природе."
        ]
      },
      {
        word: "natürlich",
        translation: "естественно, конечно",
        usage: "Прилагательное. Склоняется по общим правилам.",
        pos: "adj",
        examples: [
          "Natürlich helfen wir dir. — Конечно, мы тебе поможем."
        ]
      },
      {
        word: "neben",
        translation: "рядом с",
        usage: "Служебное слово / наречие.",
        pos: "other",
        examples: [
          "Die Apotheke ist neben der Post. — Аптека рядом с почтой."
        ]
      },
      {
        word: "nebenan",
        translation: "по соседству",
        usage: "Служебное слово / наречие.",
        pos: "other",
        examples: [
          "Das ist José. Er wohnt nebenan. — Это Хосе. Он живёт по соседству."
        ]
      },
      {
        word: "neblig",
        translation: "туманно",
        usage: "Прилагательное. Склоняется по общим правилам.",
        pos: "adj",
        examples: [
          "Fahr vorsichtig! Es ist neblig. — Езжай осторожно! Туман."
        ]
      },
      {
        word: "nehmen, nimmt, hat genommen",
        translation: "брать",
        usage: "Глагол. Формы: nehmen — nimmt — hat genommen.",
        pos: "verb",
        examples: [
          "Nehmen Sie die Tabletten vor dem Essen! — Принимайте таблетки перед едой!"
        ]
      },
      {
        word: "nein",
        translation: "нет",
        usage: "Служебное слово / наречие.",
        pos: "other",
        examples: [
          "Möchten Sie ein Stück Kuchen? – Nein, danke. — Хотите кусок пирога? — Нет, спасибо."
        ]
      },
      {
        word: "nennen, nennt, hat genannt",
        translation: "называть",
        usage: "Глагол. Формы: nennen — nennt — hat genannt.",
        pos: "verb",
        examples: [
          "Mein Freund heißt Alexander, aber alle nennen ihn Alex. — Моего друга зовут Александр, но все зовут его Алекс."
        ]
      },
      {
        word: "nervös",
        translation: "нервный",
        usage: "Прилагательное. Склоняется по общим правилам.",
        pos: "adj",
        examples: [
          "Bei Prüfungen bin ich immer sehr nervös. — На экзаменах я всегда очень нервничаю."
        ]
      },
      {
        word: "nett",
        translation: "милый, приятный",
        usage: "Прилагательное. Склоняется по общим правилам.",
        pos: "adj",
        examples: [
          "Vielen Dank! Das ist sehr nett von dir. — Большое спасибо! Это очень мило с твоей стороны."
        ]
      },
      {
        word: "neu",
        translation: "новый",
        usage: "Прилагательное. Склоняется по общим правилам.",
        pos: "adj",
        examples: [
          "Ich bin der neue Mitarbeiter. — Я новый сотрудник."
        ]
      },
      {
        word: "nicht",
        translation: "не",
        usage: "Служебное слово / наречие.",
        pos: "other",
        examples: [
          "Das stimmt nicht. — Это неправда."
        ]
      },
      {
        word: "nichts",
        translation: "ничего",
        usage: "Служебное слово / наречие.",
        pos: "other",
        examples: [
          "Das macht nichts. — Ничего страшного."
        ]
      },
      {
        word: "nie",
        translation: "никогда",
        usage: "Служебное слово / наречие.",
        pos: "other",
        examples: [
          "Er kommt nie pünktlich. — Он никогда не приходит вовремя."
        ]
      },
      {
        word: "niemand",
        translation: "никто",
        usage: "Служебное слово / наречие.",
        pos: "other",
        examples: [
          "Hier ist niemand. — Здесь никого нет."
        ]
      },
      {
        word: "nirgends",
        translation: "нигде",
        usage: "Служебное слово / наречие.",
        pos: "other",
        examples: [
          "Hier kann man nirgends parken. — Здесь нигде нельзя парковаться."
        ]
      },
      {
        word: "noch",
        translation: "ещё",
        usage: "Служебное слово / наречие.",
        pos: "other",
        examples: [
          "Vielleicht kommt er noch. — Может быть, он ещё придёт."
        ]
      },
      {
        word: "normal",
        translation: "нормальный",
        usage: "Прилагательное. Склоняется по общим правилам.",
        pos: "adj",
        examples: [
          "Das ist doch ganz normal. — Это же совершенно нормально."
        ]
      },
      {
        word: "die Note, -n",
        translation: "оценка",
        usage: "Существительное, женский род. Мн. число: die Noten.",
        pos: "noun",
        examples: [
          "Eva hat immer sehr gute Noten in Deutsch. — У Евы всегда очень хорошие оценки по немецкому."
        ]
      },
      {
        word: "notieren, notiert, hat notiert",
        translation: "записывать, отмечать",
        usage: "Глагол. Формы: notieren — notiert — hat notiert.",
        pos: "verb",
        examples: [
          "Notieren Sie bitte alle wichtigen Informationen. — Запишите, пожалуйста, всю важную информацию."
        ]
      },
      {
        word: "die Notiz, -en",
        translation: "заметка",
        usage: "Существительное, женский род. Мн. число: die Notizen.",
        pos: "noun",
        examples: [
          "Schreib mir bitte eine Notiz. — Напиши мне, пожалуйста, записку."
        ]
      },
      {
        word: "notwendig",
        translation: "необходимый",
        usage: "Прилагательное. Склоняется по общим правилам.",
        pos: "adj",
        examples: [
          "Nein, das ist nicht notwendig. — Нет, это необязательно."
        ]
      },
      {
        word: "die Nudel, -n",
        translation: "макароны",
        usage: "Существительное, женский род. Мн. число: die Nudeln.",
        pos: "noun",
        examples: [
          "Möchten Sie lieber Reis oder Nudeln? — Вы хотите рис или макароны?"
        ]
      },
      {
        word: "die Nummer, -n",
        translation: "номер",
        usage: "Существительное, женский род. Мн. число: die Nummern.",
        pos: "noun",
        examples: [
          "Können Sie mir bitte Ihre Nummer geben? — Можете дать мне ваш номер?"
        ]
      },
      {
        word: "nur",
        translation: "только",
        usage: "Служебное слово / наречие.",
        pos: "other",
        examples: [
          "Ich möchte nur ein Glas Wasser. — Я хочу только стакан воды."
        ]
      },
      {
        word: "nützlich",
        translation: "полезный",
        usage: "Прилагательное. Склоняется по общим правилам.",
        pos: "adj",
        examples: [
          "Danke für den Tipp. Er war sehr nützlich. — Спасибо за совет. Он был очень полезным."
        ]
      },
      {
        word: "oben",
        translation: "наверху",
        usage: "Служебное слово / наречие.",
        pos: "other",
        examples: [
          "Ich wohne oben im 4. Stock. — Я живу наверху на 4-м этаже."
        ]
      },
      {
        word: "das Obst (Sg.)",
        translation: "фрукты",
        usage: "Существительное, средний род. Несчисляемое, мн. число не используется.",
        pos: "noun",
        examples: [
          "Obst kaufe ich immer auf dem Markt. — Фрукты я всегда покупаю на рынке."
        ]
      },
      {
        word: "oder",
        translation: "или",
        usage: "Служебное слово / наречие.",
        pos: "other",
        examples: [
          "Wann können Sie kommen – heute oder morgen? — Когда вы можете прийти — сегодня или завтра?"
        ]
      },
      {
        word: "offen",
        translation: "открытый",
        usage: "Прилагательное. Склоняется по общим правилам.",
        pos: "adj",
        examples: [
          "Ich glaube, der Supermarkt ist jetzt noch offen. — Думаю, супермаркет ещё открыт."
        ]
      },
      {
        word: "öffnen, öffnet, hat geöffnet",
        translation: "открывать",
        usage: "Глагол. Формы: öffnen — öffnet — hat geöffnet.",
        pos: "verb",
        examples: [
          "Der Laden ist samstags bis 16.00 Uhr geöffnet. — Магазин по субботам открыт до 16:00."
        ]
      },
      {
        word: "oft",
        translation: "часто",
        usage: "Служебное слово / наречие.",
        pos: "other",
        examples: [
          "Ich gehe nicht oft ins Kino. — Я нечасто хожу в кино."
        ]
      },
      {
        word: "ohne",
        translation: "без",
        usage: "Служебное слово / наречие.",
        pos: "other",
        examples: [
          "Bitte einen Kaffee ohne Milch und Zucker. — Пожалуйста, кофе без молока и сахара."
        ]
      },
      {
        word: "das Ohr, -en",
        translation: "ухо",
        usage: "Существительное, средний род. Мн. число: die Ohren.",
        pos: "noun",
        examples: [
          "Ich habe Ohrenschmerzen. — У меня болят уши."
        ]
      },
      {
        word: "das Öl, -e",
        translation: "масло (растительное); нефть",
        usage: "Существительное, средний род. Мн. число: die Öle.",
        pos: "noun",
        examples: [
          "Können Sie bei meinem Auto bitte das Öl kontrollieren? — Можете, пожалуйста, проверить масло в моей машине?"
        ]
      },
      {
        word: "online",
        translation: "онлайн",
        usage: "Служебное слово / наречие.",
        pos: "other",
        examples: [
          "Sie können das Geld auch online überweisen. — Вы также можете перевести деньги онлайн."
        ]
      },
      {
        word: "die Orange, -n",
        translation: "апельсин",
        usage: "Существительное, женский род. Мн. число: die Orangen.",
        pos: "noun",
        examples: [
          "Ich esse gern Orangen. — Я люблю есть апельсины."
        ]
      },
      {
        word: "die Ordnung, -en",
        translation: "порядок",
        usage: "Существительное, женский род. Мн. число: die Ordnungen.",
        pos: "noun",
        examples: [
          "Das ist alles in Ordnung. — Всё в порядке."
        ]
      },
      {
        word: "organisieren, organisiert, hat organisiert",
        translation: "организовывать",
        usage: "Глагол. Формы: organisieren — organisiert — hat organisiert.",
        pos: "verb",
        examples: [
          "Frau Gomez organisiert unseren Ausflug. — Госпожа Гомес организует нашу экскурсию."
        ]
      },
      {
        word: "der Ort, -e",
        translation: "место, населённый пункт",
        usage: "Существительное, мужской род. Мн. число: die Orte.",
        pos: "noun",
        examples: [
          "Wohnort: Köln. — Место жительства: Кёльн."
        ]
      },
      {
        word: "das Paar, -e",
        translation: "пара",
        usage: "Существительное, средний род. Мн. число: die Paare.",
        pos: "noun",
        examples: [
          "Romeo und Julia sind ein Paar. — Ромео и Джульетта — пара."
        ]
      },
      {
        word: "ein paar",
        translation: "несколько",
        usage: "Служебное слово / наречие.",
        pos: "other",
        examples: [
          "Wir fahren ein paar Tage ans Meer. — Мы едем на несколько дней к морю."
        ]
      },
      {
        word: "packen, packt, hat gepackt",
        translation: "паковать",
        usage: "Глагол. Формы: packen — packt — hat gepackt.",
        pos: "verb",
        examples: [
          "Ich muss noch meinen Koffer packen. — Мне ещё нужно собрать чемодан."
        ]
      },
      {
        word: "das Paket, -e",
        translation: "посылка; пакет",
        usage: "Существительное, средний род. Мн. число: die Pakete.",
        pos: "noun",
        examples: [
          "Bringst du bitte das Paket zur Post? — Отнесёшь, пожалуйста, посылку на почту?"
        ]
      },
      {
        word: "das Papier, -e",
        translation: "бумага",
        usage: "Существительное, средний род. Мн. число: die Papiere.",
        pos: "noun",
        examples: [
          "Hier sind Papier und Bleistift. — Вот бумага и карандаш."
        ]
      },
      {
        word: "die Papiere (Pl.)",
        translation: "документы",
        usage: "Существительное, женский род, всегда во мн. числе.",
        pos: "noun",
        examples: [
          "Haben Sie Ihre Papiere dabei? — У вас с собой документы?"
        ]
      },
      {
        word: "das Parfüm, -s",
        translation: "духи",
        usage: "Существительное, средний род. Мн. число: die Parfüms.",
        pos: "noun",
        examples: [
          "Ich suche ein Parfüm als Geschenk für meine Frau. — Я ищу духи в подарок жене."
        ]
      },
      {
        word: "der Park, -s",
        translation: "парк",
        usage: "Существительное, мужской род. Мн. число: die Parks.",
        pos: "noun",
        examples: [
          "Ich gehe gern im Park spazieren. — Я люблю гулять в парке."
        ]
      },
      {
        word: "parken, parkt, hat geparkt",
        translation: "парковаться",
        usage: "Глагол. Формы: parken — parkt — hat geparkt.",
        pos: "verb",
        examples: [
          "Darf ich hier parken? — Можно здесь припарковаться?"
        ]
      },
      {
        word: "der Partner, - / die Partnerin, -nen",
        translation: "партнёр",
        usage: "Существительное, мужской род. Мн. число: die Partner.",
        pos: "noun",
        examples: [
          "Veronika ist meine Partnerin. — Вероника — моя партнёрша."
        ]
      },
      {
        word: "die Party, -s",
        translation: "вечеринка",
        usage: "Существительное, женский род. Мн. число: die Partys.",
        pos: "noun",
        examples: [
          "Heute Abend machen wir eine Party. — Сегодня вечером мы устраиваем вечеринку."
        ]
      },
      {
        word: "der Pass, ¨-e",
        translation: "паспорт",
        usage: "Существительное, мужской род. Мн. число: die Pässe.",
        pos: "noun",
        examples: [
          "Am Flughafen brauchst du deinen Pass. — В аэропорту тебе понадобится паспорт."
        ]
      },
      {
        word: "passen, passt, hat gepasst",
        translation: "подходить",
        usage: "Глагол. Формы: passen — passt — hat gepasst.",
        pos: "verb",
        examples: [
          "Die Bluse passt mir nicht. — Блузка мне не подходит."
        ]
      },
      {
        word: "passieren, passiert, ist passiert",
        translation: "случаться, происходить",
        usage: "Глагол. Формы: passieren — passiert — ist passiert.",
        pos: "verb",
        examples: [
          "Was ist passiert? — Что случилось?"
        ]
      },
      {
        word: "das Passwort, ¨-er",
        translation: "пароль",
        usage: "Существительное, средний род. Мн. число: die Passwörter.",
        pos: "noun",
        examples: [
          "Ich habe mein Passwort vergessen. — Я забыл пароль."
        ]
      },
      {
        word: "die Pause, -n",
        translation: "пауза, перерыв",
        usage: "Существительное, женский род. Мн. число: die Pausen.",
        pos: "noun",
        examples: [
          "Von 12.00 bis 12.30 Uhr haben wir Mittagspause. — С 12:00 до 12:30 у нас обеденный перерыв."
        ]
      },
      {
        word: "die Person, -en",
        translation: "человек, персона",
        usage: "Существительное, женский род. Мн. число: die Personen.",
        pos: "noun",
        examples: [
          "Eintritt pro Person: 5 Euro. — Вход с человека: 5 евро."
        ]
      },
      {
        word: "das Pferd, -e",
        translation: "лошадь",
        usage: "Существительное, средний род. Мн. число: die Pferde.",
        pos: "noun",
        examples: [
          "Amira liebt Pferde. — Амира любит лошадей."
        ]
      },
      {
        word: "die Pflanze, -n",
        translation: "растение",
        usage: "Существительное, женский род. Мн. число: die Pflanzen.",
        pos: "noun",
        examples: [
          "Können Sie sich bitte um unsere Pflanzen kümmern? — Можете, пожалуйста, присмотреть за нашими растениями?"
        ]
      },
      {
        word: "die Pizza, -s/-en",
        translation: "пицца",
        usage: "Существительное, женский род. Мн. число: die Pizzas/-en.",
        pos: "noun",
        examples: [
          "Mein Lieblingsessen ist Pizza. — Моё любимое блюдо — пицца."
        ]
      },
      {
        word: "das Plakat, -e",
        translation: "плакат",
        usage: "Существительное, средний род. Мн. число: die Plakate.",
        pos: "noun",
        examples: [
          "Wir machen im Unterricht ein Plakat zum Thema Essen und Trinken. — На уроке мы делаем плакат на тему еды и напитков."
        ]
      },
      {
        word: "der Plan, ¨-e",
        translation: "план",
        usage: "Существительное, мужской род. Мн. число: die Pläne.",
        pos: "noun",
        examples: [
          "Ich kaufe mir einen Stadtplan. — Я куплю себе план города."
        ]
      },
      {
        word: "planen, plant, hat geplant",
        translation: "планировать",
        usage: "Глагол. Формы: planen — plant — hat geplant.",
        pos: "verb",
        examples: [
          "Wir sollen zusammen eine Klassenparty planen. — Мы должны вместе спланировать классную вечеринку."
        ]
      },
      {
        word: "der Platz, ¨-e",
        translation: "место; площадь",
        usage: "Существительное, мужской род. Мн. число: die Plätze.",
        pos: "noun",
        examples: [
          "Hier ist noch ein Platz frei. — Здесь ещё одно место свободно."
        ]
      },
      {
        word: "plötzlich",
        translation: "внезапно",
        usage: "Прилагательное. Склоняется по общим правилам.",
        pos: "adj",
        examples: [
          "Plötzlich war das Licht aus. — Вдруг свет выключился."
        ]
      },
      {
        word: "die Polizei (Sg.)",
        translation: "полиция",
        usage: "Существительное, женский род. Несчисляемое, мн. число не используется.",
        pos: "noun",
        examples: [
          "Rufen Sie die Polizei! — Вызовите полицию!"
        ]
      },
      {
        word: "die Pommes frites (Pl.)",
        translation: "картофель фри",
        usage: "Существительное, женский род, всегда во мн. числе.",
        pos: "noun",
        examples: [
          "Die Kinder essen Bratwurst mit Pommes frites. — Дети едят сосиску с картофелем фри."
        ]
      },
      {
        word: "die Portion, -en",
        translation: "порция",
        usage: "Существительное, женский род. Мн. число: die Portionen.",
        pos: "noun",
        examples: [
          "Ich nehme eine kleine Portion Eis. — Я возьму маленькую порцию мороженого."
        ]
      },
      {
        word: "die Post (Sg.)",
        translation: "почта",
        usage: "Существительное, женский род. Несчисляемое, мн. число не используется.",
        pos: "noun",
        examples: [
          "Entschuldigung, wo ist die Post? — Извините, где почта?"
        ]
      },
      {
        word: "das Poster, -",
        translation: "постер",
        usage: "Существительное, средний род. Мн. число: die Poster.",
        pos: "noun",
        examples: [
          "Das Poster hängt über dem Bett. — Постер висит над кроватью."
        ]
      },
      {
        word: "die Postkarte, -n",
        translation: "открытка",
        usage: "Существительное, женский род. Мн. число: die Postkarten.",
        pos: "noun",
        examples: [
          "Schreibst du mir eine Postkarte aus Kanada? — Напишешь мне открытку из Канады?"
        ]
      },
      {
        word: "die Postleitzahl, -en",
        translation: "почтовый индекс",
        usage: "Существительное, женский род. Мн. число: die Postleitzahlen.",
        pos: "noun",
        examples: [
          "Wie ist Ihre Postleitzahl? — Какой у вас почтовый индекс?"
        ]
      },
      {
        word: "das Praktikum, -a",
        translation: "практика, стажировка",
        usage: "Существительное, средний род. Мн. число: die Praktikuma.",
        pos: "noun",
        examples: [
          "Ich mache ein Praktikum bei Siemens. — Я прохожу практику в «Сименс»."
        ]
      },
      {
        word: "praktisch",
        translation: "практичный",
        usage: "Прилагательное. Склоняется по общим правилам.",
        pos: "adj",
        examples: [
          "Mit meinem neuen Handy kann ich auch im Internet surfen. — С моим новым телефоном я могу и в интернете сидеть."
        ]
      },
      {
        word: "die Praxis, -en",
        translation: "практика (врачебная); практика",
        usage: "Существительное, женский род. Мн. число: die Praxisen.",
        pos: "noun",
        examples: [
          "Unsere Praxis ist ab acht Uhr geöffnet. — Наша клиника открыта с восьми утра."
        ]
      },
      {
        word: "der Preis, -e",
        translation: "цена",
        usage: "Существительное, мужской род. Мн. число: die Preise.",
        pos: "noun",
        examples: [
          "Die Preise sind hier viel höher als bei uns. — Цены здесь намного выше, чем у нас."
        ]
      },
      {
        word: "preiswert",
        translation: "по выгодной цене",
        usage: "Прилагательное. Склоняется по общим правилам.",
        pos: "adj",
        examples: [
          "Die Jacke ist sehr preiswert. Sie kostet nur 15 Euro. — Куртка очень недорогая. Она стоит всего 15 евро."
        ]
      },
      {
        word: "privat",
        translation: "частный, личный",
        usage: "Прилагательное. Склоняется по общим правилам.",
        pos: "adj",
        examples: [
          "Das ist meine private Handynummer. — Это мой личный мобильный номер."
        ]
      },
      {
        word: "pro",
        translation: "за, на (пропорция)",
        usage: "Служебное слово / наречие.",
        pos: "other",
        examples: [
          "Das Zimmer kostet 100 Euro pro Nacht. — Комната стоит 100 евро за ночь."
        ]
      },
      {
        word: "probieren, probiert, hat probiert",
        translation: "пробовать",
        usage: "Глагол. Формы: probieren — probiert — hat probiert.",
        pos: "verb",
        examples: [
          "Möchten Sie den Käse probieren? — Хотите попробовать сыр?"
        ]
      },
      {
        word: "das Problem, -e",
        translation: "проблема",
        usage: "Существительное, средний род. Мн. число: die Probleme.",
        pos: "noun",
        examples: [
          "Ich habe ein Problem. Können Sie mir bitte helfen? — У меня проблема. Можете, пожалуйста, помочь?"
        ]
      },
      {
        word: "das Produkt, -e",
        translation: "продукт",
        usage: "Существительное, средний род. Мн. число: die Produkte.",
        pos: "noun",
        examples: [
          "Unsere Produkte haben eine sehr hohe Qualität. — Наши продукты очень высокого качества."
        ]
      },
      {
        word: "das Programm, -e",
        translation: "программа",
        usage: "Существительное, средний род. Мн. число: die Programme.",
        pos: "noun",
        examples: [
          "Was kommt heute im Kino? — Что сегодня в кино?"
        ]
      },
      {
        word: "das Projekt, -e",
        translation: "проект",
        usage: "Существительное, средний род. Мн. число: die Projekte.",
        pos: "noun",
        examples: [
          "Wir machen ein Projekt über Sehenswürdigkeiten. — Мы делаем проект о достопримечательностях."
        ]
      },
      {
        word: "der Prospekt, -e",
        translation: "проспект, буклет",
        usage: "Существительное, мужской род. Мн. число: die Prospekte.",
        pos: "noun",
        examples: [
          "Bitte schicken Sie mir einen Prospekt von Ihrem Hotel. — Пришлите, пожалуйста, буклет о вашем отеле."
        ]
      },
      {
        word: "prüfen, prüft, hat geprüft",
        translation: "проверять",
        usage: "Глагол. Формы: prüfen — prüft — hat geprüft.",
        pos: "verb",
        examples: [
          "Bitte prüfen Sie die Rechnung sofort. — Пожалуйста, сразу проверьте счёт."
        ]
      },
      {
        word: "die Prüfung, -en",
        translation: "экзамен",
        usage: "Существительное, женский род. Мн. число: die Prüfungen.",
        pos: "noun",
        examples: [
          "Ich habe die Prüfung bestanden. — Я сдал экзамен."
        ]
      },
      {
        word: "der Pullover, -",
        translation: "свитер",
        usage: "Существительное, мужской род. Мн. число: die Pullover.",
        pos: "noun",
        examples: [
          "Ich muss mir einen Pullover kaufen. — Мне нужно купить свитер."
        ]
      },
      {
        word: "pünktlich",
        translation: "пунктуальный, вовремя",
        usage: "Прилагательное. Склоняется по общим правилам.",
        pos: "adj",
        examples: [
          "Herr Müller ist immer pünktlich. — Господин Мюллер всегда пунктуален."
        ]
      },
      {
        word: "putzen, putzt, hat geputzt",
        translation: "чистить, убирать",
        usage: "Глагол. Формы: putzen — putzt — hat geputzt.",
        pos: "verb",
        examples: [
          "Ich muss heute noch das Bad putzen. — Сегодня мне ещё нужно убрать ванную."
        ]
      },
      {
        word: "die Qualität, -en",
        translation: "качество",
        usage: "Существительное, женский род. Мн. число: die Qualitäten.",
        pos: "noun",
        examples: [
          "Dieser Fernseher hat eine gute Qualität. — У этого телевизора хорошее качество."
        ]
      },
      {
        word: "das Quiz (Sg.)",
        translation: "викторина",
        usage: "Существительное, средний род. Несчисляемое, мн. число не используется.",
        pos: "noun",
        examples: [
          "Sie hat beim Quiz gewonnen. — Она выиграла в викторине."
        ]
      },
      {
        word: "das Radio, -s",
        translation: "радио",
        usage: "Существительное, средний род. Мн. число: die Radios.",
        pos: "noun",
        examples: [
          "Ich höre im Auto gern Radio. — В машине я люблю слушать радио."
        ]
      },
      {
        word: "raten, rät, hat geraten",
        translation: "советовать; угадывать",
        usage: "Глагол. Формы: raten — rät — hat geraten.",
        pos: "verb",
        examples: [
          "Was raten Sie mir? — Что вы мне посоветуете?"
        ]
      },
      {
        word: "das Rathaus, ¨-er",
        translation: "ратуша",
        usage: "Существительное, средний род. Мн. число: die Rathaüser.",
        pos: "noun",
        examples: [
          "Das Formular bekommen Sie im Rathaus. — Бланк вы получите в ратуше."
        ]
      },
      {
        word: "das Rätsel, -",
        translation: "загадка",
        usage: "Существительное, средний род. Мн. число: die Rätsel.",
        pos: "noun",
        examples: [
          "Das Rätsel ist schwierig! — Загадка сложная!"
        ]
      },
      {
        word: "rauchen, raucht, hat geraucht",
        translation: "курить",
        usage: "Глагол. Формы: rauchen — raucht — hat geraucht.",
        pos: "verb",
        examples: [
          "Rauchen ist hier verboten! — Здесь курить запрещено!"
        ]
      },
      {
        word: "der Raum, ¨-e",
        translation: "помещение; пространство",
        usage: "Существительное, мужской род. Мн. число: die Raüme.",
        pos: "noun",
        examples: [
          "Der Unterricht findet heute in Raum 332 statt. — Сегодня занятие в аудитории 332."
        ]
      },
      {
        word: "rechnen, rechnet, hat gerechnet",
        translation: "считать",
        usage: "Глагол. Формы: rechnen — rechnet — hat gerechnet.",
        pos: "verb",
        examples: [
          "Sarah kann gut rechnen. — Сара хорошо считает."
        ]
      },
      {
        word: "die Rechnung, -en",
        translation: "счёт (к оплате)",
        usage: "Существительное, женский род. Мн. число: die Rechnungen.",
        pos: "noun",
        examples: [
          "Schicken Sie die Rechnung an mich. — Пришлите счёт мне."
        ]
      },
      {
        word: "recht haben",
        translation: "быть правым",
        usage: "Служебное слово / наречие.",
        pos: "other",
        examples: [
          "Du hast (nicht) recht. — Ты (не) прав."
        ]
      },
      {
        word: "rechts",
        translation: "направо, справа",
        usage: "Служебное слово / наречие.",
        pos: "other",
        examples: [
          "Der Bahnhof ist hier rechts. — Вокзал здесь справа."
        ]
      },
      {
        word: "reden, redet, hat geredet",
        translation: "говорить, беседовать",
        usage: "Глагол. Формы: reden — redet — hat geredet.",
        pos: "verb",
        examples: [
          "Mit meiner Freundin kann ich über alles reden. — С подругой я могу говорить обо всём."
        ]
      },
      {
        word: "der Regen (Sg.)",
        translation: "дождь",
        usage: "Существительное, мужской род. Несчисляемое, мн. число не используется.",
        pos: "noun",
        examples: [
          "Bei Regen gehe ich nicht aus dem Haus. — В дождь я не выхожу из дома."
        ]
      },
      {
        word: "regnen, regnet, hat geregnet",
        translation: "идти (о дожде)",
        usage: "Глагол. Формы: regnen — regnet — hat geregnet.",
        pos: "verb",
        examples: [
          "Wenn es regnet, bleiben wir zu Hause. — Когда идёт дождь, мы остаёмся дома."
        ]
      },
      {
        word: "reich",
        translation: "богатый",
        usage: "Прилагательное. Склоняется по общим правилам.",
        pos: "adj",
        examples: [
          "Lotte ist reich. Sie hat sehr viel Geld. — Лотте богата. У неё очень много денег."
        ]
      },
      {
        word: "der Reifen, -",
        translation: "шина, покрышка",
        usage: "Существительное, мужской род. Мн. число: die Reifen.",
        pos: "noun",
        examples: [
          "Ich brauche neue Reifen für mein Auto. — Мне нужны новые шины для машины."
        ]
      },
      {
        word: "die Reihe, -n",
        translation: "ряд, очередь",
        usage: "Существительное, женский род. Мн. число: die Reihen.",
        pos: "noun",
        examples: [
          "Wer ist jetzt an der Reihe? — Чья сейчас очередь?"
        ]
      },
      {
        word: "die Reinigung, -en",
        translation: "химчистка; уборка",
        usage: "Существительное, женский род. Мн. число: die Reinigungen.",
        pos: "noun",
        examples: [
          "Bringst du bitte die Bluse in die Reinigung? — Отнесёшь, пожалуйста, блузку в химчистку?"
        ]
      },
      {
        word: "der Reis (Sg.)",
        translation: "рис",
        usage: "Существительное, мужской род. Несчисляемое, мн. число не используется.",
        pos: "noun",
        examples: [
          "Ich esse gern Reis mit Gemüse und Fisch. — Я люблю есть рис с овощами и рыбой."
        ]
      },
      {
        word: "die Reise, -n",
        translation: "поездка",
        usage: "Существительное, женский род. Мн. число: die Reisen.",
        pos: "noun",
        examples: [
          "Wir machen eine Reise nach Österreich. — Мы едем в поездку в Австрию."
        ]
      },
      {
        word: "das Reisebüro, -s",
        translation: "турагентство",
        usage: "Существительное, средний род. Мн. число: die Reisebüros.",
        pos: "noun",
        examples: [
          "Wir buchen die Reise im Reisebüro. — Мы бронируем поездку в турагентстве."
        ]
      },
      {
        word: "der Reiseführer, -",
        translation: "путеводитель",
        usage: "Существительное, мужской род. Мн. число: die Reiseführer.",
        pos: "noun",
        examples: [
          "Ich kaufe mir einen Reiseführer von Berlin. — Я куплю себе путеводитель по Берлину."
        ]
      },
      {
        word: "reisen, reist, ist gereist",
        translation: "путешествовать",
        usage: "Глагол. Формы: reisen — reist — ist gereist.",
        pos: "verb",
        examples: [
          "Ich reise gern. — Я люблю путешествовать."
        ]
      },
      {
        word: "reiten, reitet, ist geritten",
        translation: "ездить верхом",
        usage: "Глагол. Формы: reiten — reitet — ist geritten.",
        pos: "verb",
        examples: [
          "Möchtest du reiten lernen? — Хочешь научиться ездить верхом?"
        ]
      },
      {
        word: "renovieren, renoviert, hat renoviert",
        translation: "ремонтировать",
        usage: "Глагол. Формы: renovieren — renoviert — hat renoviert.",
        pos: "verb",
        examples: [
          "Wir renovieren das ganze Haus. — Мы ремонтируем весь дом."
        ]
      },
      {
        word: "der Rentner, - / die Rentnerin, -nen",
        translation: "пенсионер",
        usage: "Существительное, мужской род. Мн. число: die Rentner.",
        pos: "noun",
        examples: [
          "Mein Onkel ist Rentner. — Мой дядя — пенсионер."
        ]
      },
      {
        word: "die Reparatur, -en",
        translation: "ремонт",
        usage: "Существительное, женский род. Мн. число: die Reparaturen.",
        pos: "noun",
        examples: [
          "Die Reparatur ist sehr teuer. — Ремонт очень дорогой."
        ]
      },
      {
        word: "reparieren, repariert, hat repariert",
        translation: "ремонтировать",
        usage: "Глагол. Формы: reparieren — repariert — hat repariert.",
        pos: "verb",
        examples: [
          "Er muss den Motor reparieren. — Ему нужно починить мотор."
        ]
      },
      {
        word: "reservieren, reserviert, hat reserviert",
        translation: "резервировать",
        usage: "Глагол. Формы: reservieren — reserviert — hat reserviert.",
        pos: "verb",
        examples: [
          "Reservieren Sie bitte ein Doppelzimmer. — Забронируйте, пожалуйста, двухместный номер."
        ]
      },
      {
        word: "der Rest, -e",
        translation: "остаток",
        usage: "Существительное, мужской род. Мн. число: die Reste.",
        pos: "noun",
        examples: [
          "Hier sind 50 Euro. Den Rest gebe ich dir später. — Вот 50 евро. Остаток отдам позже."
        ]
      },
      {
        word: "das Restaurant, -s",
        translation: "ресторан",
        usage: "Существительное, средний род. Мн. число: die Restaurants.",
        pos: "noun",
        examples: [
          "Wir essen heute in einem Restaurant. — Сегодня мы едим в ресторане."
        ]
      },
      {
        word: "das Rezept, -e",
        translation: "рецепт",
        usage: "Существительное, средний род. Мн. число: die Rezepte.",
        pos: "noun",
        examples: [
          "Kannst du mir bitte das Rezept geben? — Можешь, пожалуйста, дать мне рецепт?"
        ]
      },
      {
        word: "die Rezeption, -en",
        translation: "ресепшн, стойка регистрации",
        usage: "Существительное, женский род. Мн. число: die Rezeptionen.",
        pos: "noun",
        examples: [
          "Geben Sie bitte den Schlüssel an der Rezeption ab. — Сдайте, пожалуйста, ключ на ресепшене."
        ]
      },
      {
        word: "richtig",
        translation: "правильный",
        usage: "Прилагательное. Склоняется по общим правилам.",
        pos: "adj",
        examples: [
          "Habe ich das richtig verstanden? — Я это правильно понял?"
        ]
      },
      {
        word: "riechen, riecht, hat gerochen",
        translation: "пахнуть; нюхать",
        usage: "Глагол. Формы: riechen — riecht — hat gerochen.",
        pos: "verb",
        examples: [
          "Diese Blumen riechen gut. — Эти цветы хорошо пахнут."
        ]
      },
      {
        word: "das Rind",
        translation: "говядина; бык",
        usage: "Существительное, средний род.",
        pos: "noun",
        examples: [
          "Ich esse nur Fleisch vom Rind. — Я ем только говядину."
        ]
      },
      {
        word: "der Ring, -e",
        translation: "кольцо",
        usage: "Существительное, мужской род. Мн. число: die Ringe.",
        pos: "noun",
        examples: [
          "Ich habe meinen Ring verloren. — Я потерял кольцо."
        ]
      },
      {
        word: "der Rock, ¨-e",
        translation: "юбка",
        usage: "Существительное, мужской род. Мн. число: die Röcke.",
        pos: "noun",
        examples: [
          "Der Rock ist zu eng. — Юбка слишком узкая."
        ]
      },
      {
        word: "romantisch",
        translation: "романтичный",
        usage: "Прилагательное. Склоняется по общим правилам.",
        pos: "adj",
        examples: [
          "Dieser Film ist sehr romantisch. — Этот фильм очень романтичный."
        ]
      },
      {
        word: "die Rose, -n",
        translation: "роза",
        usage: "Существительное, женский род. Мн. число: die Rosen.",
        pos: "noun",
        examples: [
          "Er schenkt seiner Freundin rote Rosen zum Geburtstag. — Он дарит своей девушке красные розы на день рождения."
        ]
      },
      {
        word: "der Rücken, -",
        translation: "спина",
        usage: "Существительное, мужской род. Мн. число: die Rücken.",
        pos: "noun",
        examples: [
          "Mein Rücken tut mir weh. — У меня болит спина."
        ]
      },
      {
        word: "der Rucksack, ¨-e",
        translation: "рюкзак",
        usage: "Существительное, мужской род. Мн. число: die Rucksäcke.",
        pos: "noun",
        examples: [
          "Ich nehme lieber einen Rucksack als einen Koffer mit. — Я лучше возьму рюкзак, чем чемодан."
        ]
      },
      {
        word: "rufen, ruft, hat gerufen",
        translation: "звать, кричать",
        usage: "Глагол. Формы: rufen — ruft — hat gerufen.",
        pos: "verb",
        examples: [
          "Wir müssen einen Arzt rufen. — Нам нужно вызвать врача."
        ]
      },
      {
        word: "die Ruhe (Sg.)",
        translation: "тишина, покой",
        usage: "Существительное, женский род. Несчисляемое, мн. число не используется.",
        pos: "noun",
        examples: [
          "Ruhe, bitte! Hier in der Bibliothek darf man nicht laut sprechen. — Тише, пожалуйста! Здесь в библиотеке нельзя говорить громко."
        ]
      },
      {
        word: "ruhig",
        translation: "спокойный",
        usage: "Прилагательное. Склоняется по общим правилам.",
        pos: "adj",
        examples: [
          "Ich möchte ein ruhiges Zimmer. — Я хотел бы тихую комнату."
        ]
      },
      {
        word: "rund",
        translation: "круглый",
        usage: "Прилагательное. Склоняется по общим правилам.",
        pos: "adj",
        examples: [
          "Unser Wohnzimmertisch ist rund. — Наш стол в гостиной круглый."
        ]
      },
      {
        word: "der Rundgang, ¨-e",
        translation: "обход, экскурсия",
        usage: "Существительное, мужской род. Мн. число: die Rundgänge.",
        pos: "noun",
        examples: [
          "Der Rundgang durch das Schloss beginnt in wenigen Minuten. — Экскурсия по замку начинается через несколько минут."
        ]
      },
      {
        word: "die Sache, -n",
        translation: "вещь, дело",
        usage: "Существительное, женский род. Мн. число: die Sachen.",
        pos: "noun",
        examples: [
          "Nimm deine Sachen und komm! — Возьми свои вещи и иди!"
        ]
      },
      {
        word: "der Saft, ¨-e",
        translation: "сок",
        usage: "Существительное, мужской род. Мн. число: die Säfte.",
        pos: "noun",
        examples: [
          "Möchtest du einen Apfelsaft? — Хочешь яблочный сок?"
        ]
      },
      {
        word: "sagen, sagt, hat gesagt",
        translation: "говорить, сказать",
        usage: "Глагол. Формы: sagen — sagt — hat gesagt.",
        pos: "verb",
        examples: [
          "Entschuldigung, was haben Sie gesagt? — Извините, что вы сказали?"
        ]
      },
      {
        word: "der Salat, -e",
        translation: "салат",
        usage: "Существительное, мужской род. Мн. число: die Salate.",
        pos: "noun",
        examples: [
          "Wie schmeckt dir der Salat? — Как тебе салат?"
        ]
      },
      {
        word: "das Salz, -e",
        translation: "соль",
        usage: "Существительное, средний род. Мн. число: die Salze.",
        pos: "noun",
        examples: [
          "Entschuldigung, kann ich bitte Salz haben? — Извините, можно мне соль?"
        ]
      },
      {
        word: "sammeln, sammelt, hat gesammelt",
        translation: "собирать, коллекционировать",
        usage: "Глагол. Формы: sammeln — sammelt — hat gesammelt.",
        pos: "verb",
        examples: [
          "Peter sammelt Briefmarken. — Петер собирает марки."
        ]
      },
      {
        word: "der Satz, ¨-e",
        translation: "предложение (грамм.); набор",
        usage: "Существительное, мужской род. Мн. число: die Sätze.",
        pos: "noun",
        examples: [
          "Den letzten Satz verstehe ich nicht. — Последнее предложение я не понимаю."
        ]
      },
      {
        word: "sauber",
        translation: "чистый",
        usage: "Прилагательное. Склоняется по общим правилам.",
        pos: "adj",
        examples: [
          "Bringen Sie mir bitte ein sauberes Glas! — Принесите, пожалуйста, чистый стакан!"
        ]
      },
      {
        word: "sauer",
        translation: "кислый; сердитый",
        usage: "Прилагательное. Склоняется по общим правилам.",
        pos: "adj",
        examples: [
          "Ich bin sauer. — Я сердит."
        ]
      },
      {
        word: "schade",
        translation: "жаль",
        usage: "Служебное слово / наречие.",
        pos: "other",
        examples: [
          "Schade, dass du nicht kommen kannst. — Жаль, что ты не можешь прийти."
        ]
      },
      {
        word: "schädlich",
        translation: "вредный",
        usage: "Прилагательное. Склоняется по общим правилам.",
        pos: "adj",
        examples: [
          "Rauchen ist schädlich für die Gesundheit. — Курение вредно для здоровья."
        ]
      },
      {
        word: "schaffen, schafft, hat geschafft",
        translation: "успевать; создавать",
        usage: "Глагол. Формы: schaffen — schafft — hat geschafft.",
        pos: "verb",
        examples: [
          "Ich schaffe das nicht alleine. — Я не справлюсь с этим один."
        ]
      },
      {
        word: "der Schalter, -",
        translation: "окошко (в банке); выключатель",
        usage: "Существительное, мужской род. Мн. число: die Schalter.",
        pos: "noun",
        examples: [
          "Gehen Sie bitte zum Schalter drei! — Идите, пожалуйста, к окну номер три!"
        ]
      },
      {
        word: "scharf",
        translation: "острый",
        usage: "Прилагательное. Склоняется по общим правилам.",
        pos: "adj",
        examples: [
          "Die Suppe ist mir zu scharf. — Суп для меня слишком острый."
        ]
      },
      {
        word: "scheinen, scheint, hat geschienen",
        translation: "казаться; светить",
        usage: "Глагол. Формы: scheinen — scheint — hat geschienen.",
        pos: "verb",
        examples: [
          "Die Sonne scheint. — Светит солнце."
        ]
      },
      {
        word: "schenken, schenkt, hat geschenkt",
        translation: "дарить",
        usage: "Глагол. Формы: schenken — schenkt — hat geschenkt.",
        pos: "verb",
        examples: [
          "Was schenken wir Michael zum Geburtstag? — Что мы подарим Михаэлю на день рождения?"
        ]
      },
      {
        word: "die Schere, -n",
        translation: "ножницы",
        usage: "Существительное, женский род. Мн. число: die Scheren.",
        pos: "noun",
        examples: [
          "Die Schere schneidet nicht gut. — Ножницы плохо режут."
        ]
      },
      {
        word: "schicken, schickt, hat geschickt",
        translation: "отправлять, посылать",
        usage: "Глагол. Формы: schicken — schickt — hat geschickt.",
        pos: "verb",
        examples: [
          "Bitte schicken Sie mir eine E-Mail. — Пожалуйста, пришлите мне email."
        ]
      },
      {
        word: "das Schiff, -e",
        translation: "корабль",
        usage: "Существительное, средний род. Мн. число: die Schiffe.",
        pos: "noun",
        examples: [
          "Wir fahren mit dem Schiff von Basel nach Köln. — Мы едем на корабле из Базеля в Кёльн."
        ]
      },
      {
        word: "das Schild, -er",
        translation: "табличка, знак",
        usage: "Существительное, средний род. Мн. число: die Schilder.",
        pos: "noun",
        examples: [
          "Haben Sie das Schild nicht gesehen? — Вы не видели знак?"
        ]
      },
      {
        word: "schimpfen, schimpft, hat geschimpft",
        translation: "ругать(ся)",
        usage: "Глагол. Формы: schimpfen — schimpft — hat geschimpft.",
        pos: "verb",
        examples: [
          "Alle schimpfen über das Wetter. — Все ругают погоду."
        ]
      },
      {
        word: "der Schirm",
        translation: "зонт",
        usage: "Существительное, мужской род.",
        pos: "noun",
        examples: [
          "Nimm den Schirm mit, es regnet. — Возьми зонт, идёт дождь."
        ]
      },
      {
        word: "schlafen, schläft, hat geschlafen",
        translation: "спать",
        usage: "Глагол. Формы: schlafen — schläft — hat geschlafen.",
        pos: "verb",
        examples: [
          "Ich schlafe meistens acht Stunden. — Я обычно сплю восемь часов."
        ]
      },
      {
        word: "das Schlafzimmer, -",
        translation: "спальня",
        usage: "Существительное, средний род. Мн. число: die Schlafzimmer.",
        pos: "noun",
        examples: [
          "Hier ist das Schlafzimmer. — Вот спальня."
        ]
      },
      {
        word: "schlecht",
        translation: "плохой",
        usage: "Прилагательное. Склоняется по общим правилам.",
        pos: "adj",
        examples: [
          "Das Wetter ist schlecht. — Погода плохая."
        ]
      },
      {
        word: "schließen, schließt, hat geschlossen",
        translation: "закрывать",
        usage: "Глагол. Формы: schließen — schließt — hat geschlossen.",
        pos: "verb",
        examples: [
          "Bitte schließen Sie die Tür. — Пожалуйста, закройте дверь."
        ]
      },
      {
        word: "schlimm",
        translation: "плохой, скверный",
        usage: "Прилагательное. Склоняется по общим правилам.",
        pos: "adj",
        examples: [
          "Kein Problem, das ist nicht so schlimm. — Не проблема, это не так страшно."
        ]
      },
      {
        word: "das Schloss, ¨-er",
        translation: "замок (здание); замок (запор)",
        usage: "Существительное, средний род. Мн. число: die Schlösser.",
        pos: "noun",
        examples: [
          "Am Wochenende besichtigen wir Schloss Neuschwanstein. — В выходные мы осматриваем замок Нойшванштайн."
        ]
      },
      {
        word: "der Schluss, ¨-e",
        translation: "конец, окончание",
        usage: "Существительное, мужской род. Мн. число: die Schlüsse.",
        pos: "noun",
        examples: [
          "Zum Schluss nochmals herzlichen Dank. — В заключение ещё раз большое спасибо."
        ]
      },
      {
        word: "der Schlüssel, -",
        translation: "ключ",
        usage: "Существительное, мужской род. Мн. число: die Schlüssel.",
        pos: "noun",
        examples: [
          "Ich finde meinen Schlüssel nicht. — Я не могу найти свой ключ."
        ]
      },
      {
        word: "schmecken, schmeckt, hat geschmeckt",
        translation: "быть вкусным, нравиться на вкус",
        usage: "Глагол. Формы: schmecken — schmeckt — hat geschmeckt.",
        pos: "verb",
        examples: [
          "Schmeckt dir die Suppe? — Тебе нравится суп?"
        ]
      },
      {
        word: "der Schmerz, -en",
        translation: "боль",
        usage: "Существительное, мужской род. Мн. число: die Schmerzen.",
        pos: "noun",
        examples: [
          "Haben Sie Schmerzen? — У вас боли?"
        ]
      },
      {
        word: "schmutzig",
        translation: "грязный",
        usage: "Прилагательное. Склоняется по общим правилам.",
        pos: "adj",
        examples: [
          "Das Handtuch ist schmutzig. — Полотенце грязное."
        ]
      },
      {
        word: "der Schnee (Sg.)",
        translation: "снег",
        usage: "Существительное, мужской род. Несчисляемое, мн. число не используется.",
        pos: "noun",
        examples: [
          "In den Bergen liegt viel Schnee. — В горах много снега."
        ]
      },
      {
        word: "schneiden (sich), schneidet, hat geschnitten",
        translation: "резать, стричь",
        usage: "Глагол. Формы: schneiden (sich) — schneidet — hat geschnitten.",
        pos: "verb",
        examples: [
          "Das Messer schneidet nicht gut. — Нож плохо режет."
        ]
      },
      {
        word: "schneien, schneit, hat geschneit",
        translation: "идти (о снеге)",
        usage: "Глагол. Формы: schneien — schneit — hat geschneit.",
        pos: "verb",
        examples: [
          "Morgen schneit es. — Завтра будет снег."
        ]
      },
      {
        word: "schnell",
        translation: "быстрый",
        usage: "Прилагательное. Склоняется по общим правилам.",
        pos: "adj",
        examples: [
          "Warum fährst du so schnell? — Почему ты так быстро едешь?"
        ]
      },
      {
        word: "die Schokolade (Sg.)",
        translation: "шоколад",
        usage: "Существительное, женский род. Несчисляемое, мн. число не используется.",
        pos: "noun",
        examples: [
          "Julia liebt Schokolade. — Юлия любит шоколад."
        ]
      },
      {
        word: "schon",
        translation: "уже",
        usage: "Служебное слово / наречие.",
        pos: "other",
        examples: [
          "Ist das Essen schon fertig? — Еда уже готова?"
        ]
      },
      {
        word: "schön",
        translation: "красивый",
        usage: "Прилагательное. Склоняется по общим правилам.",
        pos: "adj",
        examples: [
          "Das Bild ist sehr schön. — Картина очень красивая."
        ]
      },
      {
        word: "der Schrank, ¨-e",
        translation: "шкаф",
        usage: "Существительное, мужской род. Мн. число: die Schränke.",
        pos: "noun",
        examples: [
          "Die Gläser stehen im Schrank. — Стаканы стоят в шкафу."
        ]
      },
      {
        word: "schrecklich",
        translation: "ужасный",
        usage: "Прилагательное. Склоняется по общим правилам.",
        pos: "adj",
        examples: [
          "Ich finde ihren Rock schrecklich. — Её юбка кажется мне ужасной."
        ]
      },
      {
        word: "schreiben, schreibt, hat geschrieben",
        translation: "писать",
        usage: "Глагол. Формы: schreiben — schreibt — hat geschrieben.",
        pos: "verb",
        examples: [
          "Ich schreibe dir eine E-Mail. — Я напишу тебе письмо."
        ]
      },
      {
        word: "schriftlich",
        translation: "письменный",
        usage: "Прилагательное. Склоняется по общим правилам.",
        pos: "adj",
        examples: [
          "Sie müssen sich schriftlich anmelden. — Вам нужно зарегистрироваться письменно."
        ]
      },
      {
        word: "der Schuh, -e",
        translation: "ботинок",
        usage: "Существительное, мужской род. Мн. число: die Schuhe.",
        pos: "noun",
        examples: [
          "Die neuen Schuhe sind mir zu eng. — Новые ботинки мне слишком тесные."
        ]
      },
      {
        word: "die Schule, -n",
        translation: "школа",
        usage: "Существительное, женский род. Мн. число: die Schulen.",
        pos: "noun",
        examples: [
          "Meine Tochter geht schon in die Schule. — Моя дочь уже ходит в школу."
        ]
      },
      {
        word: "der Schüler, - / die Schülerin, -nen",
        translation: "ученик",
        usage: "Существительное, мужской род. Мн. число: die Schüler.",
        pos: "noun",
        examples: [
          "In meinem Kurs sind acht Schülerinnen und fünf Schüler. — В моей группе восемь учениц и пять учеников."
        ]
      },
      {
        word: "schwach",
        translation: "слабый",
        usage: "Прилагательное. Склоняется по общим правилам.",
        pos: "adj",
        examples: [
          "Er ist krank und schwach. — Он болен и слаб."
        ]
      },
      {
        word: "schwanger",
        translation: "беременная",
        usage: "Прилагательное. Склоняется по общим правилам.",
        pos: "adj",
        examples: [
          "Lena ist schwanger. — Лена беременна."
        ]
      },
      {
        word: "das Schwein, -e",
        translation: "свинья; свинина",
        usage: "Существительное, средний род. Мн. число: die Schweine.",
        pos: "noun",
        examples: [
          "Ich esse kein Schweinefleisch. — Я не ем свинину."
        ]
      },
      {
        word: "schwer",
        translation: "тяжёлый; трудный",
        usage: "Прилагательное. Склоняется по общим правилам.",
        pos: "adj",
        examples: [
          "Das ist eine schwere Arbeit. — Это тяжёлая работа."
        ]
      },
      {
        word: "schwierig",
        translation: "трудный, сложный",
        usage: "Прилагательное. Склоняется по общим правилам.",
        pos: "adj",
        examples: [
          "Die Prüfung war nicht schwierig. — Экзамен не был сложным."
        ]
      },
      {
        word: "das Schwimmbad, ¨-er",
        translation: "бассейн",
        usage: "Существительное, средний род. Мн. число: die Schwimmbäder.",
        pos: "noun",
        examples: [
          "Kommst du mit ins Schwimmbad? — Пойдёшь со мной в бассейн?"
        ]
      },
      {
        word: "schwimmen, schwimmt, ist geschwommen",
        translation: "плавать",
        usage: "Глагол. Формы: schwimmen — schwimmt — ist geschwommen.",
        pos: "verb",
        examples: [
          "Ich schwimme täglich einen Kilometer. — Я плаваю километр каждый день."
        ]
      },
      {
        word: "der See, -n",
        translation: "озеро; море",
        usage: "Существительное, мужской род. Мн. число: die Seen.",
        pos: "noun",
        examples: [
          "Morgen fahren wir mal an einen See schwimmen. — Завтра поедем плавать на озеро."
        ]
      },
      {
        word: "die See (Sg.)",
        translation: "озеро; море",
        usage: "Существительное, женский род. Несчисляемое, мн. число не используется.",
        pos: "noun",
        examples: [
          "Wir machen Urlaub an der Nordsee. — Мы отдыхаем на Северном море."
        ]
      },
      {
        word: "sehen, sieht, hat gesehen",
        translation: "видеть",
        usage: "Глагол. Формы: sehen — sieht — hat gesehen.",
        pos: "verb",
        examples: [
          "Ich kann dich nicht sehen. — Я тебя не вижу."
        ]
      },
      {
        word: "die Sehenswürdigkeit, -en",
        translation: "достопримечательность",
        usage: "Существительное, женский род. Мн. число: die Sehenswürdigkeiten.",
        pos: "noun",
        examples: [
          "Welche Sehenswürdigkeiten gibt es in Frankfurt? — Какие достопримечательности есть во Франкфурте?"
        ]
      },
      {
        word: "sehr",
        translation: "очень",
        usage: "Служебное слово / наречие.",
        pos: "other",
        examples: [
          "Das Wetter ist heute sehr schön. — Сегодня очень хорошая погода."
        ]
      },
      {
        word: "die Seife, -n",
        translation: "мыло",
        usage: "Существительное, женский род. Мн. число: die Seifen.",
        pos: "noun",
        examples: [
          "Hier gibt es keine Seife. — Здесь нет мыла."
        ]
      },
      {
        word: "sein, ist, war, ist gewesen",
        translation: "быть",
        usage: "Глагол. Формы: sein — ist — war — ist gewesen.",
        pos: "verb",
        examples: [
          "Ich bin Mechaniker. — Я механик."
        ]
      },
      {
        word: "seit",
        translation: "с (какого-то момента)",
        usage: "Служебное слово / наречие.",
        pos: "other",
        examples: [
          "Ich wohne seit drei Jahren in Köln. — Я живу в Кёльне уже три года."
        ]
      },
      {
        word: "die Seite, -n",
        translation: "сторона; страница",
        usage: "Существительное, женский род. Мн. число: die Seiten.",
        pos: "noun",
        examples: [
          "Öffnen Sie das Kursbuch auf Seite 20. — Откройте учебник на 20-й странице."
        ]
      },
      {
        word: "selbst",
        translation: "сам, самостоятельно",
        usage: "Служебное слово / наречие.",
        pos: "other",
        examples: [
          "Du musst mir nicht helfen, ich mache das selbst. — Тебе не нужно мне помогать, я сделаю сам."
        ]
      },
      {
        word: "die Sendung, -en",
        translation: "передача; посылка",
        usage: "Существительное, женский род. Мн. число: die Sendungen.",
        pos: "noun",
        examples: [
          "Welche Sendungen schaust du gern an? — Какие передачи ты любишь смотреть?"
        ]
      },
      {
        word: "der Service (Sg.)",
        translation: "сервис, обслуживание",
        usage: "Существительное, мужской род. Несчисляемое, мн. число не используется.",
        pos: "noun",
        examples: [
          "Ich bin mit dem Service in der Werkstatt sehr zufrieden. — Я очень доволен обслуживанием в автосервисе."
        ]
      },
      {
        word: "setzen (sich), setzt, hat gesetzt",
        translation: "сажать, ставить",
        usage: "Глагол. Формы: setzen (sich) — setzt — hat gesetzt.",
        pos: "verb",
        examples: [
          "Setz dich doch! — Садись же!"
        ]
      },
      {
        word: "sicher",
        translation: "уверенный; безопасный",
        usage: "Прилагательное. Склоняется по общим правилам.",
        pos: "adj",
        examples: [
          "Ich bin ganz sicher, dass er kommt. — Я совершенно уверен, что он придёт."
        ]
      },
      {
        word: "singen, singt, hat gesungen",
        translation: "петь",
        usage: "Глагол. Формы: singen — singt — hat gesungen.",
        pos: "verb",
        examples: [
          "Er singt gern. — Он любит петь."
        ]
      },
      {
        word: "die Situation, -en",
        translation: "ситуация",
        usage: "Существительное, женский род. Мн. число: die Situationen.",
        pos: "noun",
        examples: [
          "Ich bin in einer schwierigen Situation. — Я в сложной ситуации."
        ]
      },
      {
        word: "sitzen, sitzt, hat/ist gesessen",
        translation: "сидеть",
        usage: "Глагол. Формы: sitzen — sitzt — hat/ist gesessen.",
        pos: "verb",
        examples: [
          "Wo möchten Sie sitzen? — Где вы хотите сидеть?"
        ]
      },
      {
        word: "der Ski, -, -er",
        translation: "лыжи",
        usage: "Существительное, мужской род. Мн. число: die Ski,.",
        pos: "noun",
        examples: [
          "Gehen wir am Wochenende Ski fahren? — Поедем в выходные на лыжах?"
        ]
      },
      {
        word: "so",
        translation: "так",
        usage: "Служебное слово / наречие.",
        pos: "other",
        examples: [
          "Sie müssen das so machen! — Вы должны сделать так!"
        ]
      },
      {
        word: "das Sofa, -s",
        translation: "диван",
        usage: "Существительное, средний род. Мн. число: die Sofas.",
        pos: "noun",
        examples: [
          "Das Sofa ist bequem. — Диван удобный."
        ]
      },
      {
        word: "sofort",
        translation: "немедленно",
        usage: "Служебное слово / наречие.",
        pos: "other",
        examples: [
          "Bitte antworten Sie sofort. — Пожалуйста, ответьте немедленно."
        ]
      },
      {
        word: "sogar",
        translation: "даже",
        usage: "Служебное слово / наречие.",
        pos: "other",
        examples: [
          "Sogar meine Tante aus Kanada kommt. — Даже моя тётя из Канады приедет."
        ]
      },
      {
        word: "sollen, soll, sollte",
        translation: "быть должным (нравственно)",
        usage: "Служебное слово / наречие.",
        pos: "other",
        examples: [
          "Wann soll ich kommen und was soll ich mitbringen? — Когда мне прийти и что мне принести?"
        ]
      },
      {
        word: "die Sonne, -n",
        translation: "солнце",
        usage: "Существительное, женский род. Мн. число: die Sonnen.",
        pos: "noun",
        examples: [
          "Die Sonne scheint. — Светит солнце."
        ]
      },
      {
        word: "sonnig",
        translation: "солнечный",
        usage: "Прилагательное. Склоняется по общим правилам.",
        pos: "adj",
        examples: [
          "Morgen ist das Wetter wieder warm und sonnig. — Завтра снова будет тепло и солнечно."
        ]
      },
      {
        word: "sonst",
        translation: "иначе, кроме того",
        usage: "Служебное слово / наречие.",
        pos: "other",
        examples: [
          "Haben Sie sonst noch einen Wunsch? — Ещё чего-нибудь желаете?"
        ]
      },
      {
        word: "spannend",
        translation: "увлекательный",
        usage: "Прилагательное. Склоняется по общим правилам.",
        pos: "adj",
        examples: [
          "Ich finde den Film sehr spannend. — Фильм мне кажется очень захватывающим."
        ]
      },
      {
        word: "sparen, spart, hat gespart",
        translation: "экономить, копить",
        usage: "Глагол. Формы: sparen — spart — hat gespart.",
        pos: "verb",
        examples: [
          "Ein neues Auto ist sehr teuer. Ich muss sparen. — Новая машина очень дорогая. Мне нужно копить."
        ]
      },
      {
        word: "der Spaß (Sg.)",
        translation: "удовольствие, веселье",
        usage: "Существительное, мужской род. Несчисляемое, мн. число не используется.",
        pos: "noun",
        examples: [
          "Meine Arbeit macht mir Spaß. — Мне нравится моя работа."
        ]
      },
      {
        word: "spät",
        translation: "поздно",
        usage: "Прилагательное. Склоняется по общим правилам.",
        pos: "adj",
        examples: [
          "Es ist schon spät, ich muss gehen. — Уже поздно, мне пора идти."
        ]
      },
      {
        word: "später",
        translation: "позже",
        usage: "Служебное слово / наречие.",
        pos: "other",
        examples: [
          "Das können wir später machen. — Это мы можем сделать позже."
        ]
      },
      {
        word: "spazieren gehen, geht spazieren, ist spazieren gegangen",
        translation: "идти гулять",
        usage: "Глагол. Формы: spazieren gehen — geht spazieren — ist spazieren gegangen.",
        pos: "verb",
        examples: [
          "Wir gehen sonntags immer spazieren. — По воскресеньям мы всегда идём гулять."
        ]
      },
      {
        word: "der Spaziergang, ¨-e",
        translation: "прогулка",
        usage: "Существительное, мужской род. Мн. число: die Spaziergänge.",
        pos: "noun",
        examples: [
          "Abends mache ich immer einen Spaziergang. — По вечерам я всегда хожу на прогулку."
        ]
      },
      {
        word: "speichern, speichert, hat gespeichert",
        translation: "сохранять (файл)",
        usage: "Глагол. Формы: speichern — speichert — hat gespeichert.",
        pos: "verb",
        examples: [
          "Sie müssen die Datei speichern. — Вам нужно сохранить файл."
        ]
      },
      {
        word: "die Speisekarte, -n",
        translation: "меню",
        usage: "Существительное, женский род. Мн. число: die Speisekarten.",
        pos: "noun",
        examples: [
          "Entschuldigung, bringen Sie uns bitte die Speisekarte. — Извините, принесите нам, пожалуйста, меню."
        ]
      },
      {
        word: "das Spiel, -e",
        translation: "игра",
        usage: "Существительное, средний род. Мн. число: die Spiele.",
        pos: "noun",
        examples: [
          "Welche Kartenspiele kennen Sie? — Какие карточные игры вы знаете?"
        ]
      },
      {
        word: "spielen, spielt, hat gespielt",
        translation: "играть",
        usage: "Глагол. Формы: spielen — spielt — hat gespielt.",
        pos: "verb",
        examples: [
          "Die Kinder spielen draußen. — Дети играют на улице."
        ]
      },
      {
        word: "der Sport (Sg.)",
        translation: "спорт",
        usage: "Существительное, мужской род. Несчисляемое, мн. число не используется.",
        pos: "noun",
        examples: [
          "Ich mache viel Sport. — Я много занимаюсь спортом."
        ]
      },
      {
        word: "sportlich",
        translation: "спортивный",
        usage: "Прилагательное. Склоняется по общим правилам.",
        pos: "adj",
        examples: [
          "Tom ist sehr sportlich. — Том очень спортивный."
        ]
      },
      {
        word: "der Sportplatz, ¨-e",
        translation: "спортивная площадка",
        usage: "Существительное, мужской род. Мн. число: die Sportplätze.",
        pos: "noun",
        examples: [
          "Das Fußballtraining ist um 17 Uhr auf dem Sportplatz. — Тренировка по футболу в 17:00 на спортплощадке."
        ]
      },
      {
        word: "die Sprache, -n",
        translation: "язык",
        usage: "Существительное, женский род. Мн. число: die Sprachen.",
        pos: "noun",
        examples: [
          "Welche Sprachen sprichst du? — На каких языках ты говоришь?"
        ]
      },
      {
        word: "sprechen, spricht, hat gesprochen",
        translation: "говорить",
        usage: "Глагол. Формы: sprechen — spricht — hat gesprochen.",
        pos: "verb",
        examples: [
          "Kann ich (mit) Herrn Klein sprechen? — Можно поговорить с господином Кляйном?"
        ]
      },
      {
        word: "die Sprechstunde, -n",
        translation: "приёмные часы (у врача)",
        usage: "Существительное, женский род. Мн. число: die Sprechstunden.",
        pos: "noun",
        examples: [
          "Frau Doktor Weiß hat von 9:00 bis 12:30 Uhr Sprechstunde. — Доктор Вайс принимает с 9:00 до 12:30."
        ]
      },
      {
        word: "die Stadt, ¨-e",
        translation: "город",
        usage: "Существительное, женский род. Мн. число: die Städte.",
        pos: "noun",
        examples: [
          "Heidelberg ist eine alte Stadt. — Гейдельберг — старый город."
        ]
      },
      {
        word: "der Stadtplan, ¨-e",
        translation: "план города",
        usage: "Существительное, мужской род. Мн. число: die Stadtpläne.",
        pos: "noun",
        examples: [
          "Haben Sie einen Stadtplan von Salzburg? — У вас есть план Зальцбурга?"
        ]
      },
      {
        word: "der Star, -s",
        translation: "звезда (знаменитость)",
        usage: "Существительное, мужской род. Мн. число: die Stars.",
        pos: "noun",
        examples: [
          "Diese Sängerin ist ein Star in Deutschland. — Эта певица — звезда в Германии."
        ]
      },
      {
        word: "stark",
        translation: "сильный",
        usage: "Прилагательное. Склоняется по общим правилам.",
        pos: "adj",
        examples: [
          "Ich habe starke Kopfschmerzen. — У меня сильная головная боль."
        ]
      },
      {
        word: "stattfinden, findet statt, hat stattgefunden",
        translation: "состояться",
        usage: "Глагол. Формы: stattfinden — findet statt — hat stattgefunden.",
        pos: "verb",
        examples: [
          "Das Spiel findet auch bei Regen statt. — Игра состоится даже в дождь."
        ]
      },
      {
        word: "stehen, steht, hat/ist gestanden",
        translation: "стоять",
        usage: "Глагол. Формы: stehen — steht — hat/ist gestanden.",
        pos: "verb",
        examples: [
          "Der Bus steht schon an der Haltestelle. — Автобус уже стоит на остановке."
        ]
      },
      {
        word: "die Stelle, -n",
        translation: "место; должность",
        usage: "Существительное, женский род. Мн. число: die Stellen.",
        pos: "noun",
        examples: [
          "Ich habe eine neue Stelle. Ich arbeite jetzt bei Mercedes. — У меня новая работа. Теперь я работаю в «Мерседес»."
        ]
      },
      {
        word: "stellen, stellt, hat gestellt",
        translation: "ставить, помещать",
        usage: "Глагол. Формы: stellen — stellt — hat gestellt.",
        pos: "verb",
        examples: [
          "Stell die Milch bitte in den Kühlschrank! — Поставь, пожалуйста, молоко в холодильник!"
        ]
      },
      {
        word: "sterben, stirbt, ist gestorben",
        translation: "умирать",
        usage: "Глагол. Формы: sterben — stirbt — ist gestorben.",
        pos: "verb",
        examples: [
          "Sein Vater ist gestern gestorben. — Его отец вчера умер."
        ]
      },
      {
        word: "der Stiefel, -",
        translation: "сапог",
        usage: "Существительное, мужской род. Мн. число: die Stiefel.",
        pos: "noun",
        examples: [
          "Wie viel kosten die roten Stiefel? — Сколько стоят красные сапоги?"
        ]
      },
      {
        word: "der Stift, -e",
        translation: "ручка, карандаш",
        usage: "Существительное, мужской род. Мн. число: die Stifte.",
        pos: "noun",
        examples: [
          "Kannst du mir bitte einen Stift geben? — Можешь дать мне ручку?"
        ]
      },
      {
        word: "das Stipendium, -en",
        translation: "стипендия",
        usage: "Существительное, средний род. Мн. число: die Stipendiumen.",
        pos: "noun",
        examples: [
          "Wenn ich ein gutes Zeugnis habe, bekomme ich ein Stipendium. — Если у меня хороший аттестат, я получу стипендию."
        ]
      },
      {
        word: "der Stock, ¨-e; das Stockwerk, -e",
        translation: "этаж; палка",
        usage: "Существительное, мужской род. Мн. число: die Stöcke;.",
        pos: "noun",
        examples: [
          "Unsere Wohnung liegt im ersten Stock. — Наша квартира на первом этаже (втором по нашему счёту)."
        ]
      },
      {
        word: "stören, stört, hat gestört",
        translation: "мешать, беспокоить",
        usage: "Глагол. Формы: stören — stört — hat gestört.",
        pos: "verb",
        examples: [
          "Störe ich? — Я не мешаю?"
        ]
      },
      {
        word: "der Strand, ¨-e",
        translation: "пляж",
        usage: "Существительное, мужской род. Мн. число: die Strände.",
        pos: "noun",
        examples: [
          "Im Urlaub bin ich am liebsten am Strand. — В отпуске мне больше всего нравится быть на пляже."
        ]
      },
      {
        word: "die Straße, -n",
        translation: "улица",
        usage: "Существительное, женский род. Мн. число: die Straßen.",
        pos: "noun",
        examples: [
          "In welcher Straße wohnen Sie? — На какой улице вы живёте?"
        ]
      },
      {
        word: "die Straßenbahn, -en",
        translation: "трамвай",
        usage: "Существительное, женский род. Мн. число: die Straßenbahnen.",
        pos: "noun",
        examples: [
          "Fahren wir mit der Straßenbahn oder mit der U-Bahn? — Поедем на трамвае или на метро?"
        ]
      },
      {
        word: "streiten (sich), streitet, hat gestritten",
        translation: "ссориться",
        usage: "Глагол. Формы: streiten (sich) — streitet — hat gestritten.",
        pos: "verb",
        examples: [
          "Die Kinder streiten sich oft. — Дети часто ссорятся."
        ]
      },
      {
        word: "streng",
        translation: "строгий",
        usage: "Прилагательное. Склоняется по общим правилам.",
        pos: "adj",
        examples: [
          "Der Lehrer von meiner Tochter ist sehr streng. — Учитель моей дочери очень строгий."
        ]
      },
      {
        word: "der Stress (Sg.)",
        translation: "стресс",
        usage: "Существительное, мужской род. Несчисляемое, мн. число не используется.",
        pos: "noun",
        examples: [
          "Ich habe bei der Arbeit viel Stress. — У меня на работе много стресса."
        ]
      },
      {
        word: "stressig",
        translation: "напряжённый",
        usage: "Прилагательное. Склоняется по общим правилам.",
        pos: "adj",
        examples: [
          "Meine Arbeit ist stressig. — Моя работа напряжённая."
        ]
      },
      {
        word: "das Stück, -e",
        translation: "кусок, штука",
        usage: "Существительное, средний род. Мн. число: die Stücke.",
        pos: "noun",
        examples: [
          "Möchten Sie noch ein Stück Kuchen? — Хотите ещё кусок пирога?"
        ]
      },
      {
        word: "der Student, -en / die Studentin, -nen",
        translation: "студент",
        usage: "Существительное, мужской род. Мн. число: die Studenten.",
        pos: "noun",
        examples: [
          "Ich bin Studentin. — Я студентка."
        ]
      },
      {
        word: "studieren, studiert, hat studiert",
        translation: "учиться (в вузе)",
        usage: "Глагол. Формы: studieren — studiert — hat studiert.",
        pos: "verb",
        examples: [
          "Ich studiere in Mainz. — Я учусь в Майнце."
        ]
      },
      {
        word: "das Studium (Sg.)",
        translation: "учёба (в вузе)",
        usage: "Существительное, средний род. Несчисляемое, мн. число не используется.",
        pos: "noun",
        examples: [
          "Das Studium dauert drei Jahre. — Обучение длится три года."
        ]
      },
      {
        word: "der Stuhl, ¨-e",
        translation: "стул",
        usage: "Существительное, мужской род. Мн. число: die Stühle.",
        pos: "noun",
        examples: [
          "Ist der Stuhl frei? — Этот стул свободен?"
        ]
      },
      {
        word: "suchen, sucht, hat gesucht",
        translation: "искать",
        usage: "Глагол. Формы: suchen — sucht — hat gesucht.",
        pos: "verb",
        examples: [
          "Ich suche meine Brille. — Я ищу очки."
        ]
      },
      {
        word: "super",
        translation: "супер, отлично",
        usage: "Служебное слово / наречие.",
        pos: "other",
        examples: [
          "Der Film ist super. — Фильм супер."
        ]
      },
      {
        word: "der Supermarkt, ¨-e",
        translation: "супермаркет",
        usage: "Существительное, мужской род. Мн. число: die Supermärkte.",
        pos: "noun",
        examples: [
          "Ich kaufe oft im Supermarkt ein. — Я часто делаю покупки в супермаркете."
        ]
      },
      {
        word: "die Suppe, -n",
        translation: "суп",
        usage: "Существительное, женский род. Мн. число: die Suppen.",
        pos: "noun",
        examples: [
          "Schmeckt dir die Suppe? — Тебе нравится суп?"
        ]
      },
      {
        word: "surfen, surft, hat/ist gesurft",
        translation: "сёрфить (в интернете); кататься на доске",
        usage: "Глагол. Формы: surfen — surft — hat/ist gesurft.",
        pos: "verb",
        examples: [
          "Surfst du oft im Internet? — Ты часто сидишь в интернете?"
        ]
      },
      {
        word: "süß",
        translation: "сладкий; милый",
        usage: "Прилагательное. Склоняется по общим правилам.",
        pos: "adj",
        examples: [
          "Ich finde die Torte zu süß. — Торт мне кажется слишком сладким."
        ]
      },
      {
        word: "die Süßigkeiten (Pl.)",
        translation: "сладости",
        usage: "Существительное, женский род, всегда во мн. числе.",
        pos: "noun",
        examples: [
          "Welche Süßigkeiten isst du am liebsten? — Какие сладости ты больше всего любишь?"
        ]
      },
      {
        word: "sympathisch",
        translation: "симпатичный",
        usage: "Прилагательное. Склоняется по общим правилам.",
        pos: "adj",
        examples: [
          "Der neue Chef ist sehr sympathisch. — Новый начальник очень симпатичный."
        ]
      },
      {
        word: "das Tablet, -s",
        translation: "планшет",
        usage: "Существительное, средний род. Мн. число: die Tablets.",
        pos: "noun",
        examples: [
          "Hast du ein Tablet? — У тебя есть планшет?"
        ]
      },
      {
        word: "die Tablette, -n",
        translation: "таблетка",
        usage: "Существительное, женский род. Мн. число: die Tabletten.",
        pos: "noun",
        examples: [
          "Du sollst am Abend zwei Tabletten nehmen. — Вечером тебе надо принять две таблетки."
        ]
      },
      {
        word: "die Tafel, -n (z.B. Infotafel)",
        translation: "доска (классная); плитка",
        usage: "Существительное, женский род. Мн. число: die Tafeln.",
        pos: "noun",
        examples: [
          "Der Lehrer schreibt das neue Wort an die Tafel. — Учитель пишет новое слово на доске."
        ]
      },
      {
        word: "tanzen, tanzt, hat getanzt",
        translation: "танцевать",
        usage: "Глагол. Формы: tanzen — tanzt — hat getanzt.",
        pos: "verb",
        examples: [
          "Tanzen Sie gern? — Вы любите танцевать?"
        ]
      },
      {
        word: "die Tasche, -n",
        translation: "сумка; карман",
        usage: "Существительное, женский род. Мн. число: die Taschen.",
        pos: "noun",
        examples: [
          "Ich habe die Schlüssel in der Tasche. — Ключи у меня в сумке."
        ]
      },
      {
        word: "das Taschengeld (Sg.)",
        translation: "карманные деньги",
        usage: "Существительное, средний род. Несчисляемое, мн. число не используется.",
        pos: "noun",
        examples: [
          "Wie viel Taschengeld bekommen deine Kinder? — Сколько карманных денег получают твои дети?"
        ]
      },
      {
        word: "die Tasse, -n",
        translation: "чашка",
        usage: "Существительное, женский род. Мн. число: die Tassen.",
        pos: "noun",
        examples: [
          "Möchten Sie eine Tasse Kaffee? — Хотите чашку кофе?"
        ]
      },
      {
        word: "(aus)tauschen, tauscht (aus), hat (aus)getauscht",
        translation: "обмениваться",
        usage: "Глагол. Формы: (aus)tauschen — tauscht (aus) — hat (aus)getauscht.",
        pos: "verb",
        examples: [
          "Können wir bitte die Plätze tauschen? — Можем мы, пожалуйста, поменяться местами?"
        ]
      },
      {
        word: "das Taxi, -s",
        translation: "такси",
        usage: "Существительное, средний род. Мн. число: die Taxis.",
        pos: "noun",
        examples: [
          "Bitte rufen Sie mir ein Taxi. — Вызовите мне, пожалуйста, такси."
        ]
      },
      {
        word: "das Team, -s",
        translation: "команда",
        usage: "Существительное, средний род. Мн. число: die Teams.",
        pos: "noun",
        examples: [
          "Ich arbeite gern in einem Team. — Я люблю работать в команде."
        ]
      },
      {
        word: "der Tee, -s",
        translation: "чай",
        usage: "Существительное, мужской род. Мн. число: die Tees.",
        pos: "noun",
        examples: [
          "Ich trinke morgens immer Tee. — По утрам я всегда пью чай."
        ]
      },
      {
        word: "teilen, teilt, hat geteilt",
        translation: "делить",
        usage: "Глагол. Формы: teilen — teilt — hat geteilt.",
        pos: "verb",
        examples: [
          "Mein Mann und ich teilen uns die Arbeit. — Мы с мужем делим работу по дому."
        ]
      },
      {
        word: "teilnehmen, nimmt teil, hat teilgenommen",
        translation: "принимать участие",
        usage: "Глагол. Формы: teilnehmen — nimmt teil — hat teilgenommen.",
        pos: "verb",
        examples: [
          "Ich möchte an dem Tanzkurs teilnehmen. — Я хочу поучаствовать в курсе танцев."
        ]
      },
      {
        word: "das Telefon, -e",
        translation: "телефон",
        usage: "Существительное, средний род. Мн. число: die Telefone.",
        pos: "noun",
        examples: [
          "Darf ich bitte Ihr Telefon benutzen? — Можно мне воспользоваться вашим телефоном?"
        ]
      },
      {
        word: "telefonieren, telefoniert, hat telefoniert",
        translation: "говорить по телефону",
        usage: "Глагол. Формы: telefonieren — telefoniert — hat telefoniert.",
        pos: "verb",
        examples: [
          "Ich muss kurz telefonieren. — Мне нужно коротко позвонить."
        ]
      },
      {
        word: "der Teller, -",
        translation: "тарелка",
        usage: "Существительное, мужской род. Мн. число: die Teller.",
        pos: "noun",
        examples: [
          "Stell die Teller bitte auf den Tisch! — Поставь, пожалуйста, тарелки на стол!"
        ]
      },
      {
        word: "das Tennis (Sg.)",
        translation: "теннис",
        usage: "Существительное, средний род. Несчисляемое, мн. число не используется.",
        pos: "noun",
        examples: [
          "Steffi spielt sehr gut Tennis. — Штеффи очень хорошо играет в теннис."
        ]
      },
      {
        word: "der Termin, -e",
        translation: "назначенная встреча; срок",
        usage: "Существительное, мужской род. Мн. число: die Termine.",
        pos: "noun",
        examples: [
          "Am besten machen wir sofort einen Termin. — Лучше всего сразу назначим встречу."
        ]
      },
      {
        word: "teuer",
        translation: "дорогой",
        usage: "Прилагательное. Склоняется по общим правилам.",
        pos: "adj",
        examples: [
          "Das ist mir zu teuer. — Это для меня слишком дорого."
        ]
      },
      {
        word: "der Text, -e",
        translation: "текст",
        usage: "Существительное, мужской род. Мн. число: die Texte.",
        pos: "noun",
        examples: [
          "Lesen Sie bitte den Text. — Пожалуйста, прочитайте текст."
        ]
      },
      {
        word: "das Theater, -",
        translation: "театр",
        usage: "Существительное, средний род. Мн. число: die Theater.",
        pos: "noun",
        examples: [
          "Ich gehe nicht gern ins Theater. — Я не люблю ходить в театр."
        ]
      },
      {
        word: "das Thema, -en",
        translation: "тема",
        usage: "Существительное, средний род. Мн. число: die Themaen.",
        pos: "noun",
        examples: [
          "Heute heisst unser Thema: Essen und Trinken. — Сегодня наша тема: еда и напитки."
        ]
      },
      {
        word: "das Ticket, -s",
        translation: "билет",
        usage: "Существительное, средний род. Мн. число: die Tickets.",
        pos: "noun",
        examples: [
          "Wie viel kostet das Ticket? — Сколько стоит билет?"
        ]
      },
      {
        word: "tief",
        translation: "глубокий",
        usage: "Прилагательное. Склоняется по общим правилам.",
        pos: "adj",
        examples: [
          "Vorsicht, das Wasser ist tief! — Осторожно, вода глубокая!"
        ]
      },
      {
        word: "das Tier, -e",
        translation: "животное",
        usage: "Существительное, средний род. Мн. число: die Tiere.",
        pos: "noun",
        examples: [
          "Meine Lieblingstiere sind Katzen. — Мои любимые животные — кошки."
        ]
      },
      {
        word: "der Tipp, -s",
        translation: "совет, подсказка",
        usage: "Существительное, мужской род. Мн. число: die Tipps.",
        pos: "noun",
        examples: [
          "Kannst du mir einen guten Tipp geben? — Можешь дать мне хороший совет?"
        ]
      },
      {
        word: "der Tisch, -e",
        translation: "стол",
        usage: "Существительное, мужской род. Мн. число: die Tische.",
        pos: "noun",
        examples: [
          "Das Essen steht schon auf dem Tisch. — Еда уже на столе."
        ]
      },
      {
        word: "der Titel, -",
        translation: "заголовок, название",
        usage: "Существительное, мужской род. Мн. число: die Titel.",
        pos: "noun",
        examples: [
          "Wie heißt der Film? - Ich weiß den Titel nicht mehr. — Как называется фильм? — Я не помню название."
        ]
      },
      {
        word: "die Toilette, -n",
        translation: "туалет",
        usage: "Существительное, женский род. Мн. число: die Toiletten.",
        pos: "noun",
        examples: [
          "Wo ist die Toilette, bitte? — Где туалет, пожалуйста?"
        ]
      },
      {
        word: "toll",
        translation: "классный, здоровский",
        usage: "Прилагательное. Склоняется по общим правилам.",
        pos: "adj",
        examples: [
          "Der Urlaub war toll. — Отпуск был классным."
        ]
      },
      {
        word: "die Tomate, -n",
        translation: "помидор",
        usage: "Существительное, женский род. Мн. число: die Tomaten.",
        pos: "noun",
        examples: [
          "Die Tomate ist noch grün. — Помидор ещё зелёный."
        ]
      },
      {
        word: "der Topf, ¨-e",
        translation: "кастрюля",
        usage: "Существительное, мужской род. Мн. число: die Töpfe.",
        pos: "noun",
        examples: [
          "Ich möchte Kartoffeln kochen. — Я хочу сварить картошку."
        ]
      },
      {
        word: "die Torte, -n",
        translation: "торт",
        usage: "Существительное, женский род. Мн. число: die Torten.",
        pos: "noun",
        examples: [
          "Zum Geburtstag backe ich dir eine Torte. — На день рождения я испеку тебе торт."
        ]
      },
      {
        word: "tot",
        translation: "мёртвый",
        usage: "Прилагательное. Склоняется по общим правилам.",
        pos: "adj",
        examples: [
          "Meine Großeltern sind schon lange tot. — Мои бабушка и дедушка уже давно умерли."
        ]
      },
      {
        word: "total",
        translation: "совершенно, полностью",
        usage: "Служебное слово / наречие.",
        pos: "other",
        examples: [
          "Der Film ist total langweilig. — Фильм совершенно скучный."
        ]
      },
      {
        word: "die Tour, -en",
        translation: "тур, поездка",
        usage: "Существительное, женский род. Мн. число: die Touren.",
        pos: "noun",
        examples: [
          "Wo kann ich eine Stadttour buchen? — Где я могу забронировать экскурсию по городу?"
        ]
      },
      {
        word: "der Tourist, -en / die Touristin, -nen",
        translation: "турист",
        usage: "Существительное, мужской род. Мн. число: die Touristen.",
        pos: "noun",
        examples: [
          "Im Sommer kommen viele Touristen in diese Stadt. — Летом в этот город приезжает много туристов."
        ]
      },
      {
        word: "tragen, trägt, hat getragen",
        translation: "носить",
        usage: "Глагол. Формы: tragen — trägt — hat getragen.",
        pos: "verb",
        examples: [
          "Ich kann den Koffer nicht tragen, er ist zu schwer. — Я не могу нести чемодан, он слишком тяжёлый."
        ]
      },
      {
        word: "trainieren, trainiert, hat trainiert",
        translation: "тренировать(ся)",
        usage: "Глагол. Формы: trainieren — trainiert — hat trainiert.",
        pos: "verb",
        examples: [
          "Wir trainieren einmal pro Woche im Sportverein. — Мы тренируемся раз в неделю в спортклубе."
        ]
      },
      {
        word: "das Training, -s",
        translation: "тренировка",
        usage: "Существительное, средний род. Мн. число: die Trainings.",
        pos: "noun",
        examples: [
          "Das Training ist immer dienstags. — Тренировка всегда по вторникам."
        ]
      },
      {
        word: "der Traum, ¨-e",
        translation: "мечта, сон",
        usage: "Существительное, мужской род. Мн. число: die Traüme.",
        pos: "noun",
        examples: [
          "Ich möchte eine eigene Firma, das ist mein Traum. — Я хочу свою фирму, это моя мечта."
        ]
      },
      {
        word: "träumen, träumt, hat geträumt",
        translation: "мечтать, видеть сон",
        usage: "Глагол. Формы: träumen — träumt — hat geträumt.",
        pos: "verb",
        examples: [
          "Ich habe schlecht geträumt. — Мне приснился плохой сон."
        ]
      },
      {
        word: "traurig",
        translation: "грустный",
        usage: "Прилагательное. Склоняется по общим правилам.",
        pos: "adj",
        examples: [
          "Ich bin sehr traurig. — Мне очень грустно."
        ]
      },
      {
        word: "treffen (sich), trifft, hat getroffen",
        translation: "встречать",
        usage: "Глагол. Формы: treffen (sich) — trifft — hat getroffen.",
        pos: "verb",
        examples: [
          "Wir treffen uns immer freitags. — Мы всегда встречаемся по пятницам."
        ]
      },
      {
        word: "die Treppe, -n",
        translation: "лестница",
        usage: "Существительное, женский род. Мн. число: die Treppen.",
        pos: "noun",
        examples: [
          "Ich nehme die Treppe, nicht den Aufzug. — Я воспользуюсь лестницей, а не лифтом."
        ]
      },
      {
        word: "trinken, trinkt, hat getrunken",
        translation: "пить",
        usage: "Глагол. Формы: trinken — trinkt — hat getrunken.",
        pos: "verb",
        examples: [
          "Möchtest du etwas trinken? — Хочешь что-нибудь попить?"
        ]
      },
      {
        word: "trocken",
        translation: "сухой",
        usage: "Прилагательное. Склоняется по общим правилам.",
        pos: "adj",
        examples: [
          "Die Wäsche ist bald trocken. — Бельё скоро высохнет."
        ]
      },
      {
        word: "tschüs",
        translation: "пока (прощание)",
        usage: "Служебное слово / наречие.",
        pos: "other",
        examples: [
          "Tschüs, bis morgen! — Пока, до завтра!"
        ]
      },
      {
        word: "das T-Shirt, -s",
        translation: "футболка",
        usage: "Существительное, средний род. Мн. число: die T-Shirts.",
        pos: "noun",
        examples: [
          "Haben Sie dieses T-Shirt auch in M? — У вас есть эта футболка размера M?"
        ]
      },
      {
        word: "tun, tut, hat getan",
        translation: "делать",
        usage: "Глагол. Формы: tun — tut — hat getan.",
        pos: "verb",
        examples: [
          "Mein Rücken tut weh. — У меня болит спина."
        ]
      },
      {
        word: "die Tür, -en",
        translation: "дверь",
        usage: "Существительное, женский род. Мн. число: die Türen.",
        pos: "noun",
        examples: [
          "Mach bitte die Tür zu! — Закрой, пожалуйста, дверь!"
        ]
      },
      {
        word: "typisch",
        translation: "типичный",
        usage: "Прилагательное. Склоняется по общим правилам.",
        pos: "adj",
        examples: [
          "Diese Musik ist typisch für dieses Land. — Эта музыка типична для этой страны."
        ]
      },
      {
        word: "üben, übt, hat geübt",
        translation: "упражняться",
        usage: "Глагол. Формы: üben — übt — hat geübt.",
        pos: "verb",
        examples: [
          "Ich übe jeden Tag zwei Stunden Gitarre. — Я занимаюсь на гитаре два часа каждый день."
        ]
      },
      {
        word: "über",
        translation: "над; о, про",
        usage: "Служебное слово / наречие.",
        pos: "other",
        examples: [
          "Gehen Sie lieber hier über die Straße. — Лучше перейдите улицу здесь."
        ]
      },
      {
        word: "überall",
        translation: "везде",
        usage: "Служебное слово / наречие.",
        pos: "other",
        examples: [
          "Ich habe überall gesucht, aber ich kann meine Brille nicht finden. — Я везде искал, но не могу найти очки."
        ]
      },
      {
        word: "übermorgen",
        translation: "послезавтра",
        usage: "Служебное слово / наречие.",
        pos: "other",
        examples: [
          "Morgen habe ich frei. Ich komme übermorgen wieder ins Büro. — Завтра у меня выходной. Послезавтра я снова приду в офис."
        ]
      },
      {
        word: "übernachten, übernachtet, hat übernachtet",
        translation: "ночевать",
        usage: "Глагол. Формы: übernachten — übernachtet — hat übernachtet.",
        pos: "verb",
        examples: [
          "Du kannst bei mir übernachten. — Ты можешь у меня переночевать."
        ]
      },
      {
        word: "übersetzen, übersetzt, hat übersetzt",
        translation: "переводить",
        usage: "Глагол. Формы: übersetzen — übersetzt — hat übersetzt.",
        pos: "verb",
        examples: [
          "Können Sie mir den Brief bitte übersetzen? — Можете перевести мне это письмо?"
        ]
      },
      {
        word: "die Übersetzung, -en",
        translation: "перевод",
        usage: "Существительное, женский род. Мн. число: die Übersetzungen.",
        pos: "noun",
        examples: [
          "Ich brauche eine Übersetzung von meinem Zeugnis. — Мне нужен перевод моего аттестата."
        ]
      },
      {
        word: "überweisen, überweist, hat überwiesen",
        translation: "переводить (деньги)",
        usage: "Глагол. Формы: überweisen — überweist — hat überwiesen.",
        pos: "verb",
        examples: [
          "Sie können das Geld auch überweisen. — Вы можете деньги также перевести."
        ]
      },
      {
        word: "die Uhr, -en",
        translation: "часы; час",
        usage: "Существительное, женский род. Мн. число: die Uhren.",
        pos: "noun",
        examples: [
          "Es ist vier Uhr. Geht deine Uhr richtig? — Сейчас четыре. Твои часы идут точно?"
        ]
      },
      {
        word: "um",
        translation: "в (о времени); вокруг",
        usage: "Служебное слово / наречие.",
        pos: "other",
        examples: [
          "Er kommt um sieben Uhr. — Он придёт в семь."
        ]
      },
      {
        word: "umsteigen, steigt um, ist umgestiegen",
        translation: "делать пересадку",
        usage: "Глагол. Формы: umsteigen — steigt um — ist umgestiegen.",
        pos: "verb",
        examples: [
          "Sie müssen in Mannheim umsteigen. — Вам нужно пересесть в Мангейме."
        ]
      },
      {
        word: "umziehen, zieht um, ist umgezogen",
        translation: "переезжать",
        usage: "Глагол. Формы: umziehen — zieht um — ist umgezogen.",
        pos: "verb",
        examples: [
          "Nächsten Monat ziehen wir um. — В следующем месяце мы переезжаем."
        ]
      },
      {
        word: "sich umziehen, zieht sich um, hat sich umgezogen",
        translation: "переодеваться",
        usage: "Глагол. Формы: sich umziehen — zieht sich um — hat sich umgezogen.",
        pos: "verb",
        examples: [
          "Warte bitte, ich muss mich noch umziehen. — Подожди, пожалуйста, мне ещё нужно переодеться."
        ]
      },
      {
        word: "der Umzug, ¨-e",
        translation: "переезд",
        usage: "Существительное, мужской род. Мн. число: die Umzüge.",
        pos: "noun",
        examples: [
          "Der Umzug ist nächste Woche. — Переезд на следующей неделе."
        ]
      },
      {
        word: "unbedingt",
        translation: "обязательно",
        usage: "Служебное слово / наречие.",
        pos: "other",
        examples: [
          "Ich muss unbedingt mit dir sprechen. — Мне обязательно нужно с тобой поговорить."
        ]
      },
      {
        word: "und",
        translation: "и",
        usage: "Служебное слово / наречие.",
        pos: "other",
        examples: [
          "Ich habe heute und morgen frei. — У меня сегодня и завтра выходной."
        ]
      },
      {
        word: "der Unfall, ¨-e",
        translation: "авария, несчастный случай",
        usage: "Существительное, мужской род. Мн. число: die Unfälle.",
        pos: "noun",
        examples: [
          "Ich hatte gestern einen Unfall. — У меня вчера была авария."
        ]
      },
      {
        word: "die Universität, -en",
        translation: "университет",
        usage: "Существительное, женский род. Мн. число: die Universitäten.",
        pos: "noun",
        examples: [
          "Er studiert an der Universität Freiburg. — Он учится в университете Фрайбурга."
        ]
      },
      {
        word: "unten",
        translation: "внизу",
        usage: "Служебное слово / наречие.",
        pos: "other",
        examples: [
          "Er wohnt ganz unten im Haus. — Он живёт на самом нижнем этаже дома."
        ]
      },
      {
        word: "unter",
        translation: "под; среди",
        usage: "Служебное слово / наречие.",
        pos: "other",
        examples: [
          "Unter uns wohnt eine Familie mit drei Kindern. — Под нами живёт семья с тремя детьми."
        ]
      },
      {
        word: "unterhalten (sich), unterhält, hat unterhalten",
        translation: "развлекать; (sich) беседовать",
        usage: "Глагол. Формы: unterhalten (sich) — unterhält — hat unterhalten.",
        pos: "verb",
        examples: [
          "Wir haben uns über das Fußballspiel unterhalten. — Мы поговорили о футбольном матче."
        ]
      },
      {
        word: "die Unterkunft, ¨-e",
        translation: "жильё, размещение",
        usage: "Существительное, женский род. Мн. число: die Unterkünfte.",
        pos: "noun",
        examples: [
          "Ich suche noch eine Unterkunft in Basel. — Я ещё ищу жильё в Базеле."
        ]
      },
      {
        word: "unternehmen, unternimmt, hat unternommen",
        translation: "предпринимать",
        usage: "Глагол. Формы: unternehmen — unternimmt — hat unternommen.",
        pos: "verb",
        examples: [
          "Wollen wir heute Abend etwas unternehmen? — Давай сегодня вечером чем-нибудь займёмся?"
        ]
      },
      {
        word: "der Unterricht (Sg.)",
        translation: "урок, занятия",
        usage: "Существительное, мужской род. Несчисляемое, мн. число не используется.",
        pos: "noun",
        examples: [
          "Der Unterricht dauert bis 19 Uhr. — Занятие длится до 19:00."
        ]
      },
      {
        word: "der Unterschied, -e",
        translation: "различие",
        usage: "Существительное, мужской род. Мн. число: die Unterschiede.",
        pos: "noun",
        examples: [
          "Was ist der Unterschied zwischen den beiden Kursen? — В чём разница между двумя курсами?"
        ]
      },
      {
        word: "unterschreiben, unterschreibt, hat unterschrieben",
        translation: "подписывать",
        usage: "Глагол. Формы: unterschreiben — unterschreibt — hat unterschrieben.",
        pos: "verb",
        examples: [
          "Wo muss ich unterschreiben? — Где мне расписаться?"
        ]
      },
      {
        word: "die Unterschrift, -en",
        translation: "подпись",
        usage: "Существительное, женский род. Мн. число: die Unterschriften.",
        pos: "noun",
        examples: [
          "Hier fehlt noch Ihre Unterschrift. — Здесь ещё не хватает вашей подписи."
        ]
      },
      {
        word: "untersuchen, untersucht, hat untersucht",
        translation: "обследовать, исследовать",
        usage: "Глагол. Формы: untersuchen — untersucht — hat untersucht.",
        pos: "verb",
        examples: [
          "Der Arzt hat mich untersucht. — Врач меня осмотрел."
        ]
      },
      {
        word: "unterwegs sein",
        translation: "быть в пути",
        usage: "Служебное слово / наречие.",
        pos: "other",
        examples: [
          "Ich bin unterwegs und komme gleich. — Я в пути и скоро приду."
        ]
      },
      {
        word: "der Urlaub, -e",
        translation: "отпуск",
        usage: "Существительное, мужской род. Мн. число: die Urlaube.",
        pos: "noun",
        examples: [
          "Ich nehme im September Urlaub. — В сентябре я беру отпуск."
        ]
      },
      {
        word: "verabredet sein",
        translation: "быть договорившимся о встрече",
        usage: "Служебное слово / наречие.",
        pos: "other",
        examples: [
          "Ich bin mit meiner Freundin verabredet. — Я договорился о встрече с подругой."
        ]
      },
      {
        word: "die Veranstaltung, -en",
        translation: "мероприятие",
        usage: "Существительное, женский род. Мн. число: die Veranstaltungen.",
        pos: "noun",
        examples: [
          "Wir haben eine Veranstaltung. — У нас мероприятие."
        ]
      },
      {
        word: "verbieten / verboten sein",
        translation: "запрещать / быть запрещённым",
        usage: "Служебное слово / наречие.",
        pos: "other",
        examples: [
          "Hier ist Rauchen verboten. — Здесь курить запрещено."
        ]
      },
      {
        word: "verdienen, verdient, hat verdient",
        translation: "зарабатывать",
        usage: "Глагол. Формы: verdienen — verdient — hat verdient.",
        pos: "verb",
        examples: [
          "Ich verdiene 1.500 Euro im Monat. — Я зарабатываю 1500 евро в месяц."
        ]
      },
      {
        word: "der Verein, -e",
        translation: "клуб, объединение",
        usage: "Существительное, мужской род. Мн. число: die Vereine.",
        pos: "noun",
        examples: [
          "Er ist seit vielen Jahren im Verein. — Он много лет состоит в клубе."
        ]
      },
      {
        word: "vereinbaren, vereinbart, hat vereinbart",
        translation: "договариваться",
        usage: "Глагол. Формы: vereinbaren — vereinbart — hat vereinbart.",
        pos: "verb",
        examples: [
          "Können wir einen Termin vereinbaren? — Можем договориться о встрече?"
        ]
      },
      {
        word: "vergessen, vergisst, hat vergessen",
        translation: "забывать",
        usage: "Глагол. Формы: vergessen — vergisst — hat vergessen.",
        pos: "verb",
        examples: [
          "Ich habe meine Hausaufgaben vergessen. — Я забыл домашнее задание."
        ]
      },
      {
        word: "vergleichen, vergleicht, hat verglichen",
        translation: "сравнивать",
        usage: "Глагол. Формы: vergleichen — vergleicht — hat verglichen.",
        pos: "verb",
        examples: [
          "Vergleichen Sie die Angebote! — Сравните предложения!"
        ]
      },
      {
        word: "verkaufen, verkauft, hat verkauft",
        translation: "продавать",
        usage: "Глагол. Формы: verkaufen — verkauft — hat verkauft.",
        pos: "verb",
        examples: [
          "Er verkauft sein altes Auto. — Он продаёт свою старую машину."
        ]
      },
      {
        word: "der Verkehr (Sg.)",
        translation: "движение (транспортное)",
        usage: "Существительное, мужской род. Несчисляемое, мн. число не используется.",
        pos: "noun",
        examples: [
          "Morgens gibt es hier immer viel Verkehr. — По утрам здесь всегда много машин."
        ]
      },
      {
        word: "das Verkehrsmittel, -",
        translation: "транспортное средство",
        usage: "Существительное, средний род. Мн. число: die Verkehrsmittel.",
        pos: "noun",
        examples: [
          "Welche Verkehrsmittel benutzen Sie oft? — Каким транспортом вы часто пользуетесь?"
        ]
      },
      {
        word: "verletzen (sich), verletzt, hat verletzt",
        translation: "ранить, травмировать",
        usage: "Глагол. Формы: verletzen (sich) — verletzt — hat verletzt.",
        pos: "verb",
        examples: [
          "Sind Sie verletzt? — Вы ранены?"
        ]
      },
      {
        word: "verlieben (sich), verliebt, hat verliebt",
        translation: "влюбляться (sich)",
        usage: "Глагол. Формы: verlieben (sich) — verliebt — hat verliebt.",
        pos: "verb",
        examples: [
          "Ich bin total verliebt. — Я совершенно влюблён."
        ]
      },
      {
        word: "verlieren, verliert, hat verloren",
        translation: "терять, проигрывать",
        usage: "Глагол. Формы: verlieren — verliert — hat verloren.",
        pos: "verb",
        examples: [
          "Ich habe meinen Schlüssel verloren. — Я потерял ключ."
        ]
      },
      {
        word: "vermieten, vermietet, hat vermietet",
        translation: "сдавать в аренду",
        usage: "Глагол. Формы: vermieten — vermietet — hat vermietet.",
        pos: "verb",
        examples: [
          "Die Wohnung ist schon vermietet. — Квартира уже сдана."
        ]
      },
      {
        word: "der Vermieter, - / die Vermieterin, -nen",
        translation: "арендодатель",
        usage: "Существительное, мужской род. Мн. число: die Vermieter.",
        pos: "noun",
        examples: [
          "Unser Vermieter ist nett. — Наш арендодатель приятный."
        ]
      },
      {
        word: "verpassen, verpasst, hat verpasst",
        translation: "пропускать, опаздывать",
        usage: "Глагол. Формы: verpassen — verpasst — hat verpasst.",
        pos: "verb",
        examples: [
          "Ich habe den Zug verpasst. — Я пропустил поезд."
        ]
      },
      {
        word: "verreisen, verreist, ist verreist",
        translation: "уезжать в поездку",
        usage: "Глагол. Формы: verreisen — verreist — ist verreist.",
        pos: "verb",
        examples: [
          "Frau Doktor Müller ist zur Zeit verreist. — Доктор Мюллер сейчас в отъезде."
        ]
      },
      {
        word: "verschieben, verschiebt, hat verschoben",
        translation: "переносить, откладывать",
        usage: "Глагол. Формы: verschieben — verschiebt — hat verschoben.",
        pos: "verb",
        examples: [
          "Leider muss ich den Termin verschieben. — К сожалению, мне придётся перенести встречу."
        ]
      },
      {
        word: "verschieden",
        translation: "разный, различный",
        usage: "Прилагательное. Склоняется по общим правилам.",
        pos: "adj",
        examples: [
          "Unsere beiden Kinder sind sehr verschieden. — Наши два ребёнка очень разные."
        ]
      },
      {
        word: "die Verspätung, -en",
        translation: "опоздание",
        usage: "Существительное, женский род. Мн. число: die Verspätungen.",
        pos: "noun",
        examples: [
          "Unser Zug hat leider 15 Minuten Verspätung. — Наш поезд, к сожалению, опаздывает на 15 минут."
        ]
      },
      {
        word: "verstehen, versteht, hat verstanden",
        translation: "понимать",
        usage: "Глагол. Формы: verstehen — versteht — hat verstanden.",
        pos: "verb",
        examples: [
          "Können Sie mich verstehen? — Вы меня понимаете?"
        ]
      },
      {
        word: "versuchen, versucht, hat versucht",
        translation: "пробовать, пытаться",
        usage: "Глагол. Формы: versuchen — versucht — hat versucht.",
        pos: "verb",
        examples: [
          "Kann ich es auch einmal versuchen? — Можно мне тоже попробовать?"
        ]
      },
      {
        word: "der Vertrag, ¨-e",
        translation: "договор",
        usage: "Существительное, мужской род. Мн. число: die Verträge.",
        pos: "noun",
        examples: [
          "Ich muss den Vertrag noch unterschreiben. — Мне ещё нужно подписать договор."
        ]
      },
      {
        word: "viel, e",
        translation: "много",
        usage: "Служебное слово / наречие.",
        pos: "other",
        examples: [
          "Ich habe leider nicht viel Zeit. — К сожалению, у меня мало времени."
        ]
      },
      {
        word: "vielleicht",
        translation: "возможно",
        usage: "Служебное слово / наречие.",
        pos: "other",
        examples: [
          "Vielleicht bekomme ich diesen Job. — Возможно, я получу эту работу."
        ]
      },
      {
        word: "der Vogel, ¨-",
        translation: "птица",
        usage: "Существительное, мужской род. Мн. число: die Vögel.",
        pos: "noun",
        examples: [
          "Morgens singen die Vögel immer laut. — По утрам птицы всегда громко поют."
        ]
      },
      {
        word: "voll",
        translation: "полный",
        usage: "Прилагательное. Склоняется по общим правилам.",
        pos: "adj",
        examples: [
          "Morgens und abends sind die Züge immer sehr voll. — Утром и вечером поезда всегда очень переполнены."
        ]
      },
      {
        word: "der Volleyball, ¨-e",
        translation: "волейбол",
        usage: "Существительное, мужской род. Мн. число: die Volleybälle.",
        pos: "noun",
        examples: [
          "Ich spiele gern Volleyball. — Я люблю играть в волейбол."
        ]
      },
      {
        word: "von",
        translation: "от, из",
        usage: "Служебное слово / наречие.",
        pos: "other",
        examples: [
          "Das Auto von Felix ist kaputt. — Машина Феликса сломана."
        ]
      },
      {
        word: "vor",
        translation: "перед; (за) (о времени)",
        usage: "Служебное слово / наречие.",
        pos: "other",
        examples: [
          "Er ist vor einer Stunde gegangen. — Он ушёл час назад."
        ]
      },
      {
        word: "vorbei",
        translation: "мимо; закончилось",
        usage: "Служебное слово / наречие.",
        pos: "other",
        examples: [
          "Kommst du morgen bei mir vorbei? — Зайдёшь ко мне завтра?"
        ]
      },
      {
        word: "vorbereiten, bereitet vor, hat vorbereitet",
        translation: "подготавливать",
        usage: "Глагол. Формы: vorbereiten — bereitet vor — hat vorbereitet.",
        pos: "verb",
        examples: [
          "Ich muss mich auf meine Prüfung vorbereiten. — Мне нужно готовиться к экзамену."
        ]
      },
      {
        word: "vorgestern",
        translation: "позавчера",
        usage: "Служебное слово / наречие.",
        pos: "other",
        examples: [
          "Er hat mich vorgestern angerufen. — Он позвонил мне позавчера."
        ]
      },
      {
        word: "vorher",
        translation: "до этого, заранее",
        usage: "Служебное слово / наречие.",
        pos: "other",
        examples: [
          "Ich komme mit ins Café. Vorher muss ich aber noch zur Bank. — Я пойду с вами в кафе. Но сначала мне надо в банк."
        ]
      },
      {
        word: "vorn(e)",
        translation: "впереди",
        usage: "Служебное слово / наречие.",
        pos: "other",
        examples: [
          "Bitte vorn(e) einsteigen! — Пожалуйста, заходите в переднюю дверь!"
        ]
      },
      {
        word: "der Vorname, -n",
        translation: "имя (личное)",
        usage: "Существительное, мужской род. Мн. число: die Vornamen.",
        pos: "noun",
        examples: [
          "Ich heiße Müller, mein Vorname ist Eva. — Моя фамилия Мюллер, имя Ева."
        ]
      },
      {
        word: "der Vorschlag, ¨-e (haben/machen)",
        translation: "предложение (идея)",
        usage: "Существительное, мужской род. Мн. число: die Vorschläge.",
        pos: "noun",
        examples: [
          "Was machen wir am Wochenende? Hast du einen guten Vorschlag? — Что мы делаем в выходные? У тебя есть хорошее предложение?"
        ]
      },
      {
        word: "vorsichtig",
        translation: "осторожный",
        usage: "Прилагательное. Склоняется по общим правилам.",
        pos: "adj",
        examples: [
          "Sei vorsichtig! — Будь осторожен!"
        ]
      },
      {
        word: "vorstellen (sich), stellt vor, hat vorgestellt",
        translation: "представлять (sich — представляться)",
        usage: "Глагол. Формы: vorstellen (sich) — stellt vor — hat vorgestellt.",
        pos: "verb",
        examples: [
          "Können Sie sich bitte vorstellen? — Представьтесь, пожалуйста."
        ]
      },
      {
        word: "vorwärts",
        translation: "вперёд",
        usage: "Служебное слово / наречие.",
        pos: "other",
        examples: [
          "Fahren Sie bitte noch ein Stück vorwärts. — Проедьте, пожалуйста, ещё немного вперёд."
        ]
      },
      {
        word: "wach",
        translation: "бодрствующий",
        usage: "Прилагательное. Склоняется по общим правилам.",
        pos: "adj",
        examples: [
          "Bist du schon lange wach? — Ты давно проснулся?"
        ]
      },
      {
        word: "der Wagen, –",
        translation: "машина, повозка",
        usage: "Существительное, мужской род. Мн. число: die Wagen–.",
        pos: "noun",
        examples: [
          "Wo steht Ihr Wagen? — Где стоит ваша машина?"
        ]
      },
      {
        word: "wählen, wählt, hat gewählt",
        translation: "выбирать; набирать (номер)",
        usage: "Глагол. Формы: wählen — wählt — hat gewählt.",
        pos: "verb",
        examples: [
          "Sie müssen erst eine Null wählen. — Сначала вам нужно набрать ноль."
        ]
      },
      {
        word: "wahr",
        translation: "правдивый, истинный",
        usage: "Прилагательное. Склоняется по общим правилам.",
        pos: "adj",
        examples: [
          "Das ist (nicht) wahr! — Это (не)правда!"
        ]
      },
      {
        word: "wahrscheinlich",
        translation: "вероятно",
        usage: "Прилагательное. Склоняется по общим правилам.",
        pos: "adj",
        examples: [
          "Wahrscheinlich mache ich im Herbst einen Deutschkurs. — Вероятно, осенью я пойду на курс немецкого."
        ]
      },
      {
        word: "der Wald, ¨-er",
        translation: "лес",
        usage: "Существительное, мужской род. Мн. число: die Wälder.",
        pos: "noun",
        examples: [
          "Im Wald ist es ruhig. — В лесу тихо."
        ]
      },
      {
        word: "wandern, wandert, ist gewandert",
        translation: "ходить в походы",
        usage: "Глагол. Формы: wandern — wandert — ist gewandert.",
        pos: "verb",
        examples: [
          "Wir gehen oft wandern. — Мы часто ходим в походы."
        ]
      },
      {
        word: "wann",
        translation: "когда",
        usage: "Служебное слово / наречие.",
        pos: "other",
        examples: [
          "Wann bist du fertig? — Когда ты будешь готов?"
        ]
      },
      {
        word: "warm",
        translation: "тёплый",
        usage: "Прилагательное. Склоняется по общим правилам.",
        pos: "adj",
        examples: [
          "Hier ist es sehr warm. — Здесь очень тепло."
        ]
      },
      {
        word: "warten, wartet, hat gewartet",
        translation: "ждать",
        usage: "Глагол. Формы: warten — wartet — hat gewartet.",
        pos: "verb",
        examples: [
          "Können Sie ein paar Minuten warten? — Можете подождать несколько минут?"
        ]
      },
      {
        word: "warum",
        translation: "почему",
        usage: "Служебное слово / наречие.",
        pos: "other",
        examples: [
          "Warum kommt er nicht? — Почему он не приходит?"
        ]
      },
      {
        word: "was",
        translation: "что",
        usage: "Служебное слово / наречие.",
        pos: "other",
        examples: [
          "Was ist das? — Что это?"
        ]
      },
      {
        word: "die Wäsche, -n",
        translation: "бельё; стирка",
        usage: "Существительное, женский род. Мн. число: die Wäschen.",
        pos: "noun",
        examples: [
          "Ich muss noch Wäsche waschen. — Мне ещё нужно постирать бельё."
        ]
      },
      {
        word: "waschen (sich), wäscht, hat gewaschen",
        translation: "мыть, стирать",
        usage: "Глагол. Формы: waschen (sich) — wäscht — hat gewaschen.",
        pos: "verb",
        examples: [
          "Wo kann ich mir die Hände waschen? — Где я могу помыть руки?"
        ]
      },
      {
        word: "das Wasser (Sg.)",
        translation: "вода",
        usage: "Существительное, средний род. Несчисляемое, мн. число не используется.",
        pos: "noun",
        examples: [
          "Ein Glas Wasser, bitte. — Стакан воды, пожалуйста."
        ]
      },
      {
        word: "die Webseite, -n",
        translation: "веб-страница",
        usage: "Существительное, женский род. Мн. число: die Webseiten.",
        pos: "noun",
        examples: [
          "Es gibt viele Webseiten mit Grammatikübungen. — Есть много сайтов с упражнениями по грамматике."
        ]
      },
      {
        word: "wechseln, wechselt, hat gewechselt",
        translation: "менять",
        usage: "Глагол. Формы: wechseln — wechselt — hat gewechselt.",
        pos: "verb",
        examples: [
          "Wir müssen den Reifen wechseln. — Нам нужно заменить шину."
        ]
      },
      {
        word: "wecken, weckt, hat geweckt",
        translation: "будить",
        usage: "Глагол. Формы: wecken — weckt — hat geweckt.",
        pos: "verb",
        examples: [
          "Bitte wecken Sie mich morgen früh um fünf. — Пожалуйста, разбудите меня завтра в пять утра."
        ]
      },
      {
        word: "weg/weg- (wegbringen/-fahren/-gehen/-laufen/-machen/-nehmen/-werfen)",
        translation: "прочь; вдаль",
        usage: "Служебное слово / наречие.",
        pos: "other",
        examples: [
          "Meine Brille ist weg. — Мои очки пропали."
        ]
      },
      {
        word: "der Weg, -e",
        translation: "путь, дорога",
        usage: "Существительное, мужской род. Мн. число: die Wege.",
        pos: "noun",
        examples: [
          "Das ist der kürzeste Weg. — Это самый короткий путь."
        ]
      },
      {
        word: "wegen",
        translation: "из-за",
        usage: "Служебное слово / наречие.",
        pos: "other",
        examples: [
          "Wegen seiner Arbeit kann er leider nicht kommen. — Из-за работы он, к сожалению, не может прийти."
        ]
      },
      {
        word: "wehtun, tut weh, hat wehgetan",
        translation: "причинять боль",
        usage: "Глагол. Формы: wehtun — tut weh — hat wehgetan.",
        pos: "verb",
        examples: [
          "Wo tut es weh? — Где болит?"
        ]
      },
      {
        word: "weiblich",
        translation: "женский (пол)",
        usage: "Прилагательное. Склоняется по общим правилам.",
        pos: "adj",
        examples: [
          "Waehlen Sie bitte: weiblich oder maennlich. — Пожалуйста, выберите: женский или мужской."
        ]
      },
      {
        word: "weich",
        translation: "мягкий",
        usage: "Прилагательное. Склоняется по общим правилам.",
        pos: "adj",
        examples: [
          "Das Bett im Hotel war zu weich. — Кровать в отеле была слишком мягкой."
        ]
      },
      {
        word: "weil",
        translation: "потому что",
        usage: "Служебное слово / наречие.",
        pos: "other",
        examples: [
          "Ich kann nicht kommen, weil ich arbeiten muss. — Я не могу прийти, потому что мне надо работать."
        ]
      },
      {
        word: "der Wein, -e",
        translation: "вино",
        usage: "Существительное, мужской род. Мн. число: die Weine.",
        pos: "noun",
        examples: [
          "Nein danke, ich möchte keinen Wein. — Нет, спасибо, я не буду вина."
        ]
      },
      {
        word: "weinen, weint, hat geweint",
        translation: "плакать",
        usage: "Глагол. Формы: weinen — weint — hat geweint.",
        pos: "verb",
        examples: [
          "Warum weint das Baby? — Почему малыш плачет?"
        ]
      },
      {
        word: "weit",
        translation: "далёкий; широкий",
        usage: "Прилагательное. Склоняется по общим правилам.",
        pos: "adj",
        examples: [
          "Zum Bahnhof ist es nicht weit. — До вокзала недалеко."
        ]
      },
      {
        word: "weiter (z.B. weitermachen/-helfen)",
        translation: "дальше, далее",
        usage: "Служебное слово / наречие.",
        pos: "other",
        examples: [
          "Können wir jetzt weitermachen? — Можем мы теперь продолжить?"
        ]
      },
      {
        word: "welcher, -e, -s",
        translation: "который, какой",
        usage: "Служебное слово / наречие.",
        pos: "other",
        examples: [
          "Welcher Tag ist heute? — Какой сегодня день?"
        ]
      },
      {
        word: "die Welt, -en",
        translation: "мир",
        usage: "Существительное, женский род. Мн. число: die Welten.",
        pos: "noun",
        examples: [
          "Ich möchte gern einmal um die Welt reisen. — Я хотел бы однажды путешествовать по миру."
        ]
      },
      {
        word: "wenig, -e",
        translation: "мало",
        usage: "Служебное слово / наречие.",
        pos: "other",
        examples: [
          "Er verdient wenig. — Он зарабатывает мало."
        ]
      },
      {
        word: "wenigstens",
        translation: "по крайней мере",
        usage: "Служебное слово / наречие.",
        pos: "other",
        examples: [
          "Essen Sie wenigstens ein Stück Kuchen. — Съешьте хотя бы кусок пирога."
        ]
      },
      {
        word: "wenn",
        translation: "если, когда",
        usage: "Служебное слово / наречие.",
        pos: "other",
        examples: [
          "Wenn ich nicht arbeiten muss, komme ich. — Если мне не надо работать, я приду."
        ]
      },
      {
        word: "wer (wen, wem)",
        translation: "кто",
        usage: "Служебное слово / наречие.",
        pos: "other",
        examples: [
          "Wer ist das? — Кто это?"
        ]
      },
      {
        word: "werden, wird, ist geworden",
        translation: "становиться",
        usage: "Глагол. Формы: werden — wird — ist geworden.",
        pos: "verb",
        examples: [
          "Mein Sohn will Arzt werden. — Мой сын хочет стать врачом."
        ]
      },
      {
        word: "die Werkstatt, ¨-en",
        translation: "мастерская",
        usage: "Существительное, женский род. Мн. число: die Werkstätten.",
        pos: "noun",
        examples: [
          "Mein Auto ist kaputt. Es ist in der Werkstatt. — Моя машина сломалась. Она в мастерской."
        ]
      },
      {
        word: "der Wettbewerb, -e",
        translation: "соревнование, конкурс",
        usage: "Существительное, мужской род. Мн. число: die Wettbewerbe.",
        pos: "noun",
        examples: [
          "Mein Sohn hat bei einem Wettbewerb gewonnen. — Мой сын победил в соревновании."
        ]
      },
      {
        word: "das Wetter (Sg.)",
        translation: "погода",
        usage: "Существительное, средний род. Несчисляемое, мн. число не используется.",
        pos: "noun",
        examples: [
          "Heute ist das Wetter gut: Es ist sonnig und warm. — Сегодня хорошая погода: солнечно и тепло."
        ]
      },
      {
        word: "wichtig",
        translation: "важный",
        usage: "Прилагательное. Склоняется по общим правилам.",
        pos: "adj",
        examples: [
          "Es ist wichtig, dass Sie auch kommen. — Важно, чтобы вы тоже пришли."
        ]
      },
      {
        word: "wie",
        translation: "как",
        usage: "Служебное слово / наречие.",
        pos: "other",
        examples: [
          "Wie heißt du? — Как тебя зовут?"
        ]
      },
      {
        word: "wie viel, -e",
        translation: "сколько",
        usage: "Служебное слово / наречие.",
        pos: "other",
        examples: [
          "Wie viel kostet diese Hose? — Сколько стоят эти брюки?"
        ]
      },
      {
        word: "wieder",
        translation: "снова, опять",
        usage: "Служебное слово / наречие.",
        pos: "other",
        examples: [
          "Geht es dir wieder besser? — Тебе снова лучше?"
        ]
      },
      {
        word: "wiederholen, wiederholt, hat wiederholt",
        translation: "повторять",
        usage: "Глагол. Формы: wiederholen — wiederholt — hat wiederholt.",
        pos: "verb",
        examples: [
          "Können Sie das bitte wiederholen? — Можете повторить?"
        ]
      },
      {
        word: "das Wiederhören, -",
        translation: "до свидания (по телефону)",
        usage: "Существительное, средний род. Мн. число: die Wiederhören.",
        pos: "noun",
        examples: [
          "Also auf Wiederhören! — Итак, до свидания (по телефону)!"
        ]
      },
      {
        word: "das Wiedersehen, -",
        translation: "до свидания",
        usage: "Существительное, средний род. Мн. число: die Wiedersehen.",
        pos: "noun",
        examples: [
          "Auf Wiedersehen! — До свидания!"
        ]
      },
      {
        word: "willkommen",
        translation: "добро пожаловать",
        usage: "Служебное слово / наречие.",
        pos: "other",
        examples: [
          "Herzlich willkommen in Berlin! — Добро пожаловать в Берлин!"
        ]
      },
      {
        word: "der Wind, -e",
        translation: "ветер",
        usage: "Существительное, мужской род. Мн. число: die Winde.",
        pos: "noun",
        examples: [
          "Der Wind ist kalt. — Ветер холодный."
        ]
      },
      {
        word: "windig",
        translation: "ветрено",
        usage: "Прилагательное. Склоняется по общим правилам.",
        pos: "adj",
        examples: [
          "Heute ist es sehr windig. — Сегодня очень ветрено."
        ]
      },
      {
        word: "wirklich",
        translation: "действительно",
        usage: "Служебное слово / наречие.",
        pos: "other",
        examples: [
          "Es ist aber wirklich so. — Но это действительно так."
        ]
      },
      {
        word: "wissen, weiß, hat gewusst",
        translation: "знать (факт)",
        usage: "Глагол. Формы: wissen — weiß — hat gewusst.",
        pos: "verb",
        examples: [
          "Woher wissen Sie das? — Откуда вы это знаете?"
        ]
      },
      {
        word: "der Witz, -e",
        translation: "шутка",
        usage: "Существительное, мужской род. Мн. число: die Witze.",
        pos: "noun",
        examples: [
          "Wir haben Witze erzählt und viel gelacht. — Мы рассказывали шутки и много смеялись."
        ]
      },
      {
        word: "witzig",
        translation: "смешной, остроумный",
        usage: "Прилагательное. Склоняется по общим правилам.",
        pos: "adj",
        examples: [
          "Warum lachst du? Ich finde das nicht witzig. — Почему ты смеёшься? По-моему, это не смешно."
        ]
      },
      {
        word: "wo",
        translation: "где",
        usage: "Служебное слово / наречие.",
        pos: "other",
        examples: [
          "Wo waren Sie im Urlaub? — Где вы были в отпуске?"
        ]
      },
      {
        word: "woher",
        translation: "откуда",
        usage: "Служебное слово / наречие.",
        pos: "other",
        examples: [
          "Woher kommen Sie? — Откуда вы?"
        ]
      },
      {
        word: "wohin",
        translation: "куда",
        usage: "Служебное слово / наречие.",
        pos: "other",
        examples: [
          "Wohin fährt dieser Bus? — Куда едет этот автобус?"
        ]
      },
      {
        word: "wohnen, wohnt, hat gewohnt",
        translation: "жить, проживать",
        usage: "Глагол. Формы: wohnen — wohnt — hat gewohnt.",
        pos: "verb",
        examples: [
          "Ich wohne in Kiel. — Я живу в Киле."
        ]
      },
      {
        word: "die Wohnung, -en",
        translation: "квартира",
        usage: "Существительное, женский род. Мн. число: die Wohnungen.",
        pos: "noun",
        examples: [
          "Haben Sie schon eine neue Wohnung gefunden? — Вы уже нашли новую квартиру?"
        ]
      },
      {
        word: "das Wohnzimmer, -",
        translation: "гостиная",
        usage: "Существительное, средний род. Мн. число: die Wohnzimmer.",
        pos: "noun",
        examples: [
          "Die Kinder sitzen im Wohnzimmer und sehen fern. — Дети сидят в гостиной и смотрят телевизор."
        ]
      },
      {
        word: "die Wolke, -n",
        translation: "облако",
        usage: "Существительное, женский род. Мн. число: die Wolken.",
        pos: "noun",
        examples: [
          "Heute gibt es viele Wolken. — Сегодня много облаков."
        ]
      },
      {
        word: "wollen, will, wollte, hat gewollt",
        translation: "хотеть",
        usage: "Глагол. Формы: wollen — will — wollte — hat gewollt.",
        pos: "verb",
        examples: [
          "Wollen Sie einen Kaffee trinken? — Хотите выпить кофе?"
        ]
      },
      {
        word: "der Workshop, -s",
        translation: "мастер-класс, воркшоп",
        usage: "Существительное, мужской род. Мн. число: die Workshops.",
        pos: "noun",
        examples: [
          "Das war ein toller Workshop. — Это был классный мастер-класс."
        ]
      },
      {
        word: "das Wort, ¨-er",
        translation: "слово",
        usage: "Существительное, средний род. Мн. число: die Wörter.",
        pos: "noun",
        examples: [
          "Ich kenne das Wort nicht. — Я не знаю этого слова."
        ]
      },
      {
        word: "wunderbar",
        translation: "чудесный",
        usage: "Прилагательное. Склоняется по общим правилам.",
        pos: "adj",
        examples: [
          "Diese Schokolade schmeckt wunderbar. — Этот шоколад чудесный на вкус."
        ]
      },
      {
        word: "der Wunsch, ¨-e",
        translation: "желание",
        usage: "Существительное, мужской род. Мн. число: die Wünsche.",
        pos: "noun",
        examples: [
          "Was ist dein größter Wunsch? — Какое твоё самое большое желание?"
        ]
      },
      {
        word: "wünschen",
        translation: "желать",
        usage: "Служебное слово / наречие.",
        pos: "other",
        examples: [
          "Ich wünsche mir eine Kamera zum Geburtstag. — Я хочу камеру на день рождения."
        ]
      },
      {
        word: "die Wurst, ¨-e",
        translation: "колбаса",
        usage: "Существительное, женский род. Мн. число: die Würste.",
        pos: "noun",
        examples: [
          "Eine Wurst mit Pommes, bitte. — Колбаску с картофелем фри, пожалуйста."
        ]
      },
      {
        word: "die Zahl, -en",
        translation: "число, цифра",
        usage: "Существительное, женский род. Мн. число: die Zahlen.",
        pos: "noun",
        examples: [
          "Können Sie die Zahl bitte wiederholen? — Можете повторить число?"
        ]
      },
      {
        word: "zahlen, zahlt, hat gezahlt",
        translation: "платить",
        usage: "Глагол. Формы: zahlen — zahlt — hat gezahlt.",
        pos: "verb",
        examples: [
          "Entschuldigung, zahlen bitte! — Извините, счёт, пожалуйста!"
        ]
      },
      {
        word: "der Zahn, ¨-e",
        translation: "зуб",
        usage: "Существительное, мужской род. Мн. число: die Zähne.",
        pos: "noun",
        examples: [
          "Der Zahn tut mir schon seit einer Woche weh. — Зуб болит у меня уже неделю."
        ]
      },
      {
        word: "zeichnen, zeichnet, hat gezeichnet",
        translation: "рисовать (карандашом)",
        usage: "Глагол. Формы: zeichnen — zeichnet — hat gezeichnet.",
        pos: "verb",
        examples: [
          "Caterina kann gut zeichnen. — Катерина хорошо рисует."
        ]
      },
      {
        word: "zeigen, zeigt, hat gezeigt",
        translation: "показывать",
        usage: "Глагол. Формы: zeigen — zeigt — hat gezeigt.",
        pos: "verb",
        examples: [
          "Können Sie mir bitte den Weg zum Bahnhof zeigen? — Можете показать мне дорогу до вокзала?"
        ]
      },
      {
        word: "die Zeit, -en",
        translation: "время",
        usage: "Существительное, женский род. Мн. число: die Zeiten.",
        pos: "noun",
        examples: [
          "Ich habe heute keine Zeit. — Сегодня у меня нет времени."
        ]
      },
      {
        word: "die Zeitschrift, -en",
        translation: "журнал",
        usage: "Существительное, женский род. Мн. число: die Zeitschriften.",
        pos: "noun",
        examples: [
          "Diese Zeitschrift kauft Andrea jede Woche. — Этот журнал Андреа покупает каждую неделю."
        ]
      },
      {
        word: "die Zeitung, -en",
        translation: "газета",
        usage: "Существительное, женский род. Мн. число: die Zeitungen.",
        pos: "noun",
        examples: [
          "Ich lese manchmal Zeitung. — Иногда я читаю газету."
        ]
      },
      {
        word: "das Zelt, -e",
        translation: "палатка",
        usage: "Существительное, средний род. Мн. число: die Zelte.",
        pos: "noun",
        examples: [
          "Im Sommer schlafen wir manchmal im Zelt. — Летом мы иногда спим в палатке."
        ]
      },
      {
        word: "das Zentrum, -en",
        translation: "центр",
        usage: "Существительное, средний род. Мн. число: die Zentrumen.",
        pos: "noun",
        examples: [
          "Der Bahnhof ist im Stadtzentrum. — Вокзал в центре города."
        ]
      },
      {
        word: "der Zettel, -",
        translation: "записка, листок",
        usage: "Существительное, мужской род. Мн. число: die Zettel.",
        pos: "noun",
        examples: [
          "Hast du einen Zettel für mich? — У тебя есть для меня записка?"
        ]
      },
      {
        word: "das Zeugnis, -se",
        translation: "аттестат, свидетельство",
        usage: "Существительное, средний род. Мн. число: die Zeugnisse.",
        pos: "noun",
        examples: [
          "Morgen bekommen die Kinder ihr Zeugnis. — Завтра дети получат табель."
        ]
      },
      {
        word: "(an-)/(aus)ziehen, zieht (an/aus), hat/ist (an/aus)gezogen",
        translation: "надевать / снимать (об одежде)",
        usage: "Глагол. Формы: (an-)/(aus)ziehen — zieht (an/aus) — hat/ist (an/aus)gezogen.",
        pos: "verb",
        examples: [
          "Ich ziehe (mir) eine Jacke an. — Я надеваю куртку."
        ]
      },
      {
        word: "das Ziel, -e",
        translation: "цель",
        usage: "Существительное, средний род. Мн. число: die Ziele.",
        pos: "noun",
        examples: [
          "Was ist dein Ziel im Leben? — Какая у тебя цель в жизни?"
        ]
      },
      {
        word: "das Zimmer, -",
        translation: "комната",
        usage: "Существительное, средний род. Мн. число: die Zimmer.",
        pos: "noun",
        examples: [
          "Die Wohnung hat drei Zimmer. — В квартире три комнаты."
        ]
      },
      {
        word: "der Zirkus, -se",
        translation: "цирк",
        usage: "Существительное, мужской род. Мн. число: die Zirkusse.",
        pos: "noun",
        examples: [
          "Heute gehen wir mit den Kindern in den Zirkus. — Сегодня мы идём с детьми в цирк."
        ]
      },
      {
        word: "die Zitrone, -n",
        translation: "лимон",
        usage: "Существительное, женский род. Мн. число: die Zitronen.",
        pos: "noun",
        examples: [
          "Ich trinke den Tee mit Zitrone. — Я пью чай с лимоном."
        ]
      },
      {
        word: "der Zoo, -s",
        translation: "зоопарк",
        usage: "Существительное, мужской род. Мн. число: die Zoos.",
        pos: "noun",
        examples: [
          "Am Sonntag gehen wir in den Zoo. — В воскресенье мы идём в зоопарк."
        ]
      },
      {
        word: "zu",
        translation: "к, в; слишком",
        usage: "Служебное слово / наречие.",
        pos: "other",
        examples: [
          "Ich gehe zu Fuß. — Я иду пешком."
        ]
      },
      {
        word: "der Zucker (Sg.)",
        translation: "сахар",
        usage: "Существительное, мужской род. Несчисляемое, мн. число не используется.",
        pos: "noun",
        examples: [
          "Trinken Sie den Tee mit oder ohne Zucker? — Вы пьёте чай с сахаром или без?"
        ]
      },
      {
        word: "zuerst",
        translation: "сначала",
        usage: "Служебное слово / наречие.",
        pos: "other",
        examples: [
          "Zuerst müsst ihr die Hausaufgaben machen. — Сначала вам нужно сделать домашнее задание."
        ]
      },
      {
        word: "zufrieden",
        translation: "довольный",
        usage: "Служебное слово / наречие.",
        pos: "other",
        examples: [
          "Ich bin mit der Wohnung zufrieden. — Я доволен квартирой."
        ]
      },
      {
        word: "der Zug, ¨-e",
        translation: "поезд",
        usage: "Существительное, мужской род. Мн. число: die Züge.",
        pos: "noun",
        examples: [
          "Ich fahre gern mit dem Zug. — Я люблю ездить на поезде."
        ]
      },
      {
        word: "zuhören, hört zu, hat zugehört",
        translation: "слушать (внимательно)",
        usage: "Глагол. Формы: zuhören — hört zu — hat zugehört.",
        pos: "verb",
        examples: [
          "Hör mir doch mal zu! — Да послушай же меня!"
        ]
      },
      {
        word: "zuletzt",
        translation: "в последний раз; в конце концов",
        usage: "Служебное слово / наречие.",
        pos: "other",
        examples: [
          "Wir haben uns vor drei Jahren zuletzt gesehen. — Последний раз мы виделись три года назад."
        ]
      },
      {
        word: "zum Beispiel",
        translation: "например",
        usage: "Служебное слово / наречие.",
        pos: "other",
        examples: [
          "Mein Freund hat viele Hobbys, zum Beispiel Kochen, Lesen und Tanzen. — У моего друга много хобби, например готовка, чтение и танцы."
        ]
      },
      {
        word: "zumachen, macht zu, hat zugemacht",
        translation: "закрывать",
        usage: "Глагол. Формы: zumachen — macht zu — hat zugemacht.",
        pos: "verb",
        examples: [
          "Machst du bitte das Fenster zu? — Закроешь, пожалуйста, окно?"
        ]
      },
      {
        word: "zurück",
        translation: "назад, обратно",
        usage: "Служебное слово / наречие.",
        pos: "other",
        examples: [
          "Eine Fahrkarte nach Frankfurt und zurück, bitte. — Один билет до Франкфурта и обратно, пожалуйста."
        ]
      },
      {
        word: "zurück- (fahren, geben, gehen, kommen, laufen)",
        translation: "назад, обратно",
        usage: "Служебное слово / наречие.",
        pos: "other",
        examples: [
          "Wann kommst du zurück? — Когда ты вернёшься?"
        ]
      },
      {
        word: "zusammen",
        translation: "вместе",
        usage: "Служебное слово / наречие.",
        pos: "other",
        examples: [
          "Wollen wir zusammen essen gehen? — Пойдём вместе поедим?"
        ]
      },
      {
        word: "zwischen",
        translation: "между",
        usage: "Служебное слово / наречие.",
        pos: "other",
        examples: [
          "Heidelberg liegt zwischen Frankfurt und Stuttgart. — Гейдельберг находится между Франкфуртом и Штутгартом."
        ]
      }
    ]
  }
];
