document.getElementById("askBtn").addEventListener("click", async function () {
    const question = document.getElementById("question").value;
    const reportElement = document.getElementById("report");
    if (!question) return;

    reportElement.innerHTML = "Thinking...";
    const formData = new URLSearchParams();
    formData.append('q', question);

    try {
        const response = await fetch('/ask', { method: 'POST', body: formData });
        reportElement.innerHTML = await response.text();
    } catch (e) {
        reportElement.innerHTML = "Error connecting to AI.";
    }
});
