import React from "react";

export interface IProductCategoryItemProps {
    isSelected: boolean;
    description: string;
    setCategoryCallback: React.Dispatch<string>
}

export interface IProductCategoriesProps {
    categorySelected: string;
    setCategoryCallback: React.Dispatch<string>
}