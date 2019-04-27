<template>
  <v-container>
    <div>
      <v-tabs grow v-model="active" color="dark" dark slider-color="light-green">
        <v-tab :key="0" ripple @click.stop="active=0">Game</v-tab>
        <v-tab-item :key="0">
          <!-- Game -->
          <v-layout text-xs-center>
            <v-flex xs12>
              <h1>Densha de D: Climax Stage</h1>
            </v-flex>
          </v-layout>
          <v-layout row wrap justify-center>
            <v-flex xs8 md2 pr-2>
              <v-img :src="require ('@/assets/covers/CS_Cover.jpg')"></v-img>
            </v-flex>
            <v-flex xs8 md6>
              <p>
                Densha de D: Climax Stage is the third game in the series. You can find more
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
              <v-img :src="require ('@/assets/characters/CS/D3_Takumi1P.png')"></v-img>
            </v-flex>
            <v-flex xs6>
              <h2>Takumi Fujiwara</h2>
              <p>
                Takumi Fujiwara (藤原拓海 Fujiwara Takumi, known as Tak in the Tokyopop version) is the
                main protagonist of
                Initial D, a member of Project D and is friends and associated with the Akina
                SpeedStars. He is the
                driver of the Toyota Sprinter AE86 Trueno GT Apex or simply the Eight-Six, originally
                belonging to his
                father Bunta, and forcibly became the delivery boy of his father's tofu business, doing
                deliveries in
                the morning at Mount Akina.
              </p>

              <p>
                Despite seemingly not having knowledge of cars, in fact he didn't know that his car was
                called an
                Eight-Six, Takumi is a very skilled driver, having driven on Akina since he was in
                junior high. This
                caught the attention of other racing teams such as the Akagi RedSuns and the Myogi
                NightKids who wanted
                a piece of racing against Takumi.
              </p>

              <p>
                In his up and coming emergence, he raced against Keisuke Takahashi, NightKids members
                Takeshi Nakazato
                and Shingo Shoji, the female racing duo Impact Blue, Kenta Nakamura and finally Ryosuke
                Takahashi, in
                which he ended Ryosuke's winning streak. At the same time he was dating Natsuki Mogi.
              </p>

              <p>
                His winning streak supposedly came to an end when he raced against Kyoichi Sudo, the
                leader of Emperor at
                Mount Akagi, however Kyoichi stated that he didn't consider the match a race and just
                wanted to prove to
                Takumi that the Eight-Six is not powerful enough against his Evo III. The Eight Six was
                fixed by Bunta,
                with a new engine and some upgrades. Now with his fixed Eight-Six, he went up against
                Wataru Akiyama, a
                racer from the Saitama region and an Eight-Six driver.
              </p>

              <p>
                After having a rematch with Kyoichi and racing against Kai Kogashiwa and making amends
                with Natsuki
                before going in their separate ways. He joined Ryosuke's new team Project D, which had a
                similar goal of
                his previous team the RedSuns. As the downhill driver of Project D, his skill massively
                improved, racing
                against tougher opponents from different regions, at the same time he met his second
                girlfriend Mika
                Uehara, a golfer.
              </p>

              <p>
                His final race within Project D was against Sidewinder member Shinji Inui, and though
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
                Keisuke is a rather hot-headed young man and does not like losing. He is also known to
                drive with his
                emotions- for example, if he realises that he cannot win, his driving suffers and, if he
                is in the lead,
                he is carefree and very relaxed. He used to rebel against his parents and got in many
                fights with them.
                They stopped trying on Keisuke. Ryosuke very much understood what Keisuke felt. Ryosuke
                then took
                Keisuke on a downhill, and it changed his life. Before Ryosuke got Keisuke involved in
                street racing, he
                was the leader of a Bōsōzoku gang. He joins his brother's new team and has a rivalry
                with
                Takumi.
                Keisuke races the hillclimb (uphill) on most races, while Takumi races the downhill.
              </p>
              <p>
                Keisuke isn't analytical like his older brother, and Ryosuke's ability to compute and
                analyze amazes
                Keisuke. But at the same time, Keisuke's ability to think less while he is driving, and
                to
                do only what
                he feels amazes Ryosuke. While Ryosuke has decided that he won't race much longer, and
                that he will
                become a doctor in the future, Keisuke has dedicated his life to racing- his eventual
                goal
                is to become
                a professional racer. But, first, he must defeat Takumi. Though visibly getting along,
                they still have
                some kind of argumentation over who is the ace, but he has respect for Takumi. He stated
                once he was not
                as strong minded as Takumi, because Takumi fell asleep really fast before a great
                battle,
                making Keisuke
                ask himself if Takumi even knew what pressure was.
              </p>
              <p>
                By the end of the Fourth Stage anime, Keisuke's skill has dramatically improved to the
                point that he is
                offered contact information for a professional racing team. Keisuke turns the offer down
                since he
                believes he still has a ways to go before he's ready for a professional racing career.
                At
                the same time,
                Takumi remarks that Keisuke could probably defeat him if they had a serious race.
              </p>
              <p>
                After the Final Stage, he becomes a full professional racer with his RX-7 and Tomiguchi
                being his
                personal mechanic
              </p>
            </v-flex>
            <v-flex xs2>
              <v-img :src="require ('@/assets/characters/CS/CHAR_KEISUKE_1P.png')"></v-img>
            </v-flex>
          </v-layout>
          <v-layout justify-center>
            <v-flex xs2>
              <v-img :src="require ('@/assets/characters/CS/CHAR_KAI_1P.png')"></v-img>
            </v-flex>
            <v-flex xs6>
              <h2>Kai Kogashiwa</h2>
              <p>
                Kai Kogashiwa (小柏 カイ Kogashiwa Kai) is a street racer from Tochigi prefecture, and a son
                to a legendary Downhill ace and Bunta's rival, Ken Kogashiwa. Ken taught Kai in the racing
                world from a young age, participating in karting competitions which made him specialized in
                midships (colloquial term for mid engine, rear drive). Before his transition to street racing,
                Kai was the fastest motorcyclist on Irohazaka. It can be seen that Kai's specialty on Irohazaka
                is similar to Takumi on Akina as he lives at Lake Chuzenji (which is at the top of Irohazaka)
                and takes the road during his daily commute to the bottom.
              </p>
              <p>
                Kai had challenged Takumi on the Emperor's home course of Irohazaka. Kai had defeated Seiji Iwaki
                of Emperor and wanted to defeat Kyoichi as well, but set his sights on Takumi after Sudo's defeat.
                Kai uses a trick taught to him by his father to overtake Takumi by jumping a turn in a break in the
                guard rail on 33rd corner. However, he spins out on the final straightaway after his car loses traction
                from landing on leaves on the side of the road and was defeated.
              </p>
              <p>
                Kai reappears as an opponent for Project D in Kanagawa prefecture. Kai represents the downhill ace
                for R.T. Katagiri against the Eight-Six. However, he spins out at the last sector costing him the race.
              </p>
              <p>
                Originally, Kai drives his father's Toyota SW20 MR2 but later switches to a silver Toyota MR-S ZZW30
                (a 3rd Generation MR2 Roadster), leaving the SW20 to his father.
              </p>
            </v-flex>
          </v-layout>
          <v-layout justify-center>
            <v-flex xs6 text-xs-right>
              <h2>Kyoichi Sudo</h2>
              <p>
                Kyoichi Sudo (須藤 京一 Sudō Kyōichi, "Kyle") is the team leader and driving ace
                of the Lancer Evolution-only Emperor team from Gunma (according to his license
                plate,
                though it is changed to Tochigi in later series), and one of the best drivers in the
                series. He drives a Mitsubishi Lancer Evolution III powered up to 350 hp equipped
                with a WRC style misfiring system. In his philosophy, a car must have a high power
                turbo and all-wheel drive.
              </p>
              <p>
                An old acquaintance of Ryosuke Takahashi of the Akagi RedSuns, Kyoichi is much like
                Ryosuke: he is a calm and composed driver, compared to his teammate Seiji. Eager to
                show Ryosuke that he and his team are the best, Kyoichi and the Emperor team goes
                on to beat the various teams of Gunma, including the NightKids. He believes in the
                ultimate superiority of his race circuit techniques, whilst Ryosuke holds that
                street
                racing has its own special requirements. His home course is one-way, so he is unable
                to fully attack blind corners on two way roads, supporting Ryosuke's view. He is
                also
                often considered the first driver to have beaten Takumi, when Takumi blew out his
                engine
                at Akagi, but lost during a rematch at Irohazaka. It should be noted however, that
                the
                result should normally be considered a tie at best, and the race itself did not last
                more than one round. Kyoichi declared Takumi as the winner for merely being able to
                resist being overtaken at the last part of the course where other drivers fell prey
                to him. To Kyoichi, who takes pride in his ability to win, a tie at his home turf is
                equivalent to a loss.
              </p>
              <p>
                He is also a graduate of the racing school, the Todo School, despite having no
                prior-hinted connections to the institute: his Evo III is a stark contrast to
                the FWD Hondas the students use, and Sudo uses no Spoon Sports parts on his vehicle.
              </p>
              <p>
                He and the Two Guys From Tokyo might be the only ones in the series to feature a
                stock interior in their cars. The only modifications done to the car is the
                increment
                of Horsepower to 310 HP and a WRC Anti-Lag/Misfiring System to cure Turbo lag.
              </p>
            </v-flex>
            <v-flex xs2>
              <v-img :src="require ('@/assets/characters/CS/CHAR_KYOICHI_1P.png')"></v-img>
            </v-flex>
          </v-layout>
          <v-layout justify-center>
            <v-flex xs2>
              <v-img :src="require ('@/assets/characters/CS/CHAR_MIKI_1P.png')"></v-img>
            </v-flex>
            <v-flex xs6>
              <h2>Miki</h2>
              <p>
                Miki (御木) is a senior in the football (soccer) club of the school that Takumi attended.
                He drives a Celica GT-Four (ST205). In 1st Stage, Takumi punched him in the changing rooms
                for bragging about his sexual exploits with Natsuki, during the time when Takumi was
                ignorant of the truth. During winter, he kidnaps Natsuki and forces her to come to Lake
                Akina with him. His plans are foiled by Takumi who gets Natsuki's call for help and chases
                Miki with his Trueno until he spins out on the snow and Natsuki escapes his Celica.
              </p>
              <p>
                It is later revealed that he and Shiraishi are siblings, born from a man driving a white
                Mercedes, though they both don't realize it.
              </p>
            </v-flex>
          </v-layout>
          <v-layout justify-center>
            <v-flex xs6>
              <h2>Wataru Akiyama</h2>
              <p>
                Wataru Akiyama (秋山 渉 Akiyama Wataru, "Aki") was one of the first racers from Saitama
                to actually race against Takumi with his turbocharged Levin; he appeared later in the
                Project D arc, this time replacing the turbocharger with a supercharger for more linear
                acceleration and avoid Turbocharger lag. Wataru is a skilled driver who honed his skills
                on the treacherous Shomaru Pass. He came to Gunma in hopes of facing new racers to challenge,
                as well as to watch over his sister Kazumi, who just got a job at a hotel with her aunt.
                Wataru is Nobuhiko's cousin, as seen when he watches Takumi race against the Northern
                Saitama Alliance in the hopes of finding a weak spot.
              </p>
              <p>
                Several times throughout the Fourth Stage, Wataru reaches out to Takumi and gives him advice
                whenever he is in Akina, notably helping the latter overcome his "four-wheel drive complex."
              </p>
              <p>
                Wataru later raced against Keisuke Takahashi in a wet-weather race, but when his tires lost
                grip upon touching a metal gutter while he adjusted his wipers, he was defeated.
              </p>
              <p>
                Some time later, Wataru confronts the imposter Project D somewhere in Saitama and helps
                the real Project D expose them as the frauds they are.
              </p>
              <p>
                He later watches the final race between Project D and Sidewinder along with Nobuhiko and Sakamoto.
              </p>
            </v-flex>
            <v-flex xs2>
              <v-img :src="require ('@/assets/characters/CS/CHAR_WATARU_1P.png')"></v-img>
            </v-flex>
          </v-layout>
          <v-layout justify-center>
            <v-flex xs2>
              <v-img :src="require ('@/assets/characters/CS/D3_tuka_a.png')"></v-img>
            </v-flex>
            <v-flex xs6>
              <h2>Tsukamoto</h2>
              <p>
                Tsukamoto (塚本) is a minor character that appears in the manga around the time of
                Takumi's race against Kyoichi of Emperor. Tsukamoto was a high school senior when
                Takumi and Natsuki were freshmen, but now he is mildly involved with the street racing
                scene in Akagi. Although he believes that his skills are extreme, they are in fact far
                from it. He soon experiences real extreme driving when Takumi drives his 180SX down Akagi
                after a request by Natsuki to pass a cocky couple in a Silvia S13, leading to Tsukamoto fainting.
              </p>
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
              <v-img :src="require ('@/assets/trains/CS/ICON_2800.png')"></v-img>
            </v-flex>
            <v-flex xs6 pl-2>
              <h2>2800 Series</h2>
              <p>
                More information about this kind of train will be added soon.
              </p>
            </v-flex>
          </v-layout>
          <v-layout justify-center>
            <v-flex xs6 text-xs-right pr-2>
              <h2>9000 Series</h2>
              <p>
                More information about this kind of train will be added soon.
              </p>
            </v-flex>
            <v-flex xs2>
              <v-img :src="require ('@/assets/trains/CS/ICON_9000.png')"></v-img>
            </v-flex>
          </v-layout>
          <v-layout justify-center>
            <v-flex xs2>
              <v-img :src="require ('@/assets/trains/CS/ICON_JR2000.png')"></v-img>
            </v-flex>
            <v-flex xs6 pl-2>
              <h2>JR2000 Series</h2>
              <p>
                More information about this kind of train will be added soon.
              </p>
            </v-flex>
          </v-layout>
          <v-layout justify-center>
            <v-flex xs6 text-xs-right pr-2>
              <h2>RAPID Series</h2>
              <p>
                More information about this kind of train will be added soon.
              </p>
            </v-flex>
            <v-flex xs2>
              <v-img :src="require ('@/assets/trains/CS/ICON_RAPID.png')"></v-img>
            </v-flex>
          </v-layout>
          </v-tab-item>
        <v-tab v-if="false" :key="3" ripple @click.stop="active=3">Guide</v-tab>
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
                Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore
                et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum.
                Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet,
                consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat,
                sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea
                takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et
                accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum
                dolor sit amet.
              </p>
            </v-flex>
          </v-layout>
          <v-layout justify-center>
            <v-flex xs4>
              <iframe
                width="560"
                height="315"
                src="https://www.youtube.com/embed/WwZz1Yxz5ho"
                frameborder="0"
                allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen
              ></iframe>
            </v-flex>
            <v-flex xs8>
              <h2>Stage 1 - Keisuke</h2>
              <p>
                Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor
                invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et
                accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata
                sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing
                elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat,
                sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita
                kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.
              </p>
            </v-flex>
          </v-layout>
          <v-layout justify-center>
            <v-flex xs4>
              <iframe
                width="560"
                height="315"
                src="https://www.youtube.com/embed/OS5bAK3gZc"
                frameborder="0"
                allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen
              ></iframe>
            </v-flex>
            <v-flex xs8>
              <h2>Stage 2 - Nakazato</h2>
              <p>
                Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor
                invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et
                accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata
                sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing
                elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat,
                sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita
                kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.
              </p>
            </v-flex>
          </v-layout>
          <v-layout justify-center>
            <v-flex xs4>
              <iframe
                width="560"
                height="315"
                src="https://www.youtube.com/embed/fdP4_itYimw"
                frameborder="0"
                allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen
              ></iframe>
            </v-flex>
            <v-flex xs8>
              <h2>Stage 3 - Shingo</h2>
              <p>
                Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor
                invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et
                accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata
                sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing
                elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat,
                sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita
                kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.
              </p>
            </v-flex>
          </v-layout>
          <v-layout justify-center>
            <v-flex xs4>
              <iframe
                width="560"
                height="315"
                src="https://www.youtube.com/embed/Qj9_apUMuvk"
                frameborder="0"
                allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen
              ></iframe>
            </v-flex>
            <v-flex xs8>
              <h2>Stage 4 - Ryousuke</h2>
              <p>
                Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor
                invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et
                accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata
                sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing
                elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat,
                sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita
                kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.
              </p>
            </v-flex>
          </v-layout>
          <v-layout justify-center>
            <v-flex xs4>
              <iframe
                width="560"
                height="315"
                src="https://www.youtube.com/embed/U2g-qvEtsuY"
                frameborder="0"
                allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen
              ></iframe>
            </v-flex>
            <v-flex xs8>
              <h2>Bonus Stage 1 - Masked Driver</h2>
              <p>
                Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor
                invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et
                accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata
                sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing
                elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat,
                sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita
                kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.
              </p>
            </v-flex>
          </v-layout>
          <v-layout justify-center>
            <v-flex xs4>
              <iframe
                width="560"
                height="315"
                src="https://www.youtube.com/embed/28oU3ra69cU"
                frameborder="0"
                allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen
              ></iframe>
            </v-flex>
            <v-flex xs8>
              <h2>Bonus Stage 2 - Takumi-san</h2>
              <p>
                Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor
                invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et
                accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata
                sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing
                elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat,
                sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita
                kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.
              </p>
            </v-flex>
          </v-layout>
          <v-layout align-content-space-between>
            <v-flex xs4>
              <iframe
                width="560"
                height="315"
                src="https://www.youtube.com/embed/c3QP2vaiu0o"
                frameborder="0"
                allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen
              ></iframe>
            </v-flex>
            <v-flex xs8>
              <h2>Bonus Stage 3 - Bunta</h2>
              <p>
                Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor
                invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et
                accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata
                sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing
                elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat,
                sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita
                kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.
              </p>
            </v-flex>
          </v-layout>
        </v-tab-item>
        <v-tab v-if="false" :key="4" ripple @click.stop="active=4">Speedrun</v-tab>
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
                Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore
                et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum.
                Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet,
                consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat,
                sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea
                takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et
                accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum
                dolor sit amet.
              </p>
            </v-flex>
          </v-layout>
          <v-layout justify-center>
            <v-flex xs4>
              <iframe
                width="560"
                height="315"
                src="https://www.youtube.com/embed/WwZz1Yxz5ho"
                frameborder="0"
                allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen
              ></iframe>
            </v-flex>
            <v-flex xs8>
              <h2>Stage 1 - Keisuke</h2>
              <p>
                Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor
                invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et
                accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata
                sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing
                elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat,
                sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita
                kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.
              </p>
            </v-flex>
          </v-layout>
          <v-layout justify-center>
            <v-flex xs4>
              <iframe
                width="560"
                height="315"
                src="https://www.youtube.com/embed/OS5bAK3gZc"
                frameborder="0"
                allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen
              ></iframe>
            </v-flex>
            <v-flex xs8>
              <h2>Stage 2 - Nakazato</h2>
              <p>
                Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor
                invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et
                accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata
                sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing
                elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat,
                sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita
                kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.
              </p>
            </v-flex>
          </v-layout>
          <v-layout justify-center>
            <v-flex xs4>
              <iframe
                width="560"
                height="315"
                src="https://www.youtube.com/embed/fdP4_itYimw"
                frameborder="0"
                allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen
              ></iframe>
            </v-flex>
            <v-flex xs8>
              <h2>Stage 3 - Shingo</h2>
              <p>
                Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor
                invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et
                accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata
                sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing
                elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat,
                sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita
                kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.
              </p>
            </v-flex>
          </v-layout>
          <v-layout justify-center>
            <v-flex xs4>
              <iframe
                width="560"
                height="315"
                src="https://www.youtube.com/embed/Qj9_apUMuvk"
                frameborder="0"
                allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen
              ></iframe>
            </v-flex>
            <v-flex xs8>
              <h2>Stage 4 - Ryousuke</h2>
              <p>
                Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor
                invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et
                accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata
                sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing
                elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat,
                sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita
                kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.
              </p>
            </v-flex>
          </v-layout>
          <v-layout justify-center>
            <v-flex xs4>
              <iframe
                width="560"
                height="315"
                src="https://www.youtube.com/embed/U2g-qvEtsuY"
                frameborder="0"
                allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen
              ></iframe>
            </v-flex>
            <v-flex xs8>
              <h2>Bonus Stage 1 - Masked Driver</h2>
              <p>
                Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor
                invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et
                accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata
                sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing
                elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat,
                sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita
                kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.
              </p>
            </v-flex>
          </v-layout>
          <v-layout justify-center>
            <v-flex xs4>
              <iframe
                width="560"
                height="315"
                src="https://www.youtube.com/embed/28oU3ra69cU"
                frameborder="0"
                allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen
              ></iframe>
            </v-flex>
            <v-flex xs8>
              <h2>Bonus Stage 2 - Takumi-san</h2>
              <p>
                Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor
                invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et
                accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata
                sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing
                elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat,
                sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita
                kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.
              </p>
            </v-flex>
          </v-layout>
          <v-layout align-content-space-between>
            <v-flex xs4>
              <iframe
                width="560"
                height="315"
                src="https://www.youtube.com/embed/c3QP2vaiu0o"
                frameborder="0"
                allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen
              ></iframe>
            </v-flex>
            <v-flex xs8>
              <h2>Bonus Stage 3 - Bunta</h2>
              <p>
                Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor
                invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et
                accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata
                sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing
                elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat,
                sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita
                kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.
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
