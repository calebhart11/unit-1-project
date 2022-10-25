const baseUrl =  "https://anapioficeandfire.com/api/" //pagination ex: ?page=1&pageSize=10"
const gotBooks = "https://anapioficeandfire.com/api/books/"
const gotChars = "https://anapioficeandfire.com/api/characters?name=" // fill spaces with %20
const gotHouses = "https://anapioficeandfire.com/api/houses/"
let gotInfo, userInput
$p0 = ("# ")
$p1 = $("#name")
$p2 = $("#titles")
$p3 = $("#aliases")
$p4 = $("#allegiances")
$p5 = $("#culture")
$p6 = $("#born")
$p7 = $("#died")
$p8 = $("#father")
$p9 = $("#mother")
$p10 = $("#gender")
$p11 = $("#spouse")
$p12 = $("#books")
$p13 = $("#playedBy")
$p14 = $("#povBooks")
$p15 = $("#tvSeries")

function gotData(name) {
$.ajax(`${gotChars}${name}`)
.then((data) =>{
gotInfo = data[0]
console.log(gotInfo, "<< here's the info")
render(gotInfo)
},
    (error) => {
        console.log("Bad Request", error)
}
)
}
    function render(gotInfo) {
        $p1.text(`name:  ${gotInfo.name}`)
        $p2.text(`titles:  ${gotInfo.titles}`)
        $p3.text(`aliases:  ${gotInfo.aliases}`)
        $p4.text(`allegiances:  ${gotInfo.allegiances}`)
        $p5.text(`culture:  ${gotInfo.culture}`)
        $p6.text(`born:  ${gotInfo.born}`)
        $p7.text(`died:  ${gotInfo.died}`)
        $p8.text(`father:  ${gotInfo.father}`)
        $p9.text(`mother:  ${gotInfo.mother}`)
        $p10.text(`gender:  ${gotInfo.gender}`)
        $p11.text(`spouse:  ${gotInfo.spouse}`)
        $p12.text(`books:  ${gotInfo.books}`)
        $p13.text(`played By:  ${gotInfo.playedBy}`)
        $p14.text(`pov Books:  ${gotInfo.povBooks}`)
        $p15.text(`TV Series:  ${gotInfo.tvSeries}`)   
    }
    $("input[type=submit]").on("click", (event) => {

        event.preventDefault()  
    
        userInput = $("input[type=text]").val()
        
        gotData(userInput)
})