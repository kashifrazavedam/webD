// PAGE NAVIGATION

function showPage(pageId) {

    const pages = document.querySelectorAll(".page");

    pages.forEach(page => {
        page.classList.remove("active");
    });

    document.getElementById(pageId).classList.add("active");
}


// AI CHAT

function sendMessage() {

    const input = document.getElementById("userInput");

    const question = input.value.trim();

    if (question === "") {
        return;
    }

    addMessage(question, "user");

    input.value = "";

    setTimeout(() => {

        const answer = generateAIResponse(question);

        addMessage(answer, "ai");

    }, 700);
}


function addMessage(text, type) {

    const messages =
        document.getElementById("chatMessages");

    const message =
        document.createElement("div");

    message.className = ⁠ message ${type} ⁠;

    message.textContent = text;

    messages.appendChild(message);

    messages.scrollTop = messages.scrollHeight;
}


function askQuestion(question) {

    document.getElementById("userInput").value =
        question;

    sendMessage();
}


function handleEnter(event) {

    if (event.key === "Enter") {

        sendMessage();

    }
}


// TEMPORARY AI RESPONSE

function generateAIResponse(question) {

    const q = question.toLowerCase();


    if (q.includes("hackathon")) {

        return "Today's hackathon is being conducted on campus. Please check the latest college announcement for the exact venue and timing.";

    }


    if (q.includes("club")) {

        return "You can explore Coding, AI, Entrepreneurship, Sports, Design and Music clubs in the Clubs section.";

    }


    if (q.includes("event")) {

        return "Today's featured event is the college hackathon. Check the Events section for more information.";

    }


    if (q.includes("library")) {

        return "The library is located on the Ground Floor of the Academic Block.";

    }


    return "I'm CampusAI! I can help you with college events, clubs, campus locations, notices and academic information.";
}


// NOTICE SCANNER DEMO

function scanNotice() {

    const file =
        document.getElementById("noticeFile").files[0];

    if (!file) {

        alert("Please upload a notice first.");

        return;
    }


    document.getElementById("noticeResult")
        .style.display = "block";


    document.getElementById("noticeTitle")
        .textContent = "College Hackathon 2026";

    document.getElementById("noticeDate")
        .textContent = "31 August 2026";

    document.getElementById("noticeTime")
        .textContent = "2:00 PM";

    document.getElementById("noticeLocation")
        .textContent = "Innovation Lab";

    document.getElementById("noticeDeadline")
        .textContent = "Registration closes today";

}


// CLUB SELECTOR

function selectInterest(button) {

    button.classList.toggle("selected");
}


function recommendClub() {

    const selected =
        document.querySelectorAll(
            ".interests button.selected"
        );

    const result =
        document.getElementById("clubResult");


    if (selected.length === 0) {

        result.innerHTML =
            "<p>Please select at least one interest.</p>";

        return;
    }


    let interests = [];

    selected.forEach(button => {

        interests.push(button.textContent);

    });


    result.innerHTML = `
        <div class="card">

            <h2>🤖 CampusAI Recommendation</h2>

            <p>
                Based on your interests (${interests.join(", ")}),
                you may enjoy the Technology, AI or Entrepreneurship
                clubs.
            </p>

        </div>
    `;
}


// CAMPUS SEARCH

function searchLocation() {

    const search =
        document.getElementById("locationSearch")
            .value
            .toLowerCase();


    const locations =
        document.querySelectorAll(".location");


    locations.forEach(location => {

        const text =
            location.textContent.toLowerCase();


        if (text.includes(search)) {

            location.style.display = "block";

        } else {

            location.style.display = "none";

        }

    });
}