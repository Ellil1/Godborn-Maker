
var LegendaryAbility = function(name,description,legendaries) {
  this.name = name;
  this.description = description;
  this.legendaries = legendaries;
};
var Role = function(name,legendaries,skills) {
  this.name = name;
  this.legendaries = legendaries;
  this.skills = skills;

};
var secondOrigin = function(name,description,originString,originVar,approaches,domains,roles) {
  this.name = name;
  this.description = description;
  this.originString = originString;
  this.originVar = originVar;
  this.approaches = approaches;
  this.domains = domains;
  this.roles = roles;
};
var parameterCalculator = function(name,type,legendaries,skills) {
  this.name = name;
  this.type = type;
  this.legendaries = legendaries;
  this.skills = skills;

};

var rolesChoiceArray = [
Default = new Role("Default",[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]),
MeatShield = new Role("Meat Shield",[2,4,3,1,3,2,3,1,1,3,3,2,-1,-1,3,-2,1,-2,-1,0,2,3,0,2,-1,3,1,-1,2,2,4,3,-1,1,2,2,-2,-1,3,2,-3,-2,0,-2,-1,4,3,4,2,-1,1,-1,0,-2,3,1,-1,2,-2,-1,-2,3,2,1,-2,3],[3,-2,-1,2,1,4,3,3,4,3,-1,-2,1,0,4]),
DamageDealer = new Role("Damage Dealer",[2,0,0,1,2,3,2,4,2,4,3,-2,-3,-1,-2,4,1,-1,0,3,1,3,4,-1,3,2,1,0,-1,4,2,-1,3,1,2,2,3,1,3,3,-4,4,1,1,4,1,4,2,-1,-2,4,-2,-2,-1,1,2,3,4,2,1,2,1,4,4,-2,3],[3,-1,-2,3,-2,4,4,1,1,0,-1,-2,4,4,3]),
PartyFace = new Role("Party Face",[1,1,0,3,1,4,2,-3,-3,-4,-3,1,4,3,3,1,1,2,4,2,4,1,-2,4,-1,-1,-1,-2,-1,-3,-3,-2,3,4,-1,-1,1,0,-3,-2,1,-3,-3,3,-2,-1,-4,-4,4,4,-4,4,4,-2,-3,3,-2,2,2,1,2,3,1,4,1,-2],[1,0,4,2,1,-2,2,2,-1,4,4,4,-2,-1,0]),
SkillMonkey = new Role("Skill Monkey",[4,4,3,4,4,4,4,-2,-3,-2,-1,4,2,2,2,-1,-1,4,3,2,2,0,-2,-1,-1,3,2,1,2,-1,-1,1,-1,-2,1,2,-2,3,1,3,3,0,1,4,2,1,-2,-3,-1,-2,-1,0,-1,3,2,1,2,2,4,-2,3,3,1,2,4,1],[3,4,1,4,2,1,4,4,1,0,1,4,1,4,3]),
SupportController = new Role("Support-Controller",[4,4,3,3,4,4,4,1,3,3,4,4,4,2,4,1,3,4,4,3,4,4,1,4,-1,3,3,4,3,2,3,3,4,3,2,3,3,0,3,3,-1,-2,3,2,2,4,-1,-1,4,4,0,4,4,2,4,2,1,2,0,1,1,-1,-3,-1,4,4],[2,-1,4,4,4,2,4,1,2,3,4,-1,-2,1,4]),


]
var parametersArray = [

// Approaches
Careful = new parameterCalculator("Careful","Approach",[],[]),
Clever = new parameterCalculator("Clever","Approach",[],[]),
Flashy = new parameterCalculator("Flashy","Approach",[],[]),
Forceful = new parameterCalculator("Forceful","Approach",[],[]),
Quick = new parameterCalculator("Quick","Approach",[],[]),
Sneaky = new parameterCalculator("Sneaky","Approach",[],[]),

// Domains

War = new parameterCalculator("War Deity","Domain",[],[]),
Wisdom = new parameterCalculator("Wisdom Deity","Domain",[],[]),
Leader = new parameterCalculator("Leader of the Gods","Domain",[],[]),
Father = new parameterCalculator("Progenitor of the Gods","Domain",[],[]),
Fertility = new parameterCalculator("Fertility Deity","Domain",[],[]),
Love = new parameterCalculator("Love Deity","Domain",[],[]),
Travel = new parameterCalculator("Travel Deity","Domain",[],[]),
Water = new parameterCalculator("Water Deity","Domain",[],[]),
Sky = new parameterCalculator("Sky Deity","Domain",[],[]),
Wit = new parameterCalculator("Wit Deity","Domain",[],[]),
Death = new parameterCalculator("Death Deity","Domain",[],[]),
Fire = new parameterCalculator("Fire Deity","Domain",[],[]),
Earth = new parameterCalculator("Earth Deity","Domain",[],[]),
Justice = new parameterCalculator("Justice Deity","Domain",[],[]),
Moon = new parameterCalculator("Moon Deity","Domain",[],[]),
Sun = new parameterCalculator("Sun Deity","Domain",[],[]),
Knowledge = new parameterCalculator("Knowledge Deity","Domain",[],[]),
Darkness = new parameterCalculator("Darkness Deity","Domain",[],[]),
Crafting = new parameterCalculator("Crafting Deity","Domain",[],[]),
Nature = new parameterCalculator("Nature Deity","Domain",[],[]),
Order = new parameterCalculator("Order Deity","Domain",[],[]),

// Roles

General = new parameterCalculator("General","Personality",[],[]),
Politician = new parameterCalculator("Politician","Personality",[],[]),
FreeSpirit = new parameterCalculator("Free Spirit","Personality",[],[]),
King = new parameterCalculator("King","Personality",[],[]),
Mother = new parameterCalculator("Mother","Personality",[],[]),
Thinker = new parameterCalculator("Thinker","Personality",[],[]),
Harmonizer = new parameterCalculator("Harmonizer","Personality",[],[]),
Prince = new parameterCalculator("Prince","Personality",[],[]),
Enforcer = new parameterCalculator("Enforcer","Personality",[],[]),
Manipulator = new parameterCalculator("Manipulator","Personality",[],[]),
Trickster = new parameterCalculator("Trickster","Personality",[],[]),
Diplomat = new parameterCalculator("Diplomat","Personality",[],[]),
Protector = new parameterCalculator("Protector","Personality",[],[]),
Hunter = new parameterCalculator("Hunter","Personality",[],[]),

// Pantheons

Greek = new parameterCalculator("Greek","God",[],[]),
Chinese = new parameterCalculator("Chinese","God",[],[]),
African = new parameterCalculator("African","God",[],[]),
Egyptian = new parameterCalculator("Egyptian","God",[],[]),
Norse = new parameterCalculator("Norse","God",[],[]),
Maori = new parameterCalculator("Maori","God",[],[]),
Japanese = new parameterCalculator("Japanese","God",[],[]),
Aztec = new parameterCalculator("Aztec","God",[],[]),
Indian = new parameterCalculator("Indian","God",[],[]),
BogiMuzhchin = new parameterCalculator("Slavic","God",[],[]),
Celtic = new parameterCalculator("Celtic","God",[],[]),
Inca = new parameterCalculator("Inca","God",[],[]),


// Titans

Light = new parameterCalculator("Light","Titan",[],[]),
Abyss = new parameterCalculator("Abyss","Titan",[],[]),
Ocean = new parameterCalculator("Ocean","Titan",[],[]),
Order = new parameterCalculator("Order","Titan",[],[]),
World = new parameterCalculator("World","Titan",[],[]),
Fire = new parameterCalculator("Fire","Titan",[],[]),
SokuNoKumi = new parameterCalculator("Darkness","Titan",[],[]),
Sky = new parameterCalculator("Sky","Titan",[],[]),
Night = new parameterCalculator("Night","Titan",[],[]),
DeathTitan = new parameterCalculator("Death","Titan",[],[]),

// Mythborn

SummerCourt = new parameterCalculator("Summer Court","Otherworld",[],[]),
WinterCourt = new parameterCalculator("Winter Court","Otherworld",[],[]),
DarkForest = new parameterCalculator("Dark Forest","Otherworld",[],[]),
Shambhala = new parameterCalculator("Shambhala","Otherworld",[],[]),
JadeSea = new parameterCalculator("Jade Sea","Otherworld",[],[]),
Utopia = new parameterCalculator("Utopia","Otherworld",[],[]),

// Enlightened

Illuminati = new parameterCalculator("Illuminati","Enlightened",[],[]),
JadeFist = new parameterCalculator("Order of the Jade Fist","Enlightened",[],[]),
Cabal = new parameterCalculator("Cabal","Enlightened",[],[]),
Merlin = new parameterCalculator("Circle of Merlin","Enlightened",[],[]),


// Party Roles


Face = new parameterCalculator("Face","Role",[],[]),
Tank = new parameterCalculator("Tank","Role",[],[]),
DamageDealer = new parameterCalculator("DamageDealer","Role",[],[]),
SkillMonkey = new parameterCalculator("SkillMonkey","Role",[],[]),
SupportController = new parameterCalculator("SupportController","Role",[],[])


]
var secondOriginArray = [
 Tūmatauenga= new secondOrigin("Tūmatauenga","God of War and Subdueing ",Maori.name,Maori,[Forceful,Flashy,Clever],[War,Leader],[King,General]), 
 TaneMahuta= new secondOrigin("Tane Mahuta","God of War and Subdueing ",Maori.name,Maori,[Clever,Forceful,Careful],[Nature,Wisdom],[Harmonizer,Thinker]), 
 Tangaroa= new secondOrigin("Tangaroa","God of the Sea",Maori.name,Maori,[Careful,Forceful,Sneaky],[Water],[FreeSpirit,Harmonizer]), 
 Tawhirimatea= new secondOrigin("Tawhirimatea","Renegade God of weather, lightning and clouds",Maori.name,Maori,[Forceful,Flashy,Sneaky],[Sky],[FreeSpirit,General]), 
 Rehua= new secondOrigin("Rehua","God of Stars",Maori.name,Maori,[Careful,Clever,Sneaky],[Sky,Wisdom],[Thinker,FreeSpirit]), 
 Maui= new secondOrigin("Maui","God of Nobility and Cunning",Maori.name,Maori,[Clever,Flashy,Quick],[Wit,War],[FreeSpirit,Politician]), 
 HineNuiTePo= new secondOrigin("Hine-nui-te-po","Goddess of Night and Death",Maori.name,Maori,[Clever,Sneaky,Careful],[Death,Moon],[Thinker,Politician]), 
 Ruaumoko= new secondOrigin("Ruaumoko","God of Warmth, Earthquakes and Volcanoes",Maori.name,Maori,[Careful,Clever,Forceful],[Earth,Fire],[Harmonizer]), 
 Rongo= new secondOrigin("Rongo","God of Peace and Culture",Maori.name,Maori,[Clever,Sneaky,Careful],[Fertility,Wisdom],[Politician,Thinker]),
 HaumiaTiketike= new secondOrigin("Haumia-Tiketike","God of Wild Food",Maori.name,Maori,[Sneaky,Forceful,Careful],[Wit,Nature],[Hunter]),
 Mahuika= new secondOrigin("Mahuika","Goddess of Fire ",Maori.name,Maori,[Forceful,Flashy,Quick],[Fire],[FreeSpirit]),
 Amaterasu= new secondOrigin("Amaterasu","Goddess of the sun",Japanese.name,Japanese,[Clever,Flashy,Careful],[Sun,Leader],[Politician,Mother]),
 Hachiman= new secondOrigin("Hachiman","God of Swordfighting, Archery and Change",Japanese.name,Japanese,[Clever,Forceful,Quick],[War,Wisdom],[General,Enforcer]),
 Izanagi= new secondOrigin("Izanagi","Lord of the sky",Japanese.name,Japanese,[Careful,Quick,Sneaky],[Father,Sky],[FreeSpirit,Thinker]),
 Raiden= new secondOrigin("Raiden","Lord of thunder and lightning",Japanese.name,Japanese,[Flashy,Forceful,Quick],[Sky],[FreeSpirit]),
 Izanami= new secondOrigin("Izanami","Queen of the Underworld",Japanese.name,Japanese,[Clever,Careful,Sneaky],[Death,Earth],[Enforcer,Manipulator]),
 Ryujin= new secondOrigin("Ryujin","Dragon God of the Ocean Depths",Japanese.name,Japanese,[Forceful,Sneaky,Careful],[Water,Wit],[Thinker,King]),
 Susanoo= new secondOrigin("Susano-o","Lord of sea and storms",Japanese.name,Japanese,[Flashy,Forceful,Clever],[Water,Travel],[FreeSpirit,Hunter]),
 TsukiYomi= new secondOrigin("Tsuki-Yomi","God of the moon",Japanese.name,Japanese,[Clever,Sneaky,Careful],[Moon],[FreeSpirit]),
 Anansi= new secondOrigin("Anansi","Spider God of Tricks and Knowledge",African.name,African,[Clever,Sneaky,Careful],[Wit,Knowledge],[Trickster,FreeSpirit]),
 BaronSamedi= new secondOrigin("Baron Samedi","God of Death, Keeper of Guinee",African.name,African,[Flashy,Clever,Careful],[Death],[Trickster]),
 Damballa= new secondOrigin("Damballa","God of the Sky",African.name,African,[Flashy,Sneaky,Quick],[Fertility,Father],[FreeSpirit]),
 DeAllende= new secondOrigin("De-Allende","The Dreamweaver",African.name,African,[Clever,Careful,Sneaky],[Moon,Knowledge],[FreeSpirit]),
 Erzulie= new secondOrigin("Erzulie","Goddess of Love and Flowers",African.name,African,[Flashy,Forceful,Clever],[Love],[Harmonizer]),
 Kalfu= new secondOrigin("Kalfu","God of Darkness",African.name,African,[Sneaky,Careful,Clever],[Darkness,Travel],[Trickster]),
 Legba= new secondOrigin("Legba","God of Crossroads, Psychopomp",African.name,African,[Clever,Flashy,Careful],[Travel,Wisdom],[Diplomat]),
 Ogoun= new secondOrigin("Ogoun","God of Iron and Crafting",African.name,African,[Forceful,Flashy,Careful],[Crafting,War],[General]),
 Ellykha= new secondOrigin("Ellykha","Goddess of Spilt Blood",Aztec.name,Aztec,[Forceful,Flashy,Quick],[War],[Enforcer]),
 Huitzilopochtli= new secondOrigin("Huitzilopochtli","God of blood, war and the sun",Aztec.name,Aztec,[Forceful,Flashy,Clever],[War,Leader],[General]),
 Miclántecuhtli= new secondOrigin("Miclántecuhtli","God of the dead and spirits",Aztec.name,Aztec,[Careful,Clever,Sneaky],[Death],[Thinker]),
 Quetzalcoátl= new secondOrigin("Quetzalcoátl","God of beauty, creation and art",Aztec.name,Aztec,[Clever,Careful,Flashy],[Leader],[Harmonizer,Politician]),
 Tezcatlipoca= new secondOrigin("Tezcatlipoca","God of discord and destruction",Aztec.name,Aztec,[Clever,Sneaky,Forceful],[Moon,Darkness],[King]),
 Tlaloc= new secondOrigin("Tlaloc","God of rain and clouds",Aztec.name,Aztec,[Clever,Careful,Sneaky],[Sky,Wisdom],[FreeSpirit]),
 Tlazoltéotl= new secondOrigin("Tlazoltéotl","Goddess of filth",Aztec.name,Aztec,[Flashy,Careful,Clever],[Fertility,Love],[Harmonizer,Manipulator]),
 XipeTotec= new secondOrigin("Xipe Totec","God of maize and growth",Aztec.name,Aztec,[Clever,Sneaky,Forceful],[Fertility,Darkness],[Trickster]),
 Change= new secondOrigin("Chang’e","Goddess of the Moon ",Chinese.name,Chinese,[Careful,Clever,Sneaky],[Moon],[Diplomat]),
 Fuxi= new secondOrigin("Fuxi","Creator God and Muse of mankind",Chinese.name,Chinese,[Careful,Clever,Flashy],[Crafting],[Harmonizer]),
 Guanyin= new secondOrigin("Guanyin","Goddess of Diplomacy",Chinese.name,Chinese,[Clever,Flashy,Forceful],[Wisdom],[Diplomat]),
 GuanYu= new secondOrigin("Shangdi","Yellow Emperor, Overseer of Tiàn",Chinese.name,Chinese,[Careful,Forceful,Clever],[War,Leader],[Politician,General]),
 Houyi= new secondOrigin("Houyi","God of the Sun and Archery",Chinese.name,Chinese,[Quick,Flashy,Forceful],[Fire],[Enforcer]),
 Nezha= new secondOrigin("Nezha","God of Honor and Youth",Chinese.name,Chinese,[Flashy,Quick,Forceful],[Wit,Travel],[FreeSpirit]),
 Nuwa= new secondOrigin("Nuwa","Creator Goddess and Muse of mankind",Chinese.name,Chinese,[Careful,Forceful,Clever],[Moon,Wisdom],[Thinker]),
 Shennong= new secondOrigin("Shennong","God of Agriculture and Medicine",Chinese.name,Chinese,[Careful,Clever,Forceful],[Earth,Wisdom],[King]),
 SunWukong= new secondOrigin("Sun Wukong","Monkey King, God of Trickery and Strength",Chinese.name,Chinese,[Flashy,Quick,Clever],[Wit,Travel],[Prince,Trickster]),
 Xiwangmu= new secondOrigin("Xiwangmu","Queen-Mother of the West and Keeper of the Golden Orchard",Chinese.name,Chinese,[Careful,Clever,Forceful],[Wisdom,Justice],[Mother]),
 Yanluo= new secondOrigin("Yanluo","Overseer of the Dead and Keeper of Di Yu",Chinese.name,Chinese,[Careful,Clever,Sneaky],[Death],[Harmonizer]),
 Aengus= new secondOrigin("Aengus","God of Beauty and Youth ",Celtic.name,Celtic,[Flashy,Quick,Forceful],[Love,Wit],[Harmonizer]),
 Brigid= new secondOrigin("Brigid","Goddess of healers and smiths",Celtic.name,Celtic,[Clever,Careful,Forceful],[Wisdom],[Harmonizer]),
 Cernunnos= new secondOrigin("Cernunnos","God of Druidism and Nature",Celtic.name,Celtic,[Clever,Careful,Sneaky],[Nature],[Harmonizer,FreeSpirit]),
 Dagda= new secondOrigin("Dagda","Warrior and King of the Tuatha ",Celtic.name,Celtic,[Flashy,Forceful,Quick],[War,Leader],[General,King]),
 DianCécht= new secondOrigin("Dian Cécht","God of healing and craftsmanship",Celtic.name,Celtic,[Careful,Clever,Forceful],[Fertility,Crafting],[Thinker]),
 Lugh= new secondOrigin("Lugh","God of All Trades",Celtic.name,Celtic,[Clever,Sneaky,Quick],[Wit,War],[FreeSpirit,Trickster]),
 ManannanmacLir= new secondOrigin("Manannan mac Lir","God of the sea and ferryman to the Underworld",Celtic.name,Celtic,[Careful,Clever,Sneaky],[Water,Travel],[FreeSpirit]),
 Morrigan= new secondOrigin("The Morrigan","Goddess of violence, prophecy, and the Underworld",Celtic.name,Celtic,[Sneaky,Forceful,Clever],[Death,Wisdom],[Manipulator]),
 NianMairbh= new secondOrigin("Niamh Mairbh","God of Retribution",Celtic.name,Celtic,[Sneaky,Clever,Forceful],[Death,Darkness],[Manipulator,Enforcer]),
 Nuada= new secondOrigin("Nuada","Former King of the Tuatha, God of Charisma and Justice",Celtic.name,Celtic,[Flashy,Forceful,Clever],[Justice,Leader],[Enforcer,King]),
 Ogma= new secondOrigin("Ogma","God of Wisdom, Magic and Strength",Celtic.name,Celtic,[Careful,Clever,Quick],[Nature,Wisdom],[Thinker,Diplomat]),
 Zerris= new secondOrigin("Zerris","Machine-God of Technology",Celtic.name,Celtic,[Clever,Careful,Forceful],[Crafting,Fire],[Thinker]),
 Anubis= new secondOrigin("Anubis","God of Death and Judge of the Underworld ",Egyptian.name,Egyptian,[Clever,Careful,Forceful],[Death,Justice],[Enforcer]),
 Horus= new secondOrigin("Horus","God of Justice",Egyptian.name,Egyptian,[Clever,Forceful,Quick],[Justice,Leader],[Prince,Politician]),
 Hathor= new secondOrigin("Hathor","Goddess of Love, Fertility and Motherhood",Egyptian.name,Egyptian,[Careful,Flashy,Clever],[Fertility ,Sun],[Mother,Diplomat]),
 Isis= new secondOrigin("Isis","Goddess of Magic, Inventor of Heku",Egyptian.name,Egyptian,[Clever,Sneaky,Careful],[Wisdom,Wit],[Politician,Thinker]),
 Osiris= new secondOrigin("Osiris","Lord of the Underworld",Egyptian.name,Egyptian,[Clever,Flashy,Sneaky],[Death],[King]),
 AtumRe= new secondOrigin("Atum Re","God of the Sun",Egyptian.name,Egyptian,[Clever,Flashy,Forceful],[Father,Sun],[King]),
 Set= new secondOrigin("Set","God of Sky and Guardian of the Desert",Egyptian.name,Egyptian,[Clever,Sneaky,Forceful],[Sky],[Manipulator,Protector]),
 Sekhmet= new secondOrigin("Sekhmet","Goddess of War",Egyptian.name,Egyptian,[Forceful,Quick,Flashy],[War],[General,Hunter]),
 Bastet= new secondOrigin("Bastet","Keeper of Secrets",Egyptian.name,Egyptian,[Clever,Sneaky,Quick],[Wisdom],[Thinker,Protector]),
 Hapi= new secondOrigin("Hapi","God of Healing and Self-Sacrifice",Egyptian.name,Egyptian,[Flashy,Careful,Clever],[Fertility,Love],[Harmonizer,Protector]), 
 Khepri= new secondOrigin("Khepri","Goddess of Leadership",Egyptian.name,Egyptian,[Forceful,Clever,Sneaky],[War,Wit],[General,Enforcer]),
 Ptah= new secondOrigin("Ptah","God of Artistry",Egyptian.name,Egyptian,[Clever,Quick,Flashy],[Crafting],[Thinker,FreeSpirit]),
 Rain= new secondOrigin("Rain","Goddess of the Veil",Egyptian.name,Egyptian,[Careful,Clever,Forceful],[Death,Travel],[FreeSpirit,Protector]),
 Sobek= new secondOrigin("Sobek","God of Water and Retribution",Egyptian.name,Egyptian,[Careful,Forceful,Sneaky],[Water],[FreeSpirit,Hunter]),
 Thoth= new secondOrigin("Thoth","God of Knowledge",Egyptian.name,Egyptian,[Clever,Sneaky,Quick],[Wisdom],[Thinker]),
 Geb= new secondOrigin("Geb","God of the Earth",Egyptian.name,Egyptian,[Careful,Flashy,Clever],[Earth],[Protector]),
 Agni= new secondOrigin("Agni","God of FIre and Sacrifice",Indian.name,Indian,[Clever,Flashy,Careful],[Fire],[FreeSpirit]),
 Brahma= new secondOrigin("Brahma","God of Creation",Indian.name,Indian,[Clever,Careful,Sneaky],[Knowledge,Father],[Thinker]),
 Ganesha= new secondOrigin("Ganesha","God of good luck and Wisdom",Indian.name,Indian,[Clever,Forceful,Sneaky],[Travel,Wisdom],[Harmonizer,Protector]),
 Indra= new secondOrigin("Indra","God of war and weather",Indian.name,Indian,[Forceful,Clever,Flashy],[War,Leader],[King]),
 Kali= new secondOrigin("Kali","Goddess of annihilation",Indian.name,Indian,[Forceful,Flashy,Quick],[War,Darkness],[Enforcer]),
 Lakshmi= new secondOrigin("Lakshmi","Goddess of fortune",Indian.name,Indian,[Clever,Careful,Sneaky],[Wit],[FreeSpirit,Manipulator]),
 Parvati= new secondOrigin("Parvati","Goddess of feminity",Indian.name,Indian,[Clever,Sneaky,Careful],[Love,Fertility],[Diplomat,Mother]),
 Sarasvati= new secondOrigin("Sarasvati","Goddess of artists",Indian.name,Indian,[Flashy,Careful,Sneaky],[Crafting],[FreeSpirit]),
 Shiva= new secondOrigin("Shiva","The Destroyer",Indian.name,Indian,[Clever,Flashy,Forceful],[Order,War],[FreeSpirit,Thinker]),
 Surya= new secondOrigin("Surya","God of the sun",Indian.name,Indian,[Flashy,Forceful,Quick],[Sun],[FreeSpirit]),
 Vishnu= new secondOrigin("Vishnu","The Preserver",Indian.name,Indian,[Careful,Forceful,Clever],[Wisdom,Order],[Protector,Harmonizer]),
 Yama= new secondOrigin("Yama","Lord of the Dead",Indian.name,Indian,[Sneaky,Careful,Clever],[Death],[Enforcer,Thinker]),
 Aphrodite= new secondOrigin("Aphrodite","Goddess of love and beauty",Greek.name,Greek,[Flashy,Forceful,Careful],[Love],[Manipulator]),
 Apollo= new secondOrigin("Apollo","God of prophecy, the sun, and art",Greek.name,Greek,[Flashy,Careful,Clever],[Sun,Crafting],[Politician]),
 Archimedes= new secondOrigin("Archimedes","God of Logic",Greek.name,Greek,[Clever,Careful,Forceful],[Crafting,Knowledge],[Thinker]),
 Ares= new secondOrigin("Ares","God of War",Greek.name,Greek,[Forceful,Flashy,Careful],[War],[Enforcer]),
 Artemis= new secondOrigin("Artemis","Goddess of chastity, the moon, and hunting",Greek.name,Greek,[Careful,Sneaky,Quick],[Moon,War],[FreeSpirit]),
 Athena= new secondOrigin("Athena","Goddess of strategy and wisdom",Greek.name,Greek,[Clever,Careful,Forceful],[War,Wisdom],[General]),
 Demeter= new secondOrigin("Demeter","Goddess of Nature and Agriculture",Greek.name,Greek,[Flashy,Forceful,Clever],[Fertility],[Mother]),
 Dionysus= new secondOrigin("Dionysus","God of Wine, Friendship and Liberty",Greek.name,Greek,[Flashy,Careful,Clever],[Wit],[FreeSpirit,Harmonizer]),
 Gerald= new secondOrigin("Gerald","God of Rock 'n' Roll",Greek.name,Greek,[Flashy,Forceful,Quick],[Fire,War],[Enforcer]),
 Hades= new secondOrigin("Hades","Ruler of the Underworld",Greek.name,Greek,[Careful,Sneaky,Clever],[Death],[Politician,King]),
 Hephaestus= new secondOrigin("Hephaestus","God of the Forge and Invention",Greek.name,Greek,[Clever,Careful,Forceful],[Crafting,Fire],[Thinker]),
 Hera= new secondOrigin("Hera","Goddess of marriage and politics",Greek.name,Greek,[Forceful,Sneaky,Clever],[Leader,Fertility],[]),
 Herakles= new secondOrigin("Herakles","God of Strength",Greek.name,Greek,[Forceful,Flashy,Quick],[War],[Prince,Enforcer]),
 Hermes= new secondOrigin("Hermes","God of thieves, merchants, and tricksters",Greek.name,Greek,[Quick,Clever,Sneaky],[Travel,Wit],[FreeSpirit]),
 Lyra= new secondOrigin("Lyra","Goddess of Freedom",Greek.name,Greek,[Clever,Quick,Sneaky],[Sky,Wit],[FreeSpirit]),
 Poseidon= new secondOrigin("Poseidon","God of the sea",Greek.name,Greek,[Flashy,Forceful,Careful],[Water],[King,FreeSpirit]),
 Zeus= new secondOrigin("Zeus","God of Leadership, Thunder, Sky, and Power",Greek.name,Greek,[Flashy,Forceful,Clever],[Leader,Sky],[King,Politician]),
 Baldur= new secondOrigin("Baldur","God of Light, Beauty, Love and Happiness",Norse.name,Norse,[Flashy,Careful,Quick],[Love,Fertility],[FreeSpirit,Prince]),
 Freya= new secondOrigin("Freya","Goddess of the Gold, and War",Norse.name,Norse,[Clever,Forceful,Flashy],[War,Crafting],[Diplomat,Manipulator]),
 Freyr= new secondOrigin("Freyr","God of Farming, Weather and Fertility",Norse.name,Norse,[Careful,Clever,Sneaky],[Fertility],[Harmonizer]),
 Frigg= new secondOrigin("Frigg","Queen of the Gods",Norse.name,Norse,[Clever,Sneaky,Careful],[Leader],[Politician,King]),
 Heimdall= new secondOrigin("Heimdall","Protector of Asgard",Norse.name,Norse,[Sneaky,Careful,Clever],[Justice],[Protector,Manipulator]),
 Hel= new secondOrigin("Hel","Goddess of the Dead, Overseer of Helheim",Norse.name,Norse,[Clever,Forceful,Sneaky],[Death],[Enforcer]),
 Odin= new secondOrigin("Odin","King of Asgard, God of Magic, Wisdom, and Prophecy",Norse.name,Norse,[Clever,Sneaky,Forceful],[Leader,Wisdom],[King,Manipulator]),
 Sif= new secondOrigin("Sif","Goddess of marriage",Norse.name,Norse,[Careful,Clever,Forceful],[Love,Fertility],[Harmonizer]),
 Thor= new secondOrigin("Thor","God of Thunder and War",Norse.name,Norse,[Forceful,Flashy,Quick],[War,Sky],[FreeSpirit,Protector]),
 Tyr= new secondOrigin("Tyr","God of Victory",Norse.name,Norse,[Forceful,Clever,Quick],[Justice,War],[Enforcer,General]),
 Vidar= new secondOrigin("Vidar","God of Vengeance",Norse.name,Norse,[Forceful,Clever,Sneaky],[Justice,Darkness],[Enforcer,Protector]),
 Loki= new secondOrigin("Loki","Trickster God",Norse.name,Norse,[Clever,Sneaky,Quick],[Wit],[Manipulator,Trickster]),
 Rod= new secondOrigin("Rod","Great Creator, God of Birth",BogiMuzhchin.name,BogiMuzhchin,[Careful,Sneaky,Clever],[Father],[FreeSpirit]),
 Lada= new secondOrigin("Lada","Goddess of Summer, Love, Marriage and Beauty",BogiMuzhchin.name,BogiMuzhchin,[Clever,Careful,Flashy],[Love ,Sun],[Mother,Diplomat]),
 Perun= new secondOrigin("Perun","God of Sky, Thunder and Lightning",BogiMuzhchin.name,BogiMuzhchin,[Forceful,Flashy,Clever],[Sky],[King,Protector]),
 Dodola= new secondOrigin("Dodola","Goddess of Rain",BogiMuzhchin.name,BogiMuzhchin,[Careful,Sneaky,Clever],[Water ,Nature],[Mother,Protector]),
 Svarog= new secondOrigin("Svarog","God of Fire and Smithing",BogiMuzhchin.name,BogiMuzhchin,[Clever,Careful,Sneaky],[Fire ,Crafting],[FreeSpirit,Thinker]),
 Dazbog= new secondOrigin("Dazbog","God of Sun and Wealth",BogiMuzhchin.name,BogiMuzhchin,[Flashy,Quick,Forceful],[Sun],[Harmonizer,FreeSpirit]),
 Svetovid= new secondOrigin("Svetovid","God of Fertility and Abundance",BogiMuzhchin.name,BogiMuzhchin,[Clever,Sneaky,Careful],[Fertility ,Nature],[FreeSpirit,Harmonizer]),
 Veles= new secondOrigin("Veles","God of Earth, Underworld and Trickery",BogiMuzhchin.name,BogiMuzhchin,[Clever,Sneaky,Quick],[Earth ,Death],[Trickster,FreeSpirit]),
 Dziewona= new secondOrigin("Dziewona","Goddess of Hunt and the Moon",BogiMuzhchin.name,BogiMuzhchin,[Clever,Quick,Careful],[Wisdom,Moon],[Mother,Harmonizer]),
 Belobog= new secondOrigin("Belobog","God of Good Fortune",BogiMuzhchin.name,BogiMuzhchin,[Forceful,Quick,Flashy],[Order ,Sun],[Enforcer,Harmonizer]),
 Chernobog= new secondOrigin("Chernobog","God of Misfortune",BogiMuzhchin.name,BogiMuzhchin,[Clever,Sneaky,Careful],[Order ,Darkness],[Thinker,Enforcer]),
 Hors= new secondOrigin("Hors","God of Medicine and Arts",BogiMuzhchin.name,BogiMuzhchin,[Careful,Clever,Flashy],[Nature ,Knowledge],[Harmonizer,Protector]),
 Jarilo= new secondOrigin("Jarilo","God of War and Spring",BogiMuzhchin.name,BogiMuzhchin,[Careful,Quick,Forceful],[War,Sun],[Protector,Prince]),
 Morana= new secondOrigin("Morana","Goddess of Harvest, Winter and Death",BogiMuzhchin.name,BogiMuzhchin,[Careful,Forceful,Quick],[Death,Water],[Enforcer,Harmonizer]),
 Atlas= new secondOrigin("Atlas","Titan of Gravity",Order.name,Order,[Careful,Forceful,Flashy],[Order,Earth],[FreeSpirit,Protector]),
 Coeus= new secondOrigin("Coeus","Titan of Knowledge",Order.name,Order,[Clever,Sneaky,Careful],[Order,Knowledge],[Thinker,Manipulator]),
 Kronus= new secondOrigin("Kronus","Titan of Control",Order.name,Order,[Forceful,Clever,Careful],[Leader,Order],[King,General]),
 Themis= new secondOrigin("Themis","Titan of Law",Order.name,Order,[Careful,Clever,Forceful],[Order,Justice],[Thinker,Diplomat]),
 Chronos= new secondOrigin("Chronos","Titan of Time",Order.name,Order,[Careful,Clever,Forceful],[Order],[FreeSpirit,Thinker]),
 Aten= new secondOrigin("Aten","Titan of Brightness",Light.name,Light,[Clever,Forceful,Flashy],[Sun],[King,Manipulator]),
 Helios= new secondOrigin("Helios","Titan of the Sun",Light.name,Light,[Clever,Flashy,Quick],[Sun],[FreeSpirit]),
 Hemera= new secondOrigin("Hemera","Titan of Day",Light.name,Light,[Careful,Flashy,Clever],[Sun,Fertility],[Harmonizer,Mother]),
 Hyperion= new secondOrigin("Hyperion","Titan of Glory",Light.name,Light,[Flashy,Forceful,Careful],[Leader,Sun],[General,King]),
 Zhulong= new secondOrigin("Zhulong","Titan of Illumination",Light.name,Light,[Clever,Careful,Flashy],[Wisdom,Sun],[Thinker]),
 Abzu= new secondOrigin("Abzu","Titan of Abyss",Abyss.name,Abyss,[Careful,Sneaky,Forceful],[Water,Darkness],[King,Manipulator]),
 Tiamat= new secondOrigin("Tiamat","Titan of Life",Abyss.name,Abyss,[Clever,Careful,Sneaky],[Water,Fertility],[Mother]),
 BeastBelow= new secondOrigin("Beast Below","Titan of Peril",Abyss.name,Abyss,[Forceful,Sneaky,Careful],[Water,Darkness],[Hunter]),
 Sedna= new secondOrigin("Sedna","Titan of the Providing Sea",Ocean.name,Ocean,[Clever,Careful,Sneaky],[Water,Fertility],[Harmonizer]),
 Charybdis= new secondOrigin("Charybdis","Titan of Drowning",Ocean.name,Ocean,[Forceful,Flashy,Sneaky],[Water,Death],[Hunter,Manipulator]),
 Yam= new secondOrigin("Yam","Titan of the Raging Sea",Ocean.name,Ocean,[Forceful,Flashy,Clever],[Leader,Water],[King,Manipulator]),
 Heget= new secondOrigin("Heget","Titan of Fertility",Ocean.name,Ocean,[Forceful,Clever,Sneaky],[Water,Fertility],[Protector]),
 DisPater= new secondOrigin("Dis Pater","Titan of Abundance",World.name,World,[Clever,Flashy,Careful],[Earth,Crafting],[Harmonizer]),
 Gaia= new secondOrigin("Gaia","Titan of Life",World.name,World,[Forceful,Careful,Flashy],[Fertility,Nature],[Mother]),
 GreenMan= new secondOrigin("Green Man","Titan of Nature",World.name,World,[Sneaky,Careful,Flashy],[Nature],[Harmonizer,FreeSpirit]),
 CromCruach= new secondOrigin("Crom Cruach","Titan of Decay",World.name,World,[Forceful,Sneaky,Quick],[Earth,Death],[General,Enforcer]),
 Ourea= new secondOrigin("Ourea","Titan of Mountains",World.name,World,[Careful,Clever,Forceful],[Earth],[Thinker]),
 Kur= new secondOrigin("Kur","Titan of Expanse",World.name,World,[Forceful,Careful,Clever],[Earth,Travel],[FreeSpirit]),
 Surtr= new secondOrigin("Surtr","Titan of Destruction",Fire.name,Fire,[Forceful,Flashy,Quick],[Fire],[General,King]),
 Prometheus= new secondOrigin("Prometheus","Titan of Invention",Fire.name,Fire,[Clever,Quick,Flashy],[Fire,Crafting],[Thinker,FreeSpirit]),
 Kagutsuchi= new secondOrigin("Kagutsuchi","Titan of Lava",Fire.name,Fire,[Flashy,Forceful,Quick],[Fire,Earth],[Protector]),
 Nemesis= new secondOrigin("Nemesis","Titan of Divine Retribution",Fire.name,Fire,[Forceful,Careful,Flashy],[Fire,Justice],[Enforcer]),
 Vrtra= new secondOrigin("Vrtra","Titan of Drought",Fire.name,Fire,[Flashy,Careful,Clever],[Fire,Death],[Manipulator]),
 Xiuhtecuhtli= new secondOrigin("Xiuhtecuhtli","Titan of Life",Fire.name,Fire,[Flashy,Quick,Clever],[Fire,Fertility],[Harmonizer]),
 Auahituroa= new secondOrigin("Auahituroa","Titan of Stellar Fire",Fire.name,Fire,[Flashy,Forceful,Quick],[Fire,Sky],[FreeSpirit])

]

