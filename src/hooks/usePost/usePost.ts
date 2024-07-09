"use client";

import { useState } from "react";
import { PostForm } from "@/types";

type UsePostArgs = {
  postTitle?: string;
  postText?: string;
  postPreviews?: Array<string>;
};

export const usePost = ({
  postTitle = "",
  postText = "",
  postPreviews = [],
}: UsePostArgs) => {
  const [title, setTitle] = useState(postTitle);
  const [text, setText] = useState(postText);
  const [files, setFiles] = useState<Array<File>>([]);
  const [previews, setPreviews] = useState<Array<string>>(postPreviews);
  const [showPost, setShowPost] = useState(false);
  const [postForm, setPostForm] = useState<PostForm>({
    images: [],
    title: postTitle,
    text: postText,
  });

  return {
    title,
    text,
    files,
    previews,
    showPost,
    postForm,
    setPostForm,
    setText,
    setTitle,
    setFiles,
    setPreviews,
    setShowPost,
  };
};
