import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { clickCategory } from './actions';
import Categories from './Categories';

export default function CategoriesContainer() {
  const dispatch = useDispatch();

  const { categories, selectCategoryId } = useSelector((state) => ({
    categories: state.categories,
    selectCategoryId: state.selectCategoryId,
  }));

  function handleClick(id) {
    dispatch(clickCategory(id));
  }

  return (
    <Categories
      categories={categories}
      onClick={handleClick}
      selectId={selectCategoryId}
    />
  );
}
