"use strict"
window.onload = function() {
    fitScreen();
    window.onresize = fitScreen;
    document.querySelector('#btn-start').addEventListener('click',startBrainstorm);
    if (document.body.clientHeight < document.querySelector("section").scrollHeight) {
        document.body.className = "slim";
    }
}


function preventDefault(ev) {
    ev.preventDefault()
}
function stopPropagation(ev) {
    // debugger;
    ev.stopPropagation()
}

var cardData = {
    time: [
        {
            index: 0,
            name: '春',
            eng: 'Spring',
            words: ['鲜花','发芽','播种','成长','希望','新的开始']
        }, {
            index: 1,
            name: '夏',
            eng: 'Summer',
            words: ['烈日', '酷热', '暑假', '西瓜', '空调', '汗水']
        }, {
            index: 2,
            name: '秋',
            eng: 'Autumn',
            words: ['枫叶', '凉爽', '中秋节', '成熟', '金色', '富有']
        }, {
            index: 3,
            name: '生日',
            eng: 'Birthday',
            words: ['母亲', '惊喜', '蜡烛', '礼物', '音乐']
        }, {
            index: 4,
            name: '正午',
            eng: 'Noon',
            words: ['汗水', '午餐', '困', '食物', '午休']
        }, {
            index: 5,
            name: '经期',
            eng: 'Period',
            words: ['烦躁', '休息', '阶段', '疼痛', '冷饮', '热水袋']
        }, {
            index: 6,
            name: '末日',
            eng: 'Doomsday',
            words: ['食物', '躲避', '灾难', '废墟', '英雄', '死亡']
        }, {
            index: 7,
            name: '万圣节',
            eng: 'Halloween',
            words: ['中秋节', '除夕', '圣诞节', '鬼魂', '糖果', '女巫']
        }, {
            index: 8,
            name: '冬',
            eng: 'Winter',
            words: ['圣诞', '团聚', '冬眠', '贫穷', '火炉', '严寒']
        }, {
            index: 9,
            name: '早晨',
            eng: 'Morning',
            words: ['朝阳', '希望', '闹钟', '睡懒觉', '豆浆油条']
        }, {
            index: 10,
            name: '傍晚',
            eng: 'Dusk',
            words: ['夕阳', '回家', '炊烟', '地铁', '新闻联播']
        }, {
            index: 11,
            name: '春节',
            eng: 'Spring Festival',
            words: ['鞭炮', '热闹', '饺子', '钱', '亲人', '团聚']
        }, {
            index: 12,
            name: '深夜',
            eng: 'Late Night',
            words: ['漆黑', '困', '咖啡', '床', '手机', '夜宵']
        }, {
            index: 13,
            name: '情人节',
            eng: 'Valentine\'s Day',
            words: ['恋人', '红酒', '巧克力', '分手', '虐狗']
        }, {
            index: 14,
            name: '暑假',
            eng: 'Summer vacation',
            words: ['作业', '空调', '西瓜', '晒黑', '世界杯']
        }, {
            index: 15,
            name: '国庆节',
            eng: 'National Day',
            words: ['阅兵', '纪念', '游玩', '直播', '人山人海']
        }, {
            index: 16,
            name: '双十一',
            eng: 'Singles\' Day',
            words: ['购物', '吃土', '陪伴', '单身狗', '脱单']
        }, {
            index: 17,
            name: '圣诞节',
            eng: 'Christmas',
            words: ['礼物', '雪花', '童话', '火鸡', '团聚', '卖火柴']
        }, {
            index: 18,
            name: '跨年',
            eng: 'New Year\'s Eve',
            words: ['刷夜', '烟花', '许愿', '晚会', '除旧迎新']
        }
  ], place: [
        {
            index: 0,
            name: '机场',
            eng: 'AirPort',
            words: ['旅游', '等候', '行李', '离别', '咖啡馆']
        }, {
            index: 1,
            name: '寺庙',
            eng: 'Temple',
            words: ['信仰', '虔诚', '宗教', '蜡烛', '闹鬼']
        }, {
            index: 2,
            name: '健身房',
            eng: 'Gymnasium',
            words: ['决斗', '赞扬', '死亡', '汗水', '好身材']
        } , {
            index: 3,
            name: '厨房',
            eng: 'Kitchen',
            words: ['火', '烹饪', '美味', '气味', '腐烂']
        }, {
            index: 4,
            name: '监狱',
            eng: 'Prison',
            words: ['惩罚', '秩序', '释放', '密集', '血液', '捡肥皂']
        }, {
            index: 5,
            name: '南极',
            eng: 'Antarctica',
            words: ['企鹅', '储存', '纯净', '严寒', '考察站']
        }, {
            index: 6,
            name: '空间站',
            eng: 'Space station',
            words: ['科幻', '防卫', '地心引力', '太空监狱']
        }, {
            index: 7,
            name: '育婴室',
            eng: 'Nursery',
            words: ['关爱', '隐私', '补给', '温暖', '生长']
        }, {
            index: 8,
            name: '游乐场',
            eng: 'Playground',
            words: ['过山车', '刺激', '孩子', '摩天轮', '浪漫']
        }, {
            index: 9,
            name: '竞技场',
            eng: 'Arena',
            words: ['决斗', '赞扬', '死亡', '争论', '石块']
        }, {
            index: 10,
            name: '黑洞',
            eng: 'Black Hole',
            words: ['穿越', '吞噬', '时间旅行', '火墙', '辐射']
        }, {
            index: 11,
            name: '海滩',
            eng: 'Beach',
            words: ['潜水', '岛屿', '爱情', '休闲', '艳遇']
        }, {
            index: 12,
            name: '酒吧',
            eng: 'Bar',
            words: ['喧闹', '酒精', '篝火', '暧昧', '昏暗']
        }, {
            index: 13,
            name: '天堂',
            eng: 'Heaven',
            words: ['神秘', '期望', '安逸', '美酒', '白色']
        }, {
            index: 14,
            name: '图书馆',
            eng: 'Library',
            words: ['安静', '学习', '密道', '时间限制', '排队']
        }, {
            index: 15,
            name: '实验室',
            eng: 'Laboratory',
            words: ['神圣', '反复', '杀菌', '爆炸', '诺贝尔']
        }, {
            index: 16,
            name: '乡村',
            eng: 'Countryside',
            words: ['宁静', '虫子', '火灾', '拐卖', '民谣']
        }, {
            index: 17,
            name: '餐馆',
            eng: 'Restaurant',
            words: ['排队', '美食', '贵', '抢劫', '服务', '分享']
        }, {
            index: 18,
            name: '卧室',
            eng: 'Bedroom',
            words: ['安静', '柔软', '玩具', '熬夜', '重生']
        }, {
            index: 19,
            name: '宿舍',
            eng: 'Bedroom',
            words: ['封闭', '乱', '紧密', '聚餐', '断电断网']
        }, {
            index: 20,
            name: '健身房',
            eng: 'Gymnasium',
            words: ['决斗', '赞扬', '死亡', '汗水', '好身材']
        }, {
            index: 21,
            name: '阁楼',
            eng: 'Attic',
            words: ['台阶', '私密', '狭小', '尘封', '藏宝图']
        }, {
            index: 22,
            name: '别墅',
            eng: 'Villa',
            words: ['土豪', '花园', '吊灯', '大扫除', '整齐划一']
        }, {
            index: 23,
            name: '会议室',
            eng: 'Conference Room',
            words: ['严肃', '记录', 'ppt', '领导者', '长型桌子']
        }

    ], people: [
        {
            index: 0,
            name: '学生',
            eng: 'Student',
            words: ['假期', '情窦初开', '叛逆', '压力', '熬夜']
        }, {
            index: 1,
            name: '亲人',
            eng: 'Relatives',
            words: ['无私', '支柱', '回馈', '血液', '团聚']
        }, {
            index: 2,
            name: '宇航员',
            eng: 'Astronaut',
            words: ['漂浮', '真空', '宇宙', '洁净', '孤独']
        }, {
            index: 3,
            name: '病人',
            eng: 'Patient',
            words: ['虚弱', '缓和', '平和', '温度计', '疼痛']
        }, {
            index: 4,
            name: '孕妇',
            eng: 'Pregnant Woman',
            words: ['抚摸', '爱心专座', '丈夫', '发胖', '柔和']
        }, {
            index: 5,
            name: '死者',
            eng: 'Decedent',
            words: ['墓志铭', '吸血鬼', '平静', '白色', '腐烂']
        }, {
            index: 6,
            name: '外星人',
            eng: 'Alien',
            words: ['火星', '飞碟', '智能', '掠夺', '诡异']
        }, {
            index: 7,
            name: '劳动者',
            eng: 'Laborer',
            words: ['安全帽', '建筑', '泥土', '汗水', '伤害']
        }, {
            index: 8,
            name: '残疾人',
            eng: 'Disabled Person',
            words: ['聋哑', '盲人', '轮椅', '破旧', '保护']
        }, {
            index: 9,
            name: '保姆',
            eng: 'Housemaid',
            words: ['清洁', '烹饪', '帮助', '全能', '雇佣']
        }, {
            index: 10,
            name: '明星',
            eng: 'Superstar',
            words: ['模仿', '疯狂', '演唱会', '钱', '签字']
        }, {
            index: 11,
            name: '婴儿',
            eng: 'Baby',
            words: ['呵护', '希望', '未来', '脆弱', '嫩', '哭泣']
        }, {
            index: 12,
            name: '孙悟空',
            eng: 'Monkey',
            words: ['机器猫', '变化', '独立', '毛发', '暴躁']
        }, {
            index: 13,
            name: '御宅族',
            eng: 'Otaku',
            words: ['孤僻', '动漫', '外卖', '纸巾', '沉默']
        }, {
            index: 14,
            name: '老人',
            eng: 'Old People',
            words: ['白发', '年轮', '智慧', '唠叨', '老花镜']
        }, {
            index: 15,
            name: '老师',
            eng: 'Teacher',
            words: ['严格', '眼镜', '写字', '操心', '咳嗽', '蜡烛']
        }, {
            index: 16,
            name: '程序员',
            eng: 'Programmer',
            words: ['键盘', '视力下降', '逻辑', '撕逼', '轮子']
        }, {
            index: 17,
            name: '设计师',
            eng: 'Designer',
            words: ['画笔', '灵感', '颜色', '熬夜', '模型', '疯狂']
        }, {
            index: 18,
            name: '幽灵',
            eng: 'Ghost',
            words: ['半透明', '恐怖', '穿透', '复杂', '融化']
        }, {
            index: 19,
            name: '小偷',
            eng: 'Thief',
            words: ['三只手', '诱惑', '代价', '惩罚', '刺激']
        }, {
            index: 20,
            name: '老板',
            eng: 'Boss',
            words: ['威严', '压力', '钱', '西装', '红酒', '潜规则']
        }
    ], thing: [
        {
            index: 0,
            name: '仙人掌',
            eng: 'Cactus',
            words: ['生命力强', '沙漠', '玫瑰', '刺', '牛仔']
        }, {
            index: 1,
            name: '雾霾',
            eng: 'Haze',
            words: ['模糊', '无所不在', '香水', '口罩', '新闻']
        }, {
            index: 2,
            name: '可乐',
            eng: 'Cola',
            words: ['欢乐', '家庭', '喷射', '爆炸']
        }, {
            index: 3,
            name: '海绵',
            eng: 'Sponge',
            words: ['吸纳', '孔', '压缩', '柔软', '派大星']
        }, {
            index: 4,
            name: '孔雀',
            eng: 'Peacock',
            words: ['扇子', '舞蹈', '帐篷', '绚丽', '凤凰']
        }, {
            index: 5,
            name: '可乐',
            eng: 'Cola',
            words: ['欢乐', '家庭', '喷射', '爆炸', '气泡']
        }, {
            index: 6,
            name: '雷',
            eng: 'Thunder',
            words: ['恐惧', '倒塌', '停电', '着火', '发电']
        }, {
            index: 7,
            name: '镜子',
            eng: 'Mirror',
            words: ['相反', '协调', '审核', '梳妆', '鬼魂']
        }, {
            index: 8,
            name: '含羞草',
            eng: 'Mimosa',
            words: ['害羞', '保护', '捕蝇草', '触摸']
        }, {
            index: 9,
            name: '马桶',
            eng: 'Toilet',
            words: ['隔绝', '社交', '焦虑', '堵塞', '手机']
        }, {
            index: 10,
            name: '微波炉',
            eng: 'Microwave',
            words: ['微分子', '爆炸', '内部', '热量', '旋转']
        }, {
            index: 11,
            name: '影子',
            eng: 'Shadow',
            words: ['二维', '如影随形', '未知', '鬼魂']
        }, {
            index: 12,
            name: '月亮',
            eng: 'Moon',
            words: ['酒吧', '猫头鹰', '万家灯火', '女神']
        }, {
            index: 13,
            name: '极光',
            eng: 'Aurora',
            words: ['画板', '流星雨', '激光', '浪漫', '寒冷']
        }, {
            index: 14,
            name: '八爪鱼',
            eng: 'Octopus',
            words: ['柔软', '吸盘', '触须', '美味', '光滑']
        }, {
            index: 15,
            name: '花',
            eng: 'Flower',
            words: ['太阳', '泥土', '美女', '短暂', '搭讪']
        }, {
            index: 16,
            name: '蜡烛',
            eng: 'Candle',
            words: ['光', '融化', '烟火', '应急', '环保']
        }, {
            index: 17,
            name: '灯',
            eng: 'Light',
            words: ['明亮', '爱迪生', '温暖', '引诱', '节能']
        }, {
            index: 18,
            name: '空调',
            eng: 'Air conditioner',
            words: ['耗电', '遥控器', '速度', '定时', '修理']
        }, {
            index: 19,
            name: '背包',
            eng: 'Backpack',
            words: ['容量', '整理', '肩膀', '学校', '清洗']
        }, {
            index: 20,
            name: '书',
            eng: 'Book',
            words: ['小说', '有趣', '知识', '枯燥', '纸飞机']
        }, {
            index: 21,
            name: '游戏机',
            eng: 'Games console',
            words: ['战斗', '团队', '金钱', '时间', '能力']
        }, {
            index: 22,
            name: '外套',
            eng: 'Coat',
            words: ['温暖', '柔软', '爱情', '抵御', '流行']
        }, {
            index: 23,
            name: '口红',
            eng: 'Lipstick',
            words: ['美丽', '虚假', '融化', '金钱', '金属']
        }, {
            index: 24,
            name: '假发',
            eng: 'Wig',
            words: ['虚假', '色彩', '隐藏', '静止', '尴尬']
        }, {
            index: 25,
            name: '飞船',
            eng: 'Spacecraft',
            words: ['冒险', '离别', '生态系统', '速度', '封闭']
        }, {
            index: 26,
            name: '图片',
            eng: 'Picture',
            words: ['色彩', '静止', '回忆', '柔软', '多平台']
        }, {
            index: 27,
            name: '音乐',
            eng: 'Music',
            words: ['艺术', '流淌', '辅助', '刺耳', '传达']
        }, {
            index: 28,
            name: '电影',
            eng: 'Film',
            words: ['故事', '胶片', '切换', '梦境', '分数', '影院']
        }, {
            index: 29,
            name: '话筒',
            eng: 'Microphone',
            words: ['声音', '金属', '持握', '晚会', '质量']
        }, {
            index: 30,
            name: '相机',
            eng: 'Camera',
            words: ['回忆', '暂停', '操作', '闪光', '偷拍']
        }, {
            index: 31,
            name: '画板',
            eng: 'Sketchpad',
            words: ['颜色', '画笔', '调和', '清洗', '打翻在地']
        }
    ], event: [
        {
            index: 0,
            name: '弹',
            eng: 'Bounce',
            words: ['手指', '钢琴', '震动', '橡胶', '高', '灵巧']
        }, {
            index: 1,
            name: '发怒',
            eng: 'Anger',
            words: ['失控', '破碎', '火', '力量']
        }, {
            index: 2,
            name: '翻',
            eng: 'Turn',
            words: ['隐藏', '真相', '不同', '镜子', '角度']
        }, {
            index: 3,
            name: '拔河',
            eng: 'Tug of War',
            words: ['合作', '气势', '口号', '摩擦', '手臂']
        }, {
            index: 4,
            name: '犹豫',
            eng: 'Hesitate',
            words: ['决策', '怀疑', '平衡', '害羞', '自卑']
        }, {
            index: 5,
            name: '祭拜',
            eng: 'Worship',
            words: ['宗教', '步骤', '旗帜', '虔诚', '牺牲']
        }, {
            index: 6,
            name: '跟踪',
            eng: 'Track',
            words: ['路线', '气味', '线索', '低头', '隐藏']
        }, {
            index: 7,
            name: '猜',
            eng: 'Guess',
            words: ['趣味', '赌', '作弊', '惊喜', '包罗万象']
        }, {
            index: 8,
            name: '恋爱',
            eng: 'Love',
            words: ['浪漫', '不理智', '烛光', '烧钱', '猜忌', '猜忌']
        }, {
            index: 9,
            name: '游行',
            eng: 'Parade',
            words: ['排队', '心理', '礼花', '权利', '镇压', '政府']
        }, {
            index: 10,
            name: '逃亡',
            eng: 'Fugitive',
            words: ['盲目', '恐惧', '陷阱', '冒险', '新生活']
        }, {
            index: 11,
            name: '整理',
            eng: 'Arrangement',
            words: ['工具', '通讯录', '抽屉', '灰尘', '强迫症']
        }, {
            index: 12,
            name: '装修',
            eng: 'Decoration',
            words: ['破坏', '修复', '风格化', '想象', '气味', '网购']
        }, {
            index: 13,
            name: '教训',
            eng: 'Lesson',
            words: ['学习', '进步', '破坏', '撤销', '填补']
        }, {
            index: 14,
            name: '录音',
            eng: 'Record',
            words: ['记录', '轨道', '隐秘', '证据', '推翻']
        }, {
            index: 15,
            name: '飞',
            eng: 'Fly',
            words: ['气流', '高', '振动', '爆炸', '线条']
        }, {
            index: 16,
            name: '舞蹈',
            eng: 'Dance',
            words: ['柔软', '节奏', '身体协调', '芭蕾', '节食', '灯光']
        }, {
            index: 17,
            name: '吃',
            eng: 'Eat',
            words: ['食物', '气味', '规律', '健康', '填充']
        }, {
            index: 18,
            name: '睡觉',
            eng: 'Sleep',
            words: ['做梦', '消失', '暗杀', '鬼魂', '温暖', '重生']
        }, {
            index: 19,
            name: '写',
            eng: 'Write',
            words: ['狗刨', '粗细', '事件', '修正', '展示']
        }, {
            index: 20,
            name: '滑动',
            eng: 'Slide',
            words: ['距离', '摔倒', '页面', '顺滑', '拉扯']
        }, {
            index: 21,
            name: '踢',
            eng: 'Kick',
            words: ['疼痛', '仇恨', '目标', '破洞', '力量']
        }, {
            index: 22,
            name: '键盘',
            eng: 'Type',
            words: ['键盘', '敲击', '编辑', '填满', '故事', '速度']
        }, {
            index: 23,
            name: '亲吻',
            eng: 'Kiss',
            words: ['爱情', '私密', '摩擦', '表达', '沾染', '气氛']
        }, {
            index: 24,
            name: '震动',
            eng: 'Shock',
            words: ['节奏', '规律', '麻木', '机械', '提醒', '声音']
        }, {
            index: 25,
            name: '死亡',
            eng: 'Die',
            words: ['物质循环', '泥土', '复仇', '白色', '回忆']
        }, {
            index: 26,
            name: '蹦极',
            eng: 'Bungee',
            words: ['刺激', '犹豫', '视死如归', '心脏病', '绳子']
        }, {
            index: 27,
            name: '学习',
            eng: 'Study',
            words: ['刺激', '犹豫', '视死如归', '心脏病', '绳子']
        }, {
            index: 28,
            name: '闪光',
            eng: 'Blink',
            words: ['爆炸', '眼镜', '吸引人', '化学', '惊喜']
        }, {
            index: 29,
            name: '旋转',
            eng: 'Spin',
            words: ['角度', '按钮', '跳跃', '车轮', '几何']
        }
    ]
};

