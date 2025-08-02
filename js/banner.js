var doms = {
    bannerList : document.querySelector('.banner-list'),
    dots : document.querySelector('.dots'),
    prev : document.querySelector('.prev'),
    next : document.querySelector('.next')
}

var curIndex = 0

function init() {
    // 复制第一张图
    var first = doms.bannerList.firstElementChild.cloneNode(true)
    // 复制最后一张图
    var last = doms.bannerList.lastElementChild.cloneNode(true)
    // 将第一张图放到末尾
    doms.bannerList.append(first)
    // 将最后一张图放到第一张
    doms.bannerList.insertBefore(last, doms.bannerList.firstElementChild)
    // 设置最后一张复制图为绝对定位
    last.style.position = 'absolute'
    last.style.transform = 'translateX(-100%)'

}

function moveTo(index) {
    // 移动bannerList中的图片
    doms.bannerList.style.transform = `transLateX(-${index * 100}%)`
    doms.bannerList.style.transition = '0.5s'
    // 取消已显示圆点的状态
    var current = document.querySelector('.dots .current')
    current.classList.remove('current')
    // 设置当前圆点的状态
    doms.dots.children[index].classList.add('current')

    curIndex = index
}

// 箭头控制轮播
var count = doms.dots.children.length
function leftNext() {
    if (curIndex === 0){
        doms.bannerList.style.transform = `translateX(-${count *100}%)`
        doms.bannerList.style.transition = 'none'
        doms.bannerList.clientHeight // 强制渲染
        moveTo(count - 1)
    } else {
        moveTo(curIndex - 1)
    }
}
function rightNext() {
    if (curIndex === count - 1){
        doms.bannerList.style.transform = 'translateX(100%)'
        doms.bannerList.style.transition = 'none'
        doms.bannerList.clientHeight // 强制渲染
        moveTo(0)
    } else {
        moveTo(curIndex + 1)
    }
}

init()

// 小圆点控制轮播
Array.from(doms.dots.children).forEach((item, i) => {
    item.addEventListener('click', () => {
        moveTo(i)
        resetTimer()
    })
})

// 左箭头点击事件
doms.next.addEventListener('click', () => {
    rightNext()
    resetTimer()
})
// 右箭头点击事件
doms.prev.addEventListener('click', () => {
    leftNext()
    resetTimer()
})

// 自动轮播
var timer = setInterval(() => {
    rightNext()
}, 3000)


// 重置计时器
function resetTimer() {
    clearInterval(timer)
    timer = setInterval(() => {
        rightNext()
    }, 3000)
}