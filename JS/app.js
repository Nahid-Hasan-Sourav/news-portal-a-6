

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


const toggleSpiner = (isLoading) => {
    const spinner=document.getElementById('spinner-loader');
    if(isLoading){
        spinner.classList.remove('d-none');
        console.log("loading show")
    }

    else{
        spinner.classList.add('d-none');
        console.log("remove it")
    }
    
}


const selectCategoryItemByid = (category_id) => {

    toggleSpiner(true);
   
    console.log("After Item Click: " + category_id);
    loadCategoryItemByid(category_id);
    

}

// const toggleSpiner = (isLoading) => {
//     const spinner=document.getElementById('spinner-loader');
//     if(isLoading){
//         spinner.classList.remove('d-none');
//         console.log("loading show")
//     }

//     else{
//         spinner.classList.add('d-none');
//         console.log("remove it")
//     }
    
// }

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
    // toggleSpiner(true);
    console.log("Length : " , data.data.length);
    // console.log("Length : " , parentRow.children.length);
    const cardFoundNumber=document.getElementById("card-found-number");
    const length=data.data.length
     if(length>0){
         cardFoundNumber.innerText=`${length} items found `;
     }
     else if(length===0){
         cardFoundNumber.innerText="Sorry!! No Card Found!!!";
         toggleSpiner(false);
     }

     

    const parentRow=document.getElementById("parent-card-row");
    // console.log(parentRow)
    parentRow.textContent='';

    // const parentColumn=document.getElementById("parent-colums");
   console.log(data.data);

   const sortData = data.data.sort((a, b) => {
    return a.total_view - b.total_view;
    });
    const reverseSortData = sortData.reverse();

     
     data.data.forEach((item)=>{
        const date=item.author.published_date;
        // console.log("length of date ",date.slice(0,10));
        
        // console.log("Category Item by   ID : " , item._id);
       
        const div=document.createElement("div");
        div.classList.add("col");

        div.innerHTML=`
        <div class="row gx-0 shadow" id="added-card-row" onclick="ModalGenerate('${item._id}')" data-bs-toggle="modal" data-bs-target="#exampleModal" >
        <div class="col-lg-4 col-md-4 col-sm-12">
            <img src="${item.image_url}" class="img-fluid p-3">
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
                <div class="author-image">
                    <img src="${item.author.img}" id="author-images" class="d-block  rounded-circle">
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
                    <p class="ms-1 fw-bold">${item.total_view ? item.total_view : "No View"
                    }</p>
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


      

        // toggleSpiner(false);
        parentRow.appendChild(div);
        toggleSpiner(false);
        
        // console.log("Length : " , parentRow.children.length);
        // length=parentRow.children.length;


    })

}

const generateModalCardItemByid= async (category_id) =>{
  
    const url = ` https://openapi.programming-hero.com/api/news/${category_id}`;
    console.log(url);
    
    try{
        const res = await fetch(url);
        const data= await res.json();
        console.log("Display Category Item by ID : " , data);
       displayModalCard(data);
    }

    catch(error){
        console.log("Error : " + error);
        console.log("Error : " + error.message);
    }
}

const  displayModalCard =(data)=>{
    // console.log("Modal Data : ", data.data[0].author.name);
    console.log("Modal Data : ", data.data[0]);

    const modalBody=document.getElementById("modal-body");
    modalBody.innerHTML='';

    const div=document.createElement("div");
    div.classList.add(".card");

    div.innerHTML=`
    
    <img src="${data.data[0].image_url}" class="img-fluid">
    `
    modalBody.appendChild(div);
}



const ModalGenerate = (id) =>{
    console.log("Modal ID: ",id);

    generateModalCardItemByid(id);

    // const url = `https://openapi.programming-hero.com/api/news/category/${id}`;
    // console.log(url);
    
   
}




loadCategoryItemByid(08)
loadCategory();