function godRecommender(){


if(
document.getElementById("origins").options[document.getElementById("origins").selectedIndex].value != "noPreference" ||
document.getElementById("approaches").options[document.getElementById("approaches").selectedIndex].value != "noPreference" ||
document.getElementById("domains").options[document.getElementById("domains").selectedIndex].value != "noPreference" ||
document.getElementById("personality").options[document.getElementById("personality").selectedIndex].value != "noPreference"){

// Filters the Origins

var newSecondOriginArray = secondOriginArray

if(document.getElementById("origins").options[document.getElementById("origins").selectedIndex].value != "noPreference"){
if(document.getElementById("origins").options[document.getElementById("origins").selectedIndex].value === "Gods"){newSecondOriginArray = newSecondOriginArray.filter(function (entry) { return entry.originVar.type ===  "God"})}
else if(document.getElementById("origins").options[document.getElementById("origins").selectedIndex].value === "Titans"){newSecondOriginArray = newSecondOriginArray.filter(function (entry) { return entry.originVar.type ===  "Titan"})}
else if(document.getElementById("origins").options[document.getElementById("origins").selectedIndex].value === "Otherworlds"){newSecondOriginArray = newSecondOriginArray.filter(function (entry) { return entry.originVar.type === "Otherworld"})}
else if(document.getElementById("origins").options[document.getElementById("origins").selectedIndex].value === "SecretSocieties"){newSecondOriginArray = newSecondOriginArray.filter(function (entry) { return entry.originVar.type === "Enlightened" })}
else{newSecondOriginArray = newSecondOriginArray.filter(function (entry) { return entry.originVar.name === document.getElementById("origins").options[document.getElementById("origins").selectedIndex].value; })}
}
// Filter the Approaches
if(document.getElementById("approaches").options[document.getElementById("approaches").selectedIndex].value != "noPreference"){newSecondOriginArray = newSecondOriginArray.filter(function (entry) {
return entry.approaches[0].name === document.getElementById("approaches").options[document.getElementById("approaches").selectedIndex].value || entry.approaches[1].name === document.getElementById("approaches").options[document.getElementById("approaches").selectedIndex].value || entry.approaches[2].name === document.getElementById("approaches").options[document.getElementById("approaches").selectedIndex].value
})}

// Filters the Domains
if(document.getElementById("domains").options[document.getElementById("domains").selectedIndex].value != "noPreference"){newSecondOriginArray = newSecondOriginArray.filter(function (entry) {
if(entry.domains.length === 1){return entry.domains[0].name === document.getElementById("domains").options[document.getElementById("domains").selectedIndex].value; }
if(entry.domains.length === 2){return entry.domains[0].name === document.getElementById("domains").options[document.getElementById("domains").selectedIndex].value || entry.domains[1].name === document.getElementById("domains").options[document.getElementById("domains").selectedIndex].value; }
})}

// Filter the Personalities
if(document.getElementById("personality").options[document.getElementById("personality").selectedIndex].value != "noPreference"){newSecondOriginArray = newSecondOriginArray.filter(function (entry) {
if(entry.roles.length === 1){return entry.roles[0].name === document.getElementById("personality").options[document.getElementById("personality").selectedIndex].value; }
if(entry.roles.length === 2){return entry.roles[0].name === document.getElementById("personality").options[document.getElementById("personality").selectedIndex].value || entry.roles[1].name === document.getElementById("personality").options[document.getElementById("personality").selectedIndex].value; }
})}

godCounter = 0
if(newSecondOriginArray.length === 0){document.getElementById("noMatch").innerHTML = "No Match Found !"}
if(newSecondOriginArray.length != 0){document.getElementById("noMatch").innerHTML = " Click an Origin to check the recommended Legendary Abilities !"}
document.getElementById("hoverer").innerHTML = "Hover over an Origin for extra information !"


if(newSecondOriginArray.length % 3 === 1){newSecondOriginArray.push( Default= new secondOrigin(""))}
else if(newSecondOriginArray.length % 3 === 2){newSecondOriginArray.push( Default= new secondOrigin(""));newSecondOriginArray.push( Default= new secondOrigin(""))}

var table = document.getElementById("Table");
	table.innerHTML = "";
	 
	 for(i=2;i<newSecondOriginArray.length+3;i+=3){
godCounter+=1
 if(godCounter <= 10){

var row = table.insertRow(-1);

var cell1 = row.insertCell(0);
var cell2 = row.insertCell(1);
var cell3 = row.insertCell(2);
var cell4 = row.insertCell(3);
var cell5 = row.insertCell(4);
var cell6 = row.insertCell(5);


cell1.id = i.toString()
cell3.id = i.toString()
cell5.id = i.toString()

if(newSecondOriginArray[i-2]){cell1.innerHTML = newSecondOriginArray[i-2].name;cell1.title = newSecondOriginArray[i-2].originString + " " + newSecondOriginArray[i-2].description}
if(newSecondOriginArray[i-2] && newSecondOriginArray[i-2].name.length !=0){cell2.innerHTML = '<a href="http://scionprimarchs.wikia.com/' + newSecondOriginArray[i-2].name + '"  target="_blank">Link</a>'}
if(newSecondOriginArray[i-1]){cell3.innerHTML = newSecondOriginArray[i-1].name;cell3.title = newSecondOriginArray[i-1].originString + " " + newSecondOriginArray[i-1].description}
if(newSecondOriginArray[i-1] && newSecondOriginArray[i-1].name.length !=0){cell4.innerHTML = '<a href="http://scionprimarchs.wikia.com/' + newSecondOriginArray[i-1].name + '"  target="_blank">Link</a>'}
if(newSecondOriginArray[i]){cell5.innerHTML = newSecondOriginArray[i].name;cell5.title = newSecondOriginArray[i].originString + " " + newSecondOriginArray[i].description}
if(newSecondOriginArray[i] && newSecondOriginArray[i].name.length !=0){cell6.innerHTML = '<a href="http://scionprimarchs.wikia.com/' + newSecondOriginArray[i].name + '"  target="_blank">Link</a>'}

cell1.onclick = function() { for(i=2;i<document.getElementById("Table").rows.length*3;i+=3){
if(this.id === i.toString()){ChosenGod = newSecondOriginArray[i-2].name}}LegendaryMakerTotal()}
cell3.onclick = function() { for(i=2;i<document.getElementById("Table").rows.length*3;i+=3){
if(this.id === i.toString()){ChosenGod = newSecondOriginArray[i-1].name}}LegendaryMakerTotal()}
cell5.onclick = function() { for(i=2;i<document.getElementById("Table").rows.length*3;i+=3){
if(this.id === i.toString()){ChosenGod = newSecondOriginArray[i].name}}LegendaryMakerTotal()}


	 }
}}
}

