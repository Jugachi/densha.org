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
              <v-img :src="require('@/assets/covers/RS_Cover.jpg')" />
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
          <v-layout justify-center>
            <v-flex xs2>
              <v-img :src="require('@/assets/characters/RS/D4_Takumi.png')" />
            </v-flex>
            <v-flex xs6>
              <h2>Takumi Fujiwara</h2>
              <p>
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
              </p>
            </v-flex>
          </v-layout>
          <v-layout justify-center>
            <v-flex xs6 text-xs-right>
              <h2>Keisuke Takahashi</h2>
              <p>
                Keisuke Takahashi (高橋 啓介 Takahashi Keisuke, "K.T.") is the number two driver for
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
              </p>
            </v-flex>
            <v-flex xs2>
              <v-img :src="require('@/assets/characters/RS/D4_Keisuke.png')" />
            </v-flex>
          </v-layout>
          <v-layout justify-center>
            <v-flex xs2>
              <v-img :src="require('@/assets/characters/RS/D4_Kawai1P.png')" />
            </v-flex>
            <v-flex xs6>
              <h2>Atsuro Kawai</h2>
              <p>
                Atsuro Kawai (川井 淳郎 Kawai Atsurō) is the hillclimb racer and the leader of the
                Tochigi-based Seven Star Leaf. He seems to be a decent enough driver, again
                favouring the grip racing techniques, but his mastery of it is uncomparable to that
                of Takeshi Nakazato. His car is powered up to 400 hp.
              </p>
            </v-flex>
          </v-layout>
          <v-layout justify-center>
            <v-flex xs6 text-xs-right>
              <h2>Daiki Ninomiya</h2>
              <p>
                Daiki Ninomiya (二宮 大輝 Ninomiya Daiki, known as Dice in the Tokyopop version) is
                the ace and current student of Todo School and is one of the better drivers of the
                series. Driving a yellow Civic Type R (EK9), Daiki races against Takumi of Project D
                in a downhill battle. His dad is a race car driver. He excels in braking, being able
                to release the brake pedal in the perfect spot during a corner, every time. Daiki is
                also one of the school's all time three best downhill drivers. He is also good
                friends with Smiley Sakai and Tomoyuki Tachi.
              </p>
            </v-flex>
            <v-flex xs2>
              <v-img :src="require('@/assets/characters/RS/D4_Nino1P.png')" />
            </v-flex>
          </v-layout>
          <v-layout justify-center>
            <v-flex xs2>
              <v-img :src="require('@/assets/characters/RS/D4_Sakai1P.png')" />
            </v-flex>
            <v-flex xs6>
              <h2>Smiley Sakai</h2>
              <p>
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
              </p>
            </v-flex>
          </v-layout>
          <v-layout justify-center>
            <v-flex xs6>
              <h2>Toru Suetsugu</h2>
              <p>
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
              </p>
            </v-flex>
            <v-flex xs2>
              <v-img :src="require('@/assets/characters/RS/D4_Sue1P.png')" />
            </v-flex>
          </v-layout>
          <v-layout justify-center>
            <v-flex xs2>
              <v-img :src="require('@/assets/characters/RS/D4_Tachi1P.png')" />
            </v-flex>
            <v-flex xs6>
              <h2>Tomoyuki Tachi</h2>
              <p>
                Tomoyuki Tachi (舘 智幸 Tachi Tomoyuki, Tokyopop: Touch) is a professional racer and
                a graduate, or "old boy" (shortened to OB) of the Todo School. He was brought in to
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
              </p>
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
              <v-img :src="require('@/assets/trains/RS/ICON_DRC.png')" />
            </v-flex>
            <v-flex xs6 pl-2>
              <h2>DRC</h2>
              <p>
                More information about this kind of train will be added soon.
              </p>
            </v-flex>
          </v-layout>
          <v-layout justify-center>
            <v-flex xs6 text-xs-right pr-2>
              <h2>MU</h2>
              <p>
                More information about this kind of train will be added soon.
              </p>
            </v-flex>
            <v-flex xs2>
              <v-img :src="require('@/assets/trains/RS/ICON_MU.png')" />
            </v-flex>
          </v-layout>
          <v-layout justify-center>
            <v-flex xs2>
              <v-img :src="require('@/assets/trains/RS/ICON_PANO.png')" />
            </v-flex>
            <v-flex xs6 pl-2>
              <h2>Pano</h2>
              <p>
                More information about this kind of train will be added soon.
              </p>
            </v-flex>
          </v-layout>
          <v-layout justify-center>
            <v-flex xs6 text-xs-right pr-2>
              <h2>T50K</h2>
              <p>
                More information about this kind of train will be added soon.
              </p>
            </v-flex>
            <v-flex xs2>
              <v-img :src="require('@/assets/trains/RS/ICON_T50K.png')" />
            </v-flex>
          </v-layout>
          <v-layout justify-center>
            <v-flex xs2>
              <v-img :src="require('@/assets/trains/RS/ICON_T200.png')" />
            </v-flex>
            <v-flex xs6 pl-2>
              <h2>T200</h2>
              <p>
                More information about this kind of train will be added soon.
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
                This will be a wall of text that explains everything. Lorem ipsum dolor sit amet,
                consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et
                dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo
                dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem
                ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam
                voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd
                gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor
                sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut
                labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et
                justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus
                est Lorem ipsum dolor sit amet.
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
              />
            </v-flex>
            <v-flex xs8>
              <h2>Stage 1 - Keisuke</h2>
              <p>
                Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod
                tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero
                eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea
                takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet,
                consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et
                dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo
                dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem
                ipsum dolor sit amet.
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
              />
            </v-flex>
            <v-flex xs8>
              <h2>Stage 2 - Nakazato</h2>
              <p>
                Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod
                tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero
                eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea
                takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet,
                consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et
                dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo
                dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem
                ipsum dolor sit amet.
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
              />
            </v-flex>
            <v-flex xs8>
              <h2>Stage 3 - Shingo</h2>
              <p>
                Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod
                tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero
                eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea
                takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet,
                consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et
                dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo
                dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem
                ipsum dolor sit amet.
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
              />
            </v-flex>
            <v-flex xs8>
              <h2>Stage 4 - Ryousuke</h2>
              <p>
                Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod
                tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero
                eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea
                takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet,
                consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et
                dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo
                dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem
                ipsum dolor sit amet.
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
              />
            </v-flex>
            <v-flex xs8>
              <h2>Bonus Stage 1 - Masked Driver</h2>
              <p>
                Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod
                tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero
                eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea
                takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet,
                consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et
                dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo
                dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem
                ipsum dolor sit amet.
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
              />
            </v-flex>
            <v-flex xs8>
              <h2>Bonus Stage 2 - Takumi-san</h2>
              <p>
                Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod
                tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero
                eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea
                takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet,
                consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et
                dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo
                dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem
                ipsum dolor sit amet.
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
              />
            </v-flex>
            <v-flex xs8>
              <h2>Bonus Stage 3 - Bunta</h2>
              <p>
                Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod
                tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero
                eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea
                takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet,
                consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et
                dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo
                dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem
                ipsum dolor sit amet.
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
                This will be a wall of text that explains everything. Lorem ipsum dolor sit amet,
                consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et
                dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo
                dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem
                ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam
                voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd
                gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor
                sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut
                labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et
                justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus
                est Lorem ipsum dolor sit amet.
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
              />
            </v-flex>
            <v-flex xs8>
              <h2>Stage 1 - Keisuke</h2>
              <p>
                Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod
                tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero
                eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea
                takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet,
                consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et
                dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo
                dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem
                ipsum dolor sit amet.
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
              />
            </v-flex>
            <v-flex xs8>
              <h2>Stage 2 - Nakazato</h2>
              <p>
                Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod
                tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero
                eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea
                takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet,
                consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et
                dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo
                dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem
                ipsum dolor sit amet.
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
              />
            </v-flex>
            <v-flex xs8>
              <h2>Stage 3 - Shingo</h2>
              <p>
                Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod
                tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero
                eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea
                takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet,
                consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et
                dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo
                dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem
                ipsum dolor sit amet.
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
              />
            </v-flex>
            <v-flex xs8>
              <h2>Stage 4 - Ryousuke</h2>
              <p>
                Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod
                tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero
                eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea
                takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet,
                consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et
                dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo
                dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem
                ipsum dolor sit amet.
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
              />
            </v-flex>
            <v-flex xs8>
              <h2>Bonus Stage 1 - Masked Driver</h2>
              <p>
                Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod
                tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero
                eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea
                takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet,
                consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et
                dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo
                dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem
                ipsum dolor sit amet.
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
              />
            </v-flex>
            <v-flex xs8>
              <h2>Bonus Stage 2 - Takumi-san</h2>
              <p>
                Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod
                tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero
                eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea
                takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet,
                consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et
                dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo
                dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem
                ipsum dolor sit amet.
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
              />
            </v-flex>
            <v-flex xs8>
              <h2>Bonus Stage 3 - Bunta</h2>
              <p>
                Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod
                tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero
                eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea
                takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet,
                consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et
                dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo
                dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem
                ipsum dolor sit amet.
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
      active: null
    };
  }
};
</script>
