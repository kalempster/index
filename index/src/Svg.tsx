import { createSignal, JSX } from "solid-js";

const svgCache: { [url: string]: string | null } = {};

async function fetchSVG(url: string) {
    try {
        const response = await fetch(url);
        return await response.text();
    } catch (error) {
        console.log(error);

        return null;
    }
}

export function Svg({ url, ...rest }: { url: string } & JSX.HTMLAttributes<HTMLDivElement>) {
    let [cachedSVG, setCachedSVG] = createSignal<string | null>(null);

    if (!svgCache[url]) {
        (async () => {
            const svgContent = await fetchSVG(url);
            svgCache[url] = svgContent;
            setCachedSVG(svgContent);
        })();
    }
    //Overriding typescript because we know the item exists based on the if above
    else setCachedSVG(svgCache[url]!);

    return <div {...rest}>{cachedSVG() !== null ? <div innerHTML={cachedSVG()!} /> : <></>}</div>;
}
