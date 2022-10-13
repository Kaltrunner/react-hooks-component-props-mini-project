function Article( { title, date = "January 1, 1970", preview, minutes } ) {
    let minutesToRead = "  .  ";

    if (minutes < 30) {
        const numberOfCoffees = Math.ceil(minutes/5)
        minutesToRead += `${"☕️".repeat(numberOfCoffees)} ${minutes}`;
    } else {
        const numberOfBentos = Math.ceil(minutes / 10);
        minutesToRead += `${"🍱".repeat(numberOfBentos)} ${minutes}`;
    }

    minutesToRead += " min read";

    return (
        <article>
            <h3>{title}</h3>
            <small>{date + minutesToRead}</small>
            <p>{preview}</p>
        </article>
    )
}

export default Article;