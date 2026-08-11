// 魔鬼辞典词库 - 共 663 条
// 字段: id, word(单词), pos(词性), cnWord(书中中文词义), defEn(书中英文解释), defCn(书中中文解释), footnotes(可选，部分词条含生词注解)
const WORDS = [
  {
    "id": 1,
    "word": "abasement",
    "pos": "n",
    "cnWord": "低三下四",
    "defEn": "A decent and customary mental attitude in the presence of wealth or power. Peculiarly appropriate in an employee when addressing an employer.",
    "defCn": "这是人们在财富或权势面前惯于表现的一种体面的心态。雇员对老板说话时尤其容易表现出这种心态。"
  },
  {
    "id": 2,
    "word": "abatis",
    "pos": "n",
    "cnWord": "鹿砦",
    "defEn": "Rubbish in front of a fort, to prevent the rubbish outside from molesting! the rubbish inside.",
    "defCn": "这是炮楼前的垃圾，它阻止了炮楼外面的垃圾侵害里面的垃圾。"
  },
  {
    "id": 3,
    "word": "abdication",
    "pos": "n",
    "cnWord": "退位",
    "defEn": "An act whereby a sovereign’ attests his sense of the high temperature of the throne.",
    "defCn": "这是君王借以体会王座高远的一种行为。"
  },
  {
    "id": 4,
    "word": "abdomen",
    "pos": "n",
    "cnWord": "腹部",
    "defEn": "The temple of the god Stomach, in whose worship, with sacrificial rights, all true men engage. From women this ancient faith commands but a stammering assent’. They sometimes minister at the altar in a half-hearted and ineffective way, but true reverence’ for the one deity’ that men really adore they know not. If woman had a free hand in the world's marketing, the race would become graminivorous’.",
    "defCn": "这是胃神的圣典。所有的男人都向他顶礼膜拜，献出祭品。这种古老的信仰在女人中很难得到强烈的认同。尽管她们有时也会漫不经心、徒劳地在祭坛边转儿，但是对于男人热切崇拜的胃神却一无所知。如果说女人在世界的交易场中能够自由自在的话 , 那么她们就会变成温顺的食草动物。",
    "footnotes": [
      {
        "term": "deity",
        "pos": "n.",
        "gloss": "神，神性"
      }
    ]
  },
  {
    "id": 5,
    "word": "abduction",
    "pos": "n",
    "cnWord": "绑架",
    "defEn": "In law, a crime; in morals, a punishment.",
    "defCn": "从法律来说，这是一种罪行，从道德来说，这是一种惩罚。"
  },
  {
    "id": 6,
    "word": "abnormal",
    "pos": "adj",
    "cnWord": "变态",
    "defEn": "Not conforming to standard. In matters of thought and conduct, to be independent is to be abnormal, to be abnormal is to be detested’. Wherefore the lexicographer” adviseth a striving toward the straiter [sic] resemblance® of the Average Man than he hath to himself. Whoso attaineth thereto shall have peace, the prospect of death and the hope of Hell.",
    "defCn": "不循规蹈矩就叫变态。就思想和行为而言，与众不同、不受他人左右便是变态，变态则意味着被人妨恨。因此，本词典编撰者敬劝各位，努力消灭自我，随波逐流，谁做到这一点，谁就会享受安宁，就可望走向死亡，实现地狱的渴望。"
  },
  {
    "id": 7,
    "word": "aboriginies",
    "pos": "n",
    "cnWord": "土著居民",
    "defEn": "Persons of little worth found cumbering* the soil of a newly discovered country. They soon cease to cumber; they fertilize.",
    "defCn": "这是些没多大价值的人，拖累这个新发现的国家的人。不过，他们很快就不再拖累土地了，他们自己变成了肥料，使士地丰饶。"
  },
  {
    "id": 8,
    "word": "abrupt",
    "pos": "adj",
    "cnWord": "出其不意的",
    "defEn": "Sudden, without ceremony, like the arrival of a cannon-shot and the departure of the soldier whose interests are most affected by it.",
    "defCn": "指突然发生，无任何仪式，就象枪声一响士兵们就一喷而散一样。"
  },
  {
    "id": 9,
    "word": "abscond",
    "pos": "vi",
    "cnWord": "潜逃",
    "defEn": "To \"move in a mysterious way,\" commonly with the property of another.",
    "defCn": "用某种秘密的方式离开，通常是带着别人的财产走的。"
  },
  {
    "id": 10,
    "word": "absent",
    "pos": "adj",
    "cnWord": "缺席的",
    "defEn": "Peculiarly exposed to the tooth of detraction’; vilifed; hopelessly in the wrong; superseded” in the consideration and affection of another.",
    "defCn": "这就意味着特别容易被人诈毁、中伤。缺席者除蒙受冤枉别无希望。他常会被别人取代，失去他分内的东西。"
  },
  {
    "id": 11,
    "word": "absolute",
    "pos": "adj",
    "cnWord": "绝对的",
    "defEn": "Independent, irresponsible. An absolute monarchy is one in which the sovereign does as he pleases so long as he pleases the assassins’. Not many absolute monarchies are left, most of them having been replaced by limited monarchies, where the sovereign's power for evil (and for good) is greatly curtailed’, and by republics, which are governed by chance.",
    "defCn": "自主的，不负责任的。在绝对的君主制下，国王可以随心所欲，只要刺客们高兴就行。时至今日，世界剩下的绝对君主制不多了，国王为和亚〈当然也为善 )的威力已被大大地削弱 ,还有些绝对君主制则变成了共和制，共和制是靠侥地来治理国家的。"
  },
  {
    "id": 12,
    "word": "absurdity",
    "pos": "n",
    "cnWord": "谬论",
    "defEn": "a statement or belief manifestly inconsistent with one's own opinion. Be",
    "defCn": "与我自己的观点明显背逆的言论或信仰。"
  },
  {
    "id": 13,
    "word": "academe",
    "pos": "n",
    "cnWord": "学苑",
    "defEn": "An ancient school where morality and philosophy were taught.",
    "defCn": "古代的一种学校，开设的课程是道德和哲学。"
  },
  {
    "id": 14,
    "word": "academy",
    "pos": "n",
    "cnWord": "学院",
    "defEn": "A moder school where football is taught.",
    "defCn": "一种现代的学校，教的是足球。"
  },
  {
    "id": 15,
    "word": "accident",
    "pos": "n",
    "cnWord": "意外",
    "defEn": "An inevitable occurrence due to the action of immutable” natural laws.",
    "defCn": "由于不可改变的自然规律的作用而不可避免地发生的事件。"
  },
  {
    "id": 16,
    "word": "accomplice",
    "pos": "n",
    "cnWord": "同谋",
    "defEn": "One associated with another in a crime, having guilty knowledge and complicity’, as an attorney who defends a criminal, knowing him guilty. This view of the attorney's position in the matter has not hitherto commanded the assent of attorneys, no one having offered them a fee for assenting. accord, 7. Harmony.",
    "defCn": "和别人一起犯罪的人。明知犯罪，仍当帮凶，就象律师一样，明知罪犯有罪，仍然为他辩护。对律师的这种看法至今还未得到律师们的认可，央为还没有谁向他们交纳认可费。符合就是融洽。"
  },
  {
    "id": 17,
    "word": "accordion",
    "pos": "n",
    "cnWord": "手风琴",
    "defEn": "An instrument in harmony with the sentiments of an assassin.",
    "defCn": "一种与刺客的情感很融洽的乐器。"
  },
  {
    "id": 18,
    "word": "accountability",
    "pos": "n",
    "cnWord": "责任心",
    "defEn": "The mother of caution.",
    "defCn": "说小慎微之母。"
  },
  {
    "id": 19,
    "word": "accuse",
    "pos": "vi",
    "cnWord": "指控",
    "defEn": "To affirm another's guilt or unworth; most commonly as a justification of ourselves for having wronged him.",
    "defCn": "认定别人有罪或卑鄙好为自己开赔 , 通常是由于伤害了人家我们才"
  },
  {
    "id": 20,
    "word": "acephalous",
    "pos": "adj",
    "cnWord": "无头无脑的",
    "defEn": "In the surprising condition of the Crusader! who absently pulled at his forelock? some hours after a Saracen scimitar’ had, unconsciously to him, passed through his neck, as related by de Joinville.",
    "defCn": "像德。儒安维尔所讲的那样，伊斯兰教徒的弯刀抹过十字军骑士的脖子，这位骑士对此毫无知觉。几小时之后，他漫不经心地扯动前额的头发，才知道发生了不幸的事。"
  },
  {
    "id": 21,
    "word": "achievement",
    "pos": "n",
    "cnWord": "成就",
    "defEn": "The death of endeavor and the birth of disgust.",
    "defCn": "努力的终结和厌倦的开始。"
  },
  {
    "id": 22,
    "word": "acknowledge",
    "pos": "v",
    "cnWord": "承认",
    "defEn": "To confess. Acknowledgement of one another's faults is the highest duty imposed by our love of truth.",
    "defCn": "坦白，彼此间承认缺点是热爱真理授予我们的最高职责。"
  },
  {
    "id": 23,
    "word": "acquaintance",
    "pos": "n",
    "cnWord": "熟人",
    "defEn": "A person whom we know well enough to borrow from, but not well enough to lend to. A degree of friendship called slight when its object is poor or obscure, and intimate when he is rich or famous.",
    "defCn": "就是这么一类人，我们和他们熟悉到可以向他们借钱，但是没有熟悉到可以借钱给他们。这种友谊 , 在对方贫贱时朴远 ,对方闻达时亲密。"
  },
  {
    "id": 24,
    "word": "acrobat",
    "pos": "n",
    "cnWord": "杂要演员",
    "defEn": "A muscular!, well-conditioned fellow. A man who breaks his back to fill his belly. SRF.",
    "defCn": "一位肌肉发达，训练良好的家伙，为了塞饱肚皮，他居然不怕摔断"
  },
  {
    "id": 25,
    "word": "actually",
    "pos": "adv",
    "cnWord": "实际上",
    "defEn": "Perhaps; possibly.",
    "defCn": "也许，可能。"
  },
  {
    "id": 26,
    "word": "adage",
    "pos": "n",
    "cnWord": "格言",
    "defEn": "Boned wisdom for weak teeth.",
    "defCn": "为脆弱的牙齿准备的史掉骨头的智慧。"
  },
  {
    "id": 27,
    "word": "adder",
    "pos": "n",
    "cnWord": "费用故此得名",
    "defEn": "A species of snake. So called from its habit of adding funeral outlays! to the other expenses of living. eae",
    "defCn": "蛇的一种〈也称宽蛇 )。因为它为全人类的生活费用中增加了未药费用，故此得名。"
  },
  {
    "id": 28,
    "word": "address",
    "pos": "n",
    "cnWord": "演讲",
    "defEn": "A formal discourse, usually delivered to a person who has something ‘ by a person who wants something that he has.",
    "defCn": "演讲是一种正式的言论 , 通常由一位想要某种东西的人讲给有这种东西的人听。"
  },
  {
    "id": 29,
    "word": "adherent",
    "pos": "n",
    "cnWord": "拥护者",
    "defEn": "A follower who has not yet obtained all that he expects to get.",
    "defCn": "尚未得到想要的全部东西的追随者。"
  },
  {
    "id": 30,
    "word": "administration",
    "pos": "n",
    "cnWord": "政府",
    "defEn": "An ingenious’ abstraction in politics, designed to receive the kicks and cuffs’ due to the premier or president. A man of straw, proof against bad-egging and dead-catting.",
    "defCn": "这是政治中的一种巧妙的概括 ,用来抵御由于总理或总统的过错而招致的拳打脚踊。这是一个稻草人，各种罗名它都能担当。"
  },
  {
    "id": 31,
    "word": "admiral",
    "pos": "n",
    "cnWord": "舰队司令",
    "defEn": "That part of a war-ship which does the talking while the figure-head does the thinking.",
    "defCn": "这是军舰上说话的那个零件——至于思考嘛，那是船头雕像的事儿。"
  },
  {
    "id": 32,
    "word": "admiration",
    "pos": "n",
    "cnWord": "赞赏",
    "defEn": "Our polite recognition of another's resemblance to ourselves.",
    "defCn": "对别人与我们相似之处的委婉承认。"
  },
  {
    "id": 33,
    "word": "admonition",
    "pos": "n",
    "cnWord": "拳击",
    "defEn": "Gentle reproof, as with a meat-axe. Friendly warning.",
    "defCn": "温和的责备，就象用斧头劝诫一样。友好的警告。"
  },
  {
    "id": 34,
    "word": "adore",
    "pos": "vt",
    "cnWord": "崇拜",
    "defEn": "To venerate' expectantly.",
    "defCn": "满怀祈求的敬慕。"
  },
  {
    "id": 35,
    "word": "advice",
    "pos": "n",
    "cnWord": "忠告",
    "defEn": "The smallest current coin.",
    "defCn": "面值最小的硬币。"
  },
  {
    "id": 36,
    "word": "affianced",
    "pos": "pp",
    "cnWord": "订婚",
    "defEn": "Fitted with an ankle-ring for the ball-and-chain.",
    "defCn": "为获得一个母夜叉而戴上脚外。"
  },
  {
    "id": 37,
    "word": "affliction",
    "pos": "n",
    "cnWord": "痛苦",
    "defEn": "An acclimatizing” process preparing the soul for another and bitter world.",
    "defCn": "这是一个磨练灵魂，使之能更好的适应另一个痛苦世界的准备过"
  },
  {
    "id": 38,
    "word": "age",
    "pos": "n",
    "cnWord": "老年",
    "defEn": "That period of life in which we compound for’ the vices that we still cherish by reviling! those that we have no longer the enterprise” to commit.",
    "defCn": "在人生的这个阶段 ,我们同那些自己仍然十分珍视的恶行达成了习协，其方法是诅咒那些我们不再有胆量去干的坏事。"
  },
  {
    "id": 39,
    "word": "agitator",
    "pos": "n",
    "cnWord": "煽动者",
    "defEn": "A statesman who shakes the fruit trees of his neighbors -- to dislodge” the worms.",
    "defCn": "一位政客，他专爱去摇晃邻居家的果树，以便把虫子从窝里轰出来。"
  },
  {
    "id": 40,
    "word": "air",
    "pos": "n",
    "cnWord": "空气",
    "defEn": "A nutritious substance supplied by a bountiful’ Providence for the fattening of the poor.",
    "defCn": "这是慷慨的上帝赐予穷人的营养佳品，她使穷人们白白胖胖。"
  },
  {
    "id": 41,
    "word": "alcohol",
    "pos": "n",
    "cnWord": "酒精",
    "defEn": "(Arabic al kohl, a paint for the eyes.) The essential principle of all such liquids as give a man a black eye.",
    "defCn": "《在阿拉伯诸中表示一种涂眼睛的颜料 )所有这种液体的基本原理都是使人眼圈发黑。"
  },
  {
    "id": 42,
    "word": "alderman",
    "pos": "n",
    "cnWord": "总督",
    "defEn": "An ingenious criminal who covers his secret thieving with a pretence of open marauding’.",
    "defCn": "一个足智多谋的混蛋，他假装公开掠夺以掩盖其鼠窃狗盗的真嘴"
  },
  {
    "id": 43,
    "word": "alien",
    "pos": "n",
    "cnWord": "异端",
    "defEn": "An American sovereign in his probationary” state.",
    "defCn": "还在做见习生的美国君主。"
  },
  {
    "id": 44,
    "word": "allah",
    "pos": "n",
    "cnWord": "安拉",
    "defEn": "The Mahometan3 Supreme Being, as distinguished from the Christian, Jewish, and so forth.",
    "defCn": "伊斯兰教的最高神灵，与基督教、犹太教或其它教的神不在同一条道上。"
  },
  {
    "id": 45,
    "word": "alliance",
    "pos": "n",
    "cnWord": "同盟",
    "defEn": "In international politics, the union of two thieves who have their hands so deeply inserted in each other's pockets that they cannot separately plunder a third.",
    "defCn": "国际政治中的两贼联盟，这两贼都把手深深地插在对方的口袋里，因而无法单独去抢掠第三者。"
  },
  {
    "id": 46,
    "word": "alone",
    "pos": "adj",
    "cnWord": "孤单的",
    "defEn": "In bad company.",
    "defCn": "伴侣糟糕，于是感到孤单。"
  },
  {
    "id": 47,
    "word": "altar",
    "pos": "n",
    "cnWord": "祭坛",
    "defEn": "The place whereupon the priest formerly raveled' out the small intestine’ of the sacrificial victim for purposes of divination’ and cooked its flesh for the gods. The word is now seldom used, except with reference to the sacrifice of their liberty and peace by a male and a female tool.",
    "defCn": "这是从前巫师齐出祭品的内脏来占卜，煮肉来敬神的地方。现在这个词少用了，偶尔用来指痴男她女以自己的自由与安宁来献祭的情形。"
  },
  {
    "id": 48,
    "word": "amatory",
    "pos": "adj",
    "cnWord": "性爱的",
    "defEn": "We should blush to murmur it.",
    "defCn": "我们应该连咕味一下这个词也会感到脸发肖。"
  },
  {
    "id": 49,
    "word": "ambidextrous",
    "pos": "adj",
    "cnWord": "善用双手的",
    "defEn": "Able to pick with equal skill a right-hand pocket or a left.",
    "defCn": "能用同样熟练的技巧扒窃左边和右边的口袋。"
  },
  {
    "id": 50,
    "word": "ambition",
    "pos": "n",
    "cnWord": "雄心",
    "defEn": "An overmastering! desire to be vilified by enemies while living and made ridiculous by friends when dead.",
    "defCn": "一种渴望活着被敌人诈毁、死后为友人读笑的强烈欲望。"
  },
  {
    "id": 51,
    "word": "amnesty",
    "pos": "n",
    "cnWord": "大赦",
    "defEn": "The state's magnanimity’ to those offenders whom it would be too expensive to punish. Kit To grease? a king or other great functionary already sufficiently slippery.",
    "defCn": "国家对那些要付出极大的代价才能惩办的罪人的宽恕。涂油把油涂到那些本来已经够圆滑的国王或大臣身上。"
  },
  {
    "id": 52,
    "word": "antipathy",
    "pos": "n",
    "cnWord": "反感",
    "defEn": "The sentiment inspired by one's friend's friend.",
    "defCn": "一种由朋友的朋友激起的情感。"
  },
  {
    "id": 53,
    "word": "aphorism",
    "pos": "n",
    "cnWord": "警句",
    "defEn": "Predigested wisdom.",
    "defCn": "简化的智慧。"
  },
  {
    "id": 54,
    "word": "apologize",
    "pos": "vi",
    "cnWord": "道歉",
    "defEn": "To lay the foundation for a future offence. ie aK",
    "defCn": "为将来的再次冒犯埋下伏笔。"
  },
  {
    "id": 55,
    "word": "apostate",
    "pos": "n",
    "cnWord": "变节者",
    "defEn": "A leech’ who, having penetrated the shell of a turtle only to find that the creature has long been dead, deems it expedient? to form a new attachment to a fresh turtle.",
    "defCn": "这是一条蚂蚁，它好不容易钻透一只乌龟的壳，才发现乌龟早已一命史呼，于是它权衡利弊，决定去依附另一只游动的乌包。"
  },
  {
    "id": 56,
    "word": "apothecary",
    "pos": "n",
    "cnWord": "药剂师",
    "defEn": "The physician's accomplice, undertaker's benefactor and grave worm's provider. BEN, RRP AM RA, BHP RARE. In law, to put the dice into the box for another throw.",
    "defCn": "申诉一种法律行为，把人般子投入盒中准备下次再掷。"
  },
  {
    "id": 57,
    "word": "appetite",
    "pos": "n",
    "cnWord": "胃口",
    "defEn": "An instinct thoughtfully implanted by Providence as a solution to the labor question.",
    "defCn": "为了解决劳动问题，上帝深思熟虑后赋予的一种本能。"
  },
  {
    "id": 58,
    "word": "applause",
    "pos": "n",
    "cnWord": "喝彩",
    "defEn": "The echo of a platitude’.",
    "defCn": "陈词小调的回音。"
  },
  {
    "id": 59,
    "word": "april fool",
    "pos": "n",
    "cnWord": "四月愚人和节",
    "defEn": "The March foo! with another month added to his folly. fh ER.",
    "defCn": "春忙三月的恩人嫌秦事做得不够，于是又追补了一个月的时间，让"
  },
  {
    "id": 60,
    "word": "archbishop",
    "pos": "n",
    "cnWord": "大主教",
    "defEn": "An ecclesiastical’ dignitary one point holier than a bishop’.",
    "defCn": "一个比主教更虔诚的高级牧师。"
  },
  {
    "id": 61,
    "word": "architect",
    "pos": "n",
    "cnWord": "建筑师",
    "defEn": "One who drafts a plan of your house, and plans a draft of your money.",
    "defCn": "这个人一边为你设计房屋，一边执你的钱包。"
  },
  {
    "id": 62,
    "word": "ardor",
    "pos": "n",
    "cnWord": "热情",
    "defEn": "The quality that distinguishes love without knowledge.",
    "defCn": "这是盲目之爱的显著标志。"
  },
  {
    "id": 63,
    "word": "arena",
    "pos": "n",
    "cnWord": "政坛",
    "defEn": "In politics, an imaginary rat-pit in which the statesman wrestles with his record.",
    "defCn": "这是政客们想像的一种老鼠洞 ,政客为打破自己的记录在洞中折腾个不停。"
  },
  {
    "id": 64,
    "word": "aristocracy",
    "pos": "n",
    "cnWord": "贵族",
    "defEn": "Government by the best men. (In this sense the word is obsolete; so is that kind of government.)",
    "defCn": "由最优秀的人组成的政府〈在这个意义上这个词已废弃不用了，这类政府也是如此 )。"
  },
  {
    "id": 65,
    "word": "armor",
    "pos": "n",
    "cnWord": "铠甲",
    "defEn": "The kind of clothing worn by a man whose tailor is a blacksmith.",
    "defCn": "这是供男人们穿的一种服饰，制作它的裁颖是一位铁匠。"
  },
  {
    "id": 66,
    "word": "arrayed",
    "pos": "pp",
    "cnWord": "整齐的",
    "defEn": "Drawn up and given an orderly disposition, as a rioter hanged to a lamppost.",
    "defCn": "井井有条地排列着，就像许多闹事者被抓后吊在灯柱上示众一样。"
  },
  {
    "id": 67,
    "word": "arrest",
    "pos": "vt",
    "cnWord": "逮捕",
    "defEn": "Formally to detain one accused of unusualness.",
    "defCn": "正式拘留某个被指控为与众不同的人。"
  },
  {
    "id": 68,
    "word": "arsenic",
    "pos": "n",
    "cnWord": "砒霜",
    "defEn": "A kind of cosmetic greatly affected by the ladies, whom it greatly affects in turn.",
    "defCn": "夫人们酷爱的一种化妆品，它反过来也很残酷地回报他们。"
  },
  {
    "id": 69,
    "word": "artlessness",
    "pos": "n",
    "cnWord": "纯朴",
    "defEn": "A certain engaging quality to which women attain by long study and severe practice upon the admiring male, who is pleased to fancy it resembles the candid' simplicity of his young.",
    "defCn": "这是妇女经过长期学习并在其崇拜者身上认真实践后才获得的一种迷人的品德 ,她的崇拜者往往乐于把它和自己的小孩的天真和锥拙相提并论。"
  },
  {
    "id": 70,
    "word": "asperse",
    "pos": "v",
    "cnWord": "诽谤",
    "defEn": "Maliciously to ascribe to another vicious actions which one has not had the temptation and opportunity to commit.",
    "defCn": "满怀恶意地把自己想做却没有机会去做的种种恶行加于他人身上。"
  },
  {
    "id": 71,
    "word": "ass",
    "pos": "n",
    "cnWord": "驴子",
    "defEn": "A public singer with a good voice but no ear. In Virginia City, Nevada, he is called the Washoe Canary, in Dakota, the Senator, and everywhere the Donkey. The animal is widely and variously celebrated in the literature, art and religion of every age and country; no other so engages and fires the human imagination as this noble vertebrate’. Indeed, it is doubted by some if it is not a god; and as such we know it was worshiped by the Etruscans’, and, if we may believe Macrobious, by the Cupasians also. Of the only two animals admitted into the Mahometan Paradise along with the souls of men, ; the ass that carried Balaam' is one, the dog of the Seven Sleepers’ the other. This is no small distinction. From what has been written about this beast might be compiled a library of great splendor and magnitude, rivalling that of the Shakespearean cult, and that which clusters about the Bible. It may be said, generally, that all literature is more or less Asinine.",
    "defCn": "一种嗓门儿大却没有音准的大众歌唱家。在内华达州的弗吉尼亚，它被称为Washoe Canary，在达科他州，它被叫做参议员，它更多的称呼是驴子。这畜生在任何时代，任何国家的文学、艺术和宗教中都受到了广泛的称颂。没有哪种兽类能像这个高贵的兰椎动物那样占据人类的思维，激发人类的想像。甚至有人猜测它可能是一个神灵。就我所知，古意大利的伊特拉斯坎人崇拜它，如果才克洛比斯没错的话，丘巴西安人也崇拜它。被允许和人的灵魂一起进入伊斯兰教的乐园的动物有两种，其中之一是驮着巴兰的驴子，另外一个是七贤哲的狗。两者没有大差别。把有关驴子的各种文献葵萃一堂，那可是一个所藏甚丰、和蔚为大观的文库，足以和莎士比亚文库和《圣经》文库相媲美。总的来说，所有的文学或多或少都像驴子一样。"
  },
  {
    "id": 72,
    "word": "auctioneer",
    "pos": "n",
    "cnWord": "拍卖商",
    "defEn": "The man who proclaims with a hammer that he has picked a pocket with his tongue. number of fictional people who for a time were venerated as saints.",
    "defCn": "这种人区着锤子，宣告他用舌头扒了别人的钱包。"
  },
  {
    "id": 73,
    "word": "australia",
    "pos": "n",
    "cnWord": "澳大利亚",
    "defEn": "A country lying in the South Sea, whose industrial and commercial development has been unspeakably retarded’ by an unfortunate dispute among geographers as to whether it is a continent or an island.",
    "defCn": "位于南部海洋中的一个国家。关于这个国家是一块大陆还是一个岛屿，地理学家们进行了一场很不幸的争论，结果导致了这个国家的工业和商业的发展严重滞缓。"
  },
  {
    "id": 74,
    "word": "avenge",
    "pos": "vt",
    "cnWord": "复仇",
    "defEn": "In modern usage, to take satisfaction for an injury by cheating the inflictor’.",
    "defCn": "复仇在现代用法中，是指借某人的手满足我伤害他本人的要求。"
  },
  {
    "id": 75,
    "word": "aversion",
    "pos": "n",
    "cnWord": "厌恶",
    "defEn": "The feeling that one has for the plate after he has eaten its contents, madam. ard) SP",
    "defCn": "吃完盘中的食物之后对盘子的感情，就像对太太一样。:retard ve延迟，使减速"
  },
  {
    "id": 76,
    "word": "baby",
    "pos": "n",
    "cnWord": "婴儿",
    "defEn": "A misshapen creature of no particular age, sex, or condition, chiefly remarkable for the violence of the sympathies and antipathies! it excites in others, itself without sentiment or emotion. There have been famous babes; for example, little Moses, from whose adventure in the bulrushes* the Egyptian hierophants* of seven centuries before doubtless derived their idle tale of the child Osiris being preserved on a floating lotus leaf. B54 J LK Pe SS AY AT AR He SE — Frat OE Tg",
    "defCn": "一种畸形的生物，没有年龄、性特征和社会地位。它主要因能在别人心中激起强烈的同情或厌恶而著称，而它自己却无动于惠。有一些著名的婴儿可以作为范例 ,犹太英雄摩西小时候的冒险事迹，是从公元前七世纪的埃及祭司的纸莎草的一则无聊故事偷来的，后来成为地狱之王"
  },
  {
    "id": 77,
    "word": "bacchus",
    "pos": "n",
    "cnWord": "酒神",
    "defEn": "A convenient deity invented by the ancients as an excuse for getting drunk.",
    "defCn": "这是古人为了给醒酒者提供借口而随口编造出来的神。"
  },
  {
    "id": 78,
    "word": "bachelor",
    "pos": "n",
    "cnWord": "单身汉",
    "defEn": "Aman who woman still investigate.",
    "defCn": "一个女人依旧在调查的男人。"
  },
  {
    "id": 79,
    "word": "back",
    "pos": "n",
    "cnWord": "背部",
    "defEn": "That part of your friend which it is your privilege to contemplate in your adversity’.",
    "defCn": "这是你朋友身体的一部分，专供你在不幸时注视 ?。"
  },
  {
    "id": 80,
    "word": "backbite",
    "pos": "vi",
    "cnWord": "背后说人坏话",
    "defEn": "To speak of a man as you find him when he can't find you.",
    "defCn": "这是一种尴众的情况，当你正在谈论某人时，你看见了他，他却没看见你。7 一个人在困境时，朋友往往纷纷离去，你只能看着他们离去的背影〈( 译者注 )。"
  },
  {
    "id": 81,
    "word": "bait",
    "pos": "n",
    "cnWord": "土匪",
    "defEn": "A preparation that renders the hook more palatable’. The best kind is beauty. wet",
    "defCn": "使钓钧变的美味可口的东西。最好的诱饵是美色。"
  },
  {
    "id": 82,
    "word": "bandit",
    "pos": "n",
    "cnWord": "土匪",
    "defEn": "A person who takes by force from A what A has taken by guile? from B.",
    "defCn": "就是用暴力拿走某人用诡计从他人那里骗来的东西的人。"
  },
  {
    "id": 83,
    "word": "baptism",
    "pos": "n",
    "cnWord": "洗礼",
    "defEn": "A sacred rite of such efficacy that he who finds himself in heaven without having undergone it will be unhappy forever. It is performed with water in two ways -- by immersion’, or plunging, and by aspersion‘, or sprinkling.",
    "defCn": "这是一种功效卓著的神圣仪式，没有受过洗礼的人，即使侥幸升入天堂，也永远得不到欢乐。这种仪式用水举行，方法有两种一一让受礼者浸入水中，或者把水酒在他的头上。"
  },
  {
    "id": 84,
    "word": "barber",
    "pos": "n",
    "cnWord": "理发师",
    "defEn": "A savage whose laceration’ of your cheek is unobserved in the superior torment of his conversation.",
    "defCn": "一位粗鄙之人，在他唆唆不休的残酷折麻下，你往往感觉不到脖子上的刀口。"
  },
  {
    "id": 85,
    "word": "barometer",
    "pos": "n",
    "cnWord": "气压计",
    "defEn": "An ingenious instrument which indicates what kind of weather we are having.",
    "defCn": "一种用以显示我们处在哪种天气之中的精巧仪器。"
  },
  {
    "id": 86,
    "word": "barrack",
    "pos": "n",
    "cnWord": "兵营",
    "defEn": "A house in which soldiers enjoy a portion of that of which it is their business to deprive others.",
    "defCn": "士兵们居住的一种房子，他们享用房子的某一部分，他们的职责却要求他们去摧毁其他人的房子。"
  },
  {
    "id": 87,
    "word": "bastinado",
    "pos": "n",
    "cnWord": "敲脚刑",
    "defEn": "The act of walking on wood without exertion.",
    "defCn": "这是一种敲打脚心的惩罚，让人毫不费劲地在木棒上跳来跳去。"
  },
  {
    "id": 88,
    "word": "bath",
    "pos": "n",
    "cnWord": "沐浴",
    "defEn": "A kind of mystic ceremony substituted for religious worship, with what spiritual efficacy has not been determined.",
    "defCn": "一种用来替代宗教崇拜的神秘仪式，它到底有没有神秘精神效用，"
  },
  {
    "id": 89,
    "word": "battle",
    "pos": "n",
    "cnWord": "战斗",
    "defEn": "A method of untying with the teeth of a political knot that would not yield to the tongue.",
    "defCn": "一种解开政治疙瘤的方法，用舌头解不开，那就用牙齿咬吧。"
  },
  {
    "id": 90,
    "word": "beard",
    "pos": "n",
    "cnWord": "胡须",
    "defEn": "The hair that is commonly cut off by those who justly execrate’ the absurd Chinese custom of shaving the head.",
    "defCn": "被某些人乔去的毛发 , 但这些人却指责中国人剃光头的习惯是巷唐"
  },
  {
    "id": 91,
    "word": "beauty",
    "pos": "n",
    "cnWord": "美貌",
    "defEn": "The power by which a woman charms a lover and terrifies a husband.",
    "defCn": "女人迷住情人，吓死丈夫的力量。"
  },
  {
    "id": 92,
    "word": "befriend",
    "pos": "vi",
    "cnWord": "交友",
    "defEn": "To make an ingrate’.",
    "defCn": "结识一个忘恩负义的人。"
  },
  {
    "id": 93,
    "word": "beg",
    "pos": "v",
    "cnWord": "乞讨",
    "defEn": "To ask for something with an earnestness proportioned to the belief that it will not be given.",
    "defCn": "要求得到某种东西，其诚恳程度是由得到它的把握的大小来决定"
  },
  {
    "id": 94,
    "word": "beggar",
    "pos": "n",
    "cnWord": "乞丐",
    "defEn": "One who has relied on the assistance of his friends.",
    "defCn": "一种依赖朋友救济度日的人。"
  },
  {
    "id": 95,
    "word": "behavior",
    "pos": "n",
    "cnWord": "举止",
    "defEn": "Conduct, as determined, not by principle, but by breeding..",
    "defCn": "即行为。决定一个人的行为的，不是道德准则，而是一个人所受的教养。"
  },
  {
    "id": 96,
    "word": "belladonna",
    "pos": "n",
    "cnWord": "忘恩负义者",
    "defEn": "In Italian a beautiful lady; in English a deadly poison. A striking example of the essential identity of the two tongues. Rati",
    "defCn": "在意大利语中指美艳的贵妇，在英语中却指致命的毒药。这是两种语言之间具有某种本质上的一致性的范例。"
  },
  {
    "id": 97,
    "word": "benedictines",
    "pos": "n",
    "cnWord": "本笃会教士",
    "defEn": "An order of monks otherwise known as black friars!.",
    "defCn": "一群隐修士，也有人称他们为黑色修道士。"
  },
  {
    "id": 98,
    "word": "benefactor",
    "pos": "n",
    "cnWord": "捐助人",
    "defEn": "One who makes heavy purchases of ingratitude, without, however, materially affecting the price, which is still within the means of all.",
    "defCn": "大量采买忘恩负义行为的人，尽管买得多，却并没有因此把单价讨"
  },
  {
    "id": 99,
    "word": "berenice's hair",
    "pos": "n",
    "cnWord": "贝瑞尼斯的头发",
    "defEn": "A constellation? (Coma Berenices) named in honor of one who sacrificed her hair to save her husband.",
    "defCn": "一个星座的名称，以纪念为救丈夫而牺牲自己美发的贝瑞尼斯 ?。"
  },
  {
    "id": 100,
    "word": "bigamy",
    "pos": "n",
    "cnWord": "重婚",
    "defEn": "BRKT RABE. A mistake in taste for which the wisdom of the future will adjudge’ a punishment called trigamy~.",
    "defCn": "3 一埃及和皇后，为使丈夫从征战中平安归来，把自己的秀发献给爱神维纳斯。其秀重婚一种有趣的错误 ,未来的智慧会给重婚者一种严历惩剧一一第三次结婚。"
  },
  {
    "id": 101,
    "word": "bigot",
    "pos": "n",
    "cnWord": "老顽固",
    "defEn": "One who is obstinately and zealously”attached to an opinion that you do not entertain. mle",
    "defCn": "某个人固执地坚持你所不喜欢的某种观点，那他就是一个老项固。"
  },
  {
    "id": 102,
    "word": "billingsgate",
    "pos": "n",
    "cnWord": "下流话",
    "defEn": "The invective” of an opponent.",
    "defCn": "对手对你的一切痛骂和择击都是下流话。"
  },
  {
    "id": 103,
    "word": "birth",
    "pos": "n",
    "cnWord": "出生",
    "defEn": "The first and direst® of all disasters. As to the nature of it there appears to be no uniformity. Castor and Pollux were born from the egg. Pallas came out of a skull. Galatea was once a block of stone. Peresilis, who wrote in the tenth century, avers that he grew up out of the ground where a priest had spilled holy water. It is known that Arimaxus was derived from a hole in the earth, made by a stroke of lightning. Leucomedon was the son of a cavern in Mount Aetna, and I have myself seen a man come out of a wine cellar.",
    "defCn": "”他重婚的两个妻子很可能都会同他离婚，于是才有了第三次婚姻〈译者注 )。出生所有的灾难中最早出现、最为不幸的灾难。关于出生的方式，有很多种。卡斯托尔 :和波吕克斯从蛋中懂出来。帕拉斯 ? 则是从脑袋中钻出来的。伽拉蒜亚 3 曾经是一块顽石。10 世纪的普菜斯利斯则叫喷着他生自牧师酒过圣水的一块士壤。阿利马科斯据说生自雷电在地上当出的一个洞。洛克梅东这是埃特纳火山之子。而我亲眼看见过一个人从酒桶里出世。"
  },
  {
    "id": 104,
    "word": "blackguard",
    "pos": "n",
    "cnWord": "恶棍",
    "defEn": "A man whose qualities, prepared for display like a box of berries in a market -- the fine ones on top -- have been opened on the wrong side. An inverted’ gentleman. ; aH",
    "defCn": "' 斯巴达(Sparta)王廷达柔斯(Tyndareus)被他的兄弟希波科侈(Hippocoom)逐出了他的王国，延达柔斯流浪来到埃托利亚(Aetoiia)国王武提斯奥斯的国度，并要了国王的女儿丽达(Leda)。后来另一英雄赫拉克勒斯(Heracles)战胜了希波科例，将他所有儿子都杀死后，廷达和柔斯就和他的妻子丽达回到斯巴达统治。丽达非常美丽，宙斯看见她后就立刻爱上了她。宙斯化身为一只天鹅，依假到美丽的斯巴达王后丽达身边。完事之后，丽达生下了两颗天和狼重，一颗钥出卡斯托尔(Castom和波吕克斯(Polydeuces)两兄弟，另一颗诞生了克丽泰梅丝特拉(Clytaemnestra)以及天下第一美女海伦(Helen)。2 即雅典娜(罗马又称密涅瓦Minerva)，三女神之一，起初被视为女战神，后逐渐变为智慧女神和雅典城的守护女神。雅典娜的出生极具传奇色彩。在希腊神话中，宣斯因为害怕生出的儿子比自己强大，就将妻子吞入腹中。顿时觉得头痛和欲裂，于是命令火神劈开脑袋，雅典娜就身披铠甲从中跃出。3 古希腊神话里有一个膨刻家叫做皮格马利侈(Pygmalion)，用象牙导刻了一个理想的美女伽拉武亚(Galateaj，并深深地爱上了她。爱神阿芮罗狄蒂(Aphrodite)受到感动，于是将生命赐予伽拉忒亚。一个颠倒的绅士。这种人的优点本来是很显著的，就象市场上做样品的一箱草花一样一一好的在上面，坏的在下面一可惜出了差错，别人从另一面把箱子打开了。"
  },
  {
    "id": 105,
    "word": "blank-verse",
    "pos": "n",
    "cnWord": "无韵诗",
    "defEn": "Unrhymed iambic” pentameters’ -- the most difficult kind of English verse to write acceptably; a kind, therefore, much affected by those who cannot acceptably write any kind. body-snatcher, 7. A robber of grave-worms. One who supplies the young physicians with that with which the old physicians have supplied the undertaker. The hyena’. CEE PRESUME AT A — TM, EEF BEDS IB He EE EB",
    "defCn": "这是一种不押韵的抑扬格五音步诗体一一英语诗歌中最难写好的一种，正是由于这个原因，那些其他任何类型的诗都写不好的人，最喜的内科医生，而那些老江湖的老内科医生则有殡仪馆里的内线供应。这些盗贼是一群喜食人己的替狗。"
  },
  {
    "id": 106,
    "word": "bondsman",
    "pos": "n",
    "cnWord": "保人",
    "defEn": "A foot who, having property of his own, undertakes to become responsible for that entrusted to another to a third.",
    "defCn": "这是一个有家财的傻人，他竟愿去为某人委托给第三者的财产负"
  },
  {
    "id": 107,
    "word": "bore",
    "pos": "n",
    "cnWord": "讨厌鬼",
    "defEn": "A person who talks when you wish him to listen.",
    "defCn": "所谓“讨厌鬼”，是这么一种讨厌的家伙，你希望他乖乖听着，他"
  },
  {
    "id": 108,
    "word": "botany",
    "pos": "n",
    "cnWord": "植物学",
    "defEn": "The science of vegetables -- those that are not good to eat, as well as those that are. It deals largely with their flowers, which are commonly badly designed, inartistic in color, and ili- smelling.",
    "defCn": "这是一门关于蔬菜的学问一一既研究那些爽口的 ,也探讨那些难以下咽的。它主要琢磨的是这些蔬菜的花共，它们造型笨拙，色彩毫不讲究，气味则等得人直想吐。"
  },
  {
    "id": 109,
    "word": "boundary",
    "pos": "n",
    "cnWord": "边境",
    "defEn": "In political geography, an imaginary line between two nations, separating the imaginary rights of one from the imaginary rights of the other.",
    "defCn": "这是一个地缘政治学名词，指的是两国之间的一种假想分割线，它把一个国家的假想的权力同另一个国家的假想权力划分开来。"
  },
  {
    "id": 110,
    "word": "bounty",
    "pos": "n",
    "cnWord": "慷慨",
    "defEn": "The liberality of one who has much, in permitting one who has nothing to get all that he can.",
    "defCn": "一个极其富有的人允许一个一无所有的人尽已所能得到一切的大方行为。"
  },
  {
    "id": 111,
    "word": "brain",
    "pos": "n",
    "cnWord": "大脑",
    "defEn": "An apparatus with which we think what we think. That which distinguishes the man who is content to be something from the man who wishes to do something. A man of great wealth, or one who has been pitchforked! into high station, has commonly such a headful of brain that his neighbors cannot keep their hats on. In our civilization, and under our republican form of government, brain is so highly honored that it is rewarded by exemption” from the cares of office.",
    "defCn": "这是一种我们以为的用于思考的仪器 , 它把甘愿是某种东西的人同希望做某件事情的人区分开来。一个很富有的人，或者官运亭通，连跳数级的人，往往是大脑太发达而使邻人无地自容、无以为生的人。在我们文明的共和政体下，人们对大脑袋的人是授予殊荣的，它不必领略写字楼的各种麻烦。"
  },
  {
    "id": 112,
    "word": "brandy",
    "pos": "n",
    "cnWord": "白兰地",
    "defEn": "A cordial composed of one part thunder-and-lightning, one part remorse’, two parts bloody murder, one part death-hell-and-the-grave and four parts clarified Satan. Dose, a headful all the time. Brandy is said by Dr. Johnson to be the drink of heroes. Only a hero will venture to drink it.",
    "defCn": "这是一种兴奋剂，它由一份雷电、一份悔恨、两份血胆谋杀、一份坟墓与地狱和四份澄澈的魔鬼构成。理想剂量 : 每时每刻都把脑袋灌满。约翰逊博士 ? 曾说过，白兰地是英雄们的饮料，只有英雄才敢冒险地喝"
  },
  {
    "id": 113,
    "word": "bribe",
    "pos": "n",
    "cnWord": "贿赂",
    "defEn": "That which enables a member of the Californian Legislature to live on his pay without any dishonest economies.",
    "defCn": "它使加利福尼亚的立法委员能够依靠自己的收入过活，而不必触摸任何不洁的钞票。"
  },
  {
    "id": 114,
    "word": "bride",
    "pos": "n",
    "cnWord": "新娘",
    "defEn": "A woman with a fine prospect of happiness behind her.",
    "defCn": "一个把美好前程抛诸身后的女人。"
  },
  {
    "id": 115,
    "word": "brute",
    "pos": "n",
    "cnWord": "野兽",
    "defEn": "See husband. ge 22> SL gs ea SE Ss yy = ee Ne ate teh",
    "defCn": "参见“丈夫”一词。"
  },
  {
    "id": 116,
    "word": "caaba",
    "pos": "n",
    "cnWord": "麦加黑石",
    "defEn": "A large stone presented by the archangel’ Gabriel to the patriarch” Abraham, and preserved at Mecca. The patriarch had perhaps asked the archangel for bread.",
    "defCn": "这是天使的头目加百列 ? 赏给人类老祖宗亚伯拉罕的一块大石头，现存于麦加 *。也许亚伯拉罕向加百利奶求的是面包。3 加百列，原七大天使之一，职务为警卫长，原为天使阶。4 麦加(Mecca)是伊斯兰教的第一圣地，伊斯兰教创始人穆罕默德就诞生在这里。穆罕默德在麦加创立和传播伊斯兰教，由于遭到反对和迫害，在公元 622 年迁往麦地那，在麦地那决定把礼拜的方向朝向麦加，从此，世界各地穆斯林都朝向麦加作礼拜。公元 630 年，穆罕默德率兵攻占麦加，控制了守护克和尔白圣典之权，并废弃多神教，把圣殿改为伊斯兰教清真地。麦加城中心的这座大清真地〈又称禁夺 )是称斯林最神圣的地方，总面积 16 万平方米，可容 30 万穆斯林同时做礼拜。"
  },
  {
    "id": 117,
    "word": "cabbage",
    "pos": "n",
    "cnWord": "甘蓝",
    "defEn": "A familiar kitchen-garden vegetable about as large and wise as a man's head. The cabbage is so called from Cabagius, a prince who on ascending the throne issued a decree appointing a High Council of Empire consisting of the members of his predecessor's Ministry and the cabbages in the royal garden. When any of his Majesty's measures of state policy miscarried conspicuously it was gravely announced that several members of the High Council had been beheaded’, and his murmuring subjects were appeased’.",
    "defCn": "一种大家熟识的蔬菜，它和人的脑袋大小相仿，聪明程度也相差无几。甘蓝取自卡巴丘斯王子，他一登上王位就发布命令成立帝国最高政务会，其成员包括前任内阁成员和皇家植物园里的甘蓝。每当他的治国措施失败，他就会严令昭示天下 : 帝国最高政务会里的几个成员已被斩首示众。于是怨言不断的子民们受到了抚慰，又变得心平气和了。"
  },
  {
    "id": 118,
    "word": "calamity",
    "pos": "n",
    "cnWord": "灾难",
    "defEn": "A more than commonly plain and unmistakable reminder that the affairs of this life are not of our own ordering. Calamities are of two kinds: misfortune to ourselves, and good fortune to others.",
    "defCn": "这东西最能准确无误地提醒我们 : 我们此生的事情不是我们自己能安排得了的。灾难有两种类型 : 一种是我们自己的倒霉，另一种是别人的走运。"
  },
  {
    "id": 119,
    "word": "callous",
    "pos": "adj",
    "cnWord": "硬心肠的",
    "defEn": "Gifted with great fortitude’ to bear the evils afflicting another. When Zeno was told that one of his enemies was no more he was observed to be deeply moved. \"What!\" said one of his disciples, \"you weep at the death of an enemy?\" \"Ah, ‘tis true,\" replied the great Stoic; \"but you should see me smile at the death of a friend.\"",
    "defCn": "内心坚韧，能项住别人所带来的种种痛苦的不幸。当芝庶 ?得知他的一个论战对头离开了人世时，他的学生们发觉他十分悲居。“搞不懂 !”他的一个学生问道 :“难道你为一个对头的死而Rie?”“是的，是这样 .”了不起的芝诺回答说 ,“不过，你会看到我为一个朋友的丧命而微笑。”"
  },
  {
    "id": 120,
    "word": "calumnus",
    "pos": "n",
    "cnWord": "诽谤者",
    "defEn": "A graduate of the School for Scandal.",
    "defCn": "造谣学院的一名毕业生。"
  },
  {
    "id": 121,
    "word": "camel",
    "pos": "n",
    "cnWord": "四足动物",
    "defEn": "A quadruped3 (the Splaypes humpidorsus) of great value to the show business. There are two kinds of camels -- the camel proper and the camel improper. It is the latter that is always exhibited.",
    "defCn": "2 公元前 5 世纪希腊哲学家、巴门尼德(Parmenides)门徒、埃利亚学派(Eleaticism)成站nd n四足动物这是娱乐业中一种极有价值的四蹄兽。骆驼分为两类一一一类是合乎礼仪的，另一类是不成体统的。为捞大钱用于展览的骆驼总是属于后一类。"
  },
  {
    "id": 122,
    "word": "cannibal",
    "pos": "n",
    "cnWord": "食人生番",
    "defEn": "A gastronome! of the old school who preserves the simple tastes and adheres to the natural diet of the pre-pork period.",
    "defCn": "这是老派的美食家。他保持着朴素的口味，在猪肉进入大众菜谱之前，他们还是习惯于这种很容易弄到手的天然食物。"
  },
  {
    "id": 123,
    "word": "cannon",
    "pos": "n",
    "cnWord": "大炮",
    "defEn": "An instrument employed in the rectification’ of national boundaries.",
    "defCn": "一种用来校正国家边界的仪器。"
  },
  {
    "id": 124,
    "word": "capital",
    "pos": "n",
    "cnWord": "首都",
    "defEn": "The seat of misgovernment. That which provides the fire, the pot, the dinner, the table and the knife and fork for the anarchist? ; the part of the Tepast 4 that himself supplies is the disgrace before meat. Capital Punishment, a penalty regarding the justice and expediency” of which many worthy persons -- including all the assassins -- entertain grave misgivings’.",
    "defCn": "统而不治的政府的驻地。它为提蛋分子提供火、锅、美食、桌子和刃叉，而为他们自己提供的食物则只是饭桌前的耻辱。“首都的《致命的 )刑罚”，说清楚点，即极刑，这是有关社会正义还是权宜之计的一种刑罚 , 许多高贵的人物一一当然也包括所有的刺客们一一用它来款待那些让他们焦虑不安的对头们。"
  },
  {
    "id": 125,
    "word": "carnivorous",
    "pos": "adj",
    "cnWord": "食肉的",
    "defEn": "Addicted to the cruelty of devouring the timorous” vegetarian, his heirs and assigns.",
    "defCn": "就是嗜好野蛮地吞噬胆性的吃素者及其儿女。"
  },
  {
    "id": 126,
    "word": "cartesian",
    "pos": "adj",
    "cnWord": "笛卡尔的",
    "defEn": "Relating to Descartes, a famous philosopher, author of the celebrated dictum’, Cogito ergo sum -- whereby he was pleased to suppose he demonstrated the reality of human existence. The dictum might be improved, however, thus: Cogito cogito ergo cogito sum -- \"I think that I think, therefore I think that I am;\" as close an approach to certainty as any philosopher has yet made.",
    "defCn": "笛卡尔的，牵扯到著名的哲学家笛卡尔。稍卡尔曾写下“我思故我在”的名言一一他洋洋得意地以为他用这句话证明了人类存在的真理。然而，这名名言还可以进一步润饰提高，改成 :“我想我在思，我思故我在 .”这就真靠近真理了，也可以和任何哲学家的论证一决雌雁了。"
  },
  {
    "id": 127,
    "word": "cat",
    "pos": "n",
    "cnWord": "猫",
    "defEn": "A soft, indestructible automaton provided by nature to be kicked when things go wrong in the domestic circle.",
    "defCn": "这是造物主提供的一种柔韧、不可摊毁的自动装置，专供你在家庭生活不愉快是踢来踢去解气的。"
  },
  {
    "id": 128,
    "word": "caviler",
    "pos": "n",
    "cnWord": "吹毛求疵者",
    "defEn": "Acritic of our own work.",
    "defCn": "| 对我们所有的工作都挑毛病的家伙。"
  },
  {
    "id": 129,
    "word": "cemetery",
    "pos": "n",
    "cnWord": "公墓",
    "defEn": "An isolated suburban spot where mourners match lies, poets write at a target and stone-cutters spell for a wager.",
    "defCn": "这是城市中与世隔绝的一个地方。在这里，吊丧者竞相说谎，诗人们带着不可告人的目的写诗，石匠们好挣一笔赌资。"
  },
  {
    "id": 130,
    "word": "centaur",
    "pos": "n",
    "cnWord": "人马",
    "defEn": "One of a race of persons who lived before the division of labor had been carried to such a pitch of differentiation, and who followed the primitive economic maxim!, \"Every man his own horse.\" The best of the lot was Chiron, who to the wisdom and virtues of the horse added the fleetness of man. The scripture story of the head of John the Baptist on a charger shows that pagan’ myths have somewhat sophisticated sacred history.",
    "defCn": "人马乃是一种半人半马的怪人，是生活在劳动分工尚不发达时期的种族。他们最好地体现了一句古老的经济学格言：\"每一个人同时又都是他自己的马。\"人马中最杰出的是基戎，是他把马的智慧与美德和人的灵活完美地融合在了一起。",
    "footnotes": [
      {
        "term": "maxim",
        "pos": "n.",
        "gloss": "格言"
      }
    ]
  },
  {
    "id": 131,
    "word": "childhood",
    "pos": "n",
    "cnWord": "幼年",
    "defEn": "The period of human life intermediate between the idiocy of infancy and the folly of youth -- two removes from the sin of manhood and three from the remorse of age.",
    "defCn": "这是人生的一个阶段，介于婴儿的无知与青年的愚蠢之间，离中年的罪孽有两步距离，离老年的悔恨则有三步之遥。"
  },
  {
    "id": 132,
    "word": "circus",
    "pos": "n",
    "cnWord": "马戏团",
    "defEn": "A place where horses, ponies* and elephants are permitted to see men, women and children acting the fool.",
    "defCn": "3 希腊神话中的人马，他贤明大智、多才多艺、精通音律、医术高明，善长弓箭刀枪、驾驭马车，更精于各种搏击技巧，此外，他还有一种特长，便是预知未来，相传他是由时间之神及海洋女神所生的。马戏团这是允许老马、小马和大象观看男人、女人和孩子扮演傻瓜的地方。"
  },
  {
    "id": 133,
    "word": "clairvoyant",
    "pos": "n",
    "cnWord": "好眼力",
    "defEn": "A person, commonly a woman, who has the power of seeing that which is invisible to her patron, namely, that he is a blockhead!,",
    "defCn": "有着非凡透视能力的人，通常是一个女人。她能看清楚她的男人看不见的东西一一那就是，他不过是个笨蛋。"
  },
  {
    "id": 134,
    "word": "clarionet",
    "pos": "n",
    "cnWord": "单簧管",
    "defEn": "An instrument of torture operated by a person with cotton in his ears.",
    "defCn": "这是一种由一个在耳朵里塞了棉花的人操作的刑具。"
  },
  {
    "id": 135,
    "word": "clergyman",
    "pos": "n",
    "cnWord": "牧师",
    "defEn": "A man who undertakes the management of our spiritual affairs as a method of better his temporal ones.",
    "defCn": "这种人专门为我们办理天国的事务 ,为的是使自己过上美满的尘世"
  },
  {
    "id": 136,
    "word": "clio",
    "pos": "n",
    "cnWord": "克丽奥",
    "defEn": "One of the nine Muses. Clio's function was to preside over history -- which she did with great dignity, many of the prominent citizens of Athens occupying seats on the platform, the meetings being addressed by Messrs. Xenophon, Herodotus and other popular speakers.",
    "defCn": "希腊神话的九位女神之一，克丽奥分管历史，主持有关历史的学术工作一一她主持此事十分敬业 , 许多杰出的雅典人士也庄重地出席了会议，如色诺芬 :'、希罗多德 ?等名士都在会上作了流芳百世的演说。"
  },
  {
    "id": 137,
    "word": "clock",
    "pos": "n",
    "cnWord": "钟",
    "defEn": "A machine of great moral value to man, allaying3 his concern for the future by reminding him what a lot of time remains to him. Unduly desirous of keeping that which many meritorious* persons wish to obtain. iy 2 希 罗 多 德 (Herodotus of Halicarnassus, 484BC~425BC) EH AAW EER, fh",
    "defCn": "这是一种对人类极有道德价值的机器，它告诉他们说还有很多很多的时间，犯不着为未来而担忧。' 色诺芬(Xenophon，公元前 427 一前 3553)，古希腊历史学家、作家。雅典人，苏格拉底的弟子。公元前 401 年参加希腊雇佣军助小居鲁士(Kurush, 约前 424 一前 401)争夺波斯王位 ,未遂 ,次年率军而返。前 396 年投身斯巴达 , 被母邦判处终身放逐。著有《远征记》《希腊史》( 修昔底德《伯罗尼撤战争史》之续编，叙事始于前 411年，止于前 362 年 )以及《回忆苏格拉底》等。《历史》一书得到了人们无比的崇敬，被人们尊称为“历史之父”，这个名称一直沿用到今天。过分地渴求占有很多有功之人想得到的东西。"
  },
  {
    "id": 138,
    "word": "comfort",
    "pos": "n",
    "cnWord": "舒适",
    "defEn": "A state of mind produced by contemplation of a neighbor's uneasiness.",
    "defCn": "一想到邻居坐卧不安就无比兴奋的心情。"
  },
  {
    "id": 139,
    "word": "commendation",
    "pos": "n",
    "cnWord": "赞扬",
    "defEn": "The tribute that we pay to achievements that resembles, but do not equal, our own. Ri",
    "defCn": "对别人的成就的赞赏，这种成就可以和我们的相似，但无法和我们的相匹敌。"
  },
  {
    "id": 140,
    "word": "commerce",
    "pos": "n",
    "cnWord": "商业",
    "defEn": "A kind of transaction in which A plunders from B the goods of C, and for compensation B picks the pocket of D of money belonging to E.",
    "defCn": "财富的一种转移过程一一甲从乙那里抢走两的财物，作为补偿，乙又从丁口袋里扒走属于戊的钱包。"
  },
  {
    "id": 141,
    "word": "commonwealth",
    "pos": "n",
    "cnWord": "联邦",
    "defEn": "An administrative entity operated by an incalculable mnultitude of political parasites’, logically active but fortuitously efficient.",
    "defCn": "这是一种由数不清的政治寄生虫操纵的管理体制 , 从逻辑上讲它颇有活力，但很少有作为。"
  },
  {
    "id": 142,
    "word": "compromise",
    "pos": "n",
    "cnWord": "妥协",
    "defEn": "Such an adjustment of conflicting interests as gives each adversary the satisfaction of thinking he has got what he ought not to have, and is deprived of nothing except what was justly his due.",
    "defCn": "一种对利害冲突的调整。它使对立的各方都觉得自己得到了本不该得到的利益，除了他们分内的东西外什么都没失去。"
  },
  {
    "id": 143,
    "word": "compulsion",
    "pos": "n",
    "cnWord": "强迫",
    "defEn": "The eloquence! of power.",
    "defCn": "强权雄辩的方法。"
  },
  {
    "id": 144,
    "word": "condole",
    "pos": "vi",
    "cnWord": "告诉别人",
    "defEn": "To show that bereavement” is a smaller evil than sympathy.",
    "defCn": "告诉别人 :显示同情比丧失亲人更为不幸。"
  },
  {
    "id": 145,
    "word": "confidant",
    "pos": "n",
    "cnWord": "密友",
    "defEn": "One entrusted by A with the secrets of B, confided’ by him to C.",
    "defCn": "是这样一种人，甲把乙的秘密告诉他，他又把它们告诉丁。"
  },
  {
    "id": 146,
    "word": "congratulation",
    "pos": "n",
    "cnWord": "祝贺",
    "defEn": "The civility of envy.",
    "defCn": "一种有礼貌的嫉妒。"
  },
  {
    "id": 147,
    "word": "congress",
    "pos": "n",
    "cnWord": "国会",
    "defEn": "A body of men who meet to repeal’ laws.",
    "defCn": "它由一伙男人组成，他们在一起碰头，目的是为了和否定法律。"
  },
  {
    "id": 148,
    "word": "connoisseur",
    "pos": "n",
    "cnWord": "行家",
    "defEn": "| A specialist who knows everything about something and nothing about anything else. An old wine-bibber having been smashed in a railway collision, some wine was poured on his lips to revive him. \"Pauillac, 1873,\" he murmured and died.",
    "defCn": "这是一种专家，他对某事物了如指掌，而对其他事物却一无所知。在一次火车撞车事故中，有个老酒鬼被撞得盔态一息，人们为了救活他往他嘴里倒了一点酒。他品着酒，叶叶地说 :“波以拉克酒，1873年产 .”说完，他就死了。"
  },
  {
    "id": 149,
    "word": "conservative",
    "pos": "n",
    "cnWord": "保守派",
    "defEn": "A statesman who is enamored! of existing evils, as distinguished from the Liberal, who wishes to replace them with others.",
    "defCn": "一种陶醉于现存罪恶之中的政治家，他和自由派的区别是，自由派希望用另一些徘亚取代现存的罪恶。"
  },
  {
    "id": 150,
    "word": "consolation",
    "pos": "n",
    "cnWord": "领事",
    "defEn": "The knowledge that a better man is more unfortunate than yourself.",
    "defCn": "得知某个更好的人比你更不幸，于是你感到了奈藉。"
  },
  {
    "id": 151,
    "word": "consul",
    "pos": "n",
    "cnWord": "领事",
    "defEn": "In American politics, a person who having failed to secure and office from the people is given one by the Administration on condition that he leave the country. To seek another's disapproval of a course already decided on.",
    "defCn": "在美国政治中，指的是这样一种人 : 他无力得到人民的拥护而在国内任职，因此政府只好给他一个职位，前提条件是他离开国内。协商征求别人的同意，其实自己早已做了决定。"
  },
  {
    "id": 152,
    "word": "contempt",
    "pos": "n",
    "cnWord": "轻茂",
    "defEn": "The feeling of a prudent man for an enemy who is too formidable safely to be opposed.",
    "defCn": "这是谨慎的人面对过于强大、没法与之对抗的敌人时表现出的一种情感。"
  },
  {
    "id": 153,
    "word": "controversy",
    "pos": "n",
    "cnWord": "辩论",
    "defEn": "A battle in which spittle or ink replaces the injurious cannon-ball and the inconsiderate bayonet",
    "defCn": "这是用唾沫和墨水代替杀伤力巨大的炮弹和毫无体介心的刺刀的一场战斗。"
  },
  {
    "id": 154,
    "word": "convent",
    "pos": "n",
    "cnWord": "修女院",
    "defEn": "| A place of retirement for woman who wish for leisure to meditate upon the vice of idleness.",
    "defCn": "这是专供渴求能末适地思考懒惰之害的女人们隐居的地方。"
  },
  {
    "id": 155,
    "word": "conversation",
    "pos": "n",
    "cnWord": "对话",
    "defEn": "A fair to the display of the minor mental commodities, each exhibitor being too intent upon the arrangement of his own wares to observe those of his neighbor. f&, —Wa ERE 8 CME",
    "defCn": "展览各种琐屑精神商品的市场 ,每一个参展的人一边观看别人的货"
  },
  {
    "id": 156,
    "word": "coronation",
    "pos": "n",
    "cnWord": "加冕",
    "defEn": "The ceremony of investing a sovereign with the outward and visible signs of his divine right to be blown skyhigh with a dynamite’ bomb. me",
    "defCn": "把庄严王权的各种可见标志交给一个国王的仪式 , 把这一切当作一个惊天动地的事件吹吐得九丧云外都听得见。"
  },
  {
    "id": 157,
    "word": "corporal",
    "pos": "n",
    "cnWord": "下士",
    "defEn": "A man who occupies the lowest rung of the military ladder. T+:",
    "defCn": "这是一个军衔最低的男人。"
  },
  {
    "id": 158,
    "word": "corporation",
    "pos": "n",
    "cnWord": "法人",
    "defEn": "An ingenious device for obtaining individual profit without individual responsibility.",
    "defCn": "这是一种巧妙的设置，个人可利用它获利却不用承担任何责任。"
  },
  {
    "id": 159,
    "word": "corpse",
    "pos": "n",
    "cnWord": "尸体",
    "defEn": "A person who manifests the highest possible degree of indifference that is consistent with a civil regard for the solicitude” of others.",
    "defCn": "最冷漠无情的人。"
  },
  {
    "id": 160,
    "word": "corsair",
    "pos": "n",
    "cnWord": "海盗",
    "defEn": "A politician of the seas.",
    "defCn": "大海上的政治家。"
  },
  {
    "id": 161,
    "word": "court fool",
    "pos": "n",
    "cnWord": "法庭的偿瓜",
    "defEn": "The plaintiff.",
    "defCn": "原告。"
  },
  {
    "id": 162,
    "word": "coward",
    "pos": "n",
    "cnWord": "情夫",
    "defEn": "One who in a perilous’ emergency thinks with his legs.",
    "defCn": "在危难之际用双脚思索的人。"
  },
  {
    "id": 163,
    "word": "craft",
    "pos": "n",
    "cnWord": "技巧",
    "defEn": "A fool's substitute for brains. crayfish, 7. A small crustacean* very much resembling the lobster, but less indigestible.",
    "defCn": "傻瓜用以取代头脑的东西。小龙是一种硬壳水生动物，像极了龙虾，不过此种龙虾更易于消化。"
  },
  {
    "id": 164,
    "word": "critic",
    "pos": "n",
    "cnWord": "批评家",
    "defEn": "A person who boasts himself hard to please because nobody tries to please him.",
    "defCn": "一种自称难以被人喜欢的人，因为谁都不能取悦于他。"
  },
  {
    "id": 165,
    "word": "cross",
    "pos": "n",
    "cnWord": "保持中立并广施仁爱",
    "defEn": "An ancient religious symbol erroneously supposed to ay ree owe its significance to the most solemn event in the a . ee history of Christianity, but really antedating ' it by Va ys thousands of years. By many it has been believed to be > ‘ 4) identical with the crux ansata of the ancient phallic” AS (UZ : worship, but it has been traced even beyond all that we a . 人 ie know of that, to the rites of primitive peoples. We have bee a ee to-day the White Cross as a symbol of chastity*, and the ee LA | Red Cross as a badge of benevolent neutrality in war.",
    "defCn": "这是一种很老气的宗教象征物 ,，大家错误地认为它起源于基督教史上最神圣的事情，其实在那事几千年以前它就有了。有不少人相信它起源于古老的生殖器崇拜 , 更有人追溯到我们所知极少的原始部落的种种仪式上去了。今天我们用白十字架象征圣洁，用红十字架表示在战争中保持中立并广施仁爱。"
  },
  {
    "id": 166,
    "word": "cunning",
    "pos": "n",
    "cnWord": "奸诈",
    "defEn": "The faculty that distinguishes a weak animal or person from a strong one. It brings its possessor much mental satisfaction and great material adversity. An Italian proverb says: \"The furrier' gets the skins of more foxes than asses.\"",
    "defCn": "这是一种能力，它把情弱的动物或人区分开来。拥有这种能力的人能得到无限的精神满足，同时也必然遭受巨大的肉体痛苦。难怪一句意大利谚语这样说 :“皮货商要的狐狸皮比驴子皮多得多。”"
  },
  {
    "id": 167,
    "word": "cupid",
    "pos": "n",
    "cnWord": "丘比特",
    "defEn": "| The so-called god of love. This bastard” creation of a barbarous fancy OSE «Was no doubt inflicted upon mythology for the sins Fé of its deities. Of all unbeautiful and inappropriate y 有 conceptions this is the most reasonless and f : f a ™,, offensive. The notion of symbolizing sexual love = bad by a semisexless babe, and comparing the pains of fm me | 4 passion to the wounds of an arrow -- of introducing this pudgy*> homunculus‘ into art grossly to materialize the subtle spirit and suggestion of the work -- this is eminently worthy of the age that, giving it birth, laid it on the doorstep of prosperity.",
    "defCn": "就是所谓的爱神。这个因野蛮的狂想而问世的杂种，无疑使神话因众神的罪区而变得痛苦沉重。在所有丑恶、不合时宜的产儿中，他是最无理人性、最唐突无礼的。竟然用一个性征不全的孩子来象征性爱，把情欲的火烧火类比作小小的箭伤一一竟然把这么一个矮胖的侏儒引入艺术以体现人类最微妙的情感。这样的做法告诉我们一一那个使这个小侏癸问世并把它放在后人面前的时代，和这么个小侏儒倒是挺般配的。"
  },
  {
    "id": 168,
    "word": "curiosity",
    "pos": "n",
    "cnWord": "好奇心",
    "defEn": "An objectionable quality of the female mind. The desire to know whether or not a woman is cursed with' curiosity is one of the most active and insatiable passions of the masculine soul.",
    "defCn": "这是女人心中的一种讨厌的品质。想知道一个女人是和否有可怕的好奇心，这是男人心中最热烈、最难以满足的激情之一。"
  },
  {
    "id": 169,
    "word": "curse",
    "pos": "vt",
    "cnWord": "诅咒",
    "defEn": "Energetically to belabor with a verbal slap-stick. This is an operation which in literature, particularly in the drama, is commonly fatal to the victim. Nevertheless, the liability to a cursing is a risk that cuts but a small figure in fixing the rates of life insurance. iE",
    "defCn": "用言词做大棒有力地痛打别人，这在文学尤其是戏剧中较常见，往往能给挨打者致命的一击。不过，动轰诅咒是有风险的，不利于稳定人寿保险率。"
  },
  {
    "id": 170,
    "word": "cynic",
    "pos": "n",
    "cnWord": "玩世不恭者",
    "defEn": "A blackguard’ whose faulty vision sees things as they are, not as they ought to be. Hence the custom among the Scythians of plucking out a cynic”s eyes to improve his vision. 2% Borg > =, ~~. a. J & a 7-298 on A word formerly much used by the Paphlagonians, the meaning of which is lost. By the learned Dr. Dolabelly Gak it is believed to have been a term of satisfaction, implying the highest possible degree of mental tranquillity. Professor Groke, on the contrary, thinks it expressed an emotion of tumultuous’ delight, because it so frequently occurs in combination with the word jod or god, meaning \"joy.\" It would be with great diffidence” that I should advance an opinion conflicting with that of either of these formidable authorities.",
    "defCn": "这是一种恶棍，他眼睛有毛病，看见的是事物本来的面目，而不是他们应该表现出的样子。难怪赛西亚人 3 有控出玩世不恭者的眼珠以改| 善他的视力的风俗。> 赛西亚，黑海与里海之间一古地名。该死这是住在黑海边上的帕夫拉戈尼亚人以前常挂在嘴上的一个口头禅，其意思是“玩完”。多拉贝里。蔷克博士认为它是一个让人满意的措施，暗示着精神宁静可能达到的最高极限。相反，格洛克教授则断定它表达的是一种狂喜的情绪，表示“快活”因为它是如此频繁地与jod或god一起出现。我将要提出一个与他们冲突的另一种见解，面对着这"
  },
  {
    "id": 171,
    "word": "dance",
    "pos": "vi",
    "cnWord": "跳舞",
    "defEn": "To leap about to the sound of tittering music, preferably with arms about your neighbor's wife or daughter. There are many kinds of dances, but all those requiring the participation of the two sexes have two characteristics in common: they are conspicuously! innocent, and warmly loved by the vicious. !",
    "defCn": "蹈有很多种，不过那些要求男女两性同时参加的所有舞蹈，都有两个共同的特点 : 一使他们显然都是纯洁的，二是那恶的人们都热爱它们。",
    "footnotes": [
      {
        "term": "conspicuously",
        "pos": "adv.",
        "gloss": "显著地，超群地"
      }
    ]
  },
  {
    "id": 172,
    "word": "danger",
    "pos": "n",
    "cnWord": "和危险",
    "defEn": "A savage beast which, when it sleeps, Man girds’ at and despises, But takes himself away by leaps And bounds when it arises. Ser One of the most conspicuous qualities of a man in security.",
    "defCn": "危险是一头凶猛的野兽，它睡着时人类把它嘲笑，一旦它苏醒并站起，人类就会抱头逃窗，溜之大吉。勇敢男人在安全时表现得最为显著的品德之一。"
  },
  {
    "id": 173,
    "word": "datary",
    "pos": "n",
    "cnWord": "教廷审查官",
    "defEn": "A high ecclesiastic official of the Roman Catholic Church, whose important function is to brand the Pope's bulls' with the words Datum Romae. He enjoys a princely revenue and the friendship of God.",
    "defCn": "罗马教廷的高级头目，他的主要任务就是给教皇的旨意盖上“罗马权威”的戳记。他还受到上帝的垂青。"
  },
  {
    "id": 174,
    "word": "dawn",
    "pos": "n",
    "cnWord": "黎明",
    "defEn": "The time when men of reason go to bed. Certain old men prefer to rise at about that time, taking a cold bath and a long walk with an empty stomach, and otherwise mortifying the flesh. They then point with pride to these practices as the cause of their sturdy health and ripe years; the truth being that they are hearty and old, not because of their habits, but in spite of them. The reason we find only robust persons doing this thing is that it has killed all the others who have tried it.",
    "defCn": "有理性的人们上床睡觉的时间。有些老人喜欢在这个时候起床，他们先冲一个凉水澡 , 然后空着肚子走好远的路 , 要不就是上下左右折腾，使皮肉受苦。事后他们会自豪地宣称，正是诸如此类的活动使他们身强体壮，延年益寿。其实，他们那么活蹦乱跳，能活上一大把年纪，并厅是由于那些自我折磨的习惯。我们之所以看到从事诸如此类活动的人个个都很健壮，是因为另一些曾这样自我折磨的人都死掉了。"
  },
  {
    "id": 175,
    "word": "day",
    "pos": "n",
    "cnWord": "天",
    "defEn": "A period of twenty-four hours, mostly misspent'. This period is divided into two parts, the day proper and the night, or day improper -- the former devoted to sins of business, the latter consecrated” to the other sort. These two kinds of social activity overlap’.",
    "defCn": "| 一段二十四小时的时间，大部分时间都是浪费了的。这段时间分为两部分 : 一部分是白天，另一部分是黑夜〈或者说不恰当的白天 ); 前1 者消耗在做生意的罪孽中，后者则在其他的罪莫中虚度了，这两种社会"
  },
  {
    "id": 176,
    "word": "dead",
    "pos": "adj",
    "cnWord": "做完了呼吸的苦役",
    "defEn": "Done with the work of breathing; Done with all the world; The mad race run through to the end; The golden goal attained and found to be a hole!",
    "defCn": "做完了呼吸的苦役，摆脱了世间的干系，疯狂地奔跑到终点，发现那金光闪闪的目的地，不过是一个洞穴而已 !"
  },
  {
    "id": 177,
    "word": "debauchee",
    "pos": "n",
    "cnWord": "纵欲者",
    "defEn": "One who has so earnestly pursued pleasure that he has had the misfortune to overtake it.",
    "defCn": "这种人过于狂热地追逐欢乐 ,不幸的是他跑得太快，把欢乐抛到了身后。"
  },
  {
    "id": 178,
    "word": "debt",
    "pos": "n",
    "cnWord": "债务",
    "defEn": "An ingenious substitute for the chain and whip of the slave-driver.",
    "defCn": "奴隶主的皮著和铁链的巧妙蔡代物。"
  },
  {
    "id": 179,
    "word": "decalogue",
    "pos": "n",
    "cnWord": "顶点全盛时期",
    "defEn": "A series of commandments’, ten in number -- just enough to permit an intelligent selection for observance, but not enough to embarrass the choice. Following is the revised edition of the Decalogue, calculated for this meridian’. Thou shalt no God but me adore: No images nor idols make For Robert Ingersoll to break. Take not God's name in vain; select A time when it will have effect. Work not on Sabbath days at all, But go to see the teams play ball. Honor thy parents. - | That creates for life insurance lower rates. : Kill not, abet not those who kill; ， Thou shalt not pay thy butcher's bill. Kiss not thy neighbor's wife, Unless thine own thy neighbor doth caress Don't steal; thou'lt never thus compete Successfully in business. Cheat. Bear not false witness -- that is low -- But \"hear 'tis rumored so and so.\" Covet thou naught that thou hast not By hook or crook, or somehow, got. GJ. tik RT QPRE HEF,",
    "defCn": "一系列的戒律，共有十条一 -刚好够你明智地选择和遵守，再多几条就会叫你无所适从。以下是经过修订的《十诚》:除了我不要党拜任何上壳，党和拜多了费用太昂焉。不要制作和跪拜偶像，再多也会被罗伯特砸掉。不要徒劳地把耶和华呼叫，要等到有效时才向他祈祷。安息日不要做任何工作，应去球场看玩篮球或足球。要孝投你的父亲和母亲，这样可以减少人寿保险费。不要杀人，也不要支持杀人犯，同样不要向属夫支付买肉的钱。除非他也吻你的妻子。不要偷盗，因为这样不能使你生意兴旺，做生意靠欺骗。不要作伪证一 -这很可耻，但可以说 :“据传事实如此 .”不要存非分之想去疯饥你用捧骗或其他手段没得到的东西。"
  },
  {
    "id": 180,
    "word": "decide",
    "pos": "vi",
    "cnWord": "决定",
    "defEn": "To succumb to’ the preponderance” of one set of influences over another set. A leaf was riven from a tree, j \"I mean to fall to earth,\" said he. : The west wind, rising, made him veer. The east wind rose with greater force. Said he: \"'Twere wise to change my course.\" With equal power they contend. He said: \"My judgment I suspend.\" Down died the winds; the leaf, elate, Cried: \"I've decided to fall straight.\" Just choose your own and we'll not quarrel. Howe'er your choice may chance to fall, You'll have no hand in it at all. GJ.",
    "defCn": "在一系列影响之中，择其强者而从之。一片树叶从树枝向下跌落，西风列起并改变了树叶的方向，转眼东风到起把西风压倒，树叶说 :“向西飞行其实更妙。.”接着是势均力敌，西风对抗东风，树叶说 :“理智告诉我应该悬浮在空中 .”西风和东凤消失，树叶迎然跌落，树叶说 :“我已决定径直落向地面 .”“最初的想法最好嘛 ?”这不是故事的富意，走自己的路得了，我们不会为难你。不管你怎样选择，如何得意，谋事在你，成事在天。噶萨拉斯卡，杰普神父"
  },
  {
    "id": 181,
    "word": "defame",
    "pos": "vi",
    "cnWord": "诽谤",
    "defEn": "To lie about another. To tell the truth about another.",
    "defCn": "说关于别人的谎话，是诽谤。说关于别人的真话，也是诽谤。"
  },
  {
    "id": 182,
    "word": "defenceless",
    "pos": "adj",
    "cnWord": "无自卫能力的",
    "defEn": "Unable to attack.",
    "defCn": "无力进攻的。"
  },
  {
    "id": 183,
    "word": "degenerate",
    "pos": "adj",
    "cnWord": "退化的",
    "defEn": "; Less conspicuously admirable than one's ancestors. The required ten of them to raise a rock or a riot that one of the heroes of the Trojan war’ could have raised with ease. Homer never tires of sneering at suffered him to beg his bread -- a marked instance of returning good for evil, by the way, for if they had forbidden him he would certainly have starved.",
    "defCn": "不如祖上令人倾慕，威名赫赫，与荷马同在一个时代的人们就是最典型的退化案例，他们起码十个人才能举起一块大石头或挑起一场暴乱，而特洛伊的战士们中的任何一个都能轻而易举地做到这一点。荷马总是不知疲倦地嘲笑那些“荀活在当今蝴落时代的人们”大概正是由于这样，他们才让他讨饭过活。如果他们不准荷马乞讨的话，他不饿死才怪，看来荷马的做法是典型的恩将仇报。"
  },
  {
    "id": 184,
    "word": "degradation",
    "pos": "n",
    "cnWord": "堕落",
    "defEn": "One of the stages of moral and social progress from private station to political preferment.",
    "defCn": "社会与道德进步的一个阶段 , 指由草野不问世事之辈变成官场声名显赫之人。"
  },
  {
    "id": 185,
    "word": "dejeuner",
    "pos": "n",
    "cnWord": "午饶",
    "defEn": "The breakfast of an American who has been in Paris.",
    "defCn": "到过巴黎的美国人吃的早饭。"
  },
  {
    "id": 186,
    "word": "delegation",
    "pos": "n",
    "cnWord": "代表团",
    "defEn": "In American politics, an article of merchandise that comes in sets.",
    "defCn": "在美国政界，这表示某种配套的商品交易。"
  },
  {
    "id": 187,
    "word": "deliberation",
    "pos": "n",
    "cnWord": "审慎",
    "defEn": "The act of examining one's bread to determine which side it is buttered on. .",
    "defCn": "就是仔细地翻看面包，以弄清黄油涂在哪一面。"
  },
  {
    "id": 188,
    "word": "deluge",
    "pos": "n",
    "cnWord": "大洪水",
    "defEn": "A notable first experiment in baptism’ which washed away the sins (and sinners) of the world.",
    "defCn": "值得注意的第一次洗礼试验，它洗刷了世界的罪恶，冲走了那些罪"
  },
  {
    "id": 189,
    "word": "delusion",
    "pos": "n",
    "cnWord": "错觉",
    "defEn": "The father of a most respectable family, comprising Enthusiasm, Affection, Self-denial, Faith, Hope, Charity and many other goodly sons and daughters.",
    "defCn": "一个让人非常倾慕的家庭中的慈父 , 这个家庭由热情、友谊、谦虚、| 忠诚、博爱以及别的诸如此类的乖乖儿、乖乖女美满地生活在一起。"
  },
  {
    "id": 190,
    "word": "dentist",
    "pos": "n",
    "cnWord": "牙医",
    "defEn": "A prestidigitator’ who, putting metal into your mouth, pulls coins out of your pocket.",
    "defCn": "一种变戏法的人 , 他一边往你嘴里放金属 , 一边从你口袋里掏金钱。"
  },
  {
    "id": 191,
    "word": "dependent",
    "pos": "adj",
    "cnWord": "依赖的",
    "defEn": "Reliant upon another's generosity for the support which you are not in a position to exact’ from his fears. S exact wt FRIAR, dk",
    "defCn": "寄希望于别人慷慨的支持 ,因为你还没有能力强迫他献出你需要的东西。"
  },
  {
    "id": 192,
    "word": "deputy",
    "pos": "n",
    "cnWord": "代理人",
    "defEn": "A male relative of an office-holder, or of his bondsman. The deputy is commonly a beautiful young man, with a red necktie and an intricate system of cobwebs! extending from his nose to his desk. When accidentally struck by the janitor”s broom, he gives off a cloud of dust.",
    "defCn": "某官员的男性亲友，或者是他的奴仆的男性亲友。代理人通常是一个负俊潇洒的男子，系着一条红色的领带，通过精细复杂的蜘蛛网和办公课连成一气。看门人偶尔用扫山柄敲敲他，从他身上就会腾起一片灰"
  },
  {
    "id": 193,
    "word": "destiny",
    "pos": "n",
    "cnWord": "命运",
    "defEn": "A tyrant's authority for crime and fool's excuse for failure.",
    "defCn": "这是暴君作恶的权力，也是傻瓜失败的借口。"
  },
  {
    "id": 194,
    "word": "diagnosis",
    "pos": "n",
    "cnWord": "诊断",
    "defEn": "A physician's forecast of the disease by the patient's pulse and purse.",
    "defCn": "医生根据患者的脉搏和钱包的情况预测病情。"
  },
  {
    "id": 195,
    "word": "diaphragm",
    "pos": "n",
    "cnWord": "横膈膜",
    "defEn": "A muscular partition’ separating disorders of the chest from disorders of the bowels.",
    "defCn": "把胸腔的紊乱和腹腔的紊乱隔开的一片落肉。"
  },
  {
    "id": 196,
    "word": "diary",
    "pos": "n",
    "cnWord": "日记",
    "defEn": "A daily record of that part of one's life, which he can relate to himself without blushing. Hid",
    "defCn": "一种按日写成的生活纪录 , 不过他记载的只是作者向自己叙述时不会脸红的那一部分生活。"
  },
  {
    "id": 197,
    "word": "dictator",
    "pos": "n",
    "cnWord": "独裁者",
    "defEn": "| The chief of a nation that prefers the pestilence” of despotism’ to the | plague of anarchy’.",
    "defCn": "一种国家元首，较之于无政府主义的灾难，他更喜欢专制主义这种"
  },
  {
    "id": 198,
    "word": "dictionary",
    "pos": "n",
    "cnWord": "词典",
    "defEn": "A malevolent’ literary device for cramping the growth of a language and making it hard and inelastic’. This dictionary, however, is a most useful work.",
    "defCn": "这是一种恶毒的学究式的东西，发明它的目的是妨碍语言的发展，使之变得僵死呆板，不过，这本《魔鬼词典》是一种很有用的工具。"
  },
  {
    "id": 199,
    "word": "diplomacy",
    "pos": "n",
    "cnWord": "外交",
    "defEn": "The patriotic art of lying for one's country.",
    "defCn": "一种为自己国家的利益而说谎的爱国主义艺术。"
  },
  {
    "id": 200,
    "word": "disabuse",
    "pos": "vt",
    "cnWord": "纠正",
    "defEn": "To present your neighbor with another and better error than the one which he has deemed it advantageous to embrace.",
    "defCn": "用另一个稍好一点的错误取代你的邻居自鸣得意的错误。"
  },
  {
    "id": 201,
    "word": "discriminate",
    "pos": "vi",
    "cnWord": "区别",
    "defEn": "To note the particulars in which one person or thing is, if possible, more objectionable” than another.",
    "defCn": "注意某人或某物的独特之处 ,尤其是比别的人或物更令人讨厌的特"
  },
  {
    "id": 202,
    "word": "discussion",
    "pos": "n",
    "cnWord": "讨论",
    "defEn": "A method of confirming others in their errors.",
    "defCn": "一种进一步证实别人错误的方法。"
  },
  {
    "id": 203,
    "word": "disobedience",
    "pos": "n",
    "cnWord": "违命",
    "defEn": "The silver lining to the cloud of servitude’.",
    "defCn": "苦和投的乌云边缘的一丝银色亮光。"
  },
  {
    "id": 204,
    "word": "dissemble",
    "pos": "vi",
    "cnWord": "掩饰",
    "defEn": "To put a clean shirt upon the character.",
    "defCn": "为故事的主人公穿上一件干净的衬衫。"
  },
  {
    "id": 205,
    "word": "distance",
    "pos": "n",
    "cnWord": "距离",
    "defEn": "The only thing that the rich are willing for the poor to call theirs, and keep.",
    "defCn": "这是富人唯一愿意让穷人据为已有的东西。"
  },
  {
    "id": 206,
    "word": "distress",
    "pos": "n",
    "cnWord": "苦恼",
    "defEn": "A disease incurred by exposure to the prosperity of a friend.",
    "defCn": "这是面对朋友走运时所患的疾病。"
  },
  {
    "id": 207,
    "word": "dog",
    "pos": "n",
    "cnWord": "狗",
    "defEn": "A kind of additional or subsidiary ' Deity designed to catch the overflow and surplus of the world's worship. This Divine Being in some of his smaller and silkier incarnations takes, in the IN affection of Woman, the place to which there is no 过 human male aspirant’. The Dog is a survival -- an 了 H 村 anachronism’. He toils not, neither does he spin, yet by * Solomon in all his glory never lay upon a door-mat all day long, sun-soaked and fly-fed and fat, while his master worked for the means wherewith to purchase the idle wag of the Solomonic’ tail, seasoned with a look of tolerant recognition.",
    "defCn": "这是主创造世界时作为搭头的一种圣物 , 为的是满足人类的日益增长的崇拜需求。这种神物偶尔现形为一种身材娇小、满身绒毛的尤物，深受女士们的亲睐，就连尘世的男人们，在它面前也自叹弗如。狗是一种侥幸存活下来的动物一一这也许是一个时代的错误。它勿需操劳，不必为生机四处转悠。瞧瞧，它成天趴在门边的擦鞋垫上晒太阳，心宽体胖，任苍蝇在身边喻喻乱飞，而它的主人一天到晚忙忙碌碌，为的就是让那尾巴仁慈而慷慨地晃悠几下。"
  },
  {
    "id": 208,
    "word": "dragoon",
    "pos": "n",
    "cnWord": "骑兵",
    "defEn": "A soldier who combines dash and steadiness in so equal measure that he makes his advances on foot and his retreats on horseback.",
    "defCn": "一个战士 , 他把冲刺与稳健如此和谐地融为一体 , 挺进时步履沉稳，撤退时纵马狂奔。"
  },
  {
    "id": 209,
    "word": "dramatist",
    "pos": "n",
    "cnWord": "剧作家",
    "defEn": "One who adapts plays from the French.",
    "defCn": "一个善于改编法国剧本的人。"
  },
  {
    "id": 210,
    "word": "druids",
    "pos": "n",
    "cnWord": "抵押",
    "defEn": "Priests and ministers of an ancient Celtic religion which did not disdain! to employ the humble allurement” of human sacrifice. Very little is now known about the Druids and their faith. Pliny says their religion, 一 一 ~ originating in Britain, spread eastward as far as /@ < Persia. Caesar says those who desired to study its | RN VF ai\\ mysteries went to Britain. Caesar himself went to (Ad | HAN Britain, but does not appear to have obtained any \\) 4 及 a high preferment in the Druidical Church, although il aie) 1 | his talent for human sacrifice was considerable. iB I lly if j | Druids performed their religious rites in groves® , and BBA Sf hy knew nothing of church mortgages* and the season-ticket system of pew! rents. They were, in short, heathens and -- as they were once complacently” catalogued by a distinguished prelate’ of the Church of England -- Dissenters.",
    "defCn": "古代凯尔特人的神父和和祭司，这一教派以人为祭品，并不觉得这是什么粗劣的手段。有关这类巫师及其信仰，现代人所知甚少。古罗马的普林尼“说这种宗教来自不列颠，后来往东流传到波斯。据凯撒大帝说那些好奇的人都跑到不列颠去了。凯撒也去过，不过他对凯尔特人的这种崇拜好像不太感冒，尽管他在人你方面也毫不逊色。凯尔特巫师喜欢在树丛中举行祭礼，他们尚不懂得向教友们发行抵押债券，也没想到征收教堂板使税。概言之，他们是异教徒，英国国教的一位主教曾洋洋得意得给他们取了名字 : 不信国教者。"
  },
  {
    "id": 211,
    "word": "duck-bill",
    "pos": "n",
    "cnWord": "鸭嘴兽",
    "defEn": "Your account at your restaurant during the canvas-back® season. Bee",
    "defCn": "吃野鸭季节时，你在餐厅要付的账单。* 普林尼是罗马最有名的博物学家。他和瓦罗。赛尔苏斯一起，是罗马时代三个最伟大的百科全书作家。普林尼的主要贡献是《自然史》。这部著作在中世纪时，被认为是已有的关于自然界一切知识的宝库。这部著作共有 37 卷之多，内容包括所有的自然界和人类的技艺技术。在这部著作中，他广征博引了大量事实和观察的结果，这些都是从 2000 多种前人的著作中搜集来的。在这些著作中的作者中，有 146个罗马人，326 个希腊人。"
  },
  {
    "id": 212,
    "word": "duel",
    "pos": "n",
    "cnWord": "决斗",
    "defEn": "A formal ceremony preliminary to the reconciliation of two enemies. Great skill is necessary to its satisfactory observance; if awkwardly performed the most unexpected and deplorable! consequences sometimes ensue. de}",
    "defCn": "在两个敌对者握手言欢之前举行的正式仪式。一场令人满意的决斗需要的诀窍多极了，谁要是呆头呆脑、笨手笨脚，就可能承担惨不忍睹的意外结局。"
  },
  {
    "id": 213,
    "word": "duty",
    "pos": "n",
    "cnWord": "职责",
    "defEn": "That which sternly impels us in the direction of profit, along the line of desire. a S ¢ SS ht oS pay ee. eo Ear es 2 = 2 eT |",
    "defCn": "这东西严厉地驱使我们服从和欲望，向利益所在的方向前进。"
  },
  {
    "id": 214,
    "word": "eat",
    "pos": "vi",
    "cnWord": "吃",
    "defEn": "To perform successively (and successfully) the functions of mastication’, humectation”, and deglutition3.",
    "defCn": "接连不断且熟练地施展嚼碎、淆混和下咽的功能。"
  },
  {
    "id": 215,
    "word": "eavesdrop",
    "pos": "vi",
    "cnWord": "偷听",
    "defEn": "Secretly to overhear a catalogue of the crimes and vices of another or yourself.",
    "defCn": "秘密地听到有人在谈论别人或你的种种劣迹。"
  },
  {
    "id": 216,
    "word": "eccentricity",
    "pos": "n",
    "cnWord": "怪癖",
    "defEn": "A method of distinction so cheap that fools employ it to accentuate! their incapacity.",
    "defCn": "这是一种很方便的引人注目的好法子，傻瓜们常用它来显示他们的无能。",
    "footnotes": [
      {
        "term": "accentuate",
        "pos": "v.",
        "gloss": "着重强调"
      }
    ]
  },
  {
    "id": 217,
    "word": "economy",
    "pos": "n",
    "cnWord": "合算",
    "defEn": "Purchasing the barrel of whiskey that you do not need for the price of the cow that you cannot afford.",
    "defCn": "1)用买不到一头奶牛的高价去买一桶你并不需要的威士忌。"
  },
  {
    "id": 218,
    "word": "edible",
    "pos": "adj",
    "cnWord": "可口的",
    "defEn": "Good to eat, and wholesome to digest, as a worm to a toad, a toad to a snake, a snake to a pig, a pig to a man, and a man to a worm.",
    "defCn": "有营养，味道好，易消化，保健康，蛆虫对蛤蜡如此，蛤蜡对蛇也是这样，蛇对猪如此，猪对人也是这样，人对蛆虫当然更是如此。"
  },
  {
    "id": 219,
    "word": "editor",
    "pos": "n",
    "cnWord": "编辑",
    "defEn": "A person who combines the judicial functions of Minos, Rhadamanthus and Aeacus, but is placable” with an obolus® ; a severely virtuous censor, but so charitable withal that he tolerates the virtues of others and the vices of himself; who flings about him the splintering lightning and sturdy thunders of admonition” till he resembles a bunch of firecrackers petulantly? uttering his mind at the tail of a dog; then straightway murmurs a mild, melodious lay, soft as the cooing* of a donkey intoning? its prayer to the evening star. Master of mysteries and lord of law, high-pinnacled® upon the throne of thought, his face suffused’ with the dim splendors of the Transfiguration’, his legs intertwisted and his tongue a-cheek, the editor spills his will along the paper and cuts it off in lengths to suit. And at intervals from behind the veil of the temple is heard the voice of the foreman demanding three inches of wit and six lines of religious meditation, or bidding him turn off the wisdom and whack up some pathos’. BON AAR, FRAT. BED ATE Liki), RR",
    "defCn": "这是一个审判官，他集米诺斯、拉达曼斯、艾亚哥斯（阴间地狱三判官）的仲裁天赋于一身，不过，只需扔上一枚小钱，他就会前来。他是一个德高望重的严厉的监察官，但以慈善为怀，能够忍受他人的美德和自己的恶行。他向上下左右施放忠告与训诫的电闪雷鸣，活像一串爱发脾气的鞭炮，看见狗尾摇晃几下都要噼里啪啦响个一阵。不过接下来他又会喁喁低语，哼一支美妙的小夜曲，就像驴子向黄昏的星星祷告时那么温柔。他掌握着各种机密，操纵起各项法律，高踞在思想法庭的王位之上，犹如十字架上的基督一样让人望而生畏。他跷起一条腿，搁在自己的另一条腿上，开始大刀阔斧、随心所欲地在稿件上砍砍切切，尽管不哼不哈，他的脸庞都会放射出无比的神采。在休庭期间，从法庭的帷幕后面，传来陪审长的声音，要求三寸机智和六行宗教冥思，或者要求他从稿件上删除智慧，贴上一些哀婉缠绵的滥调。",
    "footnotes": [
      {
        "term": "withal",
        "pos": "adv.",
        "gloss": "此外，又"
      },
      {
        "term": "admonition",
        "pos": "n.",
        "gloss": "警告"
      }
    ]
  },
  {
    "id": 220,
    "word": "education",
    "pos": "n",
    "cnWord": "利己主义者",
    "defEn": "That which discloses to the wise and disguises from the foolish their lack of understanding.",
    "defCn": "! 教育它向智者揭露他们的无知，却帮有愚人遮掩他们的无知。"
  },
  {
    "id": 221,
    "word": "effect",
    "pos": "n",
    "cnWord": "结果",
    "defEn": ": The second of two phenomena which always occur together in the | same order. The first, called a Cause, is said to generate the other -- which is no more sensible than it would be for one who has never seen a dog except in the pursuit of a rabbit to declare the rabbit the cause of a dog.",
    "defCn": "永远按相同的顺序出现的两种现象中的第二种，第一种现象叫作再未见其它狗的人，因果关系是难以明辩的，他会说是因为有了免子，世界才有狗的。"
  },
  {
    "id": 222,
    "word": "egotist",
    "pos": "n",
    "cnWord": "利己主义者",
    "defEn": "A person of low taste, more interested in himself than in me.",
    "defCn": "一种低级趣味的人，他关心自己胜过关心我。"
  },
  {
    "id": 223,
    "word": "ejection",
    "pos": "n",
    "cnWord": "驱逐",
    "defEn": "An approved remedy for the disease of garrulity’. It is also much used in cases of extreme poverty.",
    "defCn": "一种广受嘉许的治疗饶舌病的办法，人们也用它来治疗赤贫。"
  },
  {
    "id": 224,
    "word": "elector",
    "pos": "n",
    "cnWord": "选民",
    "defEn": "One who enjoys the sacred privilege of voting for the man of another man's choice.",
    "defCn": "这种人享有一种威严的特权，那就是为别人早已选好的人投票。"
  },
  {
    "id": 225,
    "word": "electricity",
    "pos": "n",
    "cnWord": "电",
    "defEn": "The power that causes all natural phenomena not known to be caused by something else. It is the same thing as lightning, and its famous attempt to strike Dr. Franklin is one of the most picturesque y, incidents in that great and good man's career. The v4 memory of Dr. Franklin is justly held in great ie reverence, particularly in France, where a waxen” va effigy’ of him was recently on exhibition, bearing ms the following touching account of his life and f services to science: after having made several voyages around the world, died on the Sandwich Islands and was devoured by savages, of whom not a single fragment was ever recovered.\" Electricity seems destined to play a most important part in the arts and industries. The question of its economical application to some purposes is still unsettled, but experiment has already proved that it will propel a street car better than a gas jet and give more light than a horse.",
    "defCn": "我们可以认为所有原因不明的自然现象都是它捣的鬼。闪电和电是一码子事，它对富兰克林博士的名气的一击也就成全了这位伟大而又仁慈的人最让人谈论不已的一个事件。后辈们对富博士怀有极大的崇敬，在法兰西更是如此，最近在法国还展出了他的一尊蜡像，蜡像底座上刻着有关他生活与科学活动的令人揪心的述说：\"富兰克林先生，电的发明者。在做了几次环球旅行后，这位超凡的学者在三明治岛被一帮野人吃掉了，未能找回一块遗体。\"电似乎注定要在艺术和工业中充当重要的角色。虽然在某些方面，它的经济适用性还悬而未决，但在实验室中已表明，用它推动街上跑来跑去的车子肯定比汽油发动机强，它放出的光比一匹马是强多了。"
  },
  {
    "id": 226,
    "word": "elegy",
    "pos": "n",
    "cnWord": "专家",
    "defEn": "A composition in verse, in which, without employing any of the methods of humor, the writer aims to produce in the reader's mind the dampest kind of dejection'. ek",
    "defCn": "这是一种押韵的文字，作者在创作它时据弃了一切幽黑手法，干方百计想在读者心中唤起种种最为诅丧的心情。"
  },
  {
    "id": 227,
    "word": "eloquence",
    "pos": "n",
    "cnWord": "雄辩",
    "defEn": "The art of orally persuading fools that white is the color that it appears to be. It includes the gift of making any color appear white.",
    "defCn": "这是一种使傻瓜们臣服的口才一一说白的就是白的 , 也包括让任何颜色看起来都像白色的本事。"
  },
  {
    "id": 228,
    "word": "elysium",
    "pos": "n",
    "cnWord": "天堂",
    "defEn": "An imaginary delightful country which the ancients foolishly believed to be inhabited by the spirits of the good. This ridiculous and mischievous” fable was swept off the face of the earth by the early Christians -- may their souls be happy in Heaven!",
    "defCn": "想像中充满欢乐的王国，先人电价地相信那是善人灵魂的乐土。早先的基督徒已把这种可笑而有害的寅言从大地上一扫而空一一因为他们对死者祷祷，愿他的灵魂在天堂快活无比 !"
  },
  {
    "id": 229,
    "word": "emancipation",
    "pos": "n",
    "cnWord": "解放",
    "defEn": "A bondman”'s change from the tyranny of another to the despotism of himself.",
    "defCn": "努力摆脱别人的暴政，建立起自己的独裁统治。"
  },
  {
    "id": 230,
    "word": "embalm",
    "pos": "vi",
    "cnWord": "防腐",
    "defEn": "To cheat vegetation by locking up the gases upon which it feeds. By embalming’ their dead and thereby deranging’ the natural balance between animal and vegetable life, the Egyptians made their once fertile and populous country barren and incapable of supporting more than a meagre* crew. The modern metallic burial casket is a step in the same direction, and many a dead man who ought now to be ornamenting his neighbor's lawn as a tree, or enriching his table as a bunch of radishes, is doomed to a long inutility*, We shall get him after awhile if we are spared, but in the meantime the violet and rose are languishing for a nibble at his g/utoeus maximus.",
    "defCn": "愚并植物，办法是把植物赖以为生的东西包衷隔绝开来，防止这东西腐烂，以期打乱植物和动物之间颇为协调的转化平衡。埃及人就热衷于对死者进行防腐处理，结果弄得他们那一度土地肥美、人烟繁茂的强国变成了贫状的不毛之地。现代的钢铁棺材也与防腐剂一样起着同样的功效，很多死去的人本来早就该转化成一棵树去装饰他邻人的芳草地了，或者早就该变作红葛卜使邻人的餐桌烤烟生辉了。现在倒好，他们的尸体腐烂不掉，果在地下一点用处都派不上。当然唆，从长远看，只要我们人类活下去，这些废物总会有用的。但与此同时，紫罗兰、玫瑰这些漂亮的花儿都不得不忍受它的臭气。"
  },
  {
    "id": 231,
    "word": "emotion",
    "pos": "n",
    "cnWord": "激动",
    "defEn": "A prostrating' disease caused by a determination of the heart to the head. It is sometimes accompanied by a copious” discharge of hydrated? chloride* of sodium? from the eyes.",
    "defCn": "由于血液从四面八方涌向心脏而导致的一种脑力衰竭症，有时还表现为从双眼排放出大量的氯化钠溶液。",
    "footnotes": [
      {
        "term": "chloride",
        "pos": "n.",
        "gloss": "[化]氧化物"
      }
    ]
  },
  {
    "id": 232,
    "word": "encomiast",
    "pos": "n",
    "cnWord": "奉承者",
    "defEn": "A special (but not particular) kind of liar. enough, pro. All there is in the world if you like it.",
    "defCn": "一种特殊的但不是独一无二的撒谎者。足够如果你愿意的话，世界上的任何东西对你来说都是足够的。"
  },
  {
    "id": 233,
    "word": "enthusiasm",
    "pos": "n",
    "cnWord": "化氯化物",
    "defEn": "A distemper' of youth, curable by small doses of repentance in connection with outward applications of experience. Byron, who recovered long enough to call it \"entuzy-muzy,\" had a relapse”, which carried him off° -- to Missolonghi. A. KRERER. SHHACHL, BAP RIA, WEB",
    "defCn": "这是年轻人常得的一种疾病，内服小剂量的悔恨，外敷一些经验的又犯了，致使他跑到希腊的密索隆基，那里阳光灿烂，古典又浪漫，不过他最后病死在那里。"
  },
  {
    "id": 234,
    "word": "envelope",
    "pos": "n",
    "cnWord": "信封",
    "defEn": "The coffin of a document; the scabbard* of a bill; the husk of a",
    "defCn": "; 这是文件的棺材，账单的刀靖，汇款的外套，情书的睡袍。"
  },
  {
    "id": 235,
    "word": "envy",
    "pos": "n",
    "cnWord": "嫉妒",
    "defEn": "Emulation® adapted to the meanest capacity. ely",
    "defCn": "一种最无力的竞争。"
  },
  {
    "id": 236,
    "word": "epaulet",
    "pos": "n",
    "cnWord": "肩章",
    "defEn": "An ornamented badge, serving to distinguish a military officer from the enemy -- that is to say, from the officer of lower rank to whom his death would give promotion.",
    "defCn": "一种颇富装饰性的徽章，用于把一名军宫同他的敌人划分开来，所谓他的敌人，也就是军衔比他低，会因他的送命而填补空缺的军官。"
  },
  {
    "id": 237,
    "word": "epicure",
    "pos": "n",
    "cnWord": "美食家",
    "defEn": "An opponent of Epicurus, an abstemious' philosopher who, holding that pleasure should be the chief aim of man, wasted no time in gratification from the senses.",
    "defCn": "伊壁鸠鲁 ? 的对头，一种讲究饮食的哲学家，他断定人生的主要有目标是肉体的享乐〈主要在嘴上 )，因此他不会为满足理性的需要而浪费光阴。"
  },
  {
    "id": 238,
    "word": "epigram",
    "pos": "n",
    "cnWord": "警句",
    "defEn": "A short, sharp saying in prose or verse, frequently characterize by acidity; or acerbity4 and sometimes by wisdom. Following are some of the more notable epigrams of the learned and ingenious Dr. Jamrach Holobom: We know better the needs of ourselves than of others. To serve oneself is economy of administration. In each human heart are a tiger, a pig, an ass and a nightingale! ， Diversity of character is due to their unequal activity. There are three sexes; males, females and girls. Beauty in women and distinction in men are alike in this: they seem to be the unthinking a kind of credibility. Women in love are less ashamed than men. They have less to be ashamed of. While your friend holds you affectionately by both your hands you are safe, for you can watch both his.",
    "defCn": "一种短小而尖酸刻薄的话，往往押韵，有时还能显现出一丝智慧。以下是才华横溢的贾姆拉赫·霍罗伯姆众多警句中的精品：\n我们对自己的需求了如指掌，对别人的急难置若罔闻。为自己服务是政府奉行的利益原则。\n在人们的心灵深处，活动着四种动物：一只威风的虎，一头贪吃的猪，一头倔强的驴和一只伶俐的夜莺。正是它们活跃程度的不均造成了人与人之间的性格差异。\n人类有三种性别：男性、女性和姑娘们。\n女人的美貌和男人的名声在这一点是可以当邻居的：它们都被没头脑的人们认为是可信的。\n当你的朋友热情地握住你的双手时，你不必为自己的安全担忧，因为你也能盯住对方的双手，看看他想干些什么。"
  },
  {
    "id": 239,
    "word": "epitaph",
    "pos": "n",
    "cnWord": "墓志铭",
    "defEn": "An inscription on a tomb, showing that virtues acquired by death have a retroactive effect’. Following is a touching example: Here lie the bones of Parson Platt, Wise, pious, humble and ail that, Who showed us life as all should live it; Let that be said -- and God forgive it! ae",
    "defCn": "写在墓碑上的文章，它表明死亡能带来死者本来没有的高尚品德，促人浩发忆古思今的幽情。现举一篇感人肺腑的墓志铭如下：\n帕森·普拉特的遗体静静地永眠在这里，\n智慧、虔诚、谦逊等所有美德融合于他一身，\n他的光辉一生教导我们：人就应该这样生活。\n我们这样说——上帝会宽恕我们的！"
  },
  {
    "id": 240,
    "word": "erudition",
    "pos": "n",
    "cnWord": "学问",
    "defEn": "Dust shaken out of a book into an empty skull. So wide his erudition's mighty span, He knew Creation's origin and pian And only came by accident to grief -- He thought, poor man, ‘twas right to be a thief. ; Romach Pute",
    "defCn": "学问就是从书本里抖落，又掉进空脑壳的灰尘。他的学问广阔深远，万物起源与进化论背得滚瓜烂熟。但偶尔也出现一些意外的麻烦一一他认为穷人当小偷理所当然。罗马赫皮特"
  },
  {
    "id": 241,
    "word": "esoteric",
    "pos": "adj",
    "cnWord": "深奥",
    "defEn": "Very particularly abstruse’ and consummately” occult’. The ancient philosophies were of two kinds, -- exoteric*, those that the philosophers themselves could partly understand, and esoteric, those that nobody could understand. It is the latter that have most profoundly affected modern thought and found greatest acceptance in our time.",
    "defCn": "，就是极为玄乎，特别精深。古代的哲学家有两类，一 -类是通俗的，这类哲学家对自己所说的多少还了解一些 ; 一类是深奥的，这帮人谁也，弄不懂自己说了什么。好玩的是，正是后者对现代思想产生了最深远的影响，并为我们的时代所接纳。"
  },
  {
    "id": 242,
    "word": "ethnology",
    "pos": "n",
    "cnWord": "人种学",
    "defEn": "The science that treats of the various tribes of Man, as robbers, thieves, swindlers, dunces”, lunatics®, idiots and ethnologists’.",
    "defCn": "捣鼓人类种族的一门学问，它把人分为强盗、小偷、骗子、笨蛋、白痴和人种学家。"
  },
  {
    "id": 243,
    "word": "eulogy",
    "pos": "n",
    "cnWord": "颂词",
    "defEn": "Praise of a person who has either the advantages of wealth and power, or the consideration to be dead.",
    "defCn": "这是对一个人的赞颂，此人或者有钱，或者大权在握，也可能马上就要死了。"
  },
  {
    "id": 244,
    "word": "evangelist",
    "pos": "n",
    "cnWord": "福音派教徒",
    "defEn": "A bearer of good tidings, particularly (in a religious sense) such as assure us of our own salvation! and the damnation’ of our neighbors.",
    "defCn": "这种人给我们捎来了幸福的消息，特别是在某种宗教意义上使我们断定——我们自己的灵魂将获得拯救，会进入天堂，而我们的邻人则将下地狱。"
  },
  {
    "id": 245,
    "word": "everlasting",
    "pos": "adj",
    "cnWord": "不朽的",
    "defEn": "Lasting forever. It is with no small diffidence that I venture to offer this brief and elementary definition, for I am not unaware of the existence of a bulky volume by a sometime Bishop of Worcester, entitled, A Partial Definition of the Word \"Everlasting,\" as Used in the Authorized Version of the Holy Scriptures. His book was once esteemed of great authority in the Anglican Church, and is still, I understand, studied with pleasure to the mind and profit of the soul.",
    "defCn": "永远地永远。我冒昧地对这个词提出这种概括而又根本性的解说实际上是异常性情而没有信心的。因为本人对伍斯特主教的煌煌巨著《对“不朽”这一词条的部分定义曾使用于圣经的一个权威版本中》从未有地触摸过。他的这本书在英国圣公会占据最高地位，据我朱测，该书到现在为止，读来愉快，也有益于拯救灵魂。"
  },
  {
    "id": 246,
    "word": "exception",
    "pos": "n",
    "cnWord": "例外",
    "defEn": "A thing which takes the liberty to differ from other things of its class, as an honest man, a truthful woman, etc. \"The exception proves the rule\" is an expression constantly upon the lips of the ignorant, who parrot it from one another with never a thought of its absurdity. In the Latin, \"Exceptio probat regulam\" means that the exception fests the rule, puts it to the proof, not confirms it. The malefactor' who drew the meaning from this excellent dictum and substituted a contrary one of his own exerted an evil power which appears to be immortal. executioner, 7. A person who does what he can to abate the ravages of senility and reduce the chances of being drowned. ae TES ATR AULA LD SBF BOT Rai AAT Be ae BT RE HE",
    "defCn": "与同类事物不同的东西，例如，诚实的男人是一种例外，丰节的女人也是一种例外，诸如此类。无知之翡经常把“例外证明规则”挂在嘴上，彼此学舌，根本没有想到这话有多荒唐。那么阔割这句精当名言的意义而换以一种相反意义的坏蛋，他对世人的那恶影响实在非同小可，似乎这种影响会永远存在下去。"
  },
  {
    "id": 247,
    "word": "excess",
    "pos": "n",
    "cnWord": "过度",
    "defEn": "In morals, an indulgence that enforces by appropriate penalties the law of moderation',",
    "defCn": "由于法律的松弛而造成的民风放荡不腻。"
  },
  {
    "id": 248,
    "word": "executive",
    "pos": "n",
    "cnWord": "行政官",
    "defEn": "An officer of the Government, whose duty is to enforce the wishes of the legislative power until such time as the judicial department shall be pleased to pronounce them invalid and of no effect. Following is an extract from an old book entitled, The Lunarian Astonished -- Pfeiffer & Co., Boston, 1803: LUNARIAN’: Then when your Congress has passed a law it goes directly to the Supreme Court in order that it may at once be known whether it is constitutional? TERRESTRIAN’: O no, it does not require the approval of the Supreme Court until having perhaps been enforced for many years somebody objects to its operation against himself -- I mean his client. The President, if he approves it, begins to execute it at once. LUNARIAN: Ah, the executive power is a part of the legislative. Do your policemen also have to approve the local ordinances’ that they enforce? TERRESTRIAN: Not yet -- at least not in their character of constables’. Generally speaking, though, all laws require the approval of those whom they are intended to restrain. LUNARIAN: I see. The death warrant is not valid until signed by the murderer. TERRESTRIAN: My friend, you put it too strongly; we are not so consistent. LUNARIAN: But this system of maintaining an expensive judicial machinery to pass upon the validity of laws only after they have long been executed, and then only when brought before the court by some private person -- does it not cause great confusion? TERRESTRIAN: It does. LUNARIAN: Why then should not your laws, previously to being executed, be validated, not by the signature of your President, but by that of the Chief Justice of the Supreme Court? TERRESTRIAN: There is no precedent for any such course. LUNARIAN: Precedent. What is that? TERRESTRIAN: It has been defined by five hundred lawyers in three volumes each. So how can any one know?",
    "defCn": "这是政府的一名官员 , 他的任务是按法律去办事 , 维护法律的尊严，直到某一天司法部心血来潮，宣布那些法规无效为止。以下是选自《被震惊的月球人》一段，它由波士顿普法伊弗公司于 1803 年出品。月球人 : 这么说你们的国会一旦通过某项法律，就径直跑到最高法院去，以便马上知道该法律是否违反宪法 ?地球人 : 不，不必急着去问最高法院，只要总统高兴，就可以立即实行 ,通常是经过多年的施行之后，才有人反对说那些法律的施行不利于他的利益，我是说，违背他主顾的利益。月球人 : 哦，这么说，司法权是立法权的一块咯。你们的警察是否也必须殉同他们要实施的法律呢 ?地球人 : 不，当警察才犯不上这样呢 . 一般来说，所有的法律都是月球人 : 我懂了了。人寿保险只有在杀人犯签字之后才有效。地球人 : 朋友，你说得太过头了。人们往往是很难始终如一的。月球人 : 这样一个立法，司法机构，耗资旋大且不谈，它只是在法律实施了多年以后才确认它们是否合乎宪法，而且只是在某一个人诉诸宪法时才这样做 -一难道这不会造成巨大的混乱吗 ?地球人 : 的确造成了不少麻烦。月球人 : 既然如此，那么你们干嘛不在实施之初就由最高法院院长地球人 : 还没有这样的惯例 !。月球人 : 什么叫惯例 ?地球人 : 在三大本巨著里，五百多名法学家对“惯例”进行了定义，可是没谁有那闲工夫去读，谁知道那是怎么回事。' 英文中president和precedent只有一音之差，这是地球人语带双关的文字游戏。"
  },
  {
    "id": 249,
    "word": "exhort",
    "pos": "vi",
    "cnWord": "劝诚",
    "defEn": "In religious affairs, to put the conscience! of another upon the spit and roast it to a nut-brown discomfort. Bri",
    "defCn": "在人身信仰上，先往别人的良心上吐一口次，然后放在烤肉叉上烟标火迷，黄油直冒，让他怎么也受不了。"
  },
  {
    "id": 250,
    "word": "exile",
    "pos": "n",
    "cnWord": "流亡者",
    "defEn": "One who serves his country by residing abroad, yet is not an ambassador’. An English sea-captain being asked if he had read \"The Exile of Erin,\" replied: \"No, sir, but I should like to anchor on it.\" Years afterwards, when he had been hanged as a pirate after a career of unparalleled atrocities’, the following memorandum was found in the ship's log’ that he had kept at the . time ofhis reply: Aug. 3d, 1842. Made a joke on the ex-Isle of Erin. Coldly received. War 1842 年 8 A3H, HHRRLASAT—-QHA, HFHRBMA",
    "defCn": "在国外为自己的祖国服务却又不是大使的人。一位英国船长 ,，当别人问他是否读过《爱尔兰的流亡者》这本书时，他回答到 :“没有，但我很愿意在那儿停泊 .”说这话几年之后，当他因多年的海岛生涯犯下累累罪行，而被判以绞刑后，发现自己的航海日记中却是这样记录他当时的答复，冷淡，滚他妈的蛋，这混蛋的世道 !"
  },
  {
    "id": 251,
    "word": "existence",
    "pos": "n",
    "cnWord": "存在",
    "defEn": "A transient’, horrible, fantastic dream, Wherein is nothing yet ali things do seem: From which we're wakened by a friendly nudge? Of our bedfellow Death, and cry: \"O fudge\"! \" RANA ERAT: “UO, IRATE aLIa!”",
    "defCn": "一场短暂、奇异而恐怖的梦，一切都和看上去完全不同 ;直到某一天我们被黑甜梦乡的死神老友用册部友好地撞醒，"
  },
  {
    "id": 252,
    "word": "experience",
    "pos": "n",
    "cnWord": "经验",
    "defEn": "The wisdom that enables us to recognize as an undesirable old acquaintance the folly that we have already embraced’.",
    "defCn": "这是一种智慧，它使我们懂得 : 我们满怀希望地迎接的家伙，原来只是一个讨厌的老相好。1 英文中爱尔兰的流亡者(The Exile of Erin)与前爱尔兰岛(ex-Isle of Erim)谐音。S embrace过。拥抱"
  },
  {
    "id": 253,
    "word": "expostulation",
    "pos": "n",
    "cnWord": "劝导",
    "defEn": "One of the many methods by which fools prefer to lose their friends. extinction, 7. The raw material out of which theology’ created the future state. hy ged Fags = SF",
    "defCn": "这是傻瓜们宠爱的、用以驱除朋友的众多方法之一。灭绝这是宗教用以创造新世界的原材料。"
  },
  {
    "id": 254,
    "word": "fairy",
    "pos": "n",
    "cnWord": "妖精",
    "defEn": "A creature, variously fashioned and endowed’, that formerly inhabited the meadows and forests. It was nocturnal’ in its habits, and somewhat addicted to dancing and the theft of children. The fairies are now believed by naturalists to be extinct, though a clergyman of the Church of England saw three near Colchester as lately as 1855, while passing through a park after dining with the lord of the manor’. The sight greatly staggered* him, and he was so affected that his account of it was incoherent. In the year 1807 a troop of fairies visited a wood near Aix and carried off the daughter of a peasant, who had been seen to enter it with a bundle of clothing. The son of a wealthy bourgeois disappeared about the same time, but afterward returned. He had seen the abduction been in pursuit of the fairies. Justinian Gaux, a writer of the fourteenth century, avers that so great is the fairies' power of transformation that he saw one change itself into two opposing armies and fight a battle with great slaughter, and that the next day, after it had resumed its original shape and gone away, there were seven hundred bodies of the slain' which the villagers had to bury. He does not say if any of the wounded recovered. In the time of Henry III, of England, a law was made which prescribed the death penalty for \"Kyllynge, wowndynge, or mamynge\" a fairy, and it was universally respected. ABA SIM, THM. BARMAN, ABE 700 Her,",
    "defCn": "，一类生物，她们的形体和京赋各不相同，从前她们多半活动在草地和树林里。习惯于在夜间出没，喜爱跳舞旦热衷于拐骗孩子。今天博物学家相信妖精已经绝迹，尽管英国的一位牧师在 1885 年还见过三个妖精，当时他在同一个庄园主晚餐之后穿过一个公园。妖精的出现真把他号坏了 ,他回忆事情的经过时前言不措后语。1807 年 ,一大群妖精光临. 了艾克斯附近的森林，拐走了一个农夫的女儿，有人看见她夹着一包衣服进了那座林子。与此同时，一个颈实人家的儿子也失踪了，不过后来他回来了，声称亲眼目睹了妖精拐走了农夫的女儿，他还追赶她们好一阵。14 世纪的一位作家查士本尼 * 高克斯断言，妖精们的威力无穷，她们善于各种形式的变幻。他本人曾看见妖精变成两队人马在交战，双方农夫们不得不把它们掩埋了。不过他没有说那些受伤的士兵是否康复了。在亨利三世时代，英国颁布了处死妖精的法律，这条法令在当时受到了人们的普遍尊重。"
  },
  {
    "id": 255,
    "word": "famous",
    "pos": "adj",
    "cnWord": "著名的",
    "defEn": "Conspicuously miserable. Done to a turn on the iron, behold Him who to be famous aspired. Content? Well, his grill has a plating of gold, And his twistings are greatly admired. Hassan Brubuddy eh: WEE",
    "defCn": "悲惨得引人注目。他的著名让人倾慕，他却像在烙铁上跳兽。烤他的架子金光闪闪，他在那里抽搞也受人赞叹，"
  },
  {
    "id": 256,
    "word": "fashion",
    "pos": "n",
    "cnWord": "时尚",
    "defEn": "Adespot' whom the wise ridicule and obey. A king there was who lost an eye, in some excess of passion; And straight his courtiers all did try to follow the new fashion. Each dropped one eyelid when before the throne he ventured, thinking What should they do? They were not hot to hazard such disaster; They dared not close an eye -- dared not see better than their master. Seeing them lachrymose! and glum, A leech’ consoled the weepers: He spread small rags with liquid gum And covered half their peepers’. The court all wore the stuff, the flame of royal anger dying. That's how court-plaster got its name unless I'm greatly lying. Naramy Oof WATS AIR, SARI, HH HAKAMAT MINKE, edt",
    "defCn": "这是一个暴君，聪明人既嘲弄他，又服从他。从前有一个国王滥施感情，因此他瞎了一只眼睛，他的大臣们马上效仿，都去追随国王新开的时尚。每次朝见尊贵的国王，他们都把一只眼睛闭上，相信这样能取悦威严的国王，可国王发芍要把旺眼挪痊他的人杀光。，该如何是好 ? 没料到会营来如此大福，他们不敢再闭上一只眼，也1 不敢比主子看得更清楚。: 开一些破布，涂上树胶，然后粘住每个大臣的一只眼。| 从此宫中老幼都贴上了那宝贝，国王的怒火逐渐熄灭，橡皮章药就: 这样来到世上，我要是胡说一定不得好报。纳拉米 + 胡夫"
  },
  {
    "id": 257,
    "word": "feast",
    "pos": "n",
    "cnWord": "都要大吃一通",
    "defEn": "A festival. A religious celebration usually signalized by gluttony’ and drunkenness, frequently in honor of some holy person distinguished for abstemiousness®. In the Roman Catholic Church feasts are \"movable\" and full. In their earliest development these entertainments took the form of feasts for the dead; such were held by the Greeks, under the name Nemeseia, by the Aztecs and Peruvians, as in modern times they are popular with the Chinese; though it is believed that the ancient dead, like the modern, were light eaters. Among the many feasts of the Romans was the Novemdiale, which was held, according to Livy, whenever stones fell from heaven.",
    "defCn": "节日喜庆的内容，是一种宗教庆典，经常是通过大吃大喝、酒足饭饱来庆贺的 , 目的是为了纪念某个节欲而闻名的圣人。在罗马天主教中，盛宴分为“固定”和“流动”两种，不过，在酒足饭饱之前，主持仪式的神父们始终坐在餐桌边。在初期，诸如此类的娱乐表现为奉死者进行的宴会，古希腊人举行这样的活动，阿兹特克人 ?和秘鲁人也是如此，现代的中国人同样精于此道。据信，古代的死者和现代的死者一样，都是吃不了多少东西的。古罗马花样众多的盛宴中有一种叫作Novemdiale，根据李维 ?的说法 , 无论什么时候从天上掉下陨石，罗马人都要大吃一通。2 阿效特克(Aztec)印第安人于公元 14 16 世纪之间统治着墨西哥中部及南部。在纳瓦特尔语中，阿效特克是“从Azatlan来的人”的意思。根据传说，阿兹特克人的祖先是从北方一个叫做Azatlan的岛屿来的，他们根据太阳神的指示往南来到阿纳华克谷地(Anahuac valley)的德斯科科湖(Lake Texcoco); 当他们来到湖中央的岛屿时，他们看到一只四着蛇的老应停风在仙人掌上，这个意像告诉他们这里就是他们新的家园。阿兹特克宗教的另一大组成部分就是活人每礼。祭祀时，和祭司将牺牲者放置在一块圆形的凸面石上，用尖刀取出他仍在跳动的心脏，阿兹特克人相信善良之神会从人类的血液和心脏中汲取力量，从而阻止政恶之神作恶。在规模较大的球祀中战士会作为牺牲，这对他们来说是一个极大的荣耀 ;而在小规模的祭祀中一般将犯人当作牺牲。3 李维(公元前 $9 一公元 17 年 )，古罗马历史学家。"
  },
  {
    "id": 258,
    "word": "felon",
    "pos": "n",
    "cnWord": "罪犯",
    "defEn": "A person of greater enterprise than discretion, who in embracing an opportunity has formed an unfortunate attachment.",
    "defCn": "一个颇有冒险精神但不够小心的人 , 他会抓住一个机会但对些却过于专注。"
  },
  {
    "id": 259,
    "word": "female",
    "pos": "n",
    "cnWord": "女性",
    "defEn": "One of the opposing, or unfair, sex. The Maker, at Creation’s birth, with living things had stocked the earth. ， From elephants to bats and snails', they all were good, for all were males. : But when the Devil came and saw he said: \"By Thine eternal law of growth, maturity, decay, these all must quickly pass away and leave untenanted the : earth unless Thou dost establish birth\" --Then tucked his head beneath his : wing to laugh -- he had no sleeve -- the thing with deviltry’ did so accord, that he'd suggested to the Lord. The Master pondered’ this advice, then shook and threw the fateful dice wherewith all matters here below are ordered, and observed the throw, then bent His head in awful state, confirming the decree of Fate. From every part of earth anew the conscious dust consenting flew, while rivers from their courses rolled to make it plastic for the mould. Enough collected (but no more, for niggard’ Nature hoards her store) he kneaded’ it to flexible clay, while Nick unseen threw some away. And then the various forms He cast, gross organs first and finer last; no one at once evolved, but all by even touches grew and small degrees advanced, till, shade by shade, to match ail living things He'd made females, complete in all their parts except (His clay gave out) the hearts. \"No matter,\" Satan cried; \"with speed I'll fetch the very hearts they need” --So flew away and soon brought back the number needed, in a sack. That night earth range with sounds of strife --Ten million males each had a wife; That night sweet Peace her pinions’ spread Oer Hell -- ten million devils dead! GJ.",
    "defCn": "相对立的两性中不完美的那种性别。\n那洪荒初开之际，上帝把生命带到大地。从大象到蝼蚁样样俱全，无所不包。一切都是那么美妙，因为它们都是雄性。但是，魔鬼到来，看到了这个景象，它嘟囔道：\"你们的法律倒是好，知识万物生长、成熟然后腐朽，你的杰作很快会烟消云散，因为万物还没有生殖能力。\"嘟囔完，魔鬼把头缩进了羽翼，边嘲弄，边得意，它怀着险恶的用心，向上帝提出了这个建议。上帝陷入了深深的思考之中，然后摇起了命运的骰子，卑微的万物列队致敬，仰望着上帝的英明之举，他的神色令万物敬畏，显露出天命不可违抗的尊严。于是从大地的四面八方，尘土自觉自愿地纷纷飘来，河流也离开河道一拥而上，为的是让上帝把尘土和成稀泥。上帝汇集了足够多的尘土和水（不会太多，自然向来是吝啬的），他把尘土和河水揉成稀泥，又乘魔鬼不注意把一些黏泥舍弃。之后他用黏泥制成各种形状，先做粗大的器官然后把精细的雕琢。新造的生物并没有立即成熟，它们只是一丁点一丁点地长大，它们的其它部分发育得还过得去，就是心脏长不好（上帝已经把造心的泥土扔掉）。这时，魔鬼开始大呼小叫：\"不用慌，我会把她们的心脏取来。\"魔鬼飞来飞去，捞回了一大袋，数量正好，样式也齐全。那天晚上世界真吵闹，百万个雄性都找到了配偶。那天晚上甜美的和平振翼逃去，噢，放荡——百万个魔鬼一起进入地狱！"
  },
  {
    "id": 260,
    "word": "fib",
    "pos": "n",
    "cnWord": "小谎言",
    "defEn": "A lie that has not cut its teeth. An habitual liar's nearest approach to truth: the perigee’ of his eccentric orbit”.",
    "defCn": "一种不至于被人打掉牙的谎言。一个老骗子最真实的地方 : 他的活动和经验的最低点。"
  },
  {
    "id": 261,
    "word": "fickleness",
    "pos": "n",
    "cnWord": "喜怒无常",
    "defEn": "The iterated satiety of an enterprising affection.",
    "defCn": "莽撞火热的感情几经折腾而弄出来的厌烦。"
  },
  {
    "id": 262,
    "word": "fiddle",
    "pos": "n",
    "cnWord": "天近地点",
    "defEn": "An instrument to tickle’ human ears by friction of a horse's tail on the entrails of a cat.",
    "defCn": "为人类耳采挠痒的一种乐器，通过马尾巴磨蹦猫肚里的那些货色，然后产生出的尖叫而获得的效果。"
  },
  {
    "id": 263,
    "word": "fidelity",
    "pos": "n",
    "cnWord": "忠诚",
    "defEn": "A virtue peculiar to those who are about to be betrayed.",
    "defCn": "即将被人出卖的人所持有的一种美德。"
  },
  {
    "id": 264,
    "word": "filial",
    "pos": "adj",
    "cnWord": "孝顺的",
    "defEn": "To comfort parents’ moneybag.",
    "defCn": "就是慰问父母的钱绕。"
  },
  {
    "id": 265,
    "word": "finance",
    "pos": "n",
    "cnWord": "财政",
    "defEn": "The art or science of managing revenues and resources for the best advantage of the manager. The pronunciation of this word with the i long and the accent on the first syllable is one of America's most precious discoveries and possessions.",
    "defCn": "能给管理者带来最多油水的控制财源与收入的诀窍或学问。把finance一词中的i拖长音并重读 ,这是美利坚合众国最宝贵的发现和财产之一。"
  },
  {
    "id": 266,
    "word": "flag",
    "pos": "n",
    "cnWord": "旗帜",
    "defEn": "A colored rag borne above troops and hoisted on forts and ships. It appears to serve the same purpose as certain signs that one sees and vacant lots in London -- \"Rubbish may be shot here.”",
    "defCn": "际扬在军队上方或竖立在城堡以及舰船上的花花绿绿的破布 , 其作用跟在伦敦的一些空地上看到的写有“此地可扔垃圾”字样的招牌一样。"
  },
  {
    "id": 267,
    "word": "flesh",
    "pos": "n",
    "cnWord": "肉体",
    "defEn": "The Second Person of the secular! Trinity”.",
    "defCn": "尘世中三位一体的老二。"
  },
  {
    "id": 268,
    "word": "flop",
    "pos": "v",
    "cnWord": "猛地抛弃",
    "defEn": "， Suddenly to change one's opinions and go over to another party. The i most notable flop on record was that of Saul of Tarsus, who has been severely criticised as a turn-coat by some of our partisan? journals.",
    "defCn": "突然改变立场，投入另一党派的怀抱。世上最有名的一词“猛地抛弃”是大数人扫罗“，他被我们美国的某些党派杂志骂为叛徒。"
  },
  {
    "id": 269,
    "word": "folly",
    "pos": "n",
    "cnWord": "三位一体",
    "defEn": "That “gift and faculty divine\" whose creative and controlling energy inspires Man's mind, guides his actions and adorns his life. Be",
    "defCn": "“扫罗即保罗。据《圣经》记载，保罗本来是个法利赛，为了维护犹太教的信仰而玛处追捕刚刚兴起的基督徒。在一次前往大马士革追捕基叔徒的行动中，保罗遇见了神迹，被复活的耶稣感动而成为基督徒，并且也成为向非犹太人传扬福音的宣教士。保罗后半生为耶稣的缘故被人迫害、追捕、鞭打、入狱，但是他甘之如欠，因为他知道自己奋斗的目标，也知道自己信仰的真实，正是由于保罗的努力，以至于后来在亚细亚一带有无数的人受其感召而成为基督徒，进而翻转世界。这时一种“圣洁的才能和天赋”正是它的想像力和支配力激发了人的意志，指引他的行动并美化他的生活。"
  },
  {
    "id": 270,
    "word": "fool",
    "pos": "n",
    "cnWord": "疯子",
    "defEn": "A person who pervades' the domain of intellectual speculation and diffuses himself through the channels of moral activity. He is omnific”, omniform?, omnipercipient, omniscience*, omnipotent®. He it was who invented letters, printing, the railroad, the steamboat, the telegraph, the platitude and the circle of the sciences. He created patriotism and taught the ， nations war -- founded theology, philosophy, law, medicine and Chicago. He : established monarchical and republican government. He is from everlasting® : to everlasting -- such as creation's dawn beheld he fooleth now. In the morning of time he sang upon primitive hills, and in the noonday of existence headed the procession of being. His grandmotherly hand was warmly tucked-in the set sun of civilization, and in the twilight he prepares Man's evening meal of milk-and-morality and turns down the covers of the universal grave. And after the rest of us shall have retired for the night of eternal oblivion’ he will sit up to write a history of human civilization.",
    "defCn": "这种人活跃于人类的知识领域，通过道德活动的各种途经四处出击。他厉害得很，具备各种形态，无所不知，无所不能。正是他发明了字母、印刷本、铁路、共汽船、电报、陈词滥调以及科学的各个分支。是他发明了爱国主义 , 使各个国家学会打仗一一创立神学、哲学、法律、医学和芝加哥的也是他。是他缔造了君主制和共和制两种政治体制。古往今来 , 他青春永驻一一从创世的晨曦到今天 , 他不停地要弄他的威风。洪荒初开的早晨，他站在野蛮的山头上歌唱。世界易盛的中午，他带领万物正步插进。是他用老祖母一般的手指温柔地抚摸文明的落日 ,在红黄的夕照之下为人类准备了牛奶与道德的晚餐，然后揭开坟墓的被福让人类安息。当我们在永恒的遗忘之乡长眠之后，他将挑灯夜战，撰写一，部人类文明的史书。"
  },
  {
    "id": 271,
    "word": "foolhardy",
    "pos": "adj",
    "cnWord": "有勇无谋的",
    "defEn": ", Unlucky in the execution of a courageous act.",
    "defCn": "做一件勇敢的事情时运气太糟，往往就被称为有勇无谋。"
  },
  {
    "id": 272,
    "word": "force",
    "pos": "n",
    "cnWord": "力量",
    "defEn": "The boy said naught but through instead, Remembering his pounded head: Ho",
    "defCn": "“力量就是能行 ,”老师如是说一一“这个定义下得准。”学生点头称是，但默默深思，他脑袋牢记的是，“力量不是可能，而是必须如此忆"
  },
  {
    "id": 273,
    "word": "forgetfulness",
    "pos": "n",
    "cnWord": "来补偿",
    "defEn": "A gift of God bestowed upon debtors in compensation for their destitution! of conscience.",
    "defCn": "这是上帝赐予负债人的礼物，他们的良心上有和欠缺，上帝就用健忘来补偿。"
  },
  {
    "id": 274,
    "word": "forgiveness",
    "pos": "n",
    "cnWord": "宽恕",
    "defEn": "A stratagem? to throw an offender off his guard and catch him red-handed’ in his next offence.",
    "defCn": "一种计谋，用来完全消除冒犯者的警觉，在他下次进犯时能把他接得血肉模糊。"
  },
  {
    "id": 275,
    "word": "fork",
    "pos": "n",
    "cnWord": "叉子",
    "defEn": "An instrument used chiefly for the purpose of putting dead animals into the mouth. Formerly the knife was employed for this purpose, and by many worthy persons is still thought to have many advantages over the other tool, which, however, they do not altogether reject, but use to assist in charging the knife. The immunity‘ of these persons from swift and awful death is one of the most striking proofs of God's mercy to those that hate Him.",
    "defCn": "这是一种主要用于把动物尸体塞入口中的工具。以前，人们是用餐刀来达到这个目的的。到了现在，还有不少绅士认为刀子比叉子更为干脆利落。这些人当然不完全拒绝使用叉子，不过再怎么着也只是刀子的副手。这伙人能够幸免于难 , 足以表明上帝对仇恨他的人是多么的仁慈。"
  },
  {
    "id": 276,
    "word": "foundling",
    "pos": "n",
    "cnWord": "弃儿",
    "defEn": "A child that has disembarrassed' itself of parents unsuitable to its condition and prospects.",
    "defCn": "! 这种孩子已经甩掉了与他的现状与前途不相称的父母。"
  },
  {
    "id": 277,
    "word": "frankalmoigne",
    "pos": "n",
    "cnWord": "教会领地权",
    "defEn": ": The tenure” by which a religious corporation holds lands on condition ; of praying for the soul of the donor. In mediaeval times many of the wealthiest fraternities? obtained their estates in this simple and cheap manner, and once when Henry VIII of England sent an officer to confiscate* certain vast possessions which a fraternity of monks held by frankalmoigne, Purgatory®?\" \"Ay,\" said the officer, coldly, \"an ye will not pray him thence” for naught he must e’en roast.\" \"But look you, my son,\" persisted the good man, \"this act hath rank as robbery of God!\" \"Nay, nay, good father, my master the king doth but deliver him from the manifold temptations of too great wealth.\"",
    "defCn": "这是许多宗教团体借以拥有土地的权力，附带条件是宗教团体为捐赠土地者的灵魂祈祷。在中世纪，很多拥有大量财产的宗教兄弟会都是用这种简单而廉价的手段获取了大量土地。一次，英格兰的亨利八世派遣一位官员去征用被一座修道院用此手段占据的大片领地，修道院院长说：\"什么？难道你的主人希望我们的捐助人永远呆在炼狱中吃苦吗？\"那官员冷冷地回答：\"唉！你从此不必再为他祈祷，他必须忍受煎熬。\"\"看看我，我的孩子。\"那个大好人说：\"你的所作所为是在掠夺上帝的财富。\"\"不，不，好心的神父，这是我主国王殿下的旨意，他这样做是为了帮助上帝摆脱过多财富的诱惑。\"",
    "footnotes": [
      {
        "term": "purgatory",
        "pos": "n.",
        "gloss": "炼狱"
      }
    ]
  },
  {
    "id": 278,
    "word": "freebooter",
    "pos": "n",
    "cnWord": "强盗",
    "defEn": "A conqueror in a small way of business, whose annexations lack of the sanctifying merit of magnitude.",
    "defCn": "一个做小买卖的征服者，他掠夺的东西还不够，不足以为他氢上尊严的外袍。"
  },
  {
    "id": 279,
    "word": "freedman",
    "pos": "n",
    "cnWord": "自由人",
    "defEn": "A person whose manacles' have sunk so deeply into the flesh that they are no longer visible.",
    "defCn": "这种人的手铸深深地勒进肉里面去了，从外面看不见。"
  },
  {
    "id": 280,
    "word": "freedom",
    "pos": "n",
    "cnWord": "自由",
    "defEn": "Exemption from the stress of authority in a beggarly half dozen of restraint's infinite multitude of methods. A political condition that every nation supposes itself to enjoy in virtual monopoly!. Liberty. The distinction between freedom and liberty is not accurately known; naturalists have never been able to find a living specimen of either. . Freedom, as every schoolboy knows, once shrieked’ as Kosciusko Sell; on every wind, indeed, that blows I hear her yell. She screams whenever monarchs meet, and parliaments as well, to bind the chains about her feet and toll her knell. | And when the sovereign people cast the votes they cannot spell, upon | the pestilential blast her clamors swell. For all to whom the power's given to sway or to compel, among | themselves apportion Heaven and give her Hell. Blary O'Gary Ab, Ah, ERA AM, HR boa a BA RR HREBSNMA, MHZ AW ARR, Hee FoR, RAP",
    "defCn": "免除了权威的重压状态，所受束缚的种类届指可数，但无处不在。这是每一个国家都自以为享有的一种政治状况 ,实质上不过是垄断的通词而已。有一个与其意义相似的词“解放”如何区分“自由”与“解放”这两个词是很令人头痛的，它俩很难分辨清楚，自由主义者从未找到过令人信服的实例。倒。每一次有什么风吹草动，我都能听见她在号叫。每连当家作主的公民，稀里糊涂地投下一票，这股旋风扫过，她更会大声狂呼。获得自由权利的人们 ,不管是主动或被动，给自己的是天堂，给她的却是地狱。布菜利，奥加里"
  },
  {
    "id": 281,
    "word": "freemasons",
    "pos": "n",
    "cnWord": "共济会",
    "defEn": "An order? with secret rites, grotesque? ceremonies and fantastic costumes, which, originating in the reign of Charles I], among working artisans of London, has been joined successively by the dead of past centuries in unbroken retrogression* until now it embraces all the generations of man on the hither side of Adam and is drumming up distinguished recruits among the pre-Creational inhabitants of Chaos and Formless Void. The order was founded at different times by Charlemagne, Julius Caesar, Cyrus, Solomon, Zoroaster, Confucious, Thothmes, and Buddha. Its emblems and symbols have been found in the Catacombs’ of Paris and Rome, on the stones of the Parthenon and the Chinese Great Wall, among the temples of Karnak and Palmyra and in the Egyptian Pyramids -- always by a Freemason. : , PRSMEA “PRASH”. ; EF ASAT, HREGRARPR, BETH MA, AER eT",
    "defCn": "这是一种以其机密的教规、可笑的仪式和令人眼花缭乱的服饰出名的团体，最早由查理二世时代伦敦的石匠们结成团伙，时至今日，所有亚当的子孙，包括了过去各个世纪的死者，都已经陆续成为它的会员。不仅如此，它还正在大张旗鼓地从创世纪的喧嚣与虚无中招募有生力量。共济会其实在不同时代不同国家已经创立。其创立者有查理大帝、恺撒大帝、居鲁士大帝、所罗门王、琐罗亚斯德、孔圣人、图特摩斯和佛陀。在巴黎和罗马的地下墓穴，在希腊巴台农神庙和中国长城的石壁上，在埃及的卡纳克神庙和纽约州的庙宇以及巴特河边的金字塔中，已找到各式各样的共济会的标志和符号——能发现它们的人都是共济会会友。"
  },
  {
    "id": 282,
    "word": "friendless",
    "pos": "adj",
    "cnWord": "众叛亲离",
    "defEn": "Having no favors to bestow. Destitute of fortune. Addicted to utterance of truth.",
    "defCn": "没有好处给大伙，一贫如洗。爱说真话。"
  },
  {
    "id": 283,
    "word": "friendship",
    "pos": "n",
    "cnWord": "友谊",
    "defEn": "A ship big enough to carry two in fair weather, but only one in foul. The sea was calm and the sky was blue; Merrily, merrily sailed we two. (High barometer maketh glad.) On the tipsy’ ship, with a dreadful shout, The tempest descended and we fell out’. (O the walking is nasty bad!) ALE, RPL, BA Py BRAK, (CR, SHARE T ).",
    "defCn": "这是一艘舰艇，在风平浪静的日子可以容纳两人，在波浪滔天之时，却只能承载一人。"
  },
  {
    "id": 284,
    "word": "frog",
    "pos": "n",
    "cnWord": "青蛙",
    "defEn": "A reptile’ with edible legs. The first mention of frogs in profane” literature is in Homer's narrative of the war between them and the mice. ; learned, ingenious and industrious Dr. Schliemann has set the question : forever at rest by uncovering the bones of the slain frogs. One of the forms : of moral suasion3 by which Pharaoh was besought4 to favor the Israelities was a plague of frogs, but Pharaoh°, who liked them fricasees®, remarked, with truly oriental stoicism’, that he could stand it as long as the frogs and the Jews could; so the programme was changed. The frog is a diligent songster®, having a good voice but no ear. The libretto of his favorite opera, as written by Aristophanes, is brief, simple and effective -- \"brekekex-koax\"; the music is apparently by that eminent composer, Richard Wagner. Horses have a frog in each hoof -- a thoughtful provision of nature, enabling them to shine in a hurdle race’. HUSH, PER BS Ra. “OOO!” SMe ARR! 那 种",
    "defCn": "一种双腿味道好极了的两栖动物。民间文学第一次提到青蛙是在荷马关于青蛙与老鼠的叙事诗中。不少性情猜忌的人怀疑\"荷马\"不是那部叙事诗的作者。但是，博学多才而勤奋不已的施里曼博士通过挖掘和研究那些战死的青蛙的遗骨，一劳永逸地搞定了《荷马史诗》的著作权的问题。很早以前犹太人用以促使法老体恤犹太民众的道德教训之一就是一场蛙疫，但喜吃油煎青蛙的法老带着一种来自东方的正宗的斯多葛哲学，只要青蛙和犹太人受得了，他也熬得住。青蛙是一位勤奋的歌唱家，他的高腔大嗓，优美动听，不过耳朵不大灵光。像阿里斯托芬所描绘的那样，青蛙最喜欢哼的歌词是：\"呱呱呱！\"如此简洁明快！那种优美的腔调显然出自作曲大师理查德·瓦格纳的笔下。马儿的每个蹄子上都蹲着一只青蛙——这是上帝意味深长的馈赠，使马儿在跨栏比赛中能先声夺人。",
    "footnotes": [
      {
        "term": "reptile",
        "pos": "n.",
        "gloss": "疏虫动物，两栖动物"
      }
    ]
  },
  {
    "id": 285,
    "word": "frying-pan",
    "pos": "n",
    "cnWord": "煎锅",
    "defEn": "One part of the penal' apparatus employed in that punitive institution, a woman's kitchen. The frying-pan was invented by Calvin, and by him used in cooking span-long infants that had died without baptism; and observing one day the horrible torment of a tramp who had incautiously pulled a fried babe from the waste-dump and devoured” it, it occurred to the great divine to rob death of its terrors by introducing the frying-pan into every household in Geneva. Thence it spread to all corners of the world, and has been of invaluable assistance in the propagation® of his sombre faith. The following lines (said to be from the pen of his Grace _ Bishop Potter) seem to imply that the AP usefulness of this utensil is not limited to this 7 3 PY world; but as the consequences of its : — ae employment in this life reach over into the —™ life to come, so also itself may be found on | the other side, rewarding its devotees: Old Nick was summoned to the skies. Said Peter: \"Your intentions Are good, but you lack enterprise concerning new inventions. Now, broiling in an ancient plan of torment, but I hear it reported that the frying-pan sears* best the wicked spirit.” know a trick worth two o' that,\"said Nick -- \"I'll cook their food in't.\" He LAR ANA, MIRE RA BY.”",
    "defCn": "常见于女人设立的刑场——厨房，的众多刑具之一。煎锅最早由一位教派首领卡尔文发明，用来煎炒没有经过洗礼就死去了的八九寸婴儿。有一天，卡尔文看见一个流浪汉不经意地从垃圾堆里扒出一个煎炒过的婴儿并狼吞虎咽地吃，见此情景，这位大圣灵机一动，决定向日内瓦所有的家庭推荐煎锅，以清除对死亡的恐慌。从那之后，煎锅流传到地球的每一个角落，为卡尔文那种阴森的信仰在世界的传播立下了汗马功劳。下面（据说出自主教波特主教大人）似乎还暗含这样一层意思，这种器皿的实用价值似不止于今生，还可远达来世，惠及虔诚的信徒：\n老魔尼克被唤进天堂，彼得对他说：\"你的安排马马虎虎过得去，但没有什么新鲜玩意。烘、烤只算老掉牙的折磨方法，我现在听人传讲，世上还有一种煎锅，对付邪恶精灵才更妙。\"\n\"去！弄来一口，放满油，把他们炸得焦黄枯脆。\"老魔狞笑道：\"一物两用，我会把他们作为下酒菜细细烹调！\""
  },
  {
    "id": 286,
    "word": "funeral",
    "pos": "n",
    "cnWord": "匡礼",
    "defEn": "A pageant” whereby we attest our respect for the dead by enriching the undertaker, and strengthen our grief by an expenditure that deepens our groans and doubles our tears.",
    "defCn": "1 卡尔文是“胡格诺派”的创始人。这位著名的宗教改革家，由于倡导新的宗教改#, 在当时的法国，受到国王和天主教会的不断迫害，因而他被迫逃往瑞士。不久，他就以日内瓦为中心，创立了一个新的宗教教派，即卡尔文教派，它的影响日益增See ee手工业者及对教会和国王不满的南部贵族纷纷加入了之情 , 用足以加剧我们痛苦并使我们流双倍眼泪的费用来加深我们的悲"
  },
  {
    "id": 287,
    "word": "future",
    "pos": "n",
    "cnWord": "未来",
    "defEn": "That period of time in which our affairs prosper, our friends are true and our happiness is assured. =a “ ah Se £4 ah oes . aie Bite. te.",
    "defCn": "在这个时代里，我们的事业将兴旺发过，我们的朋友将忠诚可信，我们的幸福将得到保证。"
  },
  {
    "id": 288,
    "word": "gallows",
    "pos": "n",
    "cnWord": "绞刑架",
    "defEn": "A stage for the performance of miracle plays, in which the leading actor is translated to heaven. In this country the gallows! is chiefly remarkable for the number of persons who escape it.",
    "defCn": "用来演出传奇剧的舞台。就是在这里，剧中主角灵肉分离，一缕幽魂升空。在美国，最引人注目的是有那么多人从它下面逃脱了。"
  },
  {
    "id": 289,
    "word": "gargoyle",
    "pos": "n",
    "cnWord": "绞架绞刑",
    "defEn": "A rain-spout projecting from the eaves of mediaeval buildings, commonly fashioned into a grotesque caricature’ of some personal enemy of the architect or owner of the building. This was especially the case in churches and ecclesiastical structures generally, in which the gargoyles presented a perfect rogues’ gallery of local heretics and controversialists. Sometimes when a new dean and chapter were installed the old gargoyles were removed and others substituted having a closer relation to the private animosities' of the new incumbents”. ROE HAE EMS AM Ee Se ST GS AE",
    "defCn": "所痛恨的某个人的可笑嘴脸出现，在教堂建筑中尤其如此，所有滴水嘴都被制成当地异己分子被愚弄的形象，，它们简直可以构成一个颇为壮观的漫画长廊。每当一个，i j新教长就职，从前那些滴水嘴就会被新的取代，因为新造的滴水嘴的形象恰如其分地表达出新任教长的私愤。"
  },
  {
    "id": 290,
    "word": "garter",
    "pos": "n",
    "cnWord": "吊袜带",
    "defEn": "stockings and desolating? the country.",
    "defCn": "这是一种有弹性的带子，它防止妇女从她们的长简袜当中溜走，但却使这个国家变得更不幸。"
  },
  {
    "id": 291,
    "word": "genealogy",
    "pos": "n",
    "cnWord": "家谱",
    "defEn": "An account of one's descent from an ancestor who did not particularly care to trace his own.",
    "defCn": "这是血统记录，它表明某人的祖先是谁，不过这位祖先可不太乐意劳神，去追溯自己的血统。"
  },
  {
    "id": 292,
    "word": "generous",
    "pos": "adj",
    "cnWord": "慷慨的",
    "defEn": "Originally this word meant noble by birth and was rightly applied to a great multitude of persons. It now means noble by nature and is taking a bit of a rest.",
    "defCn": "原来这个词表示出身高贵 , 那样的人有很多 ; 现在却表示品格高尚，这样的人就微平其徽了。"
  },
  {
    "id": 293,
    "word": "genteel",
    "pos": "adj",
    "cnWord": "绅士风度的",
    "defEn": "Refined, after the fashion of a gent). Observe with care, my son, the distinction I reveal: A gentleman is gentle and a gent genteel. 、 Heed not the definitions your \"Unabridged\" presents, For dictionary makers are generally gents. GJ.",
    "defCn": "在一个男人赶上时旷之后所作出的斯文模样。注意观察，我的孩子，我将揭示他的特点 :所谓绅士就是具有绅士风度的绅士，不要在乎绅士的定义，词典只能造就稀松平常的绅士。唱萨拉斯卡，杰普神父"
  },
  {
    "id": 294,
    "word": "geographer",
    "pos": "n",
    "cnWord": "地理学家",
    "defEn": "A chap! who can tell you offhand” the difference between the outside of the world and the inside.",
    "defCn": "这家伙立马就能告诉你地球内部和外部的区别。",
    "footnotes": [
      {
        "term": "offhand",
        "pos": "adv.",
        "gloss": "即时地，随便地"
      }
    ]
  },
  {
    "id": 295,
    "word": "geology",
    "pos": "n",
    "cnWord": "地质学家",
    "defEn": "The science of the earth's crust -- to which, doubtless, will be added that of its interior whenever a man shall come up garrulous out of a well. The geological formations of the globe already noted are catalogued thus: ， as-pipes, miners' tools, antique statues minus the nose, Spanish doubloons4 and ancestors. The Secondary is largely made up of red worms and moles. The Tertiary comprises railway tracks, patent pavements, grass, snakes, ， mouldy* boots, beer bottles, tomato cans, intoxicated citizens, garbage, anarchists®, snap-dogs and fools. TBAB ARE SEAS ae. SS — fae Ee ea A AS Pee eK SR. MADE. AH. He. BRET. RR. Ph . PR.",
    "defCn": "这是一门关于地壳的科学一一不管在什么时候，某个男人如果从一口井里走出来，肯定会对地球内部的结构讲个不停。人们把地球的结构分为三层 : 第一层，也就是处于底部那屋，由岩石、骨头或陷入泥潭的驴子、煤气管、矿工丢弃的工具、缺鼻子的古代雕像、西班牙人的古金® anarchist刀，无政府主义者垃圾、无政府主义者、疯狗和傻瓜构成。"
  },
  {
    "id": 296,
    "word": "ghost",
    "pos": "n",
    "cnWord": "存在",
    "defEn": "The outward and visible sign of an inward fear. He saw a ghost. It occupied -- that dismal thing! --The path that he was following. Before he'd time to stop and fly, an earthquake trifled with' the eye that saw a ghost. He fell as fall the early good; Unmoved that awful vision stood. The stars that danced before his ken’. He wildly brushed away, and then he saw a post. Jared Macphester Accounting for the uncommon behavior of ghosts, Heine mentions somebody's ingenious’ theory to the effect that they are as much afraid of us as we of them. Not quite, if I may judge from such tables of comparative speed as I am able to compile’ from memories of my own experience. There is one insuperable obstacle to a belief in ghosts. A ghost never comes naked: he appears either in a winding-sheet or \"in his habit as he lived.\" To believe in him, then, is to believe that not only have the dead the power to make themselves visible after there is nothing left of them, but that the same power inheres® in textile fabrics. Supposing the products of the loom to have this ability, what object would they have in exercising it? And why does not the apparition’ of a suit of clothes sometimes walk abroad without a ghost in it? These be riddles of significance. They reach away down and get a convulsive’ grip on the very tap-root of this flourishing faith. AD Bet Sb BABE HeA IL-7 B, ARIE RK, HAMA GAB PR, MILRR WE? LRA KME, EMIKKAA, Bee T ii ti Ai IRR",
    "defCn": "和鬼得及逃命，地震就发生了，他重重地摔在地上，眼前金星直冒，那可怕的怪物还站在眼前。他揉揉双眼，才看清那只不过是一根柱子。，在解释鬼的荒唐行为时，海涅 ? 谈到了一位先生的绝妙论断，那就，是，像我们怕鬼一样，鬼也怕我们。根据我的经验，对比两者的相对速度，我对此表示肯定，尽管不是太确定。有关鬼是否存在是一个不能回避的问题。鬼从来没有一丝不挂地出现，他要么庄着尸布，要么穿着生前的衣服。如果我们相信和听存在，那么也得承认不仅人腐烂之后有能力复活并再现原形 , 而且死者身上的衣，服也有同样的神力。假设布之类的织物具有这种显灵的威力，那么它们这样做要达到什么目的呢 ? 为什么没有人见过一套衣服独自到处游荡3 海涅(1797 一 1856), 德国著名诗人。海涅童年和少年时期经历了拿破仑战争。1815年拿破仑兵败后，曾在银行工作。1819 年后，曾在波恩大学、哥廷根大学、柏林大学学习。1827 年《旅行记》第 2 卷出版。从英国旅行回到汉保后，他的《歌集》出版，收入在此之前发表的大部诗歌，黄定了海涅作为杰出的抒情诗人的地位。1829年《旅行记》第 3 卷出版。以后海涅陆续发表了《法兰西现状》《论法国的画家人《德国近代文学史略》、《路德维希。伯和尔纳，剖利希 * 海涅的备亡录》、《德国，一个冬天的童话》等文章和诗歌。1848 年 $ 月完全瘫疾，他以惊人的毅力坚持写作，口授完成诗集《罗虹采罗》，于 1851 年出版。后还写了一些散文作品。信仰的根基。"
  },
  {
    "id": 297,
    "word": "glutton",
    "pos": "n",
    "cnWord": "暴饮暴食者",
    "defEn": "A person who escapes the evils of moderation’ by committing dyspepsia’.",
    "defCn": "这种人通过患消化不良症来逃避饥饿的折麻。",
    "footnotes": [
      {
        "term": "moderation",
        "pos": "n.",
        "gloss": "慢化，减速，延时作用"
      }
    ]
  },
  {
    "id": 298,
    "word": "goose",
    "pos": "n",
    "cnWord": "鹅",
    "defEn": "A bird that supplies quills for writing. These, by wa some occult process of nature, are penetrated and 和 过 suffused with various degrees of the bird's intellectual energies and emotional character, so that when inked a4 \\) \\ and drawn mechanically across paper by a person called A . an \"author,\" there results a very fair and accurate \\ transcript of the fowl's thought and feeling. The -本 difference in geese，as discovered by this ingenious method, is considerable: many are found to have only trivial and insignificant powers, but some are seen to be very great geese indeed. Bad REESE SNAERN BR. RHEE, AA BANE, ATP RRRRRL. iPM RAIMI, BAZ AMBALA",
    "defCn": "本身就浸透和充满着这种鸟类的才华和情感。当某个叫“作家”的人用这种羽毛管芯上墨水，无思无绪地在纸上涂写时，这种禽类丰富的思想体现无遗，某些微不足道，另一些则卓尔不凡。"
  },
  {
    "id": 299,
    "word": "gout",
    "pos": "n",
    "cnWord": "痛风",
    "defEn": "A physician's name for the rheumatism’ of a rich patient.",
    "defCn": "这是大夫对富人所患的一种病的雅号。"
  },
  {
    "id": 300,
    "word": "graces",
    "pos": "n",
    "cnWord": "美惠三女神",
    "defEn": "Three beautiful goddesses, Aglaia, Thalia and Euphrosyne, who ， attended upon Venus, serving without salary. They were at no expense for ， board and clothing, for they ate nothing to speak of and dressed according to the weather, wearing whatever breeze happened to be blowing.",
    "defCn": "三位漂亮的女神，她们是阿格莱亚 ?*、塔莉亚 3 和欧佛洛绪音 4。她们伺候维纳斯，都从不要什么工钱。她们在住宿和衣着方面没什么开销，，她们的嘴几乎只用于说话而不吃任何东西 ,服饰总是随着季节不停地变换着，风儿吹来什么，她们就穿什么。"
  },
  {
    "id": 301,
    "word": "grammar",
    "pos": "n",
    "cnWord": "陷阱",
    "defEn": "A system of pitfalls® thoughtfully prepared for the feet for the self-made man, along the path by which he advances to distinction.",
    "defCn": "? 阿格莱亚，光辉女神> 塔莉亚，激励女神* 欧佛洛绪涅，欢乐女神这是一系列精心布置的陷阱 , 星罗棋布地埋在通往光荣与梦想的路上，专等自我奋斗的人掉进去，疏不出来。"
  },
  {
    "id": 302,
    "word": "grape",
    "pos": "n",
    "cnWord": "贯姆拉赫霍罗伯姆",
    "defEn": "Hail noble fruit! -- by Homer sung, Anacreon and Khayyam; Thy praise is ever on the tongue of better men than I am. The lyre' in my hand has never swept, the song I cannot offer: my humbler service pray accept --I'll help to kill the scoffer. The water-drinkers and the cranks who load their skins with liquor -- I'll gladly bear their belly-tanks and tap them with my sticker. Fill up, fill up, for wisdom cools when e'er we let the wine rest. Here's death to Prohibition's fools, and every kind of vine-pest! Jamrach Holobom (The Rubaiyat) Waeisdk «EOF (ad",
    "defCn": "啊，圣洁的水果一 -葡萄 ! 荷马曾为你高歌一曲，还有阿克那里侈 \"和海亚姆，他们的嗓音远比我的温柔。我的手从未摆弄过竖琴，我的赞歌无力表达对你的崇高故意，但还是请你笑纳我微不足道的效忠，我要对胆敢嘲笑你的人喷出毒焰。那些不停地灌水的混蛋，和用肚子盛满美酒的疯子，我要兴奋地让他们亮出凸肚，用类刀在上面堆来蕉去。喝吧，美酒在肚里安息，智慧就会酿得醇厚。愿戒酒的僵瓜们都下地狱，愿哨咬葡萄蕨的害虫都被魔鬼拘死。”公元前六世纪的古希腊抒情诗人”奥玛尔 \" 海亚姆(Omar Khayyam，1048 一 1122)，波斯诗人，代表作为《和鲁拜集》"
  },
  {
    "id": 303,
    "word": "grave",
    "pos": "n",
    "cnWord": "坟墓",
    "defEn": "A place in which the dead are laid to await the coming of the medical student. sre",
    "defCn": "死者的尸体被塞进这里等候医学院学生的偷偷来临，他们喜欢盗去做解剖实验。"
  },
  {
    "id": 304,
    "word": "gravitation",
    "pos": "n",
    "cnWord": "万有引力",
    "defEn": "proportion to the quantity of matter they contain -- the quantity of matter they contain being ascertained by the strength of their tendency to approach one another. This is a lovely and edifying illustration of how science, having made A the proof of B, makes B the proof of A.",
    "defCn": "，这是所有物体想挤在一起的倾向 , 吸引力的大小与物体的重量成正比一一而东西的重量，又是通过吸引力的大小来确定的。这个例子滑移地告诉我们，科学惯常先使A成为B的根据，然后反过来用B证明A。"
  },
  {
    "id": 305,
    "word": "guillotine",
    "pos": "n",
    "cnWord": "断头台",
    "defEn": "A machine which makes a Frenchman shrug his shoulders with good reason. In his great work on Divergent Lines of Racial Evolution, the learned Professor Brayfugle argues from the prevalence of this gesture -- the shrug -- among Frenchmen, that they are descended from turtles and it is simply a survival of the habit of retracing the head inside the shell. It is with reluctance that I differ with so eminent an authority, but in my judgment (as more elaborately set forth and enforced in my work entitled Hereditary Emotions -- lib. 1, c. XI) the shrug is a poor foundation upon which to build so important a theory, for previously to the Revolution the gesture was unknown. I have not a doubt that it is directly referable to the terror inspired by the guillotine! during the period of that instrument's activity. RHEE SAS a Liisi EMR RA.",
    "defCn": "这是一种让法国人很有理由答符肩膀的机器。博学的布莱耶富格勒教授在其巨著《种族进化的多种方式》中谈到流行于法国人中的答肩习性，认为这种砍势来源于乌龟把头缩进龟壳的行为。本来我并不想与这位了不起的权威过不去，但我的意见〈在我写的《遗传的情感一一解放》第二章至第十一章对此有详尽阐述 )如此论述“管肩”这一动作的起源未免过于牵强，因为在法国大革命前，还很少有“答肩”这一动作。我深信，大革命时期因为断头台的流行激起的"
  },
  {
    "id": 306,
    "word": "gunpowder",
    "pos": "n",
    "cnWord": "火药",
    "defEn": "An agency employed by civilized nations for the settlement of disputes which might become troublesome if left unadjusted. By most writers the invention of gunpowder is ascribed to the Chinese, but not upon very convincing evidence. Milton says it was invented by the devil to dispel angels with, and this opinion seems to derive some support from the scarcity of angels. Moreover, it has the hearty concurrence of the Hon. James Wilson, Secretary of Agriculture. Secretary Wilson became interested in gunpowder through an event that occurred on the Government experimental farm in the District of Columbia. One day, several years ago, a rogue imperfectly reverent of the Secretary's profound attainments and personal character presented him with a sack of gunpowder, representing it as the seed of the Flashawful flabbergastor, a Patagonian! cereal of great commercial value, admirably adapted to this climate. The good Secretary was instructed to spill it along in a furrow’ and afterward inhume’ it with soil. This he at once proceeded to do, and had made a continuous line of it all the way across a ten-acre field, when he was made to look backward by a shout from the generous donor, who at once dropped a lighted match into the furrow at the starting-point. functionary saw himself pursued by a tall moving pillar of fire and smoke | and fierce evolution. He stood for a moment paralyzed and speechless, then | he recollected an engagement and, dropping all, absented himself thence* | with such surprising celerity that to the eyes of spectators along the route selected he appeared like a long, dim streak prolonging itself with ， inconceivable rapidity through seven villages, and audibly refusing to be comforted. \"Great Scott! what is that?” cried a surveyor's chainman, shading his eyes and gazing at the fading line of agriculturist which bisected his visible horizon. \"That,\" said the surveyor, carelessly glancing at the phenomenon and again centering his attention upon his instrument, \"is the Meridian’ of Washington.\" Habeas Corpus. A writ by which a man may be taken out of jail when confined for the wrong crime.",
    "defCn": "这是文明国家用来协调那些不马上处理就会带来麻烦的争端的代理机构。大多数作家把火药的创立归功于中国人，不过提供的证据并不怎么让人信服。诗人弥尔顿说火药是魔鬼为对付天使而产生的，这个观点还有点意思，因为今日的天使确实不多了；再者，连农业部部长，尊贵的詹姆斯·威尔逊对此都深信不疑。\n威尔逊先生对火药敏感无比，是由在哥伦比亚特区一个政府实验农场发生的一件事造成的。数年前的一天，一个坏蛋对部长先生的高深造诣和精湛修养不以为然，他把一大袋火药当作南美巴塔哥尼亚印第安人的谷种献给部长。声称这种名为\"闪光雷\"的谷种有着极高的商业价值，在当时那个时节播种是再好不过了。他还教部长如何将这些谷种沿着地上犁开的凹槽倾倒下去，再盖上一层土，他就这样一行接一行地播完了10英亩的土地。突然，那个慷慨的捐种者叫了他一声，部长先生回头一看，只见那坏蛋往他开始播种的犁沟扔下一根燃烧的火柴，部长先生顿时愣了，那被泥土润湿的\"谷种\"轰地一声起火，带着滚滚浓烟，变成一条火龙向他追过来，他目瞪口呆地站在那里，突然记起还有一个重要的约会，他哇地一声扔下手中的活计，一溜烟飞奔过七个村子，也顾不上沿途人们的询问和安慰，消失在地平线，他的神奇的速度不可思议。人们惊奇地发现，部长先生的背后有一条隐约的长线腾空而起，把远方的大地一分为二。\"天啊，那是怎么回事？\"土地测量员的帮工惊叫道，他眯着双眼凝视着那条远去的长线，然后专注地从测量仪望过去，回答道：\"哦，按时通过华盛顿的子午线。\""
  },
  {
    "id": 307,
    "word": "habit",
    "pos": "n",
    "cnWord": "习惯",
    "defEn": "A shackle! for the free.",
    "defCn": "为自由而设的镀铸。"
  },
  {
    "id": 308,
    "word": "half",
    "pos": "n",
    "cnWord": "于",
    "defEn": "One of two equal parts into which a thing may be divided, or considered as divided. In the fourteenth century a heated discussion arose among theologists and philosophers as to whether Omniscience could part an object into three halves; and the pious Father Aldrovinus publicly prayed in the cathedral at Rouen that God would demonstrate the affirmative of the proposition in some signal and unmistakable way, and particularly (if it should please Him) upon the body of that hardy blasphemer’, Manutius Procinus, who maintained the negative. Procinus, however, was spared to die of the bite of a viper’.",
    "defCn": "，可以分成或假设已分成的相等的两份中的一份。早在 14 世纪时，. 神学家和哲学家就展开过一场激烈地舌战，他们争吵的中心就是 : 全能的上帝能否把一个物体分成三个一半。虔信的阿尔德罗维纳斯神父在鲁昂的教堂布道时毫不掩饰地对信徒们说 :“毋庸置疑，上帝完全能用一种看得见、果断的方式把一个物体劈成三个一半，特别是〈假如上帝喜欢的话 )在那个敢恶的渎神者马努蒂乌斯。普罗西努斯的身上证明这一，点。”后来普罗西努斯被毒蛇咬死了，未能做成实验。"
  },
  {
    "id": 309,
    "word": "halo",
    "pos": "n",
    "cnWord": "晕环",
    "defEn": "Properly, a luminous ring encircling an astronomical body, but not infrequently confounded with \"aureola’,” or \"nimbus’,\" a somewhat similar phenomenon worn as a head-dress by divinities and saints. The halo is a purely optical illusion, produced by moisture in the air, in the manner of a rainbow; but the aureola is conferred as a sign of superior sanctity, in the same way as a bishop's mitre’, or the Pope's tiara’. In the painting of the Nativity, by Szedgkin, a pious artist of Pesth, not only do the Virgin and the Child wear the nimbus, but an ass nibbling hay from the sacred manger is similarly decorated and, to his lasting honor be it said, appears to bear his unaccustomed dignity with a truly saintly grace.",
    "defCn": "确切地说，晕环指的是环绕星球的一种发亮的圆环，但它经常被胡乱地和“光环”等混用，光环是神或圣人脑袋上项着的一圈光轮。晕环不过是一种错觉 , 是由水气反射光线而形成的 , 就像天空中的彩虹一样。光环都是超凡入圣的标记 ,就象红衣主教的主教冠或罗马教皇的三层冕一样。佩斯的一位狂热的功家一一袭纪进曾画过一幅表现耶酥降生的画，在他笔下，不仅圣母和圣子头上有光环，连那头在非凡的马槽哨干草的驴子，居然驴头上也有光环放着光芒。为这位画家永垂不朽的荣誉考虑，还有必要添上一句，那头驴子的神情肃穆，恰如其分地表达了画家自己鹤立鸡群的庄重与圣洁。"
  },
  {
    "id": 310,
    "word": "hand",
    "pos": "n",
    "cnWord": "手",
    "defEn": "A singular instrument worn at the end of the human arm and commonly thrust into somebody's pocket.",
    "defCn": "这是一种妙极了的工具，装配在一个人手臂的顶端，通常是插在一个什么人的口袋里。"
  },
  {
    "id": 311,
    "word": "handkerchief",
    "pos": "n",
    "cnWord": "手帕",
    "defEn": "A small square of silk or linen, used in various ignoble! offices about the face and especially serviceable at funerals to conceal the lack of tears. The handkerchief is of recent invention; our ancestors knew nothing of it and intrusted its duties to the sleeve. Shakespeare's introducing it into the play of Othello is an anachronism: Desdemona dried her nose with her skirt, as Dr. Mary Walker and other reformers have done with their coattails in our own day -- an evidence that revolutions sometimes go backward.",
    "defCn": "一块正方形的绸布或亚麻布，在各种尴坎或不体面的场合，人们党上用它来遮脸或擦脸，特别是在葬礼上，用它来掩饰流不出来的眼泪是再称职不过的。手帕是最近才横空出世的，咱们的祖宗对它毫不了解，他们让袖子行使现在手绢的功能。莎士比亚把手帕引入《奥赛罗》”一剧把年代弄错了。当年苦丝狄梦娜本来是用裙子拱鼻子的，就像在我们这个年代玛丽。沃克博士和其他改革家用燕尾服的两个尾巴拱鼻子一样一一革命有时候是在背后进行的，这就是明证。"
  },
  {
    "id": 312,
    "word": "hangman",
    "pos": "n",
    "cnWord": "剑子手",
    "defEn": "An officer of the law charged with duties of the highest dignity and utmost gravity, and held in hereditary disesteem by a populace having a criminal ancestry. In some of the American States his functions are now i, HRZASRIAD, GET BAKE MSW. performed by an electrician, as in New Jersey, where executions by electricity have recently been ordered -- the first instance known to this lexicographer ' of anybody questioning the expediency ” of hanging Jerseymen.",
    "defCn": "2 奥赛罗是威尼斯公国的一员勇将。他与元老的女儿苦丝狄林娜相爱。但由于他是黑人，婚事未被允许。两人只好私下成婚。奥赛罗手下有一个阴险的旗官伊阿古，一心想除掉奥赛罗。他先是向元老告密，不料却促成了两人的婚事。他又挑拨奥赛罗与苔丝狄梦娜的感情，说另一名副将凯西奥与苦丝狄梦娜关系不同寻常，并伪造了所谓定情信物等。奥赛罗信以为真，在愤怒中拘死了自己的妻子。当他得知真相剑子手这是执行法律庄严使命的官员，其职责比其他任何人都要来得宝贵。当然，有犯罪血统的大伙都厌恶他，实际上他背负着一种世传的愤恨。在美国一些州，剑子手已被更先进的电工取而代之，如新泽西州，有关机构最近已经下文用电力处决罪犯。"
  },
  {
    "id": 313,
    "word": "happiness",
    "pos": "n",
    "cnWord": "幸福",
    "defEn": "An agreeable sensation arising from contemplating the misery of another.",
    "defCn": "想到另一个人的凄惨经历就涌上心头的一阵快感。"
  },
  {
    "id": 314,
    "word": "harbor",
    "pos": "n",
    "cnWord": "港口",
    "defEn": "A place where ships taking shelter from stores are exposed to the fury of the customs.",
    "defCn": "这是船长躲避海上风暴的避难所 , 但马上又置身于关税的狂暴侵袭之中。"
  },
  {
    "id": 315,
    "word": "hash",
    "pos": "x",
    "cnWord": "大杂烩",
    "defEn": "There is no definition for this word -- nobody knows what hash’ is.",
    "defCn": "这个词的定义一直很模糊，因为没有人知道大杂烩到底是什么东"
  },
  {
    "id": 316,
    "word": "hatred",
    "pos": "n",
    "cnWord": "仇恨",
    "defEn": "A sentiment appropriate to the occasion of another's superiority.",
    "defCn": "在他人比我强时，理所应当表露出的一种情绪。"
  },
  {
    "id": 317,
    "word": "head-money",
    "pos": "n",
    "cnWord": "人头税",
    "defEn": "; A capitation’ tax, or poll-tax. In ancient times there lived a king whose tax-collectors could not wring from all his subjects gold enough to make the royal way less rough. So The tax-collectors in a row appeared before the throne to pray their master to . devise some way to swell the revenue. \"So great,\" said they, \"are the demands of state a tithe’ of all that we collect will scarcely meet them. Pray reflect: how, if one-tenth we must resign, can we exist on t'other nine?” The monarch asked them in reply: \"Has it occurred to you to try the advantage of economy?\" \"It has,\" the spokesman said: \"we sold all of our gray garrotes* of gold; with plated-ware we now compress the necks of those whom we assess. Plain iron forceps we employ to mitigate? the miser's joy who hoards, with greed that never tires, that which your Majesty requires.\" deep lines of thought were seen to plow their way across the royal brow. King of Men,\" the spokesman said, \"If you'll impose upon each head a tax, the augmented revenue we'll cheerfully divide with you.\" As flashes of the sun illume the parted storm-cloud's sullen gloom, the king smiled grimly. \"T decree that it be so -- and, not to be in generosity outdone, declare you, each and every one, exempted from the operation of this new law of capitation. But lest the people censure me because they're bound and you are free, leave you now while you confer with my most trusted minister.\" The monarch from the throne-room walked and straightway in among them stalked a silent man, with brow concealed, Bare-armed -- his gleaming axe revealed! GJ. Heros, RANKER RSM.” MURR EH GA OEM HY",
    "defCn": "按照人头计算来抽税。\n古代有一位国王，他的税务官不能从老百姓那里征得足够的税去修好王家大道。他们说：\"国家要求的十一税我们再也无法筹集到了。请想一想，如果我们必须舍弃这十分之一，那么如何来留住剩下的十分之九呢？\"国王以问作答：\"你们如何来保护政府的利益？\"税务官的代表说：\"我们卖掉勒索来的黄金，再加上那些压扁的金银餐具，我们运用铁腕来减轻那些守财奴们的从不满足的贪欲，以满足陛下的要求。\"一阵深思掠过国王的眉梢，\"你们真是拼了命了，没有问题，给我一个建议吧！\"\"噢，万民之王，\"税务官代表叫道，\"如果你按照人头来征税，增加税收的话，我们将很乐意与您分成。\"从几块浓重的乌云的缝隙当中闪出了阳光的光芒，国王狰狞地笑道：\"我会按照你们的要求颁布法令的——但不要做得太过分。我宣布你们中的每一个人都免于征收人头税，但恐怕他们会责难我。他们受到盘剥你却免于征税。一个好办法是由你们自己去逃税。我要走了，我最信赖的大臣会与你们商谈。\"国王离开宝座，径直从他们中间穿过，他的眉头隐含着某种东西，唯一显露的是他闪光的斧子。"
  },
  {
    "id": 318,
    "word": "hearse",
    "pos": "n",
    "cnWord": "死神的小推车",
    "defEn": "Death's baby-carriage.",
    "defCn": "死神的小推车。"
  },
  {
    "id": 319,
    "word": "heart",
    "pos": "n",
    "cnWord": "心脏",
    "defEn": "An automatic, muscular blood-pump. Figuratively, this useful organ is said to be the esat of emotions and sentiments -- a very pretty fancy which, , however, is nothing but a survival of a once universal belief. It is now evolved from food by chemical action of the gastricl fluid. The exact process by which a beefsteak becomes a feeling -- tender or not, according to the age of the animal from which it was cut; the successive stages of elaboration through which a caviar’ sandwich is transmuted to a quaint fancy and reappears as a pungent epigram; the marvelous functional methods of converting a hard-boiled egg into religious contrition, or a cream-puff into a sigh of sensibility -- these things have been patiently ascertained by M. Pasteur, and by him expounded with convincing lucidity. In a scientific work entitled, I believe, Delectatio Demonorum this view of the sentiments receives a striking illustration; and for further light consult Professor Dam's famous treatise on Love as a Product of Alimentary! Maceration’. (Ria) FH.",
    "defCn": "一种用肌肉制成的自动抽血泵。人们视它为情感的家园——这不过是一种美妙的胡思乱想，可是在以前，这可是广为流布的观念。现代科学表明，胃才是人类情感的繁殖地，食物在胃液的化学作用之下转化成七情六欲。一块牛排化成一道情绪——情绪是否新鲜取决于所吃的牛的年岁大小——这一转变的精确过程到底是怎么一回事？鱼子酱、三明治化成一片奇怪的幻象，脱口而出的一句辛辣的格言，这繁复的转化需要经历哪几个阶段？一个煮得太老的鸡蛋结果变成了一种宗教上的悔恨交加，或者一个奶油点心变成了一声缠绵温柔的叹息，这些奇妙的变化是怎么产生的？科学大师巴斯德先生已经用清晰明了的语言耐心地为我们作了解答。有一本名为《魔鬼的享乐》的科学著述有趣地讲述了消化与情感的关系。要想对肠胃与情感的关系作进一步的了解，可参考丹姆教授的杰出论文《爱——浸透营养的产儿》。"
  },
  {
    "id": 320,
    "word": "heaven",
    "pos": "n",
    "cnWord": "听",
    "defEn": "A place where the wicked cease from troubling you with talk of their personal affairs, and the good listen with attention while you expound your own. FEAT, MAE RAZA eA, Alt eR",
    "defCn": "了被他们骚扰的烦恼，而当你讲述自己的琐事时，他们却一个个洗耳蕉"
  },
  {
    "id": 321,
    "word": "helpmate",
    "pos": "n",
    "cnWord": "内助",
    "defEn": ", A wife, or bitter half. ; \"Now, why is yer wife called a helpmate’, Pat?\" Says the priest. \"Since the time 'o yer wooin' she's niver [sic] assisted in what ye were at --For it's naught ye are ever doin’.\" ， contrition envices; \"But, bedad, it's a fact which the word implies, for she helps to mate the expinses [sic]!\" Marley Wottel",
    "defCn": "即妻子，或称苦难的一半。“帕特，你为何把你的麦子称为内助 ?”神父问 ,“自从你获得她以来 ,没有看见她帮助你什么。啊 , 懂了 ! 就是实际上什么事情也没做。”帕特满不在乎地答道 :“没错，和神父大人，内助这个词的含义正是如此，我俑配成一对，她帮助我花钱。?”马利。沃特尔:helpmate n. 助手，伴侣，配偶《〈通常指妻子，有时也指丈夫 )"
  },
  {
    "id": 322,
    "word": "hemp",
    "pos": "n",
    "cnWord": "大麻",
    "defEn": "A plant from whose fibrous bark! is made an article of neckwear which is frequently put on after public speaking in the open air and prevents the wearer from taking cold.",
    "defCn": "这是一种植物，人们用它树皮中所含的纤维做成围巾。这种围巾常常在露天演讲完毕后围在演说者的颈部以避他伤风着凉。"
  },
  {
    "id": 323,
    "word": "hermit",
    "pos": "n",
    "cnWord": "隐士",
    "defEn": "A person whose vices and follies are not sociable.",
    "defCn": "这种人的恶行和套事都无法与他人进行交流。"
  },
  {
    "id": 324,
    "word": "hers",
    "pos": "pron",
    "cnWord": "她的",
    "defEn": "His.",
    "defCn": "就是他的。"
  },
  {
    "id": 325,
    "word": "historian",
    "pos": "n",
    "cnWord": "历史学家",
    "defEn": "A broad-gauge” gossip.",
    "defCn": "一个没有偏见的饶舌者。"
  },
  {
    "id": 326,
    "word": "history",
    "pos": "n",
    "cnWord": "历史",
    "defEn": "An account mostly false, of events mostly unimportant, which are brought about by rulers mostly knaves', and soldiers mostly fools.",
    "defCn": "它记载的多数内容都是荒诞无稽，无足轻重。它记录的统治者多数是坏人，士兵则多半是傻瓜。"
  },
  {
    "id": 327,
    "word": "hog",
    "pos": "n",
    "cnWord": "属于洛克菲勒的",
    "defEn": "A bird remarkable for the catholicity” of its appetite and serving to illustrate that of ours. Among the Mahometans and Jews, the hog is not in ， its voice. It is chiefly as a songster that the fowl is esteemed; the cage of him in full chorus has been known to draw tears from two persons at once. The scientific name of this dicky-bird is Porcus Rockefelleri. Mr. Rockefeller did not discover the hog, but it is considered his by right of resemblance.",
    "defCn": "，这是一种以食量大而著称的鸟 , 有时我们用它来形容一个人的好寺口。在伊斯兰教徒和狐太人心里，猪肉是不宜食用的，但猪以其优雅的仪表、美丽的鸟毛和甜美的嗓音获得了普遍的喜爱。这种家全主要是作为一名歌唱家而深受大伙的拥戴，它在大笼子里放声了旷唱，确实感人至深，足以使两人漠然泪下。这种鸟的学名叫洛克菲勒猪，但它并不是洛克菲勒先生发现的，由于它同洛克菲勒有众多相似之处，所以被认为是属于洛克菲勒的。"
  },
  {
    "id": 328,
    "word": "homicide",
    "pos": "n",
    "cnWord": "杀人者",
    "defEn": "The slaying of one human being by another. There are four kinds of homocide: felonious’, excusable, justifiable, and praiseworthy, but it makes no great difference to the person slain whether he fell by one kind or another -- the classification is for advantage of the lawyers.",
    "defCn": "一个人杀死另一个。可以分为四种类型 : 罪该万死的、情有可原的，无可非议的和值得赞许的，对于被杀者而言，无论死于哪种类型结果都是一样的一一但对律师而言，这样的分类却能使他们拿到更多的钱。"
  },
  {
    "id": 329,
    "word": "homiletics",
    "pos": "n",
    "cnWord": "布道术",
    "defEn": "The science of adapting sermons to the spiritual needs, capacities and conditions of the congregation”. So skilled the parson was in homiletics’ that all his normal purges and emetics* to medicine the spirit were compounded with a most just discrimination founded upon a rigorous examination of tongue and pulse and heart and respiration’. Then, having diagnosed each one's condition, his scriptural specifics this physician administered -- his pills so efficacious® and pukes’ of disposition so vivacious that souls afflicted with ten kinds of Adam were convalescent ere they knew they had 'em. But Slander's tongue -- itself all coated — uttered her bilious' mind and scandalously muttered that in the case of patients having money the pills were sugar and the pukes were honey. Biography of Bishop Potter",
    "defCn": "这是一种能使说教适合各种不同的心灵需求和社会地位的教徒的学问。那牧师大人精通医术，他热心地为教友们诊断病情，按舌头、脉捕和出汗的情形把教友公正地分为几个阶段，然后用道德的泻药和催吐剂为众教友治疗灵魂的毛病。每当一个教友诊断完毕，牧师就从《圣经》中开出秘方，他的催吐剂是那么厉害，他的泻药一招搞定，教友们还没. 弄明白，回春妙手就已把他灵魂的罪恶清洗地干干净净，使得他的灵魂卫生文明。但是披着迷人外衣的诽谤者以醉苇之意散步流言压语，说 :牧师为有钱人看病，给的药九摊了糖，衷了蜜。《波特主教传》",
    "footnotes": [
      {
        "term": "homiletics",
        "pos": "n.",
        "gloss": "说教术"
      }
    ]
  },
  {
    "id": 330,
    "word": "honorable",
    "pos": "adj",
    "cnWord": "尊敬的",
    "defEn": "Afflicted with an impediment in one's reach. In legislative bodies it is customary to mention all members as honorable; as, \"the honorable gentleman is a scurvy cur.\"",
    "defCn": "因想有所动作而又有所顾忌让人头痛不已的一种叫法。司法机关习惯于把所有与政府有关的人都称为“尊敬的”如“那位尊敬的绅士实在是条赖皮狗”。"
  },
  {
    "id": 331,
    "word": "hope",
    "pos": "n",
    "cnWord": "希望",
    "defEn": "Desire and expectation rolled into one. Delicious Hope! when naught to man it left -- Of fortune destitute, of friends bereft; When even his dog deserts him, And his goat with tranquil disaffection chews his coat While yet it hangs upon his back; then thou, The star far-flaming on thine angel brow, Descendest, radiant, from the skies to hint The promise of a clerkship in the Mint. Fogarty Weffing Lt ith Werk HHI AY RR, BLE R AR, Are! FFE HY Hse Heke AR OR HOARE Hh OH,",
    "defCn": "欲望和期待的混合物。\n美好的希望！当一个人沦落到一无所有——\n没有钱，也没有朋友，\n连他的爱犬和山羊也弃他而去，\n山羊不满地咬着他拖拉的衣裳，\n此时只有你，希望！\n在高高的天国\n用璀璨的星光向他眨眼暗示——他像造币厂的雇员一样，\n巨大的财富正在他身边膨胀。"
  },
  {
    "id": 332,
    "word": "hospitality",
    "pos": "n",
    "cnWord": "好客",
    "defEn": "The virtue which induces us to feed and lodge certain persons who are not in need of food and lodging.",
    "defCn": "这种美德诱使我们为一些人提供食宿，尽管他们并无此意。"
  },
  {
    "id": 333,
    "word": "hostility",
    "pos": "n",
    "cnWord": "敌意",
    "defEn": "A peculiarly sharp and specially applied sense of the earth's overpopulation. Hostility is classified as active and passive; as (respectively) the feeling of a woman for her female friends, and that which she entertains for all the rest of her sex.",
    "defCn": "因地球上人口过于拥挤而产生的一种异常强烈而特别的感觉。敌意可以分为主动和被动两种，例如，一个女人对她女友的敌意是主动的，"
  },
  {
    "id": 334,
    "word": "house",
    "pos": "n",
    "cnWord": "房屋",
    "defEn": "A hollow edifice erected for the habitation of man, rat, mouse, beetle, cockroach!, fly, mosquito, flea, bacillus” and microbe’. ， House of Correction, a place of reward for political and personal ， service, and for the detention of offenders and appropriations. House of God, a building with a steeple and a mortgage“ on it. House-dog, a pestilent® beast kept on domestic premises to insult persons passing by and appail the hardy visitor. House-maid, a younger person of the opposing sex employed to be variously disagreeable and ingeniously unclean in the station in which it has pleased God to place her. Ay RUPE RAR ETN AES",
    "defCn": "这是一种中空的建筑，用来供人、老鼠、甲虫、蜂螂、苍蝇、蚊子、跳蚤和病菌居住的。教养院是奖励政绩和个人建树的好去处，也是拘留违法乱纪分子与挪用公款者的地方。教堂是一种有着尖尖的屋顶，用作抵押的建筑物。看家狗是一种养在家里的凶猛动物，其目的是侮辱从门前经过的女仆是一个雇来做杂务的年轻女子，在上帝赐给她的位置上，她实在是车人嫌，脏得也够可以。"
  },
  {
    "id": 335,
    "word": "houseless",
    "pos": "adj",
    "cnWord": "无家可归的",
    "defEn": "Having paid all taxes on household goods.",
    "defCn": "家里所有的东西都缴了税。"
  },
  {
    "id": 336,
    "word": "hovel",
    "pos": "n",
    "cnWord": "贫民窟",
    "defEn": "The fruit of a flower called the Palace. aR",
    "defCn": "一种叫摩天大楼的花儿结出的恶果。"
  },
  {
    "id": 337,
    "word": "humanitarian",
    "pos": "n",
    "cnWord": "人道主义者",
    "defEn": "A person who believes the Savior was human and himself is divine.",
    "defCn": "这是一个确信上帝是人而他是上帝的人。"
  },
  {
    "id": 338,
    "word": "humanity",
    "pos": "n",
    "cnWord": "人类",
    "defEn": "The human race, collectively, exclusive of the anthropoid! poets.",
    "defCn": "指所有的人，这是一个集体名词，但不包括那些像猿猴一样的诗人。"
  },
  {
    "id": 339,
    "word": "humorist",
    "pos": "n",
    "cnWord": "幽默家",
    "defEn": "A plague that would have softened down the hoar austerity of Pharaoh's heart and persuaded him to dismiss Israel with his best wishes, cat-quick. RE-AAVARWEER, BESERAEAT E, RAR",
    "defCn": "及法老的铁石心肠，促使他给予以色列人以最美好的祝愿，打发他们里. 早离开埃及。"
  },
  {
    "id": 340,
    "word": "hurricane",
    "pos": "n",
    "cnWord": "飓风",
    "defEn": "An atmospheric demonstration once very common but now generally abandoned for the tornado and cyclone. The hurricane is still in popular use in the West Indies and is preferred by certain old-fashioned sea-captains. It is also used in the construction of the upper decks of steamboats, but generally speaking, the hurricane's usefulness has outlasted” it. hurry, 7. The dispatch of bunglers'.",
    "defCn": "原来是一种很常见的空气示威运动，现在已被龙卷风和台风返走。不过在西印度群岛还有它的存身之地，一些老派的船长特别钟爱他。它经常参与对汽船甲板的改造 , 不过总而言之 , 帜风的寿命远远超过汽船。仓促呆头呆脑的敏捷。"
  },
  {
    "id": 341,
    "word": "husband",
    "pos": "n",
    "cnWord": "丈夫",
    "defEn": "One who, having dined, is charged with the care of the plate.",
    "defCn": "吃喝之后担当起洗碗重任的人。"
  },
  {
    "id": 342,
    "word": "hydra",
    "pos": "n",
    "cnWord": "九头蛇",
    "defEn": "A kind of animal that the ancients catalogued under many heads.",
    "defCn": "一 -种生活在希腊神话里的动物，古人将其编入多头纲目。"
  },
  {
    "id": 343,
    "word": "hyena",
    "pos": "n",
    "cnWord": "党狗",
    "defEn": "A beast held in reverence by some oriental nations from its habit of frequenting at night the burial-places of the dead. But the medical student does that. . iia RDA AAI OMA BE, Ey eR A He TEA bs ars) bat aoe ft <M aig = is the first letter of the alphabet, the first word of the language, the first thought of the mind, the first object of affection. In grammar it is a pronoun of the first person and singular number. Its plural is said to be We, but how ! there can be more than one myself is doubtless clearer the grammarians than it is to the author of this incomparable dictionary. Conception of two myselfs is difficult, but fine. The frank yet graceful use of \"I\" distinguishes a good writer from a bad; the latter carries it with the manner of a thief trying to cloak! his loot’.",
    "defCn": "埋葬之处一一值得一提的是，尾学院的学生也是如此。“我”是字母表的第一个字母，英文的第一个词，内心的第一个念头，感情的主要对象。以语法而言，属于第一人称单数。据称它的复数形式是“我们”关于到底怎么可能有一个以上的“我自己”语法学家看样子是很明白的，而作为这部无出其右的词典的作者却不大明白了。两个“我自己”的概念不好想像 , 却是很好玩。坦诚而风趣地运用了“我”字 ,，是了不起的作家超越那些糟透了的作家的地方，那帮糟透了的作家在提着“我”这个词时，老是躲躲内内，犹如小偷竭力想要隐藏他的峙"
  },
  {
    "id": 344,
    "word": "iconoclast",
    "pos": "n",
    "cnWord": "偶像破坏者",
    "defEn": "A breaker of idols, the worshipers whereof are imperfectly gratified by the performance, and most strenuously protest that he unbuildeth but doth not reedify', that he pulleth down but pileth not up. For the poor things would have other idols in place of those he thwacketh upon the mazzard and dispelleth. But the iconoclast saith: \"Ye shall have none at all, for ye need them not; and if the rebuilder fooleth round hereabout, behold I will depress the head of him and sit thereon till he squawk’ it.\"",
    "defCn": "一个砸倒介像的人。偶像崇拜者对他的行动很不满，激愤地指责他只会破坏，不会建设。原来这群可怜的人渴望用别的什么偶像代替被他打掉脑袋的那些偶像。偶像破坏者说 :“你们以后将不再有任何偶像，因为你们用不着了。谁要是胆敢在这里立偶像，我就把他的头按下去，一屁股坐上去，让他蝗啤乱叫。”"
  },
  {
    "id": 345,
    "word": "idiot",
    "pos": "n",
    "cnWord": "重建改筑",
    "defEn": "A member of a large and powerful tribe whose influence in human affairs has always been dominant and controlling. The Idiot's activity is not confined to any special field of thought or action, but \"pervades and regulates the whole.” He has the last word in everything; his decision is unappealable. He sets the fashions and opinion of taste, dictates the limitations of speech and circumscribes' conduct with a deadline.",
    "defCn": "一个了不得的种族中的一员。白痴一族在人类事务中的影响历来是起决定作用的。白辣的活动不受到任何特定思想和行动范畴的束缚，相反，它“充斥着人类的全部活动并决定一切。”一切都由他说了算，他的决定不可申诉。他确立了时尚和品位，规定了讲话的种种限制，给人，们的行为设定了界限。"
  },
  {
    "id": 346,
    "word": "idleness",
    "pos": "n",
    "cnWord": "懒惰",
    "defEn": "A model farm where the devil experiments with seeds of new sins and : promotes the growth of staple” vices.",
    "defCn": "，这是一处专供人效仿的农场 , 魔鬼播下了新式的罪恶种子以促进恶行的大面积推广。"
  },
  {
    "id": 347,
    "word": "ignoramus",
    "pos": "n",
    "cnWord": "笨人",
    "defEn": "A person unacquainted with certain kinds of knowledge familiar to yourself, and having certain other kinds that you know nothing about. Dumble was an ignoramus?, Mumble‘ was for learning famous. . 3 ignoramus no PERMA, RRA Mumble said one day to Dumble: \"Ignorance should be more humble. Not a spark have you of knowledge that was got in any college.\" Dumble said to Mumble: \"Truly you're self-satisfied unduly. Of things in college I'm denied a knowledge -- you of all beside.\" | Borelli Iliuminati, 7. A sect of Spanish heretics of the latter part of the sixteenth century; so called because they were light weights -- cunctationes illuminati’.",
    "defCn": "这是一个对自己熟悉的某种知识一无所知，却对你一无所知的某种知识却了如指掌的家伙。\n哑哑是个笨人，咕哝则是一名学者。某天咕哝指责哑哑：\"无知者要更谦虚一些，你对大学的知识一无所知。\"哑哑马上进行反击：\"不要那么猖狂，我对大学的知识没有兴趣，对你的事情却清楚得很。\""
  },
  {
    "id": 348,
    "word": "illustrious",
    "pos": "adj",
    "cnWord": "显赫的",
    "defEn": "Suitably placed for the shafts of malice, envy and detraction.",
    "defCn": "刚好作为泄愤的靶子，让怨恨、嫉妒和诽谤一箭箭地穿过。"
  },
  {
    "id": 349,
    "word": "imagination",
    "pos": "n",
    "cnWord": "想像",
    "defEn": "A warehouse of facts, with poet and liar in joint ownership.",
    "defCn": "这是一个塞满事实的库房，为诗人和骗子共同拥有。"
  },
  {
    "id": 350,
    "word": "imbecility",
    "pos": "n",
    "cnWord": "低能",
    "defEn": "A kind of divine inspiration, or sacred fire affecting censorious’ critics ) EK.",
    "defCn": "这是神赐予的一种感觉 , 或者说是激励批评家对本词典吹毛求钼的"
  },
  {
    "id": 351,
    "word": "immigrant",
    "pos": "n",
    "cnWord": "移民",
    "defEn": "， An unenlightened” person who thinks one country better than another.",
    "defCn": "这是一个脑袋不开穿的家伙，他误以为一个国家比另一个国家要"
  },
  {
    "id": 352,
    "word": "immodest",
    "pos": "adj",
    "cnWord": "不谦虚的",
    "defEn": "Having a strong sense of one's own merit, coupled with a feeble conception of worth in others.",
    "defCn": "满脑子都是自己的优点，对他人的价值视而不见，充耳不闻。"
  },
  {
    "id": 353,
    "word": "immortality",
    "pos": "n",
    "cnWord": "不朽",
    "defEn": "A toy which people cry for, and on their knees apply for, dispute, contend and lie for, and if allowed would be right proud eternally to die for. BVARTESREIMMRAA, RIF BR, AMF. BR, AT",
    "defCn": "杀不休，甚至永远地献出了自己的生命。噶萨拉斯卡，杰普神父"
  },
  {
    "id": 354,
    "word": "impartial",
    "pos": "adj",
    "cnWord": "公正的",
    "defEn": "Unable to perceive any promise of personal advantage from espousing’ either side of a controversy or adopting either of two conflicting opinions.",
    "defCn": "对发生争执的双方或相对立的两种看法进行一番观察，看不出对自己有什么好处，就采取中立态度，对任何一方都支持。"
  },
  {
    "id": 355,
    "word": "impenitence",
    "pos": "n",
    "cnWord": "不知悔改",
    "defEn": "A state of mind intermediate in point of time between sin and punishment.",
    "defCn": "一种来在罪与罚之间的精神状态。"
  },
  {
    "id": 356,
    "word": "impiety",
    "pos": "n",
    "cnWord": "不虔诚",
    "defEn": "Your irreverence’ toward my deity.",
    "defCn": "对我的神表示不敬。"
  },
  {
    "id": 357,
    "word": "imposition",
    "pos": "n",
    "cnWord": "按手礼",
    "defEn": "The act of blessing or consecrating by the laying on of hands -- a ceremony common to many ecclesiastical systems, but performed with the frankest sincerity by the sect known as Thieves. . swear till all is blue at such an imposition. Do.\" Pollo Doncas BBRE, REST.”",
    "defCn": "把手放上去表示祝福或献祭——这在许多教派里很常见，不过\"偷盗派\"在行按手礼时表现得最为率真。\n牧师、神父和阿訇说：\"行按手礼，把你的金币和属地献给上帝，虔诚发誓，双手合十。\""
  },
  {
    "id": 358,
    "word": "impostor",
    "pos": "n",
    "cnWord": "冒名顶替者",
    "defEn": "Arival aspirant’ to public honors. a ie",
    "defCn": "在追名逐利时撞到一起的对头。"
  },
  {
    "id": 359,
    "word": "improvidence",
    "pos": "n",
    "cnWord": "目光短浅",
    "defEn": "Provision for the needs of to-day from the revenues of to-morrow.",
    "defCn": "用未来的收入支付现在的花销。"
  },
  {
    "id": 360,
    "word": "inauspiciously",
    "pos": "adv",
    "cnWord": "不详地",
    "defEn": "In an unpromising manner, the auspices being unfavorable. Among the Romans it was customary before undertaking any important action or enterprise to obtain from the augurs!, or state prophets, some hint of its probable outcome; and one of their favorite and most trustworthy modes of divination consisted in observing the flight of birds -- the omens” thence derived being called auspices. Newspaper reporters and certain miscreant° lexicographers have decided that the word -- always in the plural -- shall mean \"patronage\" or \"management\"; as, \"The hilarities* were auspicated5 by the Knights of Hunger.\"",
    "defCn": "预兆不详，似有凶险。古罗马人每逢大事，都要先请占卜师或先知们预测凶险。他们最喜欢也最有用的占卜方式是观察鸟儿的飞翔一一由比得到的预兆称为“auspices”。但不少护劣的词典编纂家都将此词赋予“赞助”或“经营”的意思，记者大人们更以此意用在新闻报道中，如) augur站(十罗马用观察飞鸟行动等方法预仆未来的 )占下师，预言者“这次狂欢节是在“腹中空空骑士团”的赞助下进行的”等等。"
  },
  {
    "id": 361,
    "word": "income",
    "pos": "n",
    "cnWord": "收入",
    "defEn": "The natural and rational gauge’ and measure of respectability, the commonly accepted standards being artificial, arbitrary” and fallacious’; for, as \"Sir Sycophas Chrysolater\" in the play has justly remarked, \"the true use and function of property (in whatsoever it consisteth -- coins, or land, or houses, or merchant- stuff, or anything which may be named as holden of right to one's own subservience) as also of honors, titles, preferments and place, and all favor and acquaintance of persons of quality or ableness, are worth in measure of their serviceableness to that end; and their possessors should take rank in agreement thereto, neither the lord of an unproducing manor, howsoever broad and ancient, nor he who bears an unremunerate : dignity, nor yet the pauper favorite of a king, being esteemed of level : excellency with him whose riches are of daily accretion’; and hardly should ， they whose wealth is barren claim and rightly take more honor than the poor and unworthy.\"",
    "defCn": "衡量一个人能和否值得敬重的合情合理的标准，通常大家所接受的其他各种标准都是做作的、随意的、匾雇的。正如西克法斯。克莱索雷特事士所说，财富的真正用处就是带来金钱。不管它体现为何种形态一一金币、土地、房产、商品或其他所有能给拥有者带来利益的东西，最终回归到金钱。荣耀、头衔、高位或与权贵人物的交往同样也是以金钱为最终目的。因此，任何东西是否有用，当然都是由它能和否带来金钱决定的 , 拥有者的社会地位也取决于此 .。领地广亡却颗粒无收的地主老爷，不管他的庄园是多么历史悠久，和日进斗金的人相比实在是人微言轻。身居要职却囊中空空之辈 , 即便是国王的重丰 , 和财大气粗的富豪相比，也要委曲求全，被人看作低贱之人。",
    "footnotes": [
      {
        "term": "fallacious",
        "pos": "adj.",
        "gloss": "错误的，靠不住的，虚妄的"
      }
    ]
  },
  {
    "id": 362,
    "word": "incompatibility",
    "pos": "n",
    "cnWord": "势不两立",
    "defEn": "In matrimony’ a similarity of tastes, particularly the taste for domination.",
    "defCn": "在夫妻间，它实际上指一种相同的兴趣爱好，尤其是指那种想控制对方的爱好。"
  },
  {
    "id": 363,
    "word": "incompossible",
    "pos": "adj",
    "cnWord": "不共戴天的",
    "defEn": "Unable to exist if something else exists. Two things are incompossible when the world of being has scope enough for one of them, but not enough for both -- as Walt Whitman's poetry and God's mercy to man. Incompossibility, it will be seen, is only incompatibility let loose. Instead of such low language as \"Go heel yourself -- I mean to kill you on sight,” the words, \"Sir, we are incompossible,\" would convey and equally significant intimation” and in stately courtesy are altogether superior.",
    "defCn": "不能和别人共同生存。如果世界只能装得下两个东西中的一个，而没有足够的地方同时接纳两个 , 那么这两个东西就不共戴天一一比如沃上而言 ,“势不两立”与“不共戴天”两个词，相辅相成，差别不那么大，我们可以略嫌粗野地说 :“小子，要小心点，老子要宁了你。”也可以文质彬彬地说 :“先生，对不起，我们很难共处。”这两者传递的意思是一样的。"
  },
  {
    "id": 364,
    "word": "incumbent",
    "pos": "n",
    "cnWord": "在职者",
    "defEn": "A person of the liveliest interest to the outcumbents.",
    "defCn": "，这是一个对职责之外的事情有着最强烈兴趣的人。"
  },
  {
    "id": 365,
    "word": "indecision",
    "pos": "n",
    "cnWord": "犹豫不决",
    "defEn": "The chief element of success; \"for whereas,\" saith Sir Thomas : Brewbold, \"there is but one way to do nothing and divers way to do : something, whereof, to a surety, only one is the right way, it followeth that ， he who from indecision standeth still hath not so many chances of going astray as he who pusheth forwards\" -- a most clear and satisfactory exposition on the matter. RRA ERUOWESZAR. HS HeRBRRLE: “HF",
    "defCn": "什么都不用做，所以只有一种选择，而要去做什么则会面临多种选择，只读过五六年书，十几年就外出谋生。他当过排字工人、木工、泥水区、农村教师和编辑等。惠特曙勤奋好学，利用业余时间阅读了大量世界文学名著。他从 19 tt纪 40 年代起开始写诗，于 1855 年出版了他的代表作《草叶集》。无疑其中只有一种选择是恰当的，因此，因优柔寡断而囊足不前的人和奋勇前进的人相比，误入歧途的危险要小很多。”一这是对优柔寡断这个词最清楚和最令人满意的解释。"
  },
  {
    "id": 366,
    "word": "indifferent",
    "pos": "adj",
    "cnWord": "漠不关心的",
    "defEn": "Imperfectly sensible to distinctions among things. to all in life.\" is not worth while.\" ; M. Gokul",
    "defCn": "对事物之间的差别不太清楚。“你这烦人的家伙 !”印多兰西奥的妻子喊道 ,“你对生活中的一切都不关心了 .”“不关心 ?”他微微一笑，“我一直在关心，亲爱的，可我总觉得它们不值得关心。”M: 高库尔"
  },
  {
    "id": 367,
    "word": "indigestion",
    "pos": "n",
    "cnWord": "消化不良",
    "defEn": "A disease which the patient and his friends frequently mistake for deep religious conviction and concern for the salvation of mankind. As the simple Red Man of the western wild put it, with, it must be confessed, a certain force: \"Plenty well, no pray; big bellyache’, heap God.\"",
    "defCn": "; 这是一种病 , 患者和他的朋友通常错误地把它和深沉的宗教信仰以及对拯救人类的关心混为一谈。西部荒原里头脑简单，举止粗野的红种人说得好 :“平时乐呵呵，哪里想祷告，一旦肚子痛，忙把上帝找。”"
  },
  {
    "id": 368,
    "word": "indiscretion",
    "pos": "n",
    "cnWord": "轻浮",
    "defEn": "The guilt of woman.",
    "defCn": "女人特有的罪过。"
  },
  {
    "id": 369,
    "word": "inexpedient",
    "pos": "adj",
    "cnWord": "不明智的",
    "defEn": ". Not calculated to advance one's interests.",
    "defCn": "盘算得不够周密，不能给自己带来好处。"
  },
  {
    "id": 370,
    "word": "infancy",
    "pos": "n",
    "cnWord": "幼年",
    "defEn": "The period of our lives when, according to Wordsworth, \"Heaven lies about us.\" The world begins lying about us pretty soon afterward.",
    "defCn": "这是我们生命中的一个阶段，按照华北华斯 :的说法 ,“天国环绕在我们周围。”但这一阶段一晃而过，接着喧嚣的尘世就向我们包抄过来。' 威廉，华北华斯《William Wordsworth，1770 一 1850)，英国诗人。与柯勒律治、骚塞同被称为“湖畔派”诗人。华兹华斯生于律师之家，少孤，就学于剑桥大学，1790 年和 1791 年两次赴法。当时正是法国大革命的年代，年轻的华兹华斯对革命深表同情与向往。回国后不入，局势剧变 ,华北华斯对法国大革命的态度渐趋保守，最后，终于成为安享“桂冠许人”称号的保守派。"
  },
  {
    "id": 371,
    "word": "infidel",
    "pos": "n",
    "cnWord": "蜡教徒",
    "defEn": "In New York, one who does not believe in the Christian religion; in Constantinople!, one who does. In politics, a visionary quo given in exchange for a substantial quid.",
    "defCn": "在纽约，指不信基督教的人 ;在君士坦丁堡，指信基督教的人。影响力在政治上，影响力就是能用想像的一分钱换得真实的一块钱的能"
  },
  {
    "id": 372,
    "word": "ingrate",
    "pos": "n",
    "cnWord": "忘恩负义者",
    "defEn": "One who receives a benefit from another, or is otherwise an object of charity. one day who never since has cursed me to repay, nor vilified.\" overcome, and fain would have his blessing.” dumb.\" Ariel Selp",
    "defCn": "从他人那里获得收益的人，或者说是施舍的对象。\n\"所有的人都是忘恩负义的家伙。\"愤世嫉俗者讥笑道。\n\"不，\"好心的慈善家答道，\"有一天，我对一个人做了一件大好事，作为报答，他打那之后再也没有骂过我。\"\n\"哦！\"愤世嫉俗者喊道，\"这真让我感到敬佩，让我见见他，我也想得到他的祝福。\"\n\"恐怕要让你失望了——我很抱歉地告诉你，他是一个哑巴，无法祝福你。\""
  },
  {
    "id": 373,
    "word": "injury",
    "pos": "n",
    "cnWord": "伤害",
    "defEn": "| An offense next in degree of enormity to a slight.",
    "defCn": "这是一种冒犯，就其程度而言要轻于茂视。"
  },
  {
    "id": 374,
    "word": "injustice",
    "pos": "n",
    "cnWord": "不公正",
    "defEn": "| A burden which of all those that we load upon others and carry ourselves is lightest in the hands and heaviest upon the back.",
    "defCn": "这是一种负担，当我们手头的这种负担强加在别人身上时，它是轻款昧的，当别人把这种负担强加到我们身上时，它却让人不堪重负。"
  },
  {
    "id": 375,
    "word": "innocence",
    "pos": "n",
    "cnWord": "讨论商议",
    "defEn": "The state or condition of a criminal whose counsel’ has fixed the jury.",
    "defCn": "一个罪犯的辩护律师把陪审团搞定之后被宣判的结果。"
  },
  {
    "id": 376,
    "word": "insurance",
    "pos": "n",
    "cnWord": "保险",
    "defEn": "An ingenious modern game of chance in which the player is permitted to enjoy the comfortable conviction that he is beating the man who keeps the table.",
    "defCn": "这是一种绝妙的，靠运气获胜的现代游戏，它使玩家乐颠颠地确信他能打败庄家。"
  },
  {
    "id": 377,
    "word": "insurrection",
    "pos": "n",
    "cnWord": "府取而代之但却没有成功",
    "defEn": "An unsuccessful revolution. Disaffection''s failure to substitute misrule for bad government.",
    "defCn": "一场未成功的革命，对一个暴虐的政府不满，想用另一个这样的政府取而代之，但却没有成功。"
  },
  {
    "id": 378,
    "word": "interpreter",
    "pos": "n",
    "cnWord": "口译员",
    "defEn": "One who enables two persons of different languages to understand each other by repeating to each what it would have been to the interpreter's advantage for the other to have said.",
    "defCn": "他能使两个操不同语言的人相互理解 ,办法是用对自己有利的方式向他们重复彼此想向对方说的话。"
  },
  {
    "id": 379,
    "word": "interregnum",
    "pos": "n",
    "cnWord": "空位期",
    "defEn": "The period during which a monarchical country is governed by a warm spot on the cushion of the throne. The experiment of letting the spot grow cold has commonly been attended by most unhappy results from the zeal of many worthy persons to make it warm again.",
    "defCn": "在旧王鸭裔、新王尚未即位的特殊时期，国家由王座上的一小块带着先王体温的坐垫统治着。由于众多权贵热衷于使那渐渐凉下去的垫子重新暖和起来 , 因此那种听任这一小块垫子冷却的试验往往以极不愉快"
  },
  {
    "id": 380,
    "word": "intimacy",
    "pos": "n",
    "cnWord": "亲密",
    "defEn": "| A relation into which fools are providentially' drawn for their mutual | destruction.",
    "defCn": "大货们由于老天的凌合缔结这段良缘 ,其目的是为了让他们相互毁"
  },
  {
    "id": 381,
    "word": "introduction",
    "pos": "n",
    "cnWord": "介绍",
    "defEn": "A social ceremony invented by the devil for the gratification of his servants and the plaguing of his enemies. The introduction attains its most malevolent’ development in this century, being, indeed, closely related to our political system. Every American being the equal of every other American, it follows that everybody has the right to know everybody else, which implies the right to introduce without request or permission. The Declaration of Independence should have read thus: that they are endowed by their Creator with certain inalienable’ rights; that among these are life, and the right to make that of another miserable by thrusting upon him an incalculable quantity of acquaintances; liberty, particularly the liberty to introduce persons to one another without first ascertaining’ if they are not already acquainted as enemies.”",
    "defCn": "这是恶魔发明的旨在奖励他的狗腿子、折磨他的对头的社交礼仪，它在美国得到了极为迅猛的发展。没错，这与美国的整体密切相连。由于每个美国人与其他人都是平等的，因此他们中的每一个都有权认识其他人，也就是说美国人都具有不经申请或允许就进行介绍的权利。《独立宣言》本应该这么写：\n\"我们确信下面的真理是不言自明的：所有的人生而平等；上帝赋予他们一些不可剥夺的权利，其中包括生活权以及用数不清的熟人把另一个包围起来从而使他的生活悲惨无比的权利；还包括自由权，特别是介绍人们相互认识却不清楚对方是否是敌人的权利。\""
  },
  {
    "id": 382,
    "word": "inventor",
    "pos": "n",
    "cnWord": "发明家",
    "defEn": "A person who makes an ingenious arrangement of wheels, levers and springs’, and believes it civilization.",
    "defCn": "一个热衷于巧妙地把轮子、杠杆和弹簧装来装去并坚信这就是文明的人。"
  },
  {
    "id": 383,
    "word": "irreligion",
    "pos": "n",
    "cnWord": "无宗教信仰",
    "defEn": "The principal one of the great faiths of the world.",
    "defCn": "世界上最重要的宗教信仰之一。"
  },
  {
    "id": 384,
    "word": "itch",
    "pos": "n",
    "cnWord": "苏格兰人的爱国主义精神",
    "defEn": "The patriotism of a Scotchman. T= z ~~\" 74) xe a. =, ti ee ae 3§ om ee is a consonant in English, but some nations use it as a vowel -- than which nothing could be more absurd. Its original form, which has been but slightly modified, was that of the tail of a subdued! dog, and it was not a letter but a character, standing for a Latin verb, jacere, \"to throw,\" because when a stone is thrown at a dog the dog's tail assumes that shape. This is the origin of the letter, as expounded by the renowned’ Dr. Jocolpus Bumer, of the University of Belgrade, who established his conclusions on the subject in a work of three quarto’ volumes and committed suicide on being reminded that the j in the Roman alphabet had originally no curl. JES PMA EE, (A Ee 4 fe 70 —§_ FP",
    "defCn": "苏格兰人的爱国主义精神。有比这更乱套的事情了。1 的原始形状〈固然经过稍许修饰 )是一条被打败的狗的大拉的尾巴，开始它并非一个字母，而是一个缩略语，代表拉丁语的动词jacere，意思是“扔”% 因为朝狗扔了一块石头，所以它的尾巴就会呈现出J形。以上就是这个字母的起源，贝尔格菜德大学的教授约格普斯。布墨博士的三卷大部头著作立释了这个结论。后来有人提醒他，罗马字母中的了最初是没有弯钩的，弄得这位淹博的学者只好自杀了事。"
  },
  {
    "id": 385,
    "word": "jealous",
    "pos": "adj",
    "cnWord": "嫉妒的",
    "defEn": "Unduly concerned about the preservation of that which can be lost only . Witt",
    "defCn": "过分担心，生怕失掉某种只有在不值得保留时才会失去的东西。"
  },
  {
    "id": 386,
    "word": "jester",
    "pos": "n",
    "cnWord": "弄臣",
    "defEn": "An officer formerly attached to a king's household, whose business it was to amuse the court by ludicrous! actions and utterances, the absurdity being attested by his motley costume. The king himself being attired” with dignity, it took the world some centuries to discover that his own conduct and decrees were sufficiently ridiculous for the amusement not only of his court but of all mankind. The jester’ was commonly called a fool, but the poets and romancers have ever delighted to represent him as a singularly* wise and witty person. In the circus of to-day the melancholy ghost of the court fool effects the dejection of humbler audiences with the same jests wherewith in life he gloomed the marble hall, panged’ the patrician’ sense of humor and tapped the tank of royal tears. atl REMKEEAAN AER, HES RABE Se Pe WREATHS SRE. BAER RNS SH Risse",
    "defCn": "这是过去王宫内的一种官员，其任务是用滑稽荒唐的言语和动作逗笑王室成员，这种人通常穿着好笑的小丑的花衣。国王本人自然是冠冕堂皇、威风凛凛，但几个世纪过去后，人们发现国王的行动和圣旨才可笑，不仅让他宫中老少忍不住大笑，而且足以让整个人类觉得荒唐至极。弄臣常被看作是傻瓜，但诗人们和浪漫故事的作家却常常喜欢把他描绘成一个极其聪慧之人。在今天的马戏团里，当年弄臣的幽灵仍在用同样的笑话为时下的老百姓逗趣。想当年弄臣的荒唐事与俏皮话曾使宫殿昏暗无光，使贵族在幽默中感到隐隐作痛，使王公们在狂笑中涕泪横流。"
  },
  {
    "id": 387,
    "word": "justice",
    "pos": "n",
    "cnWord": "正义",
    "defEn": "A commodity which is a more or less adulterated’ condition the State sells to the citizen as a reward for his allegiance’, taxes and personal service. BO. BARS. f= -NS es at kill, ve. To create a vacancy without nominating a successor. kilt, 7. A costume sometimes worn by Scotchmen in America and Americans in Scotland. kleptomaniac, 7. Arich thief. {iT BS SET ma See, — 3 {@] we “a 有 3 \"2.8 . Or, VET, Se ee ow a le® labor, 7. One of the processes by which A acquires property for B. A part of the earth's surface, considered as property. The theory that land is property subject to private ownership and control is the foundation of modern society, and is eminently worthy of the superstructure. Carried to its logical conclusion, it means that some have the right to prevent others from living; for the right to own implies the right exclusively to occupy; and in fact laws of trespass’ are enacted wherever property in land is recognized. It follows that if the whole area of terra firma’ is owned by A, B and C, there will be no place for D, E, F and G to be born, or, born as trespassers, to exist. A life on the ocean wave, A home on the rolling deep, For the spark the nature gave Thave there the right to keep. They give me the cat-o'-nine Whenever I go ashore. . I'm a natural commodore’! : Dodle",
    "defCn": "这是一种或多或少的挨假的日用品 , 国家把它卖给公民以奖励他的制造空位但却不任命继承人。这是在美国的苏格兰人和在苏格兰的美国人偶尔穿一下的服饰。一个生活富裕的小偷。Ie Tee ij六时 |劳动这是甲为乙获取财富的多种途径之一。大地: 大地是地表的一部分，被看作是一种财产。土地是私有财产并由个，人支配的理论是现代文明的基石，与上层建筑珠联璧合。这种理论的逻辑推论是，有些人有权不让他人生活，因为“私有”就意味着独享，意味着不能和别人共同拥有。实际上哪里有土地私有制，哪里就有禁止进入私人土地的法律。如果整个大地被A、B、C三人全部占有，那么D、E、F、G等人就连降生的地方都没有，或者出生了，就成了非法侵入他人土地的犯罪分子，总之，这些人只能生活在别的什么空间里。我的家上下摇晃，老天给了我特别的恩典，我将海洋当成我的土地。我踏上陆地的边缘，那帮家伙用皮革差点把我搂扁，那么，好 ! 波光闪动的海上一一你们不要来，我可是海洋之王 !多德尔"
  },
  {
    "id": 388,
    "word": "laocoon",
    "pos": "n",
    "cnWord": "拉奥孔",
    "defEn": "A famous piece of antique sculpture Ds representing a priest of that name and his two sons 4 S in the folds of two enormous serpents’. The skill ne and diligence with which the old man and lads es support the serpents and keep them up to their : 让 work have been justly regarded as one of the ef 六 AR? noblest artistic illustrations’ of the mastery’ of te Wy t human intelligence over brute inertia’. 7",
    "defCn": "这是一个非常有名的古代雕塑作品 ,表现的是一个祭司和他的两个儿子被两条巨蟒缠住的情形。老祭司和两个小伙子勤快而熟练地打起两条蛇，使得它们得以胜任它们的工作，这一极富感染力的高尚形象，生动地证明了人的智力大大地超乎于爬虫们的懒惰和迟钝。"
  },
  {
    "id": 389,
    "word": "lap",
    "pos": "n",
    "cnWord": "肤",
    "defEn": "One of the most important organs of the female system -- an admirable provision of nature for the repose of infancy, but chiefly useful in rural festivities to support plates of cold chicken and heads of adult males. The male of our species has a rudimentary’ lap, imperfectly developed and in no way contributing to the animal's substantial welfare.",
    "defCn": "这是女人肉体中最重要的器官之一一一上帝这一令人倾慕的赏赐，原来是用来让婴儿休息用的 , 但是它的主要功能是在野餐中搁放装有冷鸡块的盘子，或供成年男子的头靠在上面休息。男性的膝盖早已退化，! 它在物质利益上不能给人这种灵长类动物带来什么益处。"
  },
  {
    "id": 390,
    "word": "laughter",
    "pos": "n",
    "cnWord": "笑",
    "defEn": "An interior convulsion’, producing a distortion of the features and accompanied by inarticulate’ noises. It is infectious and, though intermittent, incurable. Liability to attacks of laughter is one of the characteristics distinguishing man from the animals -- these being not only inaccessible to the provocation of his example, but impregnable’ to the microbes’ having original jurisdiction® in bestowal’ of the disease. Whether laughter could be imparted to animals by inoculation® from the human patient is a question that has not been answered by experimentation. laurel, 7. The /aurus, a vegetable dedicated to Apollo, and formerly defoliated' to wreathe’ the brows of victors and such poets as had influence at court.",
    "defCn": "这是一阵发自体内的冶挛，发作时会使面部扭曲，同时发出一串含糊不清的噪声。尽管这是一种间歇性的毛病，但它会传染，而且不太好治。易受到笑的侵袭是人不同于动物的特征之一一一不仅人的笑无法影响动物，连那些让人染上笑病的细菌的无法影响动物。至于这种病是否能从人身上接种到动物身上，有关实验还没有得出结论。桂冠供奉在太阳神阿波罗头上的一种树叶 , 扎成王冠形状的树叶轿戴在胜利者的头上，或让那些在朝廷中令人倾倒的诗人项在脑袋上。"
  },
  {
    "id": 391,
    "word": "lawful",
    "pos": "adj",
    "cnWord": "合法的",
    "defEn": "Compatible with the will of a judge having jurisdiction.",
    "defCn": "和法官的想法一致。"
  },
  {
    "id": 392,
    "word": "lawyer",
    "pos": "n",
    "cnWord": "律师",
    "defEn": "One skilled in circumvention? of the law.",
    "defCn": "一个精通法律漏洞的人。"
  },
  {
    "id": 393,
    "word": "laziness",
    "pos": "n",
    "cnWord": "懒惰",
    "defEn": "Unwarranted repose of manner in a person of low degree.",
    "defCn": "一种下等人无法享受的悠闲。"
  },
  {
    "id": 394,
    "word": "lead",
    "pos": "n",
    "cnWord": "铅",
    "defEn": "A heavy blue-gray metal much used in giving stability to light lovers -- particularly to those who love not wisely but other men's wives. Lead is also of great service as a counterpoise! to an argument of such weight that it turns the scale of debate the wrong way. An interesting fact in the chemistry ， of international controversy is that at the point of contact of two patriotisms lead is precipitated” in great quantities. : Hail, holy Lead! : -- of human feuds the great and universal arbiter; : Endowed with penetration to pierce any cloud ， And with a sift’, inevitable, straight, Searching precision find the unavowed but vital point. Thy judgment, when allowed by the chirurgeon'’, settles the debate. O useful metal! -- were it not for thee we'd grapple” one another's ears alway: But when we hear thee buzzing like a bee, We, like old Muhlenberg, \"care not to stay.” And when the quick have run away like pellets! Jack Satan smelts’ the dead to make new bullets. MERA, Bt,",
    "defCn": "这是一种沉甸甸、瞳灰色的金属，常用于稳定轻浮的情人一一特别是那些不明智地爱上别人妻子的人。在出现争执的时候，铅常用来作为保持平衡的夸码，但由于份量过重，它往往使争辩的一方又偏向相反的方向。国际争端的化学实验中有这样一个有趣的事实 : 当两种爱国主义相遇时，往往就要投入大量的铅 \"。啊 ! 神圣的铅，你这举世欢呼的伟大法官，公正地裁定人们的争执。点出争论的焦点，一针见血。正是你穿透纷争的浓雾，把人类的仇她消除。你确实是消她泄愤的好手，让外科大夫无话可说。啊 ! 人铅你太有用了，你一锤定音，重于泰山，如果没有你的决断，我们肯定会扯掉彼此的耳条，只要你发表意见，虽声音如蜜蜂之喻喻，我们也嘎然而止，活着的人像小母鸡一样逃命，死尸已被恶魔铸成新的子弹头。3 铅是上好的子弹头原料。"
  },
  {
    "id": 395,
    "word": "lecturer",
    "pos": "n",
    "cnWord": "演讲者",
    "defEn": "One with his hand in your pocket, his tongue in your ear and his faith in your patience.",
    "defCn": "这个人手插进你的钱包，舌头伸进你的耳采，他的信心则建立在你的耐心之上。"
  },
  {
    "id": 396,
    "word": "legacy",
    "pos": "n",
    "cnWord": "遗产",
    "defEn": "A gift from one who is legging it out of this vale’ of tears. | lexicographer, 7. ， A pestilent? fellow who, under the pretense of recording some : particular stage in the development of a language, does what he can to arrest ! its growth, stiffen its flexibility and mechanize’ its methods. For your ; lexicographer, having written his dictionary, comes to be considered \"as one having authority,\" whereas his function is only to make a record, not to give a law. The natural servility’ of the human understanding having invested him with judicial power, surrenders its right of reason and submits itself to a chronicle as if it were a statue. Let the dictionary (for example) mark a good word as \"obsolete\" or \"obsolescent\" and few men thereafter venture to use it, whatever their need of it and however desirable its restoration to favor -- whereby the process of improverishment is accelerated and speech decays. On the contrary, recognizing the truth that language must grow by innovation if it grow at all, makes new words and uses the old in an unfamiliar sense, has no following and is tartly reminded that “it isn't in the dictionary\" -- although down to the time of the first lexicographer (Heaven forgive him!) no author ever had used a word that was in the dictionary. In the golden prime and high noon of English speech; when from the lips of the great Elizabethans fell words that made their own meaning and carried it in their very sound; when a Shakespeare and a Bacon were possible, and the language now rapidly perishing at one end and slowly renewed at the other was in vigorous growth and hardy preservation -- sweeter than honey and stronger than a lion -- the lexicographer was a person unknown, the dictionary a creation which his Creator had not created him to create.",
    "defCn": "，这人正勿匆地趟过泪水，奔向某人锁赠的礼物。词典编纂家这是一种让人厌恶的家伙 , 他看起来是在记录语言进步的一些特殊阶段，实质上是在阻碍语言的前进，令它呆板、伟硬。词典编纂家一旦弄出一本词典，就会被看作是“权威”，其实他只起到了抄录的作用，他毫无制定法规的权力。可惜人类理解力的本能奴性给了他一种裁判是非的无上权威。他们含弃自我的理智力量，顶礼膜拜这位书记员抄下的流水帐，例然那是不能抗拒的法律。比如，假如词典说革一个词是废弃不用了的，那么很少有人有胆识再去用它，不管他们多么需要这个词一一语言因此变得越来越枯竭 , 死板。与此不同的是 ,一些雄才大略的作家，他们知道语言只有进行变革才会进步，因此，他们不仅敢于给旧词赋予新义，而且还大胆创造新站。抱憾的是，不但无人追随其后，还常有人不屑地告诫他们 :“词典里哪有这种用法。”殊不知在第一个词典编纂家啤叹落地之前〈愿主宽恕他 !)，作家们早已写就了鸿篇巨著，他们所用的词又出自哪里昵 ? 今天的英语正在迅速走向呆滞、腐朽，令人触目惊心，而在英语的黄金时代，在伊丽莎白一世时代的伟大作家发出宏伟声音的日子里，在产生莎士比亚、培根的岁月中，英语生机勃勃，苗壮成长一一甘甜如密，强悍如狮一一那时还没有人知道词典编纂家为何物，上帝从来就没造出一种人来编什么劳什子词典。"
  },
  {
    "id": 397,
    "word": "liar",
    "pos": "n",
    "cnWord": "说谎者",
    "defEn": "A lawyer with a roving! commission’.",
    "defCn": "一个四处承揽代理业务的律师。"
  },
  {
    "id": 398,
    "word": "liberty",
    "pos": "n",
    "cnWord": "自由",
    "defEn": ". One of Imagination's most precious possessions.",
    "defCn": "想像中最珍贵的财产之一。"
  },
  {
    "id": 399,
    "word": "life",
    "pos": "n",
    "cnWord": "生活",
    "defEn": "， A spiritual pickle? preserving the body from decay. We live in daily apprehension of its loss; yet when lost it is not missed. The question, \"Is life worth living?\" has been much discussed; particularly by those who think it is not, many of whom have written at great length in support of their view and by careful observance of the laws of health enjoyed for long terms of years the honors of successful controversy. SRO, “ed, DI-BAKE, WMRPRBER. “HW PRE",
    "defCn": "这是一种精神盐水，在它的腌泡下肉体可以免于腐烂。我们活着，和否值得 ?”这个问题一直争论不体，特别是那些持香定态度的人，他们的语气最为尖刻一一他们长篇大论地撰文前述自己的观点，同时恪守养生之道来延年益寿，享受获胜之后的荣华富贵。"
  },
  {
    "id": 400,
    "word": "lighthouse",
    "pos": "n",
    "cnWord": "灯塔",
    "defEn": "A tall building on the seashore in which the government maintains a lamp and the friend of a politician.",
    "defCn": "这是建在海边的一种高高的建筑物，政府在里面点了一划长明灯，，它间时也是政客的朋友。"
  },
  {
    "id": 401,
    "word": "litigation",
    "pos": "n",
    "cnWord": "诉讼",
    "defEn": "A machine which you go into as a pig and come out of as a sausage.",
    "defCn": "这是一种机器 , 让你进去的时候是一头猪 , 出来的时候是一根腊肠。"
  },
  {
    "id": 402,
    "word": "liver",
    "pos": "n",
    "cnWord": "肝",
    "defEn": "A large red organ thoughtfully provided by nature to be bilious with. The sentiments and emotions which every literary anatomist! now knows to haunt the heart were anciently believed to infest the liver; and even Gascoygne, speaking of the emotional side of human nature, calls it “our hepaticall parte.\" It was at one time considered the seat of life; hence its name -- liver, the thing we live with. The liver is heaven's best gift to the goose; without it that bird would be unable to supply us with the Strasbourg pate. at",
    "defCn": "这是造物主智慧地赐予的一种巨大的红色器官 , 有了它就会火气旺盛，性情火爆。现在每个舞文弄墨的解剖家都明白，人的七情六欲都发自内心，不过古人却肯定肝是它们的栖息地，盖斯科因在讲到人类的情感时，甚至直截了当地称之为“我们的肝”。肝曾一度被认为是性命的居所，因此才有了Liver一词，意思是“我们赖以活命的东西 >。肝是上帝送给忽的最美妙的礼物，假如没有它，这种鸟就无法为我们提供斯特拉斯堡鹅肝馅饼，那可是美味佳肴。"
  },
  {
    "id": 403,
    "word": "logic",
    "pos": "n",
    "cnWord": "逻辑",
    "defEn": "， The art of thinking and reasoning in strict accordance with the limitations and incapacities of the human misunderstanding. The basic of logic is the syllogism’, consisting of a major and a minor premise and a conclusion -- thus: Major Premise: Sixty men can do a piece of work sixty times as ， quickly as one man. Minor Premise: One man can dig a posthole in sixty seconds; therefore-- Conclusion: Sixty men can dig a posthole in one second. This may be called the syllogism arithmetical, in which, by combining logic and mathematics, we obtain a double certainty and are twice blessed.",
    "defCn": "这是一种思维和推理的艺术，它与人的理解力的有限和无能相对应。逻辑的基础是三段论式的演绎，它包括大前提、小前提和结论三部分。如 :大前提 : 六十个人做一件事比一个人做一件事要快六十倍。小前提 : 一个人挖一个孔需要六十秒。结论 : 六十个人挖一个孔只需要一秒。以上可称作算术三段论，通过轴辑和数学的结合，我们获得了双重的确定性和双份的祝福。"
  },
  {
    "id": 404,
    "word": "longanimity",
    "pos": "n",
    "cnWord": "忍耐",
    "defEn": "The disposition to endure injury with meek forbearance 1 while maturing a plan of revenge.",
    "defCn": "在报复计划成熟之前，对屈辱照单全收。",
    "footnotes": [
      {
        "term": "forbearance",
        "pos": "n.",
        "gloss": "自制，忍耐"
      }
    ]
  },
  {
    "id": 405,
    "word": "longevity",
    "pos": "n",
    "cnWord": "长寿",
    "defEn": "Uncommon extension of the fear of death. looking-glass, 7. A vitreous” plane upon which to display a fleeting’ show for man's disillusion given. The King of Manchuria had a magic looking-glass, whereon whoso looked saw, not his own image, but only that of the king. A certain courtier* who had long enjoyed the king's favor and was thereby enriched beyond any other subject of the realm, said to the king: \"Give me, I pray, thy wonderful mirror, so that when absent out of thine august’ presence I may yet do homage before thy visible shadow, prostrating’ myself night and morning in the glory of thy benign’ countenance’, as which nothing has so divine splendor, O Noonday Sun of the Universe!\" Please with the speech, the king commanded that the mirror be conveyed to the courtier’s palace; but after, having gone thither without apprisal, he found it in an apartment where was naught but idle lumber. And the mirror was dimmed with dust and overlaced with cobwebs. This so angered him that he fisted it hard, shattering the glass, and was sorely hurt. : courtier be thrown into prison, and that the glass be repaired and taken back to his own palace; and this was done. But when the king looked again on the mirror he saw not his image as before, but only the figure of a crowned ass, having a bloody bandage on one of its hinder hooves -- as the artificers and ， all who had looked upon it had before discerned but feared to report. Taught ， wisdom and charity, the king restored his courtier to liberty, had the mirror set into the back of the throne and reigned many years with justice and humility; and one day when he fell asleep in death while on the throne, the whole court saw in the mirror the luminous figure of an angel, which remains to this day. MNDLA-OER, ALRRRORT, RCADMMTAA LH",
    "defCn": "异乎寻常地延长对死亡的恐惧。"
  },
  {
    "id": 406,
    "word": "loquacity",
    "pos": "n",
    "cnWord": "饶舌",
    "defEn": "A disorder which renders the sufferer unable to curb! his tongue when you wish to talk. fh RF DS A",
    "defCn": "一种嘴里的毛病，它使患者管不住自己的舌头，在你想说两句时偏"
  },
  {
    "id": 407,
    "word": "love",
    "pos": "n",
    "cnWord": "爱情",
    "defEn": "A temporary insanity curable by marriage or by removal of the patient from the influences under which he incurred the disorder. This disease, like caries and many other ailments’, is prevalent only among civilized races living under artificial conditions; barbarous nations breathing pure air and eating simple food enjoy immunity from its ravages. It is sometimes fatal, but more frequently to the physician than to the patient.",
    "defCn": "这是一种暂时性的精神病，可通过婚姻使其痊愈，让患者远离病源也很有疗效。这种病和虫牙等病一样，只传染并肆虐于生活在人工场所，的文明人之中，那些呼吸单纯空气、吃喝简单食物的野变人从未受到侵. 费。这种病有时会送命，不过它对医生的损伤比对患者的更厉害。粗吕的饲养大的，而不是教养大的。"
  },
  {
    "id": 408,
    "word": "luminary",
    "pos": "n",
    "cnWord": "名人",
    "defEn": "One who throws light upon a subject; as an editor by not writing about it. 2 — Ire VOW cath",
    "defCn": "具有卓越的才识，对某一课题略加点拨就能令其大放光彩，编辑就是这样一种人，他无需动笔就能达到这种境界。"
  },
  {
    "id": 409,
    "word": "mace",
    "pos": "n",
    "cnWord": "权杖",
    "defEn": "A staff of office signifying authority. Its form, that of a heavy club, indicates its original purpose and use in dissuading from dissent.",
    "defCn": "政府部门使用的一种表示权威的棒子。它沉甸甸的外观表明它是用来消除不同意见的。"
  },
  {
    "id": 410,
    "word": "machination",
    "pos": "n",
    "cnWord": "诡计",
    "defEn": "The method employed by one's opponents in baffling one's open and honorable efforts to do the right thing.",
    "defCn": "这是我们的对手用来阻挠我们正大光明地去从事正义事业的方法。"
  },
  {
    "id": 411,
    "word": "macrobian",
    "pos": "n",
    "cnWord": "老寿星",
    "defEn": "One forgotten of the gods and living to a great age，History is abundantly supplied with examples, from Methuselah to Old Parr', but some notable instances of longevity are less well known. A Calabrian peasant named Coloni, born in 1753, lived so long that he had what he considered a glimpse of the dawn of universal peace. Scanavius relates that he knew an archbishop who was so old that he could remember a time when he did not deserve hanging. In 1566 a linen draper of Bristol, England, declared that he had lived five hundred years, and that in all that time he had never told a lie. There are instances of longevity (macrobiosis) in our own country. Senator Chauncey Depew is old enough to know better. The editor of The American, a newspaper in New York City, has a memory that goes back to the time when he was a rascal, but not to the fact. Ro PRAGMA HER LARS MR ENR.",
    "defCn": "一个被上帝遗忘的长寿者。历史上长寿的人很多，从玛士撒拉到老帕尔，举不胜举，但对于有些值得注意的寿星，人们恐怕还不太了解。（意大利西南部的）卡拉布里亚有一个叫克劳尼的农民，他生于1753年，活得很长，自认为看到了世界和平的一丝曙光。斯勘纳维斯声称他见到了一名主教，对方很老，能够回忆起自己还没有被送上绞架之前的某个遥远时代。1566年，英格兰布里斯托尔的一位布商宣称自己已经活了500年，而且在这期间自己从未撒过谎。在我们自己的国家也不乏这样的寿星。参议员昌西·迪普很长寿，因此对世事也更通达了。纽约的《美国人报》的编辑也是一位寿星，他能回忆起自己还是小混混的那个时代，不过对于具体的细节已经记不太清了。"
  },
  {
    "id": 412,
    "word": "mad",
    "pos": "adj",
    "cnWord": "疯狂的",
    "defEn": "Affected with a high degree of intellectual independence; not conforming to standards of thought, speech and action derived by the conformants from study of themselves; at odds with the majority; in short, unusual. It is noteworthy that persons are pronounced mad by officials destitute’ of evidence that themselves are sane.",
    "defCn": "染上了高度的心灵孤独症 ,或不遵从潮流制造者为自己度身定做的思想、语言和行为标准，或与大多数人唱反调，简而言之，与众不同就是疯狂。值得一提的是，有不少人被政客们看作是狗子，而政客们却拿不出证据来证明自己的清醒。"
  },
  {
    "id": 413,
    "word": "magic",
    "pos": "n",
    "cnWord": "魔术",
    "defEn": "An art of converting superstition? into coin. There are other arts serving the same high purpose, but the discreet lexicographer does not name them.",
    "defCn": "一种能把巫术变成金币的艺术。另外还有一些其他的手段能够达到同样的目的，不过本作者不能大放厥词。"
  },
  {
    "id": 414,
    "word": "magnet",
    "pos": "n",
    "cnWord": "磁体",
    "defEn": "Something acted upon by magnetism!.",
    "defCn": "受磁力作用的东西。"
  },
  {
    "id": 415,
    "word": "magnificent",
    "pos": "adj",
    "cnWord": "壮观的",
    "defEn": "Having a grandeur or splendor superior to that to which the spectator is accustomed, as the ears of an ass, to a rabbit, or the glory of a glowworm’, toa maggot’.",
    "defCn": "，比看客通常感受的要壮观得多，比如，对于兔子而言，驴子的耳采. 是壮观的，对蛆来说，莹火虫的亮光要壮观得多。"
  },
  {
    "id": 416,
    "word": "magnitude",
    "pos": "n",
    "cnWord": "庞大",
    "defEn": "Size. Magnitude being purely relative, nothing is large and nothing ， small. If everything in the universe were increased in bulk one thousand ， diameters nothing would be any larger than it was before, but if one thing remain unchanged all the others would be larger than they had been. To an understanding familiar with the relativity of magnitude and distance the spaces and masses of the astronomer would be no more impressive than those of the microscopist*. For anything we know to the contrary, the visible universe may be a small part of an atom, with its component ions’, floating in the life- fluid (luminiferous' ether’) of some animal. Possibly the wee creatures peopling the corpuscles of our own blood are overcome with the proper emotion when contemplating the unthinkable distance from one of these to another. MOREA.",
    "defCn": "庞大这是一种度量标准。庞大完全是相对的，没有绝对大的东西，也没有绝对小的东西。如果把世界上的每种东西都放大 1000 倍，那么没有什么东西感觉会比以前更大，但如果唯独它没有被放大，那么其他的东西都会感觉大得多。对巨大与距离的相对关系显得麻木的人类理解力而言，天文学家望远镜里的浩瀚星空远不及显微学家显微镜下的微观宇宙更能让它感受到一股电流的冲击。也许与我们所知的相反，我们看到的宇宙不过是某个由离子组成的原子的一小部分 ,这个原子漂浮在某种生 |物的生命交流〈放光的以太 )里。那些散居在我们的血红细胞里的微生物，它们若是认真思考彼此之间的那些不可想象的距离的话，不惊奇得"
  },
  {
    "id": 417,
    "word": "magpie",
    "pos": "n",
    "cnWord": "鹊",
    "defEn": "A bird whose thievish disposition suggested to someone that it might be taught to talk.",
    "defCn": "这种鸟偷摸成性的癖好让某些人相信教会它谈话是可能的。"
  },
  {
    "id": 418,
    "word": "maiden",
    "pos": "n",
    "cnWord": "帮莫名其妙的",
    "defEn": "A young person of the unfair sex addicted to clewless’ conduct and views that madden to crime. The genus has a wide geographical distribution, being found wherever sought and deplored wherever found. The maiden is not altogether unpleasing to the eye, nor (without her piano and her views) insupportable to the ear, though in respect to comeliness distinctly inferior to the rainbow, and, with regard to the part of her that is audible, bleating’ out of the field by the canary -- which, also, is more portable. A lovelorn maiden she sat and sang -- This quaint, sweet song sang she; And a muscle fair to see! ， Of a team to be! On the gridiron he shali shine, A monarch by right divine, And never to roast on it -- me!\" . Opoline Jones AER EY eB RM",
    "defCn": "一个不诚实的女性。这类女性喜欢一些莫名其妙的观点，爱做一些不可理喻的事情，甚至因此犯罪。这种女性散布在各地，在哪里都能找到，不论在什么地方找到都让人扼腕叹息。即使就美貌而言少女赶不上彩虹，即使她的嗓音比不上麦地里的金丝省一一金丝雀比她轻春得多，不过，并不是所有的少女都让人看不顺眼，也不是所有少女的观点和她演奏的钢雁都不堪入耳。坐在那里把甜密的悲歌喝 :“噢，那个美男我无法不想，他在足球场上横冲直撞。一身肌肉如此发达 !他可是足球队长，几乎是球场之王，相思把我害惨，都成了这副模样 .”欧普林“' 琼斯"
  },
  {
    "id": 419,
    "word": "male",
    "pos": "n",
    "cnWord": "雄性",
    "defEn": "A member of the unconsidered, or negligible sex. The male of the human race is commonly known (to the female) as Mere Man. The genus has two varieties: good providers and bad providers.",
    "defCn": "党被忽视不值一提的性别，在女人眼里，人类中的雄性就是男人，如此而已。男人被分为两类 : 好的供养者和坏的供养者。"
  },
  {
    "id": 420,
    "word": "malthusian",
    "pos": "adj",
    "cnWord": "马尔萨斯论的",
    "defEn": "Pertaining' to Malthus and his doctrines. Malthus believed in artificially limiting population, but found that it could not be done by talking. One of the most practical exponents of the Malthusian idea was Herod of Judea, though all the famous soldiers have been of the same way of thinking. mammalia, 77.p/. A family of vertebrate animals whose females in a state of nature suckle their young, but when civilized and enlightened put them out to nurse, or use the bottle.",
    "defCn": "有关马尔萨斯和他的理论的。马尔萨斯认为用人工的方法就可以控制人口的增长，但空谈并不能达到这个目的。犹太王希罗德是这一理论的最忠实的执行者，当然所有杰出的战士也有着同样的思维方式。"
  },
  {
    "id": 421,
    "word": "mammon",
    "pos": "n",
    "cnWord": "财神",
    "defEn": "The god of the world's leading religion. The chief temple is in the holy city of New York.",
    "defCn": "，这是人世间的一位上帝，他在各种宗教活动中唱主角，他的主殿就答立在纽约这个圣城之中。"
  },
  {
    "id": 422,
    "word": "man",
    "pos": "n",
    "cnWord": "男人",
    "defEn": "An animal so lost in rapturous” contemplation of what he thinks he is as to overlook what he indubitably ought to be. His chief occupation is extermination of other animals and his own species, which, however, multiplies with such insistent rapidity as to infest the whole habitable earth : fh aT ACR ABR, AMR AR SCAD LITA BL. and Canada. .",
    "defCn": "一种完全沉迷于狂想之中的动物，他在思考自己是谁，却二记了目己应该是谁。他的首要职业就是消灭同类和其他动物，然而，他的同类却迅速繁衍，蔓延到地球上所有可以居住的地方，甚至包括加拿大。"
  },
  {
    "id": 423,
    "word": "manna",
    "pos": "n",
    "cnWord": "吗哪",
    "defEn": "A food miraculously given to the Israelites in the wilderness. When it was no longer supplied to them they settled down and tilled the soil, fertilizing’ it, as a rule, with the bodies of the original occupants.",
    "defCn": "这是上帝投给在荒野流浪的以色列人的食物 ,，当上帝不再空投这种 |食物的时候，以色列人就定居下来，开始耕作，并为土壤施肥，一般而言是用土著民的尸体作为肥料。"
  },
  {
    "id": 424,
    "word": "mausoleum",
    "pos": "n",
    "cnWord": "陵墓",
    "defEn": "The final and funniest folly of the rich.",
    "defCn": "有钱人所做的最后的也是最可笑的蠢事。"
  },
  {
    "id": 425,
    "word": "mayonnaise",
    "pos": "n",
    "cnWord": "蛋黄酱",
    "defEn": "One of the sauces which serve the French in place of a state religion. ae",
    "defCn": "这是法国佬用来取代国教的一种调味品。"
  },
  {
    "id": 426,
    "word": "meander",
    "pos": "n",
    "cnWord": "漫步",
    "defEn": "To proceed sinuously' and aimlessly. The word is the ancient name of a river about one hundred and fifty miles south of Troy, which turned and twisted in the effort to get out of hearing when the Greeks and Trojans boasted of their prowess.",
    "defCn": "漫步目的，蚁虹曲折地行走。这个词是特洛伊城以南约 150 英里的一条河的古名，这条河蚁晓曲折以躲开希腊人和特洛伊人争雄的嘲杂"
  },
  {
    "id": 427,
    "word": "medal",
    "pos": "n",
    "cnWord": "勋章",
    "defEn": "， A small metal disk given as a reward for virtues, attainments or services more or less authentic. It is related of Bismark, who had been awarded a medal for gallantly rescuing a drowning person, that, being asked the meaning of the medal, he ， replied: \"I save lives sometimes.\" And sometimes he didn’t. Re",
    "defCn": "一种小小的圆形金属片，是用来奖励多少有些可信和的美德、成就或贡献的。据说件斯麦先生英勇地救了一个落水的人，因而获得了一枚勋章。当有人问他勋章意味着什么时，他答道 :“我在某一时刻救了某人的性命 .”这意味着他有时候见死不救。"
  },
  {
    "id": 428,
    "word": "meekness",
    "pos": "n",
    "cnWord": "温顺",
    "defEn": "Uncommon patience in planning a revenge that is worth while. M is for Moses, who slew’ the Egyptian. As sweet as a rose is the meekness of Moses. No monument shows his post-mortem inscription, but M is for Moses who slew the Egyptian. The Biographical Alphabet",
    "defCn": "为了复仇而值得付出的出奇的耐心。M象征着摩西，是他杀死了那些埃及人。温顺的摩西就像带刺的玫瑰。他死后也没有留下碑铭，但M就是代表杀死埃及人的摩西。《字母表上的传记》"
  },
  {
    "id": 429,
    "word": "mendacious",
    "pos": "adj",
    "cnWord": "虚情假意的",
    "defEn": "Addicted to rhetoric.",
    "defCn": "沉迷于修饰的。"
  },
  {
    "id": 430,
    "word": "merchant",
    "pos": "n",
    "cnWord": "商人",
    "defEn": "One engaged in a commercial pursuit. A commercial pursuit is one in which the thing pursued is a dollar.",
    "defCn": "一个从事商业活动的人，他所追求的只是金钱。"
  },
  {
    "id": 431,
    "word": "mercy",
    "pos": "n",
    "cnWord": "宽恕",
    "defEn": "An attribute beloved of detected offenders.",
    "defCn": "这是犯人们最喜欢的一种品德。"
  },
  {
    "id": 432,
    "word": "metropolis",
    "pos": "n",
    "cnWord": "大都会",
    "defEn": "A stronghold! of provincialism?.",
    "defCn": "偏见的大本营。"
  },
  {
    "id": 433,
    "word": "mind",
    "pos": "n",
    "cnWord": "理解力",
    "defEn": "A mysterious form of matter secreted? by the brain. Its chief activity consists in the endeavor to ascertain its own nature, the futility of the attempt being due to the fact that it has nothing but itself to know itself with. From the Latin mens, a fact unknown to that honest shoe-seller, who, | \"Mens conscia recti,\" emblazoned’ his own front with the words \"Men's, women's and children’s conscia recti.\" women's and children's conscia rectis”。",
    "defCn": "，理解力! 这是由大脑分泌的一种神秘的东西 , 它的主要工作就是努力搞清楚自己的本质，但每次都是以失败而告终，因为它无法利用自己以外的东西来弄清自己。一位老实的鞋商不知道拉丁文的“mens”表示“心 >，他看到自己的对手，一位有学问的鞋商在店门口挂了一块照片，上面写着“Mensconscia rectis”% 于是就在自己的店门口挂起另一块招牌 ,上面写着“Men's，5 直译为坦诚的心，表示公平买卖。5 他将mens与men’s混为一谈 , 这就变成了“男人、女人、小孩的心里都各有一套”，弄巧成拙。"
  },
  {
    "id": 434,
    "word": "minister",
    "pos": "n",
    "cnWord": "大臣",
    "defEn": "An agent of a higher power with a lower responsibility. In diplomacy and officer sent into a foreign country as the visible embodiment of his sovereign's hostility. His principal qualification is a degree of plausible inveracity next below that of an ambassador.",
    "defCn": "一个身居高位但责任心很差的政府官员。就外交而言，派驻国外的使节带着明显的敌意。一个人必须具备花言巧语才能胜任，就犹猎程度而言，他比大使还略进一筹。"
  },
  {
    "id": 435,
    "word": "minor",
    "pos": "adj",
    "cnWord": "次要的",
    "defEn": "Less objectionable’.",
    "defCn": "更不那么让人讨厌的。"
  },
  {
    "id": 436,
    "word": "misdemeanor",
    "pos": "n",
    "cnWord": "轻罪",
    "defEn": "An infraction? of the law having less dignity than a felony’ and constituting no claim to admittance into the best criminal society. By misdemeanors he essays to climb into the aristocracy of crime. O, woe was him! -- with manner chill and grand And “railway magnates\" jeered his low condition. He robbed a bank to make himself respected. They still rebuffed him, for he was detected. be KT! pei BEAK HK!",
    "defCn": "这是对法律的轻微触犯，远不能像重罪那样获得显赫的地位，因此小罪犯没有资格进入〈犯罪的 )上流社会。想通过对法律的小小不赦来跨入同类的上层社会。“工业巨头”拒绝他伸出的手，“金融大王”对他不予理皮，“铁路大亨”茂视他低微的社会地位。他角而走险去抢银行以抬高社会地位，，但他们依旧排挤他，因为他的行为已经被人察觉。"
  },
  {
    "id": 437,
    "word": "misfortune",
    "pos": "n",
    "cnWord": "不幸",
    "defEn": "The kind of fortune that never misses. Injiss，7. The title with which we brand unmarried women to indicate that they are in the market. Miss, Missis (Mrs.) and Mister (Mr.) are the three most distinctly disagreeable words in the language, in sound and sense. Two are corruptions of Mistress, the other of Master. In the general abolition of social titles in this our country they miraculously escaped to plague us.",
    "defCn": "这是一种绝不会错过的运气。小姐这是我们贴在未婚女子身上的标签，表明她们有待出售。小组"
  },
  {
    "id": 438,
    "word": "miss",
    "pos": "n",
    "cnWord": "小姐",
    "defEn": "The title with which we brand unmarried women to indicate that they are in the market. Miss, Missis (Mrs.) and Mister (Mr.) are the three most distinctly disagreeable words in the language, in sound and sense. Two are corruptions of Mistress, the other of Master. In the general abolition of social titles in this our country they miraculously escaped to plague us.",
    "defCn": "这是我们贴在未婚女子身上的标签，表明她们有待出售。小姐（Miss）、夫人（Missis）和先生（Mister）三个词无论从形状、读音还是意义来看都是最难相处的。前两个是对女主人（Mistress）一词的借用，后一个是对老爷（Master）的借用。在我们这个国度里普遍抛弃了等级称号，但它们仍奇迹般地留存了下来，并折磨着我们。"
  },
  {
    "id": 439,
    "word": "monarch",
    "pos": "n",
    "cnWord": "君主",
    "defEn": "A person engaged in reigning. Formerly the monarch ruled, as the derivation of the word attests, and as many subjects have had occasion to learn. In Russia and the Orient the monarch has still a considerable influence in public affairs and in the disposition of the human head, but in western Europe political administration is mostly entrusted to his ministers, he being somewhat preoccupied with reflections relating to the status of his own head.",
    "defCn": "一个统治者。从前君主有生杀了予夺的绝对权力 ,“君主”一词的词源证明了这一点，许多臣民也都领教过了。在俄罗斯和东方，君主依旧主宁着国家和万民的脑袋，但在西方的欧罗巴诸国，诸如此类的事已托付给他的大臣们去了，君主偶尔需要考虑的是自己的脑袋往哪里放。"
  },
  {
    "id": 440,
    "word": "monday",
    "pos": "n",
    "cnWord": "星期一",
    "defEn": "In Christian countries, the day after the baseball game.",
    "defCn": "在基督教国家里，是大伙打完棒球后的第二天 !。"
  },
  {
    "id": 441,
    "word": "money",
    "pos": "n",
    "cnWord": "钱",
    "defEn": "A blessing that is of no advantage to us excepting when we part with it. An evidence of culture and a passport to polite society. Supportable property.",
    "defCn": "“按照基督教教义，星期天是用来休息，不许玩更和运动，但棒球比赛却在周日举金钱这是一种恩赐，如果你和它分开就得不到好处。它是教养的标签，进入上流社会的护照，值得支持的道具。"
  },
  {
    "id": 442,
    "word": "monument",
    "pos": "n",
    "cnWord": "纪念碑",
    "defEn": "A structure intended to commemorate! something which either needs no commemoration or cannot be commemorated. The bones of Agammemnon are a show, ， And ruined is his royal monument, but Agammemnon's fame suffers no diminution in consequence. The monument custom has its reductiones ad absurdum in monuments \"to the unknown dead\" -- that is to say, monuments to perpetuate the memory of those who have left no memory. Bt RCP POTS,",
    "defCn": "损毁的只是他那宏伟的纪念碑。但阿伽门农的英名并未因此而毁损半分。树碑立传这个风俗实际上是让“不知名的去世者”蒙着人间，一一它实际上是说，纪念碑让人永远记住这些人并不值得记住。2 阿伽门农〈《Agamemnon，意为“坚定不移”)，希腊迈锡尼国王，希腊诸王之王。特洛伊战争是因为他想称霸爱琴海，他的弟弟墨涅拉俄斯的妻子海偷被帕里斯拐走只是导火线，在战争中，他也成为了希腊联军的统帅。"
  },
  {
    "id": 443,
    "word": "moral",
    "pos": "adj",
    "cnWord": "合乎道德的",
    "defEn": "Conforming to a local and mutable!’ standard of right. Having the quality of general expediency. It is sayd there be a raunge of mountaynes in the Easte, on one syde of the which certayn conducts are immorall, yet on the other syde they are holden in good esteeme; wherebye the mountayneer is much conveenyenced, for it is given to him to goe downe eyther way and act as it shall suite his moode, withouten offence. Gooke's Meditations",
    "defCn": "与当地反复无常的是非标准保持一个调子，就是合乎道德的。这通常是有利可图的。据称在东方有一条雄壮的山脉 ,在山脉这边的某些行为是被视为放荡的，在另一边则被看作是合乎道德的，因此住在山项上的居民视自己心情的好坏走向山的两边，为所欲为却合乎礼仪。《十客的沉思》"
  },
  {
    "id": 444,
    "word": "more",
    "pos": "adj",
    "cnWord": "更多",
    "defEn": "The comparative degree of too much.",
    "defCn": "已经够多了，但还是要比对手多一些。"
  },
  {
    "id": 445,
    "word": "mouse",
    "pos": "n",
    "cnWord": "老鼠",
    "defEn": "An animal which strews its path with fainting women. As in Rome Christians were thrown to the lions, so centuries earlier in Otumwee, the most ancient and famous city of the world, female heretics were thrown to the mice. Jakak-Zotp, the historian, the only Otumwump whose writings have descended to us, says that these martyrs met their death with little dignity and much exertion. He even attempts to exculpate' the mice (such is the malice of bigotry) by declaring that the unfortunate women perished, some from exhaustion, some of broken necks from falling over their own feet, and some from lack of restoratives’. The mice, he avers, enjoyed the pleasures of the chase with composure. But if \"Roman history is nine-tenths lying,\" we can hardly expect a smaller proportion of that rhetorical figure in the annals of a people capable of so incredible cruelty to a lovely women; ， for a hard heart has a false tongue.",
    "defCn": "这种动物喜欢用昏倒的女人来点缀它走过的路。就象古罗马人喜欢把基督徒扔进狮群一样，好几个世纪以前，在世界最古老有名的奥唐威城，人们把女邪教徒扔进满是耗子的笼子。据历史学家贾卡克·左特普（他是唯一一个有著作传世的奥唐威人）描述，这些殉道者死时苦苦挣扎，没有几个是端庄大方的。这位历史学家试图为老鼠开脱罪责，足见他的偏狭，他声称那些倒霉的妇女有的因筋疲力尽而死，有的是被自己绊倒而摔断了脖子，有的因不愿吃饭而缺乏营养而死。他声称：老鼠追逐女人从来都是沉着冷静的。假如诚如这位历史大师所说，\"罗马历史十有八九是谎言\"，那么我们对这位雄辩能手，对他关于一个向可爱的妇女施行难以置信的暴行的民族的记述，恐怕还是不予相信的为好，因为凶残的心往往有一条撒谎的舌头。",
    "footnotes": [
      {
        "term": "exculpate",
        "pos": "v.",
        "gloss": "开脱"
      }
    ]
  },
  {
    "id": 446,
    "word": "mouth",
    "pos": "n",
    "cnWord": "口",
    "defEn": "In man, the gateway to the soul; in woman, the outlet of the heart. ial",
    "defCn": "在男人身上 , 是通向灵魂的入口 : 在女人身上 , 是宣泄情感的出口。"
  },
  {
    "id": 447,
    "word": "mulatto",
    "pos": "n",
    "cnWord": "黑白混血儿",
    "defEn": "A child of two races, ashamed of both. A mL",
    "defCn": "两个不同种族的人交配的产儿，似乎对两个种族都感到羞耻。"
  },
  {
    "id": 448,
    "word": "multitude",
    "pos": "n",
    "cnWord": "群众",
    "defEn": "A crowd; the source of political wisdom and virtue. In a republic, the object of the statesman's adoration. \"In a multitude of consellors there is wisdom,\" saith the proverb. If many men of equal individual wisdom are wiser than any one of them, it must be that they acquire the excess of wisdom by the mere act of getting together. Whence comes it? Obviously from nowhere -- as well say that a range of mountains is higher than the single mountains composing it. A multitude is as wise as its wisest member if it obey him; if not, it is no wiser than its most foolish.",
    "defCn": "一大帮人，这是政治智慧与美德的源头。在共和制国家里，他们更是政治家们敬仰的对象。俗话说的好“三个臭皮研项个诸葛亮”。假定很多个中等智慧的人的共同智慧胜过其中任何一个人的个人智慧，那肯定是说，他们只需坐到一起就会有取之不尽的智慧，何以见得呢 ? 以下事实可以说明一一一列山脉显然比构成山脉的各个山峰要高。群众，假如他们遵从他们中最聪明的人，那么大家都和他一样聪明了。假如大家不遵从他的智慧，那么他们就连他们中最奢的人也不如。"
  },
  {
    "id": 449,
    "word": "mummy",
    "pos": "n",
    "cnWord": "木乃伊",
    "defEn": "An ancient Egyptian, formerly in universal use among modern civilized nations as medicine, and now engaged in supplying art with an excellent pigment’. He is handy, too, in museums in gratifying the vulgar curiosity that serves to distinguish man from the lower animals. By means of the Mummy, mankind, it is said, attests to the gods its respect for the dead.we plunder his tomb, be he sinner or saint, distil’ him for physic and grind him for paint, exhibit for money his poor, shrunken frame, and with levity flock to the scene of the shame. O, tell me, ye gods, for the use of my rhyme: for respecting the dead what's the limit of time? Scopas Brune ART att — AP Xt LA FARA RAS A?",
    "defCn": "这是一个很早以前的埃及人，从前文明国家的人把他制作成一味药，现在人们主要用他来制作上好的颜料。它在博物馆也很有用，可满足人们浅陋的好奇心，正是这种好奇心把人类和下等动物区分开来。\n传闻人类正是用木乃伊向众神证实自己对死者的敬意。我们盗挖他们的坟墓，管他是一肚子坏水还是圣洁之人。我们从他的遗体提取药物，还用他制作颜料，把他磨成粉，为了叮当作响的金币，我们展示他的肉体，他缩成一团的残骸是多么了不起，围观的人们从不觉得有什么愧疚。噢，告诉我，众神对死者的尊敬到底有多久？",
    "footnotes": [
      {
        "term": "pigment",
        "pos": "n.",
        "gloss": "[生]色素，颜料"
      }
    ]
  },
  {
    "id": 450,
    "word": "mustang",
    "pos": "n",
    "cnWord": "野马",
    "defEn": "An indocile! horse of the western plains. In English society, the American wife of an English nobleman.",
    "defCn": "美国西部荒原的一种物例不逊的马，在英国社会，指的是英国贵族的美国妻子。"
  },
  {
    "id": 451,
    "word": "mythology",
    "pos": "n",
    "cnWord": "神话作品集",
    "defEn": "The body of a primitive people's beliefs concerning its origin, early history, heroes, deities and so forth, as distinguished from the true accounts which it invents later. a ee",
    "defCn": "这是装满原始民族起源、早期历史、英雄、神灵和扩张等信念的躯体，在它产生之后，那些记录真实故事的历史就更为珍贵了。"
  },
  {
    "id": 452,
    "word": "nectar",
    "pos": "n",
    "cnWord": "玉液",
    "defEn": "A drink served at banquets of the Olympian deities. The secret of its preparation is lost, but the modern Kentuckians believe that they come pretty near to a knowledge of its chief ingredient. Juno drank a cup of nectar, But the draught did not affect her. Juno drank a cup of rye -- Then she bad herself good-bye.",
    "defCn": "这是奥林匹斯山上诸神在宴会上饮用的一种甘美的饮料 ,其制作的秘方早已失传 , 但现代肯塔基州的人相信他们对其主要成分已了解得八九不离十了。天后朱诺喝下一杯玉液琼染，可这玩意儿平息不了好的渴，于是她喝下一杯黑麦威士忌，结果一杯下肚她已酬得不行。"
  },
  {
    "id": 453,
    "word": "negro",
    "pos": "n",
    "cnWord": "满意",
    "defEn": "The piece de resistance in the American political problem. unsatisfactory solution.",
    "defCn": "这是美国政治问题大宴席的一道主菜。共和党人用代表黑人，然后列出他们的等式 : 让n= 白人。不过，这个等式得出的结果并不让人"
  },
  {
    "id": 454,
    "word": "neighbor",
    "pos": "n",
    "cnWord": "邻居",
    "defEn": "One whom we are commanded to love as ourselves, and who does all he knows how to make us disobedient.",
    "defCn": "这是我们奉主之命像爱我们自己一样去爱的人 ,可他做的一切都是千方百计使我们违背主命。"
  },
  {
    "id": 455,
    "word": "nepotism",
    "pos": "n",
    "cnWord": "裙带关系",
    "defEn": "Appointing your grandmother to office for the good of the party.",
    "defCn": "为了自己人的好处，聘请自己的奶奶来办公。"
  },
  {
    "id": 456,
    "word": "newtonian",
    "pos": "adj",
    "cnWord": "牛顿的",
    "defEn": "Pertaining to a philosophy of the universe invented by Newton, who discovered that an apple will fall to the ground, but was unable to say why. His successors and disciples have advanced so far as to be able to say when.",
    "defCn": "与牛顿创立的宇宙假说有关的。和牛顿发现苹果必然要落向地球，但他不知道原因。和牛顿的门徒和后继者让他的假说大大地前进了，他们有能力知道莹果在何时落地。"
  },
  {
    "id": 457,
    "word": "nihilist",
    "pos": "n",
    "cnWord": "虚无主义者",
    "defEn": "A Russian who denies the existence of anything but Tolstoi. The leader j of the school is Tolstoi.",
    "defCn": "这是一种俄国人，他们只信奉托尔斯泰 !，这个学派的名誉领袖就是托尔斯泰。"
  },
  {
    "id": 458,
    "word": "nirvana",
    "pos": "n",
    "cnWord": "涅槃",
    "defEn": "the wise, particularly to those wise enough to understand it. nobleman Nature's provision for wealthy American minds ambitious to incur social distinction and suffer high life. ; noise A stench! in the ear. Undomesticated music. The chief product and authenticating” sign of civilization.",
    "defCn": "这是佛祖赏赐给聪明人的一种极其快乐的解脱尘世的技巧，那些能弄懂的聪明人尤其能获得这种恩赐。"
  },
  {
    "id": 459,
    "word": "nominee",
    "pos": "n",
    "cnWord": "被提名者",
    "defEn": "A modest gentleman shrinking from the distinction of private life and diligently seeking the honorable obscurity of public office.",
    "defCn": "这是一个谦虚的绅士，他不乐意通过隐居生活来出名，而积极在政府部门寻求有光彩的默默无闻。"
  },
  {
    "id": 460,
    "word": "nonsense",
    "pos": "n",
    "cnWord": "胡说",
    "defEn": "The objections that are urged against this excellent dictionary. mae = 8 Sr Ne\" mS",
    "defCn": "对这本卓越的字典的一切非议都是胡说。"
  },
  {
    "id": 461,
    "word": "oath",
    "pos": "n",
    "cnWord": "誓言",
    "defEn": "In law, a solemn appeal to the Deity, made binding upon the conscience by a penalty for perjury’. ae",
    "defCn": "在打宫司时，有关人员对神的哀求，它通过对作伪证进行惩罚来束缚人的良心。"
  },
  {
    "id": 462,
    "word": "oblivion",
    "pos": "n",
    "cnWord": "健忘",
    "defEn": "The state or condition in which the wicked cease from struggling and the dreary’ are at rest. Fame's eternal dumping ground. Cold storage for high hopes. A place where ambitious authors meet their works without pride and their betters without envy. A dormitory without an alarm clock.",
    "defCn": "这这样一种状态下，政恶之人不再折腾，忧郁之人也得到了安静。这是荣誉永久的垃圾场，也是冻结强烈愿望的冰库。在这里，雄心勃勃的作家在拿起自己的作品时不再感到骄傲 ,看到他人的好作品时也不再姥妒。这是一个没有闹钟的集体宿舍。"
  },
  {
    "id": 463,
    "word": "observatory",
    "pos": "n",
    "cnWord": "天文台",
    "defEn": "A place where astronomers conjecture' away the guesses of their predecessors.",
    "defCn": "在这里，天文学家用自己的假想来推翻前人的假想。"
  },
  {
    "id": 464,
    "word": "obsessed",
    "pos": "pp",
    "cnWord": "被魔鬼附身的",
    "defEn": "Vexed by an evil spirit, like the gadarene? swine and other critics. Obsession was once more common than it is now. Arasthus tells of a peasant who was occupied by a different devil for every day in the week, and on Sundays by two. They were frequently seen, always walking in his shadow, when he had one, but were finally driven away by the village notary, a holy man; but they took the peasant with them, for he vanished utterly. A devil thrown out of a woman by the Archbishop of Rheims ran through the trees, pursued by a hundred persons, until the open country was reached, where by a leap higher than a church spire? he escaped into a bird. A chaplain in Cromwell's army exorcised a soldier's obsessing devil by throwing the soldier into the water, when the devil came to the surface. The soldier, unfortunately, did not.",
    "defCn": "被魔鬼缠身，就好象乱冲的野猪和批评家一样。这样的事情在过去要多得多。阿拉斯塔斯说，从前有一个农民被抱附身了，从周一到周六，每天有一个鬼附身，周日则有两个。人们常能看到这伙魔鬼，它们总是跟着农夫的影子 ,但后来这群鬼都被村里的一个公证人一一一个圣人赶跑了，遗憾的是它们把农夫也带走了，因为他从此彻底消失了。曾经有一个鬼被兰斯大主教从一个女人身上赶出来，它在树丛间狂奔，后面有100 人追赶，一到空旷地带，它就猛地一跳，跳得比教堂的塔尖还高，然后变成一只鸟飞走了。交伦威尔 :军队的一个随军牧师为一个战士驱，魔，办法是把他投进水塘里，结果魔鬼浮出了水面，糟糕的是，战士却"
  },
  {
    "id": 465,
    "word": "obsolete",
    "pos": "adj",
    "cnWord": "荒废的",
    "defEn": ": No longer used by the timid. Said chiefly of words. A word which some lexicographer has marked obsolete is ever thereafter an object of dread and equivalent equally good, it is good enough for the good writer. Indeed, a writer's attitude toward \"obsolete\" words is as true a measure of his literary ability as anything except the character of his work. A dictionary of obsolete and obsolescent” words would not only be singularly rich in strong and sweet parts of speech; it would add large possessions to the vocabulary of every competent writer who might not happen to be a competent reader.",
    "defCn": "' 克伦威尔(1$99 一 1658)，英国杰出的资产阶级军事家和政治家，是 17 世纪英国资产阶级革命的领袖之一。胆小鬼不敢再用它，这里主要指代的是单词。一个词一旦被词典编所者标定为“过时的”，那么从此以后，笨作家就会对它退避三售，但对一个好作家来说，只要它是一个很好用的词，而且无法在现代词汇中找到对等的词，那么这个词就成了他的掌上明珠了。事实上，一个作家对待“过时的”词的能力是衡量他的才华的可靠尺度，仅次于他对作品人物的塑造。一本收集已过时的和马上就要过时的词的辞典不仅会增加一篇演说稿的煽动力，使其变得优美动听。而且大大地扩充了一个有才华的作家的词汇库，不过对于一个优秀的读者来说却没有什么用。"
  },
  {
    "id": 466,
    "word": "obstinate",
    "pos": "adj",
    "cnWord": "顽固的",
    "defEn": "Inaccessible to the truth as it is manifest in the splendor and stress of our advocacy. The popular type and exponent’ of obstinacy is the mule, a most intelligent animal.",
    "defCn": "我们鼓吹得多人么壮观和华丽，道理显而易见，但这家伙还是无法接受，这就是固执的。说到园执，最典型的例子应该数骤子了，这是一种聪明到了极点的动物。"
  },
  {
    "id": 467,
    "word": "occasional",
    "pos": "adj",
    "cnWord": "偶尔的",
    "defEn": "Afflicting us with greater or less frequency. That, however, is not the sense in which the word is used in the phrase “occasional verses,\" which are verses written for an \"occasion,\" such as an anniversary, a celebration or other event. True, they afflict us a little worse than other sorts of verse, but their name has no reference to irregular recurrence.",
    "defCn": "用一种时快时慢的节奏来折磨我们。不过在occasional verses (应景诗 )中，这个词的含义可不一样。所谓应景诗就是在某些特定场合如周年纪念、庆祝会写的诗。说实话，这种诗在折磨我们时比其他的诗有过之而无不及，它的名称就告诉我们它可不是偶尔和我们过不去。"
  },
  {
    "id": 468,
    "word": "occident",
    "pos": "n",
    "cnWord": "西方",
    "defEn": "The part of the world lying west (or east) of the Orient. It is largely inhabited by Christians, a powerful subtribe of the Hypocrites, whose ， principal industries are murder and cheating, which they are pleased to call Orient.",
    "defCn": "; 这是位于东方以西的一个世界。这一地区的主要居民是基督徒，这是伪君子族力量最为强大的一支，他们主要从事谋杀和欺诈，美其名昌，“战争”和“商业”。不过在东方，这同样是两大支柱产业。"
  },
  {
    "id": 469,
    "word": "ocean",
    "pos": "n",
    "cnWord": "海洋",
    "defEn": "A body of water occupying about two-thirds of a world made for man -- who has no gills’. Ala.",
    "defCn": "这是专为人准备的一片水体，占据了世界的三分之二，但人类却没"
  },
  {
    "id": 470,
    "word": "offensive",
    "pos": "adj",
    "cnWord": "冒犯",
    "defEn": "Generating disagreeable emotions or sensations, as the advance of an army against its enemy. replied the unsuccessful general. \"The blackguard wouldn't come out of his works!\"",
    "defCn": "当敌军挺进时产生的一种不快或激动情绪。“敌人的战术是一种冒犯吗 ?”国王问。“我想可以这么说 .”那位受到挫折的将军愤愤不平地答道 :“那群无赖艇在扼体里不出来 !?"
  },
  {
    "id": 471,
    "word": "old",
    "pos": "adj",
    "cnWord": "老的（过时的）",
    "defEn": "In that stage of usefulness which is not inconsistent with general inefficiency, as an old man. Discredited by lapse of time and offensive to the popular taste, as an old book. Nature herself approves the Goby rule And gives us every moment a fresh fool. Harley Shum",
    "defCn": "在这样一个阶段，一个事物失去了它的功用，但又不是通常所说的低能，这就是老的，比如一个老人。随着时间的流逝而失去了光彩，不适合大众的胃口，这就是过时的，比如一本旧书。"
  },
  {
    "id": 472,
    "word": "olympian",
    "pos": "adj",
    "cnWord": "奥林匹亚的",
    "defEn": "Relating to a mountain in Thessaly, once inhabited by gods, now a repository of yellowing newspapers, beer bottles and mutilated sardine cans, attesting the presence of the tourist and his appetite. His name the smirking! tourist scrawls’ Upon Minerva's temple walls, Where thundered once Olympian Zeus, ， And marks his appetite's abuse. Averil Joop RAGA,",
    "defCn": "它是希腊塞萨利的一座山，此山一度是众神栖息的圣地，如今变成了一座仓库，堆满了发黄的报纸、破烂的啤酒瓶和手开的沙丁鱼镀头。它显示了观光客的势利和他的哮好。，不在乎他那雷震般的威名，胆敢在智慧女神庙上胡乱涂鸦，在主神宙斯威名远扬的奥林匹亚山，留下了观光客的误罚。埃夫利尔，约普"
  },
  {
    "id": 473,
    "word": "omen",
    "pos": "n",
    "cnWord": "预兆",
    "defEn": "A sign that something will happen if nothing happens.",
    "defCn": "一种暗示，如果现在没有任何事发生，那么将来一定会有什么事发"
  },
  {
    "id": 474,
    "word": "once",
    "pos": "adv",
    "cnWord": "曾经",
    "defEn": "Enough.",
    "defCn": "够啦 !"
  },
  {
    "id": 475,
    "word": "opera",
    "pos": "n",
    "cnWord": "歌剧",
    "defEn": "A play representing life in another world, whose inhabitants have no speech but song, no motions but gestures and no postures but attitudes. Ail acting is simulation, and the word simulation is from simia, an ape; but in opera the actor takes for his model Simia audibilis (or Pithecanthropos stentor) -- the ape that howls. The actor apes a man -- at least in shape; The opera performer apes an ape.",
    "defCn": "这是一出代表另一个世界的把戏，在这个世界里，没有词语却在歌唱，没有动作却有手势，没有姿态却表露出心态。所有的表演都是一种模仿〈simulation)，而simulation一词是源于simia〈大猩猩 )，在歌剧中，演员效仿猩猩一一喷叫的猩猩。演员模仿人，至少从外表来看是如此。歌剧演员则模仿猩猩。"
  },
  {
    "id": 476,
    "word": "opportunity",
    "pos": "n",
    "cnWord": "机会",
    "defEn": "A favorable occasion for grasping a disappointment.",
    "defCn": "一个抓住失望的好时机。"
  },
  {
    "id": 477,
    "word": "oppose",
    "pos": "v",
    "cnWord": "反对",
    "defEn": "To assist with obstructions and objections.",
    "defCn": "带着异议和反对参与进来。"
  },
  {
    "id": 478,
    "word": "opposition",
    "pos": "n",
    "cnWord": "府肆意妄为",
    "defEn": "， In politics the party that prevents the Government from running amuck' by hamstringing” it.",
    "defCn": "在政治中，这是一种政治派别，它使政府变成踊子，为的是防止政府肆意妄为。"
  },
  {
    "id": 479,
    "word": "optimism",
    "pos": "n",
    "cnWord": "乐观主义",
    "defEn": "The doctrine, or belief, that everything is beautiful, including what is ugly, everything good, especially the bad, and everything right that is wrong. It is held with greatest tenacity? by those most accustomed to the mischance’ of falling into adversity, and is most acceptably expounded with the grin that apes? a smile. Being a blind faith, it is inaccessible to the light of disproof' -- an intellectual disorder, yielding to no treatment but death. It is hereditary’, but fortunately not contagious.",
    "defCn": "这是一种理论，它相信每一种事物都是美丽的，包括那些丑陋的事物，任何东西都是善的，尤其是那些恶的东西，任何情况都是正确的，那些错误的更是如此。那些惯于承受灾难的人坚定不移地实践着这种理论，并以自己的微笑来进行前述。因为这是一种盲目的信仰，反驭之光是照不进去的一一这是一种心智的混乱状态，只有死亡才能治愈。它世代根承，但幸运的是并不会四处传染。"
  },
  {
    "id": 480,
    "word": "optimist",
    "pos": "n",
    "cnWord": "乐观主义者",
    "defEn": "A proponent’ of the doctrine that black is white. A pessimist applied to God for relief. would justify’ them.\" something -- the mortality of the optimist.\"",
    "defCn": "混淆黑白这一信条的拥护者。一个翡观主义者乞求上帝给他一些安奈。“你是希望我重新给你希望和快乐吗 ?”上帝问。“不 ,”悲观主义者答道 ,“我只是希望你能创造出一些东西来证明它们是合理的。?”“万物已经创造好了 .”上帝说 ,“但你忽视了某些东西一乐观主义者的死 .”"
  },
  {
    "id": 481,
    "word": "oratory",
    "pos": "n",
    "cnWord": "演讲术",
    "defEn": "A conspiracy between speech and action to cheat the understanding. A tyranny’ tempered” by stenography’.",
    "defCn": "这是一种用语言和动作共同来骗取人们同情理解的骗术 , 是由速记| 法培养出来的一种暴力。"
  },
  {
    "id": 482,
    "word": "orphan",
    "pos": "n",
    "cnWord": "冶金回火锻炼调节",
    "defEn": "A living person whom death has deprived of the power of filial | ingratitude -- a privation appealing with a particular eloquence’ to all that is sympathetic in human nature. When young the orphan is commonly sent to ! an asylum*®, where by careful cultivation of its rudimentary® sense of locality it is taught to know its place. It is then instructed in the arts of dependence and servitude’ and eventually tured loose to prey upon the world as a bootblack® or scullery! maid.",
    "defCn": "这是一种被死神剥夺了不孝权力的人一一这种剥夺以一种难以抗拒的雄辩力量唤起人们的怜帆。年幼的孤儿经常被送进孤儿院，在那里他们培养了基本的方位感，因此他们从小就知道自己的处境。然后人们又把依赖和奴役的技巧教给了他们，最后，人们让他们充当了控鞋童或洗碗女仆，使他们最终沦为被他人掠食的牺牲品。"
  },
  {
    "id": 483,
    "word": "orthodox",
    "pos": "n",
    "cnWord": "正统派",
    "defEn": "An ox wearing the popular religious joke.",
    "defCn": "这是一头身上驼着受欢迎的虔诚之斩的牛。"
  },
  {
    "id": 484,
    "word": "ostrich",
    "pos": "n",
    "cnWord": "鸵鸟",
    "defEn": "A large bird to which (for its sins, doubtless) nature has denied that hinder toe in which so many pious naturalists have seen a conspicuous evidence of design. The absence of a good working pair of wings is no defect, for, as has been ingeniously pointed out, the ~ ostrich does not fly. j AAA, RATTLER, BL",
    "defCn": "这是一种体态庞大的鸟（显然它犯过很多罪）。大自然没有把第五个脚趾赋予它，而虔诚的博物学家恰恰从这个脚趾头窥见了大自然的伟大匠心。没有一对发达的翅膀，这倒不是鸵鸟的什么缺陷，因为博物学家已坦率地指出，鸵鸟是不会飞的。"
  },
  {
    "id": 485,
    "word": "outdo",
    "pos": "vt",
    "cnWord": "超过",
    "defEn": "To make an enemy.",
    "defCn": "就是制造一个对手。"
  },
  {
    "id": 486,
    "word": "out-of-doors",
    "pos": "n",
    "cnWord": "露天",
    "defEn": "That part of one's environment upon which no government has been able to collect taxes. Chiefly useful to inspire poets. glory, and I thought, as I looked at his vanishing ray, of a perfectly splendid story. : beast was o'ertested; Then the man would carry him miles on the road till , Neddy was pretty well rested. The moon rising solemnly over the crest of the hills to the east of my station displayed her broad disk to the darkening west like a visible new And I thought of a joke (and I laughed till I cried) of an idle young woman who tarried about a church-door for a look at the bride, although To poets all Nature is pregnant with grand ideas -- with thought and emotion. I pity the dunces who don't understand the speech of earth, heaven and ocean. Stromboli Smith",
    "defCn": "一个人生活环境的一部分，任何政府都无法对它进行征税。它的主要作用是激发诗人的灵感。"
  },
  {
    "id": 487,
    "word": "owe",
    "pos": "v",
    "cnWord": "欠",
    "defEn": "To have (and to hold) a debt. The word formerly signified not indebtedness, but possession; it meant \"own,\" and in the minds of debtors there is still a good deal of confusion between assets and liabilities. fe. Ses & < aS A oe < fi ENS kgs Sire Rec a BA 5 1 55 Kk ‘aa",
    "defCn": "背负（或拥有）债务，\"欠\"这个词从前并不表示负债，而表示所有权，\"欠\"(owe)和\"拥有\"同义。在许多负债者心目中，自己的资产和债务根本就无法区分。"
  },
  {
    "id": 488,
    "word": "pain",
    "pos": "n",
    "cnWord": "痛苦",
    "defEn": "An uncomfortable frame of mind that may have a physical basis in something that is being done to the body, or may be purely mental, caused by the good fortune of another.",
    "defCn": "这是一种难受的心情，是由某种对肉体的损害造成的，但也可能是一种纯心理的感受，是由另一个人的好运而引起的。"
  },
  {
    "id": 489,
    "word": "palace",
    "pos": "n",
    "cnWord": "豪宅",
    "defEn": "A fine and costly residence, particularly that of a great official. The residence of a high dignitary of the Christian Church is called a palace; that of the Founder of his religion was known as a field, or wayside. There is progress.",
    "defCn": "主教之类的高级神职人员的住宅也叫豪宅 ; 而它的可敬的创立者的栖身之地不过是田野或路边，可见社会在进步。"
  },
  {
    "id": 490,
    "word": "palmistry",
    "pos": "n",
    "cnWord": "手相",
    "defEn": "The 947th method (according to Mimbleshaw's classification) of obtaining money by false pretences. It consists in \"reading character\" in the wrinkles made by closing the hand. The pretence is not altogether false; character can really be read very accurately in this way, for the wrinkles in every hand submitted plainly spell the word \"dupe.\" The imposture! consists in not reading it aloud.",
    "defCn": "这是用欣骗的手段来获取钱财的第 947 种办法 ,其做法是从一个人密如蛛网的掌纹上看出这个人的性格与命运。手相术并不是没有一点道理，它确实能破解一个人的性格与命运，因为从手掌的每一条纹路都能编出一套骗人的鬼话。这种骗术只有悄悄进行才能奏效。"
  },
  {
    "id": 491,
    "word": "pandemonium",
    "pos": "n",
    "cnWord": "阎王殿",
    "defEn": "Literally, the Place of All the Demons. Most of them have escaped into politics and finance, and the place is now used as a lecture hall by the Audible Reformer. When disturbed by his voice the ancient echoes clamor’ appropriate responses most gratifying to his pride of distinction. AFR, REAR RE. IE BAT TRUE . MENS EIA BATT Seg, AIS) 2 ARE AE a et Bl SESPAVTE RY, ARRAS eit A ROE SA Z",
    "defCn": "此地，进入了政治和经济领域，这个地方现在成了说话动人的改革者的"
  },
  {
    "id": 492,
    "word": "pantomime",
    "pos": "n",
    "cnWord": "哑剧",
    "defEn": "A play in which the story is told without violence to the language. The least disagreeable form of dramatic action.",
    "defCn": "一种戏剧，它不通过语言来讲述一个故事，这是所有戏剧形式中最不让人厌恶的一种。"
  },
  {
    "id": 493,
    "word": "passport",
    "pos": "n",
    "cnWord": "护照",
    "defEn": "A document treacherously inflicted upon a citizen going abroad, ， exposing him as an alien and pointing him out for special reprobation and outrage.",
    "defCn": "这是狭诈地强加给去国外的公民的一种证件 , 目的是要表明他是一个外国伐，好让他遭受冷遇、齐加和暴行。"
  },
  {
    "id": 494,
    "word": "past",
    "pos": "n",
    "cnWord": "过去",
    "defEn": "That part of Eternity with some small fraction of which we have a slight and regrettable acquaintance. A moving line called the Present parts it from an imaginary period known as the Future. These two grand divisions of Eternity, of which the one is continually effacing the other, are entirely unlike. The one is dark with sorrow and disappointment, the other bright with prosperity and joy. The Past is the region of sobs, the Future is the realm of song. In the one crouches Memory, clad in sackcloth’ and ashes, mumbling penitential’ prayer; in the sunshine of the other Hope flies with a free wing, beckoning” to temples of success and bowers’ of ease. Yet the Past is the Future of yesterday, the Future is the Past of to-morrow. They are one -- the knowledge and the dream. Met, BEA BRR Te; TE “CORR” BOKER, “are”",
    "defCn": "这是永恒的一块，我们对它的了解少得可怜，而且常常为它后悔不已。一条叫作“现在”的移动不定的线把它和叫作“将来”的想像出来的时间分离开来“过去”和“将来”这两块时间，彼此毫无共同之处，前者从不间断地抹掉后者。“过去”因悲伤与诅丧而一团潜黑 ,“将来”却被成功的希望与欢乐照亮。“过去”是一片加泣的乡土 ,“将来”是酒满歌声的城邦。在“过去”的角落里赚缩着“记忆”他衣着破烂，满昨天的“将来史“将来”是明天的“过去”，它们做的是同一件事一一一边梦想一边跨涉。"
  },
  {
    "id": 495,
    "word": "pastime",
    "pos": "n",
    "cnWord": "消妃",
    "defEn": "A device for promoting dejection. Gentle exercise for intellectual debility.",
    "defCn": "一种助长沮丧的装置，对于心灵脆弱的人来说是一种温和的锻炼。"
  },
  {
    "id": 496,
    "word": "patience",
    "pos": "n",
    "cnWord": "耐心",
    "defEn": "A minor form of despair, disguised as a virtue.",
    "defCn": "这是一种假装成美德的轻度失望。"
  },
  {
    "id": 497,
    "word": "patriot",
    "pos": "n",
    "cnWord": "爱国者",
    "defEn": "One to whom the interests of a part seem superior to those of the whole. The dupe of statesmen and the tool of conquerors.",
    "defCn": "这是一种认为局部利益高于整体利益的人。这种人是政治家愚弄的，对象，是政府者利用的工具。"
  },
  {
    "id": 498,
    "word": "patriotism",
    "pos": "n",
    "cnWord": "爱国主义",
    "defEn": "Combustible! rubbish read to the torch of any one ambitious to : illuminate his name. In Dr. Johnson's famous dictionary patriotism is defined as the last lexicographer I beg to submit that it is the first. AS wif ny ith PARE RE TR",
    "defCn": "这是一堆易燃的垃圾，任何一个想要出名的人用火一点，它都会避在约翰逊博士的著名辞典里 ,“爱国主义”被定义为恶棍最后的法宝。带着这位出生卑微却开明的词典编繁家应有的尊敬，我居请把它列为恶棍的第一伎俩。"
  },
  {
    "id": 499,
    "word": "pedestrian",
    "pos": "n",
    "cnWord": "行人",
    "defEn": "The variable part of the roadway for an automobile.",
    "defCn": "对于汽车来说，这是快车道上易变的一部分。"
  },
  {
    "id": 500,
    "word": "penitent",
    "pos": "adj",
    "cnWord": "忏悔的",
    "defEn": "Undergoing or awaiting punishment.",
    "defCn": "正在经受或等待惩罚。"
  },
  {
    "id": 501,
    "word": "perfection",
    "pos": "n",
    "cnWord": "完美",
    "defEn": "An imaginary state of quality distinguished from the actual by an element known as excellence; an attribute! of the critic.",
    "defCn": "这是一种想像出来的品质状态 , 它赁一种被称为卓越的要素区别于实际情况。这是评论家的一种特性。"
  },
  {
    "id": 502,
    "word": "peripatetic",
    "pos": "adj",
    "cnWord": "逍遥派",
    "defEn": "Walking about. Relating to the philosophy of Aristotle, who, while expounding it, moved from place to place in order to avoid his pupil's objections. A needless precaution -- they knew no more of the matter than he.",
    "defCn": "这是一个喜欢走来走去的派别。这与创立者亚利士多德 ? 有关。亚> 亚利士多德是古代世界最伟大的哲学家和科学家，他创立了几乎丰富了每个哲学领域的形式过辑学，对科学做出了许多贡献。利士多德在阐述他的学说时喜欢从一个地方走到另一个地方 , 为的是租避学生的反问。这种提防真是多此一举一一他们懂的东西并不比他多。"
  },
  {
    "id": 503,
    "word": "perseverance",
    "pos": "n",
    "cnWord": "不届不挠",
    "defEn": "A lowly virtue whereby mediocrity achieves an inglorious' success. night, persevering to bawl. \"Remember the fable of tortoise and hare --The one at the goal while the other is -- where?\" Why, back there in Dreamland, renewing his lease of life, all his muscles preserving the peace, the goal and the rival forgotten alike, and the ， long fatigue of the needless hike. His spirit a-squat in the grass and the dew of the dogless Land beyond the Stew, he sleeps, like a saint in a holy place, a : winner of all that is good in a race. Sukker Uffro",
    "defCn": "这是一种低等的品质，平良的人凭借它取得并不光彩的成功。“坚持，坚持 !”说教者大喊大叫，他日夜不停地叫 :“请记住龟免赛跑的意义，一个已经安然到达，另一个在哪里 ?”噢 ! 他在甜蜜的梦乡，他在那里可以快活地游荡，神清气炎，身体舒畅，比赛干嘛，对手是谁，早已抛到脑后，没有长途跋涉的疲惫，他的灵魂蹲中在草地的露珠上，那里没有猎狗和烦恼，他的睡态活像圣人坐在神圣的庙堂，善于比赛的人才是胜利者。"
  },
  {
    "id": 504,
    "word": "pessimism",
    "pos": "n",
    "cnWord": "悲观主义",
    "defEn": "A philosophy forced upon the convictions of the observer by the disheartening’ prevalence of the optimist with his scarecrow’ hope and his unsightly smile.",
    "defCn": "乐观主义拿着虚假的希望四处招摇，带着令人不快的微笑左右逢源。这种令人沮丧的情形使悲观主义应运而生，并强加在信奉者的身上。"
  },
  {
    "id": 505,
    "word": "philanthropist",
    "pos": "n",
    "cnWord": "慈善家",
    "defEn": "A rich (and usually bald) old gentleman who has trained himself to grin while his conscience is picking his pocket.",
    "defCn": "一个富裕的〈通常是秃头的 )老绅士，经过多年的磨练，他已经能够在良心发现，掏出钱包时啊嘴一笑。"
  },
  {
    "id": 506,
    "word": "philistine",
    "pos": "n",
    "cnWord": "良人",
    "defEn": "One whose mind is the creature of its environment, following the fashion in thought, feeling and sentiment. He is sometimes learned, frequently prosperous, commonly clean and always solemn.",
    "defCn": "这种人的思想往往是环境的产物，他被时复的理论牵着鼻子走。这种人有时很好学，往往生活得很舒适，通常很爱整洁，而且总是一本正"
  },
  {
    "id": 507,
    "word": "philosophy",
    "pos": "n",
    "cnWord": "哲学",
    "defEn": "Aroute of many roads leading from nowhere to nothing. aye",
    "defCn": "很多条路汇合成的一条路，不知道这条路从哪里来，通往何方。"
  },
  {
    "id": 508,
    "word": "phonograph",
    "pos": "n",
    "cnWord": "留声机",
    "defEn": "An irritating toy that restores life to dead noises. _",
    "defCn": "这是一种让人恼火的玩意此，它让死去的噪音重获新生。"
  },
  {
    "id": 509,
    "word": "phrenology",
    "pos": "n",
    "cnWord": "颇相学",
    "defEn": "The science of picking the pocket through the scalp. It consists in : locating and exploiting the organ that one is a dupe with.",
    "defCn": "这是剥开头皮去掏钱包的一门科学，它包括探查和开采头颅，人正是因为有了这种器官才会遭骗。"
  },
  {
    "id": 510,
    "word": "physician",
    "pos": "n",
    "cnWord": "医生",
    "defEn": "One upon whom we set our hopes when ill and our dogs when well.",
    "defCn": "他是这样一种人 : 生病时，我们把希望寄托在他身上，健康时，我们则把狗送到他那里。"
  },
  {
    "id": 511,
    "word": "physiognomy",
    "pos": "n",
    "cnWord": "观相术",
    "defEn": "The art of determining the character of another by the resemblances and differences between his face and our own, which is the standard of excellence. construction in the face.\" The physiognomists his portrait scan, and say: heart, So, in his own defence, denied our art.\" Lavatar Shunk",
    "defCn": "以我们自己的脸为完美的标准，通过对比别人与我们脸的异同点来判断别人性格的艺术。\n\"没有这样的艺术\"，莎士比亚——这个蠢货说，\"从一个人的面相怎么能看出他的心智。\"观相学家看了看他的面相说：\"在这张脸上能看见的智慧少得可怜！他知道他的脸泄漏了天机，表明了他的愚蠢。因此，为了替自我申冤，妄想否定我们的艺术。\""
  },
  {
    "id": 512,
    "word": "pie",
    "pos": "n",
    "cnWord": "馅饼",
    "defEn": "An advance agent of the reaper whose name is Indigestion. Cold pie was highly esteemed by the remains. Rey. Dr. Mucker (in a funeral sermon over a British nobleman) Cold pie is a detestable American comestible. That's why I'm done -- or undone --So far from that dear London. (from the headstone of a British nobleman in Kalamazoo) SEH Aa AT RE. FRHDATGLEA-SRDRRRALO OE",
    "defCn": "这是由一个名叫“消化不良”的死神提前派来的使者。冷馅饼是一种罪大恶极的美国食品。这就是我为了吃了一一或者说还没吃完它一就永远告别了亲爱的伦敦的原因。一位茵身于卡拉马舍城的英国贵族的董志馈"
  },
  {
    "id": 513,
    "word": "piety",
    "pos": "n",
    "cnWord": "虔诚",
    "defEn": "Reverence for the Supreme Being, based upon His supposed resemblance to man. The pig is taught by sermons and epistles To think the God of Swine has snout and bristles’. ik FUSCA LPKRA BW KL,",
    "defCn": "这是人们对上帝的尊崇，它建立在“上帝和人相似”的信念之上。猪接受了布道和使徒书的指导，"
  },
  {
    "id": 514,
    "word": "pig",
    "pos": "n",
    "cnWord": "猪",
    "defEn": "An animal (Porcus omnivorus) closely allied to the human race by the i splendor and vivacity of its appetite, which, however, is inferior in scope, for it sticks at pig.",
    "defCn": "这种动物赁其好胃口成为了人类的好哥们，可惜的是，它的眼界没有人类高，它始终只想当一头猪。"
  },
  {
    "id": 515,
    "word": "pilgrim",
    "pos": "n",
    "cnWord": "清教徒",
    "defEn": "A traveler that is taken seriously. A Pilgrim Father was one who, leaving Europe in 1620 because not permitted to sing psalms through his nose, followed it to Massachusetts, where he could personate God according to the dictates of his conscience.",
    "defCn": "一个受到残酷对待的旅行者。所谓的清教徒的前期移民是指这样一种人，他在 1620 年离开欧洲到达新大陆马萨诸塞州，因为在欧洲正统派不允许用鼻子哼歌给上帝听，他的信徒们也随之而来 ,在这块乐土上他可以随心所和欲地扮演上和帝。"
  },
  {
    "id": 516,
    "word": "pitiful",
    "pos": "adj",
    "cnWord": "可怜的",
    "defEn": "The state of an enemy of opponent after an imaginary encounter with oneself.",
    "defCn": "在我们的想像中，敌人与我们遭遇时的情形。"
  },
  {
    "id": 517,
    "word": "pity",
    "pos": "n",
    "cnWord": "抄袭",
    "defEn": "A failing sense of exemption, inspired by contrast. eal)",
    "defCn": "在对比之后，因为祸不及身而产生的一种失落感。"
  },
  {
    "id": 518,
    "word": "plagiarism",
    "pos": "n",
    "cnWord": "抄袭",
    "defEn": "A literary coincidence compounded of a discreditable’ priority? and an honorable subsequence. poR",
    "defCn": "这是语言艺术的一种巧合，它以丢脸开始，荣誉告终。"
  },
  {
    "id": 519,
    "word": "plagiarize",
    "pos": "v",
    "cnWord": "剽窃",
    "defEn": "To take the thought or style of another writer whom one has never, never read.",
    "defCn": "采用另一个自己绝对无法看懂的作家的看法或风格。"
  },
  {
    "id": 520,
    "word": "plague",
    "pos": "n",
    "cnWord": "瘟疫",
    "defEn": "In ancient times a general punishment of the innocent for admonition of their ruler, as in the familiar instance of Pharaoh the Immune. The plague as we of to-day have the happiness to know it is merely Nature's fortuitous! manifestation of her purposeless objectionableness. To bother about the best method of accomplishing an accidental result.",
    "defCn": "在古代，这是对无辜百姓的一种最广泛的惩罚，其目的是警告他们，的国王，但埃及的法老总是能够逃脱它，摩西奶请上帝降灾于法老，这下埃及的百姓可遭了殊，但法老依然安然无盖。今天我们庆幸地得知，原来它不过是大自然偶尔毫无目的的一种“恼怒”计划结局本来是无法确定的，但却还要复思苦想地找到通向它的捷径。"
  },
  {
    "id": 521,
    "word": "platitude",
    "pos": "n",
    "cnWord": "陈词滥调",
    "defEn": "The fundamental element and special glory of popular literature. A thought that snores in words that smoke. The wisdom of a million fools in the diction of a dullard'. A fossil sentiment in artificial rock. A moral without the fable. All that is mortal of a departed truth. A demi-tasse of milk-and-mortality. The Pope's-nose of a featherless peacock. A jelly-fish withering on the shore of the sea of thought. The cackle surviving the egg. A desiccated epigram’. Bea",
    "defCn": "这是通俗文学的基本要素和专有荣耀。这是在烟雾弥漫的大堆字词中艇声起伏的思想。这是用果子的措词表达出来的 100 万个傻蛋的智慧。这是人造巨石中埋藏的化石情感。这是没有情节的寓言说教。这是过期真理的遗骨，这是用牛奶和道德搅成的一杯淡咖啡。这是羽尾掉光的孔稚的光屁股。看起来就象诗人玺伯 ?的鼻子。这是思想的海滩上闪挛的海气。这是母鸡产完蛋在咯略打鸣。一个又一个干枯乏味的格言。"
  },
  {
    "id": 522,
    "word": "platonic",
    "pos": "adj",
    "cnWord": "柏拉图式的",
    "defEn": "Pertaining to’ the philosophy of Socrates. Platonic Love is a fool's name for the affection between a disability and a frost.",
    "defCn": "这是苏格拉底哲学的附庸 , 所谓的柏拉图式的爱情是给处于性无能和性冷淡乾坎中的傻瓜取的绰号。"
  },
  {
    "id": 523,
    "word": "plaudits",
    "pos": "n",
    "cnWord": "鼓掌",
    "defEn": "Coins with which the populace pays those who tickle and devour it.",
    "defCn": "这是公众对逗乐他们并贪禁注视着他们的那些人 , 抛下的一堆虚拟的硬币。"
  },
  {
    "id": 524,
    "word": "please",
    "pos": "v",
    "cnWord": "讨好",
    "defEn": "To lay the foundation for a superstructure’ of imposition.",
    "defCn": "为建好以后进行敲诈的上层建筑，先打牢这座大厦的基础。"
  },
  {
    "id": 525,
    "word": "plebiscite",
    "pos": "n",
    "cnWord": "全民公决",
    "defEn": "A popular vote to ascertain” the will of the sovereign.",
    "defCn": "投上平民的一票去卉清楚领袖的决心。"
  },
  {
    "id": 526,
    "word": "plenipotentiary",
    "pos": "adj",
    "cnWord": "全权的",
    "defEn": "Having full power. A Minister Plenipotentiary is a diplomatist possessing absolute authority on condition that he never exert it.",
    "defCn": "即拥有完全权力的。全权大使是这样一种外交官，他拥有绝对的权力，其条件是绝对不使用它。"
  },
  {
    "id": 527,
    "word": "pleonasm",
    "pos": "n",
    "cnWord": "元长",
    "defEn": "An army of words escorting a corporal’ of thought.",
    "defCn": "一大批词语的军队护送一个思想的下士。"
  },
  {
    "id": 528,
    "word": "plunder",
    "pos": "v",
    "cnWord": "掠夺",
    "defEn": "To take the property of another without observing the decent and customary reticences' of theft. To effect a change of ownership with the candid’ concomitance of a brass band. To wrest the wealth of A from B and leave C lamenting a vanishing opportunity.",
    "defCn": "拿走他人的财产却不像小偷常做的那样体面地保持沉默。公开把他人的财产据为己有，同时让一个铜管乐队为自己助兴。从B那里强行抢走属于A的财富，让C为自己坐失良机而痛惜不已。"
  },
  {
    "id": 529,
    "word": "pocket",
    "pos": "n",
    "cnWord": "钱袋",
    "defEn": "The cradle of motive and the grave of conscience. In woman this organ is lacking; so she acts without motive, and her conscience, denied burial, remains ever alive, confessing the sins of others.",
    "defCn": "这是动机的摇篮和良心的坟墓。在女人身上，这种器官没有了，此她的行动是没有动机的。至于良心嘛，暂时不愿埋掉，仍然很活泼，不停地证明别人的罪过。"
  },
  {
    "id": 530,
    "word": "poetry",
    "pos": "n",
    "cnWord": "诗集",
    "defEn": "A form of expression peculiar to the Land beyond the Magazines.",
    "defCn": "这是除杂志以外，一块由词句开辟的天地。"
  },
  {
    "id": 531,
    "word": "poker",
    "pos": "n",
    "cnWord": "扑克",
    "defEn": "A game said to be played with cards for some purpose to this lexicographer unknown. tho",
    "defCn": "据称这是为了某些意图而用卡片来玩的游戏 , 至于这个“某些意图”词典编纂家还不了解。"
  },
  {
    "id": 532,
    "word": "police",
    "pos": "n",
    "cnWord": "警察",
    "defEn": "An armed force for protection and participation.",
    "defCn": "这是一种武装力量，它使人们免遭暴行，但同时它也参与暴行。"
  },
  {
    "id": 533,
    "word": "politeness",
    "pos": "n",
    "cnWord": "彬彬有礼",
    "defEn": "The most acceptable hypocrisy.",
    "defCn": "最容易被人接受的虚伪。"
  },
  {
    "id": 534,
    "word": "politics",
    "pos": "n",
    "cnWord": "政治",
    "defEn": "A strife of interests masquerading as a contest of principles. The conduct of public affairs for private advantage.",
    "defCn": "一种装扮成不同原则较量的历害冲突。一种假公济私的勾当。"
  },
  {
    "id": 535,
    "word": "polygamy",
    "pos": "n",
    "cnWord": "术赎罪的补偿的",
    "defEn": "A house of atonement, or expiatory chapel, fitted with several stools of repentance, as distinguished from monogamy, which has but one.",
    "defCn": "这是一座忏悔的房子或赎罪的教堂，里面摆着好几条悔罪的跪凳。它与一夫一妻制的不同之处在于，后者只放了一只跪凳。"
  },
  {
    "id": 536,
    "word": "portable",
    "pos": "adj",
    "cnWord": "便携式的",
    "defEn": "Exposed to a mutable” ownership through vicissitudes’ of possession.",
    "defCn": "便于更换主人。"
  },
  {
    "id": 537,
    "word": "positivism",
    "pos": "n",
    "cnWord": "实证主义",
    "defEn": "A philosophy that denies our knowledge of the Real and affirms our ignorance of the Apparent. Its longest exponent’ is Comte, its broadest Mill and its thickest Spencer.",
    "defCn": "这是一种可以否认我们对真实可以了解，证实我们明显无知的哲学。对此阑述时间最长的当属孔德 *，说得最明白的是穆勒 *，说得最粳粕的是斯宾塞 7国著名的哲学家，社会学、实证主义的创始人。© 约翰。穆勒(John Stuart Mill，1806 一 1873)，英国心理学家、哲学家和经济学家。?7 灰伯特。斯宾塞〈Herbert Spencer，1820 一 1903)，英国哲学家。他为人所共知的就是“社会达尔文主义之父”所提出一套的学说把进化理论适者生存应用在社会学上尤其是教育及阶级斗争。"
  },
  {
    "id": 538,
    "word": "precedent",
    "pos": "n",
    "cnWord": "惯例",
    "defEn": "In Law, a previous decision, rule or practice which, in the absence of a definite statute, has whatever force and authority a Judge may choose to give it, thereby greatly simplifying his task of doing as he pleases. As there are precedents for everything, he has only to ignore those that make against his interest and accentuate those in the line of his desire. Invention of the precedent elevates the trial-at-law from the low estate of a fortuitous ordeal to the noble attitude of a dirigible arbitrament.",
    "defCn": "从法律上而言，这是成文法确立之前就存在的决定、规章或做法，它们有具备法官可能赋予它的任何效力与权威 ,它们的存在大大地降低了法官的劳动强度。有惯例可循使法官们心安理得。由于每做一件事情都，有惯例可循 , 因此法官要做的事就是对那些与他们利益相冲突的事视而不见，突出强调那些合乎愿望的东西。惯例这一发明极大地提高了法庭| 的裁决水平，使它从原始的、球忽的神裁法发展成为高贵的、可以人为控制的人裁法。"
  },
  {
    "id": 539,
    "word": "predestination",
    "pos": "n",
    "cnWord": "命定论",
    "defEn": "The doctrine that all things occur according to programme. This doctrine should not be confused with that of foreordination', which means that all things are programmed, but does not affirm their occurrence, that being only an implication from other doctrines by which this is entailed’. The difference is great enough to have deluged’ Christendom with ink, to say nothing of the gore’. With the distinction of the two doctrines kept well in mind, and a reverent belief in both, one may hope to escape perdition” if spared.",
    "defCn": "这是一种理论，它主张所有的事情都按上帝的设计出现。不要把命定论和宿命论混为一谈，后者认为所有的事情都是上帝计划好的，但并不确定它们一定会发生。这两者的差异大极了，它使笔战在基督教世界泛滥成灾，而流血冲突更是数不胜数。应该切记这两种理论的不同，同时信奉它们，假如这个世界足够宽容的话，就有希望逃脱毁灭。"
  },
  {
    "id": 540,
    "word": "predilection",
    "pos": "n",
    "cnWord": "热爱",
    "defEn": "The preparatory stage of disillusion.",
    "defCn": "这是为幻灭而预备的舞台。"
  },
  {
    "id": 541,
    "word": "pre-existence",
    "pos": "n",
    "cnWord": "虚无",
    "defEn": "An unnoted factor in creation.",
    "defCn": "宇宙万物默默无闻的代理商。"
  },
  {
    "id": 542,
    "word": "preference",
    "pos": "n",
    "cnWord": "偏好",
    "defEn": "A sentiment, or frame of mind, induced by the erroneous belief that one thing is better than another. An ancient philosopher, expounding his conviction that life is no better than death, was asked by a disciple why, then, he did not die. \"Because,\" he replied, \"death is no better than life. It is longer.\"",
    "defCn": "这是一种情感或心境 ,是由认为某种东西比另一种东西更好的错误信念引起的。古代有一位哲学家，他相信生并不比死更好，在讲述他自己的理论时，他的一个学生问他为什么不去死 .“因为 ,”他答道 ,“死并不比生更好。它更漫长 .”"
  },
  {
    "id": 543,
    "word": "prejudice",
    "pos": "n",
    "cnWord": "偏见",
    "defEn": "A vagrant’ opinion without visible means of support.",
    "defCn": "，一种缺乏明显依据的游离不定的见解。"
  },
  {
    "id": 544,
    "word": "prelate",
    "pos": "n",
    "cnWord": "修道院院长",
    "defEn": "A church officer having a superior degree of holiness and a fat preferment. One of Heaven's aristocracy”. A gentleman of God.",
    "defCn": "一个有着神圣优越地位和肥缺的教会官员，天堂的一名精英，我主的一位绅士。"
  },
  {
    "id": 545,
    "word": "prerogative",
    "pos": "n",
    "cnWord": "特权",
    "defEn": "A sovereign’s right to do wrong.",
    "defCn": "这是领袖能做错事的权力。"
  },
  {
    "id": 546,
    "word": "prescription",
    "pos": "n",
    "cnWord": "处方",
    "defEn": "A physician's guess at what will best prolong the situation with least harm to the patient.",
    "defCn": "这是医生对于什么东西能最久地维持病人的病情同时又尽量少地对病人造成危害所做的一种猜测。"
  },
  {
    "id": 547,
    "word": "presidency",
    "pos": "n",
    "cnWord": "总统职位",
    "defEn": "The greased pig in the field game of American politics. prevaricator, 7. A liar in the caterpillar' estate’.",
    "defCn": "美国政治赌场上一头圆滑的猪。尚处于幼虫期的说谎者。"
  },
  {
    "id": 548,
    "word": "proof-reader",
    "pos": "n",
    "cnWord": "校对员",
    "defEn": "A malefactor3 who atones for making your writing nonsense by permitting the compositor’ to make it unintelligible’. VERE?",
    "defCn": "一个恶棍，为了修正你在作品中胡说八道、大放厥词的习性，而默",
    "footnotes": [
      {
        "term": "compositor",
        "pos": "n.",
        "gloss": "排字工人，排字员"
      }
    ]
  },
  {
    "id": 549,
    "word": "property",
    "pos": "n",
    "cnWord": "财产",
    "defEn": "Any material thing, having no particular value, that may be held by A against the cupidity of B. Whatever gratifies the passion for possession in one and disappoints it in all others. The object of man's brief rapacity’ and long indifference.",
    "defCn": "任何物质，并没有特别的价值，不过A持有它是为了刺激B的贪欲，它可是满足一个人的拥有欲而使其他人失望的任何事物。它是人们短期疯狂追求的目标，从长远看来又是无关紧要的东西。"
  },
  {
    "id": 550,
    "word": "prophecy",
    "pos": "n",
    "cnWord": "预言",
    "defEn": "The art and practice of selling one's credibility for future delivery.",
    "defCn": "先出售信用 ,将来再交货物一一预言就是这样的一种艺术和操作方"
  },
  {
    "id": 551,
    "word": "prude",
    "pos": "n",
    "cnWord": "装正经",
    "defEn": "A bawd” hiding behind the back of her demeanor’.",
    "defCn": "一个立着贞节牌坊的寻子。"
  },
  {
    "id": 552,
    "word": "publish",
    "pos": "n",
    "cnWord": "出版",
    "defEn": "In literary affairs, to become the fundamental element in a cone of critics.",
    "defCn": "就文学事务而言，指的是坐在批评家的火山口上。"
  },
  {
    "id": 553,
    "word": "push",
    "pos": "n",
    "cnWord": "逼迫",
    "defEn": "One of the two things mainly conducive to success, especially in politics. The other is Pull. eee iis Sica “eee > = are 3 314 \\. eA! aon ei WSR Saar",
    "defCn": "这是助人成功的两个容门之一，在政治中尤其如此。另一个穿门是拉拢。"
  },
  {
    "id": 554,
    "word": "quorum",
    "pos": "n",
    "cnWord": "法定人数",
    "defEn": "A sufficient number of members of a deliberative’ body to have their own way and their own way of having it. In the United States Senate a quorum? consists of the chairman of the Committee on Finance and a messenger from the White House; in the House of Representatives, of the Speaker and the devil.",
    "defCn": "一群经过密谋的家伙在议会中能够自行其是、为所和欲为的人数，当然，这个人数要尽可能的多。在参议院，它必须由财政委员会主席和白宫 ?信使参与，在众议院，它则必须包括演说家和混蛋。> 白宫位于宾夕法尼亚大街 1600 号 ,是美国总统府。除第一代总统华盛顿外的历任美国元首都曾在此居住和工作。白宫已经过多次整修，目前共有房间 132 间。有绿厅、蓝厅、红厅、国宴厅、条约厅、东厅和图书馆等。白宫底层及一楼供人参观，"
  },
  {
    "id": 555,
    "word": "quotation",
    "pos": "n",
    "cnWord": "引用",
    "defEn": "The act of repeating erroneously the words of another. The words erroneously repeated. Sa es he Ui, L pa3",
    "defCn": "被错误地重复的另一个人的话，这话本身是一错再错的廖误。庭园每年向公众开放一次。二楼为总统居室和客人用房。关于白宫的名称由来，众说纷纸。最流行的说法是 1814 年美英战争之际，原宫蛙被英军荧毁，再度修建时把墙壁涂成了纯白色，于是就称之为白宫。"
  },
  {
    "id": 556,
    "word": "rack",
    "pos": "n",
    "cnWord": "严刑拷打",
    "defEn": "An argumentative implement formerly much used in persuading devotees of a false faith to embrace the living truth. As a call to the unconverted! the rack never had any particular efficacy’, and is now held in light popular esteem.",
    "defCn": "这是一种用来论战的手段，古代常用于劝诫被那恶信仰器惑的人，促使他改那归正，投入活生生的真理的怀抱。不过作为一种对顽固分子的感化手段，严刑拷打从未有过任何特殊的功效，因此现代人对它也就不那么看重了。"
  },
  {
    "id": 557,
    "word": "radicalism",
    "pos": "n",
    "cnWord": "激进主义",
    "defEn": "The conservatism of to-morrow injected into the affairs of to-day.",
    "defCn": "闻进现代事务中的未来的保守主义。"
  },
  {
    "id": 558,
    "word": "radium",
    "pos": "n",
    "cnWord": "镭",
    "defEn": "A mineral that gives off heat and stimulates the organ that a scientist is a fool with.",
    "defCn": "这是一种矿物，它能散发出热量并刺激让科学家犯傻的器官。"
  },
  {
    "id": 559,
    "word": "railroad",
    "pos": "n",
    "cnWord": "铁路",
    "defEn": "The chief of many mechanical devices enabling us to get away from where we are to wher we are no better off. For this purpose the railroad is held in highest favor by the optimist, for it permits him to make the transit with great expedition.",
    "defCn": "这是种类繁多的机械装置之一，它使我们能离开现在采的地方，到一个并不能使我们过得更懂意的地方。铁路的这种效用深受乐观主义者"
  },
  {
    "id": 560,
    "word": "rank",
    "pos": "n",
    "cnWord": "头衔",
    "defEn": "Relative elevation in the scale of human worth. He held at court a rank so high That other noblemen asked why. His skill to scratch the royal back.\" Aramis Jukes",
    "defCn": "一个关系到此人是和否值钱的标准。他在法院获得了一个肥差，其他责族想知道为什么，“因为 ,”知情者说 ,“别人缺乏他那娴熟地为皇族们挠背的技巧。”阿拉密斯朱克斯"
  },
  {
    "id": 561,
    "word": "ransom",
    "pos": "n",
    "cnWord": "赎",
    "defEn": "The purchase of that which neither belongs to the seller, nor can belong to the buyer. The most unprofitable of investments. We",
    "defCn": "购买既不属于卖主也不属于买主的东西，这是最不划算的投资。"
  },
  {
    "id": 562,
    "word": "rascal",
    "pos": "n",
    "cnWord": "流氓",
    "defEn": "A fool considered under another aspect. | Bethe",
    "defCn": "从另一个方面来看，可以把他看作是傻瓜。"
  },
  {
    "id": 563,
    "word": "rascality",
    "pos": "n",
    "cnWord": "流氓活动",
    "defEn": "Stupidity militant. The activity of a clouded intellect.",
    "defCn": "这是一种强硬而愚蠢的活动。"
  },
  {
    "id": 564,
    "word": "rattlesnake",
    "pos": "n",
    "cnWord": "响尾蛇",
    "defEn": "Our prostrate! brother, Homo ventrambulans.",
    "defCn": "我们铀外前进的兄弟。我们人类则是一条竖着的“响头蛇”“?。"
  },
  {
    "id": 565,
    "word": "razor",
    "pos": "n",
    "cnWord": "剃须刀",
    "defEn": "An instrument used by the Caucasian to enhance his beauty, by the Mongolian to make a guy of himself, and by the Afro-American to affirm his worth.",
    "defCn": "这是一种工具 , 白人用它来增加风度 , 黄种人用它来显示男子气概，黑人则用它来确立自己的价值。"
  },
  {
    "id": 566,
    "word": "reality",
    "pos": "n",
    "cnWord": "现实",
    "defEn": "The dream of a mad philosopher. That which would remain in the cupel? if one should assay a phantom’, The nucleus’ of a vacuum.",
    "defCn": "现实是一个哲学疯子的梦，如果有人想要化验幻觉的成分，那么现实就是剩在卉锅里的残污。它是空虚的基础。"
  },
  {
    "id": 567,
    "word": "reason",
    "pos": "n",
    "cnWord": "理性",
    "defEn": "To weight probabilities in the scales of desire. reason, 72. Propensitatel of prejudice.",
    "defCn": "?响尾蛇靠尾部某个器官发出的声音来引诱猎物以达到捕食的目的，人则靠头部那个发声的器官吃掉猫物。推理在欲望的天平上称量各种可能性。理由"
  },
  {
    "id": 568,
    "word": "rebel",
    "pos": "n",
    "cnWord": "叛乱者",
    "defEn": "A proponent” of a new misrule who has failed to establish it.",
    "defCn": "‘这些人想要建立一种新的暴政，但却没有成功。"
  },
  {
    "id": 569,
    "word": "recollect",
    "pos": "v",
    "cnWord": "回忆",
    "defEn": ": To recall with additions something not previously known.",
    "defCn": "想要记起一些原先并不知道的东西。"
  },
  {
    "id": 570,
    "word": "reconsider",
    "pos": "v",
    "cnWord": "重新考虑",
    "defEn": "To seek a justification’ for a decision already made.",
    "defCn": "为已经作出的决定寻找一个正当的理由。"
  },
  {
    "id": 571,
    "word": "redress",
    "pos": "n",
    "cnWord": "补偿",
    "defEn": "Reparation without satisfaction. Among the Anglo-Saxon a subject conceiving himself wronged by the king was permitted, on proving his injury, to beat a brazen' image of the royal offender with a switch that was afterward applied to his own naked back. The latter rite was performed by the public hangman, and it assured moderation in the plaintiff's choice of a switch.",
    "defCn": "一种让人心有不甘的赔偿。在查格鲁 -萨克森时代，如果某个臣民自认为被国王钨枉了，那么在证实了自己的虹必之后，他有权用鞭子抽打国王的铜像，当然事后他也要被同一根鞭子抽打一顿。后一种鞭打仪式是由专业剑子手主持的，这就确保了臣民们在选择半子的时候能悠着点。"
  },
  {
    "id": 572,
    "word": "referendum",
    "pos": "n",
    "cnWord": "全民投票",
    "defEn": "A law for submission of proposed legislation to a popular vote to learn the nonsensus of public opinion.",
    "defCn": "这是法律赋予的一种神圣权利 , 它要求把审议中的法规交由公民投票表决，以知道他们的看法荒唐到了何种地步。"
  },
  {
    "id": 573,
    "word": "reflection",
    "pos": "n",
    "cnWord": "反思",
    "defEn": "An action of the mind whereby we obtain a clearer view of our relation to the things of yesterday and are able to avoid the perils that we shall not again encounter.",
    "defCn": "这是一种心灵的运动 ,我们通过它能更清醒地了解我们与历史之间的关系，以躲避我们根本不会再遇到的危险。"
  },
  {
    "id": 574,
    "word": "refusal",
    "pos": "n",
    "cnWord": "拒绝",
    "defEn": "Denial of something desired; as an elderly maiden's hand in marriage, to a rich and handsome suitor; a valuable franchise! to a rich corporation, by an alderman’; absolution’ to an impenitent* king, by a priest, and so forth. Refusals are graded in a descending scale of finality thus: the refusal absolute, the refusal condition, the refusal tentative and the refusal feminine. The last is called by some casuists the refusal assentive.",
    "defCn": ": 拒绝拒绝某种自己想要的东西 ; 诸如老处女拒绝潇洒而有钱的追求者，一家大公司拒绝参议员赐予的无法估算的特权 , 一个死不悔改的国王拒绝牧师对他罪行的赦免等等。从结果来看，按照程度递减来排列可以分为以下几类 : 绝对的拒绝、有条件的拒绝、暂时性拒绝以及女人的拒绝。有些诡辩家把最后一种拒绝方式称之为断然拒绝。"
  },
  {
    "id": 575,
    "word": "religion",
    "pos": "n",
    "cnWord": "宗教",
    "defEn": "A daughter of Hope and Fear, explaining to Ignorance the nature of the Unknowable.",
    "defCn": "这是希望和恐惧的女儿，它向无知的人讲述不可知的事情。\n\"你信仰什么，孩子？\"兰斯大主教问。\n\"请原谅，阁下，\"罗歇布里昂答道，\"我为宗教感到耻辱。\"\n\"那你为什么不成为无神论者呢？\"\n\"那怎么可能呢！我同样为无神论感到耻辱。\"\n\"那么，先生，我认为你应该成为新教徒。\""
  },
  {
    "id": 576,
    "word": "reliquary",
    "pos": "n",
    "cnWord": "圣物匣",
    "defEn": "A receptacle? for such sacred objects as pieces of the true cross, short-ribs of the saints, the ears of Balaam's ass, the lung of the cock that called Peter to repentance and so forth. Reliquaries* are commonly of metal, and provided with a lock to prevent the contents from coming out and performing miracles at unseasonable° times. A feather from the wing of the Angel of the Annunciation® once escaped during a sermon in Saint Peter's and so tickled the noses of the congregation that they woke and sneezed with great vehemence’ three times each. It is related in the \"Gesta Sanctorum\" that a sacristan' in the Canterbury cathedral surprised the head of Saint Denis in the library. Reprimanded by its stern custodian’, it explained that it was seeking a body of doctrine. This unseemly levity so raged the diocesan that the offender was publicly anathematized’, thrown into the Stour and replaced by another head of Saint Dennis, brought from Rome. tom eee SENSE MOL, GN ET SCL ARR AR A. EGET A. SPEAR, UR BRR THIS ARS iin, atu",
    "defCn": "这是一种装圣物的器皿，如钉死过耶稣的十字架的碎木屑、圣徒们的短肋骨、巴兰的驴子耳朵、叫彼得起来忏悔的那只公鸡的肺，诸如此类。圣物匣通常是用金属做的，而且上面往往挂着一把锁，为的是防止里面的存放物溜出来，在不合时宜的情况下弄出奇迹。据称为圣母报喜的天使的翅膀上的一片羽毛，在圣彼得大教堂的一次布道中苏醒过来，每个人都控制不住猛打了三个喷嚏。又据传坎特伯雷大教堂的圣物匣看管人被图书馆内的圣德尼的头吓呆了，在看管人的严词谴责下，那个砍掉的脑袋解释说自己正在寻找他那丢失的身躯，对那个头如此轻浮的行为，主教极为恼怒，将他赶出教堂，予以废弃，并用从罗马带来的另一个圣德尼的头替换。",
    "footnotes": [
      {
        "term": "sacristan",
        "pos": "n.",
        "gloss": "教堂圣器收藏室的管理人，教堂的看守人"
      }
    ]
  },
  {
    "id": 577,
    "word": "renown",
    "pos": "n",
    "cnWord": "名望",
    "defEn": "A degree of distinction between notoriety and fame -- a little more supportable than the one and a little more intolerable than the other. Sometimes it is conferred by an unfriendly and inconsiderate hand.",
    "defCn": "这是介于臭名昭著和大名易易之间的声望，它比前者更能让人忍受，比后者更难以忍受。它有时是由一个不友好、不体恤的人授予的。"
  },
  {
    "id": 578,
    "word": "repentance",
    "pos": "n",
    "cnWord": "悔恨",
    "defEn": "The faithful attendant and follower of Punishment. It is usually manifest in a degree of reformation that is not inconsistent with continuity of sin. HM, (RAE: “RABY.”",
    "defCn": "这是惩罚的贴身跟班和忠实仆人 , 它常常表现为某种形式的洗心革"
  },
  {
    "id": 579,
    "word": "replica",
    "pos": "n",
    "cnWord": "副本",
    "defEn": "A reproduction of a work of art, by the artist that made the original. It is so called to distinguish it from a \"copy,\" which is made by another artist. When the two are mae’ with equal skill the replica is the more valuable, for it is supposed to be more beautiful than it looks.",
    "defCn": "这是专门指那些由原作者本人复制的艺术品，由另一个艺术家所做的复印件被称为“厅郧”两者截然不同，即使两者制作工艺相同 ,“副本”依旧更为值钱，因为人们认为它看起来更美妙。"
  },
  {
    "id": 580,
    "word": "repose",
    "pos": "vi",
    "cnWord": "休息",
    "defEn": "To cease from troubling.",
    "defCn": "停止若是生非。"
  },
  {
    "id": 581,
    "word": "requiem",
    "pos": "n",
    "cnWord": "安魂曲",
    "defEn": "Amass for the dead which the minor poets assure us the winds sing o'er the graves of their favorites. Sometimes, by way of providing a varied entertainment, they sing a dirge’.",
    "defCn": "这是为死者举行的仪式的一部分 , 一些不太有名的诗人让我们深信一一风儿在他们最深爱的人的坟头啼喝。有时，为了给这个仪式增加一些不同寻常的乐趣，诗人们会亲自上阵唱上一曲挽歌。"
  },
  {
    "id": 582,
    "word": "resident",
    "pos": "adj",
    "cnWord": "居住的",
    "defEn": "Unable to leave.",
    "defCn": "不能离开的"
  },
  {
    "id": 583,
    "word": "resign",
    "pos": "vt",
    "cnWord": "挽歌哀悼歌",
    "defEn": "To renounce an honor for an advantage. To renounce an advantage for a greater advantage.",
    "defCn": "为某种好处而放弃荣誉，或为了更大的好处放弃实利。"
  },
  {
    "id": 584,
    "word": "resolute",
    "pos": "adj",
    "cnWord": "坚决的",
    "defEn": "Obstinate in a course that we approve.",
    "defCn": "固执地朝我们赞同的方向前进。"
  },
  {
    "id": 585,
    "word": "respectability",
    "pos": "n",
    "cnWord": "体面",
    "defEn": "The offspring of a liaison’ between a bald head and a bank account.",
    "defCn": "当秃头和银行账户亲密地结合在一起，就产生了体面。"
  },
  {
    "id": 586,
    "word": "respirator",
    "pos": "n",
    "cnWord": "口罩",
    "defEn": "An apparatus fitted over the nose and mouth of an inhabitant of London, whereby to filter the visible universe in its passage to the lungs. ne",
    "defCn": "这是伦敦居民覆盖在鼻子和嘴巴上的一种东西，它把所能看见的一切都过滤一遍，然后才允许它们进入肺部。"
  },
  {
    "id": 587,
    "word": "respite",
    "pos": "n",
    "cnWord": "缓刑",
    "defEn": "A suspension of hostilities against a sentenced assassin, to enable the Executive to determine whether the murder may not have been done by the prosecuting attorney’. Any break in the continuity of a disagreeable expectation.",
    "defCn": "暂时不处决已被判罪的暗杀者，以便长官确定谋杀是不是由检察官策划的。让人难熬的期待突然中断，这也是一种缓刑。"
  },
  {
    "id": 588,
    "word": "resplendent",
    "pos": "adj",
    "cnWord": "辉煌的",
    "defEn": "Like a simple American citizen beduking himself in his lodge, or affirming his consequence in the Scheme of Things as an elemental unit of a parade. The Knights of Dominion were so resplendent’ in their velvet-and-gold ， that their masters would hardly have known them.",
    "defCn": "就好比一个头脑简单的美国公民躺在他寄居的窝棚里，设想并断定，自己在广场阅兵方阵里作为其中一员的重要性。披金戴银的骑士侍从显得如此辉煌，摘得他们的主人差点没认出《阶层档案》"
  },
  {
    "id": 589,
    "word": "responsibility",
    "pos": "n",
    "cnWord": "责任",
    "defEn": "A detachable? burden easily shifted to the shoulders of God, Fate, Fortune, Luck or one's neighbor. In the days of astrology’ it was customary to unload it upon a star.",
    "defCn": "这是一个很容易转嫁到上帝、命运、财富、幸运或某个邻居肩上的一种负担。在占星术流行的年代，人们往往把它归结到某一星座。"
  },
  {
    "id": 590,
    "word": "restitution",
    "pos": "n",
    "cnWord": "偿还",
    "defEn": "The founding or endowing of universities and public libraries by gift or bequest’.",
    "defCn": "用赠送或遗赠的方式出钱修建大学和公共图书馆。"
  },
  {
    "id": 591,
    "word": "restitutor",
    "pos": "n",
    "cnWord": "偿还者",
    "defEn": "Benefactor; philanthropist.",
    "defCn": "捐款人，慈善家。",
    "footnotes": [
      {
        "term": "benefactor",
        "pos": "n.",
        "gloss": "捐助者，赠送者，赞助人"
      }
    ]
  },
  {
    "id": 592,
    "word": "retaliation",
    "pos": "n",
    "cnWord": "报复",
    "defEn": "The natural rock upon which is reared the Temple of Law.",
    "defCn": "用来建造法律神殿的天然岩石。"
  },
  {
    "id": 593,
    "word": "reveille",
    "pos": "n",
    "cnWord": "起床号",
    "defEn": "A signal to sleeping soldiers to dream of battlefields no more, but get up and have their blue noses counted.",
    "defCn": "这是向醋睡中的战士们发出的一种信号 ,让他们从梦中的战场凯旋归来。然后带着青肿的鼻子被一一点名。"
  },
  {
    "id": 594,
    "word": "revelation",
    "pos": "n",
    "cnWord": "局示录",
    "defEn": "A famous book in which St. John the Divine concealed all that he knew. The revealing is done by the commentators’, who know nothing.",
    "defCn": "这是由圣徒约翰写的一本名作 , 他在这本书里掩盖了他所知道的一切。启示是由一穿不通的注释者完成的。"
  },
  {
    "id": 595,
    "word": "reverence",
    "pos": "n",
    "cnWord": "崇敬",
    "defEn": "The spiritual attitude of a man to a god and a dog to a man.",
    "defCn": "这是人对神或狗对人的态度。"
  },
  {
    "id": 596,
    "word": "rhadomancer",
    "pos": "n",
    "cnWord": "棍卜者",
    "defEn": "One who uses a divining-rod in prospecting” for precious metals in the pocket of a fool. HbA",
    "defCn": "这家伙看似用一根魔棍在地上探测贵金属 , 但实际上却用这根棍子在傻瓜的口袋里探测金子。"
  },
  {
    "id": 597,
    "word": "rice-water",
    "pos": "n",
    "cnWord": "眼泪",
    "defEn": "A mystic beverage secretly used by our most popular novelists and poets to regulate the imagination and narcotize! the conscience. It is said to be rich in both obtundite” and lethargine® , and is brewed’ in a midnight fog by a fat witch of the Dismal Swamp. AR.",
    "defCn": "这是一种神秘的饮料 , 我们这个时代最受欢迎的小说家和诗人常常用它秘密地搅和人们的想像，麻醇他们的良心。据称它有止痛和嗜睡的"
  },
  {
    "id": 598,
    "word": "riches",
    "pos": "n",
    "cnWord": "财富",
    "defEn": "A gift from Heaven signifying, John Rockefeller The reward of toil and virtue. J.P. Morgan The savings of many in the hands of one. Eugene Debs To these excellent definitions the inspired lexicographer feels that he can add nothing of value. ? 即 obtundent vn. CE) 22A07i), ib7as) 3 即 lethargy on. EFRE, tik",
    "defCn": "从天国赐予的礼物，它表示 ;“这是我的儿子，我非常喜欢它 .”约翰 .洛克菲勒J.P. 摩根很多人积插的钱集中在一个人手中。诸如此类的定义使本词典编纂家大受启发 , 但却没有提供任何有价值的补充。"
  },
  {
    "id": 599,
    "word": "riot",
    "pos": "n",
    "cnWord": "暴乱",
    "defEn": "A popular entertainment given to the military by innocent bystanders.",
    "defCn": "，由清白无带的旁观者提供给军人们的一种颇受欢迎的娱乐活动。"
  },
  {
    "id": 600,
    "word": "robber",
    "pos": "n",
    "cnWord": "强盗",
    "defEn": "A candid man of affairs. lodged at a wayside inn. The surroundings were suggestive, and after supper they agreed to tell robber stories in turn. \"Once there was a Farmer-General of the Revenues.“ Saying nothing more, he was encouraged to continue.",
    "defCn": "一个行事坦率的人。据说，伏尔泰和几个伙伴一起出游。一天晚上，他们住在路边的一个小客栈里，客栈的情形让他们和触景生情。晚饭后，大家决定轮流讲些强盗的故事助兴。轮到伏尔泰的时候，他说 :“从前有一个坐收渔利的地主 ,”然后就不说了。伙伴们催促他往下说，他答道 ,“这就是故事的"
  },
  {
    "id": 601,
    "word": "romance",
    "pos": "n",
    "cnWord": "传奇",
    "defEn": "Fiction that owes no allegiance to the God of Things as They Are. In the novel the writer's thought is tethered’ to probability, as a domestic horse to the hitching-post, but in romance it ranges at will over the entire region of the imagination -- free, lawless, immune to bit and rein. Your novelist is a poor creature, as Carlyle might say -- a mere reporter. He may invent his characters and plot, but he must not imagine anything taking place that might not occur, albeit his entire narrative is candidly a lic. Why he imposes this hard condition on himself, and \"drags at each remove a lengthening chain\" of his own forging he can explain in ten thick volumes without illuminating by so much as a candle's ray the black profound of his own ignorance of the matter. There are great novels, for great writers have \"laid waste their powers\" to write them, but it remains true that far and away the most fascinating fiction that we have is \"The Thousand and One Nights.\" ALLL PERE OHH Me RHETT, (URE I big Fee RE PIAL NAT ARE, BI le i Fa ALMA PEAR ES ETA Ae “TEA TY ATT a”",
    "defCn": "这是一种不用按照上帝创造万物的本来面目而虚构的故事。在小说中，作家的思路被所谓的真实性所束缚，就像一匹被拴在马桩子上的马一样。而在传奇作品中，作家的思路可以穷尽想像的一切空间——自由自在，无拘无束，不受任何限制。小说家是一种很可怜的东西，正如卡莱尔所说，只不过是一个传声筒而已。他也许能创造出一些人物和情节，但决不会异想天开去写某些所谓现实中不可能发声的事件，即使他的作品整个就是一个实实在在的谎言。置于他为何要折腾自己，\"每一步拖着\"自己锻造的\"越来越长的铁链\"，他可以写上十大本著作加上注释；遗憾的是这些巨著散发的智慧还抵不上一根蜡烛的光亮，当然更不用妄想去照亮那黑暗的深渊了；他为何要自讨苦吃，连他自己都觉得莫名其妙。世界上确实有一些卓越的小说，因为这些不同凡响的作家在写它们的时候\"注入了他们的精髓\"。世界上最富魅力的传奇故事当属《一千零一夜》。"
  },
  {
    "id": 602,
    "word": "rope",
    "pos": "n",
    "cnWord": "绳于",
    "defEn": "An obsolescent appliance for reminding assassins that they too are mortal. It is put about the neck and remains in place one's whole life long. It has been largely superseded by a more complex electrical device worn upon ， another part of the person; and this is rapidly giving place to an apparatus known as the preachment’.",
    "defCn": "这是一种正在被废弃不用的工具 , 曾经被用来警告刺客一一他们也，是会死的。它通常会套在刺客的脖子上，而且一直会套在那里，延续整整一个时代。现代绞索已大批地被一种复杂得多的电子装置替代了 ,这套用具是套在人体的其他部位。不过，这个新玩意儿很快就会被淘汰，因为一种叫“说教”的机器正在兴起。1《一千零一夜》是古代阿拉伯民间故事集，在西方被称为《阿拉伯之夜》，我国却有一个独特的称呼 :《天方夜谭》。它是世界上最具生命力、最负盛名、拥有最多读者和影响最大的作品之一 : 同时，它以民间文学的朴素身份却能跻身于世界古典名著之列，也堪称是世界文学史上的一大奇迹。《一千零一夜》的故事，很早就在阿拉伯地区的民间口头流传，约在公元八九世纪之交出现了早期的手抄本，到了 12世纪，埃及人首先使用了《一千零一夜》的书名，但直到 15 世纪末、16 世纪初才基本定型。《一千零一夜》的故事一经产生，便广为流传，在十字军东征时期就传到了欧洲。《一千零一夜》对后世文学也产生了深远的影响。"
  },
  {
    "id": 603,
    "word": "rostrum",
    "pos": "n",
    "cnWord": "演讲台",
    "defEn": "In Latin, the beak of a bird or the prow of a ship. In America, a place from which a candidate for office energetically expounds the wisdom, virtue and power of the rabble!.",
    "defCn": "成了精力充沛的候选人推销其智慧、美德和煽动力的营业柜台。",
    "footnotes": [
      {
        "term": "rabble",
        "pos": "n.",
        "gloss": "乌合之众，下层社会，拨火棍"
      }
    ]
  },
  {
    "id": 604,
    "word": "roundhead",
    "pos": "n",
    "cnWord": "肥头党",
    "defEn": "A member of the Parliamentarian party in the English civil war -- so called from his habit of wearing his hair short, whereas his enemy, the Cavalier, wore his long. There were other points of difference between them, but the fashion in hair was the fundamental cause of quarrel. The Cavaliers were royalists because the king, an indolent” fellow, found it more convenient to let his hair grow than to wash 2 Beam = his neck. This the Roundheads, who were eres Saks mostly barbers and soap-boilers, deemed an = Fa ss injury to trade, and the royal neck was Pat : therefore the object of their particular Ae : indignation. Descendants of the belligerents® : : Beas now wear their hair all alike, but the fires of ~~ 人 animosity’ enkindled5 in that ancient strife Ee ae ez smoulder’ to this day beneath the snows of British civility.",
    "defCn": "这是英国内乱时期的议会派分子一一他之所以得此雅号是因为他喜欢留短发，而他的对手骑士派则正好相反，喜欢留长发。这两帮人还有其他的不同之处，不过头发的长短是引起他们誓死拼杀的根本原因。骑士派是保皇党党员 , 因为国王殿下一一一个偷懒的伙计一一发现听任头发自由生长比洗刷脖子更为省劲。肥头党一一他们大部分是理发师和肥皂制造商一一觉得这种对长法的嗜好会毁掉自己的买卖，因此大为光火地把予头指向国王的脖子。到了今天，肥头党人和骑士党人这两个多家的后代的发型看不出有什么差别了 ,可在那不易让人察觉的英格兰式的礼仪的薄薄雪层之下，昔日仇恨的火焰仍在熊熊燃烧。"
  },
  {
    "id": 605,
    "word": "ruin",
    "pos": "v",
    "cnWord": "摧残",
    "defEn": "To destroy. Specifically, to destroy a maid's belief in the virtue of maids.",
    "defCn": "! 摧残去破坏，尤其是指对处女页操信仰的破坏。"
  },
  {
    "id": 606,
    "word": "rum",
    "pos": "n",
    "cnWord": "朗姆酒",
    "defEn": "Generically’, fiery liquors that produce madness in total abstainers’.",
    "defCn": "总的来说，这是指那些让戒酒者想得发狂的各种烈性酒。"
  },
  {
    "id": 607,
    "word": "rumor",
    "pos": "n",
    "cnWord": "谣言",
    "defEn": "A favorite weapon of the assassins of character. Sharp, irresistible by mail or shield, By guard unparried as by flight unstayed, O serviceable Rumor, let me wield Against my enemy no other blade. His be the terror of a foe unseen, His the inutile hand upon the hilt, And mine the deadly tongue, long, slender, keen, Hinting a rumor of some ancient guilt. So shall I slay the wretch without a blow, Spare me to celebrate his overthrow, And nurse my valor for another foe. Joel Buxter ERMT A, MARTI, Ae RAT AS FAME SI HE A AE,",
    "defCn": "这是诋毁他人名誉的最好武器。\n它犀利无比，任何盾牌都无法抵挡，\n它无比歹毒，你无处可逃，\n啊，了不起的谣言，我别无他求\n只求你把我的敌人掌控在你的剑锋之下，\n面对无形的敌人他惊恐万分，\n他战抖的手抓住剑柄毫无用处。\n我致命的舌头无比温柔却锐不可当，\n流言蜚语暗藏久经考验的恶毒，\n我不费一枪一炮就叫可怜的家伙完蛋。\n请原谅我为他的完蛋而手舞足蹈，\n请让我鼓起勇气再对另一个敌人发起攻击。"
  },
  {
    "id": 608,
    "word": "russian",
    "pos": "n",
    "cnWord": "俄罗斯人",
    "defEn": "A person with a Caucasian body and a Mongolian soul. Sea a ee Se LI",
    "defCn": "一种具有高加索人的身体和蒙古人灵瑰的人。"
  },
  {
    "id": 609,
    "word": "sabbath",
    "pos": "n",
    "cnWord": "安息日",
    "defEn": "A weekly festival having its origin in the fact that God made the world in six days and was arrested on the seventh. Among the Jews observance of the day was enforced by a Commandment of which this is the Christian version: \"Remember the seventh day to make thy neighbor keep it wholly.\" To the Creator it seemed fit and expedient that the Sabbath should be the last day of the week, but the Early Fathers of the Church held other views. So great is the sanctity of the day that even where the Lord holds a doubtful and precarious jurisdiction over those who go down to (and down into) the sea it is reverently recognized, as is manifest in the following deep-water version of the Fourth Commandment: Six days shalt thou labor and do all thou art able, And on the seventh holystone' the deck and scrape the cable. Decks are no longer holystoned, but the cable still supplies the captain with opportunity to attest a pious respect for the divine ordinance.",
    "defCn": "这是每周一次的节日。上帝在六天之内创造了世界，然后在第七天被捕了，安息日就是为了纪念这件事 '。在犹太人那里，恪守安息日的规定是“摩西十诚”中的一条，这条戒律按照基督的说法就是 :“记住安息日，要迫使你的邻居完全恪守安息日之式。”对上帝来说，把安息日定为一个星期的最后一天似乎更恰当一些 , 但是基督教的早期教父们却认为应该是一个星期的第一天。这是一个极其庄严的日子，就连下海劳作的地方一一上帝是否真正控制这些人的命运还说不定一一安息日都是受到人们的和敬晴的，有大海般奥妙无穷的“摩西第四戒律”为证 ;在六天之内你可以为你做的一切干个不停。在第七天则应用沙石打磨甲板并把错链刷控干净。现在的甲板不再用沙石打磨了，但错链仍需擦洗，这使船长有机会表达自己对那庄严仪式的虔诚之心。"
  },
  {
    "id": 610,
    "word": "sacred",
    "pos": "adj",
    "cnWord": "神圣的",
    "defEn": "Dedicated to some religious purpose; having a divine character; inspiring solemn thoughts or emotions; as, the Dalai Lama of Thibet; the Moogum of M'bwango; the temple of Apes in Ceylon’; the Cow in India; the Crocodile, the Cat and the Onion of ancient Egypt; the Mufti of Moosh; the hair of the dog that bit Noah, etc. Colombo)",
    "defCn": ": 据《圣经》记载，上帝在六天内创造了世界，在第七天就休息了。“休息”一词在英语中为rest，而“逮捕”一词为arrest，两者只一音之差。为某种宗教目的而供奉的 ; 具有某种神的品行者 ; 能激发庄严的思想和情绪，如西藏的达赖喇嘛、斯里兰卡的猩猩寺、印度的神牛、古埃"
  },
  {
    "id": 611,
    "word": "saint",
    "pos": "n",
    "cnWord": "圣人",
    "defEn": "A dead sinner revised and edited.",
    "defCn": "这是一个经常出错的家伙 , 不过他已经死去并县他的身世已经过校正和编辑加工。"
  },
  {
    "id": 612,
    "word": "sarcophagus",
    "pos": "n",
    "cnWord": "天使长大天使",
    "defEn": "Among the Greeks a coffin which being made of a certain kind of carnivorous’ stone, had the peculiar property of devouring the body placed in it. The sarcophagus” known to modern obsequiographers is commonly a product of the carpenter's art.",
    "defCn": "这是古希腊人的一种棺材，里面放了一种特制的石块，它具有一种吞食放在里面的尸体的特性。现代送大者所知晓的石棺，一般来说是木匠的工艺品。",
    "footnotes": [
      {
        "term": "carnivorous",
        "pos": "adj.",
        "gloss": "食肉类的"
      }
    ]
  },
  {
    "id": 613,
    "word": "satan",
    "pos": "n",
    "cnWord": "撒旦",
    "defEn": "One of the Creator's lamentable mistakes, repented in sashcloth and axes. Being instated as an archangel®, Satan made himself multifariously* objectionable and was finally expelled from Heaven. Halfway in his descent he paused, bent his head in thought a moment and at last went back. \"There is one favor that I should like to ask,\" said he. eternity with hatred of his soul -- you ask for the right to make his laws?\" himself.\" It was so ordered. 7 25 HRA, Ania",
    "defCn": "这是上帝所犯的可悲的错误之一。魔鬼撒旦原先是一名天使，被任命为天使长之后，性情变得荒唐起来，想法设法惹是生非，结果被上帝赶出了天堂。在从天上贬到人间的途中，他眉头一皱计上心来，于是又返回天堂，对上帝说，\"我有一个提议。\"\n\"说出来。\"\n\"我知道人很快就要被创造出来了。但他需要法律。\"\n\"啊，卑贱的家伙！你是他命中注定的敌人，从创造天地之时，就对他的灵魂充满了仇恨，——你竟然想为他获得制定法律的权利。\"\n\"请原谅，我必须向你要求的是，请允许人类自己设立法律。\"\n最后，事情就这样搞定了。"
  },
  {
    "id": 614,
    "word": "satiety",
    "pos": "n",
    "cnWord": "放血",
    "defEn": "The feeling that one has for the plate after he has eaten its contents, madam.",
    "defCn": "夫人，这是一个人吃完盘中的食物之后对盘子的感情。"
  },
  {
    "id": 615,
    "word": "scarification",
    "pos": "n",
    "cnWord": "放血",
    "defEn": "A form of penance practised by the mediaeval! pious. The rite was performed, sometimes with a knife, sometimes with a hot iron, but always, says Arsenius, acceptably if the penitent spared himself no pain nor harmless disfigurement’. Scarification®, with other crude penances, has now been superseded‘ by benefaction. The founding of a library or endowment of a university is said to yield to the penitent a sharper and more lasting pain than is conferred by the knife or iron, and is therefore a surer means of grace. There are, however, two grave objections to it as a penitential method: the good that it does and the taint of justice. A professional writer whose views are antagonistic’ to one's own.",
    "defCn": "这是中世纪虔信宗教者的一种苦刑。这种苦修仪式有时是用刀子进行的，有时则用烧红的烙铁完成。按照阿尔塞尼的说法，假使苦刑者不惧剧痛，不惜让外瑶受些无关紧要的毁损，这种放血自残仪式总是令人欣昧的。到了今天，和其他的一些原始的苦行一样，放血献祭这种修行法已被捐款等善举取代。据传捐资修建图书馆或大学给悔改者带来的疼痛，比刀子和红烙铁造成的痛苦强烈得多，而且也长久得多，因此捐款是一种更为保险的修行方式。不过 , 捐款这种苦刑也有两件重大的缺憾 :它能带来利益，还会弄脏正义。这是一个职业作家，他的各种观点是相互冲突的。"
  },
  {
    "id": 616,
    "word": "scriptures",
    "pos": "n",
    "cnWord": "圣经",
    "defEn": "The sacred books of our holy religion, as distinguished from the false and profane” writings on which all other faiths are based.",
    "defCn": "1 这是我们神圣宗教的圣典，它比其他那教所依托的那些廖误、污神的著作当然要神圣。"
  },
  {
    "id": 617,
    "word": "seine",
    "pos": "n",
    "cnWord": "围网",
    "defEn": "A kind of net for effecting an involuntary change of environment. For fish it is made strong and coarse, but women are more easily taken with a singularly delicate fabric weighted with small, cut stones. The devil casting a seine of lace, (With precious stones ‘twas weighted) drew it into the landing place and its contents calculated. All souls of women were in that sack -- A draft miraculous, precious! But ere he could throw it across his back they'd all escaped through the meshes. Baruch de Loppis",
    "defCn": "这是一种使猎物四周的环境不知不觉发生变化而完成包抄的捕猎网。用来捕鱼的网，做得结实而简陋，而用来捕捉女人的网比拖网捕鱼要容易得多，因为这类网做工极其精细，上面缀有精雕细淄的的、发光的小石子。魔鬼撤下一片镶有花边的网( 网上组着奇珍异宝 )，在海边码头上收网，他的收获真是巨大。所有女人的魂儿被他一网打尽，哎川，这一网真是了不起，但他还没来得及连网带猎物甩上背，她们都从网眼里逃个精光。已重克“' 德 . 洛皮斯"
  },
  {
    "id": 618,
    "word": "self-esteem",
    "pos": "n",
    "cnWord": "自尊",
    "defEn": "An erroneous appraisement'.",
    "defCn": "一个错误的评价。"
  },
  {
    "id": 619,
    "word": "self-evident",
    "pos": "adj",
    "cnWord": "不言自明的",
    "defEn": "Evident to one's self and to nobody else.",
    "defCn": "自己明白的，别人则不清楚。"
  },
  {
    "id": 620,
    "word": "selfish",
    "pos": "adj",
    "cnWord": "自私的",
    "defEn": "Devoid of consideration for the selfishness of others.",
    "defCn": "没想到别人也是具顾自己。"
  },
  {
    "id": 621,
    "word": "senate",
    "pos": "n",
    "cnWord": "元老院",
    "defEn": "A body of elderly gentlemen charged with high duties and misdemeanors’. TREE.",
    "defCn": "这是由一批德高望重的老人组成的团体，他们担负的责任重大，罪"
  },
  {
    "id": 622,
    "word": "serial",
    "pos": "n",
    "cnWord": "连载",
    "defEn": "A literary work, usually a story that is not true, creeping through several issues of a newspaper or magazine. Frequently appended” to each installment is a \"synopsis? of preceding chapters\" for those who have not read them, but a direr need is a synposis of succeeding chapters for those better. The late James 严 Bowman was writing a serial tale for a weekly paper wrote, not jointly but alternately, Bowman supplying the installment for one week, his friend for the next, and so on, world without end, they hoped. Unfortunately they quarreled, and one Monday morning when Bowman read the paper to prepare himself for his task, he found his work cut out for him in a way to surprise and pain him. His collaborator had embarked every character of the narrative on a ship and sunk them all in the deepest part of the Atlantic.",
    "defCn": "这是一种语言艺术作品，一般是一个虚构故事，它分期刊登出来，从杂志或报纸的这一期转到另一期。为了方便那些没读过前几章的读者，每一个连载部分的开头都附有一个\"前面几章的梗概\"，此外还附有一个\"后面章节的提要\"，因为很多人根本就没打算读后面的东西。连载作品的整体概括说不定比作品本身更生动有趣一些。\n已去世的詹姆斯·鲍曼曾和一位我们已不知姓名的天才合作，为一份周刊写一部连载小说。他们俩不是同时写，而是交替写，鲍曼写这周的故事，他的伙伴写下一周，这样不停地轮流写下去，他们希望世界不会有末日。遗憾的是他们后来闹翻了。某个星期一的早上，鲍曼先生读着那份周刊上连载的故事以便能接着写下去，他惊奇而痛心地发现，他的续篇写不下去了，因为他的同伙一怒之下把故事里所有的人物全部调配到一条船上，最后，所有的人和船一同沉入了大西洋底。"
  },
  {
    "id": 623,
    "word": "sheriff",
    "pos": "n",
    "cnWord": "警长",
    "defEn": "In America the chief executive office of a country, whose most characteristic duties, in some of the Western and Southern States, are the catching and hanging of rogues.",
    "defCn": "这是美国县城里的一个司法头目，在西部和南方各州，他最了不起的任务是捕捉并吊死恶棍。"
  },
  {
    "id": 624,
    "word": "siren",
    "pos": "n",
    "cnWord": "赛壬",
    "defEn": "One of several musical prodigies famous for a vain attempt to dissuade Odysseus from a life on the ocean wave. Figuratively, any lady of splendid promise, dissembled purpose and disappointing performance.",
    "defCn": "在古希腊世界中，她是屈指可数的女歌手，因歌声没挡住大英雄奥德修斯 ' 继续海上旅游而搞得全世界都知道了。用于比喻的话，可指随便哪一个满心指望却装作若无其事、天真无敢，最后真的一无所得的女"
  },
  {
    "id": 625,
    "word": "sophistry",
    "pos": "n",
    "cnWord": "诡辩",
    "defEn": "The controversial method of an opponent, distinguished from one's own by superior insincerity and fooling. This method is that of the later Sophists, a Grecian sect of philosophers who began by teaching wisdom, prudence, science, art and, in brief, whatever men ought to know, but lost themselves in a maze of quibbles’ and a fog of words.",
    "defCn": "这是我们对手的论战手段，同我们的相比，不仅虚伪，而且愚蠢。这也是希腊次辩派哲学家的方式，这些人要教给人机灵、小心、学问和技巧一一总而言之，就是人所要了解的一切，可他们自己却在诡辩和双关语的迷雾中迷失了方向。"
  },
  {
    "id": 626,
    "word": "soul",
    "pos": "n",
    "cnWord": "灵魂",
    "defEn": "A spiritual entity concerning which there hath been brave disputation. Plato held that those souls which in a previous state of existence had obtained the clearest glimpses of eternal truth entered into the bodies of persons who became philosophers. Plato himself was a philosopher. The souls that had least contemplated divine truth animated the bodies of usurpers’ and despots”. Dionysius I, who had threatened to decapitate* the broad-browed philosopher, was a usurper and a despot. Plato, doubtless, was not the first to construct a system of philosophy that could be quoted against his enemies; certainly he was not the last.",
    "defCn": "一种精神的存在，自古以来，关于它的激烈争吵数不胜数。柏拉图认为，那些在前世清晰地见过永恒真理的灵魂，一旦钻进某些人的身体，这些人就会成为哲学家。柏拉图自己就是这样的人。那些对伟大真理想得最少的灵魂则进入了另一些人体内，他们会成为篡权者和暴君。迪奥尼修斯一世就是篡位者和暴君，他曾威吓要砍掉眉毛长得特别茂盛的柏拉图的头。不用说柏拉图不会是第一位提倡用哲学对付自己敌人的人，自然也不会是最后一个。"
  },
  {
    "id": 627,
    "word": "suffrage",
    "pos": "n",
    "cnWord": "选举",
    "defEn": "Expression of opinion by means of a ballot. The right of suffrage (which is held to be both a privilege and a duty) means, as commonly interpreted, the right to vote for the man of another man's choice, and is highly prized. Refusal to do so has the bad name of \"incivism®.\" The incivilian, however, cannot be properly arraigned’ for his crime, for there is no legitimate accuser. If the accuser is himself guilty he has no standing in the court of opinion; if not, he profits by the crime, for A's abstention from voting gives greater weight to the vote of B. By female suffrage is meant the right of a woman to vote as some man tells her to. It is based on female responsibility, which is somewhat limited. The woman most eager to jump out of her petticoat” to assert her rights is first to jump back into it when threatened with a switching for misusing them.",
    "defCn": "”柏拉图(前 427 一前 347)，是古希腊最著名的唯心论哲学家和思想家，是西方哲学史上第一个使唯心论哲学体系化的人。他的著作和思想对后世有着十分重要的影响。柏拉图留下了许多著作，多数以对话体写成，常被后人引用的有 :《辩诉篇》、《理想国信《智者篇》《法律篇》等。《理想国》是其中的代表作。5 叙拉古(Syracus)的暴君《卒于公元前 368 年 )选举用投票的方式发表看法。一般而言，选举就是傻里僵气地对别人中意的人投上你拥护的一票，心里还美滋滋地以为在享用选举权的光荣。如果拒绝投票，那么就会招来“不履行公民义务”或“没有爱国心”的| 斥责，但你不会被控有罪，因为找不到合法的起诉者。就算真有那么一个，如果他自己有罪，那么他就无权在与论的法庭发言，也根本无容身之地，如果他没罪，那他就能从你这种行为中捞得好处，因为你放弃投票，就意味着他投票的分量加重。所谓妇女选举权，指的是女人们按照某些男人的指令投票的权利一一当然，它相当有限。那些最渴望跳出她们肥大的裙子去行使投票权的女人 , 一旦投票有误而有受到鞠打的危险时，又是她们最先缩回她们的裙子中。"
  },
  {
    "id": 628,
    "word": "sycophant",
    "pos": "n",
    "cnWord": "编辑",
    "defEn": "One who approaches Greatness on his belly so that he may not be commanded to turn and be kicked. He is sometimes an editor. As the lean leech’, its victim found, is pleased to fix itself upon a part diseased till, its black hide distended with bad blood, it drops to die of surfeit! in the mud, so the base sycophant? with joy descries? his neighbor's weak spot and his mouth applies, gorges and prospers like the leech, although, unlike that reptile’, he will not let go. Bea",
    "defCn": "这是一个爱趋近大人物的人。他用肚子贴地滑行，这样大人物就不会要他转过身去，也不会在他屁股上踢上一脚了。这种人偶尔会是一名编辑。精疫的蚂三到处寻找寄托，叮上人的腿肚子就不再松口，直到它深色的皮襄被血胀玻，它因过量吸食而撑死，掉进泥土。卑好的询媚者也是这样孜致以求，找到邻居的缺口就张开血盆大口，狂饮大喝，变得和蚂病一样胖乎乎，和水星不同的是，他死也不会松口。"
  },
  {
    "id": 629,
    "word": "syllogism",
    "pos": "n",
    "cnWord": "三段论",
    "defEn": "A logical formula’ consisting of a major and a minor assumption and an inconsequent’. (See LOGIC.)",
    "defCn": "这是一种逻辑公式，由一个较大一点的“如果”一个较小一点的“如果”和最后不一致的结论构成。( 参见“逻辑”一词 )"
  },
  {
    "id": 630,
    "word": "symbol",
    "pos": "n",
    "cnWord": "符号",
    "defEn": "Something that is supposed to typify or stand for something else. Many symbols are mere \"survivals\" -- things which having no longer any utility continue to exist because we have inherited the tendency to make them; as funereal urns! carved on memorial monuments. They were once real ums holding the ashes of the dead. We cannot stop making them, but we can give them a name that conceals our helplessness. Ce Ways wag! gis &s ARE ere 6 a",
    "defCn": "这是用以代表另一种事物的东西。许多符号不过是一些残迹而已一它们不再有任何用途，它们之所以继续在世上存在，只是由于我们从十人那些遗传了制作它们的嗜好，比如说，放在纪念碑上的骨灰坛就属于这类残迹。从前的骨灰坛真是用来盛放死者的骨灰，我们没法不去制造骨灰坛，不过我们可以给它另外起个名字，来掩盖我们这种无可泰何的"
  },
  {
    "id": 631,
    "word": "table d'hote",
    "pos": "n",
    "cnWord": "盒饭",
    "defEn": "A caterer !'s thrifty concession to the universal passion for irresponsibility. tail, 7. The part of an animal's spine that has transcended its natural limitations to set up an independent existence in a world of its own. Excepting in its foetal? state, Man is without a tail, a privation of which he attests an hereditary’ and uneasy consciousness by the coat-skirt of the male and the train of the female, and by a marked tendency to ornament that part of his attire! where the tail should be, and indubitably” once was. This tendency is most observable in the female of the species, in whom the ancestral sense is strong and persistent. The tailed men described by Lord Monboddo are now generally regarded as a product of an imagination unusually susceptible to influences generated in the golden age of our pithecan’ past.",
    "defCn": "饭馆作了心痛而将当的让步之后做的一种饭菜 , 它极受广大食客的欢迎，但味道不怎么样，就餐地的卫生状况也不能让人满意。尾巴动物养椎的一部分，它已突破了天性的束缚，形成了一个自己的独立小世界。除了在娘肚里，人是没有尾巴的，这便让人产生了一种世代相传的尴众，男人的燕尾服和女人的拖地长裙都流露了这一点，为了弥补这一缺陷 , 他们喜欢在应该长尾巴而且从前也的确长过一条尾巴的部位点缀饰品。这种准好在女性身上表现得最明显，因为女人对祖宗是最有情意的，而且这种情意最为持久。蒙博托甸士所描述的长尾巴的男人现在一般认为看作是想像中的事物 , 他们太容易受到黄金时代猿人们的| 影响。",
    "footnotes": [
      {
        "term": "indubitably",
        "pos": "adv.",
        "gloss": "无疑地，确实地"
      }
    ]
  },
  {
    "id": 632,
    "word": "tariff",
    "pos": "n",
    "cnWord": "关税",
    "defEn": "A scale of taxes on imports, designed to protect the domestic producer against the greed of his consumer.",
    "defCn": "对进口商品征收的税率，其目的是为了保护本国的制造商的利润，抑制消费者的贪欲。"
  },
  {
    "id": 633,
    "word": "teetotaler",
    "pos": "n",
    "cnWord": "绝对戒酒者",
    "defEn": "One who abstains from strong drink, sometimes totally, sometimes tolerably totally.",
    "defCn": "绝对不喝烈酒的人，有时滴酒不占，有时了喝得还不少。"
  },
  {
    "id": 634,
    "word": "telephone",
    "pos": "n",
    "cnWord": "电话",
    "defEn": "An invention of the devil which abrogates some of the advantages of making a disagreeable person keep his distance.",
    "defCn": "这是魔鬼的一种发明。由于它的问世，想要把某些讨厌的家伙拒之于千里之外是不可能的了。"
  },
  {
    "id": 635,
    "word": "telescope",
    "pos": "n",
    "cnWord": "望远镜",
    "defEn": "A device having a relation to the eye similar to that of the telephone to the ear, enabling distant objects to plague us with a multitude of needless details. Luckily it is unprovided with a bell summoning us to the sacrifice.",
    "defCn": "这种装置同眼睛之间的关系，与电话和耳采的关系类似。它能使远处的物体用一大堆豪无必要的琐碎细节折磨我们。不过幸运的是，它和电话不一样，没有一个召唤我们去牺牲。"
  },
  {
    "id": 636,
    "word": "tomb",
    "pos": "n",
    "cnWord": "圣洁",
    "defEn": "The House of Indifference. Tombs are now by common consent invested with a certain sanctity’, but when they have been long tenanted” it is considered no sin to break them open and rifle! them, the famous Egyptologist, Dr. Huggyns, explaining that a tomb may be innocently exhaled’. This reasonable view is now generally accepted by archaeologists, whereby the noble science of Curiosity has been greatly dignified.",
    "defCn": "tenant vt. 租借，租用(房子、土地 )坟墓无趣之屋。现代的人一般都愿意为坟墓罩上一道神秘的光环，但人们又觉得，一旦死者在墓中丈息很多年了，括开坟墓掠夺死者就不再是什么罪恶了。闻名的埃及学专家哈金斯博士解释说，一旦墓中人完成气化过程，挖据坟墓也就不再是对死者的亦渎了。因为此时死者的灵魂已完全蒸发，进入天党了。这种通情达理的观点现在已得到广大考古学家的认可，正是它使考古学这门好管闲事的学科获得了显贵的地位。"
  },
  {
    "id": 637,
    "word": "trinity",
    "pos": "n",
    "cnWord": "用步枪射击抢夺",
    "defEn": "| In the multiplex? theism of certain Christian churches, three entirely distinct deities consistent with only one. Subordinate deities of the polytheistic faith, such as devils and angels, are not dowered with the power of combination, and must urge individually their clames to adoration and propitiation’. The Trinity is one of the most sublime mysteries of our holy religion. In rejecting it because it is incomprehensible, Unitarians® betray their inadequate sense of theological fundamentals. In religion we believe only what we do not understand, except in the instance of an intelligible doctrine that contradicts an incomprehensible one. In that case we believe the former as a part of the latter.",
    "defCn": "这是一些基督教教派信仰的复合一神论一一圣父、圣子、圣灵三个不同的神合而为一，等同于同一个神一一上帝。多神教信仰中低一级的神灵，例如魔鬼和天使们，不配有这种合而为一的本事，因此他们必须各自独自去寻求人的崇拜或听取人的慎悔。三位一体理论是我们神圣的基督教最高贵的奥义之一。由于它实在让人费解，基督教中唯一神教派的信徒们否认它的正确性 ,因而暴露了他们对宗教的基本法则的幼稚无知。在宗教中，除了相信和与某种让人弄不懂的教义相对立的很好懂的教义之外 ,我只应相信那些总也和弄不懂的东西，而且要把可理解的教义看成不可理解教义的一个组成部分。"
  },
  {
    "id": 638,
    "word": "truce",
    "pos": "n",
    "cnWord": "停战",
    "defEn": "Friendship.",
    "defCn": "友谊的表示。"
  },
  {
    "id": 639,
    "word": "truthful",
    "pos": "adj",
    "cnWord": "老实的",
    "defEn": "Dumb and illiterate.",
    "defCn": "愚笨的，未开化的。"
  },
  {
    "id": 640,
    "word": "turkey",
    "pos": "n",
    "cnWord": "火鸡",
    "defEn": "A large bird whose flesh when eaten on certain religious anniversaries has the peculiar property of attesting piety and gratitude. Incidentally, it is pretty good eating.",
    "defCn": "一种巨大的鸟，在某些宗教纪念日作食品时，它具有一种考验人对神的虔诚与感恩的特殊功效。顺带说一句，火鸡相当好吃。"
  },
  {
    "id": 641,
    "word": "twice",
    "pos": "adv",
    "cnWord": "两次",
    "defEn": "Once too often.",
    "defCn": "一次太常见了。"
  },
  {
    "id": 642,
    "word": "type",
    "pos": "n",
    "cnWord": "铅字",
    "defEn": "Pestilent' bits of metal suspected of destroying civilization and enlightenment, despite their obvious agency in this incomparable dictionary.",
    "defCn": "这是一种遗害无穷的金属小不点，尽管它们在这本无出其右的词典里劳苦功高，但它们因此却无法摆脱妄图摧毁文明的嫌疑了。"
  },
  {
    "id": 643,
    "word": "tzetze (or tsetse) fly",
    "pos": "n",
    "cnWord": "采采蝇",
    "defEn": "An African insect (Glossina morsitans) whose bite is commonly regarded as nature's most efficacious” remedy for insomnia’, though some patients prefer that of the American novelist (Mendax interminabilis). 302 , fea sale aw:",
    "defCn": "这是非洲的一种昆虫，通常都认为它的叮咬是治疗失眠的最富疗效的天然秘方，不过有些失眠患者更乐意让美国的小说家叮咬。"
  },
  {
    "id": 644,
    "word": "ugliness",
    "pos": "n",
    "cnWord": "丑陋",
    "defEn": "A gift of the gods to certain women, entailing virtue without humility.",
    "defCn": "这是众神赐给某个女人的，用来奖励她那种正直的美德。"
  },
  {
    "id": 645,
    "word": "ultimatum",
    "pos": "n",
    "cnWord": "最后通牒",
    "defEn": "In diplomacy, a last demand before resorting to concessions. Having received an ultimatum from Austria, the T urkish Ministry met to consider it. the Mamoosh of the Invincible Army, \"how many unconquerable soldiers have we in arms?\" memoranda, \"they are in numbers as the leaves of the forest!\" all Christian swine?\" he asked the Imaum of the Ever Victorious Navy. as the waves of the ocean, the sands of the desert and the stars of Heaven!\" For eight hours the broad brow of the Sheik of the Imperial Chibouk was corrugated’ with evidences of deep thought: he was calculating the chances of war. Then, \"Sons of angels,\" he said, \"the die is cast! I shall suggest to the Ulema of the Imperial Ear that he advise inaction. In the name of Allah, the council is adjourned.\" a A a aaa ee",
    "defCn": "在外交上，这是作出让步之前的最后一项要求。接到奥地利政府的最后通册后，土耳其政府内闪马上召集商量对“嗅，先知的仆人 ,”皇家教长问“不可战胜的”陆军元帅 ,“我们| 有多少不可征服的士兵 ?“万民景爷的主啊 ,”陆军元帅一边翻备忘录一边回答 ,“他们多得像琳林里的树叶 .。”“我们有多少让那些基督教猪儿半风丧胆的坚不可摧的战舰 ?”皇家教长问“战无不胜的”海军统帅。的沙粒和天上的星星 !”整整人小时，皇家教长粗大的眉头一直紧锁着，显然他是在思索，在计算战争的成败。最后，他说 :“诸位天使的儿子。事情已成定局。我将建议国王按兵不动。以真主的名义，会议结束 .>"
  },
  {
    "id": 646,
    "word": "un-american",
    "pos": "adj",
    "cnWord": "非美国的",
    "defEn": "Wicked, intolerable, heathenish.",
    "defCn": "邪恶的、不能容忍的、异教的。"
  },
  {
    "id": 647,
    "word": "unction",
    "pos": "n",
    "cnWord": "涂油礼",
    "defEn": "An oiling, or greasing. The rite of extreme unction consists in touching with oil consecrated’ by a bishop several parts of the body of one engaged in dying. Marbury relates that after the rite had been administered to a certain wicked English nobleman it was discovered that the oil had not been properly consecrated and no other could be obtained. When informed of this the sick man said in anger: \"Then I'll be damned if I die!\"",
    "defCn": "一种涂油的宗教仪式。所谓临终涂油礼，就是用主教祭过神的圣油涂抹在临终者身体的几个穴位。\n据马布里说，曾经有一个作恶多端的英国贵族接受临终涂油礼，仪式进行完毕后才发现所用的并不是圣油，更糟的是当时根本找不到圣油。那个垂死的贵族大声咆哮：\"这么说我死后将受到诅咒？\"\n\"我的孩子，\"神父说，\"我们担心的就是这个。\""
  },
  {
    "id": 648,
    "word": "usage",
    "pos": "n",
    "cnWord": "用法",
    "defEn": "The First Person of the literary Trinity, the Second and Third being Custom and Conventionality'. Imbued” with a decent reverence for this Holy Triad an industrious writer may hope to produce books that will live as long as the fashion.",
    "defCn": "这是文学作品“三位一体”的第一个身体，第二位和第三位分别是“传统”和“习俗”。一个勤奋的作家若是对这种神圣的三位一体充满虔信，那么他一定可以创作出与时尚一样长久的作品。"
  },
  {
    "id": 649,
    "word": "uxoriousness",
    "pos": "n",
    "cnWord": "惧内",
    "defEn": "A perverted’ affection that has strayed to one's own wife. Bet se ate eds",
    "defCn": "这是一种变态的情感，这种情感甚至已经传染到妻子身上了。"
  },
  {
    "id": 650,
    "word": "valor",
    "pos": "n",
    "cnWord": "勇猛",
    "defEn": "A soldierly compound of vanity, duty and the gambler's hope. Chickamauga, who had ordered a charge; \"move forward, sir, at once.\" persuaded that any further display of valor by my troops will bring them into collision with the enemy.\" Whi Certain abstentions.",
    "defCn": "这是虚荣、责任和赌徒心理的混合体。\n\"你们为什么停下来？\"驻守奇克莫加的师长怒吼道，\"给我冲，马上冲。\"\n\"将军，\"那位没有忠于职守的旅长答道：\"有人劝告我，我的部队再进一步显示勇猛的话，势必会同敌人发生冲突。\""
  },
  {
    "id": 651,
    "word": "vote",
    "pos": "n",
    "cnWord": "选举",
    "defEn": "The instrument and symbol of a freeman's power to make a fool of himself and a wreck’ of his country. i=. oe — ws, AM Jor ANS =e Ra AS < SN",
    "defCn": "这是自由民权力的象征和工具 , 其结果是思弄了自己 , 摘震了国家。"
  },
  {
    "id": 652,
    "word": "wall street",
    "pos": "n",
    "cnWord": "华尔街",
    "defEn": "A symbol for sin for every devil to rebuke!. That Wall Street is a den of thieves is a belief that serves every unsuccessful thief in place of a hope in Heaven.",
    "defCn": "这是让恶魔都串责的罪划象征。华尔街 \"是个大贼窝一一这种认识让那些失意的窃贼们振奋不已，他们宁愿进华尔街，也不愿进天堂。"
  },
  {
    "id": 653,
    "word": "war",
    "pos": "n",
    "cnWord": "战争",
    "defEn": "PW, TEN eRe Bee, AAA EE. A by-product of the arts of peace. The most menacing political condition is a period of international amity. The student of history who has not been taught to expect the unexpected may justly boast himself inaccessible to the light. \"In time of peace prepare for war\" has a deeper meaning than is commonly discerned; it means, not merely that all things earthly have an end -- that change is the one immutable’ and eternal law -- but that the soil of peace is thickly sown with the seeds of war and singularly suited to their germination” and growth. It was when Kubla Khan had decreed his \"stately pleasure dome\" -- when, that is to say, there were peace and fat feasting in Xanadu’ -- that he heard from afar Ancestral voices prophesying war. One of the greatest of poets, Coleridge was one of the wisest of men, and it was not for nothing that he read us this parable’. Let us have a little less of \"hands across the sea,\" and a little more of that elemental distrust that is the security of nations. War loves to come like a thief in the night; professions of eternal amity provide the night. IRE HP Rocke Ais ik Ff Bl) FRAGA AS HRS 64 YI BBR iF FoORE-LSSHRRRE: RMAAETELRAS, HO, AON, TR LRM TORR. HES Ho, BABY MERC, MMH KRTALAAR, ArH BRIE ke PRR! BT, C60S BA A, AX teh ARR EA ED FP, ABBE, Pw MARA AMR; ALESIS SEP, HARI Ad BEEP RATAALPOH RE, AAR SH op Ae Fil ih 3 FB] FLA MP TAS A RF 44 Ye! FLEA RAY PRB; RAN FET, HGRA IR, FAMERS, EMME CRE! LEP REMARKS, ARF SCAR A SHE, ME RRS! PRAYER, WA a eRe | RAAB, sewai Hz, RAHA SHS, .",
    "defCn": "2 华尔街(wall streeb是纽约市曼哈顿区南部一条大街的名字，长不超过一英里，宽仅 11 米。它是美国一些主要金融机构的所在地。华尔街是英文“墙街”的音译。荷兰统治时 ,在这里筑过一道防卫墙。英国人赶走荷兰人后，拆墙建街，因而得名。这条街上的联邦厅曾是美国第一届国会的所在地，首任总统华盛顿就是在这里宣持就职的，如今大门前管立着华盛顿像以纪念此事。不过华尔街作为政治中心只是短战争这是和平的副产品。最危险的政治状况是国际的和睦。学会等待意外的历史学学者完全有理由声明自己无法理解这种看法 .“在和平时期要为战争作准备”的含义比一般人所想的要复杂得多，它不仅表明世间的一切都会结束一一变化是宇宙的永恒法则一一而且还表明和平的沃土已撤满了战争种子，这沃土又极适于这些种子的萌芽和成长。忽必烈: 正是在修筑了他的“快活宫”之后一 -也就是说，在京城一片歌舞升平，百姓安居乐业之际一一伟大诗人柯勒律治 ? 是一个聪明绝顶的旷世奇才，他对我们讲这个寓言是有意义的。愿我们少一些“伸过大洋彼岸的友谊之手”，多一点必不可少的猜总，这才是国家安全的保障。战争像一个小偷，最爱在黑夜袭来，而永久和平的论调正好提供了这样的黑夜。( 附柯勒律治的代表作《忽必烈汗》)穿过深不可测的洞门，直流入不见阳光的海洋。有方圆五英里肥沃的土壤，1 元世祖，又称薛禅汗，蒙哥汗之弟。1260 一 1294 年在位。蒙哥汗即位后，把治理漠南地区权柄交给他。1256 年在梁河上游地建开平府。起用儒士，兴办屯田。1253年，奉命征云南，次年灭大理而归。1259 年，围攻鄂州(湖北武昌 )时，得蒙哥汗死讯，与宋贾似道讲和，率军北还。1264 年，迁都燕京，改称大都( 今北京 )。1271 年，改国名为元。发动灭宋战争，1279 年取胜，统一全国，建立了中央集权的统一的多民族国家。2 萨缀尔。柯勤律治(1772 一 1834)英国湖畔诗人之一，著名评沦家，浪漫主义思潮的主要代表。柯勒律治写诗不多，然而其中有不朽之作，例如《古舟子咏》和《忽必烈汗》，这些诗表现了诗人奇特的想象力如何驰牙在遥远的海洋和中古的月下城堡之间，立意新颖，感情激功，想象奇特，语言瑰丽，音律优美，代表了浪漫主义抒情短许，表现了诗人不幸的生活遭遇和抑郁的心情。他写有大量的文学、哲学，神学论著，论述精辟，见解独到，在英国文学史上占有重要地位。四周给围上楼塔和城墙 :园里树枝上鲜花盛开，一片芬芳 ;这里有森林，跟山蛮同样古老，围住了洒满阳光的一块块青草草场。但是，啊 ! 那深沉而奇异的巨塞沿青山针裂，横过伞盖的柏树 !野变的地方，既神圣而又着了魔 -一好象有女人在衰落的月色里出没，在它那断时续的涌送之间，巨大的石块飞跃着象反跳的冰埋，或者象打稳人连柳下一撮操新舟 ;进发出那条神圣的溪河。迷乱地移动着，晃纤了五英里地方，那神圣的溪河流过了峡谷和森林，于是到达了深不可测的油门，安乐的宫殿有倒影，这儿能听见和谐的音韵来自那地泉和那岩洞。一个手拿德西马琴的姑娘 :那是个阿比西尼亚少女，在她的琴上她奏出乐曲，歌唱着阿伯若山。如果我心中能再度产生她的音乐和歌唱，我将被引入如此深切的欢欣，以至于我要用音乐高朗而又长久谁都能见到这宫殿，只要听见了乐音。他们全都会喊叫 : 当心 ! 当心 !闭下你两眼，带着神圣的恐惧，一直饮着天堂的琼浆仙乳。"
  },
  {
    "id": 654,
    "word": "weather",
    "pos": "n",
    "cnWord": "天气",
    "defEn": "The climate of the hour. A permanent topic of conversation among persons whom it does not interest, but who have inherited the tendency to chatter about it from naked arboreal! ancestors whom it keenly concerned. The setting up official weather bureaus and their maintenance in mendacity” prove that even governments are accessible to suasion3 by the rude forefathers of the jungle. Once I dipt into the future far as human eye could see, And I saw the Chief Forecaster, dead as any one can be -- Dead and damned and shut in Hades as a liar from his birth, With a record of unreason seldom paralleled on earth. While I looked he reared him solemnly, that incadescent youth, From the coals that he'd preferred to the advantages of truth. He cast his eyes about him and above him; then he wrote On a slab of thin asbestos‘ what I venture here to quote -- For I read it in the rose-light of the everlasting glow: Halcyon Jones AOE DEIR Re TR RA A A,",
    "defCn": "某一时刻的天空气氛。天气是大家永久谈论的主题，即使他们对它毫无兴趣。人们之所以爱谈论天气，是因为他们从远祖那里继承了谈论天气的癖好，天气同那些栖居在树上的祖先之间的关系实在是太密切了。官办气象局一个个地成立，但每天都在宣告着谎言，这表明：就连现代政府都无法摆脱丛林里野蛮远祖的习性。"
  },
  {
    "id": 655,
    "word": "wedding",
    "pos": "n",
    "cnWord": "婚礼",
    "defEn": "A ceremony at which two persons undertake to become one, one undertakes to become nothing, and nothing undertakes to become supportable.",
    "defCn": "是这样一种仪式，两个人先尝试变成一个人，这个人再变得一无所"
  },
  {
    "id": 656,
    "word": "wheat",
    "pos": "n",
    "cnWord": "小麦",
    "defEn": "A cereal from which a tolerably good whisky can with some difficulty be made, and which is used also for bread. The French are said to eat more bread per capita’ of population than any other people, which is natural, for only they know how to make the stuff palatable’. Black.",
    "defCn": "这是一种谷类作物，倒腾几次之后，可以从中酝酿出还过得去的威士忌，它也可用作面包。据传，按人均消耗量计算，法国人的面包消费量比其他任何民族都要多。这很自然，因为只有法国人才知道如何把小麦做得爽口。白的"
  },
  {
    "id": 657,
    "word": "widow",
    "pos": "n",
    "cnWord": "寡妇",
    "defEn": "A pathetic figure that the Christian world has agreed to take humorously, although Christ's tenderness towards widows was one of the most marked features of his character.",
    "defCn": "这是基督教世界一致允许当作笑料的可怜人 , 尽管照顾寡妇是他们的主一一基督的最大的优点。"
  },
  {
    "id": 658,
    "word": "wit",
    "pos": "n",
    "cnWord": "机智",
    "defEn": "The salt with which the American humorist spoils his intellectual cookery by leaving it out. Ee REA. SHORT LAS ARR MDE, Abba K",
    "defCn": "的东西没有一点味道。"
  },
  {
    "id": 659,
    "word": "witch",
    "pos": "n",
    "cnWord": "巫婆",
    "defEn": "(1) Any ugly and repulsive old woman, in a wicked league with the devil. (2) A beautiful and attractive young woman, in wickedness a league beyond the devil.",
    "defCn": "(1)一个丑陋可民的老女人，她与魔鬼有某种邪恶的联盟关系。(2)一个美角诱人的年轻女子，就其收恶而言，魔鬼都输她三分。"
  },
  {
    "id": 660,
    "word": "witticism",
    "pos": "n",
    "cnWord": "俏皮话",
    "defEn": "A sharp and clever remark, usually quoted, and seldom noted: what the Philistine is pleased to call a \"joke.\"",
    "defCn": "一种尖刻而机智的评价，一般是抄袭他人的，但很少被人发现，良人们喜欢称之为一个“玩笑”。"
  },
  {
    "id": 661,
    "word": "woman",
    "pos": "n",
    "cnWord": "女人",
    "defEn": "An animal usually living in the vicinity of Man, and having a rudimentary susceptibility to domestication'. It is credited by many of the elder zoologists with a certain vestigial” docility’ acquired in a former state of seclusion’, but naturalists of the postsusananthony period, having no knowledge of the seclusion, deny the virtue and declare that such as creation's dawn beheld, it roareth now. The species is the most widely distributed of all beasts of prey, infesting all habitable parts of the globe, from Greeland's spicy mountains to India's moral strand. The popular name (wolfman) is incorrect, for the creature is of the cat kind. The woman is lithe and graceful in its movement, especially the American variety(/elis pugnans), is omnivorous! and can be taught not to talk.",
    "defCn": "一种经常生活在男人附近的动物，最适宜家养。许多老派的动物学家称赞说：这种发育不全的动物在从前禁闭的生活中养成了一种温顺的品行。但后来的博物学家对那种幽居生活一无所知，他们否认女人的这种温顺的美德并声称：像洪荒时代一样，女人们现在又咆哮起来了。在所有的祭祀品中，这一类分布最为广泛，她遍布地球上所有可以居住的地区，北起格陵兰岛芬芳的群山，南至印度的道德海岸。对它最常见的称呼wolfman是一个谬误。因为这类动物属于猫科，女人举手投足轻快而优雅，美国女人更是如此，它不管拿到什么东西都乱看一通，还可以被教会如何保持沉默。"
  },
  {
    "id": 662,
    "word": "worms'-meat",
    "pos": "n",
    "cnWord": "蛆虫食用肉",
    "defEn": "The finished product of which we are the raw material. The contents of the Taj Mahal, the Tombeau* Napoleon and the Granitarium. Worms'-meat is usually outlasted by the structure that houses it, but \"this too must pass away.” Probably the silliest work in which a human being can engage is construction of a tomb for himself. The solemn purpose cannot dignify, but only accentuates by contrast the foreknown futility’. -",
    "defCn": "这是用我们的躯体上的生肉做原料而精心制成的美味佳着。它们是泰姬陵 *、拿破仓墓和格兰特司令 ? 幕中的美食。盛放“蛆虫食用肉”的骨架通常比这种美餐更为长久，但是这种骨架“也是最终要消亡的”人所做的最不明智的事，莫过于为自己修建一座坟墓了。坟墓并不能为死者增加什么光荣，相反，它更清晰地证明了这一切努力都是竹篮打水一场空。"
  },
  {
    "id": 663,
    "word": "wrath",
    "pos": "n",
    "cnWord": "愤怒",
    "defEn": "Anger of a superior quality and degree, appropriate to exalted* characters and momentous” occasions; as, \"the wrath of God,\" \"the day of wrath,\" etc. Amongst the ancients the wrath of kings was deemed sacred, for it could usually command the agency of some god for its fit manifestation, as could also that of a priest. The Greeks before Troy were so harried by Ke Apollo that they jumped out of the frying-pan of the wrath of Cryses into the fire of the wrath of Achilles, though Agamemnon, the sole offender, was neither fried nor roasted. A similar noted immunity was that of David when he incurred the wrath of Yahveh by numbering his people, seventy thousand of whom paid the penalty with their lives. God is now Love, and a director of the census performs his work without apprehension! of disaster. AMBRE RN SHE, RAR EK, RAE RE. RS aR 争 中 , PRB RICA, PTE, ACT PHS Ea EEA Hector), MENS We, Ams. te Roe Ps Et ae TAs “ 2 RN metering? 28 ae) he} in our alphabet being a needless letter has an added invincibility’ to the attacks of the spelling reformers, and like them, will doubtless last as long as the language. X is the sacred symbol of ten dollars, => 2 and in such words as Xmas, Xn, etc., stands for Christ, ~ ag 六 not, as is popular supposed, because it represents a 4 oa 4 cross, but because the corresponding letter in the Zs >. vA Greek alphabet is the initial of his name -- Xristos. If it \" cS, represented a cross it would stand for St. Andrew, who \\ te psychology x stands for Woman's mind. Words \"\" (an % beginning with X are Grecian and will not be defined mene’ in this standard’ English dictionary. oF 2Fs)",
    "defCn": "> 泰姬陵是莫臣儿王朝帝王沙贾汉为爱妃泰吉。马哈尔所造。据传当年沙贾汉听闻爱妃先他而去的消息后，竟一夜白头。为纪念奉吉，不爱江山爱美人的国王倾举国之力，耗无数钱财，用了 22 年时间修建了这座晶莹剔透的泰姬陵。国王本想在河对面再为自己造一个一模一样的黑色陵墓，中间用半边和白色、半边黑色的大理石桥连接，与爱妃相对而眠。谁知泰姬陵刚完工不久，其子就狐兄杀弟纂位，他也被办禁在离泰郊陵不远的阿格拉堡。此后整整 8 年的时间，沙页汉每天只能透过小窗，姜然地遥望着远处河里浮动的泰姬陵倒影，直至病死。> 尤利西斯格兰特〈Ulysses S. Grant，1822~1885)，美国内战期间担任北方联军司令，格兰特是位意志坚定的男子汉，即使在极端沉重的压力下也从未失去自制。格兰特打过败仗，曾使许多人丧生，但由于能充分理解后勤的重要性，他往往打胜愤怒这比一般人的怒气级别要高一个层次 ,，它更适合尊贵的人物或重大场合，比如我们经常说的“上帝的愤怒”或“天谴日”等。古人把国王的愤怒看作是神圣的，因为它们把神的旨意最恰当地说出来了，繁司的愤怒也是如此。特洛伊战争之前的希腊人深受阿波罗的折磨，他们跳出克里斯的愤怒的油锅，却跳进了阿基里斯“愤怒的火坑，不过，不管他们遭受怎样的苦难 , 唯一的罪犯阿伽门农却既没有被油炸 , 也没遭火烧。与此类似的还有大卫王，他在统计人口时惹恼了耶和华，结果七万公民遭受了极刑，而大卫王却毫发无损。现在上帝博爱了，这位人口普查官勤勤居奶地工作，无需担心灾难的降临。2 阿基里斯是希腊联军里最英勇善战的孢将，也是荷马史诗《饿利亚特》里的主要人物之一。传说他是希腊密耳弥多涅斯人的国王珀琉斯和海神的女儿西蒂斯所生的儿子。阿基里斯出生后，母亲想使此子健壮永生，把他放在火里锻炼，又捏着他的脚中倒淄在实河(Styx)圣水里浸泡。因此阿基里斯浑身象钢入铁骨，刀枪不入，只伊的任何武器都无法伤害他的身躯。后来，太阳神阿波罗(Apollo)把阿基里斯的弱点告诉了特洛伊王子帕里斯，阿基里斯终于被由里斯诱到城门口，用暗箭射中他的虽然在英语字母表中 , X是一个多余的字母，但它却有一种极为顽强的生命力，使拼写改革家对它一筹莫展，看来它和他们一样，一定要和英语一起长久存在下去了。X是一个代表 10 美元的神圣符号。在诸如Xmas，Xn中，它代表与耶酥有关的东西，这并不是因为它看起来像一个十字架一一尽管人们通常是这样认为的一一而是因为与X相对应的希腊字母同耶酥之名的第一个字母一样。如果X真的代表一个十字架的话，那么它大概象征是“对安德鲁 ?”，他曾被钉在上面，有资格出庭作证。在心理学代数中 , X代表女人的心。以和开头的词都是希腊语词汇，这本正宗的英语词典就不亡加定义了。> 圣安德鲁是苏格兰的守护神，圣安德鲁与苏格兰的关系源远流长，苏格兰人无论到哪儿，都将此铭记于心。第一个圣安德鲁协会于 1657 年在马萨诸塞州的波士顿成立。圣安德鲁的真实故事早已失传，但普遍认为他是圣彼得〈St Peter)的弟弟，并且是一个渔民。据传，他被罗马人钉死在十字架上，因此交叉对角线一 -X形十字就成了苏格兰国旗的图案。"
  }
];

if (typeof module !== 'undefined' && module.exports) {
  module.exports = WORDS;
}
