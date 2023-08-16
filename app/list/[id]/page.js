"use client";

import List from "@/components/List";

import { useRouter } from "next/navigation";

export default function ListPage({ params }) {
  const router = useRouter();

  const back_to_lists = () => router.push("/");

  const list = {
    characters: [{ unit: "Khal", points: 90, sub_text: "" }],
    others: [{ unit: "Beserks", points: 135, sub_text: "" }],
  };

  return (
    <List
      list_details={{ id: params.id }}
      full_list_init={list}
      arrow_back_callback={back_to_lists}
    />
  );
}
