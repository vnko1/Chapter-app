import { privateApi } from "@/api";
import { EndpointsEnum, PostForm } from "@/types";
import { tryCatchWrapper } from "@/utils";

export const addPost = tryCatchWrapper(
  async (data: PostForm) =>
    await privateApi(EndpointsEnum.Post, {
      headers: {
        Accept: "application/json",
        "X-Requested-With": "XMLHttpRequest",
      },
      body: JSON.stringify(data),
      method: "POST",
    })
);

export const changePost = tryCatchWrapper(
  async ({ postId, data }: { postId: string; data: PostForm }) =>
    await privateApi(EndpointsEnum.Post + "/" + postId, {
      headers: {
        Accept: "application/json",
        "X-Requested-With": "XMLHttpRequest",
      },
      body: JSON.stringify(data),
      method: "PATCH",
    })
);
