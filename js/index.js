
function loading(msg,func) {
    mui.showLoading(msg,'div')
    setTimeout(() => {
        mui.hideLoading()
        if (func){
            func();
        }
    },3000)
}
function connectTV() {

    loading('正在连接电视...')
    setTimeout(() => {
        mui.toast('已经成功连接电视!',{ duration:'long', type:'div' })
    },5000)

}

function switchOnOff() {
    var bool = $('#my_switch').hasClass('icon-switch-on');

    if(bool){
        loading('请稍后...',() => {
            mui.toast('电视已关闭!',{ duration:'long', type:'div' })
            $('#my_switch').removeClass('icon-switch-on');
            $('#my_switch').addClass('icon-switch-off')
        })



    }else{
        loading('请稍后...',() => {
            mui.toast('电视已开启!',{ duration:'long', type:'div' })
            $('#my_switch').removeClass('icon-switch-off');
            $('#my_switch').addClass('icon-switch-on')
        })

    }
}

function collectChannel() {

    var attributeName = $('#myChannel').attr('src');
    if (attributeName === 'images/no-collected.png'){
        $('#myChannel').attr('src','images/collected.png')
        mui.toast('收藏频道成功!',{duration:'long',type:'div'})
    }else {
        $('#myChannel').attr('src','images/no-collected.png')
        mui.toast('取消收藏频道成功!',{duration:'long',type:'div'})
    }
    console.log(attributeName)
}
function collectShow() {
    var attributeName = $('#myShow').attr('src');
    if (attributeName === 'images/no-collected.png'){
        $('#myShow').attr('src','images/collected.png')
        mui.toast('收藏节目成功!',{duration:'long',type:'div'})
    }else {
        $('#myShow').attr('src','images/no-collected.png')
        mui.toast('取消收藏节目成功!',{duration:'long',type:'div'})
    }
    console.log(attributeName)
}

function up() {
    console.log('you have clicked the up button')
}
function down() {
    console.log('you have clicked the down button')
}
function left() {
    console.log('you have clicked the left button')
}
function right() {
    console.log('you have clicked the right button')
}
function ok() {
    console.log('you have clicked the ok button')
}function volumeUp() {
    console.log('you have increase volume')
}function volumeDown() {
    console.log('you have lower the volume')
}


$('#mySelect').change(function () {
    var value = $('#mySelect').val();
    console.log(value)
})