function exampleLegendaryMaker(){

Total = new parameterCalculator("Total","Default",[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0])

  counter = 0
  for(i=0;i<newAbilitiesArray.length;i++){
	Total.legendaries[i] += godFound.originVar.legendaries[i]/2 + (godFound.approaches[0].legendaries[i]*3 + godFound.approaches[1].legendaries[i]*2 + godFound.approaches[2].legendaries[i])/12
	if(godFound.domains.length === 1){Total.legendaries[i] += godFound.domains[0].legendaries[i]/2}
	if(godFound.domains.length === 2){Total.legendaries[i] += (godFound.domains[0].legendaries[i] + godFound.domains[1].legendaries[i])/4}
	if(godFound.roles.length === 1){Total.legendaries[i] += godFound.roles[0].legendaries[i]/2}
	if(godFound.roles.length === 2){Total.legendaries[i] += (godFound.roles[0].legendaries[i] + godFound.roles[1].legendaries[i])/4}

	Total.legendaries[i]+=Math.floor((roleFound.legendaries[i]/20*6+roleFound2.legendaries[i]/20*4)) 
} 	


  counter1 = 0
  counter2 = 0

  for(i=0;i<skillsArray.length;i++){
	Total.skills[i] += godFound.originVar.skills[i]/2 + (godFound.approaches[0].skills[i]*3 + godFound.approaches[1].skills[i]*2 + godFound.approaches[2].skills[i])/12
	if(godFound.domains.length === 1){Total.skills[i] += godFound.domains[0].skills[i]/2}
	if(godFound.domains.length === 2){Total.skills[i] += (godFound.domains[0].skills[i] + godFound.domains[1].skills[i])/4}
	if(godFound.roles.length === 1){Total.skills[i] += godFound.roles[0].skills[i]/2}
	if(godFound.roles.length === 2){Total.skills[i] += (godFound.roles[0].skills[i] + godFound.roles[1].skills[i])/4}

	Total.skills[i]+=Math.floor((roleFound.skills[i]/20*6+roleFound2.skills[i]/20*4)) 
} 	


function adder(value){
{for(i=0;i<newAbilitiesArray.length;i++){if(Math.round(Total.legendaries[i])==value && counter1<=9){ legendariesFound.push([newAbilitiesArray[i].name + "\n",newAbilitiesArray[i].description]); counter1+=1}
}}
{for(i=0;i<skillsArray.length;i++){if(Math.round(Total.skills[i])==value && counter2<=7){ skillsFound.push([skillsArray[i].name +  "\n",skillsArray[i].description]); counter2+=1}
}}
}
adder(9);adder(8);adder(7);adder(6);adder(5);adder(4);adder(3);adder(2);adder(1);adder(0);adder(-1);adder(-2);adder(-3);adder(-4);adder(-5);adder(-6);adder(-7);

for(i=0;i<9;i++){document.getElementById("LegendaryFound" + (i+1)).innerHTML = legendariesFound[i][0]}
for(i=0;i<9;i++){document.getElementById("LegendaryFound" + (i+1)).title = legendariesFound[i][1]}

for(i=0;i<7;i++){document.getElementById("SkillFound" + (i+1)).innerHTML = skillsFound[i][0]}
for(i=0;i<7;i++){document.getElementById("SkillFound" + (i+1)).title = skillsFound[i][1]}


}

