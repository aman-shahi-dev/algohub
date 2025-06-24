
// status ka logic:-

const statusBtn = document.querySelector(".statusBtn")

const platformBtn = document.querySelector(".platformBtn")

function toggleDropdownStatus() {
  document.getElementById("statusDropdown").classList.toggle("show")
}

const accepted = document.getElementById('accepted')

const wrong = document.getElementById('wrong')

const statusResult = document.getElementById('statusResult')

accepted.addEventListener('click', (e) => { // e is event
    e.preventDefault()
    statusResult.textContent = `✅ Accepted`
})


wrong.addEventListener('click', (e) => { // e is event
    e.preventDefault()
    statusResult.textContent = `❌ Wrong Answer`
})


// Platforms ka logic:-


const platformResult = document.getElementById('platformResult')

const platformDropdown = document.getElementById('platformDropdown')


function toggleDropdownPlatform() {
  document.getElementById("platformDropdown").classList.toggle("show")
}

const platforms = [
  {
    id: 'leetcode',
    text: 'Leetcode',
    icon: 'https://img.icons8.com/external-tal-revivo-color-tal-revivo/24/external-level-up-your-coding-skills-and-quickly-land-a-job-logo-color-tal-revivo.png'
  },
  {
    id: 'codechef',
    text: 'CodeChef',
    icon: 'https://img.icons8.com/ios/50/codechef.png'
  },
  {
    id: 'atcoder',
    text: 'AtCoder',
    icon: './assets/atcoder icon.svg'
  },
  {
    id: 'codeforces',
    text: 'Codeforces',
    icon: 'https://img.icons8.com/external-tal-revivo-color-tal-revivo/24/external-codeforces-programming-competitions-and-contests-programming-community-logo-color-tal-revivo.png'
  }
]


platforms.forEach(({ id, text, icon }) => {
  const element = document.getElementById(id)
  element.addEventListener('click', () => {

    platformResult.innerHTML = `
      <span style="display: flex; align-items: center; justify-content: center; margin-top: 3px">
        <img src="${icon}" alt="${text}" width="20" height="20" />
        ${text}
      </span>
    `
  })
})

// yeh dono ke liye check karega, ki agar status ya platform ke alawa kahi click kiya toh menu hide kardo

window.onclick = function (event) {
  if (
    !event.target.closest(".statusBtn") 
    && 
    !event.target.closest(".platformBtn")
    )
    {
    let dropdowns = document.getElementsByClassName("dropdown-content")
    for (let i = 0; i < dropdowns.length; i++) {
      let openDropdown = dropdowns[i];
      if (openDropdown.classList.contains("show")) {
        openDropdown.classList.remove("show");
      }
    }
  }
}

