

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
        <a href="#" class=" nav-link mx-3 fs-5" onclick="selectCategoryItemByid(${item.category_id})">${item.category_name}</a>
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
        // console.log("Display Category Item by ID : " , data);
        displayCategoryItemByID(data);
    }

    catch(error){
        console.log("Error : " + error);
        console.log("Error : " + error.message);
    }
}


const  displayCategoryItemByID=(data)=>{
    console.log("Display Category Item by ID : " , data);
}





loadCategory();