function LegendaryMakerTotal(){
	legendariesFound = []
	skillsFound = []
  godFound = secondOriginArray.filter(function (entry) { return entry.name === ChosenGod; })[0]
  roleFound = rolesChoiceArray.filter(function (entry) { return entry.name === ChosenFirstRole; })[0]
  roleFound2 = rolesChoiceArray.filter(function (entry) { return entry.name === ChosenSecondRole; })[0]
  wyrdbornFound = secondOriginArray.filter(function (entry) { return entry.name === ChosenWyrdborn; })[0]  
exampleLegendaryMaker()  
document.getElementById("hoverer2").innerHTML = "Hover over a Legendary Ability or Skill for extra information !"
}


function addOption(selectChoice) {
 	if(document.getElementById("continent").value === "God"){newOriginArray = parametersArray.filter(function (entry) { return entry.type === "God" })}
	if(document.getElementById("continent").value === "Otherworld"){newOriginArray = parametersArray.filter(function (entry) { return entry.type === "Otherworld" })}
	if(document.getElementById("continent").value === "Titan"){newOriginArray = parametersArray.filter(function (entry) { return entry.type === "Titan" })}
	if(document.getElementById("continent").value === "Enlightened"){newOriginArray = parametersArray.filter(function (entry) { return entry.type === "Enlightened" })}


for (j = 0; j < 100; j++) {
  selectChoice.options[0] = null;
}	
for (i = 0; i < newOriginArray.length; i++) {
    var x = selectChoice;
    var option = document.createElement("option");
    option.text = newOriginArray[i].name;
    option.value = newOriginArray[i].name;
   x.add(option);
}
}

