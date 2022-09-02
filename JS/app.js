console.log("Working");

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
    console.log("category : ",category);

    const categoryUl=document.getElementById("category-ul");

    

    category.data.news_category.forEach((item) =>{
        console.log("item : ",item);
        console.log("item : ",item.category_name);
        
        const li=document.createElement("li");
        li.classList.add("nav-item");

        li.innerHTML=`
        <a href="#" class="fw-bold nav-link mx-3 fs-5" onclick="">${item.category_name}</a>
        `

        categoryUl.appendChild(li);
       


    })
  
}

loadCategory();