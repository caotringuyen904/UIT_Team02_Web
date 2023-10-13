
//Initialize Button object
const ourStory_btn = document.getElementById("ourstory_btn")
const promotionNew_btn = document.getElementById("promotionnew_btn")
const career_btn = document.getElementById("career_btn")
const bookAParty_btn = document.getElementById("bookaparty_btn")

//Initialize placeholder
const storyHolder = document.getElementById("storyholder")
const promotionHolder = document.getElementById("promotionholder")
const footerHolder = document.getElementById("footer")
const careerHolder = document.getElementById("careerholder")
const partyHolder = document.getElementById("partyholder")

//Initialize story object
const story = [
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
    id:1,
    inCart:0,
    productImg:"/about/Info_img/combo_chicken_500x500.png",
    productTitle: "Chicken Bucket Medium",
    productOldPrice: 40,
    productPrice: 20,
    productDescription: "Bucket of 15 chicken pieces",
    type: 'Promotion Fried Chicken'
},
{
    id:2,
    inCart:0,
    productImg:"/about/Info_img/combo_chicken_2_800x625.png",
    productTitle: "Chicken Disk",
    productOldPrice: 20,
    productPrice: 10,
    productDescription: "Disk of 8 chicken pieces",
    type: 'Promotion Fried Chicken'
},
{
    id:3,
    inCart:0,
    productImg:"/about/Info_img/combo_chicken_3_466x419.png",
    productTitle: "Chicken Bucket Large",
    productOldPrice: 50,
    productPrice: 23,
    productDescription: "Bucket of 27 chicken pieces",
    type: 'Promotion Fried Chicken'
}
]
console.log(promotions)

//Initialize the Restaurant places
const restaurants = [
    {
        resID:"001",
        name:"Ho Chi Minh branch",
        address:"Đ.Đồng Khởi, P, Quận 1, TP Hồ Chí Minh",
        district: "Quan 1",
        city: "HCM",
        link:"https://www.google.com/search?q=restaurant+viet+nam+address&sca_esv=570269325&rlz=1C1ONGR_enVN979VN979&sxsrf=AM9HkKmVtlPva1EE5P-mCSa3v_GEl_qdUA%3A1696317370377&ei=ur8bZavSFqGC2roP96uj2A8&oq=restaurant+viet+nam+add&gs_lp=Egxnd3Mtd2l6LXNlcnAiF3Jlc3RhdXJhbnQgdmlldCBuYW0gYWRkKgIIADIFECEYoAEyBRAhGKABMggQIRgWGB4YHTIIECEYFhgeGB0yCBAhGBYYHhgdMggQIRgWGB4YHTIIECEYFhgeGB0yCBAhGBYYHhgdMggQIRgWGB4YHTIKECEYFhgeGA8YHUi9DVBEWKcIcAF4AZABAJgBlgGgAbsEqgEDMC40uAEByAEA-AEBwgIKEAAYRxjWBBiwA8ICBxAAGIAEGArCAgYQABgWGB7CAgIQJsICBBAhGBXiAwQYACBBiAYBkAYI&sclient=gws-wiz-serp#rlimm=6303144761789413895",
        phone:"0900090211",
    },
    {
        resID:"002",
        name:"Ha Noi branch",
        address:"75 P.Nguyễn Đình Chiểu, Lê Đại Hành, Hai Bà Trưng, Hà Nội",
        district: "Quan Hai Ba Trung",
        city: "Hanoi",
        link:"https://www.google.com/search?q=restaurant+viet+nam+address+hanoi&rlz=1C1ONGR_enVN979VN979&oq=restaurant+viet+nam+address+hanoi&gs_lcrp=EgZjaHJvbWUyBggAEEUYOTIJCAEQIRgKGKAB0gEIMzQxMmowajSoAgCwAgA&sourceid=chrome&ie=UTF-8#rlimm=4668035241847581460",
        phone:"0900090212",
    }
]

