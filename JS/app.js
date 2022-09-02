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

    category.data.news_category.forEach((item) =>{
        console.log("item : ",item);


    })
  
}

loadCategory();