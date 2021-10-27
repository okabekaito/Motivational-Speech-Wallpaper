function motivationalSpeechWallpaper(wallpaperObject,domObj){

    //カードのdivタグを作成
    let cardDiv = document.createElement("div");
    cardDiv.classList.add("card");

    //imgタグを作成してimgUrlと繋げる
    let img = document.createElement("img");
    img.src = wallpaperObject.imgUrl;
    img.classList.add("card-img");

    //imgタグをcardDivに入れる
    cardDiv.append(img);

    //overlayDivタグを作成
    let overlayDiv = document.createElement("div");
    overlayDiv.classList.add("card-img-overlay","d-flex");

    //textDivタグを作成
    let textDiv = document.createElement("div");
    textDiv.classList.add("d-flex",wallpaperObject.topCenterBottomTable[wallpaperObject.topCenterBottom],wallpaperObject.leftCenterRightTable[wallpaperObject.leftCenterRight]);

    //h4タグを作成、カラーコードを繋げる
    let h4 = document.createElement("h4");
    h4.style = "color:#" + wallpaperObject.colorCode + ";";
    h4.innerHTML = wallpaperObject.text;

    //h4をtextDivに入れる
    textDiv.append(h4);
    //textDivをoverlayDivに入れる
    overlayDiv.append(textDiv);
    //overlayDivをcardDivに入れる
    cardDiv.append(overlayDiv);

    domObj.append(cardDiv);
    return domObj;
}
const domObj = document.getElementById("target");

class Wallpaper{
    constructor(text,colorCode,imgUrl,topCenterBottom ,leftCenterRight){
        this.text = text;
        this.colorCode = colorCode;
        this.imgUrl = imgUrl;
        this.topCenterBottom = topCenterBottom;
        this.leftCenterRight = leftCenterRight;
    }
    //垂直方向の位置
        topCenterBottomTable = {
            "top" : "align-items-start",
            "center" : "align-items-center",
            "bottom" : "align-items-end"
        }
    //水平方向の位置
        leftCenterRightTable ={
            "left" :  "justify-content-start",
            "center" :  "justify-content-center",
            "right" :  "justify-content-end",
        }

}

let wallpaper1 = new Wallpaper("Perfection is achieved, not when there is nothing more to add, but when there is nothing left to take away. - Antoine de Saint", "2c3e50", "https://recursionist.io/img/different-job.png", "center", "center");

let wallpaper2 = new Wallpaper("The scientist discovers a new type of material or energy and the engineer discovers a new use for it. - Gordon Lindsay Glegg", "2c3e50", "https://cdn.pixabay.com/photo/2018/02/23/04/38/laptop-3174729_1280.jpg", "bottom", "left");

let wallpaper3 = new Wallpaper("Scientists study the world as it is, engineers create the world that never has been. - Theodore von Karman", "ecf0f1", "https://cdn.pixabay.com/photo/2017/05/10/19/29/robot-2301646_1280.jpg", "top", "right");

motivationalSpeechWallpaper(wallpaper1,domObj);
motivationalSpeechWallpaper(wallpaper2,domObj);
motivationalSpeechWallpaper(wallpaper3,domObj);
