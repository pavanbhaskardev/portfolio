import projects from "@/app/components/json/projects";

// generates the meta tags
export function generateMetadata({ params }) {
  const projectDetails = projects.filter(
    (details) => details.id === params.projectName
  );

  if (projectDetails.length) {
    const { id, title, summary, imgSrc, siteUrl, featured } = projectDetails[0];
    return {
      title: `${title} - Pavan Bhaskar`,
    };
  }

  return null;
}

export default function ProjectLayout({ children }) {
  return <>{children}</>;
}
