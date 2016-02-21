
var LegendaryAbility = function(name) {
  this.name = name;
};

var Role = function(name,legendaries,skills) {
  this.name = name;
  this.legendaries = legendaries;
  this.skills = skills;

};

var secondOrigin = function(name,origin,legendaries,skills) {
  this.name = name;
  this.origin = origin;
  this.legendaries = legendaries;
  this.skills = skills;

};

Total = new secondOrigin("Total","total",[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0])

var legendaryAbilitiesArray = [
// Each Ability has, for each applicable Role and God, a Rating. The higher the rating, the more
// recommended the ability/skill is. This allows both automated generation or a "recommended" setting for character gen
  
  
wyrdseeingProphecy = new LegendaryAbility("Wyrdseeing: Prophecy"),
// Druidism
druidismRunes = new LegendaryAbility("Druidism: Runes"),
druidismGreen = new LegendaryAbility("Druidism: Green Druid"),
druidismMythcalling = new LegendaryAbility("Druidism: Mythcalling"),
druidismTechnodruid = new LegendaryAbility("Druidism: Technodruid"),
druidismFey = new LegendaryAbility("Druidism - Fey Sorcery"),


// Invokation
fireCreation = new LegendaryAbility("Invokation: Fire - Creation"),
fireDestruction = new LegendaryAbility("Invokation: Fire - Destruction"),
fireDrought = new LegendaryAbility("Invokation: Fire - Drought"),
fireLava = new LegendaryAbility("Invokation: Fire - Lava"),
fireSummoning = new LegendaryAbility("Invokation: Fire - Summoning"),
nightVeil = new LegendaryAbility("Invokation: Night - Veil"),
nightFear = new LegendaryAbility("Invokation: Night - Fear"),
nightMoon = new LegendaryAbility("Invokation: Night - Moonlight"),
darknessSenses = new LegendaryAbility("Invokation: Darkness - Senses"),
darknessVoid = new LegendaryAbility("Invokation: Darkness - Void"),
darknessUnderground = new LegendaryAbility("Invokation: Darkness - Underground"),
lightIllumination = new LegendaryAbility("Invokation: Light - Illumination"),
lightGlory = new LegendaryAbility("Invokation: Light - Glory"),
lightSun = new LegendaryAbility("Invokation: Light - Sun"),
lightBrightness = new LegendaryAbility("Invokation: Light - Brightness"),
skyTempest = new LegendaryAbility("Invokation: Sky - Tempest"),
skyDestruction = new LegendaryAbility("Invokation: Sky - Destruction"),
skyCalm = new LegendaryAbility("Invokation: Sky - Calm"),
skyLightning = new LegendaryAbility("Invokation: Sky - Lightning"),
earthAbundance = new LegendaryAbility("Invokation: Earth - Abundance"),
earthCreation = new LegendaryAbility("Invokation: Earth - Creation"),
earthFertility = new LegendaryAbility("Invokation: Earth - Fertility"),
earthNature = new LegendaryAbility("Invokation: Earth - Nature"),
earthDecay = new LegendaryAbility("Invokation: Earth - Decay"),
earthStone = new LegendaryAbility("Invokation: Earth - Stone"),
earthLand = new LegendaryAbility("Invokation: Earth - Land"),
waterAbyss = new LegendaryAbility("Invokation: Water - Abyss"),
waterTerror = new LegendaryAbility("Invokation: Water - Terror"),
waterLife = new LegendaryAbility("Invokation: Water - Life"),
waterSummoning = new LegendaryAbility("Invokation: Water - Summoning"),
waterDrown = new LegendaryAbility("Invokation: Water - Drowning"),
waterSea = new LegendaryAbility("Invokation: Water - Sea"),
waterIce = new LegendaryAbility("Invokation: Water - Ice"),
waterMist = new LegendaryAbility("Invokation: Water - Mist"),
deathPsychopomp = new LegendaryAbility("Invokation: Death - Psychopomp"),
deathDestruction = new LegendaryAbility("Invokation: Death - Destruction"),
deathNecromancer = new LegendaryAbility("Invokation: Death - Necromancy"),
deathShamanism = new LegendaryAbility("Invokation: Death - Shamanism"),

// Hematurgy
hematurgyItztli = new LegendaryAbility("Hematurgy - Itztli"),
hematurgyYahuar = new LegendaryAbility("Hematurgy - Yahuar"),
                                        
// Epic Phsyiology
physiqueStrength = new LegendaryAbility("Epic Physique - Strength"),
physiqueToughness = new LegendaryAbility("Epic Physique - Toughness"),
presenceLeader = new LegendaryAbility("Epic Presence"),
appearanceBeauty = new LegendaryAbility("Epic Appearance - Beauty"),
sensesDexterity = new LegendaryAbility("Epic Senses - Dexterity"),

// Pantheon-Specific Abilities
hekuRiot = new LegendaryAbility("Heku - Riot"),
hekuSoothe = new LegendaryAbility("Heku - Soothe"),
taiyiManipulator = new LegendaryAbility("Taiyi - Legend-Molding"),
taiyiFlow = new LegendaryAbility("Taiyi - Flow Manipulation"),


// Zoothropy
zoothropyLion = new LegendaryAbility("Zoothropy: Lion"),
zoothropyFrog = new LegendaryAbility("Zoothropy - Frog"),
zoothropyDragon = new LegendaryAbility("Zoothropy - Dragon"),
zoothropyCat = new LegendaryAbility("Zoothropy - Cat"),
zoothropyJackal = new LegendaryAbility("Zoothropy - Jackal"),
zoothropyEagle = new LegendaryAbility("Zoothropy - Eagle"),
zoothropyDog = new LegendaryAbility("Zoothropy - Dog"),
zoothropyJaguar = new LegendaryAbility("Zoothropy - Jaguar"),
zoothropySnake = new LegendaryAbility("Zoothropy - Snake")


]

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
MeatShield = new Role("Meat Shield",[2,4,3,1,3,2,3,1,1,3,3,2,-1,-1,3,-2,1,-2,-1,0,2,3,0,2,-1,3,1,-1,2,2,4,3,-1,1,2,2,-2,-1,3,2,-3,-2,0,-2,-1,4,3,4,2,-1,1,-1,0,-2,3,1,-1,2,-2,-1,-2,3,2,1],[3,-2,-1,2,1,4,3,3,4,3,-1,-2,1,0,4]),
DamageDealer = new Role("Damage Dealer",[2,0,0,1,2,3,2,4,2,4,3,-2,-3,-1,-2,4,1,-1,0,3,1,3,4,-1,3,2,1,0,-1,4,2,-1,3,1,2,2,3,1,3,3,-4,4,1,1,4,1,4,2,-1,-2,4,-2,-2,-1,1,2,3,4,2,1,2,1,4,4],[3,-1,-2,3,-2,4,4,1,1,0,-1,-2,4,4,3]),
PartyFace = new Role("Party Face",[1,1,0,3,1,4,2,-3,-3,-4,-3,1,4,3,3,1,1,2,4,2,4,1,-2,4,-1,-1,-1,-2,-1,-3,-3,-2,3,4,-1,-1,1,0,-3,-2,1,-3,-3,3,-2,-1,-4,-4,4,4,-4,4,4,-2,-3,3,-2,2,2,1,2,3,1,4],[1,0,4,2,1,-2,2,2,-1,4,4,4,-2,-1,0]),
SkillMonkey = new Role("Skill Monkey",[4,4,3,4,4,4,4,-2,-3,-2,-1,4,2,2,2,-1,-1,4,3,2,2,0,-2,-1,-1,3,2,1,2,-1,-1,1,-1,-2,1,2,-2,3,1,3,3,0,1,4,2,1,-2,-3,-1,-2,-1,0,-1,3,2,1,2,2,4,-2,3,3,1,2],[3,4,1,4,2,1,4,4,1,0,1,4,1,4,3]),
SupportController = new Role("Support-Controller",[4,4,3,3,4,4,4,1,3,3,4,4,4,2,4,1,3,4,4,3,4,4,1,4,-1,3,3,4,3,2,3,3,4,3,2,3,3,0,3,3,-1,-2,3,2,2,4,-1,-1,4,4,0,4,4,2,4,2,1,2,0,1,1,-1,-3,-1],[2,-1,4,4,4,2,4,1,2,3,4,-1,-2,1,4]),


]

