checkMode();

function applySelected(element, index) {
    let currentlySelected = document.getElementsByClassName("portfolio-selected");
    if (element.classList.contains("portfolio-selected")) return
    for (const iterator of currentlySelected) {
        iterator.classList.remove("portfolio-selected");
    }
    element.classList.add("portfolio-selected");

    let elements = ["<a href=\"https://discord.com/oauth2/authorize?client_id=722953822456250478&scope=bot&permissions=8\" target=\"_blank\"> <img data-aos=\"fade-up\" data-aos-duration=\"1000\" data-aos-delay=\"1000\" src=\"https://braumobot.site/braum.png\" alt=\"\" class=\"aos-init \"></a><br><p data-aos=\"fade-up\" data-aos-duration=\"1000\" data-aos-delay=\"200\" class=\"aos-init\">Braumobot is a discord bot created for the community! Braumobot gets info about champions, basic info about players, displays your mastery and more!</p>", "<a href=\"https:\/\/github.com/C4LLM3P3T3R/SpinMe\" target=\"_blank\"> <img data-aos=\"fade-up\" data-aos-duration=\"1000\" data-aos-delay=\"1000\" src=\"./img/spinme.gif\" alt=\"\" class=\"aos-init \"></a><br><p data-aos=\"fade-up\" data-aos-duration=\"1000\" data-aos-delay=\"200\" class=\"aos-init\">SpinMe is a bot that allows you to play slots on your discord server! It has built in economy, leaderboards, level system and more!</p>", "<a href=\"https:\/\/github.com/C4LLM3P3T3R/BlackJake\" target=\"_blank\"> <img data-aos=\"fade-up\" data-aos-duration=\"1000\" data-aos-delay=\"1000\" src=\"./img/Blackjack.png\" alt=\"\" class=\"aos-init \"></a><br><p data-aos=\"fade-up\" data-aos-duration=\"1000\" data-aos-delay=\"200\" class=\"aos-init\">BlackJake is a bot that allows you to play BlackJack on your discord server! Economy system coming soon!</p>", "<a href=\"#\" target=\"_blank\"> <img data-aos=\"fade-up\" data-aos-duration=\"1000\" data-aos-delay=\"1000\" src=\"./img/poro.jpg\" alt=\"\" class=\"aos-init \"></a><br><p data-aos=\"fade-up\" data-aos-duration=\"1000\" data-aos-delay=\"200\" class=\"aos-init\">PoroBot is a ticket bot that manages user questions! Currently reworked!</p>", "<a href=\"https:\/\/www.spigotmc.org/members/c4llm3p3t3r.859499/\" target=\"_blank\"> <img data-aos=\"fade-up\" data-aos-duration=\"1000\" data-aos-delay=\"1000\" src=\"./img/plugins.png\" alt=\"\" class=\"aos-init \"></a><br><p data-aos=\"fade-up\" data-aos-duration=\"1000\" data-aos-delay=\"200\" class=\"aos-init\">Here are all of my plugins, click on them to get redirected to my spigot profile! </p>"]

    document.getElementsByClassName("portfolio-gallery")[0].innerHTML = elements[index].replace("\\", "");


}

function checkMode() {

    if (document.cookie.split(";").indexOf("mode=dark") >= 0) {
        let oldlink = document.getElementById("dark");
        oldlink.rel = "stylesheet";
        window.onload = () => {
            let s = document.getElementById("switcher").checked = true;
        }
    } else {
        document.cookie = "mode=light; expires=Thu, 18 Dec 9999 12:00:00 UTC; path=/"
        let oldlink = document.getElementById("light");
        oldlink.rel = "stylesheet";
    }
}

function switchMode() {
    if (document.cookie.split(";").indexOf("mode=dark")) {
        let oldlink = document.getElementById("light");
        oldlink.rel = "stylesheet alternate";
        let newlink = document.getElementById("dark");
        newlink.rel = "stylesheet";
        document.cookie = "mode=dark; expires=Thu, 18 Dec 9999 12:00:00 UTC; path=/"
    } else {
        let oldlink = document.getElementById("dark");
        oldlink.rel = "stylesheet alternate";
        let newlink = document.getElementById("light");
        newlink.rel = "stylesheet";
        document.cookie = "mode=light; expires=Thu, 18 Dec 9999 12:00:00 UTC; path=/"
    }
}