
var LegendaryAbility = function(name,legendaries) {
  this.name = name;
  this.legendaries = legendaries;
};

var Role = function(name,legendaries,skills) {
  this.name = name;
  this.legendaries = legendaries;
  this.skills = skills;

};

var secondOrigin = function(name,originString,originVar,approaches,domains,roles) {
  this.name = name;
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


var skillsArray = [
Athletics = new LegendaryAbility("Athletics"),
Burglary = new LegendaryAbility("Burglary"),
Rapport = new LegendaryAbility("Rapport"),
Technology = new LegendaryAbility("Technology"),
FirstAid  = new LegendaryAbility("First Aid "),
Fight = new LegendaryAbility("Fight"),
Lore = new LegendaryAbility("Lore"),
Notice = new LegendaryAbility("Notice"),
Physique = new LegendaryAbility("Physique"),
Presence = new LegendaryAbility("Presence"),
Manipulation = new LegendaryAbility("Manipulation"),
Resources = new LegendaryAbility("Resources"),
Marksmanship = new LegendaryAbility("Marksmanship"),
Stealth = new LegendaryAbility("Stealth"),
Will = new LegendaryAbility("Will")

]
  

var rolesChoiceArray = [
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

Greek = new parameterCalculator("Theoi","God",[],[]),
Chinese = new parameterCalculator("Celestial Bureaucracy","God",[],[]),
Orisha = new parameterCalculator("Orisha","God",[],[]),
Neter = new parameterCalculator("Neter","God",[],[]),
Aesir = new parameterCalculator("Aesir","God",[],[]),
Maori = new parameterCalculator("Nga Tama a Rangi","God",[],[]),
Japanese = new parameterCalculator("Amatsukami","God",[],[]),
Teotl = new parameterCalculator("Teotl","God",[],[]),
Deva = new parameterCalculator("Deva","God",[],[]),
BogiMuzhchin = new parameterCalculator("Bogi Muzhchin","God",[],[]),
Celtic = new parameterCalculator("Tuatha Dé Danaan","God",[],[]),
Ayllus = new parameterCalculator("Ayllus","God",[],[]),


// Titans

Aether = new parameterCalculator("Aether","Titan",[],[]),
Nun = new parameterCalculator("Nun","Titan",[],[]),
Oceanus = new parameterCalculator("Oceanus","Titan",[],[]),
Kosmos = new parameterCalculator("Kosmos","Titan",[],[]),
Terra = new parameterCalculator("Terra","Titan",[],[]),
Muspelheim = new parameterCalculator("Muspelheim","Titan",[],[]),
SokuNoKumi = new parameterCalculator("Soku-No-Kumi","Titan",[],[]),
Amaunet = new parameterCalculator("Amaunet","Titan",[],[]),
Nyx = new parameterCalculator("Nyx","Titan",[],[]),
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
Merlin = new parameterCalculator("Circle of Merlin","Enlightened",[],[])


// Party Roles


]

var secondOriginArray = [
 Tumatauenga= new secondOrigin("Tumatauenga",Maori.name,Maori,[Forceful,Flashy,Clever],[War,Leader],[King,General]), 
 TaneMahuta= new secondOrigin("Tane Mahuta",Maori.name,Maori,[Clever,Forceful,Careful],[Nature,Wisdom],[Harmonizer,Thinker]), 
 Tangaroa= new secondOrigin("Tangaroa",Maori.name,Maori,[Careful,Forceful,Sneaky],[Water],[FreeSpirit,Harmonizer]), 
 Tawhirimatea= new secondOrigin("Tawhirimatea",Maori.name,Maori,[Forceful,Flashy,Sneaky],[Sky],[FreeSpirit,General]), 
 Rehua= new secondOrigin("Rehua",Maori.name,Maori,[Careful,Clever,Sneaky],[Sky,Wisdom],[Thinker,FreeSpirit]), 
 Maui= new secondOrigin("Maui",Maori.name,Maori,[Clever,Flashy,Quick],[Wit,War],[FreeSpirit,Politician]), 
 HineNuiTePo= new secondOrigin("Hine-Nui-Te-Po",Maori.name,Maori,[Clever,Sneaky,Careful],[Death,Moon],[Thinker,Politician]), 
 Ruaumoko= new secondOrigin("Ruaumoko",Maori.name,Maori,[Careful,Clever,Forceful],[Earth,Fire],[Harmonizer]), 
 Rongo= new secondOrigin("Rongo",Maori.name,Maori,[Clever,Sneaky,Careful],[Fertility,Wisdom],[Politician,Thinker]),
 HaumiaTiketike= new secondOrigin("Haumia-Tiketike",Maori.name,Maori,[Sneaky,Forceful,Careful],[Wit,Nature],[Hunter]),
 Mahuika= new secondOrigin("Mahuika",Maori.name,Maori,[Forceful,Flashy,Quick],[Fire],[FreeSpirit]),
 Amaterasu= new secondOrigin("Amaterasu",Japanese.name,Japanese,[Clever,Flashy,Careful],[Sun,Leader],[Politician,Mother]),
 Hachiman= new secondOrigin("Hachiman",Japanese.name,Japanese,[Clever,Forceful,Quick],[War,Wisdom],[General,Enforcer]),
 Izanagi= new secondOrigin("Izanagi",Japanese.name,Japanese,[Careful,Quick,Sneaky],[Father,Sky],[FreeSpirit,Thinker]),
 Raiden= new secondOrigin("Raiden",Japanese.name,Japanese,[Flashy,Forceful,Quick],[Sky],[FreeSpirit]),
 Izanami= new secondOrigin("Izanami",Japanese.name,Japanese,[Clever,Careful,Sneaky],[Death,Earth],[Enforcer,Manipulator]),
 Ryujin= new secondOrigin("Ryujin",Japanese.name,Japanese,[Forceful,Sneaky,Careful],[Water,Wit],[Thinker,King]),
 Susanoo= new secondOrigin("Susano-o",Japanese.name,Japanese,[Flashy,Forceful,Clever],[Water,Travel],[FreeSpirit,Hunter]),
 TsukiYomi= new secondOrigin("Tsuki-Yomi",Japanese.name,Japanese,[Clever,Sneaky,Careful],[Moon],[FreeSpirit]),
 Anansi= new secondOrigin("Anansi",Orisha.name,Orisha,[Clever,Sneaky,Careful],[Wit,Knowledge],[Trickster,FreeSpirit]),
 BaronSamedi= new secondOrigin("Baron Samedi",Orisha.name,Orisha,[Flashy,Clever,Careful],[Death],[Trickster]),
 Damballa= new secondOrigin("Damballa",Orisha.name,Orisha,[Flashy,Sneaky,Quick],[Fertility,Father],[FreeSpirit]),
 DeAllende= new secondOrigin("De-Allende",Orisha.name,Orisha,[Clever,Careful,Sneaky],[Moon,Knowledge],[FreeSpirit]),
 Erzulie= new secondOrigin("Erzulie",Orisha.name,Orisha,[Flashy,Forceful,Clever],[Love],[Harmonizer]),
 Kalfu= new secondOrigin("Kalfu",Orisha.name,Orisha,[Sneaky,Careful,Clever],[Darkness,Travel],[Trickster]),
 Legba= new secondOrigin("Legba",Orisha.name,Orisha,[Clever,Flashy,Careful],[Travel,Wisdom],[Diplomat]),
 Ogoun= new secondOrigin("Ogoun",Orisha.name,Orisha,[Forceful,Flashy,Careful],[Crafting,War],[General]),
 Shango= new secondOrigin("Shango",Orisha.name,Orisha,[Flashy,Forceful,Clever],[Justice,Sky],[Politician,Hunter]),
 Ellykha= new secondOrigin("Ellykha",Teotl.name,Teotl,[Forceful,Flashy,Quick],[War],[Enforcer]),
 Huitzilopochtli= new secondOrigin("Huitzilopochtli",Teotl.name,Teotl,[Forceful,Flashy,Clever],[War,Leader],[General]),
 Miclántecuhtli= new secondOrigin("Miclántecuhtli",Teotl.name,Teotl,[Careful,Clever,Sneaky],[Death],[Thinker]),
 Quetzalcoátl= new secondOrigin("Quetzalcoátl",Teotl.name,Teotl,[Clever,Careful,Flashy],[Leader],[Harmonizer,Politician]),
 Tezcatlipoca= new secondOrigin("Tezcatlipoca",Teotl.name,Teotl,[Clever,Sneaky,Forceful],[Moon,Darkness],[King]),
 Tlaloc= new secondOrigin("Tlaloc",Teotl.name,Teotl,[Clever,Careful,Sneaky],[Sky,Wisdom],[FreeSpirit]),
 Tlazoltéotl= new secondOrigin("Tlazoltéotl",Teotl.name,Teotl,[Flashy,Careful,Clever],[Fertility,Love],[Harmonizer,Manipulator]),
 XipeTotec= new secondOrigin("Xipe Totec",Teotl.name,Teotl,[Clever,Sneaky,Forceful],[Fertility,Darkness],[Trickster]),
 Change= new secondOrigin("Chang’e",Chinese.name,Chinese,[Careful,Clever,Sneaky],[Moon],[Diplomat]),
 Fuxi= new secondOrigin("Fuxi",Chinese.name,Chinese,[Careful,Clever,Flashy],[Crafting],[Harmonizer]),
 Guanyin= new secondOrigin("Guanyin",Chinese.name,Chinese,[Clever,Flashy,Forceful],[Wisdom],[Diplomat]),
 GuanYu= new secondOrigin("Guan Yu",Chinese.name,Chinese,[Careful,Forceful,Clever],[War,Leader],[Politician]),
 Houyi= new secondOrigin("Houyi",Chinese.name,Chinese,[Quick,Flashy,Forceful],[Fire],[Enforcer]),
 Nezha= new secondOrigin("Nezha",Chinese.name,Chinese,[Flashy,Quick,Forceful],[Wit,Travel],[FreeSpirit]),
 Nuwa= new secondOrigin("Nuwa",Chinese.name,Chinese,[Careful,Forceful,Clever],[Moon,Wisdom],[Thinker]),
 Shennong= new secondOrigin("Shennong",Chinese.name,Chinese,[Careful,Clever,Forceful],[Earth,Wisdom],[King]),
 SunWukong= new secondOrigin("Sun Wukong",Chinese.name,Chinese,[Flashy,Quick,Clever],[Wit,Travel],[Prince,Trickster]),
 Xiwangmu= new secondOrigin("Xiwangmu",Chinese.name,Chinese,[Careful,Clever,Forceful],[Wisdom,Justice],[Mother]),
 Yanluo= new secondOrigin("Yanluo",Chinese.name,Chinese,[Careful,Clever,Sneaky],[Death],[Harmonizer]),
 Aengus= new secondOrigin("Aengus",Celtic.name,Celtic,[Flashy,Quick,Forceful],[Love,Wit],[Harmonizer]),
 Brigid= new secondOrigin("Brigid",Celtic.name,Celtic,[Clever,Careful,Forceful],[Wisdom],[Harmonizer]),
 Cernunnos= new secondOrigin("Cernunnos",Celtic.name,Celtic,[Clever,Careful,Sneaky],[Nature],[Harmonizer,FreeSpirit]),
 Dagda= new secondOrigin("Dagda",Celtic.name,Celtic,[Flashy,Forceful,Quick],[War,Leader],[General,King]),
 DianCécht= new secondOrigin("Dian Cécht",Celtic.name,Celtic,[Careful,Clever,Forceful],[Fertility,Crafting],[Thinker]),
 Lugh= new secondOrigin("Lugh",Celtic.name,Celtic,[Clever,Sneaky,Quick],[Wit,War],[FreeSpirit,Trickster]),
 ManannanmacLir= new secondOrigin("Manannan mac Lir",Celtic.name,Celtic,[Careful,Clever,Sneaky],[Water,Travel],[FreeSpirit]),
 Morrigan= new secondOrigin("The Morrigan",Celtic.name,Celtic,[Sneaky,Forceful,Clever],[Death,Wisdom],[Manipulator]),
 NianMairbh= new secondOrigin("Nian Mairbh",Celtic.name,Celtic,[Sneaky,Clever,Forceful],[Death,Darkness],[Manipulator,Enforcer]),
 Nuada= new secondOrigin("Nuada",Celtic.name,Celtic,[Flashy,Forceful,Clever],[Justice,Leader],[Enforcer,King]),
 Ogma= new secondOrigin("Ogma",Celtic.name,Celtic,[Careful,Clever,Quick],[Nature,Wisdom],[Thinker,Diplomat]),
 Zerris= new secondOrigin("Zerris",Celtic.name,Celtic,[Clever,Careful,Forceful],[Crafting,Fire],[Thinker]),
 Valeska= new secondOrigin("Valeska",Celtic.name,Celtic,[Quick,Forceful,Careful],[Travel,War],[FreeSpirit]),
 Anubis= new secondOrigin("Anubis",Neter.name,Neter,[Clever,Careful,Forceful],[Death,Justice],[Enforcer]),
 Horus= new secondOrigin("Horus",Neter.name,Neter,[Clever,Forceful,Quick],[Justice,Leader],[Prince,Politician]),
 Hathor= new secondOrigin("Hathor",Neter.name,Neter,[Careful,Flashy,Clever],[Fertility ,Love],[Mother,Diplomat]),
 Isis= new secondOrigin("Isis",Neter.name,Neter,[Clever,Sneaky,Careful],[Wisdom,Wit],[Politician,Thinker]),
 Osiris= new secondOrigin("Osiris",Neter.name,Neter,[Clever,Flashy,Sneaky],[Death],[King]),
 AtumRe= new secondOrigin("Atum Re",Neter.name,Neter,[Clever,Flashy,Forceful],[Father ,Sun],[King,FreeSpirit]),
 Set= new secondOrigin("Set",Neter.name,Neter,[Clever,Sneaky,Forceful],[Sky],[Manipulator,Protector]),
 Sekhmet= new secondOrigin("Sekhmet",Neter.name,Neter,[Forceful,Quick,Flashy],[War],[General,Hunter]),
 Bastet= new secondOrigin("Bastet",Neter.name,Neter,[Clever,Sneaky,Quick],[Wisdom],[Thinker,Protector]),
 Hapi= new secondOrigin("Hapi",Neter.name,Neter,[Flashy,Careful,Clever],[Fertility,Love],[Diplomat,Protector]), 
 Khepri= new secondOrigin("Khepri",Neter.name,Neter,[Forceful,Clever,Sneaky],[War,Wit],[General,Enforcer]),
 Ptah= new secondOrigin("Ptah",Neter.name,Neter,[Clever,Quick,Flashy],[Crafting],[Thinker,FreeSpirit]),
 Rain= new secondOrigin("Rain",Neter.name,Neter,[Careful,Clever,Forceful],[Death,Travel],[FreeSpirit,Protector]),
 Sobek= new secondOrigin("Sobek",Neter.name,Neter,[Careful,Forceful,Sneaky],[Water],[FreeSpirit,Hunter]),
 Thoth= new secondOrigin("Thoth",Neter.name,Neter,[Clever,Sneaky,Quick],[Wisdom],[Thinker]),
 Geb= new secondOrigin("Geb",Neter.name,Neter,[Careful,Flashy,Clever],[Earth],[Protector]),
 Agni= new secondOrigin("Agni",Deva.name,Deva,[Clever,Flashy,Careful],[Fire],[FreeSpirit]),
 Brahma= new secondOrigin("Brahma",Deva.name,Deva,[Clever,Careful,Sneaky],[Knowledge,Father],[Thinker]),
 Ganesha= new secondOrigin("Ganesha",Deva.name,Deva,[Clever,Forceful,Sneaky],[Travel,Wisdom],[Harmonizer,Protector]),
 Indra= new secondOrigin("Indra",Deva.name,Deva,[Forceful,Clever,Flashy],[War,Leader],[King]),
 Kali= new secondOrigin("Kali",Deva.name,Deva,[Forceful,Flashy,Quick],[War,Darkness],[Enforcer]),
 Lakshmi= new secondOrigin("Lakshmi",Deva.name,Deva,[Clever,Careful,Sneaky],[Wit],[FreeSpirit,Manipulator]),
 Parvati= new secondOrigin("Parvati",Deva.name,Deva,[Clever,Sneaky,Careful],[Love,Fertility],[Diplomat,Mother]),
 Sarasvati= new secondOrigin("Sarasvati",Deva.name,Deva,[Flashy,Careful,Sneaky],[Crafting],[FreeSpirit]),
 Shiva= new secondOrigin("Shiva",Deva.name,Deva,[Clever,Flashy,Forceful],[Order,War],[FreeSpirit,Thinker]),
 Surya= new secondOrigin("Surya",Deva.name,Deva,[Flashy,Forceful,Quick],[Sun],[FreeSpirit]),
 Vishnu= new secondOrigin("Vishnu",Deva.name,Deva,[Careful,Forceful,Clever],[Wisdom,Order],[Protector,Harmonizer]),
 Yama= new secondOrigin("Yama",Deva.name,Deva,[Sneaky,Careful,Clever],[Death],[Enforcer,Thinker]),
 Aphrodite= new secondOrigin("Aphrodite",Greek.name,Greek,[Flashy,Forceful,Careful],[Love],[Manipulator]),
 Apollo= new secondOrigin("Apollo",Greek.name,Greek,[Flashy,Careful,Clever],[Sun,Crafting],[Politician]),
 Archimedes= new secondOrigin("Archimedes",Greek.name,Greek,[Clever,Careful,Forceful],[Crafting,Knowledge],[Thinker]),
 Ares= new secondOrigin("Ares",Greek.name,Greek,[Forceful,Flashy,Careful],[War],[Enforcer]),
 Artemis= new secondOrigin("Artemis",Greek.name,Greek,[Careful,Sneaky,Quick],[Moon,War],[FreeSpirit]),
 Athena= new secondOrigin("Athena",Greek.name,Greek,[Clever,Careful,Forceful],[War,Wisdom],[General]),
 Demeter= new secondOrigin("Demeter",Greek.name,Greek,[Flashy,Forceful,Clever],[Fertility],[Mother]),
 Dionysus= new secondOrigin("Dionysus",Greek.name,Greek,[Flashy,Careful,Clever],[Wit],[FreeSpirit,Harmonizer]),
 Gerald= new secondOrigin("Gerald",Greek.name,Greek,[Flashy,Forceful,Quick],[Fire,War],[Enforcer]),
 Hades= new secondOrigin("Hades",Greek.name,Greek,[Careful,Sneaky,Clever],[Death],[Politician,King]),
 Hephaestus= new secondOrigin("Hephaestus",Greek.name,Greek,[Clever,Careful,Forceful],[Crafting,Fire],[Thinker]),
 Hera= new secondOrigin("Hera",Greek.name,Greek,[Forceful,Sneaky,Clever],[Leader,Fertility],[]),
 Herakles= new secondOrigin("Herakles",Greek.name,Greek,[Forceful,Flashy,Quick],[War],[Prince,Enforcer]),
 Hermes= new secondOrigin("Hermes",Greek.name,Greek,[Quick,Clever,Sneaky],[Travel,Wit],[FreeSpirit]),
 Lyra= new secondOrigin("Lyra",Greek.name,Greek,[Clever,Quick,Sneaky],[Sky,Wit],[FreeSpirit]),
 Poseidon= new secondOrigin("Poseidon",Greek.name,Greek,[Flashy,Forceful,Careful],[Water],[King]),
 Zeus= new secondOrigin("Zeus",Greek.name,Greek,[Flashy,Forceful,Clever],[Leader,Sky],[King,Politician]),
 Baldur= new secondOrigin("Baldur",Aesir.name,Aesir,[Flashy,Careful,Quick],[Love,Fertility],[FreeSpirit,Prince]),
 Freya= new secondOrigin("Freya",Aesir.name,Aesir,[Clever,Forceful,Flashy],[War,Crafting],[Diplomat,Manipulator]),
 Freyr= new secondOrigin("Freyr",Aesir.name,Aesir,[Careful,Clever,Sneaky],[Fertility],[Harmonizer]),
 Frigg= new secondOrigin("Frigg",Aesir.name,Aesir,[Clever,Sneaky,Careful],[Leader],[Politician,King]),
 Heimdall= new secondOrigin("Heimdall",Aesir.name,Aesir,[Sneaky,Careful,Clever],[Justice],[Protector,Manipulator]),
 Hel= new secondOrigin("Hel",Aesir.name,Aesir,[Clever,Forceful,Sneaky],[Death],[Enforcer]),
 Odin= new secondOrigin("Odin",Aesir.name,Aesir,[Clever,Sneaky,Forceful],[Leader,Wisdom],[King,Manipulator]),
 Sif= new secondOrigin("Sif",Aesir.name,Aesir,[Careful,Clever,Forceful],[Love,Fertility],[Harmonizer]),
 Thor= new secondOrigin("Thor",Aesir.name,Aesir,[Forceful,Flashy,Quick],[War,Sky],[FreeSpirit,Protector]),
 Tyr= new secondOrigin("Tyr",Aesir.name,Aesir,[Forceful,Clever,Quick],[Justice,War],[Enforcer,General]),
 Vidar= new secondOrigin("Vidar",Aesir.name,Aesir,[Forceful,Clever,Sneaky],[Justice,Darkness],[Enforcer,Protector]),
 Loki= new secondOrigin("Loki",Aesir.name,Aesir,[Clever,Sneaky,Quick],[Wit],[Manipulator,Trickster]),
 Rod= new secondOrigin("Rod",BogiMuzhchin.name,BogiMuzhchin,[Careful,Sneaky,Clever],[Father],[FreeSpirit]),
 Lada= new secondOrigin("Lada",BogiMuzhchin.name,BogiMuzhchin,[Clever,Careful,Flashy],[Love ,Sun],[Mother,Diplomat]),
 Perun= new secondOrigin("Perun",BogiMuzhchin.name,BogiMuzhchin,[Forceful,Flashy,Clever],[Sky],[King,Protector]),
 Dodola= new secondOrigin("Dodola",BogiMuzhchin.name,BogiMuzhchin,[Careful,Sneaky,Clever],[Water ,Nature],[Mother,Protector]),
 Svarog= new secondOrigin("Svarog",BogiMuzhchin.name,BogiMuzhchin,[Clever,Careful,Sneaky],[Fire ,Crafting],[FreeSpirit,Thinker]),
 Dazbog= new secondOrigin("Dazbog",BogiMuzhchin.name,BogiMuzhchin,[Flashy,Quick,Forceful],[Sun],[Harmonizer,FreeSpirit]),
 Svetovid= new secondOrigin("Svetovid",BogiMuzhchin.name,BogiMuzhchin,[Clever,Sneaky,Careful],[Fertility ,Nature],[FreeSpirit,Harmonizer]),
 Veles= new secondOrigin("Veles",BogiMuzhchin.name,BogiMuzhchin,[Clever,Sneaky,Quick],[Earth ,Death],[Trickster,FreeSpirit]),
 Dziewona= new secondOrigin("Dziewona",BogiMuzhchin.name,BogiMuzhchin,[Clever,Quick,Careful],[Wisdom,Moon],[Mother,Harmonizer]),
 Belobog= new secondOrigin("Belobog",BogiMuzhchin.name,BogiMuzhchin,[Forceful,Quick,Flashy],[Order ,Sun],[Enforcer,Harmonizer]),
 Chernobog= new secondOrigin("Chernobog",BogiMuzhchin.name,BogiMuzhchin,[Clever,Sneaky,Careful],[Order ,Darkness],[Thinker,Enforcer]),
 Hors= new secondOrigin("Hors",BogiMuzhchin.name,BogiMuzhchin,[Careful,Clever,Flashy],[Nature ,Knowledge],[Harmonizer,Protector]),
 Jarilo= new secondOrigin("Jarilo",BogiMuzhchin.name,BogiMuzhchin,[Careful,Quick,Forceful],[War,Sun],[Protector,Prince]),
 Morana= new secondOrigin("Morana",BogiMuzhchin.name,BogiMuzhchin,[Careful,Forceful,Quick],[Death,Water],[Enforcer,Harmonizer]),
 Atlas= new secondOrigin("Atlas",Kosmos.name,Kosmos,[Careful,Forceful,Flashy],[Order,Earth],[FreeSpirit,Protector]),
 Coeus= new secondOrigin("Coeus",Kosmos.name,Kosmos,[Clever,Sneaky,Careful],[Order,Knowledge],[Thinker,Manipulator]),
 Kronus= new secondOrigin("Kronus",Kosmos.name,Kosmos,[Forceful,Clever,Careful],[Leader,Order],[King,General]),
 Zurvan= new secondOrigin("Zurvan",Kosmos.name,Kosmos,[Careful,Clever,Forceful],[Order,Justice],[Thinker,Diplomat]),
 Chronos= new secondOrigin("Chronos",Kosmos.name,Kosmos,[Careful,Clever,Forceful],[Order],[FreeSpirit,Thinker]),
 Iapetus= new secondOrigin("Iapetus",Kosmos.name,Kosmos,[Careful,Quick,Clever],[Order],[Diplomat]),
 Viswakarma= new secondOrigin("Viswakarma",Kosmos.name,Kosmos,[Clever,Flashy,Careful],[Order],[Politician,Thinker]),
 Ikenga= new secondOrigin("Ikenga",Kosmos.name,Kosmos,[Forceful,Careful,Clever],[Order],[Politician]),
 Issitoq= new secondOrigin("Issitoq",Kosmos.name,Kosmos,[Quick,Forceful,Flashy],[Order],[Enforcer,Trickster]),
 Menmosyne= new secondOrigin("Menmosyne",Kosmos.name,Kosmos,[Clever,Careful,Flashy],[Order],[Thinker,Diplomat]),
 Aten= new secondOrigin("Aten",Aether.name,Aether,[Clever,Forceful,Flashy],[Sun],[King,Manipulator]),
 Helios= new secondOrigin("Helios",Aether.name,Aether,[Clever,Flashy,Quick],[Sun],[FreeSpirit]),
 Hemera= new secondOrigin("Hemera",Aether.name,Aether,[Careful,Flashy,Clever],[Sun,Fertility],[Harmonizer,Mother]),
 Hyperion= new secondOrigin("Hyperion",Aether.name,Aether,[Flashy,Forceful,Careful],[Leader,Sun],[General,King]),
 Zhulong= new secondOrigin("Zhulong",Aether.name,Aether,[Clever,Careful,Flashy],[Wisdom,Sun],[Thinker]),
 Barachiel= new secondOrigin("Barachiel",Aether.name,Aether,[Forceful,Flashy,Quick],[War,Sun],[General]),
 Janaleth= new secondOrigin("Janaleth",Aether.name,Aether,[Forceful,Sneaky,Careful],[Sun,Earth],[General,Harmonizer]),
 Rasaj= new secondOrigin("Rasaj",Aether.name,Aether,[Careful,Clever,Forceful],[Wit,Sun],[Diplomat,Manipulator]),
 Abzu= new secondOrigin("Abzu",Nun.name,Nun,[Careful,Sneaky,Forceful],[Water,Darkness],[King,Manipulator]),
 Cipactli= new secondOrigin("Cipactli",Nun.name,Nun,[Forceful,Quick,Sneaky],[Water,Death],[Enforcer,Manipulator]),
 Tiamat= new secondOrigin("Tiamat",Nun.name,Nun,[Clever,Careful,Sneaky],[Water,Fertility],[Mother]),
 SulTharash= new secondOrigin("Sul’Tharash",Nun.name,Nun,[Forceful,Clever,Sneaky],[Water,War],[Enforcer]),
 BeastBelow= new secondOrigin("Beast Below",Nun.name,Nun,[Forceful,Sneaky,Careful],[Water,Darkness],[Hunter]),
 Sedna= new secondOrigin("Sedna",Oceanus.name,Oceanus,[Clever,Careful,Sneaky],[Water,Fertility],[Harmonizer]),
 Charybdis= new secondOrigin("Charybdis",Oceanus.name,Oceanus,[Forceful,Flashy,Sneaky],[Water,Death],[Hunter,Manipulator]),
 Yam= new secondOrigin("Yam",Oceanus.name,Oceanus,[Forceful,Flashy,Clever],[Leader,Water],[King,Manipulator]),
 Heget= new secondOrigin("Heget",Oceanus.name,Oceanus,[Forceful,Clever,Sneaky],[Water,Fertility],[Protector]),
 Lotan= new secondOrigin("Lotan",Oceanus.name,Oceanus,[Forceful,Sneaky,Flashy],[Water],[Enforcer]),
 DisPater= new secondOrigin("Dis Pater",Terra.name,Terra,[Clever,Flashy,Careful],[Earth,Crafting],[Harmonizer]),
 Gaia= new secondOrigin("Gaia",Terra.name,Terra,[Forceful,Careful,Flashy],[Fertility,Nature],[Mother]),
 Jord= new secondOrigin("Jord",Terra.name,Terra,[Clever,Sneaky,Careful],[Fertility],[Thinker]),
 GreenMan= new secondOrigin("Green Man",Terra.name,Terra,[Sneaky,Careful,Flashy],[Nature],[Harmonizer,FreeSpirit]),
 CromCruach= new secondOrigin("Crom Cruach",Terra.name,Terra,[Forceful,Sneaky,Quick],[Earth,Death],[General,Enforcer]),
 Ourea= new secondOrigin("Ourea",Terra.name,Terra,[Careful,Clever,Forceful],[Earth],[Thinker]),
 Kur= new secondOrigin("Kur",Terra.name,Terra,[Forceful,Careful,Clever],[Earth,Travel],[FreeSpirit]),
 CottusFurious= new secondOrigin("Cottus The Furious",Terra.name,Terra,[Forceful,Flashy,Sneaky],[Earth,Order],[General]),
 Behemoth= new secondOrigin("Behemoth",Terra.name,Terra,[Forceful,Careful,Flashy],[Nature],[Hunter]),
 Surtr= new secondOrigin("Surtr",Muspelheim.name,Muspelheim,[Forceful,Flashy,Quick],[Fire],[General,King]),
 Prometheus= new secondOrigin("Prometheus",Muspelheim.name,Muspelheim,[Clever,Quick,Flashy],[Fire,Crafting],[Thinker,FreeSpirit]),
 Kagutsuchi= new secondOrigin("Kagutsuchi",Muspelheim.name,Muspelheim,[Flashy,Forceful,Quick],[Fire,Earth],[Protector]),
 Nemesis= new secondOrigin("Nemesis",Muspelheim.name,Muspelheim,[Sneaky,Careful,Flashy],[Fire,Justice],[Manipulator]),
 Vrtra= new secondOrigin("Vrtra",Muspelheim.name,Muspelheim,[Flashy,Careful,Clever],[Fire,Death],[Manipulator]),
 Xiuhtecuhtli= new secondOrigin("Xiuhtecuhtli",Muspelheim.name,Muspelheim,[Flashy,Quick,Clever],[Fire,Fertility],[Harmonizer]),
 Glarvonjar= new secondOrigin("Glarvonjar",Muspelheim.name,Muspelheim,[Careful,Forceful,Flashy],[Fire,War],[General]),
 TalosMarkVIII= new secondOrigin("Talos Mark VIII",Muspelheim.name,Muspelheim,[Forceful,Flashy,Quick],[Fire,Crafting],[Enforcer]),
 Fafnir= new secondOrigin("Fafnir",Muspelheim.name,Muspelheim,[Clever,Forceful,Quick],[Fire,Sky],[Hunter]),
 Auahituroa= new secondOrigin("Auahituroa",Muspelheim.name,Muspelheim,[Flashy,Forceful,Quick],[Fire,Sky],[FreeSpirit])

]

function godRecommender(){

// Filters the Origins
if(document.getElementById("origins").options[document.getElementById("origins").selectedIndex].value != "noPreference"){
if(document.getElementById("origins").options[document.getElementById("origins").selectedIndex].value === "Gods"){newSecondOriginArray = secondOriginArray.filter(function (entry) { return entry.originVar.type ===  "God"})}
else if(document.getElementById("origins").options[document.getElementById("origins").selectedIndex].value === "Titans"){newSecondOriginArray = secondOriginArray.filter(function (entry) { return entry.originVar.type ===  "Titan"})}
else if(document.getElementById("origins").options[document.getElementById("origins").selectedIndex].value === "Otherworlds"){newSecondOriginArray = secondOriginArray.filter(function (entry) { return entry.originVar.type === "Otherworld"})}
else if(document.getElementById("origins").options[document.getElementById("origins").selectedIndex].value === "SecretSocieties"){newSecondOriginArray = secondOriginArray.filter(function (entry) { return entry.originVar.type === "Enlightened" })}
else{newSecondOriginArray = secondOriginArray.filter(function (entry) { return entry.originVar.name === document.getElementById("origins").options[document.getElementById("origins").selectedIndex].value; })}
}
else{newSecondOriginArray = secondOriginArray}

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

if(newSecondOriginArray.length % 3 === 1){newSecondOriginArray.push( Default= new secondOrigin(""))}
if(newSecondOriginArray.length % 3 === 2){newSecondOriginArray.push( Default= new secondOrigin(""));newSecondOriginArray.push( Default= new secondOrigin("Default"))}

var table = document.getElementById("Table");
	table.innerHTML = "";
	 
	 for(i=2;i<newSecondOriginArray.length;i+=3){
godCounter+=1
 if(godCounter <= 15){

var row = table.insertRow(-1);

var cell1 = row.insertCell(0);
var cell2 = row.insertCell(1);
var cell3 = row.insertCell(2);

cell1.innerHTML = '<a href="http://scionprimarchs.wikia.com/' + newSecondOriginArray[i-2].name + '"  target="_blank">'+newSecondOriginArray[i-2].name+'</a>'
cell2.innerHTML = '<a href="http://scionprimarchs.wikia.com/' + newSecondOriginArray[i-1].name + '"  target="_blank">'+newSecondOriginArray[i-1].name+'</a>'
cell3.innerHTML = '<a href="http://scionprimarchs.wikia.com/' + newSecondOriginArray[i].name + '"  target="_blank">'+newSecondOriginArray[i].name+'</a>'

	 }
}
}

function exampleLegendaryMaker(targetArray,targetPropertyOrigin,targetPropertyRole1,targetPropertyRole2,sizeLimit,targetWyrdbornOrigin,targetTextBox){
Total = new parameterCalculator("Total",[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0])

document.getElementById(targetTextBox).value = ""
  total = ""
  counter = 0
  for(i=0;i<parametersArray.length;i++){
if(document.getElementById('continent').value == "Wyrdborn"){
Total.legendaries[i] = ((targetWyrdbornOrigin[i]+targetPropertyOrigin[i])/2+Math.floor((targetPropertyRole1[i]/10*6+targetPropertyRole2[i]/10*4))) + "\n"
}
else{
	Total.legendaries[i] += targetPropertyOrigin.originVar.legendaries[i]/2 + (targetPropertyOrigin.approaches[0].legendaries[i]*3 + targetPropertyOrigin.approaches[1].legendaries[i]*2 + targetPropertyOrigin.approaches[2].legendaries[i])/12
	if(targetPropertyOrigin.domains.length === 1){Total.legendaries[i] += targetPropertyOrigin.domains[0].legendaries[i]/2}
	if(targetPropertyOrigin.domains.length === 2){Total.legendaries[i] += (targetPropertyOrigin.domains[0].legendaries[i] + targetPropertyOrigin.domains[1].legendaries[i])/4}
	if(targetPropertyOrigin.roles.length === 1){Total.legendaries[i] += targetPropertyOrigin.roles[0].legendaries[i]/2}
	if(targetPropertyOrigin.roles.length === 2){Total.legendaries[i] += (targetPropertyOrigin.roles[0].legendaries[i] + targetPropertyOrigin.roles[1].legendaries[i])/4}

/*
var secondOrigin = function(name,originString,originVar,approaches,domains,roles) {
  this.name = name;
  this.originString = originString;
  this.originVar = originVar;
  this.approaches = approaches;
  this.domains = domains;
  this.roles = roles;
};
Amaterasu = new secondOrigin("Amaterasu",Amatsukami.name,Amatsukami,[Clever,Flashy,Careful],[Sun,GodLeader],[Politician,Mother]),
*/

//+Math.floor((targetPropertyRole1[i]/10*6+targetPropertyRole2[i]/10*4)) 
}
} 	
function adder(value){
{for(i=0;i<targetArray.length;i++){if(Math.round(Total.legendaries[i])==value && counter<=sizeLimit){  document.getElementById(targetTextBox).value += targetArray[i].name + ": " + value+ "\n"; counter+=1}}}  
}
adder(9);adder(8);adder(7);adder(6);adder(5);adder(4);adder(3);adder(2);adder(1);adder(0);adder(-1);adder(-2);adder(-3);adder(-4);adder(-5);adder(-6);adder(-7);
}

function LegendaryMakerTotal(){
  godFound = secondOriginArray.filter(function (entry) { return entry.name === ChosenGod; })[0]
  roleFound = rolesChoiceArray.filter(function (entry) { return entry.name === ChosenFirstRole; })[0]
  roleFound2 = rolesChoiceArray.filter(function (entry) { return entry.name === ChosenSecondRole; })[0]
  wyrdbornFound = secondOriginArray.filter(function (entry) { return entry.name === ChosenWyrdborn; })[0]  
exampleLegendaryMaker(newAbilitiesArray,godFound,roleFound.legendaries,roleFound2.legendaries,9,wyrdbornFound,"LegendaryAbilities")  
//exampleLegendaryMaker(skillsArray,godFound.skills,roleFound.skills,roleFound2.skills,7,wyrdbornFound.skills,"Skills")
}

function intelligenceChoiceFunction(){

abilityName = prompt("What is the Name of this Variable ?")
originName = prompt("What is this Species' Origin ?")
variableName = abilityName.replace(/\s/g, '');
properties=0
propertiesSkill = 0
name = variableName + " = new secondOrigin(\"" + abilityName + "\","    
name+= "\"" + originName + "\","
name+= originName + ".name,"
for(i=0;i<legendaryAbilitiesArray.length;i++){
if(properties===0){name += "[" + prompt(legendaryAbilitiesArray[i].name)}
else{name+="," + prompt(legendaryAbilitiesArray[i].name)}
properties+=1
}
for(i=0;i<skillsArray.length;i++){
if(propertiesSkill===0){name+= "],[" + prompt(skillsArray[i].name)}
else{name+="," + prompt(skillsArray[i].name)}
propertiesSkill+=1
}


alert(name + "]),")
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
DruidismGreenDruid = new LegendaryAbility("Druidism: Green Druid",[1,2,0,1,0,-1,-1,2,-1,0,2,-2,-2,1,0,1,-2,-2,2,-1,0,1,2,1,1,4,0,-2,-3,3,-2,1,1,3,-2,-2,-1,-1,1,2,1,-1,1,2,0,1,3,3,1,0,3,4,1,-4,-3,-4,-4,1,-3,-4,-2,-3,-4,4,4,4,1,2,-1,-2,0,1,4]),
DruidismRunicDruid = new LegendaryAbility("Druidism: Runic Druid",[2,2,0,1,-2,-1,1,2,0,-2,-2,-3,-1,-2,-2,1,-1,0,2,4,-1,-1,2,-1,3,1,3,0,-1,-2,2,0,1,0,-1,-2,-2,-3,2,4,1,3,1,-2,3,3,2,1,-1,-2,2,3,1,0,-1,0,4,2,1,0,-1,0,-2,1,2,-1,0,1,3,1,3,2,4]),
DruidismFeySorcerySummer = new LegendaryAbility("Druidism: Fey Sorcery - Summer",[-2,0,3,3,1,-3,-2,-1,-1,0,3,1,-1,0,1,0,-4,3,2,-2,-4,4,0,-3,1,3,-1,-2,2,2,0,1,0,3,1,2,0,-1,1,2,1,-2,-2,4,2,0,3,2,3,2,0,2,3,-1,-3,-4,-3,1,1,-4,-2,-4,-4,6,-4,0,2,1,0,-2,1,-1,2]),
DruidismFeySorceryWinter = new LegendaryAbility("Druidism: Fey Sorcery - Winter",[2,3,0,1,1,3,-1,2,0,-3,-4,-2,2,2,1,2,2,-3,-1,-2,2,-4,1,3,1,2,0,-1,1,2,0,-2,1,-1,-2,1,3,3,0,1,2,-2,-1,-3,-2,4,-4,-1,-3,-3,3,2,-3,-4,-1,-1,-4,-2,-4,1,0,2,0,-4,4,2,-1,0,-1,1,-1,2,3]),
DruidismTechnodruidism = new LegendaryAbility("Druidism: Technodruidism",[1,3,1,0,2,1,-2,1,-2,-3,1,-2,-1,-2,-3,3,-1,1,2,0,0,-1,2,-1,4,2,-2,-2,-1,2,-3,-3,3,0,-1,0,-1,2,-1,-1,0,-1,0,1,1,1,-4,-3,1,-1,2,3,-4,-4,-4,-4,-4,0,0,-4,-2,-3,-4,1,1,-2,0,1,6,3,0,2,1]),
HematurgyYahuar = new LegendaryAbility("Hematurgy: Yahuar",[1,0,1,1,-1,-3,3,1,1,1,2,2,-1,1,0,-1,1,2,0,2,0,2,0,0,-1,-2,1,2,0,-2,2,2,0,2,1,3,1,-1,1,4,2,-2,-1,1,0,2,3,0,3,-1,-1,1,4,-3,-1,-2,-2,-3,0,-2,-3,-3,1,1,-1,0,1,0,-2,1,3,3,-1]),
HematurgyItztli = new LegendaryAbility("Hematurgy: Itztli",[-1,1,2,3,1,-1,3,1,2,0,1,2,0,1,1,1,3,3,1,2,0,4,0,1,-1,0,1,2,2,-2,3,1,-1,-1,2,4,2,1,0,2,4,-1,-1,1,0,1,1,-2,4,1,0,1,3,0,1,0,2,2,3,1,0,-1,2,3,1,1,2,2,0,3,2,4,-2]),
InvokationDeathNecromancy = new LegendaryAbility("Invokation: Death - Necromancy",[1,3,0,4,1,-1,1,2,0,-2,-3,-3,3,2,0,1,4,-1,1,-1,0,-1,1,2,0,-2,-1,1,0,-2,1,-1,0,-3,0,2,2,0,-1,2,1,1,2,3,3,1,-1,1,2,-3,1,3,0,-3,4,2,-1,-2,0,2,1,2,6,-2,2,3,1,0,-2,1,2,4,1]),
InvokationDeathShamanism = new LegendaryAbility("Invokation: Death - Shamanism",[2,3,0,-2,0,1,-1,3,0,-1,-2,-2,4,3,1,1,4,1,2,2,2,0,1,2,-2,-2,1,1,0,1,0,1,2,4,0,-1,-2,0,3,3,-1,2,3,4,2,0,3,2,0,3,2,3,2,-4,-3,-1,-2,-2,-3,-4,-4,0,2,-2,1,1,2,2,0,0,3,2,1]),
InvokationDeathSoulbinding = new LegendaryAbility("Invokation: Death - Soulbinding",[2,3,0,3,-1,1,1,1,1,-1,-3,-2,1,-1,-1,2,3,1,2,1,1,-1,2,2,4,-2,2,1,-1,-3,0,-2,1,-2,-1,0,3,2,0,3,-1,0,3,1,3,0,1,2,2,3,0,2,0,-3,2,1,2,1,3,2,0,2,4,-2,1,-1,2,2,3,4,3,3,2]),
InvokationDeathDestruction = new LegendaryAbility("Invokation: Death - Destruction",[-2,-2,3,4,2,-2,2,0,0,-2,-3,-2,2,2,1,-1,3,1,1,-1,1,-2,0,3,-1,-2,0,1,0,-1,0,-2,-1,-3,-1,3,2,-1,0,2,2,2,2,1,2,0,-1,2,3,1,0,1,0,-3,3,1,1,2,2,3,1,3,4,-3,3,3,3,2,0,1,2,4,-1]),
InvokationDeathHorror = new LegendaryAbility("Invokation: Death - Horror",[1,2,4,4,2,2,2,0,1,-2,-3,-1,1,2,2,-1,3,2,1,-1,1,-3,-1,3,0,-1,-2,2,1,-1,1,-2,-2,-2,-1,2,4,2,1,0,3,0,2,2,1,2,-2,2,3,-1,1,1,0,-1,3,2,-1,1,2,3,1,4,4,-3,3,3,2,0,-1,1,0,4,-1]),
MentalismChwalRider = new LegendaryAbility("Mentalism: Chwal - Rider",[2,2,-1,-1,0,3,-1,0,0,1,0,-1,2,2,1,3,1,-1,0,2,3,0,2,1,0,-1,0,-2,1,1,-1,0,0,1,-1,-2,3,4,2,0,1,-2,1,4,1,-2,1,1,-1,-1,0,0,-1,2,2,1,-1,-1,-2,3,1,4,1,2,3,0,3,1,2,4,1,4,-1]),
MentalismChwalPuppeteer = new LegendaryAbility("Mentalism: Chwal - Puppeteer",[1,2,-1,3,1,3,-2,0,2,0,0,1,2,2,0,2,3,0,1,0,3,-1,2,2,0,-1,1,0,4,1,2,0,1,2,0,1,4,2,2,-1,1,1,1,4,2,-1,2,1,2,0,-1,0,1,4,2,1,2,3,0,4,0,3,3,2,3,3,3,3,2,4,1,3,2]),
MentalismHekuSoothe = new LegendaryAbility("Mentalism: Heku - Soothe",[2,1,2,1,0,2,-2,2,2,0,1,2,1,2,3,0,2,0,2,3,3,0,1,0,-1,1,3,1,2,2,2,3,1,4,0,-1,1,1,4,3,0,2,4,1,4,0,1,3,0,4,1,1,2,4,-2,2,3,1,1,3,2,3,3,2,0,1,3,2,0,0,3,2,3]),
MentalismHekuRiot = new LegendaryAbility("Mentalism: Heku - Riot",[1,2,3,4,1,2,3,1,3,1,2,4,1,3,2,1,3,4,2,3,4,4,-1,3,0,2,0,4,3,3,3,2,-2,3,-1,0,4,2,2,3,3,2,0,3,0,2,3,0,4,-1,1,1,1,4,3,1,-1,2,4,3,1,4,2,4,-1,1,3,2,2,0,3,2,1]),
MentalismIllusion = new LegendaryAbility("Mentalism: Illusion",[2,2,-1,-1,1,3,-2,0,1,-1,-1,4,1,2,1,3,0,-1,-2,-2,4,2,1,4,-2,-1,-2,-2,3,1,1,-1,-1,2,1,-2,4,4,2,1,2,3,2,3,1,0,-1,2,0,4,-1,1,-1,4,2,1,0,0,-1,4,1,4,2,4,4,1,1,0,0,3,2,4,1]),
WyrdseeingMystery = new LegendaryAbility("Wyrdseeing: Mystery",[2,1,0,-1,-1,1,-1,4,2,-1,-2,1,1,3,2,2,0,2,-1,3,4,2,4,1,0,1,2,1,1,3,1,0,3,2,-1,-2,1,0,2,2,2,1,4,2,3,1,2,3,0,2,1,4,1,2,4,3,2,1,1,3,3,2,2,2,2,2,3,4,2,2,3,1,4]),


	]
	
for(i=0;i<newAbilitiesArray.length;i++){
for(j=0;j<parametersArray.length;j++){
	parametersArray[j].legendaries.push(newAbilitiesArray[i].legendaries[j])
}}
//alert(parametersArray[17].name + parametersArray[17].legendaries[0])
}
addAnAbility()

