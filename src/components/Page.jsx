import { useParams, useLocation } from "react-router-dom";
import { Section } from "./Section";
import kalote from "../data/kalote";

export const Page = ({ pages }) => {
  const { slug } = useParams();
  const location = useLocation();
  const path = location.pathname.split('/').filter(Boolean);

  const parentSlug = path[0];
  const childSlug = path[1];

  const parentPage = pages.find((page) => page.slug === parentSlug);
  const childPage = parentPage.children.find((page) => page.slug === childSlug);

  // if No routes matched location return 404 page
  if (!childPage) {
    return <div className="p-4">Page not found</div>;
  }
  

  return (
    <div className="main container align-self-center my-5">
      <div>
        <h1 className="text-3xl font-bold mb-6">{childPage.title}</h1>
        <div className="space-y-4">
          {childPage.content.sections.map((section, index) => (
            <Section key={`${childPage.slug}-section-${index}`} section={section} />
          ))}
        </div>
      </div>
    </div>
  );
};
