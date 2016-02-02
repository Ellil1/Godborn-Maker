var Type = "Godborn - God + Human"
var Origin = "Orisha: African Gods"
var God = "Huitzilopochtli"
var RoleChosen = "Party Face"
var RoleChosen2 = "Damage Dealer"

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
lightGlory = new LegendaryAbility("Invokation: Sun - Glory"),
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


]
  
function intelligenceChoiceFunction(targetArray) {
name = prompt("What is your Second Origin's Name ?")
varname = name.replace(/\s/g, '');
originChoice = prompt("What is your Second Origin's Origin ? \n")
intelligenceOptions = ""
skillsOptions = ""

  for(i=0;i<targetArray.length;i++){
 intelligenceChoice = prompt("Set the power of " + targetArray[i].name);
        if(intelligenceOptions === ""){ intelligenceOptions += (intelligenceChoice) }
    else{intelligenceOptions += ("," + intelligenceChoice); }}

  for(i=0;i<skillsArray.length;i++){
 intelligenceChoice = prompt("Set the power of " + skillsArray[i].name);
        if(skillsOptions === ""){ skillsOptions += (intelligenceChoice) }
    else{skillsOptions += ("," + intelligenceChoice); }}

alert(""+ varname +" = new secondOrigin(\""+  name + "\",\"" + originChoice +"\",["+ intelligenceOptions +"],["+ skillsOptions +"]),");
}

function lengthChecker(){
  for(i=0;i<secondOriginArray.length;i++){alert(secondOriginArray[i].name+" : "+ secondOriginArray[i].legendaries.length)}
}
  
  godFound = secondOriginArray.filter(function (entry) { return entry.name === ChosenGod; })[0]
  roleFound = rolesChoiceArray.filter(function (entry) { return entry.name === ChosenFirstRole; })[0]
  roleFound2 = rolesChoiceArray.filter(function (entry) { return entry.name === ChosenSecondRole; })[0]
function exampleLegendaryMaker(targetArray,targetPropertyOrigin,targetPropertyRole1,targetPropertyRole2,sizeLimit){
  total = ""
  counter = 0
  for(i=0;i<targetArray.length;i++){
    Total.legendaries[i] = (targetPropertyOrigin[i]+Math.floor((targetPropertyRole1[i]/10*6+targetPropertyRole2[i]/10*4))) + "\n"
  }
function adder(value){
{for(i=0;i<targetArray.length;i++){if(Total.legendaries[i]==value && counter<=sizeLimit){  total+= targetArray[i].name + "\n"; counter+=1}}}  
}
adder(8);adder(7);adder(6);adder(5);adder(4);adder(3);adder(2);adder(1);adder(0);adder(-1);
alert(total) 
}
// Test the length of Legendaries
//lengthChecker()
// Test the Legendaries
exampleLegendaryMaker(legendaryAbilitiesArray,godFound.legendaries,roleFound.legendaries,roleFound2.legendaries,9)
// Test the Skills
exampleLegendaryMaker(skillsArray,godFound.skills,roleFound.skills,roleFound2.skills,7)
// Create a new Origin
//intelligenceChoiceFunction(legendaryAbilitiesArray)

