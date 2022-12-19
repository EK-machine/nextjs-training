import { SortActions, SortEnum, SortReucerState } from "../../types/types";

export const sortReducer = (
  state: SortReucerState,
  action: SortActions
): SortReucerState => {
  switch (action.type) {
    case SortEnum.Rating:
      return {
        sort: SortEnum.Rating,
        products: state.products.sort((a, b) =>
          a.initialRating > b.initialRating ? -1 : 1
        ),
      };
    case SortEnum.Price:
      return {
        sort: SortEnum.Price,
        products: state.products.sort((a, b) => (a.price > b.price ? 1 : -1)),
      };
    default:
      throw new Error("Inappropriate sorting type");
  }
};
