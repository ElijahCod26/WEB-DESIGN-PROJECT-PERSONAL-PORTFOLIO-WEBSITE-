<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Portfolio PPT Table of Contents</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            text-align: center;
            background-color: lightgray;
        }
        h1 {
            color: darkblue;
        }
        ul {
            list-style-type: none;
            padding: 0;
        }
        li {
            background: white;
            margin: 10px;
            padding: 10px;
            border-radius: 5px;
            box-shadow: 2px 2px 10px rgba(0, 0, 0, 0.2);
        }
    </style>
</head>
<body>

    <h1>Personal Portfolio PPT Table of Contents</h1>
    <ul id="toc-list"></ul>

    <script>
        // Table of Contents Data
        const tocItems = [
            "Introduction - Brief self-introduction & purpose",
            "About Me - Background, skills, and interests",
            "Education - Academic qualifications & coursework",
            "Projects - Showcase key projects",
            "Skills & Expertise - Technical & soft skills",
            "Experience - Internships, freelance work",
            "Certifications & Achievements - Recognitions",
            "Testimonials - Feedback from mentors/peers",
            "Contact Information - Email, phone, LinkedIn, GitHub"
        ];

        // Get the <ul> element
        const tocList = document.getElementById("toc-list");

        // Populate the list dynamically
        tocItems.forEach(item => {
            const listItem = document.createElement("li");
            listItem.textContent = item;
            tocList.appendChild(listItem);
        });
    </script>

</body>
</html>
