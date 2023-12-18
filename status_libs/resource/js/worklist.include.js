/**
* worklist.include
* --------------------------------------
* @version 2.0.0
* @author Goang
*/


/**
* include
* --------------------------------------
*/

function inc_filter(){
	var str='';
	str+='		<h2>Filter.</h2>';
	str+='		<table width="" summary="퍼블리싱 문서 규격 및 크로스브라우징 관련">';
	str+='		<caption>문서 정보</caption>';
	str+='		<colgroup><col width="110px" /><col width="atuo" /></colgroup>';
	str+='		<tbody>';

	str+='			<tr>';
	str+='				<th rowspan="2"><span class="total_rate">&nbsp;<span></th>';
	str+='				<td class="filterOption">';
	str+='					<p><strong>* Delete :</strong>';
	str+='						<label><input type="radio" name="ch_del" id=del01 value="true"  /> 포함</label>';
	str+='						<label><input type="radio" name="ch_del" id="del02" value="false" checked/> 제외</label>';
	str+='					</p>';
	/*
	str+='					<p class="ml10"><strong>* Group :</strong>';
	str+='						<label><input type="radio" name="ch_group" id="gropu01" value="true" checked /> Yes</label>';
	str+='						<label><input type="radio" name="ch_group" id=gropu02 value="false"  /> No</label>';
	str+='					</p>';
	str+='				</td>';
	*/
	str+='			</tr>';

	str+='			<tr>';
	str+='				<td class="filter_btn">';
	// str+='					<div><a href="javascript:void(0);" class="equal btn bullet" title="equal"><span>동일</span></a>';
	// str+='					<a href="javascript:void(0);" class="rework btn bullet" title="rework"><span>재확인</span></a>';
	// str+='					<a href="javascript:void(0);" class="layer btn bullet" title="layer"><span>레이어</span></a>';
	// str+='					<a href="javascript:void(0);" class="real btn bullet" title="real"><span>삭제제외</span></a>';
	
	str+='					<a href="javascript:void(0);" class="total btn bullet on" title="total"><span>Total</span></a>';
	str+='					<a href="javascript:void(0);" class="result btn bullet" title="result"><span>완료</span></a>';
	str+='					<a href="javascript:void(0);" class="result_ex btn bullet" title="result_ex"><span>미완</span></a>';
	str+='					<a href="javascript:void(0);" class="new btn bullet" title="new"><span>신규</span></a></div>';
	str+='					<a href="javascript:void(0);" class="popup btn bullet" title="popup"><span>팝업</span></a>';
	str+='					<a href="javascript:void(0);" class="hold btn bullet" title="hold"><span>보류</span></a>';
	str+='					<a href="javascript:void(0);" class="del btn bullet" title="del"><span>삭제</span></a>';
	str+='				</td>';
	str+='			</tr>';

	str+='			<tr>';
	str+='				<th><label for="id_search">Search</label></th>';
	str+='				<td class="search">';
	str+='					<input type="text" name="search" value="" id="id_search" placeholder="Search" />';
	str+='				</td>';
	str+='			</tr>';
	str+='			<tr>';
	str+='				<th><label for="searchResult">Result</label></th>';
	str+='				<td class="search">';
	str+='					<div id="searchResult" style="height:30px;font-size:20px;"></div>';
	str+='				</td>';
	str+='			</tr>';
	str+='		</tbody>';
	str+='		</table>';
	document.write(str);
}


function inc_IAHead(){
	var str='';
	str+='<colgroup>';
	str+='	<col style="width:40px;" /><!-- 번호 -->';
	str+='	<col class="depth2" style="width:9%" /><!-- 2Depth -->';
	str+='	<col class="depth3" style="width:9%" /><!-- 3Depth -->';
	str+='	<col class="depth4" style="width:9%" /><!-- 4Depth -->';
	str+='	<col class="depth5" style="width:9%" /><!-- 5Depth -->';
	str+='	<col class="path" style="width:10%" /><!-- 파일경로 -->';
	str+='	<col class="person" style="width:70px" /><!-- 담당자 -->';
	str+='	<col class="rdate" style="min-width:75px;width:5%" /><!-- 완료일 -->';
	str+='	<col class="mdate" style="min-width:75px;width:5%" /><!-- 수정일 -->';
	str+='	<col class="etc" style="width:auto" /><!-- 비고 -->';
	str+='</colgroup>';
	str+='<thead>';
	str+='	<tr>';
	str+='		<th scope="col" class="num">No</th>';
	str+='		<th scope="col" class="depth2">2Depth</th>';
	str+='		<th scope="col" class="depth3">3Depth ID</th>';
	str+='		<th scope="col" class="depth4">4Depth</th>';	
	str+='		<th scope="col" class="depth5">5Depth</th>';
	str+='		<th scope="col" class="path">파일경로</th>';
	str+='		<th scope="col" class="person">담당자</th>';
	str+='		<th scope="col" class="rdate">완료일</th>';
	str+='		<th scope="col" class="mdate">수정일</th>';
	str+='		<th scope="col" class="etc">비고</th>';
	str+='	</tr>';
	str+='</thead>';
	document.write(str);
}


function inc_IAHead_guide(){
	var str='';
	str+='<caption>작업 리스트</caption>';
	str+='<colgroup>';
	str+='	<col width="3%" /><!-- 번호 -->';
	str+='	<col class="depth2" style="width:9%" /><!-- 2Depth -->';
	str+='	<col class="depth3" style="width:9%" /><!-- 3Depth -->';
	str+='	<col class="depth4" style="width:9%" /><!-- 4Depth -->';
	str+='	<col class="depth5" style="width:18%" /><!-- Page -->';
	str+='	<col class="path" style="width:10%" /><!-- 경로 -->';
	str+='	<col class="rdate" style="width:4%" /><!-- 완료일 -->';
	str+='	<col class="mdate" style="width:4%" /><!-- 수정일 -->';
	str+='	<col class="etc" style="width:auto" /><!-- 비고 -->';
	str+='</colgroup>';
	str+='<thead>';
	str+='	<tr>';
	str+='		<th scope="col" class="num">No</th>';
	str+='		<th scope="col" class="depth2">Level2</th>';
	str+='		<th scope="col" class="depth3">Level3</th>';
	str+='		<th scope="col" class="depth4">Level4</th>';
	str+='		<th scope="col" class="depth5">Page</th>';
	str+='		<th scope="col" class="path">Path</th>';
	str+='		<th scope="col" class="rdate">End</th>';
	str+='		<th scope="col" class="mdate">Modify</th>';
	str+='		<th scope="col" class="etc">Etc</th>';
	str+='	</tr>';
	str+='</thead>';
	document.write(str);
}
