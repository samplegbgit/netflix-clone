const samplePostersRow0 = [
  "https://via.placeholder.com/400x225?text=Movie+1",
  "https://via.placeholder.com/400x225?text=Movie+2",
  "https://via.placeholder.com/400x225?text=Movie+3",
  "https://via.placeholder.com/400x225?text=Movie+4",
  "https://via.placeholder.com/400x225?text=Movie+5",
  "https://via.placeholder.com/400x225?text=Movie+6"
];

const samplePostersRow1 = [
  "https://via.placeholder.com/400x225?text=Show+1",
  "https://via.placeholder.com/400x225?text=Show+2",
  "https://via.placeholder.com/400x225?text=Show+3",
  "https://via.placeholder.com/400x225?text=Show+4",
  "https://via.placeholder.com/400x225?text=Show+5"
];

function populateRow(rowIndex, posters) {
  const rowEl = document.querySelector(`.row-posters[data-row="${rowIndex}"]`);
  if(!rowEl) return;
  rowEl.innerHTML = "";
  posters.forEach(url => {
    const div = document.createElement('div');
    div.className = "poster";
    div.style.backgroundImage = `url("${url}")`;
    rowEl.appendChild(div);
  });
}


populateRow(0, samplePostersRow0);
populateRow(1, samplePostersRow1);
document.querySelectorAll('.row').forEach((row, idx) => {
  const left = row.querySelector('.row-btn.left');
  const right = row.querySelector('.row-btn.right');
  const posters = row.querySelector('.row-posters');

  left && left.addEventListener('click', () => {
    posters.scrollBy({ left: -600, behavior: 'smooth' });
  });
  right && right.addEventListener('click', () => {
    posters.scrollBy({ left: 600, behavior: 'smooth' });
  });
});


document.addEventListener('click', (e) => {
  if(e.target.classList.contains('poster')) {
    alert("Open movie details (Day 3 will add modal).");
  }
});
