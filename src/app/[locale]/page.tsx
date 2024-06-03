"use client";

import Image from "next/image";
import { useTranslations } from "next-intl";
import { CarouselPlugin } from "@/components/CarouselPlugin";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function Home() {
  const t = useTranslations("Home");

  return (
    <main className="flex min-h-screen flex-col items-center ">
      <section className="w-full text-center py-16 relative">
        <div
          className="absolute inset-0 z-0 bg-cover bg-center brightness-50"
          style={{ backgroundImage: "url('/background.jpg')" }}
        ></div>
        <div className="relative z-10">
          <h1 className="text-4xl font-bold mb-6 text-white">
            {t("welcomeTitle")}
          </h1>
          <p className="text-lg mb-6 text-white">{t("welcomeMessage")}</p>
        </div>
      </section>

      <section className="container grid lg:grid-cols-3 gap-8 m-8">
        <div className="rounded-lg border border-gray-300 p-6 hover:bg-gray-100 hover:dark:bg-neutral-800/30">
          <h2 className="text-2xl font-semibold mb-3">
            {t("laptopRepairsTitle")}
          </h2>
          <p className="text-sm opacity-70">{t("laptopRepairsMessage")}</p>
        </div>

        <div className="rounded-lg border border-gray-300 p-6 hover:bg-gray-100 hover:dark:bg-neutral-800/30">
          <h2 className="text-2xl font-semibold mb-3">
            {t("mobileRepairsTitle")}
          </h2>
          <p className="text-sm opacity-70">{t("mobileRepairsMessage")}</p>
        </div>

        <div className="rounded-lg border border-gray-300 p-6 hover:bg-gray-100 hover:dark:bg-neutral-800/30">
          <h2 className="text-2xl font-semibold mb-3">
            {t("tabletRepairsTitle")}
          </h2>
          <p className="text-sm opacity-70">{t("tabletRepairsMessage")}</p>
        </div>
      </section>

      <section className="container m-8">
        <h2 className="text-3xl text-center font-semibold mb-6">
          {t("whyChooseUs")}
        </h2>
        <div className="grid lg:grid-cols-3 gap-8">
          <div className="rounded-lg border border-gray-300 p-6 hover:bg-gray-100 hover:dark:bg-neutral-800/30">
            <h3 className="text-xl font-semibold mb-3">
              {t("expertTechniciansTitle")}
            </h3>
            <p className="text-sm opacity-70">
              {t("expertTechniciansMessage")}
            </p>
          </div>

          <div className="rounded-lg border border-gray-300 p-6 hover:bg-gray-100 hover:dark:bg-neutral-800/30">
            <h3 className="text-xl font-semibold mb-3">
              {t("qualityPartsTitle")}
            </h3>
            <p className="text-sm opacity-70">{t("qualityPartsMessage")}</p>
          </div>

          <div className="rounded-lg border border-gray-300 p-6 hover:bg-gray-100 hover:dark:bg-neutral-800/30">
            <h3 className="text-xl font-semibold mb-3">
              {t("customerSatisfactionTitle")}
            </h3>
            <p className="text-sm opacity-70">
              {t("customerSatisfactionMessage")}
            </p>
          </div>
        </div>
      </section>

      <section className="container text-center">
        <h2 className="text-3xl font-semibold mb-6">{t("testimoni")}</h2>
        <p className="text-lg mb-6">{t("description")}</p>
        <CarouselPlugin />
      </section>

      <section className="container text-center m-8">
        <h2 className="text-3xl font-semibold mb-6">{t("getInTouch")}</h2>
        <p className="text-lg mb-6">{t("getInTouchMessage")}</p>
        <div className="flex  gap-2  justify-center">
          <Link href="/contact">
            <Button className="items-center">Contact</Button>
          </Link>
        </div>
      </section>
    </main>
  );
}
