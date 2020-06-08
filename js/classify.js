function showAllClassify(dom) {
    console.log(dom.innerHTML)
    $('#all').addClass('mui-active');
    $('#collected').removeClass('mui-active');

    $('#all-classify').removeClass('mui-hidden');
    $('#collected-classify').addClass('mui-hidden');
}

function showCollectedClassify(dom) {
    $('#collected').addClass('mui-active');
    $('#all').removeClass('mui-active');

    $('#all-classify').addClass('mui-hidden');
    $('#collected-classify').removeClass('mui-hidden');
}

$('li a').attr('href', '#fengrui')

function collect(dom) {
    var text = dom.innerText
    if (text === '收藏'){
        dom.innerText = '已收藏'
        mui.toast('收藏成功!')
    }else {
        dom.innerText = '收藏'
        mui.toast('取消收藏成功!')
    }


}


/**
 * 切换频道
 * @param key
 * 0上一个
 * 1下一个
 */

var index = 0;

function changeChannel(key) {


    var obj = [
        {type: '京剧', icon: 'icon-opera', name: '京剧大放送', time: '每晚8:30'},
        {type: '早间新闻', icon: 'icon-news-morning', name: '早间新闻', time: '每天6:30'},
        {type: '乒乓球', icon: 'icon-ping-pong', name: '乒乓球比赛', time: '每晚7:30'}
    ]

    var num = obj.length;


    if (parseInt(key) === 0){
        index === 0 ? index = num - 1 : index--;
    }else{
        index = (index + 1) % num;
    }
    // parseInt(key) === 0 ?
    //     () => {
    //         index === 0 ? index = num - 1 : index--;
    //     } :
    //     () => {
    //         index = (index + 1) % num;
    //     };

    console.log(index);
    var arr1 = [];
    var arr2 = [];
    arr1.push('<div class="mui-row mui-table-view mui-grid-view mui-grid-9 icon-center-div">\n' +
        '                    <li class="mui-table-view-cell mui-media" style="border: none">\n' +
        '                        <a href="#" onclick="">\n' +
        '                            <span class="tf-icon ' + obj[index].icon + '" ></span>\n' +
        '                            <div class="mui-media-body">'+obj[index].type+'</div>\n' +
        '                        </a>\n' +
        '                    </li>\n' +
        '                </div>');

    arr2.push('<div >节目名称：<span>'+ obj[index].name+'</span></div>\n' +
        '                <div style="margin-top: 20px">播出时间：<span>'+obj[index].time+'</span></div>');

    $('#icon').html(arr1.join(''));
    $('#name').html(arr2.join(''))


    // $('#icon').innerHTML = ('<div class="mui-row mui-table-view mui-grid-view mui-grid-9 icon-center-div">\n' +
    //     '                    <li class="mui-table-view-cell mui-media" style="border: none">\n' +
    //     '                        <a href="#" onclick="">\n' +
    //     '                            <span class="tf-icon ' + obj[index].icon+ ' " ></span>\n' +
    //     '                            <div class="mui-media-body">' +obj[index].type +'</div>\n' +
    //     '                        </a>\n' +
    //     '                    </li>\n' +
    //     '                </div>');

    // $('#name').innerHTML = '<div >节目名称：<span>'+ obj[index].name+'</span></div>\n' +
    //     '                <div style="margin-top: 20px">播出时间：<span>'+obj[index].time+'</span></div>'
}

