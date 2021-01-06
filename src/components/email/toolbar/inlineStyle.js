import React from "react";
import {inlineStyles} from "./constants";
import { ToolbarItem, Container } from "./common";
import { RichUtils } from "draft-js";

export function RenderInlineStyles(props) {
    const { editorState, setEditorState } = props;
    //Apply the styles to the text on/off
    const applyStyle = (e, style) => {
        e.preventDefault();
        setEditorState(RichUtils.toggleInlineStyle(editorState, style));
    };

    //Changes the styles of the action buttons based on whether they are toggled or not
    const isActive = style => {
        const currentStyle = editorState.getCurrentInlineStyle();
        return currentStyle.has(style);
    };

    return (
        <Container>
            {inlineStyles.map((item, idx) => {
                return (
                    <ToolbarItem
                        isActive={isActive(item.style)}
                        key={`${item.label}-${idx}`}
                        onClick={e => applyStyle(e, item.style)}
                    >
                        {item.icon || item.label}
                    </ToolbarItem>
                );
            })}
        </Container>
    );
}
