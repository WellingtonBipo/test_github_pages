'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"version.json": "e47bd2883a2f685c6a1bced2281963e6",
"index.html": "8e716b49352a12149b4c84bad2fa31c8",
"/": "8e716b49352a12149b4c84bad2fa31c8",
"main.dart.js": "92231b46776f00e7f6a01aa23a6ca43c",
"flutter.js": "7d69e653079438abfbb24b82a655b0a4",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "7895ef59afad890a99d974c50bb1833f",
"assets/AssetManifest.json": "81ee6b3617590f2fe80d465585c5ab07",
"assets/NOTICES": "f92ec6307d9b9fff62f29d934a680cb3",
"assets/FontManifest.json": "2fbd1d88db220e36a3e12a89bc584901",
"assets/AssetManifest.bin.json": "f34ebbf902364d2073be4b36ceb40214",
"assets/packages/ailos_eliot/assets/illustrations/Search.svg": "7ef4cf769cdb42ac118f3bafb32ab760",
"assets/packages/ailos_eliot/assets/illustrations/Puzzzle.svg": "6f699435d2b4554116f795db7bc8c371",
"assets/packages/ailos_eliot/assets/illustrations/Trash%25202.svg": "ef2286c3ad014e6b03d443747ea72b15",
"assets/packages/ailos_eliot/assets/illustrations/Luck.svg": "dd7705822adeb45aa81620994da55036",
"assets/packages/ailos_eliot/assets/illustrations/Family.svg": "54d9bcae04a394a853c30825da94fcde",
"assets/packages/ailos_eliot/assets/illustrations/To%2520the%2520top.svg": "f4ff949ac543ab1d8f59597da51dca6c",
"assets/packages/ailos_eliot/assets/illustrations/No%2520results.svg": "cff2e6bc4940ba07d96b3f48fb99bf79",
"assets/packages/ailos_eliot/assets/illustrations/Relax.svg": "895fc94fbff731e117daa1fc5f8e03f8",
"assets/packages/ailos_eliot/assets/illustrations/Talk.svg": "6fb3b7b97639d79eeb22b7ebe44eedb1",
"assets/packages/ailos_eliot/assets/illustrations/Percentage.svg": "086433dc5921f4da477d1b0af513005a",
"assets/packages/ailos_eliot/assets/illustrations/Face%2520I.D.svg": "49672817105e284c99bae7fd759f312c",
"assets/packages/ailos_eliot/assets/illustrations/Pix.svg": "446617fd21eb5b2259af170291fed7e6",
"assets/packages/ailos_eliot/assets/illustrations/Trade%2520up.svg": "800442d29ca13bfcddc63514450afea1",
"assets/packages/ailos_eliot/assets/illustrations/Wallet.svg": "8ad3c1a972529e839c30ed2450258909",
"assets/packages/ailos_eliot/assets/illustrations/Pig%2520bank.svg": "fc3752201816c511b5dd7bfffd064c3a",
"assets/packages/ailos_eliot/assets/illustrations/Big%2520Tree.svg": "0a33f58f22bc82a4ff0b8ac5c8253276",
"assets/packages/ailos_eliot/assets/illustrations/Little%2520Tree.svg": "1434a094c9764ebc93632e4d300aa868",
"assets/packages/ailos_eliot/assets/illustrations/News.svg": "abc1b02368e8bc67eda8ec18bad32d85",
"assets/packages/ailos_eliot/assets/illustrations/Save%2520money.svg": "f25f637e68c37c2c513b85f42b9958cc",
"assets/packages/ailos_eliot/assets/illustrations/Denied.svg": "4ba4d24d7df810b3bd8b9bbc0a48b8d1",
"assets/packages/ailos_eliot/assets/illustrations/Security.svg": "92ff996196175cb3141a84c6dcdbe07b",
"assets/packages/ailos_eliot/assets/illustrations/Check%2520Document.svg": "3f3a831e8f63cee583e4d80dab70ff04",
"assets/packages/ailos_eliot/assets/illustrations/Trash.svg": "a3d10939c5faa4fc3fd3c538fc4375ef",
"assets/packages/ailos_eliot/assets/illustrations/QR%2520code%25202.svg": "dba2c31de0a7236b99d4fa5d6e3162fe",
"assets/packages/ailos_eliot/assets/illustrations/Success.svg": "a54206952208526853287e91e947301c",
"assets/packages/ailos_eliot/assets/illustrations/Identity.svg": "c156992c005f0d8a4cbc505f3a3433b6",
"assets/packages/ailos_eliot/assets/illustrations/My%2520key.svg": "1cf2f6b0e8d53fbcba537c5808837ae2",
"assets/packages/ailos_eliot/assets/illustrations/QR%2520code.svg": "0243f29f9b7d180c821e9d239b07455d",
"assets/packages/ailos_eliot/assets/illustrations/Error.svg": "e265a56d16c413425917b47a02116043",
"assets/packages/ailos_eliot/assets/illustrations/Wrong%2520Password.svg": "7dfa87e77a61aac6c7912f9686b7b0e5",
"assets/packages/ailos_eliot/assets/illustrations/Error%25202.svg": "586be8faf4a8c8092e3dff44c33b988b",
"assets/packages/ailos_eliot/assets/illustrations/Password.svg": "40838b8a98bfcce0c983401499ed412d",
"assets/packages/ailos_eliot/assets/icons/selected.svg": "ed6bca23257ed8615b9d518bd262ce16",
"assets/packages/ailos_eliot/assets/icons/columns.svg": "f18ce17fc5f1a20086e6171713e0ffc1",
"assets/packages/ailos_eliot/assets/icons/underline.svg": "38ebed95ed59e65910f1f762db034a7a",
"assets/packages/ailos_eliot/assets/icons/transfer.svg": "87c35351143bd8285a47e84136298765",
"assets/packages/ailos_eliot/assets/icons/grid.svg": "3c7d773734662987e4fc0828577b2d84",
"assets/packages/ailos_eliot/assets/icons/triangle.svg": "a076731922f73a527e120455ae1c32f0",
"assets/packages/ailos_eliot/assets/icons/search.svg": "bf90f465658a98fff5895b553f853808",
"assets/packages/ailos_eliot/assets/icons/volume-2.svg": "8303542325b253613f81734eecb2847f",
"assets/packages/ailos_eliot/assets/icons/arrow-up-circle.svg": "e8908192ba8dccc3352d47f5d87e16ca",
"assets/packages/ailos_eliot/assets/icons/pause-circle.svg": "bfd54b4f70453ddae67a91dcab386f14",
"assets/packages/ailos_eliot/assets/icons/check-square.svg": "c085fa23396dc77425e2f0f98964abd1",
"assets/packages/ailos_eliot/assets/icons/arrow-down.svg": "47d54874c1edfde8439c41f177ae9bc2",
"assets/packages/ailos_eliot/assets/icons/corner-right-up.svg": "39881d45ddd1630bbb04aa701e09d0ca",
"assets/packages/ailos_eliot/assets/icons/chevrons-right.svg": "36e91fcd4abddcfeb13e3bac07f13177",
"assets/packages/ailos_eliot/assets/icons/list.svg": "574fdcc0beef08cbc7697d7c2cdc2c7e",
"assets/packages/ailos_eliot/assets/icons/chevrons-down.svg": "0cf7ac815c4a16f6f10133f6c029a977",
"assets/packages/ailos_eliot/assets/icons/wind.svg": "26621007367227c20d58faa5df744a73",
"assets/packages/ailos_eliot/assets/icons/corner-up-right.svg": "a903dea06cd438a79201e2671acc8928",
"assets/packages/ailos_eliot/assets/icons/target.svg": "ddfbfcea9fb5d2702eee44f9dc0cfbf6",
"assets/packages/ailos_eliot/assets/icons/scissors.svg": "66f974d51f16cc519e4096de26d81f3e",
"assets/packages/ailos_eliot/assets/icons/minimize-2.svg": "86cffe44c7a1764064f229c8eedbef02",
"assets/packages/ailos_eliot/assets/icons/play-circle.svg": "f23e0a8c17439e6c48addb69d941909e",
"assets/packages/ailos_eliot/assets/icons/crosshair.svg": "dc82c8762a881eaf3863af6c4f588179",
"assets/packages/ailos_eliot/assets/icons/airplay.svg": "275a77db5a27bdd3f6b078be09cb0218",
"assets/packages/ailos_eliot/assets/icons/fingerprint-id-1.svg": "e8cdfb7ee78ccbf0d40d6f7c661b0cb2",
"assets/packages/ailos_eliot/assets/icons/x-octagon.svg": "51a003b2546fe1c0e9ee2c8969841781",
"assets/packages/ailos_eliot/assets/icons/repeat.svg": "79a70e2e9d053b55cbb22acd4b7972bf",
"assets/packages/ailos_eliot/assets/icons/edit-3.svg": "e7885e9256432fe6a4355c152bdeb8a4",
"assets/packages/ailos_eliot/assets/icons/volume-1.svg": "89bee09ff9af4a5b3e1bb86a5fdc3798",
"assets/packages/ailos_eliot/assets/icons/elo.svg": "694b4667c0d49b2fd716a765c837ed20",
"assets/packages/ailos_eliot/assets/icons/guarda-chuva.svg": "34846705593d2403090288ed5bc9a526",
"assets/packages/ailos_eliot/assets/icons/sunrise.svg": "d71d94a617fb4b47198ff56102beed30",
"assets/packages/ailos_eliot/assets/icons/toggle-right.svg": "3d6a23fb269ab212c35339b2c5f3b98c",
"assets/packages/ailos_eliot/assets/icons/umbrella.svg": "3ab8b3d613ad111ae87a7ffeb4877d40",
"assets/packages/ailos_eliot/assets/icons/user.svg": "e810a19ffe6f0de2477116dff4f1b5da",
"assets/packages/ailos_eliot/assets/icons/file-minus.svg": "77b12b6d046c1574fd34ce990ece2603",
"assets/packages/ailos_eliot/assets/icons/x-circle.svg": "6b35f47f5ab8c15decb6a2921d494da0",
"assets/packages/ailos_eliot/assets/icons/circle.svg": "fa631b46310d122db0a4d5b03309863c",
"assets/packages/ailos_eliot/assets/icons/phone-missed.svg": "8ae8b83e228beebc7729fe9c20a22cfc",
"assets/packages/ailos_eliot/assets/icons/fingerprint-id-2.svg": "11f7c3ee12c3b33a6ea0d253102cb473",
"assets/packages/ailos_eliot/assets/icons/edit-2.svg": "a3a273e3aa60ccb2c7c8157879189daa",
"assets/packages/ailos_eliot/assets/icons/corner-left-up.svg": "2b2afb29e4a7fbc59babb94ee5a78cea",
"assets/packages/ailos_eliot/assets/icons/home.svg": "3128ebde81e50d63f05fe24cb0c2f873",
"assets/packages/ailos_eliot/assets/icons/music.svg": "0d4367f566dfe47569caa3e6aaa81085",
"assets/packages/ailos_eliot/assets/icons/smartphone.svg": "788b84f606c817794a26bef9edd7f6fb",
"assets/packages/ailos_eliot/assets/icons/more-horizontal.svg": "52ff639ec13e660f92038662bb95377c",
"assets/packages/ailos_eliot/assets/icons/sliders.svg": "51ff9ddaa645561786bb94fe3238f6e4",
"assets/packages/ailos_eliot/assets/icons/hipercard.svg": "c0fae1a0ed94e6ad3ff63adbcdec5cc9",
"assets/packages/ailos_eliot/assets/icons/visa.svg": "4987387ad8781103c2afd98b69284972",
"assets/packages/ailos_eliot/assets/icons/arrow-up-left.svg": "e85ce242cca8a8beaa3f2bcdd3377743",
"assets/packages/ailos_eliot/assets/icons/chevron-down.svg": "ae61b0735c02892ec882e8a4ae68ca71",
"assets/packages/ailos_eliot/assets/icons/hexagon.svg": "03a114959296d065f916965e248fe0e6",
"assets/packages/ailos_eliot/assets/icons/crop.svg": "b25d011a638ce679bf4186cb85ae4d71",
"assets/packages/ailos_eliot/assets/icons/tag.svg": "7536fd71c3e615388881401734618ef9",
"assets/packages/ailos_eliot/assets/icons/star-disabled.svg": "6a5a966d7cdfc6ca9264c20df0703878",
"assets/packages/ailos_eliot/assets/icons/briefcase.svg": "9ecee7686470ba096b8debf87d0144ba",
"assets/packages/ailos_eliot/assets/icons/rotate-cw.svg": "258afbc9c11b784681d95a1e0fc59250",
"assets/packages/ailos_eliot/assets/icons/list-default.svg": "1f752ceeeabda2af9d42289e03e3e5e8",
"assets/packages/ailos_eliot/assets/icons/map.svg": "b9c45dfdf79197434d302d164788390c",
"assets/packages/ailos_eliot/assets/icons/inbox.svg": "054c8adb4d3ca720880d523280e7d065",
"assets/packages/ailos_eliot/assets/icons/align-justify.svg": "92c1e960d098f4ff60397fbc0a5289af",
"assets/packages/ailos_eliot/assets/icons/plus-square.svg": "bfd2870e4369cbc4104fec1001c87e46",
"assets/packages/ailos_eliot/assets/icons/power.svg": "51d3c161e810df0b8cc6c54fe49a5bee",
"assets/packages/ailos_eliot/assets/icons/boleto.svg": "27ddc6b1cfd2d3c71722eaf5d4d40d80",
"assets/packages/ailos_eliot/assets/icons/database.svg": "165cac5ee615480a3005cc8c5f24bf15",
"assets/packages/ailos_eliot/assets/icons/camera-off.svg": "325fad4eaa63b5430aef23757cb8f99c",
"assets/packages/ailos_eliot/assets/icons/toggle-left.svg": "81b87f0e7f56c1e8e0f1cc0a5f0f167f",
"assets/packages/ailos_eliot/assets/icons/file.svg": "45db9221c3d00fba3f7d595756161448",
"assets/packages/ailos_eliot/assets/icons/message-circle.svg": "895d5c681b22eddbed840d9d0a89197d",
"assets/packages/ailos_eliot/assets/icons/voicemail.svg": "ed5087f84d1a1a9bb948c91b9bbc9844",
"assets/packages/ailos_eliot/assets/icons/terminal.svg": "c6e17f731c03617a1652924e0548a3fe",
"assets/packages/ailos_eliot/assets/icons/move.svg": "f932a7d9fa2d73aca51725e5188d0785",
"assets/packages/ailos_eliot/assets/icons/maximize.svg": "5d8b3c90e25b4ed3346e8b0fd0471797",
"assets/packages/ailos_eliot/assets/icons/chevron-up.svg": "3fcb0d71b18d0bd0489e15bf0e28436a",
"assets/packages/ailos_eliot/assets/icons/arrow-down-left.svg": "842014737c5c036e5e47f003b7bfa153",
"assets/packages/ailos_eliot/assets/icons/file-text.svg": "da0a94d83e6c1788acfd2e609f4cca7c",
"assets/packages/ailos_eliot/assets/icons/droplet.svg": "75cd4f2c104cd2cdbf999b0fa3d2f150",
"assets/packages/ailos_eliot/assets/icons/zap-off.svg": "d224f8b5f9e99d825ac1415b22b8a032",
"assets/packages/ailos_eliot/assets/icons/x.svg": "10696f363b324c3f284c1c417ae910de",
"assets/packages/ailos_eliot/assets/icons/qr-code.svg": "4b22df2200c947cde0a91dbca7104176",
"assets/packages/ailos_eliot/assets/icons/lock.svg": "b4d96b43c4e2e83d806871ee8313acc9",
"assets/packages/ailos_eliot/assets/icons/log-in.svg": "5933785dbd813ef55bdf3995ea4d2f13",
"assets/packages/ailos_eliot/assets/icons/shopping-bag.svg": "fb797727d028068924d576a6f1884536",
"assets/packages/ailos_eliot/assets/icons/diners.svg": "928a4f7cfcedfaa08c869deeec5e5039",
"assets/packages/ailos_eliot/assets/icons/cloud-drizzle.svg": "7e15489ae297800c6897caca2c19443e",
"assets/packages/ailos_eliot/assets/icons/refresh-cw.svg": "933d09eadca49d8c84b67e355ed7f234",
"assets/packages/ailos_eliot/assets/icons/objetivo.svg": "2fb08be7de830950a6bee3174ef5f070",
"assets/packages/ailos_eliot/assets/icons/star-fill.svg": "629b51f794355cc84bc69104c3f7da0c",
"assets/packages/ailos_eliot/assets/icons/clipboard.svg": "b352384ee777e133c154de1ef8cd3e20",
"assets/packages/ailos_eliot/assets/icons/package.svg": "1decddb87627addcd3f6f7424d1ad185",
"assets/packages/ailos_eliot/assets/icons/instagram.svg": "bd4b632620622f68829e781454ccdf95",
"assets/packages/ailos_eliot/assets/icons/link.svg": "2afaf9fd8fe0936c792b7188aeddc853",
"assets/packages/ailos_eliot/assets/icons/video-off.svg": "83f91d673d1409cf3413bf91953e22c9",
"assets/packages/ailos_eliot/assets/icons/key.svg": "95e80829dc1ef4de1df9bdc704e7ec75",
"assets/packages/ailos_eliot/assets/icons/meh.svg": "fef6fd7dea127cc2cf2d39acc5122f6d",
"assets/packages/ailos_eliot/assets/icons/corner-down-right.svg": "ebbb6d169f047d2318693e2bf7078d93",
"assets/packages/ailos_eliot/assets/icons/arrow-right.svg": "36c23a433ac4502c413a9f08c8f9f9c8",
"assets/packages/ailos_eliot/assets/icons/aperture.svg": "546025d7e638eba4d4863bf1b8755058",
"assets/packages/ailos_eliot/assets/icons/stop-circle.svg": "b79779bd2a1469737f9d182bb9b1f975",
"assets/packages/ailos_eliot/assets/icons/log-out.svg": "912aa82663eedeb47906d6a6cdad50f9",
"assets/packages/ailos_eliot/assets/icons/arrow-left-circle.svg": "42ee6bc06e2fda627655dc094b5aac09",
"assets/packages/ailos_eliot/assets/icons/bar-chart-2.svg": "89a84bb0242c878c5d5f7e46d852bb9e",
"assets/packages/ailos_eliot/assets/icons/Aa.svg": "ab65ad8cf09afe42e52875c8cf0bdf58",
"assets/packages/ailos_eliot/assets/icons/git-pull-request.svg": "56a64ba356720e0c091db2975dbbd3d4",
"assets/packages/ailos_eliot/assets/icons/minimize.svg": "1bce0b81da80f2078cdc383c9c56a1f3",
"assets/packages/ailos_eliot/assets/icons/minus-square.svg": "70b419fd3d7d70ade6e715dfeb02d065",
"assets/packages/ailos_eliot/assets/icons/settings.svg": "d86615e4baaa47e47ad1078f5fab2fec",
"assets/packages/ailos_eliot/assets/icons/cloud-snow.svg": "863b88d0e1fe4919d783304a7b1c505a",
"assets/packages/ailos_eliot/assets/icons/thumbs-down.svg": "64f6fa69f6df813643a3db0406995ad7",
"assets/packages/ailos_eliot/assets/icons/type.svg": "2afaa124366de8eca5df83949a0c6c9c",
"assets/packages/ailos_eliot/assets/icons/archive.svg": "c3899fd53fb6262a49b8dfbad4b1a711",
"assets/packages/ailos_eliot/assets/icons/pix.svg": "a23367cf59a6d8f480e97f0e263cbdc7",
"assets/packages/ailos_eliot/assets/icons/phone-outgoing.svg": "f5d13899cd343d4d3b5cf47b3bfad172",
"assets/packages/ailos_eliot/assets/icons/pocket.svg": "04c7981d60ea5d5c4cfbd20b28ac1156",
"assets/packages/ailos_eliot/assets/icons/mail.svg": "d6681e9399c4a69a2f1e30d834cc4e08",
"assets/packages/ailos_eliot/assets/icons/shield.svg": "450d31f0d72ed70948e550bcab558b2c",
"assets/packages/ailos_eliot/assets/icons/download.svg": "3f585d8a8e8889aa1fdaa845f101bd78",
"assets/packages/ailos_eliot/assets/icons/phone-forwarded.svg": "e732cc6026cbf40b79601b7b5c7efa95",
"assets/packages/ailos_eliot/assets/icons/corner-right-down.svg": "be667e8d60ea68cde05b61a44244cf04",
"assets/packages/ailos_eliot/assets/icons/book-open.svg": "6e74c5740901e838e3fc540209b5be23",
"assets/packages/ailos_eliot/assets/icons/discover.svg": "262a79bab4b2365dfe73f7c6800ca382",
"assets/packages/ailos_eliot/assets/icons/server.svg": "f0c4dc80fab2f67be06b5755264ceb53",
"assets/packages/ailos_eliot/assets/icons/tv.svg": "1f66b1517ff269b2d99a67f363f98831",
"assets/packages/ailos_eliot/assets/icons/skip-forward.svg": "388561b91578b7f4a75ada192718f89d",
"assets/packages/ailos_eliot/assets/icons/volume.svg": "3eaadcfc77f996f3e1de890863f63085",
"assets/packages/ailos_eliot/assets/icons/user-plus.svg": "68833a977aca27109e19c87a404adaf9",
"assets/packages/ailos_eliot/assets/icons/battery-charging.svg": "5c2891903473702542e764115a765f8a",
"assets/packages/ailos_eliot/assets/icons/extrato.svg": "e3523fb6c943d193dcc6f5f405653d7d",
"assets/packages/ailos_eliot/assets/icons/layers.svg": "8f41513c478db96082ef7863e6bf8702",
"assets/packages/ailos_eliot/assets/icons/slash.svg": "84c07cf48680d53ca36a802e83f1a131",
"assets/packages/ailos_eliot/assets/icons/radio.svg": "03f270dd0b86f925915a43ac5ee81e4d",
"assets/packages/ailos_eliot/assets/icons/book.svg": "e558bfb67abe0c6044a7a91f85c5e601",
"assets/packages/ailos_eliot/assets/icons/user-minus.svg": "b65127d95b431447584219296574ccbd",
"assets/packages/ailos_eliot/assets/icons/wallet.svg": "adbeb341852f24419e121fa166db4340",
"assets/packages/ailos_eliot/assets/icons/bell.svg": "53644c1663d7335bc53c84d0dbb46ca1",
"assets/packages/ailos_eliot/assets/icons/git-branch.svg": "c42c864e089eb8417be8426a3f5571f6",
"assets/packages/ailos_eliot/assets/icons/coffee.svg": "b2caaa561ac1c3706676a5f8826a8c19",
"assets/packages/ailos_eliot/assets/icons/code.svg": "a16d834173d493b8f20f6fb418ba2295",
"assets/packages/ailos_eliot/assets/icons/portability.svg": "47fdeabad24cf559afe153c798dd24f0",
"assets/packages/ailos_eliot/assets/icons/thermometer.svg": "11d51c1be90c49cb003690c0be865406",
"assets/packages/ailos_eliot/assets/icons/cast.svg": "90a3c4fd33c29ea9dbb6a7c6dacce165",
"assets/packages/ailos_eliot/assets/icons/flag.svg": "8f9c9fb086ebb2af617c090aa04b9967",
"assets/packages/ailos_eliot/assets/icons/eye-off.svg": "fbefd351ade75c0e74be29a31fdac86a",
"assets/packages/ailos_eliot/assets/icons/battery.svg": "530d723e42a477f26683a11f14da53c1",
"assets/packages/ailos_eliot/assets/icons/frown.svg": "1f56c6cbdb0e8d67d6882f688f2ec6bf",
"assets/packages/ailos_eliot/assets/icons/tool.svg": "559c8ea2e356095c4890309fc3e8ef6a",
"assets/packages/ailos_eliot/assets/icons/cpu.svg": "2c14ed5ded11ffa5ec58f371392f9a22",
"assets/packages/ailos_eliot/assets/icons/bold.svg": "1b1988408c7688f4c13b754fd556228d",
"assets/packages/ailos_eliot/assets/icons/hash.svg": "9b7d241581dc882b432f514df8b2d6a8",
"assets/packages/ailos_eliot/assets/icons/share-2.svg": "71130ea72c1aae28ec4b69f7ea658269",
"assets/packages/ailos_eliot/assets/icons/plus.svg": "dc3cf4e5117f14a3901195baf96f10e5",
"assets/packages/ailos_eliot/assets/icons/check.svg": "2e88f30f4528ed99179d2d7f833224b6",
"assets/packages/ailos_eliot/assets/icons/rotate-ccw.svg": "2746b8febb4cc967fcb1ced902cb40ff",
"assets/packages/ailos_eliot/assets/icons/hard-drive.svg": "07ad228ab60b57814c3092b22364bafb",
"assets/packages/ailos_eliot/assets/icons/bluetooth.svg": "129e3ef754e742ca70675e32e5f2c9ff",
"assets/packages/ailos_eliot/assets/icons/pie-chart.svg": "e838407770a32cc9a80c5de942097e06",
"assets/packages/ailos_eliot/assets/icons/headphones.svg": "a8d18dee4d424363ec6f30f42eb319e7",
"assets/packages/ailos_eliot/assets/icons/filter-2.svg": "8d703a530414e2c66a689fc2bb1c79d4",
"assets/packages/ailos_eliot/assets/icons/rss.svg": "2efd5d086c07bdb6bbde9a1677596245",
"assets/packages/ailos_eliot/assets/icons/wifi.svg": "a5f85e740eba33427660dcf6c6cbb72f",
"assets/packages/ailos_eliot/assets/icons/corner-up-left.svg": "226a312aa3a9884ee22d5177a191a4bd",
"assets/packages/ailos_eliot/assets/icons/watch.svg": "6f8d5381111cb352b613a8dde192f4b5",
"assets/packages/ailos_eliot/assets/icons/card.svg": "9cf9374511439c6bc22bbe9b9d813ce7",
"assets/packages/ailos_eliot/assets/icons/info.svg": "7a9ee54d61ccafb544a3cb83f2411fb2",
"assets/packages/ailos_eliot/assets/icons/user-x.svg": "8d39b2b39b2ad7d6384116b34d6b719e",
"assets/packages/ailos_eliot/assets/icons/loader.svg": "1b2abd6bb1e561f962b11d18871f7da2",
"assets/packages/ailos_eliot/assets/icons/refresh-ccw.svg": "6ed12edb45242ede95c6384eac12fb1a",
"assets/packages/ailos_eliot/assets/icons/folder-plus.svg": "e636cb9f619a90d00aa4279a36c61c06",
"assets/packages/ailos_eliot/assets/icons/mic.svg": "1405b580c05e9778ddaafdc42c4acec1",
"assets/packages/ailos_eliot/assets/icons/copy.svg": "dbc33921ea31faa0e79e5f6f3992394b",
"assets/packages/ailos_eliot/assets/icons/zoom-in.svg": "24327777a735858df0666ee8f6393fb9",
"assets/packages/ailos_eliot/assets/icons/logo-ailos.svg": "667b3faebd1402ad3b2fbaf135e48cb4",
"assets/packages/ailos_eliot/assets/icons/arrow-right-circle.svg": "5bee51c9a8f296cea2c6b03edf1e46dd",
"assets/packages/ailos_eliot/assets/icons/align-right.svg": "523fa2f5775668c909e9056bccd6be9d",
"assets/packages/ailos_eliot/assets/icons/image.svg": "c6e436dec017ef37c86a68f52b6f84ea",
"assets/packages/ailos_eliot/assets/icons/maximize-2.svg": "35435b32d5577ff40b2a8ebab8e0fb89",
"assets/packages/ailos_eliot/assets/icons/check-circle.svg": "797a29284b25bef983dea3d71d006fac",
"assets/packages/ailos_eliot/assets/icons/sunset.svg": "0e4e27afb6aaacd2651939513e1fe011",
"assets/packages/ailos_eliot/assets/icons/save.svg": "76b0a3a336860fd51e172987d3484cc3",
"assets/packages/ailos_eliot/assets/icons/smile.svg": "72e7098ace2c43463f157bd8fffbfae2",
"assets/packages/ailos_eliot/assets/icons/scan.svg": "3a53e5a5caa99728fea5f697005b1016",
"assets/packages/ailos_eliot/assets/icons/navigation.svg": "97ce60ada489688da3ce2a8fe763b08d",
"assets/packages/ailos_eliot/assets/icons/cloud-lightning.svg": "50d2dd3e5d8847a9e28eeeb3a06cbe7d",
"assets/packages/ailos_eliot/assets/icons/paperclip.svg": "6ebd44f0c9bdc20c0163beff700e5118",
"assets/packages/ailos_eliot/assets/icons/fast-forward.svg": "ec6746615e0b41e546f7174572d4cb9d",
"assets/packages/ailos_eliot/assets/icons/x-square.svg": "da438b24bf22c70eb90778fb432e7e8c",
"assets/packages/ailos_eliot/assets/icons/award.svg": "2185b27fed37f168b527208930ba9bb2",
"assets/packages/ailos_eliot/assets/icons/zoom-out.svg": "c6f763f68b0120b03fe6fe6cdda83b96",
"assets/packages/ailos_eliot/assets/icons/box.svg": "91e7c28a6f4d1c9dc96ef21341a01c79",
"assets/packages/ailos_eliot/assets/icons/thumbs-up.svg": "76e9171cefe81805ef51eb99ef51a46e",
"assets/packages/ailos_eliot/assets/icons/percent.svg": "c14a03adaea8a0572e6c09aef66df255",
"assets/packages/ailos_eliot/assets/icons/sidebar.svg": "7f5ab8127049d6b480d9ce7a0d2009d6",
"assets/packages/ailos_eliot/assets/icons/square.svg": "a0e376449e33be3506e3bb3a5a6cc459",
"assets/packages/ailos_eliot/assets/icons/play.svg": "c317c302d42ccf4e2edc5524ed6c077a",
"assets/packages/ailos_eliot/assets/icons/git-commit.svg": "e6521cfc229fee2e4ccf3e0b3ffd6b07",
"assets/packages/ailos_eliot/assets/icons/send.svg": "eecd4a4e348945ea12005e7b2aca47ae",
"assets/packages/ailos_eliot/assets/icons/phone-call.svg": "6bb049a247076b7550a4ca6e2a0a3b79",
"assets/packages/ailos_eliot/assets/icons/speaker.svg": "83fc784ebbafed04b10b1512028769f5",
"assets/packages/ailos_eliot/assets/icons/codesandbox.svg": "965f11debd9ac3a3be46c64561716023",
"assets/packages/ailos_eliot/assets/icons/camera.svg": "88816f6c622950c3b5453c5a8ab37d7c",
"assets/packages/ailos_eliot/assets/icons/link-2.svg": "93a933abb9156eb7e550a19d73c98359",
"assets/packages/ailos_eliot/assets/icons/printer.svg": "0dcc2e6a263c8ae6273122d047f124b3",
"assets/packages/ailos_eliot/assets/icons/folder-minus.svg": "313e40e02e412a6b73523264bb2af49a",
"assets/packages/ailos_eliot/assets/icons/extrato2.svg": "495f00510dab1a9c8bcecc97894aad12",
"assets/packages/ailos_eliot/assets/icons/arrow-up-right.svg": "4656b1d689651cd7ac701fcb1835a563",
"assets/packages/ailos_eliot/assets/icons/coracao.svg": "b9e692be08ae65789edbf19ba57d5159",
"assets/packages/ailos_eliot/assets/icons/truck.svg": "1c056b285566ce211c7573683b58c4e6",
"assets/packages/ailos_eliot/assets/icons/life-buoy.svg": "5c1782287d060e4f2efc332eaa57a6e1",
"assets/packages/ailos_eliot/assets/icons/Az.svg": "fe40915bd0f83a1ab2deb7ee176ce741",
"assets/packages/ailos_eliot/assets/icons/mastercard.svg": "84df20f7ef4ee04059ba2feb7e42bfb3",
"assets/packages/ailos_eliot/assets/icons/pen-tool.svg": "d5da5ec61c174c308e82d3024bb758c7",
"assets/packages/ailos_eliot/assets/icons/cooperativa.svg": "59d620bbe8c9c1ae5a27c90fbb6b956a",
"assets/packages/ailos_eliot/assets/icons/at-sign.svg": "eac90a908e48ba7e6988db02e69ff8ad",
"assets/packages/ailos_eliot/assets/icons/WhatsApp.svg": "c08996f1c6cbbebbd6941f6699d606ac",
"assets/packages/ailos_eliot/assets/icons/chevron-up-large.svg": "09afeeefe5c6c8cbd27be671cc4ab939",
"assets/packages/ailos_eliot/assets/icons/feather.svg": "e30e0bb2f8beb49b3dec2f3433763c4b",
"assets/packages/ailos_eliot/assets/icons/trash.svg": "35bace2f58f72a34db59ef92d298cfcc",
"assets/packages/ailos_eliot/assets/icons/wifi-off.svg": "088d232df0ed984e9d65a9be79abd08b",
"assets/packages/ailos_eliot/assets/icons/corner-left-down.svg": "73331fa86790c87933a465e64e605ebd",
"assets/packages/ailos_eliot/assets/icons/dollar-sign.svg": "f371afe45e5244ec977cece90ba75a76",
"assets/packages/ailos_eliot/assets/icons/amex.svg": "6690accf03f002c72edc5df4bcca8636",
"assets/packages/ailos_eliot/assets/icons/star.svg": "239541e7c6d5ff7f2a0d54fdee67d607",
"assets/packages/ailos_eliot/assets/icons/face-id.svg": "d358a2925f16dce9cb5da0ef673a5da9",
"assets/packages/ailos_eliot/assets/icons/cloud-off.svg": "e584ebf2440aab4afe7cb8ea7bfc7d75",
"assets/packages/ailos_eliot/assets/icons/sun.svg": "ef273826f1faba00c9324c3b53fc69e7",
"assets/packages/ailos_eliot/assets/icons/message-square.svg": "fb0c58a7e08d5efac518e4ab813d3dc5",
"assets/packages/ailos_eliot/assets/icons/edit.svg": "65be854cd888299c840690a6131df2b3",
"assets/packages/ailos_eliot/assets/icons/anchor.svg": "7460b953b37fd09a7b448725222621e9",
"assets/packages/ailos_eliot/assets/icons/alert-circle.svg": "f8788aef0e9c29a99ef529be69d20f8c",
"assets/packages/ailos_eliot/assets/icons/chevrons-up.svg": "9af00cee845fd1ad6fdc883a6ce6f98d",
"assets/packages/ailos_eliot/assets/icons/upload-cloud.svg": "f9547183c501408bb1244b7305154a20",
"assets/packages/ailos_eliot/assets/icons/youtube.svg": "b58e42b31634cf5a220a109a04cce16c",
"assets/packages/ailos_eliot/assets/icons/unlock.svg": "30bbe5987dad640e54d151186887314c",
"assets/packages/ailos_eliot/assets/icons/compass.svg": "ec43a891c5428dd5be491321b0106394",
"assets/packages/ailos_eliot/assets/icons/plus-circle.svg": "13ce8e6421a03ac366c081983ed34155",
"assets/packages/ailos_eliot/assets/icons/bank.svg": "0a68f68a9c01fed28af9024bf61f9493",
"assets/packages/ailos_eliot/assets/icons/credit-card.svg": "0335749ce2a540a87fb6e041b32a2a83",
"assets/packages/ailos_eliot/assets/icons/jcb.svg": "a33b560ad0284ed7cb71a6584a9c1a5e",
"assets/packages/ailos_eliot/assets/icons/cloud-rain.svg": "9b0925715a90406cf470d0d6468e235a",
"assets/packages/ailos_eliot/assets/icons/trash-2.svg": "65c242d449acf5eb4cf1c4eb3cabdb32",
"assets/packages/ailos_eliot/assets/icons/skip-back.svg": "6dcfb5748fab9b94cc0309919759218f",
"assets/packages/ailos_eliot/assets/icons/file-plus.svg": "c00ed4bd2e133223012eb12f0321dce9",
"assets/packages/ailos_eliot/assets/icons/delete.svg": "cf25ee7667f42deda8aa15566cd00cf3",
"assets/packages/ailos_eliot/assets/icons/command.svg": "773f37b9b6501fe66f770828a0235172",
"assets/packages/ailos_eliot/assets/icons/clock.svg": "4f441b2457edd6289c8a9fa0c20003f0",
"assets/packages/ailos_eliot/assets/icons/octagon.svg": "504885dbf6208a9c43867c8419b605e4",
"assets/packages/ailos_eliot/assets/icons/phone.svg": "6ef344ce46633cf7da2c0fdd53642f34",
"assets/packages/ailos_eliot/assets/icons/aura.svg": "c05dc3460d199f54a0b5e39af8f42533",
"assets/packages/ailos_eliot/assets/icons/eye.svg": "d7ce08f6ae8eba6e093ffa90f7db3f9b",
"assets/packages/ailos_eliot/assets/icons/Location.svg": "1e915fad660783557f17c00fc10a7abb",
"assets/packages/ailos_eliot/assets/icons/phone-off.svg": "87e7adfc194eb33f8c22fde79a019bc0",
"assets/packages/ailos_eliot/assets/icons/codepen.svg": "40572e2502e58602b6960b2f68d43cfd",
"assets/packages/ailos_eliot/assets/icons/gift.svg": "b98e7b78add77c8167a23c6e405ad36e",
"assets/packages/ailos_eliot/assets/icons/external-link.svg": "c89e63146bc70592e84156c19a015d8b",
"assets/packages/ailos_eliot/assets/icons/zap.svg": "acf48142487916d91a6fad5261120a13",
"assets/packages/ailos_eliot/assets/icons/more-vertical.svg": "13f48c86f74a800a246a1628a03e567b",
"assets/packages/ailos_eliot/assets/icons/mic-off.svg": "c9f262a90fb368cd6c3a44782d252c68",
"assets/packages/ailos_eliot/assets/icons/share.svg": "0b5ce697dd2a92b16d06eb4afa1dca9b",
"assets/packages/ailos_eliot/assets/icons/arrow-up.svg": "3d21694649e6e42f35c0d8d908847a9e",
"assets/packages/ailos_eliot/assets/icons/money.svg": "ad9e1a17d29ee17e815b604741abf251",
"assets/packages/ailos_eliot/assets/icons/bell-off.svg": "f064886c2ecaf0a6856a0005ae5e635a",
"assets/packages/ailos_eliot/assets/icons/chevron-down-large.svg": "571806949464cd1d62019fb87bb04c63",
"assets/packages/ailos_eliot/assets/icons/video.svg": "05f8bf903f43c1c68d22d411871d9658",
"assets/packages/ailos_eliot/assets/icons/activity.svg": "ec2d968c696eb604da640460f61e34f0",
"assets/packages/ailos_eliot/assets/icons/filter.svg": "e1c97a6653ab4080ebdb6e355efac7ad",
"assets/packages/ailos_eliot/assets/icons/phone-incoming.svg": "9816710a497545dc6b92d46bfdd5758d",
"assets/packages/ailos_eliot/assets/icons/italic.svg": "254cbcf8103ebff9801514e347107d90",
"assets/packages/ailos_eliot/assets/icons/chevrons-left.svg": "d5d064878d25c3b5b06a7ade76bca60e",
"assets/packages/ailos_eliot/assets/icons/carro.svg": "6f133e075881821ab416a29d8ee99b18",
"assets/packages/ailos_eliot/assets/icons/pay.svg": "6871b1ca37c5ee4728680afe2d04cc75",
"assets/packages/ailos_eliot/assets/icons/calendar.svg": "7539daf8e2f142b03ba687882b28e135",
"assets/packages/ailos_eliot/assets/icons/globe.svg": "25525c6a95786bd69628c1341756b7a5",
"assets/packages/ailos_eliot/assets/icons/arrow-left.svg": "8e85bfbb2b49685c48da7a7f780099ce",
"assets/packages/ailos_eliot/assets/icons/align-center.svg": "34e731fc4b8dbd322d825b9d87aef6c0",
"assets/packages/ailos_eliot/assets/icons/minus-circle.svg": "edd7b1e0a293e73d3c570a93679010a0",
"assets/packages/ailos_eliot/assets/icons/arrow-down-right.svg": "71673fea5cf96909624008aa9410a759",
"assets/packages/ailos_eliot/assets/icons/framer.svg": "0612eeef4ce33572fcfbb368005a22b6",
"assets/packages/ailos_eliot/assets/icons/volume-x.svg": "0cd17bf3ded718be89ffa57393e1bf23",
"assets/packages/ailos_eliot/assets/icons/cloud.svg": "5a84d459af7cc3fb767211c052ed45fe",
"assets/packages/ailos_eliot/assets/icons/download-cloud.svg": "9be7888aa343dfa481942b17b76bc1d7",
"assets/packages/ailos_eliot/assets/icons/shuffle.svg": "636d08b97f0aafc7b9bfdc424533c7ea",
"assets/packages/ailos_eliot/assets/icons/rewind.svg": "acd28eb294ffd34a668c9ea00e939246",
"assets/packages/ailos_eliot/assets/icons/upload.svg": "9e673a4ce0266755536c86095c6d70b1",
"assets/packages/ailos_eliot/assets/icons/trending-down.svg": "22bc034e27cc1bb0752bb2a94bfdee1c",
"assets/packages/ailos_eliot/assets/icons/pause.svg": "ce16b0a91216a12750a8f0936d7e1ecf",
"assets/packages/ailos_eliot/assets/icons/chevron-left-large.svg": "219ae8dd0081e012f35cec7990bac595",
"assets/packages/ailos_eliot/assets/icons/arrow-down-circle.svg": "fd241f43173bd74e5f2895893e8a6232",
"assets/packages/ailos_eliot/assets/icons/star-circle.svg": "3f72c1a346bccdd4d18e4b2d761ad8ff",
"assets/packages/ailos_eliot/assets/icons/bookmark.svg": "def27433fc6ee3dff30dffac2c155608",
"assets/packages/ailos_eliot/assets/icons/alert-triangle.svg": "439afa23b6274bf2d87bfaab11958424",
"assets/packages/ailos_eliot/assets/icons/user-check.svg": "164ad986e2f8b330484b573ca9820f84",
"assets/packages/ailos_eliot/assets/icons/tablet.svg": "398bfeb491f72160e0315f57056affd6",
"assets/packages/ailos_eliot/assets/icons/alert-octagon.svg": "f7657d01de9246ae66885c0503cadafe",
"assets/packages/ailos_eliot/assets/icons/menu.svg": "5d95582f64cec754a992dadc4fe26e7a",
"assets/packages/ailos_eliot/assets/icons/chevron-down-right.svg": "440fade2fbc6e48826e0dfd56746e576",
"assets/packages/ailos_eliot/assets/icons/pix-fill.svg": "f0a9fcb51a5bc847dc0d1037494c4a34",
"assets/packages/ailos_eliot/assets/icons/chrome.svg": "b79cc992e2221bd6247ac230d07a0ed2",
"assets/packages/ailos_eliot/assets/icons/shopping-cart.svg": "682296bafb5fc023fef22195755654b1",
"assets/packages/ailos_eliot/assets/icons/folder.svg": "f86128d23c8049e1cc4faa886fe3cafe",
"assets/packages/ailos_eliot/assets/icons/users.svg": "c8dd1ea865b5b8d1ef25d1e5e2248a16",
"assets/packages/ailos_eliot/assets/icons/corner-down-left.svg": "1eb45c51500a9d743cb2d064bf0e2305",
"assets/packages/ailos_eliot/assets/icons/monitor.svg": "535c0e3ee08237db2c831305fcdac32f",
"assets/packages/ailos_eliot/assets/icons/minus.svg": "3f654ebc4e79b0ea9e761a94f94267fd",
"assets/packages/ailos_eliot/assets/icons/help-circle.svg": "66c8e473e4ddf8d59851e9d3e2fff1cd",
"assets/packages/ailos_eliot/assets/icons/navigation-2.svg": "68176ce88625a8aedcef4f485330d306",
"assets/packages/ailos_eliot/assets/icons/chevron-left.svg": "9c0a6fae5895524c6a716fa43410eb91",
"assets/packages/ailos_eliot/assets/icons/Time%2520Payment.svg": "8cc5d0d7f5e3a494b923104f71aad9c7",
"assets/packages/ailos_eliot/assets/icons/film.svg": "5a0f4e9f8679feb778c8f32b58ef13b3",
"assets/packages/ailos_eliot/assets/icons/moon.svg": "6ae63aa2911c50f82cd8f161c67c6ab6",
"assets/packages/ailos_eliot/assets/icons/shield-off.svg": "e4042447804a099c9defd8677fe54327",
"assets/packages/ailos_eliot/assets/icons/layout.svg": "64fb6603011eee416d57b577c6b6117d",
"assets/packages/ailos_eliot/assets/icons/logo-ailos-white.svg": "6b1be86816e331f62a4f4884f6265f14",
"assets/packages/ailos_eliot/assets/icons/mouse-pointer.svg": "e1f720a7e0c70b6289da91dd60f0b7b7",
"assets/packages/ailos_eliot/assets/icons/chevron-right-large.svg": "18d1405e8e20eaa1b74bb4327113074f",
"assets/packages/ailos_eliot/assets/icons/align-left.svg": "c1d71dbfcf05cdf9c9868f71c834d894",
"assets/packages/ailos_eliot/assets/icons/heart.svg": "9dcb36be8be549e51ba3953bee0eda6b",
"assets/packages/ailos_eliot/assets/icons/trending-up.svg": "ac59cc6fae480c7d30d4c22fd7496da3",
"assets/packages/ailos_eliot/assets/fonts/exo_2/Exo2Regular.ttf": "d1a552c4d4489fe0ed010009ef192da7",
"assets/packages/ailos_eliot/assets/fonts/dm_sans/DMSans-Regular.ttf": "0305ad7453af42d8f036dd29294ae5c3",
"assets/packages/ailos_eliot/assets/fonts/open_sans/OpenSansRegular.ttf": "58b1f440729d267697bddcddb994bce9",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "89ed8f4e49bcdfc0b5bfc9b24591e347",
"assets/packages/widgetbook/assets/logo.png": "445292cbfde4f60d5b3dca36d0d6dfb2",
"assets/packages/widgetbook/assets/fonts/Poppins/Poppins-ExtraLight.ttf": "6f8391bbdaeaa540388796c858dfd8ca",
"assets/packages/widgetbook/assets/fonts/Poppins/Poppins-ThinItalic.ttf": "01555d25092b213d2ea3a982123722c9",
"assets/packages/widgetbook/assets/fonts/Poppins/Poppins-ExtraLightItalic.ttf": "a9bed017984a258097841902b696a7a6",
"assets/packages/widgetbook/assets/fonts/Poppins/Poppins-BoldItalic.ttf": "19406f767addf00d2ea82cdc9ab104ce",
"assets/packages/widgetbook/assets/fonts/Poppins/Poppins-Light.ttf": "fcc40ae9a542d001971e53eaed948410",
"assets/packages/widgetbook/assets/fonts/Poppins/Poppins-Medium.ttf": "bf59c687bc6d3a70204d3944082c5cc0",
"assets/packages/widgetbook/assets/fonts/Poppins/Poppins-SemiBoldItalic.ttf": "9841f3d906521f7479a5ba70612aa8c8",
"assets/packages/widgetbook/assets/fonts/Poppins/Poppins-ExtraBoldItalic.ttf": "8afe4dc13b83b66fec0ea671419954cc",
"assets/packages/widgetbook/assets/fonts/Poppins/Poppins-ExtraBold.ttf": "d45bdbc2d4a98c1ecb17821a1dbbd3a4",
"assets/packages/widgetbook/assets/fonts/Poppins/Poppins-BlackItalic.ttf": "e9c5c588e39d0765d30bcd6594734102",
"assets/packages/widgetbook/assets/fonts/Poppins/Poppins-Regular.ttf": "093ee89be9ede30383f39a899c485a82",
"assets/packages/widgetbook/assets/fonts/Poppins/Poppins-LightItalic.ttf": "0613c488cf7911af70db821bdd05dfc4",
"assets/packages/widgetbook/assets/fonts/Poppins/Poppins-Bold.ttf": "08c20a487911694291bd8c5de41315ad",
"assets/packages/widgetbook/assets/fonts/Poppins/Poppins-Black.ttf": "14d00dab1f6802e787183ecab5cce85e",
"assets/packages/widgetbook/assets/fonts/Poppins/Poppins-Thin.ttf": "9ec263601ee3fcd71763941207c9ad0d",
"assets/packages/widgetbook/assets/fonts/Poppins/Poppins-SemiBold.ttf": "6f1520d107205975713ba09df778f93f",
"assets/packages/widgetbook/assets/fonts/Poppins/Poppins-Italic.ttf": "c1034239929f4651cc17d09ed3a28c69",
"assets/packages/widgetbook/assets/fonts/Poppins/Poppins-MediumItalic.ttf": "cf5ba39d9ac24652e25df8c291121506",
"assets/packages/hyphenatorx/test/Roboto-Regular.ttf": "afe8eacfc0903cc0612dc696881f0480",
"assets/packages/hyphenatorx/assets/language_id.json": "f13ed90293f4759c31b711d6aa12d112",
"assets/packages/hyphenatorx/assets/language_zh_latn_pinyin.json": "0573cdf79d552dd0cec5b08e4e5c0cc3",
"assets/packages/hyphenatorx/assets/language_as.json": "435b4ca98e1d08b328a76dca57518991",
"assets/packages/hyphenatorx/assets/language_da.json": "120cd341e7b9582160fa1864b0e74607",
"assets/packages/hyphenatorx/assets/language_af.json": "28351132e29a4511c32916f6e95d20ec",
"assets/packages/hyphenatorx/assets/language_mn_cyrl.json": "cdc092042cea8027a762702578ff5477",
"assets/packages/hyphenatorx/assets/language_kmr.json": "e6fc99875809b0cd60763dd3cb956547",
"assets/packages/hyphenatorx/assets/language_lv.json": "4972684b7c56349e81e0d0092f2bf88b",
"assets/packages/hyphenatorx/assets/language_mul_ethi.json": "e1d9121676a508f1186e1a51c9510ca9",
"assets/packages/hyphenatorx/assets/language_te.json": "aab19b4ed89174a98527126f4c8f5278",
"assets/packages/hyphenatorx/assets/language_de_1996.json": "6a166052a23eb375b4c25e323e9089ed",
"assets/packages/hyphenatorx/assets/language_cs.json": "c6beadc7b7ef04593018ec84b43106bb",
"assets/packages/hyphenatorx/assets/language_nb.json": "d9a86ca6b22c640f446c7b29d9533a79",
"assets/packages/hyphenatorx/assets/language_sh_cyrl.json": "2d6190383adddee8216db3ae6a6a803e",
"assets/packages/hyphenatorx/assets/language_nn.json": "ad703f572cbdc2951ace902f31021c65",
"assets/packages/hyphenatorx/assets/language_sv.json": "e96a74ac989f945a532519c09ddeb8a5",
"assets/packages/hyphenatorx/assets/language_th.json": "81a169edd244703cd2e0c1fe5c42502b",
"assets/packages/hyphenatorx/assets/language_es.json": "879a7b1392bdef59a1690765b9fefdff",
"assets/packages/hyphenatorx/assets/language_ga.json": "b7500e754a15e0dd6a673ed8974ff639",
"assets/packages/hyphenatorx/assets/language_fr.json": "92bf3f19cb4d2bb2862fb7f478b7a169",
"assets/packages/hyphenatorx/assets/language_et.json": "ef1082d6d2a9e8c9f3e364b25ee54ee6",
"assets/packages/hyphenatorx/assets/language_cy.json": "d99fadaee445724bf24c78149f3c14c4",
"assets/packages/hyphenatorx/assets/language_kn.json": "295d3717aae5e668f88ad73e367b425f",
"assets/packages/hyphenatorx/assets/language_hsb.json": "1c810859645ad347733939a53e4eecf4",
"assets/packages/hyphenatorx/assets/language_eu.json": "f95aa286d216c74f6c1bd020e23a6a80",
"assets/packages/hyphenatorx/assets/language_gl.json": "f867ce63a47135031212ed4b314b5b1b",
"assets/packages/hyphenatorx/assets/language_gu.json": "1aaad8f7c610501f8e3afed18de7a865",
"assets/packages/hyphenatorx/assets/language_ca.json": "c9031d91386a3a29df196db082dd4c4a",
"assets/packages/hyphenatorx/assets/language_hi.json": "3707f93e40200953d59cddb0e3b477b8",
"assets/packages/hyphenatorx/assets/language_bg.json": "53cfe5471051d7148f8ce3ab7c39f415",
"assets/packages/hyphenatorx/assets/language_de_ch_1901.json": "c5951052fb095c90db9a6844c31277db",
"assets/packages/hyphenatorx/assets/language_ro.json": "cad16d9be24633726f4c546f89752043",
"assets/packages/hyphenatorx/assets/language_eo.json": "d64fcffc1b960c7f9fdf01dfb1967ef0",
"assets/packages/hyphenatorx/assets/language_ta.json": "7ad8015adba2d581dad1d0bd9a37de4d",
"assets/packages/hyphenatorx/assets/language_uk.json": "59e4e985ee5e1b55c6261cf207543050",
"assets/packages/hyphenatorx/assets/language_ru.json": "ee7ba571494729f6730ac42d29f1ddf9",
"assets/packages/hyphenatorx/assets/language_pl.json": "465eb8b4886d611a78c4d637816aa747",
"assets/packages/hyphenatorx/assets/language_pms.json": "9edb405668d8786e1d4318a3e6a18126",
"assets/packages/hyphenatorx/assets/language_fi.json": "984fa6c4c8d432224468d3a2e9479ccc",
"assets/packages/hyphenatorx/assets/language_grc.json": "6a7e746a8a45e7c3ec3f155e1027c653",
"assets/packages/hyphenatorx/assets/language_ia.json": "4fd10dfc676dd12813255cfdbd10160c",
"assets/packages/hyphenatorx/assets/language_hr.json": "c47afa087612fcec9b03e359ecba21c9",
"assets/packages/hyphenatorx/assets/language_it.json": "818ab0c9a1a3dcd1616078901418030b",
"assets/packages/hyphenatorx/assets/language_pt.json": "783fb19ab0b5c6c74900a641be956a7b",
"assets/packages/hyphenatorx/assets/language_rm.json": "10dcdf08d92a0b32b168eaa0453faf3c",
"assets/packages/hyphenatorx/assets/language_la_x_classic.json": "ab126029009d7641218aaea72fe86d14",
"assets/packages/hyphenatorx/assets/language_cop.json": "6e473484979b4f998316355c83acfe36",
"assets/packages/hyphenatorx/assets/language_sk.json": "03a6f38dd4e0c47946c1cc4d225b2b35",
"assets/packages/hyphenatorx/assets/language_ml.json": "1b34f0a9b12c9a155f419473c1e5650b",
"assets/packages/hyphenatorx/assets/language_pa.json": "9ed942ab0486b9522b56db118ec0fb44",
"assets/packages/hyphenatorx/assets/language_ka.json": "6c3fc528796096ce2ca3a7ec5543069a",
"assets/packages/hyphenatorx/assets/language_is.json": "eec6ce02aa68c8917a557a9d11e485d3",
"assets/packages/hyphenatorx/assets/language_mn_cyrl_x_lmc.json": "20a0ad88ddcaf7551b2845e74b018070",
"assets/packages/hyphenatorx/assets/language_lt.json": "193c8ed815fda87ec76e550beb2c6b13",
"assets/packages/hyphenatorx/assets/language_mr.json": "3707f93e40200953d59cddb0e3b477b8",
"assets/packages/hyphenatorx/assets/language_tk.json": "460bb1d91f8e41b5c6a5fe5668074dc3",
"assets/packages/hyphenatorx/assets/language_hu.json": "a21372487888973207c8b9b6700b2270",
"assets/packages/hyphenatorx/assets/language_el_monoton.json": "d0aab2d432c3891039ecb2bcaa172bc9",
"assets/packages/hyphenatorx/assets/language_el_polyton.json": "38c019caffe09b4c9555bd4bdac9c1a2",
"assets/packages/hyphenatorx/assets/language_bn.json": "435b4ca98e1d08b328a76dca57518991",
"assets/packages/hyphenatorx/assets/language_la.json": "a841100589d9500afbd41f9aaac78c19",
"assets/packages/hyphenatorx/assets/language_hy.json": "fc7ed76ad3ac4dbec9492d520c87ef0a",
"assets/packages/hyphenatorx/assets/language_en_us.json": "218751cee7b6d50fcdc76671639b1f59",
"assets/packages/hyphenatorx/assets/language_en_gb.json": "37cef53e88a438af9fcc0c9c39f77d71",
"assets/packages/hyphenatorx/assets/language_or.json": "0d577fbc142e3d37474d4f6ae1be1d00",
"assets/packages/hyphenatorx/assets/language_sl.json": "2e1f16dc4243cfb69147858ad4d9a15b",
"assets/packages/hyphenatorx/assets/language_fur.json": "5cb194c03480526b59d399c92c851b35",
"assets/packages/hyphenatorx/assets/language_tr.json": "768a6e3a51913f04387ffb73cddcdc37",
"assets/packages/hyphenatorx/assets/language_de_1901.json": "a0bd6a5e3079be7f61bff91bf26887d3",
"assets/packages/hyphenatorx/assets/language_sa.json": "3f75df9404ef3fcfd4028517f1808f04",
"assets/packages/hyphenatorx/assets/language_nl.json": "2d4b858e6f31e3931e23c325496dc683",
"assets/shaders/ink_sparkle.frag": "4096b5150bac93c41cbc9b45276bd90f",
"assets/AssetManifest.bin": "1df754f9a873e287adff396286a50887",
"assets/fonts/MaterialIcons-Regular.otf": "ead5a2f9bbb7de1d433538a1e838072d",
"canvaskit/skwasm.js": "87063acf45c5e1ab9565dcf06b0c18b8",
"canvaskit/skwasm.wasm": "2fc47c0a0c3c7af8542b601634fe9674",
"canvaskit/chromium/canvaskit.js": "0ae8bbcc58155679458a0f7a00f66873",
"canvaskit/chromium/canvaskit.wasm": "143af6ff368f9cd21c863bfa4274c406",
"canvaskit/canvaskit.js": "eb8797020acdbdf96a12fb0405582c1b",
"canvaskit/canvaskit.wasm": "73584c1a3367e3eaf757647a8f5c5989",
"canvaskit/skwasm.worker.js": "bfb704a6c714a75da9ef320991e88b03"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"assets/AssetManifest.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
