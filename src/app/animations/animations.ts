import { animation, style, animate, trigger, transition, useAnimation } from '@angular/animations';

export const inOutAnimation= trigger("inOutPaneAnimation", [
    transition(":enter", [
        style({ opacity: 0, transform: "translateX(100%)"}), //apply default styles before animation starts
        animate(
            "550ms ease-in-out",
            style({ opacity: 1, transform: "translateX(0)" })
        )
    ]),
    transition(":leave", [
        style({ opacity: 1, transform: "translateX(0)"}), //apply default styles before animation starts
        animate(
            "400ms ease-in-out",
            style({ opacity: 0, transform: "translateX(100%)" })
        )
    ])
])


export const zoomInAnimation= trigger("zoominAnimation", [
    transition(":enter", [
        style({ opacity: 0, transform: "scale(0)"}), //apply default styles before animation starts
        animate(
            "300ms ease-in-out",
            style({ opacity: 1, transform: "scale(1)" })
        )
    ]),
    transition(":leave", [
        style({ opacity: 1, transform: "scale(1)"}), //apply default styles before animation starts
        animate(
            "400ms ease-in-out",
            style({ opacity: 0, transform: "scale(0)" })
        )
    ])
])

export const zoomInDelayAnimation= trigger("zoominDelayAnimation", [
    transition(":enter", [
        style({ opacity: 0, transform: "scale(0)"}), //apply default styles before animation starts
        animate(
            "300ms ease-in-out",
            style({ opacity: 1, transform: "scale(1)" })
        )
    ]),
    transition(":leave", [
        style({ opacity: 1, transform: "scale(0)"}), //apply default styles before animation starts
        animate(
            "900ms ease-in-out",
            style({ opacity: 0, transform: "scale(2)" })
        )
    ])
])

export const spinShow= trigger("spinShow", [
    transition(":enter", [
        style({ opacity: 0, transform: "scale(0) rotateY(0deg)"}), //apply default styles before animation starts
        animate(
            "300ms ease-in-out",
            style({ opacity: 1, transform: "scale(1) rotateY(1080deg)"})
        ),
        style({backgroundColor:"#0d1b1ea9"})
    ]),
    transition(":leave", [
        style({ opacity: 1, transform: "scale(1)"}), //apply default styles before animation starts
        animate(
            "300ms ease-in-out",
            style({ opacity: 0, transform: "scale(0)" })
        )
    ])
])


