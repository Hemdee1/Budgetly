import Image from "next/image";
import Header from "@/components/header";
import useUserStore from "@/store/user";
import Link from "next/link";

export default function Home() {
  const { user } = useUserStore();

  return (
    <main className="bg-[#F1F6FF] py-20 sm:py-0 overflow-hidden">
      <div className="w-fullscreen max-w-full mx-auto sm:h-screen flex flex-col sm:flex-row sm:justify-between items-center gap-20 sm:gap-10 px-5 md:px-20 pt-16">
        <Header />
        <div className="text-[#092256] w-[478px] max-w-full space-y-4 sm:space-y-8">
          {/* <h1 className="font-extrabold text-[48px] leading-[48px]">
            Fastest way to track your expenses
          </h1> */}
          <h1 className="font-extrabold text-[40px] sm:text-[50px] lg:text-[80px] leading-[50px] sm:leading-[60px] lg:leading-[80px] text-nowrap">
            Track your{" "}
            <span className="text-primary block italic">expenses</span>
          </h1>
          <p className="font-medium text-sm sm:text-base">
            Get AI - generated categories and allocate x% of your monthly income
            to achieve your financial goals.
          </p>
          <div>
            {user ? (
              <Link
                href="/dashboard"
                className="bg-primary text-white px-4 py-3 sm:py-4 rounded-lg font-semibold text-sm sm:text-base inline-block"
              >
                Go to Dashboard
              </Link>
            ) : (
              <Link
                href="/create"
                className="bg-primary text-white px-4 py-3 sm:py-4 rounded-lg font-semibold text-sm sm:text-base inline-block"
              >
                Create free account
              </Link>
            )}
          </div>
        </div>
        <Image
          src="/images/hero3.png"
          alt="hero image"
          width={0}
          height={0}
          sizes="100vw"
          className="w-[600px] h-auto"
        />
      </div>
    </main>
  );
}