var secondOriginArray = [
  // Aesir
Baldur = new secondOrigin("Baldur","Aesir",[3,1,0,-1,-1,-1,2,-2,-3,-3,-3,-4,-4,-4,-4,-4,-4,4,4,4,4,-2,-3,0,-2,-1,-2,2,0,-3,-2,-2,-3,-3,-2,-3,-3,-2,-2,-2,-4,-4,-4,-4,0,2,3,2,4,4,2,3,3,0,0,-3,-3,-3-3,-3,-3-3,-3,-3],[3,-1,3,0,1,2,2,1,2,3,2,3,0,-1,3]),
Freya = new secondOrigin("Freya","Aesir",[2,2,1,2,-2,0,-1,-4,-4,-3,1,-1,-1,-1,-2,-2,-3,3,3,2,3,1,-2,2,-1,0,2,4,2,-3,-1,1,-4,-4,1,0,-2,0,-1,0,-1,-2,-3,1,-1,3,-2,-3,3,4,1,3,4,2,0,-3,-3,-3,3,-3,-3,-3,-3,-3],[2,-1,2,0,2,2,3,3,-1,1,2,2,2,2,2]),
Freyr = new secondOrigin("Freyr","Aesir",[-2,2,3,2,1,-1,3,-2,-3,-3,-1,-4,-4,-2,-3,-3,0,1,2,3,1,-2,-3,2,-1,4,3,4,3,-4,1,4,-2,-3,2,1,-3,2,-1,-2,-4,-4,-4,-2,-3,1,3,3,1,2,0,-1,1,-2,-2,-3,-3,-3,-3,-3,-3,-3,-3,-3],[3,-1,2,1,3,2,2,2,3,1,-1,4,1,0,2]),
Frigg = new secondOrigin("Frigg","Aesir",[4,3,3,3,0,3,2,-2,-4,-1,1,-2,-3,-2,-3,-3,-2,-1,-2,1,0,1,-1,2,0,3,3,3,4,-1,2,3,-2,-3,1,1,-4,1,-1,1,-2,-4,-3,0,-2,0,-1,1,-2,2,-3,-3,-1,2,2,-3,-4,-4,-4,-4,-4,-4,-4,-3],[1,-1,3,-2,1,0,4,2,3,1,1,2,0,0,3]),
Heimdall = new secondOrigin("Heimdall","Aesir",[3,4,1,1,1,-2,-1,-2,-3,-3,-3,0,-2,-3,2,-1,0,-1,-2,0,-1,0,-2,-1,-1,0,-1,-1,-2,-3,2,0,-1,-2,-3,-2,-2,-3,1,2,-2,-3,-3,1,1,2,3,4,2,-1,2,1,1,1,2,-3,-3,-3,-3,-3,-3,-3,-3,-3],[2,2,2,2,0,3,2,4,3,2,3,2,3,4,3]),
Hel = new secondOrigin("Hel","Aesir",[2,2,-3,-2,-4,0,-2,-1,0,-2,-3,2,3,0,3,4,4,-3,-4,-4,-3,-2,0,-3,-3,0,-2,-3,-4,3,1,-2,-1,1,-3,-3,-1,-3,3,3,4,4,4,2,-1,-4,-1,-2,1,4,-1,2,-2,-2,-1,-4,-4,-4,-4,-4,-4,-4,-4,-3],[-2,-1,-3,-1,-2,0,3,1,2,4,2,2,1,0,3]), 
Loki = new secondOrigin("Loki","Aesir",[3,2,-2,1,-2,3,1,-2,-3,-3,1,2,2,1,2,0,-1,3,1,-2,3,-1,-1,0,-2,-3,-2,-3,-2,1,-1,-2,-2,0,-1,-1,-1,-2,-2,1,1,1,-1,-2,2,-1,-1,-2,4,4,2,4,4,2,3,-3,-4,-4,-4,-4,-4,-4,-4,-3],[1,4,3,2,-1,-1,3,2,-2,2,4,2,1,4,3]),
Odin = new secondOrigin("Odin","Aesir",[4,4,2,3,0,2,1,1,-2,1,0,-2,-1,0,-2,0,-1,3,3,0,0,0,-1,0,0,-2,-1,0,-1,-2,1,2,-1,0,-2,-2,-3,-2,0,1,3,2,1,3,0,1,2,2,4,1,2,2,2,1,2,-3,-3,-3,-3,-3,-3,-3,-3,-3],[2,-1,1,1,0,2,4,2,1,2,3,3,1,-1,4]),
Sif = new secondOrigin("Sif","Aesir",[1,2,2,1,-2,1,-1,-2,-4,-4,-1,-3,-4,-2,-3,-4,-1,2,3,1,2,-1,-1,2,0,4,3,4,3,-2,1,4,-1,-2,1,-2,-3,-2,-3,-1,-3,-3,-4,1,-2,2,2,2,-1,4,-1,2,2,1,0,-3,-3,-3,-3,-3,-3,-3,-3,-3],[3,-1,3,1,1,2,1,1,2,0,-1,2,1,-1,1]),
Thor = new secondOrigin("Thor","Aesir",[-2,3,-2,-1,-2,-1,-2,2,1,2,-1,-2,0,0,-3,0,-1,0,2,1,1,4,4,0,4,-1,-2,-2,-3,-4,2,1,-2,-1,-2,-3,-4,2,-3,1,-3,-3,-4,-1,-1,2,4,4,2,1,3,1,1,2,2,-3,-4,-3,-3,-3,-3,-3,-3,-3],[4,-2,3,-1,-2,4,1,1,4,3,-2,-1,1,-4,3]),
Tyr = new secondOrigin("Tyr","Aesir",[1,3,0,0,-1,-2,1,1,-2,0,-2,-3,-4,-3,-2,-3,-2,-1,2,0,0,1,0,2,0,1,-1,-2,-1,-3,2,1,-1,-3,-1,0,-3,-2,-1,-1,-3,-4,-4,-3,1,3,3,4,3,-1,3,2,2,1,2,-3,-4,-4,-4,-4,-4,-4,-4,-3],[3,-2,2,1,1,3,2,2,3,3,-1,1,2,-1,4]),
Vidar = new secondOrigin("Vidar","Aesir",[2,3,-2,1,0,-1,1,2,-1,0,0,2,2,1,3,1,3,2,-1,-2,1,1,-1,-3,-2,-2,-1,-2,-3,-3,1,-1,0,2,-1,-2,-3,-2,-1,2,-4,-1,-2,0,3,2,2,2,4,2,3,3,3,3,3,-3,-3,-3,-3,-3,-3,-3,-3,-3],[1,2,0,2,-1,3,2,3,2,3,4,1,3,3,3]),

  // Amatsukami
Amaterasu = new secondOrigin("Amaterasu","Amatsukami",[2,-2,-1,1,-2,-3,0,1,1,0,1,-4,-4,-3,-4,-4,-4,3,4,4,4,2,1,3,1,0,2,1,2,-3,-2,2,-3,-3,-1,-1,-4,1,-3,-2,-3,-2,-4,1,-2,-1,1,-1,4,4,2,3,4,4,3,-3,-3,-3,-3,-3,-3,-3,-3],[-1,-3,2,-2,0,-2,4,1,-1,4,1,3,4,-3,3]),
Hachiman = new secondOrigin("Hachiman","Amatsukami",[-1,1,-2,2,0,0,2,1,0,-1,0,-2,-3,-3,-3,-4,-3,-1,1,0,-1,0,0,1,0,3,2,4,3,-1,1,4,1,1,2,2,1,4,-2,1,-2,-3,-3,2,-2,2,3,2,3,1,3,1,1,1,2,-3,-3,-3,-3,-3,-3,-3,-3],[4,1,2,1,1,3,2,2,3,0,0,2,2,1,2]),
Izanagi = new secondOrigin("Izanagi","Amatsukami",[1,1,2,2,-2,-3,2,0,-1,-1,0,-2,-2,-3,-3,-3,-4,2,2,1,1,3,2,3,2,2,3,2,3,-4,1,1,-2,-3,1,0,-1,1,-1,-1,-2,-3,-4,2,-1,0,2,1,4,2,-1,2,2,3,4,-3,-3,-3,-3,-3,-3,-3,-3],[2,-2,-1,-2,1,2,4,1,2,3,1,3,1,0,3]),
Izanami = new secondOrigin("Izanami","Amatsukami",[2,1,-2,1,-1,2,-2,-3,-3,-2,-1,3,3,2,4,4,4,-3,-4,-4,-3,-2,-2,0,-2,-2,-1,-3,,4,0,-2,3,3,-2,0,2,-2,0,1,4,4,4,4,4,2,-2,-2,3,3,-2,2,-2,2,2,-3,-3,-3,-3,-3,-3,-3,-3,4],[-2,-1,-3,-1,-2,0,4,2,2,3,1,2,0,3,3]),
Raiden = new secondOrigin("Raiden","Amatsukami",[-1,2,1,2,1,-1,1,2,2,0,1,0,2,1,-1,-2,-4,-1,-2,-1,1,4,4,3,4,-1,-2,-3,-2,-3,0,1,2,2,0,1,0,3,0,2,-1,0,-2,0,2,-1,3,3,2,4,2,3,1,2,3,-3,-3,-3,-3,-3,-3,-3,-3,-3],[2,-2,1,2,-1,2,3,1,3,1,-1,-2,3,-3,2]),
Ryujin = new secondOrigin("Ryujin","Amatsukami",[2,3,1,3,-1,-1,1,2,-4,1,-3,-2,1,2,-2,2,-3,2,2,-2,-1,3,3,3,2,-2,-2,-3,-2,-2,-1,-2,4,4,2,3,2,4,2,4,-1,2,-3,1,2,1,3,3,3,-2,0,2,2,-1,3,-3,-3,4,-3,-3,-3,-3,-3,2],[2,-2,-1,-1,-2,3,4,2,4,2,2,1,2,-2,3]),
Susanoo = new secondOrigin("Susano-o","Amatsukami",[-2,-1,-2,-2,-1,0,-1,1,1,0,1,-2,-1,0,-2,-3,-2,1,2,0,0,3,2,1,0,0,-1,2,1,-2,-1,1,1,-1,-1,-1,-2,3,-1,1,-3,-4,-4,-1,1,2,3,2,3,2,4,3,1,1,3,-3,-3,-2,-3,-3,-3,-3,-3,-3],[4,-1,1,-1,-2,3,1,2,2,2,1,0,2,1,2]),
TsukiYomi = new secondOrigin("Tsuki Yomi","Amatsukami",[2,-1,-1,1,-2,1,-1,-2,-3,-3,-2,3,2,4,2,1,-1,-2,-1,-2,1,2,3,4,1,1,-1,-2,-1,-2,0,-1,1,1,-1,-1,0,1,1,2,2,0,1,3,-1,0,-1,1,1,2,3,1,3,2,3,-3,-3,-3,-3,-3,-3,-3,-3,-3],[2,0,0,-1,0,2,3,4,1,2,2,0,3,2,3]),

  // Atzlanti  
Ellykha = new secondOrigin("Ellykha","Atzlánti",[-1,-2,-2,-1,-2,-3,-2,2,1,1,0,-1,2,-1,1,2,-1,-1,2,1,1,0,2,-2,1,-2,0,-1,-2,-3,1,0,-1,1,-2,-1,-2,-1,-2,-3,-2,2,-3,-1,4,3,4,4,3,2,3,2,0,-1,1,-3,-4,-3,-3,-3,-3,-3,-3,1],[4,-1,-2,-1,-1,4,1,2,4,3,1,0,3,-2,1]),
Huitzilopochtli = new secondOrigin("Huitzilopochtli","Atzlánti",[1,1,-1,2,-2,-2,-1,2,0,1,1,-2,0,-1,-2,1,-2,0,4,4,2,2,2,0,2,-1,1,2,0,-2,-2,1,-1,-1,1,-1,-1,-2,-1,-2,-3,-2,-3,-2,4,3,4,4,0,1,3,2,0,2,3,-2,-3,-3,-3,-3,1,-3,-3,2],[4,-2,-2,-3,-2,4,2,1,4,4,1,2,3,-2,3]),
Miclántecuhtli = new secondOrigin("Miclántecuhtli","Atzlánti",[1,1,-2,0,-1,0,-2,0,1,0,-1,2,3,0,4,3,4,-2,-1,-3,-3,-2,-1,-1,-2,2,-1,-2,-2,4,2,-1,1,2,-1,-2,0,-2,-2,-1,4,4,4,3,4,2,-3,-3,2,2,0,0,0,1,2,-3,-3,-3,-3,-3,-3,-3,-3,-3],[-2,-1,-2,-1,-2,-1,3,1,-1,3,2,1,1,-1,3]),
Quetzalcoátl = new secondOrigin("Quetzalcoátl","Atzlánti",[3,2,1,4,1,-1,2,1,-1,0,1,-2,-2,-3,-3,-4,-3,1,3,2,2,4,2,0,1,2,4,1,1,-2,1,2,-2,-1,2,-1,-2,1,-2,-1,-2,-3,-4,1,3,4,2,1,3,1,2,1,2,-1,0,-2,-3,4,-3,-3,-3,-3,-3,-3],[2,-2,4,1,-1,2,4,1,2,1,2,1,3,-1,3]),
Tezcatlipoca = new secondOrigin("Tezcatlipoca","Atzlánti",[4,3,0,3,1,-1,2,4,2,2,3,2,3,4,3,4,2,1,3,2,1,3,4,1,2,0,-1,-2,2,4,2,3,2,1,2,2,-1,-1,-2,-2,2,4,3,3,4,1,4,3,4,3,2,4,0,3,4,-3,-3,-3,-3,-3,-3,-3,4,2],[4,2,1,1,-2,3,4,2,3,4,4,2,2,3,3]),
Tlaloc = new secondOrigin("Tlaloc","Atzlánti",[2,2,2,3,-1,0,-1,-2,4,1,1,-2,-2,-1,-3,-2,-2,-1,-2,1,0,3,1,2,2,3,2,4,3,-1,0,4,1,-2,2,2,1,2,-3,1,-4,-4,-4,-2,4,4,1,0,1,-1,1,2,2,2,3,-3,-3,-3,-3,-3,-3,-3,-3,-3],[3,-1,4,1,2,-1,4,3,2,0,1,2,3,-1,2]),
Tlazoltéotl = new secondOrigin("Tlazoltéotl","Atzlánti",[4,1,2,3,-1,2,2,-1,-2,-3,-1,2,3,2,3,0,2,2,1,1,3,-1,0,0,-1,2,3,4,2,4,-1,-2,2,2,1,1,-1,-1,-1,2,-4,-3,-3,3,4,4,-2,-3,4,4,1,4,4,-2,3,-3,-3,-3,-3,-3,-3,-3,-3,-3],[0,-1,4,1,1,0,2,4,-1,4,4,3,2,2,3]),
XipeTotec = new secondOrigin("Xipe Totec","Atzlánti",[3,2,4,3,1,4,2,2,3,0,1,-1,-2,-2,-3,-4,1,2,0,3,0,3,2,3,1,4,4,4,3,4,0,4,-3,-2,0,1,-2,-3,-4,-2,3,3,0,2,4,4,2,1,-1,-2,1,-2,0,1,1,-3,-3,-3,-3,-3,-3,-3,-3,-3],[2,-1,-1,-2,1,0,2,2,-1,-2,-3,4,-1,-2,1]),

  // Celestial Bureaucracy
Change = new secondOrigin("Chang'e","Celestial Bureaucracy",[2,1,2,3,-1,1,-2,-3,-4,-2,-2,3,0,4,1,1,-2,4,-4,-4,-2,1,1,3,-1,0,1,1,2,-3,-3,-1,-4,-4,-2,-2,-2,1,1,2,1,-1,-2,2,-1,-2,-2,-2,1,4,1,4,4,3,3,-3,-3,-3,-3,-3,-3,-3,-3,-3],[-1,2,3,1,2,0,3,2,-2,3,2,2,1,2,3]),
Fuxi = new secondOrigin("Fuxi","Celestial Bureaucracy",[4,3,3,2,2,1,3,-1,-2,-2,-2,-1,-1,-2,-3,-3,-2,2,2,1,0,1,-1,2,0,3,2,3,3,-2,1,4,-3,-4,0,-1,-4,0,-2,-2,-4,-4,-4,-1,-3,-3,1,0,1,0,1,-2,-2,2,2,-4,-4,4,-4,-4,-4,-4,-4,-4],[3,-1,1,2,1,2,2,2,2,2,1,3,2,0,2]),
Guanyin = new secondOrigin("Guanyin","Celestial Bureaucracy",[2,3,2,3,2,2,0,-2,-3,-1,-2,-1,-2,0,-2,-1,-3,3,3,1,0,1,1,2,0,2,1,2,1,-2,0,3,-2,-3,2,1,-2,-1,-2,-1,-3,-3,-4,2,1,3,0,1,3,4,2,2,3,4,4,-3,-3,-3,-3,-3,-3,-3,-3,-3],[4,3,4,3,4,3,3,3,1,3,3,-2,3,3,3]),
GuanYu = new secondOrigin("Guan Yu","Celestial Bureaucracy",[1,2,0,3,1,-1,0,1,-1,1,2,-1,-2,-2,-2,-2,-2,3,4,2,2,1,1,2,-2,1,2,0,0,0,1,2,-2,-3,-1,-3,-3,-3,-3,-3,-4,-4,-4,-2,1,2,2,1,4,2,4,3,3,4,4,-3,-3,4,-3,-3,-3,-3,-3,-3],[3,1,1,1,0,3,2,1,2,4,4,3,2,1,2]),
Houyi = new secondOrigin("Houyi","Celestial Bureaucracy",[1,2,-1,0,3,1,1,3,2,2,0,-3,-4,-4,-3,-4,-4,2,3,4,4,2,3,-2,-3,-3,-3,-2,-4,-4,-3,-1,-3,-1,-3,-4,-3,-3,-4,-4,-3,-4,-4,-2,1,0,2,2,3,1,4,3,1,3,4,-3,-3,-3,-3,-3,-3,-3,-3,-3],[4,2,-1,3,-2,3,1,3,0,3,2,2,4,3,3]),
HuangDi = new secondOrigin("Huang Di","Celestial Bureaucracy",[2,1,-1,1,0,-2,1,-1,-2,-3,-3,-2,-3,-3,-3,-4,-3,4,4,0,1,1,0,2,-2,1,2,-1,-2,-4,-3,-2,-1,-3,-1,-2,-4,0,-2,0,-3,-4,-4,2,-2,-2,1,1,4,2,2,3,3,4,4,-4,-4,4,-4,-4,-4,-4,-4,-4],[0,-1,3,2,0,2,4,2,2,4,4,4,2,-1,2]),
Nezha = new secondOrigin("Nezha","Celestial Bureaucracy",[1,2,-2,-2,1,2,1,3,2,3,3,-3,-3,0,-2,-2,-3,1,2,1,2,2,2,0,0,-2,0,-3,-3,-3,-3,-3,-3,-3,-3,-3,-3,-3,-3,-2,-3,-3,-3,-3,-3,-3,1,1,0,1,3,0,0,2,2,-3,-3,-3,-3,-3,-3,-3,-3,-3],[4,2,2,3,1,4,1,2,2,1,1,-1,3,-1,2]),
Nuwa = new secondOrigin("Nuwa","Celestial Bureaucracy",[2,2,1,2,1,0,2,-2,-2,-3,1,-2,-2,4,-1,-3,-3,3,2,-2,1,1,-1,3,-1,2,2,1,1,-2,-2,1,-2,-2,1,1,-1,1,1,2,3,-1,0,2,-1,-1,-2,-2,3,3,2,2,2,4,4,-3,-3,2,-3,-3,-3,-3,-3,-3],[-1,1,3,2,1,0,3,2,0,1,2,1,2,2,2]),
Shennong = new secondOrigin("Shennong","Celestial Bureaucracy",[2,2,3,3,2,1,2,-1,-3,-3,-2,-3,-3,-3,-3,-3,-3,4,2,2,0,-1,-2,1,-2,4,3,3,2,-2,1,4,-3,-3,-1,-2,-4,-2,-3,-3,-4,-4,-4,1,-4,-4,0,1,3,0,1,-1,2,3,4,-3,-3,-3,-3,-3,-3,-3,-3,-3],[3,0,4,3,4,1,2,2,2,3,3,3,1,0,1]),
SunWukong = new secondOrigin("Sun Wukong","Celestial Bureaucracy",[2,2,3,4,3,2,-1,1,-1,0,1,1,1,-2,-2,-3,-2,2,1,-2,-2,1,1,1,0,2,2,-1,3,-3,0,1,-3,-3,1,0,-3,-2,-4,-4,-3,-3,-3,3,-3,-3,2,3,2,3,4,2,2,4,4,-3,4,-3,-3,-3,-3,-3,-3,-3],[4,4,3,3,2,3,3,4,3,3,4,3,3,4,3]),
Xiwangmu = new secondOrigin("Xiwangmu","Celestial Bureaucracy",[2,2,2,3,-1,-3,0,-3,-4,-3,-2,-3,-3,-3,-3,-3,-3,3,4,-2,1,-3,-3,2,-1,1,3,3,3,-2,-1,1,-3,-3,2,1,-3,-3,-3,-1,-3,-3,-3,0,-3,-3,1,2,4,4,2,2,2,4,4,-3,-3,-3,-3,-3,-3,-3,-3,-3],[3,1,3,0,2,2,3,2,2,3,1,4,2,1,3]),
Yanluo = new secondOrigin("Yanluo","Celestial Bureaucracy",[-1,1,-3,0,0,-2,1,-2,-3,0,-1,1,2,-2,-1,-2,4,1,1,-2,-3,-3,-4,-2,-3,1,1,-3,-3,-4,3,-2,-3,-1,-2,-3,-4,-3,-3,0,4,4,4,4,-2,-1,2,3,4,-1,0,1,1,4,4,-3,-3,-3,-3,-3,-3,-3,-3,-3],[2,-1,2,1,1,2,3,2,2,3,3,2,2,0,3]),

  // Deva
Agni = new secondOrigin("Agni","Deva",[3,1,-1,1,1,2,3,4,4,4,4,-4,-3,-4,-3,-4,-4,3,4,-2,2,3,3,2,2,-1,-2,-3,-3,-4,-3,-4,-3,-4,-1,-2,-4,-3,-4,-4,0,-1,-2,2,3,3,2,2,3,4,3,3,1,1,3,-3,-3,-3,-3,-3,-3,-3,-3,-3],[3,-1,4,2,0,3,2,2,3,3,0,2,3,-2,2]),
Brahma = new secondOrigin("Brahma","Deva",[4,3,1,4,3,-2,4,-3,-4,-1,3,-2,-4,-1,-3,-4,-1,4,4,4,-1,-2,-2,4,0,4,4,2,1,-4,2,3,-3,-4,3,3,-4,1,-2,-2,-3,-4,-3,4,-3,-3,-2,-1,-1,-2,-3,-2,3,4,4,-3,-3,-3,-3,-3,-3,-3,-3,-3],[-1,-2,2,1,1,-1,4,2,1,2,-1,2,0,-2,4]),
Ganesha = new secondOrigin("Ganesha","Deva",[3,3,3,4,2,1,2,-1,-2,-2,1,-2,-2,-2,-3,-4,-1,4,3,0,1,-2,-2,2,-2,3,3,3,3,-4,2,1,-2,-3,-1,0,-3,-4,-4,-4,-4,-4,-4,2,-3,-3,3,3,3,-4,-1,-1,1,3,2,-3,-3,-3,-3,-3,-3,-3,-3,-3],[2,-1,3,2,1,1,4,2,3,2,2,3,1,-1,3]),
Indra = new secondOrigin("Indra","Deva",[-1,1,-1,1,1,1,3,2,-4,1,1,-2,-3,-4,-4,-4,-3,2,4,-2,1,3,2,3,2,2,1,4,1,-3,0,-1,-3,-3,-3,-3,-3,-3,-3,-3,-3,-3,-3,-1,-3,-3,3,4,3,1,2,-1,0,2,4,-3,-3,-3,-3,-3,-3,-3,-3,-3],[3,-1,1,1,3,4,2,1,3,4,2,1,3,-1,2]),
Kali = new secondOrigin("Kali","Deva",[2,3,-1,-2,0,-2,1,4,2,3,3,-3,1,-2,1,4,2,-1,1,-2,-1,-2,3,-4,2,-1,-3,-4,-3,2,1,-1,-3,2,-2,-1,-3,-2,-3,-1,-3,3,-2,1,3,3,4,4,3,-2,2,3,-2,-2,-2,-3,-3,-3,-3,-3,-3,-3,-3,-3],[3,-2,-2,2,0,4,0,0,2,4,-1,-2,3,1,2]),
Lakshmi = new secondOrigin("Lakshmi","Deva",[-1,-2,1,2,0,-2,0,-2,-3,-3,-3,-1,-3,1,-3,-4,-4,3,2,-1,0,-3,-3,2,-3,1,1,2,2,-1,-2,1,3,0,2,3,-2,0,-1,0,-3,-3,-3,1,-3,-3,-4,-4,3,4,2,-2,3,3,3,-3,-3,-3,-3,-3,-3,-3,-3,-3],[0,1,4,1,2,0,1,2,0,1,2,3,2,1,1]),
Parvati = new secondOrigin("Parvati","Deva",[3,4,1,2,2,2,2,-1,-3,-3,1,0,-1,-2,-3,-4,-4,4,3,-2,-1,-2,-3,2,-3,1,3,4,3,-2,-2,0,-2,-3,2,1,-3,-4,-4,-4,-4,-4,-4,2,-2,1,-2,-1,1,2,0,1,3,4,4,-3,-3,-3,-3,-3,-3,-3,-3,-3],[-3,-1,4,1,2,0,3,2,0,1,2,1,1,1,2]),
Sarasvati = new secondOrigin("Sarasvati","Deva",[4,3,3,4,4,2,4,-3,-3,-4,2,-2,-2,0,-3,-4,-3,4,2,-2,2,-2,-2,1,-2,4,4,2,1,-2,-3,-3,-4,-4,-1,-3,-4,-3,-3,-3,-4,-3,-4,2,-2,-2,-3,-2,3,4,2,4,3,4,3,-3,-3,-3,-3,-3,-3,-3,-3,-3],[1,2,3,3,1,0,3,2,1,1,2,2,2,2,3]),
Shiva = new secondOrigin("Shiva","Deva",[4,3,2,3,3,1,3,4,1,2,2,1,2,0,-1,4,-1,4,4,1,2,2,4,2,1,-2,2,-1,0,2,1,-1,-2,1,1,1,-3,-4,-3,-2,1,4,1,3,-2,2,3,3,3,4,2,-2,2,4,4,-3,-3,-3,-3,-3,-3,-3,-3,-3],[1,1,2,3,2,4,4,2,2,3,2,0,1,1,3]),
Surya = new secondOrigin("Surya","Deva",[4,3,-1,1,1,2,3,4,2,3,3,-4,-3,-3,-4,-3,-4,4,3,4,3,1,2,-1,-1,1,-2,-3,-2,-2,-1,-2,-3,-1,-2,-3,-4,-4,-4,-4,-3,-4,-3,-2,-2,1,2,1,4,1,2,2,1,2,2,-3,-3,-3,-3,-3,-3,-3,-3,-3],[3,1,-1,2,0,2,0,3,2,4,3,0,2,-2,2]),
Vishnu = new secondOrigin("Vishnu","Deva",[4,3,2,4,3,2,4,-1,-3,-1,1,-2,-1,-2,-3,-4,-3,4,3,0,-1,-2,-1,2,-3,3,3,4,3,-2,-1,-2,-4,-3,2,0,-4,-4,-4,-4,-4,-4,-4,2,-3,3,1,1,3,2,3,-1,-2,-1,1,-3,-3,-3,-3,-3,-3,-3,-3,-3],[1,1,4,2,2,3,3,1,1,2,0,1,2,-1,2]),
Yama = new secondOrigin("Yama","Deva",[-1,1,-3,0,0,-2,1,-2,-3,0,-1,1,2,-2,-1,-2,4,1,1,-2,-3,-3,-4,-2,-3,1,1,-3,-3,-4,3,-2,-3,-1,-2,-3,-4,-3,-3,0,4,4,4,4,-2,-1,2,3,4,-1,0,1,1,4,4,-3,-3,-3,-3,-3,-3,-3,-3,-3],[2,-1,2,1,1,2,3,2,2,3,3,2,2,0,3]),

  // Dodekatheon
Aphrodite = new secondOrigin("Aphrodite","Dodekatheon",[1,-1,-2,2,0,1,1,-2,-3,-4,-3,-3,-2,-3,-4,-4,-4,3,2,-1,3,-1,-2,-3,-2,-1,-2,2,-1,-4,-1,-3,-1,-2,1,-2,-3,1,-2,0,-3,-4,-4,-3,0,1,-3,-4,4,4,3,4,4,-1,0,-3,-3,-3,-3,-3,-3,-3,-3,-3],[1,2,3,1,2,-2,1,1,-1,3,4,2,2,1,-1]),
Apollo = new secondOrigin("Apollo","Dodekatheon",[4,3,1,3,1,3,1,2,1,2,2,-3,-4,-1,-3,-4,-1,4,3,4,3,1,2,2,-1,1,2,1,-1,-3,0,-2,-4,-3,-4,-3,-4,-4,-4,-2,2,1,-1,3,2,3,1,1,4,4,4,4,4,3,3,-3,-3,-3,-3,-3,-3,-3,-3,4],[4,3,3,2,4,3,2,4,1,3,4,3,4,1,3]),
Archimedes = new secondOrigin("Archimedes","Dodekatheon",[3,4,-3,-2,4,-2,3,-2,-3,-4,1,-2,-3,-2,-3,-4,-3,4,-1,1,2,1,1,1,-1,1,2,-2,-3,-4,2,-1,-2,0,-2,1,-2,2,-1,0,-2,-3,-3,1,-2,-3,-2,-2,-2,-3,2,-1,-2,2,3,-3,-3,-3,-3,-3,-3,-3,-3,-3],[-1,1,1,4,-1,-2,2,1,-1,-2,-2,-3,3,1,4]),
Ares = new secondOrigin("Ares","Dodekatheon",[-2,2,-3,3,0,-3,1,2,1,2,2,-2,1,-3,-2,-4,-3,2,3,-2,1,1,2,-2,-3,0,-2,-3,-3,1,3,-1,-3,0,-2,-3,-3,1,-2,0,-3,-1,-3,-1,3,3,4,4,4,-1,3,4,-4,0,0,-3,-3,-3,-3,-3,-3,-3,-3,-3],[4,-2,-2,2,0,4,-1,2,3,4,-1,-1,3,-2,3]),
Artemis = new secondOrigin("Artemis","Dodekatheon",[1,1,3,3,2,3,-1,-3,-4,-4,-4,3,3,4,2,1,-2,3,2,-1,-3,0,1,2,-1,0,1,1,3,-1,0,2,-1,-1,0,0,-3,-2,0,1,-2,-3,-4,2,2,2,1,0,3,4,4,-1,1,1,1,-3,-3,-3,-3,-3,-3,-3,-3,-3],[4,4,3,3,2,4,2,4,-1,1,3,-2,4,4,2]),
Athena = new secondOrigin("Athena","Dodekatheon",[3,3,0,1,1,-1,1,-1,-2,-3,-2,-2,-3,0,-3,-4,-3,4,3,-1,-2,-2,-3,1,-2,2,2,0,-1,-3,-1,-2,-2,-3,-1,-2,-3,0,-2,-2,-3,-4,-3,-2,-2,-2,2,2,4,1,2,-1,-1,1,1,-3,-3,-3,-3,-3,-3,-3,-3,-3],[3,1,1,2,0,3,4,2,1,4,4,1,2,1,4]),
Dionysus = new secondOrigin("Dionysus","Dodekatheon",[2,2,1,2,1,2,-1,-1,-4,-3,-3,-2,-3,-3,1,-3,-4,3,1,-1,1,-2,-3,-2,-2,4,3,4,2,-1,-1,2,-3,-2,1,1,-3,-3,-4,-3,-2,-3,-3,0,1,1,1,3,4,1,-1,4,4,2,2,-3,-3,-3,-3,-3,-3,-3,-3,-3],[-2,2,4,2,2,0,3,1,1,3,4,3,2,-1,2]),
Gerald = new secondOrigin("Gerald","Dodekatheon",[2,3,-1,1,3,2,2,3,2,3,2,-2,1,-1,-3,1,2,4,3,-2,3,2,2,-3,1,2,-1,1,2,-3,3,1,1,2,-1,-2,-3,-2,-3,-3,-4,-4,-4,1,-2,-3,3,4,4,-1,2,4,-3,-1,2,-3,-3,-3,-3,-3,-3,-3,-3,-3],[2,1,0,2,-1,3,-1,1,3,4,0,2,3,-1,2]),
Hades = new secondOrigin("Hades","Dodekatheon",[1,3,-2,-1,0,-3,-2,-3,-4,-4,-3,3,3,-1,4,4,4,1,-1,-2,-3,-3,-2,-3,-4,4,1,-3,-3,-3,3,-2,-3,1,-2,-3,1,-2,-1,2,4,4,4,4,-2,-3,2,2,3,-2,0,-2,-3,2,0,-3,-3,-3,-3,-3,-3,-3,-3,-3],[0,2,-1,2,0,3,3,2,0,4,4,4,3,3,3]),
Hephaestus = new secondOrigin("Hephaestus","Dodekatheon",[1,4,1,2,4,-2,4,3,3,4,3,-3,-4,-4,-3,-4,3,4,-3,-4,-3,-2,1,-1,0,4,3,-3,-4,-3,3,-2,-3,-3,-3,-3,-3,-3,-3,-3,-3,-3,-3,-1,-3,-3,3,4,-1,-4,2,-3,-3,3,3,-3,-3,-3,-3,-3,-3,-3,-3,-3],[2,2,1,4,0,1,3,2,4,-1,-2,3,3,-1,3]),
Hera = new secondOrigin("Hera","Dodekatheon",[1,-1,-2,2,-1,1,-1,1,1,1,1,1,2,-1,2,2,-2,1,4,-2,3,-1,0,-2,-1,3,2,1,-1,-2,-2,0,-3,-1,-2,0,-4,-3,1,-1,-3,-4,-3,-2,2,3,-1,-1,4,2,2,4,2,3,3,-3,-3,-3,-3,-3,-3,1,-3,1],[-2,1,0,1,1,-1,1,2,-2,3,4,3,2,1,2]),
Herakles = new secondOrigin("Herakles","Dodekatheon",[1,3,1,2,-1,-3,1,1,0,0,0,-3,-4,-3,-1,-3,-3,-2,3,-2,0,1,1,-3,-1,-2,-3,-4,-3,-4,1,2,-3,-1,-2,-3,-4,-1,-3,-4,-4,-4,-4,-3,2,2,4,4,4,1,3,3,-3,-2,-2,2,-3,-3,-3,-3,-3,-3,-3,-3],[4,-2,3,1,1,4,-2,2,4,4,-1,-2,4,-1,3]),
Hermes = new secondOrigin("Hermes","Dodekatheon",[-1,-2,-3,1,1,2,-1,-2,-3,-3,-2,-3,-4,-4,-3,-4,-4,3,-2,-3,4,1,-2,1,-2,4,-2,-3,1,-3,-2,2,-3,-4,-3,-1,-4,-1,-2,1,3,1,1,4,-2,-3,-3,-4,-2,2,4,2,2,-2,4,-3,-3,-3,-3,-3,-3,-3,-3,4],[4,4,3,3,4,2,2,4,-1,-2,4,4,3,4,2]),
Lyra = new secondOrigin("Lyra","Dodekatheon",[4,2,-2,-1,1,3,-2,-4,-3,-4,-1,-2,-3,-4,-3,-4,-3,3,1,-2,2,4,1,4,1,1,-1,-2,-3,-4,-3,-4,-2,1,-1,0,-3,-4,-3,2,1,-1,-2,2,1,-1,-2,-3,-2,1,4,4,2,3,4,-3,-3,-3,-3,-3,-3,-3,-3,-3],[4,3,3,3,2,1,4,4,-3,1,4,1,2,4,3]),
Poseidon = new secondOrigin("Poseidon","Dodekatheon",[1,2,2,4,1,2,-2,-4,-4,-3,-3,-2,0,0,-2,-3,-4,2,3,-3,-4,4,3,3,-1,2,1,2,4,-4,1,1,4,3,3,4,2,4,2,4,-1,-2,-3,1,3,1,3,4,4,-2,2,3,3,3,4,-3,-3,-3,-3,-3,-3,-3,-3,-3],[4,-1,4,2,3,3,4,1,2,4,1,3,3,-1,3]),
Zeus = new secondOrigin("Zeus","Dodekatheon",[4,4,2,4,2,0,-1,1,-2,2,1,-2,-3,-4,-3,-4,-3,3,4,1,3,4,4,4,4,2,2,1,-1,-3,1,1,-3,-4,-3,-3,-3,-4,-3,-3,-4,-4,-4,-3,3,2,4,4,4,3,4,1,-1,4,4,-3,-3,-3,-3,-3,3,-3,-3,-3],[2,0,1,2,1,1,2,2,3,4,4,4,3,1,4]),

  // Orisha
Anansi = new secondOrigin("Anansi","Orisha",[3,3,3,4,2,3,1,-1,0,0,1,3,2,3,3,1,2,3,-1,-3,-3,-1,0,1,-2,2,3,1,2,-1,2,2,-3,-1,-1,-3,-4,-3,-1,1,1,1,-3,3,2,4,-1,-2,2,-2,3,3,3,3,4,-3,-3,-3,-3,-3,-3,-3,-3,-3],[3,4,4,2,2,1,4,4,-1,-2,4,1,3,4,3]),
BaronSamedi = new secondOrigin("Baron Samedi","Orisha",[1,2,-1,2,2,1,-2,0,-1,0,-2,2,3,2,4,4,3,3,-1,-3,-2,-3,-4,-2,-3,1,-2,-3,-2,2,-1,1,2,3,-1,-2,1,-2,-2,3,4,4,4,4,2,3,-1,-2,3,-3,3,4,4,4,4,-3,-3,-3,-3,-3,-3,-3,-3,-3],[-1,2,-1,2,1,2,3,2,-1,1,3,-1,-2,2,2]),
Damballa = new secondOrigin("Damballa","Orisha",[3,2,3,3,2,1,1,-2,-3,-3,-2,-1,-2,-3,-3,-4,-3,1,3,-2,-2,1,1,2,-2,2,3,4,3,-2,-1,1,-3,-2,3,1,-3,-4,-3,-2,-3,-2,-4,2,2,2,-2,-1,4,2,1,3,1,2,3,-3,-3,-3,-3,-3,-3,-3,-3,4],[1,3,3,1,2,2,4,3,1,3,3,2,2,3,2]),
Erzulie = new secondOrigin("Erzulie","Orisha",[1,-1,0,2,1,1,-1,-2,-3,-4,0,-1,0,-2,-3,-4,-3,2,-1,-2,-2,-3,-4,-1,-3,0,1,2,0,-3,-2,-3,-4,-3,1,1,-3,-2,-3,-4,-4,-4,-4,3,1,1,-2,-3,1,3,2,4,2,-1,-2,-3,-3,-3,-3,-3,-3,-3,-3,-3],[-2,2,3,1,2,0,-2,1,-1,2,4,2,2,1,0]),
Kalfu = new secondOrigin("Kalfu","Orisha",[3,3,1,4,2,-1,-2,1,0,0,3,2,3,0,2,4,3,2,-1,-3,-3,-3,0,-2,-3,1,2,-1,0,2,3,3,-3,-1,-2,2,-3,-3,-1,3,3,4,3,4,2,-1,-2,-2,4,-2,3,4,-1,2,2,-3,-3,-3,-3,-3,-3,-3,-3,-3],[-1,1,-1,2,-2,2,3,3,1,4,4,-1,2,2,3]),
Legba = new secondOrigin("Legba","Orisha",[3,4,2,3,1,1,0,-1,-2,-3,2,-2,-3,1,-3,-4,-2,3,1,-2,-2,-3,-3,1,-2,1,0,-1,2,-2,-1,3,-2,-2,-3,1,-3,-4,-3,2,2,-1,-3,4,-2,-3,-2,-3,3,-2,2,-1,2,1,4,-3,-3,-3,-3,-3,-3,3,-3,-3],[1,2,4,2,2,1,3,3,0,3,3,-2,2,2,3]),
Ogoun = new secondOrigin("Ogoun","Orisha",[-2,4,2,0,3,-2,4,2,1,2,0,-3,-4,-3,-3,-4,-2,3,2,-2,-1,-2,-3,-3,0,4,3,1,1,-4,3,0,-2,-3,-3,-2,-3,-3,-2,-3,-4,-4,-4,-1,1,2,4,4,3,-1,3,3,3,2,3,-3,-3,-3,-3,-3,-3,-3,-3,-3],[2,0,-2,2,1,4,3,2,4,4,-1,2,3,2,4]),
Shango = new secondOrigin("Shango","Orisha",[2,4,1,3,2,-2,1,2,0,1,1,-2,-3,-2,-3,-4,-3,3,3,-2,1,2,3,3,4,2,2,1,1,-2,2,-1,-3,-2,-3,-3,-4,-3,-4,-4,-3,-4,-4,2,-1,-2,2,3,4,0,3,4,1,1,3,-3,-3,-3,-3,-3,-3,-3,-3,-3],[1,2,3,2,2,3,4,2,3,3,1,0,3,2,4]),

 // Neter
Anubis = new secondOrigin("Anubis","Neter",[2,4,-2,1,2,-3,-2,-1,-3,-1,-2,0,1,0,2,2,3,-2,-1,-3,-3,-4,-4,-3,-3,-1,-2,-3,-4,-3,3,-2,0,1,-3,-4,-1,-3,-4,-4,4,3,2,4,3,3,3,4,4,-2,2,-2,2,1,3,-3,-3,-3,-3,4,-3,-3,-3,-3],[1,2,3,2,1,3,3,2,4,3,0,2,2,2,3]),
AtumRe = new secondOrigin("Atum Re","Neter",[3,3,-1,1,-1,1,2,3,2,1,1,-4,-4,-4,-4,-4,-4,4,4,4,4,2,3,3,0,3,2,2,1,-4,1,1,-3,-4,1,-3,-4,-3,-4,-4,-3,-4,-4,-3,-2,-3,1,2,4,2,3,4,4,3,4,-3,-3,-3,-3,-3,4,-3,-3,-3],[1,-1,0,2,1,1,3,4,2,4,1,2,3,-1,3]),
Bastet = new secondOrigin("Bastet","Neter",[3,2,0,2,2,-2,0,1,1,0,0,2,2,3,1,1,0,3,1,-2,-3,-2,-3,-1,-2,0,-1,1,1,-3,0,-1,-2,-3,-3,-3,-4,-3,-4,0,1,-1,-2,2,-2,-3,-2,-3,2,3,4,3,4,-1,2,-3,-3,-3,4,-3,-3,-4,-3,-3],[2,4,1,2,1,2,3,4,-1,0,3,2,3,4,1]),
Geb = new secondOrigin("Geb","Neter",[1,2,3,0,0,-2,1,-2,-2,-1,-2,-1,-2,-3,-2,-3,2,1,2,-2,-3,-3,-4,2,-3,3,4,4,4,-2,2,3,-3,-3,-3,-3,-3,-3,-3,-3,-3,-2,-3,-1,-2,-3,2,3,-1,-2,-3,4,4,3,1,-3,-3,-3,-3,-3,-3,-3,-3,-3],[-2,-3,2,-1,1,2,4,1,3,1,-2,2,1,-2,1]),
Hathor = new secondOrigin("Hathor","Neter",[1,2,2,1,0,-3,-1,0,-1,-2,-3,-4,-4,-1,-2,-3,-4,4,3,3,1,-3,-3,3,-3,3,3,4,1,-2,0,1,-3,-4,2,-1,-3,-4,-3,-4,-2,-3,-4,0,-2,2,1,3,-1,1,-1,4,4,-1,3,-3,-3,-3,-3,-3,-3,-3,-3,-3],[1,-1,4,2,3,2,2,1,3,-1,-2,1,0,-1,3]),
Horus = new secondOrigin("Horus","Neter",[2,4,0,1,0,-3,-1,1,-1,-2,-3,-2,-3,-2,-3,-4,-3,2,3,1,3,1,2,2,-1,-2,0,-1,-1,-3,2,1,-2,-3,-3,-2,-3,-3,-4,-4,-4,-3,-4,-2,-2,-2,3,1,4,1,4,0,3,-1,2,-3,-3,-3,-3,-3,-3,-3,-3,-3],[1,2,2,1,1,3,1,4,2,4,3,0,4,1,2]),
Isis = new secondOrigin("Isis","Neter",[4,4,2,3,1,3,0,-1,-1,-1,0,1,1,2,0,-1,-2,3,1,-1,2,-3,-2,2,-1,-2,1,3,-2,-3,-4,-2,-3,-2,1,-2,-3,-2,-3,1,-3,-4,-3,-2,-3,-4,-2,-3,3,4,3,4,4,4,4,-3,-3,-3,-3,-3,-3,-3,3,-3],[1,3,2,2,3,-1,4,2,-1,2,4,1,3,1,4]),
Khepri = new secondOrigin("Khepri","Neter",[-1,2,0,2,0,-3,-2,0,-1,-2,-1,0,1,0,-3,-3,-3,-2,4,1,2,2,2,0,-2,-1,-2,-3,-3,-4,1,0,-2,-3,-2,-3,-4,-3,-4,-3,-4,-4,-3,-2,2,3,4,4,4,2,4,3,4,0,1,4,-3,-3,-3,-3,-3,-3,-3,-3],[2,2,0,1,-1,4,1,3,4,4,2,1,3,3,2]),
Osiris = new secondOrigin("Osiris","Neter",[1,3,-1,2,0,-3,1,0,-2,-2,-2,-3,-4,-3,3,3,4,3,3,-2,-3,-3,-4,-3,-4,3,-1,-4,-2,2,3,-2,-3,-4,-4,-3,1,-3,-4,-3,4,4,3,4,-2,-3,-1,-2,4,-3,1,2,4,4,3,-3,-3,-3,-3,-3,-3,-3,-3,-3],[-2,0,1,1,-1,-2,3,-1,-1,3,4,4,2,-1,3]),
Ptah = new secondOrigin("Ptah","Neter",[2,3,1,0,3,-2,3,1,1,2,-1,-2,-3,-4,-3,-4,0,4,-1,-2,-3,-1,-2,1,-2,4,2,1,-1,-2,2,-2,-3,-4,-4,-4,-4,-4,-4,-4,-4,-1,-3,3,-1,0,-2,-3,-2,-3,3,0,2,4,3,-3,-3,-3,-3,-3,-3,-3,-3,-3],[0,1,2,4,2,1,3,2,0,-1,2,3,2,0,1]),
Rain = new secondOrigin("Rain","Neter",[2,3,-1,1,0,1,-1,-2,-3,-3,-1,1,2,2,1,1,1,3,1,-2,-2,-1,-2,2,-2,0,1,2,-1,-2,0,-1,-1,1,-2,-3,1,0,1,2,4,3,2,4,1,-1,-2,-3,1,3,3,2,4,1,3,-3,-3,-3,-3,-3,-3,-3,-3,-3],[0,2,4,1,4,-2,3,1,-1,1,2,3,2,2,2]),
Sekhmet = new secondOrigin("Sekhmet","Neter",[1,2,2,3,-1,-2,-1,3,1,2,-1,1,2,-1,-2,2,-1,-3,3,1,2,-1,1,-4,-3,-2,-2,-3,1,-1,2,2,-3,-4,-4,-3,-3,-4,-4,-4,-3,0,-2,-3,4,2,4,4,4,2,3,4,-4,-1,-2,4,-3,-3,-3,-3,-3,-3,-3,-3],[3,2,-2,1,0,4,1,3,4,4,1,2,3,3,2]),
Set = new secondOrigin("Set","Neter",[3,2,-1,3,1,2,2,4,3,3,1,2,4,1,2,3,1,2,3,-2,2,2,4,0,0,1,0,-1,-2,3,2,2,-3,0,-2,-3,-3,-4,-3,-2,-1,2,2,1,3,1,3,2,4,0,2,3,3,3,1,-3,-3,-3,-3,4,-3,-3,-3,-3],[2,3,0,1,1,2,4,3,2,4,4,3,3,3,2]),
Sobek = new secondOrigin("Sobek","Neter",[1,3,2,3,1,-1,-2,-3,-4,-3,-4,-2,1,-2,-3,0,-2,2,3,0,-1,1,2,-1,0,2,3,3,2,0,1,2,3,4,3,2,2,1,-3,0,0,1,0,1,2,0,3,4,3,-1,3,-2,3,2,3,-3,-3,-3,-3,-3,-3,-3,-3,-3],[2,1,0,1,2,4,3,3,4,3,1,2,3,3,2]),
Thoth = new secondOrigin("Thoth","Neter",[4,3,0,2,2,-1,1,0,0,-1,-2,-2,-3,-1,-3,-4,-4,4,2,0,1,-1,-2,3,-1,-2,2,-2,-3,-4,3,-1,1,-1,-2,-2,-3,-3,-3,-3,-1,-3,-4,3,-2,-2,-3,-4,-2,-4,3,1,3,3,4,-3,-3,-3,-3,-3,-3,-3,-3,-3],[-1,2,1,3,2,0,4,3,-2,2,3,0,2,2,3]),

Aengus = new secondOrigin("Aengus","Tuatha Dé Danaan",[1,2,2,1,2,3,-1,-2,-3,-3,-2,-3,-4,-3,0,-2,-3,4,2,-2,2,1,-1,1,-2,-1,1,2,0,-3,-2,-3,-2,-3,3,-2,-3,-4,-4,-4,-3,-3,-3,1,1,1,-2,2,3,4,2,3,3,-2,-1,-3,-3,-3,-3,-3,-3,-3,-3,-3],[2,2,3,1,4,1,1,1,2,3,0,1,2,1,0]),
Brigid = new secondOrigin("Brigid","Tuatha Dé Danaan",[3,4,3,2,2,3,4,1,0,2,1,-1,-2,1,-2,-3,-4,4,0,-1,1,-1,-3,2,-2,2,2,3,1,-4,1,1,-1,-1,3,2,-3,2,1,3,0,-2,-3,1,-1,2,0,2,-1,3,2,-1,2,1,2,-3,-3,-3,-3,-3,-3,-3,-3,-3],[0,1,3,2,3,0,3,2,1,0,-1,2,3,0,2]),
TheDagda = new secondOrigin("The Dagda","Tuatha Dé Danaan",[0,3,1,2,1,0,-1,1,0,1,-1,-3,-1,-3,-2,-1,-1,1,3,-3,-2,-1,-1,-3,-4,-2,0,2,1,-4,3,-2,-3,-3,-3,-3,-3,-3,-3,-3,-3,-3,-3,-1,1,3,4,4,4,3,3,3,-1,2,-1,-3,-3,-3,-3,-3,-3,-3,-3,-3],[3,1,1,0,2,4,0,1,3,4,1,0,2,-1,3]),
DianCécht = new secondOrigin("Dian Cécht","Tuatha Dé Danaan",[1,4,2,1,4,2,4,2,0,2,1,-2,-3,-1,-2,-3,-2,4,-1,-2,1,-2,-3,-3,-2,2,4,1,2,-4,2,0,-3,-4,3,1,-3,-4,-1,0,-3,-2,-3,2,-2,1,2,2,-1,-3,1,-1,-1,3,3,-3,-3,-3,-3,-3,-3,-3,-3,-3],[1,0,2,2,3,-2,3,2,3,1,0,2,3,0,2]),
Lugh = new secondOrigin("Lugh","Tuatha Dé Danaan",[1,2,3,3,3,2,1,1,1,2,1,0,-1,0,-1,-2,-2,4,3,-1,1,3,2,2,3,2,2,2,1,-4,2,1,-1,-2,-3,-2,-4,2,1,2,-3,-2,-3,-3,-2,2,2,3,1,3,4,-2,-2,-1,-1,-3,-3,-3,-3,-3,-3,-3,-3,-3],[2,3,3,3,3,3,3,3,3,3,3,3,3,3,3]),
ManannánmacLir = new secondOrigin("Manannán mac Lir","Tuatha Dé Danaan",[3,4,1,2,2,2,-2,-3,-3,-4,-3,1,-1,1,-2,-3,1,3,3,-3,-2,2,1,3,-1,0,0,2,-1,-4,1,1,3,1,2,2,3,4,4,4,4,4,3,4,1,-1,0,1,0,1,3,0,2,4,4,-3,-3,-3,-3,-3,-3,-3,-3,-3],[1,2,3,3,1,2,4,3,1,0,3,2,3,1,2]),
TheMorrigan = new secondOrigin("The Morrigan","Tuatha Dé Danaan",[4,3,2,2,1,4,-1,-3,-3,-1,-2,2,3,3,3,4,4,3,0,-2,-3,1,2,1,-1,-1,1,1,2,3,3,1,-2,0,0,1,1,-1,2,3,4,4,4,4,3,2,1,2,4,4,3,4,3,3,4,-3,-3,-3,-3,-3,-3,-3,-3,-3],[1,3,-1,1,2,1,3,2,1,3,4,0,3,3,3]),
Ogma = new secondOrigin("Ogma","Tuatha Dé Danaan",[2,4,4,3,1,2,1,-1,-2,-2,-2,-3,-3,-2,-2,-3,1,4,1,-1,-2,1,-1,0,-1,1,2,2,3,-4,0,-1,-3,-4,-3,-4,-3,-4,-3,-4,-3,-4,-3,1,-2,2,4,3,3,-1,4,-2,-2,3,1,-3,-3,-3,-3,-3,-3,-3,-3,-3],[1,2,1,3,2,3,4,3,3,2,1,2,3,1,3]),

  // Dark Forest
Ent = new secondOrigin("Ent","Dark Forest",[2,3,4,4,2,1,-3,-3,-1,-3,-4,3,4,3,2,2,1,1,-2,-3,-3,-2,-3,-2,-3,2,3,4,4,1,-1,2,-3,0,2,0,-3,-4,-3,1,1,-1,-2,0,-3,-4,3,4,1,-3,0,-3,-3,2,2,-3,-3,-3,-3,-3,-3,-3,-3,-3],[1,-1,3,2,3,2,4,3,4,1,-1,-2,-2,0,3]),
Nymph = new secondOrigin("Nymph","Dark Forest",[2,2,4,4,3,2,-1,-1,-2,-3,-3,0,-1,2,0,0,-1,4,-1,1,2,0,-1,0,-2,2,3,4,4,-3,1,3,1,-1,2,3,-2,0,-1,1,-3,-3,-3,-3,-3,-3,-2,-4,2,4,3,3,3,3,4,-3,-3,-3,-3,-3,-3,-3,-3,-3],[2,3,4,1,3,-1,1,3,1,0,3,-2,2,3,1]),
Witch = new secondOrigin("Witch","Dark Forest",[2,4,4,3,3,3,0,1,1,0,1,3,4,3,3,4,4,-1,-3,-3,-3,0,0,0,0,-1,-2,-2,1,4,2,2,1,2,1,2,0,0,2,3,2,3,4,3,3,3,-2,-1,-2,-4,1,3,3,3,4,-3,-3,-3,-3,-3,-3,-3,-3,-3],[1,3,0,1,2,0,4,1,-1,2,4,-2,1,2,3]),

  // Summer Court
SummerFey = new secondOrigin("Summer Fey","Summer Court",[2,3,4,4,3,4,2,3,4,3,2,-2,-3,-4,-3,-4,-4,4,3,4,4,2,3,3,1,3,3,4,4,-3,2,4,-2,-3,2,1,-1,2,-3,-4,-3,-4,-3,-2,-2,-2,-1,-2,3,4,4,4,2,3,4,-3,-3,-3,-3,-3,-3,-3,-3,-3],[2,3,4,3,2,2,4,2,1,3,4,2,3,3,2]),
SummerElf = new secondOrigin("Summer Elf","Summer Court",[0,4,4,4,3,4,3,2,1,3,2,-3,-4,-4,-3,-4,-4,3,4,4,2,2,3,2,1,1,2,3,3,-3,3,4,-2,-3,2,1,-3,3,-4,,-4,-4,-4,-3,2,3,2,2,2,3,4,2,2,1,2,-3,-3,-3,-3,-3,-3,-3,-3,-3],[2,2,3,3,3,4,3,3,2,3,2,2,4,3,3]),
SummerSmallFolk = new secondOrigin("Summer Small Folk","Summer Court",[1,3,3,2,4,3,3,-1,-2,-2,-2,-3,-4,-4,-4,-3,-4,2,-1,1,2,-1,-2,-1,-3,3,2,2,3,-3,1,1,-3,-2,1,0,-2,0,-3,-3,-4,-4,-4,-2,2,0,-3,-4,-2,-2,3,-3,-2,2,1,-3,-3,-3,-3,-3,-3,-3,-3,-3],[-1,3,1,3,2,0,2,2,-1,0,3,2,2,2,3]),
SummerPixie = new secondOrigin("Summer Pixie","Summer Court",[3,0,4,2,0,4,-1,2,1,1,2,-3,-4,-3,-4,-4,-4,3,1,2,4,3,2,2,1,2,2,2,2,-4,-2,2,-1,-2,1,2,-2,1,-3,-3,-4,-4,-4,-3,2,0,-3,-3,-1,3,4,3,3,2,3,-3,-3,-3,-3,-3,-3,-3,-3,-3],[0,2,3,-1,1,-2,1,2,-2,1,2,-2,3,1,2]),

 // Winter Court
WinterFey = new secondOrigin("Winter Fey","Fairie",[2,3,3,2,2,4,-3,-4,-4,-4,-3,2,3,2,2,3,1,2,-2,-2,1,1,2,1,0,-1,-2,-3,2,3,2,2,2,3,-2,-1,-2,1,4,4,2,1,1,-1,2,0,-2,-2,3,4,3,4,4,-1,2,-3,-3,-3,-3,-3,-3,-3,-3,-3],[2,3,0,2,0,2,3,2,-2,1,4,2,3,3,2]),
WinterElf = new secondOrigin("Winter Elf","Winter Court",[0,4,3,3,2,4,-3,-4,-3,-3,-3,3,3,3,2,2,0,-2,-4,-4,-3,1,2,0,1,-3,-4,-3,0,2,3,2,2,2,-1,0,1,2,4,4,1,2,2,0,3,-1,2,3,4,4,4,-2,-2,2,2,-3,-3,-3,-3,-3,-3,-3,-3,-3],[1,2,-2,2,0,3,1,3,2,3,4,2,4,3,2]),
WinterSmallFolk = new secondOrigin("Winter Small Folk","Winter Court",[2,4,2,3,4,3,2,-1,-2,-3,-3,2,1,2,2,1,3,1,-2,-3,-3,1,0,0,1,3,0,-1,2,2,3,1,-2,-1,0,-1,-2,0,2,3,-3,-3,-3,-3,-3,-3,-2,-4,0,-2,3,2,2,1,2,-3,-3,-3,-3,-3,-3,-3,-3,-3],[-1,3,-1,4,1,2,2,2,-1,-2,1,2,3,3,1]),
WinterPixie = new secondOrigin("Winter Pixie","Winter Court",[3,2,3,3,0,4,-2,-3,-3,-4,-3,3,3,4,3,2,0,2,-2,-4,-4,2,1,2,2,-2,-1,-1,1,2,-1,0,2,2,2,1,1,2,4,4,1,2,0,1,-1,-1,-4,-4,1,4,3,3,3,-1,1,-3,-3,-3,-3,-3,-3,-3,-3,-3],[0,2,0,1,2,-1,3,4,-1,1,3,-2,3,4,2]),

 // Jade Sea
EasternDragon = new secondOrigin("Eastern Dragon","Jade Sea",[3,3,2,3,1,2,3,4,4,2,1,2,1,3,1,2,-1,4,3,-1,1,4,4,4,3,3,2,3,3,-2,2,1,4,3,3,2,2,4,1,3,-1,0,-2,2,1,2,3,3,3,-1,1,2,2,4,4,-3,-3,4,-3,-3,-3,-3,-3,-3],[1,0,1,2,0,2,4,1,3,3,3,2,3,0,3]),
WesternDragon = new secondOrigin("Western Dragon","Jade Sea",[0,4,-1,1,-1,-2,2,4,3,3,1,-2,0,-1,-2,-3,2,-1,1,-1,-2,1,2,0,1,3,2,-1,0,-2,3,2,-1,1,-2,-1,-3,0,1,-1,-3,-3,-3,-3,3,3,4,4,4,-1,1,-2,-2,0,2,-3,-3,4,-3,-3,-3,-3,-3,-3],[1,2,0,2,0,3,3,2,4,4,1,3,3,0,3]),
Naga = new secondOrigin("Naga","Jade Sea",[2,2,1,2,0,0,1,-2,-2,-3,-2,-2,-2,-2,-3,-3,0,2,-1,-2,-2,1,2,1,2,0,1,2,0,-2,1,-1,2,3,3,3,1,3,2,2,-3,-3,-3,-3,-3,-3,3,2,1,-1,4,3,3,2,4,-3,-3,4,-3,-3,-3,-3,-3,4],[1,2,0,2,1,3,2,2,3,1,0,1,3,2,2]),
Coatl = new secondOrigin("Coatl","Jade Sea",[2,2,4,2,2,0,1,0,-1,1,0,-1,-2,-2,-3,-4,-3,2,0,-1,0,3,4,2,4,2,1,3,2,-2,3,2,-1,-2,1,-1,-2,0,-2,1,-3,-3,-3,-3,4,3,3,4,3,-1,4,2,2,1,2,-3,-3,4,-3,-3,-3,-3,-3,2],[2,2,2,1,3,3,4,3,3,3,3,-1,4,1,3]),

 // Shambhala
Rakshasa = new secondOrigin("Rakshasa","Shambhala",[3,4,0,2,2,2,3,4,1,3,2,1,3,-1,2,3,1,3,2,0,2,1,2,0,2,1,0,3,-2,4,3,1,1,2,-1,-2,-1,-3,-3,-2,1,2,2,3,4,3,4,3,4,-4,3,4,-4,3,3,-3,-3,-3,-3,-3,-3,-3,-3,-3],[2,2,-1,1,0,3,3,3,3,4,4,2,3,2,2]),
Asura = new secondOrigin("Asura","Shambhala",[4,4,-1,3,0,2,2,3,2,3,3,3,4,-2,2,4,2,3,4,2,3,1,3,-3,3,0,-1,-2,-2,3,1,-1,-2,-3,-3,-3,-4,-3,-3,-3,2,3,2,3,4,3,2,3,4,3,2,4,-4,3,3,-3,-3,-3,-3,-3,-3,-3,-3,-3],[1,2,-1,2,0,3,4,3,3,4,4,3,3,2,3]),

]


