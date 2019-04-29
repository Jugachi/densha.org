<template>
  <v-container>
    <div>
      <v-tabs v-model="active" grow color="dark" dark slider-color="light-green">
        <v-tab :key="0" ripple @click.stop="active = 0">
          Game
        </v-tab>
        <v-tab-item :key="0">
          <!-- Game -->
          <v-layout text-xs-center>
            <v-flex xs12>
              <h1>Densha de D: Climax Stage</h1>
            </v-flex>
          </v-layout>
          <v-layout row wrap justify-center>
            <v-flex xs8 md2 pr-2>
              <lazy-component>
                <v-img :src="require('@/assets/covers/CS_Cover.jpg')" />
              </lazy-component>
            </v-flex>
            <v-flex xs8 md6>
              <p>
                Densha de D: Climax Stage is the third game in the series. You can find more
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
          <CharacterLeft
            :image="require('@/assets/characters/CS/D3_Takumi1P.png')"
            title="Takumi Fujiwara"
            text="<p>
                Takumi Fujiwara (藤原拓海 Fujiwara Takumi, known as Tak in the Tokyopop version) is
                the main protagonist of Initial D, a member of Project D and is friends and
                associated with the Akina SpeedStars. He is the driver of the Toyota Sprinter AE86
                Trueno GT Apex or simply the Eight-Six, originally belonging to his father Bunta,
                and forcibly became the delivery boy of his father's tofu business, doing deliveries
                in the morning at Mount Akina.
              </p>

              <p>
                Despite seemingly not having knowledge of cars, in fact he didn't know that his car
                was called an Eight-Six, Takumi is a very skilled driver, having driven on Akina
                since he was in junior high. This caught the attention of other racing teams such as
                the Akagi RedSuns and the Myogi NightKids who wanted a piece of racing against
                Takumi.
              </p>

              <p>
                In his up and coming emergence, he raced against Keisuke Takahashi, NightKids
                members Takeshi Nakazato and Shingo Shoji, the female racing duo Impact Blue, Kenta
                Nakamura and finally Ryosuke Takahashi, in which he ended Ryosuke's winning streak.
                At the same time he was dating Natsuki Mogi.
              </p>

              <p>
                His winning streak supposedly came to an end when he raced against Kyoichi Sudo, the
                leader of Emperor at Mount Akagi, however Kyoichi stated that he didn't consider the
                match a race and just wanted to prove to Takumi that the Eight-Six is not powerful
                enough against his Evo III. The Eight Six was fixed by Bunta, with a new engine and
                some upgrades. Now with his fixed Eight-Six, he went up against Wataru Akiyama, a
                racer from the Saitama region and an Eight-Six driver.
              </p>

              <p>
                After having a rematch with Kyoichi and racing against Kai Kogashiwa and making
                amends with Natsuki before going in their separate ways. He joined Ryosuke's new
                team Project D, which had a similar goal of his previous team the RedSuns. As the
                downhill driver of Project D, his skill massively improved, racing against tougher
                opponents from different regions, at the same time he met his second girlfriend Mika
                Uehara, a golfer.
              </p>

              <p>
                His final race within Project D was against Sidewinder member Shinji Inui, and
                though he won, it left the Eight-Six's engine destroyed. He now currently drives
                Bunta's Subaru Impreza, continuing to race on Mount Akina while also planning on
                becoming a professional racer.
              </p>"
          >
          </CharacterLeft>
          <CharacterRight
            :image="require('@/assets/characters/CS/CHAR_KEISUKE_1P.png')"
            title="Keisuke Takahashi"
            text="<p>
                Keisuke Takahashi (高橋 啓介 Takahashi Keisuke, 'K.T.') is the number two driver for
                the RedSuns. Keisuke drives an efini RX-7 Type R (FD3S) , and is a skilled driver,
                second only to his brother, Ryosuke. Keisuke is a rather hot-headed young man and
                does not like losing. He is also known to drive with his emotions- for example, if
                he realises that he cannot win, his driving suffers and, if he is in the lead, he is
                carefree and very relaxed. He used to rebel against his parents and got in many
                fights with them. They stopped trying on Keisuke. Ryosuke very much understood what
                Keisuke felt. Ryosuke then took Keisuke on a downhill, and it changed his life.
                Before Ryosuke got Keisuke involved in street racing, he was the leader of a
                Bōsōzoku gang. He joins his brother's new team and has a rivalry with Takumi.
                Keisuke races the hillclimb (uphill) on most races, while Takumi races the downhill.
              </p>
              <p>
                Keisuke isn't analytical like his older brother, and Ryosuke's ability to compute
                and analyze amazes Keisuke. But at the same time, Keisuke's ability to think less
                while he is driving, and to do only what he feels amazes Ryosuke. While Ryosuke has
                decided that he won't race much longer, and that he will become a doctor in the
                future, Keisuke has dedicated his life to racing- his eventual goal is to become a
                professional racer. But, first, he must defeat Takumi. Though visibly getting along,
                they still have some kind of argumentation over who is the ace, but he has respect
                for Takumi. He stated once he was not as strong minded as Takumi, because Takumi
                fell asleep really fast before a great battle, making Keisuke ask himself if Takumi
                even knew what pressure was.
              </p>
              <p>
                By the end of the Fourth Stage anime, Keisuke's skill has dramatically improved to
                the point that he is offered contact information for a professional racing team.
                Keisuke turns the offer down since he believes he still has a ways to go before he's
                ready for a professional racing career. At the same time, Takumi remarks that
                Keisuke could probably defeat him if they had a serious race.
              </p>
              <p>
                After the Final Stage, he becomes a full professional racer with his RX-7 and
                Tomiguchi being his personal mechanic
              </p>"
          >
          </CharacterRight>
          <CharacterLeft
            :image="require('@/assets/characters/CS/CHAR_KAI_1P.png')"
            title="Kai Kogashiwa"
            text="<p>
                Kai Kogashiwa (小柏 カイ Kogashiwa Kai) is a street racer from Tochigi prefecture,
                and a son to a legendary Downhill ace and Bunta's rival, Ken Kogashiwa. Ken taught
                Kai in the racing world from a young age, participating in karting competitions
                which made him specialized in midships (colloquial term for mid engine, rear drive).
                Before his transition to street racing, Kai was the fastest motorcyclist on
                Irohazaka. It can be seen that Kai's specialty on Irohazaka is similar to Takumi on
                Akina as he lives at Lake Chuzenji (which is at the top of Irohazaka) and takes the
                road during his daily commute to the bottom.
              </p>
              <p>
                Kai had challenged Takumi on the Emperor's home course of Irohazaka. Kai had
                defeated Seiji Iwaki of Emperor and wanted to defeat Kyoichi as well, but set his
                sights on Takumi after Sudo's defeat. Kai uses a trick taught to him by his father
                to overtake Takumi by jumping a turn in a break in the guard rail on 33rd corner.
                However, he spins out on the final straightaway after his car loses traction from
                landing on leaves on the side of the road and was defeated.
              </p>
              <p>
                Kai reappears as an opponent for Project D in Kanagawa prefecture. Kai represents
                the downhill ace for R.T. Katagiri against the Eight-Six. However, he spins out at
                the last sector costing him the race.
              </p>
              <p>
                Originally, Kai drives his father's Toyota SW20 MR2 but later switches to a silver
                Toyota MR-S ZZW30 (a 3rd Generation MR2 Roadster), leaving the SW20 to his father.
              </p>"
          >
          </CharacterLeft>
          <CharacterRight
            :image="require('@/assets/characters/CS/CHAR_KYOICHI_1P.png')"
            title="Kyoichi Sudo"
            text="<p>
                Kyoichi Sudo (須藤 京一 Sudō Kyōichi, 'Kyle') is the team leader and driving ace of
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
              </p>"
          >
          </CharacterRight>
          <CharacterLeft
            :image="require('@/assets/characters/CS/CHAR_MIKI_1P.png')"
            title="Miki"
            text="<p>
                Miki (御木) is a senior in the football (soccer) club of the school that Takumi
                attended. He drives a Celica GT-Four (ST205). In 1st Stage, Takumi punched him in
                the changing rooms for bragging about his sexual exploits with Natsuki, during the
                time when Takumi was ignorant of the truth. During winter, he kidnaps Natsuki and
                forces her to come to Lake Akina with him. His plans are foiled by Takumi who gets
                Natsuki's call for help and chases Miki with his Trueno until he spins out on the
                snow and Natsuki escapes his Celica.
              </p>
              <p>
                It is later revealed that he and Shiraishi are siblings, born from a man driving a
                white Mercedes, though they both don't realize it.
              </p>"
          >
          </CharacterLeft>
          <CharacterRight
            :image="require('@/assets/characters/CS/CHAR_WATARU_1P.png')"
            title="Wataru Akiyama"
            text="<p>
                Wataru Akiyama (秋山 渉 Akiyama Wataru, 'Aki') was one of the first racers from
                Saitama to actually race against Takumi with his turbocharged Levin; he appeared
                later in the Project D arc, this time replacing the turbocharger with a supercharger
                for more linear acceleration and avoid Turbocharger lag. Wataru is a skilled driver
                who honed his skills on the treacherous Shomaru Pass. He came to Gunma in hopes of
                facing new racers to challenge, as well as to watch over his sister Kazumi, who just
                got a job at a hotel with her aunt. Wataru is Nobuhiko's cousin, as seen when he
                watches Takumi race against the Northern Saitama Alliance in the hopes of finding a
                weak spot.
              </p>
              <p>
                Several times throughout the Fourth Stage, Wataru reaches out to Takumi and gives
                him advice whenever he is in Akina, notably helping the latter overcome his
                'four-wheel drive complex.'
              </p>
              <p>
                Wataru later raced against Keisuke Takahashi in a wet-weather race, but when his
                tires lost grip upon touching a metal gutter while he adjusted his wipers, he was
                defeated.
              </p>
              <p>
                Some time later, Wataru confronts the imposter Project D somewhere in Saitama and
                helps the real Project D expose them as the frauds they are.
              </p>
              <p>
                He later watches the final race between Project D and Sidewinder along with Nobuhiko
                and Sakamoto.
              </p>"
          >
          </CharacterRight>
          <CharacterLeft
            :image="require('@/assets/characters/CS/D3_tuka_a.png')"
            title="Tsukamoto"
            text="<p>
                Tsukamoto (塚本) is a minor character that appears in the manga around the time of
                Takumi's race against Kyoichi of Emperor. Tsukamoto was a high school senior when
                Takumi and Natsuki were freshmen, but now he is mildly involved with the street
                racing scene in Akagi. Although he believes that his skills are extreme, they are in
                fact far from it. He soon experiences real extreme driving when Takumi drives his
                180SX down Akagi after a request by Natsuki to pass a cocky couple in a Silvia S13,
                leading to Tsukamoto fainting.
              </p>"
          >
          </CharacterLeft>
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
                Train talk
              </p>
            </v-flex>
          </v-layout>
          <TrainLeft
            :image="require('@/assets/trains/CS/ICON_2800.png')"
            title="阪急２８００系"
            text="
              <a href='https://ja.wikipedia.org/wiki/%E9%98%AA%E6%80%A52800%E7%B3%BB%E9%9B%BB%E8%BB%8A' target='_blank'>（Wikipedia）</a>

              <p>運転士は秋山渉</p>

              <p>阪急 京都線を走る特急形車両。
              デビューは1964年。</p>

              <p>これまでの列車は「ロングシート」と呼ばれるベンチのような座席が多かったが、
              （ロングシート）
              <a href='https://ja.wikipedia.org/wiki/%E9%89%84%E9%81%93%E8%BB%8A%E4%B8%A1%E3%81%AE%E5%BA%A7%E5%B8%AD#%E3%83%AD%E3%83%B3%E3%82%B0%E3%82%B7%E3%83%BC%E3%83%88%EF%BC%88%E7%B8%A6%E5%BA%A7%E5%B8%AD%EF%BC%89' target='_blank'>（Wikipedia）</a></p>

              <p>ライバルの京阪電鉄が、２扉化して座席数を増やし、
              進行方向を向いた座席「クロスシート」を乗せた、乗客にとって快適な京阪１９００系を登場させた。
              （クロスシート）
              <a href='https://ja.wikipedia.org/wiki/%E9%89%84%E9%81%93%E8%BB%8A%E4%B8%A1%E3%81%AE%E5%BA%A7%E5%B8%AD#%E3%82%AF%E3%83%AD%E3%82%B9%E3%82%B7%E3%83%BC%E3%83%88%EF%BC%88%E6%A8%AA%E5%BA%A7%E5%B8%AD%EF%BC%89' target='_blank'>（Wikipedia）</a></p>

              <p>（京阪1900系）
              <a href='https://ja.wikipedia.org/wiki/%E4%BA%AC%E9%98%AA1900%E7%B3%BB%E9%9B%BB%E8%BB%8A' target='_blank'>（Wikipedia）</a></p>

              <p>利用客も、阪急から京阪へ流れた為、
              車体は２３００と共通だが、車両の真ん中の扉を減らし、
              前後２扉、クロスシートの阪急２８００系を製造、
              京阪へ対抗する車両としての登場となった。</p>

              <p>このクロスシートと、ロングシートの違いは、
              １２話で、車内に並べたハードルの描写で描かれている。
              ２０００と２８００の内装が異なる事がわかる鉄道オタクでないと、
              解らないネタである。</p>


              <p>サービス面で、京阪と激戦を広げたが、
              カラーテレビ付きの京阪の３０００系の登場により
              阪急は少しずつに劣勢に追いやられるようになった。
              （京阪3000系）
              <a href='https://ja.wikipedia.org/wiki/%E4%BA%AC%E9%98%AA3000%E7%B3%BB%E9%9B%BB%E8%BB%8A_(%E5%88%9D%E4%BB%A3)' target='_blank'>（Wikipedia）</a></p>


              <p>後継の阪急６３００系が登場する頃には、特急車から一般車に格下げされ、
              時代の流れとともに、２扉から３扉車に改造されていった。
              しかも、機器更新を行わず、長年の特急運用と３扉化による
              車体強度の低下などにより、２０００系や２３００系より後に登場したにも関わらず、
              1995年にさよなら運転を行って引退となった。</p>


              <p>９話で、池谷と健二が乗る阪急６３００系を追い抜く阪急２８００系は、
              在りし日の特急の姿で、当時を知る者は、
              池谷や健二と同じように、涙を流したに違いない。</p>

              <p>頭文字Ｄの秋山渉のＡＥ８６レビンは、
              「ドッカンターボ」を搭載し、
              「古い車というハンデキャップを逆手にとって相手を追い詰めることが快感」と言うスタイルだったが、
              電車でＤの阪急２８００は全車両を動力車で編成し、
              古い阪急２０００系統の抵抗制御の加速の悪さと、登り坂の弱さをカバーしている。</p>

              <p>バトルの舞台となった「神戸電鉄 有馬・三田線」は
              大阪、神戸の市街地から数十分で、六甲山地の有名な温泉、「有馬温泉」へと運んでくれる路線である。</p>

              <p>スタートの「新開地駅」は阪急電鉄、阪神電鉄、山陽電鉄の３社が乗り入れ、観光客も多く、輸送量も多い。
              しかし、山奥へ行けば行くほど、利用客も減り、線路は複線（２本）から単線（１本）になり、
              鈴蘭台駅から延びる粟生線は、利用客がほとんどなく、存亡の危機に瀕している。</p>

              <p>頭文字Ｄの秋山渉は、バトルの舞台である「正丸峠」で、
              「何度も事故を起こしている」と妹の和美に言われているが、
              神戸電鉄 有馬・三田線では、野生の動物と衝突事故が多い。
              そのぐらい山奥を走る路線で、背景が真っ黒で困るぐらい、何も無いのだ！</p>
            "
          >
          </TrainLeft>
          <TrainRight
            :image="require('@/assets/trains/CS/ICON_9000.png')"
            title="阪神９０００系"
            text="
              <a href='https://ja.wikipedia.org/wiki/%E9%98%AA%E7%A5%9E9000%E7%B3%BB%E9%9B%BB%E8%BB%8A' target='_blank'>（Wikipedia）</a>

              <p>運転士は塚本</p>

              <p>塚本は、拓海の先輩であり、
              啓介と渉のバトルを中断させたドライバー。</p>

              <p>…なのだが、アニメ版ではエピソードごとカットされた人物で、
              バトルを中断させる人物も、アニメ版では別の人物に変更されている。</p>


              <p>1995年に発生した阪神・淡路大震災に伴い、
              阪神電鉄の車両不足を埋める為に製造された阪神９０００系。
              早急に車両不足を埋めれる余裕のある製造ラインと、工期短縮を検討し、
              ステンレス車体が採用された。</p>

              <p>阪神電鉄は、阪急神戸線の少し南を通る、阪急のライバル会社であり、
              乗客獲得競争を繰り広げていた。
              <a href='https://ja.wikipedia.org/wiki/%E9%98%AA%E7%A5%9E%E9%9B%BB%E6%B0%97%E9%89%84%E9%81%93' target='_blank'>（Wikipedia）</a></p>

              <p>阪急よりも運転頻度を増やし、狭い駅間を、急加速急停車で結ぶ
              日本一の加速度を誇る「阪神ジェットカー」が有名である。
              <a href='https://ja.wikipedia.org/wiki/%E3%82%B8%E3%82%A7%E3%83%83%E3%83%88%E3%82%AB%E3%83%BC' target='_blank'>（Wikipedia）</a></p>

              <p>だが、阪神電鉄は2006年に阪急電鉄の子会社となった。</p>

              <p>阪急の子会社となったおかげで、
              阪急の車庫が満杯で、メンテ間に合わない車両を、
              阪神の車庫で引き受ける珍事が発生。</p>

              <p>「阪神の線路を阪急が走る」という、まるで電車でＤのような事が実際に起こり、
              Twitterで祭り状態になり、新聞にも載った。
              <a href='https://nishinomiya.keizai.biz/headline/182/' target='_blank'>（Keizai）</a></p>

              <p>こちらはブログで紹介されたもの。
              <a href='http://d.hatena.ne.jp/keyboar/20140717/1405554815' target='_blank'>（Hatena）</a></p>


              <p>また、電車でＤ 総集編７のオマケ漫画で、
              塚本が「同じ阪急グループになったので、よろしくな」と拓海に挨拶している。</p>


              <p>ちなみに、阪神９０００系は「赤胴車」に分類され、普通の車両である。
              加速もドリフトもパっとしないのは塚本の腕もあるのだが…</p>

              <p>現在は、塗装を変更、近鉄に乗り入れ、
              神戸から大阪を抜け、奈良を結ぶ長距離車両として活躍中である。</p>
            "
          >
          </TrainRight>
          <TrainLeft
            :image="require('@/assets/trains/CS/ICON_JR2000.png')"
            title="ＪＲ四国 ２０００ＧＴ"
            text="
              <a href='https://ja.wikipedia.org/wiki/JR%E5%9B%9B%E5%9B%BD2000%E7%B3%BB%E6%B0%97%E5%8B%95%E8%BB%8A' target='_blank'>（Wikipedia）</a>


              <p>運転士は小柏カイ</p>

              <p>ＪＲ四国 ２０００系は、急勾配、急カーブが多い「土讃線」の特急列車の
              速度向上を目的として開発された車両で、
              カーブで車両が傾き、減速する事なく走り抜ける事ができる、
              「振り子式台車」を搭載した、世界初の「振り子式気動車」である。</p>

              <p>コーナーで車体を傾けて高速で通過するＪＲ四国２０００系
              <a href='https://www.youtube.com/watch?v=1uPChEscS8U' target='_blank'>（YouTube）</a></p>


              <p>「気動車」とは、電気ではなく、ディーゼルエンジンで動く鉄道車両であり、
              小柏カイの乗る２０００ＧＴは、
              「ＪＲ四国２０００系気動車」４両に、
              ガスタービン動車４両を連結させた８両編成で構成されている。
              （ＧＴはガスタービンの略である）</p>


              <p>日本でガスタービンエンジンを搭載した車両は、実際は試作車止まりである。</p>

              <p>１９６０年代に、フランス国鉄や、カナダ国鉄が高速鉄道としてガスタービン車両を開発、
              営業運転を始めました。</p>

              <p>日本もガスタービンエンジンに目を付け、技術開発が進められた。</p>

              <p>航空機のエンジンを流用して試作車を作成、時速130km/hと試験結果も良好だったのだが、
              そもそも航空機用の為、騒音が凄い。廃熱も凄い。</p>

              <p>航空機に積む為のエンジンなので、
              小型、軽量、高出力が良いところだったのに、
              消音の為に大型化され、結果的に客室も狭くなる事に。</p>

              <p>さらに、トンネルの中で排気された高温のガスを、後続の車両のエンジンが吸気し、
              安全の為に緊急停止したり、トラブルが続出した。</p>

              <p>気温差に弱くパワーが出ない、
              低速時の燃費が想像以上に悪い、
              停車駅が多かったり、連続したカーブでは大きなデメリットとなった。</p>

              <p>時代も味方をせず、1973年の「オイルショック」が追い打ちになり、
              ガスタービンエンジンの構想は消え、
              試作車はＪＲ東日本 大宮総合車両センターで非公開保存とされた。</p>


              <p>１６話で
              「鉄道用エンジンとしては実用化しなかったが、バトル専用仕様ならばあるいは…」
              と、須藤京一と高橋涼介が話をしているのには、
              上記のような研究、開発、結果があった為である。</p>

              <p>舞台となった近鉄奈良線は、
              奈良から生駒山を超え、大阪難波へ抜ける山越えの路線。
              <a href='https://ja.wikipedia.org/wiki/%E8%BF%91%E9%89%84%E5%A5%88%E8%89%AF%E7%B7%9A' target='_blank'>（Wikipedia）</a></p>

              <p>平城宮跡の中を突っ切り、勾配を登り、
              3.3kmの長い生駒トンネルを抜ける。</p>

              <p>石切駅から額田駅への土讃線スペシャル区間は、勾配もきつく、
              大きなカーブを描き、空中をショートカットするには良い区間である。
              この区間は標高が高く、大阪の夜景を一望出来る。</p>

              <p>布施駅から近鉄大阪線が合流し、複々線区間となる。</p>

              <p>終点の大阪難波から先は、
              現在は阪神なんば線が開通し、
              そのまま阪神電鉄に乗り入れる事が出来る。</p>


              <p>既に否定された技術である「ガスタービンエンジン」。
              フタを開けて見ると、とても面白いバトルになり、
              爆音と黒煙を上げて走る２０００ＧＴは、
              電車でＤでは人気車両のひとつになりました。</p>
            "
          >
          </TrainLeft>
          <TrainRight
            :image="require('@/assets/trains/CS/ICON_RAPID.png')"
            title="南海５００００系 ラピート"
            text="
              <a href='https://ja.wikipedia.org/wiki/%E3%83%A9%E3%83%94%E3%83%BC%E3%83%88' target='_blank'>（Wikipedia）</a>

              <p>運転士は御木</p>

              <p>南海電鉄の難波と、関西国際空港（カンクー）を結ぶ、通称「鉄仮面」の空港特急。
              （南海電鉄）
              <a href='https://ja.wikipedia.org/wiki/%E5%8D%97%E6%B5%B7%E9%9B%BB%E6%B0%97%E9%89%84%E9%81%93' target='_blank'>（Wikipedia）</a></p>

              <p>由来はrapidで、ドイツ語で「速い」の意味。
              登場は1994年で、大阪の市街地と空港をノンストップ、２９分で結んだ。</p>

              <p>…のだが、リムジンバスや、競合他社の京都直結の特急列車に対して優位性が発揮できず、利用客が低迷。
              途中停車駅を増やしノンストップ運行は廃止された。</p>

              <p>2010年以降は、市況の回復で海外旅行者が増えたのと、
              海外の旅行代理店への営業努力で利用者が大きく増加、
              空港連絡鉄道として、
              また、平日は座席指定の通勤ライナーとして、需要が伸びている。</p>

              <p>２０１４年に「ガンダムＵＣ」とタイアップし、深紅のラピート、
              <a href='https://www.youtube.com/watch?v=2NohInElWGA' target='_blank'>（YouTube）</a>
              「Ｐｅａｃｈ」とタイアップし、白いラピートが、
              <a href='https://www.youtube.com/watch?v=57fp-YIR5Lk' target='_blank'>（YouTube）</a>
              ２０１５年には「スターウォーズ」とタイアップし、黒のラピートが登場するなど、
              カラーバリエーションも増えている。
              <a href='https://www.youtube.com/watch?v=1I8fwXnji7I' target='_blank'>（YouTube）</a></p>


              <p>すごい見た目だ…</p>
            "
          >
          </TrainRight>
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
          <v-layout justify-center text-xs-center>
            <v-flex xs8>
              <p>
                This will be a wall of text that explains everything.
              </p>
            </v-flex>
          </v-layout>
          <v-layout row wrap justify-center pt-4>
            <v-flex xs12 md5>
              <lazy-component>
                <v-responsive :aspect-ratio="1200 / 700">
                  <youtube width="100%" height="100%" video-id="WwZz1Yxz5ho" />
                </v-responsive>
              </lazy-component>
            </v-flex>
            <v-flex xs12 md5 pl-2>
              <h2>Stage 1 - Mako and Sayuki</h2>
              <p>
                More information about this kind of stage will be added soon.
              </p>
            </v-flex>
          </v-layout>
          <v-layout row wrap justify-center pt-4>
            <v-flex xs12 md5>
              <lazy-component>
                <v-responsive :aspect-ratio="1200 / 700">
                  <youtube width="100%" height="100%" video-id="OS5bAK3gZc" />
                </v-responsive>
              </lazy-component>
            </v-flex>
            <v-flex xs12 md5 pl-2>
              <h2>Stage 2 - Nakazato</h2>
              <p>
                More information about this kind of stage will be added soon.
              </p>
            </v-flex>
          </v-layout>
          <v-layout row wrap justify-center pt-4>
            <v-flex xs12 md5>
              <lazy-compontent>
                <v-responsive :aspect-ratio="1200 / 700">
                  <youtube width="100%" height="100%" video-id="fdP4_itYimw" />
                </v-responsive>
              </lazy-compontent>
            </v-flex>
            <v-flex xs12 md5 pl-2>
              <h2>Stage 3 - Kenta</h2>
              <p>
                More information about this kind of stage will be added soon.
              </p>
            </v-flex>
          </v-layout>
          <v-layout row wrap justify-center pt-4>
            <v-flex xs12 md5>
              <lazy-compontent>
                <v-responsive :aspect-ratio="1200 / 700">
                  <youtube width="100%" height="100%" video-id="Qj9_apUMuvk" />
                </v-responsive>
              </lazy-compontent>
            </v-flex>
            <v-flex xs12 md5 pl-2>
              <h2>Stage 4 - Seiji</h2>
              <p>
                More information about this kind of stage will be added soon.
              </p>
            </v-flex>
          </v-layout>
          <v-layout row wrap justify-center pt-4>
            <v-flex xs12 md5>
              <lazy-compontent>
                <v-responsive :aspect-ratio="1200 / 700">
                  <youtube width="100%" height="100%" video-id="U2g-qvEtsuY" />
                </v-responsive>
              </lazy-compontent>
            </v-flex>
            <v-flex xs12 md5 pl-2>
              <h2>Stage 5 - Kyoichi 1</h2>
              <p>
                More information about this kind of stage will be added soon.
              </p>
            </v-flex>
          </v-layout>
          <v-layout row wrap justify-center pt-4>
            <v-flex xs12 md5>
              <lazy-compontent>
                <v-responsive :aspect-ratio="1200 / 700">
                  <youtube width="100%" height="100%" video-id="28oU3ra69cU" />
                </v-responsive>
              </lazy-compontent>
            </v-flex>
            <v-flex xs12 md5 pl-2>
              <h2>Stage 6 - Kyoichi 2</h2>
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
          <v-layout row wrap justify-center pt-4>
            <v-flex xs12 md5>
              <lazy-component>
                <v-responsive :aspect-ratio="1200 / 700">
                  <youtube width="100%" height="100%" video-id="WwZz1Yxz5ho" />
                </v-responsive>
              </lazy-component>
            </v-flex>
            <v-flex xs12 md5 pl-2>
              <h2>Stage 1 - Mako and Sayuki</h2>
              <p>
                More information about this kind of stage will be added soon.
              </p>
            </v-flex>
          </v-layout>
          <v-layout row wrap justify-center pt-4>
            <v-flex xs12 md5>
              <lazy-component>
                <v-responsive :aspect-ratio="1200 / 700">
                  <youtube width="100%" height="100%" video-id="OS5bAK3gZc" />
                </v-responsive>
              </lazy-component>
            </v-flex>
            <v-flex xs12 md5 pl-2>
              <h2>Stage 2 - Nakazato</h2>
              <p>
                More information about this kind of stage will be added soon.
              </p>
            </v-flex>
          </v-layout>
          <v-layout row wrap justify-center pt-4>
            <v-flex xs12 md5>
              <lazy-compontent>
                <v-responsive :aspect-ratio="1200 / 700">
                  <youtube width="100%" height="100%" video-id="fdP4_itYimw" />
                </v-responsive>
              </lazy-compontent>
            </v-flex>
            <v-flex xs12 md5 pl-2>
              <h2>Stage 3 - Kenta</h2>
              <p>
                More information about this kind of stage will be added soon.
              </p>
            </v-flex>
          </v-layout>
          <v-layout row wrap justify-center pt-4>
            <v-flex xs12 md5>
              <lazy-compontent>
                <v-responsive :aspect-ratio="1200 / 700">
                  <youtube width="100%" height="100%" video-id="Qj9_apUMuvk" />
                </v-responsive>
              </lazy-compontent>
            </v-flex>
            <v-flex xs12 md5 pl-2>
              <h2>Stage 4 - Seiji</h2>
              <p>
                More information about this kind of stage will be added soon.
              </p>
            </v-flex>
          </v-layout>
          <v-layout row wrap justify-center pt-4>
            <v-flex xs12 md5>
              <lazy-compontent>
                <v-responsive :aspect-ratio="1200 / 700">
                  <youtube width="100%" height="100%" video-id="U2g-qvEtsuY" />
                </v-responsive>
              </lazy-compontent>
            </v-flex>
            <v-flex xs12 md5 pl-2>
              <h2>Stage 5 - Kyoichi 1</h2>
              <p>
                More information about this kind of stage will be added soon.
              </p>
            </v-flex>
          </v-layout>
          <v-layout row wrap justify-center pt-4>
            <v-flex xs12 md5>
              <lazy-compontent>
                <v-responsive :aspect-ratio="1200 / 700">
                  <youtube width="100%" height="100%" video-id="28oU3ra69cU" />
                </v-responsive>
              </lazy-compontent>
            </v-flex>
            <v-flex xs12 md5 pl-2>
              <h2>Stage 6 - Kyoichi 2</h2>
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
