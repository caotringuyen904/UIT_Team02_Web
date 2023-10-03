
//Initialize Button object
let ourStory_btn = document.getElementById("ourstory_btn")
let promotionNew_btn = document.getElementById("promotionnew_btn")
let career_btn = document.getElementById("career_btn")
let bookAParty_btn = document.getElementById("bookaparty_btn")

//Initialize placeholder
let storyHolder = document.getElementById("storyholder")
let promotionHolder = document.getElementById("promotionholder")
let footerholder = document.getElementById("footer")

//Initialize story object
let story = [
{
    story_img:"/about/Info_img/story_chicken_1_500x500.png",
    story_content:"Once upon a time, there was an old man call The Oldman who had a dream of opening his own fried chicken restaurant. He had always loved fried chicken, and he believed that he could make the best fried chicken in the world. The Oldman worked hard to save up enough money to open his restaurant. He also spent years perfecting his fried chicken recipe. She experimented with different flours, seasonings, and cooking methods until he finally found the perfect combination.When The Oldman finally opened his restaurant, he called it The Oldman he was excited to share his delicious fried chicken with the world"
},
{
    story_img:"/about/Info_img/story_chicken_2_743x570.png",
    story_content:"The Oldman Fried Chicken was a hit from the start. People loved his crispy, juicy chicken and his flavorful seasonings. The Oldman's restaurant quickly became a popular spot for locals and tourists alike. The Oldman was passionate about his food and his customers. He loved interacting with his customers and hearing their feedback. He was also always looking for ways to improve his menu and his restaurant. One day, The Oldman decided to enter his fried chicken in a local cooking contest. He was up against some of the best chefs in the city, but He was confident in his recipe. The Oldman's fried chicken won the contest! his chicken was praised by the judges for its flavor, texture, and presentation"
},
{
    story_img:"/about/Info_img/story_chicken_3_500x500.png",
    story_content:"After The Old man won the cooking contest, her restaurant became even more popular. People from all over the country came to try her fried chicken. The Old man even started receiving offers from investors who wanted to help her expand her business. The Old man was proud of what she had accomplished. She had started out with a small dream, and she had turned it into a successful business. She was also grateful for the support of her customers and her team."
},
{
    story_img:"/about/Info_img/story_chicken_4_461x336.png"
    ,
    story_content:"The Old man's Fried Chicken is now a national chain with restaurants all over the country. The Old man herself is a celebrity chef, and she has appeared on numerous cooking shows and magazines. She is also an inspiration to many young entrepreneurs who dream of starting their own businesses.The Old man's story is a reminder that anything is possible if you have a dream and you're willing to work hard. It's also a reminder that the best food is made with love and passion."
}
]
console.log(story)


//Initialize Promotion object
let promotions =[
{
    id:"protmotion01",
    inCart:0,
    productImg:"./Info_img/combo_chicken_500x500.png",
    productTitle: "Chicken Bucket Medium",
    productOldPrice: 40,
    productPrice: 20,
    productDescription: "Bucket of 15 chicken pieces",
    type: 'Promotion Fried Chicken'
},
{
    id:"protmotion02",
    inCart:0,
    productImg:"./Info_img/combo_chicken_2_800x625.png",
    productTitle: "Chicken Disk",
    productOldPrice: 20,
    productPrice: 10,
    productDescription: "Disk of 8 chicken pieces",
    type: 'Promotion Fried Chicken'
},
{
    id:"protmotion03",
    inCart:0,
    productImg:"./Info_img/combo_chicken_3_466x419.png",
    productTitle: "Chicken Bucket Large",
    productOldPrice: 50,
    productPrice: 23,
    productDescription: "Bucket of 27 chicken pieces",
    type: 'Promotion Fried Chicken'
}
]
console.log(promotions)

//Initialize the Restaurant places
let restaurants = [
    {
        resID:"001",
        name:"Ho Chi Minh branch",
        address:"Đ. Đồng Khởi, P, Quận 1, Thành phố Hồ Chí Minh 700000",
        link:"https://www.google.com/search?q=restaurant+viet+nam+address&sca_esv=570269325&rlz=1C1ONGR_enVN979VN979&sxsrf=AM9HkKmVtlPva1EE5P-mCSa3v_GEl_qdUA%3A1696317370377&ei=ur8bZavSFqGC2roP96uj2A8&oq=restaurant+viet+nam+add&gs_lp=Egxnd3Mtd2l6LXNlcnAiF3Jlc3RhdXJhbnQgdmlldCBuYW0gYWRkKgIIADIFECEYoAEyBRAhGKABMggQIRgWGB4YHTIIECEYFhgeGB0yCBAhGBYYHhgdMggQIRgWGB4YHTIIECEYFhgeGB0yCBAhGBYYHhgdMggQIRgWGB4YHTIKECEYFhgeGA8YHUi9DVBEWKcIcAF4AZABAJgBlgGgAbsEqgEDMC40uAEByAEA-AEBwgIKEAAYRxjWBBiwA8ICBxAAGIAEGArCAgYQABgWGB7CAgIQJsICBBAhGBXiAwQYACBBiAYBkAYI&sclient=gws-wiz-serp#rlimm=6303144761789413895",
        phone:"0900090211",
    },
    {
        resID:"002",
        name:"Ha Noi branch",
        address:"75 P. Nguyễn Đình Chiểu, Lê Đại Hành, Hai Bà Trưng, Hà Nội",
        link:"https://www.google.com/search?q=restaurant+viet+nam+address+hanoi&rlz=1C1ONGR_enVN979VN979&oq=restaurant+viet+nam+address+hanoi&gs_lcrp=EgZjaHJvbWUyBggAEEUYOTIJCAEQIRgKGKAB0gEIMzQxMmowajSoAgCwAgA&sourceid=chrome&ie=UTF-8#rlimm=4668035241847581460",
        phone:"0900090212",
    }
]

