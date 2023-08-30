let currentPie = 1;

function changePie(pieNumber) {

    document.getElementById('pieImage').style.transform = 'rotate(360deg)';
    setTimeout(() => {
        document.getElementById('pieImage').src = `pie${pieNumber}.jpg`;
        document.getElementById('pieImage').style.transform = 'rotate(0deg)';
        currentPie = pieNumber;
    }, 500);

}

document.getElementById('left').addEventListener('click', () => {
    const previousPie = (currentPie - 1 < 1) ? 5 : currentPie - 1;
    changePie(previousPie);
});

document.getElementById('right').addEventListener('click', () => {
    const nextPie = (currentPie + 1 > 5) ? 1 : currentPie + 1;
    changePie(nextPie);
});