// Test the length of Legendaries
//lengthChecker()
// Test the Legendaries
//exampleLegendaryMaker(legendaryAbilitiesArray,godFound.legendaries,roleFound.legendaries,roleFound2.legendaries,9,wyrdbornFound.legendaries)
// Test the Skills
//exampleLegendaryMaker(skillsArray,godFound.skills,roleFound.skills,roleFound2.skills,7,wyrdbornFound.skills)
// Create a new Origin
//intelligenceChoiceFunction()
// Create an Ability
//addAnAbilityMaker()
// Test the Legendaries AND Skills. Adds the extra Abilities
//LegendaryMakerTotal()
















// This Part deals with the Select Boxes and their displaying behaviors.

  //__________________________________________________
	// Types 
  //__________________________________________________

	
	// array of possible countries in the same order as they appear in the country selection list 
	var countryLists = new Array(3) 
	countryLists["empty"] = ["Select an Origin"]; 
	countryLists["Godborn"] = ["Select an Origin","Aesir: Norse Gods", "Amatsukami: Japanese Gods", "Atzlánti: Aztec Gods", "Celestial Bureaucracy: Chinese Gods", "Deva: Hindu Gods", "Dodekatheon: Greek Gods", "Orisha: African Gods", "Neter: Egyptian Gods", "Tuatha Dé Danaan: Celtic Gods"]; 
	countryLists["Mythborn"] = ["Select an Origin","Dark Forest", "Summer Court", "Winter Court", "Jade Sea", "Shambhala"]; 
	countryLists["Wyrdborn"] = ["Select an Origin","Aesir: Norse Gods", "Amatsukami: Japanese Gods", "Atzlánti: Aztec Gods", "Celestial Bureaucracy: Chinese Gods", "Deva: Hindu Gods", "Dodekatheon: Greek Gods", "Orisha: African Gods", "Neter: Egyptian Gods", "Tuatha Dé Danaan: Celtic Gods"]; 
	countryLists["Enlightened"] = ["Select an Origin","Cabal", "Circle of Merlin", "Illuminati", "Order of the Jade Fist"]; 
	/* CountryChange() is called from the onchange event of a select element.
	* param selectObj - the select object which fired the on change event. 
	*/ 
	
	function countryChange(selectObj2) { 
	var idx = selectObj2.selectedIndex; 
	var which = selectObj2.options[idx].value; 
	cList2 = countryLists[which]; 
	var cSelect = document.getElementById("country"); 
	var len=cSelect.options.length; 
	while (cSelect.options.length > 0) { 
	cSelect.remove(0); 
	} 
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

ChosenFirstRole = "Weep"
ChosenSecondRole = "Wuup"
ChosenGod = "Woop"	
ChosenWyrdborn = "Winter Fey"

function setChosenPantheon(selectedBox){
curatedName = selectedBox.options[selectedBox.selectedIndex].value.substr(0,selectedBox.options[selectedBox.selectedIndex].value.indexOf(":"))
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

function setWyrdborn(selectedBox){
	ChosenWyrdborn = selectedBox.options[selectedBox.selectedIndex].value;}
	
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
// Wyrdborn Options	
	var godLists = new Array(9) 
	godLists["empty"] = ["Select a Second Origin"]; 
	godLists["Aesir: Norse Gods"] = ["Witch", "Nymph", "Ent", "Summer Fey", "Summer Elf", "Winter Fey", "Winter Elf", "Western Dragon"]; 
	godLists["Amatsukami: Japanese Gods"] = ["Witch", "Nymph", "Ent", "Summer Fey", "Summer Elf", "Winter Fey", "Winter Elf", "Eastern Dragon"]; 
	godLists["Atzlánti: Aztec Gods"] = ["Witch", "Nymph", "Ent", "Coatl"]; 
	godLists["Celestial Bureaucracy: Chinese Gods"] = ["Witch", "Nymph", "Summer Elf", "Winter Elf", "Eastern Dragon"]; 
	godLists["Deva: Hindu Gods"] = ["Nymph", "Summer Elf", "Eastern Dragon","Naga","Asura","Rakshasa"]; 
	godLists["Dodekatheon: Greek Gods"] = ["Witch", "Nymph", "Summer Fey", "Summer Elf"]; 
	godLists["Orisha: African Gods"] = ["Witch", "Nymph", "Summer Fey", "Summer Elf"]; 
	godLists["Neter: Egyptian Gods"] = ["Summer Elf","Summer Fey"]; 
	godLists["Tuatha Dé Danaan: Celtic Gods"] = ["Witch", "Nymph", "Ent", "Summer Fey", "Summer Elf", "Winter Fey", "Winter Elf", "Western Dragon"]; 
	godLists["Shambhala"] = ["Meat Shield", "Damage Dealer", "Party Face", "Skill Monkey"]; 
	godLists["Winter Court"] = ["Meat Shield", "Damage Dealer", "Party Face", "Skill Monkey"]; 
	godLists["Summer Court"] = ["Meat Shield", "Damage Dealer", "Party Face", "Skill Monkey"]; 
	godLists["Jade Sea"] = ["Meat Shield", "Damage Dealer", "Party Face", "Skill Monkey"]; 
	godLists["Dark Forest"] = ["Meat Shield", "Damage Dealer", "Party Face", "Skill Monkey"]; 
	godLists["Cabal"] = ["Meat Shield", "Damage Dealer", "Party Face", "Skill Monkey"]; 
	godLists["Circle of Merlin"] = ["Meat Shield", "Damage Dealer", "Party Face", "Skill Monkey"]; 
	godLists["Illuminati"] = ["Meat Shield", "Damage Dealer", "Party Face", "Skill Monkey"]; 
	godLists["Order of the Jade Fist"] = ["Meat Shield", "Damage Dealer", "Party Face", "Skill Monkey"]; 

function speciesChange(selectObj) { 
	var idx = selectObj.selectedIndex; 
	var which = selectObj.options[idx].value; 
	cList2 = godLists[which]; 
	var cSelect = document.getElementById("wyrdbornOrigin"); 
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
	


	// ______________________________________________
	// Origins Test, trying to make a select box appear based on other select boxes
	function wyrdbornDisplay(){
	if (document.getElementById('continent').value == 'Wyrdborn') {document.getElementById('wyrdbornOrigin').style.display = 'block';document.getElementById('wyrdbornOriginLabel').style.display = 'block' } 
	else {document.getElementById('wyrdbornOrigin').style.display = 'none';document.getElementById('wyrdbornOriginLabel').style.display = 'none' } 	
	}
	function wyrdbornHide(){document.getElementById('wyrdbornOrigin').style.display = 'none';document.getElementById('wyrdbornOriginLabel').style.display = 'none' }
	function test() {
// Mythborn Options
	if (document.getElementById('country').value == 'Dark Forest') {document.getElementById('darkForestLabel').style.display = 'block';document.getElementById('darkForest').style.display = 'block' } 
	else if (document.getElementById('country').value == 'Summer Court') {document.getElementById('summerCourtLabel').style.display = 'block'; document.getElementById('summerCourt').style.display = 'block'} 
	else if (document.getElementById('country').value == 'Jade Sea') {document.getElementById('jadeSeaLabel').style.display = 'block'; document.getElementById('jadeSea').style.display = 'block'}
	else if (document.getElementById('country').value == 'Winter Court') {document.getElementById('winterCourtLabel').style.display = 'block'; document.getElementById('winterCourt').style.display = 'block'}
	else if (document.getElementById('country').value == 'Shambhala') {document.getElementById('shambhalaLabel').style.display = 'block'; document.getElementById('shambhala').style.display = 'block'}
//	else if (document.getElementById('country').value == 'Other') {document.getElementById('othersLabel').style.display = 'block'; document.getElementById('others').style.display = 'block'}
// God Options
	else if (document.getElementById('country').value == 'Aesir: Norse Gods') {document.getElementById('aesirLabel').style.display = 'block'; document.getElementById('aesir').style.display = 'block'}
	else if (document.getElementById('country').value == 'Amatsukami: Japanese Gods') {document.getElementById('amatsukamiLabel').style.display = 'block'; document.getElementById('amatsukami').style.display = 'block'}
	else if (document.getElementById('country').value == 'Atzlánti: Aztec Gods') {document.getElementById('atzlantiLabel').style.display = 'block'; document.getElementById('atzlanti').style.display = 'block'}
	else if (document.getElementById('country').value == 'Celestial Bureaucracy: Chinese Gods') {document.getElementById('celestialBureaucracyLabel').style.display = 'block'; document.getElementById('celestialBureaucracy').style.display = 'block'}
	else if (document.getElementById('country').value == 'Deva: Hindu Gods') {document.getElementById('devaLabel').style.display = 'block'; document.getElementById('deva').style.display = 'block'}
	else if (document.getElementById('country').value == 'Dodekatheon: Greek Gods') {document.getElementById('dodekatheonLabel').style.display = 'block'; document.getElementById('dodekatheon').style.display = 'block'}
	else if (document.getElementById('country').value == 'Orisha: African Gods') {document.getElementById('orishaLabel').style.display = 'block'; document.getElementById('orisha').style.display = 'block'}
	else if (document.getElementById('country').value == 'Neter: Egyptian Gods') {document.getElementById('neterLabel').style.display = 'block'; document.getElementById('neter').style.display = 'block'}
	else if (document.getElementById('country').value == 'Tuatha Dé Danaan: Celtic Gods') {document.getElementById('tuathaLabel').style.display = 'block'; document.getElementById('tuatha').style.display = 'block'}

// Enlightened Options
	else if (document.getElementById('country').value == 'Cabal') {document.getElementById('cabalLabel').style.display = 'block'; document.getElementById('cabal').style.display = 'block'}
	else if (document.getElementById('country').value == 'Circle of Merlin') {document.getElementById('merlinLabel').style.display = 'block'; document.getElementById('merlin').style.display = 'block'}
	else if (document.getElementById('country').value == 'Illuminati') {document.getElementById('illuminatiLabel').style.display = 'block'; document.getElementById('illuminati').style.display = 'block'}
	else if (document.getElementById('country').value == 'Order of the Jade Fist') {document.getElementById('jadefistLabel').style.display = 'block'; document.getElementById('jadefist').style.display = 'block'};

	}
	

	
	function hide() {
// Hide Boxes
// Mythborn Options
	document.getElementById('darkForest').style.display = 'none' 
	document.getElementById('summerCourt').style.display = 'none' 
	document.getElementById('jadeSea').style.display = 'none'
	document.getElementById('winterCourt').style.display = 'none'
	document.getElementById('shambhala').style.display = 'none'
	document.getElementById('others').style.display = 'none'
// God Options
	document.getElementById('aesir').style.display = 'none'
	document.getElementById('amatsukami').style.display = 'none'
	document.getElementById('atzlanti').style.display = 'none'
	document.getElementById('celestialBureaucracy').style.display = 'none'
	document.getElementById('deva').style.display = 'none'
	document.getElementById('dodekatheon').style.display = 'none'
	document.getElementById('orisha').style.display = 'none'
	document.getElementById('neter').style.display = 'none'
	document.getElementById('tuatha').style.display = 'none'
// Enlightened Options
	document.getElementById('cabal').style.display = 'none'
	document.getElementById('merlin').style.display = 'none'
	document.getElementById('illuminati').style.display = 'none'
	document.getElementById('jadefist').style.display = 'none';
	
// Hide Labels
// Mythborn Options
	document.getElementById('darkForestLabel').style.display = 'none' 
	document.getElementById('summerCourtLabel').style.display = 'none' 
	document.getElementById('jadeSeaLabel').style.display = 'none'
	document.getElementById('winterCourtLabel').style.display = 'none'
	document.getElementById('shambhalaLabel').style.display = 'none'
	document.getElementById('othersLabel').style.display = 'none'
// God Options
	document.getElementById('aesirLabel').style.display = 'none'
	document.getElementById('amatsukamiLabel').style.display = 'none'
	document.getElementById('atzlantiLabel').style.display = 'none'
	document.getElementById('celestialBureaucracyLabel').style.display = 'none'
	document.getElementById('devaLabel').style.display = 'none'
	document.getElementById('dodekatheonLabel').style.display = 'none'
	document.getElementById('orishaLabel').style.display = 'none'
	document.getElementById('neterLabel').style.display = 'none'
	document.getElementById('tuathaLabel').style.display = 'none'
// Enlightened Options
	document.getElementById('cabalLabel').style.display = 'none'
	document.getElementById('merlinLabel').style.display = 'none'
	document.getElementById('illuminatiLabel').style.display = 'none'
	document.getElementById('jadefistLabel').style.display = 'none';
	


document.getElementById ("OriginLink").href = "http://scionprimarchs.wikia.com/"
document.getElementById('OriginLink').style.display = 'none'
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
	
