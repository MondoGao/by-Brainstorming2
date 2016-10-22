"use strict"
window.onload = function() {
    bindControllerArea('front');
    fitScreen();
    bindCardList();
    changeCardList();
    window.onresize = fitScreen;
    document.getElementById('btn-discuss').addEventListener("click", function(e) {
        toggleLayout(e, document.getElementById('share-layout'));
    });
    document.getElementById('share-layout').addEventListener('click', function(e) {
        toggleLayout(e, document.getElementById('share-layout'));
    });
};

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
            name: '春',
            eng: 'Spring',
            words: ['鲜花','发芽','播种','成长','希望','新的开始']
        }, {
            name: '夏',
            eng: 'Summer',
            words: ['烈日', '酷热', '暑假', '西瓜', '空调', '汗水']
        }, {
            name: '秋',
            eng: 'Autumn',
            words: ['枫叶', '凉爽', '中秋节', '成熟', '金色', '富有']
        }
    ], thing: [
        {
            name: '仙人掌',
            eng: 'Cactus',
            words: ['生命力强', '沙漠', '玫瑰', '刺', '牛仔']
        }, {
            name: '雾霾',
            eng: 'Haze',
            words: ['模糊', '无所不在', '香水', '口罩', '新闻']
        }, {
            name: '可乐',
            eng: 'Cola',
            words: ['欢乐', '家庭', '喷射', '爆炸']
        }
    ], place: [
        {
            name: '机场',
            eng: 'AirPort',
            words: ['旅游', '等候', '行李', '离别', '咖啡馆']
        }, {
            name: '寺庙',
            eng: 'Temple',
            words: ['信仰', '虔诚', '宗教', '蜡烛', '闹鬼']
        }, {
            name: '健身房',
            eng: 'Gymnasium',
            words: ['决斗', '赞扬', '死亡', '汗水', '好身材']
        }
    ], people: [
        {
            name: '学生',
            eng: 'Student',
            words: ['假期', '情窦初开', '叛逆', '压力']
        }, {
            name: '亲人',
            eng: 'Relatives',
            words: ['无私', '支柱', '回馈', '血液', '团聚']
        }, {
            name: '外星人',
            eng: 'Alien',
            words: ['火星', '飞碟', '智能', '掠夺', '诡异']
        }
    ], event: [
        {
            name: '弹',
            eng: 'Bounce',
            words: ['手指', '钢琴', '震动', '橡胶', '高', '灵巧']
        }, {
            name: '发怒',
            eng: 'Anger',
            words: ['失控', '破碎', '火', '力量']
        }, {
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

function bindCardList() {
    var cards = document.querySelectorAll('.card-small');
    for (var i = 0; i < cards.length; i++) {
        cards[i].addEventListener('touchstart',changeActiveCard);
    }
}

function changeActiveCard() {
    // debugger
    var time = Number(this.dataset.index) - Number(document.querySelector('.card[data-index="2"]').dataset.order);
    changeCard(-1*time);
}

function toggleLayout(e, ele) {
    if(e) {
        e.preventDefault();
    }
    if (ele.className !== "") {
        ele.className = "";
    } else {
        ele.className = "hide";
    }
}

function bindControllerArea() {
    var touchstartX;
    document.querySelector('.card-front .next').addEventListener("touchstart", function(e) {
        e.stopPropagation();
        changeCard(-1);
    });
    document.querySelector('.card-front .previous').addEventListener("touchstart", function(e) {
        e.stopPropagation();
        changeCard(1);
    });
    document.querySelector('.card-front .next').addEventListener("touchend", stopPropagation);
    document.querySelector('.card-front .previous').addEventListener("touchend", stopPropagation);
    document.querySelector('.card-front').addEventListener("touchstart", function(e) {
        touchstartX = e.touches[0].clientX;
    });
    document.querySelector('.card-front').addEventListener("touchend", function(e) {
        var changedX = e.changedTouches[0].clientX - touchstartX;
        if(Math.abs(changedX) > 50) {
            if(changedX > 0)
                changeCard(1);
            else
                changeCard(-1);
        }
    });
}

function changeCardList() {
    var cards = document.querySelectorAll('.card-small');
    var active = document.querySelector('.card[data-index="2"]').dataset.order;
    for(var i = 0; i < cards.length; i++) {
        if (i != active) {
            cards[i].classList.remove('active');
        } else {
            cards[i].classList.add('active');
        }
    }
}

function changeCard(direct) {
    var cards = document.querySelectorAll('.card');
    var cardBound = 4;
    var flag = 1;
    if (direct < 0) {
        flag = -1;
        cardBound = 0;
    }
    for (;direct !== 0; direct-=flag){
        for (var i = 0; i < cards.length; i++) {
            var outFlag = flag*(Number(cards[i].dataset.index) + flag) > cardBound;
            cards[i].dataset.index = outFlag ? (flag > 0 ? 0 : 4) : (Number(cards[i].dataset.index) + flag);
        }
    }
    changeCardList();
}
