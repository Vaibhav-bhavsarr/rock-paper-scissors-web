/* 2/oct/2025 */

let playerScore = 0, computerScore = 0;
let player, computer;
let option = document.querySelectorAll(".player-option")
let comp = document.querySelectorAll(".comp-option")
let msgCont = document.querySelector(".msg-cont")


option.forEach(e => {
    e.addEventListener("click", () => {
        console.log(e.innerText);

        option[0].classList.remove("clicked")
        option[1].classList.remove("clicked")
        option[2].classList.remove("clicked")

        e.classList.add("clicked")
        comp[0].style.width = ""
        comp[0].style.height = ""
        comp[1].style.width = ""
        comp[1].style.height = ""
        comp[2].style.width = ""
        comp[2].style.height = ""

        comp[0].style.border = ""
        comp[1].style.border = ""
        comp[2].style.border = ""

        let ran = Math.random()
        console.log(ran);
        if (ran < 0.33) {

            comp[0].style.width = "90px"
            comp[0].style.height = "90px"
            comp[0].style.border = "5px solid black"

            //Use e.getAttribute("id") to identify where user clicked & set id on images
            player = e.getAttribute("id")
            computer = "Rock"
            
            if (computer === player) {
                msgCont.innerText = `Tie with ${player}`
            }
            else if (player === "Paper") {
                msgCont.innerText = `You won, Your ${player} beats ${computer}`
                playerScore++
                document.querySelector(".player").innerText = `You : ${playerScore}`
            }
            else if (player === "Scissor") {
                msgCont.innerText = `Computer won, Computers ${computer} beats ${player}`
                computerScore++
                document.querySelector(".computer").innerText = `Computer : ${computerScore}`
            }
        }

        else if (ran >= 0.33 && ran < 0.66) {
            comp[0].style.width = "90px"
            comp[0].style.height = "90px"
            comp[1].style.border = "5px solid black"
            player = e.getAttribute("id")
            computer = "Paper"
            if (computer === player) {
                msgCont.innerText = `Tie with ${player}`
            }
            else if (player === "Rock") {
                msgCont.innerText = `Computer won, Computers ${computer} beats ${player}`
                computerScore++
                document.querySelector(".computer").innerText = `Computer : ${computerScore}`
            }
            else if (player === "Scissor") {
                msgCont.innerText = `You won, Your ${player} beats ${computer}`
                playerScore++
                document.querySelector(".player").innerText = `You : ${playerScore}`
            }
        }
        else {
            comp[0].style.width = "90px"
            comp[0].style.height = "90px"
            comp[2].style.border = "5px solid black"

            player = e.getAttribute("id")

            computer = "Scissor"
            if (computer === player) {
                msgCont.innerText = `Tie with ${player}`
            }
            else if (player === "Rock") {
                msgCont.innerText = `You won, Your ${player} beats ${computer}`
                playerScore++
                document.querySelector(".player").innerText = `You : ${playerScore}`
            }
            else if (player === "Paper") {
                msgCont.innerText = `Computer won, Computers ${computer} beats ${player}`
                computerScore++
                document.querySelector(".computer").innerText = `Computer : ${computerScore}`
            }
        }
    }
    )
})


