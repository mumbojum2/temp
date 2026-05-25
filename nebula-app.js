(function() {
  const styles = `*{margin:0;padding:0;box-sizing:border-box}body{font-family:'Segoe UI','Inter',system-ui,sans-serif;height:100vh;width:100vw;overflow:hidden;background:#0b0c1a;display:flex}.animated-bg{position:fixed;top:0;left:0;width:100%;height:100%;z-index:0;background:radial-gradient(circle at 30% 40%,#1e1f3a,#0b0c1a 80%);animation:bgPulse 8s ease-in-out infinite alternate}@keyframes bgPulse{0%{background:radial-gradient(circle at 30% 40%,#2a2b5e,#0b0c1a 80%)}100%{background:radial-gradient(circle at 70% 60%,#1e1f5a,#0b0c1a 85%)}}#particle-canvas{position:fixed;top:0;left:0;width:100%;height:100%;z-index:1;pointer-events:none}.splash-screen{position:fixed;top:0;left:0;width:100%;height:100%;background:#0b0c1a;display:flex;flex-direction:column;align-items:center;justify-content:center;z-index:1000;transition:opacity .8s ease,visibility .8s;backdrop-filter:blur(12px)}.splash-screen.hidden{opacity:0;visibility:hidden;pointer-events:none}.splash-logo{font-size:clamp(3rem,10vw,5.5rem);font-weight:700;letter-spacing:4px;background:linear-gradient(135deg,#a18cd1,#fbc2eb,#84fab0);-webkit-background-clip:text;-webkit-text-fill-color:transparent;background-clip:text;margin-bottom:1.2rem;animation:glowText 2.4s ease-in-out infinite alternate}@keyframes glowText{0%{filter:drop-shadow(0 0 8px #a18cd1aa)}100%{filter:drop-shadow(0 0 20px #fbc2ebcc)}}.splash-sub{color:rgba(255,255,255,.75);font-size:1.2rem;letter-spacing:2px;border-top:1px solid rgba(255,255,255,.25);padding-top:1.2rem;margin-top:.8rem;font-weight:300}.loader-dot{margin-top:2.5rem;display:flex;gap:12px}.loader-dot span{width:10px;height:10px;background:#fff;border-radius:50%;animation:bounceDot 1.2s infinite ease-in-out}.loader-dot span:nth-child(2){animation-delay:.15s}.loader-dot span:nth-child(3){animation-delay:.3s}@keyframes bounceDot{0%,80%,100%{transform:translateY(0);opacity:.6}40%{transform:translateY(-16px);opacity:1}}.app-container{position:relative;z-index:10;display:flex;width:100%;height:100%}.tab-sidebar{width:230px;min-width:230px;background:rgba(15,17,30,.7);backdrop-filter:blur(20px);-webkit-backdrop-filter:blur(20px);border-right:1px solid rgba(255,255,255,.12);display:flex;flex-direction:column;box-shadow:4px 0 25px rgba(0,0,0,.5);z-index:20;transition:transform .35s cubic-bezier(.23,1,.32,1),margin-left .35s;transform:translateX(0);margin-left:0}.tab-sidebar.hidden{transform:translateX(-100%);margin-left:-230px}.sidebar-header{padding:1.8rem 1.2rem 1rem;font-weight:600;font-size:1.1rem;color:rgba(255,255,255,.85);letter-spacing:1px;border-bottom:1px solid rgba(255,255,255,.1);text-align:center}.tab-list{flex:1;overflow-y:auto;padding:.8rem .5rem;display:flex;flex-direction:column;gap:.4rem}.tab-item{display:flex;align-items:center;justify-content:space-between;padding:.8rem 1rem;border-radius:1.2rem;background:rgba(255,255,255,.04);border:1px solid transparent;color:rgba(255,255,255,.7);cursor:pointer;transition:all .2s ease;font-size:.9rem;white-space:nowrap}.tab-item:hover{background:rgba(255,255,255,.1);color:#fff}.tab-item.active{background:rgba(130,100,255,.25);border-color:rgba(200,180,255,.5);color:#fff;font-weight:500}.tab-title{display:flex;align-items:center;gap:8px;overflow:hidden;text-overflow:ellipsis}.tab-close{background:0 0;border:none;color:rgba(255,255,255,.5);font-size:1.2rem;cursor:pointer;padding:0 4px;border-radius:50%;transition:.15s;line-height:1;visibility:hidden}.tab-item:hover .tab-close,.tab-item.active .tab-close{visibility:visible}.tab-close:hover{color:#fff;background:rgba(255,255,255,.15)}.tab-item.home-tab .tab-close{display:none}.sidebar-toggle{position:fixed;top:20px;left:20px;z-index:50;background:rgba(20,20,40,.8);backdrop-filter:blur(12px);border:1px solid rgba(255,255,255,.2);color:#fff;border-radius:50%;width:42px;height:42px;display:flex;align-items:center;justify-content:center;cursor:pointer;font-size:1.3rem;transition:opacity .3s,transform .3s;opacity:0;pointer-events:none;transform:scale(.8)}.sidebar-toggle.visible{opacity:1;pointer-events:auto;transform:scale(1)}.main-content{flex:1;position:relative;background:0 0;display:flex;align-items:center;justify-content:center}.home-panel{background:rgba(20,22,40,.45);backdrop-filter:blur(18px);-webkit-backdrop-filter:blur(18px);border-radius:3rem;padding:2rem 2.5rem;box-shadow:0 30px 50px rgba(0,0,0,.6),0 0 0 1px rgba(255,255,255,.08);display:flex;flex-wrap:wrap;align-items:center;justify-content:center;gap:2.5rem;border:1px solid rgba(255,255,255,.1);transition:transform .3s ease;max-width:95vw}.home-panel:hover{transform:scale(1.01);box-shadow:0 35px 60px rgba(0,0,0,.7),0 0 0 1px rgba(255,255,255,.15)}.button-section{display:flex;flex-direction:column;align-items:center;gap:1rem}.glass-btn{background:rgba(255,255,255,.08);backdrop-filter:blur(12px);-webkit-backdrop-filter:blur(12px);border:1px solid rgba(255,255,255,.2);border-radius:3rem;padding:1rem 2.2rem;font-size:1.2rem;font-weight:550;color:rgba(255,255,255,.9);letter-spacing:.5px;cursor:pointer;transition:all .25s ease;box-shadow:0 10px 20px -8px rgba(0,0,0,.4);display:flex;align-items:center;gap:.5rem;white-space:nowrap}.glass-btn:hover{background:rgba(255,255,255,.18);border-color:rgba(255,255,255,.45);color:#fff;transform:translateY(-3px);box-shadow:0 18px 28px -8px rgba(0,0,0,.6),0 0 18px rgba(168,140,255,.5)}.glass-btn:active{transform:translateY(2px);box-shadow:0 6px 12px rgba(0,0,0,.5);transition:.05s}.headlines-section{position:relative;min-width:320px;flex:1}.headlines-header{display:flex;justify-content:space-between;align-items:center;margin-bottom:1rem;color:rgba(255,255,255,.8);font-size:1rem;font-weight:500}.refresh-btn{background:rgba(255,255,255,.1);border:1px solid rgba(255,255,255,.2);color:#fff;font-size:1.2rem;border-radius:50%;width:34px;height:34px;display:flex;align-items:center;justify-content:center;cursor:pointer;transition:all .2s;backdrop-filter:blur(8px)}.refresh-btn:hover{background:rgba(255,255,255,.25);transform:rotate(90deg)}.headlines-grid{display:flex;flex-direction:column;gap:.8rem;max-height:420px;overflow-y:auto;padding-right:6px}.news-card{display:flex;background:rgba(255,255,255,.06);backdrop-filter:blur(10px);-webkit-backdrop-filter:blur(10px);border:1px solid rgba(255,255,255,.15);border-radius:1.2rem;overflow:hidden;cursor:pointer;transition:all .25s;box-shadow:0 8px 18px -6px rgba(0,0,0,.4)}.news-card:hover{background:rgba(255,255,255,.12);border-color:rgba(255,255,255,.35);transform:translateY(-2px);box-shadow:0 12px 24px -8px rgba(0,0,0,.6),0 0 14px rgba(140,120,255,.4)}.news-card img{width:90px;height:90px;object-fit:cover;border-right:1px solid rgba(255,255,255,.1)}.card-body{padding:.7rem .9rem;display:flex;flex-direction:column;justify-content:center;flex:1}.card-title{font-size:.85rem;font-weight:600;color:#fff;line-height:1.3;margin-bottom:.25rem;display:-webkit-box;-webkit-line-clamp:2;-webkit-box-orient:vertical;overflow:hidden}.card-desc{font-size:.7rem;color:rgba(255,255,255,.65);line-height:1.3;display:-webkit-box;-webkit-line-clamp:2;-webkit-box-orient:vertical;overflow:hidden}.news-loading{color:rgba(255,255,255,.6);font-style:italic}.iframe-container{position:absolute;top:0;left:0;width:100%;height:100%;background:#04050a;display:none}.iframe-container.active{display:block}.iframe-container iframe{width:100%;height:100%;border:none}@media(max-width:850px){.home-panel{flex-direction:column;align-items:center}.headlines-section{min-width:280px}}`;

  const html = '<div class="animated-bg"></div><canvas id="particle-canvas"></canvas><div id="splashScreen" class="splash-screen"><div class="splash-logo">✦ NEBULA ✦</div><div class="splash-sub">SIDE·TAB·BROWSER</div><div class="loader-dot"><span></span><span></span><span></span></div></div><button class="sidebar-toggle" id="sidebarToggle">☰</button><div class="app-container"><div class="tab-sidebar" id="tabSidebar"><div class="sidebar-header">📑 Tabs</div><div class="tab-list" id="tabList"></div></div><div class="main-content" id="mainContent"><div id="homePanel" class="home-panel"><div class="button-section"><button class="glass-btn" id="btnOpenProxy"><span>🔗</span> Proxy</button></div><div class="headlines-section"><div class="headlines-header"><span>📰 Top Headlines</span><button class="refresh-btn" id="refreshNewsBtn">⟳</button></div><div class="headlines-grid" id="headlinesGrid"><div class="news-loading">Loading headlines…</div></div></div></div><div id="iframeContainer" class="iframe-container"><iframe id="contentIframe" src="about:blank" sandbox="allow-scripts allow-popups allow-forms"></iframe></div></div></div>';

  const root = document.getElementById('root');
  if (!root) { console.error('No #root'); return; }
  const styleTag = document.createElement('style');
  styleTag.textContent = styles;
  document.head.appendChild(styleTag);
  root.innerHTML = html;

  function initApp() {
    const splash = document.getElementById('splashScreen');
    setTimeout(function() { splash.classList.add('hidden'); }, 2400);

    const canvas = document.getElementById('particle-canvas');
    const ctx = canvas.getContext('2d');
    let W, H, particles = [];
    function rs() { W = innerWidth; H = innerHeight; canvas.width = W; canvas.height = H; }
    function Particle() {
      this.x = Math.random() * W; this.y = Math.random() * H;
      this.r = Math.random() * 2.2 + 0.8; this.sx = (Math.random() - 0.5) * 0.5;
      this.sy = (Math.random() - 0.5) * 0.5; this.o = Math.random() * 0.5 + 0.2;
    }
    Particle.prototype.update = function() {
      this.x += this.sx; this.y += this.sy;
      if (this.x < -5) this.x = W + 5; if (this.x > W + 5) this.x = -5;
      if (this.y < -5) this.y = H + 5; if (this.y > H + 5) this.y = -5;
    };
    Particle.prototype.draw = function(c) {
      c.beginPath(); c.arc(this.x, this.y, this.r, 0, Math.PI * 2);
      c.fillStyle = 'rgba(210,210,255,' + this.o + ')'; c.fill();
    };
    function iP(n) { particles = []; for (var i = 0; i < (n || 90); i++) particles.push(new Particle()); }
    function aP() { ctx.clearRect(0, 0, W, H); for (var i = 0; i < particles.length; i++) { particles[i].update(); particles[i].draw(ctx); } requestAnimationFrame(aP); }
    window.addEventListener('resize', function() { rs(); iP(); }); rs(); iP(); aP();

    const tl = document.getElementById('tabList'), hp = document.getElementById('homePanel'),
          ic = document.getElementById('iframeContainer'), ci = document.getElementById('contentIframe'),
          ts = document.getElementById('tabSidebar'), st = document.getElementById('sidebarToggle');
    var tabs = [], aid = null, tc = 0;
    tabs.push({ id: 'home', title: '🏠 Home', type: 'home', url: null, closable: false }); aid = 'home';

    function rT() {
      tl.innerHTML = '';
      for (var i = 0; i < tabs.length; i++) {
        (function(tab) {
          var d = document.createElement('div');
          d.className = 'tab-item' + (tab.id === aid ? ' active' : '') + (tab.id === 'home' ? ' home-tab' : '');
          d.setAttribute('data-tab-id', tab.id);
          var s = document.createElement('span'); s.className = 'tab-title'; s.textContent = tab.title; d.appendChild(s);
          if (tab.closable !== false) {
            var b = document.createElement('button'); b.className = 'tab-close'; b.innerHTML = '&times;';
            b.addEventListener('click', function(e) { e.stopPropagation(); cT(tab.id); }); d.appendChild(b);
          }
          d.addEventListener('click', function() { sT(tab.id); }); tl.appendChild(d);
        })(tabs[i]);
      }
    }
    function sT(id) { if (aid === id) return; aid = id; uCV(); rT(); uSV(); }
    function cT(id) {
      var tab = null, idx = -1;
      for (var i = 0; i < tabs.length; i++) { if (tabs[i].id === id) { tab = tabs[i]; idx = i; break; } }
      if (!tab || tab.id === 'home') return;
      tabs.splice(idx, 1);
      if (aid === id) aid = tabs.length > 0 ? tabs[Math.max(0, idx - 1)].id : 'home';
      uCV(); rT(); uSV();
    }
    function oNT(url, title) { tc++; var id = 'tab-' + Date.now() + '-' + tc; tabs.push({ id: id, title: title, type: 'web', url: url, closable: true }); aid = id; uCV(); rT(); uSV(); }
    function uCV() {
      var tab = null; for (var i = 0; i < tabs.length; i++) { if (tabs[i].id === aid) { tab = tabs[i]; break; } }
      if (!tab) { aid = 'home'; uCV(); return; }
      if (tab.type === 'home') { hp.style.display = 'flex'; ic.classList.remove('active'); }
      else { hp.style.display = 'none'; ic.classList.add('active'); if (ci.src !== tab.url) ci.src = tab.url; }
    }
    function uSV() { if (aid === 'home') { ts.classList.remove('hidden'); st.classList.remove('visible'); } else { st.classList.add('visible'); ts.classList.add('hidden'); } }
    st.addEventListener('click', function() { if (aid === 'home') return; ts.classList.toggle('hidden'); });
    rT(); uCV(); uSV();

    document.getElementById('btnOpenProxy').addEventListener('click', function() { oNT('https://cdn.jsdelivr.net/gh/mumbojum2/npmprox@main/logo.svg', '🔗 Proxy'); });

    var SA = [
      { title: "Hunger strike continues at NJ ICE detention center as congressmembers visit", description: "Sen. Andy Kim and Rep. Rob Menendez said striking immigrant detainees remain resolute; families say they face retaliation from facility staff.", url: "https://gothamist.com/news/hunger-strike-continues-at-nj-ice-detention-center-as-congressmembers-visit", image: "https://api-prod.gothamist.com/images/357235/fill-1200x650|format-webp|webpquality-85/" },
      { title: "Fake ICE agents terrorize immigrants amid Trump's crackdown", description: "A Noticias Telemundo investigation documented a marked increase in cases of people posing as federal agents to rob, intimidate and even injure and rape immigrants.", url: "https://www.nbcnews.com/news/us-news/ice-impersonators-immigrants-raids-violence-trump-administration-rcna265653", image: "https://media-cldnry.s-nbcnews.com/image/upload/t_nbcnews-fp-1200-630,f_auto,q_auto:best/rockcms/2026-05/260429-ICE-imposters-V2-jg-799ad7.jpg" },
      { title: "Trump Says Iran Talks 'Proceeding Nicely' as Deal Appears Closer", description: "US President Donald Trump said negotiations with Iran over an interim deal to extend their ceasefire and reopen the Strait of Hormuz were 'proceeding nicely.'", url: "https://www.bloomberg.com/news/articles/2026-05-25/us-iran-edge-closer-to-deal-but-still-need-to-negotiate-points", image: "https://assets.bwbx.io/images/users/iqjWHBFdfxIU/i9zgZrB1Reqc/v0/1200x800.jpg" },
      { title: "NCAA baseball tournament bracket projection before field announcement", description: "The NCAA baseball tournament bracket will be unveiled Monday.", url: "https://www.usatoday.com/story/sports/college/baseball/2026/05/25/ncaa-baseball-tournament-bracket-projection-field-final/90248047007/", image: "https://www.usatoday.com/gcdn/authoring/authoring-images/2026/05/25/USAT/90248070007-usatsi-28786624.jpg" },
      { title: "American Music Awards airing tonight with performances from Billy Idol, Keith Urban, Teyana Taylor and more", description: "The American Music Awards celebrate fan favorites.", url: "https://www.cbsnews.com/news/american-music-awards-2026-performances/", image: "https://assets1.cbsnewsstatic.com/hub/i/r/2026/05/22/a80bcba4-b969-4690-9c39-149ca7800e2c/thumbnail/1200x630g2/fb42be024799cee507cf6b7fbfdbb831/untitled-design-1.png" }
    ];
    var hg = document.getElementById('headlinesGrid'), rfb = document.getElementById('refreshNewsBtn');
    function rN(articles) {
      hg.innerHTML = '';
      for (var i = 0; i < articles.length; i++) {
        (function(a) {
          var card = document.createElement('div'); card.className = 'news-card';
          card.addEventListener('click', function() { if (a.url) window.open(a.url, '_blank'); });
          var img = document.createElement('img'); img.src = a.image || 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" width="90" height="90"%3E%3Crect fill="%2322253f" width="90" height="90"/%3E%3C/svg%3E';
          img.alt = a.title; img.onerror = function() { this.src = 'data:image/svg+xml,...'; }; card.appendChild(img);
          var body = document.createElement('div'); body.className = 'card-body';
          var t = document.createElement('div'); t.className = 'card-title'; t.textContent = a.title || 'Untitled'; body.appendChild(t);
          var d = document.createElement('div'); d.className = 'card-desc'; d.textContent = a.description || ''; body.appendChild(d);
          card.appendChild(body); hg.appendChild(card);
        })(articles[i]);
      }
    }
    rN(SA); rfb.addEventListener('click', function() { rN(SA); });
  }

  if (document.readyState === 'loading') { document.addEventListener('DOMContentLoaded', initApp); }
  else { initApp(); }
})();