"use client";

import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import type { TeamMember } from "@/lib/types";

interface TeamMemberCardProps {
  member: TeamMember;
}

export function TeamMemberCard({ member }: TeamMemberCardProps) {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <Card className="overflow-hidden hover:shadow-lg transition-shadow">
      <CardContent className="p-6">
        <div className="flex flex-col items-center text-center">
          <div className="w-32 h-32 rounded-full bg-muted mb-4 overflow-hidden relative">
            <Image
              src={member.image}
              alt={member.name}
              fill
              className="object-cover"
              sizes="128px"
            />
          </div>
          <h3 className="text-xl font-bold mb-1">{member.name}</h3>
          <p className="text-muted-foreground mb-4">{member.role}</p>
          
          {isExpanded && (
            <p className="text-sm text-muted-foreground mb-4">{member.bio}</p>
          )}
          
          <Button
            variant="ghost"
            size="sm"
            onClick={() => setIsExpanded(!isExpanded)}
          >
            {isExpanded ? "- Less Info" : "+ Info"}
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}
