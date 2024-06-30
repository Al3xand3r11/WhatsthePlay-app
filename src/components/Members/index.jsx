import React from "react";
import members from "../../data/members";
import MemberItem from "./MemberItem";
import Title from "../Title";

const Members = () => {
    return (
      <div id="Members" className="bg-member-image w-full h-auto bg-cover bg-center">
      <div className="flex flex-col items-center">
      <Title>Members</Title>
      
      <div className="justify-between">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pl-4 text-center md:text-start">
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