var arr=[11,10,70,75,59,2,4];
document.write("arr=[11,10,70,75,59,2,4]"+"<br>"+"<br>");
count=0;
for(let i=0; i<arr.length; i++){
		if(arr[i]%2!=0){
			count++;
			
		}

}
		document.write(count);