function addOriginOption(selectChoice) {

for (j = 0; j < 100; j++) {
  selectChoice.options[0] = null;
}	 
for (i = 0; i < secondOriginArray.length; i++) {
if(document.getElementById("OriginSelect").value === secondOriginArray[i].originString){	
    var x = selectChoice;
    var option = document.createElement("option");
    option.text = secondOriginArray[i].name;
    option.value = secondOriginArray[i].name;
   x.add(option);
}}
}


function lengthChecker(){
	length = ""
for(i=0;i<secondOriginArray.length;i++){
length+= secondOriginArray[i].name + ": " + secondOriginArray[i].legendaries.length + "\n"
}
	alert(length)
}
function addAnAbilityMaker(){
abilityName = prompt("What is the Name of this Ability ?")
variableName = abilityName.replace(/\s/g, '');
newLegendary =	[]
for(i=0;i<parametersArray.length;i++){
newLegendary.push(prompt(parametersArray[i].name + " - " + abilityName))
}
alert(variableName + " = new LegendaryAbility(\"" + abilityName + "\",[" + newLegendary + "])")
}
function addAnAbility(){
	newAbilitiesArray = [
DruidismGreenDruid = new LegendaryAbility("Green Druid","- Summon an Ent to aid you in battle\n- Entangle enemies with roots.",[1,2,0,1,0,-1,-1,2,-1,0,2,-2,-2,1,0,1,-2,-2,2,-1,0,1,2,1,1,4,0,-2,-3,3,-2,1,1,3,-2,-2,-1,-1,1,2,1,-1,1,2,0,1,3,3,1,0,3,4,1,-4,-3,-4,-4,1,-3,-4,-2,-3,-4,4,4,4,1,2,-1,-2,0,1,4,2,2,-1,3,3]),
DruidismRunicDruid = new LegendaryAbility("Runic Druid","- Create a ward that warns you when something comes past it.\n- Animate rocks into a golem to fight for you.",[2,2,0,1,-2,-1,1,2,0,-2,-2,-3,-1,-2,-2,1,-1,0,2,4,-1,-1,2,-1,3,1,3,0,-1,-2,2,0,1,0,-1,-2,-2,-3,2,4,1,3,1,-2,3,3,2,1,-1,-2,2,3,1,0,-1,0,4,2,1,0,-1,0,-2,1,2,-1,0,1,3,1,3,2,4,-2,3,0,4,2]),
DruidismFeySorcerySummer = new LegendaryAbility("Fey Sorcery - Summer","- Send a scorching ray of heat\n- Make yourself irresistibly attractive.",[-2,0,3,3,1,-3,-2,-1,-1,0,3,1,-1,0,1,0,-4,3,2,-2,-4,4,0,-3,1,3,-1,-2,2,2,0,1,0,3,1,2,0,-1,1,2,1,-2,-2,4,2,0,3,2,3,2,0,2,3,-1,-3,-4,-3,1,1,-4,-2,-4,-4,6,-4,0,2,1,0,-2,1,-1,2,4,2,2,3,2]),
DruidismFeySorceryWinter = new LegendaryAbility("Fey Sorcery - Winter","- Raise a blizzard.\n- Create an illusion of yourself.",[2,3,0,1,1,3,-1,2,0,-3,-4,-2,2,2,1,2,2,-3,-1,-2,2,-4,1,3,1,2,0,-1,1,2,0,-2,1,-1,-2,1,3,3,0,1,2,-2,-1,-3,-2,4,-4,-1,-3,-3,3,2,-3,-4,-1,-1,-4,-2,-4,1,0,2,0,-4,4,2,-1,0,-1,1,-1,2,3,4,2,3,3,1]),
DruidismTechnodruidism = new LegendaryAbility("Technodruidism","- Manipulate electrical currents.\n- Take remote control of a computer system.",[1,3,1,0,2,1,-2,1,-2,-3,1,-2,-1,-2,-3,3,-1,1,2,0,0,-1,2,-1,4,2,-2,-2,-1,2,-3,-3,3,0,-1,0,-1,2,-1,-1,0,-1,0,1,1,1,-4,-3,1,-1,2,3,-4,-4,-4,-4,-4,0,0,-4,-2,-3,-4,1,1,-2,0,1,6,3,0,2,1,-1,2,2,4,1]),
HematurgyYahuar = new LegendaryAbility("Yahuar","- Raise a Bone Shield to protect your allies.\n- Heal your allies.",[1,0,1,1,-1,-3,3,1,1,1,2,2,-1,1,0,-1,1,2,0,2,0,2,0,0,-1,-2,1,2,0,-2,2,2,0,2,1,3,1,-1,1,4,2,-2,-1,1,0,2,3,0,3,-1,-1,1,4,-3,-1,-2,-2,-3,0,-2,-3,-3,1,1,-1,0,1,0,-2,1,3,3,-1,-2,4,0,-1,3]),
HematurgyItztli = new LegendaryAbility("Itztli","- Desecrate a sacred location.\n- Sacrifice an enemy for more power.",[-1,1,2,3,1,-1,3,1,2,0,1,2,0,1,1,1,3,3,1,2,0,4,0,1,-1,0,1,2,2,-2,3,1,-1,-1,2,4,2,1,0,2,4,-1,-1,1,0,1,1,-2,4,1,0,1,3,0,1,0,2,2,3,1,0,-1,2,3,1,1,2,2,0,3,2,4,-2,-2,1,4,2,0]),
InvokationDeathNecromancy = new LegendaryAbility("Death - Necromancy","- Raise the dead.\n- Consume Souls to gain power.",[1,3,0,4,1,-1,1,2,0,-2,-3,-3,3,2,0,1,4,-1,1,-1,0,-1,1,2,0,-2,-1,1,0,-2,1,-1,0,-3,0,2,2,0,-1,2,1,1,2,3,3,1,0,0,1,-1,1,1,0,-1,4,2,-1,-2,0,2,1,2,6,-2,2,3,1,0,-2,1,2,4,1,-2,1,3,1,2]),
InvokationDeathShamanism = new LegendaryAbility("Death - Shamanism","- Gain the advice of an ancient wise spirit.\n- Tap into the power of a sanctified place.",[2,3,0,-2,0,1,-1,3,0,-1,-2,-2,4,3,1,1,4,1,2,2,2,0,1,2,-2,-2,1,1,0,1,0,1,2,4,0,-1,-2,0,3,3,-1,2,3,4,2,0,3,2,0,3,2,3,2,-4,-3,-1,-2,-2,-3,-4,-4,0,2,-2,1,1,2,2,0,0,3,2,1,2,1,0,4,3]),
InvokationDeathSoulbinding = new LegendaryAbility("Death - Soulbinding","- Infuse Souls into your creations to increase their power\n- Exploit the power of a magical object.",[2,3,0,3,-1,1,1,1,1,-1,-3,-2,1,-1,-1,2,3,1,2,1,1,-1,2,2,4,-2,2,1,-1,-3,0,-2,1,-2,-1,0,3,2,0,3,-1,0,3,1,3,0,1,2,2,3,0,2,0,-3,2,1,2,1,3,2,0,2,4,-2,1,-1,2,2,3,4,3,3,2,-2,2,2,4,3]),
InvokationDeathDestruction = new LegendaryAbility("Death - Destruction","- Send beams of pure Death\n- Crumble a wall to dust.",[-2,-2,3,4,2,-2,2,0,0,-2,-3,-2,2,2,1,-1,3,1,1,-1,1,-2,0,3,-1,-2,0,1,0,-1,0,-2,-1,-3,-1,3,2,-1,0,2,2,2,2,1,2,0,-1,2,3,1,0,1,0,-3,3,1,1,2,2,3,1,3,4,-3,3,3,3,2,0,1,2,4,-1,-3,0,4,1,-2]),
InvokationDeathHorror = new LegendaryAbility("Death - Horror","- Terrify enemies.\n- Turn ghosts into insane wraiths.",[1,2,3,3,1,2,1,0,1,-2,-3,-1,1,2,2,-1,2,2,1,-1,1,-3,-1,2,0,-1,-2,2,1,-1,1,-2,-2,-2,-1,2,3,2,1,0,2,0,1,1,1,2,-2,2,3,-1,1,1,0,-1,3,2,-1,1,2,3,1,4,4,-3,3,3,2,0,-1,1,0,4,-1,4,2,-1,1,4]),
MentalismChwalRider = new LegendaryAbility("Chwal - Rider","- See through the eyes on an unsuspecting individual.\n- Mark and find individuals.",[2,2,-1,-1,0,3,-1,0,0,1,0,-1,2,2,1,3,1,-1,0,2,3,0,2,1,0,-1,0,-2,1,1,-1,0,0,1,-1,-2,3,4,2,0,1,-2,1,4,1,-2,1,1,-1,-1,0,0,-1,2,2,1,-1,-1,-2,3,1,4,1,2,3,0,3,1,2,4,1,4,-1,1,-2,-3,4,2]),
MentalismChwalPuppeteer = new LegendaryAbility("Chwal - Puppeteer","- Control an individual’s actions.\n- Stop an enemy mid-strike.",[1,2,-1,3,1,3,-2,0,2,0,0,1,2,2,0,2,3,0,1,0,3,-1,2,2,0,-1,1,0,4,1,2,0,1,2,0,1,4,2,2,-1,1,1,1,4,2,-1,2,1,2,0,-1,0,1,4,2,1,2,3,0,4,0,3,3,2,3,3,3,3,2,4,1,3,2,1,-2,-3,2,4]),
MentalismHekuSoothe = new LegendaryAbility("Mentalism - Soothe","- Calm a crowd down.\n-  Bow an animal to your will.",[2,1,2,1,0,2,-2,2,2,0,1,2,1,2,3,0,2,0,2,3,3,0,1,0,-1,1,3,1,2,2,2,3,1,4,0,-1,1,1,4,3,0,2,4,1,4,0,1,3,0,4,1,1,2,4,-2,2,3,1,1,3,2,3,3,2,0,1,3,2,0,0,3,2,3,4,2,-3,1,2]),
MentalismHekuRiot = new LegendaryAbility("Mentalism - Riot","- Create an angry mob.\n- Make someone fall in love.",[1,2,2,3,1,2,2,1,2,1,1,3,1,2,2,1,2,3,2,2,3,3,-1,2,0,2,0,3,2,2,2,2,-2,2,-1,0,3,2,1,2,2,0,0,1,3,2,2,0,3,-1,1,1,1,3,2,1,-1,2,3,3,1,3,2,3,-1,1,3,2,2,0,2,2,1,4,-2,0,3,1]),
MentalismIllusion = new LegendaryAbility("Illusion","- Create fake copies of yourself\n- Disguise your footsteps.",[2,2,-1,-1,1,3,-2,0,1,-1,-1,4,1,2,1,3,0,-1,-2,-2,4,2,1,4,-2,-1,-2,-2,3,1,1,-1,-1,2,1,-2,4,4,2,1,2,3,2,3,1,0,-1,2,0,4,-1,1,-1,4,2,1,0,0,-1,4,1,4,2,4,4,1,1,0,0,3,2,4,1,4,2,-1,1,4]),
WyrdseeingMystery = new LegendaryAbility("Mystery","- Reveal information hidden in the tangles of Fate.\n- Detect Fatebindings between two targets.",[2,1,0,-1,-1,1,-1,4,2,-1,-2,1,1,3,2,2,0,2,-1,3,4,2,4,1,0,1,2,1,1,3,1,0,3,2,-1,-2,1,0,2,2,2,1,4,2,3,1,2,3,0,2,1,4,1,2,4,3,2,1,1,3,3,2,2,2,2,2,3,4,2,2,3,1,4,-1,-1,-2,4,2]),
WyrdseeingProphecy = new LegendaryAbility("Prophecy","- Sense an attack or ambush coming.\n- Decipher the future of an individual.",[2,3,1,-1,-2,0,-2,4,2,2,1,2,1,1,1,2,1,1,0,2,3,2,4,1,1,1,2,-1,1,2,2,0,4,1,1,-2,1,2,0,2,-2,2,1,2,2,3,0,0,1,2,2,3,1,2,0,1,2,-1,0,1,0,2,1,2,3,1,2,2,0,3,1,4,2,-2,2,-3,4,3]),
EpicPhysiologyEpicStrength = new LegendaryAbility("Epic Strength","- Lift a car.\n- Rip a man in half.",[-2,-2,3,4,1,-2,4,-3,1,-1,-2,-3,-4,-2,1,-3,-2,2,3,2,-3,1,-3,-2,0,-1,-1,3,-2,0,3,-1,-3,-4,2,4,-2,-3,-3,3,3,3,0,2,-1,2,3,-1,1,-1,1,2,-1,-2,-1,0,1,3,3,-2,1,-2,-2,-2,-1,0,-2,3,-2,-2,3,-3,1,-2,2,4,1,-1]),
EpicPhysiologyEpicToughness = new LegendaryAbility("Epic Toughness","- Shrug off a fireball\n- Run without stopping for days.",[1,-1,2,3,-2,-3,4,-2,1,2,2,-2,-3,-1,0,-2,1,0,3,4,-2,1,-2,-2,-1,0,3,2,-1,-2,1,2,-1,-2,1,4,-2,-3,-1,4,2,2,0,2,0,2,3,-1,1,-1,1,1,1,-2,2,1,2,3,2,0,1,-1,1,-2,-3,0,1,2,0,-2,3,-1,0,-2,4,1,-1,0]),
EpicPhysiologyEpicSenses = new LegendaryAbility("Epic Senses","- Gain amazing hearing\n- See from miles away.",[2,2,-1,-2,3,4,1,2,0,1,1,3,2,0,2,3,-2,2,1,3,4,1,2,3,-1,0,-1,0,1,2,-1,0,1,-1,-2,1,1,2,0,4,4,0,-1,1,-1,1,2,1,0,-1,1,1,2,2,3,0,-1,2,2,3,3,2,-1,4,3,1,0,-1,1,-1,2,1,0,0,3,1,3,-1]),
EpicPhysiologyBeauty = new LegendaryAbility("Epic Beauty","- Charm others.\n- Pacify others with awe.",[1,2,4,0,1,3,-3,-2,2,2,3,4,0,1,1,2,-2,2,1,-1,3,3,0,-1,-2,1,-2,-2,1,1,2,1,-2,2,3,-2,2,3,2,-1,-3,2,0,0,1,-1,0,1,-1,0,0,2,0,3,-3,-2,-2,-1,2,-3,-1,2,-2,4,3,0,2,1,3,3,-1,1,0,4,-1,-2,-2,-1]),
EpicPhysiologyUgliness = new LegendaryAbility("Epic Ugliness","- Terrify others.\n- ",[-1,-2,4,3,1,-3,1,-2,-2,-3,-2,-4,-3,-1,-1,-2,2,2,-1,-2,1,-3,-2,4,-3,-2,-2,-1,-3,-2,-2,-3,-3,-4,-3,2,2,1,-2,-3,0,-2,-2,-2,-2,-2,-2,-1,1,-1,0,-4,0,-3,3,1,-1,0,3,4,1,2,4,1,2,3,2,-1,-2,-2,-1,2,0,4,-1,-2,-2,-1]),
Enech = new LegendaryAbility("Enech","- Gain the \"Protection of Innocents\" Aspect\n- Gain the \"Zealous Faith\" Aspect",[2,-1,1,3,0,-2,3,1,3,-1,-2,-2,-2,0,-2,-4,-1,-1,0,3,1,-1,-2,-3,-2,-1,2,2,2,-3,3,0,-1,2,3,3,-1,-4,2,4,0,-1,-2,1,2,2,1,0,-2,-1,1,8,1,-2,-3,-2,1,0,1,-3,-2,-3,-4,-1,-2,-2,2,-1,-2,-4,2,1,4,-2,3,2,1,0]),
FireDestruction = new LegendaryAbility("Fire - Destruction","- Burn a forest down\n- Throw a fireball.",[-3,-2,4,4,3,-3,2,-2,-2,-2,-1,0,-3,-4,1,-3,1,6,0,0,-2,4,-3,-3,1,0,-3,-1,-2,-1,-2,-1,-1,-2,1,2,0,1,-1,1,1,1,0,1,-1,1,-1,1,2,1,0,0,3,2,-4,-3,-3,-1,4,-3,2,-2,1,3,-3,-1,2,2,0,1,2,3,0,-2,-2,4,1,-1]),
FireLife = new LegendaryAbility("Fire - Life","- Ressurect mortals\n- Heal allies.",[2,1,4,3,2,-4,-2,2,2,3,2,2,-2,-3,-2,-3,-4,5,1,-1,-3,6,-2,-3,2,1,-2,0,-2,2,2,3,1,4,1,-2,-3,-1,1,3,-2,1,0,1,0,1,1,2,0,2,0,1,3,-2,-4,-3,-3,1,4,-4,-2,-3,-4,4,-2,-2,2,1,2,-1,2,1,0,1,3,-1,1,4]),
FireInvention = new LegendaryAbility("Fire - Invention","- Create an impossibly large gun.- Hack a computer.",[2,4,3,1,1,-2,1,2,0,-2,-3,-2,-3,-4,1,2,-3,5,2,0,-3,2,1,-3,6,-3,1,0,-2,2,0,-2,3,-1,-2,-3,-2,-3,-2,1,-2,1,1,-1,-1,0,-2,1,-1,0,0,1,-1,-3,-4,-3,1,1,4,-3,-2,-4,-4,2,-2,-3,-1,-1,5,2,1,3,0,-2,2,2,4,1]),
FireMagma = new LegendaryAbility("Fire - Magma","- Create and control flows of magma\n- Rupture volcanoes from the ground.",[-3,-2,4,4,-1,-3,1,-2,-1,-2,0,-1,-3,-4,1,-3,1,4,3,-1,-3,1,-3,-4,1,0,-2,0,-3,-2,0,-2,-3,-3,0,3,-2,-3,-2,2,0,0,-1,0,0,1,1,1,1,1,-1,-1,2,-2,-4,-4,1,2,4,-4,-3,-4,-1,2,-4,-2,2,3,1,-1,2,3,0,-3,3,3,-1,1]),
FireDrought = new LegendaryAbility("Fire - Drought","- Dry up water and blood.\n- Turn enemies to ash.",[-2,-3,2,2,3,0,1,-3,-2,-3,-4,-3,-4,-6,2,-3,2,4,0,-2,-4,1,-3,1,0,-2,-3,1,-2,-3,-2,-4,-3,-3,-2,2,-2,-3,-3,-4,1,-1,-1,1,1,-1,-1,0,1,-4,0,0,0,2,-4,-4,-4,1,4,2,1,-3,3,4,-4,-2,2,1,-3,-2,-1,2,-3,-2,1,2,-1,4]),
WaWorldgingSea = new LegendaryAbility("Water - Raging Sea","- Create anger.\n- Raise a tidal wave.",[-3,-2,4,4,2,-3,1,-1,-2,-3,0,-3,1,5,3,-1,0,-4,-1,-2,2,-2,-1,1,-3,-2,-3,-1,-2,1,2,-2,-1,0,0,3,1,-2,-3,3,1,0,-1,0,-1,2,2,2,0,0,0,1,0,-3,4,6,-1,2,-3,1,3,-3,-2,2,2,-1,1,4,0,-2,1,2,0,-2,1,2,2,3]),
WaterAbyss = new LegendaryAbility("Water - Abyss","- Summon creatures from the dark Abyss.- Drown your enemies.",[2,3,0,1,-3,2,-2,1,1,3,2,-3,1,4,-3,-2,2,-4,-1,-3,-2,-4,1,3,-2,-4,-3,-2,-2,0,1,2,2,-3,-2,1,2,0,-2,0,2,-1,-1,-1,1,0,0,1,-1,0,0,0,0,-3,6,4,-3,-1,-4,2,-3,0,2,-3,2,1,1,3,1,-2,-3,2,-1,2,4,2,0,1]),
WaterLife = new LegendaryAbility("Water - Life","- Spring forth impossible animals.\n- Fortify your allies.",[2,1,3,2,0,-2,-4,2,1,3,2,1,1,4,1,2,-4,-4,1,0,2,-3,0,-3,-2,2,0,-3,-1,1,0,3,0,4,-1,-2,-3,-3,2,3,-3,1,-1,1,1,1,1,2,-1,1,0,1,-1,-3,4,4,1,2,-4,-3,1,-1,-4,4,0,1,2,2,2,-2,0,1,3,1,3,-2,-2,4]),
LightBrightness = new LegendaryAbility("Light - Brightness","- Blind your enemies\n- Dazzle an audience.",[1,3,4,4,3,1,1,-2,3,-1,-2,3,0,-2,1,1,-3,2,-1,0,-4,3,-2,-4,-3,-2,1,0,4,-2,3,-1,-2,2,3,-1,4,2,2,1,-2,1,1,1,2,-1,-1,1,1,1,0,1,1,6,-4,0,0,-1,1,-4,1,-4,-3,4,-2,-4,2,3,2,4,2,1,-2,4,2,-1,-2,3]),
LightIllumination = new LegendaryAbility("Light - Illumination","- Engage in intense concentration to reveal mysteries\n- Inspire others to create and learn.",[2,4,3,0,2,-3,-2,3,2,-3,-2,2,2,-1,-1,2,-3,2,-1,-2,3,4,3,-4,2,0,1,-1,1,2,2,-1,3,1,-2,-3,-2,-3,2,-2,-3,1,1,1,1,-1,-1,1,0,2,0,0,0,3,-4,-1,0,-2,1,-4,0,1,-4,3,-1,0,2,3,6,5,2,1,0,1,-2,-3,4,2]),
LightSun = new LegendaryAbility("Light - Sun","- Send rays of heat.\n- Travel on a sunbeam.",[-1,-1,4,3,4,-3,-1,-2,2,-1,-2,0,-1,-3,2,-2,-4,3,1,-1,-4,6,-1,-4,0,1,0,-1,1,0,2,-2,-1,-1,3,0,-2,-3,1,2,-2,0,0,1,2,-1,0,1,1,0,-1,0,2,4,-4,-2,-1,1,2,-4,2,-4,-4,5,-3,-3,1,1,1,2,3,1,0,2,2,3,0,2]),
SkyDestruction = new LegendaryAbility("Sky - Destruction","- Crush enemies with storms.\n- Summon tornadoes.",[-2,-1,4,4,3,-3,2,-2,0,-2,-3,-2,-1,0,4,-2,2,2,1,1,-1,1,-2,0,-2,-2,-1,1,-1,-2,2,-2,-3,-4,2,3,-1,1,-2,1,3,1,0,1,0,1,1,-1,0,-1,0,-1,-1,1,-3,2,0,-1,2,-2,6,-2,3,3,4,0,1,3,-2,-2,-1,2,-2,-2,-1,4,-2,-1]),
SkyTempest = new LegendaryAbility("Sky - Tempest","- Create Storms.\n- Fly.",[-2,-1,4,3,2,-2,3,-2,1,-2,-1,-2,1,2,4,-1,1,0,2,1,0,-2,-3,1,-2,-1,-1,2,0,1,2,-1,-3,-2,2,2,-1,1,0,2,3,1,0,1,-1,1,1,0,0,-1,1,-1,-1,-1,-3,3,0,1,-1,2,6,-1,-3,3,3,1,2,4,-1,2,2,3,0,-2,2,3,1,2]),
SkyPeace = new LegendaryAbility("Sky - Peace","- Pacify Enemies\n- Stop a bullet in its tracks.",[3,2,1,0,2,1,-4,2,1,1,1,2,2,2,4,0,-3,-3,2,2,3,1,2,-2,0,1,3,-2,1,3,3,2,0,4,-2,-3,1,-2,4,3,-2,1,0,1,1,-1,1,1,0,1,-1,0,0,0,-4,2,2,1,-2,-3,6,3,-3,3,-1,1,3,3,2,-2,1,-1,2,3,3,-2,1,2]),
DarknessVoid = new LegendaryAbility("Darkness - Void","- Remove the sense of sight or hearing from your foes.\n- Erase an enemy from existence.",[1,2,4,4,3,-2,2,-2,-1,-3,-4,-3,0,-2,-2,-3,3,-1,1,-2,1,-3,-2,4,-2,-3,-2,1,1,-1,0,-2,1,-3,1,3,2,2,-1,-2,3,0,-1,0,-2,0,0,1,1,-1,-1,-1,-1,-4,3,1,1,1,-1,6,1,2,3,-3,3,4,2,2,-3,2,-2,4,-3,-4]),
DarknessShadows = new LegendaryAbility("Darkness - Shadows","- Hide in shadows\n- Remove light.",[4,2,-1,-2,2,4,-2,0,-2,-3,-2,1,2,0,-1,3,2,-2,-1,-3,3,-3,-1,4,0,1,-1,-2,1,2,-1,-2,1,-2,-1,1,3,4,0,1,4,0,0,-1,0,0,0,1,1,-1,1,-1,0,-4,2,-1,0,-1,-2,6,0,3,3,-1,4,4,1,-1,3,3,1,4,2,1,2,-2,4,3]),
DarknessUnderground = new LegendaryAbility("Darkness - Underground","- See in the dark.\n- Have the Earth swallow enemies.",[3,1,0,-1,-2,4,-1,-1,-2,1,2,-2,2,-2,-4,0,3,-2,3,1,-4,-4,1,4,2,2,1,-2,0,-1,-1,1,0,-2,-3,2,1,2,0,3,1,0,0,1,-1,0,-1,1,0,-1,1,-2,0,-4,-1,-3,0,3,-1,5,-4,-3,3,-3,3,3,1,-1,1,-1,0,3,1,-2,2,-2,-1,4]),
WorldAbundance = new LegendaryAbility("World - Abundance","- Summon riches.\n- Summon weapons for a whole army.",[2,4,3,0,1,-1,-2,1,2,1,3,1,2,2,2,-1,-3,0,3,0,-1,2,1,-2,4,2,2,-2,1,-1,2,4,1,3,2,-1,-2,0,2,3,-1,1,0,1,-1,-1,1,1,0,1,1,1,0,-3,0,1,2,5,2,-3,1,-1,-3,4,0,-2,1,2,4,4,-1,-2,2,1,0,-1,4,3]),
WorldLife = new LegendaryAbility("World - Life","- Summon plants and animals.\n- Heal a forest.",[2,1,4,0,2,-2,-3,2,1,4,4,2,0,2,-1,-2,-4,1,4,-1,0,3,1,-2,1,3,-1,-2,0,2,1,4,-1,2,1,-2,-1,-2,1,3,2,0,-1,1,-1,0,2,0,-1,-1,1,1,0,-2,1,2,-1,6,2,-2,1,-2,-4,4,-4,3,2,1,3,-2,1,2,4,-2,2,2,3,4]),
WorldStone = new LegendaryAbility("World - Stone","- Crush enemies with a boulder.\n- Turn your fist into stone.",[3,-1,1,2,-2,-2,3,1,1,-2,-2,-2,-1,0,-1,-2,0,1,4,2,-2,-2,0,1,2,2,3,2,0,0,2,-1,-2,0,1,3,-2,-1,-2,4,1,1,0,1,2,0,-1,0,0,1,2,1,1,0,-2,0,2,4,2,2,0,-2,0,-1,2,-1,3,3,3,1,4,-1,1,-2,5,3,1,3]),
WorldDecay = new LegendaryAbility("World - Decay","- Rot an enemy from the inside.\n- Summon an army of worms.",[-1,2,2,3,1,-1,3,-3,-2,-2,1,-2,-1,-2,-4,-3,4,1,4,-3,-2,-3,-3,3,0,2,-2,2,-1,-2,-2,-3,0,-2,1,4,2,3,-2,-2,3,0,-1,0,-2,-1,0,1,1,-2,1,-2,0,-3,1,0,-2,5,2,4,-4,-2,4,-2,4,3,-2,1,-2,3,-1,4,1,-3,1,4,2,3]),
WorldExpanse = new LegendaryAbility("World - Expanse","- Travel quickly.\n- Plague your foes with exotic diseases.",[1,2,0,-1,2,0,-1,1,1,0,2,-1,3,2,3,-1,-2,-1,4,0,0,1,2,-2,0,3,-2,-2,-3,4,2,2,2,1,2,0,-1,-2,1,3,3,-1,-1,1,-1,1,2,0,0,0,2,0,1,0,2,2,-2,4,1,-1,2,-2,-1,3,3,5,2,4,4,-2,1,3,2,-1,2,0,4,3]),
OrderGravity = new LegendaryAbility("Order - Gravity","- Slam an enemy into the floor.\n- Float into the air.",[-1,1,3,3,2,0,1,2,2,-1,-2,1,3,1,0,1,1,2,2,3,2,1,3,0,1,1,4,1,2,1,1,-1,-1,1,2,3,0,1,1,4,0,1,0,0,1,-1,-1,0,0,1,-1,0,0,2,1,1,6,2,2,-2,1,-1,-2,1,1,0,3,0,2,3,2,1,0,-2,3,2,2,4]),
OrderControl = new LegendaryAbility("Order - Control","- Compel someone to obey your orders.\n- Take control of an ongoing spell.",[0,1,2,4,2,-2,2,2,3,-2,-2,2,1,1,2,-2,-1,2,3,4,2,2,1,1,1,1,4,2,4,-3,3,-1,-2,0,2,3,4,1,2,3,-1,1,0,-1,2,0,-1,1,0,1,-1,0,0,1,-2,0,6,3,2,-1,2,0,-1,-2,-2,-1,3,1,2,4,2,3,1,2,3,0,-1,3]),
OrderKnowledge = new LegendaryAbility("Order - Knowledge","- Learn ancient mysteries.\n- Have an incredible memory.",[2,4,1,-1,1,-1,-2,3,-1,-2,-1,1,0,2,0,2,-1,1,2,2,1,0,4,-2,2,0,4,-2,-1,2,1,-1,3,1,-1,-2,1,-1,0,2,-1,0,0,-1,1,0,0,1,0,1,-1,0,0,1,-2,-1,4,1,1,-2,1,1,-2,-1,1,-2,3,1,2,4,0,2,1,-2,-1,-1,4,2]),
NightMoon = new LegendaryAbility("Night - Moon","- Turn someone insane.\n- Soothe a pained friend.",[4,3,0,-1,2,2,-1,1,-1,0,2,1,2,2,2,3,2,-4,-1,-2,6,-4,1,-3,-1,1,-2,-1,1,3,0,2,3,3,-1,-2,3,4,2,1,3,0,1,0,-1,0,0,1,0,-1,2,0,-2,-4,-3,2,-2,0,-4,-4,2,5,2,-2,4,3,-1,2,3,3,1,4,2,4,1,-1,3,4]),
NightDarkness = new LegendaryAbility("Night - Darkness","- Blind an enemy.\n- Hide in the shadows.",[2,3,2,4,3,2,1,-1,1,-2,-2,-3,-2,2,2,1,2,-3,1,-4,-3,-4,1,5,-2,-1,-4,1,2,0,-1,-2,1,-3,1,3,4,4,-2,-4,4,0,-1,0,-2,0,0,-1,1,-1,1,-1,-1,-4,3,1,-4,-2,-3,4,2,5,3,-4,4,4,-2,1,-3,3,1,4,-2,0,3,1,4,3]),
NightVeil = new LegendaryAbility("Night - Veil","- Turn invisible.\n- Defend yourself from magic.",[3,1,0,-1,2,4,-2,1,-1,-2,-2,1,2,2,2,2,2,-4,1,1,3,-4,1,4,0,0,1,-1,1,2,0,2,1,1,2,-1,2,4,1,3,4,0,0,1,-1,0,1,-1,2,-1,1,0,-1,-4,2,1,0,1,-4,3,2,5,3,-3,4,4,-1,-2,3,3,1,4,2,0,2,1,3,4]),
NightStars = new LegendaryAbility("Night - Stars","- Divine the future.\n- Call down the fire of the Stars.",[2,4,0,0,2,2,-2,4,2,1,-1,2,2,1,3,2,-2,1,-1,1,3,1,4,-2,0,0,1,-1,0,4,2,1,2,2,3,-2,-2,-3,1,2,-1,0,-1,0,0,-1,1,1,1,0,1,0,2,1,-4,1,1,1,1,-3,2,5,0,-3,3,1,-1,2,1,1,2,4,2,1,-1,-2,4,3]),
NightFear = new LegendaryAbility("Night - Fear","- Terrify enemies.\n- Lurk hidden in the shadows.",[0,-1,3,4,2,2,1,-1,0,-2,-3,1,-1,1,2,0,2,-4,1,0,1,-4,-2,4,0,-1,-2,1,1,0,1,-2,-1,-3,1,2,4,3,-2,-1,3,0,-1,0,-2,-2,0,-1,1,-1,0,-1,-1,-4,3,1,-2,1,-4,3,2,5,3,-2,4,4,-1,0,-2,1,0,3,-1,4,2,0,1,3]),
TaiYiNature = new LegendaryAbility("Tai Yi - Nature","- Change an enemy into a servant.\n- Reshape a Titanspawn.",[1,0,2,4,1,3,1,2,3,2,1,1,1,1,2,-2,0,1,2,4,2,2,2,3,2,-1,4,2,3,-3,4,1,0,3,3,-2,4,-1,1,3,-2,-1,4,1,3,-1,-2,1,1,2,-3,0,-2,3,-4,0,5,2,1,2,2,2,2,-3,-3,-2,2,1,-3,3,1,4,-3,-3,-2,-3,4,2]),
TaiYiFlow = new LegendaryAbility("Tai Yi - Flow","- Redirect a Spell.\n- Manipulate flows of Legend.",[2,3,2,1,4,1,-1,3,1,2,3,4,3,3,2,3,2,2,-1,2,3,3,1,0,1,3,4,0,1,3,0,1,2,4,2,0,3,3,2,4,0,0,1,1,0,-1,1,1,1,-1,1,1,0,3,1,3,4,-1,2,1,3,3,2,3,3,2,3,3,4,3,1,4,2,-3,2,-1,4,3]),




	]

	skillsArray = [

AthleticsSkill = new LegendaryAbility("Athletics","- Jump over a wall.\n- Run a sprint.",[0,-1,2,1,4,2,2,-1,1,0,1,1,1,1,2,-2,-1,1,2,0,-1,2,-2,1,-1,1,0,1,-2,2,2,2,-2,0,3,0,-1,0,-2,2,4,1,-1,1,0,2,2,-1,0,-1,1,2,-1,0,2,1,0,2,2,1,3,2,0,2,1,1,2,2,2,-2,2,-1,1,-3,3,-1,4,0]),
Rapport = new LegendaryAbility("Rapport","- Make friends at a bar.\n- Mediate a negotiation.",[2,1,1,-1,1,0,-3,2,2,3,3,4,3,2,1,1,1,1,2,-1,1,2,-2,-3,-1,1,-1,-3,2,1,2,4,-1,6,-1,-3,0,1,4,2,-3,-1,-1,1,-1,1,1,1,-1,1,1,2,0,3,-4,1,0,2,1,-3,2,2,-1,4,0,-1,3,-1,4,4,3,2,3,5,-1,-2,0,2]),
Technology = new LegendaryAbility("Technology","- Hack a computer\n- Build a grenade.",[1,4,3,0,3,1,-1,1,0,-1,-1,0,1,0,1,2,1,3,3,1,1,2,2,-1,6,1,2,-1,1,2,0,-1,2,0,2,1,2,3,0,1,2,1,1,0,-1,-1,-2,-2,1,-1,-1,1,-2,2,-4,1,2,3,3,-2,1,2,-2,3,3,-2,2,-1,6,4,2,1,0,-2,2,1,5,3]),
FirstAid = new LegendaryAbility("First Aid","- Patch a wound.\n- Find the antidote to a poison.",[3,3,0,-1,1,0,1,1,-1,1,3,3,1,3,2,-1,2,2,3,1,0,2,1,-2,1,2,2,0,-2,1,-1,2,0,1,-2,-3,-2,-3,1,3,-2,0,1,1,1,0,1,1,-1,0,0,1,1,2,1,2,1,3,3,-2,1,1,1,4,1,0,2,-1,2,-1,3,2,4,2,3,-2,3,3]),
Fight = new LegendaryAbility("Fight","- Swing a sword.\n- Throw a punch.",[-1,-2,2,4,2,-2,4,-2,1,-2,-2,-3,-2,1,2,-2,2,3,3,3,0,2,-1,1,0,1,1,4,0,-1,3,-1,-2,-2,3,4,0,-2,0,4,4,2,0,1,0,2,2,-1,1,-1,1,2,-1,2,3,3,2,3,4,-1,3,1,2,3,2,3,2,1,1,-2,4,0,2,-3,1,4,0,1]),
Lore = new LegendaryAbility("Lore","- Know a magical incantation.\n- Know ancient history.",[2,4,0,-1,1,-1,-2,4,1,0,1,-1,2,2,1,3,2,1,2,2,3,3,4,1,2,3,2,-2,1,2,1,2,4,2,-2,-3,1,-1,2,1,-2,0,1,-1,2,-2,-2,1,-1,1,-2,-1,1,2,0,1,2,2,1,2,2,3,2,3,2,2,4,4,3,3,1,4,3,-2,1,2,4,3]),
Notice = new LegendaryAbility("Notice","- Get the drop on an enemy.\n- Find clues.",[4,2,0,-1,2,2,3,1,2,0,-1,3,2,2,3,4,1,2,-1,4,3,4,1,2,0,1,-1,3,2,0,1,-1,1,2,-2,3,1,2,2,4,4,0,-1,1,-1,1,2,0,1,-1,1,0,-1,2,3,1,0,2,3,4,3,3,1,3,2,0,0,1,3,3,4,2,1,0,3,2,4,1]),
Physique = new LegendaryAbility("Physique","- Run a marathon.\n- Withstand physical trauma.",[-1,-2,2,2,0,-1,4,-2,2,3,3,1,-1,2,2,-1,2,3,4,2,0,3,-2,1,2,2,1,3,-1,-2,2,3,-1,-2,1,4,-2,-3,-2,4,3,1,-1,1,0,1,1,-1,0,-1,1,2,-1,-2,4,2,1,5,3,0,3,-1,2,3,1,3,2,2,1,-2,3,-1,1,-2,5,1,2,1]),
Presence = new LegendaryAbility("Presence","- Order soldiers.\n- Interrogate a suspect.",[1,2,4,3,0,-2,4,-1,4,0,-1,1,-1,1,3,-2,3,3,2,4,-1,4,-2,2,-1,-1,1,4,2,-2,4,1,0,1,2,3,1,-2,2,3,1,1,1,1,2,1,1,0,0,-1,0,1,0,4,3,2,2,3,3,4,2,1,4,4,2,3,2,4,1,2,4,3,2,4,2,-1,-2,2]),
Manipulation = new LegendaryAbility("Manipulation","- Trick an enemy.\n- Talk your way past an annoying bouncer.",[4,3,1,2,0,2,-2,0,2,-1,-2,4,0,2,0,3,1,-2,-2,-1,4,-3,1,4,0,-1,2,0,4,-1,3,0,0,-1,1,-2,6,4,2,-2,-1,0,1,1,0,-1,-1,1,1,-2,0,0,-1,4,1,1,3,0,-2,4,1,4,3,4,4,2,-1,2,3,5,0,3,1,5,1,-1,0,2]),
Resources = new LegendaryAbility("Resources","- Buy a car.\n- Hire mercenaries.",[1,0,4,1,2,0,-2,-1,1,0,2,3,1,1,2,-1,1,2,4,0,1,2,1,2,2,3,2,0,3,-3,4,2,-2,1,4,-1,2,-1,1,0,-2,1,1,1,2,0,-2,1,1,1,-1,-1,0,3,-3,2,2,3,3,1,2,-1,2,4,2,-1,4,4,4,4,1,2,3,2,-2,-3,4,0]),
Marksmanship = new LegendaryAbility("Marksmanship","- Shoot a bow.\n- Throw a fireball with accuracy.",[3,1,2,2,4,2,4,-1,1,-1,-2,2,1,2,3,-1,1,3,1,2,2,4,-2,2,2,1,1,3,-1,0,1,-2,-3,-1,3,3,1,0,-1,4,5,1,0,1,0,0,1,1,0,1,1,0,-1,3,2,2,2,1,3,2,4,3,2,3,3,2,1,2,4,1,3,0,2,-2,-3,5,2,2]),
Stealth = new LegendaryAbility("Stealth","- Pickpocket a target.\n- Skulk unnoticed.",[2,2,-2,-1,3,5,1,1,-2,-1,-2,2,3,2,-1,3,3,-3,2,-1,4,-4,-1,4,0,1,-1,1,0,2,-1,-2,1,0,1,2,3,4,-1,-2,4,0,0,1,-1,0,1,-1,1,-1,1,0,-1,-3,3,1,-1,0,-3,5,3,4,2,2,4,4,0,-1,3,2,1,4,1,-2,2,1,4,1]),
Will = new LegendaryAbility("Will","- Resist mental attacks.\n- Control magical powers by sheer will.",[2,4,1,2,1,-1,2,3,4,3,2,3,2,2,3,4,3,3,4,4,4,3,1,3,2,3,4,3,4,4,4,3,3,2,1,3,3,1,2,4,4,1,1,2,1,1,1,0,0,1,1,2,0,3,4,2,0,4,3,2,3,4,3,3,3,4,3,4,2,3,4,3,2,0,3,-2,2,2]),

]	

for(i=0;i<newAbilitiesArray.length;i++){
for(j=0;j<parametersArray.length;j++){
	parametersArray[j].legendaries.push(newAbilitiesArray[i].legendaries[j])
}}

for(i=0;i<skillsArray.length;i++){
for(j=0;j<parametersArray.length;j++){
	parametersArray[j].skills.push(skillsArray[i].legendaries[j])
}}

}
addAnAbility()

