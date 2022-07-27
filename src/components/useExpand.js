import { useState } from "react";

export default function useExpand(initial) {
    const [expanded, changeExpanded] = useState(initial);
    function toggle() {
        changeExpanded(!expanded)
    }
    return [expanded, toggle]
}
