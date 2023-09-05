import "./BottonMove.css";
let target = document.querySelector('.button-wrap');
let elemData;

// マウスカーソルがボタンに乗ったら
target.addEventListener("mouseenter", e => {
    elemData = target.getBoundingClientRect();
})

// マウスカーソルがボタンの上を動いたら
target.addEventListener("mousemove", e => {

    // X軸の値 = マウスカーソルのX座標 - ボタン横幅の半分 - ボタンのX座標
    let transX = ((e.clientX - (elemData.width / 2)) - elemData.left);

    // Y軸の値 = マウスカーソルのY座標 - ボタン縦幅の半分 - ボタンのY座標
    let transY = ((e.clientY - (elemData.height / 2)) - elemData.top);

    // ボタンのtransformのtranslateにそれぞれの値を入れる
    target.style.transform = "translate(" + transX + "px, " + transY + "px)";

})

// マウスカーソルがボタンから離れたら
target.addEventListener("mouseleave", e => {

    // マウスカーソルがボタンから離れたらtransformのtranslateを0に戻す
    target.style.transform = "translate(0px, 0px)";

})
function BottonMove() {
    return (
        <div class="container">
            <a href="#" class="button-wrap js-move">
                <div class="button">ボタン</div>
            </a>
        </div>
    )
};

export default BottonMove;