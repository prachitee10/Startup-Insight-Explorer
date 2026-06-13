document.getElementById("askBtn").addEventListener("click", async function () {
    const questionElement = document.getElementById("question");
    const reportElement = document.getElementById("report");
    const question = questionElement.value;

    if (!question) {
        reportElement.innerHTML = "<p style='color: #ff4d6d; font-weight: bold;'>Please type a question first!</p>";
        return;
    }

    reportElement.innerHTML = `
        <p><strong>💝 You asked:</strong> ${question}</p>
        <p style='color: #ff758f; font-style: italic; margin-top: 10px;'>Thinking...</p>
    `;

    try {
        // FIXED: Changed to POST method and added body data
        const response = await fetch('/ask', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded',
            },
            body: `q=${encodeURIComponent(question)}`
        });
        
        const data = await response.text();

        reportElement.innerHTML = `
            <p><strong>💝 You asked:</strong> ${question}</p>
            <div class="ai-answer" style="margin-top: 15px; padding: 12px; background: #fff5f8; border-left: 4px solid #ff758f; border-radius: 4px;">
                ${data}
            </div>
        `;
        
        questionElement.value = "";

    } catch (error) {
        reportElement.innerHTML = `<p style='color: #ff4d6d;'>Error: ${error.message}</p>`;
    }
});
