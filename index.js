const silder = document.querySelector('.silder')
const mask = document.querySelector('.mask')
const text = document.querySelector('p')
const front = document.querySelector('.front')
const end = document.querySelector('.end')

let moveX
let success = false

silder.onmousedown = (e) => {
  let preX = e.clientX
  // 鼠标按下并且移动时
  document.onmousemove = function (e) {
    silder.style.transition = ''
    mask.style.transition = ''
    let curX = e.clientX
    moveX = curX - preX
    if (moveX < 0) {
      moveX = 0
    } else if (moveX > 380) {
      // 用边框宽度减去滑块宽度 420-40=380
      moveX = 380
      front.style.display = 'none'
      end.style.display = 'block'
      text.innerText = '验证成功'
      success = true
      // 验证成功后，移除鼠标按下和移动
      silder.onmousedown = null
      document.onmousemove = null
    }
    silder.style.left = moveX + 'px'
    mask.style.width = moveX + 'px'
  }
}

document.onmouseup = function () {
  // 鼠标抬起时，移除鼠标移动
  document.onmousemove = null
  if (!success) {
    silder.style.left = 0
    mask.style.width = 0
    silder.style.transition = 'left .5s'
    mask.style.transition = 'width .5s'
  }
}