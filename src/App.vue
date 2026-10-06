<template>
    <!-- ================================================================== -->
    <!-- HEADER / NAV                                                        -->
    <!-- ================================================================== -->
    <header
        class="sticky top-0 z-50 border-b backdrop-blur-xl transition-colors duration-300"
        :class="
            scrolled
                ? 'bg-bg/80 border-ink/10 dark:bg-bg-dark/80 dark:border-ink-dark/15'
                : 'bg-bg/60 border-transparent dark:bg-bg-dark/50'
        "
    >
        <nav
            aria-label="Main"
            class="mx-auto flex max-w-site items-center gap-6 px-5 transition-[padding] duration-300 sm:px-8"
            :class="scrolled ? 'py-3' : 'py-5'"
        >
            <a
                href="#home"
                class="flex items-center gap-2.5 text-[17px] font-extrabold tracking-tight"
            >
                farhanjtl
            </a>

            <!-- Desktop links -->
            <ul
                class="ml-auto hidden items-center gap-1 text-sm font-medium lg:flex"
            >
                <li v-for="link in navLinks" :key="link.id">
                    <a
                        :href="'#' + link.id"
                        class="block rounded-full px-3.5 py-2 transition-colors"
                        :class="
                            activeSection === link.id
                                ? 'text-accent bg-accent/10 dark:text-accent-dark dark:bg-accent-dark/15'
                                : 'text-ink/55 hover:text-ink dark:text-ink-dark/60 dark:hover:text-ink-dark'
                        "
                    >
                        {{ link.label }}
                    </a>
                </li>
            </ul>

            <!-- Right-side actions -->
            <div class="ml-auto flex items-center gap-1.5 lg:ml-0">
                <a
                    href="https://github.com/farhanjiratullah"
                    target="_blank"
                    rel="noopener"
                    aria-label="GitHub"
                    class="grid h-[38px] w-[38px] place-items-center rounded-[10px] text-ink/55 transition-colors hover:bg-surface hover:text-ink dark:text-ink-dark/60 dark:hover:bg-surface-dark dark:hover:text-ink-dark"
                >
                    <IconGithub />
                </a>
                <a
                    href="https://linkedin.com/in/farhanjiratullah"
                    target="_blank"
                    rel="noopener"
                    aria-label="LinkedIn"
                    class="grid h-[38px] w-[38px] place-items-center rounded-[10px] text-ink/55 transition-colors hover:bg-surface hover:text-ink dark:text-ink-dark/60 dark:hover:bg-surface-dark dark:hover:text-ink-dark"
                >
                    <IconLinkedin />
                </a>

                <button
                    type="button"
                    @click="toggleTheme"
                    :aria-label="
                        dark ? 'Switch to light theme' : 'Switch to dark theme'
                    "
                    class="grid h-[38px] w-[38px] place-items-center rounded-[10px] text-ink/55 transition-colors hover:bg-surface hover:text-ink dark:text-ink-dark/60 dark:hover:bg-surface-dark dark:hover:text-ink-dark"
                >
                    <IconSun v-if="dark" />
                    <IconMoon v-else />
                </button>

                <a
                    href="/Farhan_Jiratullah_Full_Stack_Developer_Resume.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    download
                    class="ml-2 hidden items-center gap-2 rounded-full bg-ink px-4.5 py-2.5 text-sm font-semibold text-bg transition-opacity hover:opacity-85 dark:bg-ink-dark dark:text-bg-dark lg:flex"
                >
                    Resume <IconDownload />
                </a>

                <!-- Hamburger -->
                <button
                    type="button"
                    @click="menuOpen = !menuOpen"
                    :aria-expanded="menuOpen ? 'true' : 'false'"
                    aria-controls="mobile-drawer"
                    aria-label="Toggle menu"
                    class="grid h-11 w-11 place-items-center rounded-[10px] border border-ink/15 text-ink dark:border-ink-dark/20 dark:text-ink-dark lg:hidden"
                >
                    <IconClose v-if="menuOpen" />
                    <IconMenu v-else />
                </button>
            </div>
        </nav>

        <!-- Mobile drawer -->
        <transition name="drawer">
            <div
                v-show="menuOpen"
                id="mobile-drawer"
                class="border-t border-ink/10 px-6 pb-6 pt-2 dark:border-ink-dark/15 lg:hidden"
            >
                <ul class="grid gap-1 text-base font-medium">
                    <li v-for="link in navLinks" :key="link.id">
                        <a
                            :href="'#' + link.id"
                            @click="menuOpen = false"
                            class="block rounded-full px-3.5 py-2.5 text-center transition-colors"
                            :class="
                                activeSection === link.id
                                    ? 'text-accent bg-accent/10 dark:text-accent-dark dark:bg-accent-dark/15'
                                    : 'text-ink/55 hover:text-ink dark:text-ink-dark/60 dark:hover:text-ink-dark'
                            "
                        >
                            {{ link.label }}
                        </a>
                    </li>
                </ul>
                <div class="mt-4">
                    <a
                        href="/Farhan_Jiratullah_Full_Stack_Developer_Resume.pdf"
                        target="_blank"
                        rel="noopener noreferrer"
                        download
                        class="flex items-center justify-center gap-2 rounded-full bg-ink px-4.5 py-3.5 text-[15px] transition-opacity hover:opacity-85 font-semibold text-bg dark:bg-ink-dark dark:text-bg-dark"
                    >
                        Resume <IconDownload />
                    </a>
                </div>
            </div>
        </transition>
    </header>

    <main>
        <!-- ================================================================== -->
        <!-- HERO                                                                -->
        <!-- ================================================================== -->
        <section
            id="home"
            aria-label="Introduction"
            class="relative mx-auto grid max-w-site items-center gap-12 overflow-hidden px-5 py-16 sm:px-8 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16 lg:py-24 lg:min-h-[calc(100vh_-_76px)]"
        >
            <div class="relative z-10">
                <p
                    class="anim-rise m-0 mb-7 flex items-center gap-3 font-mono text-[12.5px] uppercase tracking-[0.22em] text-accent dark:text-accent-dark"
                >
                    <span
                        class="inline-block h-px w-7 bg-accent dark:bg-accent-dark"
                    ></span>
                    Hello, I'm Farhan Jiratullah
                </p>

                <h1
                    class="m-0 text-[clamp(44px,6.4vw,92px)] font-extrabold leading-[0.94] tracking-[-0.045em] [text-wrap:balance]"
                >
                    <span
                        class="anim-rise block font-semibold text-ink/45 dark:text-ink-dark/50"
                        style="animation-delay: 0.08s"
                    >
                        Full Stack
                    </span>
                    <span class="anim-rise block" style="animation-delay: 0.16s"
                        >Developer</span
                    >
                </h1>

                <p
                    class="anim-rise m-0 mt-7 max-w-[46ch] text-[18px] leading-relaxed text-ink/60 [text-wrap:pretty] dark:text-ink-dark/70"
                    style="animation-delay: 0.26s"
                >
                    I build modern web applications with a focus on clean
                    architecture, intuitive experiences, and reliable
                    functionality.
                </p>

                <div
                    class="anim-rise mt-10 flex flex-wrap gap-3.5"
                    style="animation-delay: 0.34s"
                >
                    <a
                        href="#projects"
                        class="flex items-center gap-2.5 rounded-full bg-[#4F46E5] px-6.5 py-4 text-[15px] font-semibold text-white shadow-[0_12px_30px_-14px_#4F46E5] transition-transform duration-200 hover:-translate-y-0.5"
                    >
                        View My Work <IconArrow />
                    </a>
                    <a
                        href="#contact"
                        class="flex items-center gap-2.5 rounded-full border border-ink/15 px-6.5 py-4 text-[15px] font-semibold transition-colors hover:bg-surface dark:border-ink-dark/20 dark:hover:bg-surface-dark"
                    >
                        Get In Touch
                    </a>
                </div>

                <div
                    class="anim-fade mt-13 flex items-center gap-7"
                    style="animation-delay: 0.5s"
                >
                    <div class="flex gap-4">
                        <a
                            href="https://github.com/farhanjiratullah"
                            target="_blank"
                            rel="noopener"
                            aria-label="GitHub profile"
                            class="text-ink/55 transition-transform hover:-translate-y-0.5 hover:text-accent dark:text-ink-dark/60 dark:hover:text-accent-dark"
                        >
                            <IconGithub />
                        </a>
                        <a
                            href="https://linkedin.com/in/farhanjiratullah"
                            target="_blank"
                            rel="noopener"
                            aria-label="LinkedIn profile"
                            class="text-ink/55 transition-transform hover:-translate-y-0.5 hover:text-accent dark:text-ink-dark/60 dark:hover:text-accent-dark"
                        >
                            <IconLinkedin />
                        </a>
                        <a
                            href="mailto:farhanjiratullah794@gmail.com"
                            aria-label="Send an email"
                            class="text-ink/55 transition-transform hover:-translate-y-0.5 hover:text-accent dark:text-ink-dark/60 dark:hover:text-accent-dark"
                        >
                            <IconMail />
                        </a>
                    </div>
                    <span
                        class="h-6.5 w-px bg-ink/15 dark:bg-ink-dark/20"
                    ></span>
                    <p
                        class="m-0 font-mono text-xs tracking-wide text-ink/45 dark:text-ink-dark/45"
                    >
                        Laravel · Vue.js · PHP · MySQL · REST API
                    </p>
                </div>
            </div>

            <!-- Portrait + ambient canvas -->
            <div
                class="anim-fade relative h-[420px] lg:h-[min(620px,74vh)]"
                style="animation-delay: 0.2s"
            >
                <canvas
                    ref="flow"
                    aria-hidden="true"
                    class="pointer-events-none absolute inset-0 h-full w-full"
                ></canvas>

                <div
                    class="pointer-events-none absolute inset-0 grid place-items-center"
                >
                    <div
                        class="relative aspect-[4/5] h-[min(100%,460px)] max-w-[76%]"
                    >
                        <figure
                            class="group pointer-events-auto absolute inset-0 m-0 transition-transform duration-500 hover:-translate-y-1.5"
                        >
                            <!-- Card panel (stays within the frame) -->
                            <div
                                class="absolute inset-0 rounded-[20px] border border-ink/12 bg-surface shadow-[0_40px_80px_-40px_rgba(15,18,32,0.45)] dark:border-ink-dark/20 dark:bg-surface-dark"
                            ></div>
                            <!-- Portrait breaking out past the top edge -->
                            <img
                                src="/portrait-3.png"
                                alt="Professional portrait of Farhan Jiratullah"
                                width="460"
                                height="575"
                                class="absolute bottom-0 left-1/2 h-[108%] w-auto max-w-none -translate-x-1/2 drop-shadow-[0_28px_40px_rgba(15,18,32,0.4)] transition-transform duration-500 group-hover:scale-[1.03] lg:h-[112%]"
                            />
                        </figure>
                    </div>
                </div>
            </div>
        </section>

        <!-- ================================================================== -->
        <!-- ABOUT                                                               -->
        <!-- ================================================================== -->
        <section
            id="about"
            class="mx-auto grid max-w-site items-start gap-12 px-5 py-18 sm:px-8 lg:grid-cols-[0.42fr_1fr] lg:gap-16 lg:py-26"
        >
            <div data-reveal>
                <p
                    class="m-0 mb-5 font-mono text-xs uppercase tracking-[0.2em] text-accent dark:text-accent-dark"
                >
                    01 — About
                </p>
                <h2
                    class="m-0 text-[clamp(30px,3.6vw,48px)] font-bold leading-[1.05] tracking-[-0.035em]"
                >
                    About Me
                </h2>
            </div>
            <div data-reveal style="--reveal-delay: 0.1s">
                <p class="m-0 text-[19px] leading-relaxed [text-wrap:pretty]">
                    I'm an Informatics Engineering graduate working as a Full
                    Stack Developer, building web applications end to end — from
                    database schema and API design through to the interfaces
                    people use every day.
                </p>
                <p
                    class="m-0 mt-5 text-[17px] leading-[1.7] text-ink/60 [text-wrap:pretty] dark:text-ink-dark/70"
                >
                    My work so far has been on real production systems: an
                    enterprise resource planning platform used for purchasing,
                    inventory and service operations, and a content management
                    system serving a university. I care about clean
                    architecture, readable code, and shipping software that
                    keeps working after launch — and I keep learning with each
                    project.
                </p>

                <dl
                    class="m-0 mt-9 grid grid-cols-[repeat(auto-fit,minmax(150px,1fr))] gap-px overflow-hidden rounded-2xl border border-ink/12 bg-ink/12 dark:border-ink-dark/20 dark:bg-ink-dark/20"
                >
                    <div
                        v-for="stat in stats"
                        :key="stat.label"
                        class="bg-bg p-5.5 dark:bg-bg-dark"
                    >
                        <dt class="text-[26px] font-bold tracking-[-0.02em]">
                            {{ stat.value }}
                        </dt>
                        <dd
                            class="m-0 mt-1.5 text-[13px] text-ink/60 dark:text-ink-dark/70"
                        >
                            {{ stat.label }}
                        </dd>
                    </div>
                </dl>
            </div>
        </section>

        <!-- ================================================================== -->
        <!-- PROJECTS                                                            -->
        <!-- ================================================================== -->
        <section
            id="projects"
            class="mx-auto max-w-site px-5 py-18 sm:px-8 lg:py-26"
        >
            <div
                class="mb-12 flex flex-wrap items-end justify-between gap-5"
                data-reveal
            >
                <div>
                    <p
                        class="m-0 mb-5 font-mono text-xs uppercase tracking-[0.2em] text-accent dark:text-accent-dark"
                    >
                        02 — Work
                    </p>
                    <h2
                        class="m-0 text-[clamp(30px,3.6vw,48px)] font-bold leading-[1.05] tracking-[-0.035em]"
                    >
                        Selected Projects
                    </h2>
                </div>
                <p
                    class="m-0 max-w-[38ch] text-base leading-relaxed text-ink/60 dark:text-ink-dark/70"
                >
                    A selection of projects I've contributed to and developed.
                </p>
            </div>

            <div class="grid gap-7">
                <article
                    v-for="project in projects"
                    :key="project.key"
                    data-reveal
                    class="grid overflow-hidden rounded-3xl border border-ink/12 bg-white/90 transition-all duration-300 hover:-translate-y-1 hover:border-ink/25 hover:shadow-[0_30px_60px_-40px_rgba(15,18,32,0.5)] dark:border-ink-dark/20 dark:bg-surface-dark/80 dark:hover:border-ink-dark/40 lg:grid-cols-[0.9fr_1.1fr]"
                >
                    <div
                        class="stripes relative grid min-h-[280px] place-items-center overflow-hidden"
                    >
                        <img
                            v-if="project.thumb"
                            :src="project.thumb"
                            :alt="project.thumbLabel"
                            loading="lazy"
                            class="absolute inset-0 h-full w-full object-contain"
                        />
                        <span
                            v-else
                            class="rounded-md border border-ink/12 bg-bg px-3 py-2 font-mono text-[11px] uppercase tracking-[0.14em] text-ink/45 dark:border-ink-dark/20 dark:bg-bg-dark dark:text-ink-dark/45"
                        >
                            {{ project.thumbLabel }}
                        </span>
                    </div>

                    <div class="flex flex-col gap-4.5 p-9">
                        <div class="flex flex-wrap items-center gap-2.5">
                            <span
                                class="rounded-full bg-accent/10 px-2.5 py-1.5 font-mono text-[11px] uppercase tracking-[0.12em] text-accent dark:bg-accent-dark/15 dark:text-accent-dark"
                            >
                                {{ project.category }}
                            </span>
                            <span
                                class="text-xs text-ink/45 dark:text-ink-dark/45"
                                >{{ project.scope }}</span
                            >
                        </div>

                        <div>
                            <h3
                                class="m-0 text-[28px] font-bold tracking-[-0.03em]"
                            >
                                {{ project.title }}
                            </h3>
                            <p
                                class="m-0 mt-1.5 text-sm text-ink/60 dark:text-ink-dark/70"
                            >
                                {{ project.role }}
                            </p>
                        </div>

                        <p
                            class="m-0 text-base leading-relaxed text-ink/60 [text-wrap:pretty] dark:text-ink-dark/70"
                        >
                            {{ project.summary }}
                        </p>

                        <ul
                            class="m-0 flex list-none flex-wrap gap-2 p-0 text-[13px]"
                        >
                            <li
                                v-for="feature in project.features"
                                :key="feature"
                                class="rounded-full border border-ink/12 px-3 py-1.5 text-ink/60 dark:border-ink-dark/20 dark:text-ink-dark/70"
                            >
                                {{ feature }}
                            </li>
                        </ul>

                        <p
                            class="m-0 font-mono text-xs text-ink/45 dark:text-ink-dark/45"
                        >
                            {{ project.tech }}
                        </p>

                        <div class="mt-auto flex flex-wrap gap-3">
                            <button
                                type="button"
                                @click="openCase(project.key)"
                                class="flex items-center gap-2 rounded-full bg-ink px-5 py-3.5 text-sm font-semibold text-bg transition-opacity hover:opacity-85 dark:bg-ink-dark dark:text-bg-dark"
                            >
                                View Case Study <IconArrow />
                            </button>
                        </div>
                    </div>
                </article>

                <!-- In-progress personal project -->
                <article
                    data-reveal
                    class="flex flex-wrap items-center justify-between gap-5 rounded-3xl border border-dashed border-ink/25 p-10 dark:border-ink-dark/40"
                >
                    <div>
                        <h3
                            class="m-0 text-[22px] font-bold tracking-[-0.02em] text-ink/60 dark:text-ink-dark/70"
                        >
                            Personal project — in progress
                        </h3>
                        <p
                            class="m-0 mt-2 max-w-[52ch] text-[15px] text-ink/45 dark:text-ink-dark/45"
                        >
                            A full-stack application of my own: real use case,
                            clean interface, and backend functionality with
                            database integration. Details soon.
                        </p>
                    </div>
                    <a
                        href="https://github.com/farhanjiratullah"
                        target="_blank"
                        rel="noopener"
                        class="flex items-center gap-2.5 rounded-full border border-ink/15 px-5 py-3.5 text-sm font-semibold transition-colors hover:bg-surface dark:border-ink-dark/20 dark:hover:bg-surface-dark"
                    >
                        <IconGithub /> Follow on GitHub
                    </a>
                </article>
            </div>
        </section>

        <!-- ================================================================== -->
        <!-- EXPERIENCE                                                          -->
        <!-- ================================================================== -->
        <section
            id="experience"
            class="mx-auto grid max-w-site items-start gap-12 px-5 py-18 sm:px-8 lg:grid-cols-[0.42fr_1fr] lg:gap-16 lg:py-26"
        >
            <div data-reveal>
                <p
                    class="m-0 mb-5 font-mono text-xs uppercase tracking-[0.2em] text-accent dark:text-accent-dark"
                >
                    03 — Track record
                </p>
                <h2
                    class="m-0 text-[clamp(30px,3.6vw,48px)] font-bold leading-[1.05] tracking-[-0.035em]"
                >
                    Experience
                </h2>
            </div>

            <ol
                class="m-0 grid list-none gap-11 border-l border-ink/12 p-0 pl-7.5 dark:border-ink-dark/20"
            >
                <li
                    v-for="(job, i) in experience"
                    :key="job.company"
                    class="relative"
                    data-reveal
                    :style="{ '--reveal-delay': i * 0.08 + 's' }"
                >
                    <span
                        class="absolute -left-9 top-1.5 h-2.75 w-2.75 rounded-full"
                        :class="
                            i === 0
                                ? 'bg-accent shadow-[0_0_0_4px_rgba(79,70,229,0.15)] dark:bg-accent-dark'
                                : 'bg-bg border-2 border-ink/25 dark:bg-bg-dark dark:border-ink-dark/40'
                        "
                    ></span>
                    <p
                        class="m-0 font-mono text-xs tracking-wide text-ink/45 dark:text-ink-dark/45"
                    >
                        {{ job.period }}
                    </p>
                    <h3
                        class="m-0 mb-1 mt-2 text-[22px] font-bold tracking-[-0.02em]"
                    >
                        {{ job.title }}
                    </h3>
                    <p
                        class="m-0 text-[15px] text-ink/60 dark:text-ink-dark/70"
                    >
                        {{ job.company }}
                    </p>
                    <ul
                        class="m-0 mt-4 grid list-disc gap-2 pl-4.5 text-[15px] leading-relaxed text-ink/60 dark:text-ink-dark/70"
                    >
                        <li v-for="point in job.points" :key="point">
                            {{ point }}
                        </li>
                    </ul>
                    <p
                        class="m-0 mt-3.5 font-mono text-xs text-ink/45 dark:text-ink-dark/45"
                    >
                        {{ job.tech }}
                    </p>
                </li>
            </ol>
        </section>

        <!-- ================================================================== -->
        <!-- SKILLS                                                              -->
        <!-- ================================================================== -->
        <section
            id="skills"
            class="mx-auto max-w-site px-5 py-18 sm:px-8 lg:py-26"
        >
            <p
                class="m-0 mb-5 font-mono text-xs uppercase tracking-[0.2em] text-accent dark:text-accent-dark"
                data-reveal
            >
                04 — Toolkit
            </p>
            <h2
                class="m-0 mb-10 text-[clamp(30px,3.6vw,48px)] font-bold leading-[1.05] tracking-[-0.035em]"
                data-reveal
            >
                Skills &amp; Technologies
            </h2>

            <div
                class="grid grid-cols-[repeat(auto-fit,minmax(260px,1fr))] gap-5"
            >
                <div
                    v-for="(group, gi) in skillGroups"
                    :key="group.name"
                    data-reveal
                    :style="{ '--reveal-delay': gi * 0.06 + 's' }"
                    class="relative rounded-[20px] border border-ink/12 bg-white/90 p-7 dark:border-ink-dark/20 dark:bg-surface-dark/80"
                >
                    <h3
                        class="m-0 mb-4.5 font-mono text-[13px] uppercase tracking-[0.14em] text-ink/45 dark:text-ink-dark/45"
                    >
                        {{ group.name }}
                    </h3>
                    <ul
                        class="m-0 flex list-none flex-wrap gap-2.5 p-0 text-[15px] font-semibold"
                    >
                        <li
                            v-for="tech in group.items"
                            :key="tech.name"
                            tabindex="0"
                            @mouseenter="hoverSkill = tech.name"
                            @mouseleave="hoverSkill = null"
                            @focus="hoverSkill = tech.name"
                            @blur="hoverSkill = null"
                            class="relative flex items-center gap-2.5 rounded-xl bg-surface px-3.5 py-2.5 transition-transform duration-200 hover:-translate-y-0.5 hover:shadow-[0_10px_20px_-14px_rgba(15,18,32,0.6)] dark:bg-surface-dark"
                            :class="{ 'z-50': hoverSkill === tech.name }"
                        >
                            <img
                                v-if="tech.slug"
                                :src="skillIcon(tech)"
                                alt=""
                                width="18"
                                height="18"
                                loading="lazy"
                                class="block h-[18px] w-[18px] opacity-90"
                            />
                            <span
                                v-else
                                aria-hidden="true"
                                class="grid h-[18px] w-[18px] place-items-center rounded-[5px] border border-ink/25 font-mono text-[10px] font-medium leading-none text-ink/60 dark:border-ink-dark/40 dark:text-ink-dark/70"
                            >
                                {{ tech.glyph }}
                            </span>
                            {{ tech.name }}

                            <span
                                role="tooltip"
                                class="pointer-events-none absolute bottom-[calc(100%+10px)] left-1/2 z-20 w-[220px] max-w-[70vw] -translate-x-1/2 rounded-xl bg-ink px-3 py-2.5 text-bg shadow-[0_18px_36px_-22px_rgba(15,18,32,0.7)] transition-opacity duration-150 dark:bg-ink-dark dark:text-bg-dark"
                                :class="
                                    hoverSkill === tech.name
                                        ? 'opacity-100'
                                        : 'opacity-0'
                                "
                            >
                                <span class="block text-[13px] font-bold">{{
                                    tech.name
                                }}</span>
                                <span
                                    class="mt-0.75 block text-xs font-medium leading-snug opacity-80 [text-wrap:pretty]"
                                >
                                    {{ tech.desc }}
                                </span>
                            </span>
                        </li>
                    </ul>
                </div>
            </div>
        </section>

        <!-- ================================================================== -->
        <!-- EDUCATION                                                           -->
        <!-- ================================================================== -->
        <section
            id="education"
            class="mx-auto grid max-w-site items-start gap-12 px-5 py-18 sm:px-8 lg:grid-cols-[0.42fr_1fr] lg:gap-16 lg:py-26"
        >
            <div data-reveal>
                <p
                    class="m-0 mb-5 font-mono text-xs uppercase tracking-[0.2em] text-accent dark:text-accent-dark"
                >
                    05 — Background
                </p>
                <h2
                    class="m-0 text-[clamp(30px,3.6vw,48px)] font-bold leading-[1.05] tracking-[-0.035em]"
                >
                    Education
                </h2>
            </div>
            <div
                data-reveal
                style="--reveal-delay: 0.1s"
                class="flex flex-wrap items-start justify-between gap-5 rounded-[20px] border border-ink/12 bg-white/90 p-8 dark:border-ink-dark/20 dark:bg-surface-dark/80"
            >
                <div>
                    <h3 class="m-0 text-[22px] font-bold tracking-[-0.02em]">
                        Universitas Pamulang
                    </h3>
                    <p
                        class="m-0 mt-2 text-base text-ink/60 dark:text-ink-dark/70"
                    >
                        Bachelor of Computer Science — Informatics Engineering
                    </p>
                </div>
                <div class="grid justify-items-start gap-2">
                    <p
                        class="m-0 font-mono text-[13px] text-ink/45 dark:text-ink-dark/45"
                    >
                        Graduated 2026
                    </p>
                    <p class="m-0 text-[15px] font-bold tracking-[-0.01em]">
                        GPA 3.56
                    </p>
                </div>
            </div>
        </section>

        <!-- ================================================================== -->
        <!-- CONTACT                                                             -->
        <!-- ================================================================== -->
        <section
            id="contact"
            class="mx-auto max-w-site px-5 py-18 sm:px-8 lg:py-26"
        >
            <div
                data-reveal
                class="grid gap-12 rounded-[28px] border border-ink/12 bg-surface p-8 dark:border-ink-dark/20 dark:bg-surface-dark sm:p-14 lg:grid-cols-[0.42fr_1fr]"
            >
                <div>
                    <p
                        class="m-0 mb-5 font-mono text-xs uppercase tracking-[0.2em] text-accent dark:text-accent-dark"
                    >
                        06 — Contact
                    </p>
                    <h2
                        class="m-0 text-[clamp(30px,3.6vw,48px)] font-bold leading-[1.03] tracking-[-0.035em]"
                    >
                        Let's Work Together
                    </h2>
                    <p
                        class="m-0 mt-5 max-w-[38ch] text-[17px] leading-relaxed text-ink/60 [text-wrap:pretty] dark:text-ink-dark/70"
                    >
                        Have a project, opportunity, or just want to connect?
                        Feel free to reach out.
                    </p>
                    <div class="mt-8 grid gap-3 text-[15px]">
                        <a
                            v-for="item in contactLinks"
                            :key="item.label"
                            :href="item.href"
                            :target="
                                item.href.startsWith('http') ? '_blank' : null
                            "
                            :rel="
                                item.href.startsWith('http') ? 'noopener' : null
                            "
                            class="flex items-center gap-3 text-ink/60 transition-colors hover:text-accent dark:text-ink-dark/70 dark:hover:text-accent-dark"
                        >
                            <component :is="item.icon" />
                            {{ item.label }}
                        </a>
                    </div>
                </div>

                <form
                    novalidate
                    @submit.prevent="submitForm"
                    class="grid gap-4"
                >
                    <div class="grid gap-2">
                        <label
                            for="cf-name"
                            class="text-[13px] font-semibold text-ink/60 dark:text-ink-dark/70"
                        >
                            Name
                        </label>
                        <input
                            id="cf-name"
                            name="name"
                            v-model="form.name"
                            @input="clearError('name')"
                            placeholder="Your name"
                            :aria-invalid="!!errors.name"
                            class="rounded-xl border bg-bg px-4 py-3.5 text-[15px] outline-none transition-colors focus:border-accent dark:bg-bg-dark"
                            :class="
                                errors.name
                                    ? 'border-red-600'
                                    : 'border-ink/12 dark:border-ink-dark/20'
                            "
                        />
                        <p
                            v-if="errors.name"
                            class="m-0 text-[12.5px] text-red-600"
                        >
                            Please enter your name.
                        </p>
                    </div>

                    <div class="grid gap-2">
                        <label
                            for="cf-email"
                            class="text-[13px] font-semibold text-ink/60 dark:text-ink-dark/70"
                        >
                            Email
                        </label>
                        <input
                            id="cf-email"
                            name="email"
                            type="email"
                            v-model="form.email"
                            @input="clearError('email')"
                            placeholder="you@company.com"
                            :aria-invalid="!!errors.email"
                            class="rounded-xl border bg-bg px-4 py-3.5 text-[15px] outline-none transition-colors focus:border-accent dark:bg-bg-dark"
                            :class="
                                errors.email
                                    ? 'border-red-600'
                                    : 'border-ink/12 dark:border-ink-dark/20'
                            "
                        />
                        <p
                            v-if="errors.email"
                            class="m-0 text-[12.5px] text-red-600"
                        >
                            {{ emailErrText }}
                        </p>
                    </div>

                    <div class="grid gap-2">
                        <label
                            for="cf-subject"
                            class="text-[13px] font-semibold text-ink/60 dark:text-ink-dark/70"
                        >
                            Subject
                        </label>
                        <input
                            id="cf-subject"
                            name="subject"
                            v-model="form.subject"
                            placeholder="What's this about?"
                            class="rounded-xl border border-ink/12 bg-bg px-4 py-3.5 text-[15px] outline-none transition-colors focus:border-accent dark:border-ink-dark/20 dark:bg-bg-dark"
                        />
                    </div>

                    <div class="grid gap-2">
                        <label
                            for="cf-message"
                            class="text-[13px] font-semibold text-ink/60 dark:text-ink-dark/70"
                        >
                            Message
                        </label>
                        <textarea
                            id="cf-message"
                            name="message"
                            rows="5"
                            v-model="form.message"
                            @input="clearError('message')"
                            placeholder="Tell me a little about it."
                            :aria-invalid="!!errors.message"
                            class="resize-y rounded-xl border bg-bg px-4 py-3.5 text-[15px] outline-none transition-colors focus:border-accent dark:bg-bg-dark"
                            :class="
                                errors.message
                                    ? 'border-red-600'
                                    : 'border-ink/12 dark:border-ink-dark/20'
                            "
                        ></textarea>
                        <p
                            v-if="errors.message"
                            class="m-0 text-[12.5px] text-red-600"
                        >
                            Please add a message.
                        </p>
                    </div>

                    <button
                        type="submit"
                        :disabled="status === 'sending'"
                        class="mt-1 flex items-center justify-center gap-2.5 rounded-full bg-[#4F46E5] px-6 py-4 text-[15px] font-bold text-white transition-all duration-200 hover:-translate-y-px disabled:cursor-not-allowed disabled:opacity-60"
                    >
                        <span
                            v-if="status === 'sending'"
                            class="h-4 w-4 animate-spin rounded-full border-2 border-white/40 border-t-white"
                            aria-hidden="true"
                        ></span>
                        {{ submitLabel }}
                    </button>

                    <p
                        v-if="status === 'success' || status === 'error'"
                        role="status"
                        class="m-0 text-sm font-semibold"
                        :class="
                            status === 'success'
                                ? 'text-green-700 dark:text-green-400'
                                : 'text-red-600'
                        "
                    >
                        {{ statusText }}
                    </p>
                </form>
            </div>
        </section>
    </main>

    <!-- ================================================================== -->
    <!-- FOOTER                                                              -->
    <!-- ================================================================== -->
    <footer class="mt-10 border-t border-ink/12 dark:border-ink-dark/20">
        <div
            class="mx-auto flex max-w-site flex-wrap items-start justify-between gap-8 px-5 py-12 sm:px-8"
        >
            <div>
                <p class="m-0 text-[17px] font-extrabold tracking-[-0.03em]">
                    Farhan Jiratullah
                </p>
                <p class="m-0 mt-1.5 text-sm text-ink/60 dark:text-ink-dark/70">
                    Full Stack Developer
                </p>
            </div>
            <nav
                aria-label="Footer"
                class="flex flex-wrap gap-6 text-sm font-semibold"
            >
                <a
                    v-for="link in footerLinks"
                    :key="link.id"
                    :href="'#' + link.id"
                    class="text-ink/60 transition-colors hover:text-ink dark:text-ink-dark/70 dark:hover:text-ink-dark"
                >
                    {{ link.label }}
                </a>
            </nav>
            <div class="flex gap-3.5">
                <a
                    href="https://github.com/farhanjiratullah"
                    target="_blank"
                    rel="noopener"
                    aria-label="GitHub"
                    class="text-ink/60 transition-colors hover:text-accent dark:text-ink-dark/70 dark:hover:text-accent-dark"
                >
                    <IconGithub />
                </a>
                <a
                    href="https://linkedin.com/in/farhanjiratullah"
                    target="_blank"
                    rel="noopener"
                    aria-label="LinkedIn"
                    class="text-ink/60 transition-colors hover:text-accent dark:text-ink-dark/70 dark:hover:text-accent-dark"
                >
                    <IconLinkedin />
                </a>
                <a
                    href="https://instagram.com/farhanjtl"
                    target="_blank"
                    rel="noopener"
                    aria-label="Instagram"
                    class="text-ink/60 transition-colors hover:text-accent dark:text-ink-dark/70 dark:hover:text-accent-dark"
                >
                    <IconInstagram />
                </a>
                <a
                    href="mailto:farhanjiratullah794@gmail.com"
                    aria-label="Email"
                    class="text-ink/60 transition-colors hover:text-accent dark:text-ink-dark/70 dark:hover:text-accent-dark"
                >
                    <IconMail />
                </a>
            </div>
        </div>
        <p
            class="m-0 mx-auto max-w-site px-5 pb-10 text-[13px] text-ink/45 dark:text-ink-dark/45 sm:px-8"
        >
            © 2026 Farhan Jiratullah. All rights reserved.
        </p>
    </footer>

    <!-- ================================================================== -->
    <!-- CASE STUDY MODAL                                                    -->
    <!-- ================================================================== -->
    <transition name="modal">
        <div
            v-if="activeCase"
            class="fixed inset-0 z-[80] grid place-items-center bg-[rgba(8,11,18,0.62)] p-6 backdrop-blur-sm"
            @click.self="closeCase"
        >
            <article
                role="dialog"
                aria-modal="true"
                aria-labelledby="case-title"
                class="modal-card max-h-[88vh] w-[min(760px,100%)] overflow-auto rounded-3xl border border-ink/12 bg-bg p-10 text-ink dark:border-ink-dark/20 dark:bg-bg-dark dark:text-ink-dark"
            >
                <div class="flex items-start justify-between gap-5">
                    <div>
                        <p
                            class="m-0 font-mono text-[11px] uppercase tracking-[0.14em] text-accent dark:text-accent-dark"
                        >
                            {{ activeCase.kicker }}
                        </p>
                        <h2
                            id="case-title"
                            class="m-0 mt-2.5 text-[32px] font-bold tracking-[-0.03em]"
                        >
                            {{ activeCase.title }}
                        </h2>
                        <p
                            class="m-0 mt-1.5 text-sm text-ink/60 dark:text-ink-dark/70"
                        >
                            {{ activeCase.role }}
                        </p>
                    </div>
                    <button
                        ref="modalClose"
                        type="button"
                        @click="closeCase"
                        aria-label="Close case study"
                        class="grid h-10 w-10 flex-shrink-0 place-items-center rounded-xl border border-ink/12 dark:border-ink-dark/20"
                    >
                        <IconClose />
                    </button>
                </div>

                <div class="mt-7 grid gap-6">
                    <div v-for="block in caseBlocks" :key="block.label">
                        <h3
                            class="m-0 mb-2 font-mono text-[13px] uppercase tracking-[0.14em] text-ink/45 dark:text-ink-dark/45"
                        >
                            {{ block.label }}
                        </h3>
                        <p
                            class="m-0 text-base leading-relaxed text-ink/60 dark:text-ink-dark/70"
                        >
                            {{ block.value }}
                        </p>
                    </div>

                    <div>
                        <h3
                            class="m-0 mb-2.5 font-mono text-[13px] uppercase tracking-[0.14em] text-ink/45 dark:text-ink-dark/45"
                        >
                            Technologies
                        </h3>
                        <p class="m-0 font-mono text-[13px]">
                            {{ activeCase.tech }}
                        </p>
                    </div>

                    <div>
                        <h3
                            class="m-0 mb-3 font-mono text-[13px] uppercase tracking-[0.14em] text-ink/45 dark:text-ink-dark/45"
                        >
                            Links
                        </h3>
                        <div class="flex flex-wrap items-center gap-3">
                            <a
                                v-if="activeCase.hasSite"
                                :href="activeCase.siteUrl"
                                target="_blank"
                                rel="noopener"
                                class="flex items-center gap-2.5 rounded-full bg-[#4F46E5] px-4.5 py-3 text-sm font-semibold text-white transition-transform hover:-translate-y-px"
                            >
                                Visit Website <IconExternal />
                            </a>
                            <span
                                class="text-sm text-ink/45 dark:text-ink-dark/45"
                                >{{ activeCase.siteLabel }}</span
                            >
                        </div>
                    </div>

                    <div>
                        <h3
                            class="m-0 mb-3 font-mono text-[13px] uppercase tracking-[0.14em] text-ink/45 dark:text-ink-dark/45"
                        >
                            Gallery
                        </h3>
                        <div
                            v-if="galleryShots.length"
                            class="grid grid-cols-[repeat(auto-fit,minmax(180px,1fr))] gap-3"
                        >
                            <button
                                v-for="(shot, i) in galleryShots"
                                :key="shot.src"
                                type="button"
                                @click="openLightbox(i)"
                                class="group relative block aspect-[16/10] overflow-hidden rounded-[14px] border border-ink/12 dark:border-ink-dark/20"
                            >
                                <img
                                    :src="shot.src"
                                    :alt="shot.label"
                                    loading="lazy"
                                    class="h-full w-full object-cover object-top transition-transform duration-300 group-hover:scale-[1.03]"
                                />
                                <span
                                    class="pointer-events-none absolute inset-x-0 bottom-0 bg-gradient-to-t from-[rgba(8,11,18,0.72)] to-transparent px-3 py-2 text-left font-mono text-[10px] tracking-[0.12em] text-white"
                                >
                                    {{ shot.label }}
                                </span>
                            </button>
                        </div>
                        <div
                            v-else
                            class="grid grid-cols-[repeat(auto-fit,minmax(180px,1fr))] gap-3"
                        >
                            <div
                                v-for="n in 2"
                                :key="n"
                                class="stripes grid aspect-[16/10] place-items-center rounded-[14px] border border-ink/12 dark:border-ink-dark/20"
                            >
                                <span
                                    class="font-mono text-[10px] tracking-[0.12em] text-ink/45 dark:text-ink-dark/45"
                                >
                                    SCREENSHOT {{ n }}
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </article>
        </div>
    </transition>

    <!-- ================================================================== -->
    <!-- LIGHTBOX                                                            -->
    <!-- ================================================================== -->
    <transition name="modal">
        <div
            v-if="lightboxOpen"
            class="fixed inset-0 z-[90] flex flex-col bg-[rgba(6,8,14,0.94)] backdrop-blur-sm"
            @click.self="closeLightbox"
        >
            <div
                class="flex items-center justify-between gap-4 px-5 py-4 text-white/75"
                @click.self="closeLightbox"
            >
                <span class="font-mono text-xs tracking-[0.16em]">
                    {{ lightboxIndex + 1 }} / {{ galleryShots.length }}
                </span>
                <div class="flex items-center gap-3 text-white/45">
                    <span class="hidden font-mono text-[11px] sm:inline">
                        click image to zoom · move to pan
                    </span>
                    <button
                        type="button"
                        @click="closeLightbox"
                        aria-label="Close gallery"
                        class="grid h-10 w-10 place-items-center rounded-xl border border-white/20 text-white transition-colors hover:bg-white/10"
                    >
                        <IconClose />
                    </button>
                </div>
            </div>

            <div
                class="relative flex flex-1 items-center overflow-hidden"
                @click.self="closeLightbox"
            >
                <div
                    class="flex h-full w-full items-center"
                    :style="{
                        transform: `translateX(${lightboxIndex * -100}%)`,
                        transition:
                            'transform 0.35s cubic-bezier(0.2,0.7,0.2,1)',
                    }"
                >
                    <div
                        v-for="shot in galleryShots"
                        :key="shot.src"
                        class="grid h-full w-full flex-shrink-0 place-items-center px-4 py-2 sm:px-16"
                        @click.self="closeLightbox"
                    >
                        <figure
                            class="m-0 flex max-h-full flex-col items-center gap-3"
                        >
                            <ZoomImg
                                :key="shot.src"
                                :src="shot.src"
                                :alt="shot.label"
                                zoom-type="move"
                                trigger="click"
                                :zoom-scale="3"
                                :step="1"
                                show-zoom-btns
                                :style="shotStyle(shot.src)"
                                class="overflow-hidden rounded-lg shadow-[0_30px_80px_-20px_rgba(0,0,0,0.8)]"
                            />
                            <figcaption
                                class="font-mono text-[11px] tracking-[0.14em] text-white/55"
                            >
                                {{ shot.label }}
                            </figcaption>
                        </figure>
                    </div>
                </div>

                <button
                    v-if="galleryShots.length > 1"
                    type="button"
                    @click="lightboxStep(-1)"
                    aria-label="Previous image"
                    class="absolute left-3 top-1/2 grid h-11 w-11 -translate-y-1/2 place-items-center rounded-full border border-white/20 bg-black/40 text-white transition-colors hover:bg-black/70 sm:left-6"
                >
                    <IconArrow class="rotate-180" />
                </button>
                <button
                    v-if="galleryShots.length > 1"
                    type="button"
                    @click="lightboxStep(1)"
                    aria-label="Next image"
                    class="absolute right-3 top-1/2 grid h-11 w-11 -translate-y-1/2 place-items-center rounded-full border border-white/20 bg-black/40 text-white transition-colors hover:bg-black/70 sm:right-6"
                >
                    <IconArrow />
                </button>
            </div>

            <div
                v-if="galleryShots.length > 1"
                class="flex justify-center gap-2 overflow-x-auto px-5 py-4"
            >
                <button
                    v-for="(shot, i) in galleryShots"
                    :key="shot.src"
                    type="button"
                    @click="goTo(i)"
                    :aria-label="'Show ' + shot.label"
                    class="h-12 w-[72px] flex-shrink-0 overflow-hidden rounded-md border-2 transition-all"
                    :class="
                        i === lightboxIndex
                            ? 'border-white'
                            : 'border-transparent opacity-45 hover:opacity-90'
                    "
                >
                    <img
                        :src="shot.src"
                        alt=""
                        class="h-full w-full object-cover object-top"
                    />
                </button>
            </div>
        </div>
    </transition>
