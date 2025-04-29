import BlogDetailsMain from "@/components/blog-details/BlogDetailsMain";
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

const BlogDetailsDynamicPage = ({ params }: { params: { id: number } }) => {
  const id = params.id;
  return (
    <>
      <MetaData pageTitle="Blog Details">
        <Wrapper>
          <main>
            <BlogDetailsMain id={id} />
          </main>
        </Wrapper>
      </MetaData>
    </>
  );
};

export default BlogDetailsDynamicPage;
