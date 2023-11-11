function $(e){
				return document.querySelector(e)
}

const urls = [
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQAEQDIjS-LqKnTyc0tO3kl7H3O1TKRE5yZIE5V9MYUZ7MH7ml6wqvhhQZH&s=10",
   "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSylEUp5UE-AQjFUFbFVDPZ0tiECgN1mj9jFQ&usqp=CAU",
   "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ_AHHYQ7H6qCR3709OOABfWrEYo-gNdtC_QQ&usqp=CAU",
   "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT3GJC6bXQ65RuSj7cG9qr6sXN48ISmHfKq_Q&usqp=CAU",
   "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR99O9Kk19PK2HzBKzYILcKf1aKirTEHpD8Hg&usqp=CAU",
   "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQzja3Pe8F6JoSN8c19wljkVMbUcMUdw6SxKg&usqp=CAU",
   "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQATQAtivyCYaojFuvgERbsDmXBACBdkki0LA&usqp=CAU",
   "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQCFUZjDqhv3TaaqrF6DGkzWqE2KRR5QfUSfA&usqp=CAU",
   "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSMmDkIEJrR7dIpcrg3lgGSr3bxpBkG18te-g&usqp=CAU",
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS0PklSXO0FSyKc4oaW23OzI3AdmFs-QikSrA&usqp=CAU"
]
var limit = 1;
const API_KEY = "+VJ8com+rWGkXVXrFHsqAg==fuHdHd1qpTDDvMUQ";

const chuck = () =>{
		$('.bike').style.display="block";
				$('#result').style.display = "none"
fetch("https://api.chucknorris.io/jokes/random")
.then(res => res.json())
.then((data) =>{
				$('#result').innerHTML = data.value;
						$('#result').style.display = "flex"
				let image = Math.floor(Math.random()*(urls.length))
				
				const img = document.createElement("img")
img.src = urls[image];
img.classList.add("img")
				$("#imgCont").innerHTML = ""
$("#imgCont").appendChild(img)
				$('.bike').style.display="none"
}).catch((err)=>{
				console.log('Error Occured: '+err)
})
}

window.onload =()=>{
				chuck()
}
function getRandom(){
								
				chuck()
}
