import axios from "axios";
import { useEffect, useState } from "react";
import { NavLink, useNavigation } from "react-router-dom";

const CategoryTabs = () => {
  const [categories, setCategory] = useState([]);
  const navigation = useNavigation();
  useEffect(() => {
    axios
      .get("https://openapi.programming-hero.com/api/news/categories")
      .then((data) =>
        navigation.state === "loading" ? (
          <span className="loading loading-bars loading-md"></span>
        ) : (
          setCategory(data.data.data.news_category)
        )
      );
  }, [navigation]);
  // console.log(category);
  return (
    <>
      <h3 className="text-2xl font-semibold mb-4">All categories</h3>
      <div className="flex flex-col space-y-2 *:text-center text-gray-400 w-full  text-xl font-medium">
        {categories.map((category) => (
          <NavLink
            to={`category/${category.category_id}`}
            className="bg-[#E7E7E7] rounded-xl py-4 "
            key={category.category_id}
          >
            {category.category_name}
          </NavLink>
        ))}
      </div>
    </>
  );
};

export default CategoryTabs;
