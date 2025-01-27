import { Problem, ProblemStatement } from "@prisma/client";
import { ScrollArea } from "@repo/ui/shad/ui";
import ProblemCard from "./ProblemCard";
import AddProblemCard from "./AddProblemCard";

export const ProblemEditor = ({
  problems,
}: {
  problems: (Problem & { problemStatement: ProblemStatement | null })[];
}) => {
  return (
    <div className="grid grid-cols-2">
      <ScrollArea className="h-screen m-2">
        <div className="space-y-4">
          {problems.map((problem, i) => (
            <ProblemCard key={i} problem={problem} />
          ))}
        </div>
      </ScrollArea>
      <AddProblemCard />
    </div>
  );
};
