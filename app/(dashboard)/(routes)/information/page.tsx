"use client";

// imports
import axios from "axios";
import * as z from "zod";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { useRouter } from "next/navigation";
import { ChatCompletionRequestMessage } from "openai";

// external libraries/components
import { zodResolver } from "@hookform/resolvers/zod";

import { Input } from "@/components/Shadcn/input";
import { Button } from "@/components/Shadcn/button";

// internal components
import { formSchema } from "./constants";
import Heading from "@/components/Heading/Heading";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
} from "@/components/Shadcn/form";
import ContentLoader from "@/components/ContentLoader/ContentLoader";
import Empty from "@/components/Empty/Empty";
import PageLoader from "@/components/PageLoader/PageLoader";

const InformationPage = () => {
  const router = useRouter();

  const [messages, setMessages] = useState<ChatCompletionRequestMessage[]>([]);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      prompt: "",
    },
  });

  const isLoading = form.formState.isSubmitting;

  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    try {
      const userMessage: ChatCompletionRequestMessage = {
        role: "user",
        content: values.prompt,
      };

      const newMessages = [...messages, userMessage];

      const response = await axios.post("/api/information", {
        messages: newMessages,
      });

      setMessages((current) => [...current, userMessage, response.data]);

      form.reset();
    } catch (error: any) {
      // todo: open pro model
      console.log(error);
    } finally {
      router.refresh();
    }
  };

  return (
    <>
      <PageLoader />

      <Heading
        title="Information"
        description="Power of Advanced AI in your hands."
        icon="fa-solid fa-message"
        iconColor="text-violet-500"
        bgColor="bg-violet-500/10"
      />

      <div className="px-4 pb-8 lg:px-8">
        <div>
          <Form {...form}>
            <form
              onSubmit={form.handleSubmit(onSubmit)}
              className="rounded-lg border w-full p-4 px-3 md:px-6 focus-within:shadow-sm grid grid-cols-12 gap-2"
            >
              <FormField
                name="prompt"
                render={({ field }) => (
                  <FormItem className="col-span-12 lg:col-span-10">
                    <FormControl className="m-0 p-0">
                      <Input
                        className="bg-transparent border-0 outline-none focus-visible:ring-0 focus-visible:ring-transparent"
                        disabled={isLoading}
                        placeholder="write an essay on global warming"
                        {...field}
                      />
                    </FormControl>
                  </FormItem>
                )}
              />

              <Button
                className="col-span-12 lg:col-span-2 w-full"
                disabled={isLoading}
              >
                Generate
              </Button>
            </form>
          </Form>
        </div>
        <div className="space-y-4 mt-8">
          {isLoading && <ContentLoader title={"Information loading !"} />}

          {messages.length === 0 && !isLoading && (
            <Empty icon="/info.jpg" title="No Information generated yet!" />
          )}

          <div className="flex flex-col-reverse gap-y-4">
            {messages.map((message) => (
              <div
                key={message.content}
                className={`p-4 w-full flex items-center gap-x-8 rounded-lg
                  ${
                    message.role === "user"
                      ? "bg-white border border-black/10"
                      : "bg-violet-500/5 border shadow-md"
                  }
                `}
              >
                {message.content}
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default InformationPage;
