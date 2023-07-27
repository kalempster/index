import { Component, For, createEffect, createSignal } from "solid-js";
import { ProjectsButton } from "./ProjectsButton";
import carboscan from "../assets/carboscan.svg";
import Pokeriniee from "../assets/Pokerinee.svg";
import mpr from "../assets/mpr.png";
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
            title: "carboscan",
            image: () => <Svg url={carboscan} class="w-1/2" />,
            description: `carboscan is an app specifically made to reduce the carbon footprint globally.
        It's purpose was to show what amount of carbon footprint do certain products
        produce, and showing their alternatives.`,
            url: "https://github.com/kalempster/carboscan",
        },
        {
            title: "Pokeriniee",
            image: () => <Svg url={Pokeriniee} class="w-1/2" />,
            description: `Pokeriniee is a web app that simulates online poker with fake chips, it currently has implemented a auth system, accounts and fully featured lobbies.`,
            url: "https://github.com/kalempster/pokerini",
        },
        {
            title: "Mój przyjaciel robot",
            image: () => <img src={mpr} alt="" class="h-full" />,
            description: `Mój przyjaciel robot is an app that targets people with motivation loss and people who want to find a hobby. It displays different events that people can go to, scan a QR code and earn points which they can exchange for rewards.`,
            url: "https://app.mojprzyjacielrobot.pl",
        },
        {
            title: "discord.js-menu-buttons",
            image: () => <img src={npm} alt="" class="h-full" />,
            description: `discord.js-menu-buttons is an npm package I made to simplify creating menus with buttons in discord.js. It was a modified version of a different package that was left unmaintained.`,
            url: "https://www.npmjs.com/package/discord.js-menu-buttons",
        },
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
            class="w-[60%] flex flex-col items-start text-white gap-5 mt-32"
            id="projects"
        >
            <div class="text-6xl font-bold text-primary">
                I do cool stuff,&nbsp;
                <span class="underline">sometimes</span>
            </div>
            <div class="w-full flex justify-center">
                <div class="w-[95%]">
                    Here are some of my cool projects, check them out! Don't
                    take my word for it.
                </div>
            </div>
            <div class="w-full flex justify-center">
                <div class="w-[85%] p-4 rounded-lg flex justify-center gap-10 flex-wrap border border-primary">
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
                    target="_blank"
                    href={currentItem().url}
                    class="w-full h-32 flex justify-center items-center"
                >
                    {currentItem().image({})}
                </a>

                <div class="w-5/12 text-justify [text-align-last:center] text-lg">
                    {currentItem().description}
                </div>
            </div>
        </div>
    );
};

export default Projects;