function exampleLegendaryMaker(targetArray,targetPropertyOrigin,targetPropertyRole1,targetPropertyRole2,sizeLimit,targetWyrdbornOrigin){
  total = ""
  counter = 0
  for(i=0;i<targetArray.length;i++){
if(document.getElementById('continent').value == "Wyrdborn"){
Total.legendaries[i] = ((targetWyrdbornOrigin[i]+targetPropertyOrigin[i])/2+Math.floor((targetPropertyRole1[i]/10*6+targetPropertyRole2[i]/10*4))) + "\n"
}
else{Total.legendaries[i] = (targetPropertyOrigin[i]+Math.floor((targetPropertyRole1[i]/10*6+targetPropertyRole2[i]/10*4))) + "\n"
}
} 	
function adder(value){
{for(i=0;i<targetArray.length;i++){if(Total.legendaries[i]==value && counter<=sizeLimit){  total+= targetArray[i].name + "\n"; counter+=1}}}  
}
adder(8);adder(7);adder(6);adder(5);adder(4);adder(3);adder(2);adder(1);adder(0);adder(-1);adder(-2);adder(-3);adder(-4);
alert(total) 
}

function LegendaryMakerTotal(){
  godFound = secondOriginArray.filter(function (entry) { return entry.name === ChosenGod; })[0]
  roleFound = rolesChoiceArray.filter(function (entry) { return entry.name === ChosenFirstRole; })[0]
  roleFound2 = rolesChoiceArray.filter(function (entry) { return entry.name === ChosenSecondRole; })[0]
  wyrdbornFound = secondOriginArray.filter(function (entry) { return entry.name === ChosenWyrdborn; })[0]
  
exampleLegendaryMaker(legendaryAbilitiesArray,godFound.legendaries,roleFound.legendaries,roleFound2.legendaries,9,wyrdbornFound.legendaries)  
exampleLegendaryMaker(skillsArray,godFound.skills,roleFound.skills,roleFound2.skills,7,wyrdbornFound.skills)
}

