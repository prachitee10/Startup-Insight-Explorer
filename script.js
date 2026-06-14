document.addEventListener("DOMContentLoaded", () => {
    // 1. This is where your summary goes
    const mySummary = `
        <h3>Startup News Analysis</h3>
        <p><strong>Key Takeaways:</strong></p>
        <ul>
            <li>[Paste your first point here]</li>
            <li>[Paste your second point here]</li>
        </ul>
        <p><strong>Detailed Summary:</strong></p>
        <p>[Paste your full summary text here]</p>
    `;

    // 2. This finds the box in your HTML and puts the summary inside it
    const displayBox = document.getElementById("content");
    if (displayBox) {
        displayBox.innerHTML = mySummary;
    }
});
