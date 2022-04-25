function changeUrl(val) {
	document.getElementById("goUrl").href = val;
if (val == "") {
	document.getElementById("goUrl").href = "#";
	document.getElementById("goUrl").target = "";
} else {
	document.getElementById("goUrl").target = "_blank";
	}
}
function popup_open(){
		document.getElementById("divpop").style.display = "block";
		}
	function popup_close(){
		document.getElementById("divpop").style.display = "none";
		}