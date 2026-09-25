document.getElementById('year').textContent = new Date().getFullYear();

const posts = [
  // Ejemplo — sustituye por tus entradas reales:
   {
     title: "¡Nueva web!",
     date: "2026-09-25",
     excerpt: "Hemos actualizado la web.",
     url: "http://aussterben.github.io/blog/1.html"
   },
];

const postsContainer = document.getElementById('posts');

if (posts.length === 0) {
  postsContainer.innerHTML = '<p class="posts-empty">Aún no hay entradas publicadas. Vuelve pronto.</p>';
} else {
  postsContainer.innerHTML = posts.map(post => {
    const date = new Date(post.date).toLocaleDateString('es-ES', { year: 'numeric', month: 'long', day: 'numeric' });
    return `
      <article class="post">
        <span class="post-date">${date}</span>
        <h3 class="post-title"><a href="${post.url}" target="_blank" rel="noopener noreferrer">${post.title}</a></h3>
        <p class="post-excerpt">${post.excerpt}</p>
      </article>
    `;
  }).join('');
}

const typedEl = document.getElementById('typed');
const fullText = 'whoami';
const answer = '> Aitor Linares — Aussterben';
const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

if (reduceMotion) {
  typedEl.textContent = fullText;
  const answerLine = document.createElement('div');
  answerLine.textContent = answer;
  document.getElementById('terminal').after(answerLine);
} else {
  let i = 0;
  (function typeChar() {
    if (i <= fullText.length) {
      typedEl.textContent = fullText.slice(0, i);
      i++;
      setTimeout(typeChar, 80);
    } else {
      setTimeout(() => {
        const answerLine = document.createElement('p');
        answerLine.className = 'terminal';
        answerLine.style.color = 'var(--text)';
        answerLine.textContent = answer;
        document.getElementById('terminal').insertAdjacentElement('afterend', answerLine);
      }, 300);
    }
  })();
}
