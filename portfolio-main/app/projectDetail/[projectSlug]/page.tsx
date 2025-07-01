import { navItems } from "@/data/index";

import { projectDetails } from "@/data/index";
import { notFound } from "next/navigation";
import ProjectDetailClient from "@/components/ProjectDetailClient";
import { FloatingNav } from "@/components/ui/FloatingNavbar";
import Footer from "@/components/Footer";

type PageProps = {
  params: {
    projectSlug: string;
  };
};

export async function generateStaticParams() {
  return projectDetails.map((project) => ({ projectSlug: project.id }));
}

export default function ProjectPage({ params }: PageProps) {
  const project = projectDetails.find((p) => p.id === params.projectSlug);

  if (!project) notFound();

  return (
    <div>
      <FloatingNav navItems={navItems} />
      <ProjectDetailClient project={project} />
      <Footer />
    </div>
  );
}
