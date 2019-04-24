<template>
  <v-container>
    <div>
      <v-tabs grow v-model="active" color="dark" dark slider-color="red">
        <v-tab :key="0" ripple @click.stop="active=0">Game</v-tab>
        <v-tab-item :key="0">
          <!-- Game -->
          <v-layout text-xs-center>
            <v-flex xs12>
              <h1>Densha de D: Lightning Stage</h1>
            </v-flex>
          </v-layout>
          <v-layout justify-center>
            <v-flex xs2 pr-2>
              <v-img :src="require ('@/assets/covers/LS_Cover.jpg')"></v-img>
            </v-flex>
            <v-flex xs6>
              <p>
                Densha de D: Lightning Stage is the first game in the series. You can find more
                information later, when
                I'm done with a cool text.
              </p>
            </v-flex>
          </v-layout>
        </v-tab-item>
        <v-tab :key="1" ripple @click.stop="active=1">Characters</v-tab>
        <v-tab-item :key="1">
          <!-- Characters -->
          <v-layout text-xs-center>
            <v-flex xs12>
              <h1>Characters</h1>
            </v-flex>
          </v-layout>
          <v-layout justify-center>
            <v-flex xs2>
              <v-img :src="require ('@/assets/characters/LS/takumi1P.png')"></v-img>
            </v-flex>
            <v-flex xs6>
              <h2>Takumi Fujiwara</h2>
              <p>
                Takumi Fujiwara (藤原拓海 Fujiwara Takumi, known as Tak in the Tokyopop version) is the
                main protagonist of
                Initial D, a member of Project D and is friends and associated with the Akina
                SpeedStars. He is the
                driver of the Toyota Sprinter AE86 Trueno GT Apex or simply the Eight-Six,
                originally
                belonging to his
                father Bunta, and forcibly became the delivery boy of his father's tofu business,
                doing
                deliveries in
                the morning at Mount Akina.
              </p>
              <p>
                Despite seemingly not having knowledge of cars, in fact he didn't know that his car
                was
                called an
                Eight-Six, Takumi is a very skilled driver, having driven on Akina since he was in
                junior high. This
                caught the attention of other racing teams such as the Akagi RedSuns and the Myogi
                NightKids who wanted
                a piece of racing against Takumi.
              </p>
              <p>
                In his up and coming emergence, he raced against Keisuke Takahashi, NightKids
                members
                Takeshi Nakazato
                and Shingo Shoji, the female racing duo Impact Blue, Kenta Nakamura and finally
                Ryosuke
                Takahashi, in
                which he ended Ryosuke's winning streak. At the same time he was dating Natsuki
                Mogi.
              </p>
              <p>
                His winning streak supposedly came to an end when he raced against Kyoichi Sudo, the
                leader of Emperor at
                Mount Akagi, however Kyoichi stated that he didn't consider the match a race and
                just
                wanted to prove to
                Takumi that the Eight-Six is not powerful enough against his Evo III. The Eight Six
                was
                fixed by Bunta,
                with a new engine and some upgrades. Now with his fixed Eight-Six, he went up
                against
                Wataru Akiyama, a
                racer from the Saitama region and an Eight-Six driver.
              </p>
              <p>
                After having a rematch with Kyoichi and racing against Kai Kogashiwa and making
                amends
                with Natsuki
                before going in their separate ways. He joined Ryosuke's new team Project D, which
                had a
                similar goal of
                his previous team the RedSuns. As the downhill driver of Project D, his skill
                massively
                improved, racing
                against tougher opponents from different regions, at the same time he met his second
                girlfriend Mika
                Uehara, a golfer.
              </p>
              <p>
                His final race within Project D was against Sidewinder member Shinji Inui, and
                though
                he won, it left
                the Eight-Six's engine destroyed. He now currently drives Bunta's Subaru Impreza,
                continuing to race on
                Mount Akina while also planning on becoming a professional racer.
              </p>
            </v-flex>
          </v-layout>
          <v-layout justify-center>
            <v-flex xs6 text-xs-right>
              <h2>Keisuke Takahashi</h2>
              <p>
                Keisuke Takahashi (高橋 啓介 Takahashi Keisuke, "K.T.") is the number two driver for the
                RedSuns. Keisuke
                drives an efini RX-7 Type R (FD3S) , and is a skilled driver, second only to his
                brother,
                Ryosuke.
                Keisuke is a rather hot-headed young man and does not like losing. He is also known
                to
                drive with his
                emotions- for example, if he realises that he cannot win, his driving suffers and,
                if he
                is in the lead,
                he is carefree and very relaxed. He used to rebel against his parents and got in
                many
                fights with them.
                They stopped trying on Keisuke. Ryosuke very much understood what Keisuke felt.
                Ryosuke
                then took
                Keisuke on a downhill, and it changed his life. Before Ryosuke got Keisuke involved
                in
                street racing, he
                was the leader of a Bōsōzoku gang. He joins his brother's new team and has a rivalry
                with
                Takumi.
                Keisuke races the hillclimb (uphill) on most races, while Takumi races the downhill.
              </p>
              <p>
                Keisuke isn't analytical like his older brother, and Ryosuke's ability to compute
                and
                analyze amazes
                Keisuke. But at the same time, Keisuke's ability to think less while he is driving,
                and
                to
                do only what
                he feels amazes Ryosuke. While Ryosuke has decided that he won't race much longer,
                and
                that he will
                become a doctor in the future, Keisuke has dedicated his life to racing- his
                eventual
                goal
                is to become
                a professional racer. But, first, he must defeat Takumi. Though visibly getting
                along,
                they still have
                some kind of argumentation over who is the ace, but he has respect for Takumi. He
                stated
                once he was not
                as strong minded as Takumi, because Takumi fell asleep really fast before a great
                battle,
                making Keisuke
                ask himself if Takumi even knew what pressure was.
              </p>
              <p>
                By the end of the Fourth Stage anime, Keisuke's skill has dramatically improved to
                the
                point that he is
                offered contact information for a professional racing team. Keisuke turns the offer
                down
                since he
                believes he still has a ways to go before he's ready for a professional racing
                career.
                At
                the same time,
                Takumi remarks that Keisuke could probably defeat him if they had a serious race.
              </p>
              <p>
                After the Final Stage, he becomes a full professional racer with his RX-7 and
                Tomiguchi
                being his
                personal mechanic
              </p>
            </v-flex>
            <v-flex xs2>
              <v-img :src="require ('@/assets/characters/LS/keisuke1P.png')"></v-img>
            </v-flex>
          </v-layout>
          <v-layout justify-center>
            <v-flex xs2>
              <v-img :src="require ('@/assets/characters/LS/nakazato1P.png')"></v-img>
            </v-flex>
            <v-flex xs6>
              <h2>Takeshi Nakazato</h2>
              <p>
                Takeshi Nakazato (中里 毅 Nakazato Takeshi, "Zack"), also known as the Black Lightning
                (黒い稲妻 Kuroi Inazuma),
                is the leader of the Myogi NightKids. He made his first appearance at the race in
                Akina where Keisuke
                Takahashi of the RedSuns is to race against Takumi Fujiwara. Surprised that Takumi
                could defeat Keisuke,
                Takeshi decides that he is going to be the one to challenge and defeat the "Akina
                downhill specialist",
                and that the RedSuns are next on his list.
              </p>
              <p>
                He is an intelligent and skilled driver, notably recognizing Takumi's the gutter
                hook technique while
                observing the Eight-Six's first battle with Keisuke's FD. However, his downfall is
                his anger and
                emotions getting in the way of his mind, resulting in poor throttle control. He also
                races all-out and
                usually fails to consider tire wear, so in the end, he loses the race, sometimes
                crashing his car. He is
                very good at acceleration and is known for his grip driving philosophy. His previous
                car was a Nissan
                Silvia (S13), with which he used drifting techniques. He changed to the Nissan
                Skyline GT-R (R32) after
                a devastating loss to a white (or rather silver) R32 on his home course of Myogi.
                Following the defeat
                by the Skyline, his philosophy changed, favoring grip driving techniques over "weak"
                and "showy"
                drifting techniques. He also believed that no matter what skill a driver has, a car
                will not run beyond
                its capabilities.
              </p>
              <p>
                Takeshi is the leader of the NightKids team on Mount Myogi and he has shown an
                interest in Sayuki of
                Impact Blue.
              </p>
              <p>He is a fan of the GT-R just like Kunimitsu Takahashi.</p>
            </v-flex>
          </v-layout>
          <v-layout justify-center>
            <v-flex xs4 offset-xs2 text-xs-right>
              <h2>Shingo Shoji</h2>
              <p>
                Shingo Shoji (庄司 慎吾 Shōji Shingo) is a member of the NightKids who drives a red
                Honda Civic SiR-II (EG6).
                Shingo races dangerously, he will nudge his rival's car in order to make the other
                driver lose control
                if he's unsure about his own chances of winning. He doesn't find plain downhill
                races any fun,
                preferring to race against a handicap. In this handicap match, Shingo tapes his
                right hand to the
                steering wheel for the duration of the race. By doing this, Shingo limits his own
                steering capabilities.
                In terms of racing ability, Shingo is the best driver on the Night Kids team. He is
                also a childhood
                friend of Impact Blue's navigator, Sayuki.
              </p>
              <p>
                Shingo actually shares many beliefs with Takeshi, but whenever they watch other
                battles, they try to stay
                away from one another so that people won't mistake them as friends even though in
                Extra Stage, they
                acted like buddies. There were also times that he supported his teammate for the
                Night Kids' sake, like
                the battle against Seiji Iwaki and his Evo IV.
              </p>
            </v-flex>
            <v-flex xs2>
              <v-img :src="require ('@/assets/characters/LS/singo1P.png')"></v-img>
            </v-flex>
          </v-layout>
          <v-layout justify-center>
            <v-flex xs2>
              <v-img :src="require ('@/assets/characters/LS/ryousuke1P.png')"></v-img>
            </v-flex>
            <v-flex xs6>
              <h2>Ryosuke Takahashi</h2>
              <p>
                Ryosuke Takahashi (高橋 涼介, Takahashi Ryōsuke; known as Ry in the Tokyopop version) is
                one of the main
                characters of Initial D, the founder and leader of both the Akagi RedSuns and
                Project D. Originally a
                solo racer nicknamed Akagi's White Comet, he created the RedSuns, with the purpose
                of dominating in the
                street racing scene all over Japan and recruited racers including his brother
                Keisuke, which gave both
                of them the nicknames of the Rotary Brothers.
              </p>
              <p>
                The RedSuns' plan was put on hold following Keisuke's defeat and the emergence of
                Takumi Fujiwara, the
                driver of the Toyota AE86. Before his race with Fujiwara, he was invited to a
                professional racing team
                but he passed cause "his only interest was street racing". His winning streak came
                to an end when he
                lost to Fujiwara. After his defeat, he temporarily retired from racing until making
                a comeback to race
                against the threat of Team Emperor and their leader and rival Kyoichi Sudo. He also
                raced and defeated
                Takeshi Nakazato, the leader of the Myogi's NightKids.
              </p>
              <p>
                Soon after Takumi raced against Wataru Akiyama, he created a new racing team called
                Project D, and also
                effectively disbanding the RedSuns, with the similar goal to dominate the street
                racing scene but for
                one year before he goes back to medical school.
              </p>
              <p>
                During the Project D races in Kanagawa, he is revealed to have a connection with Rin
                Hojo, a fellow
                medical student and a street racer from Kanagawa where they had disputes with a girl
                named Kaori, who
                was Rin's fiancee at the time but committed suicide following verbal abuse by Rin,
                which led to Rin
                disappearing from the racing scene. Knowing that he cannot escape the past, he
                modified his car in
                secret with Shuichi Matsumoto and raced Rin at the Toyo Tires Turnpike. However
                thanks to assistance of
                Team Spiral's leader Ryuji Ikeda, who was spectating behind, he was able to stop Rin
                from crashing and
                afterwards settled their differences with each other.
              </p>
              <p>
                After the disbanding of Project D, he continues to go on a silent spectator at
                street races, saying that
                he would eventually pick out new gifted racers. It is also implied that he is still
                continuing his
                studies on medicine at the same time.
              </p>
            </v-flex>
          </v-layout>
          <v-layout justify-center>
            <v-flex xs6>
              <h2>Hukumen</h2>
              <p>
                Hukumen is the owner of a tofu shop in Gunma, and the father of
                Takumi. He
                used to be the No.1 downhill racer in Mt. Akina years ago, but he no longer races,
                preferring to guide
                Takumi's racing development. He is the original driver of the mysterious "white
                ghost of Akina" AE86
                Sprinter Trueno that holds the record of the fastest downhill time at Akina. Bunta
                has a unique way of
                training his son to drive - every morning when Takumi delivers tofu. Bunta gives
                Takumi a cup of water
                which is placed in the drink holder; Takumi must not spill even a drop of it while
                he is driving. This
                is ostensibly to prevent breaking the tofu in the boot, but it forces Takumi to
                drive very smoothly. As
                for Bunta, he is still considered the best downhill racer in Akina, which is shown
                early in the series
                when he pushes the Trueno with Yuichi in the passenger seat, lighting a cigarette
                while drifting around
                a corner.
              </p>
              <p>
                Later in the series, Takumi used the Trueno more than Bunta, so he gave the car to
                Takumi. While test
                driving a Subaru Impreza WRX STi Type R Version V on Akina, he defeated his son,
                inducing a AWD complex
                in Takumi. Bunta decided to buy the car, but hid this fact from Takumi for some
                time. After revealing
                that he was the driver, he then told Takumi to alternate between the Impreza and his
                Eight-Six for
                deliveries - another strategy to improve Takumi as a driver, showing him the
                potential of modern cars
                and the characteristics of AWD. While this shows his training strategy, it is seen
                that Bunta is, once
                again, proven to be the most formidable opponent in Akina.
              </p>
              <p>
                Bunta is thought to have been undefeated during his time as a street racer. There is
                some dialog between
                Tachibana and Iketani that could possibly dispute this, but the vague description of
                events leaves the
                actual results up to speculation. Specifically, this dialog occurs during the
                Tochigi campaign (volume
                15 of the manga, or the Third Stage movie) when Tachibana explains the rivalry
                between Bunta and Ken
                Kogashiwa. According to Tachibana, Bunta and Ken completed multiple races on the
                Irohazaka road to
                determine who was truly the fastest street racer, and "on the last race that
                counted", Bunta won. This
                could mean that Bunta possibly lost one or more rounds, but this idea is never
                discussed further as the
                dialog was written solely to provide a racing pedigree for Ken's son, who had
                recently challenged Takumi
                to a race on the same road.
              </p>
            </v-flex>
            <v-flex xs2>
              <v-img :src="require ('@/assets/characters/LS/hukumen.png')"></v-img>
            </v-flex>
          </v-layout>
          <v-layout justify-center>
            <v-flex xs2>
              <v-img :src="require ('@/assets/characters/LS/takumisan_1P.png')" class="takumisan">
              </v-img>
            </v-flex>
            <v-flex xs6>
              <h2>Takumi-san</h2>
              <p>
                Takumi-san is silly character that got created in the Densha de D Manga.
                More information will be added as soon as possible.
              </p>
            </v-flex>
          </v-layout>
          <v-layout justify-center>
            <v-flex xs6>
              <h2>Bunta Fujiwara</h2>
              <p>
                Bunta Fujiwara (藤原 文太 Fujiwara Bunta) is the owner of a tofu shop in Gunma, and the
                father of
                Takumi. He
                used to be the No.1 downhill racer in Mt. Akina years ago, but he no longer races,
                preferring to guide
                Takumi's racing development. He is the original driver of the mysterious "white
                ghost of Akina" AE86
                Sprinter Trueno that holds the record of the fastest downhill time at Akina. Bunta
                has a unique way of
                training his son to drive - every morning when Takumi delivers tofu. Bunta gives
                Takumi a cup of water
                which is placed in the drink holder; Takumi must not spill even a drop of it while
                he is driving. This
                is ostensibly to prevent breaking the tofu in the boot, but it forces Takumi to
                drive very smoothly. As
                for Bunta, he is still considered the best downhill racer in Akina, which is shown
                early in the series
                when he pushes the Trueno with Yuichi in the passenger seat, lighting a cigarette
                while drifting around
                a corner.
              </p>
              <p>
                Later in the series, Takumi used the Trueno more than Bunta, so he gave the car to
                Takumi. While test
                driving a Subaru Impreza WRX STi Type R Version V on Akina, he defeated his son,
                inducing a AWD complex
                in Takumi. Bunta decided to buy the car, but hid this fact from Takumi for some
                time. After revealing
                that he was the driver, he then told Takumi to alternate between the Impreza and his
                Eight-Six for
                deliveries - another strategy to improve Takumi as a driver, showing him the
                potential of modern cars
                and the characteristics of AWD. While this shows his training strategy, it is seen
                that Bunta is, once
                again, proven to be the most formidable opponent in Akina.
              </p>
              <p>
                Bunta is thought to have been undefeated during his time as a street racer. There is
                some dialog between
                Tachibana and Iketani that could possibly dispute this, but the vague description of
                events leaves the
                actual results up to speculation. Specifically, this dialog occurs during the
                Tochigi campaign (volume
                15 of the manga, or the Third Stage movie) when Tachibana explains the rivalry
                between Bunta and Ken
                Kogashiwa. According to Tachibana, Bunta and Ken completed multiple races on the
                Irohazaka road to
                determine who was truly the fastest street racer, and "on the last race that
                counted", Bunta won. This
                could mean that Bunta possibly lost one or more rounds, but this idea is never
                discussed further as the
                dialog was written solely to provide a racing pedigree for Ken's son, who had
                recently challenged Takumi
                to a race on the same road.
              </p>
            </v-flex>
            <v-flex xs2>
              <v-img :src="require ('@/assets/characters/LS/bunta1P.png')"></v-img>
            </v-flex>
          </v-layout>
        </v-tab-item>
        <!-- Trains -->
        <v-tab :key="2" ripple @click.stop="active=2">Trains</v-tab>
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
              <v-img :src="require ('@/assets/trains/LS/icon_2000.png')"></v-img>
            </v-flex>
            <v-flex xs6 pl-2>
              <h2>阪急２０００</h2>
              <p>
                <a
                  href="https://ja.wikipedia.org/wiki/%E9%98%AA%E6%80%A52000%E7%B3%BB%E9%9B%BB%E8%BB%8A">
                  （Wikipedia） </a>

                <p>運転士は藤原拓海</p>

                <p>阪急電鉄 宝塚線を走る２０００系。</p>

                <p>拓海の先輩である池谷がリーダーの「TAKARAZUKA SPEED STARS」と、
                  阪急電鉄 神戸線の、高橋涼介がリーダーの「神戸線 RedSuns」との交流戦に、
                  彗星の如く現れる。（１話）</p>

                <p>得意技は複線ドリフト。
                  その秘密は同人誌 総集編１の「拓ちゃんの電車バトル教室」で描かれている。</p>

                <p>LightningStage、BurningStageまでは
                  ８両編成でノッチの数は４。</p>

                <p>BurningStage９話で大破するが、
                  主電動機とマスコンを換装し、「２０００改」となってClimaxStageで登場する。
                  ノッチの数は１２段に増え、最高速度も大幅に増す。</p>

                <p>大破時の主電動機の載せ替え（１０話）は、最新化よりも、
                  出所不明のモーターを用いた、抵抗制御のパワーアップが行われた。（１３話で高橋涼介が情報を得ている）</p>

                <p>複線ドリフトや抵抗制御のフルパワーなどは、
                  鉄道関係者が見ると、
                  「レールが一晩でダメになる」「変電所が吹っ飛ぶ」などと言われる。</p>

                <p>実車は1960年にデビュー。
                  <a href="https://www.youtube.com/watch?v=tJuEoau5GaA">（YouTube）</a></p>

                <p>1991年にさよなら運転を行っており、
                  <a href="https://www.youtube.com/watch?v=Jvh4lrPZe_s">（YouTube）</a>
                  一部の車両が別の車両に組み込まれたり、
                  １７００番台に改番され、子会社の能勢電鉄で使われている。
                  <a href="https://www.youtube.com/watch?v=q-FWLQl17-E">（YouTube）</a></p>

                <p>重い鋼鉄製の車体に抵抗制御
                  （<a
                    href="https://ja.wikipedia.org/wiki/%E9%9B%BB%E6%B0%97%E8%BB%8A%E3%81%AE%E9%80%9F%E5%BA%A6%E5%88%B6%E5%BE%A1#%E6%8A%B5%E6%8A%97%E5%88%B6%E5%BE%A1">（Wikipedia）</a>）
                  という、古い車体と制御装置は、原作のＡＥ８６に通じるものがある。
                  車齢は５０年を超える旧式列車であった。

                </p>
            </v-flex>
          </v-layout>
          <v-layout justify-center>
            <v-flex xs6 text-xs-right pr-2>
              <h2>阪急８２００</h2>
              <p>
                運転士は高橋啓介</p>

              <p>阪急電鉄 神戸線を走る８２００系。
                「神戸線 RedSuns」のナンバー２

                <p>軽量のアルミ合金の車体に、
                  個別分散式ＶＶＶＦインバーター制御で、
                  鋭い加速と減速が可能。</p>

                <p>半面、雨に弱く、濡れたレールで空転しないような、精密な運転を要求される。
                  （VVVF車が雨で空転すると「ヒュゥゥゥ↑↑↑ン」という面白いモーター音が聞ける）</p>

                <p>雨に苦戦する描写は６話や４１話で描かれおり、
                  マスコンワーク（アクセルワーク）の特訓を指示する高橋涼介も大体一緒に描かれている。</p>

                <p>８２００系は本来、増結用車両であり、
                  朝と夕方の通勤ラッシュ時に、８両編成の車両と連結し、
                  １０両編成として運用されます。
                  <a href="https://www.youtube.com/watch?v=VDooBWun41o">（YouTube）</a></p>

                <p>本作で２両なのは、その為である。</p>


                <p>コミケに電車でＤのゲームを買いに来た、阪急電鉄の方が言うには、
                  「８２００はとてもパワーがあり、２両での運転が凄く難しい。
                  高橋啓介がマスコンワークに取り組む理由がわかる」そうです。
                </p>
            </v-flex>
            <v-flex xs2>
              <v-img :src="require ('@/assets/trains/LS/icon_8200.png')"></v-img>
            </v-flex>
          </v-layout>
          <v-layout justify-center>
            <v-flex xs2>
              <v-img :src="require ('@/assets/trains/LS/icon_21000.png')"></v-img>
            </v-flex>
            <v-flex xs6 pl-2>
              <h2>近鉄特急 21000系 アーバンライナー</h2>
              <p>
                <a
                  href="https://ja.wikipedia.org/wiki/%E8%BF%91%E9%89%8421000%E7%B3%BB%E9%9B%BB%E8%BB%8A">（Wikipedia）</a>

                <p>運転士は中里毅
                  ナイトキッズのリーダー。</p>

                <p>大阪～名古屋までの「名阪ノンストップ特急」として登場した列車で、
                  「通勤型列車」とは異なり、「特急列車」のパワーを活かした走りをする。</p>

                <p>通勤型列車は、３両が動力車、５両が非動力車（ひっぱられるだけ）であるが、
                  アーバンライナーは全車両が動力車である。</p>

                <p>特急列車はお客様に快適な空間を提供する為に、
                  車体が長く作られているが（21mある。阪急電車は19m）
                  それゆえに車両重量が重く、車輪に負担がかかる。</p>

                <p>車輪の「空転検知システム」をOFFにし、全動力運転を好んでいた中里が、
                  テクニカルなコーナーの多い宝塚線や、
                  精密な加減速が求められる雨のバトルで負けたのは納得のいく結果である。</p>


                <p>高速で飛ばすアーバンライナーの展望。
                  窓が大きく、視界が広く、見ていて気持ちが良い。
                  <a href="https://www.youtube.com/watch?v=9Rjsn03gQPI">（YouTube）</a></p>

                <p>…が、山の中を走る路線である。
                  （６話で中里が「田んぼにドボンだ」というセリフはここからきている）</p>


                <p>LightningStageのデキ３とのバトルでは、
                  条件付きで300km/h以上出せる。</p>

                <p>中里の所属する「近鉄」は、「阪急」とは別の路線であり、
                  同人誌が描かれた時は線路がつながっていなかった。</p>

                <p>２話で中里が「どうやって来たかもわかんねー」と言っているが、
                  現在は近鉄→阪神なんば線→阪神本線→神戸高速鉄道を通り、
                  新開地駅から阪急へ乗り入れする事が可能になった。
                  ただし、特急車両の大きな車両が通れるかは不明。</p>

                <p>阪急（阪急電鉄）<a
                    href="https://ja.wikipedia.org/wiki/%E9%98%AA%E6%80%A5%E9%9B%BB%E9%89%84">（Wikipedia）</a>
                  近鉄（近畿日本鉄道）<a
                    href="https://ja.wikipedia.org/wiki/%E8%BF%91%E7%95%BF%E6%97%A5%E6%9C%AC%E9%89%84%E9%81%93">（Wikipedia）</a>
                </p>
            </v-flex>
          </v-layout>
          <v-layout justify-center>
            <v-flex xs6 text-xs-right pr-2>
              <h2>京阪 ８００系</h2>
              <p>
                <a
                  href="https://ja.wikipedia.org/wiki/%E4%BA%AC%E9%98%AA800%E7%B3%BB%E9%9B%BB%E8%BB%8A_(2%E4%BB%A3)">（Wikipedia）</a>

                <p>運転士は庄司慎吾
                  中里と同じナイトキッズのメンバーで、中里とは仲が悪い。</p>

                <p>バトルの舞台である「京阪 京津線」は
                  地下鉄、登山並みの急カーブ＆急勾配、併用軌道（車と同じ道路にレールがある路面）という
                  極端に異なる区間が揃った、日本唯一の路線である。</p>

                <p>３話で、「吊っただけのトロリー架線」や、「高速で走れない併用軌道」に焦る拓海に対して、
                  慎吾が「立ち入り禁止の柵の中、スラブ軌道とカテナリー架線で育ったお坊ちゃま」
                  と言っているのには、京阪京津線の敷かれた区間に基づいたネタである。</p>

                <p>そんな路線に対応する為に、多彩な機能を備えた車両がこの８００系である。</p>

                <p>京都の地下鉄内での自動運転機能、
                  長さ16mの小型車両で急カーブに強く、軽くて加速に優れ、勾配に強い小径車輪、
                  ４両全てが動力車という、「特急列車」にも負けない、多彩な「通勤列車」である。</p>

                <p>その分、車両の価格は高く、
                  １ｍ辺りの単価は新幹線を超え、日本一の価格である。</p>

                <p>そんな日本一高価な車両を、
                  ダブルクラッシュを狙って、
                  日本一大きな湖「びわ湖」に…</p>

                <p>ステージの一番最後、浜大津駅直前の直角コーナーは、
                  鉄道模型かと思えるぐらい、急カーブである。</p>

                <p><a href="https://www.youtube.com/watch?v=_ETwW020L8U">（YouTube）</a></p>


                <p>電車よりお祭りが優先である。
                  <a href="https://www.youtube.com/watch?v=uhRVt-03H0U">（YouTube）</a>
                </p>
            </v-flex>
            <v-flex xs2>
              <v-img :src="require ('@/assets/trains/LS/icon_800.png')"></v-img>
            </v-flex>
          </v-layout>
          <v-layout justify-center>
            <v-flex xs2>
              <v-img :src="require ('@/assets/trains/LS/icon_7001.png')"></v-img>
            </v-flex>
            <v-flex xs6 pl-2>
              <h2>阪急 ７００１</h2>
              <p>
                <a
                  href="https://ja.wikipedia.org/wiki/%E9%98%AA%E6%80%A57000%E7%B3%BB%E9%9B%BB%E8%BB%8A">（Wikipedia）</a>

                <p>運転士は高橋涼介</p>

                <p>阪急電鉄 神戸線を走る ７０００系。
                  「神戸線 RedSuns」のリーダーで、
                  「軌道最速理論」を完成させるべく、藤原拓海に興味を持つ。</p>

                <p>弟、高橋啓介の乗る８２００のＶＶＶＦインバーター制御とは違い、
                  高速運転からのブレーキ初速が速く、
                  負担が少なく省エネの「回生ブレーキ付き界磁チョッパ制御」を採用している。
                  長いストレートと高速コーナーの多い阪急神戸線とは、とても相性が良い車両である。</p>

                <p>制御器の年代で言えば、
                  ２０００系の抵抗制御
                  ７００１の界磁チョッパ制御
                  ８２００の個別分散式ＶＶＶＦインバーター制御
                  の順番で新しくなる。</p>


                <p>京急電鉄の須藤京一とは因縁のある仲で、
                  阪急神戸線で対決をし、勝利していている。（１０話）</p>

                <p>拓海の成長を見守り、県外遠征チーム（プロジェクトＤ）に勧誘、
                  RisingStage以降は戦いの舞台を関西から、名古屋・東京方面に移している。
                </p>
            </v-flex>
          </v-layout>
          <v-layout justify-center>
            <v-flex xs6 text-xs-right pr-2>
              <h2>ＪＲ ２２３系</h2>
              <p>
                <a
                  href="https://ja.wikipedia.org/wiki/JR%E8%A5%BF%E6%97%A5%E6%9C%AC223%E7%B3%BB%E9%9B%BB%E8%BB%8A">（Wikipedia）</a>

                <p>運転士は覆面運転士</p>

                <p>「阪急 京都線」と並走する「ＪＲ西日本 京都線」で、
                  ２３００系を営業運転中の拓海にバトルを仕掛けてきた列車。</p>

                <p>車両側面の車外表示を使って「ウンコ色」「ポンコツ」と拓海の運転する阪急２３００を煽り、
                  それにキレた阪急電車の乗客達によってバトルが開始される。
                  満員電車である２３００に対して、ハンデと称して、車両いっぱいに鉄下駄を乗せていた。</p>


                <p>京都から大阪まで３０分で結ぶ、「特急列車」顔負けの「通勤列車」で、
                  130km/hでかっ飛ばすその姿は「新快速」の名に恥じないものである。</p>

                <p>（独特なミュージックホン。てんこてんこてんこてーん♪）
                  <a href="https://www.youtube.com/watch?v=WeAGCs98vGQ">（YouTube）</a></p>


                <p>営業路線はとても長く、関西地方いたるところで見られる。
                  加速も鋭く、最高速度も速く、乗り心地も良く、安定している。
                  <a href="https://www.youtube.com/watch?v=bc1VHIT2yxg">（YouTube）</a></p>

                <p>車番は違うが、関西国際空港でも見られる。
                </p>
            </v-flex>
            <v-flex xs2>
              <v-img :src="require ('@/assets/trains/LS/icon_223.png')"></v-img>
            </v-flex>
          </v-layout>
          <v-layout justify-center>
            <v-flex xs2>
              <v-img :src="require ('@/assets/trains/LS/icon_2300.png')"></v-img>
            </v-flex>
            <v-flex xs6 pl-2>
              <h2>阪急 ２３００系</h2>
              <p>
                <a
                  href="https://ja.wikipedia.org/wiki/%E9%98%AA%E6%80%A52300%E7%B3%BB%E9%9B%BB%E8%BB%8A">（Wikipedia）</a>

                <p>運転士は藤原拓海</p>

                <p>拓海が阪急京都線で営業運転中（仕事中）に、たまたま運転していた各駅停車の車両。
                  満員の乗客を乗せている。</p>

                <p>複線ドリフトは出来ないが、
                  乗客全員でハコ乗り状態で車両を傾ける、
                  「人力振り子」でコーナーを駆け抜ける。</p>

                <p>加速は遅いが最高速度は速く、
                  ご乗車のお客様と意気を合わせ、
                  上手く乗りこなせれば電車でＤトップクラスの車両になる。
                </p>
            </v-flex>
          </v-layout>
          <v-layout justify-center>
            <v-flex xs6 text-xs-right pr-2>
              <h2>ＡＥ８６？</h2>
              <p>
                <a
                  href="https://ja.wikipedia.org/wiki/%E3%83%88%E3%83%A8%E3%82%BF%E3%83%BBAE86">（Wikipedia）</a>

                <p>運転士はタクミさん</p>

                <p>側面に「藤原模型店」と描かれた、軌道兼用車。</p>

                <p>ストーリーを全てクリアした後に出現する、おまけシナリオをクリアすると使えるようになる。</p>

                <p>バトルの最初に「話をしよう」から始まるナレーションは、
                  当時日本で流行っていたエルシャダイのＰＶ元ネタ。
                  <a href="https://www.youtube.com/watch?v=pj2WS_vZJoY">（YouTube）</a></p>

                <p>エルシャダイの主人公「イーノック」の声優が、
                  藤原拓海と同じ「三木眞一郎」氏で、
                  「一番良いのを頼む」→頭文字Ｄで「一番良い車」が登場する。</p>

                <p>電車でＤでの性能も良く、単線ドリフトは優秀である。
                  各ストーリーで使うと、タクミさん専用のセリフに切り替わる箇所がある。
                </p>
            </v-flex>
            <v-flex xs2>
              <v-img :src="require ('@/assets/trains/LS/icon_hatena.png')"></v-img>
            </v-flex>
          </v-layout>
        </v-tab-item>
        <v-tab :key="3" ripple @click.stop="active=3">Guide</v-tab>
        <v-tab-item :key="3">
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
              <iframe width="560" height="315" src="https://www.youtube.com/embed/WwZz1Yxz5ho"
                frameborder="0" allowfullscreen></iframe>
            </v-flex>
            <v-flex pl-2>
              <h2>Stage 1 - Keisuke</h2>
              <p>
                Just win 4Head.
              </p>
            </v-flex>
          </v-layout>
          <v-layout>
            <v-flex xs6>
              <iframe width="560" height="315" src="https://www.youtube.com/embed/OS5bAK3gZc"
                frameborder="0" allowfullscreen></iframe>
            </v-flex>
            <v-flex pl-2>
              <h2>Stage 2 - Nakazato</h2>
              <p>
                Don't derail.
              </p>
            </v-flex>
          </v-layout>
          <v-layout>
            <v-flex xs6>
              <iframe width="560" height="315" src="https://www.youtube.com/embed/fdP4_itYimw"
                frameborder="0" allowfullscreen></iframe>
            </v-flex>
            <v-flex pl-2>
              <h2>Stage 3 - Shingo</h2>
              <p>
                Drive slow.
              </p>
            </v-flex>
          </v-layout>
          <v-layout>
            <v-flex xs6>
              <iframe width="560" height="315" src="https://www.youtube.com/embed/Qj9_apUMuvk"
                frameborder="0" allowfullscreen></iframe>
            </v-flex>
            <v-flex pl-2>
              <h2>Stage 4 - Ryousuke</h2>
              <p>
                Break at a stage to win. And don't forget the outside drift.
              </p>
            </v-flex>
          </v-layout>
          <v-layout>
            <v-flex xs6>
              <iframe width="560" height="315" src="https://www.youtube.com/embed/U2g-qvEtsuY"
                frameborder="0" allowfullscreen></iframe>
            </v-flex>
            <v-flex pl-2>
              <h2>Bonus Stage 1 - Masked Driver</h2>
              <p>
                Lean towards the right side. Dingus.
              </p>
            </v-flex>
          </v-layout>
          <v-layout>
            <v-flex xs6>
              <iframe width="560" height="315" src="https://www.youtube.com/embed/28oU3ra69cU"
                frameborder="0" allowfullscreen></iframe>
            </v-flex>
            <v-flex pl-2>
              <h2>Bonus Stage 2 - Takumi-san</h2>
              <p>
                Multitrack-Drift and hold the acceleration button down.
              </p>
            </v-flex>
          </v-layout>
          <v-layout>
            <v-flex xs6>
              <iframe width="560" height="315" src="https://www.youtube.com/embed/c3QP2vaiu0o"
                frameborder="0" allowfullscreen></iframe>
            </v-flex>
            <v-flex pl-2>
              <h2>Bonus Stage 3 - Bunta</h2>
              <p>
                Use Nakazatos Train and win!
              </p>
            </v-flex>
          </v-layout>
        </v-tab-item>
        <v-tab :key="4" ripple @click.stop="active=4">Speedrun</v-tab>
        <v-tab-item :key="4">
          <!-- Speedrun -->
          <v-layout text-xs-center>
            <v-flex xs12>
              <h1>How to speedrun Densha?</h1>
            </v-flex>
          </v-layout>
          <v-layout justify-center>
            <v-flex xs8>
              <p>
                Easy to speedrun, hard to master!
              </p>
            </v-flex>
          </v-layout>
          <v-layout>
            <v-flex xs6>
              <iframe width="560" height="315" src="https://www.youtube.com/embed/WwZz1Yxz5ho"
                frameborder="0" allowfullscreen></iframe>
            </v-flex>
            <v-flex pl-2>
              <h2>Stage 1 - Keisuke</h2>
              <p>
                Do what I said in the video you dingus!
              </p>
            </v-flex>
          </v-layout>
          <v-layout>
            <v-flex xs6>
              <iframe width="560" height="315" src="https://www.youtube.com/embed/OS5bAK3gZc"
                frameborder="0" allowfullscreen></iframe>
            </v-flex>
            <v-flex pl-2>
              <h2>Stage 2 - Nakazato</h2>
              <p>
                Do what I said in the video you dingus!
              </p>
            </v-flex>
          </v-layout>
          <v-layout>
            <v-flex xs6>
              <iframe width="560" height="315" src="https://www.youtube.com/embed/fdP4_itYimw"
                frameborder="0" allowfullscreen></iframe>
            </v-flex>
            <v-flex pl-2>
              <h2>Stage 3 - Shingo</h2>
              <p>
                Do what I said in the video you dingus!
              </p>
            </v-flex>
          </v-layout>
          <v-layout>
            <v-flex xs6>
              <iframe width="560" height="315" src="https://www.youtube.com/embed/Qj9_apUMuvk"
                frameborder="0" allowfullscreen></iframe>
            </v-flex>
            <v-flex pl-2>
              <h2>Stage 4 - Ryousuke</h2>
              <p>
                Do what I said in the video you dingus!
              </p>
            </v-flex>
          </v-layout>
          <v-layout>
            <v-flex xs6>
              <iframe width="560" height="315" src="https://www.youtube.com/embed/U2g-qvEtsuY"
                frameborder="0" allowfullscreen></iframe>
            </v-flex>
            <v-flex pl-2>
              <h2>Bonus Stage 1 - Masked Driver</h2>
              <p>
                Do what I said in the video you dingus!
              </p>
            </v-flex>
          </v-layout>
          <v-layout>
            <v-flex xs6>
              <iframe width="560" height="315" src="https://www.youtube.com/embed/28oU3ra69cU"
                frameborder="0" allowfullscreen></iframe>
            </v-flex>
            <v-flex pl-2>
              <h2>Bonus Stage 2 - Takumi-san</h2>
              <p>
                Do what I said in the video you dingus!
              </p>
            </v-flex>
          </v-layout>
          <v-layout>
            <v-flex xs6>
              <iframe width="560" height="315" src="https://www.youtube.com/embed/c3QP2vaiu0o"
                frameborder="0" allowfullscreen></iframe>
            </v-flex>
            <v-flex pl-2>
              <h2>Bonus Stage 3 - Bunta</h2>
              <p>
                Do what I said in the video you dingus!
              </p>
            </v-flex>
          </v-layout>
        </v-tab-item>
      </v-tabs>
    </div>
  </v-container>
</template>

<style>
  .takumisan {
    animation: takumisan 3s 0s infinite linear;
  }

  @keyframes takumisan {
    0% {
      transform: rotateY(0deg);
    }

    50% {
      transform: rotateY(180deg);
    }

    100% {
      transform: rotateY(0deg);
    }
  }

</style>


<script>
export default {
  data() {
    return {
      active: null,
    };
  },
};

</script>
