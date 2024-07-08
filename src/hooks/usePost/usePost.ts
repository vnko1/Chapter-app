"use client";

import { useState } from "react";

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

  return {
    title,
    text,
    files,
    previews,
    showPost,
    setText,
    setTitle,
    setFiles,
    setPreviews,
    setShowPost,
  };
};