</template>

<script setup>
    import {
        ref,
        reactive,
        computed,
        watch,
        onMounted,
        onUnmounted,
        nextTick,
    } from "vue";

    import IconGithub from "./components/icons/IconGithub.vue";
    import IconLinkedin from "./components/icons/IconLinkedin.vue";
    import IconInstagram from "./components/icons/IconInstagram.vue";
    import IconMail from "./components/icons/IconMail.vue";
    import IconArrow from "./components/icons/IconArrow.vue";
    import IconExternal from "./components/icons/IconExternal.vue";
    import IconDownload from "./components/icons/IconDownload.vue";
    import IconMenu from "./components/icons/IconMenu.vue";
    import IconClose from "./components/icons/IconClose.vue";
    import IconSun from "./components/icons/IconSun.vue";
    import IconMoon from "./components/icons/IconMoon.vue";

    import { ZoomImg } from "vue3-zoomer";
    import "vue3-zoomer/style.css";

    /* ---------------------------------------------------------------- */
    /* Reactive UI state                                                */
    /* ---------------------------------------------------------------- */
    const dark = ref(false);
    const scrolled = ref(false);
    const menuOpen = ref(false);
    const activeSection = ref("home");
    const hoverSkill = ref(null);
    const caseKey = ref(null);

    /* Lightbox */
    const lightboxIndex = ref(-1);
    const lightboxOpen = computed(() => lightboxIndex.value >= 0);
    /* Natural dimensions per image, so each ZoomImg frame keeps its aspect. */
    const shotDims = reactive({});

    const form = reactive({ name: "", email: "", subject: "", message: "" });
    const errors = ref({});
    const status = ref("idle"); // idle | sending | success | error

    /* Template refs */
    const flow = ref(null);
    const modalClose = ref(null);

    /* Non-reactive handles */
    let sendTimer = null;
    let scrollRaf = null;
    let flowRaf = null;
    let flowRo = null;
    let lastFocus = null;
    let onHash = null;
    let sections = [];
    let revealEls = [];

    /* ---------------------------------------------------------------- */
    /* Static content                                                   */
    /* ---------------------------------------------------------------- */
    const navLinks = [
        { id: "home", label: "Home" },
        { id: "about", label: "About" },
        { id: "projects", label: "Projects" },
        { id: "experience", label: "Experience" },
        { id: "skills", label: "Skills" },
        { id: "education", label: "Education" },
        { id: "contact", label: "Contact" },
    ];
    const footerLinks = navLinks.filter((l) => l.id !== "home");

    const stats = [
        { value: "2+", label: "Real-world projects" },
        { value: "Full Stack", label: "Frontend & backend" },
        { value: "Web", label: "Application focus" },
    ];

    const projects = [
        {
            key: "erp",
            title: "ERP Intect",
            role: "Full Stack Developer",
            category: "Enterprise system",
            scope: "Team project",
            thumbLabel: "ERP dashboard screenshot",
            thumb: "/erp-intect/mockup-showcase-erp-intect.png",
            summary:
                "An enterprise resource planning system supporting core business processes: purchasing, inventory, assembly, sales and service management. I contributed across the stack as part of the development team, with Vue.js components on selected pages for more interactive workflows.",
            features: [
                "Purchase Order",
                "Inventory & Stock",
                "Assembly Order",
                "Sales Order",
                "Service Ticket",
            ],
            tech: "Laravel · PHP · Blade · Vue.js · MySQL · Docker · JavaScript",
        },
        {
            key: "cms",
            title: "CMS UNPAM",
            role: "Backend Developer",
            category: "Content platform",
            scope: "University project",
            thumbLabel: "CMS admin screenshot",
            thumb: "/cms-unpam/mockup-showcase-cms-unpam.png",
            summary:
                "A content management system built to manage and organize content for Universitas Pamulang. I focused on backend development — database design, REST APIs, and the logic behind unit, post, menu and page management.",
            features: [
                "Unit Management",
                "Post & Page",
                "Menu Management",
                "Pop-up Info",
                "Gallery",
            ],
            tech: "Laravel · PHP · MySQL · Docker · REST API",
        },
    ];

    const cases = {
        erp: {
            kicker: "Enterprise system · Team project",
            title: "ERP Intect",
            role: "Full Stack Developer",
            overview:
                "An enterprise resource planning system supporting the core operational processes of the business: purchasing, inventory, assembly, sales and service management.",
            problem:
                "Operations were spread across disconnected tools, so stock levels, orders and service requests had to be reconciled manually — slow, and easy to get wrong.",
            myRole: "I worked as part of the development team across the stack: implementing module features in Laravel and Blade, adding Vue.js components to the pages that needed richer interaction, and writing the queries behind stock and order flows. The system was built by a team — not individually.",
            features:
                "Purchase Order · Inventory & Stock Movement · Assembly Order · Sales Order · Service Ticket",
            result: "Core business processes run in one place, with stock movement and order status visible to the teams that depend on them.",
            tech: "Laravel · PHP · Blade · Vue.js · MySQL · Docker · JavaScript",
            siteLabel: "Private repository",
            siteUrl: "https://intect.id",
            hasSite: true,
            gallery: [
                { src: "/erp-intect/login.png", label: "Login" },
                {
                    src: "/erp-intect/dashboard staff.png",
                    label: "Staff dashboard",
                },
                { src: "/erp-intect/beranda.png", label: "Home" },
                { src: "/erp-intect/products.png", label: "Products" },
                {
                    src: "/erp-intect/product-detail.png",
                    label: "Product Detail",
                },
                {
                    src: "/erp-intect/index purchase order.png",
                    label: "Purchase order list",
                },
                {
                    src: "/erp-intect/create purchase order.png",
                    label: "Create purchase order",
                },
                {
                    src: "/erp-intect/report purchasing.png",
                    label: "Purchasing report",
                },
            ],
        },
        cms: {
            kicker: "Content platform · University project",
            title: "CMS UNPAM",
            role: "Backend Developer",
            overview:
                "A content management system developed to manage and organize content for Universitas Pamulang across its units and public pages.",
            problem:
                "Content was maintained without a central system, which made publishing inconsistent and difficult for non-technical editors to manage.",
            myRole: "I focused on the backend: database design, REST API development, and the logic behind unit, post, menu, page, pop-up and gallery management, plus ongoing maintenance and fixes.",
            features:
                "Unit Management · Post Management · Menu Management · Page Management · Pop-up Information · Gallery Management",
            result: "Editors manage content through one interface, with a documented API the front end consumes.",
            tech: "Laravel · PHP · MySQL · REST API · Docker",
            siteLabel: "Private repository",
            siteUrl: "https://www.unpam.ac.id",
            hasSite: true,
            gallery: [
                { src: "/cms-unpam/login.png", label: "Login" },
                { src: "/cms-unpam/beranda.png", label: "Home" },
                { src: "/cms-unpam/posts.png", label: "Posts" },
                { src: "/cms-unpam/post detail.png", label: "Post Detail" },
                { src: "/cms-unpam/unit profile.png", label: "Unit profile" },
                { src: "/cms-unpam/index post.png", label: "Post list" },
                { src: "/cms-unpam/create post.png", label: "Create post" },
                { src: "/cms-unpam/index menu.png", label: "Menu list" },
            ],
        },
    };

    const experience = [
        {
            period: "Mar 2026 - Jun 2026",
            title: "Full Stack Developer",
            company: "CV Intect Teknologi Sejahtera (Internship) · ERP Intect",
            points: [
                "Contributed as part of a development team to develop and deploy an Enterprise Resource Planning (ERP) system covering Purchase Order, Inventory & Stock Movement, Assembly Order, Sales Order, and Service Ticket modules.",
                "Developed and integrated frontend interfaces using Laravel Blade and Vue.js components, while implementing backend logic, business processes, and database operations using Laravel and MySQL.",
                "Implemented Role-Based Access Control (RBAC) with 5 roles—Super Admin, Chair, Manager, Staff, and Technician—along with role-specific dashboards and access to relevant system functionalities.",
                "Developed 5 exportable reports, including Purchasing, Production, Inventory, Sales, and Service reports, to provide structured business information and support decision-making processes.",
            ],
            tech: "Laravel · Vue.js · PHP · MySQL · Docker",
        },
        {
            period: "May 2024 - May 2025",
            title: "Backend Developer",
            company: "PINTER — Universitas Pamulang (Internship) · CMS UNPAM",
            points: [
                "Developed and implemented CMS features using Laravel and MySQL, including REST APIs, to support posts, dynamic menus, dynamic pages, and curricula across 74 units, including faculties, majors, and institutes.",
                "Built and supported content management workflows for 50+ published posts across multiple units, with 1.100+ total views recorded within a 7-day period.",
                "Implemented Role-Based Access Control (RBAC) with Admin, Structural, and Unit roles to provide role-specific access and permissions across the CMS.",
                "Integrated Single Sign-On (SSO) authentication with the Sasmita Group HRIS internal application to streamline user login and authentication within the CMS.",
            ],
            tech: "Laravel · PHP · MySQL · REST API · Docker",
        },
    ];

    const skillGroups = [
        {
            name: "Frontend",
            items: [
                {
                    name: "Vue.js",
                    slug: "vuedotjs",
                    desc: "Progressive JavaScript framework for reactive interfaces",
                },
                {
                    name: "JavaScript",
                    slug: "javascript",
                    desc: "Core language behind interactive web behaviour",
                },
                {
                    name: "HTML",
                    slug: "html5",
                    desc: "Semantic, accessible document structure",
                },
                {
                    name: "CSS",
                    slug: "css",
                    desc: "Layout, responsive design and motion",
                },
                {
                    name: "Tailwind CSS",
                    slug: "tailwindcss",
                    desc: "Utility-first CSS framework for fast, consistent UI",
                },
                {
                    name: "Bootstrap",
                    slug: "bootstrap",
                    desc: "Component and grid framework for rapid layouts",
                },
            ],
        },
        {
            name: "Backend",
            items: [
                {
                    name: "Laravel",
                    slug: "laravel",
                    desc: "PHP framework — routing, Eloquent ORM, queues",
                },
                {
                    name: "PHP",
                    slug: "php",
                    desc: "Server-side language powering my production work",
                },
                {
                    name: "REST API",
                    glyph: "{}",
                    desc: "Designing and documenting service endpoints",
                },
            ],
        },
        {
            name: "Database",
            items: [
                {
                    name: "MySQL",
                    slug: "mysql",
                    desc: "Relational database — schema design and indexing",
                },
                {
                    name: "SQL",
                    glyph: "DB",
                    desc: "Queries, joins and aggregations for reporting",
                },
            ],
        },
        {
            name: "Tools",
            items: [
                {
                    name: "Git",
                    slug: "git",
                    desc: "Version control and branching workflows",
                },
                {
                    name: "GitHub",
                    slug: "github",
                    desc: "Code hosting, pull requests and review",
                },
                {
                    name: "Docker",
                    slug: "docker",
                    desc: "Containerized, reproducible dev environments",
                },
            ],
        },
    ];

    const contactLinks = [
        {
            label: "farhanjiratullah794@gmail.com",
            href: "mailto:farhanjiratullah794@gmail.com",
            icon: IconMail,
        },
        {
            label: "linkedin.com/in/farhanjiratullah",
            href: "https://linkedin.com/in/farhanjiratullah",
            icon: IconLinkedin,
        },
        {
            label: "github.com/farhanjiratullah",
            href: "https://github.com/farhanjiratullah",
            icon: IconGithub,
        },
        {
            label: "instagram.com/farhanjtl",
            href: "https://instagram.com/farhanjtl",
            icon: IconInstagram,
        },
    ];

    /* ---------------------------------------------------------------- */
    /* Derived state                                                    */
    /* ---------------------------------------------------------------- */
    const activeCase = computed(() =>
        caseKey.value ? cases[caseKey.value] : null,
    );

    const caseBlocks = computed(() => {
        const c = activeCase.value;
        if (!c) return [];
        return [
            { label: "Overview", value: c.overview },
            { label: "Problem", value: c.problem },
            { label: "My role", value: c.myRole },
            { label: "Key features", value: c.features },
            { label: "Result", value: c.result },
        ];
    });

    const galleryShots = computed(() => {
        const c = activeCase.value;
        if (!c || !c.gallery) return [];
        return c.gallery.map((s) => ({ ...s, src: encodeURI(s.src) }));
    });

    const emailErrText = computed(() =>
        errors.value.email === "invalid"
            ? "That email address looks incomplete."
            : "Please enter your email.",
    );

    const submitLabel = computed(() =>
        status.value === "sending"
            ? "Sending…"
            : status.value === "success"
              ? "Message sent"
              : "Send Message",
    );

    const statusText = computed(() =>
        status.value === "success"
            ? "Thanks — your message is on its way. I'll get back to you shortly."
            : "Something went wrong sending that. Please email farhanjiratullah794@gmail.com instead.",
    );

    /* ---------------------------------------------------------------- */
    /* Theme                                                            */
    /* ---------------------------------------------------------------- */
    function applyTheme() {
        document.documentElement.classList.toggle("dark", dark.value);
    }
    function toggleTheme() {
        dark.value = !dark.value;
        applyTheme();
        try {
            localStorage.setItem("theme", dark.value ? "dark" : "light");
        } catch (e) {}
    }

    /* ---------------------------------------------------------------- */
    /* Skills                                                           */
    /* ---------------------------------------------------------------- */
    function skillIcon(tech) {
        const color =
            hoverSkill.value === tech.name
                ? "4F46E5"
                : dark.value
                  ? "cbd5e1"
                  : "111318";
        return "https://cdn.simpleicons.org/" + tech.slug + "/" + color;
    }

    /* ---------------------------------------------------------------- */
    /* Contact form                                                     */
    /* ---------------------------------------------------------------- */
    function clearError(field) {
        if (errors.value[field]) {
            const next = { ...errors.value };
            delete next[field];
            errors.value = next;
        }
        if (status.value === "error") status.value = "idle";
    }
    function validate() {
        const e = {};
        if (!form.name.trim()) e.name = true;
        if (!form.email.trim()) e.email = "empty";
        else if (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(form.email.trim()))
            e.email = "invalid";
        if (!form.message.trim()) e.message = true;
        return e;
    }
    function submitForm() {
        const e = validate();
        if (Object.keys(e).length) {
            errors.value = e;
            status.value = "idle";
            return;
        }
        errors.value = {};
        status.value = "sending";
        clearTimeout(sendTimer);
        // Simulated send — wire this to a real endpoint / mail service.
        sendTimer = setTimeout(() => {
            status.value = "success";
            Object.assign(form, {
                name: "",
                email: "",
                subject: "",
                message: "",
            });
        }, 1400);
    }

    /* ---------------------------------------------------------------- */
    /* Case-study modal                                                 */
    /* ---------------------------------------------------------------- */
    function openCase(key) {
        lastFocus = document.activeElement;
        caseKey.value = key;
    }
    function closeCase() {
        caseKey.value = null;
        lightboxIndex.value = -1;
        if (lastFocus && lastFocus.focus) lastFocus.focus();
    }
    function onKeydown(ev) {
        if (lightboxOpen.value) {
            if (ev.key === "Escape") closeLightbox();
            else if (ev.key === "ArrowRight") lightboxStep(1);
            else if (ev.key === "ArrowLeft") lightboxStep(-1);
            return;
        }
        if (ev.key === "Escape") {
            if (caseKey.value) closeCase();
            else if (menuOpen.value) menuOpen.value = false;
        }
    }

    /* ---------------------------------------------------------------- */
    /* Lightbox — sliding gallery viewer (zoom via vue3-zoomer)         */
    /* ---------------------------------------------------------------- */
    function openLightbox(i) {
        lightboxIndex.value = i;
    }
    function closeLightbox() {
        lightboxIndex.value = -1;
    }
    function goTo(i) {
        lightboxIndex.value = i;
    }
    function lightboxStep(dir) {
        const n = galleryShots.value.length;
        if (!n) return;
        lightboxIndex.value = (lightboxIndex.value + dir + n) % n;
    }

    /* Size each zoom frame to the image's real aspect ratio, capped to
   the viewport, so wide/tall screenshots are never distorted. */
    function shotStyle(src) {
        const d = shotDims[src];
        const ratio = d ? d.w / d.h : 16 / 10;
        return {
            width: `min(100%, calc(76vh * ${ratio}))`,
            aspectRatio: String(ratio),
        };
    }
    function preloadDims(shots) {
        for (const shot of shots) {
            if (shotDims[shot.src]) continue;
            const im = new Image();
            im.onload = () => {
                shotDims[shot.src] = {
                    w: im.naturalWidth || 16,
                    h: im.naturalHeight || 10,
                };
            };
            im.src = shot.src;
        }
    }
    watch(galleryShots, (shots) => preloadDims(shots), { immediate: true });

    watch(activeCase, (val) => {
        document.body.style.overflow = val ? "hidden" : "";
        if (val) nextTick(() => modalClose.value && modalClose.value.focus());
    });

    /* ---------------------------------------------------------------- */
    /* Scroll / resize                                                  */
    /* ---------------------------------------------------------------- */
    function onScroll() {
        if (scrollRaf) return;
        scrollRaf = requestAnimationFrame(() => {
            scrollRaf = null;
            const s = window.scrollY > 24;
            if (s !== scrolled.value) scrolled.value = s;
            revealSweep();
            spySweep();
        });
    }
    function onResize() {
        if (window.innerWidth >= 1024 && menuOpen.value) menuOpen.value = false;
    }

    /* Scroll reveal — a plain scroll sweep (not IntersectionObserver) so that
   sections jumped over via anchor links still reveal reliably. */
    function revealSweep() {
        const trigger = window.innerHeight * 0.92;
        revealEls = revealEls.filter((el) => {
            if (el.getBoundingClientRect().top < trigger) {
                el.classList.add("reveal-in");
                el.setAttribute("data-revealed", "");
                return false;
            }
            return true;
        });
    }

    /* Active section (scroll spy) */
    function spySweep() {
        const mid = window.innerHeight * 0.35;
        let current = sections[0] && sections[0].id;
        for (const sec of sections) {
            if (sec.getBoundingClientRect().top - mid <= 0) current = sec.id;
        }
        if (current && current !== activeSection.value)
            activeSection.value = current;
    }

    function setupObservers() {
        const reduce = window.matchMedia(
            "(prefers-reduced-motion: reduce)",
        ).matches;
        sections = Array.from(document.querySelectorAll("main section[id]"));

        if (reduce) {
            document.querySelectorAll("[data-reveal]").forEach((el) => {
                el.classList.add("reveal-in");
                el.setAttribute("data-revealed", "");
            });
            revealEls = [];
        } else {
            revealEls = Array.from(document.querySelectorAll("[data-reveal]"));
            revealSweep();
        }
        spySweep();
    }

    /* ---------------------------------------------------------------- */
    /* Ambient orbit field behind the portrait                          */
    /* ---------------------------------------------------------------- */
    function startFlow() {
        const cv = flow.value;
        if (!cv) return;
        const ctx = cv.getContext("2d");
        const reduce = window.matchMedia(
            "(prefers-reduced-motion: reduce)",
        ).matches;
        const accent = "#4F46E5";

        const rings = [
            { rx: 0.46, ry: 0.3, rot: -0.34, speed: 0.16, dots: 2, w: 1.1 },
            { rx: 0.33, ry: 0.45, rot: 0.62, speed: -0.11, dots: 1, w: 1.0 },
            { rx: 0.53, ry: 0.53, rot: 0.14, speed: 0.07, dots: 3, w: 0.8 },
        ];

        let W = 0,
            H = 0,
            dpr = 1,
            cx = 0,
            cy = 0,
            R = 0;

        const resize = () => {
            const rect = cv.getBoundingClientRect();
            dpr = Math.min(window.devicePixelRatio || 1, 2);
            W = rect.width;
            H = rect.height;
            cv.width = Math.max(1, W * dpr);
            cv.height = Math.max(1, H * dpr);
            ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
            cx = W / 2;
            cy = H / 2;
            R = Math.min(W, H);
        };
        resize();
        flowRo = new ResizeObserver(resize);
        flowRo.observe(cv);

        const draw = (now) => {
            const t = reduce ? 4.2 : now / 1000;
            const isDark = dark.value;
            ctx.clearRect(0, 0, W, H);

            // soft breathing glow
            const gr = ctx.createRadialGradient(cx, cy, 0, cx, cy, R * 0.62);
            const gA = (isDark ? 0.3 : 0.17) + Math.sin(t * 0.5) * 0.03;
            gr.addColorStop(
                0,
                accent +
                    Math.round(gA * 255)
                        .toString(16)
                        .padStart(2, "0"),
            );
            gr.addColorStop(1, accent + "00");
            ctx.fillStyle = gr;
            ctx.fillRect(0, 0, W, H);

            // drifting dot field
            const step = Math.max(20, R * 0.055);
            ctx.fillStyle = isDark
                ? "rgba(203,213,225,0.5)"
                : "rgba(17,19,24,0.4)";
            for (let x = step / 2; x < W; x += step) {
                for (let y = step / 2; y < H; y += step) {
                    const d = Math.hypot(x - cx, y - cy) / (R * 0.72);
                    if (d > 1) continue;
                    const wave = Math.sin(t * 0.7 + (x + y) * 0.012);
                    ctx.globalAlpha = (1 - d) * (0.34 + wave * 0.24);
                    const r = 1.05 + wave * 0.5;
                    ctx.beginPath();
                    ctx.arc(
                        x,
                        y + wave * 2.2,
                        Math.max(0.3, r),
                        0,
                        Math.PI * 2,
                    );
                    ctx.fill();
                }
            }
            ctx.globalAlpha = 1;

            // orbit rings + travelling lights
            rings.forEach((ring, i) => {
                const rx = R * ring.rx,
                    ry = R * ring.ry,
                    rot = ring.rot + t * ring.speed * 0.12;
                ctx.save();
                ctx.translate(cx, cy);
                ctx.rotate(rot);
                ctx.strokeStyle = isDark
                    ? "rgba(148,163,184,0.22)"
                    : "rgba(17,19,24,0.14)";
                ctx.lineWidth = ring.w * 0.9;
                ctx.setLineDash(i === 2 ? [2, 8] : []);
                ctx.beginPath();
                ctx.ellipse(0, 0, rx, ry, 0, 0, Math.PI * 2);
                ctx.stroke();
                ctx.setLineDash([]);

                for (let k = 0; k < ring.dots; k++) {
                    const a =
                        t * ring.speed * 2 + (k / ring.dots) * Math.PI * 2 + i;
                    for (let s2 = 0; s2 < 16; s2++) {
                        const a2 = a - Math.sign(ring.speed) * s2 * 0.032;
                        const a3 = a - Math.sign(ring.speed) * (s2 + 1) * 0.032;
                        ctx.globalAlpha = (1 - s2 / 16) * 0.42;
                        ctx.strokeStyle = accent;
                        ctx.lineWidth = 2.2 * (1 - s2 / 18);
                        ctx.beginPath();
                        ctx.moveTo(Math.cos(a2) * rx, Math.sin(a2) * ry);
                        ctx.lineTo(Math.cos(a3) * rx, Math.sin(a3) * ry);
                        ctx.stroke();
                    }
                    ctx.globalAlpha = 1;
                    const px = Math.cos(a) * rx,
                        py = Math.sin(a) * ry;
                    const halo = ctx.createRadialGradient(
                        px,
                        py,
                        0,
                        px,
                        py,
                        14,
                    );
                    halo.addColorStop(0, accent + "aa");
                    halo.addColorStop(1, accent + "00");
                    ctx.fillStyle = halo;
                    ctx.beginPath();
                    ctx.arc(px, py, 14, 0, Math.PI * 2);
                    ctx.fill();
                    ctx.fillStyle = isDark ? "#ffffff" : accent;
                    ctx.beginPath();
                    ctx.arc(px, py, 2.6, 0, Math.PI * 2);
                    ctx.fill();
                }
                ctx.restore();
            });

            if (reduce) return;
            flowRaf = requestAnimationFrame(draw);
        };
        flowRaf = requestAnimationFrame(draw);
    }

    /* ---------------------------------------------------------------- */
    /* Lifecycle                                                        */
    /* ---------------------------------------------------------------- */
    onMounted(() => {
        // Theme: stored preference, else system
        let stored = null;
        try {
            stored = localStorage.getItem("theme");
        } catch (e) {}
        dark.value = stored
            ? stored === "dark"
            : window.matchMedia("(prefers-color-scheme: dark)").matches;
        applyTheme();

        onHash = () => {
            menuOpen.value = false;
            // Re-run sweeps a few frames after an anchor jump settles.
            [0, 120, 400].forEach((d) =>
                setTimeout(() => {
                    revealSweep();
                    spySweep();
                }, d),
            );
        };

        window.addEventListener("scroll", onScroll, { passive: true });
        window.addEventListener("resize", onResize);
        window.addEventListener("keydown", onKeydown);
        window.addEventListener("hashchange", onHash);

        nextTick(() => {
            setupObservers();
            startFlow();
        });
    });

    onUnmounted(() => {
        window.removeEventListener("scroll", onScroll);
        window.removeEventListener("resize", onResize);
        window.removeEventListener("keydown", onKeydown);
        window.removeEventListener("hashchange", onHash);
        clearTimeout(sendTimer);
        if (flowRaf) cancelAnimationFrame(flowRaf);
        if (flowRo) flowRo.disconnect();
        document.body.style.overflow = "";
    });
</script>