// Test the length of Legendaries
//lengthChecker()
// Test the Legendaries
//exampleLegendaryMaker(legendaryAbilitiesArray,godFound.legendaries,roleFound.legendaries,roleFound2.legendaries,9,wyrdbornFound.legendaries)
// Test the Skills
//exampleLegendaryMaker(skillsArray,godFound.skills,roleFound.skills,roleFound2.skills,7,wyrdbornFound.skills)
// Create an Ability
//addAnAbilityMaker()
// Test the Legendaries AND Skills. Adds the extra Abilities
//LegendaryMakerTotal()

// This function handles the tabs
function openNW(evt, cityName) {
    // Declare all variables
    var i, tabcontent, tablinks;

    // Get all elements with class="tabcontent" and hide them
    tabcontent = [
	document.getElementById("Display1"),
	document.getElementById("Display2"),
	document.getElementById("Display3")]    
	
	for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }

    // Get all elements with class="tablinks" and remove the class "active"
    tablinks = [
	document.getElementById("Display1Tab"),
	document.getElementById("Display2Tab"),
	document.getElementById("Display3Tab")]
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
	
    // Show the current tab, and add an "active" class to the link that opened the tab
    document.getElementById(cityName).style.display = "block";
    evt.currentTarget.className += " active";
}

ChosenFirstRole = "Default"
ChosenSecondRole = "Default"
ChosenGod = "Woop"	
ChosenWyrdborn = "Winter Fey"

