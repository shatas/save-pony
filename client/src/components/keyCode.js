export const errorText = 'Something went wrong.'

export const keycodeToDirection = (keycode) => {
    let direction = null;
    switch (keycode){

        // left arrow
        case 37:
            direction = "west";
            break;

        // up arrow
        case 38:
            direction = "north";
            break;

        // right arrow
        case 39:
            direction = "east";
            break;

        // down arrow
        case 40:
            direction = "south";
            break;

        default: break;
    }
    return direction;
}

