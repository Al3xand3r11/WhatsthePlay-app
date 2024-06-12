import React from "react";
import members from "../../data/members";
import MemberItem from "./MemberItem";
import Title from "../Title";

const Members = () => {
    return (
      <div id="Members" className="bg-member-image w-full h-screen bg-cover bg-center">
      <div className="flex flex-col items-center">
      <Title>Members</Title>
      
      <div className="justify-between">
            <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-4 ">
                {members.map(project => (
                    <MemberItem
                        imgUrl={project.imgUrl}
                        name={project.name}
                        description={project.description}
                        link={project.link}
                        stack={project.stack}
                    />
                ))}
            </div>
        </div>
        </div>
        </div>
    )
}

export default Members;