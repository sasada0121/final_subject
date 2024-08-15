// public/index.js
window.addEventListener('DOMContentLoaded', (event) => {
  document.querySelectorAll('.user-name').forEach((elem) => {
    elem.addEventListener('click', (event) => {
      alert(event.target.innerHTML + "を選択しました。");
      const clickedName = event.target.innerHTML;
      document.querySelector('.input-text').value = clickedName;
    });
  });

  document.querySelector('.send-button').addEventListener('click', (event) => {
    const text = document.querySelector('.input-text').value;
    fetch('/api/user', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ name: text }) }) //DBに入れる
    location.reload()
  });

  document.querySelector('.delete-button').addEventListener('click', (event) => {
    const text = document.querySelector('.input-text').value;
    fetch('/api/user', { method: 'DELETE', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ name: text }) }) //DBから削除
    alert(text + " を削除しました。")
    location.reload();
  });
});
