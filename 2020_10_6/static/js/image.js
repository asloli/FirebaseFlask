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
//第四頁中按新增，圖片上傳至Storage並儲存database
document.getElementById('upload').onclick = function() {
	ImgName = document.getElementById('namebox').value; //商品名稱
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
				ImgName:{
				Link : ImgUrl,
				Name : ImgName,
				Price : document.getElementById('price').value,
				MNumber : document.getElementById('must_items').value,
				BNumber : document.getElementById('buyable_items').value
				}
			});
		alert("新增成功");
		});
	});
}