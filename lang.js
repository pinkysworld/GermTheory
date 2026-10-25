(function(){
  var l;
  try{l=localStorage.getItem('gt_lang')}catch(e){}
  if(!l){l=(navigator.language||'de').slice(0,2)==='de'?'de':'en'}
  document.documentElement.lang=l;
  window.toggleLang=function(){
    l=l==='de'?'en':'de';document.documentElement.lang=l;
    try{localStorage.setItem('gt_lang',l)}catch(e){}
  };
})();