function setChosenPantheon(selectedBox){
//curatedName = selectedBox.options[selectedBox.selectedIndex].value.substr(0,selectedBox.options[selectedBox.selectedIndex].value.indexOf(":"))
curatedName = selectedBox.options[selectedBox.selectedIndex].value
	

document.getElementById ("PantheonLink").href = "http://scionprimarchs.wikia.com/wiki/"+ curatedName;
document.getElementById ("PantheonLink").innerHTML = "Wiki Link: "+ curatedName;

document.getElementById('OriginLink').style.display = 'none'

}
function setChosenGod(selectedBox){
document.getElementById ("OriginLink").href = "http://scionprimarchs.wikia.com/wiki/"+ selectedBox.options[selectedBox.selectedIndex].value;
document.getElementById ("OriginLink").innerHTML = "Wiki Link: "+ selectedBox.options[selectedBox.selectedIndex].value;
	ChosenGod = selectedBox.options[selectedBox.selectedIndex].value;
document.getElementById('OriginLink').style.display = 'block'
}
function setFirstRole(selectedBox){
	ChosenFirstRole = selectedBox.options[selectedBox.selectedIndex].value;}
function setSecondRole(selectedBox){
	ChosenSecondRole = selectedBox.options[selectedBox.selectedIndex].value;}

	
	//__________________________________________________
	// Roles
	
	var rolesLists = new Array(5) 
	rolesLists["empty"] = ["Select a Main Role"]; 
	rolesLists["Meat Shield"] = ["Select Role","Damage Dealer", "Party Face", "Skill Monkey", "Support-Controller"]; 
	rolesLists["Damage Dealer"] = ["Select Role","Meat Shield", "Party Face", "Skill Monkey", "Support-Controller"]; 
	rolesLists["Party Face"] = ["Select Role","Meat Shield", "Damage Dealer", "Skill Monkey", "Support-Controller"]; 
	rolesLists["Skill Monkey"] = ["Select Role","Meat Shield", "Damage Dealer", "Party Face", "Support-Controller"]; 
	rolesLists["Support-Controller"] = ["Select Role","Meat Shield", "Damage Dealer", "Party Face", "Skill Monkey"]; 
	
