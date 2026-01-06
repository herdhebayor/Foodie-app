import HomePage from "@/components/Home";

export default function Home() {
  return (
    <div className="flex min-h-screen  w-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <main className=" min-h-screen w-screen  bg-white dark:bg-black">
        <HomePage/>
      </main>
    </div>
  );
}
