

export const Timer = ({width, hours, minutes, seconds, completed}) => {
    if (completed) {
        return <Completionist />
    } else {
        return (
            <div className="minut">
                <span> {hours} </span> : <span> {minutes} </span> : <span> {seconds} </span>
            </div>
        )
    }
}

const Completionist = () => {
    return <span> Time Expired </span>
}