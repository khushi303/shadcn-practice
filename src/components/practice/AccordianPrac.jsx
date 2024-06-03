"use client";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@radix-ui/react-accordion";
import { Button } from "../ui/button";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "../ui/alert-dialog";

export default function AccordianPrac() {
  const accordionContent = [
    {
      title: "Is it accessible?",
      dis: "Yes. It adheres to the WAI-ARIA design pattern.",
    },
    {
      title: "Is it accessible?",
      dis: "Yes. It adheres to the WAI-ARIA design pattern.",
    },
    {
      title: "Is it accessible?",
      dis: "Yes. It adheres to the WAI-ARIA design pattern.",
    },
    {
      title: "Is it accessible?",
      dis: "Yes. It adheres to the WAI-ARIA design pattern.",
    },
  ];
  return (
    <div className="container xl:max-w-[1164px] px-3 mx-auto py-10">
      <div className="text-center pb-10">
        <Button>Button</Button>
      </div>{" "}
      <h2 className="text-4xl font-bold text-center">Hii, I am Accordion</h2>
      <Accordion
        type="single"
        collapsible
        className="py-7 flex  w-full gap-3 flex-col"
      >
        {accordionContent.map((value, index) => (
          <AccordionItem
            key={index}
            value={`item-${index + 1}`}
            className="border-solid border-[2px] border-white px-3 rounded-lg"
          >
            <AccordionTrigger className="py-3">{value.title}</AccordionTrigger>
            <AccordionContent className="pb-3">{value.dis}</AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
      <AlertDialog>
        <AlertDialogTrigger asChild>
          <Button>Show Dialog</Button>
        </AlertDialogTrigger>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
            <AlertDialogDescription>
              This action cannot be undone. This will permanently delete your
              account and remove your data from our servers.
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel>Cancel</AlertDialogCancel>
            <AlertDialogAction>Continue</AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </div>
  );
}
