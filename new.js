let plus=document.getElementById("ics");
	let tax=document.getElementById("tex");
	let sub=document.getElementById("sub");
	
	plus.addEventListener("click",additionall);
	function additionall(){
		tax .value = parseInt(tax.value)+1;
		}
	
	sub.addEventListener("click",additionall1);
	function additionall1(){
		if(tax.value > 0)
		{
		tax.value=parseInt(tax.value)-1;
		}
		}