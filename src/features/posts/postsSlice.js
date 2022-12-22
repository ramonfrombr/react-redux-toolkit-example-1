import { createSlice, nanoid } from "@reduxjs/toolkit";
import { sub } from "date-fns";

const initialState = [
  {
    id: "1",
    title: "Reprehenderit officia ex ipsum cillum duis.",
    content:
      "Fugiat excepteur ut ea est in minim officia et fugiat occaecat officia elit aliquip Lorem. In pariatur nulla officia consequat cupidatat Lorem cupidatat culpa enim. Incididunt aliquip in culpa et duis aliquip. Amet aliqua labore pariatur ut voluptate. Magna proident enim dolor nostrud dolore anim.",
    userId: "0",
    date: sub(new Date(), { minutes: 10 }).toISOString(),
    reactions: {
      thumbsUp: 0,
      wow: 0,
      heart: 0,
      rocket: 0,
      coffee: 0,
    },
  },
  {
    id: "2",
    title: "Reprehenderit officia ex ipsum cillum duis.",
    content:
      "Fugiat excepteur ut ea est in minim officia et fugiat occaecat officia elit aliquip Lorem. In pariatur nulla officia consequat cupidatat Lorem cupidatat culpa enim. Incididunt aliquip in culpa et duis aliquip. Amet aliqua labore pariatur ut voluptate. Magna proident enim dolor nostrud dolore anim.",
    userId: "1",
    date: sub(new Date(), { minutes: 40 }).toISOString(),
    reactions: {
      thumbsUp: 0,
      wow: 0,
      heart: 0,
      rocket: 0,
      coffee: 0,
    },
  },
];

const postsSlice = createSlice({
  name: "posts",
  initialState,
  reducers: {
    postAdded: {
      reducer(state, action) {
        state.push(action.payload);
      },
      prepare(title, content, userId) {
        return {
          payload: {
            id: nanoid(),
            title,
            content,
            userId,
            date: new Date().toISOString(),
            reactions: {
              thumbsUp: 0,
              wow: 0,
              heart: 0,
              rocket: 0,
              coffee: 0,
            },
          },
        };
      },
    },
    reactionAdded(state, action) {
      const { postId, reaction } = action.payload;
      const existingPost = state.find((post) => post.id === postId);
      if (existingPost) {
        existingPost.reactions[reaction]++;
      }
    },
  },
});

export const selectAllPosts = (state) => state.posts;

export const { postAdded, reactionAdded } = postsSlice.actions;

export default postsSlice.reducer;
