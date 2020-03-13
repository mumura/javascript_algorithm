var itemList = []; //목록을 저장할 변수
var addBtn = document.querySelector("#add");//#add인 요소를 가져와 addBtn으로 저장
addBtn.addEventListener("click", addList);//addBtn을 클릭하면 addList 함수 실행
function addList(){//목록을 쌓아줄 함수
    var item = document.querySelector("#item").value;//텍스트 필드 내용 가져옴
    if (item != null){//아이템값 이 유효하지 않지 않으면 실행
        itemList.push(item);//itemList 배열 끝에 item 추가
        document.querySelector("#item").value = "";//id = "item"인 요소 값을 지움
        document.querySelector("#item").focus();//텍스트 필드에 focus()함수 적용
    } 
    showList();//showList함수를 실행
}

function showList() {//화면에 목록을 보여줄 함수
    var list = "<ul>";//목록이 시작될때 <ul>태그를 붙임
    for (var i=0; i<itemList.length; i++) {//배열 요소마다 반복
        list += "<li>" + itemList[i] + "<span class='close' id="+i+">X</span></li>";//각요소를 <li></li>태크로 묶음, span 태그를 이용하여 프로그램이 제대로 삭제 가능하게 id값을 붙임
    }
    list += "</ul>";//for함수가 끝나면 </ul>태그를 붙임

    document.querySelector("#itemList").innerHTML = list;//list 변숫값 표시

    var remove = document.querySelectorAll(".close");//삭제 버튼을 변수로 저장, 배열 형태가 되게
        for(var i=0; i<remove.length; i++) {//remove 배열 요소마다 반복,확인
            remove[i].addEventListener("click",removeList)//요소를 확인하면 removeList()실행
        }
        function removeList(){//화면의 목록을 지워줄 함수
            var id = this.getAttribute("id");//this(누른 삭제 버튼)의 id값을 가져와 id 변수에 저장
            itemList.splice(id, 1);//itemList 배열에서 인덱스 값이 id인 요소 1개 삭제
            showList();//변경된 itemList 배열을 다시 화면에 표시
        }
}

