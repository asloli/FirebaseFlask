function uploadImage(){
	//將圖片上傳至firebase #storage是儲存的語法
	const ref  = firebase.storage().ref();
	const file = document.querySelector("#photo").files[0];
	const name = new Date() + '-' + file.name;
	const matadata = {
		contentType: file.type
	};
	const task = ref.child(name).put(file,matadata);
	//#snapshot 是快取的語法
	task
	.then(snapshot => snapshot.ref.getDownloadURL())
	.then(url => {
		console.log(url);
		alert("圖片上傳成功");
		const image = document.querySelector('#image');
		image.src = url;
	});
};