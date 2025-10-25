const rows = [
  {
    title: "Popular on NetfliXClone",
    items: [
      { title: "Movie 1", img: "https://via.placeholder.com/400x225?text=Movie+1", desc: "An action packed thriller." },
      { title: "Movie 2", img: "https://via.placeholder.com/400x225?text=Movie+2", desc: "A heartwarming drama." },
      { title: "Movie 3", img: "https://via.placeholder.com/400x225?text=Movie+3", desc: "Science fiction at its best." },
      { title: "Movie 4", img: "https://via.placeholder.com/400x225?text=Movie+4", desc: "Laughs and good times." },
      { title: "Movie 5", img: "https://via.placeholder.com/400x225?text=Movie+5", desc: "Documentary special." }
    ]
  },
  {
    title: "Trending Now",
    items: [
      { title: "Show A", img: "https://via.placeholder.com/400x225?text=Show+A", desc: "Binge-worthy series." },
      { title: "Show B", img: "https://via.placeholder.com/400x225?text=Show+B", desc: "Critically acclaimed." },
      { title: "Show C", img: "https://via.placeholder.com/400x225?text=Show+C", desc: "Comedy show." },
      { title: "Show D", img: "https://via.placeholder.com/400x225?text=Show+D", desc: "Adventure tales." }
    ]
  }
];


rows.forEach((rowData, rowIndex) => {
  const container = document.querySelector(`.row-posters[data-row="${rowIndex}"]`);
  if(!container) return;
  rowData.items.forEach(item => {
    const div = document.createElement('div');
    div.className = 'poster';
    div.style.backgroundImage = `url("${item.img}")`;
    div.dataset.title = item.title;
    div.dataset.img = item.img;
    div.dataset.desc = item.desc;
    container.appendChild(div);
  });
});


document.querySelectorAll('.row').forEach(row => {
  const left = row.querySelector('.row-btn.left');
  const right = row.querySelector('.row-btn.right');
  const posters = row.querySelector('.row-posters');
  left && left.addEventListener('click', () => posters.scrollBy({ left: -600, behavior: 'smooth' }));
  right && right.addEventListener('click', () => posters.scrollBy({ left: 600, behavior: 'smooth' }));
});


const modal = document.getElementById('modal');
const modalBody = document.getElementById('modal-body');
const modalClose = document.getElementById('modal-close');

document.addEventListener('click', (e) => {
  if(e.target.classList.contains('poster')) {
    const title = e.target.dataset.title;
    const img = e.target.dataset.img;
    const desc = e.target.dataset.desc;
    openModal({title, img, desc});
  }
});

function openModal({title, img, desc}) {
  modalBody.innerHTML = `
    <img src="${img}" alt="${title}" />
    <div class="meta">
      <h3>${title}</h3>
      <p>${desc}</p>
      <p><strong>Rating:</strong> ★★★★☆</p>
      <button id="play-btn">▶ Play</button>
    </div>
  `;
  modal.classList.remove('hidden');
}
modalClose.addEventListener('click', () => modal.classList.add('hidden'));
modal.addEventListener('click', (e) => {
  if(e.target === modal) modal.classList.add('hidden');
});

const themeToggle = document.getElementById('theme-toggle');
const currentTheme = localStorage.getItem('nf_theme') || 'dark';
if(currentTheme === 'light') document.body.classList.add('light');
updateThemeButton();

themeToggle.addEventListener('click', () => {
  document.body.classList.toggle('light');
  const theme = document.body.classList.contains('light') ? 'light' : 'dark';
  localStorage.setItem('nf_theme', theme);
  updateThemeButton();
});

function updateThemeButton() {
  themeToggle.textContent = document.body.classList.contains('light') ? "☀️ Light" : "🌙 Dark";
}
