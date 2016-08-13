
export const capitalize_words = (text) => {
    return text.replace(/\w\S*/g, (word) => {
        let [first_letter, rest] = [word.charAt(0), word.substr(1)];
        return first_letter.toUpperCase() + rest.toLowerCase();
    });
};