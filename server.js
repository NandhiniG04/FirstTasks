const express = require('express');
const app = express();
const PORT = 3000;

app.use(express.static('public'));

app.get('/funfact', (req, res) => {
    const { age, color } = req.query;
    const ageNum = parseInt(age);

    let agePart = "";
    if (ageNum < 13)
        agePart = "Full of energy and curiosity";
    else if (ageNum < 20)
        agePart = "Exploring the world and yourself";
    else if (ageNum < 30)
        agePart = "At the peak of creativity and learning";
    else if (ageNum < 50)
        agePart = "Gaining wisdom and Experiences";
    else
        agePart = "Enjoying the richness of life";

    let colorPart = "";
    switch (color.toLowerCase()) {
        case "red":
             colorPart = "passionate and bold"; break;
        case "blue":
             colorPart = "calm and creative"; break;
        case "green":
             colorPart = "balanced and nature-loving"; break;
        case "yellow":
             colorPart = "cheerful and optimistic"; break;
        default:
             colorPart = "unique in your own way";
    }

    const fact = `At age ${age}, you are ${agePart} and your favourite color, ${color}, makes you ${colorPart}!`;
    res.json({ fact });
});

app.listen(PORT, () => console.log(`Server running at http://localhost:${PORT}`));
