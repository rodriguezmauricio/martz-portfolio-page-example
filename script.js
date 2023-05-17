console.log("Hello, dev!");

// /////////////////////////////////////////////////////////

//FOOTER YEAR
let currentYear = document.querySelector("#current-year");

const data = new Date();
const ano = data.getFullYear();

currentYear.innerText = ano;

// RENDER PROJECTS

const projects = [
	{
		id: 0,
		img: "https://res.cloudinary.com/dz209s6jk/image/upload/f_auto,q_auto,w_475/Challenges/mflwrbyf8kjvqvpxq9uj.jpg",
		title: "Design Portfolio",
		technologies: ["html", "css"],
	},
	{
		id: 1,
		img: "https://res.cloudinary.com/dz209s6jk/image/upload/f_auto,q_auto,w_475/Challenges/tgjqtvyeakym2rwnfumc.jpg",
		title: "E-Learning Landing Page",
		technologies: ["html", "css"],
	},
	{
		id: 2,
		img: "https://res.cloudinary.com/dz209s6jk/image/upload/f_auto,q_auto,w_475/Challenges/o1mwa6sv5w41z8bj3gfa.jpg",
		title: "Todo Web App",
		technologies: ["html", "css", "javascript"],
	},
	{
		id: 3,
		img: "https://res.cloudinary.com/dz209s6jk/image/upload/f_auto,q_auto,w_475/Challenges/maz79cid0jllq0js0qyi.jpg",
		title: "Entertainment Web App",
		technologies: ["html", "css", "javascript"],
	},
	{
		id: 4,
		img: "https://res.cloudinary.com/dz209s6jk/image/upload/f_auto,q_auto,w_475/Challenges/lphd7s3gcbcgcxmfjt19.jpg",
		title: "Memory Game",
		technologies: ["html", "css", "javascript"],
	},
	{
		id: 5,
		img: "https://res.cloudinary.com/dz209s6jk/image/upload/f_auto,q_auto,w_475/Challenges/nlvtx70nqb7vj1xfwj22.jpg",
		title: "Art Gallery Showcase",
		technologies: ["html", "css", "javascript"],
	},
];
const projectContainer = document.querySelector("#project-container");

let projectContent = "";

projects.forEach((item) => {
	const appendContainer = document.createElement("div");
	appendContainer.classList.add("projects-item");

	projectContent = `
       
                    <img src="${item.img}" alt="">
                    <div class="project-item-content">
                        <h5>${item.title}</h5>
                        <p> 
                        ${item.technologies.join(" ")}
                        </p>
                    </div>
                
        `;

	appendContainer.innerHTML = projectContent;
	projectContainer.appendChild(appendContainer);
});
