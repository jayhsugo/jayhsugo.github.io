'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "version.json": "b49be51a34fbf3fb0d851653a08ae25f",
"index.html": "4b3c2ac7e4868c28297fbe9e215af383",
"/": "4b3c2ac7e4868c28297fbe9e215af383",
"main.dart.js": "d5a7caae6f5d4b1c50a9136c27313b9a",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "a3b38721da0b137ab2a088d7eef240e9",
"assets/AssetManifest.json": "796546deb2bb0781464f35fa355e4736",
"assets/NOTICES": "a6a3b01843915284e08b6494363390a0",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/fonts/MaterialIcons-Regular.otf": "e7069dfd19b331be16bed984668fe080",
"assets/assets/images/bg_map_04.png": "eb618c5c013ce37085576844b4b8ca34",
"assets/assets/images/bg_map_05.png": "f1eec1ef08210b093a97759601e443c9",
"assets/assets/images/girls/00127-4007773207.png": "f08dd423ef26ad4a1cf401b9dbd1f8ae",
"assets/assets/images/girls/00082-1893529490.png": "ad267abb03afca882790409b7050d356",
"assets/assets/images/girls/00104-1379742671.png": "d3153986661da0c14a011b454b24c38b",
"assets/assets/images/girls/00095-2530018003.png": "2df8f4ce8a826d8135a9f9453c7dde08",
"assets/assets/images/girls/00157-180335287.png": "1e585325315c0674b13321e7b8850b9a",
"assets/assets/images/girls/00220-156715440.png": "9d26809aa6d28aef67f7657d19660cc0",
"assets/assets/images/girls/00183-3580597867.png": "10bcfb6b53895095d146c6709d406268",
"assets/assets/images/girls/00167-1099026105.png": "81cca2db47340940ab07ae05f11d2d50",
"assets/assets/images/girls/00111-1181017855.png": "463a4797ea5f53b1c24e31c0a3f61397",
"assets/assets/images/girls/00067-488823399.png": "877b5e04cafc00b1e19ebcb3cf02fc9e",
"assets/assets/images/girls/00168-1099026106.png": "0fe855d41b5955f23371e14aa47c2724",
"assets/assets/images/girls/00077-1276827341.png": "1eab71d535143e26ae57904e22a40d71",
"assets/assets/images/girls/00085-3773543788.png": "dd24e9bc716c9348ed288c82db53a47a",
"assets/assets/images/girls/00182-3580597866.png": "fea364c0cf1658375e71db6260779413",
"assets/assets/images/girls/00166-1099026104.png": "9cc4b5aeb627e5c21e5dc715e04b2c17",
"assets/assets/images/girls/00110-1181017854.png": "f3602077d578ebb5ed570ac3a488b8a4",
"assets/assets/images/girls/00146-927085774.png": "5627739be03084f6b0d0f93b1bed17de",
"assets/assets/images/girls/00154-180335284.png": "5594b49fd7391bd1af840a3e58dbb758",
"assets/assets/images/girls/00197-1567071948.png": "c6f4a52ca4e62fa0802d464d96afc6b0",
"assets/assets/images/girls/00224-156715444.png": "fe5a915b9b72493fe603caf615861bb2",
"assets/assets/images/girls/00153-927085781.png": "ca573b7357c16058a5b8f52628d80a2e",
"assets/assets/images/girls/00169-1099026107.png": "c4669893810bea9c9fe9244750f9f6bb",
"assets/assets/images/girls/00223-156715443.png": "5aaf7c7980336c40ade4db1967a4e183",
"assets/assets/images/girls/00205-1343945940.png": "e83f07ec54265a1098d6e55289ccb1ac",
"assets/assets/images/girls/00126-4007773206.png": "346db4a6e34db8caf6f3dcbf8a6ed80d",
"assets/assets/images/girls/00198-1567071949.png": "4f729c0d593428fc1a7abb458e837bd0",
"assets/assets/images/girls/00074-4040798076.png": "b450ccb07a0290de982263e1c901fc34",
"assets/assets/images/girls/00189-513887405.png": "7ba695bc8507aa978e8f80dacb80c563",
"assets/assets/images/girls/00150-927085778.png": "70cd8b2dec167e65a8b08cbea6da6629",
"assets/assets/images/girls/00214-158038636.png": "c6900af1d2d34f1bca52bf85fd40bb9f",
"assets/assets/images/girls/00162-1099026100.png": "fe37adafc9aad288545541889c0af0bd",
"assets/assets/images/girls/00081-759931866.png": "a7eba1add7312a75e84e4aa37839fb04",
"assets/assets/images/girls/00165-1099026103.png": "2a122cd5e7506e37e7c522861a9f61a9",
"assets/assets/images/girls/00079-1472492708.png": "a61eb830e3ccb8579bc4f2e4eee341d7",
"assets/assets/images/girls/00078-1947898038.png": "c25b5e7df1592bc582531797971dfae7",
"assets/assets/images/girls/00180-3580597864.png": "2e22649c3eef8fdd8a4c793e69a02edf",
"assets/assets/images/girls/00179-3580597863.png": "8a7d15e477a22bce5a29dc9f2b747ee3",
"assets/assets/images/girls/00073-1095652692.png": "508987eca8f30706a7201685262b9e00",
"assets/assets/images/girls/00208-1343945943.png": "38a72fbc0afc22bfecd66daa1b214d7e",
"assets/assets/images/girls/00112-1181017856.png": "1942a85264b89ef2b5182ecfafd83360",
"assets/assets/images/girls/00100-2494365811.png": "9cd2a2b3f480deede7db0bd276915ebf",
"assets/assets/images/girls/00121-1181017865.png": "ac7fd3b6192c768789a2be036482d394",
"assets/assets/images/girls/00148-927085776.png": "9e6b104ca712b527f128e5f1f23ed24b",
"assets/assets/images/girls/00080-23193755.png": "8d0cca7454ded4751785807c6057444c",
"assets/assets/images/girls/00226-2935463114.png": "2c4ce862a255dc7913014468272ca2f6",
"assets/assets/images/girls/00106-1181017850.png": "fa6b5834bda26d1de8548933947b5544",
"assets/assets/images/girls/00122-4007773202.png": "d5795605ad66afaad332139a607dec58",
"assets/assets/images/girls/00093-1921635186.png": "24440fbec4bc065dadbf9ca668a88322",
"assets/assets/images/girls/00218-156715438.png": "f1756b4337fba1a12b2186ab81f505e4",
"assets/assets/images/girls/00200-1567071951.png": "ff0669ffc608e2d853feee690a56fb2d",
"assets/assets/images/girls/00207-1343945942.png": "5a75a1a795c80f4b621b4e36641b0805",
"assets/assets/images/girls/00209-1343945944.png": "f72fcd91aed873925ec648acd9eb3b7c",
"assets/assets/images/girls/00124-4007773204.png": "9218f21d2b06206d9d352085e521d6df",
"assets/assets/images/girls/00229-2935463117.png": "723e8dba908896687d1c2778d23e4fa5",
"assets/assets/images/girls/00109-1181017853.png": "971cb9518dc5da579cd31f290d9a14e5",
"assets/assets/images/girls/00190-513887406.png": "4a336aabef45b1767245453519d0da9a",
"assets/assets/images/girls/00202-1343945937.png": "760ac5d60f5d4f899e2b94866d4d1e74",
"assets/assets/images/girls/00123-4007773203.png": "cff33dc1b13a7e578057a6c13d9889c8",
"assets/assets/images/girls/00096-969875762.png": "31827029ee8a440f2426ad31c4e13192",
"assets/assets/images/girls/00160-180335290.png": "8d34390a40bae24f404338024cfffbdc",
"assets/assets/images/girls/00227-2935463115.png": "38db846dd4c890493442cb0dc480076b",
"assets/assets/images/girls/00107-1181017851.png": "3a39155e5f7bf5dd9624c889e423da93",
"assets/assets/images/girls/00071-1797314387.png": "90e3084470f41c27498983a798ffc0bd",
"assets/assets/images/girls/00228-2935463116.png": "bd6de4c3867a2f49a743f4dfea30b375",
"assets/assets/images/girls/00213-158038635.png": "172f1554904fb8b86119bed7a8a8dfc4",
"assets/assets/images/girls/00125-4007773205.png": "1346055b0914a86d010cd72cd087bdd3",
"assets/assets/images/girls/00102-1712001110.png": "e0018c2b8a46cd18a163a3aa24618b01",
"assets/assets/images/girls/00108-1181017852.png": "0beec2e818e378372572e41450f0e0f9",
"assets/assets/images/girls/00140-1466597709.png": "83b5e6518f51d1c6f14326775b3c7577",
"assets/assets/images/girls/00192-513887408.png": "0b9126c13c6d593080bc593dca03d057",
"assets/assets/images/girls/00187-513887403.png": "7c54b55f2b22d6c68c6549cf7546ee61",
"assets/assets/images/girls/00139-1466597708.png": "1fc66cc020d0272acbcd347e5d876a6b",
"assets/assets/images/girls/00083-2593982715.png": "795f4b793097082a14737ee5b7b5fc14",
"assets/assets/images/girls/00206-1343945941.png": "908fc19ca339e65e8a1b017ef98566e8",
"assets/assets/images/girls/00091-3500870083.png": "d7e3f0c6bd565229afbea16867ebcd72",
"assets/assets/images/girls/00201-1567071952.png": "cdc24db2899c61461e3d408ea42f2ac3",
"assets/assets/images/girls/00216-158038638.png": "ba355ae9267bc0391e8de8c7cb0288e9",
"assets/assets/images/girls/00089-3551090051.png": "a30d6a2b418d1a0f10760d7913831638",
"assets/assets/images/girls/00210-158038632.png": "a2871a41a195a077484cefa22b1e8622",
"assets/assets/images/girls/00163-1099026101.png": "81d8bf84525a195429857200045ab301",
"assets/assets/images/girls/00164-1099026102.png": "dbafe96b739182eb158916d2da810b49",
"assets/assets/images/girls/00158-180335288.png": "443a348e320ef7e46fa51246a319c671",
"assets/assets/images/girls/00178-3580597862.png": "53cde70836623c0fe9bd42db24d926bc",
"assets/assets/images/girls/00181-3580597865.png": "c3dd29d2f7c1f9d6b251279eca4097b3",
"assets/assets/images/girls/00170-2831323357.png": "b9d218eab3e32235ad8ae796e2b8c98f",
"assets/assets/images/girls/00113-1181017857.png": "3f5c680fa384a8edf34e26b1b51fa82c",
"assets/assets/images/girls/00120-1181017864.png": "eb1503eca4a6e7b8fa45a8062c7e3b9e",
"assets/assets/images/girls/00134-3761277614.png": "b53551e3ed0c7021536ed6169e8f6725",
"assets/assets/images/girls/00161-180335291.png": "9a8eccb377542115fef79b1625cc6555",
"assets/assets/images/girls/00068-4092715782.png": "aadbfa49fc83be480bff6312eb9a1b63",
"assets/assets/images/girls/00212-158038634.png": "1d55bbde7460842ddcf5f1460f583fa1",
"assets/assets/images/girls/00132-3761277612.png": "152e1f5281d7986aec5a7d1b9268d04e",
"assets/assets/images/girls/00098-3218704155.png": "dcf13f14f20ff788173eed1d0ba3729a",
"assets/assets/images/girls/00186-513887402.png": "bd5722af9132ac44b412f65774a6531c",
"assets/assets/images/girls/00114-1181017858.png": "cb4e0590cb18101b3c46b53bdbc976bb",
"assets/assets/images/girls/00193-513887409.png": "2f4af3c44197ba0a09d4e1e390a0b4c3",
"assets/assets/images/girls/00099-545922937.png": "8d6c26342b2818d5d62decf23748df70",
"assets/assets/images/girls/00177-2831323364.png": "2c0e3f1bc1249a782c73261ab7a2a64a",
"assets/assets/images/girls/00233-2935463121.png": "6bca9ce3dcbb256a6c9275d47f924d60",
"assets/assets/images/girls/00101-3857560597.png": "22224ee6d3e0400ec470b48bb53d768f",
"assets/assets/images/girls/00092-2449260859.png": "26480b41de5f1fb834345732e89c01fb",
"assets/assets/images/girls/00217-158038639.png": "df9707fad4da881a651d748178843f38",
"assets/assets/images/girls/00105-1817590501.png": "350fc85c1a29e430d2d44c643c0b1f52",
"assets/assets/images/girls/00211-158038633.png": "e1464628d8b988cfbe62b3ecc60784cf",
"assets/assets/images/girls/00194-1567071945.png": "bdab9d70877919a73fe2cd626d9640f6",
"assets/assets/images/girls/00159-180335289.png": "fbf3fa1c164feb9147e326d18891150b",
"assets/assets/images/girls/00176-2831323363.png": "a895cf570ccbb331c23a1f71627851dd",
"assets/assets/images/girls/00215-158038637.png": "f0a725d897e88e736f8e1c56139d63ed",
"assets/assets/images/girls/00232-2935463120.png": "5f1896bf7f8b4c0b554164484b8d3075",
"assets/assets/images/girls/00171-2831323358.png": "abad1a3d3871856121c5c0672306dfd0",
"assets/assets/images/girls/00204-1343945939.png": "0f5a945c53341995d9ef1e970f8e88f7",
"assets/assets/images/girls/00097-3544910226.png": "f891d1ea657fc6e8cc3f90ac119ce00f",
"assets/assets/images/girls/00075-2917840150.png": "0bb26d601a32f13bf00c3403f9e831ce",
"assets/assets/images/girls/00069-3525828514.png": "58a28d7fe829b38a80ff981f02eb00ed",
"assets/assets/images/girls/00149-927085777.png": "daddbc5586f12f14ff86a337df4a6b90",
"assets/assets/images/girls/00141-1466597710.png": "1bf604068a1b51b8acd7ce01f3cee234",
"assets/assets/images/girls/00086-101899369.png": "840c85790c56c14868d22c5b371afb65",
"assets/assets/images/girls/00138-1466597707.png": "9d2817a29f5d6ad48078fe365abd90eb",
"assets/assets/images/girls/00090-3038569838.png": "614e12b38021cc8dd62c2814f37c799e",
"assets/assets/images/girls/00135-3761277615.png": "7f83edcc771dfdf27b8f2d8c253340ca",
"assets/assets/images/girls/00219-156715439.png": "dc701211d6a757b3ba2988dad0c5ecd4",
"assets/assets/images/girls/00115-1181017859.png": "5337c8e5f235bd6ede70b0fb3b38170c",
"assets/assets/images/girls/00094-1353107242.png": "200c42e5c4ff0394107a418752bf3854",
"assets/assets/images/girls/00203-1343945938.png": "6c52054d4dcd3c64e248db4c20cd21fd",
"assets/assets/images/girls/00070-3687498912.png": "82b3dc797bc979891b3a5707868f718f",
"assets/assets/images/girls/00195-1567071946.png": "f2b802943142b722d8f95e9387239a16",
"assets/assets/images/girls/00133-3761277613.png": "ce4bb61bd4c5832eb254d05d87894d3c",
"assets/assets/images/girls/00191-513887407.png": "961e97f48b761fe1b20dca350235330e",
"assets/assets/images/girls/00147-927085775.png": "dc8aad5bcc56ab8646d4a00624fab226",
"assets/assets/images/girls/00155-180335285.png": "55925df759cd001368490f132159d2f0",
"assets/assets/images/girls/00116-1181017860.png": "877104b9b656bea5fa9791e9938175bd",
"assets/assets/images/girls/00143-1466597712.png": "863b77b8fa6166a2a03f7c1eb1d9e070",
"assets/assets/images/girls/00225-156715445.png": "18c78f1f5bd2a1c3f5a0cfa60d5aadc4",
"assets/assets/images/girls/00129-4007773209.png": "9a7bc91ebaa2f79693350cde720d9ed9",
"assets/assets/images/girls/00119-1181017863.png": "b21488f8c723fdf33dac58814ed3ee9c",
"assets/assets/images/girls/00103-2307797751.png": "8a2957d92a6e582490561f755d64eadd",
"assets/assets/images/girls/00152-927085780.png": "ce3c140a28a780bf6c2f9d389e1ac71f",
"assets/assets/images/girls/00145-1466597714.png": "0539e0e8d70543993c1ea9637fad0d04",
"assets/assets/images/girls/00088-2376441019.png": "055398a82689b1b9ce7d2e56d269dc7d",
"assets/assets/images/girls/00222-156715442.png": "89f82bbe91d1c99c0a7c226937063639",
"assets/assets/images/girls/00185-3580597869.png": "19dc8d119faa8df164dcd4fb545c21eb",
"assets/assets/images/girls/00131-3761277611.png": "b8993d37a2f5216bffef0e81b13e9667",
"assets/assets/images/girls/00231-2935463119.png": "698bffdae1517081471c5c2d1c1eefd5",
"assets/assets/images/girls/00144-1466597713.png": "6efce15abd4209eaac506732590afbcb",
"assets/assets/images/girls/00175-2831323362.png": "041619fa90677ff48d360b57ade5a556",
"assets/assets/images/girls/00188-513887404.png": "4416508894401614b59344ebe5ebf31d",
"assets/assets/images/girls/00137-3761277617.png": "bf641cc8ea4c054f537da4664c557680",
"assets/assets/images/girls/00151-927085779.png": "d9d6b60282956904b84b63165ae09252",
"assets/assets/images/girls/00130-3761277610.png": "0df35c1eef2c499c38434b6aa82ab621",
"assets/assets/images/girls/00076-3370351654.png": "e66275e1c8b706abde05341bd8206513",
"assets/assets/images/girls/00172-2831323359.png": "c4ff215465528df164c881ee1ef01f1f",
"assets/assets/images/girls/00156-180335286.png": "44850aadd19cb30f1d74c71ea9eac759",
"assets/assets/images/girls/00184-3580597868.png": "83f2bafa369c53e76a2d96391db65ff7",
"assets/assets/images/girls/00087-1234372213.png": "3338cbe5f522da770ab0ddcb63349d19",
"assets/assets/images/girls/00136-3761277616.png": "1824ff2b7e91a2a2919ac0ebdd571d46",
"assets/assets/images/girls/00230-2935463118.png": "15eb75e4155ea7885a48008d9fe95080",
"assets/assets/images/girls/00173-2831323360.png": "c41ee27cb21e99ae894818181f55cfd7",
"assets/assets/images/girls/00142-1466597711.png": "0b1ce02e456ee576c44d21ba3b02cc95",
"assets/assets/images/girls/00072-4103349021.png": "542cd7c8e1752d5d52dfd92d8a6cb84e",
"assets/assets/images/girls/00174-2831323361.png": "073f25abf36a21e69d8679d58ca7cd1b",
"assets/assets/images/girls/00117-1181017861.png": "90f441fdcac676b154dc723a05615a01",
"assets/assets/images/girls/00221-156715441.png": "5dab8746624b4d175b9d1685af8d449d",
"assets/assets/images/girls/00199-1567071950.png": "d4d0e01973db5c1df879ab9913a8c292",
"assets/assets/images/girls/00066-801808953.png": "ab9e1fdf3076db4bc6a49c0d14f5da44",
"assets/assets/images/girls/00128-4007773208.png": "f76d6bfd3499396f50a0b27e5417adbb",
"assets/assets/images/girls/00084-2638329711.png": "641d49fd8729600462488ae0ec9afeb3",
"assets/assets/images/girls/00118-1181017862.png": "1bba42b56c99d95183faa0c89e0daa78",
"assets/assets/images/girls/00196-1567071947.png": "759137602a0addf57a9e5ee5156b1dde",
"assets/assets/images/bg_map_06.png": "3fa37e19ffbe4900be744b25367cd200",
"assets/assets/images/bg_map_02.png": "bd3586270f3266ce97f3621c6ebd324e",
"assets/assets/images/bg_map_03.png": "42b300fb9f95b25cb56b7e7a66b668dc",
"assets/assets/images/bg_map_01.png": "8e191f642661682b1dd6f76002f63312",
"assets/assets/images/hero_sheet.jpg": "fca09dd5dba3b113c845935bd7be9e20",
"assets/assets/images/heros/tile049.png": "7864b3154d4366f92301f5595998334c",
"assets/assets/images/heros/tile061.png": "26a32432972d80b59f07f67a178ace75",
"assets/assets/images/heros/tile075.png": "8db7fedfa418b88efc40a17bdb022ff4",
"assets/assets/images/heros/tile074.png": "d177a6d08cf802f1bf20f4fe9c663fef",
"assets/assets/images/heros/tile060.png": "3e95282303774340e1262689a94a080b",
"assets/assets/images/heros/tile048.png": "a68ad3cc4fe77ce81c14cbe223ca6213",
"assets/assets/images/heros/tile076.png": "c2e478f7dd6109b0db27d083557fdea4",
"assets/assets/images/heros/tile062.png": "57cb1b34e7efcbb3db3095b5d0aa5d3e",
"assets/assets/images/heros/tile089.png": "78d95c112175f33519465687dd1e0ca2",
"assets/assets/images/heros/tile088.png": "c0f6f438e9f756d15e19671edc498e01",
"assets/assets/images/heros/tile063.png": "2c47f3b0dec53326ce37a7a85fefcfa3",
"assets/assets/images/heros/tile077.png": "24e2f841fe750475febad535c1f2c09e",
"assets/assets/images/heros/tile073.png": "641d032f71f6ee5e184f90652d000fa0",
"assets/assets/images/heros/tile067.png": "7be52f7a2d095395f65c53a756d6ec75",
"assets/assets/images/heros/tile066.png": "2e3a50ebf92eda5e857cddc517431004",
"assets/assets/images/heros/tile072.png": "3ff93725a545a5758f0ad43d0416800d",
"assets/assets/images/heros/tile064.png": "7baf44926befe1058f241d915b4de8e2",
"assets/assets/images/heros/tile070.png": "61d78a22da75bd9ea77d1bb04f9a5c65",
"assets/assets/images/heros/tile058.png": "ed263f63b42384823da3d73643155432",
"assets/assets/images/heros/tile059.png": "761b4354f7c5811df073415654dcfe4b",
"assets/assets/images/heros/tile071.png": "c96cfd51dbf239992649a83f46ed2dac",
"assets/assets/images/heros/tile065.png": "6f7e60ef76039af76d67485942c6d824",
"assets/assets/images/heros/tile002.png": "e1a5df2408d7517ffa281a563d09e8cb",
"assets/assets/images/heros/tile016.png": "943fcc35d1982d0eeb9729ac912e4084",
"assets/assets/images/heros/tile017.png": "7a9cf6b16449d53dcd77a134159e1646",
"assets/assets/images/heros/tile003.png": "2cd78ab0c625c768e71f66eba2aa228c",
"assets/assets/images/heros/tile029.png": "3bc5b29018da3f81b34b500cae92f5ca",
"assets/assets/images/heros/tile015.png": "f537103f1cef1083e6ace9ef57acff37",
"assets/assets/images/heros/tile001.png": "6a4a00efd09ade5a470d3b0bb2d15316",
"assets/assets/images/heros/tile000.png": "7773d971e78ce731d0d4b2dbae5a97c5",
"assets/assets/images/heros/tile014.png": "cdb530f7f25a4bdc0c6cdd8f189a38f4",
"assets/assets/images/heros/tile028.png": "22d4492b80bef07595958c1b2cf502bd",
"assets/assets/images/heros/tile010.png": "64fe8a1328e55227256fd785cd2946fe",
"assets/assets/images/heros/tile004.png": "e270e549a9879a655729b863e8f39a3d",
"assets/assets/images/heros/tile038.png": "c2501da00b3d2e5a9ec2b9d50c9f015e",
"assets/assets/images/heros/tile039.png": "09242be6671cae660899aa3e2d08b118",
"assets/assets/images/heros/tile005.png": "25da6ac8cb4208ed930a0c5e17e7a011",
"assets/assets/images/heros/tile011.png": "c44c2a3edf86349fa424f84797877980",
"assets/assets/images/heros/tile007.png": "a5811a1f75e45e6e645849f0dbdccb75",
"assets/assets/images/heros/tile013.png": "dc10638a7e9f4d5e68a4d00680ba8a4d",
"assets/assets/images/heros/tile012.png": "535f3483f4d065cd25dcffe81e03bd65",
"assets/assets/images/heros/tile006.png": "ba23bb844d19715d71e2021292aa57ee",
"assets/assets/images/heros/tile023.png": "4decc9230ae0016cd0f45979460c297f",
"assets/assets/images/heros/tile037.png": "1cd41ea4f621796d76bee309ef4cbc89",
"assets/assets/images/heros/tile036.png": "5a0ca3994bd768e402400c7f8ba3f695",
"assets/assets/images/heros/tile022.png": "d141c008b0129b2d2dc2aea4ac2050ab",
"assets/assets/images/heros/tile008.png": "eca301ca5b72e263f28817cb2ff1ddd5",
"assets/assets/images/heros/tile034.png": "242115e771f6daf117f0c35fcf383836",
"assets/assets/images/heros/tile020.png": "2e716878c384eafd2776d820b347db1b",
"assets/assets/images/heros/tile021.png": "9859a1061e934ed67adc27c412b22442",
"assets/assets/images/heros/tile035.png": "346ac47abb4b137e22b355f012a67659",
"assets/assets/images/heros/tile009.png": "23e19b7a1ce84648804fa504c3e33e63",
"assets/assets/images/heros/tile031.png": "462a6969ea3502f59de2311d6b7ef3a7",
"assets/assets/images/heros/tile025.png": "a8c277cd2b4752877b4c94dddc726dd5",
"assets/assets/images/heros/tile019.png": "c9d38024c6947b55ac0fb5ea03a75c6c",
"assets/assets/images/heros/tile018.png": "a55828b41618353535d1b36181c3b9aa",
"assets/assets/images/heros/tile024.png": "2317d5efd0d9e04965052e7ede369b63",
"assets/assets/images/heros/tile030.png": "68371a4fd640510203e4e921467364ee",
"assets/assets/images/heros/tile026.png": "5a7546c51dc937f26b36e39dac69e150",
"assets/assets/images/heros/tile032.png": "6cd0b22196280a7fe896ac43def82e08",
"assets/assets/images/heros/tile033.png": "90849029ca082e37240ee9f659c12a6c",
"assets/assets/images/heros/tile027.png": "76c8676b8cbcd393649722975de3bd3f",
"assets/assets/images/heros/tile068.png": "768d66943db682622da4c86cddd7a9ce",
"assets/assets/images/heros/tile040.png": "519ebbdf46871f40338fd5eb4596d5ff",
"assets/assets/images/heros/tile054.png": "0e9bfa088a33e5408e0ca310053f46e2",
"assets/assets/images/heros/tile083.png": "78ec1f0e102e7e9b0881c3ec026d0025",
"assets/assets/images/heros/tile082.png": "19e8dda6c5453e6ec336bf5b505bd3f9",
"assets/assets/images/heros/tile055.png": "838528d07e71ecb85df6c37ee0e59852",
"assets/assets/images/heros/tile041.png": "e732fec68ca5f14f0c9e6ac52665e508",
"assets/assets/images/heros/tile069.png": "7e6f36cfd51eb5c75031b3f61eb9c150",
"assets/assets/images/heros/tile057.png": "5ee8966e30e57a3b435ea9c55ed2bece",
"assets/assets/images/heros/tile043.png": "65b66778c78164e2a08c354fdfdcbded",
"assets/assets/images/heros/tile080.png": "2dfe3d2245c8c1b402624913ed05e1e4",
"assets/assets/images/heros/tile081.png": "958e74ac2ff97c08b5baa3be1eb64f6a",
"assets/assets/images/heros/tile042.png": "c38bc4385d047ec2656d27d2303dedfa",
"assets/assets/images/heros/tile056.png": "79253c1e6f6651e90ce4757c46cd4604",
"assets/assets/images/heros/tile052.png": "29eae51d771ba1484b94e86f50c555ed",
"assets/assets/images/heros/tile046.png": "6a254f1f5129e5120381c161dfd7a1fb",
"assets/assets/images/heros/tile085.png": "07a2061a209f5a770bdb4b93c4f9b237",
"assets/assets/images/heros/tile084.png": "64a19096cb4d2f3d055c2c8992bdb1b2",
"assets/assets/images/heros/tile047.png": "6f4803bfb384b108cec43b185347e2db",
"assets/assets/images/heros/tile053.png": "bddf2abb8b125e2909666ab910d24140",
"assets/assets/images/heros/tile045.png": "aaf6007354e2fa505ee9d54a50ba194e",
"assets/assets/images/heros/tile051.png": "240c054b3a9c64a0e7bbb989fa358f1a",
"assets/assets/images/heros/tile079.png": "6efacf7ca15bd110bb010798c9189c93",
"assets/assets/images/heros/tile086.png": "ba8050af072f0e5aab00f083866b41ca",
"assets/assets/images/heros/tile087.png": "7faa15c6194e455a438078975e0d03f0",
"assets/assets/images/heros/tile078.png": "87444add5e4a08b1d8a12c9065d80562",
"assets/assets/images/heros/tile050.png": "06753cb27699d0829a00d1d563f6605a",
"assets/assets/images/heros/tile044.png": "125e7995aad22f38d519c43d2830e141",
"assets/assets/images/weapons/Wooden%2520Shield.png": "7f957a63fa4ec06ba0623d1f8f608db3",
"assets/assets/images/weapons/Bow.png": "e210cfa4d5ede39afbf6b945b4816547",
"assets/assets/images/weapons/Magic%2520Wand.png": "831e852216b0ea24618f2d794237437e",
"assets/assets/images/weapons/Emerald%2520Staff.png": "ea7d0ad6df88b8db981415c63e757cb4",
"assets/assets/images/weapons/Topaz%2520Staff.png": "41b5f18bd93b6c5f7903223035de9547",
"assets/assets/images/weapons/Torch.png": "ebde0d80c058452e6b10f1b24c7bae7f",
"assets/assets/images/weapons/Iron%2520Shield.png": "315fc137205593a1f6d63eed3862a5a9",
"assets/assets/images/weapons/Sapphire%2520Staff.png": "45159059eaaf6077a95828e38b20f11f",
"assets/assets/images/weapons/Arrow.png": "cb8a709352e9da6fbf0216e8124960d2",
"assets/assets/images/weapons/Golden%2520Sword.png": "ce28d375eb8890dfe100221a6f641ca1",
"assets/assets/images/weapons/Silver%2520Sword.png": "7260d1e87f6ef5872ea78ed395bbd200",
"assets/assets/images/weapons/Wooden%2520Staff.png": "7c79d1af7f3599136970d90509c6a634",
"assets/assets/images/weapons/Ruby%2520Staff.png": "737fc9cec14b7396927164ba8b031d1d",
"assets/assets/images/weapons/Axe.png": "af3162ef921a27d70f74b66be641e064",
"assets/assets/images/weapons/Shovel.png": "caf32ce4b702ef592611618d3f948ef0",
"assets/assets/images/weapons/Knife.png": "c3a0ec3618d45e9e8ae73702c57bbd52",
"assets/assets/images/weapons/Hammer.png": "18714602af96a2c6c1f147792089e9fb",
"assets/assets/images/weapons/Iron%2520Sword.png": "ac868030031e9475efebf7ebf058ae2d",
"assets/assets/images/weapons/Pickaxe.png": "813cba83b964ce7e2c2e469a6dae2634",
"assets/assets/images/weapons/Wooden%2520Sword.png": "67914eaceec98fbacf75abb5ce6dc359",
"assets/assets/images/icon_sheet.png": "647ca607bfdc1f52ddb422e9d2e81cd6",
"assets/assets/images/sea.png": "ea860776f61b30a843235a8e96cdeeca",
"assets/assets/images/mountain.png": "f0ce5d05d4c53c7b466b644e656d8068",
"assets/assets/images/lake.png": "c3ed050166b04be17df5a8910c888952",
"assets/assets/images/sprites/effects/fx2_electric_burst_large_violet/frame0008.png": "4bfdd7542286eef2aa319b0c7a174392",
"assets/assets/images/sprites/effects/fx2_electric_burst_large_violet/frame0009.png": "b3d4b1407cbd28cb2c20b7258b75bf97",
"assets/assets/images/sprites/effects/fx2_electric_burst_large_violet/frame0015.png": "f3d10990c467bac683cc81e3e8e6fab0",
"assets/assets/images/sprites/effects/fx2_electric_burst_large_violet/frame0001.png": "9746ae890a0680e843cb4cb5f1d61727",
"assets/assets/images/sprites/effects/fx2_electric_burst_large_violet/frame0000.png": "346770561d3d83a014bc3d87f5918afd",
"assets/assets/images/sprites/effects/fx2_electric_burst_large_violet/frame0014.png": "eb2c7db7c31fbddf11972ad95f6e04d5",
"assets/assets/images/sprites/effects/fx2_electric_burst_large_violet/frame0002.png": "962bea85e54101c36ac55272735b6deb",
"assets/assets/images/sprites/effects/fx2_electric_burst_large_violet/frame0003.png": "d4ab6635da0f43bf465154cc1fa501a0",
"assets/assets/images/sprites/effects/fx2_electric_burst_large_violet/frame0007.png": "638147eaa7fb90f553dd07e0405145bc",
"assets/assets/images/sprites/effects/fx2_electric_burst_large_violet/frame0013.png": "aa9f459e365fbc1f5f0266f31e397586",
"assets/assets/images/sprites/effects/fx2_electric_burst_large_violet/frame0012.png": "649efba0734fe1c91fa26bfeab1211f3",
"assets/assets/images/sprites/effects/fx2_electric_burst_large_violet/frame0006.png": "c6935af6af615d957dfc999e39c0f4ff",
"assets/assets/images/sprites/effects/fx2_electric_burst_large_violet/frame0010.png": "bfbabea838086470a0a90de8150db1a0",
"assets/assets/images/sprites/effects/fx2_electric_burst_large_violet/frame0004.png": "7a8cf4478f6f680f302cf2ab51765754",
"assets/assets/images/sprites/effects/fx2_electric_burst_large_violet/frame0005.png": "f6da999854b89642bf3776a4523f5d65",
"assets/assets/images/sprites/effects/fx2_electric_burst_large_violet/frame0011.png": "1f9f5f9cf718f141e9551b89649c5546",
"assets/assets/images/sprites/effects/fx1_explosion_small_orange/frame0008.png": "a919d3c3b2cd07fa87bc710ae08d14fc",
"assets/assets/images/sprites/effects/fx1_explosion_small_orange/frame0009.png": "107ce88b155d18430213d97cf4c8ff2e",
"assets/assets/images/sprites/effects/fx1_explosion_small_orange/frame0001.png": "7c640825a8268b698b1da593ac1bace6",
"assets/assets/images/sprites/effects/fx1_explosion_small_orange/frame0000.png": "0b9dad69ad34f66d63f51a94b99eaea0",
"assets/assets/images/sprites/effects/fx1_explosion_small_orange/frame0002.png": "4394b9d90f881d346aa8228ab64b591f",
"assets/assets/images/sprites/effects/fx1_explosion_small_orange/frame0003.png": "7609df02b047a4cbb902abd24cfad644",
"assets/assets/images/sprites/effects/fx1_explosion_small_orange/frame0007.png": "c968dc1d02deeea9be81f14df8a0bd02",
"assets/assets/images/sprites/effects/fx1_explosion_small_orange/frame0006.png": "55d21a020f3a5dd8ae76e45129fca3d1",
"assets/assets/images/sprites/effects/fx1_explosion_small_orange/frame0010.png": "67885662e0b6cd7c332513d799d03137",
"assets/assets/images/sprites/effects/fx1_explosion_small_orange/frame0004.png": "e312ab81d2092c36d6c2ff2faa43f937",
"assets/assets/images/sprites/effects/fx1_explosion_small_orange/frame0005.png": "d0ebb15fbb49094d3f9ca79427b509cc",
"assets/assets/images/sprites/effects/fx2_impact_shock_large_brown/frame0001.png": "96392799957a856507969bb4cff91f83",
"assets/assets/images/sprites/effects/fx2_impact_shock_large_brown/frame0000.png": "bf62e61bf31baa0e984218e0fe090b77",
"assets/assets/images/sprites/effects/fx2_impact_shock_large_brown/frame0002.png": "c5c563e38a3026fb1287f4f92ca822a9",
"assets/assets/images/sprites/effects/fx2_impact_shock_large_brown/frame0003.png": "5c76c83b439f4cf1f6b4a2b2c7009f7a",
"assets/assets/images/sprites/effects/fx2_impact_shock_large_brown/frame0006.png": "851694225883f2b590ab16abe89133de",
"assets/assets/images/sprites/effects/fx2_impact_shock_large_brown/frame0004.png": "30cc16a9d40b48023c2c967adf427408",
"assets/assets/images/sprites/effects/fx2_impact_shock_large_brown/frame0005.png": "fc4061922c88b464aee0fd27e992c6cd",
"assets/assets/images/sprites/effects/fx1_splatter_small_red/frame0001.png": "cf291a27e1b234e6e81b9a17b6126d13",
"assets/assets/images/sprites/effects/fx1_splatter_small_red/frame0000.png": "3807c1bbcb5b80ade166d9f407bc1eb1",
"assets/assets/images/sprites/effects/fx1_splatter_small_red/frame0002.png": "a8db5705c4851a5e6d6c5130f516c49a",
"assets/assets/images/sprites/effects/fx1_splatter_small_red/frame0003.png": "60e310acc717f6d0bbb5f8d0c563b741",
"assets/assets/images/sprites/effects/fx1_splatter_small_red/frame0004.png": "0043e9ea54169f7f47701ab276122889",
"assets/assets/images/sprites/effects/fx1_splatter_small_red/frame0005.png": "f4c117b1ebe5730bff884022c6d5f015",
"assets/assets/images/level/UR.png": "4dd6243b3d888dde2bb6426e625ccdf1",
"assets/assets/images/level/N.png": "edb4d27ee9474a334693fe952a7b36c7",
"assets/assets/images/level/LR.png": "51edc602a83074c79b8a1b695d067295",
"assets/assets/images/level/SSR.png": "1d970870b0a819649b824291902315de",
"assets/assets/images/level/SR.png": "6e5c75f09fe66fed7641eaa41215bcd5",
"assets/assets/images/level/R.png": "d435bd3ef005ace72f133999cda30776"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "main.dart.js",
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
