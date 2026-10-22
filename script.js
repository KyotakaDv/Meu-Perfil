(function(){
  var el=document.getElementById('typed'), t='Júlio Filho', i=0, d=1;
  (function step(){
    i+=d;
    el.textContent=t.slice(0,i);
    var wait=120;
    if(i>=t.length){d=-1;wait=2000}
    else if(i<=0){d=1;wait=600}
    else if(d<0){wait=70}
    setTimeout(step,wait);
  })();
})();
