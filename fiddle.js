
function getTypesList(type) {
	const types = [];
  if (type.toLowerCase().includes('creature')) {
  	types.push('Creature');
  }
  if (type.toLowerCase().includes('land')) {
  	types.push('Land');
  }
  if (type.toLowerCase().includes('enchantment')) {
  	types.push('Enchantment');
  }
  if (type.toLowerCase().includes('artifact')) {
  	types.push('Artifact');
  }
  if (type.toLowerCase().includes('instant')) {
  	types.push('Instant');
  }
  if (type.toLowerCase().includes('chaotic')) {
  	types.push('Chaotic');
  }
  if (type.toLowerCase().includes('sorcery')) {
  	types.push('Sorcery');
  }
  
  return types;
}

const url = 'https://raw.githubusercontent.com/Slanfan/MTG-Spectral-Chaos/main/spectral-chaos-replaced.txt';
const xspc = [
    {
        "name": "Island",
        "number": 1,
        "setcode": "xspc",
        "uuid": "003cfacb-1264-40c2-ba4a-958a67c540d4"
    },
    {
        "name": "Mountain",
        "number": 2,
        "setcode": "xspc",
        "uuid": "415b1beb-7f95-4aec-bfbc-6ad252bbd5e6"
    },
    {
        "name": "Plains",
        "number": 3,
        "setcode": "xspc",
        "uuid": "9f251361-9429-4ce3-bce3-e39147e09277"
    },
    {
        "name": "Swamp",
        "number": 4,
        "setcode": "xspc",
        "uuid": "1675c039-fe98-4f50-9f33-17e17b3de158"
    },
    {
        "name": "Forest",
        "number": 5,
        "setcode": "xspc",
        "uuid": "611e1c0d-b080-4ad0-a4a1-86ab06ee01ba"
    },
    {
        "name": "Terramorph",
        "number": 6,
        "setcode": "xspc",
        "uuid": "e3f75399-a2a0-4f06-b71b-3134f22e4a42"
    },
    {
        "name": "White Dolphin",
        "number": 7,
        "setcode": "xspc",
        "uuid": "6c7d527c-2392-43a8-816f-818712b4efda"
    },
    {
        "name": "Storm Cloud",
        "number": 8,
        "setcode": "xspc",
        "uuid": "3587c1bd-a482-4e54-b492-f19967c5339a"
    },
    {
        "name": "Phantasmal Terrain",
        "number": 9,
        "setcode": "xspc",
        "uuid": "23300c0a-42c8-4f4a-b61d-a8e1e93d49d8"
    },
    {
        "name": "Illusion",
        "number": 10,
        "setcode": "xspc",
        "uuid": "8fd837ce-87e2-4dea-a0df-8933294eee5f"
    },
    {
        "name": "Rapid Flight",
        "number": 11,
        "setcode": "xspc",
        "uuid": "677a3201-7230-4ce6-a4c0-d0992ba0e7a9"
    },
    {
        "name": "Sylvan Adder",
        "number": 12,
        "setcode": "xspc",
        "uuid": "6aa132fa-6bcb-41e9-b372-6208198427cc"
    },
    {
        "name": "Ravenous Shark",
        "number": 13,
        "setcode": "xspc",
        "uuid": "7da0eb38-2351-4098-b237-b62d2471e604"
    },
    {
        "name": "Twiddlebug",
        "number": 14,
        "setcode": "xspc",
        "uuid": "be4c1733-f72f-4203-8df8-e7ca0d9a0471"
    },
    {
        "name": "Power Sink",
        "number": 15,
        "setcode": "xspc",
        "uuid": "d3939fb4-5392-4721-b19a-ae1e4c1c9c90"
    },
    {
        "name": "High Treason",
        "number": 16,
        "setcode": "xspc",
        "uuid": "dfb08520-f615-4789-86b2-ec1d492a2750"
    },
    {
        "name": "Distracting Imp",
        "number": 17,
        "setcode": "xspc",
        "uuid": "106161c8-098e-450a-a03d-7e32fd6e3639"
    },
    {
        "name": "Goblin Foresters",
        "number": 18,
        "setcode": "xspc",
        "uuid": "c6c9e895-6de7-4833-af7c-e8acf1e3b008"
    },
    {
        "name": "Dragon Pup",
        "number": 19,
        "setcode": "xspc",
        "uuid": "d84d8385-0d70-43f3-b4dd-bef968504a37"
    },
    {
        "name": "Killer Bee",
        "number": 20,
        "setcode": "xspc",
        "uuid": "5f756513-c701-404d-9da6-ac5b37f9cfe6"
    },
    {
        "name": "Bog Orcs",
        "number": 21,
        "setcode": "xspc",
        "uuid": "cd1ab6d2-fa8a-4afc-bef4-6010d9004a38"
    },
    {
        "name": "Apprentice Swordsman",
        "number": 22,
        "setcode": "xspc",
        "uuid": "425ed88d-5ea3-49e7-930a-d8ddd29bb669"
    },
    {
        "name": "Fireblast",
        "number": 23,
        "setcode": "xspc",
        "uuid": "6437ed2e-60e0-4d42-bc81-e3be0beee2ca"
    },
    {
        "name": "Air Turbulence",
        "number": 24,
        "setcode": "xspc",
        "uuid": "3576d3eb-9cc5-4cdd-b2ca-b1e88511ae1c"
    },
    {
        "name": "Plasma Balls",
        "number": 25,
        "setcode": "xspc",
        "uuid": "521e98d9-e69d-4437-81bf-cafe5d541f19"
    },
    {
        "name": "Dwarven Ritual",
        "number": 26,
        "setcode": "xspc",
        "uuid": "0db2f6c3-4cbe-4e1c-affe-530142cb8a49"
    },
    {
        "name": "Wailing Banshee",
        "number": 27,
        "setcode": "xspc",
        "uuid": "0a4ff1fd-62f1-4731-b744-b2c6bde5d117"
    },
    {
        "name": "Mildeworm",
        "number": 28,
        "setcode": "xspc",
        "uuid": "de10768c-0037-4bdc-8775-5b67c47fad5e"
    },
    {
        "name": "Greisen Ibex",
        "number": 29,
        "setcode": "xspc",
        "uuid": "4166b336-1652-48ee-ace4-eb25b471df23"
    },
    {
        "name": "Ghost Rider",
        "number": 30,
        "setcode": "xspc",
        "uuid": "aec2c414-a183-435f-ad65-3fda7c1d54c3"
    },
    {
        "name": "Crimson Acolyte",
        "number": 31,
        "setcode": "xspc",
        "uuid": "e91dea06-e084-42f3-8586-d0e569ce3f33"
    },
    {
        "name": "Obsidian Acolyte",
        "number": 32,
        "setcode": "xspc",
        "uuid": "c05a81c3-def1-44d8-bef4-a69ff4cbe418"
    },
    {
        "name": "Disenchant",
        "number": 33,
        "setcode": "xspc",
        "uuid": "c1a67458-b85e-43dc-9dbf-e83bca8d0982"
    },
    {
        "name": "Telmarian Ambassador",
        "number": 34,
        "setcode": "xspc",
        "uuid": "65b61246-c2f2-4b21-bc50-771829f9be57"
    },
    {
        "name": "Floraticum",
        "number": 35,
        "setcode": "xspc",
        "uuid": "7ab2ab19-797c-4a4d-ba0a-27f0f0884e04"
    },
    {
        "name": "Blessed Land",
        "number": 36,
        "setcode": "xspc",
        "uuid": "3919930a-5ad8-4edf-afca-9d5568908c3d"
    },
    {
        "name": "Natural Defenses",
        "number": 37,
        "setcode": "xspc",
        "uuid": "e86e926a-9a17-4f6b-ad13-be9e9affdbb5"
    },
    {
        "name": "Cleric of Amon-Ra",
        "number": 38,
        "setcode": "xspc",
        "uuid": "2e475e0f-e0fc-4a29-b325-d598c977ea33"
    },
    {
        "name": "Golden Fleece",
        "number": 39,
        "setcode": "xspc",
        "uuid": "00683b30-2183-4d11-9dee-aca7f00ed602"
    },
    {
        "name": "Healing Potion",
        "number": 40,
        "setcode": "xspc",
        "uuid": "ab700720-1b85-479c-83ec-a46c92552200"
    },
    {
        "name": "Werewolf",
        "number": 41,
        "setcode": "xspc",
        "uuid": "acfad074-022c-47ed-9d48-60fa2138386a"
    },
    {
        "name": "Shadow",
        "number": 42,
        "setcode": "xspc",
        "uuid": "80bc4c9c-8597-4006-8af7-098afd6a85ee"
    },
    {
        "name": "Slimeballs",
        "number": 43,
        "setcode": "xspc",
        "uuid": "be622cdc-ee20-45be-880e-3313616d4b59"
    },
    {
        "name": "Fire Shade",
        "number": 44,
        "setcode": "xspc",
        "uuid": "11f83a5d-6416-4f19-b888-bfbaf8869111"
    },
    {
        "name": "Vampire Bat",
        "number": 45,
        "setcode": "xspc",
        "uuid": "25ea9afd-37bd-4f1f-b1f6-f250cc700015"
    },
    {
        "name": "Vile Incantation",
        "number": 46,
        "setcode": "xspc",
        "uuid": "d287a6dd-ad5b-4f4e-a42d-20e8fef2f2da"
    },
    {
        "name": "Cremation",
        "number": 47,
        "setcode": "xspc",
        "uuid": "cb8053d8-1ee5-4b9b-87b1-68d0a54f3f17"
    },
    {
        "name": "Injury",
        "number": 48,
        "setcode": "xspc",
        "uuid": "52449db2-40dc-4b1e-a9df-fe53e6be63bf"
    },
    {
        "name": "Elbis' Meditation",
        "number": 49,
        "setcode": "xspc",
        "uuid": "bfa77302-9be8-4bcc-90eb-73687572213c"
    },
    {
        "name": "Hand of Anubis",
        "number": 50,
        "setcode": "xspc",
        "uuid": "c93dda65-12e3-4b36-91b0-391e7e2b04b9"
    },
    {
        "name": "Arsonist",
        "number": 51,
        "setcode": "xspc",
        "uuid": "d134529d-6ab5-4300-9fbb-c097bd714f6c"
    },
    {
        "name": "Fidget",
        "number": 52,
        "setcode": "xspc",
        "uuid": "b7184caa-99e4-4b9f-8a1c-c1eef0eab222"
    },
    {
        "name": "Screaming Meemies",
        "number": 53,
        "setcode": "xspc",
        "uuid": "a470081e-6617-479d-8cae-de1c778d0e86"
    },
    {
        "name": "Leigh Druid",
        "number": 54,
        "setcode": "xspc",
        "uuid": "8368a4cb-63bb-479a-9ec4-a5f84ef7f01a"
    },
    {
        "name": "Earth Priest",
        "number": 55,
        "setcode": "xspc",
        "uuid": "0cb71c91-dbf8-4854-b95e-0a65d8a2afeb"
    },
    {
        "name": "Snapping Turtle",
        "number": 56,
        "setcode": "xspc",
        "uuid": "2e99a01d-5390-46f1-baa2-eff12bab1b91"
    },
    {
        "name": "Caterpillar",
        "number": 57,
        "setcode": "xspc",
        "uuid": "1de6c7c7-d6c0-4e37-b098-b327145dab38"
    },
    {
        "name": "Frinn-Jee Archer",
        "number": 58,
        "setcode": "xspc",
        "uuid": "95744f49-8c2e-4fa8-856d-dab146a1c5e0"
    },
    {
        "name": "Craw Chameleon",
        "number": 59,
        "setcode": "xspc",
        "uuid": "9eb1cc71-29b6-4fa9-82cf-281f4c0c07fe"
    },
    {
        "name": "Immense Spider",
        "number": 60,
        "setcode": "xspc",
        "uuid": "8e0d6a1c-19d1-4bfa-a8f5-950cc01ab357"
    },
    {
        "name": "Wildfire",
        "number": 61,
        "setcode": "xspc",
        "uuid": "8b13359b-1e3c-477f-ac2d-65c5d5dfa032"
    },
    {
        "name": "Fizzle",
        "number": 62,
        "setcode": "xspc",
        "uuid": "678d39f1-4766-41ca-9b99-dc1ed37eff92"
    },
    {
        "name": "Tempest",
        "number": 63,
        "setcode": "xspc",
        "uuid": "a6edd181-cd32-4846-8fc7-b3376e608e94"
    },
    {
        "name": "Pax Oliphant",
        "number": 64,
        "setcode": "xspc",
        "uuid": "58c82c60-f606-4768-b8dd-cdf7ea5960cb"
    },
    {
        "name": "Resummon",
        "number": 65,
        "setcode": "xspc",
        "uuid": "b935e65e-8db7-4e85-8909-49f6d6e6abdf"
    },
    {
        "name": "Scroll of Parchment",
        "number": 66,
        "setcode": "xspc",
        "uuid": "f54884ef-40e9-4a58-8859-11dec88d219e"
    },
    {
        "name": "Promontory",
        "number": 67,
        "setcode": "xspc",
        "uuid": "3943ccee-a198-446f-bd79-e00d26263858"
    },
    {
        "name": "Mesa",
        "number": 68,
        "setcode": "xspc",
        "uuid": "45d212be-71d3-47c3-b6b3-58af2704e394"
    },
    {
        "name": "Fen",
        "number": 69,
        "setcode": "xspc",
        "uuid": "a8ef2c20-8069-45ba-b4f2-b679e41fea9e"
    },
    {
        "name": "Bog",
        "number": 70,
        "setcode": "xspc",
        "uuid": "0da75dac-1478-4eb0-8396-d3cf388939e6"
    },
    {
        "name": "Coral Reef",
        "number": 71,
        "setcode": "xspc",
        "uuid": "b54b9b7f-3b2e-4a71-a1ac-78c8f4872a4b"
    },
    {
        "name": "Mage of the White Lodge",
        "number": 72,
        "setcode": "xspc",
        "uuid": "89bc10fd-0c48-48db-bb32-657a344f8ba6"
    },
    {
        "name": "Corrupt Sorcerer",
        "number": 73,
        "setcode": "xspc",
        "uuid": "d97b186e-07ec-4529-bdbb-d407f23ab65f"
    },
    {
        "name": "Tadpole",
        "number": 74,
        "setcode": "xspc",
        "uuid": "720e3619-e32b-495f-9fa4-f55db4ae34bf"
    },
    {
        "name": "Mental Agility",
        "number": 75,
        "setcode": "xspc",
        "uuid": "e4bb128f-498e-4da6-9992-82fd30dc6f16"
    },
    {
        "name": "Refraction Beast",
        "number": 76,
        "setcode": "xspc",
        "uuid": "c035700c-ca73-4e8e-8e72-7d1f5adb74f5"
    },
    {
        "name": "Sidewinder",
        "number": 77,
        "setcode": "xspc",
        "uuid": "80e3d6ec-657f-4e51-9400-310bdb95622a"
    },
    {
        "name": "Mist",
        "number": 78,
        "setcode": "xspc",
        "uuid": "5c3769df-2860-40d2-99e0-6ab1b46f176d"
    },
    {
        "name": "Psychic Ripple",
        "number": 79,
        "setcode": "xspc",
        "uuid": "2404796e-0d0c-462a-ab61-f1ff7c28bdf1"
    },
    {
        "name": "Copy Enchantment",
        "number": 80,
        "setcode": "xspc",
        "uuid": "7b3a428f-be76-4b8e-84c4-2467f3d2e622"
    },
    {
        "name": "Imprison",
        "number": 81,
        "setcode": "xspc",
        "uuid": "5f0f7363-02a9-4dc2-922e-e69a32793435"
    },
    {
        "name": "Daydream",
        "number": 82,
        "setcode": "xspc",
        "uuid": "51601c1c-fff8-45c1-89df-8a9b6f54f9ee"
    },
    {
        "name": "Psionic Surge",
        "number": 83,
        "setcode": "xspc",
        "uuid": "b98574f6-30cc-4b6f-8458-39a3f2202273"
    },
    {
        "name": "Spell Blast",
        "number": 84,
        "setcode": "xspc",
        "uuid": "381f2bd7-e192-483b-ab95-1f2b408d15fc"
    },
    {
        "name": "Negate",
        "number": 85,
        "setcode": "xspc",
        "uuid": "3e0237c4-64a9-498b-8d06-22364275e593"
    },
    {
        "name": "Mystic Spirit",
        "number": 86,
        "setcode": "xspc",
        "uuid": "b37a960e-3a81-40bc-bc00-9810842cfe0b"
    },
    {
        "name": "Catoni Walrus",
        "number": 87,
        "setcode": "xspc",
        "uuid": "98ff251f-9f73-4923-84e7-3aa588f0ecdc"
    },
    {
        "name": "Ice Maiden",
        "number": 88,
        "setcode": "xspc",
        "uuid": "dee40fa0-1a62-45e9-8e1c-a4bc3c1a4e1f"
    },
    {
        "name": "Earthshake",
        "number": 89,
        "setcode": "xspc",
        "uuid": "0113a592-042a-4f06-a27a-4f0c8179e0f4"
    },
    {
        "name": "Psychic Leech",
        "number": 90,
        "setcode": "xspc",
        "uuid": "09a68127-9472-4aed-bc4c-c28468e015f9"
    },
    {
        "name": "Battle Swap",
        "number": 91,
        "setcode": "xspc",
        "uuid": "41d4a2cc-32d0-44bf-a1c5-66085b4c81ee"
    },
    {
        "name": "Avatvian Warlord",
        "number": 92,
        "setcode": "xspc",
        "uuid": "c0684eca-8b6e-49cc-93e0-9fe5961bca23"
    },
    {
        "name": "Horns of Jericho",
        "number": 93,
        "setcode": "xspc",
        "uuid": "993b2acb-5795-43aa-a0e8-e85aa830fcff"
    },
    {
        "name": "Shield Bearer",
        "number": 94,
        "setcode": "xspc",
        "uuid": "1ff238f5-a3d0-4a07-8eb7-b571f70ed8cb"
    },
    {
        "name": "Incessant Tomtoms",
        "number": 95,
        "setcode": "xspc",
        "uuid": "6cc2eba8-0b51-4266-9078-f8e9278a4e7b"
    },
    {
        "name": "Prismatic Blast",
        "number": 96,
        "setcode": "xspc",
        "uuid": "739f551c-79f4-4fdb-a8ac-58d876ca7fd8"
    },
    {
        "name": "Acid Dragon",
        "number": 97,
        "setcode": "xspc",
        "uuid": "4c0ee9d3-05f8-43d8-9c20-75a5e7cff5ab"
    },
    {
        "name": "Thorgar the HUGE",
        "number": 98,
        "setcode": "xspc",
        "uuid": "2d9d40c4-5a74-4596-8bfa-5026ecc95864"
    },
    {
        "name": "Master Swordsman",
        "number": 99,
        "setcode": "xspc",
        "uuid": "c5481e43-45ff-4c1a-bf96-a35c9919a1ea"
    },
    {
        "name": "Keldon Walker",
        "number": 100,
        "setcode": "xspc",
        "uuid": "e4ec7f38-d839-4766-833d-e8c51dabf448"
    },
    {
        "name": "Mossy Rolling Stone",
        "number": 101,
        "setcode": "xspc",
        "uuid": "eea3c74a-e3e5-4b97-940c-e8b1b44437fb"
    },
    {
        "name": "Unnatural Rock Formation",
        "number": 102,
        "setcode": "xspc",
        "uuid": "e2ca7730-1d2b-4364-8fbd-498cdc34955d"
    },
    {
        "name": "Mana Beetle",
        "number": 103,
        "setcode": "xspc",
        "uuid": "bbc44033-ec47-43f4-b2f4-e011ae02380a"
    },
    {
        "name": "Shock Wave",
        "number": 104,
        "setcode": "xspc",
        "uuid": "929e9fbc-9a5d-4f0a-bddb-ed8e436b25d5"
    },
    {
        "name": "Grenade",
        "number": 105,
        "setcode": "xspc",
        "uuid": "91c7bae8-5b41-4326-ba3d-b45d79abf7dd"
    },
    {
        "name": "Orcish Flamethrower",
        "number": 106,
        "setcode": "xspc",
        "uuid": "1b08b67f-1224-4ef4-9cc1-d0984b601117"
    },
    {
        "name": "Blight",
        "number": 107,
        "setcode": "xspc",
        "uuid": "0d51826c-6bfb-4a3e-8944-50118b26a15c"
    },
    {
        "name": "Energy Boost",
        "number": 108,
        "setcode": "xspc",
        "uuid": "d67ac23a-2a3e-40df-beb3-42f9020c1a36"
    },
    {
        "name": "Sift",
        "number": 109,
        "setcode": "xspc",
        "uuid": "1302899b-6f59-4f8e-af18-fbdf8c23dbd3"
    },
    {
        "name": "Chaos Curse",
        "number": 110,
        "setcode": "xspc",
        "uuid": "42c800ed-9d9d-4bf8-b7e2-e9ee52e3961e"
    },
    {
        "name": "Cleric of Sameze",
        "number": 111,
        "setcode": "xspc",
        "uuid": "c7b6348b-304b-440c-ba19-e474fd834a3c"
    },
    {
        "name": "Blue Cloak",
        "number": 112,
        "setcode": "xspc",
        "uuid": "ec16b3bd-1a96-468c-9f15-7e3840305b61"
    },
    {
        "name": "Red Cloak",
        "number": 113,
        "setcode": "xspc",
        "uuid": "4fe6b095-3c29-4255-933f-1aef7b869d4c"
    },
    {
        "name": "White Cloak",
        "number": 114,
        "setcode": "xspc",
        "uuid": "80fdfb52-d7c1-4066-92e1-27184391e955"
    },
    {
        "name": "Black Cloak",
        "number": 115,
        "setcode": "xspc",
        "uuid": "efdf5ab0-cbe9-430f-a885-9e12832f3bdd"
    },
    {
        "name": "Green Cloak",
        "number": 116,
        "setcode": "xspc",
        "uuid": "9fca2b6a-10a3-4370-a51b-2f55c245b059"
    },
    {
        "name": "Jade Acolyte",
        "number": 117,
        "setcode": "xspc",
        "uuid": "a98f78ce-de12-4dcb-9588-0fa486f87033"
    },
    {
        "name": "River Acolyte",
        "number": 118,
        "setcode": "xspc",
        "uuid": "c52c0c96-b694-471e-81a4-9ef3fe0d40a8"
    },
    {
        "name": "Pegasus Rider",
        "number": 119,
        "setcode": "xspc",
        "uuid": "a3390dbc-09fd-45ba-9985-80153f6a4d45"
    },
    {
        "name": "Northern Ranger",
        "number": 120,
        "setcode": "xspc",
        "uuid": "fc913de8-9c8a-4763-8967-13d352d3ba7a"
    },
    {
        "name": "Arizona Phoenix",
        "number": 121,
        "setcode": "xspc",
        "uuid": "9be9824d-1cc5-4eb5-a72c-d6eae9b9e5f2"
    },
    {
        "name": "Swords to Plowshares",
        "number": 122,
        "setcode": "xspc",
        "uuid": "afb3bb33-4b01-4f0c-a763-6ad365a41b78"
    },
    {
        "name": "Page's Lace",
        "number": 123,
        "setcode": "xspc",
        "uuid": "02c299f8-050c-4e92-baf4-645a6989cea6"
    },
    {
        "name": "Bad Karma",
        "number": 124,
        "setcode": "xspc",
        "uuid": "d223f8b6-0694-4675-a038-b028df934d71"
    },
    {
        "name": "Stream of Healing",
        "number": 125,
        "setcode": "xspc",
        "uuid": "c6435626-1a62-4496-a2a7-1b9b235b897e"
    },
    {
        "name": "Health",
        "number": 126,
        "setcode": "xspc",
        "uuid": "daa9be09-d851-4d63-8f2c-50cde6db5131"
    },
    {
        "name": "Order",
        "number": 127,
        "setcode": "xspc",
        "uuid": "9ee741c1-1f73-4f7b-b5b0-d7829f83c4c8"
    },
    {
        "name": "Halo",
        "number": 128,
        "setcode": "xspc",
        "uuid": "d50975f0-45ea-4410-ae07-4a705fc450bb"
    },
    {
        "name": "Marble Obelisk",
        "number": 129,
        "setcode": "xspc",
        "uuid": "7a936675-b578-4b2b-87f1-5f8d8f13b56e"
    },
    {
        "name": "Color Blindness",
        "number": 130,
        "setcode": "xspc",
        "uuid": "949aea41-77b4-4d40-91c5-39307aa04fb6"
    },
    {
        "name": "Imp of the Iron Hooves",
        "number": 131,
        "setcode": "xspc",
        "uuid": "48ef9b58-c3f4-4e1b-88bc-eeba6a5f7249"
    },
    {
        "name": "Graveyard Vulture",
        "number": 132,
        "setcode": "xspc",
        "uuid": "5cc8a3af-91de-4e7c-9418-1264498a1a81"
    },
    {
        "name": "Giant Bat",
        "number": 133,
        "setcode": "xspc",
        "uuid": "016b29e9-12c6-4273-9227-0bc195e67ffa"
    },
    {
        "name": "Floating Skull",
        "number": 134,
        "setcode": "xspc",
        "uuid": "453f4d07-9d50-4b55-94dc-04deb95c32fa"
    },
    {
        "name": "Rous Eel",
        "number": 135,
        "setcode": "xspc",
        "uuid": "752fc385-e5be-42e2-a66f-377a878c71bc"
    },
    {
        "name": "Wall of Death",
        "number": 136,
        "setcode": "xspc",
        "uuid": "5e8b7068-94f2-4d98-a8a2-f6b3facfdec1"
    },
    {
        "name": "Waterfall",
        "number": 137,
        "setcode": "xspc",
        "uuid": "5292b7f5-317f-4cf8-85e9-26f65f0e1074"
    },
    {
        "name": "Deadly Inflation",
        "number": 138,
        "setcode": "xspc",
        "uuid": "2d5c9c31-cb11-48cf-a0bc-807268acbaec"
    },
    {
        "name": "Enrage",
        "number": 139,
        "setcode": "xspc",
        "uuid": "65dd70f7-4072-4fcc-8480-0970c1579a8b"
    },
    {
        "name": "Nightfall",
        "number": 140,
        "setcode": "xspc",
        "uuid": "ab401ca1-f84f-47b1-96c4-8ea117eb2deb"
    },
    {
        "name": "Water Lilies",
        "number": 141,
        "setcode": "xspc",
        "uuid": "f3b0a1af-74f4-43a0-b2cc-c5bf526204b1"
    },
    {
        "name": "Poltergeist",
        "number": 142,
        "setcode": "xspc",
        "uuid": "ecacfe0f-5944-435a-923b-3494c0ca9124"
    },
    {
        "name": "Gybe's Psychic Crush",
        "number": 143,
        "setcode": "xspc",
        "uuid": "affed74d-9cbd-418c-b906-b9f1851b1fae"
    },
    {
        "name": "Pettey's Hex",
        "number": 144,
        "setcode": "xspc",
        "uuid": "8ae97b54-d4fd-4199-b3d7-01c57078c1aa"
    },
    {
        "name": "Spitting Cobra",
        "number": 145,
        "setcode": "xspc",
        "uuid": "ed3dff90-f055-4f7f-a681-2f1690f89be7"
    },
    {
        "name": "Voodoo Doll",
        "number": 146,
        "setcode": "xspc",
        "uuid": "1c0f4394-6b13-4d73-9926-9e0f5c660a56"
    },
    {
        "name": "Punishment",
        "number": 147,
        "setcode": "xspc",
        "uuid": "57b7852d-53ef-4d86-8516-118659a53078"
    },
    {
        "name": "Lightning Rod",
        "number": 148,
        "setcode": "xspc",
        "uuid": "cc7d2bcb-4ba8-4e84-91ac-5ec11198c73a"
    },
    {
        "name": "Hestian Quickling",
        "number": 149,
        "setcode": "xspc",
        "uuid": "cfa3b3a2-4215-4e52-9e8f-e2e6542a6920"
    },
    {
        "name": "Worshipper of the Holy Flame",
        "number": 150,
        "setcode": "xspc",
        "uuid": "e8db30be-de58-49f7-8b5e-568d9c690a0b"
    },
    {
        "name": "El Timtor's Charm",
        "number": 151,
        "setcode": "xspc",
        "uuid": "0d777695-8d61-4bc9-8e89-0810036ec457"
    },
    {
        "name": "Lemming",
        "number": 152,
        "setcode": "xspc",
        "uuid": "c52fff04-478f-46f8-915b-eb784bbb400a"
    },
    {
        "name": "Malec-Hi Shortbowman",
        "number": 153,
        "setcode": "xspc",
        "uuid": "cb871018-b4e0-44af-b1b8-67c8e1d3242b"
    },
    {
        "name": "Mati the Lizard Queen",
        "number": 154,
        "setcode": "xspc",
        "uuid": "b004a6a3-3ea7-4871-a40e-b8a9894433b2"
    },
    {
        "name": "Old Man Willow",
        "number": 155,
        "setcode": "xspc",
        "uuid": "54cd6412-5180-46cf-9d4f-4fe0e6624791"
    },
    {
        "name": "Elvish Aura",
        "number": 156,
        "setcode": "xspc",
        "uuid": "1657ebb5-6ae2-4b8c-bba3-8ca431545b37"
    },
    {
        "name": "Forbidden Lore",
        "number": 157,
        "setcode": "xspc",
        "uuid": "382cd6f8-0e03-49b1-8e92-45d286efd68c"
    },
    {
        "name": "Drought",
        "number": 158,
        "setcode": "xspc",
        "uuid": "0568ec93-244f-4f4f-90fe-1b1560d546c5"
    },
    {
        "name": "Hanging Vines",
        "number": 159,
        "setcode": "xspc",
        "uuid": "bc3355ca-37fd-4a08-9765-28ca343fb3e7"
    },
    {
        "name": "Spider Monkey",
        "number": 160,
        "setcode": "xspc",
        "uuid": "72e75ce8-8c7c-4c56-9efe-fbed4ab40ead"
    },
    {
        "name": "Frumious Bandersnatch",
        "number": 161,
        "setcode": "xspc",
        "uuid": "2880e57f-bd48-4c69-a8bb-f08d0083bdca"
    },
    {
        "name": "Treeline Wanderer",
        "number": 162,
        "setcode": "xspc",
        "uuid": "9bb3e07a-76ef-4418-a1cf-8b92c5e6d932"
    },
    {
        "name": "Brown Fungus",
        "number": 163,
        "setcode": "xspc",
        "uuid": "c7fdf301-1e4d-4aed-b1de-7674e3b2705c"
    },
    {
        "name": "Rampage",
        "number": 164,
        "setcode": "xspc",
        "uuid": "d69f0abc-88a3-4cab-8e95-5af92cde758c"
    },
    {
        "name": "Waterlog",
        "number": 165,
        "setcode": "xspc",
        "uuid": "42eb4aa1-939b-4936-bd03-346ebe9eab36"
    },
    {
        "name": "Shift",
        "number": 166,
        "setcode": "xspc",
        "uuid": "6f6e7952-8caf-4dae-ab80-305d73d5f8d3"
    },
    {
        "name": "Crystal Sceptre",
        "number": 167,
        "setcode": "xspc",
        "uuid": "3bcaf705-6789-4ccb-980b-04e0571e8c0f"
    },
    {
        "name": "Iron Rose",
        "number": 168,
        "setcode": "xspc",
        "uuid": "c9f4212d-c1d7-463d-87bb-a9f1cf92e99d"
    },
    {
        "name": "Ivory Chalice",
        "number": 169,
        "setcode": "xspc",
        "uuid": "31ebec2c-2c53-4b4e-9a22-8380e18d6623"
    },
    {
        "name": "Crown of Bone",
        "number": 170,
        "setcode": "xspc",
        "uuid": "2aae3d00-e590-42a7-8697-5d2493e5651c"
    },
    {
        "name": "Ivy Sphere",
        "number": 171,
        "setcode": "xspc",
        "uuid": "e19555e3-2266-4820-aaad-36a561268006"
    },
    {
        "name": "Soul Gate",
        "number": 172,
        "setcode": "xspc",
        "uuid": "b450362e-2c00-443f-a416-1986b0dbe4b4"
    },
    {
        "name": "Helm of Disorder",
        "number": 173,
        "setcode": "xspc",
        "uuid": "e99bfea0-eed9-4189-b72f-fa367d08d89a"
    },
    {
        "name": "Rainbow Orb",
        "number": 174,
        "setcode": "xspc",
        "uuid": "05cc26b4-0a01-4b41-9a5d-89761429da51"
    },
    {
        "name": "Helm of Order",
        "number": 175,
        "setcode": "xspc",
        "uuid": "c987a4b2-bbe5-4b93-808a-019f0706401b"
    },
    {
        "name": "Shylock's Mazer",
        "number": 176,
        "setcode": "xspc",
        "uuid": "fd8116c3-d425-4517-9228-16501dfe65d1"
    },
    {
        "name": "Lifegiver",
        "number": 177,
        "setcode": "xspc",
        "uuid": "76cda93d-ef59-4cd4-ae20-951b19799749"
    },
    {
        "name": "Faded Mox",
        "number": 178,
        "setcode": "xspc",
        "uuid": "06996448-652b-4d15-8107-bbbb0f0bd98b"
    },
    {
        "name": "Ethereal Shifter",
        "number": 179,
        "setcode": "xspc",
        "uuid": "0a6d78f7-1a1a-46b5-8f06-d77176e48a93"
    },
    {
        "name": "Mana Magnet",
        "number": 180,
        "setcode": "xspc",
        "uuid": "bca15dbc-986a-4a37-9530-3fdaef713dcd"
    },
    {
        "name": "Paxin's Gauntlets",
        "number": 181,
        "setcode": "xspc",
        "uuid": "d34a47bd-2412-464c-b989-c2184599660d"
    },
    {
        "name": "Jaccartel",
        "number": 182,
        "setcode": "xspc",
        "uuid": "35c32a28-1a22-476b-a46d-5a72a7d17a8c"
    },
    {
        "name": "Celestial Prism",
        "number": 183,
        "setcode": "xspc",
        "uuid": "c2e6c0cf-ffa0-4caf-81e9-06edb84e1819"
    },
    {
        "name": "Scroll of Papyrus",
        "number": 184,
        "setcode": "xspc",
        "uuid": "b7fc17b8-cb23-4715-aac6-1c3b95a13df2"
    },
    {
        "name": "Sequential",
        "number": 185,
        "setcode": "xspc",
        "uuid": "b2db3d40-3160-41ee-9fc0-a6ac4493fc37"
    },
    {
        "name": "Gymnasium",
        "number": 186,
        "setcode": "xspc",
        "uuid": "5912b50d-39a4-455b-8b56-dc753906870d"
    },
    {
        "name": "Copy Chaos",
        "number": 187,
        "setcode": "xspc",
        "uuid": "9e75ba2f-3561-4504-9606-1250b28eb252"
    },
    {
        "name": "Unstable Terrain",
        "number": 188,
        "setcode": "xspc",
        "uuid": "c869d840-8ab4-4e25-b459-4a6426e6c1a0"
    },
    {
        "name": "Mage of the Hidden Way",
        "number": 189,
        "setcode": "xspc",
        "uuid": "b38eeb29-4c28-4861-8b57-fc63043bb246"
    },
    {
        "name": "Dolphin King",
        "number": 190,
        "setcode": "xspc",
        "uuid": "391d4a62-f9e7-47b6-b129-e230761311b9"
    },
    {
        "name": "Sultanic Ardor",
        "number": 191,
        "setcode": "xspc",
        "uuid": "0c75d465-84df-4073-9ea9-29988ffecc5a"
    },
    {
        "name": "Dark Djinn",
        "number": 192,
        "setcode": "xspc",
        "uuid": "92f919cb-6276-406d-8298-836e96e7f963"
    },
    {
        "name": "Dark Viper",
        "number": 193,
        "setcode": "xspc",
        "uuid": "3adfa701-72f9-4082-9755-08ff73bba7ab"
    },
    {
        "name": "Updraft",
        "number": 194,
        "setcode": "xspc",
        "uuid": "b4dc8535-7722-4fda-b0b8-b6cbb54b3fea"
    },
    {
        "name": "Sayers' Influence",
        "number": 195,
        "setcode": "xspc",
        "uuid": "1b598970-a3c8-4fca-bec6-e73f47f04fea"
    },
    {
        "name": "Great Flood",
        "number": 196,
        "setcode": "xspc",
        "uuid": "2238e2bb-24b5-4cba-a546-bec9ce681d18"
    },
    {
        "name": "Pipe",
        "number": 197,
        "setcode": "xspc",
        "uuid": "98298e61-6bd2-4bd8-b514-f293d5b1913d"
    },
    {
        "name": "Numerical Hack",
        "number": 198,
        "setcode": "xspc",
        "uuid": "37bbca29-c46a-4ce5-9ad2-59c13e2ad11a"
    },
    {
        "name": "Color Hack",
        "number": 199,
        "setcode": "xspc",
        "uuid": "f323cb45-5501-4553-bcd3-777510b3f4c3"
    },
    {
        "name": "Magpie",
        "number": 200,
        "setcode": "xspc",
        "uuid": "b4ea869d-99e9-4ae1-afb3-2d879a8a3df9"
    },
    {
        "name": "Urza's Spectral Shift",
        "number": 201,
        "setcode": "xspc",
        "uuid": "f4ff5a63-97b9-48ba-847b-b8fa23f9da22"
    },
    {
        "name": "Convert Creature",
        "number": 202,
        "setcode": "xspc",
        "uuid": "4c7a1a25-ec4f-487d-af55-cc63f7bf17c8"
    },
    {
        "name": "Convert Enchantment",
        "number": 203,
        "setcode": "xspc",
        "uuid": "8351a2c0-ef73-479d-a502-8f5fa3420225"
    },
    {
        "name": "Semaphore",
        "number": 204,
        "setcode": "xspc",
        "uuid": "b43e1f29-4eee-4479-b8df-1be85fbb0515"
    },
    {
        "name": "Entropy's Little Helper",
        "number": 205,
        "setcode": "xspc",
        "uuid": "939ce6d8-c0fc-4369-a6cd-d06c4bab2f6f"
    },
    {
        "name": "Blue-Red Antimana",
        "number": 206,
        "setcode": "xspc",
        "uuid": "0cba29c1-a611-4aed-b1e4-e852414fa46b"
    },
    {
        "name": "Avatvian Fakir",
        "number": 207,
        "setcode": "xspc",
        "uuid": "ee29ba1e-66b6-4484-9a80-697ed88b4797"
    },
    {
        "name": "Novice Swordsman",
        "number": 208,
        "setcode": "xspc",
        "uuid": "5d0aabb4-9a9d-409e-b0be-c5e4049ee648"
    },
    {
        "name": "Flame Strike",
        "number": 209,
        "setcode": "xspc",
        "uuid": "f9e907ed-46dd-41a5-850f-8ec3debedd07"
    },
    {
        "name": "Dusk Gargoyle",
        "number": 210,
        "setcode": "xspc",
        "uuid": "e64cbd76-2112-4b88-a7a1-183e7ef39f81"
    },
    {
        "name": "Flying Sorceress",
        "number": 211,
        "setcode": "xspc",
        "uuid": "cfe4d4db-663c-4d28-9a21-70efddac5a4a"
    },
    {
        "name": "Efreet",
        "number": 212,
        "setcode": "xspc",
        "uuid": "3262fa82-c0a4-4b59-b948-d0f0d98fa746"
    },
    {
        "name": "Lesser Red Demon",
        "number": 213,
        "setcode": "xspc",
        "uuid": "a0a1dc70-0cc4-42b2-99e0-18e3f7919f76"
    },
    {
        "name": "Highland Horror",
        "number": 214,
        "setcode": "xspc",
        "uuid": "5ae68fe5-7082-40f1-bbbe-a036c10af8ce"
    },
    {
        "name": "Dead Orc Swordsman",
        "number": 215,
        "setcode": "xspc",
        "uuid": "d08d7883-1204-40d3-bebc-01f9b4248c66"
    },
    {
        "name": "Spontaneous Combustion",
        "number": 216,
        "setcode": "xspc",
        "uuid": "f019a1dc-477b-495d-ac5f-7ba5effbb9a3"
    },
    {
        "name": "Arbez",
        "number": 217,
        "setcode": "xspc",
        "uuid": "0223179f-2527-4c4a-a39b-9ee827a78034"
    },
    {
        "name": "Three-Headed Cyclops",
        "number": 218,
        "setcode": "xspc",
        "uuid": "36fbf74f-2a54-4631-bf4d-8b577f1e2ac5"
    },
    {
        "name": "Mana Explosion",
        "number": 219,
        "setcode": "xspc",
        "uuid": "d3b1a55a-e151-4ea7-b81f-bc8d3b87b969"
    },
    {
        "name": "Madness",
        "number": 220,
        "setcode": "xspc",
        "uuid": "1ab44f82-e875-4ac4-a849-014476c42a26"
    },
    {
        "name": "Solar Flare",
        "number": 221,
        "setcode": "xspc",
        "uuid": "c361c34e-071b-4c52-8452-64703a1a71d2"
    },
    {
        "name": "Red-White Antimana",
        "number": 222,
        "setcode": "xspc",
        "uuid": "0ba6fbd1-a34a-4eaa-8e1f-aad279393982"
    },
    {
        "name": "Mana Inversion",
        "number": 223,
        "setcode": "xspc",
        "uuid": "b17da191-aaad-4288-865b-c9b31a2fbfe7"
    },
    {
        "name": "Equilibrium",
        "number": 224,
        "setcode": "xspc",
        "uuid": "4d230442-342f-46e4-a3cf-9a325113a900"
    },
    {
        "name": "Blood Purist",
        "number": 225,
        "setcode": "xspc",
        "uuid": "5a18f8fd-ec4c-4b1a-a63e-3e9ef5f684fe"
    },
    {
        "name": "Latonian Cleric",
        "number": 226,
        "setcode": "xspc",
        "uuid": "e75502b4-57d9-4129-96b8-51032a6a8141"
    },
    {
        "name": "Blue Damping Field",
        "number": 227,
        "setcode": "xspc",
        "uuid": "a9149a04-1dde-4002-88f3-bba1f3d54671"
    },
    {
        "name": "Red Damping Field",
        "number": 228,
        "setcode": "xspc",
        "uuid": "ab523898-427d-405e-ba26-b8c24762e979"
    },
    {
        "name": "White Damping Field",
        "number": 229,
        "setcode": "xspc",
        "uuid": "a3820d4b-91df-4f1e-bfea-bd7ea1c155d8"
    },
    {
        "name": "Black Damping Field",
        "number": 230,
        "setcode": "xspc",
        "uuid": "6da59d36-5c8b-4bb0-9a0b-7006dad3bc88"
    },
    {
        "name": "Green Damping Field",
        "number": 231,
        "setcode": "xspc",
        "uuid": "59d0013f-495c-4f40-aa05-61ba6fe0a0ea"
    },
    {
        "name": "Ebony Acolyte",
        "number": 232,
        "setcode": "xspc",
        "uuid": "95efc227-434e-40d7-8ad1-55c07bc07b89"
    },
    {
        "name": "Northern Paladin",
        "number": 233,
        "setcode": "xspc",
        "uuid": "1f1ce081-c604-4b6a-9602-9171ed97aa75"
    },
    {
        "name": "Fallen Angel",
        "number": 234,
        "setcode": "xspc",
        "uuid": "3e66cf0d-12bd-4acd-9962-35183f4d8262"
    },
    {
        "name": "Wall of Life",
        "number": 235,
        "setcode": "xspc",
        "uuid": "f45048cd-3cc2-4dc6-bca2-f0033f3b7942"
    },
    {
        "name": "Oasis",
        "number": 236,
        "setcode": "xspc",
        "uuid": "cf8ef6c8-fef3-4337-b84c-c6df17d09907"
    },
    {
        "name": "Holy Water",
        "number": 237,
        "setcode": "xspc",
        "uuid": "d8de4ac4-787a-44a4-97c4-d3ca5a35cde4"
    },
    {
        "name": "Elvish Ranger",
        "number": 238,
        "setcode": "xspc",
        "uuid": "43eb23c8-a05b-46f5-a419-478154fa8ac4"
    },
    {
        "name": "Swarm",
        "number": 239,
        "setcode": "xspc",
        "uuid": "20158e23-cfac-431e-9397-8fc9f99ca8bd"
    },
    {
        "name": "Resurrection",
        "number": 240,
        "setcode": "xspc",
        "uuid": "c11af4b6-cb4a-4fc6-aca8-2b19e5d2a64f"
    },
    {
        "name": "Empathy",
        "number": 241,
        "setcode": "xspc",
        "uuid": "f940e54a-dafd-4285-ac6c-ce1c5bc3b69c"
    },
    {
        "name": "Grim Reaper",
        "number": 242,
        "setcode": "xspc",
        "uuid": "849a14ae-4b4f-44b2-a30f-72a320a133ef"
    },
    {
        "name": "White-Black Antimana",
        "number": 243,
        "setcode": "xspc",
        "uuid": "a467abb6-b3d2-4bf7-b6fc-4001fc4406a0"
    },
    {
        "name": "Population Control",
        "number": 244,
        "setcode": "xspc",
        "uuid": "aeca1ef5-7f1d-4626-a201-4ac614fa7320"
    },
    {
        "name": "Pastoral Faucoun",
        "number": 245,
        "setcode": "xspc",
        "uuid": "5dca05c6-e025-4b08-91ec-cb79cb682814"
    },
    {
        "name": "Medusa",
        "number": 246,
        "setcode": "xspc",
        "uuid": "af76fd95-e172-4074-b98f-dc8da0989e3b"
    },
    {
        "name": "Avenger",
        "number": 247,
        "setcode": "xspc",
        "uuid": "0979e430-fb38-49b2-94d3-b67b6527cae7"
    },
    {
        "name": "Lunacy",
        "number": 248,
        "setcode": "xspc",
        "uuid": "7cc881c7-364b-4d78-ac17-44c4766e8a59"
    },
    {
        "name": "Soul Sucker",
        "number": 249,
        "setcode": "xspc",
        "uuid": "61a10e76-527f-4a87-97cd-5a203868d564"
    },
    {
        "name": "Lesser Black Demon",
        "number": 250,
        "setcode": "xspc",
        "uuid": "2039da64-5440-41e4-9617-a658162b4a84"
    },
    {
        "name": "Recurring Nightmare",
        "number": 251,
        "setcode": "xspc",
        "uuid": "0de4bb1c-2c96-44f9-bb8e-470da40e7b1f"
    },
    {
        "name": "Pteryx",
        "number": 252,
        "setcode": "xspc",
        "uuid": "ac34fd84-e43b-475b-bab3-c26a057660ac"
    },
    {
        "name": "Black Widow",
        "number": 253,
        "setcode": "xspc",
        "uuid": "1b2d3670-a2f2-4519-8369-d1b3b450d98e"
    },
    {
        "name": "White Doom",
        "number": 254,
        "setcode": "xspc",
        "uuid": "afaeee66-3afd-412f-97ef-77bca70693c8"
    },
    {
        "name": "Deathshriek",
        "number": 255,
        "setcode": "xspc",
        "uuid": "2f0e277a-8371-43a0-8fc9-84a9455ee7c2"
    },
    {
        "name": "Martyr",
        "number": 256,
        "setcode": "xspc",
        "uuid": "ebf57061-4421-43b7-9669-f003fcce0841"
    },
    {
        "name": "Virus",
        "number": 257,
        "setcode": "xspc",
        "uuid": "a056cd3e-d6ae-46cb-ab9a-b66fbd6b18d5"
    },
    {
        "name": "Landfall",
        "number": 258,
        "setcode": "xspc",
        "uuid": "a591dc6d-c62d-43ef-9c7d-2f3e64ca988d"
    },
    {
        "name": "Instigator",
        "number": 259,
        "setcode": "xspc",
        "uuid": "162e109f-ba2c-473b-aa5a-b511e6df82ce"
    },
    {
        "name": "Acid Rain",
        "number": 260,
        "setcode": "xspc",
        "uuid": "62fed761-29cd-49af-9cc7-abfcc1742e03"
    },
    {
        "name": "Manaddiction",
        "number": 261,
        "setcode": "xspc",
        "uuid": "03dbf8dd-7fa0-4cf8-ba07-a373430d2e21"
    },
    {
        "name": "Defensive Maneuvers",
        "number": 262,
        "setcode": "xspc",
        "uuid": "356a083e-92dd-4473-8710-bf2b9b5e88f8"
    },
    {
        "name": "Black-Green Antimana",
        "number": 263,
        "setcode": "xspc",
        "uuid": "4181fcc1-90a5-4dc0-bb33-afb9b56f780b"
    },
    {
        "name": "Night Walker",
        "number": 264,
        "setcode": "xspc",
        "uuid": "14fe9a74-2369-411c-b645-981d17657883"
    },
    {
        "name": "High Quickling",
        "number": 265,
        "setcode": "xspc",
        "uuid": "e49c253d-abfe-4055-b646-1c979a8418e7"
    },
    {
        "name": "Koskite Mosquitos",
        "number": 266,
        "setcode": "xspc",
        "uuid": "ac6e831d-3421-4fc9-b3f1-5af69e0cc778"
    },
    {
        "name": "Archdruid",
        "number": 267,
        "setcode": "xspc",
        "uuid": "e65dfc36-5a8f-450c-b8b3-49eab760a04c"
    },
    {
        "name": "Ronnam Longbowman",
        "number": 268,
        "setcode": "xspc",
        "uuid": "4e9a35ec-5ee7-43c4-98e6-5cab203a39bf"
    },
    {
        "name": "Highland Eagle",
        "number": 269,
        "setcode": "xspc",
        "uuid": "1bd03da4-528c-4c5a-897a-e2688c12cf5a"
    },
    {
        "name": "King of the Jungle",
        "number": 270,
        "setcode": "xspc",
        "uuid": "06830a0a-45f8-4c52-ae62-6fc3533aad5e"
    },
    {
        "name": "Spectral Growth",
        "number": 271,
        "setcode": "xspc",
        "uuid": "173626b2-50e6-420b-8833-c6f2b80f99ae"
    },
    {
        "name": "Alter Land",
        "number": 272,
        "setcode": "xspc",
        "uuid": "8e49128f-19d9-48dd-a5aa-8f7387242ede"
    },
    {
        "name": "Wild Joker",
        "number": 273,
        "setcode": "xspc",
        "uuid": "50a44c7a-e84f-4ffb-9a74-295d6069f4bb"
    },
    {
        "name": "Supernatural Power",
        "number": 274,
        "setcode": "xspc",
        "uuid": "cb53bae0-cbee-47ac-b600-1e0ff7ee0e3a"
    },
    {
        "name": "Tree Herder",
        "number": 275,
        "setcode": "xspc",
        "uuid": "2dff45a7-1c2f-405e-9933-2f8a99e01c5a"
    },
    {
        "name": "Army Ants",
        "number": 276,
        "setcode": "xspc",
        "uuid": "9dfde40b-dc2d-4e8b-82a2-92ca7586dbbd"
    },
    {
        "name": "Frenzy",
        "number": 277,
        "setcode": "xspc",
        "uuid": "26a9e567-29df-4cc8-a988-feaaa242d1c9"
    },
    {
        "name": "Gremlin",
        "number": 278,
        "setcode": "xspc",
        "uuid": "9c4d8899-f037-49cf-8db3-94c5d91b465b"
    },
    {
        "name": "Green-Blue Antimana",
        "number": 279,
        "setcode": "xspc",
        "uuid": "103f7550-0690-4f87-a53a-fad78eeab2c4"
    },
    {
        "name": "Lucky Number",
        "number": 280,
        "setcode": "xspc",
        "uuid": "de2fd8db-0279-4009-a662-1366dfb47ffe"
    },
    {
        "name": "Changeling",
        "number": 281,
        "setcode": "xspc",
        "uuid": "1608aab5-1c49-48a6-a060-a7f982647e27"
    },
    {
        "name": "Hyperactivity",
        "number": 282,
        "setcode": "xspc",
        "uuid": "8587d6a6-bcea-4af7-9461-4ab67e0d4f72"
    },
    {
        "name": "Resonance",
        "number": 283,
        "setcode": "xspc",
        "uuid": "4f67b4cf-ec8f-48cc-a820-11bf058b29f3"
    },
    {
        "name": "Stunt Double",
        "number": 284,
        "setcode": "xspc",
        "uuid": "f2aa27cf-decb-4a7b-bf75-5c8363a27eba"
    },
    {
        "name": "Viscous Blob",
        "number": 285,
        "setcode": "xspc",
        "uuid": "a99951e1-4646-4cc0-8cd7-d8439fbc518f"
    },
    {
        "name": "Lunar Ring",
        "number": 286,
        "setcode": "xspc",
        "uuid": "fea38994-88fd-4733-b329-7f730844a29f"
    },
    {
        "name": "Holy Grail",
        "number": 287,
        "setcode": "xspc",
        "uuid": "ed67e63c-d7d4-4294-915c-093cc044cb40"
    },
    {
        "name": "Orcish Canal",
        "number": 288,
        "setcode": "xspc",
        "uuid": "be0c5f2a-ac2a-4779-b739-aa151996910e"
    },
    {
        "name": "Mystical Runes",
        "number": 289,
        "setcode": "xspc",
        "uuid": "fa8ab313-9cd9-45b9-92ab-1b73b5ee814e"
    },
    {
        "name": "Antiredundancy Coil",
        "number": 290,
        "setcode": "xspc",
        "uuid": "2c8fc3e6-cbda-45e0-a7eb-90ddcc5eb987"
    },
    {
        "name": "Wand of Resurrection",
        "number": 291,
        "setcode": "xspc",
        "uuid": "35ffb26c-3058-4b04-8f8d-f3e7ccbd05da"
    },
    {
        "name": "Ring of Unsummoning",
        "number": 292,
        "setcode": "xspc",
        "uuid": "dc4118f2-6c1d-4de3-9867-d4a432543332"
    },
    {
        "name": "Annihilator Orb",
        "number": 293,
        "setcode": "xspc",
        "uuid": "dea2dd9b-4e0b-4d61-91b5-7581065c2a8e"
    },
    {
        "name": "Paxin's Winged Boots",
        "number": 294,
        "setcode": "xspc",
        "uuid": "ac3b9e7a-7aca-4e8d-acb3-e264a524754b"
    },
    {
        "name": "Paxin's Helm",
        "number": 295,
        "setcode": "xspc",
        "uuid": "bcf4367b-a053-4aba-a64d-0843044a1755"
    },
    {
        "name": "Jayellem Tome",
        "number": 296,
        "setcode": "xspc",
        "uuid": "e32882e7-8417-4e32-841f-d3f9ee3c13d9"
    },
    {
        "name": "The Hill",
        "number": 297,
        "setcode": "xspc",
        "uuid": "66c73339-2550-4f75-adbc-4917c9a51401"
    },
    {
        "name": "Mirror",
        "number": 298,
        "setcode": "xspc",
        "uuid": "ff0359b1-f64b-4382-ab2f-fd760d5e1fd9"
    },
    {
        "name": "Weakstone",
        "number": 299,
        "setcode": "xspc",
        "uuid": "86e27863-2bc8-48f7-92b9-bb92bb10a21f"
    },
    {
        "name": "Symbol of Protection",
        "number": 300,
        "setcode": "xspc",
        "uuid": "bb843de0-532c-450e-bad1-cca0c304a551"
    },
    {
        "name": "Time Bomb",
        "number": 301,
        "setcode": "xspc",
        "uuid": "433169cb-8ab8-4887-bc3c-fbbd258c41ca"
    },
    {
        "name": "Segalasaurus",
        "number": 302,
        "setcode": "xspc",
        "uuid": "f497726b-520c-4d23-9b7a-648a90f01a62"
    },
    {
        "name": "Hot Potato",
        "number": 303,
        "setcode": "xspc",
        "uuid": "ba3462c9-c05b-45ed-b9ac-4a64a962732a"
    },
    {
        "name": "Perimeterradactyl",
        "number": 304,
        "setcode": "xspc",
        "uuid": "072952a4-f367-498a-add9-15f3b090f101"
    },
    {
        "name": "Kaleidescope Beast",
        "number": 305,
        "setcode": "xspc",
        "uuid": "61267edf-144f-4151-9822-cc0c3c15a8f9"
    },
    {
        "name": "Undo",
        "number": 306,
        "setcode": "xspc",
        "uuid": "f51697cd-09ed-4a85-a2bf-84041a92e684"
    },
    {
        "name": "Great Bearded Hulker",
        "number": 307,
        "setcode": "xspc",
        "uuid": "28b45773-d898-49dc-80cf-d09601ea1600"
    },
    {
        "name": "Life Leech",
        "number": 308,
        "setcode": "xspc",
        "uuid": "71dea782-0338-45b0-9f3c-9342ab079b12"
    },
    {
        "name": "Dale",
        "number": 309,
        "setcode": "xspc",
        "uuid": "1f21bb13-5334-49e4-892d-77f1f876eb30"
    },
    {
        "name": "Moor",
        "number": 310,
        "setcode": "xspc",
        "uuid": "79e5d062-16ae-4f54-ba78-4d820a3272d2"
    },
    {
        "name": "Village in the Clouds",
        "number": 311,
        "setcode": "xspc",
        "uuid": "0a7271f4-2f80-447a-b285-b419ab78bbad"
    },
    {
        "name": "Undiscovered Country",
        "number": 312,
        "setcode": "xspc",
        "uuid": "0809e6df-cf40-4524-a753-44c1d41b105b"
    },
    {
        "name": "Discovered Country",
        "number": 313,
        "setcode": "xspc",
        "uuid": "0a5d4ca0-f43a-42e2-9c02-6907ff128ff8"
    },
    {
        "name": "Magic Marker",
        "number": 314,
        "setcode": "xspc",
        "uuid": "0d647ef6-c933-405a-9673-2810f8696394"
    },
    {
        "name": "Mnemosyne",
        "number": 315,
        "setcode": "xspc",
        "uuid": "38c0b58d-d30c-4715-b035-bd250cba1d6d"
    },
    {
        "name": "Enqueue",
        "number": 316,
        "setcode": "xspc",
        "uuid": "96818c6d-123d-4838-b3b4-d12aecf320e8"
    },
    {
        "name": "Blue Whale",
        "number": 317,
        "setcode": "xspc",
        "uuid": "a66696e3-637e-4f28-a19a-62d536f5b0ce"
    },
    {
        "name": "Mimic",
        "number": 318,
        "setcode": "xspc",
        "uuid": "ae551c77-a821-4bd6-a99b-6f16d9385479"
    },
    {
        "name": "Blue Elemental",
        "number": 319,
        "setcode": "xspc",
        "uuid": "bd0b616b-40ba-41a3-9926-e9085e04a4fd"
    },
    {
        "name": "King Snake",
        "number": 320,
        "setcode": "xspc",
        "uuid": "f7b2d132-f86f-426a-b3fd-00a60daf74ef"
    },
    {
        "name": "Illusions of Grandeur",
        "number": 321,
        "setcode": "xspc",
        "uuid": "02888ff3-2c5b-4bfe-b6a1-ffb5c19ecef7"
    },
    {
        "name": "Kraken",
        "number": 322,
        "setcode": "xspc",
        "uuid": "e52f869b-b847-4cd4-8641-c8354d043ca7"
    },
    {
        "name": "The North Wind",
        "number": 323,
        "setcode": "xspc",
        "uuid": "739185fb-184f-4828-bb7d-7c448ae7ee70"
    },
    {
        "name": "Mass Unsummon",
        "number": 324,
        "setcode": "xspc",
        "uuid": "b120bb7f-f519-4c34-86f9-4c20cdb27480"
    },
    {
        "name": "Mass Twiddle",
        "number": 325,
        "setcode": "xspc",
        "uuid": "646118ea-f95d-417d-b31e-f1f5d27dbb03"
    },
    {
        "name": "Copy Spell",
        "number": 326,
        "setcode": "xspc",
        "uuid": "bf12da30-a783-419e-8de6-4660d3b09199"
    },
    {
        "name": "Frost Fiend",
        "number": 327,
        "setcode": "xspc",
        "uuid": "aa84c559-15eb-4565-ac22-a5faca3f13ff"
    },
    {
        "name": "Gybe's Spell Freeze",
        "number": 328,
        "setcode": "xspc",
        "uuid": "3893f3ff-aea1-4d47-976e-3061c5536b16"
    },
    {
        "name": "Convert Land",
        "number": 329,
        "setcode": "xspc",
        "uuid": "c593530b-4a42-40e0-962e-1998f9beea83"
    },
    {
        "name": "Fusion",
        "number": 330,
        "setcode": "xspc",
        "uuid": "7790084f-ee32-4ad1-8c83-e748c6ae9fcf"
    },
    {
        "name": "Chain Reaction",
        "number": 331,
        "setcode": "xspc",
        "uuid": "235d351c-e132-4af3-994b-5963d800578b"
    },
    {
        "name": "Animate Lands",
        "number": 332,
        "setcode": "xspc",
        "uuid": "d5525317-761b-4a76-9196-7736d4b072cf"
    },
    {
        "name": "Gahchgah One-Eye",
        "number": 333,
        "setcode": "xspc",
        "uuid": "cfe7291b-96dd-449f-9e35-b060b99da8c9"
    },
    {
        "name": "Starburst",
        "number": 334,
        "setcode": "xspc",
        "uuid": "6d7ba80f-b31a-4e95-86a5-44b16633d9f2"
    },
    {
        "name": "Swordsman Lord",
        "number": 335,
        "setcode": "xspc",
        "uuid": "5ac6d7a2-e52d-4049-8f62-f13d0454966a"
    },
    {
        "name": "Red Elemental",
        "number": 336,
        "setcode": "xspc",
        "uuid": "9361a192-989f-424c-a330-b7f802d2fe6c"
    },
    {
        "name": "Koskite Wyvern",
        "number": 337,
        "setcode": "xspc",
        "uuid": "ca9f6ab0-9686-4794-96d8-eec6ede7696f"
    },
    {
        "name": "Spirit of Excalibur",
        "number": 338,
        "setcode": "xspc",
        "uuid": "31e9a237-aa59-4d5c-a9f6-d07c8ac35374"
    },
    {
        "name": "Polymorph",
        "number": 339,
        "setcode": "xspc",
        "uuid": "2b959906-257c-4018-84b7-ca75e67cb0ac"
    },
    {
        "name": "Prometheus",
        "number": 340,
        "setcode": "xspc",
        "uuid": "8db53108-c151-43e3-b09f-61e86273a346"
    },
    {
        "name": "Stream of Destruction",
        "number": 341,
        "setcode": "xspc",
        "uuid": "d881a290-9b0a-43d2-94cc-b6d7b3a3f268"
    },
    {
        "name": "Moaning Banshee",
        "number": 342,
        "setcode": "xspc",
        "uuid": "ebf1f8cb-b9c0-415d-a99e-b07208c57207"
    },
    {
        "name": "Harpy",
        "number": 343,
        "setcode": "xspc",
        "uuid": "0ff1532d-7e83-4352-ad47-725a8580b5cc"
    },
    {
        "name": "Swamp Hydra",
        "number": 344,
        "setcode": "xspc",
        "uuid": "dd30312b-e2b9-41df-b3bf-209cc2095ff4"
    },
    {
        "name": "Indigo Elemental",
        "number": 345,
        "setcode": "xspc",
        "uuid": "9153b719-98ae-448a-b9bc-3bdf737cb474"
    },
    {
        "name": "Greater Demon",
        "number": 346,
        "setcode": "xspc",
        "uuid": "dc2e45ce-e599-49f9-893f-7019361b3f75"
    },
    {
        "name": "Hellfire & Damnation",
        "number": 347,
        "setcode": "xspc",
        "uuid": "8a9f4349-1be3-4e09-a179-e785237a5c8d"
    },
    {
        "name": "Soulitude",
        "number": 348,
        "setcode": "xspc",
        "uuid": "1466b5b8-8c6a-4786-913d-f7da18c78707"
    },
    {
        "name": "Homesickness",
        "number": 349,
        "setcode": "xspc",
        "uuid": "2f817239-4940-4abc-b225-3b3a6f3b9fc7"
    },
    {
        "name": "Bricklayer",
        "number": 350,
        "setcode": "xspc",
        "uuid": "0d233c47-4e75-4534-a4a4-e4ffb68d6054"
    },
    {
        "name": "Ion Storm",
        "number": 351,
        "setcode": "xspc",
        "uuid": "83c2b217-7316-4400-bd2e-82b696168819"
    },
    {
        "name": "Telmarian Acolyte",
        "number": 352,
        "setcode": "xspc",
        "uuid": "930135e0-3198-4a02-856a-c7fbf326882a"
    },
    {
        "name": "Great Cat Armand",
        "number": 353,
        "setcode": "xspc",
        "uuid": "d7f0dc7e-7c60-4e7b-998c-1f94e39d6416"
    },
    {
        "name": "Archangel",
        "number": 354,
        "setcode": "xspc",
        "uuid": "f7474b8a-702b-4355-b80e-c6fb935864d0"
    },
    {
        "name": "Shiva the Destroyer",
        "number": 355,
        "setcode": "xspc",
        "uuid": "090b22b0-db5e-4efe-9b6f-8a7804020010"
    },
    {
        "name": "Medical Training",
        "number": 356,
        "setcode": "xspc",
        "uuid": "960785f2-ac9f-4ea7-b827-a4a1e5465b79"
    },
    {
        "name": "Purification",
        "number": 357,
        "setcode": "xspc",
        "uuid": "d5c108d3-3755-4554-a564-f99a0d11448e"
    },
    {
        "name": "Animate Walls",
        "number": 358,
        "setcode": "xspc",
        "uuid": "f181dd4e-a4ae-4c60-a5b1-ad7ad2dfba06"
    },
    {
        "name": "Faded Circle of Protection",
        "number": 359,
        "setcode": "xspc",
        "uuid": "1b8df9f3-9319-4658-bf44-c61e15ab4e18"
    },
    {
        "name": "Page's Ward",
        "number": 360,
        "setcode": "xspc",
        "uuid": "3241c96c-d0ed-4630-ace3-3c78a5f098fb"
    },
    {
        "name": "Colorless Ward",
        "number": 361,
        "setcode": "xspc",
        "uuid": "0e87209b-77bc-42f9-b27f-7ddb6ca00ea8"
    },
    {
        "name": "Hyperion",
        "number": 362,
        "setcode": "xspc",
        "uuid": "07187a33-2c10-4f13-89fe-a980d6c30da0"
    },
    {
        "name": "Reflection",
        "number": 363,
        "setcode": "xspc",
        "uuid": "a582a1de-83dc-4fc5-94c4-7d31200bd05c"
    },
    {
        "name": "Sanctuary",
        "number": 364,
        "setcode": "xspc",
        "uuid": "898628e8-1009-49ee-a751-dfd687b8f1f3"
    },
    {
        "name": "Mass Resurrection",
        "number": 365,
        "setcode": "xspc",
        "uuid": "6142286f-a0a1-45fb-872b-d16f755af69e"
    },
    {
        "name": "Yellow Elemental",
        "number": 366,
        "setcode": "xspc",
        "uuid": "e4d7dbb1-1f41-4288-86c8-0d049394fcd6"
    },
    {
        "name": "Eosian Stag",
        "number": 367,
        "setcode": "xspc",
        "uuid": "856542cb-a433-4cfc-85ab-a3cbd5d7b329"
    },
    {
        "name": "Efficiency",
        "number": 368,
        "setcode": "xspc",
        "uuid": "99e3576c-d159-47a2-ac2e-99c90c7e4147"
    },
    {
        "name": "Vicarious Entity",
        "number": 369,
        "setcode": "xspc",
        "uuid": "94580d87-0fa7-4b38-9da7-1cd04021ae48"
    },
    {
        "name": "Afterlife",
        "number": 370,
        "setcode": "xspc",
        "uuid": "631da02f-0a14-4e5a-a789-a01641b5a494"
    },
    {
        "name": "Dawn of the Dead",
        "number": 371,
        "setcode": "xspc",
        "uuid": "65ad4fa0-5a2b-4e5d-ab95-72cbd56e32be"
    },
    {
        "name": "Ophion",
        "number": 372,
        "setcode": "xspc",
        "uuid": "0dc841f5-5714-40de-9e68-47766241ee61"
    },
    {
        "name": "Groaning Demon",
        "number": 373,
        "setcode": "xspc",
        "uuid": "9fe2f98f-f7e7-48be-bcbc-a75b4bee808b"
    },
    {
        "name": "Horned Devil",
        "number": 374,
        "setcode": "xspc",
        "uuid": "6a23b884-6fd8-4dbc-93e0-5852aad77ead"
    },
    {
        "name": "Satan's Reward",
        "number": 375,
        "setcode": "xspc",
        "uuid": "d5a060d0-c78e-4a0e-90bf-e70238961dee"
    },
    {
        "name": "Starvation",
        "number": 376,
        "setcode": "xspc",
        "uuid": "a2cf3df7-f5c5-435d-9e5c-d60ad53bb33e"
    },
    {
        "name": "Elric's Oath",
        "number": 377,
        "setcode": "xspc",
        "uuid": "1521c979-73aa-42d0-9fde-bd77a202a6f5"
    },
    {
        "name": "Liquid Doom",
        "number": 378,
        "setcode": "xspc",
        "uuid": "8305e0ce-d025-4356-9c48-10cf660e541d"
    },
    {
        "name": "Thief of Baghdad",
        "number": 379,
        "setcode": "xspc",
        "uuid": "84e3a27e-ed90-49d7-8b57-7059b0b4763a"
    },
    {
        "name": "Ice Fiend",
        "number": 380,
        "setcode": "xspc",
        "uuid": "fde19fdb-454b-4212-b328-a64cdccfd52e"
    },
    {
        "name": "Demon of Air & Darkness",
        "number": 381,
        "setcode": "xspc",
        "uuid": "4ef46439-e56c-4a6f-a556-95aca80e4edc"
    },
    {
        "name": "Violet Elemental",
        "number": 382,
        "setcode": "xspc",
        "uuid": "043d9dbd-3018-4f41-9d0e-69dd616d9779"
    },
    {
        "name": "Forbidden Knowledge",
        "number": 383,
        "setcode": "xspc",
        "uuid": "6c8d35a8-442c-4da8-a728-ab7c15651970"
    },
    {
        "name": "Total Recall",
        "number": 384,
        "setcode": "xspc",
        "uuid": "9b5f56d5-834c-408b-91ec-71008c255dda"
    },
    {
        "name": "Screeching Meemies",
        "number": 385,
        "setcode": "xspc",
        "uuid": "db211e7e-4504-4ba1-9513-3a9518ac426d"
    },
    {
        "name": "Python",
        "number": 386,
        "setcode": "xspc",
        "uuid": "1bc8576d-3937-4045-9e5d-1d27a5ffea73"
    },
    {
        "name": "Graveyard Waltz",
        "number": 387,
        "setcode": "xspc",
        "uuid": "a6a060ba-6d48-4ec9-afb9-9f48252ccfbe"
    },
    {
        "name": "Multichannel",
        "number": 388,
        "setcode": "xspc",
        "uuid": "abd6206f-f823-4f13-a5ef-3ea47a295c43"
    },
    {
        "name": "Unnatural Selection",
        "number": 389,
        "setcode": "xspc",
        "uuid": "5d0c5649-168f-4dec-a0ac-2fb4643dcbcf"
    },
    {
        "name": "Lifebringer",
        "number": 390,
        "setcode": "xspc",
        "uuid": "90197b5a-b42a-4b55-a5ae-1480262369d8"
    },
    {
        "name": "Heavy Crossbowman",
        "number": 391,
        "setcode": "xspc",
        "uuid": "91945b04-7eaf-49c5-9240-8cf52569526f"
    },
    {
        "name": "Green Elemental",
        "number": 392,
        "setcode": "xspc",
        "uuid": "34e20d52-c887-48da-a2d7-8e9c363370ae"
    },
    {
        "name": "Mother Nature",
        "number": 393,
        "setcode": "xspc",
        "uuid": "5aca3bcf-b5ae-4222-862a-50072114b18b"
    },
    {
        "name": "Atlas",
        "number": 394,
        "setcode": "xspc",
        "uuid": "fcc0a714-f9a0-46f1-aac8-3d8120aea3e0"
    },
    {
        "name": "Some Enchanted Evening",
        "number": 395,
        "setcode": "xspc",
        "uuid": "75357ef5-5750-4124-ac2c-b4903426fef2"
    },
    {
        "name": "Tinkerer",
        "number": 396,
        "setcode": "xspc",
        "uuid": "d52a216e-b692-48d5-ac97-d5e1444ae6cd"
    },
    {
        "name": "Lifestealer",
        "number": 397,
        "setcode": "xspc",
        "uuid": "c9427df6-75e7-4d88-91b5-3a6719e077f2"
    },
    {
        "name": "Moorish General",
        "number": 398,
        "setcode": "xspc",
        "uuid": "08210ef9-175e-49f2-8343-6f6b33b34387"
    },
    {
        "name": "Fiery Shrub",
        "number": 399,
        "setcode": "xspc",
        "uuid": "afb0c605-cf35-40bd-a143-f390908867b2"
    },
    {
        "name": "Orange Elemental",
        "number": 400,
        "setcode": "xspc",
        "uuid": "e4680d86-09ef-4a81-ab73-6a59e27baaf9"
    },
    {
        "name": "Mind Twister",
        "number": 401,
        "setcode": "xspc",
        "uuid": "2448bc64-c5fd-4e0e-ab8c-2f761ac0de60"
    },
    {
        "name": "Simplicity",
        "number": 402,
        "setcode": "xspc",
        "uuid": "db7b0fc3-668c-487f-96ea-ab9d7e37db0b"
    },
    {
        "name": "Stream of Consciousness",
        "number": 403,
        "setcode": "xspc",
        "uuid": "0de6f606-a757-4832-9ce2-cddeb5b3979e"
    },
    {
        "name": "Manipulation",
        "number": 404,
        "setcode": "xspc",
        "uuid": "1a51470c-59c4-4a08-ad1d-ac1d6ae79b8d"
    },
    {
        "name": "Lifegeyser",
        "number": 405,
        "setcode": "xspc",
        "uuid": "dfa76817-4962-4b9f-be92-ed37e56cf1fb"
    },
    {
        "name": "Sheherazad",
        "number": 406,
        "setcode": "xspc",
        "uuid": "209eec94-a394-499e-9395-d24160e75b58"
    },
    {
        "name": "Psychic Storm",
        "number": 407,
        "setcode": "xspc",
        "uuid": "eafedb86-fb8c-4c59-b768-1f1eef9f771a"
    },
    {
        "name": "Mox Diamond",
        "number": 408,
        "setcode": "xspc",
        "uuid": "f4378a62-ff97-4d6f-9573-7fb97be12a3e"
    },
    {
        "name": "Moonstone",
        "number": 409,
        "setcode": "xspc",
        "uuid": "d6a6e145-e938-4678-aa70-852fbc1c5f04"
    },
    {
        "name": "Thought Stone",
        "number": 410,
        "setcode": "xspc",
        "uuid": "8707047d-8e2c-4605-983e-a37ba99da6a3"
    },
    {
        "name": "Earth Stone",
        "number": 411,
        "setcode": "xspc",
        "uuid": "edb6819a-3b8b-40b5-9985-3292b2c7e335"
    },
    {
        "name": "Pure Stone",
        "number": 412,
        "setcode": "xspc",
        "uuid": "913443a8-910a-4a32-a136-d500e4eaf1c6"
    },
    {
        "name": "Death Stone",
        "number": 413,
        "setcode": "xspc",
        "uuid": "46b8f6e3-7d13-4a03-a53e-36254593e506"
    },
    {
        "name": "Life Stone",
        "number": 414,
        "setcode": "xspc",
        "uuid": "8bbb7729-017f-40e6-9d2a-b0f406d24b7c"
    },
    {
        "name": "Ring of Undoing",
        "number": 415,
        "setcode": "xspc",
        "uuid": "6fddc3f7-4d96-4666-ba23-64cc8dc59974"
    },
    {
        "name": "Symbol of Pain",
        "number": 416,
        "setcode": "xspc",
        "uuid": "c1295a68-8d0f-469a-908d-0e500ef7963b"
    },
    {
        "name": "Symbol of Power",
        "number": 417,
        "setcode": "xspc",
        "uuid": "ad6f97a4-3bc2-4003-bea1-e5cbf65c9d28"
    },
    {
        "name": "El Timtor's Tiny Staff",
        "number": 418,
        "setcode": "xspc",
        "uuid": "3fe2bcb9-de1a-4ffc-ad32-999f54796e23"
    },
    {
        "name": "Round Table",
        "number": 419,
        "setcode": "xspc",
        "uuid": "54285e54-6a3a-4c99-9510-62a6d2009e38"
    },
    {
        "name": "Ruin",
        "number": 420,
        "setcode": "xspc",
        "uuid": "f6e3808c-6213-424b-b0c0-cd104d09a94f"
    },
    {
        "name": "Paxin's Armor",
        "number": 421,
        "setcode": "xspc",
        "uuid": "48f3ad7f-e116-48a9-9983-98a61a591431"
    },
    {
        "name": "Paxin's Shield",
        "number": 422,
        "setcode": "xspc",
        "uuid": "32be1704-9ed2-467c-bb5d-8c9eebce3826"
    },
    {
        "name": "Paxin's Sword",
        "number": 423,
        "setcode": "xspc",
        "uuid": "773906ac-08cf-4620-94b1-29d15940c45c"
    },
    {
        "name": "Felice of Many Colors",
        "number": 424,
        "setcode": "xspc",
        "uuid": "d5d759b7-374f-4228-acc2-045850075f33"
    },
    {
        "name": "Staff of Odin",
        "number": 425,
        "setcode": "xspc",
        "uuid": "2ac1b441-546e-4dea-8b91-1117d94ef376"
    },
    {
        "name": "Unruly Summons",
        "number": 426,
        "setcode": "xspc",
        "uuid": "b2248282-b38a-41da-8feb-3613a67239dc"
    },
    {
        "name": "Brainwash",
        "number": 427,
        "setcode": "xspc",
        "uuid": "bbbfcfe0-d1ab-4bc4-9063-12db5d39b8df"
    },
    {
        "name": "Spectral Chaos",
        "number": 428,
        "setcode": "xspc",
        "uuid": "0566c58f-3007-4201-bdb6-85e6c21ffa3a"
    },
    {
        "name": "Temporal Loop",
        "number": 429,
        "setcode": "xspc",
        "uuid": "0d14edf8-0408-483b-935b-20a516491866"
    }
];

