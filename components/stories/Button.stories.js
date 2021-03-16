import React from "react";
import { action } from "@storybook/addon-actions";
import { withKnobs, text, boolean } from "@storybook/addon-knobs";

import Button from "../UI/Button";

require("../../styles/UI/Button/Button.scss");

export default {
    title: "Button",
    component: Button,
    decorators: [withKnobs],
};


export const Text = () => (
    <Button disabled={boolean("Disabled", false)} onClick={action("clicked")}>
        {text("Label", "Hello")}
    </Button>
);
