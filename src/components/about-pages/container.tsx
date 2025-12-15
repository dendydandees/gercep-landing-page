import { motion, useAnimation, useInView, type Variants } from "framer-motion";
import { ArrowRightIcon, PlusIcon } from "lucide-react";
import { useEffect, useRef } from "react";
import { VISION_MISSION, WHATSAPP_TEXT, WHATSAPP_URL } from "@/lib/constants";
import { Button } from "../ui/button";

const MotionPlusIcon = motion(PlusIcon);

const headerTextVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: (index = 0) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: index * 0.15,
      duration: 0.35,
      ease: [0.16, 1, 0.3, 1],
    },
  }),
} satisfies Variants;

const visionListVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      delayChildren: 0.12,
      staggerChildren: 0.18,
    },
  },
} satisfies Variants;

const visionColumnVariants = {
  hidden: { opacity: 0, y: 32 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.25, ease: [0.16, 1, 0.3, 1] },
  },
} satisfies Variants;

const visionColumnChildren = {
  hidden: { opacity: 0, y: 16 },
  visible: (index = 0) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.15 + index * 0.12,
      duration: 0.4,
      ease: [0.34, 1.56, 0.64, 1],
    },
  }),
} satisfies Variants;

const visionCardVariants = {
  hidden: {
    opacity: 0,
    y: 32,
    rotateX: 8,
    filter: "blur(6px)",
  },
  visible: (index = 0) => ({
    opacity: 1,
    y: 0,
    rotateX: 0,
    filter: "blur(0px)",
    transition: {
      delay: index * 0.08,
      duration: 0.35,
      ease: [0.22, 1, 0.36, 1],
    },
  }),
  hover: {
    y: -12,
    rotateX: 0,
    rotateY: 2,
    scale: 1.01,
    boxShadow: "0 25px 55px rgba(15, 23, 42, 0.35)",
  },
} satisfies Variants;

const cardShineVariants = {
  hidden: { opacity: 0, x: -25 },
  hover: {
    opacity: 0.55,
    x: 25,
    transition: { duration: 0.25, ease: [0.45, 0, 0.55, 1] },
  },
} satisfies Variants;

export function Header() {
  return (
    <div className="mx-0 lg:mx-8">
      <div className="container relative mx-auto mt-24 mb-4 flex w-full flex-col justify-between gap-y-6 bg-background px-4 py-0 text-foreground sm:px-6 lg:mt-32 lg:border-primary/25 lg:border-x-2 lg:border-dashed lg:px-8 lg:py-8">
        <div className="-translate-x-1/2 -top-px pointer-events-none absolute left-1/2 hidden w-screen lg:block lg:border-2 lg:border-primary/25 lg:border-t lg:border-dashed" />

        <motion.section
          animate="visible"
          aria-labelledby="about-heading"
          className="grid items-end gap-6 lg:grid-cols-12 lg:gap-8"
          initial="hidden"
          role="group"
        >
          <header className="col-span-full lg:col-span-8 xl:col-span-6">
            <motion.p
              className="mb-2 font-bold text-primary text-sm uppercase tracking-widest"
              custom={0}
              id="about-kicker"
              variants={headerTextVariants}
            >
              About Us
            </motion.p>
            <motion.h1
              aria-describedby="about-kicker"
              className="text-pretty font-extrabold text-4xl uppercase leading-tight md:text-5xl"
              custom={1}
              id="about-heading"
              variants={headerTextVariants}
            >
              The Most <span className="text-primary">Trusted</span> Logistics{" "}
              <span className="text-primary">Partner</span> for Your Business
            </motion.h1>
          </header>

          <section
            aria-labelledby="about-pillars-heading"
            className="col-span-full lg:col-span-4 lg:col-end-13"
          >
            <h2 className="sr-only" id="about-pillars-heading">
              What drives GERCEP
            </h2>
            <motion.p
              className="text-pretty text-lg leading-relaxed tracking-tight opacity-75 md:text-xl"
              custom={2}
              variants={headerTextVariants}
            >
              Reliability, Speed, Innovation, Partnership, and Integrity—five
              pillars that guide every delivery and every customer relationship.
            </motion.p>
          </section>
        </motion.section>

        <div className="-translate-x-1/2 -bottom-px pointer-events-none absolute left-1/2 hidden w-screen lg:block lg:border-2 lg:border-primary/25 lg:border-b lg:border-dashed" />
      </div>
    </div>
  );
}

