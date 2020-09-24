export default function(){
        var icon = document.getElementById('menu-icon')
				var box = document.getElementById('box')
				var move = false
				var change = function(){
					move = !move
					if(move){
						box.setAttribute('class','box-move')
					}else{
						box.removeAttribute('class','box-move')
					}
				}
				return icon.onclick = ()=>{
					change()
				}
}

