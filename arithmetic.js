//求解
function solve () {
	addClass(TBODY.rows[I+1].cells[K],'select-td');
	addClass(TBODY.rows[K+1].cells[J],'select-td');
	addClass(TBODY.rows[I+1].cells[J],'current-td');

	TBODY2.rows[2].cells[I].innerHTML = 'i';//I
	TBODY2.rows[2].cells[J].innerHTML = 'j+1';;//J+1
	TBODY2.rows[2].cells[K].innerHTML = 'k';//K
	var temp = C[I][J];
	if(C[I][J]==10000000){
		var li = document.createElement('li');
		li.innerHTML = 'Start Calculating '+'C['+(I+1)+']['+J+']'+'</br>';
	}else{
		li = LI;
	}
	
	
	var q = C[I][K] + C[K][J] + parseInt(M[I])*parseInt(M[K])*parseInt(M[J]);
	li.innerHTML += C[I][K]+'+'+C[K][J]+'+'+M[I]+'*'+M[K]+'*'+M[J]+' ='+q+'</br>';

	if(q < C[I][J]){
		li.innerHTML += 'C['+(I+1)+']['+J+']= '+q+'</br>';
	    TBODY.rows[I+1].cells[J].innerHTML = q;
	    C[I][J] = q;
	    
	}else{
		li.innerHTML += 'C['+(I+1)+']['+J+']= '+C[I][J]+'</br>';
	}
	LI = li;
	if(temp==10000000){
		OL.appendChild(LI);
	}
	
	LI.scrollIntoView();
	
}

function afterStep () {
	lasti = I;
	lastj = J;
	lastk = K;
	K++;
	if(K<J){
		return;
	}
	else{
		I++;
		if(I<M.length-L){
			J = I+L;
			C[I][J] = 10000000;
			K = I+1;
		}else{
			L++;
			if(L<M.length){
				I = 0;
				J = I+L;
				C[I][J] = 10000000;
				K = I+1;
			}else{
				console.log('carry out');
				
				if(state!='next'){
					setTimeout(function(){
						removeSelect();
						var li = document.createElement('li');
						li.innerHTML = 'Completed！';
						OL.appendChild(li);
						li.scrollIntoView();
						for( i = 0;i<C.length-1;i++){
						    console.log(C[i]);
						}
					},1000);
					setState('end');
				}
			}
		}
		
	}
}