export function Vision() {
  const listRef = useRef<HTMLUListElement>(null);
  const listControls = useAnimation();
  const listInView = useInView(listRef, {
    once: true,
    margin: "-10% 0px",
  });

  useEffect(() => {
    if (listInView) {
      listControls.start("visible");
    }
  }, [listControls, listInView]);

  return (
    <section
      aria-labelledby="vision-section-heading"
      className="container mx-auto grid gap-8 px-4 pt-4 pb-8 sm:px-6 lg:grid-cols-12 lg:gap-12 lg:px-8 lg:pb-16 xl:pb-24"
    >
      <h2 className="sr-only" id="vision-section-heading">
        Vision and mission
      </h2>
      <motion.div
        className="col-span-full flex flex-col items-stretch space-y-6 lg:col-span-6"
        initial="hidden"
        variants={visionColumnVariants}
        viewport={{ once: true, amount: 0.55 }}
        whileInView="visible"
      >
        <motion.section
          aria-labelledby="vision-description-heading"
          className="flex-1"
          variants={visionColumnChildren}
        >
          <h3 className="sr-only" id="vision-description-heading">
            Customer promise
          </h3>
          <motion.p
            className="mb-10 text-pretty font-medium text-2xl text-foreground leading-relaxed tracking-tight"
            custom={0}
            variants={visionColumnChildren}
          >
            Our focus is simple: increase customer productivity through
            innovative logistics and consistent execution—so your business runs
            smoother and more profitable.
          </motion.p>

          <motion.div custom={1} variants={visionColumnChildren}>
            <Button asChild className="px-8!" size="lg">
              <a
                aria-label="Request a logistics quote via WhatsApp"
                href={`${WHATSAPP_URL}?text=${encodeURIComponent(WHATSAPP_TEXT)}`}
                rel="noreferrer noopener"
                target="_blank"
              >
                Get a Quote
                <ArrowRightIcon className="h-4 w-4" />
              </a>
            </Button>
          </motion.div>
        </motion.section>

        <motion.p
          className="mt-auto hidden text-pretty font-semibold text-muted-foreground/75 text-sm uppercase tracking-[0.4em] lg:block"
          custom={2}
          variants={visionColumnChildren}
        >
          Based in Jakarta, ID
        </motion.p>
      </motion.div>

      <section
        aria-labelledby="vision-mission-list-heading"
        className="col-span-full space-y-6 lg:col-span-5 lg:col-end-13"
      >
        <h3 className="sr-only" id="vision-mission-list-heading">
          Vision and mission cards
        </h3>

        <motion.ul
          animate={listControls}
          className="space-y-6"
          initial="hidden"
          ref={listRef}
          variants={visionListVariants}
        >
          {VISION_MISSION.map((card, index) => (
            <li key={card.title}>
              <motion.article
                aria-labelledby={`card-${card.title}-heading`}
                className="relative mx-auto flex flex-col items-start rounded-none border-2 border-primary/50 border-dashed shadow-none focus:outline-none focus-visible:ring-2 focus-visible:ring-primary/60"
                custom={index}
                style={{ transformStyle: "preserve-3d" }}
                tabIndex={0}
                variants={visionCardVariants}
                whileFocus="hover"
                whileHover="hover"
              >
                <MotionPlusIcon
                  animate={{
                    opacity: [0.4, 0.85, 0.4],
                    scale: [0.95, 1.1, 0.95],
                    rotate: [0, 90, 0],
                  }}
                  aria-hidden="true"
                  className="-top-3 -left-3 absolute h-6 w-6 text-primary"
                  transition={{
                    duration: 8,
                    ease: "easeInOut",
                    repeat: Number.POSITIVE_INFINITY,
                  }}
                />
                <MotionPlusIcon
                  animate={{
                    opacity: [0.4, 0.85, 0.4],
                    scale: [0.95, 1.1, 0.95],
                    rotate: [0, -90, 0],
                  }}
                  aria-hidden="true"
                  className="-bottom-3 -left-3 absolute h-6 w-6 text-primary"
                  transition={{
                    duration: 8,
                    ease: "easeInOut",
                    repeat: Number.POSITIVE_INFINITY,
                    delay: 0.4,
                  }}
                />
                <MotionPlusIcon
                  animate={{
                    opacity: [0.4, 0.85, 0.4],
                    scale: [0.95, 1.1, 0.95],
                    rotate: [0, -90, 0],
                  }}
                  aria-hidden="true"
                  className="-top-3 -right-3 absolute h-6 w-6 text-primary"
                  transition={{
                    duration: 8,
                    ease: "easeInOut",
                    repeat: Number.POSITIVE_INFINITY,
                    delay: 0.8,
                  }}
                />
                <MotionPlusIcon
                  animate={{
                    opacity: [0.4, 0.85, 0.4],
                    scale: [0.95, 1.1, 0.95],
                    rotate: [0, 90, 0],
                  }}
                  aria-hidden="true"
                  className="-bottom-3 -right-3 absolute h-6 w-6 text-primary"
                  transition={{
                    duration: 8,
                    ease: "easeInOut",
                    repeat: Number.POSITIVE_INFINITY,
                    delay: 1.2,
                  }}
                />

                <div className="relative m-2 overflow-hidden rounded-2xl bg-primary p-6 text-primary-foreground/75">
                  {/* Background image overlay */}
                  <motion.div
                    animate={{
                      opacity: [0.15, 0.3, 0.15],
                      scale: [1, 1.03, 1],
                    }}
                    aria-hidden
                    className="pointer-events-none absolute inset-0 opacity-50!"
                    role="presentation"
                    style={{
                      backgroundImage: `url("/bg-image-footer.png")`,
                      backgroundSize: "cover",
                      backgroundPosition: "center",
                      backgroundRepeat: "no-repeat",
                    }}
                    transition={{
                      duration: 16,
                      repeat: Number.POSITIVE_INFINITY,
                    }}
                  />
                  <motion.span
                    aria-hidden="true"
                    className="pointer-events-none absolute inset-1 rounded-2xl bg-linear-to-tr from-white/15 via-transparent to-transparent blur-sm"
                    variants={cardShineVariants}
                  />

                  <div className="mb-4 flex items-center justify-between">
                    <h4
                      className="font-semibold text-xl"
                      id={`card-${card.title}-heading`}
                    >
                      {card.title}
                    </h4>

                    <div className="inline-flex shrink-0 items-center rounded-sm border border-primary-foreground/15 bg-primary-foreground/15 p-2">
                      {card.icon ? <card.icon className="opacity-100" /> : null}
                    </div>
                  </div>

                  <p className="text-pretty leading-relaxed">
                    {card.description}
                  </p>
                </div>
              </motion.article>
            </li>
          ))}
        </motion.ul>
      </section>
    </section>
  );
}
