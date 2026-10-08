var pop=document.getElementById('pop');
setTimeout(function(){pop.classList.add('show')},1500);
document.getElementById('pc').onclick=function(){pop.classList.remove('show')};
document.getElementById('px').onclick=function(){pop.classList.remove('show')};
document.getElementById('y').textContent=new Date().getFullYear();
document.getElementById('f').addEventListener('submit',function(e){e.preventDefault();document.getElementById('m').style.display='block';this.reset()});
