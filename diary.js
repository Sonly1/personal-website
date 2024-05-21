document.addEventListener("DOMContentLoaded", () => {
    const saveDiaryButton = document.getElementById('save-diary');
    const diaryInput = document.getElementById('diary-input');

    saveDiaryButton.addEventListener('click', () => {
        const diaryText = diaryInput.value;
        if (diaryText) {
            localStorage.setItem('diary', diaryText);
            alert('Diary entry saved!');
        }
    });

    const savedDiaryText = localStorage.getItem('diary');
    if (savedDiaryText) {
        diaryInput.value = savedDiaryText;
    }
});