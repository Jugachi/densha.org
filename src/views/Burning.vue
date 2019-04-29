<template>
  <v-container>
    <div>
      <v-tabs v-model="active" grow color="dark" dark slider-color="blue">
        <v-tab :key="0" ripple @click.stop="active = 0">
          Game
        </v-tab>
        <v-tab-item :key="0">
          <!-- Game -->
          <v-layout text-xs-center>
            <v-flex xs12>
              <h1>Densha de D: Burning Stage</h1>
            </v-flex>
          </v-layout>
          <v-layout row wrap justify-center>
            <v-flex xs8 md2 pr-2>
              <v-img :src="require('@/assets/covers/BS_Cover.jpg')" />
            </v-flex>
            <v-flex xs8 md6>
              <p>
                Densha de D: Burning Stage is the second game in the series. You can find more
                information later, when I'm done with a cool text.
              </p>
            </v-flex>
          </v-layout>
        </v-tab-item>
        <v-tab :key="1" ripple @click.stop="active = 1">
          Characters
        </v-tab>
        <v-tab-item :key="1">
          <!-- Characters -->
          <v-layout text-xs-center>
            <v-flex xs12>
              <h1>Characters</h1>
            </v-flex>
          </v-layout>
          <v-layout justify-center>
            <v-flex xs2>
              <v-img :src="require('@/assets/characters/BS/D2_mako.png')" />
            </v-flex>
            <v-flex xs6>
              <h2>Mako Sato</h2>
              <p>
                Mako Sato (佐藤 真子 Satō Mako, "Maya") is the driver of the Usui combination, a
                combination similar to that found in the WRC, and one of Takumi Fujiwara's opponents
                before he joins Project D. She drives a Nissan SilEighty, and was known as the
                fastest on Usui pass alongside Sayuki, her navigator, before she becomes a
                professional racer at the end of Final Stage.
              </p>
              <p>
                Mako Sato is known as the fastest driver on Usui pass alongside Sayuki, her
                navigator, in First Stage. Very little is known about her past life, but she has a
                soft spot for cars and men who like cars. She becomes one of Takumi Fujiwara's
                opponents in First Stage before he joins Project D. The race ends after Mako enters
                a corner too quickly, and spins out, almost causing an accident between the two
                cars.
              </p>
              <p>
                Mako became interested in Iketani of the Akina SpeedStars. She originally got close
                to him in order to race Takumi's Eight-Six in Usui, offering her virginity in
                exchange. But she and Iketani developed true feelings to each other later on in the
                series. Unfortunately, a misunderstanding kept them apart.
              </p>
              <p>
                Mako also attends Takumi's final race against Shinji Inui of Sidewinder with Sayuki,
                engaging in conversation with Shinji during the hillclimb race between Keisuke
                Takahashi and Go Hojo, not knowing that he is Takumi's opponent for the downhill
                until he reveals that he is.
              </p>
            </v-flex>
          </v-layout>
          <v-layout justify-center>
            <v-flex xs6 text-xs-right>
              <h2>Sayuki</h2>
              <p>
                Sayuki (沙雪, "Simone") is Mako Sato's co-driver/navigator, and works with her in
                her battle against Takumi Fujiwara in First Stage.
              </p>
              <p>
                Extremely little is known about her past life, even her surname is not revealed in
                the manga nor the anime. What is known is that she met and befriended Mako Sato
                earlier on in life, and developed a love and passion for cars and racing. It is
                unknown when, but eventually, the two tackle Usui pass, their home course, with
                Sayuki as Mako's navigator, and Mako as the primary driver. She technically does not
                own a car, but says that the Nissan SilEighty that she and Mako drive in is shared
                between them both.
              </p>
              <p>
                Eventually, the two challenge Takumi Fujiwara, Akina's new downhill ace at the time,
                to a race on Usui pass. The two lose after Mako enters one of the corners too fast,
                and is told to spin out by Sayuki as they were unable to recover. Takumi swiftly
                avoids them and prevents an accident.
              </p>
              <p>
                After the race, Sayuki invites Takumi and his friends, Itsuki, Iketani and Kenji to
                a pool party, and slowly develops a crush on Takumi, not hesitating to hide it;
                calling him cute and loveable. She also teases Mako and Iketani, who both have
                feelings for each other, though a misunderstanding kept them both apart. Sayuki,
                further on in the series, attends Takumi's final race against Sidewinder's Shinji
                Inui along with Mako, whom she says is extremely similar to Takumi in many ways.
              </p>
            </v-flex>
            <v-flex xs2>
              <v-img :src="require('@/assets/characters/BS/D2_sayuki.png')" />
            </v-flex>
          </v-layout>
          <v-layout justify-center>
            <v-flex xs2>
              <v-img :src="require('@/assets/characters/BS/D2_kenta.png')" />
            </v-flex>
            <v-flex xs6>
              <h2>Kenta Nakamaura</h2>
              <p>
                Kenta Nakamura (中村 賢太 Nakamura Kenta) is one of the youngest members of the
                Akagi RedSuns and the third best driver of the team, Kenta absolutely adores Keisuke
                Takahashi and is always eager to prove himself to Keisuke. Kenta was recognized by
                Keisuke himself for his driving skills, and has been somewhat taken under Keisuke's
                wing. Kenta specializes in rain conditions, because he had a habit of practicing in
                the rain since the wet roads wouldn't wear his tires down as much.
              </p>
              <p>
                In the First Stage, he arrogantly challenged Takumi to a wet race and lost. This was
                the time when Takumi used Itsuki as ballast, simulating a load of tofu. (Note that
                Takumi delivers tofu everyday, even if it rains.)
              </p>
              <p>
                In Fourth Stage, he drives the #2 van for Project D and mostly does the recon
                recording of courses before the team actually travels to the locations, but it's
                unknown if he uses his S14 for it. Before he joined the Akagi RedSuns he purposely
                waited for rainy days to practice drifting.
              </p>
              <p>
                In Fifth Stage, Kenta assisted Keisuke helping him pass Spirial Zero’s Ryuji Ikeda
                in the start of a foggy high speed section near the end.
              </p>
            </v-flex>
          </v-layout>
          <v-layout justify-center>
            <v-flex xs6 text-xs-right>
              <h2>Takeshi Nakazato</h2>
              <p>
                Takeshi Nakazato (中里 毅 Nakazato Takeshi, "Zack"), also known as the Black
                Lightning (黒い稲妻 Kuroi Inazuma), is the leader of the Myogi NightKids. He made
                his first appearance at the race in Akina where Keisuke Takahashi of the RedSuns is
                to race against Takumi Fujiwara. Surprised that Takumi could defeat Keisuke, Takeshi
                decides that he is going to be the one to challenge and defeat the "Akina downhill
                specialist", and that the RedSuns are next on his list.
              </p>
              <p>
                He is an intelligent and skilled driver, notably recognizing Takumi's the gutter
                hook technique while observing the Eight-Six's first battle with Keisuke's FD.
                However, his downfall is his anger and emotions getting in the way of his mind,
                resulting in poor throttle control. He also races all-out and usually fails to
                consider tire wear, so in the end, he loses the race, sometimes crashing his car. He
                is very good at acceleration and is known for his grip driving philosophy. His
                previous car was a Nissan Silvia (S13), with which he used drifting techniques. He
                changed to the Nissan Skyline GT-R (R32) after a devastating loss to a white (or
                rather silver) R32 on his home course of Myogi. Following the defeat by the Skyline,
                his philosophy changed, favoring grip driving techniques over "weak" and "showy"
                drifting techniques. He also believed that no matter what skill a driver has, a car
                will not run beyond its capabilities.
              </p>
              <p>
                Takeshi is the leader of the NightKids team on Mount Myogi and he has shown an
                interest in Sayuki of Impact Blue.
              </p>
              <p>He is a fan of the GT-R just like Kunimitsu Takahashi.</p>
            </v-flex>
            <v-flex xs2>
              <v-img :src="require('@/assets/characters/BS/D2_nakazato.png')" />
            </v-flex>
          </v-layout>
          <v-layout justify-center>
            <v-flex xs2>
              <v-img :src="require('@/assets/characters/BS/D2_kyousuke2P.png')" />
            </v-flex>
            <v-flex xs6>
              <h2>Kyoichi Sudo</h2>
              <p>
                Kyoichi Sudo (須藤 京一 Sudō Kyōichi, "Kyle") is the team leader and driving ace of
                the Lancer Evolution-only Emperor team from Gunma (according to his license plate,
                though it is changed to Tochigi in later series), and one of the best drivers in the
                series. He drives a Mitsubishi Lancer Evolution III powered up to 350 hp equipped
                with a WRC style misfiring system. In his philosophy, a car must have a high power
                turbo and all-wheel drive.
              </p>
              <p>
                An old acquaintance of Ryosuke Takahashi of the Akagi RedSuns, Kyoichi is much like
                Ryosuke: he is a calm and composed driver, compared to his teammate Seiji. Eager to
                show Ryosuke that he and his team are the best, Kyoichi and the Emperor team goes on
                to beat the various teams of Gunma, including the NightKids. He believes in the
                ultimate superiority of his race circuit techniques, whilst Ryosuke holds that
                street racing has its own special requirements. His home course is one-way, so he is
                unable to fully attack blind corners on two way roads, supporting Ryosuke's view. He
                is also often considered the first driver to have beaten Takumi, when Takumi blew
                out his engine at Akagi, but lost during a rematch at Irohazaka. It should be noted
                however, that the result should normally be considered a tie at best, and the race
                itself did not last more than one round. Kyoichi declared Takumi as the winner for
                merely being able to resist being overtaken at the last part of the course where
                other drivers fell prey to him. To Kyoichi, who takes pride in his ability to win, a
                tie at his home turf is equivalent to a loss.
              </p>
              <p>
                He is also a graduate of the racing school, the Todo School, despite having no
                prior-hinted connections to the institute: his Evo III is a stark contrast to the
                FWD Hondas the students use, and Sudo uses no Spoon Sports parts on his vehicle.
              </p>
              <p>
                He and the Two Guys From Tokyo might be the only ones in the series to feature a
                stock interior in their cars. The only modifications done to the car is the
                increment of Horsepower to 310 HP and a WRC Anti-Lag/Misfiring System to cure Turbo
                lag.
              </p>
            </v-flex>
          </v-layout>
          <v-layout justify-center>
            <v-flex xs6 text-xs-right>
              <h2>Seiji Iwaki</h2>
              <p>
                Seiji Iwaki(岩城 清次 Iwaki Seiji, "Hawk") is the number two driver in the Lancer
                Evolution-only Emperor team, therefore he drives the Lancer Evolution IV. Seiji is a
                driver with good racing skills, but he is rather arrogant and overconfident and
                occasionally imprudent. He has won many races driving for Emperor against other
                teams, including Takeshi Nakazato of the NightKids and a member of Thunder.
              </p>
              <p>
                Back when Team Emperor appeared in Gunma prefecture to challenge the local racing
                teams, Seiji was sent out against every single one. He is known to have easily
                defeated a 180SX from Team Thunderfires and Takeshi Nakazato from the Myogi
                NightKids among others, taking each car's team sticker afterwards, then cutting it
                in half and placing it upside-down on the side of his Evo's rear wing similarly to
                how fighter pilots would paint kill marks on their planes.
              </p>
              <p>
                After defeating various teams in Gunma, the Emperor team then set their sights on
                the Akina Speed Stars, aiming to beat Akina's infamous Eight-Six. Seiji volunteered
                to race for the Emperor team in his Evo IV against Takumi's Eight-Six. Kyoichi was
                well aware that it cannot be taken lightly and Seiji was specifically told that he
                was to follow "Simulation 3", a plan used only when victory was not certain. Said
                plan translated to "stay behind opponent, and overtake near the end before reaching
                the finish" but he was humiliated when his overconfidence and impatience led to his
                downfall, causing Kyoichi, the team leader, having to race the Eight-Six before the
                team could move on to the next opponent. It was also verbally stated that Seiji lost
                to Kai Kogashiwa in Irohazaka, but no actual battle was shown in the series. In
                Battle Stage, his Evo IV also raced Keisuke's FD, and lost.
              </p>
              <p>
                One of Seiji's trademarks is to take the team sticker of teams he has defeated, cut
                it in half, and stick it on the sideblade of his spoiler upside-down, emulating the
                "kill" markers that fighter pilots paint on their planes.
              </p>
            </v-flex>
            <v-flex xs2>
              <v-img :src="require('@/assets/characters/BS/D2_seiji_a.png')" />
            </v-flex>
          </v-layout>
        </v-tab-item>
        <!-- Trains -->
        <v-tab :key="2" ripple @click.stop="active = 2">
          Trains
        </v-tab>
        <v-tab-item :key="2">
          <v-layout text-xs-center>
            <v-flex xs12>
              <h1>New Trains</h1>
            </v-flex>
          </v-layout>
          <v-layout justify-center>
            <v-flex xs8>
              <p>
                Train talk
              </p>
            </v-flex>
          </v-layout>
          <v-layout justify-center>
            <v-flex xs2>
              <v-img :src="require('@/assets/trains/BS/ICON_21XX.png')" />
            </v-flex>
            <v-flex xs6 pl-2>
              <h2>京急２１００形</h2>
              <p>
                <a
                  href="https://ja.wikipedia.org/wiki/%E4%BA%AC%E6%80%A52100%E5%BD%A2%E9%9B%BB%E8%BB%8A"
                  target="_blank"
                  >（Wikipedia）</a
                >
              </p>
              <p>
                2199編成の運転士は岩城清次 21XX編成の運転士は須藤京一
              </p>

              <p>
                京浜急行電鉄の２１００形、通勤列車。 1998年デビュー。
                他の車両に比べると比較的新しい。
              </p>

              <p>
                アルミ合金製の車体に、ドイツ・シーメンス社のGTO素子VVVFインバーター制御を搭載し、
                発車時に発する磁励音が音階に聞こえることが特徴。

                <a href="https://www.youtube.com/watch?v=sFNSyH9mpP4" target="_blank"
                  >（YouTube）</a
                >
              </p>

              <p>
                車内の製造ステッカーには製造会社の下に「Powered by SIEMENS」の表記があり、
                「ドイツの技術は世界一」を思わせる。
              </p>

              <p>
                「ドレミファインバータ」や「歌う電車」と呼ばれていて、
                この独特のインバーターの音階が京急とのバトルＢＧＭに含まれているのもその為である
              </p>

              <p>
                ８話BGM Out of Site
                <a href="https://www.youtube.com/watch?v=ul6ArVnVvkQ" target="_blank"
                  >（YouTube）</a
                >
                １４話・１５話BGM MassDriver
                <a href="https://www.youtube.com/watch?v=wl5yEmao7GY" target="_blank"
                  >（YouTube）</a
                >
              </p>

              <p>
                京一の乗る21XXにキーボードや外部スピーカーが付いているのは
                この音を奏でるためである。（多分）
              </p>

              <p>
                鉄道会社には珍しく、 「けいきゅう♪ドレミたん」というイメージキャラクターがおり、
                段ボール箱の京急２１００に乗っている。
                <a href="https://www.youtube.com/watch?v=jDRfqRhpFqA" target="_blank"
                  >（YouTube）</a
                >
              </p>

              <p>
                この京急が走る「京急本線」は、神奈川県の浦賀から東京の品川を結び、
                ClimaxStageの１４話～１５話で登場する。
                <a
                  href="https://ja.wikipedia.org/wiki/%E4%BA%AC%E6%80%A5%E6%9C%AC%E7%B7%9A"
                  target="_blank"
                  >（Wikipedia）</a
                >
              </p>

              <p>
                京阪電鉄と同じく、元々は路面電車で開業したが、
                東京の人口増加とともにあっというまに電車は過密状態。
                果ては羽田空港や成田空港につながる空港線となり、 大忙しの路線となった。
              </p>

              <p>
                ClimaxStageでの戦いの舞台となる「京急本線」は、
                京急久里浜駅からスタート、横浜駅を経て品川駅までで、
                その様子は横浜駅を境に大きく変化する。
              </p>

              <p>
                前半の京急久里浜から横浜までは、
                丘陵地帯を縫うように走り、コーナーとトンネルが連続し、
                高架線路になってからは、ビルの隙間を走る。
              </p>

              <p>
                後半の横浜から品川までは、長いストレートと高速コーナーが増え、
                競合他社と並走するシーンも増える。
              </p>

              <p>
                終点の品川駅の直前には、 制限速度40km/hのコーナーの後、
                ＪＲ東日本の線路を跨ぐ鉄橋を渡り、 その先に制限25km/hの急なコーナーが待ち受ける。
              </p>

              <p>
                １５話で京一が言う、「制限40 25 のシケイン」はこれのことであり、
                いろは坂にピッタリの路線である。
              </p>

              <p>
                京急本線は、横浜や品川などの大都市を結ぶのだが、
                乗降客に対して、駅のプラットホーム数が少ない為、
                途中の駅で、４両編成と８両編成を連結させたり、切り離しをしたりと、
                最大で１２両編成で、過密運用している。
              </p>

              <p>
                ８話で阪急 梅田駅に乗り入れた時、 プラットホーム全てを京急２１００で埋めたのを見て、
                感動のあまりに須藤が涙を流していたのはその為である。
              </p>

              <p>京急には、阪急のような巨大なターミナル駅が無いのである。</p>

              <p>
                だが、その不利を補う為、
                車両の連結時間の短縮や、２つ以上の列車を、空いている線路に自動車のように縦列駐車して、特急列車を先行させたり
                乗客を乗せたまま反対方向へ発車、線路の途中にある待避線で特急列車の通過を待ち、
                即座にバックで再び元の駅に戻るなど、
                アクロバティックな運用を楽しむ京急のファンも多い。
                <a href="https://www.youtube.com/watch?v=VKCVh6Aba2w" target="_blank"
                  >（YouTube）</a
                >
              </p>

              <p>
                赤い車体が特徴的だったが、空港をイメージした青色の車体「KEIKYU BLUE SKY TRAIN」や、
                黄色い車体が有名な「西武鉄道」とコラボレーションをした、黄色い車体の「KEIKYU YELLOW
                HAPPY TRAIN」が登場。 電車でＤのカラーバリエーションとなった。
                <a href="https://www.keikyu.co.jp/train-info/train/index.html" target="_blank"
                  >（Keikyu）</a
                >
              </p>

              <p>９話のＢＧＭの名前が「RedLine」なのも赤い車両に合わせて付けられました。</p>

              <p>
                東京方面へ乗り入れる競合他社が多い為、 「速度にものを言わせて他社をブチ抜く」、
                「高速域からの停車、そこから急加速をして高速で去る」などから、
                「ハマの赤い暴走特急」（ハマ(Hama)は横浜(Yokohama)からきている）
                「路地裏の超特急」（元々が路面電車で路地裏を走っていたので、住宅地をすごい速度で走り抜ける）
                などと呼ばれている。
              </p>

              <p>
                常にノッチを入れて、コーナーでも加速、 まるで戦闘機かと思わせる走行音など、
                どこを見ても強さのネタに困らない、 エンペラーのランエボにふさわしい車両である。

                <a href="https://www.youtube.com/watch?v=w_FkSzy5Mqs" target="_blank"
                  >（YouTube）</a
                >
              </p>

              <p>
                ClimaxStageで須藤が押しているスイッチは「過給（ターボ）」と書かれており、 元ネタは、
                「SUPERBELL'Z」というグループが歌う「MOTERMAN 京浜急行VVVF」という曲の中で、
                「横浜からはライバル出現の為、120km/h運転を行います。」「ターボ良し。」「許容１２０、ターボ！」
                など、競合他社をブチ抜く歌詞から来ています。
                <a href="https://www.youtube.com/watch?v=e4tEC2uMFB4" target="_blank"
                  >（YouTube）</a
                >
              </p>

              <p>
                列車が遅れた際に、使われる事があるらしい…？
              </p>
            </v-flex>
          </v-layout>
          <v-layout justify-center>
            <v-flex xs6 text-xs-right pr-2>
              <h2>京阪８０００</h2>
              <p>
                <a
                  href="https://ja.wikipedia.org/wiki/%E4%BA%AC%E9%98%AA8000%E7%B3%BB%E9%9B%BB%E8%BB%8A"
                  target="_blank"
                  >（Wikipedia）</a
                >
              </p>
              <p>運転士は真子＆沙雪</p>

              <p>
                阪急京都線の川を挟んだ対岸に敷かれた、
                京都から大阪までを結ぶ「京阪本線」が５話の舞台。
              </p>

              <p>
                開業当時、京阪本線は路面電車で、 都市に沿うようにレールを敷いた為、カーブが多く、
                市街地を縫うように走る低速区間と、 郊外＆高架線路をかっ飛ばす高速区間が、
                くっきりと別れるテクニカルな路線である。 （京阪本線）
                <a
                  href="https://ja.wikipedia.org/wiki/%E4%BA%AC%E9%98%AA%E6%9C%AC%E7%B7%9A"
                  target="_blank"
                  >（Wikipedia）</a
                >
              </p>

              <p>
                ５話で拓海が
                「短い区間に細かいコーナーとアップダウンがぎっしり、まるでジェットコースター」
                「集中力を切らしたら民家に飛び込んで解体場行き」
                のセリフがありますが、まさにその通りで、沙雪のナビゲーションが必要なのも納得。
              </p>

              <p>
                あと、前面展望が楽しめる先頭部分は、常に人がいます。
                電車賃だけで楽しめる大人気のアトラクションです。
              </p>

              <p>
                その「京阪本線」を高速で駆け抜ける、通称「京阪特急８０００系」。
                1989年にデビューし、綺麗な車体と快適な乗り心地で、
                乗客が「８０００系が来るまで待ってから乗る」という、
                「目的地へ行く為の８０００系に乗るのが目的」の人気車両となった。
              </p>

              <p>
                名前に「特急」とついていますが、通勤列車として運用され、特急料金は無料です。
                （阪急と京阪の特急は無料、近鉄（中里の会社）と南海（三木の会社）の特急は有料）
              </p>

              <p>
                その後、２階建車両「ダブルデッカー」を中間に連結し、編成本数が順調に増えていった。
              </p>

              <p>
                京阪特急の見た目は、
                オレンジと朱色のツートンカラーに塗り分けられ、（特急色と呼ばれる）
                先頭に鳩のマークを掲げたのが本来の「京阪特急 ８０００系」の姿
                <a href="https://www.youtube.com/watch?v=uhcefvStEYI" target="_blank"
                  >（YouTube）</a
                >
              </p>

              <p>
                であるが、 電車でＤでは、薄いグリーンと濃いグリーンの「普通色」で、
                先頭に鷹のマークを掲げたデザインとなっている。
              </p>

              <p>
                （緑色の車両）
                <a href="https://www.youtube.com/watch?v=ymtRwD8C8kA" target="_blank"
                  >（YouTube）</a
                >
              </p>

              <p>
                これは頭文字Ｄのシルエイティが、
                「180SXの車体に、シルビアのフロント部分を接合した」ものに寄せています。
                <a
                  href="https://ja.wikipedia.org/wiki/%E6%97%A5%E7%94%A3%E3%83%BB%E3%82%B7%E3%83%AB%E3%82%A8%E3%82%A4%E3%83%86%E3%82%A3"
                  target="_blank"
                  >（Wikipedia）</a
                >
              </p>

              <p>
                京阪電鉄と阪急電鉄は、良いライバル関係であり、
                お互いの会社が競い合う事で、数々の名車が生まれました。
              </p>

              <p>
                この「京阪特急８０００系」も、阪急に対抗する為、
                高速区間をかっ飛ばし、カーブが多い低速区間をスムーズに走り抜けられ、
                京都～大阪間の利用者の多さと、過密な時刻運用に耐えれる強さを持っています。
              </p>

              <p>
                スローイン・ファーストアウトを繰り返し、
                高速コーナーの、斜めになった線路に張り付くように
                駆け抜けていくダイナミックな姿は大迫力の一言。
              </p>

              <p>
                関西最速の運転士は、もしかしたら京阪電鉄の運転士なのかもしれません。
                （きよ〇氏も電車でＤ５話のあとがきに書いています）
              </p>

              <p>
                その後、２０１０年前後から新車両の登場とともに８０００系も塗装変更。
                赤と黄色のツートンカラーになり、追加料金を支払う事で乗れる「プレミアムカー」が導入されました。
              </p>
            </v-flex>
            <v-flex xs2>
              <v-img :src="require('@/assets/trains/BS/ICON_8000.png')" />
            </v-flex>
          </v-layout>
          <v-layout justify-center>
            <v-flex xs2>
              <v-img :src="require('@/assets/trains/BS/ICON_8008.png')" />
            </v-flex>
            <v-flex xs6 pl-2>
              <h2>阪急８００８</h2>
              <p>
                <a
                  href="https://ja.wikipedia.org/wiki/%E9%98%AA%E6%80%A58000%E7%B3%BB%E9%9B%BB%E8%BB%8A"
                  target="_blank"
                />
              </p>
              <p>運転士は中村賢太</p>

              <p>
                1988年デビュー。 高橋啓介の８２００と同じく、神戸線で運用される通勤列車。
              </p>

              <p>
                車体はアルミ合金で軽く、大きな前面の窓や、
                時代に合った車椅子用スペースなどは、新しい阪急のデザインになった。
              </p>

              <p>
                …電撃デビューにも関わらず、どんどん増備され珍しさも薄れていき、
                対岸の京阪特急８０００系と比べると、新鮮さがなくなるのが速かった気がします。
              </p>

              <p>
                この阪急８００８の実車は、 阪神・淡路大震災で被災した後、集電装置が交換され、
                唯一シングルアームパンタグラフを搭載する、特徴的な編成となりました。
              </p>

              <p>
                増えていく阪急８０００系の中に埋もれる中、
                他の編成と比べて、少しだけ良い設備に乗せ換えてる辺りがとても賢太らしい…
              </p>

              <p>
                運が良ければ、通勤時間帯に８２００＋８００８の「神戸線Red
                Sans」タッグの１０両編成が見られる事もあるとか。
                お前、仕事中も啓介にくっついて走ってるのね…
              </p>
            </v-flex>
          </v-layout>
        </v-tab-item>
        <v-tab v-if="false" :key="3" ripple @click.stop="active = 3">
          Guide
        </v-tab>
        <v-tab-item v-if="false" :key="3">
          <!-- Guide -->
          <v-layout text-xs-center>
            <v-flex xs12>
              <h1>How to beat the game?</h1>
            </v-flex>
          </v-layout>
          <v-layout justify-center>
            <v-flex xs8>
              <p>
                This will be a wall of text that explains everything.
              </p>
            </v-flex>
          </v-layout>
          <v-layout>
            <v-flex xs6>
              <iframe
                width="560"
                height="315"
                src="https://www.youtube.com/embed/WwZz1Yxz5ho"
                frameborder="0"
                allowfullscreen
              />
            </v-flex>
            <v-flex pl-2>
              <h2>Stage 1 - Keisuke</h2>
              <p>
                More information about this kind of stage will be added soon.
              </p>
            </v-flex>
          </v-layout>
          <v-layout>
            <v-flex xs6>
              <iframe
                width="560"
                height="315"
                src="https://www.youtube.com/embed/OS5bAK3gZc"
                frameborder="0"
                allowfullscreen
              />
            </v-flex>
            <v-flex pl-2>
              <h2>Stage 2 - Nakazato</h2>
              <p>
                More information about this kind of stage will be added soon.
              </p>
            </v-flex>
          </v-layout>
          <v-layout>
            <v-flex xs6>
              <iframe
                width="560"
                height="315"
                src="https://www.youtube.com/embed/fdP4_itYimw"
                frameborder="0"
                allowfullscreen
              />
            </v-flex>
            <v-flex pl-2>
              <h2>Stage 3 - Shingo</h2>
              <p>
                More information about this kind of stage will be added soon.
              </p>
            </v-flex>
          </v-layout>
          <v-layout>
            <v-flex xs6>
              <iframe
                width="560"
                height="315"
                src="https://www.youtube.com/embed/Qj9_apUMuvk"
                frameborder="0"
                allowfullscreen
              />
            </v-flex>
            <v-flex pl-2>
              <h2>Stage 4 - Ryousuke</h2>
              <p>
                More information about this kind of stage will be added soon.
              </p>
            </v-flex>
          </v-layout>
          <v-layout>
            <v-flex xs6>
              <iframe
                width="560"
                height="315"
                src="https://www.youtube.com/embed/U2g-qvEtsuY"
                frameborder="0"
                allowfullscreen
              />
            </v-flex>
            <v-flex pl-2>
              <h2>Bonus Stage 1 - Masked Driver</h2>
              <p>
                More information about this kind of stage will be added soon.
              </p>
            </v-flex>
          </v-layout>
          <v-layout>
            <v-flex xs6>
              <iframe
                width="560"
                height="315"
                src="https://www.youtube.com/embed/28oU3ra69cU"
                frameborder="0"
                allowfullscreen
              />
            </v-flex>
            <v-flex pl-2>
              <h2>Bonus Stage 2 - Takumi-san</h2>
              <p>
                More information about this kind of stage will be added soon.
              </p>
            </v-flex>
          </v-layout>
          <v-layout>
            <v-flex xs6>
              <iframe
                width="560"
                height="315"
                src="https://www.youtube.com/embed/c3QP2vaiu0o"
                frameborder="0"
                allowfullscreen
              />
            </v-flex>
            <v-flex pl-2>
              <h2>Bonus Stage 3 - Bunta</h2>
              <p>
                More information about this kind of stage will be added soon.
              </p>
            </v-flex>
          </v-layout>
        </v-tab-item>
        <v-tab v-if="false" :key="4" ripple @click.stop="active = 4">
          Speedrun
        </v-tab>
        <v-tab-item v-if="false" :key="4">
          <!-- Speedrun -->
          <v-layout text-xs-center>
            <v-flex xs12>
              <h1>How to speedrun Densha?</h1>
            </v-flex>
          </v-layout>
          <v-layout justify-center>
            <v-flex xs8>
              <p>
                This will be a wall of text that explains everything.
              </p>
            </v-flex>
          </v-layout>
          <v-layout>
            <v-flex xs6>
              <iframe
                width="560"
                height="315"
                src="https://www.youtube.com/embed/WwZz1Yxz5ho"
                frameborder="0"
                allowfullscreen
              />
            </v-flex>
            <v-flex pl-2>
              <h2>Stage 1 - Keisuke</h2>
              <p>
                More information about this kind of stage will be added soon.
              </p>
            </v-flex>
          </v-layout>
          <v-layout>
            <v-flex xs6>
              <iframe
                width="560"
                height="315"
                src="https://www.youtube.com/embed/OS5bAK3gZc"
                frameborder="0"
                allowfullscreen
              />
            </v-flex>
            <v-flex pl-2>
              <h2>Stage 2 - Nakazato</h2>
              <p>
                More information about this kind of stage will be added soon.
              </p>
            </v-flex>
          </v-layout>
          <v-layout>
            <v-flex xs6>
              <iframe
                width="560"
                height="315"
                src="https://www.youtube.com/embed/fdP4_itYimw"
                frameborder="0"
                allowfullscreen
              />
            </v-flex>
            <v-flex pl-2>
              <h2>Stage 3 - Shingo</h2>
              <p>
                More information about this kind of stage will be added soon.
              </p>
            </v-flex>
          </v-layout>
          <v-layout>
            <v-flex xs6>
              <iframe
                width="560"
                height="315"
                src="https://www.youtube.com/embed/Qj9_apUMuvk"
                frameborder="0"
                allowfullscreen
              />
            </v-flex>
            <v-flex pl-2>
              <h2>Stage 4 - Ryousuke</h2>
              <p>
                More information about this kind of stage will be added soon.
              </p>
            </v-flex>
          </v-layout>
          <v-layout>
            <v-flex xs6>
              <iframe
                width="560"
                height="315"
                src="https://www.youtube.com/embed/U2g-qvEtsuY"
                frameborder="0"
                allowfullscreen
              />
            </v-flex>
            <v-flex pl-2>
              <h2>Bonus Stage 1 - Masked Driver</h2>
              <p>
                More information about this kind of stage will be added soon.
              </p>
            </v-flex>
          </v-layout>
          <v-layout>
            <v-flex xs6>
              <iframe
                width="560"
                height="315"
                src="https://www.youtube.com/embed/28oU3ra69cU"
                frameborder="0"
                allowfullscreen
              />
            </v-flex>
            <v-flex pl-2>
              <h2>Bonus Stage 2 - Takumi-san</h2>
              <p>
                More information about this kind of stage will be added soon.
              </p>
            </v-flex>
          </v-layout>
          <v-layout>
            <v-flex xs6>
              <iframe
                width="560"
                height="315"
                src="https://www.youtube.com/embed/c3QP2vaiu0o"
                frameborder="0"
                allowfullscreen
              />
            </v-flex>
            <v-flex pl-2>
              <h2>Bonus Stage 3 - Bunta</h2>
              <p>
                More information about this kind of stage will be added soon.
              </p>
            </v-flex>
          </v-layout>
        </v-tab-item>
      </v-tabs>
    </div>
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      active: null
    };
  }
};
</script>
