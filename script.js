let mediaRecorder;
let audioChunks = [];

document.getElementById("start")?.addEventListener("click", async () => {
    const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
    mediaRecorder = new MediaRecorder(stream);
    mediaRecorder.start();

    audioChunks = [];
    mediaRecorder.ondataavailable = e => audioChunks.push(e.data);

    document.getElementById("start").disabled = true;
    document.getElementById("stop").disabled = false;
});

document.getElementById("stop")?.addEventListener("click", () => {
    mediaRecorder.stop();
    document.getElementById("start").disabled = false;
    document.getElementById("stop").disabled = true;
});

function goToProcessing() {
    window.location.href = "processing.html";
}
