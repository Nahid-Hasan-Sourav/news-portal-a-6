

const loadCategory= async () =>{
    const url=' https://openapi.programming-hero.com/api/news/categories'

    try{
        const res = await fetch(url);
        const data=await res.json();

        displayCategoryItem(data);
    }

    catch(error){
        console.log("Error : " + error);
        console.log("Error : " + error.message);
    }
}

const displayCategoryItem = (category) =>{
    // console.log("category : ",category);

    const categoryUl=document.getElementById("category-ul");

    

    category.data.news_category.forEach((item) =>{
        // console.log("item : ",item);
        // console.log("item : ",item.category_name);
        
        const li=document.createElement("li");
        li.classList.add("nav-item");

        li.innerHTML=`
        <a href="#" class=" nav-link mx-3 fs-5 p-1" onclick="selectCategoryItemByid(${item.category_id})">${item.category_name}</a>
        `

        categoryUl.appendChild(li);
       


    })
  
}


const selectCategoryItemByid = (category_id) => {

    
    
    console.log("After Item Click: " + category_id);
    loadCategoryItemByid(category_id);

}

const loadCategoryItemByid= async (category_id) =>{
  
    const url = `https://openapi.programming-hero.com/api/news/category/0${category_id}`;
    console.log(url);
    
    try{
        const res = await fetch(url);
        const data= await res.json();
        console.log("Display Category Item by ID : " , data);
        displayCategoryItemByID(data);
    }

    catch(error){
        console.log("Error : " + error);
        console.log("Error : " + error.message);
    }
}


const  displayCategoryItemByID=(data)=>{
    console.log("Display Category Item by ID : " , data);

    console.log("Length : " , data.data.length);
    // console.log("Length : " , parentRow.children.length);
    const cardFoundNumber=document.getElementById("card-found-number");
    const length=data.data.length
     if(length>0){
         cardFoundNumber.innerText=`${length} items found `;
     }
     else if(length===0){
         cardFoundNumber.innerText="Sorry!! No Card Found!!!";
     }

    const parentRow=document.getElementById("parent-card-row");
    // console.log(parentRow)
    parentRow.textContent='';

    // const parentColumn=document.getElementById("parent-colums");
   console.log(data.data);
     
     data.data.forEach((item)=>{
        const date=item.author.published_date;
        // console.log("length of date ",date.slice(0,10));
        
        console.log("Category Item by   ID : " , item);
       
        const div=document.createElement("div");
        div.classList.add("col");

        div.innerHTML=`
        <div class="row gx-0 shadow" id="added-card-row">
        <div class="col-lg-4 col-md-4 col-sm-12">
            <img src="${item.image_url}" class="img-fluid w-100">
        </div>
        <div class="col-lg-8 col-md-8 col-sm-12">
            <div class="p-3">
                <h3>${item.title
                }</h3>
                <p>${item.details.slice(0,500)}....</p>
            </div>
            <div class="row gx-0">
            <div class="col-3    p-3">
               <div class="author d-flex align-items-center justify-content-center">
                <div class="author-image w-25">
                    <img src="${item.author.img}" id="author-images" class="w-100 d-block  rounded-circle">
                </div>
               <div class="author-writter-date ps-3">
                <p class="mb-0">${item.author.name ? item.author.name :"N/A"}</p>
                <p>${item.author.published_date ? item.author.published_date.slice(0,10) : "not found"}</p>
               </div>
               </div> 
            </div>
            <div class="col-3  ">
                <div class="view  d-flex align-items-center h-100 justify-content-center">
                    <div class=" d-flex h-50 justify-content-center align-items-center" id="view-icon">
                    <p class="me-1"><i class="fa-regular fa-eye"></i></p>
                    <p class="ms-1">1.7 M</p>
                    </div>
                </div>
            </div>
            <div class="col-3">
                <div class="rating d-flex align-items-center h-100 justify-content-center">
                   <div class="rating-center">
                    <span class="d-inline-block">
                        <i class="fa-solid fa-star-half-stroke"></i>
                    </span>
                    <span class="d-inline-block">
                        <i class="fa-solid fa-star"></i>
                    </span>
                    <span class="d-inline-block">
                        <i class="fa-solid fa-star"></i>
                    </span>
                    <span class="d-inline-block">
                        <i class="fa-solid fa-star"></i>
                    </span>
                    <span class="d-inline-block">
                        <i class="fa-solid fa-star"></i>
                    </span>
                   </div>
                </div>
            </div>
            <div class="col-3">
                <div class="arrows-icon d-flex align-items-center h-100 justify-content-center">
                    <div class="arrow-icon-center">
                        <span class="d-inline-block">
                            <i class="fa-solid fa-arrow-right"></i>
                        </span>
                    </div>
                </div>
            </div>
            </div>
        </div>
    </div>
        
        `
        parentRow.appendChild(div);

        // console.log("Length : " , parentRow.children.length);
        // length=parentRow.children.length;


    })

}




loadCategoryItemByid(08)
loadCategory();