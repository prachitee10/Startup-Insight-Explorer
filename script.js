document.getElementById("askBtn").addEventListener("click", async function () {
    const question = document.getElementById("question").value;
    const reportElement = document.getElementById("report");
    if (!question) return;

    reportElement.innerHTML = "Thinking...";
    
    try {
        const formData = new URLSearchParams();
        formData.append('q', question);

        const response = await fetch('/ask', {
            method: 'POST',
            body: formData
        });
        
        const data = await response.text();
        reportElement.innerHTML = data;
    } catch (error) {
        reportElement.innerHTML = "Error connecting to backend.";
    }
});
