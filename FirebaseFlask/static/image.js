var ImgName, ImgUrl;
var files = [];
var reader;

document.getElementById("select").onclick = function (e) {
	var input = document.createElement('input');
	input.type ='file';
	//將選取的圖片顯示至網頁上
	input.onchange = e => {
		files = e.target.files;
		reader = new FileReader();
		reader.onload = function(){
			document.getElementById("myimg").src = reader.result;
		}
		reader.readAsDataURL(files[0]);
	}
	input.click();
}

document.getElementById('upload').onclick = function() {
	ImgName = document.getElementById('namebox').value;
	var uploadTask = firebase.storage().ref('Images/'+ ImgName +".png").put(files[0]);

	uploadTask.on(firebase.storage.TaskEvent.STATE_CHANGED,function(snapshot){
		var progress = (snapshot.bytesTranferred / snapshot.totalBytes) * 100;
		document.getElementById('UpProgress').innerHTML = 'Upload'+progress+'%';
	},
	//錯誤回報
	function(error){
		alert("上傳失敗");
	},
	//將上傳的圖片建立資料到database
	function(){
		uploadTask.snapshot.ref.getDownloadURL().then( function(url){
			ImgUrl = url;
			db.ref('Pictures/'+ImgName).set({
				Name : ImgName,
				Link : ImgUrl
			});
		alert("新增成功");
		});
	});
}

document.getElementById('retrieve').onclick = function(){
	ImgName = document.getElementById('namebox').value;
	db.ref('Pictures/'+ImgName).on('value',function(snapshot){
		document.getElementById('myimg').src = snapshot.val().Link;
	});
}