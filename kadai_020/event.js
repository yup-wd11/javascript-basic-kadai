const clickBtn = document.getElementById('btn');
const replaceText = document.getElementById('text');

clickBtn.addEventListener('click',() => {
    replaceText.textContent = 'ボタンをクリックしました';
});