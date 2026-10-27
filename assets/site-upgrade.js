(()=>{
 const progress=document.createElement('div');progress.className='read-progress';progress.setAttribute('aria-hidden','true');document.body.append(progress);
 let queued=false;function update(){queued=false;const h=document.documentElement;progress.style.width=(100*Math.min(1,Math.max(0,h.scrollTop/Math.max(1,h.scrollHeight-innerHeight))))+'%'}
 window.addEventListener('scroll',()=>{if(!queued){queued=true;requestAnimationFrame(update)}},{passive:true});update();
 const story=document.getElementById('about'), article=story?.querySelector('.article');if(!story||!article)return;
 const bar=document.createElement('div');bar.className='reading-tools';bar.setAttribute('aria-label','Reading preferences');const button=document.createElement('button');button.type='button';button.textContent='Comfort reading mode';button.setAttribute('aria-pressed','false');const note=document.createElement('small');note.textContent='Adjusts article spacing and text size only.';bar.append(button,note);article.prepend(bar);
 const key='hidden-player-reading-2026';let active=false;try{active=localStorage.getItem(key)==='1'}catch{};
 const apply=()=>{document.body.classList.toggle('reading-mode',active);button.setAttribute('aria-pressed',String(active));button.textContent=active?'Comfort mode on':'Comfort reading mode'};apply();button.addEventListener('click',()=>{active=!active;apply();try{localStorage.setItem(key,active?'1':'0')}catch{}})
})();