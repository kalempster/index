import type { Setter } from "solid-js";

export function ProjectsButton(props: {
    setCurrentlySelected: Setter<HTMLButtonElement | undefined>;
    currentlySelected: {
        (): HTMLButtonElement | undefined;
    };
    isInitial?: boolean;
    text: string;
    onClick: () => any;
}) {
    return (
        <button
            ref={(el) => {
                if (props.isInitial) {
                    el.classList.add("bg-primary");
                    props.setCurrentlySelected(el);
                }
            }}
            onClick={(e) => {
                props.currentlySelected()?.classList.remove("bg-primary");
                e.target.classList.add("bg-primary");
                props.setCurrentlySelected(e.target as HTMLButtonElement);
                props.onClick();
            }}
            class="p-2 hover:bg-primary rounded-lg"
        >
            {props.text}
        </button>
    );
}
