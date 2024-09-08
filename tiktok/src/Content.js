import { useContext } from "react";
import { ThemeContext } from "./ThemeContext";

function Content() {
    const context = useContext(ThemeContext);

    return (
        <h1 className={context.theme}>
            Content
        </h1>
    );
}

export default Content;
