import { writable } from "svelte/store";

export const FeedbackStore = writable([
  {
    id: 1,
    rating: 5,
    text: "This is a great product!",
    createdAt: "2023-10-01T12:00:00Z",
  },
  {
    id: 2,
    rating: 4,
    text: "I really like this, but it could be improved.",
    createdAt: "2023-10-02T14:30:00Z",
  },
  {
    id: 3,
    rating: 2,
    text: "Not what I expected, needs more features.",
    createdAt: "2023-10-03T09:15:00Z",
  },
  {
    id: 4,
    rating: 1,
    text: "Very disappointed with this product.",
    createdAt: "2023-10-04T16:45:00Z",
  },
  {
    id: 5,
    rating: 3,
    text: "It's okay, but I've seen better.",
    createdAt: "2023-10-05T11:20:00Z",
  },
]);