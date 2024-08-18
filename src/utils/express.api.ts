export const fetchMessages = async () => {
    const res = await fetch(
        `${process.env.REACT_APP_CONNECTION_TYPE}://${process.env.REACT_APP_URL}/messages`
    );
    return res.json();
};

export const fetchMessagesAmount = async () => {
    const res = await fetch(
        `${process.env.REACT_APP_CONNECTION_TYPE}://${process.env.REACT_APP_URL}/messages_amount`
    );
    return res.json();
};


export const fetchNewMessage = async (message: string) => {
    await fetch(
        `${process.env.REACT_APP_CONNECTION_TYPE}://${process.env.REACT_APP_URL}/add_message`,
        {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ message }),
        }
    );
};