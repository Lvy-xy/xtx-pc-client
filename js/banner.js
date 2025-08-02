var doms = {
    bannerList : document.querySelector('.banner-list'),
    dots : document.querySelector('.dots'),
    prev : document.querySelector('.prev'),
    next : document.querySelector('.next')
}

function moveTo(index) {

    // 移动bannerList中的图片
    doms.bannerList.style.transform = `transLateX(-${index * 100}%)`

    // 取消已显示圆点的状态
    var current = document.querySelector('.dots .current')
    current.classList.remove('current')

    // 设置当前圆点的状态
    doms.dots.children[index].classList.add('current')
}

// 小圆点控制轮播
Array.from(doms.dots.children).forEach((item, i) => {
    item.addEventListener('click', () => {
        moveTo(i)
    })
})

// 箭头控制轮播
doms.prev.addEventListener('click', () => {
    // 获取当前显示的圆点
    var current = document.querySelector('.dots .current')
    var index = Array.from(doms.dots.children).indexOf(current)
    // 计算下一个圆点的索引
    var nextIndex = index - 1 < 0 ? 0 : index - 1
    // 移动到下一个圆点
    moveTo(nextIndex)
})

doms.next.addEventListener('click', () => {
    // 获取当前显示的圆点
    var current = document.querySelector('.dots .current')
    var index = Array.from(doms.dots.children).indexOf(current)
    // 计算下一个圆点的索引
    var nextIndex = index + 1 > Array.from(doms.dots.children).length - 1 ? Array.from(doms.dots.children).length - 1 : index + 1
    // 移动到下一个圆点
    moveTo(nextIndex)
})
