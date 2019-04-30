<template>
  <v-container>
    <div>
      <v-tabs v-model="active" grow color="dark" dark slider-color="red">
        <v-tab :key="0" ripple @click.stop="active = 0">
          Game
        </v-tab>
        <v-tab-item :key="0">
          <!-- Game -->
          <v-layout text-xs-center>
            <v-flex xs12>
              <h1>Densha de D: Lightning Stage</h1>
            </v-flex>
          </v-layout>
          <v-layout row wrap justify-center>
            <v-flex xs8 md2 pr-2>
              <lazy-component>
                <v-img :src="require('@/assets/covers/LS_Cover.jpg')" />
              </lazy-component>
            </v-flex>
            <v-flex xs8 md6>
              <p>
                Densha de D: Lightning Stage is the first game in the series. Densha de D is a
                parody of the Manga/Anime InitialD. While Initial D is a racing series about racing
                and drifting cars, Densha de D is the same just with trains. You can find more
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
          <!-- <CharacterLeft
            :image="require('@/assets/characters/LS/takumi1P.png')"
            :title="$t('characters.takumi.name')"
            :text="`<p>${$t('characters.takumi.description').join('</p><p>')}</p>`"
          /> -->
          <CharacterLeft
            :image="require('@/assets/characters/LS/takumi1P.png')"
            title="Takumi Fujiwara"
            text="<p>
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
              </p>"
          />
          <CharacterRight
            :image="require('@/assets/characters/LS/keisuke1P.png')"
            title="Keisuke Takahashi"
            text="<p>
                Keisuke Takahashi (高橋 啓介 Takahashi Keisuke, &quot;K.T.&quot;) is the number two driver for the
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
              </p>"
          />
          <CharacterLeft
            :image="require('@/assets/characters/LS/nakazato1P.png')"
            title="Takeshi Nakazato"
            text='<p>
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
                He is an intelligent and skilled driver, notably recognizing Takumi&apos;s the gutter
                hook technique while
                observing the Eight-Six&apos;s first battle with Keisuke&apos;s FD. However, his downfall is
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
              <p>He is a fan of the GT-R just like Kunimitsu Takahashi.</p>'
          />
          <CharacterRight
            :image="require('@/assets/characters/LS/singo1P.png')"
            title="Shingo Shoji"
            text="<p>
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
              </p>"
          />
          <CharacterLeft
            :image="require('@/assets/characters/LS/ryousuke1P.png')"
            title="Ryosuke Takahashi"
            text="<p>
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
                but he passed cause &quot;his only interest was street racing&quot;. His winning streak came
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
              </p>"
          />
          <CharacterRight
            :image="require('@/assets/characters/LS/hukumen.png')"
            title="Hukumen"
            text='<p>
                Hukumen is the owner of a tofu shop in Gunma, and the father of
                Takumi. He
                used to be the No.1 downhill racer in Mt. Akina years ago, but he no longer races,
                preferring to guide
                Takumi&apos;s racing development. He is the original driver of the mysterious "white
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
                dialog was written solely to provide a racing pedigree for Ken&apos;s son, who had
                recently challenged Takumi
                to a race on the same road.
              </p>'
          />
          <CharacterLeft
            :image="require('@/assets/characters/LS/takumisan_1P.png')"
            _class="takumisan"
            title="Takumi-san"
            text="<p>Takumi-san is silly character that got created in the Densha de D Manga.
                More information will be added as soon as possible.</p>"
          />
          <CharacterRight
            :image="require('@/assets/characters/LS/bunta1P.png')"
            title="Bunta Fujiwara"
            text='<p>
                Bunta Fujiwara (藤原 文太 Fujiwara Bunta) is the owner of a tofu shop in Gunma, and the
                father of
                Takumi. He
                used to be the No.1 downhill racer in Mt. Akina years ago, but he no longer races,
                preferring to guide
                Takumi&apos;s racing development. He is the original driver of the mysterious "white
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
                dialog was written solely to provide a racing pedigree for Ken&apos;s son, who had
                recently challenged Takumi
                to a race on the same road.
              </p>'
          />
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
          <v-layout justify-center text-xs-center>
            <v-flex xs8>
              <p>
                On this page we will inform you about all the different types of the trains in
                Densha de D. The English version of this will be added shortly.
              </p>
            </v-flex>
          </v-layout>
          <TrainLeft
            :image="require('@/assets/trains/LS/icon_2000.png')"
            title="阪急２０００"
            text="<p>
                <a
                  href='https://ja.wikipedia.org/wiki/%E9%98%AA%E6%80%A52000%E7%B3%BB%E9%9B%BB%E8%BB%8A' target='_blank'>
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
                  <a href='https://www.youtube.com/watch?v=tJuEoau5GaA' target='_blank'>（YouTube）</a></p>

                <p>1991年にさよなら運転を行っており、
                  <a href='https://www.youtube.com/watch?v=Jvh4lrPZe_s' target='_blank'>（YouTube）</a>
                  一部の車両が別の車両に組み込まれたり、
                  １７００番台に改番され、子会社の能勢電鉄で使われている。
                  <a href='https://www.youtube.com/watch?v=q-FWLQl17-E' target='_blank'>（YouTube）</a></p>

                <p>重い鋼鉄製の車体に抵抗制御
                  （<a
                    href='https://ja.wikipedia.org/wiki/%E9%9B%BB%E6%B0%97%E8%BB%8A%E3%81%AE%E9%80%9F%E5%BA%A6%E5%88%B6%E5%BE%A1#%E6%8A%B5%E6%8A%97%E5%88%B6%E5%BE%A1' target='_blank'>（Wikipedia）</a>）
                  という、古い車体と制御装置は、原作のＡＥ８６に通じるものがある。
                  車齢は５０年を超える旧式列車であった。

                </p>"
          />
          <TrainRight
            :image="require('@/assets/trains/LS/icon_8200.png')"
            title="阪急８２００"
            text="<p>
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
                  <a href='https://www.youtube.com/watch?v=VDooBWun41o' target='_blank'>（YouTube）</a></p>

                <p>本作で２両なのは、その為である。</p>


                <p>コミケに電車でＤのゲームを買いに来た、阪急電鉄の方が言うには、
                  「８２００はとてもパワーがあり、２両での運転が凄く難しい。
                  高橋啓介がマスコンワークに取り組む理由がわかる」そうです。
                </p>"
          />
          <TrainLeft
            :image="require('@/assets/trains/LS/icon_21000.png')"
            title="近鉄特急 21000系 アーバンライナー"
            text="<p>
                <a
                  href='https://ja.wikipedia.org/wiki/%E8%BF%91%E9%89%8421000%E7%B3%BB%E9%9B%BB%E8%BB%8A' target='_blank'>（Wikipedia）</a>

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
                  <a href='https://www.youtube.com/watch?v=9Rjsn03gQPI' target='_blank'>（YouTube）</a></p>

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
                    href='https://ja.wikipedia.org/wiki/%E9%98%AA%E6%80%A5%E9%9B%BB%E9%89%84' target='_blank'>（Wikipedia）</a>
                  近鉄（近畿日本鉄道）<a
                    href='https://ja.wikipedia.org/wiki/%E8%BF%91%E7%95%BF%E6%97%A5%E6%9C%AC%E9%89%84%E9%81%93' target='_blank'>（Wikipedia）</a>
                </p>"
          />
          <TrainRight
            :image="require('@/assets/trains/LS/icon_800.png')"
            title="京阪 ８００系"
            text="<p>
                <a
                  href='https://ja.wikipedia.org/wiki/%E4%BA%AC%E9%98%AA800%E7%B3%BB%E9%9B%BB%E8%BB%8A_(2%E4%BB%A3)' target='_blank'>（Wikipedia）</a>

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

                <p><a href='https://www.youtube.com/watch?v=_ETwW020L8U' target='_blank'>（YouTube）</a></p>


                <p>電車よりお祭りが優先である。
                  <a href='https://www.youtube.com/watch?v=uhRVt-03H0U' target='_blank'>（YouTube）</a>
                </p>"
          />
          <TrainLeft
            :image="require('@/assets/trains/LS/icon_7001.png')"
            title="阪急 ７００１"
            text="<p>
                <a
                  href='https://ja.wikipedia.org/wiki/%E9%98%AA%E6%80%A57000%E7%B3%BB%E9%9B%BB%E8%BB%8A' target='_blank'>（Wikipedia）</a>

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
                </p>"
          />
          <TrainRight
            :image="require('@/assets/trains/LS/icon_223.png')"
            title="ＪＲ ２２３系"
            text="<p>
                <a
                  href='https://ja.wikipedia.org/wiki/JR%E8%A5%BF%E6%97%A5%E6%9C%AC223%E7%B3%BB%E9%9B%BB%E8%BB%8A' target='_blank'>（Wikipedia）</a>

                <p>運転士は覆面運転士</p>

                <p>「阪急 京都線」と並走する「ＪＲ西日本 京都線」で、
                  ２３００系を営業運転中の拓海にバトルを仕掛けてきた列車。</p>

                <p>車両側面の車外表示を使って「ウンコ色」「ポンコツ」と拓海の運転する阪急２３００を煽り、
                  それにキレた阪急電車の乗客達によってバトルが開始される。
                  満員電車である２３００に対して、ハンデと称して、車両いっぱいに鉄下駄を乗せていた。</p>


                <p>京都から大阪まで３０分で結ぶ、「特急列車」顔負けの「通勤列車」で、
                  130km/hでかっ飛ばすその姿は「新快速」の名に恥じないものである。</p>

                <p>（独特なミュージックホン。てんこてんこてんこてーん♪）
                  <a href='https://www.youtube.com/watch?v=WeAGCs98vGQ' target='_blank'>（YouTube）</a></p>


                <p>営業路線はとても長く、関西地方いたるところで見られる。
                  加速も鋭く、最高速度も速く、乗り心地も良く、安定している。
                  <a href='https://www.youtube.com/watch?v=bc1VHIT2yxg' target='_blank'>（YouTube）</a></p>

                <p>車番は違うが、関西国際空港でも見られる。
                </p>"
          />
          <TrainLeft
            :image="require('@/assets/trains/LS/icon_2300.png')"
            title="阪急 ２３００系"
            text="<p>
                <a
                  href='https://ja.wikipedia.org/wiki/%E9%98%AA%E6%80%A52300%E7%B3%BB%E9%9B%BB%E8%BB%8A' target='_blank'>（Wikipedia）</a>

                <p>運転士は藤原拓海</p>

                <p>拓海が阪急京都線で営業運転中（仕事中）に、たまたま運転していた各駅停車の車両。
                  満員の乗客を乗せている。</p>

                <p>複線ドリフトは出来ないが、
                  乗客全員でハコ乗り状態で車両を傾ける、
                  「人力振り子」でコーナーを駆け抜ける。</p>

                <p>加速は遅いが最高速度は速く、
                  ご乗車のお客様と意気を合わせ、
                  上手く乗りこなせれば電車でＤトップクラスの車両になる。
                </p>"
          />
          <TrainRight
            :image="require('@/assets/trains/LS/icon_hatena.png')"
            title="ＡＥ８６？"
            text="<p>
                <a
                  href='https://ja.wikipedia.org/wiki/%E3%83%88%E3%83%A8%E3%82%BF%E3%83%BBAE86' target='_blank'>（Wikipedia）</a>

                <p>運転士はタクミさん</p>

                <p>側面に「藤原模型店」と描かれた、軌道兼用車。</p>

                <p>ストーリーを全てクリアした後に出現する、おまけシナリオをクリアすると使えるようになる。</p>

                <p>バトルの最初に「話をしよう」から始まるナレーションは、
                  当時日本で流行っていたエルシャダイのＰＶ元ネタ。
                  <a href='https://www.youtube.com/watch?v=pj2WS_vZJoY' target='_blank'>（YouTube）</a></p>

                <p>エルシャダイの主人公「イーノック」の声優が、
                  藤原拓海と同じ「三木眞一郎」氏で、
                  「一番良いのを頼む」→頭文字Ｄで「一番良い車」が登場する。</p>

                <p>電車でＤでの性能も良く、単線ドリフトは優秀である。
                  各ストーリーで使うと、タクミさん専用のセリフに切り替わる箇所がある。
                </p>"
          />
        </v-tab-item>
        <v-tab :key="3" ripple @click.stop="active = 3">
          Guide
        </v-tab>
        <v-tab-item :key="3">
          <!-- Guide -->
          <v-layout text-xs-center>
            <v-flex xs12>
              <h1>How to beat the game?</h1>
            </v-flex>
          </v-layout>
          <v-layout justify-center text-xs-center>
            <v-flex xs8>
              <p>
                We will provide you with a simple guide on how you can easily beat the game. More
                text will be written soon.
              </p>
            </v-flex>
          </v-layout>
          <v-layout row wrap justify-center pt-4>
            <v-flex xs12 md5>
              <lazy-component>
                <v-responsive :aspect-ratio="1200 / 720">
                  <youtube width="100%" height="100%" video-id="opSg6-tos5M" />
                </v-responsive>
              </lazy-component>
            </v-flex>
            <v-flex xs12 md5 pl-2>
              <h2>Stage 1 - Keisuke</h2>
              <p>
                Starting out, you should multi-track drift until you reach a specific station (name
                on screen : 雲雀丘花屋敷) where the tracks should end in a sharp turn to the right.
              </p>
              <p>
                It's recommended you use the brake key and spam it in order to slow yourself down
                and not lose too much speed in the process. The timing can be tricky so if you don't
                feel safe using it, you can use the emergency brake to hard brake. The braking
                method does not matter as long as Keisuke does not drift too far away from you and
                you do not derail. After this section, the best course of action would be to
                multi-track drift at every opportunity you get but do keep in mind of track splits
                (and conjoining tracks) that may cause you to derail.
              </p>
              <p>
                Shortly after leaving the 2 stations, You will see a green bridge. Take note of this
                green bridge as you cannot multi-track through it and it will cause you to derail if
                you try. The station that is right after the green bridge (name on screen : 石橋)
                does not require you to brake so you can keep going at full speed without any
                worries.
              </p>
              <p>
                At this stage, Keisuke should be beside you all the time so multi-track drifting
                should not be possible but do keep a look out for opportunities to gain speed. After
                some time, you will reach a section where the tracks will split on a large
                brown/grey bridge. The station you are about to reach (name on screen : 豊中)
                requires you to brake a couple of times to not derail so make sure to do that.
              </p>
              <p>
                The next station that requires you to brake is 1 station ahead (name on screen :
                曽根) and is very important. Again, the timing for braking in this turn can be
                tricky so if you are not comfortable, you can use the emergency brake to slow down
                even more although it is still recommended you use the normal brakes as it saves you
                some speed and you will lose alot of speed around this corner. After that turn, you
                will start to go downhill and a long turn will come into view. That turn goes into
                the next station (name on screen : 服部) and does not require you to brake. It
                should be smooth sailing for now as Keisuke will surpass you in terms of speed and
                basically leave you in the dust for some time. Use this chance to multi-track drift
                and catch up to him.
              </p>
              <p>
                However, it won't be long until you reach a point where the track will once again
                have a sharp turn to the right. That station (name on screen : 三国) requires you to
                brake. It does not matter how you brake (normal braking recommended) but do not let
                Keisuke get too far.
              </p>
              <p>
                It will be just straight line driving from this point on until you reach the bridge
                after the station (name on screen : 十三): The upcoming turn might seem the same as
                all the other sharp turns but it actually does not require you to brake at all. Just
                keep going at full speed. You will reach the station (name on screen : 中津). You
                are almost at the end.
              </p>
              <p>
                After the small bridge, depending on what you are going for, you can either just
                drive straight and time your brakes at the turns (this is for the any% speedrun) or
                you can multi-track drift which will show a cutscene (this will unlock the 100%
                route and the method we recommend to beat the stage) The stage will end once you
                have crossed into the final station (name on screen : 梅田). Congratulations, you
                have beat Keisuke!
              </p>
            </v-flex>
          </v-layout>
          <v-layout row wrap justify-center pt-4>
            <v-flex xs12 md5>
              <lazy-component>
                <v-responsive :aspect-ratio="1200 / 720">
                  <youtube width="100%" height="100%" video-id="TD71DI62hRk" />
                </v-responsive>
              </lazy-component>
            </v-flex>
            <v-flex xs12 md5 pl-2>
              <h2>Stage 2 - Nakazato</h2>
              <p>
                The way to beat Nakazato is not too dissimilar to beating Keisuke. At the start,
                Nakazato will overtake you and you will basically be left alone for the majority of
                the race. You should play the stage as per you did in Keisuke.
              </p>
              <p>
                However, take note that you will still need to brake at certain points: The sharp
                right turn on the tracks after the station (name on screen : 雲雀丘花屋敷) The
                station after the track split at the large grey/brown bridge (name on screen : 豊中)
              </p>
              <p>
                The actual difference from Keisuke comes in the next station (name on screen : 岡町)
                A slowdown cutscene will play after the mentioned station and both of you will enter
                the sharp left turn of the tracks after the station (name on screen : 曽根) The
                crucial thing that will be tested here is your braking. Time your brake correctly
                and you should not derail or lose too much speed. Doing everything correctly will
                mean you will likely close into Nakazato's front carriage after the turn and the
                stage will end after both of you reach the long turn leading into the station (name
                on screen : 服部) If you fail the first trigger, just keep playing normally until
                the next station (name on screen : 三国) where the trigger to end the stage will
                activate once more. Congratulations, you have beaten Nakazato!
              </p>
            </v-flex>
          </v-layout>
          <v-layout row wrap justify-center pt-4>
            <v-flex xs12 md5>
              <lazy-component>
                <v-responsive :aspect-ratio="1200 / 720">
                  <youtube width="100%" height="100%" video-id="YnRz_eRRncY" />
                </v-responsive>
              </lazy-component>
            </v-flex>
            <v-flex xs12 md5 pl-2>
              <h2>Stage 3 - Shingo</h2>
              <p>
                Shingo is a tricky guy to beat. His stage has many twists and turns and is probably
                one of the hardest stages to complete without derailing. Start off by managing your
                speed. Brake at every turn possible as every turn in this stage no matter how minor
                can potentially cause a derail. Try to also multi-track drift when its possible
                however there are barriers and obstacles that prevent you from doing this so be
                careful.
              </p>
              <p>
                Once you reach this part (name on screen : 蹴上) or when you see the first dirt
                track up ahead, you must not multi-track drift because of the barrier and you must
                brake harshly to not derail. The next section (the dirt track) allows you to
                multi-track drift and you should do that until you see the cement road. Once you do,
                you must quickly shift back to your main track and brake as much as you can to
                prevent yourself from derailing as you are turning right into the cement track.
                There will be a barrier and a car here after you sucessfully turned to prevent you
                from multi-track drifting so adjust yourself as per the video.
              </p>
              <p>
                Play as per normal. Gain as much speed as you need to keep up with Shingo but do not
                derail. After you reach this
                <a href="https://i.imgur.com/8ggkiWu.png" traget="_blank">station</a>. You must stop
                multi-track drifting as the track splits from here and it will cause you to
                completely derail if you don't. Remember to brake at the turn right after the track
                split. After the turn, you are allowed to multi-track drift once more so adjust your
                train accordingly.
              </p>
              <p>
                Try to stay as close to him as possible for whatever of the stage is left to trigger
                cutscenes that can help you win. There are 2 cutscenes that need to play and they
                only unlock if you are close enough to him on the final turns. If you did everything
                correctly, you will pass Shingo on the final stretch and win the stage.
                Congratulations, you have beaten Shingo!
              </p>
            </v-flex>
          </v-layout>
          <v-layout row wrap justify-center pt-4>
            <v-flex xs12 md5>
              <lazy-component>
                <v-responsive :aspect-ratio="1200 / 720">
                  <youtube width="100%" height="100%" video-id="0mGqWjRyaAY" />
                </v-responsive>
              </lazy-component>
            </v-flex>
            <v-flex xs12 md5 pl-2>
              <h2>Stage 4 - Ryousuke</h2>
              <p>
                Your fight with Ryosuke takes place on the same track as Keisuke and Nakazato. At
                the beginning, Ryosuke will let you overtake him so use this chance to multi-track
                drift. Play as per usual until the station (name on screen : 雲雀丘花屋敷) where you
                meet the sharp right turn again into the next station Brake like you did in the
                Keisuke/Nakazato stage and as you enter the station after the turns (name on screen
                : 川西能勢口) take note that you must not multi-track drift between this station and
                the next station (name on screen : 池田) This is to not trigger a cutscene which
                reveals to Ryosuke about what you are going to do in the final section of the stage.
              </p>
              <p>
                After those 2 stations, continue to play as per normal until the green bridge. Cease
                any multi-track drifting and go into the next station (name on screen : 石橋) Whilst
                turning into the station, press the emergency brake (You must not be multi-track
                drifting). This is a trigger you need to do in order to win the stage. Ryosuke at
                this point will go past you and you should try to keep up with him as much as
                possible. Play as you will for now however you will still need to brake at these
                stations/tracks: The station after the large/grey bridge (name on screen : 豊中) The
                sharp left turn on the tracks after the station (name on screen : 曽根) (disclaimer
                : If you have done everything correctly, you should get a cutscene right after the
                long turn into the station (name on screen : 服部). If you don't, your chances of
                winning have become very slim and you might not win the stage.) The last right sharp
                turn after the station (name on screen : 三国)
              </p>
              <p>
                After all of that, you will reach the station (name on screen : 十三). If a cutscene
                plays out here, you have just secured your victory over Ryosuke. There's only one
                remaining thing to do. Both of you will cross the bridge but you will lag behind by
                just a certain amount. Just before you reach the next station (name on screen :
                中津), You will need to multi-track drift to the outer track on the right while
                turning. Doing this will make Ryosuke completely slowdown and you will breeze past
                him without even trying. Remember to stop multi-track drifting once the turn is over
                or you will derail You can resume mult-track drifting at the small bridges after the
                2nd last station (name on screen : 中津) Congratulations, you have beaten Ryosuke
                and completed the game!
              </p>
            </v-flex>
          </v-layout>
          <v-layout row wrap justify-center pt-4>
            <v-flex xs12 md5>
              <lazy-component>
                <v-responsive :aspect-ratio="1200 / 720">
                  <youtube width="100%" height="100%" video-id="y1X5cbMlgIA" />
                </v-responsive>
              </lazy-component>
            </v-flex>
            <v-flex xs12 md5 pl-2>
              <h2>Bonus Stage 1 - Masked Driver</h2>
              <p>
                The Masked Driver stage is a special one. Instead of the normal train which is
                capable of multi-track drifting, you will be playing with a train that can only
                lean. Yes lean, as in tilting your train just a little onto one direction. This race
                will be purely decided by how fast you can react and read the situation. Lean left
                and right as needed when the track goes left or right. One thing to take note is: A
                cutscene will play before the end where it slows down the game. You need to lean
                left here in order to complete the turn. The stage should be completed after your
                train overtakes the Masked Driver's train Congratulations, you have beaten the
                Masked Driver!
              </p>
            </v-flex>
          </v-layout>
          <v-layout row wrap justify-center pt-4>
            <v-flex xs12 md5>
              <lazy-component>
                <v-responsive :aspect-ratio="1200 / 720">
                  <youtube width="100%" height="100%" video-id="WDza8yyemu8" />
                </v-responsive>
              </lazy-component>
            </v-flex>
            <v-flex xs12 md5 pl-2>
              <h2>Bonus Stage 2 - Takumi-san</h2>
              <p>
                "Takumi-san" or Meme Takumi is considered a joke stage. You will be driving a car on
                the train tracks and you can drift your car on the tracks by pressing the
                multi-track drift key once. Pressing it twice on a certain direction will cause you
                to jump onto the corresponding track in the direction you were pressing. All you
                need to do for this stage is to drift your car in any direction you desire and
                accelerate. That's it. You win. Along the stage, unique trivia and lore about the
                Densha de D series will be playing out in cutscenes. Many of them are highly amusing
                and I recommend you don't sleep on them just because this stage is an automatic win.
                The stage will end after you pass the final station (name on screen : 梅田)
                Congratulations, you have beaten Takumi-san!
              </p>
            </v-flex>
          </v-layout>
          <v-layout row wrap justify-center pt-4>
            <v-flex xs12 md5>
              <lazy-component>
                <v-responsive :aspect-ratio="1200 / 720">
                  <youtube width="100%" height="100%" video-id="64hJLQZvt9E" />
                </v-responsive>
              </lazy-component>
            </v-flex>
            <v-flex xs12 md5 pl-2>
              <h2>Bonus Stage 3 - Bunta</h2>
              <p>
                We recommend using Nakatatos train, since this is the easiest to win this race with.
                It is possible to win with the other trains, but this requires a lot of practice and
                some "glitches". You should drive as good as possible and don't try to derail too
                much. Basically you are re-doing the Nakazato race but this time you are Nakazato.
                This means at the point where he blew up his engine cause he still hold the
                accelerator down, you will simply let off the accelerator. With that you gain a
                speedboost if you have done it correctly. From now on just keep multi-track drifting
                and you should easily win the race.
              </p>
            </v-flex>
          </v-layout>
        </v-tab-item>
        <v-tab :key="4" ripple @click.stop="active = 4">
          Speedrun
        </v-tab>
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
                In this guide we are trying to give you a simple way to speedrun DDD:LS. We are
                currently not providing the most current strats for this speedrun, but we will
                update it at a later point.
              </p>
            </v-flex>
          </v-layout>
          <v-layout row wrap justify-center pt-4>
            <v-flex xs12 md5>
              <lazy-component>
                <v-responsive :aspect-ratio="1200 / 720">
                  <youtube width="100%" height="100%" video-id="WwZz1Yxz5ho" />
                </v-responsive>
              </lazy-component>
            </v-flex>
            <v-flex xs12 md5 pl-2>
              <h2>Stage 1 - Keisuke</h2>
              <p>
                You start multi-track drifting as soon as possible, just spam the multi-track
                button. After you have done that, just keep multi-track drifting till a specific
                station. After the station a turn is coming up and you want to keep multi-track
                drifting until you see a yellow light on the left. At that moment you go back to
                your default position. As soon as the left turn starts, you start with spamming the
                brake button a bit until the track is straight again. From there you can just go
                full speed into the station without derailing. The moment you have the chance to
                multi-track drift again do it! Keep an eye out on the track splits otherwise you
                derail. After the green bridges a station is coming up, just go trough it with full
                throttle. Follow the tracks until you see a grey bridge. After that bridge another
                station appears. As soon as you enter it you will notice a grey block, from that
                point on let off the accelerator. You will not derail now! The critical part is
                coming up after you split up with Keisuke. Right after that station is a sharp left
                turn, make sure to brake just a little as possible. If you are not careful enough
                you can derail! Just wait that he passes you and now you can easily multi-track
                drift again, till you see the second bridge! Behind that bridge will be a sharp
                right turn, make sure to be on your line again and brake as little as possible to
                maintain your speed. In the second of last turn you can just go full speed through
                it. (Optional - for the 100% Category) In the last turn of the stage make sure to
                multi-track drift. This unlocks the Bonus Stage of the Masked Driver.
              </p>
            </v-flex>
          </v-layout>
          <v-layout row wrap justify-center pt-4>
            <v-flex xs12 md5>
              <lazy-component>
                <v-responsive :aspect-ratio="1200 / 720">
                  <youtube width="100%" height="100%" video-id="_OS5bAK3gZc" />
                </v-responsive>
              </lazy-component>
            </v-flex>
            <v-flex xs12 md5 pl-2>
              <h2>Stage 2 - Nakazato</h2>
              <p>
                As soon as you enter the stage make sure to multi-track drift as much as possible.
                Just follow him until the first dangerous turn. If you enter the right turn make
                sure to bump into him a few times until you can safely go back to your line.
                Immediately start braking a few times. After the station make sure to multi-track
                again as much as possible. Until this point you follow him until you see the grey
                bridge. After the bridge is a station you want to take with care. After you see the
                second grey block in the station brake once. This prevents you from derailing. In
                the second cutscene that appears make sure to hold the accelerator down until the
                cutscene fully played. The moment it ends you want to start spamming the brake
                button until your train is stable again. After you have done that you can go full
                speed again. Now we can end up with two possible outcomes. The first will be we get
                early Nakazato that means we win during the next turn. The second will be we will
                get late Nakazato, that means we still need to drive next to him till we win.
              </p>
            </v-flex>
          </v-layout>
          <v-layout row wrap justify-center pt-4>
            <v-flex xs12 md5>
              <lazy-component>
                <v-responsive :aspect-ratio="1200 / 720">
                  <youtube width="100%" height="100%" video-id="fdP4_itYimw" />
                </v-responsive>
              </lazy-component>
            </v-flex>
            <v-flex xs12 md5 pl-2>
              <h2>Stage 3 - Shingo</h2>
              <p>
                We can't provide a fast strat to this stage yet other than playing it casually. We
                are working on a new updated version of Shingo right now.
              </p>
            </v-flex>
          </v-layout>
          <v-layout row wrap justify-center pt-4>
            <v-flex xs12 md5>
              <lazy-component>
                <v-responsive :aspect-ratio="1200 / 720">
                  <youtube width="100%" height="100%" video-id="Qj9_apUMuvk" />
                </v-responsive>
              </lazy-component>
            </v-flex>
            <v-flex xs12 md5 pl-2>
              <h2>Stage 4 - Ryousuke</h2>
              <p>
                Since we show you the old strat of Ryousuke here there is not really much so say
                about it. Make sure to multi-track drift as much as possible and remember that you
                need to use the emergency brake in the entry of the station right after the green
                bridges. To fully defeat him you also need to outside drift at the second to last
                turn of this stage! After that you will just need to drive to the last station and
                you finished the race!
              </p>
            </v-flex>
          </v-layout>
          <v-layout row wrap justify-center pt-4>
            <v-flex xs12 md5>
              <lazy-component>
                <v-responsive :aspect-ratio="1200 / 720">
                  <youtube width="100%" height="100%" video-id="U2g-qvEtsuY" />
                </v-responsive>
              </lazy-component>
            </v-flex>
            <v-flex xs12 md5 pl-2>
              <h2>Bonus Stage 1 - Masked Driver</h2>
              <p>
                This stage is also pretty simple. Just make sure not to derail. There is a
                speedstrat for this stage, but we will be working on a release of it.
              </p>
            </v-flex>
          </v-layout>
          <v-layout row wrap justify-center pt-4>
            <v-flex xs12 md5>
              <lazy-component>
                <v-responsive :aspect-ratio="1200 / 720">
                  <youtube width="100%" height="100%" video-id="28oU3ra69cU" />
                </v-responsive>
              </lazy-component>
            </v-flex>
            <v-flex xs12 md5 pl-2>
              <h2>Bonus Stage 2 - Takumi-san</h2>
              <p>
                You basically just hold down the accelerator to win the stage. There is a small time
                save but the strats is really precise and will be added to this guide at a later
                point.
              </p>
            </v-flex>
          </v-layout>
          <v-layout row wrap justify-center pt-4>
            <v-flex xs12 md5>
              <lazy-component>
                <v-responsive :aspect-ratio="1200 / 720">
                  <youtube width="100%" height="100%" video-id="c3QP2vaiu0o" />
                </v-responsive>
              </lazy-component>
            </v-flex>
            <v-flex xs12 md5 pl-2>
              <h2>Bonus Stage 3 - Bunta</h2>
              <p>
                Make sure to use Nakazatos Train. We are also working on an updated guide to beat
                this stage as fast as possible. For now we recommend beating him like in a casual
                playthrough.
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
import CharacterLeft from '../components/CharacterLeft';
import CharacterRight from '../components/CharacterRight';

import TrainLeft from '../components/TrainLeft';
import TrainRight from '../components/TrainRight';

export default {
  components: {
    CharacterLeft,
    CharacterRight,
    TrainLeft,
    TrainRight
  },
  data() {
    return {
      active: null
    };
  }
};
</script>
