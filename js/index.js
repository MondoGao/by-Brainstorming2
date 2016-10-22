"use strict"
window.onload = function() {
    fitScreen();
    window.onresize = fitScreen;
    document.querySelector('#btn-start').addEventListener('click',startBrainstorm);
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
        }
    ], people: [
        {
            index: 0,
            name: '学生',
            eng: 'Student',
            words: ['假期', '情窦初开', '叛逆', '压力']
        }, {
            index: 1,
            name: '亲人',
            eng: 'Relatives',
            words: ['无私', '支柱', '回馈', '血液', '团聚']
        }, {
            index: 2,
            name: '外星人',
            eng: 'Alien',
            words: ['火星', '飞碟', '智能', '掠夺', '诡异']
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
            words: ['隐藏', '真相', '不同']
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
