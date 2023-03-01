

/* Getting data object from data.json */
fetch('./data.json')
    .then((response) => response.json())
    .then((data) => createEvaluationScoreFromDataJSON(data));

let summaryCont = document.getElementById("summaryContainer");

// /* creation of new elements that are filled with information from the object that was received from the file data.json */
function createEvaluationScoreFromDataJSON(data) {
    for (let i = 0; i < data.length; i++) {
        let newSkillDiv = document.createElement("section");
        newSkillDiv.className = "skill-evaluation";

        let skillIcon = document.createElement("img");
        skillIcon.src = data[i].icon;
        skillIcon.setAttribute("alt",`icon-${data[i].category}`);
        newSkillDiv.append(skillIcon);

        let skillName = document.createElement("h3");
        skillName.className = "skill-evaluation__name";
        skillName.textContent = data[i].category;
        newSkillDiv.append(skillName);

        /* Modification of classes to change styles, according to the title of section:  */
        switch (skillName.textContent) {
            case "Reaction":
                newSkillDiv.classList.add("light-red");
                break;
            case "Memory":
                newSkillDiv.classList.add("orange-yellow");
                break;
            case "Verbal":
                newSkillDiv.classList.add("green-teal");
                break;
            case "Visual":
                newSkillDiv.classList.add("cobalt-blue");
                break;
            default:
                break;
        }
        let skillRatioScore = document.createElement("p");
        skillRatioScore.className = "skill-evaluation__ratio-of-score";
        let skillScore = document.createElement("span");
        skillScore.className = "skill-evaluation__score";
        skillScore.innerHTML = data[i].score;
        skillRatioScore.append(skillScore)
        skillRatioScore.append(" /100");
        newSkillDiv.append(skillRatioScore);
        /* Inserting constructed sections on a page */
        summaryCont.insertBefore(newSkillDiv, summaryCont.children[i + 1])
    }

}


