/* 수정의 저장 버튼 클릭 이벤트 */
$(document).on('click','article .up .head button',function(event) {
    event.preventDefault();
    up(); /* fire.dml */
});