function intelligenceChoiceFunction(){

abilityName = prompt("What is the Name of this Species ?")
variableName = abilityName.replace(/\s/g, '');
properties=0
propertiesSkill = 0
name = variableName + " = new secondOrigin(\"" + abilityName + "\","    
name+= "\"" + prompt("What is this Species' Origin ?") + "\","
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

// Test the length of Legendaries
//lengthChecker()
// Test the Legendaries
//exampleLegendaryMaker(legendaryAbilitiesArray,godFound.legendaries,roleFound.legendaries,roleFound2.legendaries,9,wyrdbornFound.legendaries)
// Test the Skills
//exampleLegendaryMaker(skillsArray,godFound.skills,roleFound.skills,roleFound2.skills,7,wyrdbornFound.skills)
// Create a new Origin
//intelligenceChoiceFunction()

	//__________________________________________________
	// Types 
	
	// array of possible countries in the same order as they appear in the country selection list 
	var countryLists = new Array(3) 
	countryLists["empty"] = ["Select an Origin"]; 
	countryLists["Godborn"] = ["Select an Origin","Aesir: Norse Gods", "Amatsukami: Japanese Gods", "Atzlánti: Aztec Gods", "Celestial Bureaucracy: Chinese Gods", "Deva: Hindu Gods", "Dodekatheon: Greek Gods", "Orisha: African Gods", "Neter: Egyptian Gods", "Tuatha Dé Danaan: Celtic Gods"]; 
	countryLists["Mythborn"] = ["Select an Origin","Dark Forest", "Summer Court", "Winter Court", "Jade Sea", "Shambhala","Other"]; 
	countryLists["Wyrdborn"] = ["Select an Origin","Aesir: Norse Gods", "Amatsukami: Japanese Gods", "Atzlánti: Aztec Gods", "Celestial Bureaucracy: Chinese Gods", "Deva: Hindu Gods", "Dodekatheon: Greek Gods", "Orisha: African Gods", "Neter: Egyptian Gods", "Tuatha Dé Danaan: Celtic Gods"]; 
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
document.getElementById ("PantheonLink").href = "http://scionprimarchs.wikia.com/wiki/"+ curatedName;}

function setChosenGod(selectedBox){
document.getElementById ("OriginLink").href = "http://scionprimarchs.wikia.com/wiki/"+ selectedBox.options[selectedBox.selectedIndex].value;
	ChosenGod = selectedBox.options[selectedBox.selectedIndex].value;}

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
	godLists["Other"] = ["Meat Shield", "Damage Dealer", "Party Face", "Skill Monkey"]; 	
	godLists["Dark Forest"] = ["Meat Shield", "Damage Dealer", "Party Face", "Skill Monkey"]; 
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
	else if (document.getElementById('country').value == 'Tuatha Dé Danaan: Celtic Gods') {document.getElementById('tuathaLabel').style.display = 'block'; document.getElementById('tuatha').style.display = 'block'};
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
	document.getElementById('tuatha').style.display = 'none';
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
	document.getElementById('tuathaLabel').style.display = 'none';
document.getElementById ("OriginLink").href = "http://scionprimarchs.wikia.com/"
	}


	
