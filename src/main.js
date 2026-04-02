// ============================================================
//  MAIN.JS — 页面渲染入口
//  从 content.js 读取数据 → 写入 DOM
//  改内容只需动 data/content.js，不用碰这里
// ============================================================

import './styles/main.css'
import { site } from './data/content.js'

// ── Nav ──────────────────────────────────────────────────────
document.querySelector('.nav-logo').innerHTML = site.nav.logo.replace('×', '<span>×</span>')
document.querySelector('.nav-meta').textContent = site.nav.meta
const navCta = document.querySelector('.nav-cta')
navCta.textContent = site.nav.ctaText
navCta.href = site.nav.ctaLink

// ── Hero ─────────────────────────────────────────────────────
document.querySelector('.pill-tag').textContent = site.hero.tag
document.querySelector('h1').innerHTML = site.hero.title
document.querySelector('.hero-sub').textContent = site.hero.subtitle

// Hero tags
const heroTagsEl = document.querySelector('.hero-tags')
heroTagsEl.innerHTML = site.hero.tags.map(t => `
  <div class="hero-tag">
    <div class="ticon">${t.icon}</div>
    <span>${t.label}</span>
  </div>`).join('')

// Hero photos
const [pc1, pc2, pc3] = document.querySelectorAll('.pc img')
if (site.hero.photos[0]) pc1.src = site.hero.photos[0].file
if (site.hero.photos[1]) pc2.src = site.hero.photos[1].file
if (site.hero.photos[2]) pc3.src = site.hero.photos[2].file

// ── Stats ─────────────────────────────────────────────────────
document.querySelector('.si').innerHTML = site.stats.map(s => `
  <div class="stat">
    <div class="sn">${s.number}<em>${s.suffix}</em></div>
    <div class="sl">${s.label}</div>
  </div>`).join('')

// ── Overview ──────────────────────────────────────────────────
const ov = site.overview
document.querySelector('#overview .spill').textContent = ov.tag
document.querySelector('#overview h2').innerHTML = ov.title
document.querySelector('#overview .sub').textContent = ov.sub

// Body paragraphs
document.querySelector('.ot').innerHTML =
  ov.body.map(p => `<p>${p}</p>`).join('') +
  `<div class="qb"><p>${ov.quote}</p></div>`

// Agenda
document.querySelector('.agenda .sct').textContent = ov.agenda.title
document.querySelector('.flist').innerHTML = ov.agenda.items.map(item => `
  <div class="fi">
    <div class="fdw"><div class="fdot"></div><div class="fln"></div></div>
    <div>
      <div class="ft">${item.time}</div>
      <div class="fd ${item.primary ? 'bold' : ''}">${item.text}</div>
    </div>
  </div>`).join('')

// Sponsors
document.querySelector('.sponsors .sct').textContent = ov.sponsors.title
document.querySelector('.pills').innerHTML = ov.sponsors.items.map(s =>
  `<span class="pill ${s.primary ? 'primary' : ''}">${s.name}</span>`
).join('')

// ── Projects ──────────────────────────────────────────────────
const pr = site.projects
document.querySelector('#projects .spill').textContent = pr.tag
document.querySelector('#projects h2').innerHTML = pr.title
document.querySelector('#projects .sub').textContent = pr.sub

document.querySelector('.pgrid').innerHTML = pr.items.map(p => `
  <div class="pcard">
    <div class="pcard-top">
      <span class="prank">${p.rank}</span>
      <span class="pbadge">${p.badge}</span>
    </div>
    <h3>${p.title}</h3>
    <div class="pteam">${p.team}</div>
    <p class="pdesc">${p.desc}</p>
    <div class="ptags">${p.tags.map(t => `<span class="ptag">${t}</span>`).join('')}</div>
    <a href="${p.link}" class="plink" target="_blank">View Project →</a>
  </div>`).join('')

// ── Participants ───────────────────────────────────────────────
const pa = site.participants
document.querySelector('#participants .spill').textContent = pa.tag
document.querySelector('#participants h2').innerHTML = pa.title
document.querySelector('#participants .sub').textContent = pa.sub

document.querySelector('.pstats').innerHTML = pa.stats.map(s => `
  <div class="ps-item">
    <div class="ps-num">${s.number}</div>
    <div class="ps-label">${s.label}</div>
  </div>`).join('')

document.querySelector('.programs-wrap').innerHTML =
  pa.programs.map(p => `<span class="st prog">${p}</span>`).join('')

document.querySelector('.schools-wrap').innerHTML =
  pa.schools.map(s => `<span class="st nm">${s}</span>`).join('')

// ── Gallery ───────────────────────────────────────────────────
const ga = site.gallery
document.querySelector('#gallery .spill').textContent = ga.tag
document.querySelector('#gallery h2').innerHTML = ga.title

document.querySelector('.gg').innerHTML = ga.photos.map(p => `
  <div class="gi ${p.size !== 'normal' ? p.size : ''}">
    <img src="${p.file}" alt="${p.alt}">
  </div>`).join('')

document.querySelector('.glink').innerHTML =
  `📸 Full photo album → <a href="${ga.albumLink}" target="_blank">View on Feishu</a>`

// ── CTA ───────────────────────────────────────────────────────
const ct = site.cta
document.querySelector('.ce').textContent = ct.eyebrow
document.querySelector('.pct h2').innerHTML = ct.title
document.querySelector('.pct p').textContent = ct.body
document.querySelector('.cbtns').innerHTML = ct.buttons.map(b =>
  `<a href="${b.link}" class="${b.style === 'white' ? 'bw' : 'bo'}" target="_blank">${b.text}</a>`
).join('')

// Organiser pills in CTA
document.querySelector('.ppills').innerHTML = site.overview.sponsors.items.map(s =>
  `<span class="pp2 ${s.primary ? 'primary' : ''}">${s.primary ? '🚀 ' : ''}${s.name}</span>`
).join('')

// ── Footer ────────────────────────────────────────────────────
const ft = site.footer
document.querySelector('.fl').innerHTML = `<strong>AttraX × Enter</strong> · ${ft.left.split('·').slice(1).join('·')}`
document.querySelector('.fr').innerHTML = ft.links.map(l =>
  `<a href="${l.href}" target="_blank">${l.text}</a>`
).join('')
