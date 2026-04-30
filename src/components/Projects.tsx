import { Component, For, createEffect, createSignal } from "solid-js";
import { ProjectsButton } from "./ProjectsButton";
import Pokeriniee from "../assets/Pokerinee.svg";
import osds from "../assets/osds.svg";
import npm from "../assets/1200px-Npm-logo.svg.png";

import { Svg } from "./Svg";
const Projects = () => {
    const [currentlySelected, setCurrentlySelected] =
        createSignal<HTMLButtonElement>();

    const sections: {
        title: string;
        image: Component;
        description: string;
        url: string;
    }[] = [
        {
            title: "osds",
            image: () => <Svg url={osds} class="w-1/3" />,
            description: `OSDS is a self-hosted donation management system that integrates Stripe for payments and ngrok for secure tunneling, designed to work seamlessly with OBS for live streamers.`,
            url: "https://github.com/kalempster/osds"
        },
       
        {
            title: "Pokeriniee",
            image: () => <Svg url={Pokeriniee} class="w-1/2" />,
            description: `Pokeriniee is a web app that simulates online poker with fake chips, it currently has implemented a auth system, accounts and fully featured lobbies.`,
            url: "https://github.com/kalempster/pokerinee"
        },
       
        {
            title: "discord.js-menu-buttons",
            image: () => <img src={npm} alt="" class="h-full" />,
            description: `discord.js-menu-buttons is an npm package I made to simplify creating menus with buttons in discord.js. It was a modified version of a different package that was left unmaintained.`,
            url: "https://www.npmjs.com/package/discord.js-menu-buttons"
        }
    ];

    const [currentItem, setCurrentItem] = createSignal<{
        title: string;
        image: Component;
        description: string;
        url: string;
    }>(sections[0]!);

    createEffect(() => {
        console.log(currentlySelected());
    });

    return (
        <div
            class="w-[90%] lg:w-[60%] flex flex-col items-start text-white gap-5 mt-32"
            id="projects">
            <div
                data-aos="fade-right"
                data-aos-duration="1000"
                class="text-4xl lg:text-6xl font-bold text-primary">
                I do cool stuff,&nbsp;
                <span class="underline">sometimes</span>
            </div>
            <div
                class="w-full flex justify-center"
                data-aos="fade-right"
                data-aos-duration="1000"
                data-aos-delay="200">
                <div class="base w-[95%]">
                    Here are some of my cool projects, check them out! Don't
                    take my word for it.
                </div>
            </div>
            <div class="w-full flex justify-center">
                <div
                    data-aos="fade-right"
                    data-aos-duration="1000"
                    data-aos-delay="400"
                    class="w-[90%] p-4 rounded-lg flex flex-col lg:flex-row  justify-center gap-2 lg:gap-10 flex-wrap border border-primary">
                    <For each={sections}>
                        {(section, i) => {
                            return (
                                <ProjectsButton
                                    setCurrentlySelected={setCurrentlySelected}
                                    currentlySelected={currentlySelected}
                                    isInitial={i() == 0}
                                    text={section.title}
                                    onClick={() => {
                                        setCurrentItem(() => ({ ...section }));
                                    }}
                                />
                            );
                        }}
                    </For>
                </div>
            </div>
            <div class="w-full flex flex-col gap-5 items-center h-64">
                <a
                    data-aos="fade-up"
                    data-aos-duration="1000"
                    data-aos-delay="200"
                    target="_blank"
                    href={currentItem().url}
                    class="w-full h-32 flex justify-center items-center">
                    {currentItem().image({})}
                </a>

                <div
                    data-aos="fade-up"
                    data-aos-duration="1000"
                    data-aos-delay="600"
                    class="w-full lg:w-5/12 text-justify [text-align-last:center] text-lg">
                    {currentItem().description}
                </div>
            </div>
        </div>
    );
};

export default Projects;
