<template>
  <v-container>
    <div>
      <v-tabs v-model="active" grow color="dark" dark slider-color="orange">
        <v-tab :key="0" ripple @click.stop="active = 0">
          Game
        </v-tab>
        <v-tab-item :key="0">
          <!-- Game -->
          <v-layout text-xs-center>
            <v-flex xs12>
              <h1>Densha de D: Rising Stage</h1>
            </v-flex>
          </v-layout>
          <v-layout row wrap justify-center>
            <v-flex xs8 md2 pr-2>
              <lazy-component>
                <v-img :src="require('@/assets/covers/RS_Cover.jpg')" />
              </lazy-component>
            </v-flex>
            <v-flex xs8 md6>
              <p>
                Densha de D: Rising Stage is the fourth game in the series. You can find more
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
            :image="require('@/assets/characters/RS/D4_Takumi.png')"
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
            :image="require('@/assets/characters/RS/D4_Keisuke.png')"
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
            :image="require('@/assets/characters/RS/D4_Kawai1P.png')"
            title="Atsuro Kawai"
            text="<p>
                Atsuro Kawai (川井 淳郎 Kawai Atsurō) is the hillclimb racer and the leader of the
                Tochigi-based Seven Star Leaf. He seems to be a decent enough driver, again
                favouring the grip racing techniques, but his mastery of it is uncomparable to that
                of Takeshi Nakazato. His car is powered up to 400 hp.
              </p>"
          >
          </CharacterLeft>
          <CharacterRight
            :image="require('@/assets/characters/RS/D4_Nino1P.png')"
            title="Daiki Ninomiya"
            text="<p>
                Daiki Ninomiya (二宮 大輝 Ninomiya Daiki, known as Dice in the Tokyopop version) is
                the ace and current student of Todo School and is one of the better drivers of the
                series. Driving a yellow Civic Type R (EK9), Daiki races against Takumi of Project D
                in a downhill battle. His dad is a race car driver. He excels in braking, being able
                to release the brake pedal in the perfect spot during a corner, every time. Daiki is
                also one of the school's all time three best downhill drivers. He is also good
                friends with Smiley Sakai and Tomoyuki Tachi.
              </p>"
          >
          </CharacterRight>
          <CharacterLeft
            :image="require('@/assets/characters/RS/D4_Sakai1P.png')"
            title="Smiley Sakai"
            text="<p>
                Smiley Sakai (スマイリー 酒井, Sumairī Sakai) is a student of the Todo School and
                one of Daiki's friends and drives an Integra Type R DC2, equipped with an
                aftermarket turbocharger. Sakai races against Keisuke of Project D in a hillclimb
                battle.
              </p>
              <p>
                He uses two techniques to race, first, using high speeds to enter a corner to get
                the other person to do the same, then correcting his speed during the turn. The
                other trick is to feint-brake his opponent, forcing them to back off while he speeds
                away. His face tenses up when he is racing to make him look like he is smiling,
                hence his nickname, Smiley Sakai.
              </p>
              <p>
                Judging by the way that Daiki refers to him with the honorific san (Sakai-san), it
                can be inferred that Smiley is a senior student of the Todo School, and probably the
                reason why he knows much of Todo's experiences in racing, especially the school's
                rivalry with Purple Shadow and their top racers.
              </p>"
          >
          </CharacterLeft>
          <CharacterRight
            :image="require('@/assets/characters/RS/D4_Sue1P.png')"
            title="Toru Suetsugu"
            text="<p>
                Toru Suetsugu (末次 トオル Suetsugu Tōru) is the downhill racer for the Seven Star
                Leaf team and known for his reckless, kamikaze downhill style. Toru is also the only
                driver in the series who actually has a decent relationship; he has a girlfriend
                called Nao. Nao cares for him very much and she doesn't really approve of him
                racing, especially that he is practically broke almost all of the time and borrows
                money from her often.
              </p>
              <p>
                When the Seven Star Leaf team is challenged by Ryosuke's Project D. Tohru is slated
                to race against Takumi. Again he borrows money from his girlfriend for a new set of
                tires. She agreed, with a condition: if he is defeated, he'll have to stop racing,
                or they will have to break up. He lost when he tried to emulate Takumi's
                weight-shifting technique of bypassing the uncovered gutters: his right front wheel
                snagged on the open gutter, flipping his car over once before coming to a
                standstill. In the end, he adheres to Nao's request - only to find out she stated
                the ultimatum just to guilt him. Nevertheless, he expresses his gratitude for facing
                Project D.
              </p>"
          >
          </CharacterRight>
          <CharacterLeft
            :image="require('@/assets/characters/RS/D4_Tachi1P.png')"
            title="Tomoyuki Tachi"
            text="<p>
                Tomoyuki Tachi (舘 智幸 Tachi Tomoyuki, Tokyopop: Touch) is a professional racer and
                a graduate, or 'old boy' (shortened to OB) of the Todo School. He was brought in to
                have a rematch against Project D on Happogahara, after they were defeated by them.
                Tomoyuki took Daiki's EK9 and beat Takumi's downhill record in one try, without
                pushing the car to the limit. Tomoyuki agreed to use the school's top car, the
                Spoon-tuned demonstration EK9, at Happogahara.
              </p>
              <p>
                It is highly speculated that his professional racing outfit seems to be based on the
                racing outfit that Keiichi Tsuchiya wears during his racing days and his appearances
                in Best Motoring. The green racing suit, gloves and the red ARD Asic racing shoes
                are evidence to this speculation. It appears that Tomoyuki had role in the CD
                Initial D Drama involving Tsuchiya as the basis of the story. Tomoyuki tuned the
                Civic the best he could to be able to compete with the FD on the straights, but
                surprisingly, Ryosuke decided to send out the Eight-Six. He lost the race to Takumi
                when he steered off the center of the road to avoid hitting a cat that crossed the
                street near the finish line. Because of this dodging he creates enough space for
                Takumi to pass him in his Eight-Six. Afterwards Takumi asks Tomoyuki why he suddenly
                created space for Takumi to pass. Tachi responded that he thought he saw something
                cross the road and because of his racing reflexes immediately dodged it. Takumi's
                headlights were turned off as part of his technique.
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
            :image="require('@/assets/trains/RS/ICON_DRC.png')"
            title="東武１７２０系ＤＲＣ"
            text="
              <a href='https://ja.wikipedia.org/wiki/%E6%9D%B1%E6%AD%A61720%E7%B3%BB%E9%9B%BB%E8%BB%8A' target='_blank'>（Wikipedia）</a>

              <p>運転士は舘智幸</p>

              <p>1960年から1991年から運用されていた、東武鉄道を代表する特急用車両。
              通称「デラックスロマンスカー(Deluxe Romance Car 略称：DRC)」</p>

              <p>最高速度は165km/hで設計、製造された、本物の特急車両。</p>

              <p>これは国鉄が、東京～大阪は6時間30分で結ぶ計画を立て、
              設計最高速度160km/hの「181系」を視野にいれていた為である。
              （国鉄181系）
              <a href='https://ja.wikipedia.org/wiki/%E5%9B%BD%E9%89%84181%E7%B3%BB%E9%9B%BB%E8%BB%8A' target='_blank'>（Wikipedia）</a></p>

              <p>観光用列車の為、室内は快適に過ごせるように設計され、
              リクライニングシート、フットレスト、食堂車、自動ドアなど、
              新しいものを導入していた。</p>

              <p>東堂塾のデモカーにふさわしい、プロが仕上げた車両である。</p>

              <p>舞台となる東武東上線は
              「池袋駅」をスタートし、市街地を抜け、郊外の最高速区間を突っ走り、
              スタートから60kmの地点にある「嵐山信号場」でＵターンし、
              再び池袋に戻る全長120kmのコースになる。
              <a href='https://ja.wikipedia.org/wiki/%E6%9D%B1%E6%AD%A6%E6%9D%B1%E4%B8%8A%E6%9C%AC%E7%B7%9A' target='_blank'>（Wikipedia）</a></p>

              <p>池袋駅からは、狭く低速コーナーが続く第１セクション、
              和光市駅から複々線（４本の線路）の第２セクション、
              志木駅から長いストレートが続く複線（２本の線路）の第３セクション
              北坂戸駅の先の鉄橋から始まる、長いストレートと高速コーナーの第４セクション</p>

              <p>原作の頭文字Ｄで、東堂塾のコースが４つの区間に分けて語られていますが、
              電車でＤの東武東上線も４つの区間に分けて語られています。
              本当にそんな感じの路線ですので、是非先頭車両で楽しんで下さい。
              帰ってくる頃には夕方になっていると思います。（路線が長い！）</p>
            "
          >
          </TrainLeft>
          <TrainRight
            :image="require('@/assets/trains/RS/ICON_MU.png')"
            title="名鉄２０００系 ミュースカイ"
            text="
                <a href='https://ja.wikipedia.org/wiki/%E5%90%8D%E9%89%842000%E7%B3%BB%E9%9B%BB%E8%BB%8A' target='_blank'>（Wikipedia）</a>

                <p>運転士は川井淳郎</p>

                <p>中部国際空港（セントレア）へのアクセスを目的に開発された特急用車両。
                <a href='https://www.youtube.com/watch?v=QDlAVbQzF0s' target='_blank'>（YouTube）</a></p>

                <p>舞台となる常滑線はカーブが多く、
                曲線区間の高速走行が、名鉄の課題であった。</p>

                <p>（常滑線）
                <a href='https://ja.wikipedia.org/wiki/%E5%90%8D%E9%89%84%E5%B8%B8%E6%BB%91%E7%B7%9A' target='_blank'>（Wikipedia）</a></p>

                <p>そこで「空気バネ」を使った「車体傾斜装置」を搭載し、
                既存車より5km/h～15km/h速くコーナーを走る速度を向上させている。</p>

                <p>白を基調に青をアクセントカラーとしているが、
                赤い一般車も存在する。
                <a href='https://ja.wikipedia.org/wiki/%E5%90%8D%E9%89%842200%E7%B3%BB%E9%9B%BB%E8%BB%8A' target='_blank'>（Wikipedia）</a></p>

                <p>こちらは一般客が立って乗れるように、
                車体傾斜装置は付いていない。</p>

                <p>電車バトルとは別に、戦っているマスコットキャラクター。
                あれは、名古屋名物のキャラクターが多く戦っています。
                手羽先やトンカツなど、おいしい名物なので、是非食べに行きましょう。</p>
              "
          >
          </TrainRight>
          <TrainLeft
            :image="require('@/assets/trains/RS/ICON_PANO.png')"
            title="名鉄１０００系 パノラマハイパー"
            text="
                <a href='https://ja.wikipedia.org/wiki/%E5%90%8D%E9%89%841000%E7%B3%BB%E9%9B%BB%E8%BB%8A' target='_blank'>（Wikipedia）</a>

              <p>運転士は末次トオル</p>

              <p>ＡＥ８６を作った会社、「トヨタ自動車」がある、
              愛知県を走る名古屋鉄道、通称名鉄の特急用車両。</p>

              <p>1988年にデビューし、日本中の景気が良かった為、
              コンセプトは「ハイ・アメニティ・エキスプレス」を元に設計された。</p>

              <p>先頭車両は、高い位置に席があるハイデッカー構造。
              そして、大きな窓から展望が楽しめる「パノラマシート」がある。
              展望席は指定席で、「ミューチケット」を買う必要がある。</p>

              <p>名鉄独特の長いメロディのミュージックホーンを搭載している。
              <a href='https://www.youtube.com/watch?v=xqBUws9GntA' target='_blank'>（YouTube）</a></p>

              <p>このミュージックホーンの長い理由は、
              踏切を我慢出来ない車を除ける為に、このような長いメロディになったらしい。
              トヨタ自動車のある愛知県は、自動車が鉄道を苦しめるようだ？</p>


              <p>２０話で「ボロっちい」と言われていたが、
              現在はリニューアルされ、塗装も少し変更された。</p>

              <p>バトルの舞台の名鉄本線は全長およそ100kmのロングコース。
              片輪ドリフトに失敗しなければ、もっと長い話になっていたのでは…
              <a href='https://ja.wikipedia.org/wiki/%E5%90%8D%E9%89%84%E5%90%8D%E5%8F%A4%E5%B1%8B%E6%9C%AC%E7%B7%9A' target='_blank'>（Wikipedia）</a></p>


              <p>物語の一番最初に出てくる喫茶店。
              あれは「喫茶マウンテン」という有名な喫茶店です。
              <a href='https://www.hotpepper.jp/mesitsu/entry/akihiro-ishiguro/18-00087' target='_blank'>（Hotpepper）</a></p>

              <p>人を選びますが、記念に行ってみるのも良いかもしれません…</p>


              <p>Youtubeに上げた、名鉄がバトルしている動画を見て、
              コミケに、トヨタ勤務の方が来て、RisingStageを買って行かれました。
              地元の方に、とても人気のようです。</p>
              "
          >
          </TrainLeft>
          <TrainRight
            :image="require('@/assets/trains/RS/ICON_T50K.png')"
            title="東武５００００系"
            text="
              <a href='https://ja.wikipedia.org/wiki/%E6%9D%B1%E6%AD%A650000%E7%B3%BB%E9%9B%BB%E8%BB%8A' target='_blank'></a>

              <p>運転士は二宮大輝</p>

              <p>2004年にデビューした東武鉄道の通勤車両。
              （東武鉄道）
              <a href='https://ja.wikipedia.org/wiki/%E6%9D%B1%E6%AD%A6%E9%89%84%E9%81%93' target='_blank'></a></p>

              <p>「人と環境にやさしい次世代車両」をコンセプトに、
              バリアフリー・省エネルギー・メンテナンスフリー化などを目指し設計、
              「A-train」と呼ばれるモジュール工法を用いて、アルミ合金で製造されている。</p>

              <p>（A-train）
              <a href='https://ja.wikipedia.org/wiki/A-train_(%E6%97%A5%E7%AB%8B%E8%A3%BD%E4%BD%9C%E6%89%80)' target='_blank'></a></p>

              <p>１０両編成の車両で、電車でＤでは一番長い車両。</p>

              <p>舞台となった伊勢崎・日光線は、およそ140kmを走る超長ロングコース。
              「鬼怒川温泉駅」から「浅草駅」まで、
              特急列車で２時間の距離を、３０分程度で走る事になります。
              途中には建設中のスカイツリーが見えます。</p>

              <p>（伊勢崎線）
              <a href='https://ja.wikipedia.org/wiki/%E6%9D%B1%E6%AD%A6%E4%BC%8A%E5%8B%A2%E5%B4%8E%E7%B7%9A' target='_blank'></a>
              （日光線）
              <a href='https://ja.wikipedia.org/wiki/%E6%9D%B1%E6%AD%A6%E6%97%A5%E5%85%89%E7%B7%9A' target='_blank'></a></p>


              <p>現在は東京地下鉄や、東急など、他社に乗り入れている。
              ちなみに東急は次回作ShiningStageで登場するので、
              駅で電車を待っていると、次回作の車両と並ぶ姿が見られる。
              （東急）
              <a href='https://ja.wikipedia.org/wiki/%E6%9D%B1%E4%BA%AC%E6%80%A5%E8%A1%8C%E9%9B%BB%E9%89%84' target='_blank'></a></p>
              "
          >
          </TrainRight>
          <TrainLeft
            :image="require('@/assets/trains/RS/ICON_T200.png')"
            title="東武２００系"
            text="
              <a href='https://ja.wikipedia.org/wiki/%E6%9D%B1%E6%AD%A6200%E7%B3%BB%E9%9B%BB%E8%BB%8A' target='_blank'>（Wikipedia）</a>

              <p>運転士はスマイリー酒井

              <p>旧来の東武１８００系「りょうもう」に代わる形で、
              1990年に登場した特急用車両。</p>

              <p>後述の１７２０系ＤＲＣを解体した時の部品を流用している。</p>

              <p>全電動車で、超多段バーニヤ抵抗制御を搭載している。
              加速が良く、車重のおかげで車輪に粘着力が生まれ、上り坂にも強い。
              半面、コーナーでは重量の影響がモロに出る。</p>

              <p>舞台となる伊勢崎・日光線、
              次は「浅草駅」からスタートし、「東武日光駅」を目指します。</p>

              <p>途中でらき☆すたの聖地「鷲宮神社」の近くの踏切で…
              あ、伊勢崎線の「鷲宮駅」で降りると神社が近いです。</p>

              <p>ＢＧＭの元ネタ集。
              パロディのパロディになるのかな…？</p>

              <p>Noizy Tribe（頭文字Ｄ）
              <a href='https://www.youtube.com/watch?v=w3rPQO3Q_bg' target='_blank'>（YouTube）</a></p>

              <p>m.o.e.v/Gravity（らき☆すた）
              <a href='https://www.youtube.com/watch?v=5AMVz97Dr7k' target='_blank'>（YouTube）</a></p>

              <p>Deadly Smile（電車でＤ）
              <a href='https://www.youtube.com/watch?v=8Kdf8lzJPJg' target='_blank'>（YouTube）</a></p>
            "
          >
          </TrainLeft>
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