var xhttp = new XMLHttpRequest();
xhttp.onreadystatechange = async function() {
    if (this.readyState == 4 && this.status == 200) {
       // Typical action to be performed when the document is ready:
       const response = xhttp.responseText;
       const lines = response.split('\r\n');
       
       const lineArr = [];
       lines.forEach((l) => lineArr.push(l));
       
       const cards = [];
       
       for await (const [index, line] of lines.entries()) {
       
       		// check if it's the title of the card XXX - NAME
         if (!isNaN(line.substr(0, 3)) && parseInt(line.substr(0, 3)) > 0) {
            
            const rarity = lines[index + 1].substr(1, lines[index + 1].search(' ') - 1).toLowerCase();
            const name = lines[index + 3].search(' –') > -1 ? lines[index + 3].substr(0, lines[index + 3].search(' –')) : lines[index + 3];
            const manaCost = lines[index + 3].search('{') > -1 ? lines[index + 3].substr(lines[index + 3].search('{')) : '';
            const type = lines[index + 4];
            let text = '';
            let pt = '';
            
            console.log(`Found card with name ${name}`);
            
            if (type.includes('Creature')) {
            	// find the line including the P/T
              const start = index + 5;
              const end = index + 15;
            	for (i = start; i < end; i++) {
                const regex = new RegExp('[0-9]+\/+[0-9]');
                if (regex.test(lines[i])) {
                  pt = lines[i];
                  // add all lines above as card text    
                  text = lines.slice(start, i).join('\r\n');
                  console.log(`card ${name} IS creature and line ${i} is P/T. Extract lines ${start}-${start + length} (length: ${length})`);
                  break;
                }
              }
            }
            else {
            // find the next empty line
            	const start = index + 5;
              const end = index + 15;
            	for (i = start; i < end; i++) {
                if (lines[i] === '') {
                  // add all lines above as card text
                  text = lines.slice(start, i).join('\r\n');
                  console.log(`card ${name} IS NOT creature and line ${i} EMPTY. Extract lines ${start}-${start + length} (length: ${length})`);
                  break;
                }
              }
            }
            
            // add colors
            const colors = [];
            if (manaCost.includes('{W}')) {
            	colors.push('W')
            }
            if (manaCost.includes('{U}')) {
            	colors.push('U')
            }
            if (manaCost.includes('{B}')) {
            	colors.push('B')
            }
            if (manaCost.includes('{R}')) {
            	colors.push('R')
            }
            if (manaCost.includes('{G}')) {
            	colors.push('G')
            }
            
            // converted mana cost
            
            const power = type.includes('Creature') ? pt.substr(0, 1) : '';
            const toughness = type.includes('Creature') ? pt.substr(2) : '';
            const colorSymbols = /{([A-Z])}/gm;
            const colorless = /{[0-9]}/gm;
            const colorlessMana = manaCost.match(colorless) !== null ? parseInt(manaCost.match(colorless).pop().match(/\d+/).pop()) : 0;
            const coloredMana = manaCost.match(colorSymbols) !== null ? manaCost.match(colorSymbols).length : 0;
            const convertedManaCost = coloredMana + colorlessMana;
            const cardNum = xspc.find(c => c.name === name) ? xspc.find(c => c.name === name).number : null;
            const uuid = xspc.find(c => c.name === name) ? xspc.find(c => c.name === name).uuid : '';
            
            cards.push({
            	artist: '',
              colorIdentity: [],
            	colors: colors,
              manaCost: manaCost,
              cmc: convertedManaCost.toString(),
              name: name,
              number: cardNum,
              originalText: '',
              originalType: '',
              power: power,
              toughness: toughness,
              rarity: rarity,
              rulings: [],
              setcode: "xspc",
              subtypes: [],
              supertypes: [],
              text: text,
              type: type,
              types: getTypesList(type),
              id: uuid
            });
         }
       
       }
       //line.substr(4, 1) === '–' && 
       //console.log(lineArr);
       console.log(JSON.stringify(cards));
       console.log(cards);
       console.log(cards.filter(c => c.uuid === ''));
       
       
    }
};
xhttp.open("GET", url, true);
xhttp.send();
