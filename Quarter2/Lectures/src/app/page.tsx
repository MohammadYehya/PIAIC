import Link from "next/link";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import { ScrollArea } from "@/components/ui/scroll-area"
import { Separator } from "@/components/ui/separator"

// 0301 3949480 - Mohammad Usman

export const LectureProvider = (props : any) => {
  return (
    <>
    <TooltipProvider>
        <Tooltip>
          <TooltipTrigger className="px-10">
            <Link  href={props.link}>
              <p className="py-4">{"► "+props.name}</p>
            </Link>
          </TooltipTrigger>
          <TooltipContent className="bg-slate-100 border-black">
            <p>{props.tooltip}</p>
          </TooltipContent>
        </Tooltip>
      </TooltipProvider>
      <Separator />

    </>
  );
}

export default () => {
  return (
    <div className="flex flex-col">
      <h1 className="text-3xl font-bold text-blue-600">Lectures</h1>
      
      <ScrollArea className="h-[90vh] w-[230px] rounded-2xl border p-4">
        <LectureProvider link="/Lecture01" name="Lecture01" tooltip="Quarter II Introduction"/>
        <LectureProvider link="/Lecture02" name="Lecture02" tooltip="Lecture on Routing"/>
        <LectureProvider link="/Lecture03" name="Lecture03" tooltip="Lecture on Client & Server Side Rendering"/>
        <LectureProvider link="/Lecture04" name="Lecture04" tooltip="Lecture on Tailwind CSS"/>
        <LectureProvider link="/Lecture05" name="Lecture05" tooltip="Lecture on Flex & Grids"/>
        <LectureProvider link="/Lecture06" name="Lecture06" tooltip="Lecture on ShadCN"/>
        <LectureProvider link="/Lecture07" name="Lecture07" tooltip="Lecture on React-Rendering"/>
        <LectureProvider link="/Lecture08" name="Lecture08" tooltip="Lecture on Invoking APIs"/>
        <LectureProvider link="/Lecture09" name="Lecture09" tooltip="Lecture on Headless CMS & Sanity"/>
        <LectureProvider link="/Lecture10" name="Lecture10" tooltip="Lecture on Serverless Database & Custom APIs"/>
        <LectureProvider link="/Lecture11" name="Lecture11" tooltip="Lecture on Middleware & Suspense"/>
        <LectureProvider link="/Lecture12" name="Lecture12" tooltip="Lecture on Authentication"/>
        <LectureProvider link="/Lecture13" name="Lecture13" tooltip="Lecture on Vercel Deployment & Server Actions"/>
      </ScrollArea>
    </div>
  );
}