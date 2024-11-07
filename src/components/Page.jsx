import React from "react";
import { useParams } from "react-router-dom";
import { Section } from "./Section";

export const Page = ({ pages }) => {
  const { pageId } = useParams();

  console.log(pageId);

  const page = pages.find((p) => p.slug === pageId);

  if (!page) {
    return <div className="p-4">Page not found</div>;
  }

  return (
    <div className="main container align-self-center my-5">
      <div className="p-4">
        <h1 className="text-3xl font-bold mb-6">{page.title}</h1>
        <div className="space-y-4">
          {page.content.sections.map((section, index) => (
            <Section key={index} section={section} />
          ))}
        </div>
      </div>
    </div>
  );
};
