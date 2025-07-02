"use client";

import { FaLocationArrow } from "react-icons/fa6";
import Link from "next/link";

import { projectDetails } from "@/data";
import { PinContainer } from "./ui/Pin";
import Image from "next/image";

const RecentProjects = () => {
  return (
    <div className="py-20" id="projects">
      <h1 className="heading">
        A small selection of{" "}
        <span className="text-purple">recent projects</span>
      </h1>
      <div className="flex flex-wrap items-center justify-center p-4 gap-16 mt-10">
        {projectDetails.map((item, index) => (
          <>
            {/* No-Code Section Header before last 2 projects */}
            {index === projectDetails.length - 2 && (
              <div className="w-full text-center mt-20">
                <h2 className="heading">
                  Whether it’s a coded masterpiece or a no-code build —{" "}
                  <span className="text-purple">I bring ideas to life.</span>
                </h2>
                <p className="text-lg text-gray-300 max-w-3xl mx-auto mt-4 px-4">
                  From wireframes in Figma to live Webflow builds, I design and
                  launch landing pages, CMS blogs, and simple websites — all
                  seamlessly delivered to match your brand and goals.
                </p>
              </div>
            )}
            <div
              className="lg:min-h-[32.5rem] h-[25rem] flex items-center justify-center sm:w-96 w-[80vw]"
              key={item.id}
            >
              <PinContainer
                title="/ui.aceternity.com"
                href="https://twitter.com/mannupaaji"
              >
                <div className="relative flex items-center justify-center sm:w-96 w-[80vw] overflow-hidden h-[20vh] lg:h-[30vh] mb-10">
                  <div
                    className="relative w-full h-full overflow-hidden lg:rounded-3xl"
                    style={{ backgroundColor: "#13162D" }}
                  >
                    <Image src="/bg.png" alt="bgimg" width={500} height={300} />
                  </div>
                  <Image
                    src={item.img}
                    alt="cover"
                    width={500}
                    height={300}
                    className="z-10 absolute bottom-0"
                  />
                </div>

                <h1 className="font-bold lg:text-2xl md:text-xl text-base line-clamp-1">
                  {item.header}
                </h1>

                <p
                  className="lg:text-xl lg:font-normal font-light text-sm line-clamp-2"
                  style={{
                    color: "#BEC1DD",
                    margin: "1vh 0",
                  }}
                >
                  {item.summary}
                </p>

                <div className="flex items-center justify-between mt-7 mb-3">
                  <div className="flex items-center">
                    {item.iconLists.map((icon, index) => (
                      <div
                        key={index}
                        className="border border-white/[.2] rounded-full bg-black lg:w-10 lg:h-10 w-8 h-8 flex justify-center items-center"
                        style={{
                          transform: `translateX(-${5 * index + 2}px)`,
                        }}
                      >
                        <Image
                          src={icon}
                          alt="icon5"
                          className="p-2"
                          width={500}
                          height={300}
                        />
                      </div>
                    ))}
                  </div>

                  {/* <div className="flex justify-center items-center">
                  <p className="flex lg:text-xl md:text-xs text-sm text-purple">
                    Check Live Site
                  </p>
                  <FaLocationArrow className="ms-3" color="#CBACF9" />
                </div> */}

                  <Link
                    href={`/projectDetail/${item.id}`}
                    className="flex items-center group"
                  >
                    <p className="flex lg:text-xl md:text-xs text-sm text-purple group-hover:underline">
                      Check Live Site
                    </p>
                    <FaLocationArrow
                      className="ms-3 transition-transform group-hover:translate-x-1"
                      color="#CBACF9"
                    />
                  </Link>
                </div>
              </PinContainer>
            </div>
          </>
        ))}
      </div>
    </div>
  );
};

export default RecentProjects;
