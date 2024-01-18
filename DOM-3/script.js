const arr =[
    {dp:"https://images.pexels.com/photos/3908080/pexels-photo-3908080.jpeg?auto=compress&cs=tinysrgb&w=600",
    story:"https://images.pexels.com/photos/733416/pexels-photo-733416.jpeg?auto=compress&cs=tinysrgb&w=600"
    },
    {dp:"https://images.pexels.com/photos/64219/dolphin-marine-mammals-water-sea-64219.jpeg?auto=compress&cs=tinysrgb&w=600",
    story:"https://images.pexels.com/photos/2194261/pexels-photo-2194261.jpeg?auto=compress&cs=tinysrgb&w=600"
    },
    {dp:"https://images.pexels.com/photos/3280908/pexels-photo-3280908.jpeg?auto=compress&cs=tinysrgb&w=600",
    story:"https://images.pexels.com/photos/1108099/pexels-photo-1108099.jpeg?auto=compress&cs=tinysrgb&w=600"
    },
    {dp:"https://images.pexels.com/photos/62289/yemen-chameleon-chamaeleo-calyptratus-chameleon-reptile-62289.jpeg?auto=compress&cs=tinysrgb&w=600",
    story:"https://images.pexels.com/photos/598966/pexels-photo-598966.jpeg?auto=compress&cs=tinysrgb&w=600"
    },
    {dp:"https://images.pexels.com/photos/923360/pexels-photo-923360.jpeg?auto=compress&cs=tinysrgb&w=600",
    story:"https://images.pexels.com/photos/52500/horse-herd-fog-nature-52500.jpeg?auto=compress&cs=tinysrgb&w=600"
    }
]

let clutter = ""
let storiyan = document.querySelector("#storiyan")

arr.forEach(function(item,index){
   clutter+=`<div class="story">
   <img id=${index} src="${item.dp}" alt="">
  </div>`
})

storiyan.innerHTML = clutter

storiyan.addEventListener('click',function(e){
   var fullScreen = document.querySelector('#full-screen');
   fullScreen.style.display =  'block';
   fullScreen.style.backgroundImage = `url(${arr[e.target.id].story})`

   setTimeout(function(){
    fullScreen.style.display =  'none';
   },3000)
})