document.addEventListener('DOMContentLoaded',function(){
  var btn=document.querySelector('.nav-toggle');
  var nav=document.getElementById('primary-nav');
  if(btn&&nav){
    btn.addEventListener('click',function(){
      var expanded = btn.getAttribute('aria-expanded') === 'true';
      btn.setAttribute('aria-expanded', String(!expanded));
      if(nav.hasAttribute('hidden')) nav.removeAttribute('hidden'); else nav.setAttribute('hidden','');
    });
  }
  // Smooth scroll for internal links
  document.querySelectorAll('a[href^="#"]').forEach(function(a){
    a.addEventListener('click',function(e){
      var href=this.getAttribute('href');
      if(href.length>1){
        e.preventDefault();
        var el=document.querySelector(href);
        if(el) el.scrollIntoView({behavior:'smooth',block:'start'});
      }
    });
  });
});
