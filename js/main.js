!function(){
    var duration = 50
    $('.actions').on('click', 'button', function(e){
        let $button = $(e.currentTarget)    // button
        // 获取点击元素的data-speed属性
        let speed = $button.attr('data-speed')
        $button.addClass('active').siblings('active').removeClass('active')
        switch(speed){
            case 'slow':
                duration = 100;
                break;
            case 'normal':
                duration = 50;
                break;
            case 'fast':
                duration = 10;
                break;
        }
    })
    function writeCode(prefix, code, fn){
        let container = document.querySelector('#code')
        let styleTag = document.querySelector('#styleTag')
        let n = 0
        let id = setTimeout(function run(){
            n += 1
            container.innerHTML = code.substring(0, n)
            styleTag.innerHTML = code.substring(0, n)
            container.scrollTop = container.scrollHeight
            if( n < code.length){
                id = setTimeout(run, duration)
            }else{
                // &&操作符，运行的是最后一个为真的
                // 下面这个代码可以理解为，如果fn有就call一下fn
                fn && fn.call()
            }
        }, duration)
    }
    let code = `
/*
 * 首 先 ，需 要 准 备 皮 卡 丘 的 皮
 */
.preview{
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    background: #FEE433;
}
.wrapper{
    width: 100%;
    height: 165px;
    position: relative;
}
/*
 * 接 下 来 ，画 皮 卡 丘 的 鼻 子
 */
.nose{
    border-style: solid;
    border-color: black transparent transparent;
    border-radius: 12px;
    border-width: 12px;
    position: absolute;
    top: 28px;
    /*left:50%指的是div左边距离父元素左边50%，但是其实不是中线对齐，我们需要添加一个负的margin-left*/
    left: 50%;
    /* margin-left: -12px; */
    /*或者使用下面这个也是可以的*/
    transform: translateX(-50%);
}
/*
 * 接 下 来 ，画 皮 卡 丘 的 眼 睛
 */
.eye{
    width: 49px;
    height: 49px;
    background: #2E2e2e;
    position: absolute;
    border-radius: 49px;
    border: 2px solid #000000;
}
/*
 * 眼 睛 滴 溜 溜 的
 */
.eye::before{
    content: '';
    display: block;
    width: 24px;
    height: 24px;
    background: white;
    border-radius: 24px;
    position: absolute;
    left: 6px;
    top: -1px;
    border: 2px solid #000000;
}
/*
 * 左 眼 在 左 边
 */
.eye.left{
    right: 50%;
    margin-right: 90px;
}
/*
 * 右 眼 在 右 边
 */
.eye.right{
    left: 50%;
    margin-left: 90px;
}
/*
 * 然 后 ，画 皮 卡 丘 的 脸
 */
.face{
    width: 68px;
    height: 68px;
    background: #FC0D1C;
    border: 2px solid black;
    border-radius: 50%;
    position: absolute;
    top: 85px;
}
/*
 * 将 脸 放 到 正 确 的 位 置
 */
.face.left{
    right: 50%;
    margin-right: 116px;
}
.face.right{
    left: 50%;
    margin-left: 116px;
}
/*
 * 上 嘴 唇
 */
.upperLip{
    height: 25px;
    width: 80px;
    border: 2px solid black;
    background: #FEE433;
    position: absolute;
    top: 50px;
}
.upperLip.left{
    right: 50%;
    border-bottom-left-radius: 40px 25px;
    border-top: none;
    border-right: none;
    transform: rotate(-20deg);
}
.upperLip.right{
    left: 50%;
    border-bottom-right-radius: 40px 20px;
    border-top: none;
    border-left: none;
    transform: rotate(20deg);
}
/*
 * 下 嘴 唇
 */
.lowerLip-wrapper{
    bottom: 0;
    position: absolute;
    left: 50%;
    margin-left: -150px;
    height: 110px;
    width: 300px;
    overflow: hidden;
}
.lowerLip{
    height: 3500px;
    width: 300px;
    background: #990513;
    border-radius: 200px/2000px;
    border: 2px solid black;
    position: absolute;
    bottom: 0;
    overflow: hidden;
}
/*
 * 小 舌 头
 */
.lowerLip::after{
    content: '';
    position: absolute;
    bottom: -20px;
    width: 100px;
    height: 100px;
    background: #FC4A62;
    left: 50%;
    margin-left: -50px;
    border-radius: 50px;
}
/*
 * 好 了，这 只 皮 卡 丘 送 给 你
 */
    `
    writeCode('', code)
}.call()