function fitScreen() {
    var screenHeight = document.body.offsetHeight;
    var screenWidth = document.body.offsetWidth;
    var screenRatio = screenWidth/screenHeight;
    var paddingRatio = 375/600;
    if (screenRatio < 1 || screenWidth < 375) {
        document.querySelector('html').style.fontSize = screenWidth/10 +'px';
    } else {
        document.querySelector('html').style.fontSize = 37.5 + 'px';
    }

    // debugger
    document.body.addEventListener('touchmove', preventDefault);
    var sec = document.querySelector("section");
    // document.querySelector('#bg-wrap').style.paddingTop = (3.6 - (sec.scrollHeight - screenHeight)/37.5 > 0 ? (3.6 - (sec.scrollHeight - screenHeight)/37.5) : 3.5) + "rem";
    if(sec.scrollHeight > screenHeight) {
        sec.addEventListener('touchmove', stopPropagation);
    } else {
        sec.removeEventListener('touchmove', stopPropagation);
    }

    if(screenRatio > paddingRatio) {
        sec.style.paddingBottom = "0.2rem";
    } else {
        sec.style.paddingBottom = "0";
    }
}

function startBrainstorm(e) {
    if(e && e.preventDefault());
    var type = ['time','place','people','thing','event'];
    var finalCards = {time:[],place:[],people:[],thing:[],event:[]};
    var searchUrl = 'result.html?';
    for(var i = 0; i < 5; i++) {
        finalCards[type[i]] = Math.floor(Math.random()*(cardData[type[i]].length));;
        searchUrl += type[i] + '=' + finalCards[type[i]] +'&';
    }
    console.log(finalCards, searchUrl);
    window.location.assign(searchUrl.slice(0,-1));
}