console.log(restaurants)
//Render story function
ourStory_btn.addEventListener("click", function(){
    promotionHolder.innerHTML = ""
    careerHolder.innerHTML = ""
    storyHolder.innerHTML = ""
    partyHolder.innerHTML = ""
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
    promotionHolder.innerHTML = ""
    careerHolder.innerHTML = ""
    storyHolder.innerHTML = ""
    partyHolder.innerHTML = ""
    let promotionToCart =[]
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
            if(promotions[i].inCart == 0){
                promotions[i].inCart = 0;
            }
            else{
                promotions[i].inCart--
            }
            promotionQuantity.textContent = promotions[i].inCart
        })
        //generate add to cart button of promotion food
        
        let addToCart = document.createElement("button")
        addToCart.textContent = "Add To Cart"
        addToCart.setAttribute("id", "addtocart_btn")
        addToCart.addEventListener("click", function(){
            if(promotions[i].inCart == 0){
                if(promotionToCart.includes(promotions[i])){
                    for(let j in promotionToCart){
                        if(promotionToCart[j]===promotions[i]){
                            promotionToCart[j].inCart++
                            promotions[i].inCart = promotionToCart[j].inCart
                            promotionQuantity.textContent = promotions[i].inCart
                        }
                    }
                }else{
                    promotions[i].inCart++
                    promotionToCart.push(promotions[i])
                    promotionQuantity.textContent = promotions[i].inCart
                }   
            }else{
                if(promotionToCart.includes(promotions[i])){
                    for(let j in promotionToCart){
                        if(promotionToCart[j]===promotions[i]){
                            
                            promotionToCart[j].inCart = promotions[i].inCart
                            promotionQuantity.textContent = promotions[i].inCart
                        }
                    }
                }else{
                    promotionToCart.push(promotions[i])
                }
            }
          
            localStorage.setItem("promotion",JSON.stringify(promotionToCart))
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



//Position that still need employee
let lackPosition = ["Waiter/Waitress", "Manager", "Marketing"]
console.log(lackPosition)

//Render the career
career_btn.addEventListener("click", function(){
    promotionHolder.innerHTML = ""
    careerHolder.innerHTML = ""
    storyHolder.innerHTML = ""
    partyHolder.innerHTML = ""
    let form = document.createElement("form")
    form.setAttribute("id", "rescruitform")
    let dataList = document.createElement("select")
    dataList.setAttribute("id", "choosen")
    for (let i in lackPosition){
        let positions = document.createElement("option")
        positions.setAttribute("value", lackPosition[i])
        positions.textContent = lackPosition[i]
        dataList.appendChild(positions)
    }
    let dataList_lbl = document.createElement("label")
    dataList_lbl.setAttribute("for", "choosen")
    dataList_lbl.textContent = "Hiring Position: "
    form.appendChild(dataList_lbl)
    form.appendChild(dataList)

    
    

    let candidateFName = document.createElement("input")
    candidateFName.setAttribute("type", "text")
    candidateFName.setAttribute("id", "candidatefname")
    candidateFName.setAttribute("required", "true")
    let candidateFName_lb = document.createElement("label")
    candidateFName_lb.setAttribute("for","candidatefname")
    candidateFName_lb.textContent = "First Name:* "
    form.appendChild(candidateFName_lb)
    form.appendChild(candidateFName)


    let candidateLName = document.createElement("input")
    candidateLName.setAttribute("type", "text")
    candidateLName.setAttribute("id", "candidatelname")
    candidateLName.setAttribute("required", "true")
    let candidateLName_lb = document.createElement("label")
    candidateLName_lb.setAttribute("for","candidatelname")
    candidateLName_lb.textContent = "Last Name:* "
    form.appendChild(candidateLName_lb)
    form.appendChild(candidateLName)


    let candidateEmail = document.createElement("input")
    candidateEmail.setAttribute("type", "email")
    candidateEmail.setAttribute("id", "candidateemail")
    candidateEmail.setAttribute("required", "true")
    let candidateEmail_lb = document.createElement("label")
    candidateEmail_lb.setAttribute("for", "candidateemail")
    candidateEmail_lb.textContent = "Contact Email:* "
    form.appendChild(candidateEmail_lb)
    form.appendChild(candidateEmail)

    let buttonArea = document.createElement("div")
    buttonArea.setAttribute("id", "buttonarea")
    let submitBtn = document.createElement("input")
    submitBtn.setAttribute("type","submit")
    submitBtn.setAttribute("id","submit_btn")
    submitBtn.value = "Submit"
    form.addEventListener("submit",function(){
        let candidate = {
            submitID: dataList.value + candidateEmail.value,
            position: dataList.value,
            firstName: candidateFName.value,
            lastName: candidateLName.value,
            contactEMail: candidateEmail.value,
        }
        alert("Submit secessfully")
        localStorage.setItem(JSON.stringify(candidate.submitID),JSON.stringify(candidate))
    })
    let resetBtn = document.createElement("input")
    resetBtn.setAttribute("type","reset")
    resetBtn.setAttribute("id", "reset_btn")
    resetBtn.value = "Reset"
    resetBtn.addEventListener("click", function(){
        candidateFName.value=""
        candidateLName.value=""
        candidateEmail.value=""
    })
    buttonArea.appendChild(submitBtn)
    buttonArea.appendChild(resetBtn)
    form.appendChild(buttonArea)


    careerHolder.appendChild(form)
})

//Render the Party 
bookAParty_btn.addEventListener("click", function(){
    promotionHolder.innerHTML = ""
    careerHolder.innerHTML = ""
    storyHolder.innerHTML = ""
    partyHolder.innerHTML = ""

   

    //Generate a form container for party booking form

    let bookingTitle = document.createElement("p")
    bookingTitle.textContent = "BOOKING FORM"
    bookingTitle.setAttribute("id", "bookingtitle")
    let bookingImg = document.createElement("img")
    bookingImg.setAttribute("src", "./Info_img/party_1300x325.png")
    bookingImg.setAttribute("id","booking_img")
    partyHolder.appendChild(bookingTitle)
    partyHolder.appendChild(bookingImg)

    let bookingForm = document.createElement("form")
    bookingForm.setAttribute("id","bookingform")

    


    //Generate div for personal Infomation of customer
    let personalInfo = document.createElement("div")
    personalInfo.setAttribute("id", "personal_info")

    //Label for personal infomation
    let personalInfoLabel = document.createElement("p")
    personalInfoLabel.textContent = "PERSONAL INFORMATION"
    personalInfo.appendChild(personalInfoLabel)

    // full Name of the kid have party (not required)
    let fullNameChild = document.createElement("input")
    fullNameChild.setAttribute("type", "text")
    fullNameChild.setAttribute("id", "fullname_child")
    let fullNameChild_lb = document.createElement("label")
    fullNameChild_lb.setAttribute("for","fullname_child")
    fullNameChild_lb.textContent = "Full name of child "
    personalInfo.appendChild(fullNameChild_lb)
    personalInfo.appendChild(fullNameChild)

    //Full name of the customer (required)
    let fullNameParent = document.createElement("input")
    fullNameParent.setAttribute("type", "text")
    fullNameParent.setAttribute("id", "fullname_parent")
    fullNameParent.setAttribute("required", "true")
    let fullNameParent_lb = document.createElement("label")
    fullNameParent_lb.setAttribute("for","fullname_parent")
    fullNameParent_lb.textContent = "Full name of parent * "
    personalInfo.appendChild(fullNameParent_lb)
    personalInfo.appendChild(fullNameParent)
    
    //Phone contact of customer (required)
    let customerPhone = document.createElement("input")
    customerPhone.setAttribute("type", "tel")
    customerPhone.setAttribute("id", "customer_tel")
    customerPhone.setAttribute("required", "true")
    let customerPhone_lb = document.createElement("label")
    customerPhone_lb.setAttribute("for","customer_tel")
    customerPhone_lb.textContent = "Phone number * "
    personalInfo.appendChild(customerPhone_lb)
    personalInfo.appendChild(customerPhone)

    //Email of customer (required)
    let customerEMail = document.createElement("input")
    customerEMail.setAttribute("type", "email")
    customerEMail.setAttribute("id", "customer_email")
    customerEMail.setAttribute("required", "true")
    let customerEMail_lb = document.createElement("label")
    customerEMail_lb.setAttribute("for","customer_email")
    customerEMail_lb.textContent = "Email * "
    personalInfo.appendChild(customerEMail_lb)
    personalInfo.appendChild(customerEMail)


    bookingForm.appendChild(personalInfo)
    console.log(bookingForm)


    //Create a div for party infomation
    let partyInfo = document.createElement("div")
    partyInfo.setAttribute("id", "party_info")
    
    //label for the div
    let partyInfoLabel = document.createElement("p")
    partyInfoLabel.textContent = "PARTY INFORMATION"
    partyInfo.appendChild(partyInfoLabel)

    //Choosen the party type
    let partyType = document.createElement("div")
    partyType.setAttribute("id", "party_type")
    let partyType_lbl = document.createElement("p")
    partyType_lbl.textContent = "Party Type"
    partyType.appendChild(partyType_lbl)
    
    //Birthday choice
    let birthdayType = document.createElement("input")
    birthdayType.setAttribute("type", "radio")
    birthdayType.setAttribute("id","birthday_type")
    birthdayType.setAttribute("name","partytype")
    let birthdayTypelbl = document.createElement("label")
    birthdayTypelbl.setAttribute("for", "birthday_type")
    birthdayTypelbl.setAttribute("id","birthday_type_lbl")
    birthdayTypelbl.textContent = "Birthday Party"
    partyType.appendChild(birthdayType)
    partyType.appendChild(birthdayTypelbl)
    
    //common choice
    let commonType = document.createElement("input")
    commonType.setAttribute("type", "radio")
    commonType.setAttribute("id","common_type")
    commonType.setAttribute("name","partytype")
    let commonType_lbl = document.createElement("label")
    commonType_lbl.setAttribute("for", "common_type")
    commonType_lbl.textContent = "Party"
    partyType.appendChild(commonType)
    partyType.appendChild(commonType_lbl)

    partyInfo.appendChild(partyType)
    
    

    //The day that operate the party
    let bookingDate = document.createElement("div")
    bookingDate.setAttribute("id", "bookingdate")
    //label for booking date component
    let bookingDatelbl = document.createElement("p")
    bookingDatelbl.setAttribute("id","bookingdatelbl")
    bookingDatelbl.textContent = "Party date * "

    //Function generate option
    function generateMonthOptions (month_Booking){
        monthBooking.innerHTML ="";
        for(let i=1; i<13; i++){
            let monthOption =document.createElement("option")
            monthOption.setAttribute("value", i)
            monthOption.textContent = i
            month_Booking.appendChild(monthOption)
        }
    }
    function generateDayOptions (day_Booking, limit){
        dayBooking.innerHTML=""
        for(let i=1; i<limit+1; i++){
            let dayOption =document.createElement("option")
            dayOption.setAttribute("value", i)
            dayOption.textContent = i
            day_Booking.appendChild(dayOption)
        }
    }

    //Year choosen (current year and next year)
    let yearBooking = document.createElement("select")
    yearBooking.setAttribute("id","bookingyear")
    yearBooking.setAttribute ("required", "true")
    let year = new Date().getFullYear()
    let yearBookinglbl = document.createElement("option")
    yearBookinglbl.setAttribute("value","")
    yearBookinglbl.setAttribute("disabled", "true")
    yearBookinglbl.setAttribute("selected", "true")
    yearBookinglbl.setAttribute("hidden","true")
    yearBookinglbl.textContent = "Year"
    yearBooking.appendChild(yearBookinglbl)
    for(let i=0; i<2; i++){
        let yearOption = document.createElement("option")
        yearOption.setAttribute("value", year + i)
        yearOption.textContent = year + i
        yearBooking.appendChild(yearOption)
    }
    
    //Month choices only 12 in a year
    let monthBooking = document.createElement("select")
    monthBooking.setAttribute("id", "monthbooking")
    monthBooking.setAttribute ("required", "true")
    let monthBookinglbl = document.createElement("option")
    monthBookinglbl.setAttribute("value","")
    monthBookinglbl.setAttribute("disabled", "true")
    monthBookinglbl.setAttribute("selected", "true")
    monthBookinglbl.setAttribute("hidden","true")
    monthBookinglbl.textContent = "Month"
    monthBooking.appendChild(monthBookinglbl)
    
    //Day choices 
    let dayBooking = document.createElement("select")
    dayBooking.setAttribute("id", "daybooking")
    dayBooking.setAttribute ("required", "true")
    let dayBookinglbl = document.createElement("option" )
    dayBookinglbl.setAttribute("value","")
    dayBookinglbl.setAttribute("disabled", "true")
    dayBookinglbl.setAttribute("selected", "true")
    dayBookinglbl.setAttribute("hidden","true")
    dayBookinglbl.textContent = "Date"
    dayBooking.appendChild(dayBookinglbl)

    //Generate option for month and day
    yearBooking.addEventListener("change",function(){
        if(yearBooking.value%4 == 0){
            generateMonthOptions(monthBooking)
            monthBooking.addEventListener("change",function(){
                if(monthBooking.value == 4 || monthBooking.value == 6 || monthBooking.value == 9 || monthBooking.value == 11){
                    generateDayOptions(dayBooking, 30)
                }
                else if (monthBooking.value == 2){
                    generateDayOptions(dayBooking, 29)
                }
                else{
                    generateDayOptions(dayBooking, 31)
                }
            })
        }else{
            generateMonthOptions(monthBooking)
            monthBooking.addEventListener("change",function(){
                if(monthBooking.value == 4 || monthBooking.value == 6 || monthBooking.value == 9 || monthBooking.value == 11){
                    generateDayOptions(dayBooking, 30)
                }
                else if (monthBooking.value == 2){
                    generateDayOptions(dayBooking, 28)
                }
                else{
                    generateDayOptions(dayBooking, 31)
                }
            })
        }
    })
   

    bookingDate.appendChild(bookingDatelbl)
    bookingDate.appendChild(dayBooking)
    bookingDate.appendChild(monthBooking)
    bookingDate.appendChild(yearBooking)

    partyInfo.appendChild(bookingDate)


    let attendeeChoice = ["0-20", "21-50", "51+", "Not decided yet"]
    //Attendees of the party
    let attendeeContainer = document.createElement("div")
    attendeeContainer.setAttribute("id","attendeeContainer")

    let attendeeContainerlbl = document.createElement("p")
    attendeeContainerlbl.textContent = "Attendees * "
    attendeeContainer.appendChild(attendeeContainerlbl)


    let attendee = document.createElement("select")
    attendee.setAttribute("id", "attendee")
    attendee.setAttribute ("required", "true")
    let attendeelbl = document.createElement("option")
    attendeelbl.setAttribute("value","")
    attendeelbl.setAttribute("disabled", "true")
    attendeelbl.setAttribute("selected", "true")
    attendeelbl.setAttribute("hidden","true")
    attendeelbl.textContent = "Quantity"
    attendee.appendChild(attendeelbl)
    for(let i in attendeeChoice){
        let attendeeOption = document.createElement("option")
        attendeeOption.setAttribute("value", attendeeChoice[i])
        attendeeOption.textContent = attendeeChoice[i]
        attendee.appendChild(attendeeOption)
    }

    attendeeContainer.appendChild(attendee)
    partyInfo.appendChild(attendeeContainer)


    //Party location
    let locationContainer = document.createElement("div")
    locationContainer.setAttribute("id", "partycontainer")
    let locationContainerlbl = document.createElement("p")
    locationContainerlbl.setAttribute("id","locationcontainerlbl")
    locationContainerlbl.textContent = "Party Location"
    locationContainer.appendChild(locationContainerlbl)

    let Q1 = {
        name: "Quan 1",
        restaurant: [restaurants[0]]
    }
    let HCM ={
        name: "Ho Chi Minh",
        district: [Q1],
    }

    let HBT = {
        name: "Quan Hai Ba Trung",
        restaurant: [restaurants[1]]
    }
    let Hanoi = {
        name: "Ha Noi",
        district: [HBT],
    }
    let locations = [HCM, Hanoi]


    let cityChoices = document.createElement("select")
    function generateCityChoices(cityChoices){
        
        cityChoices.setAttribute ("id","cityparty")
        cityChoices.setAttribute ("required", "true")
        let cityChoiceslbl = document.createElement("option")
        cityChoiceslbl.setAttribute("value","")
        cityChoiceslbl.setAttribute("disabled", "true")
        cityChoiceslbl.setAttribute("selected", "true")
        cityChoiceslbl.setAttribute("hidden","true")
        cityChoiceslbl.textContent = "Province/City * "
        cityChoices.appendChild(cityChoiceslbl)
    }
    generateCityChoices(cityChoices)
    

    let districtChoices = document.createElement("select")
    function generateDistrictChoices (districtChoices){
        districtChoices.setAttribute ("id","districtparty")
        districtChoices.setAttribute ("required", "true")
        let districtChoiceslbl = document.createElement("option")
        districtChoiceslbl.setAttribute("value","")
        districtChoiceslbl.setAttribute("disabled", "true")
        districtChoiceslbl.setAttribute("selected", "true")
        districtChoiceslbl.setAttribute("hidden","true")
        districtChoiceslbl.textContent = "District * "
        districtChoices.appendChild(districtChoiceslbl)
    }
    generateDistrictChoices(districtChoices)
    
    

    let restaurantChoices = document.createElement("select")
    function generateRestaurantChoices (restaurantChoices){
        restaurantChoices.setAttribute ("id","restaurantparty")
        restaurantChoices.setAttribute ("required", "true")
        let restaurantChoiceslbl = document.createElement("option")
        restaurantChoiceslbl.setAttribute("value","")
        restaurantChoiceslbl.setAttribute("disabled", "true")
        restaurantChoiceslbl.setAttribute("selected", "true")
        restaurantChoiceslbl.setAttribute("hidden","true")
        restaurantChoiceslbl.textContent = "Restaurant * "
        restaurantChoices.appendChild(restaurantChoiceslbl)
    }
    generateRestaurantChoices(restaurantChoices)
    

    //Generate choices for location
    for(let i in locations){
        let cityOption = document.createElement("option")
        cityOption.setAttribute ("value", locations[i].name)
        cityOption.textContent = locations[i].name
        cityChoices.appendChild(cityOption)
    }
    
    cityChoices.addEventListener("change", function(){
        districtChoices.innerHTML=""
        generateDistrictChoices(districtChoices)
        for(let i in locations){
            if (cityChoices.value == locations[i].name){
                for (let j in locations[i].district){
                    let districtOption = document.createElement("option")
                    districtOption.setAttribute ("value", locations[i].district[j].name)
                    districtOption.textContent = locations[i].district[j].name
                    districtChoices.appendChild(districtOption)
                } 
            }
            else continue;
        }
    })

    districtChoices.addEventListener("change",function(){
        restaurantChoices.innerHTML=""
        generateRestaurantChoices(restaurantChoices)
        for(let i in locations){
            if (cityChoices.value == locations[i].name){
                for (let j in locations[i].district){
                    if(districtChoices.value == locations[i].district[j].name){
                        for(let l in locations[i].district[j].restaurant){
                            let restaurantOption = document.createElement("option")
                            restaurantOption.setAttribute ("value", locations[i].district[j].restaurant[l].name)
                            restaurantOption.textContent = locations[i].district[j].restaurant[l].name
                            restaurantChoices.appendChild(restaurantOption)
                        }
                    }
                    else continue;
                } 
            }
            else continue;
        }
    })
    
  

    let notes = document.createElement("textarea")
    notes.setAttribute("id","notes")
    notes.setAttribute("placeholder","Notes for the restaurant...")

    locationContainer.appendChild(cityChoices)
    locationContainer.appendChild(districtChoices)
    locationContainer.appendChild(restaurantChoices)
    

    partyInfo.appendChild(locationContainer)
    partyInfo.appendChild(notes)

    bookingForm.appendChild(partyInfo)

    //Policy Agreement
    let operationPolicy = document.createElement("a")
    operationPolicy.setAttribute("href","https://dictionary.cambridge.org/dictionary/english/policy")
    operationPolicy.textContent = "Operation Policy"
  

    let confidentialPolicy = document.createElement("a")
    confidentialPolicy.setAttribute("href","https://dictionary.cambridge.org/dictionary/english/confidential")
    confidentialPolicy.textContent = "Policy and Information Confidentiality of OldMan"

    let policyContainer = document.createElement("div")
    policyContainer.setAttribute("id","policycontainer")
    let policyCheckbox = document.createElement("input")
    policyCheckbox.setAttribute("type", "checkbox")
    policyCheckbox.setAttribute("id", "policycheckbox")
    policyCheckbox.setAttribute("required", "true")
    let policyCheckboxlbl = document.createElement("label")
    policyCheckboxlbl.setAttribute("id","policycheckboxlbl")
    policyCheckboxlbl.setAttribute("for", "policycheckbox")
    policyCheckboxlbl.innerHTML = "I have read and accepted with "
    policyCheckboxlbl.appendChild(operationPolicy)
    policyCheckboxlbl.innerHTML += " and "
    policyCheckboxlbl.appendChild(confidentialPolicy)

    let submitPartybtn = document.createElement("input")
    submitPartybtn.setAttribute("type","submit")
    submitPartybtn.setAttribute("id","submitpartybtn")
    submitPartybtn.textContent = "Submit Booking"
    policyContainer.appendChild(policyCheckbox)
    policyContainer.appendChild(policyCheckboxlbl)
    bookingForm.appendChild(policyContainer)
    bookingForm.appendChild(submitPartybtn)
    console.log(bookingForm)
    partyHolder.appendChild(bookingForm)

    bookingForm.addEventListener("submit", function(){
        function getPartyType (){
            let Type = [commonType, birthdayType]
            for(let i in Type){
                if(Type[i].checked){
                    return Type[i].value
                }
                else continue
            }
        }
        let partyBookingSubmit = {
            
            customer:{
                childName: fullNameChild.value,
                parentName: fullNameParent.value,
                phone: customerPhone,
                email: customerEMail,
            },
            party: {
                type: getPartyType().textContent,
                time:{
                    date: dayBooking.value,
                    month: monthBooking.value,
                    year: yearBooking.value
                },
                attendee: attendee.value,
                location:{
                    city: cityChoices.value,
                    district: districtChoices.value,
                    restaurant: restaurantChoices.value
                },
                note: notes.value,
            }
        }
        
        localStorage.setItem("bookingsubmit", JSON.stringify(partyBookingSubmit))
        alert("Booking sucessfully")
    })
})


//Render the footer of html page
    let footerTitle = document.createElement("p")
    footerTitle.textContent = "Old Man Restaurant"
    footerTitle.setAttribute("id","footer_title")
    footerHolder.appendChild(footerTitle)
    for(let i in restaurants){
        let contact = document.createElement("article")
        let resName = document.createElement("p")
        resName.textContent = restaurants[i].name
        contact.appendChild(resName)
        let resAddPhone = document.createElement("address")
        let resAddress = document.createElement("a")
        resAddress.innerHTML = "Address:<br>" + restaurants[i].address
        resAddress.setAttribute("href",restaurants[i].link)
        resAddPhone.appendChild(resAddress)
        let resPhone = document.createElement("a")
        resPhone.textContent = "Phone number: " + restaurants[i].phone
        resPhone.setAttribute("href","tel:" + restaurants[i].phone)
        resAddPhone.appendChild(resPhone)
        contact.appendChild(resAddPhone)
        footerHolder.appendChild(contact)
    }
    let pageUp_btn = document.createElement("a")
    pageUp_btn.textContent = "^"
    pageUp_btn.setAttribute("href", "#")
    pageUp_btn.setAttribute("id", "pageup_btn")
    footerHolder.appendChild(pageUp_btn)