function rolesChange(selectObj2) { 
	var idx = selectObj2.selectedIndex; 
	var which = selectObj2.options[idx].value; 
	cList2 = rolesLists[which]; 
	var cSelect = document.getElementById("secondRole"); 
	var len=cSelect.options.length; 
	while (cSelect.options.length > 0) { cSelect.remove(0); } 
	var newOption; 
	for (var i=0; i<cList2.length; i++) { 
	newOption = document.createElement("option"); 
	newOption.value = cList2[i]; // assumes option string and value are the same 
	newOption.text=cList2[i]; 
	try { 
	cSelect.add(newOption); // this will fail in DOM browsers but is needed for IE 
	} 
	catch (e) { 
	cSelect.appendChild(newOption); 
	} 
	} 
	} 

value = 0
function clearContents(element) {
if(value == 0){
  element.value = '';}
value+=1
}

function characterSheetSpawn() {



document.getElementById('inputTextToSave').value = "Aspects:     " +"\n" + document.getElementById('highConcept').value + "\n " + document.getElementById('trouble').value + "\n " + document.getElementById('aspect1').value + "\n " + document.getElementById('aspect2').value +"\n " + document.getElementById('aspect3').value + "\n     \n" + "Skills: \n+3: " + document.getElementById('31').value + "\n+2: " + document.getElementById('21').value + ", " + document.getElementById('22').value + "\n+1: " + document.getElementById('11').value +", " + document.getElementById('12').value +", " + document.getElementById('13').value + "\n     \n" + "Stunts: " + "\n" + document.getElementById('stunt1').value + "\n " + document.getElementById('stunt2').value + "\n " + document.getElementById('stunt3').value + "\n     \n" + "Legendary Abilities: " + "\n " + document.getElementById('legend1').value + "\n " + document.getElementById('legend2').value + "\n " + document.getElementById('legend3').value + "\n\n "
}	
	
