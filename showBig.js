var isOpen = false;//isOpen 초기값을 지정
var bigPic = document.querySelector("#cup"); //id값 cup에 접근
var smallPics = document.querySelectorAll(".small");//class값 small에 접근

for(var i=0; i < smallPics.length; i++) {//노드 리스트의 각 요소에 접근
    smallPics[i].onclick = showBig;//요소를 누르면 showBig함수 실행
}

function showBig() {
    var newPic = this.src;//click 이벤트가 생긴 대상의 src속성 값을 가져온다
    bigPic.setAttribute("src", newPic);//newPic 값을 큰 이미지의 src 속성에 할당한다
}

var view = document.querySelector("#view");//id값 view에 접근
view.addEventListener("click", function(){//view를 눌렀을 때 실행할 함수를 선언한다
    if(isOpen == false) {
        document.querySelector("#detail").style.display = "block";//detail 값을 화면에 표시
        view.innerText = "상세 설명 닫기";//링크 내용을 수정한다
        isOpen = true;// 표시 상태로 지정한다
    }
    else{
       document.querySelector("#detail").style.display = "none";//detail 값을 화면에서 감춘다
       view.innerText = "상세 설명 보기";//링크 내용을 수정한다
       isOpen = false;//감춰진 상태로 지정한다
    }
});