console.log(restaurants)
//Render story function
ourStory_btn.addEventListener("click", function(){
    promotionHolder.innerHTML = ""
    for(let i in story){
        let storyBox = document.createElement("article")
        let storyImage = document.createElement("img")
        storyImage.setAttribute("src", story[i].story_img)
        let storyContent = document.createElement("p")
        storyContent.textContent = story[i].story_content
        storyBox.appendChild(storyImage)
        storyBox.appendChild(storyContent)
        storyHolder.appendChild(storyBox)
    }
})

promotionNew_btn.addEventListener("click", function(){
    storyHolder.innerHTML = ""
    for(let i in promotions){
        //generate a container for promotion
        let promotionBox = document.createElement("section")

        //generate img of promotion food
        let promotionImg = document.createElement("img")
        promotionImg.setAttribute("src", promotions[i].productImg)
        //generate name of promotion food
        let promotionName = document.createElement("p")
        promotionName.textContent = promotions[i].productTitle
        //generate old price of promotion food
        let promotionOldPrice = document.createElement("p")
        promotionOldPrice.textContent = promotions[i].productOldPrice + "$"
        promotionOldPrice.setAttribute("style", "text-decoration: line-through")
        //generate current price of promotion food
        let promotionPrice = document.createElement("p")
        promotionPrice.textContent = promotions[i].productPrice + "$"
        //generate quantity that user want to buy of promotion food
        let promotionQuantity = document.createElement("p")
        promotionQuantity.textContent =  promotions[i].inCart
        //generate increase quantity button of promotion food
        let promotionIcsBtn = document.createElement("button")
        promotionIcsBtn.textContent = "+"
        promotionIcsBtn.setAttribute("id", "ics_btn")
        promotionIcsBtn.addEventListener("click", function(){
            promotions[i].inCart++
            promotionQuantity.textContent = promotions[i].inCart
        })
        //generate decrease quantity button of promotion food
        let promotionDcsBtn = document.createElement("button")
        promotionDcsBtn.textContent = "-"
        promotionDcsBtn.setAttribute("id", "dcs_btn")
        promotionDcsBtn.addEventListener("click", function(){
            promotions[i].inCart--
            promotionQuantity.textContent = promotions[i].inCart
        })
        //generate add to cart button of promotion food
        let addToCart = document.createElement("button")
        addToCart.textContent = "Add To Cart"
        addToCart.setAttribute("id", "addtocart_btn")
        addToCart.addEventListener("click", function(){
            let temp = promotions[i]
            localStorage.setItem(JSON.stringify(promotions[i].id),JSON.stringify(promotions[i]))
        })
        //add all the component of promotion box into the box
        promotionBox.appendChild(promotionName)
        promotionBox.appendChild(promotionImg)
        promotionBox.appendChild(promotionOldPrice)
        promotionBox.appendChild(promotionPrice)
        promotionBox.appendChild(promotionQuantity)
        promotionBox.appendChild(promotionIcsBtn)
        promotionBox.appendChild(promotionDcsBtn)
        promotionBox.appendChild(addToCart)
        // add all promotion box to the place holder that recreate in html
        promotionHolder.appendChild(promotionBox)
    }
})

//Render the footer of html page
    let footerTitle = document.createElement("p")
    footerTitle.textContent = "Old Man Restaurant"
    footerTitle.setAttribute("id","footer_title")
    footerholder.appendChild(footerTitle)
    for(let i in restaurants){
        let contact = document.createElement("article")
        let resName = document.createElement("p")
        resName.textContent = restaurants[i].name
        contact.appendChild(resName)
        let resAddPhone = document.createElement("address")
        let resAddress = document.createElement("a")
        resAddress.textContent = "Address: " + restaurants[i].address
        resAddress.setAttribute("href",restaurants[i].link)
        resAddPhone.appendChild(resAddress)
        let resPhone = document.createElement("a")
        resPhone.textContent = "Phone number: " + restaurants[i].phone
        resPhone.setAttribute("href","tel:" + restaurants[i].phone)
        resAddPhone.appendChild(resPhone)
        contact.appendChild(resAddPhone)
        footerholder.appendChild(contact)
    }
    let pageUp_btn = document.createElement("a")
    pageUp_btn.textContent = "^"
    pageUp_btn.setAttribute("href", "#")
    pageUp_btn.setAttribute("id", "pageup_btn")
    footerholder.appendChild(pageUp_btn)