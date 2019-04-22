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
              <p>
                Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor
                invidunt ut
                labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo
                duo dolores
                et
                ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit
                amet. Lorem
                ipsum
                dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut
                labore et
                dolore
                magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea
                rebum.
                Stet
                clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum
                dolor sit
                amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et
                dolore magna
                aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum.
                Stet
                clita
                kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.
              </p>
              <p>
                Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat,
                vel illum
                dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto odio dignissim qui
                blandit
                praesent
                luptatum zzril delenit augue duis dolore te feugait nulla facilisi. Lorem ipsum dolor sit
                amet,
                consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore
                magna
                aliquam
                erat volutpat.
              </p>
              <p>
                Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis
                nisl ut
                aliquip
                ex ea commodo consequat. Duis autem vel eum iriure dolor in hendrerit in vulputate velit
                esse
                molestie
                consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto
                odio
                dignissim
                qui blandit praesent luptatum zzril delenit augue duis dolore te feugait nulla facilisi.
              </p>
              <p>
                Nam liber tempor cum soluta nobis eleifend option congue nihil imperdiet doming id quod
                mazim placerat
                facer possim assum. Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam
                nonummy nibh
                euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim
                veniam, quis
                nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo
                consequat.
              </p>
              <p>
                Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat,
                vel illum
                dolore eu feugiat nulla facilisis.
              </p>
              <p>
                At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no
                sea takimata
                sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing
                elitr, sed
                diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam
                voluptua. At vero
                eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea
                takimata sanctus est
                Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur
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
                Takeshi Nakazato (中里 毅 Nakazato Takeshi, "Zack"), also known as the Black Lightning (黒い稲妻 Kuroi Inazuma),
                is the leader of the Myogi NightKids. He made his first appearance at the race in Akina where Keisuke
                Takahashi of the RedSuns is to race against Takumi Fujiwara. Surprised that Takumi could defeat Keisuke,
                Takeshi decides that he is going to be the one to challenge and defeat the "Akina downhill specialist",
                and that the RedSuns are next on his list.
              </p>
              <p>
                He is an intelligent and skilled driver, notably recognizing Takumi's the gutter hook technique while
                observing the Eight-Six's first battle with Keisuke's FD. However, his downfall is his anger and
                emotions getting in the way of his mind, resulting in poor throttle control. He also races all-out and
                usually fails to consider tire wear, so in the end, he loses the race, sometimes crashing his car. He is
                very good at acceleration and is known for his grip driving philosophy. His previous car was a Nissan
                Silvia (S13), with which he used drifting techniques. He changed to the Nissan Skyline GT-R (R32) after
                a devastating loss to a white (or rather silver) R32 on his home course of Myogi. Following the defeat
                by the Skyline, his philosophy changed, favoring grip driving techniques over "weak" and "showy"
                drifting techniques. He also believed that no matter what skill a driver has, a car will not run beyond
                its capabilities.
              </p>
              <p>
                Takeshi is the leader of the NightKids team on Mount Myogi and he has shown an interest in Sayuki of
                Impact Blue.
              </p>
              <p>He is a fan of the GT-R just like Kunimitsu Takahashi.</p>
            </v-flex>
          </v-layout>
          <v-layout justify-center>
            <v-flex xs4 offset-xs2 text-xs-right>
              <h2>Shingo Shoji</h2>
              <p>
                Shingo Shoji (庄司 慎吾 Shōji Shingo) is a member of the NightKids who drives a red Honda Civic SiR-II (EG6).
                Shingo races dangerously, he will nudge his rival's car in order to make the other driver lose control
                if he's unsure about his own chances of winning. He doesn't find plain downhill races any fun,
                preferring to race against a handicap. In this handicap match, Shingo tapes his right hand to the
                steering wheel for the duration of the race. By doing this, Shingo limits his own steering capabilities.
                In terms of racing ability, Shingo is the best driver on the Night Kids team. He is also a childhood
                friend of Impact Blue's navigator, Sayuki.
              </p>
              <p>
                Shingo actually shares many beliefs with Takeshi, but whenever they watch other battles, they try to stay
                away from one another so that people won't mistake them as friends even though in Extra Stage, they
                acted like buddies. There were also times that he supported his teammate for the Night Kids' sake, like
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
                Ryosuke Takahashi (高橋 涼介, Takahashi Ryōsuke; known as Ry in the Tokyopop version) is one of the main
                characters of Initial D, the founder and leader of both the Akagi RedSuns and Project D. Originally a
                solo racer nicknamed Akagi's White Comet, he created the RedSuns, with the purpose of dominating in the
                street racing scene all over Japan and recruited racers including his brother Keisuke, which gave both
                of them the nicknames of the Rotary Brothers.
              </p>
              <p>
                The RedSuns' plan was put on hold following Keisuke's defeat and the emergence of Takumi Fujiwara, the
                driver of the Toyota AE86. Before his race with Fujiwara, he was invited to a professional racing team
                but he passed cause "his only interest was street racing". His winning streak came to an end when he
                lost to Fujiwara. After his defeat, he temporarily retired from racing until making a comeback to race
                against the threat of Team Emperor and their leader and rival Kyoichi Sudo. He also raced and defeated
                Takeshi Nakazato, the leader of the Myogi's NightKids.
              </p>
              <p>
                Soon after Takumi raced against Wataru Akiyama, he created a new racing team called Project D, and also
                effectively disbanding the RedSuns, with the similar goal to dominate the street racing scene but for
                one year before he goes back to medical school.
              </p>
              <p>
                During the Project D races in Kanagawa, he is revealed to have a connection with Rin Hojo, a fellow
                medical student and a street racer from Kanagawa where they had disputes with a girl named Kaori, who
                was Rin's fiancee at the time but committed suicide following verbal abuse by Rin, which led to Rin
                disappearing from the racing scene. Knowing that he cannot escape the past, he modified his car in
                secret with Shuichi Matsumoto and raced Rin at the Toyo Tires Turnpike. However thanks to assistance of
                Team Spiral's leader Ryuji Ikeda, who was spectating behind, he was able to stop Rin from crashing and
                afterwards settled their differences with each other.
              </p>
              <p>
                After the disbanding of Project D, he continues to go on a silent spectator at street races, saying that
                he would eventually pick out new gifted racers. It is also implied that he is still continuing his
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
                used to be the No.1 downhill racer in Mt. Akina years ago, but he no longer races, preferring to guide
                Takumi's racing development. He is the original driver of the mysterious "white ghost of Akina" AE86
                Sprinter Trueno that holds the record of the fastest downhill time at Akina. Bunta has a unique way of
                training his son to drive - every morning when Takumi delivers tofu. Bunta gives Takumi a cup of water
                which is placed in the drink holder; Takumi must not spill even a drop of it while he is driving. This
                is ostensibly to prevent breaking the tofu in the boot, but it forces Takumi to drive very smoothly. As
                for Bunta, he is still considered the best downhill racer in Akina, which is shown early in the series
                when he pushes the Trueno with Yuichi in the passenger seat, lighting a cigarette while drifting around
                a corner.
              </p>
              <p>
                Later in the series, Takumi used the Trueno more than Bunta, so he gave the car to Takumi. While test
                driving a Subaru Impreza WRX STi Type R Version V on Akina, he defeated his son, inducing a AWD complex
                in Takumi. Bunta decided to buy the car, but hid this fact from Takumi for some time. After revealing
                that he was the driver, he then told Takumi to alternate between the Impreza and his Eight-Six for
                deliveries - another strategy to improve Takumi as a driver, showing him the potential of modern cars
                and the characteristics of AWD. While this shows his training strategy, it is seen that Bunta is, once
                again, proven to be the most formidable opponent in Akina.
              </p>
              <p>
                Bunta is thought to have been undefeated during his time as a street racer. There is some dialog between
                Tachibana and Iketani that could possibly dispute this, but the vague description of events leaves the
                actual results up to speculation. Specifically, this dialog occurs during the Tochigi campaign (volume
                15 of the manga, or the Third Stage movie) when Tachibana explains the rivalry between Bunta and Ken
                Kogashiwa. According to Tachibana, Bunta and Ken completed multiple races on the Irohazaka road to
                determine who was truly the fastest street racer, and "on the last race that counted", Bunta won. This
                could mean that Bunta possibly lost one or more rounds, but this idea is never discussed further as the
                dialog was written solely to provide a racing pedigree for Ken's son, who had recently challenged Takumi
                to a race on the same road.
              </p>
            </v-flex>
            <v-flex xs2>
              <v-img :src="require ('@/assets/characters/LS/hukumen.png')"></v-img>
            </v-flex>
          </v-layout>
          <v-layout justify-center>
            <v-flex xs2>
              <v-img :src="require ('@/assets/characters/LS/takumisan_1P.png')" class="takumisan"></v-img>
            </v-flex>
            <v-flex xs6>
              <h2>Takumi-san</h2>
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
            </v-flex>
          </v-layout>
          <v-layout justify-center>
            <v-flex xs6>
              <h2>Bunta Fujiwara</h2>
              <p>
                Bunta Fujiwara (藤原 文太 Fujiwara Bunta) is the owner of a tofu shop in Gunma, and the father of
                Takumi. He
                used to be the No.1 downhill racer in Mt. Akina years ago, but he no longer races, preferring to guide
                Takumi's racing development. He is the original driver of the mysterious "white ghost of Akina" AE86
                Sprinter Trueno that holds the record of the fastest downhill time at Akina. Bunta has a unique way of
                training his son to drive - every morning when Takumi delivers tofu. Bunta gives Takumi a cup of water
                which is placed in the drink holder; Takumi must not spill even a drop of it while he is driving. This
                is ostensibly to prevent breaking the tofu in the boot, but it forces Takumi to drive very smoothly. As
                for Bunta, he is still considered the best downhill racer in Akina, which is shown early in the series
                when he pushes the Trueno with Yuichi in the passenger seat, lighting a cigarette while drifting around
                a corner.
              </p>
              <p>
                Later in the series, Takumi used the Trueno more than Bunta, so he gave the car to Takumi. While test
                driving a Subaru Impreza WRX STi Type R Version V on Akina, he defeated his son, inducing a AWD complex
                in Takumi. Bunta decided to buy the car, but hid this fact from Takumi for some time. After revealing
                that he was the driver, he then told Takumi to alternate between the Impreza and his Eight-Six for
                deliveries - another strategy to improve Takumi as a driver, showing him the potential of modern cars
                and the characteristics of AWD. While this shows his training strategy, it is seen that Bunta is, once
                again, proven to be the most formidable opponent in Akina.
              </p>
              <p>
                Bunta is thought to have been undefeated during his time as a street racer. There is some dialog between
                Tachibana and Iketani that could possibly dispute this, but the vague description of events leaves the
                actual results up to speculation. Specifically, this dialog occurs during the Tochigi campaign (volume
                15 of the manga, or the Third Stage movie) when Tachibana explains the rivalry between Bunta and Ken
                Kogashiwa. According to Tachibana, Bunta and Ken completed multiple races on the Irohazaka road to
                determine who was truly the fastest street racer, and "on the last race that counted", Bunta won. This
                could mean that Bunta possibly lost one or more rounds, but this idea is never discussed further as the
                dialog was written solely to provide a racing pedigree for Ken's son, who had recently challenged Takumi
                to a race on the same road.
              </p>
            </v-flex>
            <v-flex xs2>
              <v-img :src="require ('@/assets/characters/LS/bunta1P.png')"></v-img>
            </v-flex>
          </v-layout>
        </v-tab-item>
        <v-tab :key="2" ripple @click.stop="active=2">Guide</v-tab>
        <v-tab-item :key="2">
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
        <v-tab :key="3" ripple @click.stop="active=3">Speedrun</v-tab>
        <v-tab-item :key="3">
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
