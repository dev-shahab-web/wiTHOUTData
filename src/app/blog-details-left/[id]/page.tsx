import BlogDetailsLeftMain from "@/components/blog-details-left/BlogDetailsLeftMain";
import MetaData from "@/hooks/useMetaData";
import Wrapper from "@/layout/DefaultWrapper";
import React from "react";
import { blogData } from "@/data/blog-data";

export function generateStaticParams() {
  return blogData.map((blog) => ({
    id: blog.id.toString(),
  }));
}

const BlogDetailsLeftDynamicPage = ({ params }: { params: { id: number } }) => {
  const id = params.id;
  return (
    <>
      <MetaData pageTitle="Blog Details Left">
        <Wrapper>
          <main>
            <BlogDetailsLeftMain id={id} />
          </main>
        </Wrapper>
      </MetaData>
    </>
  );
};

export default BlogDetailsLeftDynamicPage;
