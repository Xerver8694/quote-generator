const localQuotes = [
  {
    text: "I am a monument to all your sins.",
    author: "Gravemind, Halo 2"
  },
  {
    text: "I’ll do whatever you want.Then Perish.",
    author: "Obama, Spooky-Grimwhoire’s roleplay"
  },
  {
    text: "To become God is the loneliest achievement of all.",
    author: "Obama, twofingerswhiskey’s mother’s dream"
  },
  {
    text: "Violence for Violence is the rule of beasts.",
    author: "Obama, Kumagawa’s dream"
  },
  {
    text: "I survived because the fire inside me burned brighter than the fire around me.",
    author: "Joshua Graham, Fallout: New Vegas"
  },
  {
    text: "If the world chooses to become my enemy, I will fight just like I always have.",
    author: "Shadow the Hedgehog, Sonic ‘06"
  },
  {
    text: "I will face God and walk backwards into hell.",
    author: "@dril, Twitter"
  },
  {
    text: "All knowledge is based on that which we cannot prove. Will you fight? Or will you perish like a dog?",
    author: "Mickey Mouse, rulesofthirds comic"
  },
  {
    text: "Do you think God lives in heaven because he, too, fears what he has created?",
    author: "Dr. Romero, Spy Kids 2"
  },
  {
    text: "Nobody likes to change. There will always be resistance to change. And the quicker you get to that, the easier it is. It's not such a difficult thing. If you entrench yourself and go, 'by God, I will not change. I will not have this.’ Then, you’re a dead man. We're great at adaptability. It's our strongest suit.",
    author: "Nick Nolte, Collider Interview"
  },
  {
    text: "You’ve got to make a statement. You’ve got to look inside yourself and say: 'what am I willing to put up with today?'",
    author: "Arin Hanson, Game Grumps (Sonic 06 Part 20)"
  },
  {
    text: "Whenever you look at another creator or an artist that you respect, you're only seeing what took them a long time of work and doubt to push through. You never see the struggle behind it. So you think you’re the only one struggling, when in fact, everyone goes through it.",
    author: "Danny Sexbang/Avidan, Game Grumps"
  },
  {
    text: "Too many people have opinions on things they know nothing about. And the more ignorant they are, the more opinions they have.",
    author: "Thomas Hildern, Fallout: New Vegas"
  },
  {
    text: "What is better- To be born good, or to overcome your evil nature through great effort?",
    author: "Paarthurnax, The Elder Scrolls: Skyrim"
  },
  {
    text: "Pick a god and pray.",
    author: "Frederick, Fire Emblem: Awakening"
  },
  {
    text: "I see now that the circumstances of one’s birth are irrelevant; it is what you do with the gift of life that determines who you are.",
    author: "Mewtwo, Pokemon: The First Movie"
  },
  {
    text: "Dude, sucking at something is the first step towards being sort of good at something.",
    author: "Jake the Dog, Adventure Time (His Hero)"
  },
  {
    text: "There’s no point in being grown up if you can’t act childish at times.",
    author: "Fourth Doctor, Doctor Who (Robot)"
  },
  {
    text: "God may judge you, but his sins outnumber your own.",
    author: "afabbaeddel, Tumblr"
  },
  {
    text: "Men are props on the stage of life, and no matter how tender, how exquisite... A lie will remain a lie.",
    author: "Aldia, Dark Souls 2"
  },
  {
    text: "“Going clown spotting.”\n“Have you checked the mirror?”\n“If you want me to die you can just say so.”",
    author: "lmaonade and xtec, Tumblr"
  },
  {
    text: "Then become the dirt I walk on.",
    author: "pukicho, Tumblr"
  },
  {
    text: "To feel sorrow is to deserve peace.",
    author: "Anon, 1d4Chan"
  },
  {
    text: "Can you feel your heart burning? Can you feel the struggle within? The fear within me is beyond anything your soul can make. You cannot kill me in a way that matters.",
    author: "Mushroom, personsonable’s Tumblr post"
  },
  {
    text: "You are alone, child. There is only darkness for you, and only death for your people. These ancients are just the beginning. I will command a great and terrible army... and we will sail to a billion worlds. We will sail until every light has been extinguished. You are strong, child. But I am beyond strength.",
    author: "Lich, Adventure Time (Escape From The Citadel)"
  },
  {
    text: "He has already begun painting the picture, now we must decide to finish it.",
    author: "grimreaperblog, Tumblr"
  },
  {
    text: "When someone leaves your life those exits… are… not made equal. Some are beautiful, and poetic, and satisfying. Others are abrupt and unfair, but most are just unremarkable, unintentional, clumsy.",
    author: "Griffon McElroy, The Adventure Zone (Ep. 66: The Stolen Century)"
  },
  {
    text: "You could sooner divert a river from its course than deny my nature.",
    author: "Cat, lucentgallivanter’s Tumblr post"
  },
  {
    text: "The man who sleeps with a machete is a fool every night but one.",
    author: "Justin McElroy, MBMBAM (Episode 137: Tangentz)"
  },
  {
    text: "You kneel before my throne unaware it was built on lies.",
    author: "Aplpaca, Tumblr"
  },
  {
    text: "I never cared about justice, and I don't recall ever calling myself a hero, I have always only fought for the people I believe in.",
    author: "Zero, Megaman Zero"
  },
  {
    text: "If we want the rewards of being loved we have to submit to the mortifying ordeal of being known.",
    author: "Tim Kreider, I Know What You Think Of Me"
  },
  {
    text: "What can one do in the face of such monumental loss but breathe a weary sigh, for the world is a little quieter now.",
    author: "Shane Madej, HotDaga (Believe Me, Maizey)"
  },
  {
    text: "You cannot condemn those who build your throne.",
    author: "lovelyirony, Tumblr"
  },
  {
    text: "You can’t demand a service while simultaneously degrading those who provide it for you.",
    author: "thempress, Tumblr"
  },
  {
    text: "God has cursed me for my hubris and my work is never finished.",
    author: "Brian David Gilbert, Bowser’s Military Hierarchy Unraveled"
  },
  {
    text: "We might be in the history God abandoned.",
    author: "Akane, Zero Time Dilemna"
  },
  {
    text: "The antidote to despair is action.",
    author: "Justin McElroy, Twitter"
  },
  {
    text: "I cannot hold back the tide of your bad decisions.",
    author: "Loaderbot, Tales From The Borderlands"
  },
  {
    text: "Kill me and live with the memory. Then tell the stars that you’ve won.",
    author: "Grey Wing, Warriors: The First Battle"
  },
    {
    text: "Sometimes life puts you in difficult circumstances you didn't choose, but being happy or unhappy is a choice you make, and I've chosen to make the best of things that I can.",
    author: "Shahvee, The Elder Scrolls: Skyrim"
  },
  {
    text: "You don't have to be alive to make yourself relevant, And you don't have to be a good person to be a hero. You just have to know who you are, and stay true to that. So I'm going to keep fighting for people the only way I ever knew how, By being me.",
    author: "Vriska Serket, Homestuck"
  },
  {
    text: "Always remember that the crowd that applauds your coronation is the same crowd that will applaud your beheading. People like a show.",
    author: "Terry Pratchet, Discworld (Going Postal)"
  },
  {
    text: "See, Sarah Lynn? We're not doomed. In the great, grand scheme of things, we're just tiny specks that will one day be forgotten. So it doesn't matter what we did in the past, or how we'll be remembered. The only thing that matters is right now, this moment, this one spectacular moment we are sharing together. Right, Sarah Lynn?",
    author: "Bojack Horseman, Bojack Horseman (That’s Too Much, Man)"
  },
  {
    text: "You know, it's funny... when you look at someone through rose-colored glasses, all the red flags just look like flags.",
    author: "Wanda, Bojack Horseman (Yes And…)"
  },
  {
    text: "Sometimes, Life’s a Bitch and then you keep living.",
    author: "Diane Nyugen, Bojack Horseman (Nice While It Lasted)"
  },
  {
    text: "You do everything you can to make up for it, knowing that you’ll never succeed in getting rid of the guilt. You devote yourself to spending every second trying to do better despite the fact that it will never be enough. And you pray with every single good act you do that somehow, when your life is over, that you came close to making up for the wrong you committed.",
    author: "Watcher, Fallout: Equestria: Project Horizons"
  },
  {
    text: "I will seize destiny by the throat and force it into the shape of my choosing.",
    author: "mollyjames, Tumblr"
  },
  {
    text: "The sins of the ancient burn the souls of the ancestors.",
    author: "sanctumofwaluigi, Tumblr"
  },
  {
    text: "What brings me joy is… life. I think you can find joy anywhere, in life. I think it’s a conscious choice. I think you- you choose joy, in life. And no matter how bad things are, no matter how crummy, no matter how dark. You find joy. I find joy in whatever I do. I don’t always do things right, and I don’t always do things smart. But whatever I do, I find joy in it.",
    author: "Clint McElroy, TAZ: Balance"
  },
  {
    text: "I think we deserve a soft epilogue, my love. We are good people and we’ve suffered enough.",
    author: "Nikki Ursula, Seventy Years Of Sleep"
  },
  {
    text: "I hear your questions constantly. They come to me in my dreams like a prophet receiving visions from an angry god.",
    author: "Brian David Gilbert, Bowser’s Military Hierarchy Unraveled"
  },
  {
    text: "Your secrets are safe with my indifference.",
    author: "Taliesin Jaffe, Critical Role"
  },
  {
    text: "The anger in your heart warms you now, but will leave you cold in your grave.",
    author: "One-time-I-dreamt"
  },
  {
    text: "History shows again and again how nature points out the folly of man.",
    author: "Bear McCreary, Godzilla: King Of The Monsters."
  },
  {
    text: "If God wanted you to live, he would not have created me.",
    author: "Soldier, Team Fortress 2"
  },
  {
    text: "One day, you will be face to face with whatever saw fit to let you exist in the universe, and you will have to justify the space you’ve filled.",
    author: "curseworm, Tumblr"
  },
  {
    text: "I can’t go to Hell. I’m all out of vacation days.",
    author: "Burgerpants, Undertale"
  },
  {
    text: "You understand reality while everyone else is running around confused and angry and upset because they think reality is something happening to them rather than something they are making every moment with every thought.",
    author: "Terezi Pyrope, Homestuck"
  },
  {
    text: "What is Heaven but a place where your dreams can’t destroy you.",
    author: "Kaveririvon’s dream, Tumblr"
  },
    {
    text: "Either Sonic is a God, or could kill God, and I do not care if there is a difference.",
    author: "David Brian Gilbert, Unraveled: Every Sonic game is blasphemous"
  },
  {
    text: "You are braver than you believe, stronger than you seem, and smarter than you think.",
    author: "Christopher Robin, Winnie The Pooh"
  },
  {
    text: "Authority should derive from the consent of the governed, not from the threat of force.",
    author: "Barbie, Toy Story 3"
  },
  {
    text: "Love is not a decision, it is a feeling. It would be much easier if we could choose whom we loved, but much less magical.",
    author: "Mr. Twig, South Park"
  },
  {
    text: "We do have a lot in common. The same Earth, the same air, the same sky. Maybe if we started looking at what's the same instead of what's different... well who knows?",
    author: "Meowth, Pokemon: The First Movie"
  },
  {
    text: "If I were not a holy woman I would beat you senseless.",
    author: "L’Arachel, Fire Emblem: The Sacred Stones"
  },
  {
    text: "No cause is lost as long as one fool is left to fight for it.",
    author: "Will Turner, Pirates of the Caribbean: At World's End"
  },
  {
    text: "The light inside me is broken, but I still work.",
    author: "Vending Machine"
  },
  {
    text: "Everything not saved will be lost.",
    author: "Nintendo Quit Screen Message"
  },
  {
    text: "What is another sin to me? I don’t want to play a game where I can’t see the score.",
    author: "Protect_bidoof, Instagram"
  },
  {
    text: "Nothing's set in stone, but set in a dirt road. If you roll your wagon in the same path too much it'll soon be the only path you can take without struggling.",
    author: "bbsailorbitch, Twitter"
  },
  {
    text: "I came out here, to this point, to this place, hoping against all hope and despite signs and portends suggesting otherwise that I might, somehow, find myself having a pleasant experience, and yet here I stand, alone against the world, feeling bombarded and assaulted on all fronts, knowing not my enemy's name, nor his face, nor whether our battle is done.",
    author: "Fencer-X, Tumblr"
  },
  {
    text: "I've got good news. You see, there's no need to wonder where your god is, 'cause he's right here! And he's fresh out of mercy.",
    author: "Kirito, Sword Art Online Abridged (Episode 4)"
  },
  {
    text: "The penance you pay for the way you behave is written as plain as the name on this grave.",
    author: "Death, Epic Rap Battles Of History (Ebenezer Scrooge vs. Donald Trump)"
  },
  {
    text: "Some humans—just as some [us]—are capable of unspeakable acts. But despite all the violence in your history, you have endured, built civilizations, constructed great wonders of technology to broaden your horizons and forge friendships across all manner of divides. I strongly believe that this is not some grand miracle... but merely your own deepest nature, struggling to express itself through the distrust and fear that thousands of years spent living on a harsh, unforgiving world have bred into you.",
    author: "Princess Luna, Written in Dust"
  },
  {
    text: "We both stared into the abyss, but when it looked back... you blinked.",
    author: "Owlman, Doomsday Clock"
  },
  {
    text: "Before there was time, before there was anything, there was nothing. And before there was nothing, there were monsters.",
    author: "The Lich, Adventure Time (Gold Stars)"
  },
  {
    text: ">Dirk Don’t kill me. Please. >I am scared.“You are?” Yes.>I am scared to not exist.Aren’t you?",
    author: "Dirk Strider and Dirk AR, Homestuck"
  },
  {
    text: "If you feel like the dumbest person in the room, then you are in the right room.",
    author: "u/Last_Jesus, Reddit"
  },
  {
    text: "Love yourself to spite the world.",
    author: "Biggest-Gaudiest-Patronuses, Tumblr"
  },
   {
    text: "Stand in the ashes of a thousand dead souls and ask the ghosts if honor matters. Their silence is your answer.",
    author: "Javik, Mass Effect"
  },
  {
    text: "I commend my soul to any god that can find it.",
    author: "Moist Von Lipwig, Discworld (Going Postal)"
  },
  {
    text: "If there can be no victory, then I will fight forever.",
    author: "Koth of the Hammer, Magic: The Gathering"
  },
  {
    text: "Those who do not exist cannot suffer and are of no account to any viable ethics.",
    author: "Winnower, Destiny 2"
  },
  {
    text: "No one will know the violence it took to become this gentle.",
    author: "retroowl8, Tumblr"
  },
  {
    text: "Oh I believe in God, alright. I just don't believe the bastard deserves to be worshiped.",
    author: "alexaloraetheirs’s friend, alexaloraetheirs’s Tumblr Post"
  },
  {
    text: "I’m just a program designed to make ha-ha. A file named Laugh Man.",
    author: "Raph Chestang, Collegehumor (A Computer Co-Wrote This Sketch)"
  },
  {
    text: "“You ever wonder if this is Heaven now? You ever wonder if we're all just there now and we don't know it?”\n“I've thought about that. All of us have. There's a lot less people who go to church than there used to be, because that's what a lot of people think. But I don't think so. But I think about it. And I think, well, I can't be. Because I'm like you, I kinda look at the big long life ahead of me that stretches out forever and disappears. And I get scared. And I think, ‘This can't be Heaven if I'm getting scared, right?’ And then I think, ‘maybe I am in Heaven, and Heaven is scary.’”\n“...I know exactly what you mean.”",
    author: "Eddie and Tim, 1776"
  },
  {
    text: "Stop expecting yourself to be immediately perfect at whatever you do. That’s what hard work was made for.",
    author: "Obama, One-time-I-dreamt"
  },
  {
    text: "I’ve heard it said that we only gain wisdom through suffering. And tonight I intend to make you very wise.",
    author: "Megatron, Megatron Origin #04"
  },
  {
    text: "From one maker of music to another, across all worlds, all times, no matter what you do or what you become: You are nothing less than beautiful.",
    author: "SCP-1342, SCP-1342-2's Message"
  },
  {
    text: "We all make mistakes. That’s what happens when you’re brave enough to make decisions.",
    author: "Toa Matau, Bionicle 3: Web of Shadows"
  },
  {
    text: "Shame is our currency in the economy of degeneracy. If you wanna be weird you gotta pay for it by feeling bad.",
    author: "DWK, Totally Legit Recap"
  },
  {
    text: "Everything happens so much.",
    author: "@Horse_ebooks, Twitter"
  },
  {
    text: "Every human has regrets, has things they'd like to go back and change. But I don't! 'cause I'm a bear.",
    author: "Monokuma, Danganronpa: Trigger Happy Havoc"
  },
  {
    text: "Do I drag my carcass to the mountaintop once more? Just to scream a warning that will go unheeded and unheard? Or do I end it?",
    author: "Brennan Lee Mulligan, Collegehumor (Tide CEO: Soap Isn’t Medicine)"
  },
  {
    text: "There can be no bravery, without madness.",
    author: "The Ancestor, Darkest Dungeon"
  },
  {
    text: "Prolong this world's stasis or face the heart of its infection. I'd urge you to take that harder path, but what end may come, the decision rests with you.",
    author: "Hornet, Hollow Knight"
  },
  {
    text: "It's always important to remember that every day can be beautiful if you want it to be. Every day starts in the dark...and ends in the dark...but in the middle, there is light.",
    author: "Russel Hobbs, The Gorillaz"
  },
  {
    text: "Decay exists as an extant form of life.",
    author: "personsonable, Tumblr"
  },
   {
    text: "My point is that, if death is certain anyway, what’s the harm in trying to live a little longer? At the very worst, you’ll still end up dead like you wanted, but at best, you might actually be happy.",
    author: "DWK, Totally Legit Recap"
  },
  {
    text: "If all I care about in life is the imprints I make in this world, then the most I’ll ever leave is a grave.",
    author: "Lyra Heartstrings, Background Pony"
  },
  {
    text: "If courage isn’t the absence of fear but doing the right thing regardless of it, maybe confidence isn’t the absence of insecurity but knowing you have real worth despite it.",
    author: "Spillywolf, Tumblr"
  },
  {
    text: "For strange eons had come to pass, and death itself had indeed finally died, and that which the long dead would have called the real was strange, and the living lived only because of the benevolent grace of an eternal lie.",
    author: "Jennifer Diane Reitz, Friendship is Optimal: Caelum Est Conterrens"
  },
  {
    text: "Pay a man enough, and he’ll walk barefoot into Hell.",
    author: "David Xanatos, Gargoyles"
  },
  {
    text: "The world should have protected you, but you have been asked to protect it. What an honor. What an injustice.",
    author: "Beverly Toegold, Not Another DnD Podcast"
  },
  {
    text: "Anytime someone calls attention to the breaking of gender roles, it ultimately undermines the concept of gender equality by implying that this is an exception and not the status quo.",
    author: "Knuckles the Echidna, Sonic Boom"
  },
  {
    text: "He didn't have a word for \"home,\" but he knew it was something to be defended.",
    author: "Ogre Resister Card, Magic: The Gathering"
  },
  {
    text: "There’s a certain nobility in lying in bed all day wishing things weren’t the way they are.",
    author: "Patrick Bovin, Two Best Friends Play Resident Evil 3: Nemesis"
  },
  {
    text: "Everybody needs their own messiah, but at some point he's getting nailed up, and how you deal with that is a measure of your maturity.",
    author: "Mr Regular, Regular Car Reviews (1994 Dodge Viper Review)"
  },
  {
    text: "I wanted rain and I thought the best way to do that was to make god cry.",
    author: "Killian Experience, Reddit"
  },
  {
    text: "The bar was so low it was practically a tripping hazard in hell, yet here you are, limbo dancing with the devil.",
    author: "omnybus"
  },
  {
    text: "Would you rather get a reward, or be happy?",
    author: "dragon-in-a-fez’s friend’s four-year-old son"
  },
  {
    text: "Don’t ask questions you aren’t prepared to handle the answers to.",
    author: "Mrs. Puff, Battle for Bikini Bottom"
  },
  {
    text: "I pity the fool that lives like you.",
    author: "Obama, tealrezi’s dream"
  },
  {
    text: "I am tired of life and its obscure sufferings.",
    author: "sketiana, Tumblr"
  },
  {
    text: "You have to ask yourself, Miss Kitty, would you rather be comforted by a lie or strengthened by the truth?",
    author: "shitmygaywifesays’ wife to her cat"
  },
  {
    text: "I’ve got a date with destiny and it ain’t gonna end with a kiss.",
    author: "Candace, Phineas & Ferb (The Belly of the Beast/Moon Farm)"
  },
  {
    text: "I picked a whole fuckin’ bouquet of whoopsie-daisies.",
    author: "anarchetypal’s cousin, Tumblr"
  },
  {
    text: "You can’t be nice to everyone because being nice to certain people is inherently cruel to others.",
    author: "@meganamram, Twitter"
  },
  {
    text: "One day you’ll decompose and I’ll be there to watch it happen.",
    author: "turing-tested, Tumblr"
  },
  {
    text: "I forgive but I will never, ever forget. Don’t mistake my kindness for gullibility.",
    author: "glicoloidpocky, Tumblr"
  },
  {
    text: "Even fate picks its favourites.",
    author: "Megamind"
  },
  {
    text: "Confidence! A fool’s substitute for intelligence!",
    author: "Dr. Ivo Robotnik, Sonic the Hedgehog (2020)"
  },
  {
    text: "Not everything in life is perfect, but everything perfect is in life.",
    author: "Michelle Obama, one-time-i-dreamt"
  },
  {
    text: "Flowers wither away. Jewelry are simply stones, decorated with fake beauty. I can give you something pure. Honest and undying love.",
    author: "tips-and-tricks-for-writin, Tumblr"
  },
  {
    text: "A world without forgiveness is a world without compromise and a world without compromises is a world without life, for even a simple-minded beast may forgive its transgressors to share a watering hole in the middle of a drought.",
    author: "memesusofsuburbia, Tumblr"
  },
  {
    text: "“You played me!”\n“Like the cheap kazoo you are.”",
    author: "merrypaws, Tumblr"
  },
  {
    text: "To your battle stations, boys! It’s time to line up and see who’s tall enough for the roller coaster to hell! Some of us may not survive this, but the ones that do will get the ultimate reward.... paid.",
    author: "anneuhken’s kid, Tumblr"
  },
  {
    text: "Here’s a penny for your thoughts, and a quarter to not tell me them.",
    author: "anneuhken’s kid, Tumblr"
  },
  {
    text: "Now I can cross the shifting sands.",
    author: "L. Frank Baum’s last words"
  },
  {
    text: "I am about to take my last voyage, a great leap into the dark.",
    author: "Thomas Hobbes’ last words"
  },
  {
    text: "Since the day of my birth, my death began its walk. It is walking towards me, without hurrying.",
    author: "Jean Cocteau’s last words"
  },
  {
    text: "Now, now, my good man, this is no time for making enemies.",
    author: "Voltaire’s last words, when asked by a priest to renounce Satan"
  },
  {
    text: "Hurry it up! I want to be in hell in time for dinner.",
    author: "Edward H. Rulloff"
  },
  {
    text: "Dying is easy, comedy is hard.",
    author: "George Bernard Shaw’s last words"
  },
  {
    text: "You're the one flying into the Sun. I'm just here to make sure you burn.",
    author: "L, Death Note (Netflix Version)"
  },
  {
    text: "Know that if I kill myself I will at least have a funeral. People will miss me even though I’m not a perfect person. If you did it, not even your own mother would cry for you. Perhaps I should die because I would be the only person who would’ve attended your funeral to make myself laugh.",
    author: "Venti"
  },
  {
    text: "You are a pretentious, pedantic elitist wearing the skin of an intellectual.",
    author: "Cypher Wayne"
  },
  {
    text: "You are a coward wearing the facade of a revolutionary.",
    author: "blackpurist, TikTok"
  },
    {
    text: "I cannot be a liberator for those who refuse to see their chains!",
    author: "blackpurist, TikTok"
  },
  {
    text: "Right now, they fear you… Make them hate you!",
    author: "blackpurist, TikTok"
  },
  {
    text: "When you’re going to change the world, you don’t ask for permission.",
    author: "Viktor, Arcane"
  },
  {
    text: "Fallen angels should stay fallen.",
    author: "Henzie “Toolbox” Torre, Atraxa’s Fall Card, Magic: The Gathering"
  },
  {
    text: "There is no God! That's why I stepped in!",
    author: "High Evolutionary, Guardians of the Galaxy Vol. 3"
  },
  {
    text: "You weren't trying to make things perfect. You just hated things the way they were.",
    author: "Rocket Raccoon, Guardians of the Galaxy Vol. 3"
  },
  {
    text: "When other people look up to you, you don’t get to be selfish. You say jump, they jump. You say swim, they dive in. You say “light a fire,” they show up with oil. And whatever happens is on you.",
    author: "Vander, Arcane"
  },
  {
    text: "Sometimes the best harvest comes after the worst storm",
    author: "Cypher Wayne"
  },
  {
    text: "You've gotten a lot farther than you should have, but then you haven't met Frank Horrigan either. Your ride's over, mutie. Time to die.",
    author: "Agent Frank Horrigan, Fallout Classic"
  },
  {
    text: "Trust is what happens when actions meet words.",
    author: "Cyclops, X-Men ‘97"
  },
  {
    text: "I am trying to be better. Please… do not make me let you down.",
    author: "Magneto, X-Men ‘97"
  },
  {
    text: "If the world is burning down around us, we might as well dance in the flames!",
    author: "Cypher Wayne"
  },
  {
    text: "I know God is the only judge we have. I just set the appointment up.",
    author: "Steven Sandison, after murdering his child-molestor cellmate"
  },
  {
    text: "You could die right now and nothing in my life would change",
    author: "Some MLP fanfiction about Twilight and Mordecai"
  },
  {
    text: "If the Devil is patting you on the back as you fight angels, make sure he isn’t holding a knife to backstab you.",
    author: "Shady Doorags"
  }
];
