import { Component, For, createEffect, createSignal } from "solid-js";
import { ProjectsButton } from "./ProjectsButton";
import carboscan from "../carboscan.svg";
import { Svg } from "../Svg";
const Projects = () => {
    const [currentlySelected, setCurrentlySelected] = createSignal<HTMLButtonElement>();

    const sections: { title: string; image: Component; description: string }[] = [
        {
            title: "carboscan",
            image: () => <Svg url={carboscan} class="w-1/2" />,
            description: `carboscan is an app specifically made to reduce the carbon footprint globally.
        It's purpose was to show what amount of carbon footprint do certain products
        produce, and showing their alternatives.`,
        },
        {
            title: "carboscan",
            image: () => <Svg url={carboscan} class="w-1/2" />,
            description: `carboscan is an app specifically made to reduce the carbon footprint globally.
        It's purpose was to show what amount of carbon footprint do certain products
        produce, and showing their alternatives.`,
        },
        {
            title: "carboscan",
            image: () => <Svg url={carboscan} class="w-1/2" />,
            description: `carboscan is an app specifically made to reduce the carbon footprint globally.
        It's purpose was to show what amount of carbon footprint do certain products
        produce, and showing their alternatives.`,
        },
        {
            title: "carboscan",
            image: () => <Svg url={carboscan} class="w-1/2" />,
            description: `carboscan is an app specifically made to reduce the carbon footprint globally.
        It's purpose was to show what amount of carbon footprint do certain products
        produce, and showing their alternatives.`,
        },
    ];

    const [currentItem, setCurrentItem] = createSignal<{
        title: string;
        image: Component;
        description: string;
    }>(sections[0]!);

    createEffect(() => {
        console.log(currentlySelected());
    });

    return (

        <div class="w-[60%] flex flex-col items-start text-white gap-5" id="projects">
            <div class="text-6xl font-bold text-primary">
                I do cool stuff,&nbsp;
                <span class="underline">sometimes</span>
            </div>
            <div class="w-full flex justify-center">
                <div class="w-[95%]">
                    Here are some of my cool projects, check them out! Don't take my word for it.
                </div>
            </div>
            <div class="w-full flex justify-center">
                <div class="w-[85%] p-4 rounded-lg flex justify-center gap-10 flex-wrap border border-red-700">
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
            <div class="w-full flex flex-col gap-5 items-center">
                <div class="w-full h-32 flex justify-center items-center">
                    {currentItem().image({})}
                </div>

                <div class="w-5/12 text-justify [text-align-last:center] text-lg">
                    {currentItem().description}
                </div>
            </div>
        </div>
    );
};

export default Projects;
