import React from 'react';

interface SkillProps {
  name: string;
  icon: React.ReactNode;
}

export function Skill({ name, icon }: SkillProps) {
  return (
    <div className="flex flex-col items-center justify-center w-fit h-fit antialiased">
      {icon}
      <h4
        className="text-lg font-light tracking-tight max-w-[100px] overflow-hidden text-ellipsis whitespace-nowrap my-2"
        title={name}
      >
        {name}
      </h4>
    </div>
  );
}
