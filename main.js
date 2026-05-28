/* =========================================================
   Rancho Cacachilas — Landing v3
   Language toggle · form persistence · booking handoff
   ========================================================= */
(() => {
  const prefersReduced = matchMedia('(prefers-reduced-motion: reduce)').matches;
  const isCoarse = matchMedia('(pointer: coarse)').matches;
  const RESERVATION_KEY = 'rc-reservation-v3';
  const LANG_KEY = 'rc-lang-v3';
  const CALENDLY_URL = 'https://calendly.com/ranchocacachilas'; // Replace with the official Rancho Calendly event URL when available.

  const I18N = {
    es: {
      'nav.refuge':'Refugio','nav.experience':'Experiencia','nav.table':'A la mesa','nav.gallery':'Galería','nav.faq':'FAQ','nav.cta':'Consultar fechas',
      'mobile.refuge':'El <em>refugio</em>','mobile.experience':'<em>Experiencia</em>','mobile.table':'A la <em>mesa</em>','mobile.gallery':'<em>Galería</em>','mobile.cta':'<em>Consultar fechas</em>',
      'bookbar.eyebrow':'— Reserva directa','bookbar.response':'Respuesta en 24 horas','bookbar.cta':'Consultar',
      'form.arrival':'Llegada','form.departure':'Salida','form.guests':'Huéspedes','guest.twoAdults':'2 adultos','guest.twoOneChild':'2 + 1 niño','guest.twoTwoChildren':'2 + 2 niños','guest.coupleGuests':'Pareja + invitados',
      'hero.eyebrow':'Refugio privado · Glamping safari','hero.slide1html':'Sin planear nada,<br><em>solo estar.</em>','hero.slide2html':'Comer del territorio,<br><em>pertenecer.</em>','hero.slide3html':'Aventura suave,<br><em>tierra real.</em>','hero.slide1a':'Sin planear nada,','hero.slide1b':'solo estar.','hero.slide2a':'Comer del territorio,','hero.slide2b':'pertenecer.','hero.slide3a':'Aventura suave,','hero.slide3b':'tierra real.','hero.sub':'Dos o tres noches en un rancho regenerativo privado. Hospedaje boutique, comida del rancho a tu mesa y senderos guiados para desconectar de verdad.','hero.discover':'Descubrir',
      'thumb.refuge':'El refugio','thumb.table':'A la mesa','thumb.sierra':'Sierra adentro','m.glamping':'Glamping safari','m.table':'Ranch-to-table','m.trails':'Senderos privados','m.privacy':'Privacidad real','m.regenerative':'Rancho regenerativo','m.baja':'Baja California Sur',
      'intro.eyebrow':'— Capítulo 01 · El refugio','intro.title':'Un lugar donde el viaje ya está pensado.','intro.text':'Para parejas que ya pasaron por el hotel boutique y siguen buscando algo más: un refugio privado donde el hospedaje, la comida y la aventura forman una sola experiencia. Sin coordinar diez pestañas. Sin que el destino se sienta a marketing.','intro.location':'Sierra de la Laguna','intro.private':'Privado · 35,000 ha',
      'manifest.1.title':'Llegas y bajas el ritmo.','manifest.1.text':'Glamping safari o suites boutique en propiedad privada. Cielo abierto, silencio real y espacio para estar juntos sin coordinar nada.','manifest.2.title':'Comes de la tierra.','manifest.2.text':'Ranch-to-table con producto del rancho y de la región. No es buscar dónde cenar: es parte del viaje, contado por quien cultiva y cocina.','manifest.3.title':'Exploras con guía.','manifest.3.text':'Senderismo, bicicleta de montaña, mula o talleres del rancho. Tú eliges el nivel; el territorio marca el ritmo con seguridad y contexto.',
      'stay.eyebrow':'— Capítulo 02 · El hospedaje','stay.title':'Confort con carácter, no decoración.','stay.text':'La comodidad no borra el paisaje, lo deja entrar. Cama cómoda, privacidad cuidada y la sensación de que el lugar baja el volumen por ustedes desde el check-in. Sin ruido, sin filas, sin recepción genérica.','stay.nights':'Noches sugeridas','stay.capacity':'Cupos por noche','stay.attention':'Atención cercana',
      'film.camera':'— En cámara','film.title':'Una película de cómo se siente.','film.chapter':'—— Capítulo entre capítulos',
      'table.eyebrow':'— Capítulo 03 · A la mesa','table.title':'Cena lenta, producto del rancho.','table.text':'Comida con historia: del huerto y la milpa del rancho al plato, con producto regional y manos que saben de dónde viene. Vinos seleccionados, fuego abierto y tiempo para sobremesa. No buscas restaurante: la mesa ya te está esperando.','table.times':'Tiempos del menú','table.product':'Producto del rancho','table.wines':'Selección de vinos',
      'break.eyebrow':'— Pausa','break.quote':'Cielo abierto, cena lenta, cero prisa.','break.location':'Sierra de la Laguna · 1,200 msnm','break.private':'—— 35,000 ha privadas',
      'adventure.eyebrow':'— Capítulo 04 · La aventura','adventure.title':'Tres formas de conocer la sierra.','adventure.text':'Suave o retadora. Tú eliges la energía; el guía marca el ritmo y comparte el territorio.','adventure.1.k':'01 · A pie','adventure.1.t':'Senderos privados.','adventure.2.k':'02 · En bici','adventure.2.t':'60+ km de MTB.','adventure.3.k':'03 · A paso lento','adventure.3.t':'Mula y taller.',
      'testimonial.quote':'No tuvimos que decidir todo. Llegamos, bajamos el ritmo y el rancho nos fue llevando entre comida, paisaje y silencio.','accolades.eyebrow':'— En portada','gallery.eyebrow':'— Capítulo 05 · El territorio','gallery.title':'Lo que ven quienes ya volvieron distintos.','availability.cta':'Ver disponibilidad',
      'faq.eyebrow':'— Antes de reservar','faq.title':'Respuestas claras.','faq.text':'La idea es que llegues con certeza: qué incluye, qué tan cómodo es y cómo se coordina la llegada.','faq.q1':'¿Qué incluye exactamente la escapada de 2–3 noches?','faq.q2':'¿El glamping es cómodo o demasiado rústico?','faq.q3':'¿Qué tan remota es la ubicación?','faq.q4':'¿Podemos elegir actividades suaves o más retadoras?','faq.q5':'¿Conviene para aniversario, cumpleaños o desconexión?',
      'cta.eyebrow':'— Capacidad limitada por diseño','cta.title':'Cuéntanos cuándo<br>quieres ir y qué<br><em>quieren celebrar.</em>','cta.sub':'Tus fechas se guardan automáticamente para que no repitas información al llegar al formulario.',
      'form.eyebrow':'— Capítulo final · Reserva','form.title':'Dinos tus fechas.<br><em>Te devolvemos</em><br>un plan claro.','form.text':'Cupos limitados por diseño. Temporada Oct 2026 — May 2027. Respuesta personalizada en 24 horas.','trust.noCommit':'Sin compromiso','trust.response':'Respuesta en 24 horas','trust.capacity':'Capacidad limitada por diseño','trust.direct':'Reserva directa con el rancho',
      'form.privateReservation':'Reserva privada','form.hours':'24h','form.name':'Nombre completo','form.nameShort':'Nombre','form.email':'Correo','form.phone':'WhatsApp','form.intent':'Motivo del viaje','form.style':'¿Qué ritmo prefieren?','form.selectOption':'Selecciona una opción','intent.anniversary':'Aniversario','intent.birthday':'Cumpleaños','intent.disconnect':'Desconexión','intent.coupleAdventure':'Aventura en pareja','intent.other':'Otro','style.soft':'Descanso + comida + actividad suave','style.balanced':'Aventura equilibrada','style.active':'MTB / hiking más activo','style.recommend':'No estoy segura/o, recomiéndenme','form.consent':'Acepto ser contactada/o y confirmo que quiero recibir información de disponibilidad, inclusiones y próximos pasos.','form.submit':'Reservar mi escapada','form.calendly':'Agendar llamada en Calendly','form.note':'Disponibilidad sujeta a fecha, tipo de hospedaje y capacidad del rancho.','ph.name':'Tu nombre','ph.email':'tu@email.com','ph.phone':'+52',
      'popup.tag':'— Refugio privado','popup.season':'Cap. limitada · Oct 2026 — May 2027','popup.eyebrow':'— Aún hay fechas','popup.title':'¿Vamos a tu <em>escapada?</em>','popup.text':'Déjanos tus fechas y te confirmamos disponibilidad, hospedaje y experiencia sugerida en menos de 24 horas.','popup.submit':'Pedir disponibilidad',
      'footer.desc':'Naturaleza privada, hospitalidad boutique y regeneración real en Baja California Sur.','footer.explore':'Explora','footer.contact':'Contacto','footer.legal':'Legal','footer.privacy':'Aviso de privacidad','footer.directBooking':'Reserva directa','footer.dinametra':'Desarrollado por Dinametra','footer.location':'Baja California Sur · México',
      'ty.eyebrow':'Solicitud recibida','ty.title':'Gracias<span data-ty-name></span>.<br><em>Ya tenemos tus fechas.</em>','ty.copy':'Recibimos tu interés para vivir una escapada privada en Rancho Cacachilas. Ahora el equipo puede revisar disponibilidad, hospedaje e inclusiones según tus fechas tentativas.','ty.summary':'Resumen de tu solicitud','ty.name':'Nombre','ty.email':'Correo','ty.phone':'WhatsApp','ty.arrive':'Llegada','ty.leave':'Salida','ty.guests':'Huéspedes','ty.intent':'Motivo','ty.back':'Volver a la landing','ty.official':'Reservar directo','ty.note':'También puedes continuar desde el sitio oficial del rancho.'
    },
    en: {}
  };
  I18N.en = {
    'nav.refuge':'Stay','nav.experience':'Experience','nav.table':'At the table','nav.gallery':'Gallery','nav.faq':'FAQ','nav.cta':'Check dates',
    'mobile.refuge':'The <em>stay</em>','mobile.experience':'<em>Experience</em>','mobile.table':'At the <em>table</em>','mobile.gallery':'<em>Gallery</em>','mobile.cta':'<em>Check dates</em>',
    'bookbar.eyebrow':'— Direct booking','bookbar.response':'Response within 24 hours','bookbar.cta':'Check',
    'form.arrival':'Arrival','form.departure':'Departure','form.guests':'Guests','guest.twoAdults':'2 adults','guest.twoOneChild':'2 + 1 child','guest.twoTwoChildren':'2 + 2 children','guest.coupleGuests':'Couple + guests',
    'hero.eyebrow':'Private retreat · Safari glamping','hero.slide1html':'No planning,<br><em>just being.</em>','hero.slide2html':'Taste the land,<br><em>belong.</em>','hero.slide3html':'Soft adventure,<br><em>real terrain.</em>','hero.slide1a':'No planning,','hero.slide1b':'just being.','hero.slide2a':'Taste the land,','hero.slide2b':'belong.','hero.slide3a':'Soft adventure,','hero.slide3b':'real terrain.','hero.sub':'Two or three nights at a private regenerative ranch. Boutique lodging, ranch-to-table food and guided trails designed for a real reset.','hero.discover':'Discover',
    'thumb.refuge':'The stay','thumb.table':'At the table','thumb.sierra':'Into the sierra','m.glamping':'Safari glamping','m.table':'Ranch-to-table','m.trails':'Private trails','m.privacy':'Real privacy','m.regenerative':'Regenerative ranch','m.baja':'Baja California Sur',
    'intro.eyebrow':'— Chapter 01 · The retreat','intro.title':'A place where the trip is already thought through.','intro.text':'For couples who have already tried boutique hotels and still want something deeper: a private retreat where lodging, food and adventure become one experience. No ten open tabs. No destination that feels like marketing.','intro.location':'Sierra de la Laguna','intro.private':'Private · 35,000 ha',
    'manifest.1.title':'Arrive and slow down.','manifest.1.text':'Safari glamping or boutique suites on private land. Open sky, real silence and space to be together without coordinating anything.','manifest.2.title':'Eat from the land.','manifest.2.text':'Ranch-to-table with products from the ranch and region. It is not about finding dinner: it is part of the journey, told by the people who grow and cook it.','manifest.3.title':'Explore with a guide.','manifest.3.text':'Hiking, mountain biking, mule rides or ranch workshops. You choose the level; the land sets the pace with safety and context.',
    'stay.eyebrow':'— Chapter 02 · The stay','stay.title':'Comfort with character, not decoration.','stay.text':'Comfort does not erase the landscape; it lets it in. A comfortable bed, carefully held privacy and a place that lowers the volume for you from check-in. No noise, no lines, no generic reception.','stay.nights':'Suggested nights','stay.capacity':'Spots per night','stay.attention':'Close attention',
    'film.camera':'— On camera','film.title':'A film of how it feels.','film.chapter':'—— Chapter between chapters',
    'table.eyebrow':'— Chapter 03 · At the table','table.title':'Slow dinner, product from the ranch.','table.text':'Food with a story: from the ranch garden and milpa to the plate, with regional products and hands that know where everything comes from. Selected wines, open fire and time to stay at the table. You do not look for a restaurant: the table is already waiting.','table.times':'Menu courses','table.product':'Ranch product','table.wines':'Wine selection',
    'break.eyebrow':'— Pause','break.quote':'Open sky, slow dinner, no rush.','break.location':'Sierra de la Laguna · 1,200 masl','break.private':'—— 35,000 private ha',
    'adventure.eyebrow':'— Chapter 04 · The adventure','adventure.title':'Three ways to discover the sierra.','adventure.text':'Soft or challenging. You choose the energy; the guide sets the pace and shares the territory.','adventure.1.k':'01 · On foot','adventure.1.t':'Private trails.','adventure.2.k':'02 · By bike','adventure.2.t':'60+ km of MTB.','adventure.3.k':'03 · At a slower pace','adventure.3.t':'Mule ride and workshop.',
    'testimonial.quote':'We did not have to decide everything. We arrived, slowed down and the ranch led us through food, landscape and silence.','accolades.eyebrow':'— As featured in','gallery.eyebrow':'— Chapter 05 · The land','gallery.title':'What people see when they return changed.','availability.cta':'Check availability',
    'faq.eyebrow':'— Before booking','faq.title':'Clear answers.','faq.text':'The goal is certainty: what is included, how comfortable it is and how arrival is coordinated.','faq.q1':'What exactly is included in the 2–3 night escape?','faq.q2':'Is glamping comfortable or too rustic?','faq.q3':'How remote is the location?','faq.q4':'Can we choose softer or more challenging activities?','faq.q5':'Is it a good fit for an anniversary, birthday or reset?',
    'cta.eyebrow':'— Limited capacity by design','cta.title':'Tell us when<br>you want to go and what<br><em>you want to celebrate.</em>','cta.sub':'Your dates are saved automatically so you do not have to repeat information when you reach the form.',
    'form.eyebrow':'— Final chapter · Booking','form.title':'Tell us your dates.<br><em>We’ll send back</em><br>a clear plan.','form.text':'Capacity is limited by design. Season Oct 2026 — May 2027. Personalized response within 24 hours.','trust.noCommit':'No commitment','trust.response':'Response within 24 hours','trust.capacity':'Limited capacity by design','trust.direct':'Direct booking with the ranch',
    'form.privateReservation':'Private booking','form.hours':'24h','form.name':'Full name','form.nameShort':'Name','form.email':'Email','form.phone':'WhatsApp','form.intent':'Reason for travel','form.style':'What pace do you prefer?','form.selectOption':'Select an option','intent.anniversary':'Anniversary','intent.birthday':'Birthday','intent.disconnect':'Disconnect','intent.coupleAdventure':'Couple adventure','intent.other':'Other','style.soft':'Rest + food + soft activity','style.balanced':'Balanced adventure','style.active':'More active MTB / hiking','style.recommend':'Not sure, recommend something','form.consent':'I agree to be contacted and confirm that I want to receive availability, inclusions and next-step information.','form.submit':'Book my escape','form.calendly':'Schedule a Calendly call','form.note':'Availability depends on dates, lodging type and ranch capacity.','ph.name':'Your name','ph.email':'you@email.com','ph.phone':'+52',
    'popup.tag':'— Private retreat','popup.season':'Limited capacity · Oct 2026 — May 2027','popup.eyebrow':'— Dates may still be open','popup.title':'Ready for your <em>escape?</em>','popup.text':'Leave your dates and we will confirm availability, lodging and suggested experience in less than 24 hours.','popup.submit':'Request availability',
    'footer.desc':'Private nature, boutique hospitality and real regeneration in Baja California Sur.','footer.explore':'Explore','footer.contact':'Contact','footer.legal':'Legal','footer.privacy':'Privacy notice','footer.directBooking':'Direct booking','footer.dinametra':'Developed by Dinametra','footer.location':'Baja California Sur · Mexico',
    'ty.eyebrow':'Request received','ty.title':'Thank you<span data-ty-name></span>.<br><em>We have your dates.</em>','ty.copy':'We received your interest in a private escape at Rancho Cacachilas. The team can now review availability, lodging and inclusions based on your tentative dates.','ty.summary':'Your request summary','ty.name':'Name','ty.email':'Email','ty.phone':'WhatsApp','ty.arrive':'Arrival','ty.leave':'Departure','ty.guests':'Guests','ty.intent':'Reason','ty.back':'Back to landing','ty.official':'Direct booking','ty.note':'You can also continue from the ranch’s official site.'
  };

  const progressBar = document.querySelector('.scroll-progress span');
  const nav = document.querySelector('.nav');
  const lightSections = document.querySelectorAll('.on-light, .on-light-2');

  const safeSessionGet = (key) => { try { return sessionStorage.getItem(key); } catch(e) { return null; } };
  const safeSessionSet = (key, value) => { try { sessionStorage.setItem(key, value); } catch(e) {} };
  const safeLocalGet = (key) => { try { return localStorage.getItem(key); } catch(e) { return null; } };
  const safeLocalSet = (key, value) => { try { localStorage.setItem(key, value); } catch(e) {} };

  function getLang(){ return (safeLocalGet(LANG_KEY) || document.documentElement.dataset.lang || 'es').startsWith('en') ? 'en' : 'es'; }
  function applyI18n(lang=getLang()){
    document.documentElement.lang = lang;
    document.documentElement.dataset.lang = lang;
    document.querySelectorAll('[data-i18n]').forEach(el=>{ const k=el.dataset.i18n; if(I18N[lang][k]!==undefined) el.textContent=I18N[lang][k]; });
    document.querySelectorAll('[data-i18n-html]').forEach(el=>{ const k=el.dataset.i18nHtml; if(I18N[lang][k]!==undefined) el.innerHTML=I18N[lang][k]; });
    document.querySelectorAll('[data-i18n-placeholder]').forEach(el=>{ const k=el.dataset.i18nPlaceholder; if(I18N[lang][k]!==undefined) el.setAttribute('placeholder', I18N[lang][k]); });
    document.querySelectorAll('[data-lang-toggle]').forEach(btn=>btn.classList.toggle('is-en', lang==='en'));
  }
  document.querySelectorAll('[data-lang-toggle]').forEach(btn=>btn.addEventListener('click',()=>{ const next=getLang()==='es'?'en':'es'; safeLocalSet(LANG_KEY,next); applyI18n(next); fillTySummary(); }));
  applyI18n();

  /* Custom cursor */
  (()=>{ if(isCoarse||prefersReduced) return; const dot=document.querySelector('.cursor-dot'), follower=document.querySelector('.cursor-follower'); if(!dot||!follower)return; let mx=innerWidth/2,my=innerHeight/2,fx=mx,fy=my; addEventListener('mousemove',e=>{mx=e.clientX;my=e.clientY;dot.style.transform=`translate3d(${mx}px, ${my}px, 0) translate(-50%, -50%)`;}); const tick=()=>{fx+=(mx-fx)*.17;fy+=(my-fy)*.17;follower.style.transform=`translate3d(${fx}px, ${fy}px, 0) translate(-50%, -50%)`;requestAnimationFrame(tick)};tick(); const grow='a, button, [data-tilt], .hero-thumb, .grid3-item, .mosaic-cell, .faq-q, .bookbar-card, .form-card, .nav-cta'; const text='input, select, textarea, label'; document.addEventListener('mouseover',e=>{ if(e.target.closest(text)) document.body.classList.add('cursor-text'); else if(e.target.closest(grow)) document.body.classList.add('cursor-active'); }); document.addEventListener('mouseout',e=>{ if(e.target.closest(text)) document.body.classList.remove('cursor-text'); if(e.target.closest(grow)) document.body.classList.remove('cursor-active'); }); })();

  function updateNavLogo(forceColor=false){
    if(!nav) return;
    const img=nav.querySelector('.nav-brand img'); if(!img) return;
    const onLight=nav.classList.contains('is-light') && !nav.classList.contains('is-scrolled');
    const wanted=(forceColor||onLight)?(img.dataset.logoColor||img.dataset.logoLight):(img.dataset.logoDark||img.src);
    if(!img.getAttribute('src').endsWith(wanted)) img.setAttribute('src', wanted);
  }
  if(nav){ nav.addEventListener('mouseenter',()=>updateNavLogo(true)); nav.addEventListener('mouseleave',()=>updateNavLogo(false)); }
  const onScroll=()=>{ const y=scrollY; if(progressBar){const h=document.documentElement.scrollHeight-innerHeight; progressBar.style.width=`${h>0?Math.min(100,(y/h)*100):0}%`;} if(nav){nav.classList.toggle('is-scrolled',y>30); const probeY=50; let onLight=false; lightSections.forEach(s=>{const r=s.getBoundingClientRect(); if(r.top<=probeY&&r.bottom>probeY) onLight=true;}); nav.classList.toggle('is-light',onLight); updateNavLogo(false);} };
  addEventListener('scroll', onScroll, {passive:true}); onScroll();

  /* Mobile menu */
  const toggle=document.querySelector('.nav-toggle'), mobile=document.querySelector('.mobile-menu');
  if(toggle&&mobile){ toggle.addEventListener('click',()=>{const open=document.body.classList.toggle('menu-open'); toggle.setAttribute('aria-expanded',String(open)); mobile.setAttribute('aria-hidden',String(!open));}); mobile.querySelectorAll('a').forEach(a=>a.addEventListener('click',()=>{document.body.classList.remove('menu-open');toggle.setAttribute('aria-expanded','false');mobile.setAttribute('aria-hidden','true');})); }

  /* Hero slider */
  const slides=document.querySelectorAll('.hero-slide'), titles=document.querySelectorAll('.hero-title-slide'), thumbs=document.querySelectorAll('.hero-thumb'), counter=document.querySelector('[data-hero-current]'), progress=document.querySelector('.hero-progress'), heroEl=document.getElementById('hero');
  const SLIDE_MS=6800; let idx=0,timer;
  const restartProgress=()=>{const bar=progress?.querySelector('span'); if(!bar)return; bar.style.animation='none'; void bar.offsetWidth; bar.style.animation='';};
  const go=i=>{ if(!slides.length)return; idx=(i+slides.length)%slides.length; slides.forEach((s,n)=>s.classList.toggle('is-active',n===idx)); titles.forEach((s,n)=>s.classList.toggle('is-active',n===idx)); thumbs.forEach((t,n)=>t.classList.toggle('is-active',n===idx)); if(counter)counter.textContent=String(idx+1).padStart(2,'0'); restartProgress();};
  const start=()=>{if(prefersReduced)return; stop(); timer=setInterval(()=>go(idx+1),SLIDE_MS);}; const stop=()=>{if(timer)clearInterval(timer);};
  thumbs.forEach(t=>{t.addEventListener('click',()=>{go(Number(t.dataset.go));start();}); t.addEventListener('mouseenter',stop); t.addEventListener('mouseleave',start);});
  if(heroEl&&'IntersectionObserver'in window){new IntersectionObserver(es=>es.forEach(e=>e.isIntersecting?start():stop()),{threshold:.2}).observe(heroEl);} else start();

  /* Reveal observer */
  const reveals=document.querySelectorAll('.rv, .rv-mask');
  if('IntersectionObserver'in window){ const io=new IntersectionObserver(entries=>{entries.forEach(e=>{if(e.isIntersecting){e.target.classList.add('is-in');io.unobserve(e.target);}});},{threshold:.12,rootMargin:'0px 0px -8% 0px'}); reveals.forEach(el=>io.observe(el)); } else reveals.forEach(el=>el.classList.add('is-in'));

  /* Parallax */
  if(!prefersReduced){ const bgs=document.querySelectorAll('[data-parallax]'), imgs=document.querySelectorAll('[data-parallax-img]'); let ticking=false; const update=()=>{const vh=innerHeight; bgs.forEach(el=>{const r=el.getBoundingClientRect(); if(r.bottom<-200||r.top>vh+200)return; const speed=parseFloat(el.dataset.parallax)||.15; const offset=(r.top+r.height/2-vh/2)*-speed; el.style.transform=`translate3d(0, ${offset.toFixed(2)}px, 0)`;}); imgs.forEach(el=>{const r=el.getBoundingClientRect(); if(r.bottom<-200||r.top>vh+200)return; const speed=parseFloat(el.dataset.parallaxImg)||.05; const offset=(r.top+r.height/2-vh/2)*-speed; const target=el.querySelector('img')||el; target.style.transform=`translate3d(0, ${offset.toFixed(2)}px, 0) scale(1.06)`;}); ticking=false;}; const onTick=()=>{if(!ticking){requestAnimationFrame(update);ticking=true;}}; addEventListener('scroll',onTick,{passive:true}); addEventListener('resize',onTick); update(); }

  /* FAQ */
  document.querySelectorAll('.faq-item').forEach(item=>{ const btn=item.querySelector('.faq-q'); if(!btn)return; btn.addEventListener('click',()=>{const open=item.classList.contains('is-open'); document.querySelectorAll('.faq-item').forEach(other=>{other.classList.remove('is-open'); other.querySelector('.faq-q')?.setAttribute('aria-expanded','false');}); if(!open){item.classList.add('is-open'); btn.setAttribute('aria-expanded','true');}}); });

  function collectForm(form){ const data={}; new FormData(form).forEach((v,k)=>{ if(k==='privacy') return; data[k]=String(v); }); return data; }
  function getStoredReservation(){ try{return JSON.parse(sessionStorage.getItem(RESERVATION_KEY)||'{}')||{};}catch(e){return{};} }
  function saveReservation(data){ const merged={...getStoredReservation(),...data}; safeSessionSet(RESERVATION_KEY, JSON.stringify(merged)); return merged; }
  function fillForm(form, data=getStoredReservation(), mark=false){ if(!form)return; Object.entries(data).forEach(([k,v])=>{ if(v===undefined||v===null||v==='')return; const field=form.querySelector(`[name="${CSS.escape(k)}"]`); if(field){ field.value=v; if(mark){ field.classList.add('is-restored'); setTimeout(()=>field.classList.remove('is-restored'),1500); } } }); }
  function fillAllForms(mark=false){ document.querySelectorAll('[data-reservation-form]').forEach(form=>fillForm(form, getStoredReservation(), mark)); }
  document.querySelectorAll('[data-reservation-form]').forEach(form=>{
    fillForm(form);
    form.addEventListener('input',()=>saveReservation(collectForm(form)));
    form.addEventListener('change',()=>{ saveReservation(collectForm(form)); fillAllForms(false); });
    form.addEventListener('submit',e=>{
      e.preventDefault();
      const data=saveReservation(collectForm(form));
      fillAllForms(true);
      if(form.dataset.reservationForm==='bookbar'){
        document.getElementById('reserva')?.scrollIntoView({behavior:'smooth',block:'start'});
        return;
      }
      if(!form.checkValidity()){ form.reportValidity(); return; }
      const qs=new URLSearchParams(data).toString();
      document.body.style.transition='opacity .45s ease'; document.body.style.opacity='0';
      setTimeout(()=>{ location.href=`thankyou.html?${qs}`; },450);
    });
  });
  fillAllForms(false);
  document.querySelectorAll('[data-calendly-btn]').forEach(btn=>{ btn.href=CALENDLY_URL; btn.addEventListener('click',()=>{ const form=document.getElementById('mainReservationForm'); if(form) saveReservation(collectForm(form)); }); });

  /* Popup */
  const popup=document.getElementById('reservaPopup');
  if(popup){ const STORAGE_KEY='rc-popup-v3-seen'; const triggerPct=.55; const startedAt=Date.now(); let opened=false; const openPopup=()=>{if(opened)return; opened=true; fillForm(popup.querySelector('[data-reservation-form]'), getStoredReservation(), true); popup.classList.add('is-open'); popup.setAttribute('aria-hidden','false'); document.body.classList.add('menu-open'); safeSessionSet(STORAGE_KEY,'1'); setTimeout(()=>popup.querySelector('input,select,textarea')?.focus({preventScroll:true}),650);}; const closePopup=()=>{popup.classList.remove('is-open'); popup.setAttribute('aria-hidden','true'); document.body.classList.remove('menu-open');}; const already=safeSessionGet(STORAGE_KEY)==='1'; if(!already&&!prefersReduced){ const check=()=>{ if(opened){removeEventListener('scroll',check);return;} if(Date.now()-startedAt<2500)return; const h=document.documentElement.scrollHeight-innerHeight; const pct=h>0?scrollY/h:0; const reserva=document.getElementById('reserva'); if(reserva&&reserva.getBoundingClientRect().top<innerHeight*.75)return; if(pct>=triggerPct){openPopup();removeEventListener('scroll',check);} }; addEventListener('scroll',check,{passive:true}); } popup.querySelectorAll('[data-popup-close]').forEach(el=>el.addEventListener('click',closePopup)); addEventListener('keydown',e=>{if(e.key==='Escape'&&popup.classList.contains('is-open'))closePopup();}); if(location.hash==='#popup')setTimeout(openPopup,200); }

  function fillTySummary(){
    const params=Object.fromEntries(new URLSearchParams(location.search).entries());
    if(Object.keys(params).length) saveReservation(params);
    const data={...getStoredReservation(),...params};
    const nameTarget=document.querySelector('[data-ty-name]'); if(nameTarget&&data.name) nameTarget.textContent=` ${data.name.split(' ')[0]}`;
    document.querySelectorAll('[data-ty-field]').forEach(el=>{ const key=el.dataset.tyField; el.textContent=data[key]||'—'; });
  }
  fillTySummary();
})();
