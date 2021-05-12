
export default function parseData(item){
    let date = new Date(item);
    let options = {
        year: 'numeric',
        month: 'numeric',
        day: 'numeric',
        timezone: 'UTC'
    };

    return date.toLocaleString("ru", options);
}