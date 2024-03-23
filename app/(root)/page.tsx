import Image from "next/image";
import { Button } from "@/components/ui/button";
import Link from "next/link";
export default function Home() {
  return (
    <>
      <section className="bg-primary-50 bg-dotted-pattern bg-contain py-5 md:py-10">
        <div className="wrapper grid grid-cols-1 gap-5 md:grid-cols-2 2xl:gap-0">
          <div className="flex flex-col justify-center gap-8">
            <h1 className="h1-bold">
              Welcome to Ananta 2.0: Unleashing Creativity and Innovation!
            </h1>
            <p className="p-regular-20 md:p-regular-24 text-[#838383] text-pretty	">
              Ananta 2.0 is the exhilarating sequel to our immensely successful
              inaugural fest held in 2023. Building upon the resounding
              achievements of its predecessor, Ananta 2.0 promises to be even
              bigger, better, and more unforgettable. As we dive into the realm
              of creativity and innovation once again, we invite you to embark
              on a journey filled with endless possibilities.
            </p>
            <Button size="lg" asChild className="button w-full sm:w-fit">
              <Link href={"#events"}>Explore Now</Link>
            </Button>
          </div>
          <div className="flex-center">
            <video
              width={800}
              height={1000}
              autoPlay
              muted
              loop
              preload="auto"
              className="rounded-2xl object-cover"
            >
              <source src="/assets/videos/main_video.mp4" type="video/mp4" />
            </video>
          </div>
        </div>
      </section>

      <section
        id="events"
        className="wrapper my-8 flex flex-col gap-8 md:gap-12"
      >
        <h2 className="h2-bold">Events</h2>
      </section>
    </>
  );
}
