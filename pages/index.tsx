import Image from "next/image";
import { Geist, Geist_Mono } from "next/font/google";
import { Videocard } from "@/components/VideoCard";
import { VideoGrid } from "@/components/VideoGrid";
import { Appbar } from "@/components/Appbar";

export default function Home() {
  return (
    <div>
      <Appbar></Appbar>
      <VideoGrid></VideoGrid>
    </div>
  );
}
