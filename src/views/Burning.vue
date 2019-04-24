<template>
  <v-container>
    <div>
      <v-tabs grow v-model="active" color="dark" dark slider-color="blue">
        <v-tab :key="0" ripple @click.stop="active=0">Game</v-tab>
        <v-tab-item :key="0">
          <!-- Game -->
          <v-layout text-xs-center>
            <v-flex xs12>
              <h1>Densha de D: Burning Stage</h1>
            </v-flex>
          </v-layout>
          <v-layout justify-center>
            <v-flex xs2 pr-2>
              <v-img :src="require ('@/assets/covers/BS_Cover.jpg')"></v-img>
            </v-flex>
            <v-flex xs6>
              <p>
                Densha de D: Burning Stage is the second game in the series. You can find more
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
              <v-img :src="require ('@/assets/characters/BS/D2_mako.png')"></v-img>
            </v-flex>
            <v-flex xs6>
              <h2>Mako Sato</h2>
              <p>
                Mako Sato (佐藤 真子 Satō Mako, "Maya") is the driver of the Usui combination,
                a combination similar to that found in the WRC, and one of Takumi Fujiwara's
                opponents before he joins Project D. She drives a Nissan SilEighty, and was
                known as the fastest on Usui pass alongside Sayuki, her navigator, before she
                becomes a professional racer at the end of Final Stage.
              </p>
              <p>
                Mako Sato is known as the fastest driver on Usui pass alongside Sayuki, her
                navigator,
                in First Stage. Very little is known about her past life, but she has a soft spot
                for cars
                and men who like cars. She becomes one of Takumi Fujiwara's opponents in First Stage
                before
                he joins Project D. The race ends after Mako enters a corner too quickly, and spins
                out,
                almost causing an accident between the two cars.
              </p>
              <p>
                Mako became interested in Iketani of the Akina SpeedStars. She originally got close
                to him
                in order to race Takumi's Eight-Six in Usui, offering her virginity in exchange. But
                she and
                Iketani developed true feelings to each other later on in the series. Unfortunately,
                a
                misunderstanding kept them apart.
              </p>
              <p>
                Mako also attends Takumi's final race against Shinji Inui of Sidewinder with Sayuki,
                engaging
                in conversation with Shinji during the hillclimb race between Keisuke Takahashi and
                Go Hojo,
                not knowing that he is Takumi's opponent for the downhill until he reveals that he
                is.
              </p>
            </v-flex>
          </v-layout>
          <v-layout justify-center>
            <v-flex xs6 text-xs-right>
              <h2>Sayuki</h2>
              <p>
                Sayuki (沙雪, "Simone") is Mako Sato's co-driver/navigator, and works with her in her
                battle
                against Takumi Fujiwara in First Stage.
              </p>
              <p>
                Extremely little is known about her past life, even her surname is not revealed in
                the manga
                nor the anime. What is known is that she met and befriended Mako Sato earlier on in
                life, and
                developed a love and passion for cars and racing. It is unknown when, but
                eventually, the two
                tackle Usui pass, their home course, with Sayuki as Mako's navigator, and Mako as
                the primary
                driver. She technically does not own a car, but says that the Nissan SilEighty that
                she and
                Mako drive in is shared between them both.
              </p>
              <p>
                Eventually, the two challenge Takumi Fujiwara, Akina's new downhill ace at the time,
                to a race
                on Usui pass. The two lose after Mako enters one of the corners too fast, and is
                told to spin
                out by Sayuki as they were unable to recover. Takumi swiftly avoids them and
                prevents an accident.
              </p>
              <p>
                After the race, Sayuki invites Takumi and his friends, Itsuki, Iketani and Kenji to
                a pool party,
                and slowly develops a crush on Takumi, not hesitating to hide it; calling him cute
                and loveable.
                She also teases Mako and Iketani, who both have feelings for each other, though a
                misunderstanding
                kept them both apart. Sayuki, further on in the series, attends Takumi's final race
                against
                Sidewinder's Shinji Inui along with Mako, whom she says is extremely similar to
                Takumi in many ways.
              </p>
            </v-flex>
            <v-flex xs2>
              <v-img :src="require ('@/assets/characters/BS/D2_sayuki.png')"></v-img>
            </v-flex>
          </v-layout>
          <v-layout justify-center>
            <v-flex xs2>
              <v-img :src="require ('@/assets/characters/BS/D2_kenta.png')"></v-img>
            </v-flex>
            <v-flex xs6>
              <h2>Kenta Nakamaura</h2>
              <p>
                Kenta Nakamura (中村 賢太 Nakamura Kenta) is one of the youngest members of the Akagi
                RedSuns and the third best driver of the team, Kenta absolutely adores Keisuke
                Takahashi
                and is always eager to prove himself to Keisuke. Kenta was recognized by Keisuke
                himself
                for his driving skills, and has been somewhat taken under Keisuke's wing. Kenta
                specializes in rain conditions, because he had a habit of practicing in the rain
                since the wet roads wouldn't wear his tires down as much.
              </p>
              <p>
                In the First Stage, he arrogantly challenged Takumi to a wet race and lost. This was
                the time when Takumi used Itsuki as ballast, simulating a load of tofu. (Note that
                Takumi delivers tofu everyday, even if it rains.)
              </p>
              <p>
                In Fourth Stage, he drives the #2 van for Project D and mostly does the recon
                recording
                of courses before the team actually travels to the locations, but it's unknown if he
                uses his S14 for it. Before he joined the Akagi RedSuns he purposely waited for
                rainy
                days to practice drifting.
              </p>
              <p>
                In Fifth Stage, Kenta assisted Keisuke helping him pass Spirial Zero’s Ryuji Ikeda
                in
                the start of a foggy high speed section near the end.
              </p>
            </v-flex>
          </v-layout>
          <v-layout justify-center>
            <v-flex xs6 text-xs-right>
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
            <v-flex xs2>
              <v-img :src="require ('@/assets/characters/BS/D2_nakazato.png')"></v-img>
            </v-flex>
          </v-layout>
          <v-layout justify-center>
            <v-flex xs2>
              <v-img :src="require ('@/assets/characters/BS/D2_kyousuke2P.png')"></v-img>
            </v-flex>
            <v-flex xs6>
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
          </v-layout>
          <v-layout justify-center>
            <v-flex xs6 text-xs-right>
              <h2>Seiji Iwaki</h2>
              <p>
                Seiji Iwaki(岩城 清次 Iwaki Seiji, "Hawk") is the number two driver in the Lancer
                Evolution-only Emperor team, therefore he drives the Lancer Evolution IV. Seiji is a
                driver with good racing skills, but he is rather arrogant and overconfident and
                occasionally imprudent. He has won many races driving for Emperor against other
                teams,
                including Takeshi Nakazato of the NightKids and a member of Thunder.
              </p>
              <p>
                Back when Team Emperor appeared in Gunma prefecture to challenge the local racing
                teams,
                Seiji was sent out against every single one. He is known to have easily defeated a
                180SX
                from Team Thunderfires and Takeshi Nakazato from the Myogi NightKids among others,
                taking
                each car's team sticker afterwards, then cutting it in half and placing it
                upside-down on
                the side of his Evo's rear wing similarly to how fighter pilots would paint kill
                marks on
                their planes.
              </p>
              <p>
                After defeating various teams in Gunma, the Emperor team then set their sights on
                the Akina
                Speed Stars, aiming to beat Akina's infamous Eight-Six. Seiji volunteered to race
                for the
                Emperor team in his Evo IV against Takumi's Eight-Six. Kyoichi was well aware that
                it cannot
                be taken lightly and Seiji was specifically told that he was to follow "Simulation
                3", a plan
                used only when victory was not certain. Said plan translated to "stay behind
                opponent, and
                overtake near the end before reaching the finish" but he was humiliated when his
                overconfidence
                and impatience led to his downfall, causing Kyoichi, the team leader, having to race
                the
                Eight-Six before the team could move on to the next opponent. It was also verbally
                stated
                that Seiji lost to Kai Kogashiwa in Irohazaka, but no actual battle was shown in the
                series.
                In Battle Stage, his Evo IV also raced Keisuke's FD, and lost.
              </p>
              <p>
                One of Seiji's trademarks is to take the team sticker of teams he has defeated, cut
                it in half,
                and stick it on the sideblade of his spoiler upside-down, emulating the "kill"
                markers that
                fighter pilots paint on their planes.
              </p>
            </v-flex>
            <v-flex xs2>
              <v-img :src="require ('@/assets/characters/BS/D2_seiji_a.png')"></v-img>
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
              <v-img :src="require ('@/assets/trains/BS/ICON_21XX.png')"></v-img>
            </v-flex>
            <v-flex xs6 pl-2>
              <h2>21XX Series</h2>
              <p>
                More information about this kind of train will be added soon.
              </p>
            </v-flex>
          </v-layout>
          <v-layout justify-center>
            <v-flex xs6 text-xs-right pr-2>
              <h2>2199 Series</h2>
              <p>
                More information about this kind of train will be added soon.
              </p>
            </v-flex>
            <v-flex xs2>
              <v-img :src="require ('@/assets/trains/BS/ICON_2199.png')"></v-img>
            </v-flex>
          </v-layout>
          <v-layout justify-center>
            <v-flex xs2>
              <v-img :src="require ('@/assets/trains/BS/ICON_8008.png')"></v-img>
            </v-flex>
            <v-flex xs6 pl-2>
              <h2>8008 Series</h2>
              <p>
                More information about this kind of train will be added soon.
              </p>
            </v-flex>
          </v-layout>
          <v-layout justify-center>
            <v-flex xs6 text-xs-right pr-2>
              <h2>UV Series</h2>
              <p>
                More information about this kind of train will be added soon.
              </p>
            </v-flex>
            <v-flex xs2>
              <v-img :src="require ('@/assets/trains/BS/ICON_UV.png')"></v-img>
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
                frameborder="0"
                allowfullscreen></iframe>
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
              <iframe width="560" height="315" src="https://www.youtube.com/embed/OS5bAK3gZc"
                frameborder="0"
                allowfullscreen></iframe>
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
              <iframe width="560" height="315" src="https://www.youtube.com/embed/fdP4_itYimw"
                frameborder="0"
                allowfullscreen></iframe>
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
              <iframe width="560" height="315" src="https://www.youtube.com/embed/Qj9_apUMuvk"
                frameborder="0"
                allowfullscreen></iframe>
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
              <iframe width="560" height="315" src="https://www.youtube.com/embed/U2g-qvEtsuY"
                frameborder="0"
                allowfullscreen></iframe>
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
              <iframe width="560" height="315" src="https://www.youtube.com/embed/28oU3ra69cU"
                frameborder="0"
                allowfullscreen></iframe>
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
              <iframe width="560" height="315" src="https://www.youtube.com/embed/c3QP2vaiu0o"
                frameborder="0"
                allowfullscreen></iframe>
            </v-flex>
            <v-flex pl-2>
              <h2>Bonus Stage 3 - Bunta</h2>
              <p>
                More information about this kind of stage will be added soon.
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
                This will be a wall of text that explains everything.
              </p>
            </v-flex>
          </v-layout>
          <v-layout>
            <v-flex xs6>
              <iframe width="560" height="315" src="https://www.youtube.com/embed/WwZz1Yxz5ho"
                frameborder="0"
                allowfullscreen></iframe>
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
              <iframe width="560" height="315" src="https://www.youtube.com/embed/OS5bAK3gZc"
                frameborder="0"
                allowfullscreen></iframe>
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
              <iframe width="560" height="315" src="https://www.youtube.com/embed/fdP4_itYimw"
                frameborder="0"
                allowfullscreen></iframe>
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
              <iframe width="560" height="315" src="https://www.youtube.com/embed/Qj9_apUMuvk"
                frameborder="0"
                allowfullscreen></iframe>
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
              <iframe width="560" height="315" src="https://www.youtube.com/embed/U2g-qvEtsuY"
                frameborder="0"
                allowfullscreen></iframe>
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
              <iframe width="560" height="315" src="https://www.youtube.com/embed/28oU3ra69cU"
                frameborder="0"
                allowfullscreen></iframe>
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
              <iframe width="560" height="315" src="https://www.youtube.com/embed/c3QP2vaiu0o"
                frameborder="0"
                allowfullscreen></iframe>
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
      active: null,
    };
  },
};

</script>
