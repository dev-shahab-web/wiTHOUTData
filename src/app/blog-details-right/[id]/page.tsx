import BlogDetailsRightMain from "@/components/blog-details-right/BlogDetailsRightMain";
import MetaData from "@/hooks/useMetaData";
import Wrapper from "@/layout/DefaultWrapper";
import React from "react";
import { blogData } from "@/data/blog-data";

// Generate static params for all blog posts
export function generateStaticParams() {
  return blogData.map((blog) => ({
    id: blog.id.toString(),
  }));
}

const BlogDetailsRightDynamicPage = ({
  params,
}: {
  params: { id: number };
}) => {
  const id = params.id;
  return (
    <>
      <MetaData pageTitle="Blog Details Right">
        <Wrapper>
          <main>
            <BlogDetailsRightMain id={id} />
          </main>
        </Wrapper>
      </MetaData>
    </>
  );
};

export default BlogDetailsRightDynamicPage;
